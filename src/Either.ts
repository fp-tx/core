/**
 * Represents a value of one of two possible types (a disjoint union).
 *
 * An instance of `Either` is either an instance of `Left` or `Right`.
 *
 * A common use of `Either` is as an alternative to `Option` for dealing with possible missing values. In this usage,
 * `None` is replaced with a `Left` which can contain useful information. `Right` takes the place of `Some`. Convention
 * dictates that `Left` is used for failure and `Right` is used for success.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as E from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 *
 * const double = (n: number): number => n * 2
 *
 * export const imperative = (as: ReadonlyArray<number>): string => {
 *   const head = (as: ReadonlyArray<number>): number => {
 *     if (as.length === 0) {
 *       throw new Error('empty array')
 *     }
 *     return as[0]
 *   }
 *   const inverse = (n: number): number => {
 *     if (n === 0) {
 *       throw new Error('cannot divide by zero')
 *     }
 *     return 1 / n
 *   }
 *   try {
 *     return `Result is ${inverse(double(head(as)))}`
 *   } catch (err: any) {
 *     return `Error is ${err.message}`
 *   }
 * }
 *
 * export const functional = (as: ReadonlyArray<number>): string => {
 *   const head = <A>(as: ReadonlyArray<A>): E.Either<string, A> =>
 *     as.length === 0 ? E.left('empty array') : E.right(as[0])
 *   const inverse = (n: number): E.Either<string, number> =>
 *     n === 0 ? E.left('cannot divide by zero') : E.right(1 / n)
 *   return pipe(
 *     as,
 *     head,
 *     E.map(double),
 *     E.flatMap(inverse),
 *     E.match(
 *       err => `Error is ${err}`, // onLeft handler
 *       head => `Result is ${head}`, // onRight handler
 *     ),
 *   )
 * }
 *
 * assert.deepStrictEqual(imperative([1, 2, 3]), functional([1, 2, 3]))
 * assert.deepStrictEqual(imperative([]), functional([]))
 * assert.deepStrictEqual(imperative([0]), functional([0]))
 * ```
 *
 * @packageDocumentation
 */
