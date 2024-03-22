/**
 * Data structure which represents non-empty readonly arrays.
 *
 * ```ts
 * export type ReadonlyNonEmptyArray<A> = ReadonlyArray<A> & {
 *   readonly 0: A
 * }
 * ```
 *
 * Note that you don't need any conversion, a `ReadonlyNonEmptyArray` is a `ReadonlyArray`, so all `ReadonlyArray`'s
 * APIs can be used with a `ReadonlyNonEmptyArray` without further ado.
 *
 * @meta
 * {@since 1.0.0}
 * @packageDocumentation
 */
import { type Alt1 } from './Alt'
import { type Applicative as ApplicativeHKT, type Applicative1 } from './Applicative'
import { apFirst as apFirst_, type Apply1, apS as apS_, apSecond as apSecond_ } from './Apply'
import { bind as bind_, type Chain1, chainFirst as chainFirst_ } from './Chain'
import { type Comonad1 } from './Comonad'
import { type Endomorphism } from './Endomorphism'
import { type Eq, fromEquals } from './Eq'
import { type Extend1 } from './Extend'
import { type Foldable1 } from './Foldable'
import { type FoldableWithIndex1 } from './FoldableWithIndex'
import { dual, flow, identity, type LazyArg, pipe, SK } from './function'
import { bindTo as bindTo_, flap as flap_, type Functor1, let as let__ } from './Functor'
import { type FunctorWithIndex1 } from './FunctorWithIndex'
import { type HKT } from './HKT'
import * as _ from './internal'
import { type Monad1 } from './Monad'
import { type NonEmptyArray } from './NonEmptyArray'
import { type Option } from './Option'
import { getMonoid, type Ord } from './Ord'
import { type Pointed1 } from './Pointed'
import { type Predicate } from './Predicate'
import { type ReadonlyRecord } from './ReadonlyRecord'
import { type Refinement } from './Refinement'
import * as Se from './Semigroup'
import { type Semigroup } from './Semigroup'
import { type Show } from './Show'
import { type PipeableTraverse1, type Traversable1 } from './Traversable'
import { type PipeableTraverseWithIndex1, type TraversableWithIndex1 } from './TraversableWithIndex'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export type ReadonlyNonEmptyArray<A> = ReadonlyArray<A> & {
  readonly 0: A
}

// -------------------------------------------------------------------------------------
// internal
// -------------------------------------------------------------------------------------

/** @internal */
export const empty: ReadonlyArray<never> = _.emptyReadonlyArray

/** @internal */
export const isNonEmpty: <A>(as: ReadonlyArray<A>) => as is ReadonlyNonEmptyArray<A> = _.isNonEmpty

/** @internal */
export const isOutOfBound = <A>(i: number, as: ReadonlyArray<A>): boolean => i < 0 || i >= as.length

/** @internal */
export const prependW =
  <B>(head: B) =>
  <A>(tail: ReadonlyArray<A>): ReadonlyNonEmptyArray<A | B> => [head, ...tail]

