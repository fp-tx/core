/**
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
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
 * @meta
 * {@since 0.1.0}
 * {@category Refinements}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const isNumber: Refinement<unknown, number> = (u: unknown): u is number => typeof u === 'number'

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Eq: E.Eq<number> = {
  equals: (first, second) => first === second,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Ord: O.Ord<number> = {
  equals: Eq.equals,
  compare: (first, second) =>
    first < second ? -1
    : first > second ? 1
    : 0,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Bounded: B.Bounded<number> = {
  equals: Eq.equals,
  compare: Ord.compare,
  top: Infinity,
  bottom: -Infinity,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Show: S.Show<number> = {
  show: n => JSON.stringify(n),
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const MagmaSub: Magma<number> = {
  concat: (first, second) => first - second,
}

/**
 * `number` semigroup under addition.
 *
 * @example
 *
 * ```typescript
 * import { SemigroupSum } from '@fp-tx/core/number'
 *
 * assert.deepStrictEqual(SemigroupSum.concat(2, 3), 5)
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const SemigroupSum: Semigroup<number> = {
  concat: (first, second) => first + second,
}

/**
 * `number` semigroup under multiplication.
 *
 * @example
 *
 * ```typescript
 * import { SemigroupProduct } from '@fp-tx/core/number'
 *
 * assert.deepStrictEqual(SemigroupProduct.concat(2, 3), 6)
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const SemigroupProduct: Semigroup<number> = {
  concat: (first, second) => first * second,
}

/**
 * `number` monoid under addition.
 *
 * The `empty` value is `0`.
 *
 * @example
 *
 * ```typescript
 * import { MonoidSum } from '@fp-tx/core/number'
 *
 * assert.deepStrictEqual(MonoidSum.concat(2, MonoidSum.empty), 2)
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
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
 * @example
 *
 * ```typescript
 * import { MonoidProduct } from '@fp-tx/core/number'
 *
 * assert.deepStrictEqual(MonoidProduct.concat(2, MonoidProduct.empty), 2)
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const MonoidProduct: Monoid<number> = {
  concat: SemigroupProduct.concat,
  empty: 1,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
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
