/** @since 1.0.0 */
import type * as B from './Bounded'
import type * as E from './Eq'
import type * as F from './Field'
import { type Magma } from './Magma'
import { type Monoid } from './Monoid'
import type * as O from './Ord'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import type * as S from './Show'

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category Refinements
 */
export const isNumber: Refinement<unknown, number> = (u: unknown): u is number => typeof u === 'number'

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category Instances
 */
export const Eq: E.Eq<number> = {
  equals: (first, second) => first === second,
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const Ord: O.Ord<number> = {
  equals: Eq.equals,
  compare: (first, second) =>
    first < second ? -1
    : first > second ? 1
    : 0,
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bounded: B.Bounded<number> = {
  equals: Eq.equals,
  compare: Ord.compare,
  top: Infinity,
  bottom: -Infinity,
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const Show: S.Show<number> = {
  show: n => JSON.stringify(n),
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const MagmaSub: Magma<number> = {
  concat: (first, second) => first - second,
}

/**
 * `number` semigroup under addition.
 *
 * @since 1.0.0
 * @category Instances
 * @example
 *   import { SemigroupSum } from 'fp-ts/number'
 *
 *   assert.deepStrictEqual(SemigroupSum.concat(2, 3), 5)
 */
export const SemigroupSum: Semigroup<number> = {
  concat: (first, second) => first + second,
}

/**
 * `number` semigroup under multiplication.
 *
 * @since 1.0.0
 * @category Instances
 * @example
 *   import { SemigroupProduct } from 'fp-ts/number'
 *
 *   assert.deepStrictEqual(SemigroupProduct.concat(2, 3), 6)
 */
export const SemigroupProduct: Semigroup<number> = {
  concat: (first, second) => first * second,
}

/**
 * `number` monoid under addition.
 *
 * The `empty` value is `0`.
 *
 * @since 1.0.0
 * @category Instances
 * @example
 *   import { MonoidSum } from 'fp-ts/number'
 *
 *   assert.deepStrictEqual(MonoidSum.concat(2, MonoidSum.empty), 2)
 */
export const MonoidSum: Monoid<number> = {
  concat: SemigroupSum.concat,
  empty: 0,
}

/**
 * `number` monoid under multiplication.
 *
 * The `empty` value is `1`.
 *
 * @since 1.0.0
 * @category Instances
 * @example
 *   import { MonoidProduct } from 'fp-ts/number'
 *
 *   assert.deepStrictEqual(MonoidProduct.concat(2, MonoidProduct.empty), 2)
 */
export const MonoidProduct: Monoid<number> = {
  concat: SemigroupProduct.concat,
  empty: 1,
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const Field: F.Field<number> = {
  add: SemigroupSum.concat,
  zero: 0,
  mul: SemigroupProduct.concat,
  one: 1,
  sub: MagmaSub.concat,
  degree: _ => 1,
  div: (first, second) => first / second,
  mod: (first, second) => first % second,
}
