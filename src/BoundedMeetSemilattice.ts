/**
 * A `BoundedMeetSemilattice` must satisfy the following laws in addition to `MeetSemilattice` laws:
 *
 * - `a ∧ 1 <-> a`
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type MeetSemilattice } from './MeetSemilattice'

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
export interface BoundedMeetSemilattice<A> extends MeetSemilattice<A> {
  readonly one: A
}
