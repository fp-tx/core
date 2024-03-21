/**
 * The `FromThese` type class represents those data types which support errors and warnings.
 *
 * @meta
 * {@since 1.0.0}
 * @packageDocumentation
 */
import { flow } from './function'
import { type HKT2, type Kind2, type Kind3, type Kind4, type URIS2, type URIS3, type URIS4 } from './HKT'
import { type These } from './These'

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
export interface FromThese<F> {
  readonly URI: F
  readonly fromThese: <E, A>(e: These<E, A>) => HKT2<F, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FromThese2<F extends URIS2> {
  readonly URI: F
  readonly fromThese: <E, A>(fa: These<E, A>) => Kind2<F, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FromThese2C<F extends URIS2, E> {
  readonly URI: F
  readonly _E: E
  readonly fromThese: <A>(fa: These<E, A>) => Kind2<F, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FromThese3<F extends URIS3> {
  readonly URI: F
  readonly fromThese: <E, A, R>(fa: These<E, A>) => Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FromThese3C<F extends URIS3, E> {
  readonly URI: F
  readonly _E: E
  readonly fromThese: <A, R>(fa: These<E, A>) => Kind3<F, R, E, A>
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface FromThese4<F extends URIS4> {
  readonly URI: F
  readonly fromThese: <E, A, S, R>(fa: These<E, A>) => Kind4<F, S, R, E, A>
}

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function fromTheseK<F extends URIS4>(
  F: FromThese4<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => These<E, B>) => <S, R>(...a: A) => Kind4<F, S, R, E, B>
export function fromTheseK<F extends URIS3>(
  F: FromThese3<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => These<E, B>) => <R>(...a: A) => Kind3<F, R, E, B>
export function fromTheseK<F extends URIS3, E>(
  F: FromThese3C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => These<E, B>) => <R>(...a: A) => Kind3<F, R, E, B>
export function fromTheseK<F extends URIS2>(
  F: FromThese2<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => These<E, B>) => (...a: A) => Kind2<F, E, B>
export function fromTheseK<F extends URIS2, E>(
  F: FromThese2C<F, E>,
): <A extends ReadonlyArray<unknown>, B>(f: (...a: A) => These<E, B>) => (...a: A) => Kind2<F, E, B>
export function fromTheseK<F>(
  F: FromThese<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => These<E, B>) => (...a: A) => HKT2<F, E, B>
export function fromTheseK<F>(
  F: FromThese<F>,
): <A extends ReadonlyArray<unknown>, E, B>(f: (...a: A) => These<E, B>) => (...a: A) => HKT2<F, E, B> {
  return f => flow(f, F.fromThese)
}
