/** @since 2.3.0 */
import { type Applicative2, getApplicativeMonoid } from './Applicative'
import {
  apFirst as apFirst_,
  type Apply2,
  apS as apS_,
  apSecond as apSecond_,
  getApplySemigroup as getApplySemigroup_,
} from './Apply'
import * as chainable from './Chain'
import { type ChainRec2 } from './ChainRec'
import * as ChnRec from './ChainRec'
import { type FromIO2, fromIOK as fromIOK_, tapIO as tapIO_ } from './FromIO'
import {
  ask as ask_,
  asks as asks_,
  type FromReader2,
  fromReaderK as fromReaderK_,
  tapReader as tapReader_,
} from './FromReader'
import { type FromTask2, fromTaskK as fromTaskK_, tapTask as tapTask_ } from './FromTask'
import { dual, flow, identity, pipe, SK } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor2, let as let__ } from './Functor'
import * as _ from './internal'
import { type IO } from './IO'
import { type Monad2 } from './Monad'
import { type MonadIO2 } from './MonadIO'
import { type MonadTask2 } from './MonadTask'
import { type Monoid } from './Monoid'
import { type Pointed2 } from './Pointed'
import * as R from './Reader'
import { type ReaderIO } from './ReaderIO'
import * as RT from './ReaderT'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Semigroup } from './Semigroup'
import * as T from './Task'
import { type Task } from './Task'

/**
 * @since 2.3.0
 * @category Model
 */
export interface ReaderTask<R, A> {
  (r: R): Task<A>
}

// -------------------------------------------------------------------------------------
// conversions
// -------------------------------------------------------------------------------------

/**
 * @since 2.3.0
 * @category Conversions
 */
export const fromReader: <R, A>(fa: R.Reader<R, A>) => ReaderTask<R, A> = /*#__PURE__*/ RT.fromReader(T.Pointed)

/**
 * @since 2.3.0
 * @category Conversions
 */
export const fromTask: <A, R = unknown>(fa: Task<A>) => ReaderTask<R, A> = /*#__PURE__*/ R.of

/**
 * @since 2.3.0
 * @category Conversions
 */
export const fromIO: <A, R = unknown>(fa: IO<A>) => ReaderTask<R, A> = /*#__PURE__*/ flow(T.fromIO, fromTask)

/**
 * @since 2.13.0
 * @category Conversions
 */
export const fromReaderIO: <R, A>(fa: ReaderIO<R, A>) => ReaderTask<R, A> = R.map(T.fromIO)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @since 2.3.0
 */
export const local: <R2, R1>(f: (r2: R2) => R1) => <A>(ma: ReaderTask<R1, A>) => ReaderTask<R2, A> = R.local

/**
 * Less strict version of [`asksReaderTask`](#asksreadertask).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @since 2.11.0
 * @category Constructors
 */
export const asksReaderTaskW: <R1, R2, A>(f: (r1: R1) => ReaderTask<R2, A>) => ReaderTask<R1 & R2, A> = R.asksReaderW

/**
 * Effectfully accesses the environment.
 *
 * @since 2.11.0
 * @category Constructors
 */
export const asksReaderTask: <R, A>(f: (r: R) => ReaderTask<R, A>) => ReaderTask<R, A> = asksReaderTaskW

const _map: Functor2<URI>['map'] = (fa, f) => pipe(fa, map(f))
const _apPar: Apply2<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
const _apSeq: Apply2<URI>['ap'] = (fab, fa) => flatMap(fab, f => pipe(fa, map(f)))

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @since 2.3.0
 * @category Mapping
 */
export const map: <A, B>(f: (a: A) => B) => <R>(fa: ReaderTask<R, A>) => ReaderTask<R, B> = /*#__PURE__*/ RT.map(
  T.Functor,
)

/** @since 2.3.0 */
export const ap: <R, A>(fa: ReaderTask<R, A>) => <B>(fab: ReaderTask<R, (a: A) => B>) => ReaderTask<R, B> =
  /*#__PURE__*/ RT.ap(T.ApplyPar)

/**
 * Less strict version of [`ap`](#ap).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @since 2.8.0
 */
