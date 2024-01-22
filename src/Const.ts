/**
 * The `Const` type constructor, which wraps its first type argument and ignores its second. That is, `Const<E, A>` is
 * isomorphic to `E` for any `A`.
 *
 * `Const` has some useful instances. For example, the `Applicative` instance allows us to collect results using a
 * `Monoid` while ignoring return values.
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Applicative2C } from './Applicative'
import { type Apply2C } from './Apply'
import { type Bifunctor2 } from './Bifunctor'
import { type BooleanAlgebra } from './BooleanAlgebra'
import { type Bounded } from './Bounded'
import { type Contravariant2 } from './Contravariant'
import { type Eq } from './Eq'
import { identity, pipe, unsafeCoerce } from './function'
import { flap as flap_, type Functor2 } from './Functor'
import { type HeytingAlgebra } from './HeytingAlgebra'
import { type Monoid } from './Monoid'
import { type Ord } from './Ord'
import { type Ring } from './Ring'
import { type Semigroup } from './Semigroup'
import { type Semiring } from './Semiring'
import { type Show } from './Show'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Model
 * @public
 */
export type Const<E, A> = E & { readonly _A: A }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const make: <E, A = never>(e: E) => Const<E, A> = unsafeCoerce

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export function getShow<E, A>(S: Show<E>): Show<Const<E, A>> {
  return {
    show: c => `make(${S.show(c)})`,
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getEq: <E, A>(E: Eq<E>) => Eq<Const<E, A>> = identity

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getOrd: <E, A>(O: Ord<E>) => Ord<Const<E, A>> = identity

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getBounded: <E, A>(B: Bounded<E>) => Bounded<Const<E, A>> = identity as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getSemigroup: <E, A>(S: Semigroup<E>) => Semigroup<Const<E, A>> = identity as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getMonoid: <E, A>(M: Monoid<E>) => Monoid<Const<E, A>> = identity as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getSemiring: <E, A>(S: Semiring<E>) => Semiring<Const<E, A>> = identity as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getRing: <E, A>(S: Ring<E>) => Ring<Const<E, A>> = identity as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getHeytingAlgebra: <E, A>(H: HeytingAlgebra<E>) => HeytingAlgebra<Const<E, A>> = identity as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getBooleanAlgebra: <E, A>(H: BooleanAlgebra<E>) => BooleanAlgebra<Const<E, A>> = identity as any

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export function getApply<E>(S: Semigroup<E>): Apply2C<URI, E> {
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: (fab, fa) => make(S.concat(fab, fa)),
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export function getApplicative<E>(M: Monoid<E>): Applicative2C<URI, E> {
  const A = getApply(M)
  return {
    URI,
    _E: undefined as any,
    map: A.map,
    ap: A.ap,
    of: () => make(M.empty),
  }
}

const _contramap: Contravariant2<URI>['contramap'] = (fa, f) => pipe(fa, contramap(f))
/* istanbul ignore next */
const _map: Functor2<URI>['map'] = (fa, f) => pipe(fa, map(f))
/* istanbul ignore next */
const _bimap: Bifunctor2<URI>['bimap'] = (fa, f, g) => pipe(fa, bimap(f, g))
/* istanbul ignore next */
const _mapLeft: Bifunctor2<URI>['mapLeft'] = (fa, f) => pipe(fa, mapLeft(f))

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const contramap: <A, B>(f: (b: B) => A) => <E>(fa: Const<E, A>) => Const<E, B> = () => unsafeCoerce

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => <E>(fa: Const<E, A>) => Const<E, B> = () => unsafeCoerce

/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => (fa: Const<E, A>) => Const<G, B> = f => fa =>
  make(f(fa))

/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Error handling
 * @public
 */
export const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: Const<E, A>) => Const<G, A> = f => fa => make(f(fa))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'Const'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: Const<E, A>
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Functor: Functor2<URI> = {
  URI,
  map: _map,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Contravariant: Contravariant2<URI> = {
  URI,
  contramap: _contramap,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Bifunctor: Bifunctor2<URI> = {
  URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
}

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `C.Functor` instead of `C.const_` (where `C` is from `import C from 'fp-ts/Const'`)
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const const_: Functor2<URI> & Contravariant2<URI> & Bifunctor2<URI> = {
  URI,
  map: _map,
  contramap: _contramap,
  bimap: _bimap,
  mapLeft: _mapLeft,
}
