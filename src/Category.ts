/** @since 2.0.0 */
import { type HKT2, type Kind2, type Kind3, type Kind4, type URIS2, type URIS3, type URIS4 } from './HKT'
import { type Semigroupoid, type Semigroupoid2, type Semigroupoid3, type Semigroupoid4 } from './Semigroupoid'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
 */
export interface Category<F> extends Semigroupoid<F> {
  readonly id: <A>() => HKT2<F, A, A>
}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Category2<F extends URIS2> extends Semigroupoid2<F> {
  readonly id: <A>() => Kind2<F, A, A>
}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Category3<F extends URIS3> extends Semigroupoid3<F> {
  readonly id: <R, A>() => Kind3<F, R, A, A>
}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Category4<F extends URIS4> extends Semigroupoid4<F> {
  readonly id: <S, R, A>() => Kind4<F, S, R, A, A>
}
