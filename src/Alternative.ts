/**
 * The `Alternative` type class extends the `Alt` type class with a value that should be the left and right identity for
 * `alt`.
 *
 * It is similar to `Monoid`, except that it applies to types of kind `* -> *`, like `Array` or `Option`, rather than
 * concrete types like `string` or `number`.
 *
 * `Alternative` instances should satisfy the following laws:
 *
 * 1. Left identity: `A.alt(zero, fa) <-> fa`
 * 2. Right identity: `A.alt(fa, zero) <-> fa`
 * 3. Annihilation: `A.map(zero, f) <-> zero`
 * 4. Distributivity: `A.ap(A.alt(fab, gab), fa) <-> A.alt(A.ap(fab, fa), A.ap(gab, fa))`
 * 5. Annihilation: `A.ap(zero, fa) <-> zero`
 *
 * @since 2.0.0
 */
import { type Alt, type Alt1, type Alt2, type Alt2C, type Alt3, type Alt3C, type Alt4, altAll as altAll_ } from './Alt'
import {
  type Applicative,
  type Applicative1,
  type Applicative2,
  type Applicative2C,
  type Applicative3,
  type Applicative3C,
  type Applicative4,
} from './Applicative'
import { getApplySemigroup } from './Apply'
import { type HKT, type Kind, type Kind2, type Kind3, type Kind4, type URIS, type URIS2, type URIS3, type URIS4 } from './HKT'
import { type Monoid } from './Monoid'
import { type Semigroup } from './Semigroup'
import { type Zero, type Zero1, type Zero2, type Zero2C, type Zero3, type Zero3C, type Zero4 } from './Zero'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
 */
export interface Alternative<F> extends Applicative<F>, Alt<F>, Zero<F> {}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Alternative1<F extends URIS> extends Applicative1<F>, Alt1<F>, Zero1<F> {}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Alternative2<F extends URIS2> extends Applicative2<F>, Alt2<F>, Zero2<F> {}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Alternative2C<F extends URIS2, E> extends Applicative2C<F, E>, Alt2C<F, E>, Zero2C<F, E> {}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Alternative3<F extends URIS3> extends Applicative3<F>, Alt3<F>, Zero3<F> {}

/**
 * @since 2.10.0
 * @category Model
 */
export interface Alternative3C<F extends URIS3, E> extends Applicative3C<F, E>, Alt3C<F, E>, Zero3C<F, E> {}

/**
 * @since 2.10.0
 * @category Model
 */
export interface Alternative4<F extends URIS4> extends Applicative4<F>, Alt4<F>, Zero4<F> {}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/** @since 2.11.0 */
export function altAll<F extends URIS4>(
  F: Alternative4<F>,
): <S, R, E, A>(as: ReadonlyArray<Kind4<F, S, R, E, A>>) => Kind4<F, S, R, E, A>
export function altAll<F extends URIS3>(
  F: Alternative3<F>,
): <R, E, A>(as: ReadonlyArray<Kind3<F, R, E, A>>) => Kind3<F, R, E, A>
export function altAll<F extends URIS3, E>(
  F: Alternative3C<F, E>,
): <R, A>(as: ReadonlyArray<Kind3<F, R, E, A>>) => Kind3<F, R, E, A>
export function altAll<F extends URIS2>(F: Alternative2<F>): <E, A>(as: ReadonlyArray<Kind2<F, E, A>>) => Kind2<F, E, A>
export function altAll<F extends URIS2, E>(
  F: Alternative2C<F, E>,
): <A>(as: ReadonlyArray<Kind2<F, E, A>>) => Kind2<F, E, A>
export function altAll<F extends URIS>(F: Alternative1<F>): <A>(as: ReadonlyArray<Kind<F, A>>) => Kind<F, A>
export function altAll<F>(F: Alternative<F>): <A>(as: ReadonlyArray<HKT<F, A>>) => HKT<F, A>
export function altAll<F>(F: Alternative<F>): <A>(as: ReadonlyArray<HKT<F, A>>) => HKT<F, A> {
  return altAll_(F)(F.zero())
}

/**
 * Lift a semigroup into a monoid alternative 'F', the inner values are concatenated using the provided `Semigroup`.
 *
 * @since 2.13.0
 */
export function getAlternativeMonoid<F extends URIS4>(
  F: Alternative4<F>,
): <A, S, R, E>(S: Semigroup<A>) => Monoid<Kind4<F, S, R, E, A>>
export function getAlternativeMonoid<F extends URIS3>(
  F: Alternative3<F>,
): <A, R, E>(S: Semigroup<A>) => Monoid<Kind3<F, R, E, A>>
export function getAlternativeMonoid<F extends URIS3, E>(
  F: Alternative3C<F, E>,
): <A, R>(S: Semigroup<A>) => Monoid<Kind3<F, R, E, A>>
export function getAlternativeMonoid<F extends URIS2>(
  F: Alternative2<F>,
): <A, E>(S: Semigroup<A>) => Monoid<Kind2<F, E, A>>
export function getAlternativeMonoid<F extends URIS2, E>(
  F: Alternative2C<F, E>,
): <A>(S: Semigroup<A>) => Monoid<Kind2<F, E, A>>
export function getAlternativeMonoid<F extends URIS>(F: Alternative1<F>): <A>(S: Semigroup<A>) => Monoid<Kind<F, A>>
export function getAlternativeMonoid<F>(F: Alternative<F>): <A>(S: Semigroup<A>) => Monoid<HKT<F, A>>
export function getAlternativeMonoid<F>(F: Alternative<F>): <A>(S: Semigroup<A>) => Monoid<HKT<F, A>> {
  const f = getApplySemigroup(F)
  return <A>(S: Semigroup<A>) => {
    const SF = f(S)
    return {
      concat: (first: HKT<F, A>, second: HKT<F, A>) =>
        F.alt(SF.concat(first, second), () => F.alt(first, () => second)),
      empty: F.zero(),
    }
  }
}
