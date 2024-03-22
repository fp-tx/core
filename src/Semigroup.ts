/**
 * If a type `A` can form a `Semigroup` it has an **associative** binary operation.
 *
 * ```ts
 * interface Semigroup<A> {
 *   readonly concat: (x: A, y: A) => A
 * }
 * ```
 *
 * Associativity means the following equality must hold for any choice of `x`, `y`, and `z`.
 *
 * A common example of a semigroup is the type `string` with the operation `+`.
 *
 * ```ts
 * import { Semigroup } from '@fp-tx/core/Semigroup'
 *
 * const semigroupString: Semigroup<string> = {
 *   concat: (x, y) => x + y,
 * }
 *
 * const x = 'x'
 * const y = 'y'
 * const z = 'z'
 *
 * semigroupString.concat(x, y) // 'xy'
 *
 * semigroupString.concat(x, semigroupString.concat(y, z)) // 'xyz'
 *
 * semigroupString.concat(semigroupString.concat(x, y), z) // 'xyz'
 * ```
 *
 * _Adapted from https://typelevel.org/cats_
 *
 * @meta
 * {@since 1.0.0}
 * @packageDocumentation
 */
import { getSemigroup, identity } from './function'
import * as _ from './internal'
import * as M from './Magma'
import { type Magma } from './Magma'
import * as Or from './Ord'
import { type Ord } from './Ord'
import { type ReadonlyRecord } from './ReadonlyRecord'

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
export interface Semigroup<A> extends Magma<A> {}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Get a semigroup where `concat` will return the minimum, based on the provided order.
 *
 * @example
 *
 * ```typescript
 * import * as N from '@fp-tx/core/number'
 * import * as S from '@fp-tx/core/Semigroup'
 *
 * const S1 = S.min(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 1)
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const min = <A>(O: Ord<A>): Semigroup<A> => ({
  concat: Or.min(O),
})

/**
 * Get a semigroup where `concat` will return the maximum, based on the provided order.
 *
 * @example
 *
 * ```typescript
 * import * as N from '@fp-tx/core/number'
 * import * as S from '@fp-tx/core/Semigroup'
 *
 * const S1 = S.max(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 2)
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const max = <A>(O: Ord<A>): Semigroup<A> => ({
  concat: Or.max(O),
})

