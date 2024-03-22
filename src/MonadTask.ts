/**
 * Lift a computation from the `Task` monad
 *
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import {
  type FromTask,
  type FromTask1,
  type FromTask2,
  type FromTask2C,
  type FromTask3,
  type FromTask3C,
  type FromTask4,
} from './FromTask'
import { type URIS, type URIS2, type URIS3, type URIS4 } from './HKT'
import {
  type MonadIO,
  type MonadIO1,
  type MonadIO2,
  type MonadIO2C,
  type MonadIO3,
  type MonadIO3C,
  type MonadIO4,
} from './MonadIO'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface MonadTask<M> extends MonadIO<M>, FromTask<M> {}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface MonadTask1<M extends URIS> extends MonadIO1<M>, FromTask1<M> {}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface MonadTask2<M extends URIS2> extends MonadIO2<M>, FromTask2<M> {}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface MonadTask2C<M extends URIS2, E> extends MonadIO2C<M, E>, FromTask2C<M, E> {}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface MonadTask3<M extends URIS3> extends MonadIO3<M>, FromTask3<M> {}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface MonadTask3C<M extends URIS3, E> extends MonadIO3C<M, E>, FromTask3C<M, E> {}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface MonadTask4<M extends URIS4> extends MonadIO4<M>, FromTask4<M> {}
