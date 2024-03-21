/**
 * Lift a computation from the `Reader` monad.
 *
 * @meta
 * {@since 1.0.0}
 * @packageDocumentation
 */
import { type Chain, type Chain2, type Chain3, type Chain3C, type Chain4, tap } from './Chain'
import { flow } from './function'
import { type HKT2, type Kind2, type Kind3, type Kind4, type URIS2, type URIS3, type URIS4 } from './HKT'
import * as R from './Reader'
import { type Reader } from './Reader'

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
export interface FromReader<F> {
  readonly URI: F
  readonly fromReader: <R, A>(fa: Reader<R, A>) => HKT2<F, R, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FromReader2<F extends URIS2> {
  readonly URI: F
  readonly fromReader: <E, A>(fa: Reader<E, A>) => Kind2<F, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FromReader3<F extends URIS3> {
  readonly URI: F
  readonly fromReader: <R, A, E>(fa: Reader<R, A>) => Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FromReader3C<F extends URIS3, E> {
  readonly URI: F
  readonly _E: E
  readonly fromReader: <R, A>(fa: Reader<R, A>) => Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FromReader4<F extends URIS4> {
  readonly URI: F
  readonly fromReader: <R, A, S, E>(fa: Reader<R, A>) => Kind4<F, S, R, E, A>
}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function ask<F extends URIS4>(F: FromReader4<F>): <S, R, E>() => Kind4<F, S, R, E, R>
export function ask<F extends URIS3>(F: FromReader3<F>): <R, E>() => Kind3<F, R, E, R>
export function ask<F extends URIS3, E>(F: FromReader3C<F, E>): <R>() => Kind3<F, R, E, R>
export function ask<F extends URIS2>(F: FromReader2<F>): <R>() => Kind2<F, R, R>
export function ask<F>(F: FromReader<F>): <R>() => HKT2<F, R, R>
export function ask<F>(F: FromReader<F>): <R>() => HKT2<F, R, R> {
  return () => F.fromReader(R.ask())
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function asks<F extends URIS4>(F: FromReader4<F>): <R, A, S, E>(f: (r: R) => A) => Kind4<F, S, R, E, A>
export function asks<F extends URIS3>(F: FromReader3<F>): <R, A, E>(f: (r: R) => A) => Kind3<F, R, E, A>
export function asks<F extends URIS3, E>(F: FromReader3C<F, E>): <R, A>(f: (r: R) => A) => Kind3<F, R, E, A>
export function asks<F extends URIS2>(F: FromReader2<F>): <R, A>(f: (r: R) => A) => Kind2<F, R, A>
export function asks<F>(F: FromReader<F>): <R, A>(f: (r: R) => A) => HKT2<F, R, A>
export function asks<F>(F: FromReader<F>): <R, A>(f: (r: R) => A) => HKT2<F, R, A> {
  return F.fromReader
}

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function fromReaderK<F extends URIS4>(
  F: FromReader4<F>,
): <A extends ReadonlyArray<unknown>, R, B>(f: (...a: A) => Reader<R, B>) => <S, E>(...a: A) => Kind4<F, S, R, E, B>
export function fromReaderK<F extends URIS3>(
  F: FromReader3<F>,
): <A extends ReadonlyArray<unknown>, R, B>(f: (...a: A) => Reader<R, B>) => <E>(...a: A) => Kind3<F, R, E, B>
export function fromReaderK<F extends URIS3, E>(
  F: FromReader3C<F, E>,
): <A extends ReadonlyArray<unknown>, R, B>(f: (...a: A) => Reader<R, B>) => (...a: A) => Kind3<F, R, E, B>
export function fromReaderK<F extends URIS2>(
  F: FromReader2<F>,
): <A extends ReadonlyArray<unknown>, R, B>(f: (...a: A) => Reader<R, B>) => (...a: A) => Kind2<F, R, B>
export function fromReaderK<F>(
  F: FromReader<F>,
): <A extends ReadonlyArray<unknown>, R, B>(f: (...a: A) => Reader<R, B>) => (...a: A) => HKT2<F, R, B>
export function fromReaderK<F>(
  F: FromReader<F>,
): <A extends ReadonlyArray<unknown>, R, B>(f: (...a: A) => Reader<R, B>) => (...a: A) => HKT2<F, R, B> {
  return f => flow(f, F.fromReader)
}

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function chainReaderK<M extends URIS4>(
  F: FromReader4<M>,
  M: Chain4<M>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => <S, E>(ma: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, B>
export function chainReaderK<M extends URIS3>(
  F: FromReader3<M>,
  M: Chain3<M>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => <E>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, B>
export function chainReaderK<M extends URIS3, E>(
  F: FromReader3C<M, E>,
  M: Chain3C<M, E>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => (ma: Kind3<M, R, E, A>) => Kind3<M, R, E, B>
export function chainReaderK<M extends URIS2>(
  F: FromReader2<M>,
  M: Chain2<M>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => (ma: Kind2<M, R, A>) => Kind2<M, R, B>
export function chainReaderK<M>(
  F: FromReader<M>,
  M: Chain<M>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => (ma: HKT2<M, R, A>) => HKT2<M, R, B>
export function chainReaderK<M extends URIS2>(
  F: FromReader2<M>,
  M: Chain2<M>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => (ma: Kind2<M, R, A>) => Kind2<M, R, B> {
  const fromReaderKF = fromReaderK(F)
  return f => ma => M.chain(ma, fromReaderKF(f))
}

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function chainFirstReaderK<M extends URIS4>(
  F: FromReader4<M>,
  M: Chain4<M>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => <S, E>(ma: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, A>
export function chainFirstReaderK<M extends URIS3>(
  F: FromReader3<M>,
  M: Chain3<M>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => <E>(ma: Kind3<M, R, E, A>) => Kind3<M, R, E, A>
export function chainFirstReaderK<M extends URIS3, E>(
  F: FromReader3C<M, E>,
  M: Chain3C<M, E>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => (ma: Kind3<M, R, E, A>) => Kind3<M, R, E, A>
export function chainFirstReaderK<M extends URIS2>(
  F: FromReader2<M>,
  M: Chain2<M>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => (ma: Kind2<M, R, A>) => Kind2<M, R, A>
export function chainFirstReaderK<M>(
  F: FromReader<M>,
  M: Chain<M>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => (ma: HKT2<M, R, A>) => HKT2<M, R, A>
export function chainFirstReaderK<M extends URIS2>(
  F: FromReader2<M>,
  M: Chain2<M>,
): <A, R, B>(f: (a: A) => Reader<R, B>) => (ma: Kind2<M, R, A>) => Kind2<M, R, A> {
  const tapM = tapReader(F, M)
  return f => self => tapM(self, f)
}

/** @internal */
export function tapReader<M extends URIS4>(
  F: FromReader4<M>,
  M: Chain4<M>,
): <A, S, R, E, B>(self: Kind4<M, S, R, E, A>, f: (a: A) => Reader<R, B>) => Kind4<M, S, R, E, A>
/** @internal */
export function tapReader<M extends URIS3>(
  F: FromReader3<M>,
  M: Chain3<M>,
): <A, R, E, B>(self: Kind3<M, R, E, A>, f: (a: A) => Reader<R, B>) => Kind3<M, R, E, A>
/** @internal */
export function tapReader<M extends URIS3, E>(
  F: FromReader3C<M, E>,
  M: Chain3C<M, E>,
): <A, R, E, B>(self: Kind3<M, R, E, A>, f: (a: A) => Reader<R, B>) => Kind3<M, R, E, A>
/** @internal */
export function tapReader<M extends URIS2>(
  F: FromReader2<M>,
  M: Chain2<M>,
): <A, R, E, B>(self: Kind2<M, E, A>, f: (a: A) => Reader<R, B>) => Kind2<M, E, A>
export function tapReader<M extends URIS2>(
  F: FromReader<M>,
  M: Chain<M>,
): <A, R, B>(self: HKT2<M, R, A>, f: (a: A) => Reader<R, B>) => HKT2<M, R, A>
/** @internal */
export function tapReader<M extends URIS2>(
  F: FromReader2<M>,
  M: Chain2<M>,
): <A, R, B>(self: Kind2<M, R, A>, f: (a: A) => Reader<R, B>) => Kind2<M, R, A> {
  const tapM = tap(M)
  return (self, f) => tapM(self, flow(f, F.fromReader))
}
