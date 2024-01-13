/**
 * A meet-semilattice (or lower semilattice) is a semilattice whose operation is called `meet`, and which can be thought
 * of as a greatest lower bound.
 *
 * A `MeetSemilattice` must satisfy the following laws:
 *
 * - Associativity: `a ∧ (b ∧ c) <-> (a ∧ b) ∧ c`
 * - Commutativity: `a ∧ b <-> b ∧ a`
 * - Idempotency: `a ∧ a <-> a`
 *
 * @since 1.0.0
 */

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category Model
 */
export interface MeetSemilattice<A> {
  readonly meet: (x: A, y: A) => A
}
