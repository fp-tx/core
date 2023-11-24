/**
 * The reader monad transformer, which adds a read-only environment to the given monad.
 *
 * The `of` function ignores the environment, while `chain` passes the inherited environment to both subcomputations.
 *
 * @since 2.0.0
 */
import { type Apply, type Apply1, type Apply2, type Apply2C, type Apply3, type Apply3C, type Apply4 } from './Apply'
import { type Chain, type Chain1, type Chain2, type Chain2C, type Chain3, type Chain3C, type Chain4 } from './Chain'
import { flow, pipe } from './function'
import { type Functor, type Functor1, type Functor2, type Functor2C, type Functor3, type Functor3C, type Functor4 } from './Functor'
import { type HKT, type Kind, type Kind2, type Kind3, type Kind4, type URIS, type URIS2, type URIS3, type URIS4 } from './HKT'
import { type Monad, type Monad1, type Monad2, type Monad2C, type Monad3 } from './Monad'
import {
  type NaturalTransformation,
  type NaturalTransformation11,
  type NaturalTransformation12,
  type NaturalTransformation22,
  type NaturalTransformation23R,
  type NaturalTransformation24S,
} from './NaturalTransformation'
import { type Pointed, type Pointed1, type Pointed2, type Pointed2C, type Pointed3, type Pointed3C, type Pointed4 } from './Pointed'
import { type Reader } from './Reader'

/** @since 2.10.0 */
export function of<F extends URIS4>(F: Pointed4<F>): <A, R, S, FR, FE>(a: A) => Reader<R, Kind4<F, S, FR, FE, A>>
export function of<F extends URIS3>(F: Pointed3<F>): <A, R, FR, FE>(a: A) => Reader<R, Kind3<F, FR, FE, A>>
export function of<F extends URIS3, FE>(F: Pointed3C<F, FE>): <A, R, FR>(a: A) => Reader<R, Kind3<F, FR, FE, A>>
export function of<F extends URIS2>(F: Pointed2<F>): <A, R, FE>(a: A) => Reader<R, Kind2<F, FE, A>>
export function of<F extends URIS2, FE>(F: Pointed2C<F, FE>): <A, R>(a: A) => Reader<R, Kind2<F, FE, A>>
export function of<F extends URIS>(F: Pointed1<F>): <A, R>(a: A) => Reader<R, Kind<F, A>>
export function of<F>(F: Pointed<F>): <A, R>(a: A) => Reader<R, HKT<F, A>>
export function of<F>(F: Pointed<F>): <A, R>(a: A) => Reader<R, HKT<F, A>> {
  return a => () => F.of(a)
}

/** @since 2.10.0 */
export function map<F extends URIS4>(
  F: Functor4<F>,
): <A, B>(f: (a: A) => B) => <R, S, FR, FE>(fa: Reader<R, Kind4<F, S, FR, FE, A>>) => Reader<R, Kind4<F, S, FR, FE, B>>
export function map<F extends URIS3>(
  F: Functor3<F>,
): <A, B>(f: (a: A) => B) => <R, FR, FE>(fa: Reader<R, Kind3<F, FR, FE, A>>) => Reader<R, Kind3<F, FR, FE, B>>
export function map<F extends URIS3, FE>(
  F: Functor3C<F, FE>,
): <A, B>(f: (a: A) => B) => <R, FR>(fa: Reader<R, Kind3<F, FR, FE, A>>) => Reader<R, Kind3<F, FR, FE, B>>
export function map<F extends URIS2>(
  F: Functor2<F>,
): <A, B>(f: (a: A) => B) => <R, FE>(fa: Reader<R, Kind2<F, FE, A>>) => Reader<R, Kind2<F, FE, B>>
export function map<F extends URIS2, FE>(
  F: Functor2C<F, FE>,
): <A, B>(f: (a: A) => B) => <R>(fa: Reader<R, Kind2<F, FE, A>>) => Reader<R, Kind2<F, FE, B>>
export function map<F extends URIS>(
  F: Functor1<F>,
): <A, B>(f: (a: A) => B) => <R>(fa: Reader<R, Kind<F, A>>) => Reader<R, Kind<F, B>>
export function map<F>(F: Functor<F>): <A, B>(f: (a: A) => B) => <R>(fa: Reader<R, HKT<F, A>>) => Reader<R, HKT<F, B>>
export function map<F>(F: Functor<F>): <A, B>(f: (a: A) => B) => <R>(fa: Reader<R, HKT<F, A>>) => Reader<R, HKT<F, B>> {
  return f => fa => r => F.map(fa(r), f)
}

