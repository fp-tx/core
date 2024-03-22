/**
 * @meta
 * {@since 0.1.0}
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
import {
  type Pointed,
  type Pointed1,
  type Pointed2,
  type Pointed2C,
  type Pointed3,
  type Pointed3C,
  type Pointed4,
} from './Pointed'

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
export interface Zero<F> {
  readonly URI: F
  readonly zero: <A>() => HKT<F, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Zero1<F extends URIS> {
  readonly URI: F
  readonly zero: <A>() => Kind<F, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Zero2<F extends URIS2> {
  readonly URI: F
  readonly zero: <E, A>() => Kind2<F, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Zero2C<F extends URIS2, E> {
  readonly URI: F
  readonly _E: E
  readonly zero: <A>() => Kind2<F, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Zero3<F extends URIS3> {
  readonly URI: F
  readonly zero: <R, E, A>() => Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Zero3C<F extends URIS3, E> {
  readonly URI: F
  readonly _E: E
  readonly zero: <R, A>() => Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Zero4<F extends URIS4> {
  readonly URI: F
  readonly zero: <S, R, E, A>() => Kind4<F, S, R, E, A>
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Do notation}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function guard<F extends URIS4>(F: Zero4<F>, P: Pointed4<F>): <S, R, E>(b: boolean) => Kind4<F, S, R, E, void>
export function guard<F extends URIS3>(F: Zero3<F>, P: Pointed3<F>): <R, E>(b: boolean) => Kind3<F, R, E, void>
export function guard<F extends URIS3, E>(F: Zero3C<F, E>, P: Pointed3C<F, E>): <R>(b: boolean) => Kind3<F, R, E, void>
export function guard<F extends URIS2>(F: Zero2<F>, P: Pointed2<F>): <E>(b: boolean) => Kind2<F, E, void>
export function guard<F extends URIS2, E>(F: Zero2C<F, E>, P: Pointed2C<F, E>): (b: boolean) => Kind2<F, E, void>
export function guard<F extends URIS>(F: Zero1<F>, P: Pointed1<F>): (b: boolean) => Kind<F, void>
export function guard<F>(F: Zero<F>, P: Pointed<F>): (b: boolean) => HKT<F, void>
export function guard<F>(F: Zero<F>, P: Pointed<F>): (b: boolean) => HKT<F, void> {
  return b => (b ? P.of(undefined) : F.zero())
}
