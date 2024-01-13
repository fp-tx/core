/** @since 1.0.0 */
import type * as E from './Eq'
import type * as M from './Monoid'
import type * as S from './Semigroup'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category Model
 */
export type Ordering = -1 | 0 | 1

/**
 * Less strict version of [`match`](#match).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @since 1.0.0
 * @category Pattern matching
 */
export const matchW =
  <A, B, C>(onLessThan: () => A, onEqual: () => B, onGreaterThan: () => C) =>
  (o: Ordering): A | B | C =>
    o === -1 ? onLessThan()
    : o === 0 ? onEqual()
    : onGreaterThan()

/**
 * @since 1.0.0
 * @category Pattern matching
 */
export const match: <A>(onLessThan: () => A, onEqual: () => A, onGreaterThan: () => A) => (o: Ordering) => A = matchW

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/** @since 1.0.0 */
export const reverse = (o: Ordering): Ordering =>
  o === -1 ? 1
  : o === 1 ? -1
  : 0

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category Instances
 */
export const Eq: E.Eq<Ordering> = {
  equals: (x, y) => x === y,
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const Semigroup: S.Semigroup<Ordering> = {
  concat: (x, y) => (x !== 0 ? x : y),
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const Monoid: M.Monoid<Ordering> = {
  concat: Semigroup.concat,
  empty: 0,
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/** @since 1.0.0 */
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
 * @deprecated
 * @since 1.0.0
 * @category Zone of death
 */
export const invert = reverse

/**
 * Use [`Semigroup`](#semigroup) instead
 *
 * @deprecated
 * @since 1.0.0
 * @category Zone of death
 */
export const semigroupOrdering: S.Semigroup<Ordering> = Semigroup

/**
 * Use [`Eq`](#eq) instead
 *
 * @deprecated
 * @since 1.0.0
 * @category Zone of death
 */
export const eqOrdering: E.Eq<Ordering> = Eq

/**
 * Use [`Monoid`](#monoid) instead
 *
 * @deprecated
 * @since 1.0.0
 * @category Zone of death
 */
export const monoidOrdering: M.Monoid<Ordering> = Monoid