/** @since 2.10.0 */
export function ap<F extends URIS4>(
  F: Apply4<F>,
): <R, S, FR, FE, A>(
  fa: Reader<R, Kind4<F, S, FR, FE, A>>,
) => <B>(fab: Reader<R, Kind4<F, S, FR, FE, (a: A) => B>>) => Reader<R, Kind4<F, S, FR, FE, B>>
export function ap<F extends URIS3>(
  F: Apply3<F>,
): <R, FR, FE, A>(
  fa: Reader<R, Kind3<F, FR, FE, A>>,
) => <B>(fab: Reader<R, Kind3<F, FR, FE, (a: A) => B>>) => Reader<R, Kind3<F, FR, FE, B>>
export function ap<F extends URIS3, FE>(
  F: Apply3C<F, FE>,
): <R, FR, A>(
  fa: Reader<R, Kind3<F, FR, FE, A>>,
) => <B>(fab: Reader<R, Kind3<F, FR, FE, (a: A) => B>>) => Reader<R, Kind3<F, FR, FE, B>>
export function ap<F extends URIS2>(
  F: Apply2<F>,
): <R, FE, A>(
  fa: Reader<R, Kind2<F, FE, A>>,
) => <B>(fab: Reader<R, Kind2<F, FE, (a: A) => B>>) => Reader<R, Kind2<F, FE, B>>
export function ap<F extends URIS2, FE>(
  F: Apply2C<F, FE>,
): <R, A>(
  fa: Reader<R, Kind2<F, FE, A>>,
) => <B>(fab: Reader<R, Kind2<F, FE, (a: A) => B>>) => Reader<R, Kind2<F, FE, B>>
export function ap<F extends URIS>(
  F: Apply1<F>,
): <R, A>(fa: Reader<R, Kind<F, A>>) => <B>(fab: Reader<R, Kind<F, (a: A) => B>>) => Reader<R, Kind<F, B>>
export function ap<F>(
  F: Apply<F>,
): <R, A>(fa: Reader<R, HKT<F, A>>) => <B>(fab: Reader<R, HKT<F, (a: A) => B>>) => Reader<R, HKT<F, B>>
export function ap<F>(
  F: Apply<F>,
): <R, A>(fa: Reader<R, HKT<F, A>>) => <B>(fab: Reader<R, HKT<F, (a: A) => B>>) => Reader<R, HKT<F, B>> {
  return fa => fab => r => F.ap(fab(r), fa(r))
}

/** @since 2.10.0 */
export function chain<M extends URIS4>(
  M: Chain4<M>,
): <A, R, S, FR, FE, B>(
  f: (a: A) => Reader<R, Kind4<M, S, FR, FE, B>>,
) => (ma: Reader<R, Kind4<M, S, FR, FE, A>>) => Reader<R, Kind4<M, S, FR, FE, B>>
export function chain<M extends URIS3>(
  M: Chain3<M>,
): <A, R, FR, FE, B>(
  f: (a: A) => Reader<R, Kind3<M, FR, FE, B>>,
) => (ma: Reader<R, Kind3<M, FR, FE, A>>) => Reader<R, Kind3<M, FR, FE, B>>
export function chain<M extends URIS3, FE>(
  M: Chain3C<M, FE>,
): <A, R, FR, B>(
  f: (a: A) => Reader<R, Kind3<M, FR, FE, B>>,
) => (ma: Reader<R, Kind3<M, FR, FE, A>>) => Reader<R, Kind3<M, FR, FE, B>>
export function chain<M extends URIS2>(
  M: Chain2<M>,
): <A, R, FE, B>(
  f: (a: A) => Reader<R, Kind2<M, FE, B>>,
) => (ma: Reader<R, Kind2<M, FE, A>>) => Reader<R, Kind2<M, FE, B>>
export function chain<M extends URIS2, FE>(
  M: Chain2C<M, FE>,
): <A, R, B>(f: (a: A) => Reader<R, Kind2<M, FE, B>>) => (ma: Reader<R, Kind2<M, FE, A>>) => Reader<R, Kind2<M, FE, B>>
export function chain<M extends URIS>(
  M: Chain1<M>,
): <A, R, B>(f: (a: A) => Reader<R, Kind<M, B>>) => (ma: Reader<R, Kind<M, A>>) => Reader<R, Kind<M, B>>
export function chain<M>(
  M: Chain<M>,
): <A, R, B>(f: (a: A) => Reader<R, HKT<M, B>>) => (ma: Reader<R, HKT<M, A>>) => Reader<R, HKT<M, B>>
export function chain<M>(
  M: Chain<M>,
): <A, R, B>(f: (a: A) => Reader<R, HKT<M, B>>) => (ma: Reader<R, HKT<M, A>>) => Reader<R, HKT<M, B>> {
  const flatMapM = flatMap(M)
  return f => ma => flatMapM(ma, f)
}