import { type Alt2, type Alt2C } from './Alt'
import {
  type Applicative as ApplicativeHKT,
  type Applicative2,
  type Applicative2C,
  getApplicativeMonoid,
} from './Applicative'
import {
  apFirst as apFirst_,
  type Apply2,
  apS as apS_,
  apSecond as apSecond_,
  getApplySemigroup as getApplySemigroup_,
} from './Apply'
import { type Bifunctor2 } from './Bifunctor'
import * as chainable from './Chain'
import * as ChnRec from './ChainRec'
import { type Compactable2C } from './Compactable'
import { type Eq } from './Eq'
import { type Extend2 } from './Extend'
import { type Filterable2C } from './Filterable'
import { type Foldable2 } from './Foldable'
import {
  chainOptionK as chainOptionK_,
  filterOrElse as filterOrElse_,
  type FromEither2,
  fromOption as fromOption_,
  fromOptionK as fromOptionK_,
  fromPredicate as fromPredicate_,
} from './FromEither'
import { dual, flow, identity, type LazyArg, pipe } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor2, let as let__ } from './Functor'
import { type HKT } from './HKT'
import * as _ from './internal'
import { type Monad2, type Monad2C } from './Monad'
import { type MonadThrow2, type MonadThrow2C } from './MonadThrow'
import { type Monoid } from './Monoid'
import { type NonEmptyArray } from './NonEmptyArray'
import { type Option } from './Option'
import { type Pointed2 } from './Pointed'
import { type Predicate } from './Predicate'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import { type Separated, separated } from './Separated'
import { type Show } from './Show'
import { type PipeableTraverse2, type Traversable2 } from './Traversable'
import { wiltDefault, type Witherable2C, witherDefault } from './Witherable'

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
export interface Left<E> {
  readonly _tag: 'Left'
  readonly left: E
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface Right<A> {
  readonly _tag: 'Right'
  readonly right: A
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export type Either<E, A> = Left<E> | Right<A>

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const left: <E = never, A = never>(e: E) => Either<E, A> = _.left

/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const right: <E = never, A = never>(a: A) => Either<E, A> = _.right

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMap: {
  <A, E2, B>(f: (a: A) => Either<E2, B>): <E1>(ma: Either<E1, A>) => Either<E1 | E2, B>
  <E1, A, E2, B>(ma: Either<E1, A>, f: (a: A) => Either<E2, B>): Either<E1 | E2, B>
} = /*#__PURE__*/ dual(
  2,
  <E1, A, E2, B>(ma: Either<E1, A>, f: (a: A) => Either<E2, B>): Either<E1 | E2, B> => (isLeft(ma) ? ma : f(ma.right)),
)

const _map: Monad2<URI>['map'] = (fa, f) => pipe(fa, map(f))
const _ap: Monad2<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
/* istanbul ignore next */
const _reduce: Foldable2<URI>['reduce'] = (fa, b, f) => pipe(fa, reduce(b, f))
/* istanbul ignore next */
const _foldMap: Foldable2<URI>['foldMap'] = M => (fa, f) => {
  const foldMapM = foldMap(M)
  return pipe(fa, foldMapM(f))
}
/* istanbul ignore next */
const _reduceRight: Foldable2<URI>['reduceRight'] = (fa, b, f) => pipe(fa, reduceRight(b, f))
const _traverse = <F>(
  F: ApplicativeHKT<F>,
): (<E, A, B>(ta: Either<E, A>, f: (a: A) => HKT<F, B>) => HKT<F, Either<E, B>>) => {
  const traverseF = traverse(F)
  return (ta, f) => pipe(ta, traverseF(f))
}
const _bimap: Bifunctor2<URI>['bimap'] = (fa, f, g) => pipe(fa, bimap(f, g))
const _mapLeft: Bifunctor2<URI>['mapLeft'] = (fa, f) => pipe(fa, mapLeft(f))
/* istanbul ignore next */
const _alt: Alt2<URI>['alt'] = (fa, that) => pipe(fa, alt(that))
/* istanbul ignore next */
const _extend: Extend2<URI>['extend'] = (wa, f) => pipe(wa, extend(f))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'Either'

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
    readonly [URI]: Either<E, A>
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getShow = <E, A>(SE: Show<E>, SA: Show<A>): Show<Either<E, A>> => ({
  show: ma => (isLeft(ma) ? `left(${SE.show(ma.left)})` : `right(${SA.show(ma.right)})`),
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getEq = <E, A>(EL: Eq<E>, EA: Eq<A>): Eq<Either<E, A>> => ({
  equals: (x, y) =>
    x === y || (isLeft(x) ? isLeft(y) && EL.equals(x.left, y.left) : isRight(y) && EA.equals(x.right, y.right)),
})

/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { getSemigroup, left, right } from '@fp-tx/core/Either'
 * import { SemigroupSum } from '@fp-tx/core/number'
 *
 * const S = getSemigroup<string, number>(SemigroupSum)
 * assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
 * assert.deepStrictEqual(S.concat(left('a'), right(2)), right(2))
 * assert.deepStrictEqual(S.concat(right(1), left('b')), right(1))
 * assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))
 * ```
 *
 * @public
 */
export const getSemigroup = <E, A>(S: Semigroup<A>): Semigroup<Either<E, A>> => ({
  concat: (x, y) =>
    isLeft(y) ? x
    : isLeft(x) ? y
    : right(S.concat(x.right, y.right)),
})

/**
 * Builds a `Compactable` instance for `Either` given `Monoid` for the left side.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const getCompactable = <E>(M: Monoid<E>): Compactable2C<URI, E> => {
  const empty = left(M.empty)
  return {
    URI,
    _E: undefined as any,
    compact: ma =>
      isLeft(ma) ? ma
      : ma.right._tag === 'None' ? empty
      : right(ma.right.value),
    separate: ma =>
      isLeft(ma) ? separated(ma, ma)
      : isLeft(ma.right) ? separated(right(ma.right.left), empty)
      : separated(empty, right(ma.right.right)),
  }
}

/**
 * Builds a `Filterable` instance for `Either` given `Monoid` for the left side
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const getFilterable = <E>(M: Monoid<E>): Filterable2C<URI, E> => {
  const empty = left(M.empty)

  const { compact, separate } = getCompactable(M)

  const filter = <A>(ma: Either<E, A>, predicate: Predicate<A>): Either<E, A> =>
    isLeft(ma) ? ma
    : predicate(ma.right) ? ma
    : empty

  const partition = <A>(ma: Either<E, A>, p: Predicate<A>): Separated<Either<E, A>, Either<E, A>> => {
    return (
      isLeft(ma) ? separated(ma, ma)
      : p(ma.right) ? separated(empty, right(ma.right))
      : separated(right(ma.right), empty)
    )
  }

  return {
    URI,
    _E: undefined as any,
    map: _map,
    compact,
    separate,
    filter,
    filterMap: (ma, f) => {
      if (isLeft(ma)) {
        return ma
      }
      const ob = f(ma.right)
      return ob._tag === 'None' ? empty : right(ob.value)
    },
    partition,
    partitionMap: (ma, f) => {
      if (isLeft(ma)) {
        return separated(ma, ma)
      }
      const e = f(ma.right)
      return isLeft(e) ? separated(right(e.left), empty) : separated(empty, right(e.right))
    },
  }
}

/**
 * Builds `Witherable` instance for `Either` given `Monoid` for the left side
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const getWitherable = <E>(M: Monoid<E>): Witherable2C<URI, E> => {
  const F_ = getFilterable(M)
  const C = getCompactable(M)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    compact: F_.compact,
    separate: F_.separate,
    filter: F_.filter,
    filterMap: F_.filterMap,
    partition: F_.partition,
    partitionMap: F_.partitionMap,
    traverse: _traverse,
    sequence,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    wither: witherDefault(Traversable, C),
    wilt: wiltDefault(Traversable, C),
  }
}

/**
 * The default [`Applicative`](#applicative) instance returns the first error, if you want to get all errors you need to
 * provide a way to concatenate them via a `Semigroup`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import * as A from '@fp-tx/core/Apply'
 * import * as E from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 * import * as S from '@fp-tx/core/Semigroup'
 * import * as string from '@fp-tx/core/string'
 *
 * const parseString = (u: unknown): E.Either<string, string> =>
 *   typeof u === 'string' ? E.right(u) : E.left('not a string')
 *
 * const parseNumber = (u: unknown): E.Either<string, number> =>
 *   typeof u === 'number' ? E.right(u) : E.left('not a number')
 *
 * interface Person {
 *   readonly name: string
 *   readonly age: number
 * }
 *
 * const parsePerson = (input: Record<string, unknown>): E.Either<string, Person> =>
 *   pipe(E.Do, E.apS('name', parseString(input.name)), E.apS('age', parseNumber(input.age)))
 *
 * assert.deepStrictEqual(parsePerson({}), E.left('not a string')) // <= first error
 *
 * const Applicative = E.getApplicativeValidation(pipe(string.Semigroup, S.intercalate(', ')))
 *
 * const apS = A.apS(Applicative)
 *
 * const parsePersonAll = (input: Record<string, unknown>): E.Either<string, Person> =>
 *   pipe(E.Do, apS('name', parseString(input.name)), apS('age', parseNumber(input.age)))
 *
 * assert.deepStrictEqual(parsePersonAll({}), E.left('not a string, not a number')) // <= all errors
 * ```
 *
 * @public
 */
export const getApplicativeValidation = <E>(SE: Semigroup<E>): Applicative2C<URI, E> => ({
  URI,
  _E: undefined as any,
  map: _map,
  ap: (fab, fa) =>
    isLeft(fab) ?
      isLeft(fa) ? left(SE.concat(fab.left, fa.left))
      : fab
    : isLeft(fa) ? fa
    : right(fab.right(fa.right)),
  of,
})

/**
 * The default [`Alt`](#alt) instance returns the last error, if you want to get all errors you need to provide a way to
 * concatenate them via a `Semigroup`.
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
 * import * as S from '@fp-tx/core/Semigroup'
 * import * as string from '@fp-tx/core/string'
 *
 * const parseString = (u: unknown): E.Either<string, string> =>
 *   typeof u === 'string' ? E.right(u) : E.left('not a string')
 *
 * const parseNumber = (u: unknown): E.Either<string, number> =>
 *   typeof u === 'number' ? E.right(u) : E.left('not a number')
 *
 * const parse = (u: unknown): E.Either<string, string | number> =>
 *   pipe(
 *     parseString(u),
 *     E.alt<string, string | number>(() => parseNumber(u)),
 *   )
 *
 * assert.deepStrictEqual(parse(true), E.left('not a number')) // <= last error
 *
 * const Alt = E.getAltValidation(pipe(string.Semigroup, S.intercalate(', ')))
 *
 * const parseAll = (u: unknown): E.Either<string, string | number> =>
 *   Alt.alt<string | number>(parseString(u), () => parseNumber(u))
 *
 * assert.deepStrictEqual(parseAll(true), E.left('not a string, not a number')) // <= all errors
 * ```
 *
 * @public
 */
export const getAltValidation = <E>(SE: Semigroup<E>): Alt2C<URI, E> => ({
  URI,
  _E: undefined as any,
  map: _map,
  alt: (me, that) => {
    if (isRight(me)) {
      return me
    }
    const ea = that()
    return isLeft(ea) ? left(SE.concat(me.left, ea.left)) : ea
  },
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => <E>(fa: Either<E, A>) => Either<E, B> = f => fa =>
  isLeft(fa) ? fa : right(f(fa.right))

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
 * Maps the `Right` value of this `Either` to the specified constant value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const as: {
  <A>(a: A): <E, _>(self: Either<E, _>) => Either<E, A>
  <E, _, A>(self: Either<E, _>, a: A): Either<E, A>
} = dual(2, as_(Functor))

/**
 * Maps the `Right` value of this `Either` to the void constant value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const asUnit: <E, _>(self: Either<E, _>) => Either<E, void> = asUnit_(Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const of: <E = never, A = never>(a: A) => Either<E, A> = right

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
 * Less strict version of [`ap`](#ap).
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apW: <E2, A>(fa: Either<E2, A>) => <E1, B>(fab: Either<E1, (a: A) => B>) => Either<E1 | E2, B> =
  fa => fab =>
    isLeft(fab) ? fab
    : isLeft(fa) ? fa
    : right(fab.right(fa.right))

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ap: <E, A>(fa: Either<E, A>) => <B>(fab: Either<E, (a: A) => B>) => Either<E, B> = apW

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
 * Left-associative fold of a structure.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @example
 *
 * ```typescript
 * import { pipe } from '@fp-tx/core/function'
 * import * as E from '@fp-tx/core/Either'
 *
 * const startWith = 'prefix'
 * const concat = (a: string, b: string) => `${a}:${b}`
 *
 * assert.deepStrictEqual(pipe(E.right('a'), E.reduce(startWith, concat)), 'prefix:a')
 *
 * assert.deepStrictEqual(pipe(E.left('e'), E.reduce(startWith, concat)), 'prefix')
 * ```
 *
 * @public
 */
export const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: Either<E, A>) => B = (b, f) => fa =>
  isLeft(fa) ? b : f(b, fa.right)

/**
 * Map each element of the structure to a monoid, and combine the results.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @example
 *
 * ```typescript
 * import { pipe } from '@fp-tx/core/function'
 * import * as E from '@fp-tx/core/Either'
 * import * as S from '@fp-tx/core/string'
 *
 * const yell = (a: string) => `${a}!`
 *
 * assert.deepStrictEqual(pipe(E.right('a'), E.foldMap(S.Monoid)(yell)), 'a!')
 *
 * assert.deepStrictEqual(pipe(E.left('e'), E.foldMap(S.Monoid)(yell)), S.Monoid.empty)
 * ```
 *
 * @public
 */
export const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: Either<E, A>) => M = M => f => fa =>
  isLeft(fa) ? M.empty : f(fa.right)

/**
 * Right-associative fold of a structure.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @example
 *
 * ```typescript
 * import { pipe } from '@fp-tx/core/function'
 * import * as E from '@fp-tx/core/Either'
 *
 * const startWith = 'postfix'
 * const concat = (a: string, b: string) => `${a}:${b}`
 *
 * assert.deepStrictEqual(pipe(E.right('a'), E.reduceRight(startWith, concat)), 'a:postfix')
 *
 * assert.deepStrictEqual(pipe(E.left('e'), E.reduceRight(startWith, concat)), 'postfix')
 * ```
 *
 * @public
 */
export const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: Either<E, A>) => B = (b, f) => fa =>
  isLeft(fa) ? b : f(fa.right, b)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Foldable: Foldable2<URI> = {
  URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
}

/**
 * Map each element of a structure to an action, evaluate these actions from left to right, and collect the results.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @example
 *
 * ```typescript
 * import { pipe } from '@fp-tx/core/function'
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import * as E from '@fp-tx/core/Either'
 * import * as O from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(pipe(E.right(['a']), E.traverse(O.Applicative)(RA.head)), O.some(E.right('a')))
 *
 * assert.deepStrictEqual(pipe(E.right([]), E.traverse(O.Applicative)(RA.head)), O.none)
 * ```
 *
 * @public
 */
export const traverse: PipeableTraverse2<URI> =
  <F>(F: ApplicativeHKT<F>) =>
  <A, B>(f: (a: A) => HKT<F, B>) =>
  <E>(ta: Either<E, A>): HKT<F, Either<E, B>> =>
    isLeft(ta) ? F.of(left(ta.left)) : F.map<B, Either<E, B>>(f(ta.right), right)

/**
 * Evaluate each monadic action in the structure from left to right, and collect the results.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @example
 *
 * ```typescript
 * import { pipe } from '@fp-tx/core/function'
 * import * as E from '@fp-tx/core/Either'
 * import * as O from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(pipe(E.right(O.some('a')), E.sequence(O.Applicative)), O.some(E.right('a')))
 *
 * assert.deepStrictEqual(pipe(E.right(O.none), E.sequence(O.Applicative)), O.none)
 * ```
 *
 * @public
 */
export const sequence: Traversable2<URI>['sequence'] =
  <F>(F: ApplicativeHKT<F>) =>
  <E, A>(ma: Either<E, HKT<F, A>>): HKT<F, Either<E, A>> => {
    return isLeft(ma) ? F.of(left(ma.left)) : F.map<A, Either<E, A>>(ma.right, right)
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
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
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: Either<E, A>) => Either<G, B> =
  (f, g) => fa => (isLeft(fa) ? left(f(fa.left)) : right(g(fa.right)))

/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: Either<E, A>) => Either<G, A> = f => fa =>
  isLeft(fa) ? left(f(fa.left)) : fa

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Bifunctor: Bifunctor2<URI> = {
  URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
}

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
export const altW: <E2, B>(that: LazyArg<Either<E2, B>>) => <E1, A>(fa: Either<E1, A>) => Either<E2, A | B> =
  that => fa => (isLeft(fa) ? that() : fa)

