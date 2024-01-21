/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Alt1 } from './Alt'
import { type Alternative1 } from './Alternative'
import { type Applicative as ApplicativeHKT, type Applicative1 } from './Applicative'
import { apFirst as apFirst_, type Apply1, apS as apS_, apSecond as apSecond_ } from './Apply'
import { bind as bind_, type Chain1, chainFirst as chainFirst_ } from './Chain'
import { type ChainRec1 } from './ChainRec'
import { type Compactable1 } from './Compactable'
import { type Either } from './Either'
import { type Eq, fromEquals } from './Eq'
import { type Extend1 } from './Extend'
import { type Filterable1 } from './Filterable'
import { type FilterableWithIndex1, type PredicateWithIndex, type RefinementWithIndex } from './FilterableWithIndex'
import { type Foldable1 } from './Foldable'
import { type FoldableWithIndex1 } from './FoldableWithIndex'
import { type FromEither1, fromEitherK as fromEitherK_ } from './FromEither'
import { dual, identity, type LazyArg, pipe } from './function'
import { bindTo as bindTo_, flap as flap_, type Functor1, let as let__ } from './Functor'
import { type FunctorWithIndex1 } from './FunctorWithIndex'
import { type HKT } from './HKT'
import * as _ from './internal'
import { type Magma } from './Magma'
import { type Monad1 } from './Monad'
import { type Monoid } from './Monoid'
import { type NonEmptyArray } from './NonEmptyArray'
import * as N from './number'
import { type Option } from './Option'
import { fromCompare, type Ord } from './Ord'
import { type Pointed1 } from './Pointed'
import { type Predicate } from './Predicate'
import * as RNEA from './ReadonlyNonEmptyArray'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import { type Separated, separated } from './Separated'
import { type Show } from './Show'
import { type PipeableTraverse1, type Traversable1 } from './Traversable'
import { type PipeableTraverseWithIndex1, type TraversableWithIndex1 } from './TraversableWithIndex'
import { type Unfoldable1 } from './Unfoldable'
import {
  filterE as filterE_,
  type PipeableWilt1,
  type PipeableWither1,
  wiltDefault,
  type Witherable1,
  witherDefault,
} from './Witherable'
import { guard as guard_, type Zero1 } from './Zero'

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * Test whether a `ReadonlyArray` is empty.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Refinements
 * @example
 *
 * ```typescript
 * import { isEmpty } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.strictEqual(isEmpty([]), true)
 * ```
 *
 * @public
 */
export const isEmpty = <A>(as: ReadonlyArray<A>): as is readonly [] => as.length === 0

/**
 * Test whether a `ReadonlyArray` is non empty.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Refinements
 * @public
 */
export const isNonEmpty: <A>(as: ReadonlyArray<A>) => as is ReadonlyNonEmptyArray<A> = RNEA.isNonEmpty

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Prepend an element to the front of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { prepend } from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe([2, 3, 4], prepend(1)), [1, 2, 3, 4])
 * ```
 *
 * @public
 */
export const prepend = RNEA.prepend

/**
 * Less strict version of [`prepend`](#prepend).
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const prependW = RNEA.prependW

/**
 * Append an element to the end of a `ReadonlyArray`, creating a new `ReadonlyNonEmptyArray`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { append } from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], append(4)), [1, 2, 3, 4])
 * ```
 *
 * @public
 */
export const append = RNEA.append

/**
 * Less strict version of [`append`](#append).
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const appendW = RNEA.appendW

/**
 * Return a `ReadonlyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @example
 *
 * ```typescript
 * import { makeBy } from '@fp-tx/core/ReadonlyArray'
 *
 * const double = (n: number): number => n * 2
 * assert.deepStrictEqual(makeBy(5, double), [0, 2, 4, 6, 8])
 * ```
 *
 * @public
 */
export const makeBy = <A>(n: number, f: (i: number) => A): ReadonlyArray<A> => (n <= 0 ? empty : RNEA.makeBy(f)(n))

/**
 * Create a `ReadonlyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @example
 *
 * ```typescript
 * import { replicate } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(replicate(3, 'a'), ['a', 'a', 'a'])
 * ```
 *
 * @public
 */
export const replicate = <A>(n: number, a: A): ReadonlyArray<A> => makeBy(n, () => a)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export function fromPredicate<A, B extends A>(refinement: Refinement<A, B>): (a: A) => ReadonlyArray<B>
export function fromPredicate<A>(predicate: Predicate<A>): <B extends A>(b: B) => ReadonlyArray<B>
export function fromPredicate<A>(predicate: Predicate<A>): (a: A) => ReadonlyArray<A>
export function fromPredicate<A>(predicate: Predicate<A>): (a: A) => ReadonlyArray<A> {
  return a => (predicate(a) ? [a] : empty)
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
export const fromOption: <A>(fa: Option<A>) => ReadonlyArray<A> = ma => (_.isNone(ma) ? empty : [ma.value])

/**
 * Transforms an `Either` to a `ReadonlyArray`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromEither: <A>(fa: Either<unknown, A>) => ReadonlyArray<A> = e => (_.isLeft(e) ? empty : [e.right])

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
  <B, A, C>(onEmpty: LazyArg<B>, onNonEmpty: (as: ReadonlyNonEmptyArray<A>) => C) =>
  (as: ReadonlyArray<A>): B | C =>
    isNonEmpty(as) ? onNonEmpty(as) : onEmpty()

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const match: <B, A>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (as: ReadonlyNonEmptyArray<A>) => B,
) => (as: ReadonlyArray<A>) => B = matchW

/**
 * Less strict version of [`matchLeft`](#matchleft).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const matchLeftW =
  <B, A, C>(onEmpty: LazyArg<B>, onNonEmpty: (head: A, tail: ReadonlyArray<A>) => C) =>
  (as: ReadonlyArray<A>): B | C =>
    isNonEmpty(as) ? onNonEmpty(RNEA.head(as), RNEA.tail(as)) : onEmpty()

/**
 * Break a `ReadonlyArray` into its first element and remaining elements.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @example
 *
 * ```typescript
 * import { matchLeft } from '@fp-tx/core/ReadonlyArray'
 *
 * const len: <A>(as: ReadonlyArray<A>) => number = matchLeft(
 *   () => 0,
 *   (_, tail) => 1 + len(tail),
 * )
 * assert.strictEqual(len([1, 2, 3]), 3)
 * ```
 *
 * @public
 */
export const matchLeft: <B, A>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (head: A, tail: ReadonlyArray<A>) => B,
) => (as: ReadonlyArray<A>) => B = matchLeftW

/**
 * Alias of [`matchLeft`](#matchleft).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const foldLeft: <A, B>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (head: A, tail: ReadonlyArray<A>) => B,
) => (as: ReadonlyArray<A>) => B = matchLeft

/**
 * Less strict version of [`matchRight`](#matchright).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const matchRightW =
  <B, A, C>(onEmpty: LazyArg<B>, onNonEmpty: (init: ReadonlyArray<A>, last: A) => C) =>
  (as: ReadonlyArray<A>): B | C =>
    isNonEmpty(as) ? onNonEmpty(RNEA.init(as), RNEA.last(as)) : onEmpty()

/**
 * Break a `ReadonlyArray` into its initial elements and the last element.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const matchRight: <B, A>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (init: ReadonlyArray<A>, last: A) => B,
) => (as: ReadonlyArray<A>) => B = matchRightW

/**
 * Alias of [`matchRight`](#matchright).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @public
 */
export const foldRight: <A, B>(
  onEmpty: LazyArg<B>,
  onNonEmpty: (init: ReadonlyArray<A>, last: A) => B,
) => (as: ReadonlyArray<A>) => B = matchRight

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const chainWithIndex =
  <A, B>(f: (i: number, a: A) => ReadonlyArray<B>) =>
  (as: ReadonlyArray<A>): ReadonlyArray<B> => {
    if (isEmpty(as)) {
      return empty
    }
    const out: Array<B> = []
    for (let i = 0; i < as.length; i++) {
      out.push(...f(i, as[i]))
    }
    return out
  }

/**
 * Same as `reduce` but it carries over the intermediate steps.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { scanLeft } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanLeft(10, (b, a: number) => b - a)([1, 2, 3]), [10, 9, 7, 4])
 * ```
 *
 * @public
 */
export const scanLeft =
  <A, B>(b: B, f: (b: B, a: A) => B) =>
  (as: ReadonlyArray<A>): ReadonlyNonEmptyArray<B> => {
    const len = as.length
    const out = new Array(len + 1) as NonEmptyArray<B>
    out[0] = b
    for (let i = 0; i < len; i++) {
      out[i + 1] = f(out[i], as[i])
    }
    return out
  }

