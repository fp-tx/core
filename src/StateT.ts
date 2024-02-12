/**
 * The state monad transformer. It can be used to add state to other monads.
 *
 * The `of` function leaves the state unchanged, while `chain` uses the final state of the first computation as the
 * initial state of the second.
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Chain, type Chain1, type Chain2, type Chain2C, type Chain3, type Chain3C } from './Chain'
import { pipe } from './function'
import { type Functor, type Functor1, type Functor2, type Functor2C, type Functor3, type Functor3C } from './Functor'
import { type HKT, type Kind, type Kind2, type Kind3, type URIS, type URIS2, type URIS3 } from './HKT'
import { type Monad, type Monad1, type Monad2, type Monad2C, type Monad3, type Monad3C } from './Monad'
import { type Pointed, type Pointed1, type Pointed2, type Pointed2C, type Pointed3, type Pointed3C } from './Pointed'
import { snd } from './ReadonlyTuple'
import { type State } from './State'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface StateT<M, S, A> {
  (s: S): HKT<M, [A, S]>
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
export interface StateT1<M extends URIS, S, A> {
  (s: S): Kind<M, [A, S]>
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
export interface StateT2<M extends URIS2, S, E, A> {
  (s: S): Kind2<M, E, [A, S]>
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
export interface StateT3<M extends URIS3, S, R, E, A> {
  (s: S): Kind3<M, R, E, [A, S]>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function of<F extends URIS3>(F: Pointed3<F>): <A, S, R, E>(a: A) => StateT3<F, S, R, E, A>
export function of<F extends URIS3, E>(F: Pointed3C<F, E>): <A, S, R>(a: A) => StateT3<F, S, R, E, A>
export function of<F extends URIS2>(F: Pointed2<F>): <A, S, E>(a: A) => StateT2<F, S, E, A>
export function of<F extends URIS2, E>(F: Pointed2C<F, E>): <A, S>(a: A) => StateT2<F, S, E, A>
export function of<F extends URIS>(F: Pointed1<F>): <A, S>(a: A) => StateT1<F, S, A>
export function of<F>(F: Pointed<F>): <A, S>(a: A) => StateT<F, S, A>
export function of<F>(F: Pointed<F>): <A, S>(a: A) => StateT<F, S, A> {
  return a => s => F.of([a, s])
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function map<F extends URIS3>(
  F: Functor3<F>,
): <A, B>(f: (a: A) => B) => <S, R, E>(fa: StateT3<F, S, R, E, A>) => StateT3<F, S, R, E, B>
export function map<F extends URIS3, E>(
  F: Functor3C<F, E>,
): <A, B>(f: (a: A) => B) => <S, R>(fa: StateT3<F, S, R, E, A>) => StateT3<F, S, R, E, B>
export function map<F extends URIS2>(
  F: Functor2<F>,
): <A, B>(f: (a: A) => B) => <S, E>(fa: StateT2<F, S, E, A>) => StateT2<F, S, E, B>
export function map<F extends URIS2, E>(
  F: Functor2C<F, E>,
): <A, B>(f: (a: A) => B) => <S>(fa: StateT2<F, S, E, A>) => StateT2<F, S, E, B>
export function map<F extends URIS>(
  F: Functor1<F>,
): <A, B>(f: (a: A) => B) => <S>(fa: StateT1<F, S, A>) => StateT1<F, S, B>
export function map<F>(F: Functor<F>): <A, B>(f: (a: A) => B) => <S>(fa: StateT<F, S, A>) => StateT<F, S, B>
export function map<F>(F: Functor<F>): <A, B>(f: (a: A) => B) => <S>(fa: StateT<F, S, A>) => StateT<F, S, B> {
  return f => fa => s => F.map(fa(s), ([a, s1]) => [f(a), s1])
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function ap<M extends URIS3>(
  M: Chain3<M>,
): <S, R, E, A>(fa: StateT3<M, S, R, E, A>) => <B>(fab: StateT3<M, S, R, E, (a: A) => B>) => StateT3<M, S, R, E, B>
export function ap<M extends URIS3, E>(
  M: Chain3C<M, E>,
): <S, R, A>(fa: StateT3<M, S, R, E, A>) => <B>(fab: StateT3<M, S, R, E, (a: A) => B>) => StateT3<M, S, R, E, B>
export function ap<M extends URIS2>(
  M: Chain2<M>,
): <S, E, A>(fa: StateT2<M, S, E, A>) => <B>(fab: StateT2<M, S, E, (a: A) => B>) => StateT2<M, S, E, B>
export function ap<M extends URIS2, E>(
  M: Chain2C<M, E>,
): <S, A>(fa: StateT2<M, S, E, A>) => <B>(fab: StateT2<M, S, E, (a: A) => B>) => StateT2<M, S, E, B>
export function ap<M extends URIS>(
  M: Chain1<M>,
): <S, A>(fa: StateT1<M, S, A>) => <B>(fab: StateT1<M, S, (a: A) => B>) => StateT1<M, S, B>
export function ap<M>(
  M: Chain<M>,
): <S, A>(fa: StateT<M, S, A>) => <B>(fab: StateT<M, S, (a: A) => B>) => StateT<M, S, B>
export function ap<M>(
  M: Chain<M>,
): <S, A>(fa: StateT<M, S, A>) => <B>(fab: StateT<M, S, (a: A) => B>) => StateT<M, S, B> {
  return fa => fab => s => M.chain(fab(s), ([f, s]) => M.map(fa(s), ([a, s]) => [f(a), s]))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function chain<M extends URIS3>(
  M: Chain3<M>,
): <A, S, R, E, B>(f: (a: A) => StateT3<M, S, R, E, B>) => (ma: StateT3<M, S, R, E, A>) => StateT3<M, S, R, E, B>
export function chain<M extends URIS3, E>(
  M: Chain3C<M, E>,
): <A, S, R, B>(f: (a: A) => StateT3<M, S, R, E, B>) => (ma: StateT3<M, S, R, E, A>) => StateT3<M, S, R, E, B>
export function chain<M extends URIS2>(
  M: Chain2<M>,
): <A, S, E, B>(f: (a: A) => StateT2<M, S, E, B>) => (ma: StateT2<M, S, E, A>) => StateT2<M, S, E, B>
export function chain<M extends URIS2, E>(
  M: Chain2C<M, E>,
): <A, S, B>(f: (a: A) => StateT2<M, S, E, B>) => (ma: StateT2<M, S, E, A>) => StateT2<M, S, E, B>
export function chain<M extends URIS>(
  M: Chain1<M>,
): <A, S, B>(f: (a: A) => StateT1<M, S, B>) => (ma: StateT1<M, S, A>) => StateT1<M, S, B>
export function chain<M>(
  M: Chain<M>,
): <A, S, B>(f: (a: A) => StateT<M, S, B>) => (ma: StateT<M, S, A>) => StateT<M, S, B>
export function chain<M>(
  M: Chain<M>,
): <A, S, B>(f: (a: A) => StateT<M, S, B>) => (ma: StateT<M, S, A>) => StateT<M, S, B> {
  const flatMapM = flatMap(M)
  return f => ma => flatMapM(ma, f)
}

/** @internal */
export function flatMap<M extends URIS3>(
  M: Chain3<M>,
): <S, R, E, A, B>(ma: StateT3<M, S, R, E, A>, f: (a: A) => StateT3<M, S, R, E, B>) => StateT<M, S, B>
/** @internal */
export function flatMap<M>(M: Chain<M>): <S, A, B>(ma: StateT<M, S, A>, f: (a: A) => StateT<M, S, B>) => StateT<M, S, B>
/** @internal */
export function flatMap<M>(
  M: Chain<M>,
): <S, A, B>(ma: StateT<M, S, A>, f: (a: A) => StateT<M, S, B>) => StateT<M, S, B> {
  return (ma, f) => s => M.chain(ma(s), ([a, s1]) => f(a)(s1))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function fromState<F extends URIS3>(F: Pointed3<F>): <S, A, R, E>(sa: State<S, A>) => StateT3<F, S, R, E, A>
export function fromState<F extends URIS3, E>(F: Pointed3C<F, E>): <S, A, R>(sa: State<S, A>) => StateT3<F, S, R, E, A>
export function fromState<F extends URIS2>(F: Pointed2<F>): <S, A, E>(sa: State<S, A>) => StateT2<F, S, E, A>
export function fromState<F extends URIS2, E>(F: Pointed2C<F, E>): <S, A>(sa: State<S, A>) => StateT2<F, S, E, A>
export function fromState<F extends URIS>(F: Pointed1<F>): <S, A>(sa: State<S, A>) => StateT1<F, S, A>
export function fromState<F>(F: Pointed<F>): <S, A>(sa: State<S, A>) => StateT<F, S, A>
export function fromState<F>(F: Pointed<F>): <S, A>(sa: State<S, A>) => StateT<F, S, A> {
  return sa => s => F.of(sa(s))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function fromF<F extends URIS3>(F: Functor3<F>): <R, E, A, S>(ma: Kind3<F, R, E, A>) => StateT3<F, S, R, E, A>
export function fromF<F extends URIS3, E>(
  F: Functor3C<F, E>,
): <R, A, S>(ma: Kind3<F, R, E, A>) => StateT3<F, S, R, E, A>
export function fromF<F extends URIS2>(F: Functor2<F>): <E, A, S>(ma: Kind2<F, E, A>) => StateT2<F, S, E, A>
export function fromF<F extends URIS2, E>(F: Functor2C<F, E>): <A, S>(ma: Kind2<F, E, A>) => StateT2<F, S, E, A>
export function fromF<F extends URIS>(F: Functor1<F>): <A, S>(ma: Kind<F, A>) => StateT1<F, S, A>
export function fromF<F>(F: Functor<F>): <A, S>(ma: HKT<F, A>) => StateT<F, S, A>
export function fromF<F>(F: Functor<F>): <A, S>(ma: HKT<F, A>) => StateT<F, S, A> {
  return ma => s => F.map(ma, a => [a, s])
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function evaluate<F extends URIS3>(
  F: Functor3<F>,
): <S>(s: S) => <R, E, A>(ma: StateT3<F, S, R, E, A>) => Kind3<F, R, E, A>
export function evaluate<F extends URIS3, E>(
  F: Functor3C<F, E>,
): <S>(s: S) => <R, A>(ma: StateT3<F, S, R, E, A>) => Kind3<F, R, E, A>
export function evaluate<F extends URIS2>(
  F: Functor2<F>,
): <S>(s: S) => <E, A>(ma: StateT2<F, S, E, A>) => Kind2<F, E, A>
export function evaluate<F extends URIS2, E>(
  F: Functor2C<F, E>,
): <S>(s: S) => <A>(ma: StateT2<F, S, E, A>) => Kind2<F, E, A>
export function evaluate<F extends URIS>(F: Functor1<F>): <S>(s: S) => <A>(ma: StateT1<F, S, A>) => Kind<F, A>
export function evaluate<F>(F: Functor<F>): <S>(s: S) => <A>(ma: StateT<F, S, A>) => HKT<F, A>
export function evaluate<F>(F: Functor<F>): <S>(s: S) => <A>(ma: StateT<F, S, A>) => HKT<F, A> {
  return s => ma => F.map(ma(s), ([a]) => a)
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function execute<F extends URIS3>(
  F: Functor3<F>,
): <S>(s: S) => <R, E, A>(ma: StateT3<F, S, R, E, A>) => Kind3<F, R, E, S>
export function execute<F extends URIS3, E>(
  F: Functor3C<F, E>,
): <S>(s: S) => <R, A>(ma: StateT3<F, S, R, E, A>) => Kind3<F, R, E, S>
export function execute<F extends URIS2>(F: Functor2<F>): <S>(s: S) => <E, A>(ma: StateT2<F, S, E, A>) => Kind2<F, E, S>
export function execute<F extends URIS2, E>(
  F: Functor2C<F, E>,
): <S>(s: S) => <A>(ma: StateT2<F, S, E, A>) => Kind2<F, E, S>
export function execute<F extends URIS>(F: Functor1<F>): <S>(s: S) => <A>(ma: StateT1<F, S, A>) => Kind<F, S>
export function execute<F>(F: Functor<F>): <S>(s: S) => <A>(ma: StateT<F, S, A>) => HKT<F, S>
export function execute<F>(F: Functor<F>): <S>(s: S) => <A>(ma: StateT<F, S, A>) => HKT<F, S> {
  return s => ma => F.map(ma(s), snd)
}

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export interface StateM<M> {
  readonly map: <S, A, B>(fa: StateT<M, S, A>, f: (a: A) => B) => StateT<M, S, B>
  readonly of: <S, A>(a: A) => StateT<M, S, A>
  readonly ap: <S, A, B>(fab: StateT<M, S, (a: A) => B>, fa: StateT<M, S, A>) => StateT<M, S, B>
  readonly chain: <S, A, B>(fa: StateT<M, S, A>, f: (a: A) => StateT<M, S, B>) => StateT<M, S, B>
  readonly get: <S>() => StateT<M, S, S>
  readonly put: <S>(s: S) => StateT<M, S, void>
  readonly modify: <S>(f: (s: S) => S) => StateT<M, S, void>
  readonly gets: <S, A>(f: (s: S) => A) => StateT<M, S, A>
  readonly fromState: <S, A>(fa: State<S, A>) => StateT<M, S, A>
  readonly fromM: <S, A>(ma: HKT<M, A>) => StateT<M, S, A>
  readonly evalState: <S, A>(ma: StateT<M, S, A>, s: S) => HKT<M, A>
  readonly execState: <S, A>(ma: StateT<M, S, A>, s: S) => HKT<M, S>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export interface StateM1<M extends URIS> {
  readonly map: <S, A, B>(fa: StateT1<M, S, A>, f: (a: A) => B) => StateT1<M, S, B>
  readonly of: <S, A>(a: A) => StateT1<M, S, A>
  readonly ap: <S, A, B>(fab: StateT1<M, S, (a: A) => B>, fa: StateT1<M, S, A>) => StateT1<M, S, B>
  readonly chain: <S, A, B>(fa: StateT1<M, S, A>, f: (a: A) => StateT1<M, S, B>) => StateT1<M, S, B>
  readonly get: <S>() => StateT1<M, S, S>
  readonly put: <S>(s: S) => StateT1<M, S, void>
  readonly modify: <S>(f: (s: S) => S) => StateT1<M, S, void>
  readonly gets: <S, A>(f: (s: S) => A) => StateT1<M, S, A>
  readonly fromState: <S, A>(fa: State<S, A>) => StateT1<M, S, A>
  readonly fromM: <S, A>(ma: Kind<M, A>) => StateT1<M, S, A>
  readonly evalState: <S, A>(ma: StateT1<M, S, A>, s: S) => Kind<M, A>
  readonly execState: <S, A>(ma: StateT1<M, S, A>, s: S) => Kind<M, S>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export interface StateM2<M extends URIS2> {
  readonly map: <S, E, A, B>(fa: StateT2<M, S, E, A>, f: (a: A) => B) => StateT2<M, S, E, B>
  readonly of: <S, E, A>(a: A) => StateT2<M, S, E, A>
  readonly ap: <S, E, A, B>(fab: StateT2<M, S, E, (a: A) => B>, fa: StateT2<M, S, E, A>) => StateT2<M, S, E, B>
  readonly chain: <S, E, A, B>(fa: StateT2<M, S, E, A>, f: (a: A) => StateT2<M, S, E, B>) => StateT2<M, S, E, B>
  readonly get: <E, S>() => StateT2<M, S, E, S>
  readonly put: <E, S>(s: S) => StateT2<M, S, E, void>
  readonly modify: <E, S>(f: (s: S) => S) => StateT2<M, S, E, void>
  readonly gets: <S, E, A>(f: (s: S) => A) => StateT2<M, S, E, A>
  readonly fromState: <S, E, A>(fa: State<S, A>) => StateT2<M, S, E, A>
  readonly fromM: <S, E, A>(ma: Kind2<M, E, A>) => StateT2<M, S, E, A>
  readonly evalState: <S, E, A>(ma: StateT2<M, S, E, A>, s: S) => Kind2<M, E, A>
  readonly execState: <S, E, A>(ma: StateT2<M, S, E, A>, s: S) => Kind2<M, E, S>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export interface StateM2C<M extends URIS2, E> {
  readonly map: <S, A, B>(fa: StateT2<M, S, E, A>, f: (a: A) => B) => StateT2<M, S, E, B>
  readonly of: <S, A>(a: A) => StateT2<M, S, E, A>
  readonly ap: <S, A, B>(fab: StateT2<M, S, E, (a: A) => B>, fa: StateT2<M, S, E, A>) => StateT2<M, S, E, B>
  readonly chain: <S, A, B>(fa: StateT2<M, S, E, A>, f: (a: A) => StateT2<M, S, E, B>) => StateT2<M, S, E, B>
  readonly get: <S>() => StateT2<M, S, E, S>
  readonly put: <S>(s: S) => StateT2<M, S, E, void>
  readonly modify: <S>(f: (s: S) => S) => StateT2<M, S, E, void>
  readonly gets: <S, A>(f: (s: S) => A) => StateT2<M, S, E, A>
  readonly fromState: <S, A>(fa: State<S, A>) => StateT2<M, S, E, A>
  readonly fromM: <S, A>(ma: Kind2<M, E, A>) => StateT2<M, S, E, A>
  readonly evalState: <S, A>(ma: StateT2<M, S, E, A>, s: S) => Kind2<M, E, A>
  readonly execState: <S, A>(ma: StateT2<M, S, E, A>, s: S) => Kind2<M, E, S>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export interface StateM3<M extends URIS3> {
  readonly map: <S, R, E, A, B>(fa: StateT3<M, S, R, E, A>, f: (a: A) => B) => StateT3<M, S, R, E, B>
  readonly of: <S, R, E, A>(a: A) => StateT3<M, S, R, E, A>
  readonly ap: <S, R, E, A, B>(
    fab: StateT3<M, S, R, E, (a: A) => B>,
    fa: StateT3<M, S, R, E, A>,
  ) => StateT3<M, S, R, E, B>
  readonly chain: <S, R, E, A, B>(
    fa: StateT3<M, S, R, E, A>,
    f: (a: A) => StateT3<M, S, R, E, B>,
  ) => StateT3<M, S, R, E, B>
  readonly get: <R, E, S>() => StateT3<M, S, R, E, S>
  readonly put: <R, E, S>(s: S) => StateT3<M, S, R, E, void>
  readonly modify: <R, E, S>(f: (s: S) => S) => StateT3<M, S, R, E, void>
  readonly gets: <S, R, E, A>(f: (s: S) => A) => StateT3<M, S, R, E, A>
  readonly fromState: <S, R, E, A>(fa: State<S, A>) => StateT3<M, S, R, E, A>
  readonly fromM: <S, R, E, A>(ma: Kind3<M, R, E, A>) => StateT3<M, S, R, E, A>
  readonly evalState: <S, R, E, A>(ma: StateT3<M, S, R, E, A>, s: S) => Kind3<M, R, E, A>
  readonly execState: <S, R, E, A>(ma: StateT3<M, S, R, E, A>, s: S) => Kind3<M, R, E, S>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export interface StateM3C<M extends URIS3, E> {
  readonly map: <S, R, A, B>(fa: StateT3<M, S, R, E, A>, f: (a: A) => B) => StateT3<M, S, R, E, B>
  readonly of: <S, R, A>(a: A) => StateT3<M, S, R, E, A>
  readonly ap: <S, R, A, B>(fab: StateT3<M, S, R, E, (a: A) => B>, fa: StateT3<M, S, R, E, A>) => StateT3<M, S, R, E, B>
  readonly chain: <S, R, A, B>(
    fa: StateT3<M, S, R, E, A>,
    f: (a: A) => StateT3<M, S, R, E, B>,
  ) => StateT3<M, S, R, E, B>
  readonly get: <R, S>() => StateT3<M, S, R, E, S>
  readonly put: <R, S>(s: S) => StateT3<M, S, R, E, void>
  readonly modify: <R, S>(f: (s: S) => S) => StateT3<M, S, R, E, void>
  readonly gets: <S, R, A>(f: (s: S) => A) => StateT3<M, S, R, E, A>
  readonly fromState: <S, R, A>(fa: State<S, A>) => StateT3<M, S, R, E, A>
  readonly fromM: <S, R, A>(ma: Kind3<M, R, E, A>) => StateT3<M, S, R, E, A>
  readonly evalState: <S, R, A>(ma: StateT3<M, S, R, E, A>, s: S) => Kind3<M, R, E, A>
  readonly execState: <S, R, A>(ma: StateT3<M, S, R, E, A>, s: S) => Kind3<M, R, E, S>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export function getStateM<M extends URIS3>(M: Monad3<M>): StateM3<M>
/** @deprecated Zone of Death */
export function getStateM<M extends URIS3, E>(M: Monad3C<M, E>): StateM3C<M, E>
/** @deprecated Zone of Death */
export function getStateM<M extends URIS2>(M: Monad2<M>): StateM2<M>
/** @deprecated Zone of Death */
export function getStateM<M extends URIS2, E>(M: Monad2C<M, E>): StateM2C<M, E>
/** @deprecated Zone of Death */
export function getStateM<M extends URIS>(M: Monad1<M>): StateM1<M>
/** @deprecated Zone of Death */
export function getStateM<M>(M: Monad<M>): StateM<M>
/** @deprecated Zone of Death */
/* istanbul ignore next */
export function getStateM<M>(M: Monad<M>): StateM<M> {
  const _ap = ap(M)
  const _map = map(M)
  const _chain = chain(M)
  const _evaluate = evaluate(M)
  const _execute = execute(M)

  return {
    map: (fa, f) => pipe(fa, _map(f)),
    ap: (fab, fa) => pipe(fab, _ap(fa)),
    of: of(M),
    chain: (ma, f) => pipe(ma, _chain(f)),
    get: () => s => M.of([s, s]),
    put: s => () => M.of([undefined, s]),
    modify: f => s => M.of([undefined, f(s)]),
    gets: f => s => M.of([f(s), s]),
    fromState: fromState(M),
    fromM: fromF(M),
    evalState: (fa, s) => pipe(fa, _evaluate(s)),
    execState: (fa, s) => pipe(fa, _execute(s)),
  }
}
