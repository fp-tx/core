/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Alt1 } from './Alt'
import { type Alternative1 } from './Alternative'
import { type Applicative1 } from './Applicative'
import { apFirst as apFirst_, type Apply1, apS as apS_, apSecond as apSecond_ } from './Apply'
import * as chainable from './Chain'
import { type ChainRec1 } from './ChainRec'
import * as ChnRec from './ChainRec'
import { compact as compact_, type Compactable1, separate as separate_ } from './Compactable'
import { type Either } from './Either'
import {
  filter as filter_,
  type Filterable1,
  filterMap as filterMap_,
  partition as partition_,
  partitionMap as partitionMap_,
} from './Filterable'
import {
  chainEitherK as chainEitherK_,
  type FromEither1,
  fromEitherK as fromEitherK_,
  tapEither as tapEither_,
} from './FromEither'
import { type FromIO1, fromIOK as fromIOK_, tapIO as tapIO_ } from './FromIO'
import { type FromTask1, fromTaskK as fromTaskK_, tapTask as tapTask_ } from './FromTask'
import { dual, flow, identity, type LazyArg, pipe, SK } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor1, let as let__ } from './Functor'
import * as _ from './internal'
import { type IO } from './IO'
import { type Monad1 } from './Monad'
import { type MonadIO1 } from './MonadIO'
import { type MonadTask1 } from './MonadTask'
import { type MonadThrow1 } from './MonadThrow'
import { type NonEmptyArray } from './NonEmptyArray'
import * as O from './Option'
import { type Option } from './Option'
import * as OT from './OptionT'
import { type Pointed1 } from './Pointed'
import { type Predicate } from './Predicate'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type Separated } from './Separated'
import * as T from './Task'
import { type Task } from './Task'
import { type TaskEither } from './TaskEither'
import { guard as guard_, type Zero1 } from './Zero'

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
export interface TaskOption<A> extends Task<Option<A>> {}

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
export const some: <A>(a: A) => TaskOption<A> = /*#__PURE__*/ OT.some(T.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromPredicate: {
  <A, B extends A>(refinement: Refinement<A, B>): (a: A) => TaskOption<B>
  <A>(predicate: Predicate<A>): <B extends A>(b: B) => TaskOption<B>
  <A>(predicate: Predicate<A>): (a: A) => TaskOption<A>
} = /*#__PURE__*/ OT.fromPredicate(T.Pointed)

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
export const fromOption: <A>(fa: Option<A>) => TaskOption<A> = T.of

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromEither: <A>(fa: Either<unknown, A>) => TaskOption<A> = /*#__PURE__*/ OT.fromEither(T.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromIO: <A>(fa: IO<A>) => TaskOption<A> = ma => fromTask(T.fromIO(ma))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromTask: <A>(fa: Task<A>) => TaskOption<A> = /*#__PURE__*/ OT.fromF(T.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromTaskEither: <A>(fa: TaskEither<unknown, A>) => TaskOption<A> = /*#__PURE__*/ T.map(O.fromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const match: <B, A>(onNone: () => B, onSome: (a: A) => B) => (ma: TaskOption<A>) => Task<B> =
  /*#__PURE__*/ OT.match(T.Functor)

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
export const matchW: <B, A, C>(onNone: () => B, onSome: (a: A) => C) => (ma: TaskOption<A>) => Task<B | C> =
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
export const matchE: <B, A>(onNone: () => Task<B>, onSome: (a: A) => Task<B>) => (ma: TaskOption<A>) => Task<B> =
  /*#__PURE__*/ OT.matchE(T.Chain)

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
export const matchEW: <B, C, A>(
  onNone: () => Task<B>,
  onSome: (a: A) => Task<C>,
) => (ma: TaskOption<A>) => Task<B | C> = matchE as any

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
export const getOrElse: <A>(onNone: LazyArg<Task<A>>) => (fa: TaskOption<A>) => Task<A> = /*#__PURE__*/ OT.getOrElse(
  T.Monad,
)

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
export const getOrElseW: <B>(onNone: LazyArg<Task<B>>) => <A>(ma: TaskOption<A>) => Task<A | B> = getOrElse as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromNullable: <A>(a: A) => TaskOption<NonNullable<A>> = /*#__PURE__*/ OT.fromNullable(T.Pointed)

/**
 * Transforms a `Promise` that may reject to a `Promise` that never rejects and returns an `Option` instead.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Interop
 * @public
 */
export const tryCatch =
  <A>(f: LazyArg<Promise<A>>): TaskOption<A> =>
  async () => {
    try {
      return await f().then(_.some)
    } catch (reason) {
      return _.none
    }
  }

/**
 * Converts a function returning a `Promise` to one returning a `TaskOption`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Interop
 * @public
 */
export const tryCatchK =
  <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Promise<B>): ((...a: A) => TaskOption<B>) =>
  (...a) =>
    tryCatch(() => f(...a))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromNullableK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined,
) => (...a: A) => TaskOption<NonNullable<B>> = /*#__PURE__*/ OT.fromNullableK(T.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const chainNullableK: <A, B>(
  f: (a: A) => B | null | undefined,
) => (ma: TaskOption<A>) => TaskOption<NonNullable<B>> = /*#__PURE__*/ OT.chainNullableK(T.Monad)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromOptionK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Option<B>,
) => (...a: A) => TaskOption<B> = /*#__PURE__*/ OT.fromOptionK(T.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const chainOptionK: <A, B>(f: (a: A) => Option<B>) => (ma: TaskOption<A>) => TaskOption<B> =
  /*#__PURE__*/ OT.chainOptionK(T.Monad)

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
export const map: <A, B>(f: (a: A) => B) => (fa: TaskOption<A>) => TaskOption<B> = /*#__PURE__*/ OT.map(T.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ap: <A>(fa: TaskOption<A>) => <B>(fab: TaskOption<(a: A) => B>) => TaskOption<B> = /*#__PURE__*/ OT.ap(
  T.ApplyPar,
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const of: <A>(a: A) => TaskOption<A> = some

/** @internal @packageDocumentation */
interface TaskOptionTypeLambda extends _.TypeLambda {
  readonly type: TaskOption<this['Target']>
}

/** @internal */
const _FromIO: _.FromIO<TaskOptionTypeLambda> = {
  fromIO,
}

/** @internal */
const _FromTask: _.FromTask<TaskOptionTypeLambda> = {
  fromTask,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMap: {
  <A, B>(f: (a: A) => TaskOption<B>): (ma: TaskOption<A>) => TaskOption<B>
  <A, B>(ma: TaskOption<A>, f: (a: A) => TaskOption<B>): TaskOption<B>
} = /*#__PURE__*/ dual(2, OT.flatMap(T.Monad))

/** @internal */
const _FlatMap: _.FlatMap<TaskOptionTypeLambda> = {
  flatMap,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): (self: TaskOption<A>) => TaskOption<B>
  <A, B>(self: TaskOption<A>, f: (a: A) => IO<B>): TaskOption<B>
} = /*#__PURE__*/ _.flatMapIO(_FromIO, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapTask: {
  <A, B>(f: (a: A) => Task<B>): (self: TaskOption<A>) => TaskOption<B>
  <A, B>(self: TaskOption<A>, f: (a: A) => Task<B>): TaskOption<B>
} = /*#__PURE__*/ _.flatMapTask(_FromTask, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatten: <A>(mma: TaskOption<TaskOption<A>>) => TaskOption<A> = /*#__PURE__*/ flatMap(identity)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const alt: <A>(second: LazyArg<TaskOption<A>>) => (first: TaskOption<A>) => TaskOption<A> = /*#__PURE__*/ OT.alt(
  T.Monad,
)

/**
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the return types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const altW: <B>(second: LazyArg<TaskOption<B>>) => <A>(first: TaskOption<A>) => TaskOption<A | B> = alt as any

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const zero: <A>() => TaskOption<A> = /*#__PURE__*/ OT.zero(T.Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const throwError: MonadThrow1<URI>['throwError'] = zero

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const none: TaskOption<never> = /*#__PURE__*/ zero()

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const compact: Compactable1<URI>['compact'] = /*#__PURE__*/ compact_(T.Functor, O.Compactable)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const separate: Compactable1<URI>['separate'] = /*#__PURE__*/ separate_(T.Functor, O.Compactable, O.Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (fb: TaskOption<A>) => TaskOption<B>
  <A>(predicate: Predicate<A>): <B extends A>(fb: TaskOption<B>) => TaskOption<B>
  <A>(predicate: Predicate<A>): (fa: TaskOption<A>) => TaskOption<A>
} = /*#__PURE__*/ filter_(T.Functor, O.Filterable)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const filterMap: <A, B>(f: (a: A) => Option<B>) => (fga: TaskOption<A>) => TaskOption<B> =
  /*#__PURE__*/ filterMap_(T.Functor, O.Filterable)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const partition: {
  <A, B extends A>(refinement: Refinement<A, B>): (fb: TaskOption<A>) => Separated<TaskOption<A>, TaskOption<B>>
  <A>(predicate: Predicate<A>): <B extends A>(fb: TaskOption<B>) => Separated<TaskOption<B>, TaskOption<B>>
  <A>(predicate: Predicate<A>): (fa: TaskOption<A>) => Separated<TaskOption<A>, TaskOption<A>>
} = /*#__PURE__*/ partition_(T.Functor, O.Filterable)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const partitionMap: <A, B, C>(
  f: (a: A) => Either<B, C>,
) => (fa: TaskOption<A>) => Separated<TaskOption<B>, TaskOption<C>> = /*#__PURE__*/ partitionMap_(
  T.Functor,
  O.Filterable,
)

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

const _map: Functor1<URI>['map'] = (fa, f) => pipe(fa, map(f))
const _ap: Apply1<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
/* istanbul ignore next */
const _alt: Alt1<URI>['alt'] = (fa, that) => pipe(fa, alt(that))
/* istanbul ignore next */
const _filter: Filterable1<URI>['filter'] = <A>(fa: TaskOption<A>, predicate: Predicate<A>) =>
  pipe(fa, filter(predicate))
/* istanbul ignore next */
const _filterMap: Filterable1<URI>['filterMap'] = (fa, f) => pipe(fa, filterMap(f))
/* istanbul ignore next */
const _partition: Filterable1<URI>['partition'] = <A>(fa: TaskOption<A>, predicate: Predicate<A>) =>
  pipe(fa, partition(predicate))
/* istanbul ignore next */
const _partitionMap: Filterable1<URI>['partitionMap'] = (fa, f) => pipe(fa, partitionMap(f))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'TaskOption'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind<A> {
    readonly [URI]: TaskOption<A>
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Functor: Functor1<URI> = {
  URI,
  map: _map,
}

/**
 * Maps the `Some` value of this `TaskOption` to the specified constant value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const as: {
  <A>(a: A): <_>(self: TaskOption<_>) => TaskOption<A>
  <_, A>(self: TaskOption<_>, a: A): TaskOption<A>
} = dual(2, as_(Functor))

/**
 * Maps the `Some` value of this `TaskOption` to the void constant value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const asUnit: <_>(self: TaskOption<_>) => TaskOption<void> = asUnit_(Functor)

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
export const Pointed: Pointed1<URI> = {
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
export const ApplyPar: Apply1<URI> = {
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
export const apFirst = /*#__PURE__*/ apFirst_(ApplyPar)

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apSecond = /*#__PURE__*/ apSecond_(ApplyPar)

/**
 * Runs computations in parallel.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ApplicativePar: Applicative1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
}

const _apSeq: Apply1<URI>['ap'] = (fab, fa) => flatMap(fab, f => pipe(fa, map(f)))

/**
 * Runs computations sequentially.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ApplySeq: Apply1<URI> = {
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
export const ApplicativeSeq: Applicative1<URI> = {
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
export const Chain: chainable.Chain1<URI> = {
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
export const chainRec: ChainRec1<URI>['chainRec'] =
  <A, B>(a: A, f: (a: A) => TaskOption<Either<A, B>>) =>
  async () => {
    let current = await f(a)()
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (O.isSome(current) && _.isLeft(current.value)) {
        current = await f(current.value.left)()
        continue
      }
      if (O.isNone(current)) {
        return current as O.Option<B>
      }
      if (_.isRight(current.value)) {
        return O.some(current.value.right) as O.Option<B>
      }
    }
  }

/**
 * ChainRec for `TaskOption`
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ChainRec: ChainRec1<URI> = {
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
export const FromEither: FromEither1<URI> = {
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
export const FromIO: FromIO1<URI> = {
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
export const FromTask: FromTask1<URI> = {
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
  <A, _>(self: TaskOption<A>, f: (a: A) => TaskOption<_>): TaskOption<A>
  <A, _>(f: (a: A) => TaskOption<_>): (self: TaskOption<A>) => TaskOption<A>
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
 * import * as TO from '@fp-tx/core/TaskOption'
 * import * as O from '@fp-tx/core/Option'
 * import * as E from '@fp-tx/core/Either'
 *
 * const compute = (value: number) =>
 *   pipe(
 *     TO.of(value),
 *     TO.tapEither(value => (value > 0 ? E.right('ok') : E.left('error'))),
 *   )
 *
 * async function test() {
 *   assert.deepStrictEqual(await compute(1)(), O.of(1))
 *   assert.deepStrictEqual(await compute(-1)(), O.none)
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const tapEither: {
  <A, E, _>(f: (a: A) => Either<E, _>): (self: TaskOption<A>) => TaskOption<A>
  <A, E, _>(self: TaskOption<A>, f: (a: A) => Either<E, _>): TaskOption<A>
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
 * import * as TO from '@fp-tx/core/TaskOption'
 * import * as O from '@fp-tx/core/Option'
 * import * as Console from '@fp-tx/core/Console'
 *
 * // Will produce `Hello, fp-ts` to the stdout
 * const effectA = TO.tapIO(TO.of(1), value => Console.log(`Hello, ${value}`))
 *
 * // No output to the stdout
 * const effectB = pipe(
 *   TO.none as TO.TaskOption<string>,
 *   TO.tapIO(value => Console.log(`Hello, ${value}`)),
 * )
 *
 * async function test() {
 *   assert.deepStrictEqual(await effectA(), O.of(1))
 *   assert.deepStrictEqual(await effectB(), O.none)
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const tapIO: {
  <A, _>(f: (a: A) => IO<_>): (self: TaskOption<A>) => TaskOption<A>
  <A, _>(self: TaskOption<A>, f: (a: A) => IO<_>): TaskOption<A>
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
 * import * as TO from '@fp-tx/core/TaskOption'
 * import * as O from '@fp-tx/core/Option'
 * import * as T from '@fp-tx/core/Task'
 *
 * const effect = TO.tapIO(TO.of(1), value => T.of(value + 1))
 *
 * async function test() {
 *   assert.deepStrictEqual(await effect(), O.of(1))
 * }
 *
 * test()
 * ```
 *
 * @public
 */
export const tapTask: {
  <A, _>(f: (a: A) => Task<_>): (self: TaskOption<A>) => TaskOption<A>
  <A, _>(self: TaskOption<A>, f: (a: A) => Task<_>): TaskOption<A>
} = /*#__PURE__*/ dual(2, tapTask_(FromTask, Chain))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Alt: Alt1<URI> = {
  URI,
  map: _map,
  alt: _alt,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Zero: Zero1<URI> = {
  URI,
  zero,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const guard = /*#__PURE__*/ guard_(Zero, Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Alternative: Alternative1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  alt: _alt,
  zero,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Monad: Monad1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const MonadIO: MonadIO1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
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
export const MonadThrow: MonadThrow1<URI> = {
  ...Monad,
  throwError,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const MonadTask: MonadTask1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
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
export const Compactable: Compactable1<URI> = {
  URI,
  compact,
  separate,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Filterable: Filterable1<URI> = {
  URI,
  map: _map,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => TaskOption<B> =
  /*#__PURE__*/ fromIOK_(FromIO)

/**
 * Alias of `flatMapIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainIOK: <A, B>(f: (a: A) => IO<B>) => (first: TaskOption<A>) => TaskOption<B> = flatMapIO

/**
 * Alias of `tapIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstIOK: <A, B>(f: (a: A) => IO<B>) => (first: TaskOption<A>) => TaskOption<A> = tapIO

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Either<E, B>,
) => (...a: A) => TaskOption<B> = /*#__PURE__*/ fromEitherK_(FromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const chainEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: TaskOption<A>) => TaskOption<B> =
  /*#__PURE__*/ chainEitherK_(FromEither, Chain)

/**
 * Alias of `tapEither`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: TaskOption<A>) => TaskOption<A> = tapEither

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromTaskK: <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => T.Task<B>) => (...a: A) => TaskOption<B> =
  /*#__PURE__*/ fromTaskK_(FromTask)

/**
 * Alias of `flatMapTask`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainTaskK: <A, B>(f: (a: A) => T.Task<B>) => (first: TaskOption<A>) => TaskOption<B> = flatMapTask

/**
 * Alias of `tapTask`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstTaskK: <A, B>(f: (a: A) => T.Task<B>) => (first: TaskOption<A>) => TaskOption<A> = tapTask

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
export const Do: TaskOption<{}> = /*#__PURE__*/ of(_.emptyRecord)

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

interface TaskOptionIterable<A> {
  readonly value: TaskOption<A>
  [Symbol.iterator]: () => Generator<TaskOptionIterable<A>, A, any>
}

const do_: <MA extends TaskOptionIterable<any>, A>(
  yieldFunction: (unwrap: <A>(ma: TaskOption<A>) => TaskOptionIterable<A>) => Generator<MA, A>,
) => TaskOption<A> = ChnRec.do(Pointed, ChainRec)

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
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ApT: TaskOption<readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

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
export const traverseReadonlyNonEmptyArrayWithIndex = <A, B>(
  f: (index: number, a: A) => TaskOption<B>,
): ((as: ReadonlyNonEmptyArray<A>) => TaskOption<ReadonlyNonEmptyArray<B>>) =>
  flow(T.traverseReadonlyNonEmptyArrayWithIndex(f), T.map(O.traverseReadonlyNonEmptyArrayWithIndex(SK)))

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseReadonlyArrayWithIndex = <A, B>(
  f: (index: number, a: A) => TaskOption<B>,
): ((as: ReadonlyArray<A>) => TaskOption<ReadonlyArray<B>>) => {
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
export const traverseReadonlyNonEmptyArrayWithIndexSeq =
  <A, B>(f: (index: number, a: A) => TaskOption<B>) =>
  (as: ReadonlyNonEmptyArray<A>): TaskOption<ReadonlyNonEmptyArray<B>> =>
  () =>
    _.tail(as).reduce<Promise<Option<NonEmptyArray<B>>>>(
      (acc, a, i) =>
        acc.then(obs =>
          _.isNone(obs) ? acc : (
            f(i + 1, a)().then(ob => {
              if (_.isNone(ob)) {
                return ob
              }
              obs.value.push(ob.value)
              return obs
            })
          ),
        ),
      f(0, _.head(as))().then(O.map(_.singleton)),
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
export const traverseReadonlyArrayWithIndexSeq = <A, B>(
  f: (index: number, a: A) => TaskOption<B>,
): ((as: ReadonlyArray<A>) => TaskOption<ReadonlyArray<B>>) => {
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
export const traverseArrayWithIndex: <A, B>(
  f: (index: number, a: A) => TaskOption<B>,
) => (as: ReadonlyArray<A>) => TaskOption<ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseArray: <A, B>(
  f: (a: A) => TaskOption<B>,
) => (as: ReadonlyArray<A>) => TaskOption<ReadonlyArray<B>> = f => traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const sequenceArray: <A>(as: ReadonlyArray<TaskOption<A>>) => TaskOption<ReadonlyArray<A>> =
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
export const traverseSeqArrayWithIndex: <A, B>(
  f: (index: number, a: A) => TaskOption<B>,
) => (as: ReadonlyArray<A>) => TaskOption<ReadonlyArray<B>> = traverseReadonlyArrayWithIndexSeq

/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseSeqArray: <A, B>(
  f: (a: A) => TaskOption<B>,
) => (as: ReadonlyArray<A>) => TaskOption<ReadonlyArray<B>> = f => traverseReadonlyArrayWithIndexSeq((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const sequenceSeqArray: <A>(as: ReadonlyArray<TaskOption<A>>) => TaskOption<ReadonlyArray<A>> =
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
export const chain: <A, B>(f: (a: A) => TaskOption<B>) => (ma: TaskOption<A>) => TaskOption<B> = flatMap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirst: <A, B>(f: (a: A) => TaskOption<B>) => (first: TaskOption<A>) => TaskOption<A> = tap
