/**
 * Lift a computation from the `Task` monad
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
import {
  type FromIO,
  type FromIO1,
  type FromIO2,
  type FromIO2C,
  type FromIO3,
  type FromIO3C,
  type FromIO4,
} from './FromIO'
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
import { type Task } from './Task'

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
export interface FromTask<F> extends FromIO<F> {
  readonly fromTask: <A>(fa: Task<A>) => HKT<F, A>
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
export interface FromTask1<F extends URIS> extends FromIO1<F> {
  readonly fromTask: <A>(fa: Task<A>) => Kind<F, A>
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
export interface FromTask2<F extends URIS2> extends FromIO2<F> {
  readonly fromTask: <A, E>(fa: Task<A>) => Kind2<F, E, A>
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
export interface FromTask2C<F extends URIS2, E> extends FromIO2C<F, E> {
  readonly fromTask: <A>(fa: Task<A>) => Kind2<F, E, A>
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
export interface FromTask3<F extends URIS3> extends FromIO3<F> {
  readonly fromTask: <A, R, E>(fa: Task<A>) => Kind3<F, R, E, A>
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
export interface FromTask3C<F extends URIS3, E> extends FromIO3C<F, E> {
  readonly fromTask: <A, R>(fa: Task<A>) => Kind3<F, R, E, A>
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
export interface FromTask4<F extends URIS4> extends FromIO4<F> {
  readonly fromTask: <A, S, R, E>(fa: Task<A>) => Kind4<F, S, R, E, A>
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
export function fromTaskK<F extends URIS4>(
  F: FromTask4<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Task<B>) => <S, R, E>(...a: A) => Kind4<F, S, R, E, B>
export function fromTaskK<F extends URIS3>(
  F: FromTask3<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Task<B>) => <R, E>(...a: A) => Kind3<F, R, E, B>
export function fromTaskK<F extends URIS3, E>(
  F: FromTask3C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Task<B>) => <R>(...a: A) => Kind3<F, R, E, B>
export function fromTaskK<F extends URIS2>(
  F: FromTask2<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Task<B>) => <E>(...a: A) => Kind2<F, E, B>
export function fromTaskK<F extends URIS2, E>(
  F: FromTask2C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Task<B>) => (...a: A) => Kind2<F, E, B>
export function fromTaskK<F extends URIS>(
  F: FromTask1<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Task<B>) => (...a: A) => Kind<F, B>
export function fromTaskK<F>(
  F: FromTask<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Task<B>) => (...a: A) => HKT<F, B>
export function fromTaskK<F>(
  F: FromTask<F>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Task<B>) => (...a: A) => HKT<F, B> {
  return f => flow(f, F.fromTask)
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function chainTaskK<M extends URIS4>(
  F: FromTask4<M>,
  M: Chain4<M>,
): <A, B>(f: (a: A) => Task<B>) => <S, R, E>(first: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, B>
export function chainTaskK<M extends URIS3>(
  F: FromTask3<M>,
  M: Chain3<M>,
): <A, B>(f: (a: A) => Task<B>) => <R, E>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, B>
export function chainTaskK<M extends URIS3, E>(
  F: FromTask3C<M, E>,
  M: Chain3C<M, E>,
): <A, B>(f: (a: A) => Task<B>) => <R>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, B>
export function chainTaskK<M extends URIS2>(
  F: FromTask2<M>,
  M: Chain2<M>,
): <A, B>(f: (a: A) => Task<B>) => <E>(first: Kind2<M, E, A>) => Kind2<M, E, B>
export function chainTaskK<M extends URIS2, E>(
  F: FromTask2C<M, E>,
  M: Chain2C<M, E>,
): <A, B>(f: (a: A) => Task<B>) => (first: Kind2<M, E, A>) => Kind2<M, E, B>
export function chainTaskK<M extends URIS>(
  F: FromTask1<M>,
  M: Chain1<M>,
): <A, B>(f: (a: A) => Task<B>) => (first: Kind<M, A>) => Kind<M, B>
export function chainTaskK<M>(
  F: FromTask<M>,
  M: Chain<M>,
): <A, B>(f: (a: A) => Task<B>) => (first: HKT<M, A>) => HKT<M, B>
export function chainTaskK<M>(
  F: FromTask<M>,
  M: Chain<M>,
): <A, B>(f: (a: A) => Task<B>) => (first: HKT<M, A>) => HKT<M, B> {
  return f => {
    const g = flow(f, F.fromTask)
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
export function chainFirstTaskK<M extends URIS4>(
  F: FromTask4<M>,
  M: Chain4<M>,
): <A, B>(f: (a: A) => Task<B>) => <S, R, E>(first: Kind4<M, S, R, E, A>) => Kind4<M, S, R, E, A>
export function chainFirstTaskK<M extends URIS3>(
  F: FromTask3<M>,
  M: Chain3<M>,
): <A, B>(f: (a: A) => Task<B>) => <R, E>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, A>
export function chainFirstTaskK<M extends URIS3, E>(
  F: FromTask3C<M, E>,
  M: Chain3C<M, E>,
): <A, B>(f: (a: A) => Task<B>) => <R>(first: Kind3<M, R, E, A>) => Kind3<M, R, E, A>
export function chainFirstTaskK<M extends URIS2>(
  F: FromTask2<M>,
  M: Chain2<M>,
): <A, B>(f: (a: A) => Task<B>) => <E>(first: Kind2<M, E, A>) => Kind2<M, E, A>
export function chainFirstTaskK<M extends URIS2, E>(
  F: FromTask2C<M, E>,
  M: Chain2C<M, E>,
): <A, B>(f: (a: A) => Task<B>) => (first: Kind2<M, E, A>) => Kind2<M, E, A>
export function chainFirstTaskK<M extends URIS>(
  F: FromTask1<M>,
  M: Chain1<M>,
): <A, B>(f: (a: A) => Task<B>) => (first: Kind<M, A>) => Kind<M, A>
export function chainFirstTaskK<M>(
  F: FromTask<M>,
  M: Chain<M>,
): <A, B>(f: (a: A) => Task<B>) => (first: HKT<M, A>) => HKT<M, A>
export function chainFirstTaskK<M>(
  F: FromTask<M>,
  M: Chain<M>,
): <A, B>(f: (a: A) => Task<B>) => (first: HKT<M, A>) => HKT<M, A> {
  const tapTaskM = tapTask(F, M)
  return f => first => tapTaskM(first, f)
}

/** @internal */
export function tapTask<M extends URIS4>(
  F: FromTask4<M>,
  M: Chain4<M>,
): <S, R, E, A, B>(self: Kind4<M, S, R, E, A>, f: (a: A) => Task<B>) => Kind4<M, S, R, E, A>
/** @internal */
export function tapTask<M extends URIS3>(
  F: FromTask3<M>,
  M: Chain3<M>,
): <R, E, A, B>(self: Kind3<M, R, E, A>, f: (a: A) => Task<B>) => Kind3<M, R, E, A>
/** @internal */
export function tapTask<M extends URIS3, E>(
  F: FromTask3C<M, E>,
  M: Chain3C<M, E>,
): <R, A, B>(self: Kind3<M, R, E, A>, f: (a: A) => Task<B>) => Kind3<M, R, E, A>
/** @internal */
export function tapTask<M extends URIS2>(
  F: FromTask2<M>,
  M: Chain2<M>,
): <E, A, B>(self: Kind2<M, E, A>, f: (a: A) => Task<B>) => Kind2<M, E, A>
/** @internal */
export function tapTask<M extends URIS2, E>(
  F: FromTask2C<M, E>,
  M: Chain2C<M, E>,
): <A, B>(self: Kind2<M, E, A>, f: (a: A) => Task<B>) => Kind2<M, E, A>
/** @internal */
export function tapTask<M extends URIS>(
  F: FromTask1<M>,
  M: Chain1<M>,
): <A, B>(self: Kind<M, A>, f: (a: A) => Task<B>) => Kind<M, A>
/** @internal */
export function tapTask<M>(F: FromTask<M>, M: Chain<M>): <A, B>(self: HKT<M, A>, f: (a: A) => Task<B>) => HKT<M, A>
/** @internal */
export function tapTask<M>(F: FromTask<M>, M: Chain<M>): <A, B>(self: HKT<M, A>, f: (a: A) => Task<B>) => HKT<M, A> {
  const tapM = tap(M)
  return (self, f) => tapM(self, flow(f, F.fromTask))
}
