/** @since 2.10.0 */
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
 * @since 2.10.0
 * @category Model
 */
export interface TaskOption<A> extends Task<Option<A>> {}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @since 2.10.0
 * @category Constructors
 */
export const some: <A>(a: A) => TaskOption<A> = /*#__PURE__*/ OT.some(T.Pointed)

/**
 * @since 2.10.0
 * @category Lifting
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
 * @since 2.10.0
 * @category Conversions
 */
export const fromOption: <A>(fa: Option<A>) => TaskOption<A> = T.of

/**
 * @since 2.10.0
 * @category Conversions
 */
export const fromEither: <A>(fa: Either<unknown, A>) => TaskOption<A> = /*#__PURE__*/ OT.fromEither(T.Pointed)

/**
 * @since 2.10.0
 * @category Conversions
 */
export const fromIO: <A>(fa: IO<A>) => TaskOption<A> = ma => fromTask(T.fromIO(ma))

/**
 * @since 2.10.0
 * @category Conversions
 */
export const fromTask: <A>(fa: Task<A>) => TaskOption<A> = /*#__PURE__*/ OT.fromF(T.Functor)

/**
 * @since 2.11.0
 * @category Conversions
 */
export const fromTaskEither: <A>(fa: TaskEither<unknown, A>) => TaskOption<A> = /*#__PURE__*/ T.map(O.fromEither)

/**
 * @since 2.10.0
 * @category Pattern matching
 */
export const match: <B, A>(onNone: () => B, onSome: (a: A) => B) => (ma: TaskOption<A>) => Task<B> =
  /*#__PURE__*/ OT.match(T.Functor)

/**
 * Less strict version of [`match`](#match).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @since 2.10.0
 * @category Pattern matching
 */
export const matchW: <B, A, C>(onNone: () => B, onSome: (a: A) => C) => (ma: TaskOption<A>) => Task<B | C> =
  match as any

/**
 * The `E` suffix (short for **E**ffect) means that the handlers return an effect (`Task`).
 *
 * @since 2.10.0
 * @category Pattern matching
 */
export const matchE: <B, A>(onNone: () => Task<B>, onSome: (a: A) => Task<B>) => (ma: TaskOption<A>) => Task<B> =
  /*#__PURE__*/ OT.matchE(T.Chain)

/**
 * Alias of [`matchE`](#matche).
 *
 * @since 2.10.0
 * @category Pattern matching
 */
export const fold = matchE

/**
 * Less strict version of [`matchE`](#matche).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @since 2.10.0
 * @category Pattern matching
 */
export const matchEW: <B, C, A>(
  onNone: () => Task<B>,
  onSome: (a: A) => Task<C>,
) => (ma: TaskOption<A>) => Task<B | C> = matchE as any

/**
 * Alias of [`matchEW`](#matchew).
 *
 * @since 2.10.0
 * @category Pattern matching
 */
export const foldW = matchEW

/**
 * @since 2.10.0
 * @category Error handling
 */
export const getOrElse: <A>(onNone: LazyArg<Task<A>>) => (fa: TaskOption<A>) => Task<A> = /*#__PURE__*/ OT.getOrElse(
  T.Monad,
)

/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * The `W` suffix (short for **W**idening) means that the handler return type will be merged.
 *
 * @since 2.10.0
 * @category Error handling
 */
export const getOrElseW: <B>(onNone: LazyArg<Task<B>>) => <A>(ma: TaskOption<A>) => Task<A | B> = getOrElse as any

/**
 * @since 2.10.0
 * @category Conversions
 */
export const fromNullable: <A>(a: A) => TaskOption<NonNullable<A>> = /*#__PURE__*/ OT.fromNullable(T.Pointed)

/**
 * Transforms a `Promise` that may reject to a `Promise` that never rejects and returns an `Option` instead.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @since 2.10.0
 * @category Interop
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
 * @since 2.10.0
 * @category Interop
 */
export const tryCatchK =
  <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Promise<B>): ((...a: A) => TaskOption<B>) =>
  (...a) =>
    tryCatch(() => f(...a))

/**
 * @since 2.10.0
 * @category Lifting
 */
export const fromNullableK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined,
) => (...a: A) => TaskOption<NonNullable<B>> = /*#__PURE__*/ OT.fromNullableK(T.Pointed)