/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `Either` returns the left-most non-`Left` value (or the right-most `Left` value if both values are
 * `Left`).
 *
 * | x          | y          | `pipe(x, alt(() => y)` |
 * | ---------- | ---------- | ---------------------- |
 * | `left(a)`  | `left(b)`  | `left(b)`              |
 * | `left(a)`  | `right(2)` | `right(2)`             |
 * | `right(1)` | `left(b)`  | `right(1)`             |
 * | `right(1)` | `right(2)` | `right(1)`             |
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
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     E.left('a'),
 *     E.alt(() => E.left('b')),
 *   ),
 *   E.left('b'),
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     E.left('a'),
 *     E.alt(() => E.right(2)),
 *   ),
 *   E.right(2),
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     E.right(1),
 *     E.alt(() => E.left('b')),
 *   ),
 *   E.right(1),
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     E.right(1),
 *     E.alt(() => E.right(2)),
 *   ),
 *   E.right(1),
 * )
 * ```
 *
 * @public
 */
export const alt: <E, A>(that: LazyArg<Either<E, A>>) => (fa: Either<E, A>) => Either<E, A> = altW

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
 * @public
 */
export const extend: <E, A, B>(f: (wa: Either<E, A>) => B) => (wa: Either<E, A>) => Either<E, B> = f => wa =>
  isLeft(wa) ? wa : right(f(wa))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Extend: Extend2<URI> = {
  URI,
  map: _map,
  extend: _extend,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instance Methods
 * @public
 */
const chainRec: ChnRec.ChainRec2<URI>['chainRec'] = (a, f) =>
  ChnRec.tailRec(f(a), e =>
    isLeft(e) ? right(left(e.left))
    : isLeft(e.right) ? left(f(e.right.left))
    : right(right(e.right.right)),
  )

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ChainRec: ChnRec.ChainRec2<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
  chainRec,
}

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
 * Category: Instances
 * @public
 */
export const MonadThrow: MonadThrow2<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
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
  fromEither: identity,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @example
 *
 * ```typescript
 * import { fromPredicate, left, right } from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     1,
 *     fromPredicate(
 *       n => n > 0,
 *       () => 'error',
 *     ),
 *   ),
 *   right(1),
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     -1,
 *     fromPredicate(
 *       n => n > 0,
 *       () => 'error',
 *     ),
 *   ),
 *   left('error'),
 * )
 * ```
 *
 * @public
 */
export const fromPredicate: {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (a: A) => Either<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(b: B) => Either<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (a: A) => Either<E, A>
} = /*#__PURE__*/ fromPredicate_(FromEither)

// -------------------------------------------------------------------------------------
// conversions
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @example
 *
 * ```typescript
 * import * as E from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 * import * as O from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     O.some(1),
 *     E.fromOption(() => 'error'),
 *   ),
 *   E.right(1),
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     O.none,
 *     E.fromOption(() => 'error'),
 *   ),
 *   E.left('error'),
 * )
 * ```
 *
 * @public
 */
export const fromOption: <E>(onNone: LazyArg<E>) => <A>(fa: Option<A>) => Either<E, A> =
  /*#__PURE__*/ fromOption_(FromEither)

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * Returns `true` if the either is an instance of `Left`, `false` otherwise.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Refinements
 * @public
 */
export const isLeft: <E>(ma: Either<E, unknown>) => ma is Left<E> = _.isLeft

/**
 * Returns `true` if the either is an instance of `Right`, `false` otherwise.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Refinements
 * @public
 */
export const isRight: <A>(ma: Either<unknown, A>) => ma is Right<A> = _.isRight

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
export const matchW =
  <E, B, A, C>(onLeft: (e: E) => B, onRight: (a: A) => C) =>
  (ma: Either<E, A>): B | C =>
    isLeft(ma) ? onLeft(ma.left) : onRight(ma.right)

/**
 * Alias of [`matchW`](#matchw).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const foldW = matchW

/**
 * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the first function,
 * if the value is a `Right` the inner value is applied to the second function.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @example
 *
 * ```typescript
 * import { match, left, right } from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 *
 * function onLeft(errors: Array<string>): string {
 *   return `Errors: ${errors.join(', ')}`
 * }
 *
 * function onRight(value: number): string {
 *   return `Ok: ${value}`
 * }
 *
 * assert.strictEqual(pipe(right(1), match(onLeft, onRight)), 'Ok: 1')
 * assert.strictEqual(pipe(left(['error 1', 'error 2']), match(onLeft, onRight)), 'Errors: error 1, error 2')
 * ```
 *
 * @public
 */
export const match: <E, A, B>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: Either<E, A>) => B = matchW

/**
 * Alias of [`match`](#match).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const fold: <E, A, B>(onLeft: (e: E) => B, onRight: (a: A) => B) => (ma: Either<E, A>) => B = match

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
export const getOrElseW =
  <E, B>(onLeft: (e: E) => B) =>
  <A>(ma: Either<E, A>): A | B =>
    isLeft(ma) ? onLeft(ma.left) : ma.right

/**
 * Returns the wrapped value if it's a `Right` or a default value if is a `Left`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import { getOrElse, left, right } from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     right(1),
 *     getOrElse(() => 0),
 *   ),
 *   1,
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     left('error'),
 *     getOrElse(() => 0),
 *   ),
 *   0,
 * )
 * ```
 *
 * @public
 */