/**
 * Fold an array from the right, keeping all intermediate results instead of only the final result
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { scanRight } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(scanRight(10, (a: number, b) => b - a)([1, 2, 3]), [4, 5, 7, 10])
 * ```
 *
 * @public
 */
export const scanRight =
  <A, B>(b: B, f: (a: A, b: B) => B) =>
  (as: ReadonlyArray<A>): ReadonlyNonEmptyArray<B> => {
    const len = as.length
    const out = new Array(len + 1) as NonEmptyArray<B>
    out[len] = b
    for (let i = len - 1; i >= 0; i--) {
      out[i] = f(as[i], out[i + 1])
    }
    return out
  }

/**
 * Calculate the number of elements in a `ReadonlyArray`.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const size = <A>(as: ReadonlyArray<A>): number => as.length

/**
 * Test whether an array contains a particular index
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const isOutOfBound: <A>(i: number, as: ReadonlyArray<A>) => boolean = RNEA.isOutOfBound

// TODO: remove non-curried overloading in v3
/**
 * This function provides a safe way to read a value at a particular index from an array
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { lookup } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(1)), some(2))
 * assert.deepStrictEqual(pipe([1, 2, 3], lookup(3)), none)
 * ```
 *
 * @public
 */
export function lookup(i: number): <A>(as: ReadonlyArray<A>) => Option<A>
export function lookup<A>(i: number, as: ReadonlyArray<A>): Option<A>
export function lookup<A>(i: number, as?: ReadonlyArray<A>): Option<A> | (<A>(as: ReadonlyArray<A>) => Option<A>) {
  return (
    as === undefined ? as => lookup(i, as)
    : isOutOfBound(i, as) ? _.none
    : _.some(as[i])
  )
}

/**
 * Get the first element in an array, or `None` if the array is empty
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { head } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(head([1, 2, 3]), some(1))
 * assert.deepStrictEqual(head([]), none)
 * ```
 *
 * @public
 */
export const head = <A>(as: ReadonlyArray<A>): Option<A> => (isNonEmpty(as) ? _.some(RNEA.head(as)) : _.none)

/**
 * Get the last element in an array, or `None` if the array is empty
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { last } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(last([1, 2, 3]), some(3))
 * assert.deepStrictEqual(last([]), none)
 * ```
 *
 * @public
 */
export const last = <A>(as: ReadonlyArray<A>): Option<A> => (isNonEmpty(as) ? _.some(RNEA.last(as)) : _.none)

/**
 * Get all but the first element of an array, creating a new array, or `None` if the array is empty
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { tail } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(tail([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(tail([]), none)
 * ```
 *
 * @public
 */
export const tail = <A>(as: ReadonlyArray<A>): Option<ReadonlyArray<A>> =>
  isNonEmpty(as) ? _.some(RNEA.tail(as)) : _.none

/**
 * Get all but the last element of an array, creating a new array, or `None` if the array is empty
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { init } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), some([1, 2]))
 * assert.deepStrictEqual(init([]), none)
 * ```
 *
 * @public
 */
export const init = <A>(as: ReadonlyArray<A>): Option<ReadonlyArray<A>> =>
  isNonEmpty(as) ? _.some(RNEA.init(as)) : _.none

/**
 * Keep only a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeLeft(2)), [1, 2])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeLeft(4)), input)
 * assert.strictEqual(pipe(input, RA.takeLeft(-1)), input)
 * ```
 *
 * @public
 */
export const takeLeft =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): ReadonlyArray<A> =>
    isOutOfBound(n, as) ? as
    : n === 0 ? empty
    : as.slice(0, n)

/**
 * Keep only a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.takeRight(2)), [2, 3])
 *
 * // out of bounds
 * assert.strictEqual(pipe(input, RA.takeRight(4)), input)
 * assert.strictEqual(pipe(input, RA.takeRight(-1)), input)
 * ```
 *
 * @public
 */
export const takeRight =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): ReadonlyArray<A> =>
    isOutOfBound(n, as) ? as
    : n === 0 ? empty
    : as.slice(-n)

/**
 * Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { takeLeftWhile } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(takeLeftWhile((n: number) => n % 2 === 0)([2, 4, 3, 6]), [2, 4])
 * ```
 *
 * @public
 */
export function takeLeftWhile<A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyArray<A>) => ReadonlyArray<B>
export function takeLeftWhile<A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => ReadonlyArray<B>
export function takeLeftWhile<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => ReadonlyArray<A>
export function takeLeftWhile<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => ReadonlyArray<A> {
  return (as: ReadonlyArray<A>) => {
    const out: Array<A> = []
    for (const a of as) {
      if (!predicate(a)) {
        break
      }
      out.push(a)
    }
    const len = out.length
    return (
      len === as.length ? as
      : len === 0 ? empty
      : out
    )
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export interface Spanned<I, R> {
  readonly init: ReadonlyArray<I>
  readonly rest: ReadonlyArray<R>
}

const spanLeftIndex = <A>(as: ReadonlyArray<A>, predicate: Predicate<A>): number => {
  const l = as.length
  let i = 0
  for (; i < l; i++) {
    if (!predicate(as[i])) {
      break
    }
  }
  return i
}

/**
 * Split an array into two parts:
 *
 * 1. The longest initial subarray for which all elements satisfy the specified predicate
 * 2. The remaining elements
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { spanLeft } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(spanLeft((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), { init: [1, 3], rest: [2, 4, 5] })
 * ```
 *
 * @public
 */
export function spanLeft<A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyArray<A>) => Spanned<B, A>
export function spanLeft<A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => Spanned<B, B>
export function spanLeft<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Spanned<A, A>
export function spanLeft<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Spanned<A, A> {
  return as => {
    const [init, rest] = splitAt(spanLeftIndex(as, predicate))(as)
    return { init, rest }
  }
}

/**
 * Drop a max number of elements from the start of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropLeft(2)), [3])
 * assert.strictEqual(pipe(input, RA.dropLeft(0)), input)
 * assert.strictEqual(pipe(input, RA.dropLeft(-1)), input)
 * ```
 *
 * @public
 */
export const dropLeft =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): ReadonlyArray<A> =>
    n <= 0 || isEmpty(as) ? as
    : n >= as.length ? empty
    : as.slice(n, as.length)

/**
 * Drop a max number of elements from the end of an `ReadonlyArray`, creating a new `ReadonlyArray`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * const input: ReadonlyArray<number> = [1, 2, 3]
 * assert.deepStrictEqual(pipe(input, RA.dropRight(2)), [1])
 * assert.strictEqual(pipe(input, RA.dropRight(0)), input)
 * assert.strictEqual(pipe(input, RA.dropRight(-1)), input)
 * ```
 *
 * @public
 */
export const dropRight =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): ReadonlyArray<A> =>
    n <= 0 || isEmpty(as) ? as
    : n >= as.length ? empty
    : as.slice(0, as.length - n)

/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new array
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { dropLeftWhile } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(dropLeftWhile((n: number) => n % 2 === 1)([1, 3, 2, 4, 5]), [2, 4, 5])
 * ```
 *
 * @public
 */
export function dropLeftWhile<A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyArray<A>) => ReadonlyArray<B>
export function dropLeftWhile<A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => ReadonlyArray<B>
export function dropLeftWhile<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => ReadonlyArray<A>
export function dropLeftWhile<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => ReadonlyArray<A> {
  return as => {
    const i = spanLeftIndex(as, predicate)
    return (
      i === 0 ? as
      : i === as.length ? empty
      : as.slice(i)
    )
  }
}

/**
 * Find the first index for which a predicate holds
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { findIndex } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([1, 2, 3]), some(1))
 * assert.deepStrictEqual(findIndex((n: number) => n === 2)([]), none)
 * ```
 *
 * @public
 */
export const findIndex =
  <A>(predicate: Predicate<A>) =>
  (as: ReadonlyArray<A>): Option<number> => {
    for (let i = 0; i < as.length; i++) {
      if (predicate(as[i])) {
        return _.some(i)
      }
    }
    return _.none
  }

/**
 * Find the first element which satisfies a predicate (or a refinement) function
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { findFirst } from '@fp-tx/core/ReadonlyArray'
 * import { some } from '@fp-tx/core/Option'
 *
 * type X = {
 *   readonly a: number
 *   readonly b: number
 * }
 *
 * assert.deepStrictEqual(
 *   findFirst((x: X) => x.a === 1)([
 *     { a: 1, b: 1 },
 *     { a: 1, b: 2 },
 *   ]),
 *   some({ a: 1, b: 1 }),
 * )
 * ```
 *
 * @public
 */