export const apW: <R2, A>(
  fa: ReaderTask<R2, A>,
) => <R1, B>(fab: ReaderTask<R1, (a: A) => B>) => ReaderTask<R1 & R2, B> = ap as any

/**
 * @since 2.3.0
 * @category Constructors
 */
export const of: <R = unknown, A = never>(a: A) => ReaderTask<R, A> = /*#__PURE__*/ RT.of(T.Pointed)

/**
 * @since 2.14.0
 * @category Sequencing
 */
export const flatMap: {
  <A, R2, B>(f: (a: A) => ReaderTask<R2, B>): <R1>(ma: ReaderTask<R1, A>) => ReaderTask<R1 & R2, B>
  <R1, A, R2, B>(ma: ReaderTask<R1, A>, f: (a: A) => ReaderTask<R2, B>): ReaderTask<R1 & R2, B>
} = /*#__PURE__*/ dual(2, RT.flatMap(T.Monad))

/**
 * Less strict version of [`flatten`](#flatten).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @since 2.11.0
 * @category Sequencing
 */
export const flattenW: <R1, R2, A>(mma: ReaderTask<R1, ReaderTask<R2, A>>) => ReaderTask<R1 & R2, A> =
  /*#__PURE__*/ flatMap(identity)

/**
 * @since 2.3.0
 * @category Sequencing
 */
export const flatten: <R, A>(mma: ReaderTask<R, ReaderTask<R, A>>) => ReaderTask<R, A> = flattenW

/**
 * @since 2.3.0
 * @category Type lambdas
 */
export const URI = 'ReaderTask'

/**
 * @since 2.3.0
 * @category Type lambdas
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: ReaderTask<E, A>
  }
}

/**
 * @since 2.7.0
 * @category Instances
 */
export const Functor: Functor2<URI> = {
  URI,
  map: _map,
}

/**
 * Maps the value to the specified constant value.
 *
 * @since 2.16.0
 * @category Mapping
 */
export const as: {
  <A>(a: A): <R, _>(self: ReaderTask<R, _>) => ReaderTask<R, A>
  <R, _, A>(self: ReaderTask<R, _>, a: A): ReaderTask<R, A>
} = dual(2, as_(Functor))

/**
 * Maps the value to the void constant value.
 *
 * @since 2.16.0
 * @category Mapping
 */
export const asUnit: <R, _>(self: ReaderTask<R, _>) => ReaderTask<R, void> = asUnit_(Functor)

/**
 * @since 2.10.0
 * @category Mapping
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @since 2.10.0
 * @category Instances
 */
export const Pointed: Pointed2<URI> = {
  URI,
  of,
}

/**
 * Runs computations in parallel.
 *
 * @since 2.10.0
 * @category Instances
 */
export const ApplyPar: Apply2<URI> = {
  URI,
  map: _map,
  ap: _apPar,
}

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @since 2.3.0
 */
export const apFirst = /*#__PURE__*/ apFirst_(ApplyPar)

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @since 2.3.0
 */
export const apSecond = /*#__PURE__*/ apSecond_(ApplyPar)

/**
 * Runs computations in parallel.
 *
 * @since 2.7.0
 * @category Instances
 */
export const ApplicativePar: Applicative2<URI> = {
  URI,
  map: _map,
  ap: _apPar,
  of,
}

/**
 * Runs computations sequentially.
 *
 * @since 2.10.0
 * @category Instances
 */
export const ApplySeq: Apply2<URI> = {
  URI,
  map: _map,
  ap: _apSeq,
}

/**
 * Runs computations sequentially.
 *
 * @since 2.7.0
 * @category Instances
 */
