/**
 * ```ts
 * interface IO<A> {
 *   (): A
 * }
 * ```
 *
 * `IO<A>` represents a non-deterministic synchronous computation that can cause side effects, yields a value of type
 * `A` and **never fails**.
 *
 * If you want to represent a synchronous computation that may fail, please see `IOEither`. If you want to represent a
 * synchronous computation that may yield nothing, please see `IOOption`.
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Applicative1, getApplicativeMonoid } from './Applicative'
import { apFirst as apFirst_, type Apply1, apS as apS_, apSecond as apSecond_, getApplySemigroup } from './Apply'
import * as chainable from './Chain'
import { type ChainRec1 } from './ChainRec'
import * as ChnRec from './ChainRec'
import { type FromIO1 } from './FromIO'
import { constant, dual, identity } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor1, let as let__ } from './Functor'
import * as _ from './internal'
import { type Monad1 } from './Monad'
import { type MonadIO1 } from './MonadIO'
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
export interface IO<A> {
  (): A
}

const _map: Monad1<URI>['map'] = (ma, f) => () => f(ma())
const _ap: Monad1<URI>['ap'] = (mab, ma) => () => mab()(ma())

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
export const map: <A, B>(f: (a: A) => B) => (fa: IO<A>) => IO<B> = f => fa => _map(fa, f)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ap: <A>(fa: IO<A>) => <B>(fab: IO<(a: A) => B>) => IO<B> = fa => fab => _ap(fab, fa)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const of: <A>(a: A) => IO<A> = constant

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMap: {
  <A, B>(f: (a: A) => IO<B>): (ma: IO<A>) => IO<B>
  <A, B>(ma: IO<A>, f: (a: A) => IO<B>): IO<B>
} = /*#__PURE__*/ dual(
  2,
  <A, B>(ma: IO<A>, f: (a: A) => IO<B>): IO<B> =>
    () =>
      f(ma())(),
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatten: <A>(mma: IO<IO<A>>) => IO<A> = /*#__PURE__*/ flatMap(identity)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'IO'

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
    readonly [URI]: IO<A>
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
  <A>(a: A): <_>(self: IO<_>) => IO<A>
  <_, A>(self: IO<_>, a: A): IO<A>
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
export const asUnit: <_>(self: IO<_>) => IO<void> = asUnit_(Functor)

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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Apply: Apply1<URI> = {
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
export const Applicative: Applicative1<URI> = {
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
  <A, _>(self: IO<A>, f: (a: A) => IO<_>): IO<A>
  <A, _>(f: (a: A) => IO<_>): (self: IO<A>) => IO<A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const fromIO: <A>(fa: IO<A>) => IO<A> = identity

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
 * Category: Instance Methods
 * @public
 */
export const chainRec: ChainRec1<URI>['chainRec'] = (a, f) => () => {
  let e = f(a)()
  while (e._tag === 'Left') {
    e = f(e.left)()
  }
  return e.right
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ChainRec: ChainRec1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
  chainRec,
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
  fromIO: identity,
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
export const Do: IO<{}> = /*#__PURE__*/ of(_.emptyRecord)

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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const apS = /*#__PURE__*/ apS_(Apply)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ApT: IO<readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

interface IOIterable<A> {
  readonly value: IO<A>
  [Symbol.iterator]: () => Generator<IOIterable<A>, A, any>
}

const do_: <MA extends IOIterable<any>, A>(
  yieldFunction: (unwrap: <A>(ma: IO<A>) => IOIterable<A>) => Generator<MA, A>,
) => IO<A> = ChnRec.do(Pointed, ChainRec)

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
export const traverseReadonlyNonEmptyArrayWithIndex =
  <A, B>(f: (index: number, a: A) => IO<B>) =>
  (as: ReadonlyNonEmptyArray<A>): IO<ReadonlyNonEmptyArray<B>> =>
  () => {
    const out: NonEmptyArray<B> = [f(0, _.head(as))()]
    for (let i = 1; i < as.length; i++) {
      out.push(f(i, as[i])())
    }
    return out
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
export const traverseReadonlyArrayWithIndex = <A, B>(
  f: (index: number, a: A) => IO<B>,
): ((as: ReadonlyArray<A>) => IO<ReadonlyArray<B>>) => {
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
export const traverseArrayWithIndex: <A, B>(
  f: (index: number, a: A) => IO<B>,
) => (as: ReadonlyArray<A>) => IO<ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseArray = <A, B>(f: (a: A) => IO<B>): ((as: ReadonlyArray<A>) => IO<ReadonlyArray<B>>) =>
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
export const sequenceArray: <A>(arr: ReadonlyArray<IO<A>>) => IO<ReadonlyArray<A>> =
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
export const chain: <A, B>(f: (a: A) => IO<B>) => (ma: IO<A>) => IO<B> = flatMap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirst: <A, B>(f: (a: A) => IO<B>) => (first: IO<A>) => IO<A> = tap

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `IO.Functor` instead of `IO.io` (where `IO` is from `import IO from 'fp-ts/IO'`)
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const io: Monad1<URI> & MonadIO1<URI> & ChainRec1<URI> = {
  URI,
  map: _map,
  of,
  ap: _ap,
  chain: flatMap,
  fromIO,
  chainRec,
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
export const getSemigroup: <A>(S: Semigroup<A>) => Semigroup<IO<A>> = /*#__PURE__*/ getApplySemigroup(Apply)

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
export const getMonoid: <A>(M: Monoid<A>) => Monoid<IO<A>> = /*#__PURE__*/ getApplicativeMonoid(Applicative)
