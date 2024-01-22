/**
 * The `Ring` class is for types that support addition, multiplication, and subtraction operations.
 *
 * Instances must satisfy the following law in addition to the `Semiring` laws:
 *
 * - Additive inverse: `a - a <-> (zero - a) + a <-> zero`
 *
 * Adapted from https://github.com/purescript/purescript-prelude/blob/master/src/Data/Ring.purs
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { getRing } from './function'
import { type Semiring } from './Semiring'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface Ring<A> extends Semiring<A> {
  readonly sub: (x: A, y: A) => A
}

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Given a tuple of `Ring`s returns a `Ring` for the tuple
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { tuple } from '@fp-tx/core/Ring'
 * import * as N from '@fp-tx/core/number'
 *
 * const R = tuple(N.Field, N.Field, N.Field)
 * assert.deepStrictEqual(R.add([1, 2, 3], [4, 5, 6]), [5, 7, 9])
 * assert.deepStrictEqual(R.mul([1, 2, 3], [4, 5, 6]), [4, 10, 18])
 * assert.deepStrictEqual(R.one, [1, 1, 1])
 * assert.deepStrictEqual(R.sub([1, 2, 3], [4, 5, 6]), [-3, -3, -3])
 * assert.deepStrictEqual(R.zero, [0, 0, 0])
 * ```
 *
 * @public
 */
export const tuple = <A extends ReadonlyArray<unknown>>(...rings: { [K in keyof A]: Ring<A[K]> }): Ring<Readonly<A>> =>
  ({
    add: (x: any, y: any) => rings.map((R, i) => R.add(x[i], y[i])),
    zero: rings.map(R => R.zero),
    mul: (x: any, y: any) => rings.map((R, i) => R.mul(x[i], y[i])),
    one: rings.map(R => R.one),
    sub: (x: any, y: any) => rings.map((R, i) => R.sub(x[i], y[i])),
  }) as any

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * `negate x` can be used as a shorthand for `zero - x`
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const negate =
  <A>(R: Ring<A>) =>
  (a: A): A =>
    R.sub(R.zero, a)

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`tuple`](#tuple) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const getTupleRing: <T extends ReadonlyArray<Ring<any>>>(
  ...rings: T
) => Ring<{ [K in keyof T]: T[K] extends Ring<infer A> ? A : never }> = tuple as any

/**
 * Use [`getRing`](./function.ts.html#getring) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const getFunctionRing: <A, B>(R: Ring<B>) => Ring<(a: A) => B> = getRing