export function findFirst<A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyArray<A>) => Option<B>
export function findFirst<A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => Option<B>
export function findFirst<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Option<A>
export function findFirst<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Option<A> {
  return as => {
    for (let i = 0; i < as.length; i++) {
      if (predicate(as[i])) {
        return _.some(as[i])
      }
    }
    return _.none
  }
}

/**
 * Find the first element returned by an option based selector function
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { findFirstMap } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the first person that has an age
 * assert.deepStrictEqual(
 *   findFirstMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons),
 *   some('Mary'),
 * )
 * ```
 *
 * @public
 */
export const findFirstMap =
  <A, B>(f: (a: A) => Option<B>) =>
  (as: ReadonlyArray<A>): Option<B> => {
    for (let i = 0; i < as.length; i++) {
      const out = f(as[i])
      if (_.isSome(out)) {
        return out
      }
    }
    return _.none
  }

/**
 * Find the last element which satisfies a predicate function
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { findLast } from '@fp-tx/core/ReadonlyArray'
 * import { some } from '@fp-tx/core/Option'
 *
 * type X = {
 *   readonly a: number
 *   readonly b: number
 * }
 *
 * assert.deepStrictEqual(
 *   findLast((x: X) => x.a === 1)([
 *     { a: 1, b: 1 },
 *     { a: 1, b: 2 },
 *   ]),
 *   some({ a: 1, b: 2 }),
 * )
 * ```
 *
 * @public
 */
export function findLast<A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyArray<A>) => Option<B>
export function findLast<A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => Option<B>
export function findLast<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Option<A>
export function findLast<A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Option<A> {
  return as => {
    for (let i = as.length - 1; i >= 0; i--) {
      if (predicate(as[i])) {
        return _.some(as[i])
      }
    }
    return _.none
  }
}

/**
 * Find the last element returned by an option based selector function
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { findLastMap } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age?: number
 * }
 *
 * const persons: ReadonlyArray<Person> = [{ name: 'John' }, { name: 'Mary', age: 45 }, { name: 'Joey', age: 28 }]
 *
 * // returns the name of the last person that has an age
 * assert.deepStrictEqual(
 *   findLastMap((p: Person) => (p.age === undefined ? none : some(p.name)))(persons),
 *   some('Joey'),
 * )
 * ```
 *
 * @public
 */
export const findLastMap =
  <A, B>(f: (a: A) => Option<B>) =>
  (as: ReadonlyArray<A>): Option<B> => {
    for (let i = as.length - 1; i >= 0; i--) {
      const out = f(as[i])
      if (_.isSome(out)) {
        return out
      }
    }
    return _.none
  }

/**
 * Returns the index of the last element of the list which matches the predicate
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { findLastIndex } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 *
 * interface X {
 *   readonly a: number
 *   readonly b: number
 * }
 * const xs: ReadonlyArray<X> = [
 *   { a: 1, b: 0 },
 *   { a: 1, b: 1 },
 * ]
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 1)(xs), some(1))
 * assert.deepStrictEqual(findLastIndex((x: { readonly a: number }) => x.a === 4)(xs), none)
 * ```
 *
 * @public
 */
export const findLastIndex =
  <A>(predicate: Predicate<A>) =>
  (as: ReadonlyArray<A>): Option<number> => {
    for (let i = as.length - 1; i >= 0; i--) {
      if (predicate(as[i])) {
        return _.some(i)
      }
    }
    return _.none
  }

/**
 * Insert an element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { insertAt } from '@fp-tx/core/ReadonlyArray'
 * import { some } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(insertAt(2, 5)([1, 2, 3, 4]), some([1, 2, 5, 3, 4]))
 * ```
 *
 * @public
 */
export const insertAt =
  <A>(i: number, a: A) =>
  (as: ReadonlyArray<A>): Option<ReadonlyNonEmptyArray<A>> =>
    i < 0 || i > as.length ? _.none : _.some(RNEA.unsafeInsertAt(i, a, as))

/**
 * Change the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { updateAt } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(updateAt(1, 1)([1, 2, 3]), some([1, 1, 3]))
 * assert.deepStrictEqual(updateAt(1, 1)([]), none)
 * ```
 *
 * @public
 */
export const updateAt = <A>(i: number, a: A): ((as: ReadonlyArray<A>) => Option<ReadonlyArray<A>>) =>
  modifyAt(i, () => a)

/**
 * Delete the element at the specified index, creating a new array, or returning `None` if the index is out of bounds
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { deleteAt } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 *
 * assert.deepStrictEqual(deleteAt(0)([1, 2, 3]), some([2, 3]))
 * assert.deepStrictEqual(deleteAt(1)([]), none)
 * ```
 *
 * @public
 */
export const deleteAt =
  (i: number) =>
  <A>(as: ReadonlyArray<A>): Option<ReadonlyArray<A>> =>
    isOutOfBound(i, as) ? _.none : _.some(unsafeDeleteAt(i, as))

/**
 * Apply a function to the element at the specified index, creating a new array, or returning `None` if the index is out
 * of bounds
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { modifyAt } from '@fp-tx/core/ReadonlyArray'
 * import { some, none } from '@fp-tx/core/Option'
 *
 * const double = (x: number): number => x * 2
 * assert.deepStrictEqual(modifyAt(1, double)([1, 2, 3]), some([1, 4, 3]))
 * assert.deepStrictEqual(modifyAt(1, double)([]), none)
 * ```
 *
 * @public
 */
export const modifyAt =
  <A>(i: number, f: (a: A) => A) =>
  (as: ReadonlyArray<A>): Option<ReadonlyArray<A>> =>
    isOutOfBound(i, as) ? _.none : _.some(unsafeUpdateAt(i, f(as[i]), as))

/**
 * Reverse an array, creating a new array
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { reverse } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(reverse([1, 2, 3]), [3, 2, 1])
 * ```
 *
 * @public
 */
export const reverse = <A>(as: ReadonlyArray<A>): ReadonlyArray<A> => (as.length <= 1 ? as : as.slice().reverse())

/**
 * Extracts from an array of `Either` all the `Right` elements. All the `Right` elements are extracted in order
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { rights } from '@fp-tx/core/ReadonlyArray'
 * import { right, left } from '@fp-tx/core/Either'
 *
 * assert.deepStrictEqual(rights([right(1), left('foo'), right(2)]), [1, 2])
 * ```
 *
 * @public
 */
export const rights = <E, A>(as: ReadonlyArray<Either<E, A>>): ReadonlyArray<A> => {
  const r: Array<A> = []
  for (let i = 0; i < as.length; i++) {
    const a = as[i]
    if (a._tag === 'Right') {
      r.push(a.right)
    }
  }
  return r
}

/**
 * Extracts from an array of `Either` all the `Left` elements. All the `Left` elements are extracted in order
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { lefts } from '@fp-tx/core/ReadonlyArray'
 * import { left, right } from '@fp-tx/core/Either'
 *
 * assert.deepStrictEqual(lefts([right(1), left('foo'), right(2)]), ['foo'])
 * ```
 *
 * @public
 */
export const lefts = <E, A>(as: ReadonlyArray<Either<E, A>>): ReadonlyArray<E> => {
  const r: Array<E> = []
  for (let i = 0; i < as.length; i++) {
    const a = as[i]
    if (a._tag === 'Left') {
      r.push(a.left)
    }
  }
  return r
}

/**
 * Sort the elements of an array in increasing order, creating a new array
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { sort } from '@fp-tx/core/ReadonlyArray'
 * import * as N from '@fp-tx/core/number'
 *
 * assert.deepStrictEqual(sort(N.Ord)([3, 2, 1]), [1, 2, 3])
 * ```
 *
 * @public
 */
export const sort =
  <B>(O: Ord<B>) =>
  <A extends B>(as: ReadonlyArray<A>): ReadonlyArray<A> =>
    as.length <= 1 ? as : as.slice().sort(O.compare)

// TODO: curry and make data-last in v3
/**
 * Apply a function to pairs of elements at the same index in two arrays, collecting the results in a new array. If one
 * input array is short, excess elements of the longer array are discarded.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { zipWith } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(
 *   zipWith([1, 2, 3], ['a', 'b', 'c', 'd'], (n, s) => s + n),
 *   ['a1', 'b2', 'c3'],
 * )
 * ```
 *
 * @public
 */
