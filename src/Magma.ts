/**
 * A `Magma` is a pair `(A, concat)` in which `A` is a non-empty set and `concat` is a binary operation on `A`
 *
 * See [Semigroup](https://gcanti.github.io/fp-ts/modules/Semigroup.ts.html) for some instances.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */

import { type Endomorphism } from './Endomorphism'
import { type Predicate } from './Predicate'

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
export interface Magma<A> {
  readonly concat: (x: A, y: A) => A
}

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * The dual of a `Magma`, obtained by swapping the arguments of `concat`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { reverse, concatAll } from '@fp-tx/core/Magma'
 * import * as N from '@fp-tx/core/number'
 *
 * const subAll = concatAll(reverse(N.MagmaSub))(0)
 *
 * assert.deepStrictEqual(subAll([1, 2, 3]), 2)
 * ```
 *
 * @public
 */
export const reverse = <A>(M: Magma<A>): Magma<A> => ({
  concat: (first, second) => M.concat(second, first),
})

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const filterFirst =
  <A>(predicate: Predicate<A>) =>
  (M: Magma<A>): Magma<A> => ({
    concat: (first, second) => (predicate(first) ? M.concat(first, second) : second),
  })

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const filterSecond =
  <A>(predicate: Predicate<A>) =>
  (M: Magma<A>): Magma<A> => ({
    concat: (first, second) => (predicate(second) ? M.concat(first, second) : first),
  })

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const endo =
  <A>(f: Endomorphism<A>) =>
  (M: Magma<A>): Magma<A> => ({
    concat: (first, second) => M.concat(f(first), f(second)),
  })

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the provided `startWith` value.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { concatAll } from '@fp-tx/core/Magma'
 * import * as N from '@fp-tx/core/number'
 *
 * const subAll = concatAll(N.MagmaSub)(0)
 *
 * assert.deepStrictEqual(subAll([1, 2, 3]), -6)
 * ```
 *
 * @public
 */
export const concatAll =
  <A>(M: Magma<A>) =>
  (startWith: A) =>
  (as: ReadonlyArray<A>): A =>
    as.reduce((a, acc) => M.concat(a, acc), startWith)
