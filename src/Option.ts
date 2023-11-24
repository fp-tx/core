/**
 * ```ts
 * type Option<A> = None | Some<A>
 * ```
 *
 * `Option<A>` is a container for an optional value of type `A`. If the value of type `A` is present, the `Option<A>` is
 * an instance of `Some<A>`, containing the present value of type `A`. If the value is absent, the `Option<A>` is an
 * instance of `None`.
 *
 * An option could be looked at as a collection or foldable structure with either one or zero elements. Another way to
 * look at `Option` is: it represents the effect of a possibly failing computation.
 *
 * @since 2.0.0
 * @example
 *   import * as O from 'fp-ts/Option'
 *   import { pipe } from 'fp-ts/function'
 *
 *   const double = (n: number): number => n * 2
 *
 *   export const imperative = (as: ReadonlyArray<number>): string => {
 *     const head = (as: ReadonlyArray<number>): number => {
 *       if (as.length === 0) {
 *         throw new Error()
 *       }
 *       return as[0]
 *     }
 *     const inverse = (n: number): number => {
 *       if (n === 0) {
 *         throw new Error()
 *       }
 *       return 1 / n
 *     }
 *     try {
 *       return `Result is ${inverse(double(head(as)))}`
 *     } catch (e) {
 *       return 'no result'
 *     }
 *   }
 *
 *   export const functional = (as: ReadonlyArray<number>): string => {
 *     const head = <A>(as: ReadonlyArray<A>): O.Option<A> => (as.length === 0 ? O.none : O.some(as[0]))
 *     const inverse = (n: number): O.Option<number> => (n === 0 ? O.none : O.some(1 / n))
 *     return pipe(
 *       as,
 *       head,
 *       O.map(double),
 *       O.flatMap(inverse),
 *       O.match(
 *         () => 'no result', // onNone handler
 *         head => `Result is ${head}`, // onSome handler
 *       ),
 *     )
 *   }
 *
 *   assert.deepStrictEqual(imperative([1, 2, 3]), functional([1, 2, 3]))
 *   assert.deepStrictEqual(imperative([]), functional([]))
 *   assert.deepStrictEqual(imperative([0]), functional([0]))
 */
import { type Alt1 } from './Alt'
import { type Alternative1 } from './Alternative'
import { type Applicative as ApplicativeHKT, type Applicative1, getApplicativeMonoid } from './Applicative'
import {
  apFirst as apFirst_,
  type Apply1,
  apS as apS_,
  apSecond as apSecond_,
  getApplySemigroup as getApplySemigroup_,
} from './Apply'
import * as chainable from './Chain'
import { type Compactable1 } from './Compactable'
import { type Either } from './Either'
import { type Eq } from './Eq'
import { type Extend1 } from './Extend'
import { type Filterable1 } from './Filterable'
import { type Foldable1 } from './Foldable'
import {
  chainEitherK as chainEitherK_,
  type FromEither1,
  fromEitherK as fromEitherK_,
  tapEither as tapEither_,
} from './FromEither'
import { constNull, constUndefined, dual, flow, identity, type LazyArg, pipe } from './function'
import { as as as_, asUnit as asUnit_, bindTo as bindTo_, flap as flap_, type Functor1, let as let__ } from './Functor'
import { type HKT } from './HKT'
import * as _ from './internal'
import { type Monad1 } from './Monad'
import { type MonadThrow1 } from './MonadThrow'
import { type Monoid } from './Monoid'
import { type NonEmptyArray } from './NonEmptyArray'
import { type Ord } from './Ord'
import { type Pointed1 } from './Pointed'
import { not, type Predicate } from './Predicate'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { first, last, type Semigroup } from './Semigroup'
import { type Separated, separated } from './Separated'
import { type Show } from './Show'
import { type PipeableTraverse1, type Traversable1 } from './Traversable'
import { type PipeableWilt1, type PipeableWither1, wiltDefault, type Witherable1, witherDefault } from './Witherable'
import { guard as guard_, type Zero1 } from './Zero'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
 */
export interface None {
  readonly _tag: 'None'
}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Some<A> {
  readonly _tag: 'Some'
  readonly value: A
}

/**
 * @since 2.0.0
 * @category Model
 */
export type Option<A> = None | Some<A>

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * `None` doesn't have a constructor, instead you can use it directly as a value. Represents a missing value.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const none: Option<never> = _.none

/**
 * Constructs a `Some`. Represents an optional value that exists.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const some: <A>(a: A) => Option<A> = _.some

/**
 * Returns a _smart constructor_ based on the given predicate.
 *
 * @since 2.0.0
 * @category Lifting
 * @example
 *   import { none, some, fromPredicate } from 'fp-ts/Option'
 *
 *   const getOption = fromPredicate((n: number) => n >= 0)
 *
 *   assert.deepStrictEqual(getOption(-1), none)
 *   assert.deepStrictEqual(getOption(1), some(1))
 */