/**
 * @since 2.10.0
 * @category Sequencing
 */
export const chainNullableK: <A, B>(
  f: (a: A) => B | null | undefined,
) => (ma: TaskOption<A>) => TaskOption<NonNullable<B>> = /*#__PURE__*/ OT.chainNullableK(T.Monad)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @since 2.10.0
 * @category Lifting
 */
export const fromOptionK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Option<B>,
) => (...a: A) => TaskOption<B> = /*#__PURE__*/ OT.fromOptionK(T.Pointed)

/**
 * @since 2.10.0
 * @category Sequencing
 */
export const chainOptionK: <A, B>(f: (a: A) => Option<B>) => (ma: TaskOption<A>) => TaskOption<B> =
  /*#__PURE__*/ OT.chainOptionK(T.Monad)

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @since 2.10.0
 * @category Mapping
 */
export const map: <A, B>(f: (a: A) => B) => (fa: TaskOption<A>) => TaskOption<B> = /*#__PURE__*/ OT.map(T.Functor)

/** @since 2.10.0 */
export const ap: <A>(fa: TaskOption<A>) => <B>(fab: TaskOption<(a: A) => B>) => TaskOption<B> = /*#__PURE__*/ OT.ap(
  T.ApplyPar,
)

/**
 * @since 2.10.0
 * @category Constructors
 */
export const of: <A>(a: A) => TaskOption<A> = some

/** @internal */
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
 * @since 2.14.0
 * @category Sequencing
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
 * @since 2.16.0
 * @category Sequencing
 */
export const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): (self: TaskOption<A>) => TaskOption<B>
  <A, B>(self: TaskOption<A>, f: (a: A) => IO<B>): TaskOption<B>
} = /*#__PURE__*/ _.flatMapIO(_FromIO, _FlatMap)

/**
 * @since 2.16.0
 * @category Sequencing
 */
export const flatMapTask: {
  <A, B>(f: (a: A) => Task<B>): (self: TaskOption<A>) => TaskOption<B>
  <A, B>(self: TaskOption<A>, f: (a: A) => Task<B>): TaskOption<B>
} = /*#__PURE__*/ _.flatMapTask(_FromTask, _FlatMap)

/**
 * @since 2.10.0
 * @category Sequencing
 */
export const flatten: <A>(mma: TaskOption<TaskOption<A>>) => TaskOption<A> = /*#__PURE__*/ flatMap(identity)

/**
 * @since 2.10.0
 * @category Error handling
 */
export const alt: <A>(second: LazyArg<TaskOption<A>>) => (first: TaskOption<A>) => TaskOption<A> = /*#__PURE__*/ OT.alt(
  T.Monad,
)

/**
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the return types will be merged.
 *
 * @since 2.10.0
 * @category Error handling
 */
export const altW: <B>(second: LazyArg<TaskOption<B>>) => <A>(first: TaskOption<A>) => TaskOption<A | B> = alt as any

/** @since 2.10.0 */
export const zero: <A>() => TaskOption<A> = /*#__PURE__*/ OT.zero(T.Pointed)

/** @since 1.0.0 */
export const throwError: MonadThrow1<URI>['throwError'] = zero

/**
 * @since 2.10.0
 * @category Constructors
 */
export const none: TaskOption<never> = /*#__PURE__*/ zero()

/**
 * @since 2.10.0
 * @category Filtering
 */
export const compact: Compactable1<URI>['compact'] = /*#__PURE__*/ compact_(T.Functor, O.Compactable)

/**
 * @since 2.10.0
 * @category Filtering
 */
export const separate: Compactable1<URI>['separate'] = /*#__PURE__*/ separate_(T.Functor, O.Compactable, O.Functor)

/**
 * @since 2.10.0
 * @category Filtering
 */
export const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (fb: TaskOption<A>) => TaskOption<B>
  <A>(predicate: Predicate<A>): <B extends A>(fb: TaskOption<B>) => TaskOption<B>
  <A>(predicate: Predicate<A>): (fa: TaskOption<A>) => TaskOption<A>
} = /*#__PURE__*/ filter_(T.Functor, O.Filterable)

/**
 * @since 2.10.0
 * @category Filtering
 */
export const filterMap: <A, B>(f: (a: A) => Option<B>) => (fga: TaskOption<A>) => TaskOption<B> =
  /*#__PURE__*/ filterMap_(T.Functor, O.Filterable)

