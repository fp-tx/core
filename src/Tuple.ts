/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Applicative, type Applicative2C } from './Applicative'
import { type Apply2C } from './Apply'
import { type Bifunctor2 } from './Bifunctor'
import { type Chain2C } from './Chain'
import { type ChainRec2C } from './ChainRec'
import { type Comonad2 } from './Comonad'
import { type Either } from './Either'
import { type Extend2 } from './Extend'
import { type Foldable2 } from './Foldable'
import { identity, pipe } from './function'
import { flap as flap_, type Functor2 } from './Functor'
import { type HKT } from './HKT'
import { type Monad2C } from './Monad'
import { type Monoid } from './Monoid'
import * as RT from './ReadonlyTuple'
import { type Semigroup } from './Semigroup'
import { type Semigroupoid2 } from './Semigroupoid'
import { type PipeableTraverse2, type Traversable2 } from './Traversable'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const fst: <A, E>(ea: [A, E]) => A = RT.fst

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const snd: <A, E>(ea: [A, E]) => E = RT.snd

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const swap = <A, E>(ea: [A, E]): [E, A] => [snd(ea), fst(ea)]

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export function getApply<S>(S: Semigroup<S>): Apply2C<URI, S> {
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: (fab, fa) => [fst(fab)(fst(fa)), S.concat(snd(fab), snd(fa))],
  }
}

