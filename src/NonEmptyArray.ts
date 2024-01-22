/**
 * Data structure which represents non-empty arrays.
 *
 * ```ts
 * export type NonEmptyArray<A> = Array<A> & {
 *   0: A
 * }
 * ```
 *
 * Note that you don't need any conversion, a `NonEmptyArray` is an `Array`, so all `Array`'s APIs can be used with a
 * `NonEmptyArray` without further ado.
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Alt1 } from './Alt'
import { type Applicative as ApplicativeHKT, type Applicative1 } from './Applicative'
import { apFirst as apFirst_, type Apply1, apS as apS_, apSecond as apSecond_ } from './Apply'
import { bind as bind_, type Chain1, chainFirst as chainFirst_ } from './Chain'
import { type Comonad1 } from './Comonad'
import { type Endomorphism } from './Endomorphism'
import { type Eq } from './Eq'
import { type Extend1 } from './Extend'
import { type Foldable1 } from './Foldable'
import { type FoldableWithIndex1 } from './FoldableWithIndex'
import { dual, identity, type LazyArg, pipe } from './function'
import { bindTo as bindTo_, flap as flap_, type Functor1, let as let__ } from './Functor'
import { type FunctorWithIndex1 } from './FunctorWithIndex'
import { type HKT } from './HKT'
import * as _ from './internal'
import { type Monad1 } from './Monad'
import { type Option } from './Option'
import { getMonoid, type Ord } from './Ord'
import { type Pointed1 } from './Pointed'
import { type Predicate } from './Predicate'
import * as RNEA from './ReadonlyNonEmptyArray'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import { type Show } from './Show'
import { type PipeableTraverse1, type Traversable1 } from './Traversable'
import { type PipeableTraverseWithIndex1, type TraversableWithIndex1 } from './TraversableWithIndex'

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
export interface NonEmptyArray<A> extends Array<A> {
  0: A
}

// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------

/** @internal */
export const isNonEmpty = <A>(as: Array<A>): as is NonEmptyArray<A> => as.length > 0

/** @internal */
export const isOutOfBound = <A>(i: number, as: Array<A>): boolean => i < 0 || i >= as.length

/** @internal */
export const prependW =
  <B>(head: B) =>
  <A>(tail: Array<A>): NonEmptyArray<A | B> => [head, ...tail]

/** @internal */
export const prepend: <A>(head: A) => (tail: Array<A>) => NonEmptyArray<A> = prependW

/** @internal */
export const appendW =
  <B>(end: B) =>
  <A>(init: Array<A>): NonEmptyArray<A | B> =>
    [...init, end] as any

/** @internal */
export const append: <A>(end: A) => (init: Array<A>) => NonEmptyArray<A> = appendW

/** @internal */
export const unsafeInsertAt = <A>(i: number, a: A, as: Array<A>): NonEmptyArray<A> => {
  if (isNonEmpty(as)) {
    const xs = fromReadonlyNonEmptyArray(as)
    xs.splice(i, 0, a)
    return xs
  }
  return [a]
}

/** @internal */
export const unsafeUpdateAt = <A>(i: number, a: A, as: NonEmptyArray<A>): NonEmptyArray<A> => {
  const xs = fromReadonlyNonEmptyArray(as)
  xs[i] = a
  return xs
}

/**
 * Remove duplicates from a `NonEmptyArray`, keeping the first occurrence of an element.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { uniq } from '@fp-tx/core/NonEmptyArray'
 * import * as N from '@fp-tx/core/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 * ```
 *
 * @public
 */
export const uniq =
  <A>(E: Eq<A>) =>
  (as: NonEmptyArray<A>): NonEmptyArray<A> => {
    if (as.length === 1) {
      return copy(as)
    }
    const out: NonEmptyArray<A> = [head(as)]
    const rest = tail(as)
    for (const a of rest) {
      if (out.every(o => !E.equals(o, a))) {
        out.push(a)
      }
    }
    return out
  }