export const getOrElse: <E, A>(onLeft: (e: E) => A) => (ma: Either<E, A>) => A = getOrElseW

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apFirst = /*#__PURE__*/ apFirst_(Apply)

/**
 * Less strict version of [`apFirst`](#apfirst)
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apFirstW: <E2, B>(second: Either<E2, B>) => <E1, A>(first: Either<E1, A>) => Either<E1 | E2, A> =
  apFirst as any

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apSecond = /*#__PURE__*/ apSecond_(Apply)

/**
 * Less strict version of [`apSecond`](#apsecond)
 *
 * The `W` suffix (short for **W**idening) means that the error types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const apSecondW: <E2, B>(second: Either<E2, B>) => <E1, A>(first: Either<E1, A>) => Either<E1 | E2, B> =
  apSecond as any

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
  <E1, A, E2, _>(self: Either<E1, A>, f: (a: A) => Either<E2, _>): Either<E1 | E2, A>
  <A, E2, _>(f: (a: A) => Either<E2, _>): <E1>(self: Either<E1, A>) => Either<E2 | E1, A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

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
export const flattenW: <E1, E2, A>(mma: Either<E1, Either<E2, A>>) => Either<E1 | E2, A> =
  /*#__PURE__*/ flatMap(identity)

/**
 * The `flatten` function is the conventional monad join operator. It is used to remove one level of monadic structure,
 * projecting its bound argument into the outer level.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @example
 *
 * ```typescript
 * import * as E from '@fp-tx/core/Either'
 *
 * assert.deepStrictEqual(E.flatten(E.right(E.right('a'))), E.right('a'))
 * assert.deepStrictEqual(E.flatten(E.right(E.left('e'))), E.left('e'))
 * assert.deepStrictEqual(E.flatten(E.left('e')), E.left('e'))
 * ```
 *
 * @public
 */