export const zipWith = <A, B, C>(
  fa: ReadonlyArray<A>,
  fb: ReadonlyArray<B>,
  f: (a: A, b: B) => C,
): ReadonlyArray<C> => {
  const fc: Array<C> = []
  const len = Math.min(fa.length, fb.length)
  for (let i = 0; i < len; i++) {
    fc[i] = f(fa[i], fb[i])
  }
  return fc
}

// TODO: remove non-curried overloading in v3
/**
 * Takes two arrays and returns an array of corresponding pairs. If one input array is short, excess elements of the
 * longer array are discarded
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { zip } from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], zip(['a', 'b', 'c', 'd'])), [
 *   [1, 'a'],
 *   [2, 'b'],
 *   [3, 'c'],
 * ])
 * ```
 *
 * @public
 */
export function zip<B>(bs: ReadonlyArray<B>): <A>(as: ReadonlyArray<A>) => ReadonlyArray<readonly [A, B]>
export function zip<A, B>(as: ReadonlyArray<A>, bs: ReadonlyArray<B>): ReadonlyArray<readonly [A, B]>
export function zip<A, B>(
  as: ReadonlyArray<A>,
  bs?: ReadonlyArray<B>,
): ReadonlyArray<readonly [A, B]> | ((bs: ReadonlyArray<B>) => ReadonlyArray<readonly [B, A]>) {
  if (bs === undefined) {
    return bs => zip(bs, as)
  }
  return zipWith(as, bs, (a, b) => [a, b])
}

/**
 * The function is reverse of `zip`. Takes an array of pairs and return two corresponding arrays
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { unzip } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(
 *   unzip([
 *     [1, 'a'],
 *     [2, 'b'],
 *     [3, 'c'],
 *   ]),
 *   [
 *     [1, 2, 3],
 *     ['a', 'b', 'c'],
 *   ],
 * )
 * ```
 *
 * @public
 */
