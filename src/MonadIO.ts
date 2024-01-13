/**
 * Lift a computation from the `IO` monad
 *
 * @since 1.0.0
 */
import {
  type FromIO,
  type FromIO1,
  type FromIO2,
  type FromIO2C,
  type FromIO3,
  type FromIO3C,
  type FromIO4,
} from './FromIO'
import { type URIS, type URIS2, type URIS3, type URIS4 } from './HKT'
import { type Monad, type Monad1, type Monad2, type Monad2C, type Monad3, type Monad3C, type Monad4 } from './Monad'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category Model
 */
export interface MonadIO<M> extends Monad<M>, FromIO<M> {}

/**
 * @since 1.0.0
 * @category Model
 */
export interface MonadIO1<M extends URIS> extends Monad1<M>, FromIO1<M> {}

/**
 * @since 1.0.0
 * @category Model
 */
export interface MonadIO2<M extends URIS2> extends Monad2<M>, FromIO2<M> {}

/**
 * @since 1.0.0
 * @category Model
 */
export interface MonadIO2C<M extends URIS2, E> extends Monad2C<M, E>, FromIO2C<M, E> {}

/**
 * @since 1.0.0
 * @category Model
 */
export interface MonadIO3<M extends URIS3> extends Monad3<M>, FromIO3<M> {}

/**
 * @since 1.0.0
 * @category Model
 */
export interface MonadIO3C<M extends URIS3, E> extends Monad3C<M, E>, FromIO3C<M, E> {}

/**
 * @since 1.0.0
 * @category Model
 */
export interface MonadIO4<M extends URIS4> extends Monad4<M>, FromIO4<M> {}
