/**
 * A `Group` is a `Monoid` with inverses. Instances must satisfy the following law in addition to the monoid laws:
 *
 * - Inverse: `concat(inverse(a), a) <-> empty = concat(a, inverse(a))`
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Monoid } from './Monoid'

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
export interface Group<A> extends Monoid<A> {
  readonly inverse: (a: A) => A
}
