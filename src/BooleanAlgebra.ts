/**
 * Boolean algebras are Heyting algebras with the additional constraint that the law of the excluded middle is true
 * (equivalently, double-negation is true).
 *
 * Instances should satisfy the following laws in addition to the `HeytingAlgebra` laws:
 *
 * - Excluded middle: `a ∨ ¬a <-> 1`
 *
 * Boolean algebras generalize classical logic: one is equivalent to "true" and zero is equivalent to "false".
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { getBooleanAlgebra } from './function'
import { type HeytingAlgebra } from './HeytingAlgebra'

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
export interface BooleanAlgebra<A> extends HeytingAlgebra<A> {}

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Every boolean algebras has a dual algebra, which involves reversing one/zero as well as join/meet.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const reverse = <A>(B: BooleanAlgebra<A>): BooleanAlgebra<A> => ({
  meet: (x, y) => B.join(x, y),
  join: (x, y) => B.meet(x, y),
  zero: B.one,
  one: B.zero,
  implies: (x, y) => B.join(B.not(x), y),
  not: B.not,
})

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
export const booleanAlgebraVoid: BooleanAlgebra<void> = {
  meet: () => undefined,
  join: () => undefined,
  zero: undefined,
  one: undefined,
  implies: () => undefined,
  not: () => undefined,
}

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`reverse`](#reverse) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export const getDualBooleanAlgebra = reverse

/**
 * Use [`BooleanAlgebra`](./boolean.ts.html#booleanalgebra) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export const booleanAlgebraBoolean: BooleanAlgebra<boolean> = {
  meet: (x, y) => x && y,
  join: (x, y) => x || y,
  zero: false,
  one: true,
  implies: (x, y) => !x || y,
  not: x => !x,
}

/**
 * Use [`getBooleanAlgebra`](./function.ts.html#getbooleanalgebra) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export const getFunctionBooleanAlgebra: <B>(B: BooleanAlgebra<B>) => <A = never>() => BooleanAlgebra<(a: A) => B> =
  getBooleanAlgebra
