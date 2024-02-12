/**
 * The `Semiring` class is for types that support an addition and multiplication operation.
 *
 * Instances must satisfy the following laws:
 *
 * - Commutative monoid under addition:
 *
 *   - Associativity: `(a + b) + c <-> a + (b + c)`
 *   - Identity: `zero + a = a + zero <-> a`
 *   - Commutative: `a + b <-> b + a`
 * - Monoid under multiplication:
 *
 *   - Associativity: `(a * b) * c <-> a * (b * c)`
 *   - Identity: `one * a <-> a * one <-> a`
 * - Multiplication distributes over addition:
 *
 *   - Left distributivity: `a * (b + c) <-> (a * b) + (a * c)`
 *   - Right distributivity: `(a + b) * c <-> (a * c) + (b * c)`
 * - Annihilation: `zero * a <-> a * zero <-> zero`
 *
 * **Note:** The `number` type is not fully law abiding members of this class hierarchy due to the potential for
 * arithmetic overflows, and the presence of `NaN` and `Infinity` values. The behaviour is unspecified in these cases.
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { getSemiring } from './function'

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
export interface Semiring<A> {
  readonly add: (x: A, y: A) => A
  readonly zero: A
  readonly mul: (x: A, y: A) => A
  readonly one: A
}

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`getSemiring`](./function.ts.html#getsemiring) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @deprecated Zone of Death
 * @public
 */
export const getFunctionSemiring: <A, B>(S: Semiring<B>) => Semiring<(a: A) => B> = getSemiring