export function fromPredicate<A, B extends A>(refinement: Refinement<A, B>): (a: A) => Option<B>
export function fromPredicate<A>(predicate: Predicate<A>): <B extends A>(b: B) => Option<B>
export function fromPredicate<A>(predicate: Predicate<A>): (a: A) => Option<A>
export function fromPredicate<A>(predicate: Predicate<A>): (a: A) => Option<A> {
  return a => (predicate(a) ? some(a) : none)
}

/**
 * Returns the `Left` value of an `Either` if possible.
 *
 * @since 2.0.0
 * @category Constructors
 * @example
 *   import { getLeft, none, some } from 'fp-ts/Option'
 *   import { right, left } from 'fp-ts/Either'
 *
 *   assert.deepStrictEqual(getLeft(right(1)), none)
 *   assert.deepStrictEqual(getLeft(left('a')), some('a'))
 */
export const getLeft = <E, A>(ma: Either<E, A>): Option<E> => (ma._tag === 'Right' ? none : some(ma.left))

/**
 * Returns the `Right` value of an `Either` if possible.
 *
 * @since 2.0.0
 * @category Constructors
 * @example
 *   import { getRight, none, some } from 'fp-ts/Option'
 *   import { right, left } from 'fp-ts/Either'
 *
 *   assert.deepStrictEqual(getRight(right(1)), some(1))
 *   assert.deepStrictEqual(getRight(left('a')), none)
 */
export const getRight = <E, A>(ma: Either<E, A>): Option<A> => (ma._tag === 'Left' ? none : some(ma.right))

const _map: Monad1<URI>['map'] = (fa, f) => pipe(fa, map(f))
const _ap: Monad1<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
const _reduce: Foldable1<URI>['reduce'] = (fa, b, f) => pipe(fa, reduce(b, f))
const _foldMap: Foldable1<URI>['foldMap'] = M => {
  const foldMapM = foldMap(M)
  return (fa, f) => pipe(fa, foldMapM(f))
}
const _reduceRight: Foldable1<URI>['reduceRight'] = (fa, b, f) => pipe(fa, reduceRight(b, f))
const _traverse: Traversable1<URI>['traverse'] = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(ta: Option<A>, f: (a: A) => HKT<F, B>) => HKT<F, Option<B>>) => {
  const traverseF = traverse(F)
  return (ta, f) => pipe(ta, traverseF(f))
}
/* istanbul ignore next */
const _alt: Alt1<URI>['alt'] = (fa, that) => pipe(fa, alt(that))
const _filter: Filterable1<URI>['filter'] = <A>(fa: Option<A>, predicate: Predicate<A>) => pipe(fa, filter(predicate))
/* istanbul ignore next */
const _filterMap: Filterable1<URI>['filterMap'] = (fa, f) => pipe(fa, filterMap(f))
/* istanbul ignore next */
const _extend: Extend1<URI>['extend'] = (wa, f) => pipe(wa, extend(f))
/* istanbul ignore next */
const _partition: Filterable1<URI>['partition'] = <A>(fa: Option<A>, predicate: Predicate<A>) =>
  pipe(fa, partition(predicate))
/* istanbul ignore next */
const _partitionMap: Filterable1<URI>['partitionMap'] = (fa, f) => pipe(fa, partitionMap(f))

/**
 * @since 2.0.0
 * @category Type lambdas
 */
export const URI = 'Option'

/**
 * @since 2.0.0
 * @category Type lambdas
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind<A> {
    readonly [URI]: Option<A>
  }
}

/**
 * @since 2.0.0
 * @category Instances
 */
export const getShow = <A>(S: Show<A>): Show<Option<A>> => ({
  show: ma => (isNone(ma) ? 'none' : `some(${S.show(ma.value)})`),
})

/**
 * @since 2.0.0
 * @category Instances
 * @example
 *   import { none, some, getEq } from 'fp-ts/Option'
 *   import * as N from 'fp-ts/number'
 *
 *   const E = getEq(N.Eq)
 *   assert.strictEqual(E.equals(none, none), true)
 *   assert.strictEqual(E.equals(none, some(1)), false)
 *   assert.strictEqual(E.equals(some(1), none), false)
 *   assert.strictEqual(E.equals(some(1), some(2)), false)
 *   assert.strictEqual(E.equals(some(1), some(1)), true)
 */
export const getEq = <A>(E: Eq<A>): Eq<Option<A>> => ({
  equals: (x, y) =>
    x === y ||
    (isNone(x) ? isNone(y)
    : isNone(y) ? false
    : E.equals(x.value, y.value)),
})

/**
 * The `Ord` instance allows `Option` values to be compared with `compare`, whenever there is an `Ord` instance for the
 * type the `Option` contains.
 *
 * `None` is considered to be less than any `Some` value.
 *
 * @since 2.0.0
 * @category Instances
 * @example
 *   import { none, some, getOrd } from 'fp-ts/Option'
 *   import * as N from 'fp-ts/number'
 *
 *   const O = getOrd(N.Ord)
 *   assert.strictEqual(O.compare(none, none), 0)
 *   assert.strictEqual(O.compare(none, some(1)), -1)
 *   assert.strictEqual(O.compare(some(1), none), 1)
 *   assert.strictEqual(O.compare(some(1), some(2)), -1)
 *   assert.strictEqual(O.compare(some(1), some(1)), 0)
 */
