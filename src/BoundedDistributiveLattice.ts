/**
 * A `BoundedDistributiveLattice` is a lattice that is both bounded and distributive
 *
 * @since 2.0.0
 */
import { type BoundedLattice } from './BoundedLattice'
import { type DistributiveLattice, getMinMaxDistributiveLattice } from './DistributiveLattice'
import { type Ord } from './Ord'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 2.0.0
 */
export interface BoundedDistributiveLattice<A> extends BoundedLattice<A>, DistributiveLattice<A> {}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 2.0.0
 */
export function getMinMaxBoundedDistributiveLattice<A>(O: Ord<A>): (min: A, max: A) => BoundedDistributiveLattice<A> {
  const L = getMinMaxDistributiveLattice(O)
  return (min, max) => ({
    join: L.join,
    meet: L.meet,
    zero: min,
    one: max
  })
}
