/**
 * @remarks
 * Added in 1.0.0
 * @public
 */

import { flow, identity } from './function'
import { type Monoid } from './Monoid'
import { type Semigroup } from './Semigroup'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export interface Endomorphism<A> {
  (a: A): A
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'Endomorphism'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getSemigroup = <A = never>(): Semigroup<Endomorphism<A>> => ({
  concat: (first, second) => flow(first, second),
})

/**
 * Endomorphism form a `Monoid` where the `empty` value is the `identity` function.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getMonoid = <A = never>(): Monoid<Endomorphism<A>> => ({
  concat: getSemigroup<A>().concat,
  empty: identity,
})