export const getOrd = <A>(O: Ord<A>): Ord<Option<A>> => ({
  equals: getEq(O).equals,
  compare: (x, y) =>
    x === y ? 0
    : isSome(x) ?
      isSome(y) ? O.compare(x.value, y.value)
      : 1
    : -1,
})

/**
 * Monoid returning the left-most non-`None` value. If both operands are `Some`s then the inner values are concatenated
 * using the provided `Semigroup`
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | some(a)            |
 * | none    | some(b) | some(b)            |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @since 2.0.0
 * @category Instances
 * @example
 *   import { getMonoid, some, none } from 'fp-ts/Option'
 *   import { SemigroupSum } from 'fp-ts/number'
 *
 *   const M = getMonoid(SemigroupSum)
 *   assert.deepStrictEqual(M.concat(none, none), none)
 *   assert.deepStrictEqual(M.concat(some(1), none), some(1))
 *   assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 *   assert.deepStrictEqual(M.concat(some(1), some(2)), some(3))
 */
export const getMonoid = <A>(S: Semigroup<A>): Monoid<Option<A>> => ({
  concat: (x, y) =>
    isNone(x) ? y
    : isNone(y) ? x
    : some(S.concat(x.value, y.value)),
  empty: none,
})

/**
 * @since 2.0.0
 * @category Mapping
 */
export const map: <A, B>(f: (a: A) => B) => (fa: Option<A>) => Option<B> = f => fa =>
  isNone(fa) ? none : some(f(fa.value))

/**
 * @since 2.7.0
 * @category Instances
 */
export const Functor: Functor1<URI> = {
  URI,
  map: _map,
}

/**
 * Maps the `Some` value of this `Option` to the specified constant value.
 *
 * @since 2.16.0
 * @category Mapping
 */
export const as: {
  <A>(a: A): <_>(self: Option<_>) => Option<A>
  <_, A>(self: Option<_>, a: A): Option<A>
} = dual(2, as_(Functor))

/**
 * Maps the `Some` value of this `Option` to the void constant value.
 *
 * @since 2.16.0
 * @category Mapping
 */
export const asUnit: <_>(self: Option<_>) => Option<void> = asUnit_(Functor)

/**
 * @since 2.7.0
 * @category Constructors
 */
export const of: <A>(a: A) => Option<A> = some

/**
 * @since 2.10.0
 * @category Instances
 */
export const Pointed: Pointed1<URI> = {
  URI,
  of,
}

/** @since 2.0.0 */
export const ap: <A>(fa: Option<A>) => <B>(fab: Option<(a: A) => B>) => Option<B> = fa => fab =>
  isNone(fab) ? none
  : isNone(fa) ? none
  : some(fab.value(fa.value))

/**
 * @since 2.10.0
 * @category Instances
 */
export const Apply: Apply1<URI> = {
  URI,
  map: _map,
  ap: _ap,
}

/**
 * @since 2.7.0
 * @category Instances
 */
export const Applicative: Applicative1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
}

/**
 * @since 2.14.0
 * @category Sequencing
 */
export const flatMap: {
  <A, B>(f: (a: A) => Option<B>): (ma: Option<A>) => Option<B>
  <A, B>(ma: Option<A>, f: (a: A) => Option<B>): Option<B>
} = /*#__PURE__*/ dual(2, <A, B>(ma: Option<A>, f: (a: A) => Option<B>): Option<B> => (isNone(ma) ? none : f(ma.value)))

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
 * @since 2.7.0
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
 * @since 2.0.0
 * @category Folding
 */
export const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: Option<A>) => B = (b, f) => fa =>
  isNone(fa) ? b : f(b, fa.value)

/**
 * @since 2.0.0
 * @category Folding
 */
export const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: Option<A>) => M = M => f => fa =>
  isNone(fa) ? M.empty : f(fa.value)

/**
 * @since 2.0.0
 * @category Folding
 */
export const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: Option<A>) => B = (b, f) => fa =>
  isNone(fa) ? b : f(fa.value, b)

/**
 * @since 2.7.0
 * @category Instances
 */
export const Foldable: Foldable1<URI> = {
  URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
}

/**
 * Returns the provided `Option` `that` if `self` is `None`, otherwise returns `self`.
 *
 * @since 2.16.0
 * @category Error handling
 * @example
 *   import * as O from 'fp-ts/Option'
 *
 *   assert.deepStrictEqual(
 *     O.orElse(O.none, () => O.none),
 *     O.none,
 *   )
 *   assert.deepStrictEqual(
 *     O.orElse(O.some(1), () => O.none),
 *     O.some(1),
 *   )
 *   assert.deepStrictEqual(
 *     O.orElse(O.none, () => O.some('b')),
 *     O.some('b'),
 *   )
 *   assert.deepStrictEqual(
 *     O.orElse(O.some(1), () => O.some('b')),
 *     O.some(1),
 *   )
 *
 * @param self - The first `Option` to be checked.
 * @param that - The `Option` to return if `self` is `None`.
 */
