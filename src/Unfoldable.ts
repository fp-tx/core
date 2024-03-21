/**
 * This class identifies data structures which can be _unfolded_, generalizing `unfold` on arrays.
 *
 * @meta
 * {@since 1.0.0}
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
import { type Option } from './Option'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Unfoldable<F> {
  readonly URI: F
  readonly unfold: <A, B>(b: B, f: (b: B) => Option<[A, B]>) => HKT<F, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Unfoldable1<F extends URIS> {
  readonly URI: F
  readonly unfold: <A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind<F, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Unfoldable2<F extends URIS2> {
  readonly URI: F
  readonly unfold: <E, A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind2<F, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Unfoldable2C<F extends URIS2, E> {
  readonly URI: F
  readonly _E: E
  readonly unfold: <A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind2<F, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Unfoldable3<F extends URIS3> {
  readonly URI: F
  readonly unfold: <R, E, A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Unfoldable3C<F extends URIS3, E> {
  readonly URI: F
  readonly _E: E
  readonly unfold: <R, A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Unfoldable4<F extends URIS4> {
  readonly URI: F
  readonly unfold: <S, R, E, A, B>(b: B, f: (b: B) => Option<[A, B]>) => Kind4<F, S, R, E, A>
}
