/** @since 2.0.0 */
import { type Alt4 } from './Alt'
import { type Applicative4 } from './Applicative'
import { apFirst as apFirst_, type Apply4, apS as apS_, apSecond as apSecond_ } from './Apply'
import { type Bifunctor4 } from './Bifunctor'
import { bind as bind_, type Chain4, chainFirst as chainFirst_ } from './Chain'
import * as E from './Either'
import { type Either } from './Either'
import { type Endomorphism } from './Endomorphism'
import {
  chainEitherK as chainEitherK_,
  chainFirstEitherK as chainFirstEitherK_,
  chainOptionK as chainOptionK_,
  filterOrElse as filterOrElse_,
  type FromEither4,
  fromEitherK as fromEitherK_,
  fromOption as fromOption_,
  fromOptionK as fromOptionK_,
  fromPredicate as fromPredicate_,
} from './FromEither'
import { chainFirstIOK as chainFirstIOK_, chainIOK as chainIOK_, type FromIO4, fromIOK as fromIOK_ } from './FromIO'
import {
  ask as ask_,
  asks as asks_,
  chainFirstReaderK as chainFirstReaderK_,
  chainReaderK as chainReaderK_,
  type FromReader4,
  fromReaderK as fromReaderK_,
} from './FromReader'
import {
  chainStateK as chainStateK_,
  type FromState4,
  fromStateK as fromStateK_,
  get as get_,
  gets as gets_,
  modify as modify_,
  put as put_,
} from './FromState'
import {
  chainFirstTaskK as chainFirstTaskK_,
  chainTaskK as chainTaskK_,
  type FromTask4,
  fromTaskK as fromTaskK_,
} from './FromTask'
import { flow, identity, type Lazy, pipe } from './function'
import { bindTo as bindTo_, flap as flap_, type Functor4, let as let__ } from './Functor'
import * as _ from './internal'
import { type IO } from './IO'
import { type IOEither } from './IOEither'
import { type Monad4 } from './Monad'
import { type MonadIO4 } from './MonadIO'
import { type MonadTask4 } from './MonadTask'
import { type MonadThrow4 } from './MonadThrow'
import { type NonEmptyArray } from './NonEmptyArray'
import { type Option } from './Option'
import { type Pointed4 } from './Pointed'
import { type Predicate } from './Predicate'
import * as R from './Reader'
import { type Reader } from './Reader'
import { type ReaderEither } from './ReaderEither'
import * as RTE from './ReaderTaskEither'
import { type ReaderTaskEither } from './ReaderTaskEither'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type State } from './State'
import * as ST from './StateT'
import { type Task } from './Task'
import { type TaskEither } from './TaskEither'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
 */
export interface StateReaderTaskEither<S, R, E, A> {
  (s: S): ReaderTaskEither<R, E, [A, S]>
}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Constructors
 */
export const left: <S, R, E, A = never>(e: E) => StateReaderTaskEither<S, R, E, A> = e => () => RTE.left(e)

/**
 * @since 2.0.0
 * @category Constructors
 */
export const right: <S, R, E = never, A = never>(a: A) => StateReaderTaskEither<S, R, E, A> = /*#__PURE__*/ ST.of(
  RTE.Pointed,
)

/**
 * @since 2.0.0
 * @category Constructors
 */
export function rightTask<S, R, E = never, A = never>(ma: Task<A>): StateReaderTaskEither<S, R, E, A> {
  return fromReaderTaskEither(RTE.rightTask(ma))
}

/**
 * @since 2.0.0
 * @category Constructors
 */
export function leftTask<S, R, E, A = never>(me: Task<E>): StateReaderTaskEither<S, R, E, A> {
  return fromReaderTaskEither(RTE.leftTask(me))
}

/**
 * @since 2.0.0
 * @category Constructors
 */
export function rightReader<S, R, E = never, A = never>(ma: Reader<R, A>): StateReaderTaskEither<S, R, E, A> {
  return fromReaderTaskEither(RTE.rightReader(ma))
}

/**
 * @since 2.0.0
 * @category Constructors
 */
export function leftReader<S, R, E, A = never>(me: Reader<R, E>): StateReaderTaskEither<S, R, E, A> {
  return fromReaderTaskEither(RTE.leftReader(me))
}

/**
 * @since 2.0.0
 * @category Constructors
 */
