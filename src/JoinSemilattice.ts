/**
 * A join-semilattice (or upper semilattice) is a semilattice whose operation is called `join`, and which can be thought
 * of as a least upper bound.
 *
 * A `JoinSemilattice` must satisfy the following laws:
 *
 * - Associativity: `a ∨ (b ∨ c) <-> (a ∨ b) ∨ c`
 * - Commutativity: `a ∨ b <-> b ∨ a`
 * - Idempotency: `a ∨ a <-> a`
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface JoinSemilattice<A> {
  readonly join: (x: A, y: A) => A
}
