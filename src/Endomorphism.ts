/** @since 1.0.0 */

import { flow, identity } from './function'
import { type Monoid } from './Monoid'
import { type Semigroup } from './Semigroup'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/** @since 1.0.0 */
export interface Endomorphism<A> {
  (a: A): A
}

/**
 * @since 1.0.0
 * @category Type lambdas
 */
export const URI = 'Endomorphism'

/**
 * @since 1.0.0
 * @category Type lambdas
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind<A> {
    readonly [URI]: Endomorphism<A>
  }
}

/**
 * Endomorphism form a `Semigroup` where the `concat` operation is the usual function composition.
 *
 * @since 1.0.0
 * @category Instances
 */
export const getSemigroup = <A = never>(): Semigroup<Endomorphism<A>> => ({
  concat: (first, second) => flow(first, second),
})

/**
 * Endomorphism form a `Monoid` where the `empty` value is the `identity` function.
 *
 * @since 1.0.0
 * @category Instances
 */
export const getMonoid = <A = never>(): Monoid<Endomorphism<A>> => ({
  concat: getSemigroup<A>().concat,
  empty: identity,
})