export function rightIO<S, R, E = never, A = never>(ma: IO<A>): StateReaderTaskEither<S, R, E, A> {
  return fromReaderTaskEither(RTE.rightIO(ma))
}

/**
 * @since 2.0.0
 * @category Constructors
 */
export function leftIO<S, R, E, A = never>(me: IO<E>): StateReaderTaskEither<S, R, E, A> {
  return fromReaderTaskEither(RTE.leftIO(me))
}

/**
 * @since 2.0.0
 * @category Constructors
 */
export const rightState: <S, R, E = never, A = never>(ma: State<S, A>) => StateReaderTaskEither<S, R, E, A> = sa =>
  flow(sa, RTE.right)

/**
 * @since 2.0.0
 * @category Constructors
 */
export const leftState: <S, R, E, A = never>(me: State<S, E>) => StateReaderTaskEither<S, R, E, A> = me => s =>
  RTE.left(me(s)[0])

// -------------------------------------------------------------------------------------
// conversions
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Conversions
 */
export const fromEither: <E, A, S, R = unknown>(fa: Either<E, A>) => StateReaderTaskEither<S, R, E, A> =
  /*#__PURE__*/ E.match(e => left(e), right)

/**
 * @since 2.11.0
 * @category Conversions
 */
export const fromReader: <R, A, S, E = never>(fa: Reader<R, A>) => StateReaderTaskEither<S, R, E, A> = rightReader

/**
 * @since 2.7.0
 * @category Conversions
 */
export const fromIO: <A, S, R = unknown, E = never>(fa: IO<A>) => StateReaderTaskEither<S, R, E, A> = rightIO

/**
 * @since 2.7.0
 * @category Conversions
 */
export const fromTask: <A, S, R = unknown, E = never>(fa: Task<A>) => StateReaderTaskEither<S, R, E, A> = rightTask

/**
 * @since 2.10.0
 * @category Conversions
 */
export const fromState: <S, A, R = unknown, E = never>(fa: State<S, A>) => StateReaderTaskEither<S, R, E, A> =
  /*#__PURE__*/ ST.fromState(RTE.Pointed)

/**
 * @since 2.0.0
 * @category Conversions
 */
export const fromTaskEither: <E, A, S, R = unknown>(fa: TaskEither<E, A>) => StateReaderTaskEither<S, R, E, A> = ma =>
  fromReaderTaskEither(RTE.fromTaskEither(ma))

/**
 * @since 2.0.0
 * @category Conversions
 */
export const fromIOEither: <E, A, S, R = unknown>(fa: IOEither<E, A>) => StateReaderTaskEither<S, R, E, A> = ma =>
  fromReaderTaskEither(RTE.fromIOEither(ma))

/**
 * @since 2.0.0
 * @category Conversions
 */
export const fromReaderEither: <R, E, A, S>(fa: ReaderEither<R, E, A>) => StateReaderTaskEither<S, R, E, A> = ma =>
  fromReaderTaskEither(RTE.fromReaderEither(ma))

/**
 * @since 2.0.0
 * @category Constructors
 */
export const fromReaderTaskEither: <R, E, A, S>(fa: ReaderTaskEither<R, E, A>) => StateReaderTaskEither<S, R, E, A> =
  /*#__PURE__*/ ST.fromF(RTE.Functor)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @since 2.11.0
 */
export const local =
  <R2, R1>(f: (r2: R2) => R1) =>
  <S, E, A>(ma: StateReaderTaskEither<S, R1, E, A>): StateReaderTaskEither<S, R2, E, A> =>
    flow(ma, R.local(f))

/**
 * Less strict version of [`asksStateReaderTaskEither`](#asksstatereadertaskeither).
 *
 * @since 2.11.0
 * @category Constructors
 */
export const asksStateReaderTaskEitherW =
  <R1, S, R2, E, A>(f: (r1: R1) => StateReaderTaskEither<S, R2, E, A>): StateReaderTaskEither<S, R1 & R2, E, A> =>
  s =>
  r =>
    f(r)(s)(r)

/**
 * Effectfully accesses the environment.
 *
 * @since 2.11.0
 * @category Constructors
 */
export const asksStateReaderTaskEither: <R, S, E, A>(
  f: (r: R) => StateReaderTaskEither<S, R, E, A>,
) => StateReaderTaskEither<S, R, E, A> = asksStateReaderTaskEitherW

/**
 * @since 2.4.0
 * @category Lifting
 */
