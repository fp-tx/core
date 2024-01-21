/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Applicative2 } from './Applicative'
import { apFirst as apFirst_, type Apply2, apS as apS_, apSecond as apSecond_ } from './Apply'
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
import { dual, flow, identity, pipe, SK } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor2 } from './Functor'
import * as _ from './internal'
import * as I from './IO'
import { type IO } from './IO'
import { type Monad2 } from './Monad'
import { type MonadIO2 } from './MonadIO'
import { type Pointed2 } from './Pointed'
import * as R from './Reader'
import { type Reader } from './Reader'
import * as RT from './ReaderT'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */

export interface ReaderIO<R, A> {
  (r: R): I.IO<A>
}

// -------------------------------------------------------------------------------------
// conversions
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromReader: <R, A>(fa: Reader<R, A>) => ReaderIO<R, A> = /*#__PURE__*/ RT.fromReader(I.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromIO: <A, R = unknown>(fa: IO<A>) => ReaderIO<R, A> = /*#__PURE__*/ R.of

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const local: <R2, R1>(f: (r2: R2) => R1) => <A>(ma: ReaderIO<R1, A>) => ReaderIO<R2, A> = R.local

/**
 * Less strict version of [`asksReaderIO`](#asksreaderio).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const asksReaderIOW: <R1, R2, A>(f: (r1: R1) => ReaderIO<R2, A>) => ReaderIO<R1 & R2, A> = R.asksReaderW

/**
 * Effectfully accesses the environment.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const asksReaderIO: <R, A>(f: (r: R) => ReaderIO<R, A>) => ReaderIO<R, A> = asksReaderIOW

const _map: Functor2<URI>['map'] = (fa, f) => pipe(fa, map(f))
const _ap: Apply2<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => <R>(fa: ReaderIO<R, A>) => ReaderIO<R, B> = /*#__PURE__*/ RT.map(I.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ap: <R, A>(fa: ReaderIO<R, A>) => <B>(fab: ReaderIO<R, (a: A) => B>) => ReaderIO<R, B> =
  /*#__PURE__*/ RT.ap(I.Apply)

/**
 * Less strict version of [`ap`](#ap).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apW: <R2, A>(fa: ReaderIO<R2, A>) => <R1, B>(fab: ReaderIO<R1, (a: A) => B>) => ReaderIO<R1 & R2, B> =
  ap as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const of: <R = unknown, A = never>(a: A) => ReaderIO<R, A> = /*#__PURE__*/ RT.of(I.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMap: {
  <A, R2, B>(f: (a: A) => ReaderIO<R2, B>): <R1>(ma: ReaderIO<R1, A>) => ReaderIO<R1 & R2, B>
  <R1, A, R2, B>(ma: ReaderIO<R1, A>, f: (a: A) => ReaderIO<R2, B>): ReaderIO<R1 & R2, B>
} = /*#__PURE__*/ dual(2, RT.flatMap(I.Monad))

/**
 * Less strict version of [`flatten`](#flatten).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flattenW: <R1, R2, A>(mma: ReaderIO<R1, ReaderIO<R2, A>>) => ReaderIO<R1 & R2, A> =
  /*#__PURE__*/ flatMap(identity)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatten: <R, A>(mma: ReaderIO<R, ReaderIO<R, A>>) => ReaderIO<R, A> = flattenW

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'ReaderIO'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: ReaderIO<E, A>
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Functor: Functor2<URI> = {
  URI,
  map: _map,
}

/**
 * Maps the value to the specified constant value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const as: {
  <A>(a: A): <R, _>(self: ReaderIO<R, _>) => ReaderIO<R, A>
  <R, _, A>(self: ReaderIO<R, _>, a: A): ReaderIO<R, A>
} = dual(2, as_(Functor))

/**
 * Maps the value to the void constant value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const asUnit: <R, _>(self: ReaderIO<R, _>) => ReaderIO<R, void> = asUnit_(Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Pointed: Pointed2<URI> = {
  URI,
  of,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Apply: Apply2<URI> = {
  URI,
  map: _map,
  ap: _ap,
}

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apFirst = /*#__PURE__*/ apFirst_(Apply)

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apSecond = /*#__PURE__*/ apSecond_(Apply)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Applicative: Applicative2<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Chain: chainable.Chain2<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instance methods
 * @public
 */
export const chainRec: ChainRec2<URI>['chainRec'] = (a, f) => r => () => {
  let current = f(a)(r)()
  while (_.isLeft(current)) {
    current = f(current.left)(r)()
  }
  return current.right
}

/**
 * ChainRec for `ReaderIO`
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ChainRec: ChainRec2<URI> = {
  ...Chain,
  chainRec,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Monad: Monad2<URI> = {
  URI,
  map: _map,
  of,
  ap: _ap,
  chain: flatMap,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const MonadIO: MonadIO2<URI> = {
  URI,
  map: _map,
  of,
  ap: _ap,
  chain: flatMap,
  fromIO,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const FromIO: FromIO2<URI> = {
  URI,
  fromIO,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const FromReader: FromReader2<URI> = {
  URI,
  fromReader,
}

/** @internal @packageDocumentation */
interface ReaderIOTypeLambda extends _.TypeLambda {
  readonly type: ReaderIO<this['In'], this['Target']>
}

/** @internal */
const _FlatMap: _.FlatMap<ReaderIOTypeLambda> = {
  flatMap,
}

/** @internal */
const _FromIO: _.FromIO<ReaderIOTypeLambda> = {
  fromIO: FromIO.fromIO,
}

/** @internal */
const _FromReader: _.FromReader<ReaderIOTypeLambda> = {
  fromReader,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): <R>(self: ReaderIO<R, A>) => ReaderIO<R, B>
  <R, A, B>(self: ReaderIO<R, A>, f: (a: A) => IO<B>): ReaderIO<R, B>
} = _.flatMapIO(_FromIO, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapReader: {
  <A, R2, B>(f: (a: A) => Reader<R2, B>): <R1>(self: ReaderIO<R1, A>) => ReaderIO<R1 & R2, B>
  <R1, A, R2, B>(self: ReaderIO<R1, A>, f: (a: A) => Reader<R2, B>): ReaderIO<R1 & R2, B>
} = /*#__PURE__*/ _.flatMapReader(_FromReader, _FlatMap)

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Combinators
 * @public
 */
export const tap: {
  <R1, A, R2, _>(self: ReaderIO<R1, A>, f: (a: A) => ReaderIO<R2, _>): ReaderIO<R1 & R2, A>
  <A, R2, _>(f: (a: A) => ReaderIO<R2, _>): <R1>(self: ReaderIO<R1, A>) => ReaderIO<R2 & R1, A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Combinators
 * @example
 *
 * ```typescript
 * import { pipe } from '@fp-tx/core/function'
 * import * as RIO from '@fp-tx/core/ReaderIO'
 * import * as Console from '@fp-tx/core/Console'
 *
 * // Will produce `Hello, fp-ts` to the stdout
 * const effect = pipe(
 *   RIO.ask<string>(),
 *   RIO.tapIO(value => Console.log(`Hello, ${value}`)),
 * )
 *
 * async function test() {
 *   assert.deepStrictEqual(effect('fp-ts')(), 'fp-ts')
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const tapIO: {
  <A, _>(f: (a: A) => IO<_>): <R>(self: ReaderIO<R, A>) => ReaderIO<R, A>
  <R, A, _>(self: ReaderIO<R, A>, f: (a: A) => IO<_>): ReaderIO<R, A>
} = /*#__PURE__*/ dual(2, tapIO_(FromIO, Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Combinators
 * @public
 */
export const tapReader: {
  <R2, A, _>(f: (a: A) => Reader<R2, _>): <R1>(self: ReaderIO<R1, A>) => ReaderIO<R1 & R2, A>
  <R1, A, R2, _>(self: ReaderIO<R1, A>, f: (a: A) => Reader<R2, _>): ReaderIO<R1 & R2, A>
} = /*#__PURE__*/ dual(2, tapReader_(FromReader, Chain))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => I.IO<B>,
) => <R = unknown>(...a: A) => ReaderIO<R, B> = /*#__PURE__*/ fromIOK_(FromIO)

/**
 * Alias of `flatMapIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainIOK: <A, B>(f: (a: A) => I.IO<B>) => <E>(first: ReaderIO<E, A>) => ReaderIO<E, B> = flatMapIO

/**
 * Alias of `tapIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstIOK: <A, B>(f: (a: A) => I.IO<B>) => <E>(first: ReaderIO<E, A>) => ReaderIO<E, A> = tapIO

/**
 * Reads the current context.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const ask = /*#__PURE__*/ ask_(FromReader)

/**
 * Projects a value from the global context in a `ReaderIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const asks = /*#__PURE__*/ asks_(FromReader)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromReaderK: <A extends ReadonlyArray<unknown>, R, B>(
  f: (...a: A) => R.Reader<R, B>,
) => (...a: A) => ReaderIO<R, B> = /*#__PURE__*/ fromReaderK_(FromReader)

/**
 * Alias of `flatMapReader`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainReaderK: <A, R, B>(f: (a: A) => R.Reader<R, B>) => (ma: ReaderIO<R, A>) => ReaderIO<R, B> =
  flatMapReader

/**
 * Alias of `flatMapReader`.
 *
 * Less strict version of [`chainReaderK`](#chainreaderk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainReaderKW: <A, R1, B>(
  f: (a: A) => R.Reader<R1, B>,
) => <R2>(ma: ReaderIO<R2, A>) => ReaderIO<R1 & R2, B> = flatMapReader

/**
 * Alias of `tapReader`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstReaderK: <A, R, B>(f: (a: A) => R.Reader<R, B>) => (ma: ReaderIO<R, A>) => ReaderIO<R, A> =
  tapReader

/**
 * Alias of `tapReader`.
 *
 * Less strict version of [`chainFirstReaderK`](#chainfirstreaderk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstReaderKW: <A, R1, B>(
  f: (a: A) => R.Reader<R1, B>,
) => <R2>(ma: ReaderIO<R2, A>) => ReaderIO<R1 & R2, A> = tapReader

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const Do: ReaderIO<unknown, {}> = /*#__PURE__*/ of(_.emptyRecord)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const bindTo = /*#__PURE__*/ bindTo_(Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const bind = /*#__PURE__*/ chainable.bind(Chain)

/**
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const bindW: <N extends string, A, R2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => ReaderIO<R2, B>,
) => <R1>(fa: ReaderIO<R1, A>) => ReaderIO<R1 & R2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  bind as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const apS = /*#__PURE__*/ apS_(Apply)

/**
 * Less strict version of [`apS`](#aps).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const apSW: <N extends string, A, R2, B>(
  name: Exclude<N, keyof A>,
  fb: ReaderIO<R2, B>,
) => <R1>(fa: ReaderIO<R1, A>) => ReaderIO<R1 & R2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  apS as any

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ApT: ReaderIO<unknown, readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

interface ReaderIOIterable<R, A> {
  readonly value: ReaderIO<R, A>
  [Symbol.iterator]: () => Generator<ReaderIOIterable<R, A>, A, any>
}

const do_: <MA extends ReaderIOIterable<any, any>, A>(
  yieldFunction: (unwrap: <R, A>(ma: ReaderIO<R, A>) => ReaderIOIterable<R, A>) => Generator<MA, A>,
) => ReaderIO<_.UnionToIntersection<MA extends ReaderIOIterable<infer R, any> ? R : never>, A> = ChnRec.do(
  Pointed,
  ChainRec,
)

export {
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Do notation
   * @public
   */
  do_ as do,
}

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndex = <A, R, B>(
  f: (index: number, a: A) => ReaderIO<R, B>,
): ((as: ReadonlyNonEmptyArray<A>) => ReaderIO<R, ReadonlyNonEmptyArray<B>>) =>
  flow(R.traverseReadonlyNonEmptyArrayWithIndex(f), R.map(I.traverseReadonlyNonEmptyArrayWithIndex(SK)))

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseReadonlyArrayWithIndex = <A, R, B>(
  f: (index: number, a: A) => ReaderIO<R, B>,
): ((as: ReadonlyArray<A>) => ReaderIO<R, ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseArrayWithIndex: <A, R, B>(
  f: (index: number, a: A) => ReaderIO<R, B>,
) => (as: ReadonlyArray<A>) => ReaderIO<R, ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseArray = <A, R, B>(
  f: (a: A) => ReaderIO<R, B>,
): ((as: ReadonlyArray<A>) => ReaderIO<R, ReadonlyArray<B>>) => traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const sequenceArray: <R, A>(arr: ReadonlyArray<ReaderIO<R, A>>) => ReaderIO<R, ReadonlyArray<A>> =
  /*#__PURE__*/ traverseArray(identity)

// -------------------------------------------------------------------------------------
// legacy
// -------------------------------------------------------------------------------------

/**
 * Alias of `flatMap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chain: <A, R, B>(f: (a: A) => ReaderIO<R, B>) => (ma: ReaderIO<R, A>) => ReaderIO<R, B> = flatMap

/**
 * Alias of `flatMap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainW: <A, R2, B>(f: (a: A) => ReaderIO<R2, B>) => <R1>(ma: ReaderIO<R1, A>) => ReaderIO<R1 & R2, B> =
  flatMap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirst: <A, R, B>(f: (a: A) => ReaderIO<R, B>) => (first: ReaderIO<R, A>) => ReaderIO<R, A> = tap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstW: <A, R2, B>(
  f: (a: A) => ReaderIO<R2, B>,
) => <R1>(ma: ReaderIO<R1, A>) => ReaderIO<R1 & R2, A> = tap
