/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import type * as M from './Monoid'
import * as Se from './Semigroup'

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Semigroup: Se.Semigroup<void> = Se.constant<void>(undefined)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Monoid: M.Monoid<void> = {
  concat: Semigroup.concat,
  empty: undefined,
}
