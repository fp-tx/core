/**
 * The `Bounded` type class represents totally ordered types that have an upper and lower boundary.
 *
 * Instances should satisfy the following law in addition to the `Ord` laws:
 *
 * - Bounded: `bottom <= a <= top`
 *
 * @since 2.0.0
 */
import * as O from './Ord'
import { type Ord } from './Ord'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
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
 * @since 2.12.0
 * @category Utils
 */
export const clamp = <A>(B: Bounded<A>): ((a: A) => A) => O.clamp(B)(B.bottom, B.top)

/**
 * Reverses the Ord of a bound and swaps top and bottom values.
 *
 * @since 2.12.0
 * @category Utils
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
 * Use [`Bounded`](./number.ts.html#bounded) instead.
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export const boundedNumber: Bounded<number> = {
  equals: O.ordNumber.equals,
  compare: O.ordNumber.compare,
  top: Infinity,
  bottom: -Infinity,
}
