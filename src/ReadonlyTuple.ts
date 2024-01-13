/** @since 1.0.0 */
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
import { type Semigroup } from './Semigroup'
import { type Semigroupoid2 } from './Semigroupoid'
import { type PipeableTraverse2, type Traversable2 } from './Traversable'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/** @since 1.0.0 */
export function fst<A, E>(ea: readonly [A, E]): A {
  return ea[0]
}

/** @since 1.0.0 */
export function snd<A, E>(ea: readonly [A, E]): E {
  return ea[1]
}

/** @since 1.0.0 */
export const swap = <A, E>(ea: readonly [A, E]): readonly [E, A] => [snd(ea), fst(ea)]

/**
 * @since 1.0.0
 * @category Instances
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
  <A>(a: A): readonly [A, M] => {
    return [a, M.empty]
  }

/**
 * @since 1.0.0
 * @category Instances
 */
export function getApplicative<M>(M: Monoid<M>): Applicative2C<URI, M> {
  const A = getApply(M)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: A.ap,
    of: of(M),
  }
}

/**
 * @since 1.0.0
 * @category Instances
 */
export function getChain<S>(S: Semigroup<S>): Chain2C<URI, S> {
  const A = getApply(S)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: A.ap,
    chain: (ma, f) => {
      const [b, s] = f(fst(ma))
      return [b, S.concat(snd(ma), s)]
    },
  }
}

/**
 * @since 1.0.0
 * @category Instances
 */
export function getMonad<M>(M: Monoid<M>): Monad2C<URI, M> {
  const C = getChain(M)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    ap: C.ap,
    chain: C.chain,
    of: of(M),
  }
}

/**
 * @since 1.0.0
 * @category Instances
 */
export function getChainRec<M>(M: Monoid<M>): ChainRec2C<URI, M> {
  const chainRec = <A, B>(a: A, f: (a: A) => readonly [Either<A, B>, M]): readonly [B, M] => {
    let result: readonly [Either<A, B>, M] = f(a)
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
    map: _map,
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
const _traverse = <F>(
  F: Applicative<F>,
): (<A, S, B>(ta: readonly [A, S], f: (a: A) => HKT<F, B>) => HKT<F, readonly [B, S]>) => {
  const traverseF = traverse(F)
  return (ta, f) => pipe(ta, traverseF(f))
}

/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @since 1.0.0
 * @category Mapping
 */
export const bimap: <E, G, A, B>(
  mapSnd: (e: E) => G,
  mapFst: (a: A) => B,
) => (fa: readonly [A, E]) => readonly [B, G] = (f, g) => fa => [g(fst(fa)), f(snd(fa))]

/**
 * Map a function over the first component of a `ReadonlyTuple`.
 *
 * This is the `map` operation of the `Functor` instance.
 *
 * @since 1.0.0
 * @category Mapping
 */
export const mapFst: <A, B>(f: (a: A) => B) => <E>(fa: readonly [A, E]) => readonly [B, E] = f => fa => [
  f(fst(fa)),
  snd(fa),
]

/**
 * Map a function over the second component of a `ReadonlyTuple`.
 *
 * This is the `mapLeft` operation of the `Bifunctor` instance.
 *
 * @since 1.0.0
 * @category Mapping
 */
export const mapSnd: <E, G>(f: (e: E) => G) => <A>(fa: readonly [A, E]) => readonly [A, G] = f => fa => [
  fst(fa),
  f(snd(fa)),
]

/** @since 1.0.0 */
export const compose: <A, B>(ab: readonly [B, A]) => <C>(bc: readonly [C, B]) => readonly [C, A] = ab => bc => [
  fst(bc),
  snd(ab),
]

/** @since 1.0.0 */
export const extend: <E, A, B>(f: (wa: readonly [A, E]) => B) => (wa: readonly [A, E]) => readonly [B, E] = f => wa => [
  f(wa),
  snd(wa),
]

/**
 * @since 1.0.0
 * @category Extract
 */
export const extract: <E, A>(wa: readonly [A, E]) => A = fst

/** @since 1.0.0 */
export const duplicate: <E, A>(wa: readonly [A, E]) => readonly [readonly [A, E], E] = /*#__PURE__*/ extend(identity)

/**
 * @since 1.0.0
 * @category Folding
 */
export const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => <E>(fa: readonly [A, E]) => B = (b, f) => fa => f(b, fst(fa))

/**
 * @since 1.0.0
 * @category Folding
 */
export const foldMap: <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => <E>(fa: readonly [A, E]) => M = () => {
  return f => fa => f(fst(fa))
}

/**
 * @since 1.0.0
 * @category Folding
 */
export const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => <E>(fa: readonly [A, E]) => B = (b, f) => fa =>
  f(fst(fa), b)

/**
 * @since 1.0.0
 * @category Traversing
 */
export const traverse: PipeableTraverse2<URI> = <F>(
  F: Applicative<F>,
): (<A, B>(f: (a: A) => HKT<F, B>) => <E>(as: readonly [A, E]) => HKT<F, readonly [B, E]>) => {
  return f => ta => F.map(f(fst(ta)), b => [b, snd(ta)])
}

/**
 * @since 1.0.0
 * @category Traversing
 */
export const sequence: Traversable2<URI>['sequence'] =
  <F>(F: Applicative<F>) =>
  <A, E>(fas: readonly [HKT<F, A>, E]): HKT<F, readonly [A, E]> => {
    return F.map(fst(fas), a => [a, snd(fas)])
  }

/**
 * @since 1.0.0
 * @category Type lambdas
 */
export const URI = 'ReadonlyTuple'

/**
 * @since 1.0.0
 * @category Type lambdas
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: readonly [A, E]
  }
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const Functor: Functor2<URI> = {
  URI,
  map: _map,
}

/**
 * @since 1.0.0
 * @category Mapping
 */
export const flap = /*#__PURE__*/ flap_(Functor)

/**
 * Alias of [`mapFst`](#mapfst).
 *
 * @since 1.0.0
 * @category Mapping
 */
export const map: <A, B>(f: (a: A) => B) => <E>(fa: readonly [A, E]) => readonly [B, E] = mapFst

/**
 * Alias of [`mapSnd`](#mapsnd).
 *
 * @since 1.0.0
 * @category Error handling
 */
export const mapLeft: <E, G>(f: (e: E) => G) => <A>(fa: readonly [A, E]) => readonly [A, G] = mapSnd

/**
 * @since 1.0.0
 * @category Instances
 */
export const Bifunctor: Bifunctor2<URI> = {
  URI,
  bimap: _bimap,
  mapLeft: _mapLeft,
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const Semigroupoid: Semigroupoid2<URI> = {
  URI,
  compose: _compose,
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const Comonad: Comonad2<URI> = {
  URI,
  map: _map,
  extend: _extend,
  extract,
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const Foldable: Foldable2<URI> = {
  URI,
  reduce: _reduce,
  foldMap: _foldMap,
  reduceRight: _reduceRight,
}

/**
 * @since 1.0.0
 * @category Instances
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
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `RT.Functor` instead of `RT.readonlyTuple` (where `RT` is from `import RT from
 * 'fp-ts/ReadonlyTuple'`)
 *
 * @deprecated
 * @since 1.0.0
 * @category Zone of death
 */
export const readonlyTuple: Semigroupoid2<URI> & Bifunctor2<URI> & Comonad2<URI> & Foldable2<URI> & Traversable2<URI> =
  {
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
