/**
 * A data structure providing "inclusive-or" as opposed to `Either`'s "exclusive-or".
 *
 * If you interpret `Either<E, A>` as suggesting the computation may either fail or succeed (exclusively), then
 * `These<E, A>` may fail, succeed, or do both at the same time.
 *
 * There are a few ways to interpret the both case:
 *
 * - You can think of a computation that has a non-fatal error.
 * - You can think of a computation that went as far as it could before erroring.
 * - You can think of a computation that keeps track of errors as it completes.
 *
 * Another way you can think of `These<E, A>` is saying that we want to handle `E` kind of data, `A` kind of data, or
 * both `E` and `A` kind of data at the same time. This is particularly useful when it comes to displaying UI's.
 *
 * (description adapted from https://package.elm-lang.org/packages/joneshf/elm-these)
 *
 * Adapted from https://github.com/purescript-contrib/purescript-these
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Applicative, type Applicative2C } from './Applicative'
import { type Apply2C } from './Apply'
import { type Bifunctor2 } from './Bifunctor'
import { type Chain2C } from './Chain'
import { type Either, type Left, type Right } from './Either'
import { type Eq, fromEquals } from './Eq'
import { type Foldable2 } from './Foldable'
import {
  type FromEither2,
  fromOption as fromOption_,
  fromOptionK as fromOptionK_,
  fromPredicate as fromPredicate_,
} from './FromEither'
import { type FromThese2 } from './FromThese'
import { identity, type LazyArg, pipe } from './function'
import { flap as flap_, type Functor2 } from './Functor'
import { type HKT } from './HKT'
import * as _ from './internal'
import { type Monad2C } from './Monad'
import { type MonadThrow2C } from './MonadThrow'
import { type Monoid } from './Monoid'
import { type NonEmptyArray } from './NonEmptyArray'
import { type Option } from './Option'
import { type Pointed2 } from './Pointed'
import { type Predicate } from './Predicate'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import { type Show } from './Show'
import { type PipeableTraverse2, type Traversable2 } from './Traversable'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface Both<E, A> {
  readonly _tag: 'Both'
  readonly left: E
  readonly right: A
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export type These<E, A> = Either<E, A> | Both<E, A>

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * Returns `true` if the these is an instance of `Left`, `false` otherwise
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Refinements
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const isLeft = <E>(fa: These<E, unknown>): fa is Left<E> => fa._tag === 'Left'

/**
 * Returns `true` if the these is an instance of `Right`, `false` otherwise
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Refinements
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const isRight = <A>(fa: These<unknown, A>): fa is Right<A> => fa._tag === 'Right'

/**
 * Returns `true` if the these is an instance of `Both`, `false` otherwise
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Refinements
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function isBoth<E, A>(fa: These<E, A>): fa is Both<E, A> {
  return fa._tag === 'Both'
}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function left<E = never, A = never>(left: E): These<E, A> {
  return { _tag: 'Left', left }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function right<E = never, A = never>(right: A): These<E, A> {
  return { _tag: 'Right', right }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function both<E, A>(left: E, right: A): These<E, A> {
  return { _tag: 'Both', left, right }
}

/**
 * Less strict version of [`match`](#match).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const matchW =
  <E, B, A, C, D>(onLeft: (e: E) => B, onRight: (a: A) => C, onBoth: (e: E, a: A) => D) =>
  (fa: These<E, A>): B | C | D => {
    switch (fa._tag) {
      case 'Left':
        return onLeft(fa.left)
      case 'Right':
        return onRight(fa.right)
      case 'Both':
        return onBoth(fa.left, fa.right)
    }
  }

/**
 * Alias of [`matchW`](#matchw).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const foldW = matchW

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const match: <E, A, B>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B,
  onBoth: (e: E, a: A) => B,
) => (fa: These<E, A>) => B = matchW

/**
 * Alias of [`match`](#match).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fold = match

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const swap: <E, A>(fa: These<E, A>) => These<A, E> = match(right, left, (e, a) => both(a, e))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function getShow<E, A>(SE: Show<E>, SA: Show<A>): Show<These<E, A>> {
  return {
    show: match(
      l => `left(${SE.show(l)})`,
      a => `right(${SA.show(a)})`,
      (l, a) => `both(${SE.show(l)}, ${SA.show(a)})`,
    ),
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function getEq<E, A>(EE: Eq<E>, EA: Eq<A>): Eq<These<E, A>> {
  return fromEquals((x, y) =>
    isLeft(x) ? isLeft(y) && EE.equals(x.left, y.left)
    : isRight(x) ? isRight(y) && EA.equals(x.right, y.right)
    : isBoth(y) && EE.equals(x.left, y.left) && EA.equals(x.right, y.right),
  )
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function getSemigroup<E, A>(SE: Semigroup<E>, SA: Semigroup<A>): Semigroup<These<E, A>> {
  return {
    concat: (x, y) =>
      isLeft(x) ?
        isLeft(y) ? left(SE.concat(x.left, y.left))
        : isRight(y) ? both(x.left, y.right)
        : both(SE.concat(x.left, y.left), y.right)
      : isRight(x) ?
        isLeft(y) ? both(y.left, x.right)
        : isRight(y) ? right(SA.concat(x.right, y.right))
        : both(y.left, SA.concat(x.right, y.right))
      : isLeft(y) ? both(SE.concat(x.left, y.left), x.right)
      : isRight(y) ? both(x.left, SA.concat(x.right, y.right))
      : both(SE.concat(x.left, y.left), SA.concat(x.right, y.right)),
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const getApply = <E>(S: Semigroup<E>): Apply2C<URI, E> => ({
  URI,
  _E: undefined as any,
  map: _map,
  ap: (fab, fa) =>
    isLeft(fab) ?
      isLeft(fa) ? left(S.concat(fab.left, fa.left))
      : isRight(fa) ? left(fab.left)
      : left(S.concat(fab.left, fa.left))
    : isRight(fab) ?
      isLeft(fa) ? left(fa.left)
      : isRight(fa) ? right(fab.right(fa.right))
      : both(fa.left, fab.right(fa.right))
    : isLeft(fa) ? left(S.concat(fab.left, fa.left))
    : isRight(fa) ? both(fab.left, fab.right(fa.right))
    : both(S.concat(fab.left, fa.left), fab.right(fa.right)),
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function getApplicative<E>(S: Semigroup<E>): Applicative2C<URI, E> {
  const A = getApply(S)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: A.ap,
    of,
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function getChain<E>(S: Semigroup<E>): Chain2C<URI, E> {
  const A = getApply(S)

  const chain = <A, B>(ma: These<E, A>, f: (a: A) => These<E, B>): These<E, B> => {
    if (isLeft(ma)) {
      return ma
    }
    if (isRight(ma)) {
      return f(ma.right)
    }
    const fb = f(ma.right)
    return (
      isLeft(fb) ? left(S.concat(ma.left, fb.left))
      : isRight(fb) ? both(ma.left, fb.right)
      : both(S.concat(ma.left, fb.left), fb.right)
    )
  }

  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: A.ap,
    chain,
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export function getMonad<E>(S: Semigroup<E>): Monad2C<URI, E> & MonadThrow2C<URI, E> {
  const C = getChain(S)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    of,
    ap: C.ap,
    chain: C.chain,
    throwError: left,
  }
}

/**
 * Returns an `E` value if possible
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { getLeft, left, right, both } from '@fp-tx/core/These'
 * import { none, some } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(getLeft(left('a')), some('a'))
 * assert.deepStrictEqual(getLeft(right(1)), none)
 * assert.deepStrictEqual(getLeft(both('a', 1)), some('a'))
 * ```
 *
 * @public
 */
