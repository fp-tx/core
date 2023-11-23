/**
 * A `Magma` is a pair `(A, concat)` in which `A` is a non-empty set and `concat` is a binary operation on `A`
 *
 * See [Semigroup](https://gcanti.github.io/fp-ts/modules/Semigroup.ts.html) for some instances.
 *
 * @since 2.0.0
 */

import { type Endomorphism } from './Endomorphism'
import { type Predicate } from './Predicate'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
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
 * @since 2.11.0
 * @example
 *   import { reverse, concatAll } from 'fp-ts/Magma'
 *   import * as N from 'fp-ts/number'
 *
 *   const subAll = concatAll(reverse(N.MagmaSub))(0)
 *
 *   assert.deepStrictEqual(subAll([1, 2, 3]), 2)
 */
export const reverse = <A>(M: Magma<A>): Magma<A> => ({
  concat: (first, second) => M.concat(second, first),
})

/** @since 2.11.0 */
export const filterFirst =
  <A>(predicate: Predicate<A>) =>
  (M: Magma<A>): Magma<A> => ({
    concat: (first, second) => (predicate(first) ? M.concat(first, second) : second),
  })

/** @since 2.11.0 */
export const filterSecond =
  <A>(predicate: Predicate<A>) =>
  (M: Magma<A>): Magma<A> => ({
    concat: (first, second) => (predicate(second) ? M.concat(first, second) : first),
  })

/** @since 2.11.0 */
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
 * @since 2.11.0
 * @example
 *   import { concatAll } from 'fp-ts/Magma'
 *   import * as N from 'fp-ts/number'
 *
 *   const subAll = concatAll(N.MagmaSub)(0)
 *
 *   assert.deepStrictEqual(subAll([1, 2, 3]), -6)
 */
export const concatAll =
  <A>(M: Magma<A>) =>
  (startWith: A) =>
  (as: ReadonlyArray<A>): A =>
    as.reduce((a, acc) => M.concat(a, acc), startWith)
