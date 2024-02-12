/**
 * Lift a computation from the `IO` monad
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import {
  type Chain,
  type Chain1,
  type Chain2,
  type Chain2C,
  type Chain3,
  type Chain3C,
  type Chain4,
  tap,
} from './Chain'
import { flow } from './function'
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
import { type IO } from './IO'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface FromIO<F> {
  readonly URI: F
  readonly fromIO: <A>(fa: IO<A>) => HKT<F, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface FromIO1<F extends URIS> {
  readonly URI: F
  readonly fromIO: <A>(fa: IO<A>) => Kind<F, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface FromIO2<F extends URIS2> {
  readonly URI: F
  readonly fromIO: <A, E>(fa: IO<A>) => Kind2<F, E, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface FromIO2C<F extends URIS2, E> {
  readonly URI: F
  readonly _E: E
  readonly fromIO: <A>(fa: IO<A>) => Kind2<F, E, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface FromIO3<F extends URIS3> {
  readonly URI: F
  readonly fromIO: <A, R, E>(fa: IO<A>) => Kind3<F, R, E, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface FromIO3C<F extends URIS3, E> {
  readonly URI: F
  readonly _E: E
  readonly fromIO: <A, R>(fa: IO<A>) => Kind3<F, R, E, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface FromIO4<F extends URIS4> {
  readonly URI: F
  readonly fromIO: <A, S, R, E>(fa: IO<A>) => Kind4<F, S, R, E, A>
}

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function fromIOK<F extends URIS4>(
  F: FromIO4<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => <S, R, E>(...a: A) => Kind4<F, S, R, E, B>
export function fromIOK<F extends URIS3>(
  F: FromIO3<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => <R, E>(...a: A) => Kind3<F, R, E, B>
export function fromIOK<F extends URIS3, E>(
  F: FromIO3C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => <R>(...a: A) => Kind3<F, R, E, B>
export function fromIOK<F extends URIS2>(
  F: FromIO2<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => <E>(...a: A) => Kind2<F, E, B>
export function fromIOK<F extends URIS2, E>(
  F: FromIO2C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => Kind2<F, E, B>
export function fromIOK<F extends URIS>(
  F: FromIO1<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => Kind<F, B>
export function fromIOK<F>(
  F: FromIO<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => HKT<F, B>
export function fromIOK<F>(
  F: FromIO<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => HKT<F, B> {
  return f => flow(f, F.fromIO)
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function chainIOK<M extends URIS4>(
  F: FromIO4<M>,
  M: Chain4<M>,
): <A, B>(f: (a: A) => IO<B>) => <S, R, E>(first: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, B>
export function chainIOK<M extends URIS3>(
  F: FromIO3<M>,
  M: Chain3<M>,
): <A, B>(f: (a: A) => IO<B>) => <R, E>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, B>
export function chainIOK<M extends URIS3, E>(
  F: FromIO3C<M, E>,
  M: Chain3C<M, E>,
): <A, B>(f: (a: A) => IO<B>) => <R>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, B>
export function chainIOK<M extends URIS2>(
  F: FromIO2<M>,
  M: Chain2<M>,
): <A, B>(f: (a: A) => IO<B>) => <E>(first: Kind2<M, E, A>) => Kind2<M, E, B>
export function chainIOK<M extends URIS2, E>(
  F: FromIO2C<M, E>,
  M: Chain2C<M, E>,
): <A, B>(f: (a: A) => IO<B>) => (first: Kind2<M, E, A>) => Kind2<M, E, B>
export function chainIOK<M extends URIS>(
  F: FromIO1<M>,
  M: Chain1<M>,
): <A, B>(f: (a: A) => IO<B>) => (first: Kind<M, A>) => Kind<M, B>
export function chainIOK<M>(F: FromIO<M>, M: Chain<M>): <A, B>(f: (a: A) => IO<B>) => (first: HKT<M, A>) => HKT<M, B>
export function chainIOK<M>(F: FromIO<M>, M: Chain<M>): <A, B>(f: (a: A) => IO<B>) => (first: HKT<M, A>) => HKT<M, B> {
  return f => {
    const g = flow(f, F.fromIO)
    return first => M.chain(first, g)
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function chainFirstIOK<M extends URIS4>(
  F: FromIO4<M>,
  M: Chain4<M>,
): <A, B>(f: (a: A) => IO<B>) => <S, R, E>(first: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, A>
export function chainFirstIOK<M extends URIS3>(
  F: FromIO3<M>,
  M: Chain3<M>,
): <A, B>(f: (a: A) => IO<B>) => <R, E>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, A>
export function chainFirstIOK<M extends URIS3, E>(
  F: FromIO3C<M, E>,
  M: Chain3C<M, E>,
): <A, B>(f: (a: A) => IO<B>) => <R, E>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, A>
export function chainFirstIOK<M extends URIS2>(
  F: FromIO2<M>,
  M: Chain2<M>,
): <A, B>(f: (a: A) => IO<B>) => <E>(first: Kind2<M, E, A>) => Kind2<M, E, A>
export function chainFirstIOK<M extends URIS2, E>(
  F: FromIO2C<M, E>,
  M: Chain2C<M, E>,
): <A, B>(f: (a: A) => IO<B>) => <E>(first: Kind2<M, E, A>) => Kind2<M, E, A>
export function chainFirstIOK<M extends URIS>(
  F: FromIO1<M>,
  M: Chain1<M>,
): <A, B>(f: (a: A) => IO<B>) => (first: Kind<M, A>) => Kind<M, A>
export function chainFirstIOK<M>(
  F: FromIO<M>,
  M: Chain<M>,
): <A, B>(f: (a: A) => IO<B>) => (first: HKT<M, A>) => HKT<M, A>
export function chainFirstIOK<M>(
  F: FromIO<M>,
  M: Chain<M>,
): <A, B>(f: (a: A) => IO<B>) => (first: HKT<M, A>) => HKT<M, A> {
  const tapIOM = tapIO(F, M)
  return f => first => tapIOM(first, f)
}

/** @internal */
export function tapIO<M extends URIS4>(
  F: FromIO4<M>,
  M: Chain4<M>,
): <A, B, S, R, E>(self: Kind4<M, S, R, E, A>, f: (a: A) => IO<B>) => Kind4<M, S, R, E, A>
/** @internal */
export function tapIO<M extends URIS3>(
  F: FromIO3<M>,
  M: Chain3<M>,
): <A, B, R, E>(self: Kind3<M, R, E, A>, f: (a: A) => IO<B>) => Kind3<M, R, E, A>
/** @internal */
export function tapIO<M extends URIS3, E>(
  F: FromIO3C<M, E>,
  M: Chain3C<M, E>,
): <A, B, R, E>(self: Kind3<M, R, E, A>, f: (a: A) => IO<B>) => Kind3<M, R, E, A>
/** @internal */
export function tapIO<M extends URIS2>(
  F: FromIO2<M>,
  M: Chain2<M>,
): <A, B, E>(self: Kind2<M, E, A>, f: (a: A) => IO<B>) => Kind2<M, E, A>
/** @internal */
export function tapIO<M extends URIS2, E>(
  F: FromIO2C<M, E>,
  M: Chain2C<M, E>,
): <A, B, E>(self: Kind2<M, E, A>, f: (a: A) => IO<B>) => Kind2<M, E, A>
/** @internal */
export function tapIO<M extends URIS>(
  F: FromIO1<M>,
  M: Chain1<M>,
): <A, B>(self: Kind<M, A>, f: (a: A) => IO<B>) => Kind<M, A>
/** @internal */
export function tapIO<M>(F: FromIO<M>, M: Chain<M>): <A, B>(self: HKT<M, A>, f: (a: A) => IO<B>) => HKT<M, A>
/** @internal */
export function tapIO<M>(F: FromIO<M>, M: Chain<M>): <A, B>(self: HKT<M, A>, f: (a: A) => IO<B>) => HKT<M, A> {
  const chainFirstM = tap(M)
  return (self, f) => chainFirstM(self, flow(f, F.fromIO))
}
