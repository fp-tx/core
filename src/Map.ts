/**
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import { type Applicative } from './Applicative'
import { type Compactable2 } from './Compactable'
import { type Either } from './Either'
import { type Eq } from './Eq'
import { type Filterable2 } from './Filterable'
import { type FilterableWithIndex2C } from './FilterableWithIndex'
import { type Foldable, type Foldable1, type Foldable2, type Foldable2C, type Foldable3 } from './Foldable'
import { type FoldableWithIndex2C } from './FoldableWithIndex'
import { pipe } from './function'
import { flap as flap_, type Functor2 } from './Functor'
import { type HKT, type Kind, type Kind2, type Kind3, type URIS, type URIS2, type URIS3 } from './HKT'
import * as _ from './internal'
import { type Magma } from './Magma'
import { type Monoid } from './Monoid'
import * as O from './Option'
import { type Option } from './Option'
import { type Ord } from './Ord'
import { type Predicate } from './Predicate'
import * as RM from './ReadonlyMap'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import { type Separated, separated } from './Separated'
import { type Show } from './Show'
import { type TraversableWithIndex2C } from './TraversableWithIndex'
import { type Unfoldable, type Unfoldable1 } from './Unfoldable'
import { wiltDefault, type Witherable2C, witherDefault } from './Witherable'

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getShow: <K, A>(SK: Show<K>, SA: Show<A>) => Show<Map<K, A>> = RM.getShow

/**
 * Calculate the number of key/value pairs in a map
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const size: <K, A>(m: Map<K, A>) => number = RM.size

/**
 * Test whether or not a map is empty
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const isEmpty: <K, A>(m: Map<K, A>) => boolean = RM.isEmpty

// TODO: remove non-curried overloading in v3
/**
 * Test whether or not a key exists in a map
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const member: <K>(E: Eq<K>) => {
  (k: K): <A>(m: Map<K, A>) => boolean
  <A>(k: K, m: Map<K, A>): boolean
} = RM.member

// TODO: remove non-curried overloading in v3
/**
 * Test whether or not a value is a member of a map
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const elem: <A>(E: Eq<A>) => {
  (a: A): <K>(m: Map<K, A>) => boolean
  <K>(a: A, m: Map<K, A>): boolean
} = RM.elem

/**
 * Get a sorted `Array` of the keys contained in a `Map`.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const keys =
  <K>(O: Ord<K>) =>
  <A>(m: Map<K, A>): Array<K> =>
    Array.from(m.keys()).sort(O.compare)

/**
 * Get a sorted `Array` of the values contained in a `Map`.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const values =
  <A>(O: Ord<A>) =>
  <K>(m: Map<K, A>): Array<A> =>
    Array.from(m.values()).sort(O.compare)

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function collect<K>(O: Ord<K>): <A, B>(f: (k: K, a: A) => B) => (m: Map<K, A>) => Array<B> {
  const keysO = keys(O)
  return <A, B>(f: (k: K, a: A) => B) =>
    (m: Map<K, A>): Array<B> => {
      const out: Array<B> = []
      const ks = keysO(m)
      for (const key of ks) {
        out.push(f(key, m.get(key)!))
      }
      return out
    }
}

/**
 * Get a sorted `Array` of the key/value pairs contained in a `Map`.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function toArray<K>(O: Ord<K>): <A>(m: Map<K, A>) => Array<[K, A]> {
  return collect(O)((k, a) => [k, a])
}

/**
 * Unfolds a map into a list of key/value pairs
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function toUnfoldable<K, F extends URIS>(ord: Ord<K>, U: Unfoldable1<F>): <A>(d: Map<K, A>) => Kind<F, [K, A]>
export function toUnfoldable<K, F>(ord: Ord<K>, U: Unfoldable<F>): <A>(d: Map<K, A>) => HKT<F, [K, A]>
export function toUnfoldable<K, F>(ord: Ord<K>, U: Unfoldable<F>): <A>(d: Map<K, A>) => HKT<F, [K, A]> {
  const toArrayO = toArray(ord)
  return d => {
    const kas = toArrayO(d)
    const len = kas.length
    return U.unfold(0, b => (b < len ? _.some([kas[b], b + 1]) : _.none))
  }
}

/**
 * Insert or replace a key/value pair in a `Map`.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const upsertAt = <K>(E: Eq<K>): (<A>(k: K, a: A) => (m: Map<K, A>) => Map<K, A>) => {
  const lookupWithKeyE = lookupWithKey(E)
  return (k, a) => {
    const lookupWithKeyEk = lookupWithKeyE(k)
    return m => {
      const found = lookupWithKeyEk(m)
      if (_.isNone(found)) {
        const out = new Map(m)
        out.set(k, a)
        return out
      } else if (found.value[1] !== a) {
        const out = new Map(m)
        out.set(found.value[0], a)
        return out
      }
      return m
    }
  }
}

/**
 * Delete a key and value from a map
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const deleteAt = <K>(E: Eq<K>): ((k: K) => <A>(m: Map<K, A>) => Map<K, A>) => {
  const lookupWithKeyE = lookupWithKey(E)
  return k => m => {
    const found = lookupWithKeyE(k, m)
    if (_.isSome(found)) {
      const r = new Map(m)
      r.delete(found.value[0])
      return r
    }
    return m
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const updateAt = <K>(E: Eq<K>): (<A>(k: K, a: A) => (m: Map<K, A>) => Option<Map<K, A>>) => {
  const modifyAtE = modifyAt(E)
  return (k, a) => modifyAtE(k, () => a)
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const modifyAt = <K>(E: Eq<K>): (<A>(k: K, f: (a: A) => A) => (m: Map<K, A>) => Option<Map<K, A>>) => {
  const lookupWithKeyE = lookupWithKey(E)
  return (k, f) => m => {
    const found = lookupWithKeyE(k, m)
    if (_.isNone(found)) {
      return _.none
    }
    const r = new Map(m)
    r.set(found.value[0], f(found.value[1]))
    return _.some(r)
  }
}

/**
 * Delete a key and value from a map, returning the value as well as the subsequent map
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function pop<K>(E: Eq<K>): (k: K) => <A>(m: Map<K, A>) => Option<[A, Map<K, A>]> {
  const lookupE = lookup(E)
  const deleteAtE = deleteAt(E)
  return k => {
    const deleteAtEk = deleteAtE(k)
    return m =>
      pipe(
        lookupE(k, m),
        O.map(a => [a, deleteAtEk(m)]),
      )
  }
}

interface Next<A> {
  readonly done?: boolean
  readonly value: A
}

// TODO: remove non-curried overloading in v3
/**
 * Lookup the value for a key in a `Map`. If the result is a `Some`, the existing key is also returned.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function lookupWithKey<K>(E: Eq<K>): {
  (k: K): <A>(m: Map<K, A>) => Option<[K, A]>
  <A>(k: K, m: Map<K, A>): Option<[K, A]>
}
export function lookupWithKey<K>(
  E: Eq<K>,
): <A>(k: K, m?: Map<K, A>) => Option<[K, A]> | ((m: Map<K, A>) => Option<[K, A]>) {
  return <A>(k: K, m?: Map<K, A>) => {
    if (m === undefined) {
      const lookupWithKeyE = lookupWithKey(E)
      return m => lookupWithKeyE(k, m)
    }
    const entries = m.entries()
    let e: Next<[K, A]>
    while (!(e = entries.next()).done) {
      const [ka, a] = e.value
      if (E.equals(ka, k)) {
        return _.some([ka, a])
      }
    }
    return _.none
  }
}

// TODO: remove non-curried overloading in v3
/**
 * Lookup the value for a key in a `Map`.
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const lookup: <K>(E: Eq<K>) => {
  (k: K): <A>(m: Map<K, A>) => Option<A>
  <A>(k: K, m: Map<K, A>): Option<A>
} = RM.lookup

// TODO: remove non-curried overloading in v3
/**
 * Test whether or not one `Map` contains all of the keys and values contained in another `Map`
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const isSubmap: <K, A>(
  SK: Eq<K>,
  SA: Eq<A>,
) => {
  (that: Map<K, A>): (me: Map<K, A>) => boolean
  (me: Map<K, A>, that: Map<K, A>): boolean
} = RM.isSubmap

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getEq: <K, A>(SK: Eq<K>, SA: Eq<A>) => Eq<Map<K, A>> = RM.getEq

/**
 * Gets `Monoid` instance for Maps given `Semigroup` instance for their values
 *
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getMonoid<K, A>(SK: Eq<K>, SA: Semigroup<A>): Monoid<Map<K, A>> {
  const lookupWithKeyS = lookupWithKey(SK)
  return {
    concat: (mx, my) => {
      if (isEmpty(mx)) {
        return my
      }
      if (isEmpty(my)) {
        return mx
      }
      const r = new Map(mx)
      const entries = my.entries()
      let e: Next<[K, A]>
      while (!(e = entries.next()).done) {
        const [k, a] = e.value
        const mxOptA = lookupWithKeyS(k, mx)
        if (_.isSome(mxOptA)) {
          r.set(mxOptA.value[0], SA.concat(mxOptA.value[1], a))
        } else {
          r.set(k, a)
        }
      }
      return r
    },
    empty: new Map(),
  }
}

/**
 * Create a map with one key/value pair
 *
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const singleton = <K, A>(k: K, a: A): Map<K, A> => new Map([[k, a]])

/**
 * Create a map from a foldable collection of key/value pairs, using the specified `Magma` to combine values for
 * duplicate keys.
 *
 * @meta
 * {@since 0.1.0}
 * {@category Constructors}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function fromFoldable<F extends URIS3, K, A>(
  E: Eq<K>,
  M: Magma<A>,
  F: Foldable3<F>,
): <R, E>(fka: Kind3<F, R, E, [K, A]>) => Map<K, A>
export function fromFoldable<F extends URIS2, K, A>(
  E: Eq<K>,
  M: Magma<A>,
  F: Foldable2<F>,
): <E>(fka: Kind2<F, E, [K, A]>) => Map<K, A>
export function fromFoldable<F extends URIS, K, A>(
  E: Eq<K>,
  M: Magma<A>,
  F: Foldable1<F>,
): (fka: Kind<F, [K, A]>) => Map<K, A>
export function fromFoldable<F, K, A>(E: Eq<K>, M: Magma<A>, F: Foldable<F>): (fka: HKT<F, [K, A]>) => Map<K, A>
export function fromFoldable<F, K, A>(E: Eq<K>, M: Magma<A>, F: Foldable<F>): (fka: HKT<F, [K, A]>) => Map<K, A> {
  return (fka: HKT<F, [K, A]>) => {
    const lookupWithKeyE = lookupWithKey(E)
    return F.reduce<[K, A], Map<K, A>>(fka, new Map<K, A>(), (b, [k, a]) => {
      const bOpt = lookupWithKeyE(k, b)
      if (_.isSome(bOpt)) {
        b.set(bOpt.value[0], M.concat(bOpt.value[1], a))
      } else {
        b.set(k, a)
      }
      return b
    })
  }
}

const _mapWithIndex = <K, A, B>(fa: Map<K, A>, f: (k: K, a: A) => B): Map<K, B> => {
  const m = new Map<K, B>()
  const entries = fa.entries()
  let e: Next<[K, A]>
  while (!(e = entries.next()).done) {
    const [key, a] = e.value
    m.set(key, f(key, a))
  }
  return m
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const partitionMapWithIndex =
  <K, A, B, C>(f: (k: K, a: A) => Either<B, C>) =>
  (fa: Map<K, A>): Separated<Map<K, B>, Map<K, C>> => {
    const left = new Map<K, B>()
    const right = new Map<K, C>()
    const entries = fa.entries()
    let e: Next<[K, A]>
    while (!(e = entries.next()).done) {
      const [k, a] = e.value
      const ei = f(k, a)
      if (_.isLeft(ei)) {
        left.set(k, ei.left)
      } else {
        right.set(k, ei.right)
      }
    }
    return separated(left, right)
  }

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function partitionWithIndex<K, A, B extends A>(
  predicateWithIndex: (k: K, a: A) => a is B,
): (fa: Map<K, A>) => Separated<Map<K, A>, Map<K, B>>
export function partitionWithIndex<K, A>(
  predicateWithIndex: (k: K, a: A) => boolean,
): <B extends A>(fb: Map<K, B>) => Separated<Map<K, B>, Map<K, B>>
export function partitionWithIndex<K, A>(
  predicateWithIndex: (k: K, a: A) => boolean,
): (fa: Map<K, A>) => Separated<Map<K, A>, Map<K, A>>
export function partitionWithIndex<K, A>(
  predicateWithIndex: (k: K, a: A) => boolean,
): (fa: Map<K, A>) => Separated<Map<K, A>, Map<K, A>> {
  return (fa: Map<K, A>) => {
    const left = new Map<K, A>()
    const right = new Map<K, A>()
    const entries = fa.entries()
    let e: Next<[K, A]>
    while (!(e = entries.next()).done) {
      const [k, a] = e.value
      if (predicateWithIndex(k, a)) {
        right.set(k, a)
      } else {
        left.set(k, a)
      }
    }
    return separated(left, right)
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const filterMapWithIndex =
  <K, A, B>(f: (k: K, a: A) => Option<B>) =>
  (fa: Map<K, A>): Map<K, B> => {
    const m = new Map<K, B>()
    const entries = fa.entries()
    let e: Next<[K, A]>
    while (!(e = entries.next()).done) {
      const [k, a] = e.value
      const o = f(k, a)
      if (_.isSome(o)) {
        m.set(k, o.value)
      }
    }
    return m
  }

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function filterWithIndex<K, A, B extends A>(p: (k: K, a: A) => a is B): (m: Map<K, A>) => Map<K, B>
export function filterWithIndex<K, A>(p: (k: K, a: A) => boolean): <B extends A>(m: Map<K, B>) => Map<K, B>
export function filterWithIndex<K, A>(p: (k: K, a: A) => boolean): (m: Map<K, A>) => Map<K, A>
export function filterWithIndex<K, A>(p: (k: K, a: A) => boolean): (m: Map<K, A>) => Map<K, A> {
  return (m: Map<K, A>) => {
    const out = new Map<K, A>()
    const entries = m.entries()
    let e: Next<[K, A]>
    while (!(e = entries.next()).done) {
      const [k, a] = e.value
      if (p(k, a)) {
        out.set(k, a)
      }
    }
    return out
  }
}

const _map: Functor2<URI>['map'] = (fa, f) => _mapWithIndex(fa, (_, a) => f(a))
const _filter: Filterable2<URI>['filter'] = <K, A>(fa: Map<K, A>, p: Predicate<A>) =>
  _filterWithIndex(fa, (_, a) => p(a))
const _filterMap: Filterable2<URI>['filterMap'] = (fa, f) => _filterMapWithIndex(fa, (_, a) => f(a))
const _partition: Filterable2<URI>['partition'] = <K, A>(fa: Map<K, A>, predicate: Predicate<A>) =>
  _partitionWithIndex(fa, (_, a) => predicate(a))
const _partitionMap: Filterable2<URI>['partitionMap'] = (fa, f) => _partitionMapWithIndex(fa, (_, a) => f(a))
const _filterWithIndex = <K, A>(fa: Map<K, A>, p: (k: K, a: A) => boolean) => pipe(fa, filterWithIndex(p))
const _filterMapWithIndex = <K, A, B>(fa: Map<K, A>, f: (k: K, a: A) => Option<B>) => pipe(fa, filterMapWithIndex(f))
const _partitionWithIndex = <K, A>(fa: Map<K, A>, p: (k: K, a: A) => boolean) => pipe(fa, partitionWithIndex(p))
const _partitionMapWithIndex = <K, A, B, C>(fa: Map<K, A>, f: (k: K, a: A) => Either<B, C>) =>
  pipe(fa, partitionMapWithIndex(f))

/**
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const compact = <K, A>(fa: Map<K, Option<A>>): Map<K, A> => {
  const m = new Map<K, A>()
  const entries = fa.entries()
  let e: Next<[K, Option<A>]>
  while (!(e = entries.next()).done) {
    const [k, oa] = e.value
    if (_.isSome(oa)) {
      m.set(k, oa.value)
    }
  }
  return m
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): <K>(fa: Map<K, A>) => Map<K, B>
  <A>(predicate: Predicate<A>): <K, B extends A>(fb: Map<K, B>) => Map<K, B>
  <A>(predicate: Predicate<A>): <K>(fa: Map<K, A>) => Map<K, A>
} =
  <A>(predicate: Predicate<A>) =>
  <K>(fa: Map<K, A>) =>
    _filter(fa, predicate)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const filterMap: <A, B>(f: (a: A) => Option<B>) => <K>(fa: Map<K, A>) => Map<K, B> = f => fa => _filterMap(fa, f)

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
export const map: <A, B>(f: (a: A) => B) => <K>(fa: Map<K, A>) => Map<K, B> = f => fa => _map(fa, f)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Mapping}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const mapWithIndex: <K, A, B>(f: (k: K, a: A) => B) => (fa: Map<K, A>) => Map<K, B> = f => fa =>
  _mapWithIndex(fa, f)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const partition: {
  <A, B extends A>(refinement: Refinement<A, B>): <K>(fa: Map<K, A>) => Separated<Map<K, A>, Map<K, B>>
  <A>(predicate: Predicate<A>): <K, B extends A>(fb: Map<K, B>) => Separated<Map<K, B>, Map<K, B>>
  <A>(predicate: Predicate<A>): <K>(fa: Map<K, A>) => Separated<Map<K, A>, Map<K, A>>
} =
  <A>(predicate: Predicate<A>) =>
  <K>(fa: Map<K, A>) =>
    _partition(fa, predicate)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const partitionMap: <A, B, C>(
  f: (a: A) => Either<B, C>,
) => <K>(fa: Map<K, A>) => Separated<Map<K, B>, Map<K, C>> = f => fa => _partitionMap(fa, f)

/**
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const separate = <K, A, B>(fa: Map<K, Either<A, B>>): Separated<Map<K, A>, Map<K, B>> => {
  const left = new Map<K, A>()
  const right = new Map<K, B>()
  const entries = fa.entries()
  let e: Next<[K, Either<A, B>]>
  while (!(e = entries.next()).done) {
    const [k, ei] = e.value
    if (_.isLeft(ei)) {
      left.set(k, ei.left)
    } else {
      right.set(k, ei.right)
    }
  }
  return separated(left, right)
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Type lambdas}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const URI = 'Map'

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
    readonly [URI]: Map<E, A>
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getUnionSemigroup = <K, A>(E: Eq<K>, S: Semigroup<A>): Semigroup<Map<K, A>> => {
  const unionES = union(E, S)
  return {
    concat: (first, second) => unionES(second)(first),
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getUnionMonoid = <K, A>(E: Eq<K>, S: Semigroup<A>): Monoid<Map<K, A>> => ({
  concat: getUnionSemigroup(E, S).concat,
  empty: new Map(),
})

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getIntersectionSemigroup = <K, A>(E: Eq<K>, S: Semigroup<A>): Semigroup<Map<K, A>> => {
  const intersectionES = intersection(E, S)
  return {
    concat: (first, second) => intersectionES(second)(first),
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getDifferenceMagma =
  <K>(E: Eq<K>) =>
  <A>(): Magma<Map<K, A>> => {
    const differenceE = difference(E)
    return {
      concat: (first, second) => differenceE(second)(first),
    }
  }

/**
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getFilterableWithIndex<K = never>(): FilterableWithIndex2C<URI, K, K> {
  return {
    URI,
    _E: undefined as any,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Filtering}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export function getWitherable<K>(O: Ord<K>): Witherable2C<URI, K> & TraversableWithIndex2C<URI, K, K> {
  const TWI = getTraversableWithIndex(O)
  return {
    URI,
    _E: undefined as any,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: TWI.reduce,
    foldMap: TWI.foldMap,
    reduceRight: TWI.reduceRight,
    traverse: TWI.traverse,
    sequence: TWI.sequence,
    mapWithIndex: _mapWithIndex,
    reduceWithIndex: TWI.reduceWithIndex,
    foldMapWithIndex: TWI.foldMapWithIndex,
    reduceRightWithIndex: TWI.reduceRightWithIndex,
    traverseWithIndex: TWI.traverseWithIndex,
    wilt: wiltDefault(TWI, Compactable),
    wither: witherDefault(TWI, Compactable),
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reduce: <K>(O: Ord<K>) => <B, A>(b: B, f: (b: B, a: A) => B) => (m: Map<K, A>) => B = RM.reduce

/**
 * @meta
 * {@since 0.1.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const foldMap: <K>(O: Ord<K>) => <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (m: Map<K, A>) => M = RM.foldMap

/**
 * @meta
 * {@since 0.1.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reduceRight: <K>(O: Ord<K>) => <B, A>(b: B, f: (a: A, b: B) => B) => (m: Map<K, A>) => B = RM.reduceRight

/**
 * @meta
 * {@since 0.1.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getFoldable = <K>(O: Ord<K>): Foldable2C<URI, K> => {
  return {
    ...RM.getFoldable(O),
    URI,
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reduceWithIndex: <K>(O: Ord<K>) => <B, A>(b: B, f: (k: K, b: B, a: A) => B) => (m: Map<K, A>) => B =
  RM.reduceWithIndex

/**
 * @meta
 * {@since 0.1.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const foldMapWithIndex: <K>(O: Ord<K>) => <M>(M: Monoid<M>) => <A>(f: (k: K, a: A) => M) => (m: Map<K, A>) => M =
  RM.foldMapWithIndex

/**
 * @meta
 * {@since 0.1.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const reduceRightWithIndex: <K>(O: Ord<K>) => <B, A>(b: B, f: (k: K, a: A, b: B) => B) => (m: Map<K, A>) => B =
  RM.reduceRightWithIndex

/**
 * @meta
 * {@since 0.1.0}
 * {@category Folding}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getFoldableWithIndex = <K>(O: Ord<K>): FoldableWithIndex2C<URI, K, K> => {
  return {
    ...RM.getFoldableWithIndex(O),
    URI,
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Traversing}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getTraversableWithIndex = <K>(O: Ord<K>): TraversableWithIndex2C<URI, K, K> => {
  const FWI = getFoldableWithIndex(O)
  const keysO = keys(O)
  const traverseWithIndex = <F>(
    F: Applicative<F>,
  ): (<A, B>(ta: Map<K, A>, f: (k: K, a: A) => HKT<F, B>) => HKT<F, Map<K, B>>) => {
    return <A, B>(ta: Map<K, A>, f: (k: K, a: A) => HKT<F, B>) => {
      let fm: HKT<F, Map<K, B>> = F.of(new Map())
      const ks = keysO(ta)
      const len = ks.length
      for (let i = 0; i < len; i++) {
        const key = ks[i]
        const a = ta.get(key)!
        fm = F.ap(
          F.map(fm, m => (b: B) => m.set(key, b)),
          f(key, a),
        )
      }
      return fm
    }
  }
  const traverse = <F>(F: Applicative<F>): (<A, B>(ta: Map<K, A>, f: (a: A) => HKT<F, B>) => HKT<F, Map<K, B>>) => {
    const traverseWithIndexF = traverseWithIndex(F)
    return (ta, f) => traverseWithIndexF(ta, (_, a) => f(a))
  }

  const sequence = <F>(F: Applicative<F>): (<A>(ta: Map<K, HKT<F, A>>) => HKT<F, Map<K, A>>) => {
    const traverseWithIndexF = traverseWithIndex(F)
    return ta => traverseWithIndexF(ta, (_, a) => a)
  }
  return {
    URI,
    _E: undefined as any,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: FWI.reduce,
    foldMap: FWI.foldMap,
    reduceRight: FWI.reduceRight,
    reduceWithIndex: FWI.reduceWithIndex,
    foldMapWithIndex: FWI.foldMapWithIndex,
    reduceRightWithIndex: FWI.reduceRightWithIndex,
    traverse,
    sequence,
    traverseWithIndex,
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
export const Compactable: Compactable2<URI> = {
  URI,
  compact,
  separate,
}

/**
 * @meta
 * {@since 0.1.0}
 * {@category Instances}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const Filterable: Filterable2<URI> = {
  URI,
  map: _map,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

const copy = <K, A>(m: Map<K, A>): Map<K, A> => new Map(m)

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const union = <K, A>(E: Eq<K>, M: Magma<A>): ((second: Map<K, A>) => (first: Map<K, A>) => Map<K, A>) => {
  const unionEM = RM.union(E, M)
  return second => first => {
    if (isEmpty(first)) {
      return copy(second)
    }
    if (isEmpty(second)) {
      return copy(first)
    }
    return unionEM(second)(first) as any
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const intersection = <K, A>(E: Eq<K>, M: Magma<A>): ((second: Map<K, A>) => (first: Map<K, A>) => Map<K, A>) => {
  const intersectionEM = RM.intersection(E, M)
  return second => first => {
    if (isEmpty(first) || isEmpty(second)) {
      return new Map()
    }
    return intersectionEM(second)(first) as any
  }
}

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const difference = <K>(E: Eq<K>): (<A>(_second: Map<K, A>) => (first: Map<K, A>) => Map<K, A>) => {
  const differenceE = RM.difference(E)
  return <A>(second: Map<K, A>) =>
    (first: Map<K, A>) => {
      if (isEmpty(first)) {
        return copy(second)
      }
      if (isEmpty(second)) {
        return copy(first)
      }
      return differenceE(second)(first) as any
    }
}

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use a `new Map()` instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const empty = new Map<never, never>()

/**
 * Use [`upsertAt`](#upsertat) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const insertAt: <K>(E: Eq<K>) => <A>(k: K, a: A) => (m: Map<K, A>) => Map<K, A> = upsertAt

/**
 * Use [`Filterable`](#filterable) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const map_: Filterable2<URI> = Filterable
