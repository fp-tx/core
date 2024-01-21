/**
 * A `BoundedLattice` must satisfy the following in addition to `BoundedMeetSemilattice` and `BoundedJoinSemilattice`
 * laws:
 *
 * - Absorption law for meet: `a ∧ (a ∨ b) <-> a`
 * - Absorption law for join: `a ∨ (a ∧ b) <-> a`
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type BoundedJoinSemilattice } from './BoundedJoinSemilattice'
import { type BoundedMeetSemilattice } from './BoundedMeetSemilattice'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface BoundedLattice<A> extends BoundedJoinSemilattice<A>, BoundedMeetSemilattice<A> {}
