/**
 * The `MonadThrow` type class represents those monads which support errors via `throwError`, where `throwError(e)`
 * halts, yielding the error `e`.
 *
 * Laws:
 *
 * - Left zero: `M.chain(M.throwError(e), f) = M.throwError(e)`
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
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
import { type Monad, type Monad1, type Monad2, type Monad2C, type Monad3, type Monad3C, type Monad4 } from './Monad'

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
export interface MonadThrow<M> extends Monad<M> {
  readonly throwError: <E, A>(e: E) => HKT<M, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface MonadThrow1<M extends URIS> extends Monad1<M> {
  readonly throwError: <E, A>(e: E) => Kind<M, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface MonadThrow2<M extends URIS2> extends Monad2<M> {
  readonly throwError: <E, A>(e: E) => Kind2<M, E, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface MonadThrow2C<M extends URIS2, E> extends Monad2C<M, E> {
  readonly throwError: <A>(e: E) => Kind2<M, E, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface MonadThrow3<M extends URIS3> extends Monad3<M> {
  readonly throwError: <R, E, A>(e: E) => Kind3<M, R, E, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface MonadThrow3C<M extends URIS3, E> extends Monad3C<M, E> {
  readonly throwError: <R, A>(e: E) => Kind3<M, R, E, A>
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export interface MonadThrow4<M extends URIS4> extends Monad4<M> {
  readonly throwError: <S, R, E, A>(e: E) => Kind4<M, S, R, E, A>
}