/**
 * @since 2.10.0
 * @category Filtering
 */
export const partition: {
  <A, B extends A>(refinement: Refinement<A, B>): (fb: TaskOption<A>) => Separated<TaskOption<A>, TaskOption<B>>
  <A>(predicate: Predicate<A>): <B extends A>(fb: TaskOption<B>) => Separated<TaskOption<B>, TaskOption<B>>
  <A>(predicate: Predicate<A>): (fa: TaskOption<A>) => Separated<TaskOption<A>, TaskOption<A>>
} = /*#__PURE__*/ partition_(T.Functor, O.Filterable)

/**
 * @since 2.10.0
 * @category Filtering
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
 * @since 2.10.0
 * @category Type lambdas
 */
export const URI = 'TaskOption'

/**
 * @since 2.10.0
 * @category Type lambdas
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind<A> {
    readonly [URI]: TaskOption<A>
  }
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const Functor: Functor1<URI> = {
  URI,
  map: _map,
}

/**
 * Maps the `Some` value of this `TaskOption` to the specified constant value.
 *
 * @since 2.16.0
 * @category Mapping
 */
export const as: {
  <A>(a: A): <_>(self: TaskOption<_>) => TaskOption<A>
  <_, A>(self: TaskOption<_>, a: A): TaskOption<A>
} = dual(2, as_(Functor))

/**
 * Maps the `Some` value of this `TaskOption` to the void constant value.
 *
 * @since 2.16.0
 * @category Mapping
 */
export const asUnit: <_>(self: TaskOption<_>) => TaskOption<void> = asUnit_(Functor)

/**
 * @since 2.10.0
 * @category Mapping
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @since 2.10.0
 * @category Instances
 */
export const Pointed: Pointed1<URI> = {
  URI,
  of,
}

/**
 * Runs computations in parallel.
 *
 * @since 2.10.0
 * @category Instances
 */
export const ApplyPar: Apply1<URI> = {
  URI,
  map: _map,
  ap: _ap,
}

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @since 2.10.0
 */
export const apFirst = /*#__PURE__*/ apFirst_(ApplyPar)

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @since 2.10.0
 */
export const apSecond = /*#__PURE__*/ apSecond_(ApplyPar)

/**
 * Runs computations in parallel.
 *
 * @since 2.10.0
 * @category Instances
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
 * @since 2.10.0
 * @category Instances
 */
export const ApplySeq: Apply1<URI> = {
  URI,
  map: _map,
  ap: _apSeq,
}

/**
 * Runs computations sequentially.
 *
 * @since 2.10.0
 * @category Instances
 */
export const ApplicativeSeq: Applicative1<URI> = {
  URI,
  map: _map,
  ap: _apSeq,
  of,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const Chain: chainable.Chain1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
}

/**
 * @since 1.0.0
 * @category Instance methods
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
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChainRec1<URI> = {
  ...Chain,
  chainRec,
}

/**
 * @since 2.11.0
 * @category Instances
 */
