/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Functor2, type Functor2C, type Functor3, type Functor3C, type Functor4 } from './Functor'
import { type HKT, type HKT2, type Kind2, type Kind3, type Kind4, type URIS2, type URIS3, type URIS4 } from './HKT'

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
export interface Profunctor<F> {
  readonly URI: F
  readonly map: <E, A, B>(fa: HKT2<F, E, A>, f: (a: A) => B) => HKT<F, B>
  readonly promap: <E, A, D, B>(fea: HKT2<F, E, A>, f: (d: D) => E, g: (a: A) => B) => HKT2<F, D, B>
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
export interface Profunctor2<F extends URIS2> extends Functor2<F> {
  readonly promap: <E, A, D, B>(fea: Kind2<F, E, A>, f: (d: D) => E, g: (a: A) => B) => Kind2<F, D, B>
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
export interface Profunctor2C<F extends URIS2, E> extends Functor2C<F, E> {
  readonly promap: <A, D, B>(fea: Kind2<F, E, A>, f: (d: D) => E, g: (a: A) => B) => Kind2<F, D, B>
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
export interface Profunctor3<F extends URIS3> extends Functor3<F> {
  readonly promap: <R, E, A, D, B>(fea: Kind3<F, R, E, A>, f: (d: D) => E, g: (a: A) => B) => Kind3<F, R, D, B>
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
export interface Profunctor3C<F extends URIS3, E> extends Functor3C<F, E> {
  readonly promap: <R, A, D, B>(fea: Kind3<F, R, E, A>, f: (d: D) => E, g: (a: A) => B) => Kind3<F, R, D, B>
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
export interface Profunctor4<F extends URIS4> extends Functor4<F> {
  readonly promap: <S, R, E, A, D, B>(fea: Kind4<F, S, R, E, A>, f: (d: D) => E, g: (a: A) => B) => Kind4<F, S, R, D, B>
}