export const flatten: <E, A>(mma: Either<E, Either<E, A>>) => Either<E, A> = flattenW

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const duplicate: <E, A>(ma: Either<E, A>) => Either<E, Either<E, A>> = /*#__PURE__*/ extend(identity)

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
) => <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) => (...a: A) => Either<E, B> =
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
) => <A, B>(f: (a: A) => Option<B>) => (ma: Either<E, A>) => Either<E, B> = /*#__PURE__*/ chainOptionK_(
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
) => <A, B>(f: (a: A) => Option<B>) => <E1>(ma: Either<E1, A>) => Either<E1 | E2, B> = /*#__PURE__*/ chainOptionK as any

/** @internal @packageDocumentation */
interface EitherTypeLambda extends _.TypeLambda {
  readonly type: Either<this['Out1'], this['Target']>
}

/** @internal */
const _FromEither: _.FromEither<EitherTypeLambda> = {
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
) => (...a: A) => Either<E, NonNullable<B>> = /*#__PURE__*/ _.liftNullable(_FromEither)

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
) => (...a: A) => Either<E, B> = /*#__PURE__*/ _.liftOption(_FromEither)

/** @internal */
const _FlatMap: _.FlatMap<EitherTypeLambda> = {
  flatMap,
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
  ): <E1>(self: Either<E1, A>) => Either<E2 | E1, NonNullable<B>>
  <E1, A, B, E2>(
    self: Either<E1, A>,
    f: (a: A) => B | null | undefined,
    onNullable: (a: A) => E2,
  ): Either<E1 | E2, NonNullable<B>>
} = /*#__PURE__*/ _.flatMapNullable(_FromEither, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatMapOption: {
  <A, B, E2>(f: (a: A) => Option<B>, onNone: (a: A) => E2): <E1>(self: Either<E1, A>) => Either<E2 | E1, B>
  <E1, A, B, E2>(self: Either<E1, A>, f: (a: A) => Option<B>, onNone: (a: A) => E2): Either<E1 | E2, B>
} = /*#__PURE__*/ _.flatMapOption(_FromEither, _FlatMap)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @example
 *
 * ```typescript
 * import * as E from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     E.right(1),
 *     E.filterOrElse(
 *       n => n > 0,
 *       () => 'error',
 *     ),
 *   ),
 *   E.right(1),
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     E.right(-1),
 *     E.filterOrElse(
 *       n => n > 0,
 *       () => 'error',
 *     ),
 *   ),
 *   E.left('error'),
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     E.left('a'),
 *     E.filterOrElse(
 *       n => n > 0,
 *       () => 'error',
 *     ),
 *   ),
 *   E.left('a'),
 * )
 * ```
 *
 * @public
 */
export const filterOrElse: {
  <A, B extends A, E>(refinement: Refinement<A, B>, onFalse: (a: A) => E): (self: Either<E, A>) => Either<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): <B extends A>(self: Either<E, B>) => Either<E, B>
  <A, E>(predicate: Predicate<A>, onFalse: (a: A) => E): (self: Either<E, A>) => Either<E, A>
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
  ): <E1>(ma: Either<E1, A>) => Either<E1 | E2, B>
  <A, E2>(predicate: Predicate<A>, onFalse: (a: A) => E2): <E1, B extends A>(mb: Either<E1, B>) => Either<E1 | E2, B>
  <A, E2>(predicate: Predicate<A>, onFalse: (a: A) => E2): <E1>(ma: Either<E1, A>) => Either<E1 | E2, A>
} = filterOrElse