export function getLeft<E, A>(fa: These<E, A>): Option<E> {
  return (
    isLeft(fa) ? _.some(fa.left)
    : isRight(fa) ? _.none
    : _.some(fa.left)
  )
}

/**
 * Returns an `A` value if possible
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { getRight, left, right, both } from '@fp-tx/core/These'
 * import { none, some } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(getRight(left('a')), none)
 * assert.deepStrictEqual(getRight(right(1)), some(1))
 * assert.deepStrictEqual(getRight(both('a', 1)), some(1))
 * ```
 *
 * @public
 */
export function getRight<E, A>(fa: These<E, A>): Option<A> {
  return (
    isLeft(fa) ? _.none
    : isRight(fa) ? _.some(fa.right)
    : _.some(fa.right)
  )
}

// TODO: make lazy in v3
/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { leftOrBoth, left, both } from '@fp-tx/core/These'
 * import { none, some } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(leftOrBoth('a')(none), left('a'))
 * assert.deepStrictEqual(leftOrBoth('a')(some(1)), both('a', 1))
 * ```
 *
 * @public
 */
export function leftOrBoth<E>(e: E): <A>(ma: Option<A>) => These<E, A> {
  return ma => (_.isNone(ma) ? left(e) : both(e, ma.value))
}

// TODO: make lazy in v3
/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { rightOrBoth, right, both } from '@fp-tx/core/These'
 * import { none, some } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(rightOrBoth(1)(none), right(1))
 * assert.deepStrictEqual(rightOrBoth(1)(some('a')), both('a', 1))
 * ```
 *
 * @public
 */
