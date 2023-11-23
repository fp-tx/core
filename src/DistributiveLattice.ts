/**
 * A `DistributiveLattice` must satisfy the following laws in addition to `Lattice` laws:
 *
 * - Distributivity for meet: `a ∨ (b ∧ c) <-> (a ∨ b) ∧ (a ∨ c)`
 * - Distributivity for join: `a ∧ (b ∨ c) <-> (a ∧ b) ∨ (a ∧ c)`
 *
 * @since 2.0.0
 */
import { type Lattice } from './Lattice'
import { max, min, type Ord } from './Ord'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
 */
export interface DistributiveLattice<A> extends Lattice<A> {}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Constructors
 */
export function getMinMaxDistributiveLattice<A>(O: Ord<A>): DistributiveLattice<A> {
  return {
    meet: min(O),
    join: max(O),
  }
}
