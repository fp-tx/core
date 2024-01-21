/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Alt3, type Alt3C } from './Alt'
import { type Applicative3, type Applicative3C, getApplicativeMonoid } from './Applicative'
import {
  ap as ap_,
  apFirst as apFirst_,
  type Apply1,
  type Apply3,
  apS as apS_,
  apSecond as apSecond_,
  getApplySemigroup as getApplySemigroup_,
} from './Apply'
import { type Bifunctor3 } from './Bifunctor'
import * as chainable from './Chain'
import { type ChainRec3 } from './ChainRec'
import * as ChnRec from './ChainRec'
import { compact as compact_, type Compactable3C, separate as separate_ } from './Compactable'
import * as E from './Either'
import { type Either } from './Either'
import * as ET from './EitherT'
import {
  filter as filter_,
  type Filterable3C,
  filterMap as filterMap_,
  partition as partition_,
  partitionMap as partitionMap_,
} from './Filterable'
import {
  chainOptionK as chainOptionK_,
  filterOrElse as filterOrElse_,
  type FromEither3,
  fromEitherK as fromEitherK_,
  fromOption as fromOption_,
  fromOptionK as fromOptionK_,
  fromPredicate as fromPredicate_,
  tapEither as tapEither_,
} from './FromEither'
import { type FromIO3, fromIOK as fromIOK_, tapIO as tapIO_ } from './FromIO'
import {
  ask as ask_,
  asks as asks_,
  type FromReader3,
  fromReaderK as fromReaderK_,
  tapReader as tapReader_,
} from './FromReader'
import { type FromTask3, fromTaskK as fromTaskK_, tapTask as tapTask_ } from './FromTask'
import { dual, flow, identity, type LazyArg, pipe, SK } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor3, let as let__ } from './Functor'
import * as _ from './internal'
import { type IO } from './IO'
import { type IOEither } from './IOEither'
import { type Monad3, type Monad3C } from './Monad'
import { type MonadIO3 } from './MonadIO'
import { type MonadTask3, type MonadTask3C } from './MonadTask'
import { type MonadThrow3, type MonadThrow3C } from './MonadThrow'
import { type Monoid } from './Monoid'
import { type Option } from './Option'
import { type Pointed3 } from './Pointed'
import { type Predicate } from './Predicate'
import * as R from './Reader'
import { type Reader } from './Reader'
import { type ReaderEither } from './ReaderEither'
import { type ReaderIO } from './ReaderIO'
import * as RT from './ReaderTask'
import { type ReaderTask } from './ReaderTask'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import * as T from './Task'
import { type Task } from './Task'
import * as TE from './TaskEither'
import { type TaskEither } from './TaskEither'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface ReaderTaskEither<R, E, A> {
  (r: R): TaskEither<E, A>
}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromTaskEither: <E, A, R = unknown>(fa: TaskEither<E, A>) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ R.of

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const left: <R, E = never, A = never>(e: E) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ ET.left(RT.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const right: <R, E = never, A = never>(a: A) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ ET.right(RT.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const rightTask: <R, E = never, A = never>(ma: Task<A>) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ flow(
  TE.rightTask,
  fromTaskEither,
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const leftTask: <R, E = never, A = never>(me: Task<E>) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ flow(
  TE.leftTask,
  fromTaskEither,
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const rightReader: <R, E = never, A = never>(ma: Reader<R, A>) => ReaderTaskEither<R, E, A> = ma =>
  flow(ma, TE.right)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const leftReader: <R, E = never, A = never>(me: Reader<R, E>) => ReaderTaskEither<R, E, A> = me =>
  flow(me, TE.left)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const rightReaderTask: <R, E = never, A = never>(ma: ReaderTask<R, A>) => ReaderTaskEither<R, E, A> =
  /*#__PURE__*/ ET.rightF(RT.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const leftReaderTask: <R, E = never, A = never>(me: ReaderTask<R, E>) => ReaderTaskEither<R, E, A> =
  /*#__PURE__*/ ET.leftF(RT.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const rightIO: <R, E = never, A = never>(ma: IO<A>) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ flow(
  TE.rightIO,
  fromTaskEither,
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const leftIO: <R, E = never, A = never>(me: IO<E>) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ flow(
  TE.leftIO,
  fromTaskEither,
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const rightReaderIO: <R, E = never, A = never>(
  ma: ReaderIO<R, A>,
) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ ma => flow(ma, TE.rightIO)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const leftReaderIO: <R, E = never, A = never>(
  me: ReaderIO<R, E>,
) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ me => flow(me, TE.leftIO)

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
export const fromEither: <E, A, R = unknown>(fa: Either<E, A>) => ReaderTaskEither<R, E, A> = RT.of

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromReader: <R, A, E = never>(fa: Reader<R, A>) => ReaderTaskEither<R, E, A> = rightReader

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromIO: <A, R = unknown, E = never>(fa: IO<A>) => ReaderTaskEither<R, E, A> = rightIO

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromTask: <A, R = unknown, E = never>(fa: Task<A>) => ReaderTaskEither<R, E, A> = rightTask

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromIOEither: <E, A, R = unknown>(fa: IOEither<E, A>) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ flow(
  TE.fromIOEither,
  fromTaskEither,
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromReaderEither: <R, E, A>(fa: ReaderEither<R, E, A>) => ReaderTaskEither<R, E, A> = ma =>
  flow(ma, TE.fromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const match: <E, B, A>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTask<R, B> = /*#__PURE__*/ ET.match(RT.Functor)

/**
 * Less strict version of [`match`](#match).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const matchW: <E, B, A, C>(
  onLeft: (e: E) => B,
  onRight: (a: A) => C,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTask<R, B | C> = match as any

/**
 * The `E` suffix (short for **E**ffect) means that the handlers return an effect (`ReaderTask`).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const matchE: <R, E, A, B>(
  onLeft: (e: E) => ReaderTask<R, B>,
  onRight: (a: A) => ReaderTask<R, B>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTask<R, B> = /*#__PURE__*/ ET.matchE(RT.Chain)

/**
 * Alias of [`matchE`](#matche).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const fold = matchE

/**
 * Less strict version of [`matchE`](#matche).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const matchEW: <E, R2, B, A, R3, C>(
  onLeft: (e: E) => ReaderTask<R2, B>,
  onRight: (a: A) => ReaderTask<R3, C>,
) => <R1>(ma: ReaderTaskEither<R1, E, A>) => ReaderTask<R1 & R2 & R3, B | C> = matchE as any

/**
 * Alias of [`matchEW`](#matchew).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const foldW = matchEW

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const getOrElse: <R, E, A>(
  onLeft: (e: E) => ReaderTask<R, A>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTask<R, A> = /*#__PURE__*/ ET.getOrElse(RT.Monad)

/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * The `W` suffix (short for **W**idening) means that the handler return type will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const getOrElseW: <R2, E, B>(
  onLeft: (e: E) => ReaderTask<R2, B>,
) => <R1, A>(ma: ReaderTaskEither<R1, E, A>) => ReaderTask<R1 & R2, A | B> = getOrElse as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const toUnion: <R, E, A>(fa: ReaderTaskEither<R, E, A>) => ReaderTask<R, E | A> = /*#__PURE__*/ ET.toUnion(
  RT.Functor,
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromNullable: <E>(e: E) => <R, A>(a: A) => ReaderTaskEither<R, E, NonNullable<A>> =
  /*#__PURE__*/ ET.fromNullable(RT.Pointed)

/**
 * Use `liftNullable`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const fromNullableK: <E>(
  e: E,
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined,
) => <R = unknown>(...a: A) => ReaderTaskEither<R, E, NonNullable<B>> = /*#__PURE__*/ ET.fromNullableK(RT.Pointed)

/**
 * Use `flatMapNullable`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainNullableK: <E>(
  e: E,
) => <A, B>(
  f: (a: A) => B | null | undefined,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, NonNullable<B>> = /*#__PURE__*/ ET.chainNullableK(
  RT.Monad,
)

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
export const local: <R2, R1>(
  f: (r2: R2) => R1,
) => <E, A>(ma: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R2, E, A> = R.local

/**
 * Less strict version of [`asksReaderTaskEither`](#asksreadertaskeither).
 *
 * The `W` suffix (short for **W**idening) means that the environment types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const asksReaderTaskEitherW: <R1, R2, E, A>(
  f: (r1: R1) => ReaderTaskEither<R2, E, A>,
) => ReaderTaskEither<R1 & R2, E, A> = R.asksReaderW

/**
 * Effectfully accesses the environment.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const asksReaderTaskEither: <R, E, A>(f: (r: R) => ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> =
  asksReaderTaskEitherW

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const orElse: <R, E1, A, E2>(
  onLeft: (e: E1) => ReaderTaskEither<R, E2, A>,
) => (ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E2, A> = /*#__PURE__*/ ET.orElse(RT.Monad)

/**
 * Less strict version of [`orElse`](#orelse).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the return types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const orElseW: <E1, R1, E2, B>(
  onLeft: (e: E1) => ReaderTaskEither<R1, E2, B>,
) => <R2, A>(ma: ReaderTaskEither<R2, E1, A>) => ReaderTaskEither<R1 & R2, E2, A | B> = orElse as any

/**
 * Returns an effect that effectfully "peeks" at the failure of this effect.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const tapError: {
  <E1, R2, E2, _>(
    onLeft: (e: E1) => ReaderTaskEither<R2, E2, _>,
  ): <R1, A>(self: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A>
  <R1, E1, A, R2, E2, _>(
    self: ReaderTaskEither<R1, E1, A>,
    onLeft: (e: E1) => ReaderTaskEither<R2, E2, _>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, A>
} = /*#__PURE__*/ dual(2, ET.tapError(RT.Monad))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const orLeft: <E1, R, E2>(
  onLeft: (e: E1) => ReaderTask<R, E2>,
) => <A>(fa: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E2, A> = /*#__PURE__*/ ET.orLeft(RT.Monad)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const swap: <R, E, A>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, A, E> = /*#__PURE__*/ ET.swap(
  RT.Functor,
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromIOEitherK = <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IOEither<E, B>,
): (<R = unknown>(...a: A) => ReaderTaskEither<R, E, B>) => flow(f, fromIOEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromTaskEitherK = <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => TaskEither<E, B>,
): (<R = unknown>(...a: A) => ReaderTaskEither<R, E, B>) => flow(f, fromTaskEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromReaderEitherK = <R, E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => ReaderEither<R, E, B>,
): ((...a: A) => ReaderTaskEither<R, E, B>) => flow(f, fromReaderEither)

const _map: Functor3<URI>['map'] = (fa, f) => pipe(fa, map(f))
const _apPar: Apply3<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
const _apSeq: Apply3<URI>['ap'] = (fab, fa) => flatMap(fab, f => pipe(fa, map(f)))
/* istanbul ignore next */
const _alt: Alt3<URI>['alt'] = (fa, that) => pipe(fa, alt(that))

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
export const map: <A, B>(f: (a: A) => B) => <R, E>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> =
  /*#__PURE__*/ ET.map(RT.Functor)

/**
 * Returns a `ReaderTaskEither` whose failure and success channels have been mapped by the specified pair of functions,
 * `f` and `g`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import * as ReaderTaskEither from '@fp-tx/core/ReaderTaskEither'
 * import * as Either from '@fp-tx/core/Either'
 *
 * const f = (s: string) => new Error(s)
 * const g = (n: number) => n * 2
 *
 * async function test() {
 *   assert.deepStrictEqual(await ReaderTaskEither.mapBoth(ReaderTaskEither.right(1), f, g)({})(), Either.right(2))
 *   assert.deepStrictEqual(
 *     await ReaderTaskEither.mapBoth(ReaderTaskEither.left('err'), f, g)({})(),
 *     Either.left(new Error('err')),
 *   )
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const mapBoth: {
  <E, G, A, B>(f: (e: E) => G, g: (a: A) => B): <R>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, G, B>
  <R, E, A, G, B>(self: ReaderTaskEither<R, E, A>, f: (e: E) => G, g: (a: A) => B): ReaderTaskEither<R, G, B>
} = /*#__PURE__*/ dual(3, ET.mapBoth(RT.Functor))

/**
 * Alias of `mapBoth`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const bimap: <E, G, A, B>(
  f: (e: E) => G,
  g: (a: A) => B,
) => <R>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, G, B> = mapBoth

/**
 * Returns a `ReaderTaskEither` with its error channel mapped using the specified function.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import * as ReaderTaskEither from '@fp-tx/core/ReaderTaskEither'
 * import * as Either from '@fp-tx/core/Either'
 *
 * const f = (s: string) => new Error(s)
 *
 * async function test() {
 *   assert.deepStrictEqual(await ReaderTaskEither.mapError(ReaderTaskEither.right(1), f)({})(), Either.right(1))
 *   assert.deepStrictEqual(
 *     await ReaderTaskEither.mapError(ReaderTaskEither.left('err'), f)({})(),
 *     Either.left(new Error('err')),
 *   )
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const mapError: {
  <R, E, G>(f: (e: E) => G): <A>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, G, A>
  <R, E, A, G>(self: ReaderTaskEither<R, E, A>, f: (e: E) => G): ReaderTaskEither<R, G, A>
} = /*#__PURE__*/ dual(2, ET.mapError(RT.Functor))

/**
 * Alias of `mapError`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const mapLeft: <E, G>(f: (e: E) => G) => <R, A>(fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, G, A> =
  mapError

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ap: <R, E, A>(
  fa: ReaderTaskEither<R, E, A>,
) => <B>(fab: ReaderTaskEither<R, E, (a: A) => B>) => ReaderTaskEither<R, E, B> = /*#__PURE__*/ ET.ap(RT.ApplyPar)

/**
 * Less strict version of [`ap`](#ap).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apW: <R2, E2, A>(
  fa: ReaderTaskEither<R2, E2, A>,
) => <R1, E1, B>(fab: ReaderTaskEither<R1, E1, (a: A) => B>) => ReaderTaskEither<R1 & R2, E1 | E2, B> = ap as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const of: <R = unknown, E = never, A = never>(a: A) => ReaderTaskEither<R, E, A> = right

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMap: {
  <A, R2, E2, B>(
    f: (a: A) => ReaderTaskEither<R2, E2, B>,
  ): <R1, E1>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, B>
  <R1, E1, A, R2, E2, B>(
    ma: ReaderTaskEither<R1, E1, A>,
    f: (a: A) => ReaderTaskEither<R2, E2, B>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, B>
} = /*#__PURE__*/ dual(2, ET.flatMap(RT.Monad))

/**
 * Less strict version of [`flatten`](#flatten).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flattenW: <R1, E1, R2, E2, A>(
  mma: ReaderTaskEither<R1, E1, ReaderTaskEither<R2, E2, A>>,
) => ReaderTaskEither<R1 & R2, E1 | E2, A> = /*#__PURE__*/ flatMap(identity)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatten: <R, E, A>(mma: ReaderTaskEither<R, E, ReaderTaskEither<R, E, A>>) => ReaderTaskEither<R, E, A> =
  flattenW

/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const alt: <R, E, A>(
  that: () => ReaderTaskEither<R, E, A>,
) => (fa: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ ET.alt(RT.Monad)

/**
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the environment, the error and the return types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const altW: <R2, E2, B>(
  that: () => ReaderTaskEither<R2, E2, B>,
) => <R1, E1, A>(fa: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E2, A | B> = alt as any

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const throwError: MonadThrow3<URI>['throwError'] = left

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'ReaderTaskEither'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind3<R, E, A> {
    readonly [URI]: ReaderTaskEither<R, E, A>
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const getCompactable = <E>(M: Monoid<E>): Compactable3C<URI, E> => {
  const C = E.getCompactable(M)
  return {
    URI,
    _E: undefined as any,
    compact: compact_(RT.Functor, C),
    separate: separate_(RT.Functor, C, E.Functor),
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export function getFilterable<E>(M: Monoid<E>): Filterable3C<URI, E> {
  const F = E.getFilterable(M)
  const C = getCompactable(M)

  const filter = filter_(RT.Functor, F)
  const filterMap = filterMap_(RT.Functor, F)
  const partition = partition_(RT.Functor, F)
  const partitionMap = partitionMap_(RT.Functor, F)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    compact: C.compact,
    separate: C.separate,
    filter: <R, A>(fa: ReaderTaskEither<R, E, A>, predicate: Predicate<A>) => pipe(fa, filter(predicate)),
    filterMap: (fa, f) => pipe(fa, filterMap(f)),
    partition: <R, A>(fa: ReaderTaskEither<R, E, A>, predicate: Predicate<A>) => pipe(fa, partition(predicate)),
    partitionMap: (fa, f) => pipe(fa, partitionMap(f)),
  }
}

/**
 * The default [`ApplicativePar`](#applicativepar) instance returns the first error, if you want to get all errors you
 * need to provide a way to concatenate them via a `Semigroup`.
 *
 * See [`getApplicativeValidation`](./Either.ts.html#getapplicativevalidation).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export function getApplicativeReaderTaskValidation<E>(A: Apply1<T.URI>, S: Semigroup<E>): Applicative3C<URI, E> {
  const ap = ap_(R.Apply, TE.getApplicativeTaskValidation(A, S))
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: (fab, fa) => pipe(fab, ap(fa)),
    of,
  }
}

/**
 * The default [`Alt`](#alt) instance returns the last error, if you want to get all errors you need to provide a way to
 * concatenate them via a `Semigroup`.
 *
 * See [`getAltValidation`](./Either.ts.html#getaltvalidation).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export function getAltReaderTaskValidation<E>(S: Semigroup<E>): Alt3C<URI, E> {
  const alt = ET.altValidation(RT.Monad, S)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    alt: (fa, that) => pipe(fa, alt(that)),
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Functor: Functor3<URI> = {
  URI,
  map: _map,
}

/**
 * Maps the `Right` value of this `ReaderTaskEither` to the specified constant value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const as: {
  <A>(a: A): <R, E, _>(self: ReaderTaskEither<R, E, _>) => ReaderTaskEither<R, E, A>
  <R, E, _, A>(self: ReaderTaskEither<R, E, _>, a: A): ReaderTaskEither<R, E, A>
} = dual(2, as_(Functor))

/**
 * Maps the `Right` value of this `ReaderTaskEither` to the void constant value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const asUnit: <R, E, _>(self: ReaderTaskEither<R, E, _>) => ReaderTaskEither<R, E, void> = asUnit_(Functor)

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
export const Pointed: Pointed3<URI> = {
  URI,
  of,
}

/**
 * Runs computations in parallel.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ApplyPar: Apply3<URI> = {
  URI,
  map: _map,
  ap: _apPar,
}

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apFirst = /*#__PURE__*/ apFirst_(ApplyPar)

/**
 * Less strict version of [`apFirst`](#apfirst).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apFirstW: <R2, E2, B>(
  second: ReaderTaskEither<R2, E2, B>,
) => <R1, E1, A>(first: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A> = apFirst as any

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apSecond = /*#__PURE__*/ apSecond_(ApplyPar)

/**
 * Less strict version of [`apSecond`](#apsecond).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apSecondW: <R2, E2, B>(
  second: ReaderTaskEither<R2, E2, B>,
) => <R1, E1, A>(first: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, B> = apSecond as any

/**
 * Runs computations in parallel.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ApplicativePar: Applicative3<URI> = {
  URI,
  map: _map,
  ap: _apPar,
  of,
}

/**
 * Runs computations sequentially.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ApplySeq: Apply3<URI> = {
  URI,
  map: _map,
  ap: _apSeq,
}

/**
 * Runs computations sequentially.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ApplicativeSeq: Applicative3<URI> = {
  URI,
  map: _map,
  ap: _apSeq,
  of,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Chain: chainable.Chain3<URI> = {
  URI,
  map: _map,
  ap: _apPar,
  chain: flatMap,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instance methods
 * @public
 */
export const chainRec: ChainRec3<URI>['chainRec'] =
  <R, E, A, B>(a: A, f: (a: A) => ReaderTaskEither<R, E, E.Either<A, B>>) =>
  (r: R) =>
  async () => {
    let current = await f(a)(r)()
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (E.isRight(current) && E.isLeft(current.right)) {
        current = await f(current.right.left)(r)()
        continue
      }
      if (E.isLeft(current)) {
        return current as E.Either<E, B>
      }
      if (E.isRight(current.right)) {
        return E.right(current.right.right) as E.Either<E, B>
      }
    }
  }

/**
 * ChainRec for `ReaderTaskEither`
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ChainRec: ChainRec3<URI> = {
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
export const Monad: Monad3<URI> = {
  URI,
  map: _map,
  ap: _apPar,
  chain: flatMap,
  of,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const MonadIO: MonadIO3<URI> = {
  URI,
  map: _map,
  ap: _apPar,
  chain: flatMap,
  of,
  fromIO,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const MonadTask: MonadTask3<URI> = {
  URI,
  map: _map,
  ap: _apPar,
  chain: flatMap,
  of,
  fromIO,
  fromTask,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const MonadThrow: MonadThrow3<URI> = {
  URI,
  map: _map,
  ap: _apPar,
  chain: flatMap,
  of,
  throwError,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const FromEither: FromEither3<URI> = {
  URI,
  fromEither,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const FromIO: FromIO3<URI> = {
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
export const FromTask: FromTask3<URI> = {
  URI,
  fromIO,
  fromTask,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const FromReader: FromReader3<URI> = {
  URI,
  fromReader,
}

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
  <R1, E1, A, R2, E2, _>(
    self: ReaderTaskEither<R1, E1, A>,
    f: (a: A) => ReaderTaskEither<R2, E2, _>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, A>
  <A, R2, E2, _>(
    f: (a: A) => ReaderTaskEither<R2, E2, _>,
  ): <R1, E1>(self: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E2 | E1, A>
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
 * import * as E from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 * import * as RTE from '@fp-tx/core/ReaderTaskEither'
 *
 * const checkString = (value: string) =>
 *   pipe(
 *     RTE.ask<number>(),
 *     RTE.tapEither(minLength => (value.length > minLength ? E.right('ok') : E.left('error'))),
 *   )
 *
 * async function test() {
 *   assert.deepStrictEqual(await checkString('')(2)(), E.left('error'))
 *   assert.deepStrictEqual(await checkString('fp-ts')(2)(), E.right(2))
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const tapEither: {
  <A, E2, _>(f: (a: A) => Either<E2, _>): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, A>
  <R, E1, A, E2, _>(self: ReaderTaskEither<R, E1, A>, f: (a: A) => Either<E2, _>): ReaderTaskEither<R, E1 | E2, A>
} = /*#__PURE__*/ dual(2, tapEither_(FromEither, Chain))

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
 * import * as RTE from '@fp-tx/core/ReaderTaskEither'
 * import * as E from '@fp-tx/core/Either'
 * import * as Console from '@fp-tx/core/Console'
 *
 * // Will produce `Hello, fp-ts` to the stdout
 * const effect = RTE.tapIO(RTE.ask<string>(), value => Console.log(`Hello, ${value}`))
 *
 * async function test() {
 *   assert.deepStrictEqual(await effect('fp-ts')(), E.of('fp-ts'))
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const tapIO: {
  <A, _>(f: (a: A) => IO<_>): <R, E>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
  <R, E, A, _>(self: ReaderTaskEither<R, E, A>, f: (a: A) => IO<_>): ReaderTaskEither<R, E, A>
} = /*#__PURE__*/ dual(2, tapIO_(FromIO, Chain))

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
 * import * as RTE from '@fp-tx/core/ReaderTaskEither'
 * import * as E from '@fp-tx/core/Either'
 * import * as T from '@fp-tx/core/Task'
 *
 * const effect = RTE.tapTask(RTE.ask<number>(), value => T.of(value + 1))
 *
 * async function test() {
 *   assert.deepStrictEqual(await effect(1)(), E.of(1))
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const tapTask: {
  <A, _>(f: (a: A) => Task<_>): <R, E>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
  <R, E, A, _>(self: ReaderTaskEither<R, E, A>, f: (a: A) => Task<_>): ReaderTaskEither<R, E, A>
} = /*#__PURE__*/ dual(2, tapTask_(FromTask, Chain))

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
  <A, R2, _>(f: (a: A) => Reader<R2, _>): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, A>
  <R1, E, A, R2, _>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => Reader<R2, _>): ReaderTaskEither<R1 & R2, E, A>
} = /*#__PURE__*/ dual(2, tapReader_(FromReader, Chain))

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
export const tapReaderEither: {
  <A, R2, E2, _>(
    f: (a: A) => ReaderEither<R2, E2, _>,
  ): <R1, E1>(self: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A>
  <R1, E1, A, R2, E2, _>(
    self: ReaderTaskEither<R1, E1, A>,
    f: (a: A) => ReaderEither<R2, E2, _>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, A>
} = /*#__PURE__*/ dual(
  2,
  <R1, E1, A, R2, E2, _>(
    self: ReaderTaskEither<R1, E1, A>,
    f: (a: A) => ReaderEither<R2, E2, _>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, A> => tap(self, fromReaderEitherK(f)),
)

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
export const tapTaskEither: {
  <A, E2, _>(
    f: (a: A) => TaskEither<E2, _>,
  ): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, A>
  <R, E1, A, E2, _>(self: ReaderTaskEither<R, E1, A>, f: (a: A) => TaskEither<E2, _>): ReaderTaskEither<R, E1 | E2, A>
} = /*#__PURE__*/ dual(
  2,
  <R, E1, A, E2, _>(
    self: ReaderTaskEither<R, E1, A>,
    f: (a: A) => TaskEither<E2, _>,
  ): ReaderTaskEither<R, E1 | E2, A> => tap(self, fromTaskEitherK(f)),
)

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
export const tapReaderTask: {
  <A, R2, _>(
    f: (a: A) => ReaderTask<R2, _>,
  ): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, A>
  <R1, E, A, R2, _>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => ReaderTask<R2, _>): ReaderTaskEither<R1 & R2, E, A>
} = /*#__PURE__*/ dual(
  2,
  <R1, E, A, R2, _>(
    self: ReaderTaskEither<R1, E, A>,
    f: (a: A) => ReaderTask<R2, _>,
  ): ReaderTaskEither<R1 & R2, E, A> => tap(self, fromReaderTaskK(f)),
)

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
export const tapReaderIO: {
  <A, R2, _>(f: (a: A) => ReaderIO<R2, _>): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, A>
  <R1, E, A, R2, _>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => ReaderIO<R2, _>): ReaderTaskEither<R1 & R2, E, A>
} = /*#__PURE__*/ dual(
  2,
  <R1, E, A, R2, _>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => ReaderIO<R2, _>): ReaderTaskEither<R1 & R2, E, A> =>
    tap(self, fromReaderIOK(f)),
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Bifunctor: Bifunctor3<URI> = {
  URI,
  bimap: mapBoth,
  mapLeft: mapError,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Alt: Alt3<URI> = {
  URI,
  map: _map,
  alt: _alt,
}

/**
 * Reads the current context.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const ask: <R, E = never>() => ReaderTaskEither<R, E, R> = /*#__PURE__*/ ask_(FromReader)

/**
 * Projects a value from the global context in a `ReaderEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const asks: <R, A, E = never>(f: (r: R) => A) => ReaderTaskEither<R, E, A> = /*#__PURE__*/ asks_(FromReader)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromReaderK: <A extends ReadonlyArray<unknown>, R, B>(
  f: (...a: A) => Reader<R, B>,
) => <E = never>(...a: A) => ReaderTaskEither<R, E, B> = /*#__PURE__*/ fromReaderK_(FromReader)

/**
 * Alias of `tapReader`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstReaderK: <A, R, B>(
  f: (a: A) => R.Reader<R, B>,
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> = tapReader

/**
 * Alias of `tapReader`.
 *
 * Less strict version of [`chainFirstReaderK`](#chainfirstreaderk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstReaderKW: <A, R1, B>(
  f: (a: A) => R.Reader<R1, B>,
) => <R2, E>(ma: ReaderTaskEither<R2, E, A>) => ReaderTaskEither<R1 & R2, E, A> = tapReader

/**
 * Alias of `tapReaderEither`.
 *
 * Less strict version of [`chainFirstReaderEitherK`](#chainfirstreadereitherk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstReaderEitherKW: <R2, E2, A, B>(
  f: (a: A) => ReaderEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A> = tapReaderEither

/**
 * Alias of `tapReaderEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstReaderEitherK: <R, E, A, B>(
  f: (a: A) => ReaderEither<R, E, B>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> = tapReaderEither

/**
 * Alias of `tapTaskEither`.
 *
 * Less strict version of [`chainFirstTaskEitherK`](#chainfirsttaskeitherk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstTaskEitherKW: <E2, A, B>(
  f: (a: A) => TaskEither<E2, B>,
) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, A> = tapTaskEither

/**
 * Alias of `tapTaskEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstTaskEitherK: <E, A, B>(
  f: (a: A) => TaskEither<E, B>,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> = tapTaskEither

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromReaderTaskK =
  <A extends ReadonlyArray<unknown>, R, B>(
    f: (...a: A) => ReaderTask<R, B>,
  ): (<E = never>(...a: A) => ReaderTaskEither<R, E, B>) =>
  (...a) =>
    rightReaderTask(f(...a))

/**
 * Alias of `tapReaderTask`.
 *
 * Less strict version of [`chainFirstReaderTaskK`](#chainfirstreadertaskk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstReaderTaskKW: <A, R2, B>(
  f: (a: A) => RT.ReaderTask<R2, B>,
) => <R1, E>(ma: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, A> = tapReaderTask

/**
 * Alias of `tapReaderTask`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstReaderTaskK: <A, R, B>(
  f: (a: A) => RT.ReaderTask<R, B>,
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> = tapReaderTask

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromReaderIOK =
  <A extends ReadonlyArray<unknown>, R, B>(
    f: (...a: A) => ReaderIO<R, B>,
  ): (<E = never>(...a: A) => ReaderTaskEither<R, E, B>) =>
  (...a) =>
    rightReaderIO(f(...a))

/**
 * Alias of `tapReaderIO`.
 *
 * Less strict version of [`chainFirstReaderIOK`](#chainfirstreaderiok).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstReaderIOKW: <A, R2, B>(
  f: (a: A) => ReaderIO<R2, B>,
) => <R1, E>(ma: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, A> = tapReaderIO

/**
 * Alias of `tapReaderIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstReaderIOK: <A, R, B>(
  f: (a: A) => ReaderIO<R, B>,
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> = tapReaderIO

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromOption: <E>(onNone: LazyArg<E>) => <A, R = unknown>(fa: Option<A>) => ReaderTaskEither<R, E, A> =
  /*#__PURE__*/ fromOption_(FromEither)

/**
 * Use `liftOption`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const fromOptionK: <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Option<B>,
) => <R = unknown>(...a: A) => ReaderTaskEither<R, E, B> = /*#__PURE__*/ fromOptionK_(FromEither)

/**
 * Use `flatMapOption`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainOptionK: <E>(
  onNone: LazyArg<E>,
) => <A, B>(f: (a: A) => Option<B>) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> =
  /*#__PURE__*/ chainOptionK_(FromEither, Chain)

/**
 * Use `flatMapOption`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainOptionKW: <E2>(
  onNone: LazyArg<E2>,
) => <A, B>(f: (a: A) => Option<B>) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B> =
  /*#__PURE__*/ chainOptionK as any

/** @internal @packageDocumentation */
interface ReaderTaskEitherTypeLambda extends _.TypeLambda {
  readonly type: ReaderTaskEither<this['In'], this['Out1'], this['Target']>
}

/** @internal */
const _FromEither: _.FromEither<ReaderTaskEitherTypeLambda> = {
  fromEither: FromEither.fromEither,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const liftNullable: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => B | null | undefined,
  onNullable: (...a: A) => E,
) => <R>(...a: A) => ReaderTaskEither<R, E, NonNullable<B>> = /*#__PURE__*/ _.liftNullable(_FromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const liftOption: <A extends ReadonlyArray<unknown>, B, E>(
  f: (...a: A) => Option<B>,
  onNone: (...a: A) => E,
) => <R>(...a: A) => ReaderTaskEither<R, E, B> = /*#__PURE__*/ _.liftOption(_FromEither)

/** @internal */
const _FlatMap: _.FlatMap<ReaderTaskEitherTypeLambda> = {
  flatMap,
}

/** @internal */
const _FromIO: _.FromIO<ReaderTaskEitherTypeLambda> = {
  fromIO,
}

/** @internal */
const _FromTask: _.FromTask<ReaderTaskEitherTypeLambda> = {
  fromTask,
}

/** @internal */
const _FromReader: _.FromReader<ReaderTaskEitherTypeLambda> = {
  fromReader,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapNullable: {
  <A, B, E2>(
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E2 | E1, NonNullable<B>>
  <R, E1, A, B, E2>(
    self: ReaderTaskEither<R, E1, A>,
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): ReaderTaskEither<R, E1 | E2, NonNullable<B>>
} = /*#__PURE__*/ _.flatMapNullable(_FromEither, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapOption: {
  <A, B, E2>(
    f: (a: A) => Option<B>,
    onNone: (a: A) => E2,
  ): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E2 | E1, B>
  <R, E1, A, B, E2>(
    self: ReaderTaskEither<R, E1, A>,
    f: (a: A) => Option<B>,
    onNone: (a: A) => E2,
  ): ReaderTaskEither<R, E1 | E2, B>
} = /*#__PURE__*/ _.flatMapOption(_FromEither, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapEither: {
  <A, E2, B>(f: (a: A) => E.Either<E2, B>): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
  <R, E1, A, E2, B>(self: ReaderTaskEither<R, E1, A>, f: (a: A) => E.Either<E2, B>): ReaderTaskEither<R, E1 | E2, B>
} = /*#__PURE__*/ _.flatMapEither(_FromEither, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapTaskEither: {
  <A, E2, B>(
    f: (a: A) => TaskEither<E2, B>,
  ): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
  <R, E1, A, E2, B>(self: ReaderTaskEither<R, E1, A>, f: (a: A) => TaskEither<E2, B>): ReaderTaskEither<R, E1 | E2, B>
} = /*#__PURE__*/ dual(
  2,
  <R, E1, A, E2, B>(
    self: ReaderTaskEither<R, E1, A>,
    f: (a: A) => TaskEither<E2, B>,
  ): ReaderTaskEither<R, E1 | E2, B> => flatMap(self, fromTaskEitherK(f)),
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapReaderTask: {
  <A, R2, B>(
    f: (a: A) => ReaderTask<R2, B>,
  ): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, B>
  <R1, E, A, R2, B>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => ReaderTask<R2, B>): ReaderTaskEither<R1 & R2, E, B>
} = /*#__PURE__*/ dual(
  2,
  <R1, E, A, R2, B>(
    self: ReaderTaskEither<R1, E, A>,
    f: (a: A) => ReaderTask<R2, B>,
  ): ReaderTaskEither<R1 & R2, E, B> => flatMap(self, fromReaderTaskK(f)),
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): <R, E>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
  <R, E, A, B>(self: ReaderTaskEither<R, E, A>, f: (a: A) => IO<B>): ReaderTaskEither<R, E, B>
} = /*#__PURE__*/ _.flatMapIO(_FromIO, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapTask: {
  <A, B>(f: (a: A) => Task<B>): <R, E>(self: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
  <R, E, A, B>(self: ReaderTaskEither<R, E, A>, f: (a: A) => Task<B>): ReaderTaskEither<R, E, B>
} = /*#__PURE__*/ _.flatMapTask(_FromTask, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapReader: {
  <A, R2, B>(f: (a: A) => Reader<R2, B>): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, B>
  <R1, E, A, R2, B>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => Reader<R2, B>): ReaderTaskEither<R1 & R2, E, B>
} = /*#__PURE__*/ _.flatMapReader(_FromReader, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapReaderIO: {
  <A, R2, B>(f: (a: A) => ReaderIO<R2, B>): <R1, E>(self: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, B>
  <R1, E, A, R2, B>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => ReaderIO<R2, B>): ReaderTaskEither<R1 & R2, E, B>
} = /*#__PURE__*/ dual(
  2,
  <R1, E, A, R2, B>(self: ReaderTaskEither<R1, E, A>, f: (a: A) => ReaderIO<R2, B>): ReaderTaskEither<R1 & R2, E, B> =>
    flatMap(self, fromReaderIOK(f)),
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapIOEither: {
  <A, E2, B>(f: (a: A) => IOEither<E2, B>): <R, E1>(self: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
  <R, E1, A, E2, B>(self: ReaderTaskEither<R, E1, A>, f: (a: A) => IOEither<E2, B>): ReaderTaskEither<R, E1 | E2, B>
} = /*#__PURE__*/ dual(
  2,
  <R, E1, A, E2, B>(self: ReaderTaskEither<R, E1, A>, f: (a: A) => IOEither<E2, B>): ReaderTaskEither<R, E1 | E2, B> =>
    flatMap(self, fromIOEitherK(f)),
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapReaderEither: {
  <A, R2, E2, B>(
    f: (a: A) => ReaderEither<R2, E2, B>,
  ): <R1, E1>(self: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, B>
  <R1, E1, A, R2, E2, B>(
    self: ReaderTaskEither<R1, E1, A>,
    f: (a: A) => ReaderEither<R2, E2, B>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, B>
} = /*#__PURE__*/ dual(
  2,
  <R1, E1, A, R2, E2, B>(
    self: ReaderTaskEither<R1, E1, A>,
    f: (a: A) => ReaderEither<R2, E2, B>,
  ): ReaderTaskEither<R1 & R2, E1 | E2, B> => flatMap(self, fromReaderEitherK(f)),
)

/**
 * Alias of `flatMapEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainEitherK: <E, A, B>(
  f: (a: A) => E.Either<E, B>,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> = flatMapEither

/**
 * Alias of `flatMapEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainEitherKW: <E2, A, B>(
  f: (a: A) => Either<E2, B>,
) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B> = flatMapEither

/**
 * Alias of `tapEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstEitherK: <A, E, B>(
  f: (a: A) => E.Either<E, B>,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> = tapEither

/**
 * Alias of `tapEither`.
 *
 * Less strict version of [`chainFirstEitherK`](#chainfirsteitherk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstEitherKW: <A, E2, B>(
  f: (a: A) => Either<E2, B>,
) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, A> = tapEither

/**
 * Alias of `flatMapTaskEither`.
 *
 * Less strict version of [`chainTaskEitherK`](#chaintaskeitherk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainTaskEitherKW: <E2, A, B>(
  f: (a: A) => TaskEither<E2, B>,
) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B> = flatMapTaskEither

/**
 * Alias of `flatMapTaskEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainTaskEitherK: <E, A, B>(
  f: (a: A) => TaskEither<E, B>,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> = flatMapTaskEither

/**
 * Alias of `flatMapReaderTask`.
 *
 * Less strict version of [`chainReaderTaskK`](#chainreadertaskk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainReaderTaskKW: <A, R2, B>(
  f: (a: A) => RT.ReaderTask<R2, B>,
) => <R1, E>(ma: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, B> = flatMapReaderTask

/**
 * Alias of `flatMapReaderTask`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainReaderTaskK: <A, R, B>(
  f: (a: A) => RT.ReaderTask<R, B>,
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> = flatMapReaderTask

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromPredicate: {
  <E, A, B extends A>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E,
  ): <R = unknown>(a: A) => ReaderTaskEither<R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <R = unknown, B extends A = A>(b: B) => ReaderTaskEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R = unknown>(a: A) => ReaderTaskEither<R, E, A>
} = /*#__PURE__*/ fromPredicate_(FromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const filterOrElse: {
  <E, A, B extends A>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E,
  ): <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B>
  <E, A>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E,
  ): <R, B extends A>(mb: ReaderTaskEither<R, E, B>) => ReaderTaskEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A>
} = /*#__PURE__*/ filterOrElse_(FromEither, Chain)

/**
 * Less strict version of [`filterOrElse`](#filterorelse).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const filterOrElseW: {
  <A, B extends A, E2>(
    refinement: Refinement<A, B>,
    onFalse: (a: A) => E2,
  ): <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <R, E1, B extends A>(mb: ReaderTaskEither<R, E1, B>) => ReaderTaskEither<R, E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, A>
} = filterOrElse

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => E.Either<E, B>,
) => <R = unknown>(...a: A) => ReaderTaskEither<R, E, B> = /*#__PURE__*/ fromEitherK_(FromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IO<B>,
) => <R = unknown, E = never>(...a: A) => ReaderTaskEither<R, E, B> = /*#__PURE__*/ fromIOK_(FromIO)

/**
 * Alias of `flatMapIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainIOK: <A, B>(
  f: (a: A) => IO<B>,
) => <R, E>(first: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> = flatMapIO

/**
 * Alias of `tapIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstIOK: <A, B>(
  f: (a: A) => IO<B>,
) => <R, E>(first: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> = tapIO

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromTaskK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => T.Task<B>,
) => <R = unknown, E = never>(...a: A) => ReaderTaskEither<R, E, B> = /*#__PURE__*/ fromTaskK_(FromTask)

/**
 * Alias of `flatMapTask`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainTaskK: <A, B>(
  f: (a: A) => T.Task<B>,
) => <R, E>(first: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> = flatMapTask

/**
 * Alias of `tapTask`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstTaskK: <A, B>(
  f: (a: A) => T.Task<B>,
) => <R, E>(first: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> = tapTask

/**
 * Alias of `flatMapReader`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainReaderK: <A, R, B>(
  f: (a: A) => Reader<R, B>,
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> = flatMapReader

/**
 * Alias of `flatMapReader`.
 *
 * Less strict version of [`chainReaderK`](#chainreaderk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainReaderKW: <A, R1, B>(
  f: (a: A) => R.Reader<R1, B>,
) => <R2, E>(ma: ReaderTaskEither<R2, E, A>) => ReaderTaskEither<R1 & R2, E, B> = flatMapReader

/**
 * Alias of `flatMapReaderIO`.
 *
 * Less strict version of [`chainReaderIOK`](#chainreaderiok).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainReaderIOKW: <A, R2, B>(
  f: (a: A) => ReaderIO<R2, B>,
) => <R1, E>(ma: ReaderTaskEither<R1, E, A>) => ReaderTaskEither<R1 & R2, E, B> = flatMapReaderIO

/**
 * Alias of `flatMapReaderIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainReaderIOK: <A, R, B>(
  f: (a: A) => ReaderIO<R, B>,
) => <E>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> = flatMapReaderIO

/**
 * Alias of `flatMapIOEither`.
 *
 * Less strict version of [`chainIOEitherK`](#chainioeitherk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainIOEitherKW: <E2, A, B>(
  f: (a: A) => IOEither<E2, B>,
) => <R, E1>(ma: ReaderTaskEither<R, E1, A>) => ReaderTaskEither<R, E1 | E2, B> = flatMapIOEither

/**
 * Alias of `flatMapIOEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainIOEitherK: <E, A, B>(
  f: (a: A) => IOEither<E, B>,
) => <R>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> = flatMapIOEither

/**
 * Alias of `flatMapReaderEither`.
 *
 * Less strict version of [`chainReaderEitherK`](#chainreadereitherk).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainReaderEitherKW: <R2, E2, A, B>(
  f: (a: A) => ReaderEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, B> = flatMapReaderEither

/**
 * Alias of `flatMapReaderEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainReaderEitherK: <R, E, A, B>(
  f: (a: A) => ReaderEither<R, E, B>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> = flatMapReaderEither

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Make sure that a resource is cleaned up in the event of an exception (_). The release action is called regardless of
 * whether the body action throws (_) or returns.
 *
 * (*) i.e. returns a `Left`
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function bracket<R, E, A, B>(
  acquire: ReaderTaskEither<R, E, A>,
  use: (a: A) => ReaderTaskEither<R, E, B>,
  release: (a: A, e: Either<E, B>) => ReaderTaskEither<R, E, void>,
): ReaderTaskEither<R, E, B> {
  return bracketW(acquire, use, release)
}

/**
 * Less strict version of [`bracket`](#bracket).
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function bracketW<R1, E1, A, R2, E2, B, R3, E3>(
  acquire: ReaderTaskEither<R1, E1, A>,
  use: (a: A) => ReaderTaskEither<R2, E2, B>,
  release: (a: A, e: Either<E2, B>) => ReaderTaskEither<R3, E3, void>,
): ReaderTaskEither<R1 & R2 & R3, E1 | E2 | E3, B> {
  return r =>
    TE.bracketW(
      acquire(r),
      a => use(a)(r),
      (a, e) => release(a, e)(r),
    )
}

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
export const Do: ReaderTaskEither<unknown, never, {}> = /*#__PURE__*/ of(_.emptyRecord)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const bindTo = /*#__PURE__*/ bindTo_(Functor)

const let_ = /*#__PURE__*/ let__(Functor)

export {
  /**
   * @remarks
   * Added in 1.0.0
   * @remarks
   * Category: Do notation
   * @public
   */
  let_ as let,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const bind = /*#__PURE__*/ chainable.bind(Chain)

/**
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const bindW: <N extends string, A, R2, E2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => ReaderTaskEither<R2, E2, B>,
) => <R1, E1>(
  fa: ReaderTaskEither<R1, E1, A>,
) => ReaderTaskEither<R1 & R2, E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> = bind as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const apS = /*#__PURE__*/ apS_(ApplyPar)

/**
 * Less strict version of [`apS`](#aps).
 *
 * The `W` suffix (short for **W**idening) means that the environment types and the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const apSW: <A, N extends string, R2, E2, B>(
  name: Exclude<N, keyof A>,
  fb: ReaderTaskEither<R2, E2, B>,
) => <R1, E1>(
  fa: ReaderTaskEither<R1, E1, A>,
) => ReaderTaskEither<R1 & R2, E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> = apS as any

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ApT: ReaderTaskEither<unknown, never, readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

interface ReaderTaskEitherIterable<R, E, A> {
  readonly value: ReaderTaskEither<R, E, A>
  [Symbol.iterator]: () => Generator<ReaderTaskEitherIterable<R, E, A>, A, any>
}

const do_: <MA extends ReaderTaskEitherIterable<any, any, any>, A>(
  yieldFunction: (
    unwrap: <R, E, A>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEitherIterable<R, E, A>,
  ) => Generator<MA, A>,
) => ReaderTaskEither<
  _.UnionToIntersection<MA extends ReaderTaskEitherIterable<infer R, any, any> ? R : never>,
  MA extends ReaderTaskEitherIterable<any, infer E, any> ? E : never,
  A
> = ChnRec.do(Pointed, ChainRec) as any

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
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndex = <A, R, E, B>(
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
): ((as: ReadonlyNonEmptyArray<A>) => ReaderTaskEither<R, E, ReadonlyNonEmptyArray<B>>) =>
  flow(R.traverseReadonlyNonEmptyArrayWithIndex(f), R.map(TE.traverseReadonlyNonEmptyArrayWithIndex(SK)))

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseReadonlyArrayWithIndex = <A, R, E, B>(
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
): ((as: ReadonlyArray<A>) => ReaderTaskEither<R, E, ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndexSeq = <A, R, E, B>(
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
): ((as: ReadonlyNonEmptyArray<A>) => ReaderTaskEither<R, E, ReadonlyNonEmptyArray<B>>) =>
  flow(R.traverseReadonlyNonEmptyArrayWithIndex(f), R.map(TE.traverseReadonlyNonEmptyArrayWithIndexSeq(SK)))

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseReadonlyArrayWithIndexSeq = <A, R, E, B>(
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
): ((as: ReadonlyArray<A>) => ReaderTaskEither<R, E, ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndexSeq(f)
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
export const traverseArrayWithIndex: <R, E, A, B>(
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
) => (as: ReadonlyArray<A>) => ReaderTaskEither<R, E, ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseArray = <R, E, A, B>(
  f: (a: A) => ReaderTaskEither<R, E, B>,
): ((as: ReadonlyArray<A>) => ReaderTaskEither<R, E, ReadonlyArray<B>>) =>
  traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const sequenceArray: <R, E, A>(
  arr: ReadonlyArray<ReaderTaskEither<R, E, A>>,
) => ReaderTaskEither<R, E, ReadonlyArray<A>> = /*#__PURE__*/ traverseArray(identity)

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseSeqArrayWithIndex: <R, E, A, B>(
  f: (index: number, a: A) => ReaderTaskEither<R, E, B>,
) => (as: ReadonlyArray<A>) => ReaderTaskEither<R, E, ReadonlyArray<B>> = traverseReadonlyArrayWithIndexSeq

/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseSeqArray = <R, E, A, B>(
  f: (a: A) => ReaderTaskEither<R, E, B>,
): ((as: ReadonlyArray<A>) => ReaderTaskEither<R, E, ReadonlyArray<B>>) =>
  traverseReadonlyArrayWithIndexSeq((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const sequenceSeqArray: <R, E, A>(
  arr: ReadonlyArray<ReaderTaskEither<R, E, A>>,
) => ReaderTaskEither<R, E, ReadonlyArray<A>> = /*#__PURE__*/ traverseSeqArray(identity)

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
export const chain: <R, E, A, B>(
  f: (a: A) => ReaderTaskEither<R, E, B>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, B> = flatMap

/**
 * Alias of `flatMap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainW: <R2, E2, A, B>(
  f: (a: A) => ReaderTaskEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, B> = flatMap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirst: <R, E, A, B>(
  f: (a: A) => ReaderTaskEither<R, E, B>,
) => (ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> = tap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstW: <R2, E2, A, B>(
  f: (a: A) => ReaderTaskEither<R2, E2, B>,
) => <R1, E1>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A> = tap

/**
 * Alias of `tapError`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const orElseFirst: <E, R, B>(
  onLeft: (e: E) => ReaderTaskEither<R, E, B>,
) => <A>(ma: ReaderTaskEither<R, E, A>) => ReaderTaskEither<R, E, A> = tapError

/**
 * Alias of `tapError`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const orElseFirstW: <E1, R2, E2, B>(
  onLeft: (e: E1) => ReaderTaskEither<R2, E2, B>,
) => <R1, A>(ma: ReaderTaskEither<R1, E1, A>) => ReaderTaskEither<R1 & R2, E1 | E2, A> = tapError

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `RTE.Functor` instead of `RTE.readerTaskEither` (where `RTE` is from `import RTE from
 * 'fp-ts/ReaderTaskEither'`)
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const readerTaskEither: Monad3<URI> & Bifunctor3<URI> & Alt3<URI> & MonadTask3<URI> & MonadThrow3<URI> = {
  URI,
  map: _map,
  of,
  ap: _apPar,
  chain: flatMap,
  alt: _alt,
  bimap: mapBoth,
  mapLeft: mapError,
  fromIO,
  fromTask,
  throwError,
}

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `RTE.Functor` instead of `RTE.readerTaskEitherSeq` (where `RTE` is from `import RTE from
 * 'fp-ts/ReaderTaskEither'`)
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */

export const readerTaskEitherSeq: typeof readerTaskEither = {
  URI,
  map: _map,
  of,
  ap: _apSeq,
  chain: flatMap,
  alt: _alt,
  bimap: mapBoth,
  mapLeft: mapError,
  fromIO,
  fromTask,
  throwError,
}

/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values are concatenated
 * using the provided `Semigroup`
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const getApplySemigroup: <R, E, A>(S: Semigroup<A>) => Semigroup<ReaderTaskEither<R, E, A>> =
  /*#__PURE__*/ getApplySemigroup_(ApplySeq)

/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const getApplyMonoid: <R, E, A>(M: Monoid<A>) => Monoid<ReaderTaskEither<R, E, A>> =
  /*#__PURE__*/ getApplicativeMonoid(ApplicativeSeq)

/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const getSemigroup = <R, E, A>(S: Semigroup<A>): Semigroup<ReaderTaskEither<R, E, A>> =>
  getApplySemigroup_(RT.ApplySeq)(E.getSemigroup(S))

/**
 * Use [`getApplicativeReaderTaskValidation`](#getapplicativereadertaskvalidation) and
 * [`getAltReaderTaskValidation`](#getaltreadertaskvalidation) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @deprecated
 * @public
 */
export function getReaderTaskValidation<E>(
  SE: Semigroup<E>,
): Monad3C<URI, E> & Bifunctor3<URI> & Alt3C<URI, E> & MonadTask3C<URI, E> & MonadThrow3C<URI, E> {
  const applicativeReaderTaskValidation = getApplicativeReaderTaskValidation(T.ApplicativePar, SE)
  const altReaderTaskValidation = getAltReaderTaskValidation(SE)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    of,
    chain: flatMap,
    bimap: mapBoth,
    mapLeft: mapError,
    ap: applicativeReaderTaskValidation.ap,
    alt: altReaderTaskValidation.alt,
    fromIO,
    fromTask,
    throwError,
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
/* istanbul ignore next */
export function run<R, E, A>(ma: ReaderTaskEither<R, E, A>, r: R): Promise<Either<E, A>> {
  return ma(r)()
}
