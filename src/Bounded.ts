/**
 * The `Bounded` type class represents totally ordered types that have an upper and lower boundary.
 *
 * Instances should satisfy the following law in addition to the `Ord` laws:
 *
 * - Bounded: `bottom <= a <= top`
 *
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import * as O from './Ord'
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
export interface Bounded<A> extends Ord<A> {
  readonly top: A
  readonly bottom: A
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Clamp a value between bottom and top values.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Utils}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const clamp = <A>(B: Bounded<A>): ((a: A) => A) => O.clamp(B)(B.bottom, B.top)

/**
 * Reverses the Ord of a bound and swaps top and bottom values.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Utils}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reverse = <A>(B: Bounded<A>): Bounded<A> => {
  const R = O.reverse(B)
  return {
    equals: R.equals,
    compare: R.compare,
    top: B.bottom,
    bottom: B.top,
  }
}

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`Bounded`](./number#bounded) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const boundedNumber: Bounded<number> = {
  equals: O.ordNumber.equals,
  compare: O.ordNumber.compare,
  top: Infinity,
  bottom: -Infinity,
}
