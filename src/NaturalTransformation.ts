/**
 * A type for natural transformations.
 *
 * A natural transformation is a mapping between type constructors of kind `* -> *` where the mapping operation has no
 * ability to manipulate the inner values.
 *
 * The definition of a natural transformation in category theory states that `F` and `G` should be functors, but the
 * `Functor` constraint is not enforced here; that the types are of kind `* -> *` is enough for our purposes.
 *
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

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation<F, G> {
  <A>(fa: HKT<F, A>): HKT<G, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation11<F extends URIS, G extends URIS> {
  <A>(fa: Kind<F, A>): Kind<G, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation12<F extends URIS, G extends URIS2> {
  <A, E>(fa: Kind<F, A>): Kind2<G, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation12C<F extends URIS, G extends URIS2, E> {
  <A>(fa: Kind<F, A>): Kind2<G, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation13<F extends URIS, G extends URIS3> {
  <A, R, E>(fa: Kind<F, A>): Kind3<G, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation13C<F extends URIS, G extends URIS3, E> {
  <A, R>(fa: Kind<F, A>): Kind3<G, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation14<F extends URIS, G extends URIS4> {
  <A, S, R, E>(fa: Kind<F, A>): Kind4<G, S, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation14C<F extends URIS, G extends URIS4, E> {
  <A, S, R>(fa: Kind<F, A>): Kind4<G, S, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation21<F extends URIS2, G extends URIS> {
  <A>(fa: Kind2<F, unknown, A>): Kind<G, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation22<F extends URIS2, G extends URIS2> {
  <E, A>(fa: Kind2<F, E, A>): Kind2<G, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation22C<F extends URIS2, G extends URIS2, E> {
  <A>(fa: Kind2<F, E, A>): Kind2<G, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation23<F extends URIS2, G extends URIS3> {
  <E, A, R>(fa: Kind2<F, E, A>): Kind3<G, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation23C<F extends URIS2, G extends URIS3, E> {
  <A, R>(fa: Kind2<F, E, A>): Kind3<G, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation24<F extends URIS2, G extends URIS4> {
  <E, A, S, R>(fa: Kind2<F, E, A>): Kind4<G, S, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation23R<F extends URIS2, G extends URIS3> {
  <R, A, E>(fa: Kind2<F, R, A>): Kind3<G, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation23RC<F extends URIS2, G extends URIS3, E> {
  <R, A>(fa: Kind2<F, R, A>): Kind3<G, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation24R<F extends URIS2, G extends URIS4> {
  <R, A, S, E>(fa: Kind2<F, R, A>): Kind4<G, S, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation24S<F extends URIS2, G extends URIS4> {
  <S, A, R, E>(fa: Kind2<F, S, A>): Kind4<G, S, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation33<F extends URIS3, G extends URIS3> {
  <R, E, A>(fa: Kind3<F, R, E, A>): Kind3<G, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface NaturalTransformation34<F extends URIS3, G extends URIS4> {
  <R, E, A, S>(fa: Kind3<F, R, E, A>): Kind4<G, S, R, E, A>
}