/** @internal */
export function flatMap<M extends URIS>(
  M: Chain1<M>,
): <R, A, B>(ma: Reader<R, Kind<M, A>>, f: (a: A) => Reader<R, Kind<M, B>>) => Reader<R, Kind<M, B>>
/** @internal */
export function flatMap<M>(
  M: Chain<M>,
): <R, A, B>(ma: Reader<R, HKT<M, A>>, f: (a: A) => Reader<R, HKT<M, B>>) => Reader<R, HKT<M, B>>
/** @internal */
export function flatMap<M>(
  M: Chain<M>,
): <R, A, B>(ma: Reader<R, HKT<M, A>>, f: (a: A) => Reader<R, HKT<M, B>>) => Reader<R, HKT<M, B>> {
  return (ma, f) => r => M.chain(ma(r), a => f(a)(r))
}

/** @since 2.10.0 */
export function fromReader<F extends URIS4>(
  F: Pointed4<F>,
): <R, A, S, FR, FE>(ma: Reader<R, A>) => Reader<R, Kind4<F, S, FR, FE, A>>
export function fromReader<F extends URIS3>(
  F: Pointed3<F>,
): <R, A, FR, FE>(ma: Reader<R, A>) => Reader<R, Kind3<F, FR, FE, A>>
export function fromReader<F extends URIS3, FE>(
  F: Pointed3C<F, FE>,
): <R, A, FR>(ma: Reader<R, A>) => Reader<R, Kind3<F, FR, FE, A>>
export function fromReader<F extends URIS2>(F: Pointed2<F>): <R, A, FE>(ma: Reader<R, A>) => Reader<R, Kind2<F, FE, A>>
export function fromReader<F extends URIS2, FE>(
  F: Pointed2C<F, FE>,
): <R, A>(ma: Reader<R, A>) => Reader<R, Kind2<F, FE, A>>
export function fromReader<F extends URIS>(F: Pointed1<F>): <R, A>(ma: Reader<R, A>) => Reader<R, Kind<F, A>>
export function fromReader<F>(F: Pointed<F>): <R, A>(ma: Reader<R, A>) => Reader<R, HKT<F, A>>
export function fromReader<F>(F: Pointed<F>): <R, A>(ma: Reader<R, A>) => Reader<R, HKT<F, A>> {
  return ma => flow(ma, F.of)
}

/**
 * @since 2.11.0
 * @category Constructors
 */