export const unzip = <A, B>(as: ReadonlyArray<readonly [A, B]>): readonly [ReadonlyArray<A>, ReadonlyArray<B>] => {
  const fa: Array<A> = []
  const fb: Array<B> = []
  for (let i = 0; i < as.length; i++) {
    fa[i] = as[i][0]
    fb[i] = as[i][1]
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
 * import { prependAll } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(prependAll(9)([1, 2, 3, 4]), [9, 1, 9, 2, 9, 3, 9, 4])
 * ```
 *
 * @public
 */
export const prependAll = <A>(middle: A): ((as: ReadonlyArray<A>) => ReadonlyArray<A>) => {
  const f = RNEA.prependAll(middle)
  return as => (isNonEmpty(as) ? f(as) : as)
}

/**
 * Places an element in between members of an array
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { intersperse } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(intersperse(9)([1, 2, 3, 4]), [1, 9, 2, 9, 3, 9, 4])
 * ```
 *
 * @public
 */
export const intersperse = <A>(middle: A): ((as: ReadonlyArray<A>) => ReadonlyArray<A>) => {
  const f = RNEA.intersperse(middle)
  return as => (isNonEmpty(as) ? f(as) : as)
}

/**
 * Rotate a `ReadonlyArray` by `n` steps.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { rotate } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(rotate(2)([1, 2, 3, 4, 5]), [4, 5, 1, 2, 3])
 * ```
 *
 * @public
 */
export const rotate = (n: number): (<A>(as: ReadonlyArray<A>) => ReadonlyArray<A>) => {
  const f = RNEA.rotate(n)
  return as => (isNonEmpty(as) ? f(as) : as)
}

// TODO: remove non-curried overloading in v3
/**
 * Test if a value is a member of an array. Takes a `Eq<A>` as a single argument which returns the function to use to
 * search for a value of type `A` in an array of type `ReadonlyArray<A>`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { elem } from '@fp-tx/core/ReadonlyArray'
 * import * as N from '@fp-tx/core/number'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(2)), true)
 * assert.strictEqual(pipe([1, 2, 3], elem(N.Eq)(0)), false)
 * ```
 *
 * @public
 */
export function elem<A>(E: Eq<A>): {
  (a: A): (as: ReadonlyArray<A>) => boolean
  (a: A, as: ReadonlyArray<A>): boolean
}
export function elem<A>(E: Eq<A>): (a: A, as?: ReadonlyArray<A>) => boolean | ((as: ReadonlyArray<A>) => boolean) {
  return (a, as?) => {
    if (as === undefined) {
      const elemE = elem(E)
      return as => elemE(a, as)
    }
    const predicate = (element: A) => E.equals(element, a)
    let i = 0
    for (; i < as.length; i++) {
      if (predicate(as[i])) {
        return true
      }
    }
    return false
  }
}

/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { uniq } from '@fp-tx/core/ReadonlyArray'
 * import * as N from '@fp-tx/core/number'
 *
 * assert.deepStrictEqual(uniq(N.Eq)([1, 2, 1]), [1, 2])
 * ```
 *
 * @public
 */
export const uniq = <A>(E: Eq<A>): ((as: ReadonlyArray<A>) => ReadonlyArray<A>) => {
  const f = RNEA.uniq(E)
  return as => (isNonEmpty(as) ? f(as) : as)
}

/**
 * Sort the elements of an array in increasing order, where elements are compared using first `ords[0]`, then `ords[1]`,
 * etc...
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { sortBy } from '@fp-tx/core/ReadonlyArray'
 * import { contramap } from '@fp-tx/core/Ord'
 * import * as S from '@fp-tx/core/string'
 * import * as N from '@fp-tx/core/number'
 * import { pipe } from '@fp-tx/core/function'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age: number
 * }
 * const byName = pipe(
 *   S.Ord,
 *   contramap((p: Person) => p.name),
 * )
 * const byAge = pipe(
 *   N.Ord,
 *   contramap((p: Person) => p.age),
 * )
 *
 * const sortByNameByAge = sortBy([byName, byAge])
 *
 * const persons = [
 *   { name: 'a', age: 1 },
 *   { name: 'b', age: 3 },
 *   { name: 'c', age: 2 },
 *   { name: 'b', age: 2 },
 * ]
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
export const sortBy = <B>(ords: ReadonlyArray<Ord<B>>): (<A extends B>(as: ReadonlyArray<A>) => ReadonlyArray<A>) => {
  const f = RNEA.sortBy(ords)
  return as => (isNonEmpty(as) ? f(as) : as)
}

/**
 * A useful recursion pattern for processing a `ReadonlyArray` to produce a new `ReadonlyArray`, often used for
 * "chopping" up the input `ReadonlyArray`. Typically `chop` is called with some function that will consume an initial
 * prefix of the `ReadonlyArray` and produce a value and the tail of the `ReadonlyArray`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { Eq } from '@fp-tx/core/Eq'
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import * as N from '@fp-tx/core/number'
 * import { pipe } from '@fp-tx/core/function'
 *
 * const group = <A>(S: Eq<A>): ((as: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>>) => {
 *   return RA.chop(as => {
 *     const { init, rest } = pipe(
 *       as,
 *       RA.spanLeft((a: A) => S.equals(a, as[0])),
 *     )
 *     return [init, rest]
 *   })
 * }
 * assert.deepStrictEqual(group(N.Eq)([1, 1, 2, 3, 3, 4]), [[1, 1], [2], [3, 3], [4]])
 * ```
 *
 * @public
 */
export const chop = <A, B>(
  f: (as: ReadonlyNonEmptyArray<A>) => readonly [B, ReadonlyArray<A>],
): ((as: ReadonlyArray<A>) => ReadonlyArray<B>) => {
  const g = RNEA.chop(f)
  return as => (isNonEmpty(as) ? g(as) : empty)
}

/**
 * Splits a `ReadonlyArray` into two pieces, the first piece has max `n` elements.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { splitAt } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(splitAt(2)([1, 2, 3, 4, 5]), [
 *   [1, 2],
 *   [3, 4, 5],
 * ])
 * ```
 *
 * @public
 */
export const splitAt =
  (n: number) =>
  <A>(as: ReadonlyArray<A>): readonly [ReadonlyArray<A>, ReadonlyArray<A>] =>
    n >= 1 && isNonEmpty(as) ? RNEA.splitAt(n)(as)
    : isEmpty(as) ? [as, empty]
    : [empty, as]

/**
 * Splits a `ReadonlyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the
 * length of the `ReadonlyArray`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is
 * consistent with a recursive definition of `chunksOf`; it satisfies the property that:
 *
 * Whenever `n` evenly divides the length of `as`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { chunksOf } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(chunksOf(2)([1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
 * ```
 *
 * @public
 */
export const chunksOf = (n: number): (<A>(as: ReadonlyArray<A>) => ReadonlyArray<ReadonlyNonEmptyArray<A>>) => {
  const f = RNEA.chunksOf(n)
  return as => (isNonEmpty(as) ? f(as) : empty)
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromOptionK =
  <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => Option<B>) =>
  (...a: A): ReadonlyArray<B> =>
    fromOption(f(...a))

/**
 * `ReadonlyArray` comprehension.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { comprehension } from '@fp-tx/core/ReadonlyArray'
 * import { tuple } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   comprehension(
 *     [
 *       [1, 2, 3],
 *       ['a', 'b'],
 *     ],
 *     tuple,
 *     (a, b) => (a + b.length) % 2 === 0,
 *   ),
 *   [
 *     [1, 'a'],
 *     [1, 'b'],
 *     [3, 'a'],
 *     [3, 'b'],
 *   ],
 * )
 * ```
 *
 * @public
 */
export function comprehension<A, B, C, D, R>(
  input: readonly [ReadonlyArray<A>, ReadonlyArray<B>, ReadonlyArray<C>, ReadonlyArray<D>],
  f: (a: A, b: B, c: C, d: D) => R,
  g?: (a: A, b: B, c: C, d: D) => boolean,
): ReadonlyArray<R>
export function comprehension<A, B, C, R>(
  input: readonly [ReadonlyArray<A>, ReadonlyArray<B>, ReadonlyArray<C>],
  f: (a: A, b: B, c: C) => R,
  g?: (a: A, b: B, c: C) => boolean,
): ReadonlyArray<R>
export function comprehension<A, B, R>(
  input: readonly [ReadonlyArray<A>, ReadonlyArray<B>],
  f: (a: A, b: B) => R,
  g?: (a: A, b: B) => boolean,
): ReadonlyArray<R>
export function comprehension<A, R>(
  input: readonly [ReadonlyArray<A>],
  f: (a: A) => R,
  g?: (a: A) => boolean,
): ReadonlyArray<R>
export function comprehension<A, R>(
  input: ReadonlyArray<ReadonlyArray<A>>,
  f: (...xs: ReadonlyArray<A>) => R,
  g: (...xs: ReadonlyArray<A>) => boolean = () => true,
): ReadonlyArray<R> {
  const go = (scope: ReadonlyArray<A>, input: ReadonlyArray<ReadonlyArray<A>>): ReadonlyArray<R> =>
    isNonEmpty(input) ? flatMap(RNEA.head(input), a => go(pipe(scope, append(a)), RNEA.tail(input)))
    : g(...scope) ? [f(...scope)]
    : empty
  return go(empty, input)
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const concatW =
  <B>(second: ReadonlyArray<B>) =>
  <A>(first: ReadonlyArray<A>): ReadonlyArray<A | B> =>
    isEmpty(first) ? second
    : isEmpty(second) ? first
    : (first as ReadonlyArray<A | B>).concat(second)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const concat: <A>(second: ReadonlyArray<A>) => (first: ReadonlyArray<A>) => ReadonlyArray<A> = concatW

// TODO: remove non-curried overloading in v3
/**
 * Creates an array of unique values, in order, from all given arrays using a `Eq` for equality comparisons
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { union } from '@fp-tx/core/ReadonlyArray'
 * import * as N from '@fp-tx/core/number'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], union(N.Eq)([2, 3])), [1, 2, 3])
 * ```
 *
 * @public
 */
export function union<A>(E: Eq<A>): {
  (xs: ReadonlyArray<A>): (ys: ReadonlyArray<A>) => ReadonlyArray<A>
  (xs: ReadonlyArray<A>, ys: ReadonlyArray<A>): ReadonlyArray<A>
}
export function union<A>(
  E: Eq<A>,
): (xs: ReadonlyArray<A>, ys?: ReadonlyArray<A>) => ReadonlyArray<A> | ((ys: ReadonlyArray<A>) => ReadonlyArray<A>) {
  const unionE = RNEA.union(E)
  return (first, second?) => {
    if (second === undefined) {
      const unionE = union(E)
      return second => unionE(second, first)
    }
    return (
      isNonEmpty(first) && isNonEmpty(second) ? unionE(second)(first)
      : isNonEmpty(first) ? first
      : second
    )
  }
}

// TODO: remove non-curried overloading in v3
/**
 * Creates an array of unique values that are included in all given arrays using a `Eq` for equality comparisons. The
 * order and references of result values are determined by the first array.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { intersection } from '@fp-tx/core/ReadonlyArray'
 * import * as N from '@fp-tx/core/number'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], intersection(N.Eq)([2, 3])), [2])
 * ```
 *
 * @public
 */
export function intersection<A>(E: Eq<A>): {
  (xs: ReadonlyArray<A>): (ys: ReadonlyArray<A>) => ReadonlyArray<A>
  (xs: ReadonlyArray<A>, ys: ReadonlyArray<A>): ReadonlyArray<A>
}
export function intersection<A>(
  E: Eq<A>,
): (xs: ReadonlyArray<A>, ys?: ReadonlyArray<A>) => ReadonlyArray<A> | ((ys: ReadonlyArray<A>) => ReadonlyArray<A>) {
  const elemE = elem(E)
  return (xs, ys?) => {
    if (ys === undefined) {
      const intersectionE = intersection(E)
      return ys => intersectionE(ys, xs)
    }
    return xs.filter(a => elemE(a, ys))
  }
}

// TODO: remove non-curried overloading in v3
/**
 * Creates an array of array values not included in the other given array using a `Eq` for equality comparisons. The
 * order and references of result values are determined by the first array.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { difference } from '@fp-tx/core/ReadonlyArray'
 * import * as N from '@fp-tx/core/number'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe([1, 2], difference(N.Eq)([2, 3])), [1])
 * ```
 *
 * @public
 */
export function difference<A>(E: Eq<A>): {
  (xs: ReadonlyArray<A>): (ys: ReadonlyArray<A>) => ReadonlyArray<A>
  (xs: ReadonlyArray<A>, ys: ReadonlyArray<A>): ReadonlyArray<A>
}
export function difference<A>(
  E: Eq<A>,
): (xs: ReadonlyArray<A>, ys?: ReadonlyArray<A>) => ReadonlyArray<A> | ((ys: ReadonlyArray<A>) => ReadonlyArray<A>) {
  const elemE = elem(E)
  return (xs, ys?) => {
    if (ys === undefined) {
      const differenceE = difference(E)
      return ys => differenceE(ys, xs)
    }
    return xs.filter(a => !elemE(a, ys))
  }
}

const _map: Monad1<URI>['map'] = (fa, f) => pipe(fa, map(f))
const _mapWithIndex: FunctorWithIndex1<URI, number>['mapWithIndex'] = (fa, f) => pipe(fa, mapWithIndex(f))
const _ap: Apply1<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
const _filter: Filterable1<URI>['filter'] = <A>(fa: ReadonlyArray<A>, predicate: Predicate<A>) =>
  pipe(fa, filter(predicate))
const _filterMap: Filterable1<URI>['filterMap'] = (fa, f) => pipe(fa, filterMap(f))
const _partition: Filterable1<URI>['partition'] = <A>(fa: ReadonlyArray<A>, predicate: Predicate<A>) =>
  pipe(fa, partition(predicate))
const _partitionMap: Filterable1<URI>['partitionMap'] = (fa, f) => pipe(fa, partitionMap(f))
const _partitionWithIndex: FilterableWithIndex1<URI, number>['partitionWithIndex'] = <A>(
  fa: ReadonlyArray<A>,
  predicateWithIndex: (i: number, a: A) => boolean,
) => pipe(fa, partitionWithIndex(predicateWithIndex))
const _partitionMapWithIndex: FilterableWithIndex1<URI, number>['partitionMapWithIndex'] = <A, B, C>(
  fa: ReadonlyArray<A>,
  f: (i: number, a: A) => Either<B, C>,
) => pipe(fa, partitionMapWithIndex(f))
const _alt: Alt1<URI>['alt'] = (fa, that) => pipe(fa, alt(that))
const _reduce: Foldable1<URI>['reduce'] = (fa, b, f) => pipe(fa, reduce(b, f))
const _foldMap: Foldable1<URI>['foldMap'] = M => {
  const foldMapM = foldMap(M)
  return (fa, f) => pipe(fa, foldMapM(f))
}
const _reduceRight: Foldable1<URI>['reduceRight'] = (fa, b, f) => pipe(fa, reduceRight(b, f))
const _reduceWithIndex: FoldableWithIndex1<URI, number>['reduceWithIndex'] = (fa, b, f) =>
  pipe(fa, reduceWithIndex(b, f))
const _foldMapWithIndex: FoldableWithIndex1<URI, number>['foldMapWithIndex'] = M => {
  const foldMapWithIndexM = foldMapWithIndex(M)
  return (fa, f) => pipe(fa, foldMapWithIndexM(f))
}
const _reduceRightWithIndex: FoldableWithIndex1<URI, number>['reduceRightWithIndex'] = (fa, b, f) =>
  pipe(fa, reduceRightWithIndex(b, f))
const _filterMapWithIndex: FilterableWithIndex1<URI, number>['filterMapWithIndex'] = <A, B>(
  fa: ReadonlyArray<A>,
  f: (i: number, a: A) => Option<B>,
) => pipe(fa, filterMapWithIndex(f))
const _filterWithIndex: FilterableWithIndex1<URI, number>['filterWithIndex'] = <A>(
  fa: ReadonlyArray<A>,
  predicateWithIndex: (i: number, a: A) => boolean,
) => pipe(fa, filterWithIndex(predicateWithIndex))
const _extend: Extend1<URI>['extend'] = (fa, f) => pipe(fa, extend(f))
const _traverse: Traversable1<URI>['traverse'] = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(ta: ReadonlyArray<A>, f: (a: A) => HKT<F, B>) => HKT<F, ReadonlyArray<B>>) => {
  const traverseF = traverse(F)
  return (ta, f) => pipe(ta, traverseF(f))
}
/* istanbul ignore next */
const _traverseWithIndex: TraversableWithIndex1<URI, number>['traverseWithIndex'] = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(ta: ReadonlyArray<A>, f: (i: number, a: A) => HKT<F, B>) => HKT<F, ReadonlyArray<B>>) => {
  const traverseWithIndexF = traverseWithIndex(F)
  return (ta, f) => pipe(ta, traverseWithIndexF(f))
}
/** @internal */
export const _chainRecDepthFirst: ChainRec1<URI>['chainRec'] = (a, f) => pipe(a, chainRecDepthFirst(f))
/** @internal */
export const _chainRecBreadthFirst: ChainRec1<URI>['chainRec'] = (a, f) => pipe(a, chainRecBreadthFirst(f))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const of: <A>(a: A) => ReadonlyArray<A> = RNEA.of

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const zero: <A>() => ReadonlyArray<A> = () => empty

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
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3],
 *     RA.altW(() => ['a', 'b']),
 *   ),
 *   [1, 2, 3, 'a', 'b'],
 * )
 * ```
 *
 * @public
 */
export const altW =
  <B>(that: LazyArg<ReadonlyArray<B>>) =>
  <A>(fa: ReadonlyArray<A>): ReadonlyArray<A | B> =>
    (fa as ReadonlyArray<A | B>).concat(that())

/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `ReadonlyArray` concatenates the inputs into a single array.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @example
 *
 * ```typescript
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3],
 *     RA.alt(() => [4, 5]),
 *   ),
 *   [1, 2, 3, 4, 5],
 * )
 * ```
 *
 * @public
 */
export const alt: <A>(that: LazyArg<ReadonlyArray<A>>) => (fa: ReadonlyArray<A>) => ReadonlyArray<A> = altW

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const ap: <A>(fa: ReadonlyArray<A>) => <B>(fab: ReadonlyArray<(a: A) => B>) => ReadonlyArray<B> = fa =>
  flatMap(f => pipe(fa, map(f)))

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @example
 *
 * ```typescript
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3],
 *     RA.flatMap(n => [`a${n}`, `b${n}`]),
 *   ),
 *   ['a1', 'b1', 'a2', 'b2', 'a3', 'b3'],
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3],
 *     RA.flatMap(() => []),
 *   ),
 *   [],
 * )
 * ```
 *
 * @public
 */
export const flatMap: {
  <A, B>(f: (a: A, i: number) => ReadonlyArray<B>): (ma: ReadonlyArray<A>) => ReadonlyArray<B>
  <A, B>(ma: ReadonlyArray<A>, f: (a: A, i: number) => ReadonlyArray<B>): ReadonlyArray<B>
} = /*#__PURE__*/ dual(
  2,
  <A, B>(ma: ReadonlyArray<A>, f: (a: A, i: number) => ReadonlyArray<B>): ReadonlyArray<B> =>
    pipe(
      ma,
      chainWithIndex((i, a) => f(a, i)),
    ),
)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const flatten: <A>(mma: ReadonlyArray<ReadonlyArray<A>>) => ReadonlyArray<A> = /*#__PURE__*/ flatMap(identity)

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
export const map: <A, B>(f: (a: A) => B) => (fa: ReadonlyArray<A>) => ReadonlyArray<B> = f => fa => fa.map(a => f(a))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const mapWithIndex: <A, B>(f: (i: number, a: A) => B) => (fa: ReadonlyArray<A>) => ReadonlyArray<B> = f => fa =>
  fa.map((a, i) => f(i, a))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const separate = <A, B>(fa: ReadonlyArray<Either<A, B>>): Separated<ReadonlyArray<A>, ReadonlyArray<B>> => {
  const left: Array<A> = []
  const right: Array<B> = []
  for (const e of fa) {
    if (e._tag === 'Left') {
      left.push(e.left)
    } else {
      right.push(e.right)
    }
  }
  return separated(left, right)
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (as: ReadonlyArray<A>) => ReadonlyArray<B>
  <A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => ReadonlyArray<B>
  <A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => ReadonlyArray<A>
} =
  <A>(predicate: Predicate<A>) =>
  <B extends A>(as: ReadonlyArray<B>) =>
    as.filter(predicate)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const filterMapWithIndex =
  <A, B>(f: (i: number, a: A) => Option<B>) =>
  (fa: ReadonlyArray<A>): ReadonlyArray<B> => {
    const out: Array<B> = []
    for (let i = 0; i < fa.length; i++) {
      const optionB = f(i, fa[i])
      if (_.isSome(optionB)) {
        out.push(optionB.value)
      }
    }
    return out
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const filterMap: <A, B>(f: (a: A) => Option<B>) => (fa: ReadonlyArray<A>) => ReadonlyArray<B> = f =>
  filterMapWithIndex((_, a) => f(a))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const compact: <A>(fa: ReadonlyArray<Option<A>>) => ReadonlyArray<A> = /*#__PURE__*/ filterMap(identity)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const partition: {
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): (as: ReadonlyArray<A>) => Separated<ReadonlyArray<A>, ReadonlyArray<B>>
  <A>(predicate: Predicate<A>): <B extends A>(bs: ReadonlyArray<B>) => Separated<ReadonlyArray<B>, ReadonlyArray<B>>
  <A>(predicate: Predicate<A>): (as: ReadonlyArray<A>) => Separated<ReadonlyArray<A>, ReadonlyArray<A>>
} = <A>(predicate: Predicate<A>): ((as: ReadonlyArray<A>) => Separated<ReadonlyArray<A>, ReadonlyArray<A>>) =>
  partitionWithIndex((_, a) => predicate(a))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const partitionWithIndex: {
  <A, B extends A>(
    refinementWithIndex: RefinementWithIndex<number, A, B>,
  ): (as: ReadonlyArray<A>) => Separated<ReadonlyArray<A>, ReadonlyArray<B>>
  <A>(
    predicateWithIndex: PredicateWithIndex<number, A>,
  ): <B extends A>(bs: ReadonlyArray<B>) => Separated<ReadonlyArray<B>, ReadonlyArray<B>>
  <A>(
    predicateWithIndex: PredicateWithIndex<number, A>,
  ): (as: ReadonlyArray<A>) => Separated<ReadonlyArray<A>, ReadonlyArray<A>>
} =
  <A>(predicateWithIndex: PredicateWithIndex<number, A>) =>
  (as: ReadonlyArray<A>): Separated<ReadonlyArray<A>, ReadonlyArray<A>> => {
    const left: Array<A> = []
    const right: Array<A> = []
    for (let i = 0; i < as.length; i++) {
      const a = as[i]
      if (predicateWithIndex(i, a)) {
        right.push(a)
      } else {
        left.push(a)
      }
    }
    return separated(left, right)
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const partitionMap: <A, B, C>(
  f: (a: A) => Either<B, C>,
) => (fa: ReadonlyArray<A>) => Separated<ReadonlyArray<B>, ReadonlyArray<C>> = f =>
  partitionMapWithIndex((_, a) => f(a))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const partitionMapWithIndex =
  <A, B, C>(f: (i: number, a: A) => Either<B, C>) =>
  (fa: ReadonlyArray<A>): Separated<ReadonlyArray<B>, ReadonlyArray<C>> => {
    const left: Array<B> = []
    const right: Array<C> = []
    for (let i = 0; i < fa.length; i++) {
      const e = f(i, fa[i])
      if (e._tag === 'Left') {
        left.push(e.left)
      } else {
        right.push(e.right)
      }
    }
    return separated(left, right)
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const filterWithIndex: {
  <A, B extends A>(refinementWithIndex: RefinementWithIndex<number, A, B>): (as: ReadonlyArray<A>) => ReadonlyArray<B>
  <A>(predicateWithIndex: PredicateWithIndex<number, A>): <B extends A>(bs: ReadonlyArray<B>) => ReadonlyArray<B>
  <A>(predicateWithIndex: PredicateWithIndex<number, A>): (as: ReadonlyArray<A>) => ReadonlyArray<A>
} =
  <A>(predicateWithIndex: PredicateWithIndex<number, A>) =>
  (as: ReadonlyArray<A>): ReadonlyArray<A> =>
    as.filter((a, i) => predicateWithIndex(i, a))

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const extend: <A, B>(f: (fa: ReadonlyArray<A>) => B) => (wa: ReadonlyArray<A>) => ReadonlyArray<B> = f => wa =>
  wa.map((_, i) => f(wa.slice(i)))

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const duplicate: <A>(wa: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>> = /*#__PURE__*/ extend(identity)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const foldMapWithIndex =
  <M>(M: Monoid<M>) =>
  <A>(f: (i: number, a: A) => M) =>
  (fa: ReadonlyArray<A>): M =>
    fa.reduce((b, a, i) => M.concat(b, f(i, a)), M.empty)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: ReadonlyArray<A>) => B = (b, f) =>
  reduceWithIndex(b, (_, b, a) => f(b, a))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: ReadonlyArray<A>) => M = M => {
  const foldMapWithIndexM = foldMapWithIndex(M)
  return f => foldMapWithIndexM((_, a) => f(a))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const reduceWithIndex: <A, B>(b: B, f: (i: number, b: B, a: A) => B) => (fa: ReadonlyArray<A>) => B =
  (b, f) => fa => {
    const len = fa.length
    let out = b
    for (let i = 0; i < len; i++) {
      out = f(i, out, fa[i])
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
export const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: ReadonlyArray<A>) => B = (b, f) =>
  reduceRightWithIndex(b, (_, a, b) => f(a, b))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const reduceRightWithIndex: <A, B>(b: B, f: (i: number, a: A, b: B) => B) => (fa: ReadonlyArray<A>) => B =
  (b, f) => fa =>
    fa.reduceRight((b, a, i) => f(i, a, b), b)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverse: PipeableTraverse1<URI> = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(f: (a: A) => HKT<F, B>) => (ta: ReadonlyArray<A>) => HKT<F, ReadonlyArray<B>>) => {
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
export const sequence: Traversable1<URI>['sequence'] =
  <F>(F: ApplicativeHKT<F>) =>
  <A>(ta: ReadonlyArray<HKT<F, A>>): HKT<F, ReadonlyArray<A>> => {
    return _reduce(ta, F.of(zero()), (fas, fa) =>
      F.ap(
        F.map(fas, as => (a: A) => pipe(as, append(a))),
        fa,
      ),
    )
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const traverseWithIndex: PipeableTraverseWithIndex1<URI, number> =
  <F>(F: ApplicativeHKT<F>) =>
  <A, B>(f: (i: number, a: A) => HKT<F, B>): ((ta: ReadonlyArray<A>) => HKT<F, ReadonlyArray<B>>) =>
    reduceWithIndex(F.of(zero()), (i, fbs, a) =>
      F.ap(
        F.map(fbs, bs => (b: B) => pipe(bs, append(b))),
        f(i, a),
      ),
    )

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const wither: PipeableWither1<URI> = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(f: (a: A) => HKT<F, Option<B>>) => (fa: ReadonlyArray<A>) => HKT<F, ReadonlyArray<B>>) => {
  const _witherF = _wither(F)
  return f => fa => _witherF(fa, f)
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const wilt: PipeableWilt1<URI> = <F>(
  F: ApplicativeHKT<F>,
): (<A, B, C>(
  f: (a: A) => HKT<F, Either<B, C>>,
) => (fa: ReadonlyArray<A>) => HKT<F, Separated<ReadonlyArray<B>, ReadonlyArray<C>>>) => {
  const _wiltF = _wilt(F)
  return f => fa => _wiltF(fa, f)
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const unfold = <A, B>(b: B, f: (b: B) => Option<readonly [A, B]>): ReadonlyArray<A> => {
  const out: Array<A> = []
  let bb: B = b
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const mt = f(bb)
    if (_.isSome(mt)) {
      const [a, b] = mt.value
      out.push(a)
      bb = b
    } else {
      break
    }
  }
  return out
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'ReadonlyArray'

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
    readonly [URI]: ReadonlyArray<A>
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getShow = <A>(S: Show<A>): Show<ReadonlyArray<A>> => ({
  show: as => `[${as.map(S.show).join(', ')}]`,
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getSemigroup = <A = never>(): Semigroup<ReadonlyArray<A>> => ({
  concat: (first, second) =>
    isEmpty(first) ? second
    : isEmpty(second) ? first
    : first.concat(second),
})

/**
 * Returns a `Monoid` for `ReadonlyArray<A>`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { getMonoid } from '@fp-tx/core/ReadonlyArray'
 *
 * const M = getMonoid<number>()
 * assert.deepStrictEqual(M.concat([1, 2], [3, 4]), [1, 2, 3, 4])
 * ```
 *
 * @public
 */