export const fromIOEitherK =
  <E, A extends ReadonlyArray<unknown>, B>(
    f: (...a: A) => IOEither<E, B>,
  ): (<S, R = unknown>(...a: A) => StateReaderTaskEither<S, R, E, B>) =>
  (...a) =>
    fromIOEither(f(...a))

/**
 * Less strict version of [`chainIOEitherK`](#chainioeitherk).
 *
 * @since 2.6.1
 * @category Sequencing
 */
export const chainIOEitherKW =
  <E2, A, B>(f: (a: A) => IOEither<E2, B>) =>
  <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>): StateReaderTaskEither<S, R, E1 | E2, B> =>
    pipe(ma, chainW<S, R, E2, A, B>(fromIOEitherK(f)))

/**
 * @since 2.4.0
 * @category Sequencing
 */
export const chainIOEitherK: <E, A, B>(
  f: (a: A) => IOEither<E, B>,
) => <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B> = chainIOEitherKW

/**
 * @since 2.4.0
 * @category Lifting
 */
export const fromTaskEitherK =
  <E, A extends ReadonlyArray<unknown>, B>(
    f: (...a: A) => TaskEither<E, B>,
  ): (<S, R = unknown>(...a: A) => StateReaderTaskEither<S, R, E, B>) =>
  (...a) =>
    fromTaskEither(f(...a))

/**
 * Less strict version of [`chainTaskEitherK`](#chaintaskeitherk).
 *
 * @since 2.6.1
 * @category Sequencing
 */
export const chainTaskEitherKW =
  <E2, A, B>(f: (a: A) => TaskEither<E2, B>) =>
  <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>): StateReaderTaskEither<S, R, E1 | E2, B> =>
    pipe(ma, chainW<S, R, E2, A, B>(fromTaskEitherK(f)))

/**
 * @since 2.4.0
 * @category Sequencing
 */
export const chainTaskEitherK: <E, A, B>(
  f: (a: A) => TaskEither<E, B>,
) => <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B> = chainTaskEitherKW

/**
 * @since 2.4.0
 * @category Lifting
 */
export const fromReaderTaskEitherK =
  <R, E, A extends ReadonlyArray<unknown>, B>(
    f: (...a: A) => ReaderTaskEither<R, E, B>,
  ): (<S>(...a: A) => StateReaderTaskEither<S, R, E, B>) =>
  (...a) =>
    fromReaderTaskEither(f(...a))

/**
 * Less strict version of [`chainReaderTaskEitherK`](#chainreadertaskeitherk).
 *
 * @since 2.6.1
 * @category Sequencing
 */
export const chainReaderTaskEitherKW =
  <R, E2, A, B>(f: (a: A) => ReaderTaskEither<R, E2, B>) =>
  <S, E1>(ma: StateReaderTaskEither<S, R, E1, A>): StateReaderTaskEither<S, R, E1 | E2, B> =>
    pipe(ma, chainW<S, R, E2, A, B>(fromReaderTaskEitherK(f)))

/**
 * @since 2.4.0
 * @category Sequencing
 */
export const chainReaderTaskEitherK: <R, E, A, B>(
  f: (a: A) => ReaderTaskEither<R, E, B>,
) => <S>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B> = chainReaderTaskEitherKW

/* istanbul ignore next */
const _map: Monad4<URI>['map'] = (fa, f) => pipe(fa, map(f))
/* istanbul ignore next */
const _ap: Monad4<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
/* istanbul ignore next */
const _chain: Monad4<URI>['chain'] = (ma, f) => pipe(ma, chain(f))
/* istanbul ignore next */
const _alt: <S, R, E, A>(
  fa: StateReaderTaskEither<S, R, E, A>,
  that: Lazy<StateReaderTaskEither<S, R, E, A>>,
) => StateReaderTaskEither<S, R, E, A> = (fa, that) => s =>
  pipe(
    fa(s),
    RTE.alt(() => that()(s)),
  )
const _bimap: <S, R, E, A, G, B>(
  fea: StateReaderTaskEither<S, R, E, A>,
  f: (e: E) => G,
  g: (a: A) => B,
) => StateReaderTaskEither<S, R, G, B> = (fea, f, g) => s =>
  pipe(
    fea(s),
    RTE.bimap(f, ([a, s]) => [g(a), s]),
  )
