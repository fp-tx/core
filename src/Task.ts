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
 * @since 2.0.0
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
 * @since 2.0.0
 * @category Model
 */
export interface Task<A> {
  (): Promise<A>
}

// -------------------------------------------------------------------------------------
// conversions
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Conversions
 */
export const fromIO: <A>(fa: IO<A>) => Task<A> = ma => () => Promise.resolve().then(ma)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Creates a task that will complete after a time delay
 *
 * @since 2.0.0
 * @example
 *   import { sequenceT } from 'fp-ts/Apply'
 *   import * as T from 'fp-ts/Task'
 *   import { takeRight } from 'fp-ts/Array'
 *
 *   async function test() {
 *     const log: Array<string> = []
 *     const append = (message: string): T.Task<void> =>
 *       T.fromIO(() => {
 *         log.push(message)
 *       })
 *     const fa = append('a')
 *     const fb = T.delay(20)(append('b'))
 *     const fc = T.delay(10)(append('c'))
 *     const fd = append('d')
 *     await sequenceT(T.ApplyPar)(fa, fb, fc, fd)()
 *     assert.deepStrictEqual(takeRight(2)(log), ['c', 'b'])
 *   }
 *
 *   test()
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
 * @since 2.0.0
 * @category Mapping
 */
export const map: <A, B>(f: (a: A) => B) => (fa: Task<A>) => Task<B> = f => fa => () =>
  Promise.resolve().then(fa).then(f)

/** @since 2.0.0 */
export const ap: <A>(fa: Task<A>) => <B>(fab: Task<(a: A) => B>) => Task<B> = fa => fab => () =>
  Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(([f, a]) => f(a))

/**
 * @since 2.0.0
 * @category Constructors
 */
export const of: <A>(a: A) => Task<A> = a => () => Promise.resolve(a)

/**
 * @since 2.14.0
 * @category Sequencing
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
 * @since 2.0.0
 * @category Sequencing
 */
export const flatten: <A>(mma: Task<Task<A>>) => Task<A> = /*#__PURE__*/ flatMap(identity)

/**
 * @since 2.0.0
 * @category Type lambdas
 */
export const URI = 'Task'

/**
 * @since 2.0.0
 * @category Type lambdas
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
 * @since 2.0.0
 * @category Instances
 * @example
 *   import * as T from 'fp-ts/Task'
 *
 *   async function test() {
 *     const S = T.getRaceMonoid<string>()
 *     const fa = T.delay(20)(T.of('a'))
 *     const fb = T.delay(10)(T.of('b'))
 *     assert.deepStrictEqual(await S.concat(fa, fb)(), 'b')
 *   }
 *
 *   test()
 */
export function getRaceMonoid<A = never>(): Monoid<Task<A>> {
  return {
    concat: (x, y) => () => Promise.race([Promise.resolve().then(x), Promise.resolve().then(y)]),
    empty: never,
  }
}

/**
 * @since 2.7.0
 * @category Instances
 */
export const Functor: Functor1<URI> = {
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
  <A>(a: A): <_>(self: Task<_>) => Task<A>
  <_, A>(self: Task<_>, a: A): Task<A>
} = dual(2, as_(Functor))

/**
 * Maps the value to the void constant value.
 *
 * @since 2.16.0
 * @category Mapping
 */
export const asUnit: <_>(self: Task<_>) => Task<void> = asUnit_(Functor)

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
  ap: _apPar,
}

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @since 2.0.0
 */
export const apFirst = /*#__PURE__*/ apFirst_(ApplyPar)

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @since 2.0.0
 */
export const apSecond = /*#__PURE__*/ apSecond_(ApplyPar)

/**
 * Runs computations in parallel.
 *
 * @since 2.7.0
 * @category Instances
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
 * @since 2.7.0
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
  ap: _apPar,
  chain: flatMap,
}

/**
 * @since 2.10.0
 * @category Instances
 */