export const getMonoid = <A = never>(): Monoid<ReadonlyArray<A>> => ({
  concat: getSemigroup<A>().concat,
  empty,
})

/**
 * Derives an `Eq` over the `ReadonlyArray` of a given element type from the `Eq` of that type. The derived `Eq` defines
 * two arrays as equal if all elements of both arrays are compared equal pairwise with the given `E`. In case of arrays
 * of different lengths, the result is non equality.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { getEq } from '@fp-tx/core/ReadonlyArray'
 *
 * const E = getEq(S.Eq)
 * assert.strictEqual(E.equals(['a', 'b'], ['a', 'b']), true)
 * assert.strictEqual(E.equals(['a'], []), false)
 * ```
 *
 * @public
 */
export const getEq = <A>(E: Eq<A>): Eq<ReadonlyArray<A>> =>
  fromEquals((xs, ys) => xs.length === ys.length && xs.every((x, i) => E.equals(x, ys[i])))

/**
 * Derives an `Ord` over the `ReadonlyArray` of a given element type from the `Ord` of that type. The ordering between
 * two such arrays is equal to: the first non equal comparison of each arrays elements taken pairwise in increasing
 * order, in case of equality over all the pairwise elements; the longest array is considered the greatest, if both
 * arrays have the same length, the result is equality.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { getOrd } from '@fp-tx/core/ReadonlyArray'
 * import * as S from '@fp-tx/core/string'
 *
 * const O = getOrd(S.Ord)
 * assert.strictEqual(O.compare(['b'], ['a']), 1)
 * assert.strictEqual(O.compare(['a'], ['a']), 0)
 * assert.strictEqual(O.compare(['a'], ['b']), -1)
 * ```
 *
 * @public
 */