export function rightOrBoth<A>(a: A): <E>(me: Option<E>) => These<E, A> {
  return me => (_.isNone(me) ? right(a) : both(me.value, a))
}

/**
 * Returns the `E` value if and only if the value is constructed with `Left`
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { getLeftOnly, left, right, both } from '@fp-tx/core/These'
 * import { none, some } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(getLeftOnly(left('a')), some('a'))
 * assert.deepStrictEqual(getLeftOnly(right(1)), none)
 * assert.deepStrictEqual(getLeftOnly(both('a', 1)), none)
 * ```
 *
 * @public
 */
export function getLeftOnly<E, A>(fa: These<E, A>): Option<E> {
  return isLeft(fa) ? _.some(fa.left) : _.none
}

/**
 * Returns the `A` value if and only if the value is constructed with `Right`
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { getRightOnly, left, right, both } from '@fp-tx/core/These'
 * import { none, some } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(getRightOnly(left('a')), none)
 * assert.deepStrictEqual(getRightOnly(right(1)), some(1))
 * assert.deepStrictEqual(getRightOnly(both('a', 1)), none)
 * ```
 *
 * @public
 */
export function getRightOnly<E, A>(fa: These<E, A>): Option<A> {
  return isRight(fa) ? _.some(fa.right) : _.none
}

/**
 * Takes a pair of `Option`s and attempts to create a `These` from them
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { fromOptions, left, right, both } from '@fp-tx/core/These'
 * import { none, some } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(fromOptions(none, none), none)
 * assert.deepStrictEqual(fromOptions(some('a'), none), some(left('a')))
 * assert.deepStrictEqual(fromOptions(none, some(1)), some(right(1)))
 * assert.deepStrictEqual(fromOptions(some('a'), some(1)), some(both('a', 1)))
 * ```
 *
 * @public
 */
export const fromOptions = <E, A>(fe: Option<E>, fa: Option<A>): Option<These<E, A>> =>
  _.isNone(fe) ?
    _.isNone(fa) ?
      _.none
    : _.some(right(fa.value))
  : _.isNone(fa) ? _.some(left(fe.value))
  : _.some(both(fe.value, fa.value))

const _map: Functor2<URI>['map'] = (fa, f) => pipe(fa, map(f))
/* istanbul ignore next */
const _bimap: Bifunctor2<URI>['bimap'] = (fa, f, g) => pipe(fa, bimap(f, g))
/* istanbul ignore next */
const _mapLeft: Bifunctor2<URI>['mapLeft'] = (fa, f) => pipe(fa, mapLeft(f))
/* istanbul ignore next */
const _reduce: Foldable2<URI>['reduce'] = (fa, b, f) => pipe(fa, reduce(b, f))
/* istanbul ignore next */
const _foldMap: Foldable2<URI>['foldMap'] = M => {
  const foldMapM = foldMap(M)
  return (fa, f) => pipe(fa, foldMapM(f))
}
/* istanbul ignore next */
const _reduceRight: Foldable2<URI>['reduceRight'] = (fa, b, f) => pipe(fa, reduceRight(b, f))
/* istanbul ignore next */
const _traverse = <F>(
  F: Applicative<F>,
): (<E, A, B>(ta: These<E, A>, f: (a: A) => HKT<F, B>) => HKT<F, These<E, B>>) => {
  const traverseF = traverse(F)
  return (ta, f) => pipe(ta, traverseF(f))
}

/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: These<E, A>) => These<G, B> = (f, g) => fa =>
  isLeft(fa) ? left(f(fa.left))
  : isRight(fa) ? right(g(fa.right))
  : both(f(fa.left), g(fa.right))

