/**
 * A `Traversable` with an additional index. A `TraversableWithIndex` instance must be compatible with its `Traversable`
 * instance
 *
 * With its `FoldableWithIndex` instance
 *
 * And with its `FunctorWithIndex` instance
 *
 * ```purescript
 * mapWithIndex(ta, f) = traverseWithIndex(identity)(ta, (i, a) => new Identity(f(i, a))).value
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import {
  type Applicative,
  type Applicative1,
  type Applicative2,
  type Applicative2C,
  type Applicative3,
  type Applicative3C,
} from './Applicative'
import {
  type FoldableWithIndex,
  type FoldableWithIndex1,
  type FoldableWithIndex2,
  type FoldableWithIndex2C,
} from './FoldableWithIndex'
import {
  type FunctorWithIndex,
  type FunctorWithIndex1,
  type FunctorWithIndex2,
  type FunctorWithIndex2C,
} from './FunctorWithIndex'
import { type HKT, type Kind, type Kind2, type Kind3, type URIS, type URIS2, type URIS3 } from './HKT'
import { type Traversable, type Traversable1, type Traversable2, type Traversable2C } from './Traversable'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface TraversableWithIndex<T, I> extends FunctorWithIndex<T, I>, FoldableWithIndex<T, I>, Traversable<T> {
  readonly traverseWithIndex: TraverseWithIndex<T, I>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface TraversableWithIndex1<T extends URIS, I>
  extends FunctorWithIndex1<T, I>,
    FoldableWithIndex1<T, I>,
    Traversable1<T> {
  readonly traverseWithIndex: TraverseWithIndex1<T, I>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface TraversableWithIndex2<T extends URIS2, I>
  extends FunctorWithIndex2<T, I>,
    FoldableWithIndex2<T, I>,
    Traversable2<T> {
  readonly traverseWithIndex: TraverseWithIndex2<T, I>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface TraversableWithIndex2C<T extends URIS2, I, E>
  extends FunctorWithIndex2C<T, I, E>,
    FoldableWithIndex2C<T, I, E>,
    Traversable2C<T, E> {
  readonly traverseWithIndex: TraverseWithIndex2C<T, I, E>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface TraverseWithIndex<T, I> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <A, R, E, B>(ta: HKT<T, A>, f: (i: I, a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, HKT<T, B>>
  <F extends URIS3, E>(
    F: Applicative3C<F, E>,
  ): <A, R, B>(ta: HKT<T, A>, f: (i: I, a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, HKT<T, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <A, E, B>(ta: HKT<T, A>, f: (i: I, a: A) => Kind2<F, E, B>) => Kind2<F, E, HKT<T, B>>
  <F extends URIS2, E>(
    F: Applicative2C<F, E>,
  ): <A, B>(ta: HKT<T, A>, f: (i: I, a: A) => Kind2<F, E, B>) => Kind2<F, E, HKT<T, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(ta: HKT<T, A>, f: (i: I, a: A) => Kind<F, B>) => Kind<F, HKT<T, B>>
  <F>(F: Applicative<F>): <A, B>(ta: HKT<T, A>, f: (i: I, a: A) => HKT<F, B>) => HKT<F, HKT<T, B>>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface TraverseWithIndex1<T extends URIS, I> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <A, R, E, B>(ta: Kind<T, A>, f: (i: I, a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, Kind<T, B>>
  <F extends URIS3, E>(
    F: Applicative3C<F, E>,
  ): <A, R, B>(ta: Kind<T, A>, f: (i: I, a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, Kind<T, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <A, E, B>(ta: Kind<T, A>, f: (i: I, a: A) => Kind2<F, E, B>) => Kind2<F, E, Kind<T, B>>
  <F extends URIS2, E>(
    F: Applicative2C<F, E>,
  ): <A, B>(ta: Kind<T, A>, f: (i: I, a: A) => Kind2<F, E, B>) => Kind2<F, E, Kind<T, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(ta: Kind<T, A>, f: (i: I, a: A) => Kind<F, B>) => Kind<F, Kind<T, B>>
  <F>(F: Applicative<F>): <A, B>(ta: Kind<T, A>, f: (i: I, a: A) => HKT<F, B>) => HKT<F, Kind<T, B>>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface TraverseWithIndex2<T extends URIS2, I> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <TE, A, R, FE, B>(ta: Kind2<T, TE, A>, f: (i: I, a: A) => Kind3<F, R, FE, B>) => Kind3<F, R, FE, Kind2<T, TE, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <TE, A, FE, B>(ta: Kind2<T, TE, A>, f: (i: I, a: A) => Kind2<F, FE, B>) => Kind2<F, FE, Kind2<T, TE, B>>
  <F extends URIS2, FE>(
    F: Applicative2C<F, FE>,
  ): <TE, A, B>(ta: Kind2<T, TE, A>, f: (i: I, a: A) => Kind2<F, FE, B>) => Kind2<F, FE, Kind2<T, TE, B>>
  <F extends URIS>(
    F: Applicative1<F>,
  ): <E, A, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind<F, B>) => Kind<F, Kind2<T, E, B>>
  <F>(F: Applicative<F>): <E, A, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => HKT<F, B>) => HKT<F, Kind2<T, E, B>>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface TraverseWithIndex2C<T extends URIS2, I, E> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <A, R, FE, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind3<F, R, FE, B>) => Kind3<F, R, FE, Kind2<T, E, B>>
  <F extends URIS3>(
    F: Applicative3C<F, E>,
  ): <A, R, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind3<F, R, E, B>) => Kind3<F, R, E, Kind2<T, E, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <A, FE, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind2<F, FE, B>) => Kind2<F, FE, Kind2<T, E, B>>
  <F extends URIS2>(
    F: Applicative2C<F, E>,
  ): <A, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind2<F, E, B>) => Kind2<F, E, Kind2<T, E, B>>
  <F extends URIS>(
    F: Applicative1<F>,
  ): <A, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => Kind<F, B>) => Kind<F, Kind2<T, E, B>>
  <F>(F: Applicative<F>): <A, B>(ta: Kind2<T, E, A>, f: (i: I, a: A) => HKT<F, B>) => HKT<F, Kind2<T, E, B>>
}

//
// pipeable `TraverseWithIndex`
//

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface PipeableTraverseWithIndex1<T extends URIS, I> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <A, R, E, B>(f: (i: I, a: A) => Kind3<F, R, E, B>) => (ta: Kind<T, A>) => Kind3<F, R, E, Kind<T, B>>
  <F extends URIS3, E>(
    F: Applicative3C<F, E>,
  ): <A, R, B>(f: (i: I, a: A) => Kind3<F, R, E, B>) => (ta: Kind<T, A>) => Kind3<F, R, E, Kind<T, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <A, E, B>(f: (i: I, a: A) => Kind2<F, E, B>) => (ta: Kind<T, A>) => Kind2<F, E, Kind<T, B>>
  <F extends URIS2, E>(
    F: Applicative2C<F, E>,
  ): <A, B>(f: (i: I, a: A) => Kind2<F, E, B>) => (ta: Kind<T, A>) => Kind2<F, E, Kind<T, B>>
  <F extends URIS>(F: Applicative1<F>): <A, B>(f: (i: I, a: A) => Kind<F, B>) => (ta: Kind<T, A>) => Kind<F, Kind<T, B>>
  <F>(F: Applicative<F>): <A, B>(f: (i: I, a: A) => HKT<F, B>) => (ta: Kind<T, A>) => HKT<F, Kind<T, B>>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface PipeableTraverseWithIndex2<T extends URIS2, I> {
  <F extends URIS3>(
    F: Applicative3<F>,
  ): <A, R, FE, B>(
    f: (i: I, a: A) => Kind3<F, R, FE, B>,
  ) => <TE>(ta: Kind2<T, TE, A>) => Kind3<F, R, FE, Kind2<T, TE, B>>
  <F extends URIS2>(
    F: Applicative2<F>,
  ): <A, FE, B>(f: (i: I, a: A) => Kind2<F, FE, B>) => <TE>(ta: Kind2<T, TE, A>) => Kind2<F, FE, Kind2<T, TE, B>>
  <F extends URIS2, FE>(
    F: Applicative2C<F, FE>,
  ): <A, B>(f: (i: I, a: A) => Kind2<F, FE, B>) => <TE>(ta: Kind2<T, TE, A>) => Kind2<F, FE, Kind2<T, TE, B>>
  <F extends URIS>(
    F: Applicative1<F>,
  ): <A, B>(f: (i: I, a: A) => Kind<F, B>) => <E>(ta: Kind2<T, E, A>) => Kind<F, Kind2<T, E, B>>
  <F>(F: Applicative<F>): <A, B>(f: (i: I, a: A) => HKT<F, B>) => <E>(ta: Kind2<T, E, A>) => HKT<F, Kind2<T, E, B>>
}
