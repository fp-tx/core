/**
 * The `Monad` type class combines the operations of the `Chain` and `Applicative` type classes. Therefore, `Monad`
 * instances represent type constructors which support sequential composition, and also lifting of functions of
 * arbitrary arity.
 *
 * Instances must satisfy the following laws in addition to the `Applicative` and `Chain` laws:
 *
 * 1. Left identity: `M.chain(M.of(a), f) <-> f(a)`
 * 2. Right identity: `M.chain(fa, M.of) <-> fa`
 *
 * Note. `Functor`'s `map` can be derived: `A.map = (fa, f) => A.chain(fa, a => A.of(f(a)))`
 *
 * @meta
 * {@since 1.0.0}
 * @packageDocumentation
 */
import {
  type Applicative,
  type Applicative1,
  type Applicative2,
  type Applicative2C,
  type Applicative3,
  type Applicative3C,
  type Applicative4,
} from './Applicative'
import { type Chain, type Chain1, type Chain2, type Chain2C, type Chain3, type Chain3C, type Chain4 } from './Chain'
import { type URIS, type URIS2, type URIS3, type URIS4 } from './HKT'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Monad<F> extends Applicative<F>, Chain<F> {}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Monad1<F extends URIS> extends Applicative1<F>, Chain1<F> {}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Monad2<M extends URIS2> extends Applicative2<M>, Chain2<M> {}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Monad2C<M extends URIS2, L> extends Applicative2C<M, L>, Chain2C<M, L> {}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Monad3<M extends URIS3> extends Applicative3<M>, Chain3<M> {}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Monad3C<M extends URIS3, E> extends Applicative3C<M, E>, Chain3C<M, E> {}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Monad4<M extends URIS4> extends Applicative4<M>, Chain4<M> {}
