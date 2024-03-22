/**
 * A `BoundedDistributiveLattice` is a lattice that is both bounded and distributive
 *
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import { type BoundedLattice } from './BoundedLattice'
import { type DistributiveLattice, getMinMaxDistributiveLattice } from './DistributiveLattice'
import { type Ord } from './Ord'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface BoundedDistributiveLattice<A> extends BoundedLattice<A>, DistributiveLattice<A> {}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getMinMaxBoundedDistributiveLattice<A>(O: Ord<A>): (min: A, max: A) => BoundedDistributiveLattice<A> {
  const L = getMinMaxDistributiveLattice(O)
  return (min, max) => ({
    join: L.join,
    meet: L.meet,
    zero: min,
    one: max,
  })
}
