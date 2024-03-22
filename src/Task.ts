/**
 * ```ts
 * interface Task<A> {
 *   (): Promise<A>
 * }
 * ```
 *
 * `Task<A>` represents an asynchronous computation that yields a value of type `A` and **never fails**. If you want to
 * represent an asynchronous computation that may fail, please see `TaskEither`.
 *
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import { type Applicative1, getApplicativeMonoid } from './Applicative'
import {
  apFirst as apFirst_,
  type Apply1,
  apS as apS_,
  apSecond as apSecond_,
  getApplySemigroup as getApplySemigroup_,
} from './Apply'
import * as chainable from './Chain'
import * as ChnRec from './ChainRec'
import { type ChainRec1 } from './ChainRec'
import { type FromIO1, fromIOK as fromIOK_, tapIO as tapIO_ } from './FromIO'
import { type FromTask1 } from './FromTask'
import { dual, identity, pipe } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor1, let as let__ } from './Functor'
import * as _ from './internal'
import { type IO } from './IO'
import { type Monad1 } from './Monad'
import { type MonadIO1 } from './MonadIO'
import { type MonadTask1 } from './MonadTask'
import { type Monoid } from './Monoid'
import { type NonEmptyArray } from './NonEmptyArray'
import { type Pointed1 } from './Pointed'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Semigroup } from './Semigroup'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Task<A> {
  (): Promise<A>
}

// -------------------------------------------------------------------------------------
// conversions
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Conversions}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromIO: <A>(fa: IO<A>) => Task<A> = ma => () => Promise.resolve().then(ma)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Creates a task that will complete after a time delay
 *
 * @example
 *
 * ```typescript
 * import { sequenceT } from '@fp-tx/core/Apply'
 * import * as T from '@fp-tx/core/Task'
 * import { takeRight } from '@fp-tx/core/Array'
 *
 * async function test() {
 *   const log: Array<string> = []
 *   const append = (message: string): T.Task<void> =>
 *     T.fromIO(() => {
 *       log.push(message)
 *     })
 *   const fa = append('a')
 *   const fb = T.delay(20)(append('b'))
 *   const fc = T.delay(10)(append('c'))
 *   const fd = append('d')
 *   await sequenceT(T.ApplyPar)(fa, fb, fc, fd)()
 *   assert.deepStrictEqual(takeRight(2)(log), ['c', 'b'])
 * }
 *
 * test()
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function delay(millis: number): <A>(ma: Task<A>) => Task<A> {
  return ma => () =>
    new Promise(resolve => {
      setTimeout(() => {
        Promise.resolve().then(ma).then(resolve)
      }, millis)
    })
}

const _map: Functor1<URI>['map'] = (fa, f) => pipe(fa, map(f))
const _apPar: Apply1<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
const _apSeq: Apply1<URI>['ap'] = (fab, fa) => flatMap(fab, f => pipe(fa, map(f)))

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => (fa: Task<A>) => Task<B> = f => fa => () =>
  Promise.resolve().then(fa).then(f)

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ap: <A>(fa: Task<A>) => <B>(fab: Task<(a: A) => B>) => Task<B> = fa => fab => () =>
  Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(([f, a]) => f(a))

/**
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const of: <A>(a: A) => Task<A> = a => () => Promise.resolve(a)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMap: {
  <A, B>(f: (a: A) => Task<B>): (ma: Task<A>) => Task<B>
  <A, B>(ma: Task<A>, f: (a: A) => Task<B>): Task<B>
} = /*#__PURE__*/ dual(
  2,
  <A, B>(ma: Task<A>, f: (a: A) => Task<B>): Task<B> =>
    () =>
      Promise.resolve()
        .then(ma)
        .then(a => f(a)()),
)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatten: <A>(mma: Task<Task<A>>) => Task<A> = /*#__PURE__*/ flatMap(identity)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const URI = 'Task'

/**
 * @meta
 * {@since 0.1.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind<A> {
    readonly [URI]: Task<A>
  }
}

/**
 * Monoid returning the first completed task.
 *
 * Note: uses `Promise.race` internally.
 *
 * @example
 *
 * ```typescript
 * import * as T from '@fp-tx/core/Task'
 *
 * async function test() {
 *   const S = T.getRaceMonoid<string>()
 *   const fa = T.delay(20)(T.of('a'))
 *   const fb = T.delay(10)(T.of('b'))
 *   assert.deepStrictEqual(await S.concat(fa, fb)(), 'b')
 * }
 *
 * test()
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getRaceMonoid<A = never>(): Monoid<Task<A>> {
  return {
    concat: (x, y) => () => Promise.race([Promise.resolve().then(x), Promise.resolve().then(y)]),
    empty: never,
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Functor: Functor1<URI> = {
  URI,
  map: _map,
}

/**
 * Maps the value to the specified constant value.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const as: {
  <A>(a: A): <_>(self: Task<_>) => Task<A>
  <_, A>(self: Task<_>, a: A): Task<A>
} = dual(2, as_(Functor))

/**
 * Maps the value to the void constant value.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const asUnit: <_>(self: Task<_>) => Task<void> = asUnit_(Functor)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Pointed: Pointed1<URI> = {
  URI,
  of,
}

/**
 * Runs computations in parallel.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ApplyPar: Apply1<URI> = {
  URI,
  map: _map,
  ap: _apPar,
}

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apFirst = /*#__PURE__*/ apFirst_(ApplyPar)

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apSecond = /*#__PURE__*/ apSecond_(ApplyPar)

