/**
 * The `Applicative` type class extends the `Apply` type class with a `of` function, which can be used to create values
 * of type `f a` from values of type `a`.
 *
 * Where `Apply` provides the ability to lift functions of two or more arguments to functions whose arguments are
 * wrapped using `f`, and `Functor` provides the ability to lift functions of one argument, `pure` can be seen as the
 * function which lifts functions of _zero_ arguments. That is, `Applicative` functors support a lifting operation for
 * any number of function arguments.
 *
 * Instances must satisfy the following laws in addition to the `Apply` laws:
 *
 * 1. Identity: `A.ap(A.of(a => a), fa) <-> fa`
 * 2. Homomorphism: `A.ap(A.of(ab), A.of(a)) <-> A.of(ab(a))`
 * 3. Interchange: `A.ap(fab, A.of(a)) <-> A.ap(A.of(ab => ab(a)), fab)`
 *
 * Note. `Functor`'s `map` can be derived: `A.map(x, f) = A.ap(A.of(f), x)`
 *
 * @since 2.0.0
 */
import { ap, type Apply, type Apply1, type Apply2, type Apply2C, type Apply3, type Apply3C, type Apply4, getApplySemigroup } from './Apply'
import { pipe } from './function'
import {
  type FunctorComposition,
  type FunctorComposition2C1,
  type FunctorComposition11,
  type FunctorComposition12,
  type FunctorComposition12C,
  type FunctorComposition21,
  type FunctorComposition22,
  type FunctorComposition22C,
  type FunctorCompositionHKT1,
  type FunctorCompositionHKT2,
  type FunctorCompositionHKT2C,
  getFunctorComposition,
} from './Functor'
import { type HKT, type Kind, type Kind2, type Kind3, type Kind4, type URIS, type URIS2, type URIS3, type URIS4 } from './HKT'
import { type Monoid } from './Monoid'
import { type Pointed, type Pointed1, type Pointed2, type Pointed2C, type Pointed3, type Pointed3C, type Pointed4 } from './Pointed'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
 */
export interface Applicative<F> extends Apply<F>, Pointed<F> {}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Applicative1<F extends URIS> extends Apply1<F>, Pointed1<F> {}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Applicative2<F extends URIS2> extends Apply2<F>, Pointed2<F> {}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Applicative2C<F extends URIS2, E> extends Apply2C<F, E>, Pointed2C<F, E> {}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Applicative3<F extends URIS3> extends Apply3<F>, Pointed3<F> {}

/**
 * @since 2.2.0
 * @category Model
 */
export interface Applicative3C<F extends URIS3, E> extends Apply3C<F, E>, Pointed3C<F, E> {}

/**
 * @since 2.0.0
 * @category Model
 */
export interface Applicative4<F extends URIS4> extends Apply4<F>, Pointed4<F> {}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Lift a monoid into 'F', the inner values are concatenated using the provided `Monoid`.
 *
 * @since 2.10.0
 */
