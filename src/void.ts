/** @since 1.0.0 */
import type * as M from './Monoid'
import * as Se from './Semigroup'

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category Instances
 */
export const Semigroup: Se.Semigroup<void> = Se.constant<void>(undefined)

/**
 * @since 1.0.0
 * @category Instances
 */
export const Monoid: M.Monoid<void> = {
  concat: Semigroup.concat,
  empty: undefined,
}
