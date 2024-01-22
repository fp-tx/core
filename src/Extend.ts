/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import {
  type Functor,
  type Functor1,
  type Functor2,
  type Functor2C,
  type Functor3,
  type Functor3C,
  type Functor4,
} from './Functor'
import {
  type HKT,
  type Kind,
  type Kind2,
  type Kind3,
  type Kind4,
  type URIS,
  type URIS2,
  type URIS3,
  type URIS4,
} from './HKT'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface Extend<W> extends Functor<W> {
  readonly extend: <A, B>(wa: HKT<W, A>, f: (wa: HKT<W, A>) => B) => HKT<W, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface Extend1<W extends URIS> extends Functor1<W> {
  readonly extend: <A, B>(wa: Kind<W, A>, f: (wa: Kind<W, A>) => B) => Kind<W, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface Extend2<W extends URIS2> extends Functor2<W> {
  readonly extend: <E, A, B>(wa: Kind2<W, E, A>, f: (wa: Kind2<W, E, A>) => B) => Kind2<W, E, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface Extend2C<W extends URIS2, E> extends Functor2C<W, E> {
  readonly extend: <A, B>(wa: Kind2<W, E, A>, f: (wa: Kind2<W, E, A>) => B) => Kind2<W, E, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface Extend3<W extends URIS3> extends Functor3<W> {
  readonly extend: <R, E, A, B>(wa: Kind3<W, R, E, A>, f: (wa: Kind3<W, R, E, A>) => B) => Kind3<W, R, E, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface Extend3C<W extends URIS3, E> extends Functor3C<W, E> {
  readonly extend: <R, A, B>(wa: Kind3<W, R, E, A>, f: (wa: Kind3<W, R, E, A>) => B) => Kind3<W, R, E, B>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface Extend4<W extends URIS4> extends Functor4<W> {
  readonly extend: <S, R, E, A, B>(wa: Kind4<W, S, R, E, A>, f: (wa: Kind4<W, S, R, E, A>) => B) => Kind4<W, S, R, E, B>
}
