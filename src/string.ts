/** @since 1.0.0 */
import type * as E from './Eq'
import type * as M from './Monoid'
import type * as O from './Ord'
import { isNonEmpty, type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'
import { type Refinement } from './Refinement'
import type * as S from './Semigroup'
import type * as Sh from './Show'

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category Instances
 * @example
 *   import * as S from 'fp-ts/string'
 *
 *   assert.deepStrictEqual(S.Eq.equals('a', 'a'), true)
 *   assert.deepStrictEqual(S.Eq.equals('a', 'b'), false)
 */
export const Eq: E.Eq<string> = {
  equals: (first, second) => first === second,
}

/**
 * `string` semigroup under concatenation.
 *
 * @since 1.0.0
 * @category Instances
 * @example
 *   import * as S from 'fp-ts/string'
 *
 *   assert.deepStrictEqual(S.Semigroup.concat('a', 'b'), 'ab')
 */
export const Semigroup: S.Semigroup<string> = {
  concat: (first, second) => first + second,
}

/**
 * An empty `string`.
 *
 * @since 1.0.0
 */
export const empty = ''

/**
 * `string` monoid under concatenation.
 *
 * The `empty` value is `''`.
 *
 * @since 1.0.0
 * @category Instances
 * @example
 *   import * as S from 'fp-ts/string'
 *
 *   assert.deepStrictEqual(S.Monoid.concat('a', 'b'), 'ab')
 *   assert.deepStrictEqual(S.Monoid.concat('a', S.Monoid.empty), 'a')
 */
export const Monoid: M.Monoid<string> = {
  concat: Semigroup.concat,
  empty,
}

/**
 * @since 1.0.0
 * @category Instances
 * @example
 *   import * as S from 'fp-ts/string'
 *
 *   assert.deepStrictEqual(S.Ord.compare('a', 'a'), 0)
 *   assert.deepStrictEqual(S.Ord.compare('a', 'b'), -1)
 *   assert.deepStrictEqual(S.Ord.compare('b', 'a'), 1)
 */
export const Ord: O.Ord<string> = {
  equals: Eq.equals,
  compare: (first, second) =>
    first < second ? -1
    : first > second ? 1
    : 0,
}

/**
 * @since 1.0.0
 * @category Instances
 * @example
 *   import * as S from 'fp-ts/string'
 *
 *   assert.deepStrictEqual(S.Show.show('a'), '"a"')
 */
export const Show: Sh.Show<string> = {
  show: s => JSON.stringify(s),
}

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category Refinements
 * @example
 *   import * as S from 'fp-ts/string'
 *
 *   assert.deepStrictEqual(S.isString('a'), true)
 *   assert.deepStrictEqual(S.isString(1), false)
 */
export const isString: Refinement<unknown, string> = (u: unknown): u is string => typeof u === 'string'

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe('a', S.toUpperCase), 'A')
 */
export const toUpperCase = (s: string): string => s.toUpperCase()

/**
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe('A', S.toLowerCase), 'a')
 */
export const toLowerCase = (s: string): string => s.toLowerCase()

/**
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe('abc', S.replace('b', 'd')), 'adc')
 */
export const replace =
  (searchValue: string | RegExp, replaceValue: string) =>
  (s: string): string =>
    s.replace(searchValue, replaceValue)

/**
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe(' a ', S.trim), 'a')
 */
export const trim = (s: string): string => s.trim()

/**
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe(' a ', S.trimLeft), 'a ')
 */
export const trimLeft = (s: string): string => s.trimLeft()

/**
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe(' a ', S.trimRight), ' a')
 */
export const trimRight = (s: string): string => s.trimRight()

/**
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe('abcd', S.slice(1, 3)), 'bc')
 */
export const slice =
  (start: number, end: number) =>
  (s: string): string =>
    s.slice(start, end)

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Test whether a `string` is empty.
 *
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe('', S.isEmpty), true)
 *   assert.deepStrictEqual(pipe('a', S.isEmpty), false)
 */
export const isEmpty = (s: string): boolean => s.length === 0

/**
 * Calculate the number of characters in a `string`.
 *
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe('abc', S.size), 3)
 */
export const size = (s: string): number => s.length

/**
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe('abc', S.split('')), ['a', 'b', 'c'])
 *   assert.deepStrictEqual(pipe('', S.split('')), [''])
 */
export const split =
  (separator: string | RegExp) =>
  (s: string): ReadonlyNonEmptyArray<string> => {
    const out = s.split(separator)
    return isNonEmpty(out) ? out : [s]
  }

/**
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe('abc', S.includes('b')), true)
 *   assert.deepStrictEqual(pipe('abc', S.includes('d')), false)
 */
export const includes =
  (searchString: string, position?: number) =>
  (s: string): boolean =>
    s.includes(searchString, position)

/**
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe('abc', S.startsWith('a')), true)
 *   assert.deepStrictEqual(pipe('bc', S.startsWith('a')), false)
 */
export const startsWith =
  (searchString: string, position?: number) =>
  (s: string): boolean =>
    s.startsWith(searchString, position)

/**
 * @since 1.0.0
 * @example
 *   import * as S from 'fp-ts/string'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe('abc', S.endsWith('c')), true)
 *   assert.deepStrictEqual(pipe('ab', S.endsWith('c')), false)
 */
export const endsWith =
  (searchString: string, position?: number) =>
  (s: string): boolean =>
    s.endsWith(searchString, position)