export const ApplicativeSeq: Applicative2<URI> = {
  URI,
  map: _map,
  ap: _apSeq,
  of,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const Chain: chainable.Chain2<URI> = {
  URI,
  map: _map,
  ap: _apPar,
  chain: flatMap,
}

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChainRec2<URI>['chainRec'] = (a, f) => r => async () => {
  let current = await f(a)(r)()
  while (_.isLeft(current)) {
    current = await f(current.left)(r)()
  }
  return current.right
}

/**
 * ChainRec for `ReaderTask`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChainRec2<URI> = {
  ...Chain,
  chainRec,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const Monad: Monad2<URI> = {
  URI,
  map: _map,
  of,
  ap: _apPar,
  chain: flatMap,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const MonadIO: MonadIO2<URI> = {
  URI,
  map: _map,
  of,
  ap: _apPar,
  chain: flatMap,
  fromIO,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const MonadTask: MonadTask2<URI> = {
  URI,
  map: _map,
  of,
  ap: _apPar,
  chain: flatMap,
  fromIO,
  fromTask,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const FromIO: FromIO2<URI> = {
  URI,
  fromIO,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const FromTask: FromTask2<URI> = {
  URI,
  fromIO,
  fromTask,
}

/**
 * @since 2.11.0
 * @category Instances
 */
export const FromReader: FromReader2<URI> = {
  URI,
  fromReader,
}

/** @internal */
interface ReaderTaskTypeLambda extends _.TypeLambda {
  readonly type: ReaderTask<this['In'], this['Target']>
}

/** @internal */
const _FlatMap: _.FlatMap<ReaderTaskTypeLambda> = {
  flatMap,
}

/** @internal */
const _FromIO: _.FromIO<ReaderTaskTypeLambda> = {
  fromIO: FromIO.fromIO,
}

/** @internal */
const _FromTask: _.FromTask<ReaderTaskTypeLambda> = {
  fromTask,
}

/** @internal */
const _FromReader: _.FromReader<ReaderTaskTypeLambda> = {
  fromReader,
}

/**
 * @since 2.16.0
 * @category Sequencing
 */
export const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): <R>(self: ReaderTask<R, A>) => ReaderTask<R, B>
  <R, A, B>(self: ReaderTask<R, A>, f: (a: A) => IO<B>): ReaderTask<R, B>
} = _.flatMapIO(_FromIO, _FlatMap)

/**
 * @since 2.16.0
 * @category Sequencing
 */
export const flatMapTask: {
  <A, B>(f: (a: A) => Task<B>): <R>(self: ReaderTask<R, A>) => ReaderTask<R, B>
  <R, A, B>(self: ReaderTask<R, A>, f: (a: A) => Task<B>): ReaderTask<R, B>
} = _.flatMapTask(_FromTask, _FlatMap)

/**
 * @since 2.16.0
 * @category Sequencing
 */
export const flatMapReader: {
  <A, R2, B>(f: (a: A) => R.Reader<R2, B>): <R1>(self: ReaderTask<R1, A>) => ReaderTask<R1 & R2, B>
  <R1, A, R2, B>(self: ReaderTask<R1, A>, f: (a: A) => R.Reader<R2, B>): ReaderTask<R1 & R2, B>
} = _.flatMapReader(_FromReader, _FlatMap)

/**
 * @since 2.16.0
 * @category Sequencing
 */
export const flatMapReaderIO: {
  <A, R2, B>(f: (a: A) => ReaderIO<R2, B>): <R1>(self: ReaderTask<R1, A>) => ReaderTask<R1 & R2, B>
  <R1, A, R2, B>(self: ReaderTask<R1, A>, f: (a: A) => ReaderIO<R2, B>): ReaderTask<R1 & R2, B>
} = /*#__PURE__*/ dual(
  2,
  <R1, A, R2, B>(self: ReaderTask<R1, A>, f: (a: A) => ReaderIO<R2, B>): ReaderTask<R1 & R2, B> =>
    flatMap(self, fromReaderIOK(f)),
)

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.15.0
 * @category Combinators
 */