export const orElse: {
  <B>(that: LazyArg<Option<B>>): <A>(self: Option<A>) => Option<A | B>
  <A, B>(self: Option<A>, that: LazyArg<Option<B>>): Option<A | B>
} = dual(2, <A, B>(self: Option<A>, that: LazyArg<Option<B>>): Option<A | B> => (isNone(self) ? that() : self))

/**
 * Alias of `orElse`.
 *
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the return types will be merged.
 *
 * @since 2.9.0
 * @category Legacy
 */
export const altW: <B>(that: LazyArg<Option<B>>) => <A>(fa: Option<A>) => Option<A | B> = orElse

/**
 * Alias of `orElse`.
 *
 * @since 2.0.0
 * @category Legacy
 */
export const alt: <A>(that: LazyArg<Option<A>>) => (fa: Option<A>) => Option<A> = orElse

/**
 * @since 2.7.0
 * @category Instances
 */
export const Alt: Alt1<URI> = {
  URI,
  map: _map,
  alt: _alt,
}

/** @since 2.7.0 */
export const zero: <A>() => Option<A> = () => none

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
 * @since 2.7.0
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

/** @since 2.0.0 */
export const extend: <A, B>(f: (wa: Option<A>) => B) => (wa: Option<A>) => Option<B> = f => wa =>
  isNone(wa) ? none : some(f(wa))

/**
 * @since 2.7.0
 * @category Instances
 */
export const Extend: Extend1<URI> = {
  URI,
  map: _map,
  extend: _extend,
}

/**
 * @since 2.0.0
 * @category Filtering
 */
export const compact: <A>(fa: Option<Option<A>>) => Option<A> = /*#__PURE__*/ flatMap(identity)

const defaultSeparated = /*#__PURE__*/ separated(none, none)

/**
 * @since 2.0.0
 * @category Filtering
 */
export const separate: <A, B>(ma: Option<Either<A, B>>) => Separated<Option<A>, Option<B>> = ma =>
  isNone(ma) ? defaultSeparated : separated(getLeft(ma.value), getRight(ma.value))

/**
 * @since 2.7.0
 * @category Instances
 */
export const Compactable: Compactable1<URI> = {
  URI,
  compact,
  separate,
}

/**
 * @since 2.0.0
 * @category Filtering
 */
export const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Option<A>) => Option<B>
  <A>(predicate: Predicate<A>): <B extends A>(fb: Option<B>) => Option<B>
  <A>(predicate: Predicate<A>): (fa: Option<A>) => Option<A>
} =
  <A>(predicate: Predicate<A>) =>
  (fa: Option<A>) =>
    isNone(fa) ? none
    : predicate(fa.value) ? fa
    : none

/**
 * @since 2.0.0
 * @category Filtering
 */
export const filterMap: <A, B>(f: (a: A) => Option<B>) => (fa: Option<A>) => Option<B> = f => fa =>
  isNone(fa) ? none : f(fa.value)

/**
 * @since 2.0.0
 * @category Filtering
 */
export const partition: {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: Option<A>) => Separated<Option<A>, Option<B>>
  <A>(predicate: Predicate<A>): <B extends A>(fb: Option<B>) => Separated<Option<B>, Option<B>>
  <A>(predicate: Predicate<A>): (fa: Option<A>) => Separated<Option<A>, Option<A>>
} =
  <A>(predicate: Predicate<A>) =>
  (fa: Option<A>) =>
    separated(_filter(fa, not(predicate)), _filter(fa, predicate))

/**
 * @since 2.0.0
 * @category Filtering
 */
export const partitionMap: <A, B, C>(
  f: (a: A) => Either<B, C>,
) => (fa: Option<A>) => Separated<Option<B>, Option<C>> = f => flow(map(f), separate)

/**
 * @since 2.7.0
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
 * @since 2.6.3
 * @category Traversing
 */
export const traverse: PipeableTraverse1<URI> =
  <F>(F: ApplicativeHKT<F>) =>
  <A, B>(f: (a: A) => HKT<F, B>) =>
  (ta: Option<A>): HKT<F, Option<B>> =>
    isNone(ta) ? F.of(none) : F.map(f(ta.value), some)

/**
 * @since 2.6.3
 * @category Traversing
 */
export const sequence: Traversable1<URI>['sequence'] =
  <F>(F: ApplicativeHKT<F>) =>
  <A>(ta: Option<HKT<F, A>>): HKT<F, Option<A>> =>
    isNone(ta) ? F.of(none) : F.map(ta.value, some)