/**
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const constant = <A>(a: A): Semigroup<A> => ({
  concat: () => a,
})

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * The dual of a `Semigroup`, obtained by swapping the arguments of `concat`.
 *
 * @example
 *
 * ```typescript
 * import { reverse } from '@fp-tx/core/Semigroup'
 * import * as S from '@fp-tx/core/string'
 *
 * assert.deepStrictEqual(reverse(S.Semigroup).concat('a', 'b'), 'ba')
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reverse: <A>(S: Semigroup<A>) => Semigroup<A> = M.reverse

/**
 * Given a struct of semigroups returns a semigroup for the struct.
 *
 * @example
 *
 * ```typescript
 * import { struct } from '@fp-tx/core/Semigroup'
 * import * as N from '@fp-tx/core/number'
 *
 * interface Point {
 *   readonly x: number
 *   readonly y: number
 * }
 *
 * const S = struct<Point>({
 *   x: N.SemigroupSum,
 *   y: N.SemigroupSum,
 * })
 *
 * assert.deepStrictEqual(S.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const struct = <A>(semigroups: { [K in keyof A]: Semigroup<A[K]> }): Semigroup<{
  readonly [K in keyof A]: A[K]
}> => ({
  concat: (first, second) => {
    const r: A = {} as any
    for (const k in semigroups) {
      if (_.has.call(semigroups, k)) {
        r[k] = semigroups[k].concat(first[k], second[k])
      }
    }
    return r
  },
})

/**
 * Given a tuple of semigroups returns a semigroup for the tuple.
 *
 * @example
 *
 * ```typescript
 * import { tuple } from '@fp-tx/core/Semigroup'
 * import * as B from '@fp-tx/core/boolean'
 * import * as N from '@fp-tx/core/number'
 * import * as S from '@fp-tx/core/string'
 *
 * const S1 = tuple(S.Semigroup, N.SemigroupSum)
 * assert.deepStrictEqual(S1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const S2 = tuple(S.Semigroup, N.SemigroupSum, B.SemigroupAll)
 * assert.deepStrictEqual(S2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tuple = <A extends ReadonlyArray<unknown>>(
  ...semigroups: { [K in keyof A]: Semigroup<A[K]> }
): Semigroup<Readonly<A>> => ({
  concat: (first, second) => semigroups.map((s, i) => s.concat(first[i], second[i])) as any,
})

/**
 * Between each pair of elements insert `middle`.
 *
 * @example
 *
 * ```typescript
 * import { intercalate } from '@fp-tx/core/Semigroup'
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * const S1 = pipe(S.Semigroup, intercalate(' + '))
 *
 * assert.strictEqual(S1.concat('a', 'b'), 'a + b')
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const intercalate =
  <A>(middle: A) =>
  (S: Semigroup<A>): Semigroup<A> => ({
    concat: (x, y) => S.concat(x, S.concat(middle, y)),
  })

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * Always return the first argument.
 *
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/Semigroup'
 *
 * assert.deepStrictEqual(S.first<number>().concat(1, 2), 1)
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const first = <A = never>(): Semigroup<A> => ({ concat: identity })

/**
 * Always return the last argument.
 *
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/Semigroup'
 *
 * assert.deepStrictEqual(S.last<number>().concat(1, 2), 2)
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const last = <A = never>(): Semigroup<A> => ({ concat: (_, y) => y })

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the provided `startWith` value.
 *
 * @example
 *
 * ```typescript
 * import { concatAll } from '@fp-tx/core/Semigroup'
 * import * as N from '@fp-tx/core/number'
 *
 * const sum = concatAll(N.SemigroupSum)(0)
 *
 * assert.deepStrictEqual(sum([1, 2, 3]), 6)
 * assert.deepStrictEqual(sum([]), 0)
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const concatAll: <A>(S: Semigroup<A>) => (startWith: A) => (as: ReadonlyArray<A>) => A = M.concatAll

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use `void` module instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const semigroupVoid: Semigroup<void> = constant<void>(undefined)

/**
 * Use [`getAssignSemigroup`](./struct#getAssignSemigroup) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getObjectSemigroup = <A extends object = never>(): Semigroup<A> => ({
  concat: (first, second) => Object.assign({}, first, second),
})

/**
 * Use [`last`](#last) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getLastSemigroup = last

/**
 * Use [`first`](#first) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getFirstSemigroup = first

/**
 * Use [`tuple`](#tuple) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getTupleSemigroup: <T extends ReadonlyArray<Semigroup<any>>>(
  ...semigroups: T
) => Semigroup<{ [K in keyof T]: T[K] extends Semigroup<infer A> ? A : never }> = tuple as any

/**
 * Use [`struct`](#struct) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getStructSemigroup: <O extends ReadonlyRecord<string, any>>(semigroups: {
  [K in keyof O]: Semigroup<O[K]>
}) => Semigroup<O> = struct

/**
 * Use [`reverse`](#reverse) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getDualSemigroup = reverse

/**
 * Use [`max`](#max) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getJoinSemigroup = max

/**
 * Use [`min`](#min) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getMeetSemigroup = min

/**
 * Use [`intercalate`](#intercalate) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getIntercalateSemigroup = intercalate

/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function fold<A>(S: Semigroup<A>): {
  (startWith: A): (as: ReadonlyArray<A>) => A
  (startWith: A, as: ReadonlyArray<A>): A
}
export function fold<A>(S: Semigroup<A>): (startWith: A, as?: ReadonlyArray<A>) => A | ((as: ReadonlyArray<A>) => A) {
  const concatAllS = concatAll(S)
  return (startWith, as?) => (as === undefined ? concatAllS(startWith) : concatAllS(startWith)(as))
}

/**
 * Use [`SemigroupAll`](./boolean#SemigroupAll) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const semigroupAll: Semigroup<boolean> = {
  concat: (x, y) => x && y,
}

/**
 * Use [`SemigroupAny`](./boolean#SemigroupAny) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const semigroupAny: Semigroup<boolean> = {
  concat: (x, y) => x || y,
}

/**
 * Use [`getSemigroup`](./function#getSemigroup) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getFunctionSemigroup: <S>(S: Semigroup<S>) => <A = never>() => Semigroup<(a: A) => S> = getSemigroup

/**
 * Use [`Semigroup`](./string#Semigroup) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const semigroupString: Semigroup<string> = {
  concat: (x, y) => x + y,
}

/**
 * Use [`SemigroupSum`](./number#SemigroupSum) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const semigroupSum: Semigroup<number> = {
  concat: (x, y) => x + y,
}

/**
 * Use [`SemigroupProduct`](./number#SemigroupProduct) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const semigroupProduct: Semigroup<number> = {
  concat: (x, y) => x * y,
}
