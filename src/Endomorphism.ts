/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
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
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
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
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const URI = 'Endomorphism'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
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
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
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
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const getMonoid = <A = never>(): Monoid<Endomorphism<A>> => ({
  concat: getSemigroup<A>().concat,
  empty: identity,
})