export const getOrd = <A>(O: Ord<A>): Ord<ReadonlyArray<A>> =>
  fromCompare((a, b) => {
    const aLen = a.length
    const bLen = b.length
    const len = Math.min(aLen, bLen)
    for (let i = 0; i < len; i++) {
      const ordering = O.compare(a[i], b[i])
      if (ordering !== 0) {
        return ordering
      }
    }
    return N.Ord.compare(aLen, bLen)
  })

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getUnionSemigroup = <A>(E: Eq<A>): Semigroup<ReadonlyArray<A>> => {
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
export const getUnionMonoid = <A>(E: Eq<A>): Monoid<ReadonlyArray<A>> => ({
  concat: getUnionSemigroup(E).concat,
  empty,
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getIntersectionSemigroup = <A>(E: Eq<A>): Semigroup<ReadonlyArray<A>> => {
  const intersectionE = intersection(E)
  return {
    concat: (first, second) => intersectionE(second)(first),
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getDifferenceMagma = <A>(E: Eq<A>): Magma<ReadonlyArray<A>> => {
  const differenceE = difference(E)
  return {
    concat: (first, second) => differenceE(second)(first),
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
 * Category: Sequencing
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
 * assert.deepStrictEqual(
 *   pipe(
 *     [1, 2, 3],
 *     RA.chainFirst(() => []),
 *   ),
 *   [],
 * )
 * ```
 *
 * @public
 */
export const chainFirst: <A, B>(f: (a: A) => ReadonlyArray<B>) => (first: ReadonlyArray<A>) => ReadonlyArray<A> =
  /*#__PURE__*/ chainFirst_(Chain)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Unfoldable: Unfoldable1<URI> = {
  URI,
  unfold,
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
export const Zero: Zero1<URI> = {
  URI,
  zero,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Do notation
 * @public
 */
export const guard = /*#__PURE__*/ guard_(Zero, Pointed)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Alternative: Alternative1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  of,
  alt: _alt,
  zero,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Extend: Extend1<URI> = {
  URI,
  map: _map,
  extend: _extend,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Compactable: Compactable1<URI> = {
  URI,
  compact,
  separate,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const FilterableWithIndex: FilterableWithIndex1<URI, number> = {
  URI,
  map: _map,
  mapWithIndex: _mapWithIndex,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  partitionMapWithIndex: _partitionMapWithIndex,
  partitionWithIndex: _partitionWithIndex,
  filterMapWithIndex: _filterMapWithIndex,
  filterWithIndex: _filterWithIndex,
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
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex,
  traverse: _traverse,
  sequence,
  traverseWithIndex: _traverseWithIndex,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const chainRecDepthFirst =
  <A, B>(f: (a: A) => ReadonlyArray<Either<A, B>>) =>
  (a: A): ReadonlyArray<B> => {
    const todo: Array<Either<A, B>> = [...f(a)]
    const out: Array<B> = []

    while (todo.length > 0) {
      const e = todo.shift()!
      if (_.isLeft(e)) {
        todo.unshift(...f(e.left))
      } else {
        out.push(e.right)
      }
    }

    return out
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ChainRecDepthFirst: ChainRec1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
  chainRec: _chainRecDepthFirst,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Sequencing
 * @public
 */
export const chainRecBreadthFirst =
  <A, B>(f: (a: A) => ReadonlyArray<Either<A, B>>) =>
  (a: A): ReadonlyArray<B> => {
    const initial = f(a)
    const todo: Array<Either<A, B>> = []
    const out: Array<B> = []

    function go(e: Either<A, B>): void {
      if (_.isLeft(e)) {
        f(e.left).forEach(v => todo.push(v))
      } else {
        out.push(e.right)
      }
    }

    for (const e of initial) {
      go(e)
    }

    while (todo.length > 0) {
      go(todo.shift()!)
    }

    return out
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const ChainRecBreadthFirst: ChainRec1<URI> = {
  URI,
  map: _map,
  ap: _ap,
  chain: flatMap,
  chainRec: _chainRecBreadthFirst,
}

const _wither: Witherable1<URI>['wither'] = /*#__PURE__*/ witherDefault(Traversable, Compactable)
const _wilt: Witherable1<URI>['wilt'] = /*#__PURE__*/ wiltDefault(Traversable, Compactable)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Witherable: Witherable1<URI> = {
  URI,
  map: _map,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
  wither: _wither,
  wilt: _wilt,
}

/**
 * Filter values inside a context.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { pipe } from '@fp-tx/core/function'
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import * as T from '@fp-tx/core/Task'
 *
 * const filterE = RA.filterE(T.ApplicativePar)
 * async function test() {
 *   assert.deepStrictEqual(
 *     await pipe(
 *       [-1, 2, 3],
 *       filterE(n => T.of(n > 0)),
 *     )(),
 *     [2, 3],
 *   )
 * }
 * test()
 * ```
 *
 * @public
 */
export const filterE = /*#__PURE__*/ filterE_(Witherable)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const FromEither: FromEither1<URI> = {
  URI,
  fromEither,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @public
 */
export const fromEitherK: <E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => Either<E, B>,
) => (...a: A) => ReadonlyArray<B> = /*#__PURE__*/ fromEitherK_(FromEither)

// -------------------------------------------------------------------------------------
// unsafe
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Unsafe
 * @public
 */
export const unsafeInsertAt: <A>(i: number, a: A, as: ReadonlyArray<A>) => ReadonlyNonEmptyArray<A> =
  RNEA.unsafeInsertAt

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Unsafe
 * @public
 */
export const unsafeUpdateAt = <A>(i: number, a: A, as: ReadonlyArray<A>): ReadonlyArray<A> =>
  isNonEmpty(as) ? RNEA.unsafeUpdateAt(i, a, as) : as

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Unsafe
 * @public
 */
export const unsafeDeleteAt = <A>(i: number, as: ReadonlyArray<A>): ReadonlyArray<A> => {
  const xs = as.slice()
  xs.splice(i, 1)
  return xs
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const toArray = <A>(as: ReadonlyArray<A>): Array<A> => as.slice()

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @public
 */
export const fromArray = <A>(as: Array<A>): ReadonlyArray<A> => (isEmpty(as) ? empty : as.slice())

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * An empty array
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const empty: ReadonlyArray<never> = RNEA.empty

/**
 * Check if a predicate holds true for every array member.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { every } from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([1, 2, 3], every(isPositive)), true)
 * assert.deepStrictEqual(pipe([1, 2, -3], every(isPositive)), false)
 * ```
 *
 * @public
 */
export function every<A, B extends A>(refinement: Refinement<A, B>): Refinement<ReadonlyArray<A>, ReadonlyArray<B>>
export function every<A>(predicate: Predicate<A>): Predicate<ReadonlyArray<A>>
export function every<A>(predicate: Predicate<A>): Predicate<ReadonlyArray<A>> {
  return as => as.every(predicate)
}

/**
 * Check if a predicate holds true for any array member.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { some } from '@fp-tx/core/ReadonlyArray'
 * import { pipe } from '@fp-tx/core/function'
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * assert.deepStrictEqual(pipe([-1, -2, 3], some(isPositive)), true)
 * assert.deepStrictEqual(pipe([-1, -2, -3], some(isPositive)), false)
 * ```
 *
 * @public
 */
export const some =
  <A>(predicate: Predicate<A>) =>
  (as: ReadonlyArray<A>): as is ReadonlyNonEmptyArray<A> =>
    as.some(predicate)

/**
 * Alias of [`some`](#some)
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const exists: <A>(predicate: Predicate<A>) => (as: ReadonlyArray<A>) => as is RNEA.ReadonlyNonEmptyArray<A> =
  some

/**
 * Places an element in between members of a `ReadonlyArray`, then folds the results using the provided `Monoid`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { intercalate } from '@fp-tx/core/ReadonlyArray'
 *
 * assert.deepStrictEqual(intercalate(S.Monoid)('-')(['a', 'b', 'c']), 'a-b-c')
 * ```
 *
 * @public
 */
export const intercalate = <A>(M: Monoid<A>): ((middle: A) => (as: ReadonlyArray<A>) => A) => {
  const intercalateM = RNEA.intercalate(M)
  return middle => match(() => M.empty, intercalateM(middle))
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
export const Do: ReadonlyArray<{}> = /*#__PURE__*/ of(_.emptyRecord)

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
export const chain: <A, B>(f: (a: A) => ReadonlyArray<B>) => (ma: ReadonlyArray<A>) => ReadonlyArray<B> = flatMap

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use `ReadonlyNonEmptyArray` module instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const range = RNEA.range

/**
 * Use [`prepend`](#prepend) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const cons = RNEA.cons

/**
 * Use [`append`](#append) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const snoc = RNEA.snoc

/**
 * Use [`prependAll`](#prependall) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const prependToAll = prependAll

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `RA.Functor` instead of `RA.readonlyArray` (where `RA` is from `import RA from
 * 'fp-ts/ReadonlyArray'`)
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const readonlyArray: FunctorWithIndex1<URI, number> &
  Monad1<URI> &
  Unfoldable1<URI> &
  Alternative1<URI> &
  Extend1<URI> &
  FilterableWithIndex1<URI, number> &
  FoldableWithIndex1<URI, number> &
  TraversableWithIndex1<URI, number> &
  Witherable1<URI> = {
  URI,
  compact,
  separate,
  map: _map,
  ap: _ap,
  of,
  chain: flatMap,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  mapWithIndex: _mapWithIndex,
  partitionMapWithIndex: _partitionMapWithIndex,
  partitionWithIndex: _partitionWithIndex,
  filterMapWithIndex: _filterMapWithIndex,
  filterWithIndex: _filterWithIndex,
  alt: _alt,
  zero,
  unfold,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
  reduceWithIndex: _reduceWithIndex,
  foldMapWithIndex: _foldMapWithIndex,
  reduceRightWithIndex: _reduceRightWithIndex,
  traverseWithIndex: _traverseWithIndex,
  extend: _extend,
  wither: _wither,
  wilt: _wilt,
}
