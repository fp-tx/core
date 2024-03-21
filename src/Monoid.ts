/**
 * `Monoid` extends the power of `Semigroup` by providing an additional `empty` value.
 *
 * ```ts
 * interface Semigroup<A> {
 *   readonly concat: (x: A, y: A) => A
 * }
 *
 * interface Monoid<A> extends Semigroup<A> {
 *   readonly empty: A
 * }
 * ```
 *
 * This `empty` value should be an identity for the `concat` operation, which means the following equalities hold for
 * any choice of `x`.
 *
 * Many types that form a `Semigroup` also form a `Monoid`, such as `number`s (with `0`) and `string`s (with `''`).
 *
 * ```ts
 * import { Monoid } from '@fp-tx/core/Monoid'
 *
 * const monoidString: Monoid<string> = {
 *   concat: (x, y) => x + y,
 *   empty: '',
 * }
 * ```
 *
 * _Adapted from https://typelevel.org/cats_
 *
 * @meta
 * {@since 1.0.0}
 * @packageDocumentation
 */
import { type Bounded } from './Bounded'
import { type Endomorphism, getMonoid as getEM } from './Endomorphism'
import { getMonoid as getFM } from './function'
import * as _ from './internal'
import { type ReadonlyRecord } from './ReadonlyRecord'
import * as Se from './Semigroup'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Monoid<A> extends Se.Semigroup<A> {
  readonly empty: A
}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Get a monoid where `concat` will return the minimum, based on the provided bounded order.
 *
 * The `empty` value is the `top` value.
 *
 * @example
 *
 * ```typescript
 * import * as N from '@fp-tx/core/number'
 * import * as M from '@fp-tx/core/Monoid'
 *
 * const M1 = M.min(N.Bounded)
 *
 * assert.deepStrictEqual(M1.concat(1, 2), 1)
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const min = <A>(B: Bounded<A>): Monoid<A> => ({
  concat: Se.min(B).concat,
  empty: B.top,
})
/**
 * Get a monoid where `concat` will return the maximum, based on the provided bounded order.
 *
 * The `empty` value is the `bottom` value.
 *
 * @example
 *
 * ```typescript
 * import * as N from '@fp-tx/core/number'
 * import * as M from '@fp-tx/core/Monoid'
 *
 * const M1 = M.max(N.Bounded)
 *
 * assert.deepStrictEqual(M1.concat(1, 2), 2)
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const max = <A>(B: Bounded<A>): Monoid<A> => ({
  concat: Se.max(B).concat,
  empty: B.bottom,
})

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * The dual of a `Monoid`, obtained by swapping the arguments of `concat`.
 *
 * @example
 *
 * ```typescript
 * import { reverse } from '@fp-tx/core/Monoid'
 * import * as S from '@fp-tx/core/string'
 *
 * assert.deepStrictEqual(reverse(S.Monoid).concat('a', 'b'), 'ba')
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reverse = <A>(M: Monoid<A>): Monoid<A> => ({
  concat: Se.reverse(M).concat,
  empty: M.empty,
})

/**
 * Given a struct of monoids returns a monoid for the struct.
 *
 * @example
 *
 * ```typescript
 * import { struct } from '@fp-tx/core/Monoid'
 * import * as N from '@fp-tx/core/number'
 *
 * interface Point {
 *   readonly x: number
 *   readonly y: number
 * }
 *
 * const M = struct<Point>({
 *   x: N.MonoidSum,
 *   y: N.MonoidSum,
 * })
 *
 * assert.deepStrictEqual(M.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const struct = <A>(monoids: { [K in keyof A]: Monoid<A[K]> }): Monoid<{ readonly [K in keyof A]: A[K] }> => {
  const empty: A = {} as any
  for (const k in monoids) {
    if (_.has.call(monoids, k)) {
      empty[k] = monoids[k].empty
    }
  }
  return {
    concat: Se.struct(monoids).concat,
    empty,
  }
}

/**
 * Given a tuple of monoids returns a monoid for the tuple.
 *
 * @example
 *
 * ```typescript
 * import { tuple } from '@fp-tx/core/Monoid'
 * import * as B from '@fp-tx/core/boolean'
 * import * as N from '@fp-tx/core/number'
 * import * as S from '@fp-tx/core/string'
 *
 * const M1 = tuple(S.Monoid, N.MonoidSum)
 * assert.deepStrictEqual(M1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const M2 = tuple(S.Monoid, N.MonoidSum, B.MonoidAll)
 * assert.deepStrictEqual(M2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tuple = <A extends ReadonlyArray<unknown>>(
  ...monoids: { [K in keyof A]: Monoid<A[K]> }
): Monoid<Readonly<A>> =>
  ({
    concat: Se.tuple(...(monoids as any)).concat,
    empty: monoids.map(m => m.empty),
  }) as any

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the monoid `empty` value.
 *
 * @example
 *
 * ```typescript
 * import { concatAll } from '@fp-tx/core/Monoid'
 * import * as N from '@fp-tx/core/number'
 *
 * assert.deepStrictEqual(concatAll(N.MonoidSum)([1, 2, 3]), 6)
 * assert.deepStrictEqual(concatAll(N.MonoidSum)([]), 0)
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const concatAll = <A>(M: Monoid<A>): ((as: ReadonlyArray<A>) => A) => Se.concatAll(M)(M.empty)

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`Monoid`](./void.ts.html#monoid) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const monoidVoid: Monoid<void> = {
  concat: Se.semigroupVoid.concat,
  empty: undefined,
}

/**
 * Use [`tuple`](#tuple) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getTupleMonoid: <T extends ReadonlyArray<Monoid<any>>>(
  ...monoids: T
) => Monoid<{ [K in keyof T]: T[K] extends Se.Semigroup<infer A> ? A : never }> = tuple as any

/**
 * Use [`struct`](#struct) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getStructMonoid: <O extends ReadonlyRecord<string, any>>(monoids: {
  [K in keyof O]: Monoid<O[K]>
}) => Monoid<O> = struct

/**
 * Use [`reverse`](#reverse) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getDualMonoid = reverse

/**
 * Use [`max`](#max) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getJoinMonoid = max

/**
 * Use [`min`](#min) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getMeetMonoid = min

/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fold = concatAll

/**
 * Use [`MonoidAll`](./boolean.ts.html#monoidall) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const monoidAll: Monoid<boolean> = {
  concat: Se.semigroupAll.concat,
  empty: true,
}

/**
 * Use [`MonoidAny`](./boolean.ts.html#monoidany) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const monoidAny: Monoid<boolean> = {
  concat: Se.semigroupAny.concat,
  empty: false,
}

/**
 * Use [`getMonoid`](./function.ts.html#getmonoid) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getFunctionMonoid: <M>(M: Monoid<M>) => <A = never>() => Monoid<(a: A) => M> = getFM

/**
 * Use [`getEndomorphismMonoid`](./function.ts.html#getendomorphismmonoid) instead.
 *
 * **Note**. The execution order in [`getEndomorphismMonoid`](./function.ts.html#getendomorphismmonoid) is reversed.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getEndomorphismMonoid = <A = never>(): Monoid<Endomorphism<A>> => reverse(getEM())

/**
 * Use [`Monoid`](./string.ts.html#monoid) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const monoidString: Monoid<string> = {
  concat: Se.semigroupString.concat,
  empty: '',
}

/**
 * Use [`MonoidSum`](./number.ts.html#monoidsum) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const monoidSum: Monoid<number> = {
  concat: Se.semigroupSum.concat,
  empty: 0,
}

/**
 * Use [`MonoidProduct`](./number.ts.html#monoidproduct) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const monoidProduct: Monoid<number> = {
  concat: Se.semigroupProduct.concat,
  empty: 1,
}
