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
export interface Invariant<F> {
  readonly URI: F
  readonly imap: <A, B>(fa: HKT<F, A>, f: (a: A) => B, g: (b: B) => A) => HKT<F, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Invariant1<F extends URIS> {
  readonly URI: F
  readonly imap: <A, B>(fa: Kind<F, A>, f: (a: A) => B, g: (b: B) => A) => Kind<F, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Invariant2<F extends URIS2> {
  readonly URI: F
  readonly imap: <E, A, B>(fa: Kind2<F, E, A>, f: (a: A) => B, g: (b: B) => A) => Kind2<F, E, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Invariant2C<F extends URIS2, E> {
  readonly URI: F
  readonly _E: E
  readonly imap: <A, B>(fa: Kind2<F, E, A>, f: (a: A) => B, g: (b: B) => A) => Kind2<F, E, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Invariant3<F extends URIS3> {
  readonly URI: F
  readonly imap: <R, E, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => B, g: (b: B) => A) => Kind3<F, R, E, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Invariant3C<F extends URIS3, E> {
  readonly URI: F
  readonly _E: E
  readonly imap: <R, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => B, g: (b: B) => A) => Kind3<F, R, E, B>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Invariant4<F extends URIS4> {
  readonly URI: F
  readonly imap: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, f: (a: A) => B, g: (b: B) => A) => Kind4<F, S, R, E, B>
}