/** @internal */
export const prepend: <A>(head: A) => (tail: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A> = prependW

/** @internal */
export const appendW =
  <B>(end: B) =>
  <A>(init: ReadonlyArray<A>): ReadonlyNonEmptyArray<A | B> =>
    [...init, end] as any

/** @internal */
export const append: <A>(end: A) => (init: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A> = appendW

/** @internal */
export const unsafeInsertAt = <A>(i: number, a: A, as: ReadonlyArray<A>): ReadonlyNonEmptyArray<A> => {
  if (isNonEmpty(as)) {
    const xs = _.fromReadonlyNonEmptyArray(as)
    xs.splice(i, 0, a)
    return xs
  }
  return [a]
}

/** @internal */
export const unsafeUpdateAt = <A>(i: number, a: A, as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A> => {
  if (as[i] === a) {
    return as
  } else {
    const xs = _.fromReadonlyNonEmptyArray(as)
    xs[i] = a
    return xs
  }
}

/**
 * Remove duplicates from a `ReadonlyNonEmptyArray`, keeping the first occurrence of an element.
 *
 * @example
 *
 * ```typescript
 * import { uniq } from '@fp-tx/core/ReadonlyNonEmptyArray'
 * import * as N from '@fp-tx/core/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const uniq =
  <A>(E: Eq<A>) =>
  (as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A> => {
    if (as.length === 1) {
      return as
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
 * Sort the elements of a `ReadonlyNonEmptyArray` in increasing order, where elements are compared using first
 * `ords[0]`, then `ords[1]`, etc...
 *
 * @example
 *
 * ```typescript
 * import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
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
 * const sortByNameByAge = RNEA.sortBy([byName, byAge])
 *
 * const persons: RNEA.ReadonlyNonEmptyArray<Person> = [
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
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const sortBy = <B>(
  ords: ReadonlyArray<Ord<B>>,
): (<A extends B>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>) => {
  if (isNonEmpty(ords)) {
    const M = getMonoid<B>()
    return sort(ords.reduce(M.concat, M.empty))
  }
  return identity
}

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const union = <A>(
  E: Eq<A>,
): ((second: ReadonlyNonEmptyArray<A>) => (first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>) => {
  const uniqE = uniq(E)
  return second => first => uniqE(pipe(first, concat(second)))
}

/**
 * Rotate a `ReadonlyNonEmptyArray` by `n` steps.
 *
 * @example
 *
 * ```typescript
 * import { rotate } from '@fp-tx/core/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 * assert.deepStrictEqual(rotate(-2)([1, 2, 3, 4, 5]), [3, 4, 5, 1, 2])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const rotate =
  (n: number) =>
  <A>(as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A> => {
    const len = as.length
    const m = Math.round(n) % len
    if (isOutOfBound(Math.abs(m), as) || m === 0) {
      return as
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
 * Return a `ReadonlyNonEmptyArray` from a `ReadonlyArray` returning `none` if the input is empty.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Conversions}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromReadonlyArray = <A>(as: ReadonlyArray<A>): Option<ReadonlyNonEmptyArray<A>> =>
  isNonEmpty(as) ? _.some(as) : _.none

/**
 * Return a `ReadonlyNonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @example
 *
 * ```typescript
 * import { makeBy } from '@fp-tx/core/ReadonlyNonEmptyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(pipe(5, makeBy(double)), [0, 2, 4, 6, 8])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const makeBy =
  <A>(f: (i: number) => A) =>
  (n: number): ReadonlyNonEmptyArray<A> => {
    const j = Math.max(0, Math.floor(n))
    const out: NonEmptyArray<A> = [f(0)]
    for (let i = 1; i < j; i++) {
      out.push(f(i))
    }
    return out
  }

/**
 * Create a `ReadonlyNonEmptyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a natural number.
 *
 * @example
 *
 * ```typescript
 * import { replicate } from '@fp-tx/core/ReadonlyNonEmptyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe(3, replicate('a')), ['a', 'a', 'a'])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const replicate = <A>(a: A): ((n: number) => ReadonlyNonEmptyArray<A>) => makeBy(() => a)

/**
 * Create a `ReadonlyNonEmptyArray` containing a range of integers, including both endpoints.
 *
 * @example
 *
 * ```typescript
 * import { range } from '@fp-tx/core/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4, 5])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const range = (start: number, end: number): ReadonlyNonEmptyArray<number> =>
  start <= end ? makeBy(i => start + i)(end - start + 1) : [start]

/**
 * Return the tuple of the `head` and the `tail`.
 *
 * @example
 *
 * ```typescript
 * import { unprepend } from '@fp-tx/core/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(unprepend([1, 2, 3, 4]), [1, [2, 3, 4]])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const unprepend = <A>(as: ReadonlyNonEmptyArray<A>): readonly [A, ReadonlyArray<A>] => [head(as), tail(as)]

/**
 * Return the tuple of the `init` and the `last`.
 *
 * @example
 *
 * ```typescript
 * import { unappend } from '@fp-tx/core/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(unappend([1, 2, 3, 4]), [[1, 2, 3], 4])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const unappend = <A>(as: ReadonlyNonEmptyArray<A>): readonly [ReadonlyArray<A>, A] => [init(as), last(as)]

/**
 * @meta
 * {@since 1.0.0}
 * {@category Conversions}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fromArray = <A>(as: Array<A>): Option<ReadonlyNonEmptyArray<A>> => fromReadonlyArray(as.slice())

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function concatW<B>(
  second: ReadonlyNonEmptyArray<B>,
): <A>(first: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A | B>
export function concatW<B>(
  second: ReadonlyArray<B>,
): <A>(first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A | B>
export function concatW<B>(second: ReadonlyArray<B>): <A>(first: ReadonlyNonEmptyArray<A>) => ReadonlyArray<A | B> {
  return <A>(first: ReadonlyNonEmptyArray<A | B>) => first.concat(second)
}

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function concat<A>(second: ReadonlyNonEmptyArray<A>): (first: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A>
export function concat<A>(second: ReadonlyArray<A>): (first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>
/** @deprecated Zone of Death */
export function concat<A>(first: ReadonlyArray<A>, second: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A>
/** @deprecated Zone of Death */
export function concat<A>(first: ReadonlyNonEmptyArray<A>, second: ReadonlyArray<A>): ReadonlyNonEmptyArray<A>
export function concat<A>(
  x: ReadonlyArray<A>,
  y?: ReadonlyArray<A>,
): ReadonlyArray<A> | ((y: ReadonlyNonEmptyArray<A>) => ReadonlyArray<A>) {
  return y ? x.concat(y) : y => y.concat(x)
}

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reverse = <A>(as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A> =>
  as.length === 1 ? as : [last(as), ...as.slice(0, -1).reverse()]

/**
 * Group equal, consecutive elements of a `ReadonlyArray` into `ReadonlyNonEmptyArray`s.
 *
 * @example
 *
 * ```typescript
 * import { group } from '@fp-tx/core/ReadonlyNonEmptyArray'
 * import * as N from '@fp-tx/core/number'
 *
 * assert.deepStrictEqual(group(N.Eq)([1, 2, 1, 1]), [[1], [2], [1, 1]])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function group<B>(E: Eq<B>): {
  <A extends B>(as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>
  <A extends B>(as: ReadonlyArray<A>): ReadonlyArray<ReadonlyNonEmptyArray<A>>
}
export function group<A>(E: Eq<A>): (as: ReadonlyArray<A>) => ReadonlyArray<ReadonlyNonEmptyArray<A>> {
  return as => {
    const len = as.length
    if (len === 0) {
      return empty
    }
    const out: Array<ReadonlyNonEmptyArray<A>> = []
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
 * @example
 *
 * ```typescript
 * import { groupBy } from '@fp-tx/core/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['a', 'b', 'ab']), {
 *   '1': ['a', 'b'],
 *   '2': ['ab'],
 * })
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const groupBy =
  <A>(f: (a: A) => string) =>
  (as: ReadonlyArray<A>): ReadonlyRecord<string, ReadonlyNonEmptyArray<A>> => {
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
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const sort =
  <B>(O: Ord<B>) =>
  <A extends B>(as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A> =>
    as.length === 1 ? as : (as.slice().sort(O.compare) as any)

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const updateAt = <A>(i: number, a: A): ((as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<A>>) =>
  modifyAt(i, () => a)

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const modifyAt =
  <A>(i: number, f: (a: A) => A) =>
  (as: ReadonlyNonEmptyArray<A>): Option<ReadonlyNonEmptyArray<A>> =>
    isOutOfBound(i, as) ? _.none : _.some(unsafeUpdateAt(i, f(as[i]), as))

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const zipWith = <A, B, C>(
  as: ReadonlyNonEmptyArray<A>,
  bs: ReadonlyNonEmptyArray<B>,
  f: (a: A, b: B) => C,
): ReadonlyNonEmptyArray<C> => {
  const cs: NonEmptyArray<C> = [f(as[0], bs[0])]
  const len = Math.min(as.length, bs.length)
  for (let i = 1; i < len; i++) {
    cs[i] = f(as[i], bs[i])
  }
  return cs
}

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function zip<B>(
  bs: ReadonlyNonEmptyArray<B>,
): <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<readonly [A, B]>
export function zip<A, B>(
  as: ReadonlyNonEmptyArray<A>,
  bs: ReadonlyNonEmptyArray<B>,
): ReadonlyNonEmptyArray<readonly [A, B]>
export function zip<A, B>(
  as: ReadonlyNonEmptyArray<A>,
  bs?: ReadonlyNonEmptyArray<B>,
): ReadonlyNonEmptyArray<readonly [A, B]> | ((bs: ReadonlyNonEmptyArray<B>) => ReadonlyNonEmptyArray<readonly [B, A]>) {
  if (bs === undefined) {
    return bs => zip(bs, as)
  }
  return zipWith(as, bs, (a, b) => [a, b])
}

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const unzip = <A, B>(
  abs: ReadonlyNonEmptyArray<readonly [A, B]>,
): readonly [ReadonlyNonEmptyArray<A>, ReadonlyNonEmptyArray<B>] => {
  const fa: NonEmptyArray<A> = [abs[0][0]]
  const fb: NonEmptyArray<B> = [abs[0][1]]
  for (let i = 1; i < abs.length; i++) {
    fa[i] = abs[i][0]
    fb[i] = abs[i][1]
  }
  return [fa, fb]
}

/**
 * Prepend an element to every member of a `ReadonlyNonEmptyArray`.
 *
 * @example
 *
 * ```typescript
 * import { prependAll } from '@fp-tx/core/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const prependAll =
  <A>(middle: A) =>
  (as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A> => {
    const out: NonEmptyArray<A> = [middle, as[0]]
    for (let i = 1; i < as.length; i++) {
      out.push(middle, as[i])
    }
    return out
  }

/**
 * Places an element in between members of a `ReadonlyNonEmptyArray`.
 *
 * @example
 *
 * ```typescript
 * import { intersperse } from '@fp-tx/core/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const intersperse =
  <A>(middle: A) =>
  (as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A> => {
    const rest = tail(as)
    return isNonEmpty(rest) ? pipe(rest, prependAll(middle), prepend(head(as))) : as
  }

/**
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainWithIndex =
  <A, B>(f: (i: number, a: A) => ReadonlyNonEmptyArray<B>) =>
  (as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<B> => {
    const out: NonEmptyArray<B> = _.fromReadonlyNonEmptyArray(f(0, head(as)))
    for (let i = 1; i < as.length; i++) {
      out.push(...f(i, as[i]))
    }
    return out
  }

/**
 * A useful recursion pattern for processing a `ReadonlyNonEmptyArray` to produce a new `ReadonlyNonEmptyArray`, often
 * used for "chopping" up the input `ReadonlyNonEmptyArray`. Typically `chop` is called with some function that will
 * consume an initial prefix of the `ReadonlyNonEmptyArray` and produce a value and the tail of the
 * `ReadonlyNonEmptyArray`.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chop =
  <A, B>(f: (as: ReadonlyNonEmptyArray<A>) => readonly [B, ReadonlyArray<A>]) =>
  (as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<B> => {
    const [b, rest] = f(as)
    const out: NonEmptyArray<B> = [b]
    let next: ReadonlyArray<A> = rest
    while (isNonEmpty(next)) {
      const [b, rest] = f(next)
      out.push(b)
      next = rest
    }
    return out
  }

/**
 * Splits a `ReadonlyNonEmptyArray` into two pieces, the first piece has max `n` elements.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const splitAt =
  (n: number) =>
  <A>(as: ReadonlyNonEmptyArray<A>): readonly [ReadonlyNonEmptyArray<A>, ReadonlyArray<A>] => {
    const m = Math.max(1, n)
    return m >= as.length ? [as, empty] : [pipe(as.slice(1, m), prepend(head(as))), as.slice(m)]
  }

/**
 * Splits a `ReadonlyNonEmptyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide
 * the length of the `ReadonlyNonEmptyArray`.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chunksOf = (
  n: number,
): (<A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>) => chop(splitAt(n))

const _map: Functor1<URI>['map'] = (fa, f) => pipe(fa, map(f))
/* istanbul ignore next */
const _mapWithIndex: FunctorWithIndex1<URI, number>['mapWithIndex'] = (fa, f) => pipe(fa, mapWithIndex(f))
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
): (<A, B>(ta: ReadonlyNonEmptyArray<A>, f: (a: A) => HKT<F, B>) => HKT<F, ReadonlyNonEmptyArray<B>>) => {
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
): (<A, B>(ta: ReadonlyNonEmptyArray<A>, f: (i: number, a: A) => HKT<F, B>) => HKT<F, ReadonlyNonEmptyArray<B>>) => {
  const traverseWithIndexF = traverseWithIndex(F)
  return (ta, f) => pipe(ta, traverseWithIndexF(f))
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const of: <A>(a: A) => ReadonlyNonEmptyArray<A> = _.singleton

/**
 * Less strict version of [`alt`](#alt).
 *
 * The `W` suffix (short for **W**idening) means that the return types will be merged.
 *
 * @example
 *
 * ```typescript
 * import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3] as RNEA.ReadonlyNonEmptyArray<number>,
 *     RNEA.altW(() => ['a', 'b']),
 *   ),
 *   [1, 2, 3, 'a', 'b'],
 * )
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const altW =
  <B>(that: LazyArg<ReadonlyNonEmptyArray<B>>) =>
  <A>(as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A | B> =>
    pipe(as, concatW(that()))

/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `ReadonlyNonEmptyArray` concatenates the inputs into a single array.
 *
 * @example
 *
 * ```typescript
 * import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3],
 *     RNEA.alt(() => [4, 5]),
 *   ),
 *   [1, 2, 3, 4, 5],
 * )
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Error handling}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const alt: <A>(
  that: LazyArg<ReadonlyNonEmptyArray<A>>,
) => (as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A> = altW

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const ap = <A>(
  as: ReadonlyNonEmptyArray<A>,
): (<B>(fab: ReadonlyNonEmptyArray<(a: A) => B>) => ReadonlyNonEmptyArray<B>) => flatMap(f => pipe(as, map(f)))

/**
 * @example
 *
 * ```typescript
 * import * as RNEA from '@fp-tx/core/ReadonlyNonEmptyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3],
 *     RNEA.flatMap(n => [`a${n}`, `b${n}`]),
 *   ),
 *   ['a1', 'b1', 'a2', 'b2', 'a3', 'b3'],
 * )
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatMap: {
  <A, B>(f: (a: A, i: number) => ReadonlyNonEmptyArray<B>): (ma: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>
  <A, B>(ma: ReadonlyNonEmptyArray<A>, f: (a: A, i: number) => ReadonlyNonEmptyArray<B>): ReadonlyNonEmptyArray<B>
} = /*#__PURE__*/ dual(
  2,
  <A, B>(ma: ReadonlyNonEmptyArray<A>, f: (a: A, i: number) => ReadonlyNonEmptyArray<B>): ReadonlyNonEmptyArray<B> =>
    pipe(
      ma,
      chainWithIndex((i, a) => f(a, i)),
    ),
)

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const extend =
  <A, B>(f: (as: ReadonlyNonEmptyArray<A>) => B) =>
  (as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<B> => {
    let next: ReadonlyArray<A> = tail(as)
    const out: NonEmptyArray<B> = [f(as)]
    while (isNonEmpty(next)) {
      out.push(f(next))
      next = tail(next)
    }
    return out
  }

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const duplicate: <A>(ma: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>> =
  /*#__PURE__*/ extend(identity)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flatten: <A>(mma: ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>) => ReadonlyNonEmptyArray<A> =
  /*#__PURE__*/ flatMap(identity)

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const map = <A, B>(f: (a: A) => B): ((as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B>) =>
  mapWithIndex((_, a) => f(a))

/**
 * @meta
 * {@since 1.0.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const mapWithIndex =
  <A, B>(f: (i: number, a: A) => B) =>
  (as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<B> => {
    const out: NonEmptyArray<B> = [f(0, head(as))]
    for (let i = 1; i < as.length; i++) {
      out.push(f(i, as[i]))
    }
    return out
  }

/**
 * @meta
 * {@since 1.0.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reduce = <A, B>(b: B, f: (b: B, a: A) => B): ((as: ReadonlyNonEmptyArray<A>) => B) =>
  reduceWithIndex(b, (_, b, a) => f(b, a))

/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const foldMap =
  <S>(S: Semigroup<S>) =>
  <A>(f: (a: A) => S) =>
  (as: ReadonlyNonEmptyArray<A>): S =>
    as.slice(1).reduce((s, a) => S.concat(s, f(a)), f(as[0]))

/**
 * @meta
 * {@since 1.0.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reduceRight = <A, B>(b: B, f: (a: A, b: B) => B): ((as: ReadonlyNonEmptyArray<A>) => B) =>
  reduceRightWithIndex(b, (_, b, a) => f(b, a))

/**
 * @meta
 * {@since 1.0.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reduceWithIndex =
  <A, B>(b: B, f: (i: number, b: B, a: A) => B) =>
  (as: ReadonlyNonEmptyArray<A>): B =>
    as.reduce((b, a, i) => f(i, b, a), b)

/**
 * **Note**. The constraint is relaxed: a `Semigroup` instead of a `Monoid`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const foldMapWithIndex =
  <S>(S: Semigroup<S>) =>
  <A>(f: (i: number, a: A) => S) =>
  (as: ReadonlyNonEmptyArray<A>): S =>
    as.slice(1).reduce((s, a, i) => S.concat(s, f(i + 1, a)), f(0, as[0]))

/**
 * @meta
 * {@since 1.0.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reduceRightWithIndex =
  <A, B>(b: B, f: (i: number, a: A, b: B) => B) =>
  (as: ReadonlyNonEmptyArray<A>): B =>
    as.reduceRight((b, a, i) => f(i, a, b), b)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverse: PipeableTraverse1<URI> = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(f: (a: A) => HKT<F, B>) => (as: ReadonlyNonEmptyArray<A>) => HKT<F, ReadonlyNonEmptyArray<B>>) => {
  const traverseWithIndexF = traverseWithIndex(F)
  return f => traverseWithIndexF((_, a) => f(a))
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const sequence: Traversable1<URI>['sequence'] = <F>(
  F: ApplicativeHKT<F>,
): (<A>(as: ReadonlyNonEmptyArray<HKT<F, A>>) => HKT<F, ReadonlyNonEmptyArray<A>>) => traverseWithIndex(F)(SK)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverseWithIndex: PipeableTraverseWithIndex1<URI, number> =
  <F>(F: ApplicativeHKT<F>) =>
  <A, B>(f: (i: number, a: A) => HKT<F, B>) =>
  (as: ReadonlyNonEmptyArray<A>): HKT<F, ReadonlyNonEmptyArray<B>> => {
    let out: HKT<F, ReadonlyNonEmptyArray<B>> = F.map(f(0, head(as)), of)
    for (let i = 1; i < as.length; i++) {
      out = F.ap(
        F.map(out, bs => (b: B) => pipe(bs, append(b))),
        f(i, as[i]),
      )
    }
    return out
  }

/**
 * @meta
 * {@since 1.0.0}
 * {@category Comonad}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const extract: Comonad1<URI>['extract'] = _.head

/**
 * @meta
 * {@since 1.0.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const URI = 'ReadonlyNonEmptyArray'

/**
 * @meta
 * {@since 1.0.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind<A> {
    readonly [URI]: ReadonlyNonEmptyArray<A>
  }
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getShow = <A>(S: Show<A>): Show<ReadonlyNonEmptyArray<A>> => ({
  show: as => `[${as.map(S.show).join(', ')}]`,
})

/**
 * Builds a `Semigroup` instance for `ReadonlyNonEmptyArray`
 *
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getSemigroup = <A = never>(): Semigroup<ReadonlyNonEmptyArray<A>> => ({
  concat,
})

/**
 * @example
 *
 * ```typescript
 * import { getEq } from '@fp-tx/core/ReadonlyNonEmptyArray'
 * import * as N from '@fp-tx/core/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals([1, 2], [1, 2]), true)
 * assert.strictEqual(E.equals([1, 2], [1, 3]), false)
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getEq = <A>(E: Eq<A>): Eq<ReadonlyNonEmptyArray<A>> =>
  fromEquals((xs, ys) => xs.length === ys.length && xs.every((x, i) => E.equals(x, ys[i])))

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getUnionSemigroup = <A>(E: Eq<A>): Semigroup<ReadonlyNonEmptyArray<A>> => {
  const unionE = union(E)
  return {
    concat: (first, second) => unionE(second)(first),
  }
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Functor: Functor1<URI> = {
  URI,
  map: _map,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Pointed: Pointed1<URI> = {
  URI,
  of,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const FunctorWithIndex: FunctorWithIndex1<URI, number> = {
  URI,
  map: _map,
  mapWithIndex: _mapWithIndex,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apFirst = /*#__PURE__*/ apFirst_(Apply)

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apSecond = /*#__PURE__*/ apSecond_(Apply)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Applicative: Applicative1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @example
 *
 * ```typescript
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3],
 *     RA.chainFirst(() => ['a', 'b']),
 *   ),
 *   [1, 1, 2, 2, 3, 3],
 * )
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@category Sequencing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chainFirst: <A, B>(
  f: (a: A) => ReadonlyNonEmptyArray<B>,
) => (first: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A> = /*#__PURE__*/ chainFirst_(Chain)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Foldable: Foldable1<URI> = {
  URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Alt: Alt1<URI> = {
  URI,
  map: _map,
  alt: _alt,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Do: ReadonlyNonEmptyArray<{}> = /*#__PURE__*/ of(_.emptyRecord)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bindTo = /*#__PURE__*/ bindTo_(Functor)

const let_ = /*#__PURE__*/ let__(Functor)

export {
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Do notation}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  let_ as let,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const bind = /*#__PURE__*/ bind_(Chain)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const apS = /*#__PURE__*/ apS_(Apply)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const head: <A>(as: ReadonlyNonEmptyArray<A>) => A = extract

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tail: <A>(as: ReadonlyNonEmptyArray<A>) => ReadonlyArray<A> = _.tail

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const last = <A>(as: ReadonlyNonEmptyArray<A>): A => as[as.length - 1]

/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 *
 * ```typescript
 * import { init } from '@fp-tx/core/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const init = <A>(as: ReadonlyNonEmptyArray<A>): ReadonlyArray<A> => as.slice(0, -1)

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const min = <A>(O: Ord<A>): ((as: ReadonlyNonEmptyArray<A>) => A) => {
  const S = Se.min(O)
  return as => as.reduce(S.concat)
}

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const max = <A>(O: Ord<A>): ((as: ReadonlyNonEmptyArray<A>) => A) => {
  const S = Se.max(O)
  return as => as.reduce(S.concat)
}

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const concatAll =
  <A>(S: Semigroup<A>) =>
  (as: ReadonlyNonEmptyArray<A>): A =>
    as.reduce(S.concat)

/**
 * Break a `ReadonlyArray` into its first element and remaining elements.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const matchLeft =
  <A, B>(f: (head: A, tail: ReadonlyArray<A>) => B) =>
  (as: ReadonlyNonEmptyArray<A>): B =>
    f(head(as), tail(as))

/**
 * Break a `ReadonlyArray` into its initial elements and the last element.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Pattern matching}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const matchRight =
  <A, B>(f: (init: ReadonlyArray<A>, last: A) => B) =>
  (as: ReadonlyNonEmptyArray<A>): B =>
    f(init(as), last(as))

/**
 * Apply a function to the head, creating a new `ReadonlyNonEmptyArray`.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const modifyHead =
  <A>(f: Endomorphism<A>) =>
  (as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A> => [f(head(as)), ...tail(as)]

/**
 * Change the head, creating a new `ReadonlyNonEmptyArray`.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const updateHead = <A>(a: A): ((as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>) => modifyHead(() => a)

/**
 * Apply a function to the last element, creating a new `ReadonlyNonEmptyArray`.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const modifyLast =
  <A>(f: Endomorphism<A>) =>
  (as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<A> =>
    pipe(init(as), append(f(last(as))))

/**
 * Change the last element, creating a new `ReadonlyNonEmptyArray`.
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const updateLast = <A>(a: A): ((as: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<A>) => modifyLast(() => a)

/**
 * Places an element in between members of a `ReadonlyNonEmptyArray`, then folds the results using the provided
 * `Semigroup`.
 *
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { intercalate } from '@fp-tx/core/ReadonlyNonEmptyArray'
 *
 * assert.deepStrictEqual(intercalate(S.Semigroup)('-')(['a', 'b', 'c']), 'a-b-c')
 * ```
 *
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const intercalate = <A>(S: Semigroup<A>): ((middle: A) => (as: ReadonlyNonEmptyArray<A>) => A) => {
  const concatAllS = concatAll(S)
  return middle => flow(intersperse(middle), concatAllS)
}

// -------------------------------------------------------------------------------------
// legacy
// -------------------------------------------------------------------------------------

/**
 * Alias of `flatMap`.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Legacy}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const chain: <A, B>(
  f: (a: A) => ReadonlyNonEmptyArray<B>,
) => (ma: ReadonlyNonEmptyArray<A>) => ReadonlyNonEmptyArray<B> = flatMap

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This is just `sort` followed by `group`.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function groupSort<B>(O: Ord<B>): {
  <A extends B>(as: ReadonlyNonEmptyArray<A>): ReadonlyNonEmptyArray<ReadonlyNonEmptyArray<A>>
  <A extends B>(as: ReadonlyArray<A>): ReadonlyArray<ReadonlyNonEmptyArray<A>>
}
export function groupSort<A>(O: Ord<A>): (as: ReadonlyArray<A>) => ReadonlyArray<ReadonlyNonEmptyArray<A>> {
  const sortO = sort(O)
  const groupO = group(O)
  return as => (isNonEmpty(as) ? groupO(sortO(as)) : empty)
}

/**
 * Use [`filter`](./ReadonlyArray#filter) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function filter<A, B extends A>(
  refinement: Refinement<A, B>,
): (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<B>>
export function filter<A>(
  predicate: Predicate<A>,
): <B extends A>(bs: ReadonlyNonEmptyArray<B>) => Option<ReadonlyNonEmptyArray<B>>
export function filter<A>(predicate: Predicate<A>): (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<A>>
export function filter<A>(predicate: Predicate<A>): (as: ReadonlyNonEmptyArray<A>) => Option<ReadonlyNonEmptyArray<A>> {
  return filterWithIndex((_, a) => predicate(a))
}

/**
 * Use [`filterWithIndex`](./ReadonlyArray#filterwithindex) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const filterWithIndex =
  <A>(predicate: (i: number, a: A) => boolean) =>
  (as: ReadonlyNonEmptyArray<A>): Option<ReadonlyNonEmptyArray<A>> =>
    fromReadonlyArray(as.filter((a, i) => predicate(i, a)))

/**
 * Use [`unprepend`](#unprepend) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const uncons: <A>(as: ReadonlyNonEmptyArray<A>) => readonly [A, ReadonlyArray<A>] = unprepend

/**
 * Use [`unappend`](#unappend) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const unsnoc: <A>(as: ReadonlyNonEmptyArray<A>) => readonly [ReadonlyArray<A>, A] = unappend

/**
 * Use [`prepend`](./ReadonlyArray#prepend) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function cons<A>(head: A): (tail: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A>
/** @deprecated Zone of Death */
export function cons<A>(head: A, tail: ReadonlyArray<A>): ReadonlyNonEmptyArray<A>
export function cons<A>(
  head: A,
  tail?: ReadonlyArray<A>,
): ReadonlyNonEmptyArray<A> | ((tail: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A>) {
  return tail === undefined ? prepend(head) : pipe(tail, prepend(head))
}

/**
 * Use [`append`](./ReadonlyArray#append) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const snoc = <A>(init: ReadonlyArray<A>, end: A): ReadonlyNonEmptyArray<A> => pipe(init, concat([end]))

/**
 * Use [`insertAt`](./ReadonlyArray#insertat) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const insertAt =
  <A>(i: number, a: A) =>
  (as: ReadonlyArray<A>): Option<ReadonlyNonEmptyArray<A>> =>
    i < 0 || i > as.length ? _.none : _.some(unsafeInsertAt(i, a, as))

/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const prependToAll = prependAll

/**
 * Use [`concatAll`](#concatall) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fold = concatAll

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `RNEA.Functor` instead of `RNEA.readonlyNonEmptyArray`
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const readonlyNonEmptyArray: Monad1<URI> &
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