const of =
  <M>(M: Monoid<M>) =>
  <A>(a: A): [A, M] => {
    return [a, M.empty]
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export function getApplicative<M>(M: Monoid<M>): Applicative2C<URI, M> {
  const A = getApply(M)
  return {
    URI,
    _E: undefined as any,
    map: A.map,
    ap: A.ap,
    of: of(M),
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export function getChain<S>(S: Semigroup<S>): Chain2C<URI, S> {
  const A = getApply(S)
  return {
    URI,
    _E: undefined as any,
    map: A.map,
    ap: A.ap,
    chain: (ma, f) => {
      const [b, s] = f(fst(ma))
      return [b, S.concat(snd(ma), s)]
    },
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export function getMonad<M>(M: Monoid<M>): Monad2C<URI, M> {
  const C = getChain(M)
  return {
    URI,
    _E: undefined as any,
    map: C.map,
    ap: C.ap,
    chain: C.chain,
    of: of(M),
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export function getChainRec<M>(M: Monoid<M>): ChainRec2C<URI, M> {
  const chainRec = <A, B>(a: A, f: (a: A) => [Either<A, B>, M]): [B, M] => {
    let result: [Either<A, B>, M] = f(a)
    let acc: M = M.empty
    let s: Either<A, B> = fst(result)
    while (s._tag === 'Left') {
      acc = M.concat(acc, snd(result))
      result = f(s.left)
      s = fst(result)
    }
    return [s.right, M.concat(acc, snd(result))]
  }

  const C = getChain(M)
  return {
    URI,
    _E: undefined as any,
    map: C.map,
    ap: C.ap,
    chain: C.chain,
    chainRec,
  }
}

/* istanbul ignore next */
const _compose: Semigroupoid2<URI>['compose'] = (bc, ab) => pipe(bc, compose(ab))
/* istanbul ignore next */
const _map: Functor2<URI>['map'] = (fa, f) => pipe(fa, mapFst(f))
/* istanbul ignore next */
const _bimap: Bifunctor2<URI>['bimap'] = (fa, f, g) => pipe(fa, bimap(f, g))
/* istanbul ignore next */
const _mapLeft: Bifunctor2<URI>['mapLeft'] = (fa, f) => pipe(fa, mapSnd(f))
/* istanbul ignore next */
const _extend: Extend2<URI>['extend'] = (wa, f) => pipe(wa, extend(f))
/* istanbul ignore next */
const _reduce: Foldable2<URI>['reduce'] = (fa, b, f) => pipe(fa, reduce(b, f))
/* istanbul ignore next */
const _foldMap: Foldable2<URI>['foldMap'] = M => {
  const foldMapM = foldMap(M)
  return (fa, f) => pipe(fa, foldMapM(f))
}
/* istanbul ignore next */
const _reduceRight: Foldable2<URI>['reduceRight'] = (fa, b, f) => pipe(fa, reduceRight(b, f))
/* istanbul ignore next */
function _traverse<F>(F: Applicative<F>): <A, S, B>(ta: [A, S], f: (a: A) => HKT<F, B>) => HKT<F, [B, S]> {
  const traverseF = traverse(F)
  return (ta, f) => pipe(ta, traverseF(f))
}

/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const bimap: <E, G, A, B>(mapSnd: (e: E) => G, mapFst: (a: A) => B) => (fa: [A, E]) => [B, G] = (f, g) => fa => [
  g(fst(fa)),
  f(snd(fa)),
]

/**
 * Map a function over the first component of a `Tuple`.
 *
 * This is the `map` operation of the `Functor` instance.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const mapFst: <A, B>(f: (a: A) => B) => <E>(fa: [A, E]) => [B, E] = f => fa => [f(fst(fa)), snd(fa)]

/**
 * Map a function over the second component of a `Tuple`.
 *
 * This is the `mapLeft` operation of the `Bifunctor` instance.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @public
 */
export const mapSnd: <E, G>(f: (e: E) => G) => <A>(fa: [A, E]) => [A, G] = f => fa => [fst(fa), f(snd(fa))]

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const compose: <A, B>(ab: [B, A]) => <C>(bc: [C, B]) => [C, A] = ab => bc => [fst(bc), snd(ab)]

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const extend: <E, A, B>(f: (wa: [A, E]) => B) => (wa: [A, E]) => [B, E] = f => wa => [f(wa), snd(wa)]

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const duplicate: <E, A>(wa: [A, E]) => [[A, E], E] = /*#__PURE__*/ extend(identity)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Extract
 * @public
 */
export const extract: <E, A>(wa: [A, E]) => A = RT.extract

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: [A, E]) => M = RT.foldMap

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: [A, E]) => B = RT.reduce

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: [A, E]) => B = RT.reduceRight

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const traverse: PipeableTraverse2<URI> = <F>(
  F: Applicative<F>,
): (<A, B>(f: (a: A) => HKT<F, B>) => <E>(as: [A, E]) => HKT<F, [B, E]>) => {
  return f => ta => F.map(f(fst(ta)), b => [b, snd(ta)])
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const sequence: Traversable2<URI>['sequence'] =
  <F>(F: Applicative<F>) =>
  <A, E>(fas: [HKT<F, A>, E]): HKT<F, [A, E]> => {
    return F.map(fst(fas), a => [a, snd(fas)])
  }

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'Tuple'

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
    readonly [URI]: [A, E]
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
export const Bifunctor: Bifunctor2<URI> = {
  URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Semigroupoid: Semigroupoid2<URI> = {
  URI,
  compose: _compose,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Comonad: Comonad2<URI> = {
  URI,
  map: _map,
  extend: _extend,
  extract,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Foldable: Foldable2<URI> = {
  URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Traversable: Traversable2<URI> = {
  URI,
  map: _map,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
}

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`mapFst`](#mapfst) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => <E>(fa: [A, E]) => [B, E] = mapFst

/**
 * Use [`mapSnd`](#mapsnd) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: [A, E]) => [A, G] = mapSnd

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `T.Functor` instead of `T.tuple` (where `T` is from `import T from 'fp-ts/Tuple'`)
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const tuple: Semigroupoid2<URI> & Bifunctor2<URI> & Comonad2<URI> & Foldable2<URI> & Traversable2<URI> = {
  URI,
  compose: _compose,
  map: _map,
  bimap: _bimap,
  mapLeft: _mapLeft,
  extract,
  extend: _extend,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
  traverse: _traverse,
  sequence,
}