/**
 * Returns a `Right` if is a `Left` (and vice versa).
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const swap = <E, A>(ma: Either<E, A>): Either<A, E> => (isLeft(ma) ? right(ma.left) : left(ma.right))

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
export const orElseW =
  <E1, E2, B>(onLeft: (e: E1) => Either<E2, B>) =>
  <A>(ma: Either<E1, A>): Either<E2, A | B> =>
    isLeft(ma) ? onLeft(ma.left) : ma

/**
 * Useful for recovering from errors.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const orElse: <E1, A, E2>(onLeft: (e: E1) => Either<E2, A>) => (ma: Either<E1, A>) => Either<E2, A> = orElseW

/**
 * Takes a default and a nullable value, if the value is not nully, turn it into a `Right`, if the value is nully use
 * the provided default as a `Left`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @example
 *
 * ```typescript
 * import { fromNullable, left, right } from '@fp-tx/core/Either'
 *
 * const parse = fromNullable('nully')
 *
 * assert.deepStrictEqual(parse(1), right(1))
 * assert.deepStrictEqual(parse(null), left('nully'))
 * ```
 *
 * @public
 */
export const fromNullable =
  <E>(e: E) =>
  <A>(a: A): Either<E, NonNullable<A>> =>
    a == null ? left(e) : right(a as NonNullable<A>)