/**
 * @since 2.7.0
 * @category Instances
 */
export const Traversable: Traversable1<URI> = {
  URI,
  map: _map,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
}

const _wither: Witherable1<URI>['wither'] = /*#__PURE__*/ witherDefault(Traversable, Compactable)

const _wilt: Witherable1<URI>['wilt'] = /*#__PURE__*/ wiltDefault(Traversable, Compactable)

/**
 * @since 2.6.5
 * @category Filtering
 */
export const wither: PipeableWither1<URI> = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(f: (a: A) => HKT<F, Option<B>>) => (fa: Option<A>) => HKT<F, Option<B>>) => {
  const _witherF = _wither(F)
  return f => fa => _witherF(fa, f)
}

/**
 * @since 2.6.5
 * @category Filtering
 */
export const wilt: PipeableWilt1<URI> = <F>(
  F: ApplicativeHKT<F>,
): (<A, B, C>(f: (a: A) => HKT<F, Either<B, C>>) => (fa: Option<A>) => HKT<F, Separated<Option<B>, Option<C>>>) => {
  const _wiltF = _wilt(F)
  return f => fa => _wiltF(fa, f)
}

/**
 * @since 2.7.0
 * @category Instances
 */
export const Witherable: Witherable1<URI> = {
  URI,
  map: _map,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  wither: _wither,
  wilt: _wilt,
}

/** @since 2.7.0 */
export const throwError: MonadThrow1<URI>['throwError'] = () => none

/**
 * @since 2.7.0
 * @category Instances
 */
export const MonadThrow: MonadThrow1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
  throwError,
}

/**
 * Transforms an `Either` to an `Option` discarding the error.
 *
 * Alias of [getRight](#getright)
 *
 * @since 2.0.0
 * @category Conversions
 */
export const fromEither: <A>(fa: Either<unknown, A>) => Option<A> = getRight

/**
 * @since 2.11.0
 * @category Instances
 */
export const FromEither: FromEither1<URI> = {
  URI,
  fromEither,
}

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * Returns `true` if the option is an instance of `Some`, `false` otherwise.
 *
 * @since 2.0.0
 * @category Refinements
 * @example
 *   import { some, none, isSome } from 'fp-ts/Option'
 *
 *   assert.strictEqual(isSome(some(1)), true)
 *   assert.strictEqual(isSome(none), false)
 */
export const isSome: <A>(fa: Option<A>) => fa is Some<A> = _.isSome

/**
 * Returns `true` if the option is `None`, `false` otherwise.
 *
 * @since 2.0.0
 * @category Refinements
 * @example
 *   import { some, none, isNone } from 'fp-ts/Option'
 *
 *   assert.strictEqual(isNone(some(1)), false)
 *   assert.strictEqual(isNone(none), true)
 */
export const isNone = (fa: Option<unknown>): fa is None => fa._tag === 'None'

/**
 * Less strict version of [`match`](#match).
 *
 * The `W` suffix (short for **W**idening) means that the handler return types will be merged.
 *
 * @since 2.10.0
 * @category Pattern matching
 */
export const matchW =
  <B, A, C>(onNone: LazyArg<B>, onSome: (a: A) => C) =>
  (ma: Option<A>): B | C =>
    isNone(ma) ? onNone() : onSome(ma.value)

/**
 * Alias of [`matchW`](#matchw).
 *
 * @since 2.10.0
 * @category Pattern matching
 */
export const foldW = matchW

/**
 * Takes a (lazy) default value, a function, and an `Option` value, if the `Option` value is `None` the default value is
 * returned, otherwise the function is applied to the value inside the `Some` and the result is returned.
 *
 * @since 2.10.0
 * @category Pattern matching
 * @example
 *   import { some, none, match } from 'fp-ts/Option'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.strictEqual(
 *     pipe(
 *       some(1),
 *       match(
 *         () => 'a none',
 *         a => `a some containing ${a}`,
 *       ),
 *     ),
 *     'a some containing 1',
 *   )
 *
 *   assert.strictEqual(
 *     pipe(
 *       none,
 *       match(
 *         () => 'a none',
 *         a => `a some containing ${a}`,
 *       ),
 *     ),
 *     'a none',
 *   )
 */
export const match: <A, B>(onNone: LazyArg<B>, onSome: (a: A) => B) => (ma: Option<A>) => B = matchW

/**
 * Alias of [`match`](#match).
 *
 * @since 2.0.0
 * @category Pattern matching
 */
export const fold = match

/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * The `W` suffix (short for **W**idening) means that the handler return type will be merged.
 *
 * @since 2.6.0
 * @category Error handling
 */
export const getOrElseW =
  <B>(onNone: LazyArg<B>) =>
  <A>(ma: Option<A>): A | B =>
    isNone(ma) ? onNone() : ma.value