/**
 * Runs computations in parallel.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ApplicativePar: Applicative1<URI> = {
  URI,
  map: _map,
  ap: _apPar,
  of,
}

/**
 * Runs computations sequentially.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ApplicativeSeq: Applicative1<URI> = {
  URI,
  map: _map,
  ap: _apSeq,
  of,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Chain: chainable.Chain1<URI> = {
  URI,
  map: _map,
  ap: _apPar,
  chain: flatMap,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instance methods}
 * {@license MIT – Copyright (c) 2022-present Jacob Alford}
 * @public
 */
export const chainRec: ChainRec1<URI>['chainRec'] = (a, f) => async () => {
  let current = await f(a)()
  while (_.isLeft(current)) {
    current = await f(current.left)()
  }
  return current.right
}

/**
 * ChainRec for `Task`
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2022-present Jacob Alford}
 * @public
 */
export const ChainRec: ChainRec1<URI> = {
  ...Chain,
  chainRec,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Monad: Monad1<URI> = {
  URI,
  map: _map,
  of,
  ap: _apPar,
  chain: flatMap,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const MonadIO: MonadIO1<URI> = {
  URI,
  map: _map,
  of,
  ap: _apPar,
  chain: flatMap,
  fromIO,
}

/**
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromTask: <A>(fa: Task<A>) => Task<A> = identity

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const MonadTask: MonadTask1<URI> = {
  URI,
  map: _map,
  of,
  ap: _apPar,
  chain: flatMap,
  fromIO,
  fromTask,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const FromIO: FromIO1<URI> = {
  URI,
  fromIO,
}

/** @internal @packageDocumentation */
interface TaskTypeLambda extends _.TypeLambda {
  readonly type: Task<this['Target']>
}

/** @internal */
const _FlatMap: _.FlatMap<TaskTypeLambda> = {
  flatMap,
}

/** @internal */
const _FromIO: _.FromIO<TaskTypeLambda> = {
  fromIO: FromIO.fromIO,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): (self: Task<A>) => Task<B>
  <A, B>(self: Task<A>, f: (a: A) => IO<B>): Task<B>
} = _.flatMapIO(_FromIO, _FlatMap)

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Combinators}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tap: {
  <A, _>(self: Task<A>, f: (a: A) => Task<_>): Task<A>
  <A, _>(f: (a: A) => Task<_>): (self: Task<A>) => Task<A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @example
 *
 * ```typescript
 * import { pipe } from '@fp-tx/core/function'
 * import * as T from '@fp-tx/core/Task'
 * import * as Console from '@fp-tx/core/Console'
 *
 * // Will produce `Hello, fp-ts` to the stdout
 * const effect = pipe(
 *   T.of('fp-ts'),
 *   T.tapIO(value => Console.log(`Hello, ${value}`)),
 * )
 *
 * async function test() {
 *   assert.deepStrictEqual(await effect(), 'fp-ts')
 * }
 *
 * test()
 * ```
 *
 * @meta
 * {@since 0.1.0}
 * {@category Combinators}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tapIO: {
  <A, _>(f: (a: A) => IO<_>): (self: Task<A>) => Task<A>
  <A, _>(self: Task<A>, f: (a: A) => IO<_>): Task<A>
} = /*#__PURE__*/ dual(2, tapIO_(FromIO, Chain))

/**
 * @meta
 * {@since 0.1.0}
 * {@category Lifting}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => Task<B> =
  /*#__PURE__*/ fromIOK_(FromIO)

/**
 * Alias of `flatMapIO`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainIOK: <A, B>(f: (a: A) => IO<B>) => (first: Task<A>) => Task<B> = flatMapIO

/**
 * Alias of `tapIO`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirstIOK: <A, B>(f: (a: A) => IO<B>) => (first: Task<A>) => Task<A> = tapIO

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const FromTask: FromTask1<URI> = {
  URI,
  fromIO,
  fromTask,
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * A `Task` that never completes.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const never: Task<never> = () => new Promise(_ => undefined)

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Do: Task<{}> = /*#__PURE__*/ of(_.emptyRecord)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bindTo = /*#__PURE__*/ bindTo_(Functor)

const let_ = /*#__PURE__*/ let__(Functor)

export {
  /**
   * @meta
   * {@since 0.1.0}
   * {@category Do notation}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  let_ as let,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bind = /*#__PURE__*/ chainable.bind(Chain)

interface TaskIterable<A> {
  readonly value: Task<A>
  [Symbol.iterator]: () => Generator<TaskIterable<A>, A, any>
}

const do_: <MA extends TaskIterable<any>, A>(
  yieldFunction: (unwrap: <A>(ma: Task<A>) => TaskIterable<A>) => Generator<MA, A>,
) => Task<A> = ChnRec.do(Pointed, ChainRec)

export {
  /**
   * @meta
   * {@since 0.1.0}
   * {@category Do notation}
   * @public
   */
  do_ as do,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apS = /*#__PURE__*/ apS_(ApplyPar)

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ApT: Task<readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndex =
  <A, B>(f: (index: number, a: A) => Task<B>) =>
  (as: ReadonlyNonEmptyArray<A>): Task<ReadonlyNonEmptyArray<B>> =>
  () =>
    Promise.all(as.map((a, i) => Promise.resolve().then(() => f(i, a)()))) as any

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseReadonlyArrayWithIndex = <A, B>(
  f: (index: number, a: A) => Task<B>,
): ((as: ReadonlyArray<A>) => Task<ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndexSeq =
  <A, B>(f: (index: number, a: A) => Task<B>) =>
  (as: ReadonlyNonEmptyArray<A>): Task<ReadonlyNonEmptyArray<B>> =>
  () =>
    _.tail(as).reduce<Promise<NonEmptyArray<B>>>(
      (acc, a, i) =>
        acc.then(bs =>
          Promise.resolve()
            .then(f(i + 1, a))
            .then(b => {
              bs.push(b)
              return bs
            }),
        ),
      Promise.resolve()
        .then(f(0, _.head(as)))
        .then(_.singleton),
    )

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseReadonlyArrayWithIndexSeq = <A, B>(
  f: (index: number, a: A) => Task<B>,
): ((as: ReadonlyArray<A>) => Task<ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndexSeq(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Task<B>,
) => (as: ReadonlyArray<A>) => Task<ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseArray = <A, B>(f: (a: A) => Task<B>): ((as: ReadonlyArray<A>) => Task<ReadonlyArray<B>>) =>
  traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const sequenceArray: <A>(arr: ReadonlyArray<Task<A>>) => Task<ReadonlyArray<A>> =
  /*#__PURE__*/ traverseArray(identity)

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseSeqArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Task<B>,
) => (as: ReadonlyArray<A>) => Task<ReadonlyArray<B>> = traverseReadonlyArrayWithIndexSeq

/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseSeqArray = <A, B>(f: (a: A) => Task<B>): ((as: ReadonlyArray<A>) => Task<ReadonlyArray<B>>) =>
  traverseReadonlyArrayWithIndexSeq((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const sequenceSeqArray: <A>(arr: ReadonlyArray<Task<A>>) => Task<ReadonlyArray<A>> =
  /*#__PURE__*/ traverseSeqArray(identity)

// -------------------------------------------------------------------------------------
// legacy
// -------------------------------------------------------------------------------------

/**
 * Alias of `flatMap`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chain: <A, B>(f: (a: A) => Task<B>) => (ma: Task<A>) => Task<B> = flatMap

/**
 * Alias of `tap`.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirst: <A, B>(f: (a: A) => Task<B>) => (first: Task<A>) => Task<A> = tap

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `T.Functor` instead of `T.task` (where `T` is from `import T from 'fp-ts/Task'`)
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const task: Monad1<URI> & MonadTask1<URI> = {
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
 * instance, pass `T.Functor` instead of `T.taskSeq` (where `T` is from `import T from 'fp-ts/Task'`)
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const taskSeq: Monad1<URI> & MonadTask1<URI> = {
  URI,
  map: _map,
  of,
  ap: _apSeq,
  chain: flatMap,
  fromIO,
  fromTask,
}

/**
 * Use [`getApplySemigroup`](./Apply#getapplysemigroup) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getSemigroup: <A>(S: Semigroup<A>) => Semigroup<Task<A>> = /*#__PURE__*/ getApplySemigroup_(ApplySeq)

/**
 * Use [`getApplicativeMonoid`](./Applicative#getapplicativemonoid) instead.
 *
 * Lift a monoid into 'Task', the inner values are concatenated using the provided `Monoid`.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getMonoid: <A>(M: Monoid<A>) => Monoid<Task<A>> = /*#__PURE__*/ getApplicativeMonoid(ApplicativeSeq)
