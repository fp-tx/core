/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type HKT2, type Kind2, type Kind3, type Kind4, type URIS2, type URIS3, type URIS4 } from './HKT'

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
export interface Semigroupoid<F> {
  readonly URI: F
  readonly compose: <A, B, C>(bc: HKT2<F, B, C>, ab: HKT2<F, A, B>) => HKT2<F, A, C>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface Semigroupoid2<F extends URIS2> {
  readonly URI: F
  readonly compose: <A, B, C>(ab: Kind2<F, B, C>, la: Kind2<F, A, B>) => Kind2<F, A, C>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface Semigroupoid2C<F extends URIS2, A> {
  readonly URI: F
  readonly _E: A
  readonly compose: <B, C>(ab: Kind2<F, B, C>, la: Kind2<F, A, B>) => Kind2<F, A, C>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface Semigroupoid3<F extends URIS3> {
  readonly URI: F
  readonly compose: <R, A, B, C>(ab: Kind3<F, R, B, C>, la: Kind3<F, R, A, B>) => Kind3<F, R, A, C>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface Semigroupoid3C<F extends URIS3, A> {
  readonly URI: F
  readonly _E: A
  readonly compose: <R, B, C>(ab: Kind3<F, R, B, C>, la: Kind3<F, R, A, B>) => Kind3<F, R, A, C>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface Semigroupoid4<F extends URIS4> {
  readonly URI: F
  readonly compose: <S, R, A, B, C>(ab: Kind4<F, S, R, B, C>, la: Kind4<F, S, R, A, B>) => Kind4<F, S, R, A, C>
}