/**
 * Extracts the value out of the structure, if it exists. Otherwise returns the given default value
 *
 * @since 2.0.0
 * @category Error handling
 * @example
 *   import { some, none, getOrElse } from 'fp-ts/Option'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.strictEqual(
 *     pipe(
 *       some(1),
 *       getOrElse(() => 0),
 *     ),
 *     1,
 *   )
 *   assert.strictEqual(
 *     pipe(
 *       none,
 *       getOrElse(() => 0),
 *     ),
 *     0,
 *   )
 */
export const getOrElse: <A>(onNone: LazyArg<A>) => (ma: Option<A>) => A = getOrElseW

/**
 * @since 2.10.0
 * @category Mapping
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * @since 2.0.0
 */
export const apFirst = /*#__PURE__*/ apFirst_(Apply)

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @since 2.0.0
 */
export const apSecond = /*#__PURE__*/ apSecond_(Apply)

/**
 * @since 2.0.0
 * @category Sequencing
 */
export const flatten: <A>(mma: Option<Option<A>>) => Option<A> = compact

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.15.0
 * @category Combinators
 */
export const tap: {
  <A, _>(self: Option<A>, f: (a: A) => Option<_>): Option<A>
  <A, _>(f: (a: A) => Option<_>): (self: Option<A>) => Option<A>
} = /*#__PURE__*/ dual(2, chainable.tap(Chain))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @since 2.16.0
 * @category Combinators
 * @example
 *   import { pipe } from 'fp-ts/function'
 *   import * as O from 'fp-ts/Option'
 *   import * as E from 'fp-ts/Either'
 *
 *   const compute = (value: number) =>
 *     pipe(
 *       O.of(value),
 *       O.tapEither(value => (value > 0 ? E.right('ok') : E.left('error'))),
 *     )
 *
 *   assert.deepStrictEqual(compute(1), O.of(1))
 *   assert.deepStrictEqual(compute(-42), O.none)
 */
export const tapEither: {
  <A, E, _>(f: (a: A) => Either<E, _>): (self: Option<A>) => Option<A>
  <A, E, _>(self: Option<A>, f: (a: A) => Either<E, _>): Option<A>
} = /*#__PURE__*/ dual(2, tapEither_(FromEither, Chain))

/** @since 2.0.0 */
export const duplicate: <A>(ma: Option<A>) => Option<Option<A>> = /*#__PURE__*/ extend(identity)

/**
 * @since 2.11.0
 * @category Lifting
 */
export const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Either<E, B>,
) => (...a: A) => Option<B> = /*#__PURE__*/ fromEitherK_(FromEither)

/**
 * @since 2.11.0
 * @category Sequencing
 */
export const chainEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Option<A>) => Option<B> =
  /*#__PURE__*/ chainEitherK_(FromEither, Chain)

/**
 * Alias of `tapEither`.
 *
 * @since 2.12.0
 * @category Legacy
 */
export const chainFirstEitherK: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Option<A>) => Option<A> = tapEither

/**
 * Constructs a new `Option` from a nullable type. If the value is `null` or `undefined`, returns `None`, otherwise
 * returns the value wrapped in a `Some`.
 *
 * @since 2.0.0
 * @category Conversions
 * @example
 *   import { none, some, fromNullable } from 'fp-ts/Option'
 *
 *   assert.deepStrictEqual(fromNullable(undefined), none)
 *   assert.deepStrictEqual(fromNullable(null), none)
 *   assert.deepStrictEqual(fromNullable(1), some(1))
 */
export const fromNullable = <A>(a: A): Option<NonNullable<A>> => (a == null ? none : some(a as NonNullable<A>))

/**
 * Transforms an exception into an `Option`. If `f` throws, returns `None`, otherwise returns the output wrapped in a
 * `Some`.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @since 2.0.0
 * @category Interop
 * @example
 *   import { none, some, tryCatch } from 'fp-ts/Option'
 *
 *   assert.deepStrictEqual(
 *     tryCatch(() => {
 *       throw new Error()
 *     }),
 *     none,
 *   )
 *   assert.deepStrictEqual(
 *     tryCatch(() => 1),
 *     some(1),
 *   )
 */
export const tryCatch = <A>(f: LazyArg<A>): Option<A> => {
  try {
    return some(f())
  } catch (e) {
    return none
  }
}

/**
 * Converts a function that may throw to one returning a `Option`.
 *
 * @since 2.10.0
 * @category Interop
 */
export const tryCatchK =
  <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => B): ((...a: A) => Option<B>) =>
  (...a) =>
    tryCatch(() => f(...a))

/**
 * Returns a _smart constructor_ from a function that returns a nullable value.
 *
 * @since 2.9.0
 * @category Lifting
 * @example
 *   import { fromNullableK, none, some } from 'fp-ts/Option'
 *
 *   const f = (s: string): number | undefined => {
 *     const n = parseFloat(s)
 *     return isNaN(n) ? undefined : n
 *   }
 *
 *   const g = fromNullableK(f)
 *
 *   assert.deepStrictEqual(g('1'), some(1))
 *   assert.deepStrictEqual(g('a'), none)
 */
