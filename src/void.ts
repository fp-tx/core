/**
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import type * as M from './Monoid'
import * as Se from './Semigroup'

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
export const Semigroup: Se.Semigroup<void> = Se.constant<void>(undefined)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Monoid: M.Monoid<void> = {
  concat: Semigroup.concat,
  empty: undefined,
}
