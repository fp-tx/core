/**
 * @meta
 * {@since 1.0.0}
 * @packageDocumentation
 */
import type * as E from './Eq'
import type * as M from './Monoid'
import type * as S from './Semigroup'

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
export type Ordering = -1 | 0 | 1

/**
 * Less strict version of [`match`](#match).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const matchW =
  <A, B, C>(onLessThan: () => A, onEqual: () => B, onGreaterThan: () => C) =>
  (o: Ordering): A | B | C =>
    o === -1 ? onLessThan()
    : o === 0 ? onEqual()
    : onGreaterThan()

/**
 * @meta
 * {@since 1.0.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const match: <A>(onLessThan: () => A, onEqual: () => A, onGreaterThan: () => A) => (o: Ordering) => A = matchW

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reverse = (o: Ordering): Ordering =>
  o === -1 ? 1
  : o === 1 ? -1
  : 0

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Eq: E.Eq<Ordering> = {
  equals: (x, y) => x === y,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Semigroup: S.Semigroup<Ordering> = {
  concat: (x, y) => (x !== 0 ? x : y),
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Monoid: M.Monoid<Ordering> = {
  concat: Semigroup.concat,
  empty: 0,
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const sign = (n: number): Ordering =>
  n <= -1 ? -1
  : n >= 1 ? 1
  : 0

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`reverse`](#reverse) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const invert = reverse

/**
 * Use [`Semigroup`](#semigroup) instead
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const semigroupOrdering: S.Semigroup<Ordering> = Semigroup

/**
 * Use [`Eq`](#eq) instead
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const eqOrdering: E.Eq<Ordering> = Eq

/**
 * Use [`Monoid`](#monoid) instead
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const monoidOrdering: M.Monoid<Ordering> = Monoid
