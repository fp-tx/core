/**
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import {
  type HKT,
  type Kind,
  type Kind2,
  type Kind3,
  type Kind4,
  type URIS,
  type URIS2,
  type URIS3,
  type URIS4,
} from './HKT'

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
export interface Pointed<F> {
  readonly URI: F
  readonly of: <A>(a: A) => HKT<F, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Pointed1<F extends URIS> {
  readonly URI: F
  readonly of: <A>(a: A) => Kind<F, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Pointed2<F extends URIS2> {
  readonly URI: F
  readonly of: <E, A>(a: A) => Kind2<F, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Pointed2C<F extends URIS2, E> {
  readonly URI: F
  readonly _E: E
  readonly of: <A>(a: A) => Kind2<F, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Pointed3<F extends URIS3> {
  readonly URI: F
  readonly of: <R, E, A>(a: A) => Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Pointed3C<F extends URIS3, E> {
  readonly URI: F
  readonly _E: E
  readonly of: <R, A>(a: A) => Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Pointed4<F extends URIS4> {
  readonly URI: F
  readonly of: <S, R, E, A>(a: A) => Kind4<F, S, R, E, A>
}