export function getApplicativeMonoid<F extends URIS4>(
  F: Applicative4<F>,
): <A, S, R, E>(M: Monoid<A>) => Monoid<Kind4<F, S, R, E, A>>
export function getApplicativeMonoid<F extends URIS3>(
  F: Applicative3<F>,
): <A, R, E>(M: Monoid<A>) => Monoid<Kind3<F, R, E, A>>
export function getApplicativeMonoid<F extends URIS3, E>(
  F: Applicative3C<F, E>,
): <A, R>(M: Monoid<A>) => Monoid<Kind3<F, R, E, A>>
export function getApplicativeMonoid<F extends URIS2>(
  F: Applicative2<F>,
): <A, E>(M: Monoid<A>) => Monoid<Kind2<F, E, A>>
export function getApplicativeMonoid<F extends URIS2, E>(
  F: Applicative2C<F, E>,
): <A>(M: Monoid<A>) => Monoid<Kind2<F, E, A>>
export function getApplicativeMonoid<F extends URIS>(F: Applicative1<F>): <A>(M: Monoid<A>) => Monoid<Kind<F, A>>
export function getApplicativeMonoid<F>(F: Applicative<F>): <A>(M: Monoid<A>) => Monoid<HKT<F, A>>
export function getApplicativeMonoid<F>(F: Applicative<F>): <A>(M: Monoid<A>) => Monoid<HKT<F, A>> {
  const f = getApplySemigroup(F)
  return <A>(M: Monoid<A>) => ({
    concat: f(M).concat,
    empty: F.of(M.empty),
  })
}

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ApplicativeComposition<F, G> extends FunctorComposition<F, G> {
  readonly of: <A>(a: A) => HKT<F, HKT<G, A>>
  readonly ap: <A, B>(fgab: HKT<F, HKT<G, (a: A) => B>>, fga: HKT<F, HKT<G, A>>) => HKT<F, HKT<G, B>>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ApplicativeCompositionHKT1<F, G extends URIS> extends FunctorCompositionHKT1<F, G> {
  readonly of: <A>(a: A) => HKT<F, Kind<G, A>>
  readonly ap: <A, B>(fgab: HKT<F, Kind<G, (a: A) => B>>, fga: HKT<F, Kind<G, A>>) => HKT<F, Kind<G, B>>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ApplicativeCompositionHKT2<F, G extends URIS2> extends FunctorCompositionHKT2<F, G> {
  readonly of: <E, A>(a: A) => HKT<F, Kind2<G, E, A>>
  readonly ap: <E, A, B>(fgab: HKT<F, Kind2<G, E, (a: A) => B>>, fga: HKT<F, Kind2<G, E, A>>) => HKT<F, Kind2<G, E, B>>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ApplicativeCompositionHKT2C<F, G extends URIS2, E> extends FunctorCompositionHKT2C<F, G, E> {
  readonly of: <A>(a: A) => HKT<F, Kind2<G, E, A>>
  readonly ap: <A, B>(fgab: HKT<F, Kind2<G, E, (a: A) => B>>, fga: HKT<F, Kind2<G, E, A>>) => HKT<F, Kind2<G, E, B>>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ApplicativeComposition11<F extends URIS, G extends URIS> extends FunctorComposition11<F, G> {
  readonly of: <A>(a: A) => Kind<F, Kind<G, A>>
  readonly ap: <A, B>(fgab: Kind<F, Kind<G, (a: A) => B>>, fga: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ApplicativeComposition12<F extends URIS, G extends URIS2> extends FunctorComposition12<F, G> {
  readonly of: <E, A>(a: A) => Kind<F, Kind2<G, E, A>>
  readonly ap: <E, A, B>(
    fgab: Kind<F, Kind2<G, E, (a: A) => B>>,
    fga: Kind<F, Kind2<G, E, A>>,
  ) => Kind<F, Kind2<G, E, B>>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ApplicativeComposition12C<F extends URIS, G extends URIS2, E> extends FunctorComposition12C<F, G, E> {
  readonly of: <A>(a: A) => Kind<F, Kind2<G, E, A>>
  readonly ap: <A, B>(fgab: Kind<F, Kind2<G, E, (a: A) => B>>, fga: Kind<F, Kind2<G, E, A>>) => Kind<F, Kind2<G, E, B>>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ApplicativeComposition21<F extends URIS2, G extends URIS> extends FunctorComposition21<F, G> {
  readonly of: <E, A>(a: A) => Kind2<F, E, Kind<G, A>>
  readonly ap: <E, A, B>(
    fgab: Kind2<F, E, Kind<G, (a: A) => B>>,
    fga: Kind2<F, E, Kind<G, A>>,
  ) => Kind2<F, E, Kind<G, B>>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ApplicativeComposition2C1<F extends URIS2, G extends URIS, E> extends FunctorComposition2C1<F, G, E> {
  readonly of: <A>(a: A) => Kind2<F, E, Kind<G, A>>
  readonly ap: <A, B>(fgab: Kind2<F, E, Kind<G, (a: A) => B>>, fga: Kind2<F, E, Kind<G, A>>) => Kind2<F, E, Kind<G, B>>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ApplicativeComposition22<F extends URIS2, G extends URIS2> extends FunctorComposition22<F, G> {
  readonly of: <FE, GE, A>(a: A) => Kind2<F, FE, Kind2<G, GE, A>>
  readonly ap: <FE, GE, A, B>(
    fgab: Kind2<F, FE, Kind2<G, GE, (a: A) => B>>,
    fga: Kind2<F, FE, Kind2<G, GE, A>>,
  ) => Kind2<F, FE, Kind2<G, GE, B>>
}

/**
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export interface ApplicativeComposition22C<F extends URIS2, G extends URIS2, E> extends FunctorComposition22C<F, G, E> {
  readonly of: <FE, A>(a: A) => Kind2<F, FE, Kind2<G, E, A>>
  readonly ap: <FE, A, B>(
    fgab: Kind2<F, FE, Kind2<G, E, (a: A) => B>>,
    fga: Kind2<F, FE, Kind2<G, E, A>>,
  ) => Kind2<F, FE, Kind2<G, E, B>>
}

/**
 * Use [`ap`](./Apply.ts.html#ap) instead.
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export function getApplicativeComposition<F extends URIS2, G extends URIS2, E>(
  F: Applicative2<F>,
  G: Applicative2C<G, E>,
): ApplicativeComposition22C<F, G, E>
/** @deprecated */
export function getApplicativeComposition<F extends URIS2, G extends URIS2>(
  F: Applicative2<F>,
  G: Applicative2<G>,
): ApplicativeComposition22<F, G>
/** @deprecated */
export function getApplicativeComposition<F extends URIS2, G extends URIS2, E>(
  F: Applicative2<F>,
  G: Applicative2C<G, E>,
): ApplicativeComposition22C<F, G, E>
/** @deprecated */
export function getApplicativeComposition<F extends URIS2, G extends URIS>(
  F: Applicative2<F>,
  G: Applicative1<G>,
): ApplicativeComposition21<F, G>
/** @deprecated */
export function getApplicativeComposition<F extends URIS, G extends URIS2>(
  F: Applicative1<F>,
  G: Applicative2<G>,
): ApplicativeComposition12<F, G>
/** @deprecated */
export function getApplicativeComposition<F extends URIS, G extends URIS2, E>(
  F: Applicative1<F>,
  G: Applicative2C<G, E>,
): ApplicativeComposition12C<F, G, E>
/** @deprecated */
export function getApplicativeComposition<F extends URIS, G extends URIS>(
  F: Applicative1<F>,
  G: Applicative1<G>,
): ApplicativeComposition11<F, G>
/** @deprecated */
export function getApplicativeComposition<F, G extends URIS2>(
  F: Applicative<F>,
  G: Applicative2<G>,
): ApplicativeCompositionHKT2<F, G>
/** @deprecated */
export function getApplicativeComposition<F, G extends URIS2, E>(
  F: Applicative<F>,
  G: Applicative2C<G, E>,
): ApplicativeCompositionHKT2C<F, G, E>
/** @deprecated */
export function getApplicativeComposition<F, G extends URIS>(
  F: Applicative<F>,
  G: Applicative1<G>,
): ApplicativeCompositionHKT1<F, G>
/** @deprecated */
export function getApplicativeComposition<F, G>(F: Applicative<F>, G: Applicative<G>): ApplicativeComposition<F, G>
/** @deprecated */
export function getApplicativeComposition<F, G>(F: Applicative<F>, G: Applicative<G>): ApplicativeComposition<F, G> {
  const map = getFunctorComposition(F, G).map
  const _ap = ap(F, G)
  return {
    map,
    of: a => F.of(G.of(a)),
    ap: (fgab, fga) => pipe(fgab, _ap(fga)),
  }
}
