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
 * @remarks
 * Added in 1.0.0
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface Task<A> {
  (): Promise<A>
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
export const fromIO: <A>(fa: IO<A>) => Task<A> = ma => () => Promise.resolve().then(ma)

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Creates a task that will complete after a time delay
 *
 * @remarks
 * Added in 1.0.0
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => (fa: Task<A>) => Task<B> = f => fa => () =>
  Promise.resolve().then(fa).then(f)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ap: <A>(fa: Task<A>) => <B>(fab: Task<(a: A) => B>) => Task<B> = fa => fab => () =>
  Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(([f, a]) => f(a))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const of: <A>(a: A) => Task<A> = a => () => Promise.resolve(a)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatten: <A>(mma: Task<Task<A>>) => Task<A> = /*#__PURE__*/ flatMap(identity)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'Task'

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
    readonly [URI]: Task<A>
  }
}

/**
 * Monoid returning the first completed task.
 *
 * Note: uses `Promise.race` internally.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
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
 * @public
 */
export function getRaceMonoid<A = never>(): Monoid<Task<A>> {
  return {
    concat: (x, y) => () => Promise.race([Promise.resolve().then(x), Promise.resolve().then(y)]),
    empty: never,
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
 * Maps the value to the specified constant value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const as: {
  <A>(a: A): <_>(self: Task<_>) => Task<A>
  <_, A>(self: Task<_>, a: A): Task<A>
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
export const asUnit: <_>(self: Task<_>) => Task<void> = asUnit_(Functor)

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
export const Monad: Monad1<URI> = {
  URI,
  map: _map,
  of,
  ap: _apPar,
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
  of,
  ap: _apPar,
  chain: flatMap,
  fromIO,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const fromTask: <A>(fa: Task<A>) => Task<A> = identity

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
  of,
  ap: _apPar,
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Combinators
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Combinators
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
 * @public
 */
export const tapIO: {
  <A, _>(f: (a: A) => IO<_>): (self: Task<A>) => Task<A>
  <A, _>(self: Task<A>, f: (a: A) => IO<_>): Task<A>
} = /*#__PURE__*/ dual(2, tapIO_(FromIO, Chain))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromIOK: <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IO<B>) => (...a: A) => Task<B> =
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
export const chainIOK: <A, B>(f: (a: A) => IO<B>) => (first: Task<A>) => Task<B> = flatMapIO

/**
 * Alias of `tapIO`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstIOK: <A, B>(f: (a: A) => IO<B>) => (first: Task<A>) => Task<A> = tapIO

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

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * A `Task` that never completes.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const never: Task<never> = () => new Promise(_ => undefined)

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
export const Do: Task<{}> = /*#__PURE__*/ of(_.emptyRecord)

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

interface TaskIterable<A> {
  readonly value: Task<A>
  [Symbol.iterator]: () => Generator<TaskIterable<A>, A, any>
}

const do_: <MA extends TaskIterable<any>, A>(
  yieldFunction: (unwrap: <A>(ma: Task<A>) => TaskIterable<A>) => Generator<MA, A>,
) => Task<A> = ChnRec.do(Pointed, ChainRec)

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
export const ApT: Task<readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

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
export const traverseReadonlyNonEmptyArrayWithIndex =
  <A, B>(f: (index: number, a: A) => Task<B>) =>
  (as: ReadonlyNonEmptyArray<A>): Task<ReadonlyNonEmptyArray<B>> =>
  () =>
    Promise.all(as.map((a, i) => Promise.resolve().then(() => f(i, a)()))) as any

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
  f: (index: number, a: A) => Task<B>,
): ((as: ReadonlyArray<A>) => Task<ReadonlyArray<B>>) => {
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Task<B>,
) => (as: ReadonlyArray<A>) => Task<ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseArray = <A, B>(f: (a: A) => Task<B>): ((as: ReadonlyArray<A>) => Task<ReadonlyArray<B>>) =>
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
export const sequenceArray: <A>(arr: ReadonlyArray<Task<A>>) => Task<ReadonlyArray<A>> =
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
  f: (index: number, a: A) => Task<B>,
) => (as: ReadonlyArray<A>) => Task<ReadonlyArray<B>> = traverseReadonlyArrayWithIndexSeq

/**
 * Equivalent to `ReadonlyArray#traverse(ApplicativeSeq)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseSeqArray = <A, B>(f: (a: A) => Task<B>): ((as: ReadonlyArray<A>) => Task<ReadonlyArray<B>>) =>
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
export const sequenceSeqArray: <A>(arr: ReadonlyArray<Task<A>>) => Task<ReadonlyArray<A>> =
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
export const chain: <A, B>(f: (a: A) => Task<B>) => (ma: Task<A>) => Task<B> = flatMap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
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
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const getSemigroup: <A>(S: Semigroup<A>) => Semigroup<Task<A>> = /*#__PURE__*/ getApplySemigroup_(ApplySeq)

/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * Lift a monoid into 'Task', the inner values are concatenated using the provided `Monoid`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const getMonoid: <A>(M: Monoid<A>) => Monoid<Task<A>> = /*#__PURE__*/ getApplicativeMonoid(ApplicativeSeq)