export function fromNaturalTransformation<F extends URIS2, G extends URIS4>(
  nt: NaturalTransformation24S<F, G>,
): <R, S, A, E>(f: (r: R) => Kind2<F, S, A>) => Reader<R, Kind4<G, S, R, E, A>>
export function fromNaturalTransformation<F extends URIS2, G extends URIS3>(
  nt: NaturalTransformation23R<F, G>,
): <R, A, E>(f: (r: R) => Kind2<F, R, A>) => Reader<R, Kind3<G, R, E, A>>
export function fromNaturalTransformation<F extends URIS2, G extends URIS2>(
  nt: NaturalTransformation22<F, G>,
): <R, E, A>(f: (r: R) => Kind2<F, E, A>) => Reader<R, Kind2<G, E, A>>
export function fromNaturalTransformation<F extends URIS, G extends URIS2>(
  nt: NaturalTransformation12<F, G>,
): <R, A, E>(f: (r: R) => Kind<F, A>) => Reader<R, Kind2<G, E, A>>
export function fromNaturalTransformation<F extends URIS, G extends URIS>(
  nt: NaturalTransformation11<F, G>,
): <R, A>(f: (r: R) => Kind<F, A>) => Reader<R, Kind<G, A>>
export function fromNaturalTransformation<F, G>(
  nt: NaturalTransformation<F, G>,
): <R, A>(f: (r: R) => HKT<F, A>) => Reader<R, HKT<G, A>>
export function fromNaturalTransformation<F, G>(
  nt: NaturalTransformation<F, G>,
): <R, A>(f: (r: R) => HKT<F, A>) => Reader<R, HKT<G, A>> {
  return f => flow(f, nt)
}

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ReaderT<M, R, A> {
  (r: R): HKT<M, A>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ReaderM<M> {
  readonly map: <R, A, B>(ma: ReaderT<M, R, A>, f: (a: A) => B) => ReaderT<M, R, B>
  readonly of: <R, A>(a: A) => ReaderT<M, R, A>
  readonly ap: <R, A, B>(mab: ReaderT<M, R, (a: A) => B>, ma: ReaderT<M, R, A>) => ReaderT<M, R, B>
  readonly chain: <R, A, B>(ma: ReaderT<M, R, A>, f: (a: A) => ReaderT<M, R, B>) => ReaderT<M, R, B>
  readonly ask: <R>() => ReaderT<M, R, R>
  readonly asks: <R, A>(f: (r: R) => A) => ReaderT<M, R, A>
  readonly local: <R1, A, R2>(ma: ReaderT<M, R1, A>, f: (d: R2) => R1) => ReaderT<M, R2, A>
  readonly fromReader: <R, A>(ma: Reader<R, A>) => ReaderT<M, R, A>
  readonly fromM: <R, A>(ma: HKT<M, A>) => ReaderT<M, R, A>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ReaderT1<M extends URIS, R, A> {
  (r: R): Kind<M, A>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ReaderM1<M extends URIS> {
  readonly map: <R, A, B>(ma: ReaderT1<M, R, A>, f: (a: A) => B) => ReaderT1<M, R, B>
  readonly of: <R, A>(a: A) => ReaderT1<M, R, A>
  readonly ap: <R, A, B>(mab: ReaderT1<M, R, (a: A) => B>, ma: ReaderT1<M, R, A>) => ReaderT1<M, R, B>
  readonly chain: <R, A, B>(ma: ReaderT1<M, R, A>, f: (a: A) => ReaderT1<M, R, B>) => ReaderT1<M, R, B>
  readonly ask: <R>() => ReaderT1<M, R, R>
  readonly asks: <R, A>(f: (r: R) => A) => ReaderT1<M, R, A>
  readonly local: <R1, A, R2>(ma: ReaderT1<M, R1, A>, f: (d: R2) => R1) => ReaderT1<M, R2, A>
  readonly fromReader: <R, A>(ma: Reader<R, A>) => ReaderT1<M, R, A>
  readonly fromM: <R, A>(ma: Kind<M, A>) => ReaderT1<M, R, A>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ReaderT2<M extends URIS2, R, E, A> {
  (r: R): Kind2<M, E, A>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ReaderM2<M extends URIS2> {
  readonly map: <R, E, A, B>(ma: ReaderT2<M, R, E, A>, f: (a: A) => B) => ReaderT2<M, R, E, B>
  readonly of: <R, E, A>(a: A) => ReaderT2<M, R, E, A>
  readonly ap: <R, E, A, B>(mab: ReaderT2<M, R, E, (a: A) => B>, ma: ReaderT2<M, R, E, A>) => ReaderT2<M, R, E, B>
  readonly chain: <R, E, A, B>(ma: ReaderT2<M, R, E, A>, f: (a: A) => ReaderT2<M, R, E, B>) => ReaderT2<M, R, E, B>
  readonly ask: <R, E>() => ReaderT2<M, R, E, R>
  readonly asks: <R, E, A>(f: (r: R) => A) => ReaderT2<M, R, E, A>
  readonly local: <R1, E, A, R2>(ma: ReaderT2<M, R1, E, A>, f: (d: R2) => R1) => ReaderT2<M, R2, E, A>
  readonly fromReader: <R, E, A>(ma: Reader<R, A>) => ReaderT2<M, R, E, A>
  readonly fromM: <R, E, A>(ma: Kind2<M, E, A>) => ReaderT2<M, R, E, A>
}

/**
 * @deprecated
 * @since 2.2.0
 * @category Zone of death
 */
export interface ReaderM2C<M extends URIS2, E> {
  readonly map: <R, A, B>(ma: ReaderT2<M, R, E, A>, f: (a: A) => B) => ReaderT2<M, R, E, B>
  readonly of: <R, A>(a: A) => ReaderT2<M, R, E, A>
  readonly ap: <R, A, B>(mab: ReaderT2<M, R, E, (a: A) => B>, ma: ReaderT2<M, R, E, A>) => ReaderT2<M, R, E, B>
  readonly chain: <R, A, B>(ma: ReaderT2<M, R, E, A>, f: (a: A) => ReaderT2<M, R, E, B>) => ReaderT2<M, R, E, B>
  readonly ask: <R>() => ReaderT2<M, R, E, R>
  readonly asks: <R, A>(f: (r: R) => A) => ReaderT2<M, R, E, A>
  readonly local: <R1, A, R2>(ma: ReaderT2<M, R1, E, A>, f: (d: R2) => R1) => ReaderT2<M, R2, E, A>
  readonly fromReader: <R, A>(ma: Reader<R, A>) => ReaderT2<M, R, E, A>
  readonly fromM: <R, A>(ma: Kind2<M, E, A>) => ReaderT2<M, R, E, A>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ReaderT3<M extends URIS3, R, U, E, A> {
  (r: R): Kind3<M, U, E, A>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ReaderM3<M extends URIS3> {
  readonly map: <R, U, E, A, B>(ma: ReaderT3<M, R, U, E, A>, f: (a: A) => B) => ReaderT3<M, R, U, E, B>
  readonly of: <R, U, E, A>(a: A) => ReaderT3<M, R, U, E, A>
  readonly ap: <R, U, E, A, B>(
    mab: ReaderT3<M, R, U, E, (a: A) => B>,
    ma: ReaderT3<M, R, U, E, A>,
  ) => ReaderT3<M, R, U, E, B>
  readonly chain: <R, U, E, A, B>(
    ma: ReaderT3<M, R, U, E, A>,
    f: (a: A) => ReaderT3<M, R, U, E, B>,
  ) => ReaderT3<M, R, U, E, B>
  readonly ask: <R, U, E>() => ReaderT3<M, R, U, E, R>
  readonly asks: <R, U, E, A>(f: (r: R) => A) => ReaderT3<M, R, U, E, A>
  readonly local: <R1, U, E, A, R2>(ma: ReaderT3<M, R1, U, E, A>, f: (d: R2) => R1) => ReaderT3<M, R2, U, E, A>
  readonly fromReader: <R, U, E, A>(ma: Reader<R, A>) => ReaderT3<M, R, U, E, A>
  readonly fromM: <R, U, E, A>(ma: Kind3<M, U, E, A>) => ReaderT3<M, R, U, E, A>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export function getReaderM<M extends URIS3>(M: Monad3<M>): ReaderM3<M>
/** @deprecated */
export function getReaderM<M extends URIS2>(M: Monad2<M>): ReaderM2<M>
/** @deprecated */
export function getReaderM<M extends URIS2, E>(M: Monad2C<M, E>): ReaderM2C<M, E>
/** @deprecated */
export function getReaderM<M extends URIS>(M: Monad1<M>): ReaderM1<M>
/** @deprecated */
export function getReaderM<M>(M: Monad<M>): ReaderM<M>
/** @deprecated */
/* istanbul ignore next */
export function getReaderM<M>(M: Monad<M>): ReaderM<M> {
  const _ap = ap(M)
  const _map = map(M)
  const _chain = chain(M)

  return {
    map: (fa, f) => pipe(fa, _map(f)),
    ap: (fab, fa) => pipe(fab, _ap(fa)),
    of: of(M),
    chain: (ma, f) => pipe(ma, _chain(f)),
    ask: () => M.of,
    asks: f => flow(f, M.of),
    local: (ma, f) => q => ma(f(q)),
    fromReader: fromReader(M),
    fromM: ma => () => ma,
  }
}
