/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import type * as E from './Eq'
import { pipe } from './function'
import { type IO } from './IO'
import * as N from './number'
import * as O from './Ord'

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const Eq: E.Eq<Date> = {
  equals: (first, second) => first.valueOf() === second.valueOf(),
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const eqDate: E.Eq<Date> = {
  equals: (x, y) => x.getDate() === y.getDate(),
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const eqMonth: E.Eq<Date> = {
  equals: (x, y) => x.getMonth() === y.getMonth(),
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const eqYear: E.Eq<Date> = {
  equals: (x, y) => x.getFullYear() === y.getFullYear(),
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { Ord } from '@fp-tx/core/Date'
 *
 * assert.deepStrictEqual(Ord.compare(new Date(1, 1, 2020), new Date(1, 1, 2021)), -1)
 * ```
 *
 * @public
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const create: IO<Date> = () => new Date()

/**
 * Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const now: IO<number> = () => new Date().getTime()
