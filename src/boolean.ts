/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import type * as BA from './BooleanAlgebra'
import type * as E from './Eq'
import { type LazyArg } from './function'
import { type Monoid } from './Monoid'
import type * as O from './Ord'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import type * as S from './Show'

// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Refinements
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const isBoolean: Refinement<unknown, boolean> = (u: unknown): u is boolean => typeof u === 'boolean'

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
  <A, B>(onFalse: LazyArg<A>, onTrue: LazyArg<B>) =>
  (value: boolean): A | B =>
    value ? onTrue() : onFalse()

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
 * Defines the fold over a boolean value. Takes two thunks `onTrue`, `onFalse` and a `boolean` value. If `value` is
 * false, `onFalse()` is returned, otherwise `onTrue()`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Pattern matching
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { some, map } from '@fp-tx/core/Option'
 * import { pipe } from '@fp-tx/core/function'
 * import { match } from '@fp-tx/core/boolean'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     some(true),
 *     map(
 *       match(
 *         () => 'false',
 *         () => 'true',
 *       ),
 *     ),
 *   ),
 *   some('true'),
 * )
 * ```
 *
 * @public
 */
export const match: <A>(onFalse: LazyArg<A>, onTrue: LazyArg<A>) => (value: boolean) => A = foldW

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

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const Eq: E.Eq<boolean> = {
  equals: (first, second) => first === second,
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
export const BooleanAlgebra: BA.BooleanAlgebra<boolean> = {
  meet: (first, second) => first && second,
  join: (first, second) => first || second,
  zero: false,
  one: true,
  implies: (first, second) => !first || second,
  not: b => !b,
}

/**
 * `boolean` semigroup under conjunction.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { SemigroupAll } from '@fp-tx/core/boolean'
 *
 * assert.deepStrictEqual(SemigroupAll.concat(true, true), true)
 * assert.deepStrictEqual(SemigroupAll.concat(true, false), false)
 * ```
 *
 * @public
 */
export const SemigroupAll: Semigroup<boolean> = {
  concat: (first, second) => first && second,
}

/**
 * `boolean` semigroup under disjunction.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { SemigroupAny } from '@fp-tx/core/boolean'
 *
 * assert.deepStrictEqual(SemigroupAny.concat(true, true), true)
 * assert.deepStrictEqual(SemigroupAny.concat(true, false), true)
 * assert.deepStrictEqual(SemigroupAny.concat(false, false), false)
 * ```
 *
 * @public
 */
export const SemigroupAny: Semigroup<boolean> = {
  concat: (first, second) => first || second,
}

/**
 * `boolean` monoid under conjunction.
 *
 * The `empty` value is `true`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { MonoidAll } from '@fp-tx/core/boolean'
 *
 * assert.deepStrictEqual(MonoidAll.concat(true, true), true)
 * assert.deepStrictEqual(MonoidAll.concat(true, false), false)
 * ```
 *
 * @public
 */
export const MonoidAll: Monoid<boolean> = {
  concat: SemigroupAll.concat,
  empty: true,
}

/**
 * `boolean` monoid under disjunction.
 *
 * The `empty` value is `false`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import { MonoidAny } from '@fp-tx/core/boolean'
 *
 * assert.deepStrictEqual(MonoidAny.concat(true, true), true)
 * assert.deepStrictEqual(MonoidAny.concat(true, false), true)
 * assert.deepStrictEqual(MonoidAny.concat(false, false), false)
 * ```
 *
 * @public
 */
export const MonoidAny: Monoid<boolean> = {
  concat: SemigroupAny.concat,
  empty: false,
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
export const Ord: O.Ord<boolean> = {
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
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const Show: S.Show<boolean> = {
  show: b => JSON.stringify(b),
}
