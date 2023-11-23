/** @since 2.0.0 */
import { type Comonad2C } from './Comonad'
import { pipe } from './function'
import { flap as flap_, type Functor2 } from './Functor'
import { type Monoid } from './Monoid'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 2.0.0
 * @category Model
 */
export interface Traced<P, A> {
  (p: P): A
}

// TODO: curry in v3
/**
 * Extracts a value at a relative position which depends on the current value.
 *
 * @since 2.0.0
 */
export function tracks<P, A>(M: Monoid<P>, f: (a: A) => P): (wa: Traced<P, A>) => A {
  return wa => wa(f(wa(M.empty)))
}

/**
 * Get the current position
 *
 * @since 2.0.0
 */
export function listen<P, A>(wa: Traced<P, A>): Traced<P, [A, P]> {
  return e => [wa(e), e]
}

/**
 * Get a value which depends on the current position
 *
 * @since 2.0.0
 */
export function listens<P, B>(f: (p: P) => B): <A>(wa: Traced<P, A>) => Traced<P, [A, B]> {
  return wa => e => [wa(e), f(e)]
}

/**
 * Apply a function to the current position
 *
 * @since 2.0.0
 */
export function censor<P>(f: (p: P) => P): <A>(wa: Traced<P, A>) => Traced<P, A> {
  return wa => e => wa(f(e))
}

/**
 * @since 2.0.0
 * @category Instances
 */
export function getComonad<P>(monoid: Monoid<P>): Comonad2C<URI, P> {
  function extend<A, B>(wa: Traced<P, A>, f: (wa: Traced<P, A>) => B): Traced<P, B> {
    return p1 => f(p2 => wa(monoid.concat(p1, p2)))
  }

  function extract<A>(wa: Traced<P, A>): A {
    return wa(monoid.empty)
  }

  return {
    URI,
    _E: undefined as any,
    map: _map,
    extend,
    extract,
  }
}

/* istanbul ignore next */
const _map: Functor2<URI>['map'] = (fa, f) => pipe(fa, map(f))

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const map: <A, B>(f: (a: A) => B) => <E>(fa: Traced<E, A>) => Traced<E, B> = f => fa => p => f(fa(p))

/**
 * @since 2.0.0
 * @category Type lambdas
 */
export const URI = 'Traced'

/**
 * @since 2.0.0
 * @category Type lambdas
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: Traced<E, A>
  }
}

/**
 * @since 2.7.0
 * @category Instances
 */
export const Functor: Functor2<URI> = {
  URI,
  map: _map,
}

/**
 * @since 2.10.0
 * @category Mapping
 */
export const flap = /*#__PURE__*/ flap_(Functor)

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`Functor`](#functor) instead.
 *
 * @deprecated
 * @since 2.0.0
 * @category Zone of death
 */
export const traced: Functor2<URI> = Functor