export const fromNullableK: <A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => B | null | undefined,
) => (...a: A) => Option<NonNullable<B>> = f => flow(f, fromNullable)

/**
 * This is `chain` + `fromNullable`, useful when working with optional values.
 *
 * @since 2.9.0
 * @category Sequencing
 * @example
 *   import { some, none, fromNullable, chainNullableK } from 'fp-ts/Option'
 *   import { pipe } from 'fp-ts/function'
 *
 *   interface Employee {
 *     readonly company?: {
 *       readonly address?: {
 *         readonly street?: {
 *           readonly name?: string
 *         }
 *       }
 *     }
 *   }
 *
 *   const employee1: Employee = { company: { address: { street: { name: 'high street' } } } }
 *
 *   assert.deepStrictEqual(
 *     pipe(
 *       fromNullable(employee1.company),
 *       chainNullableK(company => company.address),
 *       chainNullableK(address => address.street),
 *       chainNullableK(street => street.name),
 *     ),
 *     some('high street'),
 *   )
 *
 *   const employee2: Employee = { company: { address: { street: {} } } }
 *
 *   assert.deepStrictEqual(
 *     pipe(
 *       fromNullable(employee2.company),
 *       chainNullableK(company => company.address),
 *       chainNullableK(address => address.street),
 *       chainNullableK(street => street.name),
 *     ),
 *     none,
 *   )
 */
export const chainNullableK =
  <A, B>(f: (a: A) => B | null | undefined) =>
  (ma: Option<A>): Option<NonNullable<B>> =>
    isNone(ma) ? none : fromNullable(f(ma.value))

/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `null`.
 *
 * @since 2.0.0
 * @category Conversions
 * @example
 *   import { some, none, toNullable } from 'fp-ts/Option'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.strictEqual(pipe(some(1), toNullable), 1)
 *   assert.strictEqual(pipe(none, toNullable), null)
 */
export const toNullable: <A>(ma: Option<A>) => A | null = /*#__PURE__*/ match(constNull, identity)

/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `undefined`.
 *
 * @since 2.0.0
 * @category Conversions
 * @example
 *   import { some, none, toUndefined } from 'fp-ts/Option'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.strictEqual(pipe(some(1), toUndefined), 1)
 *   assert.strictEqual(pipe(none, toUndefined), undefined)
 */
export const toUndefined: <A>(ma: Option<A>) => A | undefined = /*#__PURE__*/ match(constUndefined, identity)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Returns `true` if `ma` contains `a`
 *
 * @since 2.0.0
 * @example
 *   import { some, none, elem } from 'fp-ts/Option'
 *   import { pipe } from 'fp-ts/function'
 *   import * as N from 'fp-ts/number'
 *
 *   assert.strictEqual(pipe(some(1), elem(N.Eq)(1)), true)
 *   assert.strictEqual(pipe(some(1), elem(N.Eq)(2)), false)
 *   assert.strictEqual(pipe(none, elem(N.Eq)(1)), false)
 */
export function elem<A>(E: Eq<A>): {
  (a: A): (ma: Option<A>) => boolean
  (a: A, ma: Option<A>): boolean
}
export function elem<A>(E: Eq<A>): (a: A, ma?: Option<A>) => boolean | ((ma: Option<A>) => boolean) {
  return (a, ma?) => {
    if (ma === undefined) {
      const elemE = elem(E)
      return ma => elemE(a, ma)
    }
    return isNone(ma) ? false : E.equals(a, ma.value)
  }
}

/**
 * Returns `true` if the predicate is satisfied by the wrapped value
 *
 * @since 2.0.0
 * @example
 *   import { some, none, exists } from 'fp-ts/Option'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.strictEqual(
 *     pipe(
 *       some(1),
 *       exists(n => n > 0),
 *     ),
 *     true,
 *   )
 *   assert.strictEqual(
 *     pipe(
 *       some(1),
 *       exists(n => n > 1),
 *     ),
 *     false,
 *   )
 *   assert.strictEqual(
 *     pipe(
 *       none,
 *       exists(n => n > 0),
 *     ),
 *     false,
 *   )
 */
export const exists =
  <A>(predicate: Predicate<A>) =>
  (ma: Option<A>): boolean =>
    isNone(ma) ? false : predicate(ma.value)

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 * @category Do notation
 */
export const Do: Option<{}> = /*#__PURE__*/ of(_.emptyRecord)

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
export const apS = /*#__PURE__*/ apS_(Apply)

/** @since 2.11.0 */
export const ApT: Option<readonly []> = /*#__PURE__*/ of(_.emptyReadonlyArray)

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 * @category Traversing
 */
export const traverseReadonlyNonEmptyArrayWithIndex =
  <A, B>(f: (index: number, a: A) => Option<B>) =>
  (as: ReadonlyNonEmptyArray<A>): Option<ReadonlyNonEmptyArray<B>> => {
    const o = f(0, _.head(as))
    if (isNone(o)) {
      return none
    }
    const out: NonEmptyArray<B> = [o.value]
    for (let i = 1; i < as.length; i++) {
      const o = f(i, as[i])
      if (isNone(o)) {
        return none
      }
      out.push(o.value)
    }
    return some(out)
  }

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 * @category Traversing
 */
