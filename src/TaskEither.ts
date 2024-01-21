/**
 * `TaskEither<E, A>` represents an asynchronous computation that either yields a value of type `A` or fails yielding an
 * error of type `E`. If you want to represent an asynchronous computation that never fails, please see `Task`.
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Alt2, type Alt2C } from './Alt'
import { type Applicative2, type Applicative2C, getApplicativeMonoid } from './Applicative'
import {
  ap as ap_,
  apFirst as apFirst_,
  type Apply1,
  type Apply2,
  apS as apS_,
  apSecond as apSecond_,
  getApplySemigroup as getApplySemigroup_,
} from './Apply'
import { type Bifunctor2 } from './Bifunctor'
import * as chainable from './Chain'
import * as ChnRec from './ChainRec'
import { type ChainRec2 } from './ChainRec'
import { compact as compact_, type Compactable2C, separate as separate_ } from './Compactable'
import * as E from './Either'
import { type Either } from './Either'
import * as ET from './EitherT'
import {
  filter as filter_,
  type Filterable2C,
  filterMap as filterMap_,
  partition as partition_,
  partitionMap as partitionMap_,
} from './Filterable'
import {
  chainOptionK as chainOptionK_,
  filterOrElse as filterOrElse_,
  type FromEither2,
  fromEitherK as fromEitherK_,
  fromOption as fromOption_,
  fromOptionK as fromOptionK_,
  fromPredicate as fromPredicate_,
  tapEither as tapEither_,
} from './FromEither'
import { type FromIO2, fromIOK as fromIOK_, tapIO as tapIO_ } from './FromIO'
import { type FromTask2, fromTaskK as fromTaskK_, tapTask as tapTask_ } from './FromTask'
import { dual, flow, identity, type LazyArg, pipe, SK } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor2, let as let__ } from './Functor'
import * as _ from './internal'
import { type IO } from './IO'
import { type IOEither } from './IOEither'
import { type Monad2, type Monad2C } from './Monad'
import { type MonadIO2 } from './MonadIO'
import { type MonadTask2, type MonadTask2C } from './MonadTask'
import { type MonadThrow2, type MonadThrow2C } from './MonadThrow'
import { type Monoid } from './Monoid'
import { type NonEmptyArray } from './NonEmptyArray'
import { type Option } from './Option'
import { type Pointed2 } from './Pointed'
import { type Predicate } from './Predicate'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import * as T from './Task'
import { type Task } from './Task'
import { type TaskOption } from './TaskOption'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface TaskEither<E, A> extends Task<Either<E, A>> {}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const left: <E = never, A = never>(e: E) => TaskEither<E, A> = /*#__PURE__*/ ET.left(T.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const right: <E = never, A = never>(a: A) => TaskEither<E, A> = /*#__PURE__*/ ET.right(T.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const rightTask: <E = never, A = never>(ma: Task<A>) => TaskEither<E, A> = /*#__PURE__*/ ET.rightF(T.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const leftTask: <E = never, A = never>(me: Task<E>) => TaskEither<E, A> = /*#__PURE__*/ ET.leftF(T.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const rightIO: <E = never, A = never>(ma: IO<A>) => TaskEither<E, A> = /*#__PURE__*/ flow(T.fromIO, rightTask)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const leftIO: <E = never, A = never>(me: IO<E>) => TaskEither<E, A> = /*#__PURE__*/ flow(T.fromIO, leftTask)

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
export const fromIO: <A, E = never>(fa: IO<A>) => TaskEither<E, A> = rightIO

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromTask: <A, E = never>(fa: Task<A>) => TaskEither<E, A> = rightTask

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromEither: <E, A>(fa: Either<E, A>) => TaskEither<E, A> = T.of

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromIOEither: <E, A>(fa: IOEither<E, A>) => TaskEither<E, A> = T.fromIO

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromTaskOption: <E>(onNone: LazyArg<E>) => <A>(fa: TaskOption<A>) => TaskEither<E, A> = onNone =>
  T.map(E.fromOption(onNone))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const match: <E, B, A>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: TaskEither<E, A>) => Task<B> =
  /*#__PURE__*/ ET.match(T.Functor)

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
export const matchW: <E, B, A, C>(onLeft: (e: E) => B, onRight: (a: A) => C) => (ma: TaskEither<E, A>) => Task<B | C> =
  match as any

/**
 * The `E` suffix (short for **E**ffect) means that the handlers return an effect (`Task`).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const matchE: <E, A, B>(
  onLeft: (e: E) => Task<B>,
  onRight: (a: A) => Task<B>,
) => (ma: TaskEither<E, A>) => Task<B> = /*#__PURE__*/ ET.matchE(T.Monad)

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
export const matchEW: <E, B, A, C>(
  onLeft: (e: E) => Task<B>,
  onRight: (a: A) => Task<C>,
) => (ma: TaskEither<E, A>) => Task<B | C> = matchE as any

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
export const getOrElse: <E, A>(onLeft: (e: E) => Task<A>) => (ma: TaskEither<E, A>) => Task<A> =
  /*#__PURE__*/ ET.getOrElse(T.Monad)

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
export const getOrElseW: <E, B>(onLeft: (e: E) => Task<B>) => <A>(ma: TaskEither<E, A>) => Task<A | B> =
  getOrElse as any

/**
 * Transforms a `Promise` that may reject to a `Promise` that never rejects and returns an `Either` instead.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Interop
 * @example
 *
 * ```typescript
 * import { left, right } from '@fp-tx/core/Either'
 * import { tryCatch } from '@fp-tx/core/TaskEither'
 *
 * tryCatch(() => Promise.resolve(1), String)().then(result => {
 *   assert.deepStrictEqual(result, right(1))
 * })
 * tryCatch(() => Promise.reject('error'), String)().then(result => {
 *   assert.deepStrictEqual(result, left('error'))
 * })
 * ```
 *
 * @public
 */
export const tryCatch =
  <E, A>(f: LazyArg<Promise<A>>, onRejected: (reason: unknown) => E): TaskEither<E, A> =>
  async () => {
    try {
      return await f().then(_.right)
    } catch (reason) {
      return _.left(onRejected(reason))
    }
  }

/**
 * Converts a function returning a `Promise` to one returning a `TaskEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Interop
 * @public
 */
export const tryCatchK =
  <E, A extends ReadonlyArray<unknown>, B>(
    f: (...a: A) => Promise<B>,
    onRejected: (reason: unknown) => E,
  ): ((...a: A) => TaskEither<E, B>) =>
  (...a) =>
    tryCatch(() => f(...a), onRejected)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const toUnion: <E, A>(fa: TaskEither<E, A>) => Task<E | A> = /*#__PURE__*/ ET.toUnion(T.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromNullable: <E>(e: E) => <A>(a: A) => TaskEither<E, NonNullable<A>> = /*#__PURE__*/ ET.fromNullable(
  T.Pointed,
)

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
) => (...a: A) => TaskEither<E, NonNullable<B>> = /*#__PURE__*/ ET.fromNullableK(T.Pointed)

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
) => <A, B>(f: (a: A) => B | null | undefined) => (ma: TaskEither<E, A>) => TaskEither<E, NonNullable<B>> =
  /*#__PURE__*/ ET.chainNullableK(T.Monad)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Returns `ma` if is a `Right` or the value returned by `onLeft` otherwise.
 *
 * See also [alt](#alt).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import * as E from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 * import * as TE from '@fp-tx/core/TaskEither'
 *
 * async function test() {
 *   const errorHandler = TE.orElse((error: string) => TE.right(`recovering from ${error}...`))
 *   assert.deepStrictEqual(await pipe(TE.right('ok'), errorHandler)(), E.right('ok'))
 *   assert.deepStrictEqual(await pipe(TE.left('ko'), errorHandler)(), E.right('recovering from ko...'))
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const orElse: <E1, A, E2>(onLeft: (e: E1) => TaskEither<E2, A>) => (ma: TaskEither<E1, A>) => TaskEither<E2, A> =
  /*#__PURE__*/ ET.orElse(T.Monad)

/**
 * Less strict version of [`orElse`](#orelse).
 *
 * The `W` suffix (short for **W**idening) means that the return types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const orElseW: <E1, E2, B>(
  onLeft: (e: E1) => TaskEither<E2, B>,
) => <A>(ma: TaskEither<E1, A>) => TaskEither<E2, A | B> = orElse as any

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
  <E1, E2, _>(onLeft: (e: E1) => TaskEither<E2, _>): <A>(self: TaskEither<E1, A>) => TaskEither<E1 | E2, A>
  <E1, A, E2, _>(self: TaskEither<E1, A>, onLeft: (e: E1) => TaskEither<E2, _>): TaskEither<E1 | E2, A>
} = /*#__PURE__*/ dual(2, ET.tapError(T.Monad))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const orElseFirstIOK: <E, B>(
  onLeft: (e: E) => IO<B>,
) => <A>(ma: TaskEither<E, A>) => TaskEither<E, A> = onLeft => tapError(fromIOK(onLeft))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const orElseFirstTaskK: <E, B>(
  onLeft: (e: E) => Task<B>,
) => <A>(ma: TaskEither<E, A>) => TaskEither<E, A> = onLeft => tapError(fromTaskK(onLeft))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const orLeft: <E1, E2>(onLeft: (e: E1) => Task<E2>) => <A>(fa: TaskEither<E1, A>) => TaskEither<E2, A> =
  /*#__PURE__*/ ET.orLeft(T.Monad)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const swap: <E, A>(ma: TaskEither<E, A>) => TaskEither<A, E> = /*#__PURE__*/ ET.swap(T.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromTaskOptionK = <E>(
  onNone: LazyArg<E>,
): (<A extends ReadonlyArray<unknown>, B>(f: (...a: A) => TaskOption<B>) => (...a: A) => TaskEither<E, B>) => {
  const from = fromTaskOption(onNone)
  return f => flow(f, from)
}

/**
 * Use `flatMapTaskOption`.
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainTaskOptionKW =
  <E2>(onNone: LazyArg<E2>) =>
  <A, B>(f: (a: A) => TaskOption<B>) =>
  <E1>(ma: TaskEither<E1, A>): TaskEither<E1 | E2, B> =>
    flatMap(ma, fromTaskOptionK<E1 | E2>(onNone)(f))

/**
 * Use `flatMapTaskOption`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainTaskOptionK: <E>(
  onNone: LazyArg<E>,
) => <A, B>(f: (a: A) => TaskOption<B>) => (ma: TaskEither<E, A>) => TaskEither<E, B> = chainTaskOptionKW

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromIOEitherK = <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IOEither<E, B>,
): ((...a: A) => TaskEither<E, B>) => flow(f, fromIOEither)

const _map: Functor2<URI>['map'] = (fa, f) => pipe(fa, map(f))
const _apPar: Apply2<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
const _apSeq: Apply2<URI>['ap'] = (fab, fa) => flatMap(fab, f => pipe(fa, map(f)))
/* istanbul ignore next */
const _alt: Alt2<URI>['alt'] = (fa, that) => pipe(fa, alt(that))

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
export const map: <A, B>(f: (a: A) => B) => <E>(fa: TaskEither<E, A>) => TaskEither<E, B> = /*#__PURE__*/ ET.map(
  T.Functor,
)

/**
 * Returns a `TaskEither` whose failure and success channels have been mapped by the specified pair of functions, `f`
 * and `g`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import * as TaskEither from '@fp-tx/core/TaskEither'
 * import * as Either from '@fp-tx/core/Either'
 *
 * const f = (s: string) => new Error(s)
 * const g = (n: number) => n * 2
 *
 * async function test() {
 *   assert.deepStrictEqual(await TaskEither.mapBoth(TaskEither.right(1), f, g)(), Either.right(2))
 *   assert.deepStrictEqual(await TaskEither.mapBoth(TaskEither.left('err'), f, g)(), Either.left(new Error('err')))
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const mapBoth: {
  <E, G, A, B>(f: (e: E) => G, g: (a: A) => B): (self: TaskEither<E, A>) => TaskEither<G, B>
  <E, A, G, B>(self: TaskEither<E, A>, f: (e: E) => G, g: (a: A) => B): TaskEither<G, B>
} = /*#__PURE__*/ dual(3, ET.mapBoth(T.Functor))

/**
 * Alias of `mapBoth`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: TaskEither<E, A>) => TaskEither<G, B> = mapBoth

/**
 * Returns a `TaskEither` with its error channel mapped using the specified function.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import * as TaskEither from '@fp-tx/core/TaskEither'
 * import * as Either from '@fp-tx/core/Either'
 *
 * const f = (s: string) => new Error(s)
 *
 * async function test() {
 *   assert.deepStrictEqual(await TaskEither.mapError(TaskEither.right(1), f)(), Either.right(1))
 *   assert.deepStrictEqual(await TaskEither.mapError(TaskEither.left('err'), f)(), Either.left(new Error('err')))
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const mapError: {
  <E, G>(f: (e: E) => G): <A>(self: TaskEither<E, A>) => TaskEither<G, A>
  <E, A, G>(self: TaskEither<E, A>, f: (e: E) => G): TaskEither<G, A>
} = /*#__PURE__*/ dual(2, ET.mapError(T.Functor))

/**
 * Alias of `mapError`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: TaskEither<E, A>) => TaskEither<G, A> = mapError

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ap: <E, A>(fa: TaskEither<E, A>) => <B>(fab: TaskEither<E, (a: A) => B>) => TaskEither<E, B> =
  /*#__PURE__*/ ET.ap(T.ApplyPar)

/**
 * Less strict version of [`ap`](#ap).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apW: <E2, A>(
  fa: TaskEither<E2, A>,
) => <E1, B>(fab: TaskEither<E1, (a: A) => B>) => TaskEither<E1 | E2, B> = ap as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMap: {
  <A, E2, B>(f: (a: A) => TaskEither<E2, B>): <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
  <E1, A, E2, B>(ma: TaskEither<E1, A>, f: (a: A) => TaskEither<E2, B>): TaskEither<E1 | E2, B>
} = /*#__PURE__*/ dual(2, ET.flatMap(T.Monad))

/**
 * Less strict version of [`flatten`](#flatten).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flattenW: <E1, E2, A>(mma: TaskEither<E1, TaskEither<E2, A>>) => TaskEither<E1 | E2, A> =
  /*#__PURE__*/ flatMap(identity)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatten: <E, A>(mma: TaskEither<E, TaskEither<E, A>>) => TaskEither<E, A> = flattenW

/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `TaskEither` returns `fa` if is a `Right` or the value returned by `that` otherwise.
 *
 * See also [orElse](#orelse).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import * as E from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 * import * as TE from '@fp-tx/core/TaskEither'
 *
 * async function test() {
 *   assert.deepStrictEqual(
 *     await pipe(
 *       TE.right(1),
 *       TE.alt(() => TE.right(2)),
 *     )(),
 *     E.right(1),
 *   )
 *   assert.deepStrictEqual(
 *     await pipe(
 *       TE.left('a'),
 *       TE.alt(() => TE.right(2)),
 *     )(),
 *     E.right(2),
 *   )
 *   assert.deepStrictEqual(
 *     await pipe(
 *       TE.left('a'),
 *       TE.alt(() => TE.left('b')),
 *     )(),
 *     E.left('b'),
 *   )
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const alt: <E, A>(that: LazyArg<TaskEither<E, A>>) => (fa: TaskEither<E, A>) => TaskEither<E, A> =
  /*#__PURE__*/ ET.alt(T.Monad)

/**
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the error and the return types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const altW: <E2, B>(
  that: LazyArg<TaskEither<E2, B>>,
) => <E1, A>(fa: TaskEither<E1, A>) => TaskEither<E2, A | B> = alt as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const of: <E = never, A = never>(a: A) => TaskEither<E, A> = right

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const throwError: MonadThrow2<URI>['throwError'] = left

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'TaskEither'

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
    readonly [URI]: TaskEither<E, A>
  }
}

/**
 * The default [`ApplicativePar`](#applicativepar) instance returns the first error, if you want to get all errors you
 * need to provide a way to concatenate them via a `Semigroup`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import * as E from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import * as S from '@fp-tx/core/Semigroup'
 * import * as string from '@fp-tx/core/string'
 * import * as T from '@fp-tx/core/Task'
 * import * as TE from '@fp-tx/core/TaskEither'
 *
 * interface User {
 *   readonly id: string
 *   readonly name: string
 * }
 *
 * const remoteDatabase: ReadonlyArray<User> = [
 *   { id: 'id1', name: 'John' },
 *   { id: 'id2', name: 'Mary' },
 *   { id: 'id3', name: 'Joey' },
 * ]
 *
 * const fetchUser = (id: string): TE.TaskEither<string, User> =>
 *   pipe(
 *     remoteDatabase,
 *     RA.findFirst(user => user.id === id),
 *     TE.fromOption(() => `${id} not found`),
 *   )
 *
 * async function test() {
 *   assert.deepStrictEqual(
 *     await pipe(['id4', 'id5'], RA.traverse(TE.ApplicativePar)(fetchUser))(),
 *     E.left('id4 not found'), // <= first error
 *   )
 *
 *   const Applicative = TE.getApplicativeTaskValidation(T.ApplyPar, pipe(string.Semigroup, S.intercalate(', ')))
 *
 *   assert.deepStrictEqual(
 *     await pipe(['id4', 'id5'], RA.traverse(Applicative)(fetchUser))(),
 *     E.left('id4 not found, id5 not found'), // <= all errors
 *   )
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export function getApplicativeTaskValidation<E>(A: Apply1<T.URI>, S: Semigroup<E>): Applicative2C<URI, E> {
  const ap = ap_(A, E.getApplicativeValidation(S))
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
export function getAltTaskValidation<E>(S: Semigroup<E>): Alt2C<URI, E> {
  const alt = ET.altValidation(T.Monad, S)
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
 * Category: Filtering
 * @public
 */
export const getCompactable = <E>(M: Monoid<E>): Compactable2C<URI, E> => {
  const C = E.getCompactable(M)
  return {
    URI,
    _E: undefined as any,
    compact: compact_(T.Functor, C),
    separate: separate_(T.Functor, C, E.Functor),
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export function getFilterable<E>(M: Monoid<E>): Filterable2C<URI, E> {
  const F = E.getFilterable(M)
  const C = getCompactable(M)

  const filter = filter_(T.Functor, F)
  const filterMap = filterMap_(T.Functor, F)
  const partition = partition_(T.Functor, F)
  const partitionMap = partitionMap_(T.Functor, F)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    compact: C.compact,
    separate: C.separate,
    filter: <A>(fa: TaskEither<E, A>, predicate: Predicate<A>) => pipe(fa, filter(predicate)),
    filterMap: (fa, f) => pipe(fa, filterMap(f)),
    partition: <A>(fa: TaskEither<E, A>, predicate: Predicate<A>) => pipe(fa, partition(predicate)),
    partitionMap: (fa, f) => pipe(fa, partitionMap(f)),
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
 * Maps the `Right` value of this `TaskEither` to the specified constant value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const as: {
  <A>(a: A): <E, _>(self: TaskEither<E, _>) => TaskEither<E, A>
  <E, _, A>(self: TaskEither<E, _>, a: A): TaskEither<E, A>
} = dual(2, as_(Functor))

/**
 * Maps the `Right` value of this `TaskEither` to the void constant value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const asUnit: <E, _>(self: TaskEither<E, _>) => TaskEither<E, void> = asUnit_(Functor)

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
 * Runs computations in parallel.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ApplyPar: Apply2<URI> = {
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
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apFirstW: <E2, B>(
  second: TaskEither<E2, B>,
) => <E1, A>(first: TaskEither<E1, A>) => TaskEither<E1 | E2, A> = apFirst as any

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
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apSecondW: <E2, B>(
  second: TaskEither<E2, B>,
) => <E1, A>(first: TaskEither<E1, A>) => TaskEither<E1 | E2, B> = apSecond as any

/**
 * Runs computations in parallel.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ApplySeq: Apply2<URI> = {
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
export const ApplicativeSeq: Applicative2<URI> = {
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
export const Chain: chainable.Chain2<URI> = {
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
export const chainRec: ChainRec2<URI>['chainRec'] =
  <E, A, B>(a: A, f: (a: A) => TaskEither<E, E.Either<A, B>>) =>
  async () => {
    let current = await f(a)()
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (E.isRight(current) && E.isLeft(current.right)) {
        current = await f(current.right.left)()
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
 * ChainRec for `TaskEither`
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
export const MonadIO: MonadIO2<URI> = {
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
export const MonadTask: MonadTask2<URI> = {
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
export const MonadThrow: MonadThrow2<URI> = {
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
export const FromEither: FromEither2<URI> = {
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
export const FromTask: FromTask2<URI> = {
  URI,
  fromIO,
  fromTask,
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
  <E1, A, E2, _>(self: TaskEither<E1, A>, f: (a: A) => TaskEither<E2, _>): TaskEither<E1 | E2, A>
  <A, E2, _>(f: (a: A) => TaskEither<E2, _>): <E1>(self: TaskEither<E1, A>) => TaskEither<E2 | E1, A>
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
 * import * as TE from '@fp-tx/core/TaskEither'
 *
 * const checkString = (value: string) =>
 *   pipe(
 *     TE.of(value),
 *     TE.tapEither(() => (value.length > 0 ? E.right('ok') : E.left('error'))),
 *   )
 *
 * async function test() {
 *   assert.deepStrictEqual(await checkString('')(), E.left('error'))
 *   assert.deepStrictEqual(await checkString('fp-ts')(), E.right('fp-ts'))
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const tapEither: {
  <A, E2, _>(f: (a: A) => Either<E2, _>): <E1>(self: TaskEither<E1, A>) => TaskEither<E2 | E1, A>
  <E1, A, E2, _>(self: TaskEither<E1, A>, f: (a: A) => Either<E2, _>): TaskEither<E1 | E2, A>
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
 * import { pipe } from '@fp-tx/core/function'
 * import * as TE from '@fp-tx/core/TaskEither'
 * import * as E from '@fp-tx/core/Either'
 * import * as Console from '@fp-tx/core/Console'
 *
 * // Will produce `Hello, fp-ts` to the stdout
 * const effectA = TE.tapIO(TE.of(1), value => Console.log(`Hello, ${value}`))
 *
 * // No output to the stdout
 * const effectB = pipe(
 *   TE.left('error'),
 *   TE.tapIO(value => Console.log(`Hello, ${value}`)),
 * )
 *
 * async function test() {
 *   assert.deepStrictEqual(await effectA(), E.of(1))
 *   assert.deepStrictEqual(await effectB(), E.left('error'))
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const tapIO: {
  <A, _>(f: (a: A) => IO<_>): <E>(self: TaskEither<E, A>) => TaskEither<E, A>
  <E, A, _>(self: TaskEither<E, A>, f: (a: A) => IO<_>): TaskEither<E, A>
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
 * import * as TE from '@fp-tx/core/TaskEither'
 * import * as T from '@fp-tx/core/Task'
 * import * as E from '@fp-tx/core/Either'
 *
 * const effect = TE.tapIO(TE.of(1), value => T.of(value + 1))
 *
 * async function test() {
 *   assert.deepStrictEqual(await effect(), E.of(1))
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const tapTask: {
  <A, _>(f: (a: A) => Task<_>): <E>(self: TaskEither<E, A>) => TaskEither<E, A>
  <E, A, _>(self: TaskEither<E, A>, f: (a: A) => Task<_>): TaskEither<E, A>
} = /*#__PURE__*/ dual(2, tapTask_(FromTask, Chain))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Bifunctor: Bifunctor2<URI> = {
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
export const Alt: Alt2<URI> = {
  URI,
  map: _map,
  alt: _alt,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromOption: <E>(onNone: LazyArg<E>) => <A>(fa: Option<A>) => TaskEither<E, A> =
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
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => TaskEither<E, B> =
  /*#__PURE__*/ fromOptionK_(FromEither)

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
) => <A, B>(f: (a: A) => Option<B>) => (ma: TaskEither<E, A>) => TaskEither<E, B> = /*#__PURE__*/ chainOptionK_(
  FromEither,
  Chain,
)

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
) => <A, B>(f: (a: A) => Option<B>) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B> =
  /*#__PURE__*/ chainOptionK as any

/** @internal @packageDocumentation */
interface TaskEitherTypeLambda extends _.TypeLambda {
  readonly type: TaskEither<this['Out1'], this['Target']>
}

/** @internal */
const _FromEither: _.FromEither<TaskEitherTypeLambda> = {
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
) => (...a: A) => TaskEither<E, NonNullable<B>> = /*#__PURE__*/ _.liftNullable(_FromEither)

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
) => (...a: A) => TaskEither<E, B> = /*#__PURE__*/ _.liftOption(_FromEither)

/** @internal */
const _FlatMap: _.FlatMap<TaskEitherTypeLambda> = {
  flatMap,
}

/** @internal */
const _FromIO: _.FromIO<TaskEitherTypeLambda> = {
  fromIO: FromIO.fromIO,
}

/** @internal */
const _FromTask: _.FromTask<TaskEitherTypeLambda> = {
  fromTask,
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
  ): <E1>(self: TaskEither<E1, A>) => TaskEither<E2 | E1, NonNullable<B>>
  <E1, A, B, E2>(
    self: TaskEither<E1, A>,
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): TaskEither<E1 | E2, NonNullable<B>>
} = /*#__PURE__*/ _.flatMapNullable(_FromEither, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapOption: {
  <A, B, E2>(f: (a: A) => Option<B>, onNone: (a: A) => E2): <E1>(self: TaskEither<E1, A>) => TaskEither<E2 | E1, B>
  <E1, A, B, E2>(self: TaskEither<E1, A>, f: (a: A) => Option<B>, onNone: (a: A) => E2): TaskEither<E1 | E2, B>
} = /*#__PURE__*/ _.flatMapOption(_FromEither, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapEither: {
  <A, E2, B>(f: (a: A) => E.Either<E2, B>): <E1>(self: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
  <E1, A, E2, B>(self: TaskEither<E1, A>, f: (a: A) => E.Either<E2, B>): TaskEither<E1 | E2, B>
} = /*#__PURE__*/ _.flatMapEither(_FromEither, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): <E>(self: TaskEither<E, A>) => TaskEither<E, B>
  <E, A, B>(self: TaskEither<E, A>, f: (a: A) => IO<B>): TaskEither<E, B>
} = /*#__PURE__*/ _.flatMapIO(_FromIO, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapTask: {
  <A, B>(f: (a: A) => Task<B>): <E>(self: TaskEither<E, A>) => TaskEither<E, B>
  <E, A, B>(self: TaskEither<E, A>, f: (a: A) => Task<B>): TaskEither<E, B>
} = /*#__PURE__*/ _.flatMapTask(_FromTask, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapIOEither: {
  <A, E2, B>(f: (a: A) => IOEither<E2, B>): <E1>(self: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
  <E1, A, E2, B>(self: TaskEither<E1, A>, f: (a: A) => IOEither<E2, B>): TaskEither<E1 | E2, B>
} = /*#__PURE__*/ dual(
  2,
  <E1, A, E2, B>(self: TaskEither<E1, A>, f: (a: A) => IOEither<E2, B>): TaskEither<E1 | E2, B> =>
    flatMap(self, fromIOEitherK(f)),
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapTaskOption: {
  <A, E2, B>(f: (a: A) => TaskOption<B>, onNone: (a: A) => E2): <E1>(self: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
  <E1, A, E2, B>(self: TaskEither<E1, A>, f: (a: A) => TaskOption<B>, onNone: (a: A) => E2): TaskEither<E1 | E2, B>
} = /*#__PURE__*/ dual(
  3,
  <E1, A, E2, B>(self: TaskEither<E1, A>, f: (a: A) => TaskOption<B>, onNone: (a: A) => E2): TaskEither<E1 | E2, B> =>
    flatMap(self, a => fromTaskOption(() => onNone(a))(f(a))),
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
export const chainEitherK: <E, A, B>(f: (a: A) => E.Either<E, B>) => (ma: TaskEither<E, A>) => TaskEither<E, B> =
  flatMapEither

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
) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B> = flatMapEither

/**
 * Alias of `tapEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstEitherK: <A, E, B>(f: (a: A) => E.Either<E, B>) => (ma: TaskEither<E, A>) => TaskEither<E, A> =
  tapEither

/**
 * Alias of `tapEither`.
 *
 * Less strict version of [`chainFirstEitherK`](#chainfirsteitherk).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstEitherKW: <A, E2, B>(
  f: (a: A) => E.Either<E2, B>,
) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, A> = tapEither

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromPredicate: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => TaskEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => TaskEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => TaskEither<E, A>
} = /*#__PURE__*/ fromPredicate_(FromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const filterOrElse: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (ma: TaskEither<E, A>) => TaskEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(mb: TaskEither<E, B>) => TaskEither<E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): (ma: TaskEither<E, A>) => TaskEither<E, A>
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
  ): <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B>
  <A, E2>(
    predicate: Predicate<A>,
    onFalse: (a: A) => E2,
  ): <E1, B extends A>(mb: TaskEither<E1, B>) => TaskEither<E1 | E2, B>
  <A, E2>(predicate: Predicate<A>, onFalse: (a: A) => E2): <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, A>
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
) => (...a: A) => TaskEither<E, B> = /*#__PURE__*/ fromEitherK_(FromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IO<B>,
) => <E = never>(...a: A) => TaskEither<E, B> = /*#__PURE__*/ fromIOK_(FromIO)

/**
 * Alias of `flatMapIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainIOK: <A, B>(f: (a: A) => IO<B>) => <E>(first: TaskEither<E, A>) => TaskEither<E, B> = flatMapIO

/**
 * Alias of `tapIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstIOK: <A, B>(f: (a: A) => IO<B>) => <E>(first: TaskEither<E, A>) => TaskEither<E, A> = tapIO

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromTaskK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => T.Task<B>,
) => <E = never>(...a: A) => TaskEither<E, B> = /*#__PURE__*/ fromTaskK_(FromTask)

/**
 * Alias of `flatMapTask`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainTaskK: <A, B>(f: (a: A) => T.Task<B>) => <E>(first: TaskEither<E, A>) => TaskEither<E, B> =
  flatMapTask

/**
 * Alias of `tapTask`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstTaskK: <A, B>(f: (a: A) => T.Task<B>) => <E>(first: TaskEither<E, A>) => TaskEither<E, A> =
  tapTask

/**
 * Alias of `flatMapIOEither`.
 *
 * Less strict version of [`chainIOEitherK`](#chainioeitherk).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainIOEitherKW: <E2, A, B>(
  f: (a: A) => IOEither<E2, B>,
) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B> = flatMapIOEither

/**
 * Alias of `flatMapIOEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainIOEitherK: <E, A, B>(f: (a: A) => IOEither<E, B>) => (ma: TaskEither<E, A>) => TaskEither<E, B> =
  flatMapIOEither

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Convert a node style callback function to one returning a `TaskEither`
 *
 * **Note**. If the function `f` admits multiple overloadings, `taskify` will pick last one. If you want a different
 * behaviour, add an explicit type annotation
 *
 * ```ts
 * // readFile admits multiple overloadings
 *
 * // const readFile: (a: string) => TaskEither<NodeJS.ErrnoException, Buffer>
 * const readFile = taskify(fs.readFile)
 *
 * const readFile2: (filename: string, encoding: string) => TaskEither<NodeJS.ErrnoException, Buffer> = taskify(
 *   fs.readFile,
 * )
 * ```
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Interop
 * @example
 *
 * ```typescript
 * import { taskify } from '@fp-tx/core/TaskEither'
 * import * as fs from 'fs'
 *
 * // const stat: (a: string | Buffer) => TaskEither<NodeJS.ErrnoException, fs.Stats>
 * const stat = taskify(fs.stat)
 * assert.strictEqual(stat.length, 0)
 * ```
 *
 * @public
 */
export function taskify<L, R>(f: (cb: (e: L | null | undefined, r?: R) => void) => void): () => TaskEither<L, R>
export function taskify<A, L, R>(
  f: (a: A, cb: (e: L | null | undefined, r?: R) => void) => void,
): (a: A) => TaskEither<L, R>
export function taskify<A, B, L, R>(
  f: (a: A, b: B, cb: (e: L | null | undefined, r?: R) => void) => void,
): (a: A, b: B) => TaskEither<L, R>
export function taskify<A, B, C, L, R>(
  f: (a: A, b: B, c: C, cb: (e: L | null | undefined, r?: R) => void) => void,
): (a: A, b: B, c: C) => TaskEither<L, R>
export function taskify<A, B, C, D, L, R>(
  f: (a: A, b: B, c: C, d: D, cb: (e: L | null | undefined, r?: R) => void) => void,
): (a: A, b: B, c: C, d: D) => TaskEither<L, R>
export function taskify<A, B, C, D, E, L, R>(
  f: (a: A, b: B, c: C, d: D, e: E, cb: (e: L | null | undefined, r?: R) => void) => void,
): (a: A, b: B, c: C, d: D, e: E) => TaskEither<L, R>
export function taskify<L, R>(f: Function): () => TaskEither<L, R> {
  return function () {
    const args = Array.prototype.slice.call(arguments)
    return () =>
      new Promise(resolve => {
        const cbResolver = (e: L, r: R) => (e != null ? resolve(_.left(e)) : resolve(_.right(r)))
        f.apply(null, args.concat(cbResolver))
      })
  }
}

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
export const bracket = <E, A, B>(
  acquire: TaskEither<E, A>,
  use: (a: A) => TaskEither<E, B>,
  release: (a: A, e: Either<E, B>) => TaskEither<E, void>,
): TaskEither<E, B> => bracketW(acquire, use, release)

/**
 * Less strict version of [`bracket`](#bracket).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const bracketW: <E1, A, E2, B, E3>(
  acquire: TaskEither<E1, A>,
  use: (a: A) => TaskEither<E2, B>,
  release: (a: A, e: E.Either<E2, B>) => TaskEither<E3, void>,
) => TaskEither<E1 | E2 | E3, B> = (acquire, use, release) =>
  flatMap(acquire, a => T.flatMap(use(a), e => flatMap(release(a, e), () => T.of(e))))

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
export const Do: TaskEither<never, {}> = /*#__PURE__*/ of(_.emptyRecord)

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
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const bindW: <N extends string, A, E2, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => TaskEither<E2, B>,
) => <E1>(fa: TaskEither<E1, A>) => TaskEither<E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  bind as any

interface TaskEitherIterable<E, A> {
  readonly value: TaskEither<E, A>
  [Symbol.iterator]: () => Generator<TaskEitherIterable<E, A>, A, any>
}

const do_: <MA extends TaskEitherIterable<any, any>, A>(
  yieldFunction: (unwrap: <E, A>(ma: TaskEither<E, A>) => TaskEitherIterable<E, A>) => Generator<MA, A>,
) => TaskEither<MA extends TaskEitherIterable<infer E, any> ? E : never, A> = ChnRec.do(Pointed, ChainRec)

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
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const apSW: <A, N extends string, E2, B>(
  name: Exclude<N, keyof A>,
  fb: TaskEither<E2, B>,
) => <E1>(fa: TaskEither<E1, A>) => TaskEither<E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  apS as any

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ApT: TaskEither<never, readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

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
export const traverseReadonlyNonEmptyArrayWithIndex = <A, E, B>(
  f: (index: number, a: A) => TaskEither<E, B>,
): ((as: ReadonlyNonEmptyArray<A>) => TaskEither<E, ReadonlyNonEmptyArray<B>>) =>
  flow(T.traverseReadonlyNonEmptyArrayWithIndex(f), T.map(E.traverseReadonlyNonEmptyArrayWithIndex(SK)))

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseReadonlyArrayWithIndex = <A, E, B>(
  f: (index: number, a: A) => TaskEither<E, B>,
): ((as: ReadonlyArray<A>) => TaskEither<E, ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndexSeq =
  <A, E, B>(f: (index: number, a: A) => TaskEither<E, B>) =>
  (as: ReadonlyNonEmptyArray<A>): TaskEither<E, ReadonlyNonEmptyArray<B>> =>
  () =>
    _.tail(as).reduce<Promise<Either<E, NonEmptyArray<B>>>>(
      (acc, a, i) =>
        acc.then(ebs =>
          _.isLeft(ebs) ? acc : (
            f(i + 1, a)().then(eb => {
              if (_.isLeft(eb)) {
                return eb
              }
              ebs.right.push(eb.right)
              return ebs
            })
          ),
        ),
      f(0, _.head(as))().then(E.map(_.singleton)),
    )

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseReadonlyArrayWithIndexSeq = <A, E, B>(
  f: (index: number, a: A) => TaskEither<E, B>,
): ((as: ReadonlyArray<A>) => TaskEither<E, ReadonlyArray<B>>) => {
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
export const traverseArrayWithIndex: <A, B, E>(
  f: (index: number, a: A) => TaskEither<E, B>,
) => (as: ReadonlyArray<A>) => TaskEither<E, ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseArray = <A, B, E>(
  f: (a: A) => TaskEither<E, B>,
): ((as: ReadonlyArray<A>) => TaskEither<E, ReadonlyArray<B>>) => traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const sequenceArray: <A, E>(arr: ReadonlyArray<TaskEither<E, A>>) => TaskEither<E, ReadonlyArray<A>> =
  /*#__PURE__*/ traverseArray(identity)

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseSeqArrayWithIndex: <A, B, E>(
  f: (index: number, a: A) => TaskEither<E, B>,
) => (as: ReadonlyArray<A>) => TaskEither<E, ReadonlyArray<B>> = traverseReadonlyArrayWithIndexSeq

/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseSeqArray = <A, B, E>(
  f: (a: A) => TaskEither<E, B>,
): ((as: ReadonlyArray<A>) => TaskEither<E, ReadonlyArray<B>>) => traverseReadonlyArrayWithIndexSeq((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const sequenceSeqArray: <A, E>(arr: ReadonlyArray<TaskEither<E, A>>) => TaskEither<E, ReadonlyArray<A>> =
  /*#__PURE__*/ traverseSeqArray(identity)

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
export const chain: <E, A, B>(f: (a: A) => TaskEither<E, B>) => (ma: TaskEither<E, A>) => TaskEither<E, B> = flatMap

/**
 * Alias of `flatMap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainW: <E2, A, B>(
  f: (a: A) => TaskEither<E2, B>,
) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, B> = flatMap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirst: <E, A, B>(f: (a: A) => TaskEither<E, B>) => (ma: TaskEither<E, A>) => TaskEither<E, A> = tap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstW: <E2, A, B>(
  f: (a: A) => TaskEither<E2, B>,
) => <E1>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, A> = tap

/**
 * Alias of `tapError`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const orElseFirst: <E, B>(onLeft: (e: E) => TaskEither<E, B>) => <A>(ma: TaskEither<E, A>) => TaskEither<E, A> =
  tapError

/**
 * Alias of `tapError`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const orElseFirstW: <E1, E2, B>(
  onLeft: (e: E1) => TaskEither<E2, B>,
) => <A>(ma: TaskEither<E1, A>) => TaskEither<E1 | E2, A> = tapError

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `TE.Functor` instead of `TE.taskEither` (where `TE` is from `import TE from 'fp-ts/TaskEither'`)
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const taskEither: Monad2<URI> & Bifunctor2<URI> & Alt2<URI> & MonadTask2<URI> & MonadThrow2<URI> = {
  URI,
  bimap: mapBoth,
  mapLeft: mapError,
  map: _map,
  of,
  ap: _apPar,
  chain: flatMap,
  alt: _alt,
  fromIO,
  fromTask,
  throwError,
}

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `TE.Functor` instead of `TE.taskEitherSeq` (where `TE` is from `import TE from 'fp-ts/TaskEither'`)
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */

export const taskEitherSeq: typeof taskEither = {
  URI,
  bimap: mapBoth,
  mapLeft: mapError,
  map: _map,
  of,
  ap: _apSeq,
  chain: flatMap,
  alt: _alt,
  fromIO,
  fromTask,
  throwError,
}

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
export const getApplySemigroup: <E, A>(S: Semigroup<A>) => Semigroup<TaskEither<E, A>> =
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
export const getApplyMonoid: <E, A>(M: Monoid<A>) => Monoid<TaskEither<E, A>> =
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
export const getSemigroup = <E, A>(S: Semigroup<A>): Semigroup<TaskEither<E, A>> =>
  getApplySemigroup_(T.ApplySeq)(E.getSemigroup(S))

/**
 * Use [`getApplicativeTaskValidation`](#getapplicativetaskvalidation) and
 * [`getAltTaskValidation`](#getalttaskvalidation) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export function getTaskValidation<E>(
  SE: Semigroup<E>,
): Monad2C<URI, E> & Bifunctor2<URI> & Alt2C<URI, E> & MonadTask2C<URI, E> & MonadThrow2C<URI, E> {
  const applicativeTaskValidation = getApplicativeTaskValidation(T.ApplicativePar, SE)
  const altTaskValidation = getAltTaskValidation(SE)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: applicativeTaskValidation.ap,
    of,
    chain: flatMap,
    bimap: mapBoth,
    mapLeft: mapError,
    alt: altTaskValidation.alt,
    fromIO,
    fromTask,
    throwError,
  }
}
