/** @since 2.0.0 */
import type * as E from './Eq'
import { pipe } from './function'
import { type IO } from './IO'
import * as N from './number'
import * as O from './Ord'

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @since 2.10.0
 * @category Instances
 */
export const Eq: E.Eq<Date> = {
  equals: (first, second) => first.valueOf() === second.valueOf(),
}

/**
 * @since 2.6.0
 * @category Instances
 */
export const eqDate: E.Eq<Date> = {
  equals: (x, y) => x.getDate() === y.getDate(),
}

/**
 * @since 2.6.0
 * @category Instances
 */
export const eqMonth: E.Eq<Date> = {
  equals: (x, y) => x.getMonth() === y.getMonth(),
}

/**
 * @since 2.6.0
 * @category Instances
 */
export const eqYear: E.Eq<Date> = {
  equals: (x, y) => x.getFullYear() === y.getFullYear(),
}

/**
 * @since 2.10.0
 * @category Instances
 * @example
 *   import { Ord } from 'fp-ts/Date'
 *
 *   assert.deepStrictEqual(Ord.compare(new Date(1, 1, 2020), new Date(1, 1, 2021)), -1)
 */
export const Ord: O.Ord<Date> = /*#__PURE__*/ pipe(
  N.Ord,
  /*#__PURE__*/ O.contramap(date => date.valueOf()),
)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Returns the current `Date`
 *
 * @since 2.0.0
 * @category Constructors
 */
export const create: IO<Date> = () => new Date()

/**
 * Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC
 *
 * @since 2.0.0
 */
export const now: IO<number> = () => new Date().getTime()