/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: These<E, A>) => These<G, A> = f => fa =>
  isLeft(fa) ? left(f(fa.left))
  : isBoth(fa) ? both(f(fa.left), fa.right)
  : fa

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => <E>(fa: These<E, A>) => These<E, B> = f => fa =>
  isLeft(fa) ? fa
  : isRight(fa) ? right(f(fa.right))
  : both(fa.left, f(fa.right))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: These<E, A>) => B = (b, f) => fa =>
  isLeft(fa) ? b : f(b, fa.right)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: These<E, A>) => M = M => f => fa =>
  isLeft(fa) ? M.empty : f(fa.right)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: These<E, A>) => B = (b, f) => fa =>
  isLeft(fa) ? b : f(fa.right, b)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const traverse: PipeableTraverse2<URI> =
  <F>(F: Applicative<F>): (<A, B>(f: (a: A) => HKT<F, B>) => <E>(ta: These<E, A>) => HKT<F, These<E, B>>) =>
  f =>
  ta =>
    isLeft(ta) ? F.of(ta)
    : isRight(ta) ? F.map(f(ta.right), right)
    : F.map(f(ta.right), b => both(ta.left, b))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const sequence: Traversable2<URI>['sequence'] =
  <F>(F: Applicative<F>) =>
  <E, A>(ta: These<E, HKT<F, A>>): HKT<F, These<E, A>> => {
    return (
      isLeft(ta) ? F.of(ta)
      : isRight(ta) ? F.map(ta.right, right)
      : F.map(ta.right, b => both(ta.left, b))
    )
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const of: <E = never, A = never>(right: A) => These<E, A> = right

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const URI = 'These'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: These<E, A>
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
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
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
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
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const Bifunctor: Bifunctor2<URI> = {
  URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const FromThese: FromThese2<URI> = {
  URI,
  fromThese: identity,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const Foldable: Foldable2<URI> = {
  URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const Traversable: Traversable2<URI> = {
  URI,
  map: _map,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const FromEither: FromEither2<URI> = {
  URI,
  fromEither: identity,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromPredicate: {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => These<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => These<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => These<E, A>
} = /*#__PURE__*/ fromPredicate_(FromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromOption: <E>(onNone: LazyArg<E>) => <A>(fa: Option<A>) => These<E, A> =
  /*#__PURE__*/ fromOption_(FromEither)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromOptionK: <E>(
  onNone: LazyArg<E>,
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => These<E, B> =
  /*#__PURE__*/ fromOptionK_(FromEither)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const elem =
  <A>(E: Eq<A>) =>
  (a: A) =>
  <E>(ma: These<E, A>): boolean =>
    isLeft(ma) ? false : E.equals(a, ma.right)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const exists =
  <A>(predicate: Predicate<A>) =>
  (ma: These<unknown, A>): boolean =>
    isLeft(ma) ? false : predicate(ma.right)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { toTuple2, left, right, both } from '@fp-tx/core/These'
 *
 * assert.deepStrictEqual(
 *   toTuple2(
 *     () => 'a',
 *     () => 1,
 *   )(left('b')),
 *   ['b', 1],
 * )
 * assert.deepStrictEqual(
 *   toTuple2(
 *     () => 'a',
 *     () => 1,
 *   )(right(2)),
 *   ['a', 2],
 * )
 * assert.deepStrictEqual(
 *   toTuple2(
 *     () => 'a',
 *     () => 1,
 *   )(both('b', 2)),
 *   ['b', 2],
 * )
 * ```
 *
 * @public
 */
export const toTuple2 =
  <E, A>(e: LazyArg<E>, a: LazyArg<A>) =>
  (fa: These<E, A>): readonly [E, A] =>
    isLeft(fa) ? [fa.left, a()]
    : isRight(fa) ? [e(), fa.right]
    : [fa.left, fa.right]

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`toTuple2`](#totuple2) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export const toTuple = <E, A>(e: E, a: A): ((fa: These<E, A>) => [E, A]) =>
  toTuple2(
    () => e,
    () => a,
  ) as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const ApT: These<never, readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(getApplicative(S))`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const traverseReadonlyNonEmptyArrayWithIndex =
  <E>(S: Semigroup<E>) =>
  <A, B>(f: (index: number, a: A) => These<E, B>) =>
  (as: ReadonlyNonEmptyArray<A>): These<E, ReadonlyNonEmptyArray<B>> => {
    let e: Option<E> = _.none
    const t = f(0, _.head(as))
    if (isLeft(t)) {
      return t
    }
    if (isBoth(t)) {
      e = _.some(t.left)
    }
    const out: NonEmptyArray<B> = [t.right]
    for (let i = 1; i < as.length; i++) {
      const t = f(i, as[i])
      if (isLeft(t)) {
        return t
      }
      if (isBoth(t)) {
        e = _.isNone(e) ? _.some(t.left) : _.some(S.concat(e.value, t.left))
      }
      out.push(t.right)
    }
    return _.isNone(e) ? right(out) : both(e.value, out)
  }

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(getApplicative(S))`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const traverseReadonlyArrayWithIndex =
  <E>(S: Semigroup<E>) =>
  <A, B>(f: (index: number, a: A) => These<E, B>): ((as: ReadonlyArray<A>) => These<E, ReadonlyArray<B>>) => {
    const g = traverseReadonlyNonEmptyArrayWithIndex(S)(f)
    return as => (_.isNonEmpty(as) ? g(as) : ApT)
  }

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `T.Functor` instead of `T.these` (where `T` is from `import T from 'fp-ts/These'`)
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export const these: Functor2<URI> & Bifunctor2<URI> & Foldable2<URI> & Traversable2<URI> = {
  URI,
  map: _map,
  bimap: _bimap,
  mapLeft: _mapLeft,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
}