export const tap: {
  <R1, A, R2, _>(self: ReaderTask<R1, A>, f: (a: A) => ReaderTask<R2, _>): ReaderTask<R1 & R2, A>
  <A, R2, _>(f: (a: A) => ReaderTask<R2, _>): <R1>(self: ReaderTask<R1, A>) => ReaderTask<R2 & R1, A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.16.0
 * @category Combinators
 * @example
 *   import { pipe } from 'fp-ts/function'
 *   import * as RT from 'fp-ts/ReaderTask'
 *   import * as Console from 'fp-ts/Console'
 *
 *   // Will produce `Hello, fp-ts` to the stdout
 *   const effect = pipe(
 *     RT.ask<string>(),
 *     RT.tapIO(value => Console.log(`Hello, ${value}`)),
 *   )
 *
 *   async function test() {
 *     assert.deepStrictEqual(await effect('fp-ts')(), 'fp-ts')
 *   }
 *
 *   test()
 */
export const tapIO: {
  <A, _>(f: (a: A) => IO<_>): <R>(self: ReaderTask<R, A>) => ReaderTask<R, A>
  <R, A, _>(self: ReaderTask<R, A>, f: (a: A) => IO<_>): ReaderTask<R, A>
} = /*#__PURE__*/ dual(2, tapIO_(FromIO, Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.16.0
 * @category Combinators
 */
export const tapReader: {
  <R2, A, _>(f: (a: A) => R.Reader<R2, _>): <R1>(self: ReaderTask<R1, A>) => ReaderTask<R1 & R2, A>
  <R1, R2, A, _>(self: ReaderTask<R1, A>, f: (a: A) => R.Reader<R2, _>): ReaderTask<R1 & R2, A>
} = /*#__PURE__*/ dual(2, tapReader_(FromReader, Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.16.0
 * @category Combinators
 * @example
 *   import { pipe } from 'fp-ts/function'
 *   import * as RT from 'fp-ts/ReaderTask'
 *   import * as T from 'fp-ts/Task'
 *
 *   const effect = pipe(
 *     RT.ask<number>(),
 *     RT.tapTask(value => T.of(value + 1)),
 *   )
 *
 *   async function test() {
 *     assert.deepStrictEqual(await effect(1)(), 1)
 *   }
 *
 *   test()
 */
export const tapTask: {
  <A, _>(f: (a: A) => Task<_>): <R>(self: ReaderTask<R, A>) => ReaderTask<R, A>
  <R, A, _>(self: ReaderTask<R, A>, f: (a: A) => Task<_>): ReaderTask<R, A>
} = /*#__PURE__*/ dual(2, tapTask_(FromTask, Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.16.0
 * @category Combinators
 */
export const tapReaderIO: {
  <R2, A, _>(f: (a: A) => ReaderIO<R2, _>): <R1>(self: ReaderTask<R1, A>) => ReaderTask<R1 & R2, A>
  <R1, R2, A, _>(self: ReaderTask<R1, A>, f: (a: A) => ReaderIO<R2, _>): ReaderTask<R1 & R2, A>
} = /*#__PURE__*/ dual(
  2,
  <R1, R2, A, _>(self: ReaderTask<R1, A>, f: (a: A) => ReaderIO<R2, _>): ReaderTask<R1 & R2, A> =>
    tap(self, fromReaderIOK(f)),
)

/**
 * @since 2.4.0
 * @category Lifting
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IO<B>,
) => <R = unknown>(...a: A) => ReaderTask<R, B> = /*#__PURE__*/ fromIOK_(FromIO)

/**
 * Alias of `flatMapIO`.
 *
 * @since 2.4.0
 * @category Legacy
 */
export const chainIOK: <A, B>(f: (a: A) => IO<B>) => <R>(first: ReaderTask<R, A>) => ReaderTask<R, B> = flatMapIO

/**
 * Alias of `tapIO`.
 *
 * @since 2.10.0
 * @category Legacy
 */
export const chainFirstIOK: <A, B>(f: (a: A) => IO<B>) => <R>(first: ReaderTask<R, A>) => ReaderTask<R, A> = tapIO

/**
 * Reads the current context.
 *
 * @since 2.3.0
 * @category Constructors
 */
export const ask = /*#__PURE__*/ ask_(FromReader)

/**
 * Projects a value from the global context in a `ReaderTask`.
 *
 * @since 2.3.0
 * @category Constructors
 */
export const asks = /*#__PURE__*/ asks_(FromReader)

/**
 * @since 2.11.0
 * @category Lifting
 */
export const fromReaderK: <A extends ReadonlyArray<unknown>, R, B>(
  f: (...a: A) => R.Reader<R, B>,
) => (...a: A) => ReaderTask<R, B> = /*#__PURE__*/ fromReaderK_(FromReader)

/**
 * Alias of `flatMapReader`.
 *
 * @since 2.11.0
 * @category Legacy
 */
export const chainReaderK: <A, R, B>(f: (a: A) => R.Reader<R, B>) => (ma: ReaderTask<R, A>) => ReaderTask<R, B> =
  flatMapReader

/**
 * Alias of `flatMapReader`.
 *
 * Less strict version of [`chainReaderK`](#chainreaderk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @since 2.11.0
 * @category Legacy
 */
export const chainReaderKW: <A, R1, B>(
  f: (a: A) => R.Reader<R1, B>,
) => <R2>(ma: ReaderTask<R2, A>) => ReaderTask<R1 & R2, B> = flatMapReader

/**
 * Alias of `tapReader`.
 *
 * @since 2.11.0
 * @category Legacy
 */
export const chainFirstReaderK: <A, R, B>(f: (a: A) => R.Reader<R, B>) => (ma: ReaderTask<R, A>) => ReaderTask<R, A> =
  tapReader

/**
 * Alias of `tapReader`.
 *
 * Less strict version of [`chainFirstReaderK`](#chainfirstreaderk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @since 2.11.0
 * @category Legacy
 */
export const chainFirstReaderKW: <A, R1, B>(
  f: (a: A) => R.Reader<R1, B>,
) => <R2>(ma: ReaderTask<R2, A>) => ReaderTask<R1 & R2, A> = tapReader

/**
 * @since 2.13.0
 * @category Lifting
 */
export const fromReaderIOK =
  <A extends ReadonlyArray<unknown>, R, B>(f: (...a: A) => ReaderIO<R, B>): ((...a: A) => ReaderTask<R, B>) =>
  (...a) =>
    fromReaderIO(f(...a))

/**
 * Alias of `flatMapReaderIO`.
 *
 * Less strict version of [`chainReaderIOK`](#chainreaderiok).
 *
 * @since 2.13.0
 * @category Legacy
 */
export const chainReaderIOKW: <A, R2, B>(
  f: (a: A) => ReaderIO<R2, B>,
) => <R1>(ma: ReaderTask<R1, A>) => ReaderTask<R1 & R2, B> = flatMapReaderIO

/**
 * Alias of `flatMapReaderIO`.
 *
 * @since 2.13.0
 * @category Legacy
 */
export const chainReaderIOK: <A, R, B>(f: (a: A) => ReaderIO<R, B>) => (ma: ReaderTask<R, A>) => ReaderTask<R, B> =
  flatMapReaderIO

/**
 * Alias of `tapReaderIO`.
 *
 * Less strict version of [`chainFirstReaderIOK`](#chainfirstreaderiok).
 *
 * @since 2.13.0
 * @category Legacy
 */
export const chainFirstReaderIOKW: <A, R2, B>(
  f: (a: A) => ReaderIO<R2, B>,
) => <R1>(ma: ReaderTask<R1, A>) => ReaderTask<R1 & R2, A> = tapReaderIO

/**
 * Alias of `tapReaderIO`.
 *
 * @since 2.13.0
 * @category Legacy
 */
export const chainFirstReaderIOK: <A, R, B>(f: (a: A) => ReaderIO<R, B>) => (ma: ReaderTask<R, A>) => ReaderTask<R, A> =
  tapReaderIO

/**
 * @since 2.4.0
 * @category Lifting
 */
export const fromTaskK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => T.Task<B>,
) => <R = unknown>(...a: A) => ReaderTask<R, B> = /*#__PURE__*/ fromTaskK_(FromTask)

/**
 * Alias of `flatMapTask`.
 *
 * @since 2.4.0
 * @category Legacy
 */
export const chainTaskK: <A, B>(f: (a: A) => T.Task<B>) => <R>(first: ReaderTask<R, A>) => ReaderTask<R, B> =
  flatMapTask

/**
 * Alias of `tapTask`.
 *
 * @since 2.10.0
 * @category Legacy
 */
export const chainFirstTaskK: <A, B>(f: (a: A) => T.Task<B>) => <R>(first: ReaderTask<R, A>) => ReaderTask<R, A> =
  tapTask

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 * @category Do notation
 */
export const Do: ReaderTask<unknown, {}> = /*#__PURE__*/ of(_.emptyRecord)

/**
 * @since 2.8.0
 * @category Do notation
 */
export const bindTo = /*#__PURE__*/ bindTo_(Functor)

const let_ = /*#__PURE__*/ let__(Functor)

export {
  /**
   * @since 2.13.0
   * @category Do notation
   */
  let_ as let,
}

/**
 * @since 2.8.0
 * @category Do notation
 */
export const bind = /*#__PURE__*/ chainable.bind(Chain)

/**
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @since 2.8.0
 * @category Do notation
 */
export const bindW: <N extends string, A, R2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => ReaderTask<R2, B>,
) => <R1>(fa: ReaderTask<R1, A>) => ReaderTask<R1 & R2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  bind as any

/**
 * @since 2.8.0
 * @category Do notation
 */
export const apS = /*#__PURE__*/ apS_(ApplyPar)

/**
 * Less strict version of [`apS`](#aps).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @since 2.8.0
 * @category Do notation
 */
export const apSW: <A, N extends string, R2, B>(
  name: Exclude<N, keyof A>,
  fb: ReaderTask<R2, B>,
) => <R1>(fa: ReaderTask<R1, A>) => ReaderTask<R1 & R2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  apS as any

/** @since 2.11.0 */
export const ApT: ReaderTask<unknown, readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

interface ReaderTaskIterable<R, A> {
  readonly value: ReaderTask<R, A>
  [Symbol.iterator]: () => Generator<ReaderTaskIterable<R, A>, A, any>
}

const do_: <MA extends ReaderTaskIterable<any, any>, A>(
  yieldFunction: (unwrap: <R, A>(ma: ReaderTask<R, A>) => ReaderTaskIterable<R, A>) => Generator<MA, A>,
) => ReaderTask<_.UnionToIntersection<MA extends ReaderTaskIterable<infer R, any> ? R : never>, A> = ChnRec.do(
  Pointed,
  ChainRec,
)

export {
  /**
   * @since 1.0.0
   * @category Do notation
   */
  do_ as do,
}

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 * @category Traversing
 */
export const traverseReadonlyNonEmptyArrayWithIndex = <A, R, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
): ((as: ReadonlyNonEmptyArray<A>) => ReaderTask<R, ReadonlyNonEmptyArray<B>>) =>
  flow(R.traverseReadonlyNonEmptyArrayWithIndex(f), R.map(T.traverseReadonlyNonEmptyArrayWithIndex(SK)))

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 * @category Traversing
 */
export const traverseReadonlyArrayWithIndex = <A, R, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
): ((as: ReadonlyArray<A>) => ReaderTask<R, ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.11.0
 * @category Traversing
 */
export const traverseReadonlyNonEmptyArrayWithIndexSeq = <R, A, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
): ((as: ReadonlyNonEmptyArray<A>) => ReaderTask<R, ReadonlyNonEmptyArray<B>>) =>
  flow(R.traverseReadonlyNonEmptyArrayWithIndex(f), R.map(T.traverseReadonlyNonEmptyArrayWithIndexSeq(SK)))

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.11.0
 * @category Traversing
 */
export const traverseReadonlyArrayWithIndexSeq = <R, A, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
): ((as: ReadonlyArray<A>) => ReaderTask<R, ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndexSeq(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const traverseArrayWithIndex: <R, A, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
) => (as: ReadonlyArray<A>) => ReaderTask<R, ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const traverseArray = <R, A, B>(
  f: (a: A) => ReaderTask<R, B>,
): ((as: ReadonlyArray<A>) => ReaderTask<R, ReadonlyArray<B>>) => traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const sequenceArray: <R, A>(arr: ReadonlyArray<ReaderTask<R, A>>) => ReaderTask<R, ReadonlyArray<A>> =
  /*#__PURE__*/ traverseArray(identity)

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.10.0
 * @category Traversing
 */
export const traverseSeqArrayWithIndex: <R, A, B>(
  f: (index: number, a: A) => ReaderTask<R, B>,
) => (as: ReadonlyArray<A>) => ReaderTask<R, ReadonlyArray<B>> = traverseReadonlyArrayWithIndexSeq

/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @since 2.10.0
 * @category Traversing
 */
export const traverseSeqArray = <R, A, B>(
  f: (a: A) => ReaderTask<R, B>,
): ((as: ReadonlyArray<A>) => ReaderTask<R, ReadonlyArray<B>>) => traverseReadonlyArrayWithIndexSeq((_, a) => f(a))

// -------------------------------------------------------------------------------------
// legacy
// -------------------------------------------------------------------------------------

/**
 * Alias of `flatMap`.
 *
 * @since 2.3.0
 * @category Legacy
 */
export const chain: <A, R, B>(f: (a: A) => ReaderTask<R, B>) => (ma: ReaderTask<R, A>) => ReaderTask<R, B> = flatMap

/**
 * Alias of `flatMap`.
 *
 * @since 2.6.7
 * @category Legacy
 */
export const chainW: <R2, A, B>(
  f: (a: A) => ReaderTask<R2, B>,
) => <R1>(ma: ReaderTask<R1, A>) => ReaderTask<R1 & R2, B> = flatMap

/**
 * Alias of `tap`.
 *
 * @since 2.3.0
 * @category Legacy
 */
export const chainFirst: <A, R, B>(f: (a: A) => ReaderTask<R, B>) => (first: ReaderTask<R, A>) => ReaderTask<R, A> = tap

/**
 * Alias of `tap`.
 *
 * @since 2.11.0
 * @category Legacy
 */
export const chainFirstW: <R2, A, B>(
  f: (a: A) => ReaderTask<R2, B>,
) => <R1>(ma: ReaderTask<R1, A>) => ReaderTask<R1 & R2, A> = tap

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use `traverseReadonlyArrayWithIndexSeq` instead.
 *
 * @deprecated
 * @since 2.10.0
 * @category Zone of death
 */
export const sequenceSeqArray: <R, A>(arr: ReadonlyArray<ReaderTask<R, A>>) => ReaderTask<R, ReadonlyArray<A>> =
  /*#__PURE__*/ traverseSeqArray(identity)

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `RT.Functor` instead of `RT.readerTask` (where `RT` is from `import RT from 'fp-ts/ReaderTask'`)
 *
 * @deprecated
 * @since 2.3.0
 * @category Zone of death
 */
export const readerTask: MonadTask2<URI> = {
  URI,
  map: _map,
  of,
  ap: _apPar,
  chain: flatMap,
  fromIO,
  fromTask,
}

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `RT.Functor` instead of `RT.readerTaskSeq` (where `RT` is from `import RT from 'fp-ts/ReaderTask'`)
 *
 * @deprecated
 * @since 2.3.0
 * @category Zone of death
 */

export const readerTaskSeq: typeof readerTask = {
  URI,
  map: _map,
  of,
  ap: _apSeq,
  chain: flatMap,
  fromIO,
  fromTask,
}

/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @deprecated
 * @since 2.3.0
 * @category Zone of death
 */
export const getSemigroup: <R, A>(S: Semigroup<A>) => Semigroup<ReaderTask<R, A>> =
  /*#__PURE__*/ getApplySemigroup_(ApplySeq)

/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @deprecated
 * @since 2.3.0
 * @category Zone of death
 */
export const getMonoid: <R, A>(M: Monoid<A>) => Monoid<ReaderTask<R, A>> =
  /*#__PURE__*/ getApplicativeMonoid(ApplicativeSeq)

/**
 * @deprecated
 * @since 2.4.0
 * @category Zone of death
 */
/* istanbul ignore next */
export function run<R, A>(ma: ReaderTask<R, A>, r: R): Promise<A> {
  return ma(r)()
}
