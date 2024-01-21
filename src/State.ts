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
import { type FromState2 } from './FromState'
import { dual, identity, pipe } from './function'
import { bindTo as bindTo_, flap as flap_, type Functor2, let as let__ } from './Functor'
import * as _ from './internal'
import { type Monad2 } from './Monad'
import { type NonEmptyArray } from './NonEmptyArray'
import { type Pointed2 } from './Pointed'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'

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
export interface State<S, A> {
  (s: S): [A, S]
}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Get the current state
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const get: <S>() => State<S, S> = () => s => [s, s]

/**
 * Set the state
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const put: <S>(s: S) => State<S, void> = s => () => [undefined, s]

/**
 * Modify the state by applying a function to the current state
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const modify: <S>(f: (s: S) => S) => State<S, void> = f => s => [undefined, f(s)]

/**
 * Get a value which depends on the current state
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const gets: <S, A>(f: (s: S) => A) => State<S, A> = f => s => [f(s), s]

/* istanbul ignore next */
const _map: Monad2<URI>['map'] = (fa, f) => pipe(fa, map(f))
/* istanbul ignore next */
const _ap: Monad2<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))

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
export const map: <A, B>(f: (a: A) => B) => <E>(fa: State<E, A>) => State<E, B> = f => fa => s1 => {
  const [a, s2] = fa(s1)
  return [f(a), s2]
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ap: <E, A>(fa: State<E, A>) => <B>(fab: State<E, (a: A) => B>) => State<E, B> = fa => fab => s1 => {
  const [f, s2] = fab(s1)
  const [a, s3] = fa(s2)
  return [f(a), s3]
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const of: <S, A>(a: A) => State<S, A> = a => s => [a, s]

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMap: {
  <A, S, B>(f: (a: A) => State<S, B>): (ma: State<S, A>) => State<S, B>
  <S, A, B>(ma: State<S, A>, f: (a: A) => State<S, B>): State<S, B>
} = /*#__PURE__*/ dual(
  2,
  <S, A, B>(ma: State<S, A>, f: (a: A) => State<S, B>): State<S, B> =>
    s1 => {
      const [a, s2] = ma(s1)
      return f(a)(s2)
    },
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatten: <E, A>(mma: State<E, State<E, A>>) => State<E, A> = /*#__PURE__*/ flatMap(identity)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'State'

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
    readonly [URI]: State<E, A>
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
export const chainRec: ChainRec2<URI>['chainRec'] = (a, f) => initialState => {
  let [current, state] = f(a)(initialState)
  while (_.isLeft(current)) {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi, no-extra-semi
    ;[current, state] = f(current.left)(state)
  }
  return [current.right, state]
}

/**
 * ChainRec for `State`
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
  <S, A, _>(self: State<S, A>, f: (a: A) => State<S, _>): State<S, A>
  <A, S, _>(f: (a: A) => State<S, _>): (self: State<S, A>) => State<S, A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const FromState: FromState2<URI> = {
  URI,
  fromState: identity,
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Run a computation in the `State` monad, discarding the final state
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const evaluate =
  <S>(s: S) =>
  <A>(ma: State<S, A>): A =>
    ma(s)[0]

/**
 * Run a computation in the `State` monad discarding the result
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const execute =
  <S>(s: S) =>
  <A>(ma: State<S, A>): S =>
    ma(s)[1]

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const bindTo = /*#__PURE__*/ bindTo_(Functor)

const let_ = /*#__PURE__*/ let__(Functor)

export {
  /**
   * @remarks
   * Added in 1.0.0
   * @public
   */
  let_ as let,
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const bind = /*#__PURE__*/ chainable.bind(Chain)

interface StateIterable<S, A> {
  readonly value: State<S, A>
  [Symbol.iterator]: () => Generator<StateIterable<S, A>, A, any>
}

const do_: <MA extends StateIterable<any, any>, A>(
  yieldFunction: (unwrap: <S, A>(ma: State<S, A>) => StateIterable<S, A>) => Generator<MA, A>,
) => State<_.UnionToIntersection<MA extends StateIterable<infer S, any> ? S : never>, A> = ChnRec.do(Pointed, ChainRec)

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
// pipeable sequence S
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apS = /*#__PURE__*/ apS_(Apply)

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
  <A, S, B>(f: (index: number, a: A) => State<S, B>) =>
  (as: ReadonlyNonEmptyArray<A>): State<S, ReadonlyNonEmptyArray<B>> =>
  s => {
    const [b, s2] = f(0, _.head(as))(s)
    const bs: NonEmptyArray<B> = [b]
    let out = s2
    for (let i = 1; i < as.length; i++) {
      const [b, s2] = f(i, as[i])(out)
      bs.push(b)
      out = s2
    }
    return [bs, out]
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
export const traverseReadonlyArrayWithIndex = <A, S, B>(
  f: (index: number, a: A) => State<S, B>,
): ((as: ReadonlyArray<A>) => State<S, ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f)
  return as => (_.isNonEmpty(as) ? g(as) : of(_.emptyReadonlyArray))
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
export const traverseArrayWithIndex: <A, S, B>(
  f: (index: number, a: A) => State<S, B>,
) => (as: ReadonlyArray<A>) => State<S, ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseArray = <A, S, B>(
  f: (a: A) => State<S, B>,
): ((as: ReadonlyArray<A>) => State<S, ReadonlyArray<B>>) => traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const sequenceArray: <S, A>(arr: ReadonlyArray<State<S, A>>) => State<S, ReadonlyArray<A>> =
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
export const chain: <S, A, B>(f: (a: A) => State<S, B>) => (ma: State<S, A>) => State<S, B> = flatMap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirst: <S, A, B>(f: (a: A) => State<S, B>) => (ma: State<S, A>) => State<S, A> = tap

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`evaluate`](#evaluate) instead
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const evalState: <S, A>(ma: State<S, A>, s: S) => A = (ma, s) => ma(s)[0]

/**
 * Use [`execute`](#execute) instead
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const execState: <S, A>(ma: State<S, A>, s: S) => S = (ma, s) => ma(s)[1]

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `S.Functor` instead of `S.state` (where `S` is from `import S from 'fp-ts/State'`)
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const state: Monad2<URI> = Monad
