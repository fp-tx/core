/**
 * ```ts
 * interface Separated<E, A> {
 *   readonly left: E
 *   readonly right: A
 * }
 * ```
 *
 * Represents a result of separating a whole into two parts.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */

import { type Bifunctor2 } from './Bifunctor'
import { pipe } from './function'
import { flap as flap_, type Functor2 } from './Functor'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * A `Separated` type which holds `left` and `right` parts.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface Separated<E, A> {
  readonly left: E
  readonly right: A
}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const separated = <E, A>(left: E, right: A): Separated<E, A> => ({ left, right })

const _map: Functor2<URI>['map'] = (fa, f) => pipe(fa, map(f))
const _mapLeft: Bifunctor2<URI>['mapLeft'] = (fa, f) => pipe(fa, mapLeft(f))
const _bimap: Bifunctor2<URI>['bimap'] = (fa, g, f) => pipe(fa, bimap(g, f))

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const map =
  <A, B>(f: (a: A) => B) =>
  <E>(fa: Separated<E, A>): Separated<E, B> =>
    separated(left(fa), f(right(fa)))

/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const mapLeft =
  <E, G>(f: (e: E) => G) =>
  <A>(fa: Separated<E, A>): Separated<G, A> =>
    separated(f(left(fa)), right(fa))

/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const bimap =
  <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) =>
  (fa: Separated<E, A>): Separated<G, B> =>
    separated(f(left(fa)), g(right(fa)))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'Separated'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: Separated<E, A>
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Bifunctor: Bifunctor2<URI> = {
  URI,
  mapLeft: _mapLeft,
  bimap: _bimap,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Functor: Functor2<URI> = {
  URI,
  map: _map,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const left = <E, A>(s: Separated<E, A>): E => s.left

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const right = <E, A>(s: Separated<E, A>): A => s.right
