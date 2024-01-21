/**
 * Type defunctionalization (as describe in [Lightweight higher-kinded
 * polymorphism](https://www.cl.cam.ac.uk/~jdy22/papers/lightweight-higher-kinded-polymorphism.pdf))
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */

/**
 * `* -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export interface HKT<URI, A> {
  readonly _URI: URI
  readonly _A: A
}

/**
 * `* -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export interface HKT2<URI, E, A> extends HKT<URI, A> {
  readonly _E: E
}

/**
 * `* -> * -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export interface HKT3<URI, R, E, A> extends HKT2<URI, E, A> {
  readonly _R: R
}

/**
 * `* -> * -> * -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export interface HKT4<URI, S, R, E, A> extends HKT3<URI, R, E, A> {
  readonly _S: S
}

//
// inj: type-level dictionaries for HKTs: URI -> concrete type
//

/**
 * `* -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface URItoKind<A> {}

/**
 * `* -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface URItoKind2<E, A> {}

/**
 * `* -> * -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface URItoKind3<R, E, A> {}

/**
 * `* -> * -> * -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface URItoKind4<S, R, E, A> {}

//
// unions of URIs
//

/**
 * `* -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export type URIS = keyof URItoKind<any>

/**
 * `* -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export type URIS2 = keyof URItoKind2<any, any>

/**
 * `* -> * -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export type URIS3 = keyof URItoKind3<any, any, any>

/**
 * `* -> * -> * -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export type URIS4 = keyof URItoKind4<any, any, any, any>

//
// prj
//

/**
 * `* -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export type Kind<URI extends URIS, A> = URI extends URIS ? URItoKind<A>[URI] : any

/**
 * `* -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export type Kind2<URI extends URIS2, E, A> = URI extends URIS2 ? URItoKind2<E, A>[URI] : any

/**
 * `* -> * -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export type Kind3<URI extends URIS3, R, E, A> = URI extends URIS3 ? URItoKind3<R, E, A>[URI] : any

/**
 * `* -> * -> * -> * -> *` constructors
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export type Kind4<URI extends URIS4, S, R, E, A> = URI extends URIS4 ? URItoKind4<S, R, E, A>[URI] : any