export const Monad: Monad1<URI> = {
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
export const MonadIO: MonadIO1<URI> = {
  URI,
  map: _map,
  of,
  ap: _apPar,
  chain: flatMap,
  fromIO,
}

/**
 * @deprecated
 * @since 2.7.0
 * @category Zone of death
 */
export const fromTask: <A>(fa: Task<A>) => Task<A> = identity

/**
 * @since 2.10.0
 * @category Instances
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
 * @since 2.10.0
 * @category Instances
 */
export const FromIO: FromIO1<URI> = {
  URI,
  fromIO,
}

/** @internal */
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
 * @since 2.16.0
 * @category Sequencing
 */
export const flatMapIO: {
  <A, B>(f: (a: A) => IO<B>): (self: Task<A>) => Task<B>
  <A, B>(self: Task<A>, f: (a: A) => IO<B>): Task<B>
} = _.flatMapIO(_FromIO, _FlatMap)

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.15.0
 * @category Combinators
 */
export const tap: {
  <A, _>(self: Task<A>, f: (a: A) => Task<_>): Task<A>
  <A, _>(f: (a: A) => Task<_>): (self: Task<A>) => Task<A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.16.0
 * @category Combinators
 * @example
 *   import { pipe } from 'fp-ts/function'
 *   import * as T from 'fp-ts/Task'
 *   import * as Console from 'fp-ts/Console'
 *
 *   // Will produce `Hello, fp-ts` to the stdout
 *   const effect = pipe(
 *     T.of('fp-ts'),
 *     T.tapIO(value => Console.log(`Hello, ${value}`)),
 *   )
 *
 *   async function test() {
 *     assert.deepStrictEqual(await effect(), 'fp-ts')
 *   }
 *
 *   test()
 */
export const tapIO: {
  <A, _>(f: (a: A) => IO<_>): (self: Task<A>) => Task<A>
  <A, _>(self: Task<A>, f: (a: A) => IO<_>): Task<A>
} = /*#__PURE__*/ dual(2, tapIO_(FromIO, Chain))

/**
 * @since 2.4.0
 * @category Lifting
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => Task<B> =
  /*#__PURE__*/ fromIOK_(FromIO)

/**
 * Alias of `flatMapIO`.
 *
 * @since 2.4.0
 * @category Legacy
 */
export const chainIOK: <A, B>(f: (a: A) => IO<B>) => (first: Task<A>) => Task<B> = flatMapIO

/**
 * Alias of `tapIO`.
 *
 * @since 2.10.0
 * @category Legacy
 */
export const chainFirstIOK: <A, B>(f: (a: A) => IO<B>) => (first: Task<A>) => Task<A> = tapIO

/**
 * @since 2.10.0
 * @category Instances
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
 * @since 2.0.0
 */
export const never: Task<never> = () => new Promise(_ => undefined)

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 * @category Do notation
 */
export const Do: Task<{}> = /*#__PURE__*/ of(_.emptyRecord)

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
 * @since 2.8.0
 * @category Do notation
 */
export const apS = /*#__PURE__*/ apS_(ApplyPar)

/** @since 2.11.0 */
export const ApT: Task<readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.11.0
 * @category Traversing
 */
export const traverseReadonlyNonEmptyArrayWithIndex =
  <A, B>(f: (index: number, a: A) => Task<B>) =>
  (as: ReadonlyNonEmptyArray<A>): Task<ReadonlyNonEmptyArray<B>> =>
  () =>
    Promise.all(as.map((a, i) => Promise.resolve().then(() => f(i, a)()))) as any

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.11.0
 * @category Traversing
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
 * @since 2.11.0
 * @category Traversing
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
 * @since 2.11.0
 * @category Traversing
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
 * @since 2.9.0
 * @category Traversing
 */
export const traverseArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Task<B>,
) => (as: ReadonlyArray<A>) => Task<ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const traverseArray = <A, B>(f: (a: A) => Task<B>): ((as: ReadonlyArray<A>) => Task<ReadonlyArray<B>>) =>
  traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const sequenceArray: <A>(arr: ReadonlyArray<Task<A>>) => Task<ReadonlyArray<A>> =
  /*#__PURE__*/ traverseArray(identity)

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const traverseSeqArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Task<B>,
) => (as: ReadonlyArray<A>) => Task<ReadonlyArray<B>> = traverseReadonlyArrayWithIndexSeq

/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const traverseSeqArray = <A, B>(f: (a: A) => Task<B>): ((as: ReadonlyArray<A>) => Task<ReadonlyArray<B>>) =>
  traverseReadonlyArrayWithIndexSeq((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(ApplicativeSeq)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const sequenceSeqArray: <A>(arr: ReadonlyArray<Task<A>>) => Task<ReadonlyArray<A>> =
  /*#__PURE__*/ traverseSeqArray(identity)

// -------------------------------------------------------------------------------------
// legacy
// -------------------------------------------------------------------------------------

/**
 * Alias of `flatMap`.
 *
 * @since 2.0.0
 * @category Legacy
 */
export const chain: <A, B>(f: (a: A) => Task<B>) => (ma: Task<A>) => Task<B> = flatMap

/**
 * Alias of `tap`.
 *
 * @since 2.0.0
 * @category Legacy
 */
export const chainFirst: <A, B>(f: (a: A) => Task<B>) => (first: Task<A>) => Task<A> = tap

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `T.Functor` instead of `T.task` (where `T` is from `import T from 'fp-ts/Task'`)
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
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
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
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
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export const getSemigroup: <A>(S: Semigroup<A>) => Semigroup<Task<A>> = /*#__PURE__*/ getApplySemigroup_(ApplySeq)

/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * Lift a monoid into 'Task', the inner values are concatenated using the provided `Monoid`.
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export const getMonoid: <A>(M: Monoid<A>) => Monoid<Task<A>> = /*#__PURE__*/ getApplicativeMonoid(ApplicativeSeq)
