/** @since 2.2.0 */
import type * as BA from './BooleanAlgebra'
import type * as E from './Eq'
import { type Lazy } from './function'
import { type Monoid } from './Monoid'
import type * as O from './Ord'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import type * as S from './Show'

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 * @category Refinements
 */
export const isBoolean: Refinement<unknown, boolean> = (u: unknown): u is boolean => typeof u === 'boolean'

/**
 * Less strict version of [`match`](#match).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @since 2.10.0
 * @category Pattern matching
 */
export const matchW =
  <A, B>(onFalse: Lazy<A>, onTrue: Lazy<B>) =>
  (value: boolean): A | B =>
    value ? onTrue() : onFalse()

/**
 * Alias of [`matchW`](#matchw).
 *
 * @since 2.10.0
 * @category Pattern matching
 */
export const foldW = matchW

/**
 * Defines the fold over a boolean value. Takes two thunks `onTrue`, `onFalse` and a `boolean` value. If `value` is
 * false, `onFalse()` is returned, otherwise `onTrue()`.
 *
 * @since 2.10.0
 * @category Pattern matching
 * @example
 *   import { some, map } from 'fp-ts/Option'
 *   import { pipe } from 'fp-ts/function'
 *   import { match } from 'fp-ts/boolean'
 *
 *   assert.deepStrictEqual(
 *     pipe(
 *       some(true),
 *       map(
 *         match(
 *           () => 'false',
 *           () => 'true',
 *         ),
 *       ),
 *     ),
 *     some('true'),
 *   )
 */
export const match: <A>(onFalse: Lazy<A>, onTrue: Lazy<A>) => (value: boolean) => A = foldW

/**
 * Alias of [`match`](#match).
 *
 * @since 2.2.0
 * @category Pattern matching
 */
export const fold = match

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @since 2.10.0
 * @category Instances
 */
export const Eq: E.Eq<boolean> = {
  equals: (first, second) => first === second,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const BooleanAlgebra: BA.BooleanAlgebra<boolean> = {
  meet: (first, second) => first && second,
  join: (first, second) => first || second,
  zero: false,
  one: true,
  implies: (first, second) => !first || second,
  not: b => !b,
}

/**
 * `boolean` semigroup under conjunction.
 *
 * @since 2.10.0
 * @category Instances
 * @example
 *   import { SemigroupAll } from 'fp-ts/boolean'
 *
 *   assert.deepStrictEqual(SemigroupAll.concat(true, true), true)
 *   assert.deepStrictEqual(SemigroupAll.concat(true, false), false)
 */
export const SemigroupAll: Semigroup<boolean> = {
  concat: (first, second) => first && second,
}

/**
 * `boolean` semigroup under disjunction.
 *
 * @since 2.10.0
 * @category Instances
 * @example
 *   import { SemigroupAny } from 'fp-ts/boolean'
 *
 *   assert.deepStrictEqual(SemigroupAny.concat(true, true), true)
 *   assert.deepStrictEqual(SemigroupAny.concat(true, false), true)
 *   assert.deepStrictEqual(SemigroupAny.concat(false, false), false)
 */
export const SemigroupAny: Semigroup<boolean> = {
  concat: (first, second) => first || second,
}

/**
 * `boolean` monoid under conjunction.
 *
 * The `empty` value is `true`.
 *
 * @since 2.10.0
 * @category Instances
 * @example
 *   import { MonoidAll } from 'fp-ts/boolean'
 *
 *   assert.deepStrictEqual(MonoidAll.concat(true, true), true)
 *   assert.deepStrictEqual(MonoidAll.concat(true, false), false)
 */
export const MonoidAll: Monoid<boolean> = {
  concat: SemigroupAll.concat,
  empty: true,
}

/**
 * `boolean` monoid under disjunction.
 *
 * The `empty` value is `false`.
 *
 * @since 2.10.0
 * @category Instances
 * @example
 *   import { MonoidAny } from 'fp-ts/boolean'
 *
 *   assert.deepStrictEqual(MonoidAny.concat(true, true), true)
 *   assert.deepStrictEqual(MonoidAny.concat(true, false), true)
 *   assert.deepStrictEqual(MonoidAny.concat(false, false), false)
 */
export const MonoidAny: Monoid<boolean> = {
  concat: SemigroupAny.concat,
  empty: false,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const Ord: O.Ord<boolean> = {
  equals: Eq.equals,
  compare: (first, second) =>
    first < second ? -1
    : first > second ? 1
    : 0,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const Show: S.Show<boolean> = {
  show: b => JSON.stringify(b),
}