/**
 * Sort the elements of a `NonEmptyArray` in increasing order, where elements are compared using first `ords[0]`, then
 * `ords[1]`, etc...
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as NEA from '@fp-tx/core/NonEmptyArray'
 * import { contramap } from '@fp-tx/core/Ord'
 * import * as S from '@fp-tx/core/string'
 * import * as N from '@fp-tx/core/number'
 * import { pipe } from '@fp-tx/core/function'
 *
 * interface Person {
 *   name: string
 *   age: number
 * }
 *
 * const byName = pipe(
 *   S.Ord,
 *   contramap((p: Person) => p.name),
 * )
 *
 * const byAge = pipe(
 *   N.Ord,
 *   contramap((p: Person) => p.age),
 * )
 *
 * const sortByNameByAge = NEA.sortBy([byName, byAge])
 *
 * const persons: NEA.NonEmptyArray<Person> = [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 },
 *   { name: 'b', age: 2 },
 * ]
 *
 * assert.deepStrictEqual(sortByNameByAge(persons), [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 2 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 },
 * ])
 * ```
 *
 * @public
 */
export const sortBy = <B>(ords: Array<Ord<B>>): (<A extends B>(as: NonEmptyArray<A>) => NonEmptyArray<A>) => {
  if (isNonEmpty(ords)) {
    const M = getMonoid<B>()
    return sort(ords.reduce(M.concat, M.empty))
  }
  return copy
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const union = <A>(E: Eq<A>): ((second: NonEmptyArray<A>) => (first: NonEmptyArray<A>) => NonEmptyArray<A>) => {
  const uniqE = uniq(E)
  return second => first => uniqE(pipe(first, concat(second)))
}

/**
 * Rotate a `NonEmptyArray` by `n` steps.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { rotate } from '@fp-tx/core/NonEmptyArray'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 * assert.deepStrictEqual(rotate(-2)([1, 2, 3, 4, 5]), [3, 4, 5, 1, 2])
 * ```
 *
 * @public
 */
export const rotate =
  (n: number) =>
  <A>(as: NonEmptyArray<A>): NonEmptyArray<A> => {
    const len = as.length
    const m = Math.round(n) % len
    if (isOutOfBound(Math.abs(m), as) || m === 0) {
      return copy(as)
    }
    if (m < 0) {
      const [f, s] = splitAt(-m)(as)
      return pipe(s, concat(f))
    } else {
      return rotate(m - len)(as)
    }
  }

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromReadonlyNonEmptyArray: <A>(as: ReadonlyNonEmptyArray<A>) => NonEmptyArray<A> =
  _.fromReadonlyNonEmptyArray

/**
 * Builds a `NonEmptyArray` from an `Array` returning `none` if `as` is an empty array
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromArray = <A>(as: Array<A>): Option<NonEmptyArray<A>> => (isNonEmpty(as) ? _.some(as) : _.none)

/**
 * Return a `NonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @example
 *
 * ```typescript
 * import { makeBy } from '@fp-tx/core/NonEmptyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(pipe(5, makeBy(double)), [0, 2, 4, 6, 8])
 * ```
 *
 * @public
 */
export const makeBy =
  <A>(f: (i: number) => A) =>
  (n: number): NonEmptyArray<A> => {
    const j = Math.max(0, Math.floor(n))
    const out: NonEmptyArray<A> = [f(0)]
    for (let i = 1; i < j; i++) {
      out.push(f(i))
    }
    return out
  }

/**
 * Create a `NonEmptyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @example
 *
 * ```typescript
 * import { replicate } from '@fp-tx/core/NonEmptyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe(3, replicate('a')), ['a', 'a', 'a'])
 * ```
 *
 * @public
 */
export const replicate = <A>(a: A): ((n: number) => ReadonlyNonEmptyArray<A>) => makeBy(() => a)

/**
 * Create a `NonEmptyArray` containing a range of integers, including both endpoints.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @example
 *
 * ```typescript
 * import { range } from '@fp-tx/core/NonEmptyArray'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 * ```
 *
 * @public
 */
export const range = (start: number, end: number): NonEmptyArray<number> =>
  start <= end ? makeBy(i => start + i)(end - start + 1) : [start]

/**
 * Return the tuple of the `head` and the `tail`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { unprepend } from '@fp-tx/core/NonEmptyArray'
 *
 * assert.deepStrictEqual(unprepend([1, 2, 3]), [1, [2, 3]])
 * ```
 *
 * @public
 */
export const unprepend = <A>(as: NonEmptyArray<A>): [A, Array<A>] => [head(as), tail(as)]

/**
 * Return the tuple of the `init` and the `last`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { unappend } from '@fp-tx/core/NonEmptyArray'
 *
 * assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])
 * ```
 *
 * @public
 */
export const unappend = <A>(as: NonEmptyArray<A>): [Array<A>, A] => [init(as), last(as)]

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function concatW<B>(second: NonEmptyArray<B>): <A>(first: Array<A>) => NonEmptyArray<A | B>
export function concatW<B>(second: Array<B>): <A>(first: NonEmptyArray<A>) => NonEmptyArray<A | B>
export function concatW<B>(second: Array<B>): <A>(first: NonEmptyArray<A>) => Array<A | B> {
  return <A>(first: NonEmptyArray<A | B>) => first.concat(second)
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function concat<A>(second: NonEmptyArray<A>): (first: Array<A>) => NonEmptyArray<A>
export function concat<A>(second: Array<A>): (first: NonEmptyArray<A>) => NonEmptyArray<A>
/** @deprecated Zone of Death */
export function concat<A>(first: Array<A>, second: NonEmptyArray<A>): NonEmptyArray<A>
/** @deprecated Zone of Death */
export function concat<A>(first: NonEmptyArray<A>, second: Array<A>): NonEmptyArray<A>
export function concat<A>(x: Array<A>, y?: Array<A>): Array<A> | ((y: NonEmptyArray<A>) => Array<A>) {
  return y ? x.concat(y) : y => y.concat(x)
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const reverse = <A>(as: NonEmptyArray<A>): NonEmptyArray<A> => [last(as), ...as.slice(0, -1).reverse()]

/**
 * Group equal, consecutive elements of an array into non empty arrays.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { group } from '@fp-tx/core/NonEmptyArray'
 * import * as N from '@fp-tx/core/number'
 *
 * assert.deepStrictEqual(group(N.Ord)([1, 2, 1, 1]), [[1], [2], [1, 1]])
 * ```
 *
 * @public
 */
export function group<B>(E: Eq<B>): {
  <A extends B>(as: NonEmptyArray<A>): NonEmptyArray<NonEmptyArray<A>>
  <A extends B>(as: Array<A>): Array<NonEmptyArray<A>>
}
export function group<A>(E: Eq<A>): (as: Array<A>) => Array<NonEmptyArray<A>> {
  return as => {
    const len = as.length
    if (len === 0) {
      return []
    }
    const out: Array<NonEmptyArray<A>> = []
    let head: A = as[0]
    let nea: NonEmptyArray<A> = [head]
    for (let i = 1; i < len; i++) {
      const a = as[i]
      if (E.equals(a, head)) {
        nea.push(a)
      } else {
        out.push(nea)
        head = a
        nea = [head]
      }
    }
    out.push(nea)
    return out
  }
}

/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { groupBy } from '@fp-tx/core/NonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
 *   '1': ['a', 'b'],
 *   '2': ['ab'],
 * })
 * ```
 *
 * @public
 */
export const groupBy =
  <A>(f: (a: A) => string) =>
  (as: Array<A>): Record<string, NonEmptyArray<A>> => {
    const out: Record<string, NonEmptyArray<A>> = {}
    for (const a of as) {
      const k = f(a)
      if (_.has.call(out, k)) {
        out[k].push(a)
      } else {
        out[k] = [a]
      }
    }
    return out
  }

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const sort =
  <B>(O: Ord<B>) =>
  <A extends B>(as: NonEmptyArray<A>): NonEmptyArray<A> =>
    as.slice().sort(O.compare) as any

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const insertAt =
  <A>(i: number, a: A) =>
  (as: Array<A>): Option<NonEmptyArray<A>> =>
    i < 0 || i > as.length ? _.none : _.some(unsafeInsertAt(i, a, as))

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const updateAt = <A>(i: number, a: A): ((as: NonEmptyArray<A>) => Option<NonEmptyArray<A>>) =>
  modifyAt(i, () => a)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const modifyAt =
  <A>(i: number, f: (a: A) => A) =>
  (as: NonEmptyArray<A>): Option<NonEmptyArray<A>> =>
    isOutOfBound(i, as) ? _.none : _.some(unsafeUpdateAt(i, f(as[i]), as))

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const copy: <A>(as: NonEmptyArray<A>) => NonEmptyArray<A> = fromReadonlyNonEmptyArray

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const of: <A>(a: A) => NonEmptyArray<A> = a => [a]

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const zipWith = <A, B, C>(
  as: NonEmptyArray<A>,
  bs: NonEmptyArray<B>,
  f: (a: A, b: B) => C,
): NonEmptyArray<C> => {
  const cs: NonEmptyArray<C> = [f(as[0], bs[0])]
  const len = Math.min(as.length, bs.length)
  for (let i = 1; i < len; i++) {
    cs[i] = f(as[i], bs[i])
  }
  return cs
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function zip<B>(bs: NonEmptyArray<B>): <A>(as: NonEmptyArray<A>) => NonEmptyArray<[A, B]>
export function zip<A, B>(as: NonEmptyArray<A>, bs: NonEmptyArray<B>): NonEmptyArray<[A, B]>
export function zip<A, B>(
  as: NonEmptyArray<A>,
  bs?: NonEmptyArray<B>,
): NonEmptyArray<[A, B]> | ((bs: NonEmptyArray<B>) => NonEmptyArray<[B, A]>) {
  if (bs === undefined) {
    return bs => zip(bs, as)
  }
  return zipWith(as, bs, (a, b) => [a, b])
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const unzip = <A, B>(abs: NonEmptyArray<[A, B]>): [NonEmptyArray<A>, NonEmptyArray<B>] => {
  const fa: NonEmptyArray<A> = [abs[0][0]]
  const fb: NonEmptyArray<B> = [abs[0][1]]
  for (let i = 1; i < abs.length; i++) {
    fa[i] = abs[i][0]
    fb[i] = abs[i][1]
  }
  return [fa, fb]
}

/**
 * Prepend an element to every member of an array
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { prependAll } from '@fp-tx/core/NonEmptyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 * ```
 *
 * @public
 */
export const prependAll =
  <A>(middle: A) =>
  (as: NonEmptyArray<A>): NonEmptyArray<A> => {
    const out: NonEmptyArray<A> = [middle, as[0]]
    for (let i = 1; i < as.length; i++) {
      out.push(middle, as[i])
    }
    return out
  }

/**
 * Places an element in between members of an array
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { intersperse } from '@fp-tx/core/NonEmptyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 * ```
 *
 * @public
 */
export const intersperse =
  <A>(middle: A) =>
  (as: NonEmptyArray<A>): NonEmptyArray<A> => {
    const rest = tail(as)
    return isNonEmpty(rest) ? pipe(rest, prependAll(middle), prepend(head(as))) : copy(as)
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const foldMapWithIndex: <S>(S: Semigroup<S>) => <A>(f: (i: number, a: A) => S) => (fa: NonEmptyArray<A>) => S =
  RNEA.foldMapWithIndex

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const foldMap: <S>(S: Semigroup<S>) => <A>(f: (a: A) => S) => (fa: NonEmptyArray<A>) => S = RNEA.foldMap

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const chainWithIndex =
  <A, B>(f: (i: number, a: A) => NonEmptyArray<B>) =>
  (as: NonEmptyArray<A>): NonEmptyArray<B> => {
    const out: NonEmptyArray<B> = fromReadonlyNonEmptyArray(f(0, head(as)))
    for (let i = 1; i < as.length; i++) {
      out.push(...f(i, as[i]))
    }
    return out
  }

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const chop =
  <A, B>(f: (as: NonEmptyArray<A>) => [B, Array<A>]) =>
  (as: NonEmptyArray<A>): NonEmptyArray<B> => {
    const [b, rest] = f(as)
    const out: NonEmptyArray<B> = [b]
    let next: Array<A> = rest
    while (isNonEmpty(next)) {
      const [b, rest] = f(next)
      out.push(b)
      next = rest
    }
    return out
  }

/**
 * Splits a `NonEmptyArray` into two pieces, the first piece has max `n` elements.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const splitAt =
  (n: number) =>
  <A>(as: NonEmptyArray<A>): [NonEmptyArray<A>, Array<A>] => {
    const m = Math.max(1, n)
    return m >= as.length ? [copy(as), []] : [pipe(as.slice(1, m), prepend(head(as))), as.slice(m)]
  }

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const chunksOf = (n: number): (<A>(as: NonEmptyArray<A>) => NonEmptyArray<NonEmptyArray<A>>) => chop(splitAt(n))

/* istanbul ignore next */
const _map: Functor1<URI>['map'] = (fa, f) => pipe(fa, map(f))
/* istanbul ignore next */
const _mapWithIndex: FunctorWithIndex1<URI, number>['mapWithIndex'] = (fa, f) => pipe(fa, mapWithIndex(f))
/* istanbul ignore next */
const _ap: Apply1<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
/* istanbul ignore next */
const _extend: Extend1<URI>['extend'] = (wa, f) => pipe(wa, extend(f))
/* istanbul ignore next */
const _reduce: Foldable1<URI>['reduce'] = (fa, b, f) => pipe(fa, reduce(b, f))
/* istanbul ignore next */
const _foldMap: Foldable1<URI>['foldMap'] = M => {
  const foldMapM = foldMap(M)
  return (fa, f) => pipe(fa, foldMapM(f))
}
/* istanbul ignore next */
const _reduceRight: Foldable1<URI>['reduceRight'] = (fa, b, f) => pipe(fa, reduceRight(b, f))
/* istanbul ignore next */
const _traverse: Traversable1<URI>['traverse'] = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(ta: NonEmptyArray<A>, f: (a: A) => HKT<F, B>) => HKT<F, NonEmptyArray<B>>) => {
  const traverseF = traverse(F)
  return (ta, f) => pipe(ta, traverseF(f))
}
/* istanbul ignore next */
const _alt: Alt1<URI>['alt'] = (fa, that) => pipe(fa, alt(that))
/* istanbul ignore next */
const _reduceWithIndex: FoldableWithIndex1<URI, number>['reduceWithIndex'] = (fa, b, f) =>
  pipe(fa, reduceWithIndex(b, f))
/* istanbul ignore next */
const _foldMapWithIndex: FoldableWithIndex1<URI, number>['foldMapWithIndex'] = M => {
  const foldMapWithIndexM = foldMapWithIndex(M)
  return (fa, f) => pipe(fa, foldMapWithIndexM(f))
}
/* istanbul ignore next */
const _reduceRightWithIndex: FoldableWithIndex1<URI, number>['reduceRightWithIndex'] = (fa, b, f) =>
  pipe(fa, reduceRightWithIndex(b, f))
/* istanbul ignore next */
const _traverseWithIndex: TraversableWithIndex1<URI, number>['traverseWithIndex'] = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(ta: NonEmptyArray<A>, f: (i: number, a: A) => HKT<F, B>) => HKT<F, NonEmptyArray<B>>) => {
  const traverseWithIndexF = traverseWithIndex(F)
  return (ta, f) => pipe(ta, traverseWithIndexF(f))
}