/**
 * Constructs a new `Either` from a function that might throw.
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
 * import * as E from '@fp-tx/core/Either'
 *
 * const unsafeHead = <A>(as: ReadonlyArray<A>): A => {
 *   if (as.length > 0) {
 *     return as[0]
 *   } else {
 *     throw new Error('empty array')
 *   }
 * }
 *
 * const head = <A>(as: ReadonlyArray<A>): E.Either<Error, A> =>
 *   E.tryCatch(
 *     () => unsafeHead(as),
 *     e => (e instanceof Error ? e : new Error('unknown error')),
 *   )
 *
 * assert.deepStrictEqual(head([]), E.left(new Error('empty array')))
 * assert.deepStrictEqual(head([1, 2, 3]), E.right(1))
 * ```
 *
 * @public
 */
export const tryCatch = <E, A>(f: LazyArg<A>, onThrow: (e: unknown) => E): Either<E, A> => {
  try {
    return right(f())
  } catch (e) {
    return left(onThrow(e))
  }
}

/**
 * Converts a function that may throw to one returning a `Either`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Interop
 * @public
 */
export const tryCatchK =
  <A extends ReadonlyArray<unknown>, B, E>(
    f: (...a: A) => B,
    onThrow: (error: unknown) => E,
  ): ((...a: A) => Either<E, B>) =>
  (...a) =>
    tryCatch(() => f(...a), onThrow)

/**
 * Use `liftNullable`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const fromNullableK = <E>(
  e: E,
): (<A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined,
) => (...a: A) => Either<E, NonNullable<B>>) => {
  const from = fromNullable(e)
  return f => flow(f, from)
}

/**
 * Use `flatMapNullable`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainNullableK = <E>(
  e: E,
): (<A, B>(f: (a: A) => B | null | undefined) => (ma: Either<E, A>) => Either<E, NonNullable<B>>) => {
  const from = fromNullableK(e)
  return f => flatMap(from(f))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const toUnion: <E, A>(fa: Either<E, A>) => E | A = /*#__PURE__*/ foldW(identity, identity)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Default value for the `onError` argument of `tryCatch`
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function toError(e: unknown): Error {
  return e instanceof Error ? e : new Error(String(e))
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function elem<A>(E: Eq<A>): {
  (a: A): <E>(ma: Either<E, A>) => boolean
  <E>(a: A, ma: Either<E, A>): boolean
}
export function elem<A>(E: Eq<A>): <E>(a: A, ma?: Either<E, A>) => boolean | ((ma: Either<E, A>) => boolean) {
  return (a, ma?) => {
    if (ma === undefined) {
      const elemE = elem(E)
      return ma => elemE(a, ma)
    }
    return isLeft(ma) ? false : E.equals(a, ma.right)
  }
}

/**
 * Returns `false` if `Left` or returns the result of the application of the given predicate to the `Right` value.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { exists, left, right } from '@fp-tx/core/Either'
 *
 * const gt2 = exists((n: number) => n > 2)
 *
 * assert.strictEqual(gt2(left('a')), false)
 * assert.strictEqual(gt2(right(1)), false)
 * assert.strictEqual(gt2(right(3)), true)
 * ```
 *
 * @public
 */
export const exists =
  <A>(predicate: Predicate<A>) =>
  (ma: Either<unknown, A>): boolean =>
    isLeft(ma) ? false : predicate(ma.right)

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
export const Do: Either<never, {}> = /*#__PURE__*/ of(_.emptyRecord)

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
  f: (a: A) => Either<E2, B>,
) => <E1>(fa: Either<E1, A>) => Either<E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  bind as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const apS = /*#__PURE__*/ apS_(Apply)

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
  fb: Either<E2, B>,
) => <E1>(fa: Either<E1, A>) => Either<E1 | E2, { readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }> =
  apS as any

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ApT: Either<never, readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

interface EitherIterable<E, A> {
  readonly value: Either<E, A>
  [Symbol.iterator]: () => Generator<EitherIterable<E, A>, A, any>
}