export const traverseReadonlyArrayWithIndex = <A, B>(
  f: (index: number, a: A) => Option<B>,
): ((as: ReadonlyArray<A>) => Option<ReadonlyArray<B>>) => {
  const g = traverseReadonlyNonEmptyArrayWithIndex(f)
  return as => (_.isNonEmpty(as) ? g(as) : ApT)
}

/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const traverseArrayWithIndex: <A, B>(
  f: (index: number, a: A) => Option<B>,
) => (as: ReadonlyArray<A>) => Option<ReadonlyArray<B>> = traverseReadonlyArrayWithIndex

/**
 * Equivalent to `ReadonlyArray#traverse(Applicative)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const traverseArray = <A, B>(f: (a: A) => Option<B>): ((as: ReadonlyArray<A>) => Option<ReadonlyArray<B>>) =>
  traverseReadonlyArrayWithIndex((_, a) => f(a))

/**
 * Equivalent to `ReadonlyArray#sequence(Applicative)`.
 *
 * @since 2.9.0
 * @category Traversing
 */
export const sequenceArray: <A>(arr: ReadonlyArray<Option<A>>) => Option<ReadonlyArray<A>> =
  /*#__PURE__*/ traverseArray(identity)

// -------------------------------------------------------------------------------------
// legacy
// -------------------------------------------------------------------------------------

/**
 * Alias of `flatMap`.
 *
 * @since 2.0.0
 * @category Legacy
 */
export const chain: <A, B>(f: (a: A) => Option<B>) => (ma: Option<A>) => Option<B> = flatMap

/**
 * Alias of `tap`.
 *
 * @since 2.0.0
 * @category Legacy
 */
export const chainFirst: <A, B>(f: (a: A) => Option<B>) => (first: Option<A>) => Option<A> = tap

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use `Refinement` module instead.
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export function getRefinement<A, B extends A>(getOption: (a: A) => Option<B>): Refinement<A, B> {
  return (a: A): a is B => isSome(getOption(a))
}

/**
 * Use [`chainNullableK`](#chainnullablek) instead.
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export const mapNullable = chainNullableK

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `O.Functor` instead of `O.option` (where `O` is from `import O from 'fp-ts/Option'`)
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export const option: Monad1<URI> &
  Foldable1<URI> &
  Alternative1<URI> &
  Extend1<URI> &
  Witherable1<URI> &
  MonadThrow1<URI> = {
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
  zero,
  alt: _alt,
  extend: _extend,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  wither: _wither,
  wilt: _wilt,
  throwError,
}

/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export const getApplySemigroup: <A>(S: Semigroup<A>) => Semigroup<Option<A>> = /*#__PURE__*/ getApplySemigroup_(Apply)

/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export const getApplyMonoid: <A>(M: Monoid<A>) => Monoid<Option<A>> = /*#__PURE__*/ getApplicativeMonoid(Applicative)

/**
 * Use
 *
 * ```ts
 * import { first } from 'fp-ts/Semigroup'
 * import { getMonoid } from 'fp-ts/Option'
 *
 * getMonoid(first())
 * ```
 *
 * Instead.
 *
 * Monoid returning the left-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(b) | some(b)      |
 * | some(a) | some(b) | some(a)      |
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 * @example
 *   import { getFirstMonoid, some, none } from 'fp-ts/Option'
 *
 *   const M = getFirstMonoid<number>()
 *   assert.deepStrictEqual(M.concat(none, none), none)
 *   assert.deepStrictEqual(M.concat(some(1), none), some(1))
 *   assert.deepStrictEqual(M.concat(none, some(2)), some(2))
 *   assert.deepStrictEqual(M.concat(some(1), some(2)), some(1))
 */
export const getFirstMonoid = <A = never>(): Monoid<Option<A>> => getMonoid(first())

/**
 * Use
 *
 * ```ts
 * import { last } from 'fp-ts/Semigroup'
 * import { getMonoid } from 'fp-ts/Option'
 *
 * getMonoid(last())
 * ```
 *
 * Instead.
 *
 * Monoid returning the right-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(b) | some(b)      |
 * | some(a) | some(b) | some(b)      |
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 * @example
 *   import { getLastMonoid, some, none } from 'fp-ts/Option'
 *
 *   const M = getLastMonoid<number>()
 *   assert.deepStrictEqual(M.concat(none, none), none)
 *   assert.deepStrictEqual(M.concat(some(1), none), some(1))
 *   assert.deepStrictEqual(M.concat(none, some(2)), some(2))
 *   assert.deepStrictEqual(M.concat(some(1), some(2)), some(2))
 */
export const getLastMonoid = <A = never>(): Monoid<Option<A>> => getMonoid(last())