/**
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the return types will be merged.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import * as NEA from '@fp-tx/core/NonEmptyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3] as NEA.NonEmptyArray<number>,
 *     NEA.altW(() => ['a', 'b']),
 *   ),
 *   [1, 2, 3, 'a', 'b'],
 * )
 * ```
 *
 * @public
 */
export const altW =
  <B>(that: LazyArg<NonEmptyArray<B>>) =>
  <A>(as: NonEmptyArray<A>): NonEmptyArray<A | B> =>
    pipe(as, concatW(that()))

/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `NonEmptyArray` concatenates the inputs into a single array.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import * as NEA from '@fp-tx/core/NonEmptyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3],
 *     NEA.alt(() => [4, 5]),
 *   ),
 *   [1, 2, 3, 4, 5],
 * )
 * ```
 *
 * @public
 */
export const alt: <A>(that: LazyArg<NonEmptyArray<A>>) => (fa: NonEmptyArray<A>) => NonEmptyArray<A> = altW

/**
 * Apply a function to an argument under a type constructor.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ap = <A>(as: NonEmptyArray<A>): (<B>(fab: NonEmptyArray<(a: A) => B>) => NonEmptyArray<B>) =>
  flatMap(f => pipe(as, map(f)))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @example
 *
 * ```typescript
 * import * as NEA from '@fp-tx/core/NonEmptyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3],
 *     NEA.flatMap(n => [`a${n}`, `b${n}`]),
 *   ),
 *   ['a1', 'b1', 'a2', 'b2', 'a3', 'b3'],
 * )
 * ```
 *
 * @public
 */
export const flatMap: {
  <A, B>(f: (a: A, i: number) => NonEmptyArray<B>): (ma: NonEmptyArray<A>) => NonEmptyArray<B>
  <A, B>(ma: NonEmptyArray<A>, f: (a: A, i: number) => NonEmptyArray<B>): NonEmptyArray<B>
} = /*#__PURE__*/ dual(
  2,
  <A, B>(ma: NonEmptyArray<A>, f: (a: A, i: number) => NonEmptyArray<B>): NonEmptyArray<B> =>
    pipe(
      ma,
      chainWithIndex((i, a) => f(a, i)),
    ),
)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const extend =
  <A, B>(f: (as: NonEmptyArray<A>) => B) =>
  (as: NonEmptyArray<A>): NonEmptyArray<B> => {
    let next: Array<A> = tail(as)
    const out: NonEmptyArray<B> = [f(as)]
    while (isNonEmpty(next)) {
      out.push(f(next))
      next = tail(next)
    }
    return out
  }

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const duplicate: <A>(ma: NonEmptyArray<A>) => NonEmptyArray<NonEmptyArray<A>> = /*#__PURE__*/ extend(identity)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatten: <A>(mma: NonEmptyArray<NonEmptyArray<A>>) => NonEmptyArray<A> = /*#__PURE__*/ flatMap(identity)

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
export const map = <A, B>(f: (a: A) => B): ((as: NonEmptyArray<A>) => NonEmptyArray<B>) => mapWithIndex((_, a) => f(a))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const mapWithIndex =
  <A, B>(f: (i: number, a: A) => B) =>
  (as: NonEmptyArray<A>): NonEmptyArray<B> => {
    const out: NonEmptyArray<B> = [f(0, head(as))]
    for (let i = 1; i < as.length; i++) {
      out.push(f(i, as[i]))
    }
    return out
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: NonEmptyArray<A>) => B = RNEA.reduce

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const reduceWithIndex: <A, B>(b: B, f: (i: number, b: B, a: A) => B) => (fa: NonEmptyArray<A>) => B =
  RNEA.reduceWithIndex

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: NonEmptyArray<A>) => B = RNEA.reduceRight

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const reduceRightWithIndex: <A, B>(b: B, f: (i: number, a: A, b: B) => B) => (fa: NonEmptyArray<A>) => B =
  RNEA.reduceRightWithIndex

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverse: PipeableTraverse1<URI> = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(f: (a: A) => HKT<F, B>) => (as: NonEmptyArray<A>) => HKT<F, NonEmptyArray<B>>) => {
  const traverseWithIndexF = traverseWithIndex(F)
  return f => traverseWithIndexF((_, a) => f(a))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const sequence: Traversable1<URI>['sequence'] = <F>(
  F: ApplicativeHKT<F>,
): (<A>(as: NonEmptyArray<HKT<F, A>>) => HKT<F, NonEmptyArray<A>>) => traverseWithIndex(F)((_, a) => a)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const traverseWithIndex: PipeableTraverseWithIndex1<URI, number> =
  <F>(F: ApplicativeHKT<F>) =>
  <A, B>(f: (i: number, a: A) => HKT<F, B>) =>
  (as: NonEmptyArray<A>): HKT<F, NonEmptyArray<B>> => {
    let out: HKT<F, NonEmptyArray<B>> = F.map(f(0, head(as)), of)
    for (let i = 1; i < as.length; i++) {
      out = F.ap(
        F.map(out, bs => (b: B) => pipe(bs, append(b))),
        f(i, as[i]),
      )
    }
    return out
  }

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const extract: Comonad1<URI>['extract'] = RNEA.head

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'NonEmptyArray'

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
    readonly [URI]: NonEmptyArray<A>
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getShow: <A>(S: Show<A>) => Show<NonEmptyArray<A>> = RNEA.getShow

/**
 * Builds a `Semigroup` instance for `NonEmptyArray`
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getSemigroup = <A = never>(): Semigroup<NonEmptyArray<A>> => ({
  concat,
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { getEq } from '@fp-tx/core/NonEmptyArray'
 * import * as N from '@fp-tx/core/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals([1, 2], [1, 2]), true)
 * assert.strictEqual(E.equals([1, 2], [1, 3]), false)
 * ```
 *
 * @public
 */
