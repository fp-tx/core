/**
 * @meta
 * {@since 1.0.0}
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
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const fst: <A, E>(ea: [A, E]) => A = RT.fst

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const snd: <A, E>(ea: [A, E]) => E = RT.snd

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const swap = <A, E>(ea: [A, E]): [E, A] => [snd(ea), fst(ea)]

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @meta
 * {@since 1.0.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const mapFst: <A, B>(f: (a: A) => B) => <E>(fa: [A, E]) => [B, E] = f => fa => [f(fst(fa)), snd(fa)]

/**
 * Map a function over the second component of a `Tuple`.
 *
 * This is the `mapLeft` operation of the `Bifunctor` instance.
 *
 * @meta
 * {@since 1.0.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const mapSnd: <E, G>(f: (e: E) => G) => <A>(fa: [A, E]) => [A, G] = f => fa => [fst(fa), f(snd(fa))]

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const compose: <A, B>(ab: [B, A]) => <C>(bc: [C, B]) => [C, A] = ab => bc => [fst(bc), snd(ab)]

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const extend: <E, A, B>(f: (wa: [A, E]) => B) => (wa: [A, E]) => [B, E] = f => wa => [f(wa), snd(wa)]

/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const duplicate: <E, A>(wa: [A, E]) => [[A, E], E] = /*#__PURE__*/ extend(identity)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Extract}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const extract: <E, A>(wa: [A, E]) => A = RT.extract

/**
 * @meta
 * {@since 1.0.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: [A, E]) => M = RT.foldMap

/**
 * @meta
 * {@since 1.0.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: [A, E]) => B = RT.reduce

/**
 * @meta
 * {@since 1.0.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: [A, E]) => B = RT.reduceRight

/**
 * @meta
 * {@since 1.0.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const traverse: PipeableTraverse2<URI> = <F>(
  F: Applicative<F>,
): (<A, B>(f: (a: A) => HKT<F, B>) => <E>(as: [A, E]) => HKT<F, [B, E]>) => {
  return f => ta => F.map(f(fst(ta)), b => [b, snd(ta)])
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const sequence: Traversable2<URI>['sequence'] =
  <F>(F: Applicative<F>) =>
  <A, E>(fas: [HKT<F, A>, E]): HKT<F, [A, E]> => {
    return F.map(fst(fas), a => [a, snd(fas)])
  }

/**
 * @meta
 * {@since 1.0.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const URI = 'Tuple'

/**
 * @meta
 * {@since 1.0.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: [A, E]
  }
}

/**
 * @meta
 * {@since 1.0.0}
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
 * {@since 1.0.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Bifunctor: Bifunctor2<URI> = {
  URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Semigroupoid: Semigroupoid2<URI> = {
  URI,
  compose: _compose,
}

/**
 * @meta
 * {@since 1.0.0}
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

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Foldable: Foldable2<URI> = {
  URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
}

/**
 * @meta
 * {@since 1.0.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const map: <A, B>(f: (a: A) => B) => <E>(fa: [A, E]) => [B, E] = mapFst

/**
 * Use [`mapSnd`](#mapsnd) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: [A, E]) => [A, G] = mapSnd

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `T.Functor` instead of `T.tuple` (where `T` is from `import T from 'fp-ts/Tuple'`)
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
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
