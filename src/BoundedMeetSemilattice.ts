/**
 * A `BoundedMeetSemilattice` must satisfy the following laws in addition to `MeetSemilattice` laws:
 *
 * - `a ∧ 1 <-> a`
 *
 * @since 2.0.0
 */
import { type MeetSemilattice } from './MeetSemilattice'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
 */
export interface BoundedMeetSemilattice<A> extends MeetSemilattice<A> {
  readonly one: A
}