export const FromEither: FromEither1<URI> = {
  URI,
  fromEither,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const FromIO: FromIO1<URI> = {
  URI,
  fromIO,
}

/**
 * @since 2.10.0
 * @category Instances
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
 * @since 2.15.0
 * @category Combinators
 */
export const tap: {
  <A, _>(self: TaskOption<A>, f: (a: A) => TaskOption<_>): TaskOption<A>
  <A, _>(f: (a: A) => TaskOption<_>): (self: TaskOption<A>) => TaskOption<A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.16.0
 * @category Combinators
 * @example
 *   import { pipe } from 'fp-ts/function'
 *   import * as TO from 'fp-ts/TaskOption'
 *   import * as O from 'fp-ts/Option'
 *   import * as E from 'fp-ts/Either'
 *
 *   const compute = (value: number) =>
 *     pipe(
 *       TO.of(value),
 *       TO.tapEither(value => (value > 0 ? E.right('ok') : E.left('error'))),
 *     )
 *
 *   async function test() {
 *     assert.deepStrictEqual(await compute(1)(), O.of(1))
 *     assert.deepStrictEqual(await compute(-1)(), O.none)
 *   }
 *
 *   test()
 */
export const tapEither: {
  <A, E, _>(f: (a: A) => Either<E, _>): (self: TaskOption<A>) => TaskOption<A>
  <A, E, _>(self: TaskOption<A>, f: (a: A) => Either<E, _>): TaskOption<A>
} = /*#__PURE__*/ dual(2, tapEither_(FromEither, Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.16.0
 * @category Combinators
 * @example
 *   import { pipe } from 'fp-ts/function'
 *   import * as TO from 'fp-ts/TaskOption'
 *   import * as O from 'fp-ts/Option'
 *   import * as Console from 'fp-ts/Console'
 *
 *   // Will produce `Hello, fp-ts` to the stdout
 *   const effectA = TO.tapIO(TO.of(1), value => Console.log(`Hello, ${value}`))
 *
 *   // No output to the stdout
 *   const effectB = pipe(
 *     TO.none as TO.TaskOption<string>,
 *     TO.tapIO(value => Console.log(`Hello, ${value}`)),
 *   )
 *
 *   async function test() {
 *     assert.deepStrictEqual(await effectA(), O.of(1))
 *     assert.deepStrictEqual(await effectB(), O.none)
 *   }
 *
 *   test()
 */
export const tapIO: {
  <A, _>(f: (a: A) => IO<_>): (self: TaskOption<A>) => TaskOption<A>
  <A, _>(self: TaskOption<A>, f: (a: A) => IO<_>): TaskOption<A>
} = /*#__PURE__*/ dual(2, tapIO_(FromIO, Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.16.0
 * @category Combinators
 * @example
 *   import * as TO from 'fp-ts/TaskOption'
 *   import * as O from 'fp-ts/Option'
 *   import * as T from 'fp-ts/Task'
 *
 *   const effect = TO.tapIO(TO.of(1), value => T.of(value + 1))
 *
 *   async function test() {
 *     assert.deepStrictEqual(await effect(), O.of(1))
 *   }
 *
 *   test()
 */
export const tapTask: {
  <A, _>(f: (a: A) => Task<_>): (self: TaskOption<A>) => TaskOption<A>
  <A, _>(self: TaskOption<A>, f: (a: A) => Task<_>): TaskOption<A>
} = /*#__PURE__*/ dual(2, tapTask_(FromTask, Chain))

/**
 * @since 2.10.0
 * @category Instances
 */
export const Alt: Alt1<URI> = {
  URI,
  map: _map,
  alt: _alt,
}

/**
 * @since 2.11.0
 * @category Instances
 */
export const Zero: Zero1<URI> = {
  URI,
  zero,
}

/**
 * @since 2.11.0
 * @category Do notation
 */
export const guard = /*#__PURE__*/ guard_(Zero, Pointed)

/**
 * @since 2.10.0
 * @category Instances
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
 * @since 2.10.0
 * @category Instances
 */
export const Monad: Monad1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
}

/**
 * @since 2.10.0
 * @category Instances
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
 * @since 1.0.0
 * @category Instances
 */
export const MonadThrow: MonadThrow1<URI> = {
  ...Monad,
  throwError,
}

/**
 * @since 2.10.0
 * @category Instances
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
 * @since 2.10.0
 * @category Instances
 */
export const Compactable: Compactable1<URI> = {
  URI,
  compact,
  separate,
}

/**
 * @since 2.10.0
 * @category Instances
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
 * @since 2.10.0
 * @category Lifting
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => TaskOption<B> =
  /*#__PURE__*/ fromIOK_(FromIO)

/**
 * Alias of `flatMapIO`.
 *
 * @since 2.10.0
 * @category Legacy
 */
export const chainIOK: <A, B>(f: (a: A) => IO<B>) => (first: TaskOption<A>) => TaskOption<B> = flatMapIO

/**
 * Alias of `tapIO`.
 *
 * @since 2.10.0
 * @category Legacy
 */
export const chainFirstIOK: <A, B>(f: (a: A) => IO<B>) => (first: TaskOption<A>) => TaskOption<A> = tapIO

/**
 * @since 2.12.0
 * @category Lifting
 */
export const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Either<E, B>,
) => (...a: A) => TaskOption<B> = /*#__PURE__*/ fromEitherK_(FromEither)

/**
 * @since 2.12.0
 * @category Sequencing
 */
export const chainEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: TaskOption<A>) => TaskOption<B> =
  /*#__PURE__*/ chainEitherK_(FromEither, Chain)

/**
 * Alias of `tapEither`.
 *
 * @since 2.12.0
 * @category Legacy
 */
export const chainFirstEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: TaskOption<A>) => TaskOption<A> = tapEither

/**
 * @since 2.10.0
 * @category Lifting
 */
export const fromTaskK: <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => T.Task<B>) => (...a: A) => TaskOption<B> =
  /*#__PURE__*/ fromTaskK_(FromTask)

/**
 * Alias of `flatMapTask`.
 *
 * @since 2.10.0
 * @category Legacy
 */
export const chainTaskK: <A, B>(f: (a: A) => T.Task<B>) => (first: TaskOption<A>) => TaskOption<B> = flatMapTask

/**
 * Alias of `tapTask`.
 *
 * @since 2.10.0
 * @category Legacy
 */
export const chainFirstTaskK: <A, B>(f: (a: A) => T.Task<B>) => (first: TaskOption<A>) => TaskOption<A> = tapTask

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.10.0
 * @category Do notation
 */
export const Do: TaskOption<{}> = /*#__PURE__*/ of(_.emptyRecord)

/**
 * @since 2.10.0
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
 * @since 2.10.0
 * @category Do notation
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
   * @since 1.0.0
   * @category Do notation
   */
  do_ as do,
}

