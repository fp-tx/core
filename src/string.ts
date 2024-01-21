/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 *
 * assert.deepStrictEqual(S.Eq.equals('a', 'a'), true)
 * assert.deepStrictEqual(S.Eq.equals('a', 'b'), false)
 * ```
 *
 * @public
 */
export const Eq: E.Eq<string> = {
  equals: (first, second) => first === second,
}

/**
 * `string` semigroup under concatenation.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 *
 * assert.deepStrictEqual(S.Semigroup.concat('a', 'b'), 'ab')
 * ```
 *
 * @public
 */
export const Semigroup: S.Semigroup<string> = {
  concat: (first, second) => first + second,
}

/**
 * An empty `string`.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const empty = ''

/**
 * `string` monoid under concatenation.
 *
 * The `empty` value is `''`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 *
 * assert.deepStrictEqual(S.Monoid.concat('a', 'b'), 'ab')
 * assert.deepStrictEqual(S.Monoid.concat('a', S.Monoid.empty), 'a')
 * ```
 *
 * @public
 */
export const Monoid: M.Monoid<string> = {
  concat: Semigroup.concat,
  empty,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 *
 * assert.deepStrictEqual(S.Ord.compare('a', 'a'), 0)
 * assert.deepStrictEqual(S.Ord.compare('a', 'b'), -1)
 * assert.deepStrictEqual(S.Ord.compare('b', 'a'), 1)
 * ```
 *
 * @public
 */
export const Ord: O.Ord<string> = {
  equals: Eq.equals,
  compare: (first, second) =>
    first < second ? -1
    : first > second ? 1
    : 0,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 *
 * assert.deepStrictEqual(S.Show.show('a'), '"a"')
 * ```
 *
 * @public
 */
export const Show: Sh.Show<string> = {
  show: s => JSON.stringify(s),
}

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Refinements
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 *
 * assert.deepStrictEqual(S.isString('a'), true)
 * assert.deepStrictEqual(S.isString(1), false)
 * ```
 *
 * @public
 */
export const isString: Refinement<unknown, string> = (u: unknown): u is string => typeof u === 'string'

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe('a', S.toUpperCase), 'A')
 * ```
 *
 * @public
 */
export const toUpperCase = (s: string): string => s.toUpperCase()

/**
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe('A', S.toLowerCase), 'a')
 * ```
 *
 * @public
 */
export const toLowerCase = (s: string): string => s.toLowerCase()

/**
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.replace('b', 'd')), 'adc')
 * ```
 *
 * @public
 */
export const replace =
  (searchValue: string | RegExp, replaceValue: string) =>
  (s: string): string =>
    s.replace(searchValue, replaceValue)

/**
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe(' a ', S.trim), 'a')
 * ```
 *
 * @public
 */
export const trim = (s: string): string => s.trim()

/**
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe(' a ', S.trimLeft), 'a ')
 * ```
 *
 * @public
 */
export const trimLeft = (s: string): string => s.trimLeft()

/**
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe(' a ', S.trimRight), ' a')
 * ```
 *
 * @public
 */
export const trimRight = (s: string): string => s.trimRight()

/**
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe('abcd', S.slice(1, 3)), 'bc')
 * ```
 *
 * @public
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
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe('', S.isEmpty), true)
 * assert.deepStrictEqual(pipe('a', S.isEmpty), false)
 * ```
 *
 * @public
 */
export const isEmpty = (s: string): boolean => s.length === 0

/**
 * Calculate the number of characters in a `string`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.size), 3)
 * ```
 *
 * @public
 */
export const size = (s: string): number => s.length

/**
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.split('')), ['a', 'b', 'c'])
 * assert.deepStrictEqual(pipe('', S.split('')), [''])
 * ```
 *
 * @public
 */
export const split =
  (separator: string | RegExp) =>
  (s: string): ReadonlyNonEmptyArray<string> => {
    const out = s.split(separator)
    return isNonEmpty(out) ? out : [s]
  }

/**
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.includes('b')), true)
 * assert.deepStrictEqual(pipe('abc', S.includes('d')), false)
 * ```
 *
 * @public
 */
export const includes =
  (searchString: string, position?: number) =>
  (s: string): boolean =>
    s.includes(searchString, position)

/**
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.startsWith('a')), true)
 * assert.deepStrictEqual(pipe('bc', S.startsWith('a')), false)
 * ```
 *
 * @public
 */
export const startsWith =
  (searchString: string, position?: number) =>
  (s: string): boolean =>
    s.startsWith(searchString, position)

/**
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import * as S from '@fp-tx/core/string'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe('abc', S.endsWith('c')), true)
 * assert.deepStrictEqual(pipe('ab', S.endsWith('c')), false)
 * ```
 *
 * @public
 */
export const endsWith =
  (searchString: string, position?: number) =>
  (s: string): boolean =>
    s.endsWith(searchString, position)
