/**
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import { type Either } from './Either'
import {
  type Filterable,
  type Filterable1,
  type Filterable2,
  type Filterable2C,
  type Filterable3,
  type Filterable3C,
  type Filterable4,
} from './Filterable'
import {
  type FunctorWithIndex,
  type FunctorWithIndex1,
  type FunctorWithIndex2,
  type FunctorWithIndex2C,
  type FunctorWithIndex3,
  type FunctorWithIndex3C,
  type FunctorWithIndex4,
} from './FunctorWithIndex'
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
import { type Separated } from './Separated'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export type RefinementWithIndex<I, A, B extends A> = (i: I, a: A) => a is B

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export type PredicateWithIndex<I, A> = (i: I, a: A) => boolean

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterWithIndex<F, I> {
  <A, B extends A>(fa: HKT<F, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): HKT<F, B>
  <A>(fa: HKT<F, A>, predicateWithIndex: PredicateWithIndex<I, A>): HKT<F, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface PartitionWithIndex<F, I> {
  <A, B extends A>(fa: HKT<F, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Separated<HKT<F, A>, HKT<F, B>>
  <A>(fa: HKT<F, A>, predicateWithIndex: PredicateWithIndex<I, A>): Separated<HKT<F, A>, HKT<F, A>>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterableWithIndex<F, I> extends FunctorWithIndex<F, I>, Filterable<F> {
  readonly partitionMapWithIndex: <A, B, C>(
    fa: HKT<F, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<HKT<F, B>, HKT<F, C>>
  readonly partitionWithIndex: PartitionWithIndex<F, I>
  readonly filterMapWithIndex: <A, B>(fa: HKT<F, A>, f: (i: I, a: A) => Option<B>) => HKT<F, B>
  readonly filterWithIndex: FilterWithIndex<F, I>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterWithIndex1<F extends URIS, I> {
  <A, B extends A>(fa: Kind<F, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Kind<F, B>
  <A>(fa: Kind<F, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind<F, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface PartitionWithIndex1<F extends URIS, I> {
  <A, B extends A>(fa: Kind<F, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Separated<Kind<F, A>, Kind<F, B>>
  <A>(fa: Kind<F, A>, predicateWithIndex: PredicateWithIndex<I, A>): Separated<Kind<F, A>, Kind<F, A>>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterableWithIndex1<F extends URIS, I> extends FunctorWithIndex1<F, I>, Filterable1<F> {
  readonly partitionMapWithIndex: <A, B, C>(
    fa: Kind<F, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind<F, B>, Kind<F, C>>
  readonly partitionWithIndex: PartitionWithIndex1<F, I>
  readonly filterMapWithIndex: <A, B>(fa: Kind<F, A>, f: (i: I, a: A) => Option<B>) => Kind<F, B>
  readonly filterWithIndex: FilterWithIndex1<F, I>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterWithIndex2<F extends URIS2, I> {
  <E, A, B extends A>(fa: Kind2<F, E, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Kind2<F, E, B>
  <E, A>(fa: Kind2<F, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind2<F, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface PartitionWithIndex2<F extends URIS2, I> {
  <E, A, B extends A>(
    fa: Kind2<F, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  <E, A>(fa: Kind2<F, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Separated<Kind2<F, E, A>, Kind2<F, E, A>>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterableWithIndex2<F extends URIS2, I> extends FunctorWithIndex2<F, I>, Filterable2<F> {
  readonly partitionMapWithIndex: <E, A, B, C>(
    fa: Kind2<F, E, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>
  readonly partitionWithIndex: PartitionWithIndex2<F, I>
  readonly filterMapWithIndex: <E, A, B>(fa: Kind2<F, E, A>, f: (i: I, a: A) => Option<B>) => Kind2<F, E, B>
  readonly filterWithIndex: FilterWithIndex2<F, I>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterWithIndex2C<F extends URIS2, I, E> {
  <A, B extends A>(fa: Kind2<F, E, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Kind2<F, E, B>
  <A>(fa: Kind2<F, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind2<F, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface PartitionWithIndex2C<F extends URIS2, I, E> {
  <A, B extends A>(
    fa: Kind2<F, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Separated<Kind2<F, E, A>, Kind2<F, E, B>>
  <A>(fa: Kind2<F, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Separated<Kind2<F, E, A>, Kind2<F, E, A>>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterableWithIndex2C<F extends URIS2, I, E> extends FunctorWithIndex2C<F, I, E>, Filterable2C<F, E> {
  readonly partitionMapWithIndex: <A, B, C>(
    fa: Kind2<F, E, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind2<F, E, B>, Kind2<F, E, C>>
  readonly partitionWithIndex: PartitionWithIndex2C<F, I, E>
  readonly filterMapWithIndex: <A, B>(fa: Kind2<F, E, A>, f: (i: I, a: A) => Option<B>) => Kind2<F, E, B>
  readonly filterWithIndex: FilterWithIndex2C<F, I, E>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterWithIndex3<F extends URIS3, I> {
  <R, E, A, B extends A>(fa: Kind3<F, R, E, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Kind3<F, R, E, B>
  <R, E, A>(fa: Kind3<F, R, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterWithIndex3C<F extends URIS3, I, E> {
  <R, A, B extends A>(fa: Kind3<F, R, E, A>, refinementWithIndex: RefinementWithIndex<I, A, B>): Kind3<F, R, E, B>
  <R, A>(fa: Kind3<F, R, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterableWithIndex3C<F extends URIS3, I, E> extends FunctorWithIndex3C<F, I, E>, Filterable3C<F, E> {
  readonly partitionMapWithIndex: <R, A, B, C>(
    fa: Kind3<F, R, E, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>
  readonly partitionWithIndex: PartitionWithIndex3C<F, I, E>
  readonly filterMapWithIndex: <R, A, B>(fa: Kind3<F, R, E, A>, f: (i: I, a: A) => Option<B>) => Kind3<F, R, E, B>
  readonly filterWithIndex: FilterWithIndex3C<F, I, E>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface PartitionWithIndex3<F extends URIS3, I> {
  <R, E, A, B extends A>(
    fa: Kind3<F, R, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  <R, E, A>(
    fa: Kind3<F, R, E, A>,
    predicateWithIndex: PredicateWithIndex<I, A>,
  ): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface PartitionWithIndex3C<F extends URIS3, I, E> {
  <R, A, B extends A>(
    fa: Kind3<F, R, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, B>>
  <R, A>(
    fa: Kind3<F, R, E, A>,
    predicateWithIndex: PredicateWithIndex<I, A>,
  ): Separated<Kind3<F, R, E, A>, Kind3<F, R, E, A>>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterableWithIndex3<F extends URIS3, I> extends FunctorWithIndex3<F, I>, Filterable3<F> {
  readonly partitionMapWithIndex: <R, E, A, B, C>(
    fa: Kind3<F, R, E, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind3<F, R, E, B>, Kind3<F, R, E, C>>
  readonly partitionWithIndex: PartitionWithIndex3<F, I>
  readonly filterMapWithIndex: <R, E, A, B>(fa: Kind3<F, R, E, A>, f: (i: I, a: A) => Option<B>) => Kind3<F, R, E, B>
  readonly filterWithIndex: FilterWithIndex3<F, I>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterWithIndex4<F extends URIS4, I> {
  <S, R, E, A, B extends A>(
    fa: Kind4<F, S, R, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Kind4<F, S, R, E, B>
  <S, R, E, A>(fa: Kind4<F, S, R, E, A>, predicateWithIndex: PredicateWithIndex<I, A>): Kind4<F, S, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface PartitionWithIndex4<F extends URIS4, I> {
  <S, R, E, A, B extends A>(
    fa: Kind4<F, S, R, E, A>,
    refinementWithIndex: RefinementWithIndex<I, A, B>,
  ): Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, B>>
  <S, R, E, A>(
    fa: Kind4<F, S, R, E, A>,
    predicateWithIndex: PredicateWithIndex<I, A>,
  ): Separated<Kind4<F, S, R, E, A>, Kind4<F, S, R, E, A>>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FilterableWithIndex4<F extends URIS4, I> extends FunctorWithIndex4<F, I>, Filterable4<F> {
  readonly partitionMapWithIndex: <S, R, E, A, B, C>(
    fa: Kind4<F, S, R, E, A>,
    f: (i: I, a: A) => Either<B, C>,
  ) => Separated<Kind4<F, S, R, E, B>, Kind4<F, S, R, E, C>>
  readonly partitionWithIndex: PartitionWithIndex4<F, I>
  readonly filterMapWithIndex: <S, R, E, A, B>(
    fa: Kind4<F, S, R, E, A>,
    f: (i: I, a: A) => Option<B>,
  ) => Kind4<F, S, R, E, B>
  readonly filterWithIndex: FilterWithIndex4<F, I>
}
