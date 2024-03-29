/**
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import { type Comonad2 } from './Comonad'
import { type Endomorphism } from './Endomorphism'
import { type Extend2 } from './Extend'
import { identity, pipe } from './function'
import {
  flap as flap_,
  type Functor as FunctorHKT,
  type Functor1,
  type Functor2,
  type Functor2C,
  type Functor3,
  type Functor3C,
} from './Functor'
import { type HKT, type Kind, type Kind2, type Kind3, type URIS, type URIS2, type URIS3 } from './HKT'

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
export interface Store<S, A> {
  readonly peek: (s: S) => A
  readonly pos: S
}

/**
 * Reposition the focus at the specified position
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function seek<S>(s: S): <A>(wa: Store<S, A>) => Store<S, A> {
  return wa => ({ peek: wa.peek, pos: s })
}

/**
 * Reposition the focus at the specified position, which depends on the current position
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function seeks<S>(f: Endomorphism<S>): <A>(wa: Store<S, A>) => Store<S, A> {
  return wa => ({ peek: wa.peek, pos: f(wa.pos) })
}

/**
 * Extract a value from a position which depends on the current position
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function peeks<S>(f: Endomorphism<S>): <A>(wa: Store<S, A>) => A {
  return wa => wa.peek(f(wa.pos))
}

/**
 * Extract a collection of values from positions which depend on the current position
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function experiment<F extends URIS3>(
  F: Functor3<F>,
): <R, E, S>(f: (s: S) => Kind3<F, R, E, S>) => <A>(wa: Store<S, A>) => Kind3<F, R, E, A>
export function experiment<F extends URIS3, E>(
  F: Functor3C<F, E>,
): <R, S>(f: (s: S) => Kind3<F, R, E, S>) => <A>(wa: Store<S, A>) => Kind3<F, R, E, A>
export function experiment<F extends URIS2>(
  F: Functor2<F>,
): <E, S>(f: (s: S) => Kind2<F, E, S>) => <A>(wa: Store<S, A>) => Kind2<F, E, A>
export function experiment<F extends URIS2, E>(
  F: Functor2C<F, E>,
): <S>(f: (s: S) => Kind2<F, E, S>) => <A>(wa: Store<S, A>) => Kind2<F, E, A>
export function experiment<F extends URIS>(
  F: Functor1<F>,
): <S>(f: (s: S) => Kind<F, S>) => <A>(wa: Store<S, A>) => Kind<F, A>
export function experiment<F>(F: FunctorHKT<F>): <S>(f: (s: S) => HKT<F, S>) => <A>(wa: Store<S, A>) => HKT<F, A>
export function experiment<F>(F: FunctorHKT<F>): <S>(f: (s: S) => HKT<F, S>) => <A>(wa: Store<S, A>) => HKT<F, A> {
  return f => wa => F.map(f(wa.pos), s => wa.peek(s))
}

/* istanbul ignore next */
const _map: Functor2<URI>['map'] = (fa, f) => pipe(fa, map(f))
/* istanbul ignore next */
const _extend: Extend2<URI>['extend'] = (wa, f) => pipe(wa, extend(f))

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const extend: <E, A, B>(f: (wa: Store<E, A>) => B) => (wa: Store<E, A>) => Store<E, B> = f => wa => ({
  peek: s => f({ peek: wa.peek, pos: s }),
  pos: wa.pos,
})

/**
 * @meta
 * {@since 0.1.0}
 * {@category Extract}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const extract: <E, A>(wa: Store<E, A>) => A = wa => wa.peek(wa.pos)

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const duplicate: <E, A>(wa: Store<E, A>) => Store<E, Store<E, A>> = /*#__PURE__*/ extend(identity)

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => <E>(fa: Store<E, A>) => Store<E, B> = f => fa => ({
  peek: s => f(fa.peek(s)),
  pos: fa.pos,
})

/**
 * @meta
 * {@since 0.1.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const URI = 'Store'

/**
 * @meta
 * {@since 0.1.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: Store<E, A>
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Functor: Functor2<URI> = {
  URI,
  map: _map,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Comonad: Comonad2<URI> = {
  URI,
  map: _map,
  extend: _extend,
  extract,
}

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Comonad`
 * instance, pass `S.Comonad` instead of `S.store` (where `S` is from `import S from 'fp-ts/Store'`)
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const store: Comonad2<URI> = Comonad