export const getEq: <A>(E: Eq<A>) => Eq<NonEmptyArray<A>> = RNEA.getEq

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const getUnionSemigroup = <A>(E: Eq<A>): Semigroup<NonEmptyArray<A>> => {
  const unionE = union(E)
  return {
    concat: (first, second) => unionE(second)(first),
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
export const FunctorWithIndex: FunctorWithIndex1<URI, number> = {
  URI,
  map: _map,
  mapWithIndex: _mapWithIndex,
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
export const Chain: Chain1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
}

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const chainFirst: <A, B>(f: (a: A) => NonEmptyArray<B>) => (first: NonEmptyArray<A>) => NonEmptyArray<A> =
  /*#__PURE__*/ chainFirst_(Chain)

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
export const Foldable: Foldable1<URI> = {
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
 * @public
 */
export const FoldableWithIndex: FoldableWithIndex1<URI, number> = {
  URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
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

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const TraversableWithIndex: TraversableWithIndex1<URI, number> = {
  URI,
  map: _map,
  mapWithIndex: _mapWithIndex,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex,
  traverseWithIndex: _traverseWithIndex,
}

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
export const Comonad: Comonad1<URI> = {
  URI,
  map: _map,
  extend: _extend,
  extract,
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
export const Do: NonEmptyArray<{}> = /*#__PURE__*/ of(_.emptyRecord)

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
export const bind = /*#__PURE__*/ bind_(Chain)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const apS = /*#__PURE__*/ apS_(Apply)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const head: <A>(nea: NonEmptyArray<A>) => A = RNEA.head

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const tail = <A>(as: NonEmptyArray<A>): Array<A> => as.slice(1)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const last: <A>(nea: NonEmptyArray<A>) => A = RNEA.last

/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { init } from '@fp-tx/core/NonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 * ```
 *
 * @public
 */
export const init = <A>(as: NonEmptyArray<A>): Array<A> => as.slice(0, -1)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const min: <A>(ord: Ord<A>) => (nea: NonEmptyArray<A>) => A = RNEA.min

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const max: <A>(ord: Ord<A>) => (nea: NonEmptyArray<A>) => A = RNEA.max

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const concatAll =
  <A>(S: Semigroup<A>) =>
  (as: NonEmptyArray<A>): A =>
    as.reduce(S.concat)

/**
 * Break an `Array` into its first element and remaining elements.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const matchLeft =
  <A, B>(f: (head: A, tail: Array<A>) => B) =>
  (as: NonEmptyArray<A>): B =>
    f(head(as), tail(as))

/**
 * Break an `Array` into its initial elements and the last element.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const matchRight =
  <A, B>(f: (init: Array<A>, last: A) => B) =>
  (as: NonEmptyArray<A>): B =>
    f(init(as), last(as))

/**
 * Apply a function to the head, creating a new `NonEmptyArray`.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const modifyHead =
  <A>(f: Endomorphism<A>) =>
  (as: NonEmptyArray<A>): NonEmptyArray<A> => [f(head(as)), ...tail(as)]

/**
 * Change the head, creating a new `NonEmptyArray`.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const updateHead = <A>(a: A): ((as: NonEmptyArray<A>) => NonEmptyArray<A>) => modifyHead(() => a)

/**
 * Apply a function to the last element, creating a new `NonEmptyArray`.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const modifyLast =
  <A>(f: Endomorphism<A>) =>
  (as: NonEmptyArray<A>): NonEmptyArray<A> =>
    pipe(init(as), append(f(last(as))))

/**
 * Change the last element, creating a new `NonEmptyArray`.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const updateLast = <A>(a: A): ((as: NonEmptyArray<A>) => NonEmptyArray<A>) => modifyLast(() => a)

/**
 * Places an element in between members of a `NonEmptyArray`, then folds the results using the provided `Semigroup`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { intercalate } from '@fp-tx/core/NonEmptyArray'
 *
 * assert.deepStrictEqual(intercalate(S.Semigroup)('-')(['a', 'b', 'c']), 'a-b-c')
 * ```
 *
 * @public
 */
export const intercalate: <A>(S: Semigroup<A>) => (middle: A) => (as: NonEmptyArray<A>) => A = RNEA.intercalate

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
export const chain: <A, B>(f: (a: A) => NonEmptyArray<B>) => (ma: NonEmptyArray<A>) => NonEmptyArray<B> = flatMap

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This is just `sort` followed by `group`.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export function groupSort<B>(O: Ord<B>): {
  <A extends B>(as: NonEmptyArray<A>): NonEmptyArray<NonEmptyArray<A>>
  <A extends B>(as: Array<A>): Array<NonEmptyArray<A>>
}
export function groupSort<A>(O: Ord<A>): (as: Array<A>) => Array<NonEmptyArray<A>> {
  const sortO = sort(O)
  const groupO = group(O)
  return as => (isNonEmpty(as) ? groupO(sortO(as)) : [])
}

/**
 * Use [`filter`](./Array.ts.html#filter) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export function filter<A, B extends A>(refinement: Refinement<A, B>): (as: NonEmptyArray<A>) => Option<NonEmptyArray<B>>
export function filter<A>(predicate: Predicate<A>): <B extends A>(bs: NonEmptyArray<B>) => Option<NonEmptyArray<B>>
export function filter<A>(predicate: Predicate<A>): (as: NonEmptyArray<A>) => Option<NonEmptyArray<A>>
export function filter<A>(predicate: Predicate<A>): (as: NonEmptyArray<A>) => Option<NonEmptyArray<A>> {
  return filterWithIndex((_, a) => predicate(a))
}

/**
 * Use [`filterWithIndex`](./Array.ts.html#filterwithindex) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const filterWithIndex =
  <A>(predicate: (i: number, a: A) => boolean) =>
  (as: NonEmptyArray<A>): Option<NonEmptyArray<A>> =>
    fromArray(as.filter((a, i) => predicate(i, a)))

/**
 * Use [`unprepend`](#unprepend) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const uncons: <A>(as: NonEmptyArray<A>) => [A, Array<A>] = unprepend

/**
 * Use [`unappend`](#unappend) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const unsnoc: <A>(as: NonEmptyArray<A>) => [Array<A>, A] = unappend

/**
 * Use [`prepend`](./Array.ts.html#prepend) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export function cons<A>(head: A): (tail: Array<A>) => NonEmptyArray<A>
/** @deprecated Zone of Death */
export function cons<A>(head: A, tail: Array<A>): NonEmptyArray<A>
export function cons<A>(head: A, tail?: Array<A>): NonEmptyArray<A> | ((tail: Array<A>) => NonEmptyArray<A>) {
  return tail === undefined ? prepend(head) : pipe(tail, prepend(head))
}

/**
 * Use [`append`](./Array.ts.html#append) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const snoc = <A>(init: Array<A>, end: A): NonEmptyArray<A> => pipe(init, append(end))

/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const prependToAll = prependAll

/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const fold: <A>(S: Semigroup<A>) => (fa: NonEmptyArray<A>) => A = RNEA.concatAll

/**
 * This instance is deprecated, use small, specific instances instead.
 *
 * For example if a function needs a `Functor` instance, pass `NEA.Functor` instead of `NEA.nonEmptyArray` (where `NEA`
 * is from `import NEA from 'fp-ts/NonEmptyArray'`)
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const nonEmptyArray: Monad1<URI> &
  Comonad1<URI> &
  TraversableWithIndex1<URI, number> &
  FunctorWithIndex1<URI, number> &
  FoldableWithIndex1<URI, number> &
  Alt1<URI> = {
  URI,
  of,
  map: _map,
  mapWithIndex: _mapWithIndex,
  ap: _ap,
  chain: flatMap,
  extend: _extend,
  extract: extract,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex,
  traverseWithIndex: _traverseWithIndex,
  alt: _alt,
}