const do_: <MA extends EitherIterable<any, any>, A>(
  yieldFunction: (unwrap: <E, A>(ma: Either<E, A>) => EitherIterable<E, A>) => Generator<MA, A>,
) => Either<MA extends EitherIterable<infer E, any> ? E : never, A> = ChnRec.do(Pointed, ChainRec)

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
  <A, E, B>(f: (index: number, a: A) => Either<E, B>) =>
  (as: ReadonlyNonEmptyArray<A>): Either<E, ReadonlyNonEmptyArray<B>> => {
    const e = f(0, _.head(as))
    if (isLeft(e)) {
      return e
    }
    const out: NonEmptyArray<B> = [e.right]
    for (let i = 1; i < as.length; i++) {
      const e = f(i, as[i])
      if (isLeft(e)) {
        return e
      }
      out.push(e.right)
    }
    return right(out)
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
export const traverseReadonlyArrayWithIndex = <A, E, B>(
  f: (index: number, a: A) => Either<E, B>,
): ((as: ReadonlyArray<A>) => Either<E, ReadonlyArray<B>>) => {
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
export const traverseArrayWithIndex: <E, A, B>(
  f: (index: number, a: A) => Either<E, B>,
) => (as: ReadonlyArray<A>) => Either<E, ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverseArray = <E, A, B>(
  f: (a: A) => Either<E, B>,
): ((as: ReadonlyArray<A>) => Either<E, ReadonlyArray<B>>) => traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const sequenceArray: <E, A>(as: ReadonlyArray<Either<E, A>>) => Either<E, ReadonlyArray<A>> =
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
export const chainW: <E2, A, B>(f: (a: A) => Either<E2, B>) => <E1>(ma: Either<E1, A>) => Either<E2 | E1, B> = flatMap

/**
 * Alias of `flatMap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chain: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Either<E, A>) => Either<E, B> = flatMap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirst: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Either<E, A>) => Either<E, A> = tap

/**
 * Alias of `tap`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Legacy
 * @public
 */
export const chainFirstW: <E2, A, B>(f: (a: A) => Either<E2, B>) => <E1>(ma: Either<E1, A>) => Either<E1 | E2, A> = tap

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`Json`](./Json.ts.html) module instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export type Json = boolean | number | string | null | JsonArray | JsonRecord

/**
 * Use [`Json`](./Json.ts.html) module instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export interface JsonRecord {
  readonly [key: string]: Json
}

/**
 * Use [`Json`](./Json.ts.html) module instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export interface JsonArray extends ReadonlyArray<Json> {}

/**
 * Use [`parse`](./Json.ts.html#parse) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export function parseJSON<E>(s: string, onError: (reason: unknown) => E): Either<E, Json> {
  return tryCatch(() => JSON.parse(s), onError)
}

/**
 * Use [`stringify`](./Json.ts.html#stringify) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const stringifyJSON = <E>(u: unknown, onError: (reason: unknown) => E): Either<E, string> =>
  tryCatch(() => {
    const s = JSON.stringify(u)
    if (typeof s !== 'string') {
      throw new Error('Converting unsupported structure to JSON')
    }
    return s
  }, onError)

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `E.Functor` instead of `E.either` (where `E` is from `import E from 'fp-ts/Either'`)
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const either: Monad2<URI> &
  Foldable2<URI> &
  Traversable2<URI> &
  Bifunctor2<URI> &
  Alt2<URI> &
  Extend2<URI> &
  ChnRec.ChainRec2<URI> &
  MonadThrow2<URI> = {
  URI,
  map: _map,
  of,
  ap: _ap,
  chain: flatMap,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
  bimap: _bimap,
  mapLeft: _mapLeft,
  alt: _alt,
  extend: _extend,
  chainRec,
  throwError: throwError,
}

/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values are concatenated
 * using the provided `Semigroup`
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const getApplySemigroup: <E, A>(S: Semigroup<A>) => Semigroup<Either<E, A>> =
  /*#__PURE__*/ getApplySemigroup_(Apply)

/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const getApplyMonoid: <E, A>(M: Monoid<A>) => Monoid<Either<E, A>> =
  /*#__PURE__*/ getApplicativeMonoid(Applicative)

/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const getValidationSemigroup = <E, A>(SE: Semigroup<E>, SA: Semigroup<A>): Semigroup<Either<E, A>> =>
  getApplySemigroup_(getApplicativeValidation(SE))(SA)

/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const getValidationMonoid = <E, A>(SE: Semigroup<E>, MA: Monoid<A>): Monoid<Either<E, A>> =>
  getApplicativeMonoid(getApplicativeValidation(SE))(MA)

/**
 * Use [`getApplicativeValidation`](#getapplicativevalidation) and [`getAltValidation`](#getaltvalidation) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export function getValidation<E>(
  SE: Semigroup<E>,
): Monad2C<URI, E> &
  Foldable2<URI> &
  Traversable2<URI> &
  Bifunctor2<URI> &
  Alt2C<URI, E> &
  Extend2<URI> &
  ChnRec.ChainRec2C<URI, E> &
  MonadThrow2C<URI, E> {
  const ap = getApplicativeValidation(SE).ap
  const alt = getAltValidation(SE).alt
  return {
    URI,
    _E: undefined as any,
    map: _map,
    of,
    chain: flatMap,
    bimap: _bimap,
    mapLeft: _mapLeft,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    extend: _extend,
    traverse: _traverse,
    sequence,
    chainRec,
    throwError,
    ap,
    alt,
  }
}