/**
 * @since 2.10.0
 * @category Do notation
 */
export const apS = /*#__PURE__*/ apS_(ApplyPar)

/** @since 2.11.0 */
export const ApT: TaskOption<readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.11.0
 * @category Traversing
 */
export const traverseReadonlyNonEmptyArrayWithIndex = <A, B>(
  f: (index: number, a: A) => TaskOption<B>,
): ((as: ReadonlyNonEmptyArray<A>) => TaskOption<ReadonlyNonEmptyArray<B>>) =>
  flow(T.traverseReadonlyNonEmptyArrayWithIndex(f), T.map(O.traverseReadonlyNonEmptyArrayWithIndex(SK)))

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.11.0
 * @category Traversing
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
 * @since 2.11.0
 * @category Traversing
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
 * @since 2.11.0
 * @category Traversing
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
 * @since 2.10.0
 * @category Traversing
 */
export const traverseArrayWithIndex: <A, B>(
  f: (index: number, a: A) => TaskOption<B>,
) => (as: ReadonlyArray<A>) => TaskOption<ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.10.0
 * @category Traversing
 */
export const traverseArray: <A, B>(
  f: (a: A) => TaskOption<B>,
) => (as: ReadonlyArray<A>) => TaskOption<ReadonlyArray<B>> = f => traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.10.0
 * @category Traversing
 */
export const sequenceArray: <A>(as: ReadonlyArray<TaskOption<A>>) => TaskOption<ReadonlyArray<A>> =
  /*#__PURE__*/ traverseArray(identity)

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.10.0
 * @category Traversing
 */
export const traverseSeqArrayWithIndex: <A, B>(
  f: (index: number, a: A) => TaskOption<B>,
) => (as: ReadonlyArray<A>) => TaskOption<ReadonlyArray<B>> = traverseReadonlyArrayWithIndexSeq

/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @since 2.10.0
 * @category Traversing
 */
export const traverseSeqArray: <A, B>(
  f: (a: A) => TaskOption<B>,
) => (as: ReadonlyArray<A>) => TaskOption<ReadonlyArray<B>> = f => traverseReadonlyArrayWithIndexSeq((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @since 2.10.0
 * @category Traversing
 */
export const sequenceSeqArray: <A>(as: ReadonlyArray<TaskOption<A>>) => TaskOption<ReadonlyArray<A>> =
  /*#__PURE__*/ traverseSeqArray(identity)

// -------------------------------------------------------------------------------------
// legacy
// -------------------------------------------------------------------------------------

/**
 * Alias of `flatMap`.
 *
 * @since 2.10.0
 * @category Legacy
 */
export const chain: <A, B>(f: (a: A) => TaskOption<B>) => (ma: TaskOption<A>) => TaskOption<B> = flatMap

/**
 * Alias of `tap`.
 *
 * @since 2.10.0
 * @category Legacy
 */
export const chainFirst: <A, B>(f: (a: A) => TaskOption<B>) => (first: TaskOption<A>) => TaskOption<A> = tap