const _mapLeft: <S, R, E, A, G>(
  fea: StateReaderTaskEither<S, R, E, A>,
  f: (e: E) => G,
) => StateReaderTaskEither<S, R, G, A> = (fea, f) => s => pipe(fea(s), RTE.mapLeft(f))

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const map: <A, B>(
  f: (a: A) => B,
) => <S, R, E>(fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ ST.map(
  RTE.Functor,
)

/**
 * Map a pair of functions over the two last type arguments of the bifunctor.
 *
 * @since 2.6.2
 * @category Mapping
 */
export const bimap: <E, G, A, B>(
  f: (e: E) => G,
  g: (a: A) => B,
) => <S, R>(fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, G, B> = (f, g) => fa =>
  _bimap(fa, f, g)

/**
 * Map a function over the third type argument of a bifunctor.
 *
 * @since 2.6.2
 * @category Error handling
 */
export const mapLeft: <E, G>(
  f: (e: E) => G,
) => <S, R, A>(fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, G, A> = f => fa => _mapLeft(fa, f)

/** @since 2.0.0 */
export const ap: <S, R, E, A>(
  fa: StateReaderTaskEither<S, R, E, A>,
) => <B>(fab: StateReaderTaskEither<S, R, E, (a: A) => B>) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ ST.ap(
  RTE.Chain,
)

/**
 * Less strict version of [`ap`](#ap).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.8.0
 */
export const apW: <S, R2, E2, A>(
  fa: StateReaderTaskEither<S, R2, E2, A>,
) => <R1, E1, B>(fab: StateReaderTaskEither<S, R1, E1, (a: A) => B>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, B> =
  ap as any

/**
 * @since 2.7.0
 * @category Constructors
 */
export const of: <S, R = unknown, E = never, A = never>(a: A) => StateReaderTaskEither<S, R, E, A> = right

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const chain: <S, R, E, A, B>(
  f: (a: A) => StateReaderTaskEither<S, R, E, B>,
) => (ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ ST.chain(RTE.Chain)

/**
 * Less strict version of [`chain`](#chain).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.6.0
 * @category Sequencing
 */
export const chainW: <S, R2, E2, A, B>(
  f: (a: A) => StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(ma: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, B> = chain as any

/**
 * Less strict version of [`flatten`](#flatten).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.11.0
 * @category Sequencing
 */
export const flattenW: <S, R1, E1, R2, E2, A>(
  mma: StateReaderTaskEither<S, R1, E1, StateReaderTaskEither<S, R2, E2, A>>,
) => StateReaderTaskEither<S, R1 & R2, E1 | E2, A> = /*#__PURE__*/ chainW(identity)

/**
 * @since 2.0.0
 * @category Sequencing
 */
export const flatten: <S, R, E, A>(
  mma: StateReaderTaskEither<S, R, E, StateReaderTaskEither<S, R, E, A>>,
) => StateReaderTaskEither<S, R, E, A> = flattenW

/**
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the environment, the error and the return types will be merged.
 *
 * @since 2.9.0
 * @category Error handling
 */
export const altW =
  <S, R2, E2, B>(that: () => StateReaderTaskEither<S, R2, E2, B>) =>
  <R1, E1, A>(fa: StateReaderTaskEither<S, R1, E1, A>): StateReaderTaskEither<S, R1 & R2, E2, A | B> =>
  r =>
    pipe(
      fa(r),
      RTE.altW(() => that()(r)),
    )

/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @since 2.6.2
 * @category Error handling
 */
export const alt: <S, R, E, A>(
  that: Lazy<StateReaderTaskEither<S, R, E, A>>,
) => (fa: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A> = altW

/** @since 2.7.0 */
export const throwError: MonadThrow4<URI>['throwError'] = left

/**
 * @since 2.0.0
 * @category Type lambdas
 */
export const URI = 'StateReaderTaskEither'

/**
 * @since 2.0.0
 * @category Type lambdas
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind4<S, R, E, A> {
    readonly [URI]: StateReaderTaskEither<S, R, E, A>
  }
}

/**
 * @since 2.7.0
 * @category Instances
 */
export const Functor: Functor4<URI> = {
  URI,
  map: _map,
}

/**
 * @since 2.10.0
 * @category Mapping
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @since 2.10.0
 * @category Instances
 */
export const Pointed: Pointed4<URI> = {
  URI,
  of,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const Apply: Apply4<URI> = {
  URI,
  map: _map,
  ap: _ap,
}

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @since 2.0.0
 */
export const apFirst = /*#__PURE__*/ apFirst_(Apply)

/**
 * Less strict version of [`apFirst`](#apfirst).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.12.0
 */
export const apFirstW: <S, R2, E2, A, B>(
  second: StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(first: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, A> =
  apFirst as any

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @since 2.0.0
 */
export const apSecond = /*#__PURE__*/ apSecond_(Apply)

/**
 * Less strict version of [`apSecond`](#apsecond).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.12.0
 */
export const apSecondW: <S, R2, E2, A, B>(
  second: StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(first: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, B> =
  apSecond as any

/**
 * @since 2.7.0
 * @category Instances
 */
export const Applicative: Applicative4<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const Chain: Chain4<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: _chain,
}

/**
 * @since 2.11.0
 * @category Instances
 */
export const FromState: FromState4<URI> = {
  URI,
  fromState,
}

/**
 * Get the current state
 *
 * @since 2.0.0
 * @category Constructors
 */
export const get: <S, R, E = never>() => StateReaderTaskEither<S, R, E, S> = /*#__PURE__*/ get_(FromState)

/**
 * Set the state
 *
 * @since 2.0.0
 * @category Constructors
 */
export const put: <S, R, E = never>(s: S) => StateReaderTaskEither<S, R, E, void> = /*#__PURE__*/ put_(FromState)

/**
 * Modify the state by applying a function to the current state
 *
 * @since 2.0.0
 * @category Constructors
 */
export const modify: <S, R, E = never>(f: Endomorphism<S>) => StateReaderTaskEither<S, R, E, void> =
  /*#__PURE__*/ modify_(FromState)

/**
 * Get a value which depends on the current state
 *
 * @since 2.0.0
 * @category Constructors
 */
export const gets: <S, R, E = never, A = never>(f: (s: S) => A) => StateReaderTaskEither<S, R, E, A> =
  /*#__PURE__*/ gets_(FromState)

/**
 * @since 2.11.0
 * @category Lifting
 */
export const fromStateK: <A extends ReadonlyArray<unknown>, S, B>(
  f: (...a: A) => State<S, B>,
) => <R = unknown, E = never>(...a: A) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ fromStateK_(FromState)

/**
 * @since 2.11.0
 * @category Sequencing
 */
export const chainStateK: <A, S, B>(
  f: (a: A) => State<S, B>,
) => <R, E>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ chainStateK_(
  FromState,
  Chain,
)

/**
 * @since 2.10.0
 * @category Instances
 */
export const Monad: Monad4<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: _chain,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const MonadIO: MonadIO4<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: _chain,
  fromIO,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const MonadTask: MonadTask4<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: _chain,
  fromIO,
  fromTask,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const MonadThrow: MonadThrow4<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: _chain,
  throwError,
}

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const chainFirst: <S, R, E, A, B>(
  f: (a: A) => StateReaderTaskEither<S, R, E, B>,
) => (ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A> = /*#__PURE__*/ chainFirst_(Chain)

/**
 * Less strict version of [`chainFirst`](#chainfirst).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.8.0
 * @category Sequencing
 */
export const chainFirstW: <S, R2, E2, A, B>(
  f: (a: A) => StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(ma: StateReaderTaskEither<S, R1, E1, A>) => StateReaderTaskEither<S, R1 & R2, E1 | E2, A> =
  chainFirst as any

/**
 * @since 2.7.0
 * @category Instances
 */
export const Bifunctor: Bifunctor4<URI> = {
  URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
}

/**
 * @since 2.7.0
 * @category Instances
 */
export const Alt: Alt4<URI> = {
  URI,
  map: _map,
  alt: _alt,
}

/**
 * @since 2.11.0
 * @category Instances
 */
export const FromReader: FromReader4<URI> = {
  URI,
  fromReader,
}

/**
 * Reads the current context.
 *
 * @since 2.11.0
 * @category Constructors
 */
export const ask: <S, R, E = never>() => StateReaderTaskEither<S, R, E, R> = /*#__PURE__*/ ask_(FromReader)

/**
 * Projects a value from the global context in a `ReaderEither`.
 *
 * @since 2.11.0
 * @category Constructors
 */
export const asks: <S, R, A, E = never>(f: (r: R) => A) => StateReaderTaskEither<S, R, E, A> =
  /*#__PURE__*/ asks_(FromReader)

/**
 * @since 2.11.0
 * @category Lifting
 */
export const fromReaderK: <A extends ReadonlyArray<unknown>, R, B>(
  f: (...a: A) => Reader<R, B>,
) => <S, E = never>(...a: A) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ fromReaderK_(FromReader)

/**
 * @since 2.11.0
 * @category Sequencing
 */
export const chainReaderK: <A, R, B>(
  f: (a: A) => Reader<R, B>,
) => <S, E>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ chainReaderK_(
  FromReader,
  Chain,
)

/**
 * Less strict version of [`chainReaderK`](#chainReaderK).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.11.0
 * @category Sequencing
 */
export const chainReaderKW: <A, R1, B>(
  f: (a: A) => Reader<R1, B>,
) => <S, R2, E>(ma: StateReaderTaskEither<S, R2, E, A>) => StateReaderTaskEither<S, R1 & R2, E, B> = chainReaderK as any

/**
 * @since 2.11.0
 * @category Sequencing
 */
export const chainFirstReaderK: <A, R, B>(
  f: (a: A) => Reader<R, B>,
) => <S, E>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A> =
  /*#__PURE__*/ chainFirstReaderK_(FromReader, Chain)

/**
 * Less strict version of [`chainFirstReaderK`](#chainFirstReaderK).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.11.0
 * @category Sequencing
 */
export const chainFirstReaderKW: <A, R1, B>(
  f: (a: A) => Reader<R1, B>,
) => <S, R2, E>(ma: StateReaderTaskEither<S, R2, E, A>) => StateReaderTaskEither<S, R1 & R2, E, A> =
  chainFirstReaderK as any

/**
 * @since 2.10.0
 * @category Instances
 */
export const FromEither: FromEither4<URI> = {
  URI,
  fromEither,
}

/**
 * @since 2.0.0
 * @category Conversions
 */
export const fromOption: <E>(
  onNone: Lazy<E>,
) => <A, S, R = unknown>(fa: Option<A>) => StateReaderTaskEither<S, R, E, A> = /*#__PURE__*/ fromOption_(FromEither)

/**
 * @since 2.10.0
 * @category Lifting
 */
export const fromOptionK: <E>(
  onNone: Lazy<E>,
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Option<B>,
) => <S, R = unknown>(...a: A) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ fromOptionK_(FromEither)

/**
 * @since 2.10.0
 * @category Sequencing
 */
export const chainOptionK: <E>(
  onNone: Lazy<E>,
) => <A, B>(
  f: (a: A) => Option<B>,
) => <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ chainOptionK_(
  FromEither,
  Chain,
)

/**
 * @since 2.4.0
 * @category Sequencing
 */
export const chainEitherK: <E, A, B>(
  f: (a: A) => E.Either<E, B>,
) => <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ chainEitherK_(
  FromEither,
  Chain,
)

/**
 * Less strict version of [`chainEitherK`](#chaineitherk).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.6.1
 * @category Sequencing
 */
export const chainEitherKW: <E2, A, B>(
  f: (a: A) => Either<E2, B>,
) => <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, B> = chainEitherK as any

/**
 * @since 2.12.0
 * @category Sequencing
 */
export const chainFirstEitherK: <A, E, B>(
  f: (a: A) => E.Either<E, B>,
) => <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A> =
  /*#__PURE__*/ chainFirstEitherK_(FromEither, Chain)

/**
 * Less strict version of [`chainFirstEitherK`](#chainfirsteitherk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.12.0
 * @category Sequencing
 */
export const chainFirstEitherKW: <A, E2, B>(
  f: (a: A) => Either<E2, B>,
) => <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, A> =
  chainFirstEitherK as any

/**
 * @since 2.4.4
 * @category Lifting
 */
export const fromPredicate: {
  <E, A, B extends A>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E,
  ): <S, R = unknown>(a: A) => StateReaderTaskEither<S, R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <S, R = unknown, B extends A = A>(b: B) => StateReaderTaskEither<S, R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <S, R = unknown>(a: A) => StateReaderTaskEither<S, R, E, A>
} = /*#__PURE__*/ fromPredicate_(FromEither)

/**
 * @since 2.4.4
 * @category Filtering
 */
export const filterOrElse: {
  <E, A, B extends A>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E,
  ): <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <S, R, B extends A>(mb: StateReaderTaskEither<S, R, E, B>) => StateReaderTaskEither<S, R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <S, R>(ma: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A>
} = /*#__PURE__*/ filterOrElse_(FromEither, Chain)

/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @since 2.9.0
 * @category Filtering
 */
export const filterOrElseW: {
  <A, B extends A, E2>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E2,
  ): <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <S, R, E1, B extends A>(mb: StateReaderTaskEither<S, R, E1, B>) => StateReaderTaskEither<S, R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <S, R, E1>(ma: StateReaderTaskEither<S, R, E1, A>) => StateReaderTaskEither<S, R, E1 | E2, A>
} = filterOrElse

/**
 * @since 2.4.0
 * @category Lifting
 */
export const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => E.Either<E, B>,
) => <S, R = unknown>(...a: A) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ fromEitherK_(FromEither)

/**
 * @since 2.10.0
 * @category Instances
 */
export const FromIO: FromIO4<URI> = {
  URI,
  fromIO,
}

/**
 * @since 2.10.0
 * @category Lifting
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IO<B>,
) => <S, R = unknown, E = never>(...a: A) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ fromIOK_(FromIO)

/**
 * @since 2.10.0
 * @category Sequencing
 */
export const chainIOK: <A, B>(
  f: (a: A) => IO<B>,
) => <S, R, E>(first: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ chainIOK_(
  FromIO,
  Chain,
)

/**
 * @since 2.10.0
 * @category Sequencing
 */
export const chainFirstIOK: <A, B>(
  f: (a: A) => IO<B>,
) => <S, R, E>(first: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A> =
  /*#__PURE__*/ chainFirstIOK_(FromIO, Chain)

/**
 * @since 2.10.0
 * @category Instances
 */
export const FromTask: FromTask4<URI> = {
  URI,
  fromIO,
  fromTask,
}

/**
 * @since 2.10.0
 * @category Lifting
 */
export const fromTaskK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Task<B>,
) => <S, R = unknown, E = never>(...a: A) => StateReaderTaskEither<S, R, E, B> = /*#__PURE__*/ fromTaskK_(FromTask)

/**
 * @since 2.10.0
 * @category Sequencing
 */
export const chainTaskK: <A, B>(
  f: (a: A) => Task<B>,
) => <S, R, E>(first: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, B> =
  /*#__PURE__*/ chainTaskK_(FromTask, Chain)

/**
 * @since 2.10.0
 * @category Sequencing
 */
export const chainFirstTaskK: <A, B>(
  f: (a: A) => Task<B>,
) => <S, R, E>(first: StateReaderTaskEither<S, R, E, A>) => StateReaderTaskEither<S, R, E, A> =
  /*#__PURE__*/ chainFirstTaskK_(FromTask, Chain)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Run a computation in the `StateReaderTaskEither` monad, discarding the final state
 *
 * @since 2.8.0
 */
export const evaluate: <S>(s: S) => <R, E, A>(ma: StateReaderTaskEither<S, R, E, A>) => ReaderTaskEither<R, E, A> =
  /*#__PURE__*/ ST.evaluate(RTE.Functor)

/**
 * Run a computation in the `StateReaderTaskEither` monad discarding the result
 *
 * @since 2.8.0
 */
export const execute: <S>(s: S) => <R, E, A>(ma: StateReaderTaskEither<S, R, E, A>) => ReaderTaskEither<R, E, S> =
  /*#__PURE__*/ ST.execute(RTE.Functor)

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/** @since 2.8.0 */
export const bindTo = /*#__PURE__*/ bindTo_(Functor)

const let_ = /*#__PURE__*/ let__(Functor)

export {
  /** @since 2.13.0 */
  let_ as let,
}

/** @since 2.8.0 */
export const bind = /*#__PURE__*/ bind_(Chain)

/**
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.8.0
 */
export const bindW: <N extends string, A, S, R2, E2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(
  fa: StateReaderTaskEither<S, R1, E1, A>,
) => StateReaderTaskEither<S, R1 & R2, E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  bind as any

// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------

/** @since 2.8.0 */
export const apS = /*#__PURE__*/ apS_(Apply)

/**
 * Less strict version of [`apS`](#aps).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @since 2.8.0
 * @category Do notation
 */
export const apSW: <A, N extends string, S, R2, E2, B>(
  name: Exclude<N, keyof A>,
  fb: StateReaderTaskEither<S, R2, E2, B>,
) => <R1, E1>(
  fa: StateReaderTaskEither<S, R1, E1, A>,
) => StateReaderTaskEither<S, R1 & R2, E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  apS as any

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 * @category Traversing
 */
export const traverseReadonlyNonEmptyArrayWithIndex =
  <A, S, R, E, B>(f: (index: number, a: A) => StateReaderTaskEither<S, R, E, B>) =>
  (as: ReadonlyNonEmptyArray<A>): StateReaderTaskEither<S, R, E, ReadonlyNonEmptyArray<B>> =>
  s =>
  r =>
  () =>
    _.tail(as).reduce<Promise<Either<E, [NonEmptyArray<B>, S]>>>(
      (acc, a, i) =>
        acc.then(ebs =>
          _.isLeft(ebs) ? acc : (
            f(
              i + 1,
              a,
            )(ebs.right[1])(r)().then(eb => {
              if (_.isLeft(eb)) {
                return eb
              }
              const [b, s] = eb.right
              ebs.right[0].push(b)
              ebs.right[1] = s
              return ebs
            })
          ),
        ),
      f(0, _.head(as))(s)(r)().then(E.map(([b, s]) => [[b], s])),
    )

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 * @category Traversing
 */
export const traverseReadonlyArrayWithIndex = <A, S, R, E, B>(
  f: (index: number, a: A) => StateReaderTaskEither<S, R, E, B>,
): ((as: ReadonlyArray<A>) => StateReaderTaskEither<S, R, E, ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f)
  return as => (_.isNonEmpty(as) ? g(as) : of(_.emptyReadonlyArray))
}

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const traverseArrayWithIndex: <S, R, E, A, B>(
  f: (index: number, a: A) => StateReaderTaskEither<S, R, E, B>,
) => (as: ReadonlyArray<A>) => StateReaderTaskEither<S, R, E, ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const traverseArray = <S, R, E, A, B>(
  f: (a: A) => StateReaderTaskEither<S, R, E, B>,
): ((as: ReadonlyArray<A>) => StateReaderTaskEither<S, R, E, ReadonlyArray<B>>) =>
  traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const sequenceArray: <S, R, E, A>(
  arr: ReadonlyArray<StateReaderTaskEither<S, R, E, A>>,
) => StateReaderTaskEither<S, R, E, ReadonlyArray<A>> = /*#__PURE__*/ traverseArray(identity)

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `SRTE.Functor` instead of `SRTE.stateReaderTaskEither` (where `SRTE` is from `import SRTE from
 * 'fp-ts/StateReaderTaskEither'`)
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export const stateReaderTaskEither: Monad4<URI> & Bifunctor4<URI> & Alt4<URI> & MonadTask4<URI> & MonadThrow4<URI> = {
  URI,
  map: _map,
  of,
  ap: _ap,
  chain: _chain,
  bimap: _bimap,
  mapLeft: _mapLeft,
  alt: _alt,
  fromIO,
  fromTask,
  throwError,
}

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `SRTE.Functor` instead of `SRTE.stateReaderTaskEitherSeq` (where `SRTE` is from `import SRTE from
 * 'fp-ts/StateReaderTaskEither'`)
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */

export const stateReaderTaskEitherSeq: typeof stateReaderTaskEither = {
  URI,
  map: _map,
  of,
  ap: _ap,
  chain: _chain,
  bimap: _bimap,
  mapLeft: _mapLeft,
  alt: _alt,
  fromIO,
  fromTask,
  throwError,
}

/**
 * Use [`evaluate`](#evaluate) instead
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
/* istanbul ignore next */
export const evalState: <S, R, E, A>(ma: StateReaderTaskEither<S, R, E, A>, s: S) => ReaderTaskEither<R, E, A> = (
  fsa,
  s,
) =>
  pipe(
    fsa(s),
    RTE.map(([a]) => a),
  )

/**
 * Use [`execute`](#execute) instead
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
/* istanbul ignore next */
export const execState: <S, R, E, A>(ma: StateReaderTaskEither<S, R, E, A>, s: S) => ReaderTaskEither<R, E, S> = (
  fsa,
  s,
) =>
  pipe(
    fsa(s),
    RTE.map(([_, s]) => s),
  )

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
/* istanbul ignore next */
export function run<S, R, E, A>(ma: StateReaderTaskEither<S, R, E, A>, s: S, r: R): Promise<Either<E, [A, S]>> {
  return ma(s)(r)()
}
