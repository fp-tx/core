/**
 * The `ReadonlyRecord.ts` module enables dealing in a functional way with Typescript's `Readonly<Record<K, T>>` type.
 * That is similar to the `Record.ts` module, but for a record with all properties declared as `readonly`.
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import {
  type Applicative,
  type Applicative1,
  type Applicative2,
  type Applicative2C,
  type Applicative3,
  type Applicative3C,
  type Applicative4,
} from './Applicative'
import { type Compactable1 } from './Compactable'
import { type Either } from './Either'
import { type Eq, fromEquals } from './Eq'
import { type Filterable1 } from './Filterable'
import { type FilterableWithIndex1, type PredicateWithIndex, type RefinementWithIndex } from './FilterableWithIndex'
import { type Foldable as FoldableHKT, type Foldable1, type Foldable2, type Foldable3 } from './Foldable'
import { type FoldableWithIndex1 } from './FoldableWithIndex'
import { flow, identity, pipe, SK } from './function'
import { flap as flap_, type Functor1 } from './Functor'
import { type FunctorWithIndex1 } from './FunctorWithIndex'
import {
  type HKT,
  type Kind,
  type Kind2,
  type Kind3,
  type Kind4,
  type URIS,
  type URIS2,
  type URIS3,
  type URIS4,
} from './HKT'
import * as _ from './internal'
import { type Magma } from './Magma'
import { type Monoid } from './Monoid'
import { type Option } from './Option'
import { type Ord } from './Ord'
import { type Predicate } from './Predicate'
import { type Refinement } from './Refinement'
import { type Semigroup } from './Semigroup'
import { type Separated, separated } from './Separated'
import { type Show } from './Show'
import * as S from './string'
import { type Traversable1 } from './Traversable'
import { type TraversableWithIndex1 } from './TraversableWithIndex'
import { type Unfoldable, type Unfoldable1 } from './Unfoldable'
import { type PipeableWilt1, type PipeableWither1, wiltDefault, type Witherable1, witherDefault } from './Witherable'

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
export type ReadonlyRecord<K extends string, T> = Readonly<Record<K, T>>

/**
 * Builds a `ReadonlyRecord` by copying a `Record`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @example
 *
 * ```typescript
 * import { ReadonlyRecord, fromRecord } from '@fp-tx/core/ReadonlyRecord'
 *
 * const x: Record<string, number> = { a: 1, b: 2 }
 * const y: ReadonlyRecord<string, number> = fromRecord(x)
 * assert.deepStrictEqual(x, y)
 * // `y.a = 5` gives compiler error
 * ```
 *
 * @public
 */
export const fromRecord = <K extends string, A>(r: Record<K, A>): ReadonlyRecord<K, A> => Object.assign({}, r)

/**
 * Builds a mutable `Record` from a `ReadonlyRecord`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @example
 *
 * ```typescript
 * import { ReadonlyRecord, toRecord } from '@fp-tx/core/ReadonlyRecord'
 *
 * const x: ReadonlyRecord<string, number> = { a: 1, b: 2 }
 * const y: Record<string, number> = toRecord(x)
 * assert.deepStrictEqual(x, y)
 * y.a = 5 // it's ok, y is mutable
 * ```
 *
 * @public
 */
export const toRecord = <K extends string, A>(r: ReadonlyRecord<K, A>): Record<K, A> => Object.assign({}, r)

/**
 * Calculate the number of key/value pairs in a `ReadonlyRecord`,
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { size } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(size({ a: true, b: 2, c: 'three' }), 3)
 * ```
 *
 * @public
 */
export const size = <A>(r: ReadonlyRecord<string, A>): number => Object.keys(r).length

/**
 * Test whether a `ReadonlyRecord` is empty.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { isEmpty } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(isEmpty({}), true)
 * assert.deepStrictEqual(isEmpty({ a: 3 }), false)
 * ```
 *
 * @public
 */
export const isEmpty = <A>(r: ReadonlyRecord<string, A>): boolean => {
  for (const k in r) {
    if (_.has.call(r, k)) {
      return false
    }
  }
  return true
}

const keys_ =
  (O: Ord<string>) =>
  <K extends string>(r: ReadonlyRecord<K, unknown>): ReadonlyArray<K> =>
    (Object.keys(r) as any).sort(O.compare)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const keys: <K extends string>(r: ReadonlyRecord<K, unknown>) => ReadonlyArray<K> = /*#__PURE__*/ keys_(S.Ord)

/**
 * Map a `ReadonlyRecord` into an `ReadonlyArray`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { collect } from '@fp-tx/core/ReadonlyRecord'
 * import { Ord } from '@fp-tx/core/string'
 *
 * const f = <A>(k: string, a: A) => `${k.toUpperCase()}-${a}`
 * const x = { c: 3, a: 'foo', b: false }
 * assert.deepStrictEqual(collect(Ord)(f)(x), ['A-foo', 'B-false', 'C-3'])
 * ```
 *
 * @public
 */
export function collect(
  O: Ord<string>,
): <K extends string, A, B>(f: (k: K, a: A) => B) => (r: ReadonlyRecord<K, A>) => ReadonlyArray<B>
/**
 * Use the overload constrained by `Ord` instead.
 *
 * @deprecated Use the overload constrained by `Ord` instead.
 */
export function collect<K extends string, A, B>(f: (k: K, a: A) => B): (r: ReadonlyRecord<K, A>) => ReadonlyArray<B>
export function collect<A, B>(
  O: Ord<string> | ((k: string, a: A) => B),
):
  | (<K extends string, A, B>(f: (k: K, a: A) => B) => (r: ReadonlyRecord<K, A>) => ReadonlyArray<B>)
  | ((r: ReadonlyRecord<string, A>) => ReadonlyArray<B>) {
  if (typeof O === 'function') {
    return collect(S.Ord)(O)
  }
  const keysO = keys_(O)
  return <K extends string, A, B>(f: (k: K, a: A) => B) =>
    (r: ReadonlyRecord<K, A>) => {
      const out: Array<B> = []
      for (const key of keysO(r)) {
        out.push(f(key, r[key]))
      }
      return out
    }
}

/**
 * Get a sorted `ReadonlyArray` of the key/value pairs contained in a `ReadonlyRecord`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @example
 *
 * ```typescript
 * import { toReadonlyArray } from '@fp-tx/core/ReadonlyRecord'
 *
 * const x = { c: 3, a: 'foo', b: false }
 * assert.deepStrictEqual(toReadonlyArray(x), [
 *   ['a', 'foo'],
 *   ['b', false],
 *   ['c', 3],
 * ])
 * ```
 *
 * @public
 */
export const toReadonlyArray: <K extends string, A>(r: ReadonlyRecord<K, A>) => ReadonlyArray<readonly [K, A]> =
  /*#__PURE__*/ collect(S.Ord)((k, a) => [k, a])

/**
 * Unfolds a `ReadonlyRecord` into a list of key/value pairs.
 *
 * Given an `Unfoldable` class type `U` such as `array` or `readonlyArray`, it uses the `unfold` function to create an
 * instance of `U`, providing an iterating function that iterates over each key/value pair in the record sorted
 * alphabetically by key.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @example
 *
 * ```typescript
 * import { array, readonlyArray } from 'fp-ts'
 * import { toUnfoldable } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(toUnfoldable(array)({ b: 2, a: 1 }), [
 *   ['a', 1],
 *   ['b', 2],
 * ])
 * assert.deepStrictEqual(toUnfoldable(readonlyArray)({ b: 2, a: 1 }), [
 *   ['a', 1],
 *   ['b', 2],
 * ])
 * ```
 *
 * @public
 */
export function toUnfoldable<F extends URIS>(
  U: Unfoldable1<F>,
): <K extends string, A>(r: ReadonlyRecord<K, A>) => Kind<F, readonly [K, A]>
export function toUnfoldable<F>(
  U: Unfoldable<F>,
): <K extends string, A>(r: ReadonlyRecord<K, A>) => HKT<F, readonly [K, A]>
export function toUnfoldable<F>(U: Unfoldable<F>): <A>(r: ReadonlyRecord<string, A>) => HKT<F, readonly [string, A]> {
  return r => {
    const sas = toReadonlyArray(r)
    const len = sas.length
    return U.unfold(0, b => (b < len ? _.some([sas[b], b + 1]) : _.none))
  }
}

/**
 * Insert or replace a key/value pair in a `ReadonlyRecord`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { upsertAt } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(upsertAt('a', 5)({ a: 1, b: 2 }), { a: 5, b: 2 })
 * assert.deepStrictEqual(upsertAt('c', 5)({ a: 1, b: 2 }), { a: 1, b: 2, c: 5 })
 * ```
 *
 * @public
 */
export const upsertAt =
  <A>(k: string, a: A) =>
  (r: ReadonlyRecord<string, A>): ReadonlyRecord<string, A> => {
    if (_.has.call(r, k) && r[k] === a) {
      return r
    }
    const out: Record<string, A> = Object.assign({}, r)
    out[k] = a
    return out
  }

/**
 * Test whether or not a key exists in a `ReadonlyRecord`.
 *
 * Note. This function is not pipeable because is a `Refinement`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { has } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(has('a', { a: 1, b: 2 }), true)
 * assert.deepStrictEqual(has('c', { a: 1, b: 2 }), false)
 * ```
 *
 * @public
 */
export const has = <K extends string>(k: string, r: ReadonlyRecord<K, unknown>): k is K => _.has.call(r, k)

/**
 * Delete a key and value from a `ReadonlyRecord`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { deleteAt } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(deleteAt('a')({ a: 1, b: 2 }), { b: 2 })
 * assert.deepStrictEqual(deleteAt('c')({ a: 1, b: 2 }), { a: 1, b: 2 })
 * ```
 *
 * @public
 */
export function deleteAt<K extends string>(
  k: K,
): <KS extends string, A>(r: ReadonlyRecord<KS, A>) => ReadonlyRecord<string extends K ? string : Exclude<KS, K>, A>
export function deleteAt(k: string): <A>(r: ReadonlyRecord<string, A>) => ReadonlyRecord<string, A> {
  return <A>(r: ReadonlyRecord<string, A>) => {
    if (!_.has.call(r, k)) {
      return r
    }
    const out: Record<string, A> = Object.assign({}, r)
    delete out[k]
    return out
  }
}

/**
 * Replace a key/value pair in a `ReadonlyRecord`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * otherwise it returns `None`
 *
 * ```
 *
 * @public
 */
export const updateAt =
  <A>(k: string, a: A) =>
  <K extends string>(r: ReadonlyRecord<K, A>): Option<ReadonlyRecord<K, A>> => {
    if (!has(k, r)) {
      return _.none
    }
    if (r[k] === a) {
      return _.some(r)
    }
    const out: Record<K, A> = Object.assign({}, r)
    out[k] = a
    return _.some(out)
  }

/**
 * Applies a mapping function to one specific key/value pair in a `ReadonlyRecord`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * otherwise it returns `None`
 *
 * ```
 *
 * @public
 */
export const modifyAt =
  <A>(k: string, f: (a: A) => A) =>
  <K extends string>(r: ReadonlyRecord<K, A>): Option<ReadonlyRecord<K, A>> => {
    if (!has(k, r)) {
      return _.none
    }
    const next = f(r[k])
    if (next === r[k]) {
      return _.some(r)
    }
    const out: Record<K, A> = Object.assign({}, r)
    out[k] = next
    return _.some(out)
  }

/**
 * Delete a key and value from a `ReadonlyRecord`, returning the value as well as the subsequent `ReadonlyRecord`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * otherwise it returns `None`
 *
 * ```
 *
 * @public
 */
export function pop<K extends string>(
  k: K,
): <KS extends string, A>(
  r: ReadonlyRecord<KS, A>,
) => Option<readonly [A, ReadonlyRecord<string extends K ? string : Exclude<KS, K>, A>]>
export function pop(k: string): <A>(r: ReadonlyRecord<string, A>) => Option<readonly [A, ReadonlyRecord<string, A>]> {
  const deleteAtk = deleteAt(k)
  return r => {
    const oa = lookup(k, r)
    return _.isNone(oa) ? _.none : _.some([oa.value, deleteAtk(r)])
  }
}

// TODO: remove non-curried overloading in v3
/**
 * Test whether one `ReadonlyRecord` contains all of the keys and values contained in another `ReadonlyRecord`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { isSubrecord } from '@fp-tx/core/ReadonlyRecord'
 * import { string } from 'fp-ts'
 *
 * assert.deepStrictEqual(
 *   isSubrecord(string.Eq)({ a: 'foo', b: 'bar', c: 'baz' })({ a: 'foo', b: 'bar', c: 'baz' }),
 *   true,
 * )
 * assert.deepStrictEqual(isSubrecord(string.Eq)({ a: 'foo', b: 'bar', c: 'baz' })({ a: 'foo', c: 'baz' }), true)
 * assert.deepStrictEqual(
 *   isSubrecord(string.Eq)({ a: 'foo', b: 'bar', c: 'baz' })({ a: 'foo', b: 'not-bar', c: 'baz' }),
 *   false,
 * )
 * assert.deepStrictEqual(isSubrecord(string.Eq)({ a: 'foo', b: 'bar' })({ a: 'foo', b: 'bar', c: 'baz' }), false)
 * ```
 *
 * @public
 */
export function isSubrecord<A>(E: Eq<A>): {
  (that: ReadonlyRecord<string, A>): (me: ReadonlyRecord<string, A>) => boolean
  (me: ReadonlyRecord<string, A>, that: ReadonlyRecord<string, A>): boolean
}
export function isSubrecord<A>(
  E: Eq<A>,
): (
  me: ReadonlyRecord<string, A>,
  that?: ReadonlyRecord<string, A>,
) => boolean | ((me: ReadonlyRecord<string, A>) => boolean) {
  return (me, that?) => {
    if (that === undefined) {
      const isSubrecordE = isSubrecord(E)
      return that => isSubrecordE(that, me)
    }
    for (const k in me) {
      if (!_.has.call(that, k) || !E.equals(me[k], that[k])) {
        return false
      }
    }
    return true
  }
}

// TODO: remove non-curried overloading in v3
/**
 * Lookup the value for a key in a `ReadonlyRecord`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * @public
 */
export function lookup(k: string): <A>(r: ReadonlyRecord<string, A>) => Option<A>
export function lookup<A>(k: string, r: ReadonlyRecord<string, A>): Option<A>
export function lookup<A>(
  k: string,
  r?: ReadonlyRecord<string, A>,
): Option<A> | ((r: ReadonlyRecord<string, A>) => Option<A>) {
  if (r === undefined) {
    return r => lookup(k, r)
  }
  return _.has.call(r, k) ? _.some(r[k]) : _.none
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const empty: ReadonlyRecord<string, never> = {}

/**
 * Map a `ReadonlyRecord` passing the keys to the iterating function.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { mapWithIndex } from '@fp-tx/core/ReadonlyRecord'
 *
 * const f = (k: string, n: number) => `${k.toUpperCase()}-${n}`
 * assert.deepStrictEqual(mapWithIndex(f)({ a: 3, b: 5 }), { a: 'A-3', b: 'B-5' })
 * ```
 *
 * @public
 */
export function mapWithIndex<K extends string, A, B>(
  f: (k: K, a: A) => B,
): (fa: ReadonlyRecord<K, A>) => ReadonlyRecord<K, B>
export function mapWithIndex<A, B>(
  f: (k: string, a: A) => B,
): (fa: ReadonlyRecord<string, A>) => ReadonlyRecord<string, B> {
  return r => {
    const out: Record<string, B> = {}
    for (const k in r) {
      if (_.has.call(r, k)) {
        out[k] = f(k, r[k])
      }
    }
    return out
  }
}

/**
 * Map a `ReadonlyRecord` passing the values to the iterating function.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { map } from '@fp-tx/core/ReadonlyRecord'
 *
 * const f = (n: number) => `-${n}-`
 * assert.deepStrictEqual(map(f)({ a: 3, b: 5 }), { a: '-3-', b: '-5-' })
 * ```
 *
 * @public
 */
export function map<A, B>(f: (a: A) => B): <K extends string>(fa: ReadonlyRecord<K, A>) => ReadonlyRecord<K, B>
export function map<A, B>(f: (a: A) => B): (fa: ReadonlyRecord<string, A>) => ReadonlyRecord<string, B> {
  return mapWithIndex((_, a) => f(a))
}

/**
 * Reduces a `ReadonlyRecord` passing each key/value pair to the iterating function. Entries are processed in the order,
 * sorted by key according to the given `Ord`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { reduceWithIndex } from '@fp-tx/core/ReadonlyRecord'
 * import { Ord } from '@fp-tx/core/string'
 *
 * const x = { c: 3, a: 'foo', b: false }
 * assert.deepStrictEqual(reduceWithIndex(Ord)([] as string[], (k, b, a) => [...b, `${k}-${a}`])(x), [
 *   'a-foo',
 *   'b-false',
 *   'c-3',
 * ])
 * ```
 *
 * @public
 */
export function reduceWithIndex(
  O: Ord<string>,
): <K extends string, A, B>(b: B, f: (k: K, b: B, a: A) => B) => (fa: ReadonlyRecord<K, A>) => B
/**
 * Use the overload constrained by `Ord` instead.
 *
 * @deprecated Use the overload constrained by `Ord` instead.
 */
export function reduceWithIndex<K extends string, A, B>(
  b: B,
  f: (k: K, b: B, a: A) => B,
): (fa: ReadonlyRecord<K, A>) => B
export function reduceWithIndex<A, B>(
  ...args: [Ord<string>] | [B, (k: string, b: B, a: A) => B]
):
  | ((b: B, f: (k: string, b: B, a: A) => B) => (fa: ReadonlyRecord<string, A>) => B)
  | ((fa: ReadonlyRecord<string, A>) => B) {
  if (args.length === 2) {
    return reduceWithIndex(S.Ord)(...args)
  }
  const keysO = keys_(args[0])
  return (b, f) => fa => {
    let out: B = b
    const ks = keysO(fa)
    const len = ks.length
    for (let i = 0; i < len; i++) {
      const k = ks[i]
      out = f(k, out, fa[k])
    }
    return out
  }
}

/**
 * Map and fold a `ReadonlyRecord`. Map the `ReadonlyRecord` passing each key/value pair to the iterating function. Then
 * fold the results using the provided `Monoid`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { foldMapWithIndex } from '@fp-tx/core/ReadonlyRecord'
 * import { Ord } from '@fp-tx/core/string'
 * import { Monoid } from '@fp-tx/core/Monoid'
 *
 * const m: Monoid<string> = { empty: '', concat: (x: string, y: string) => (x ? `${x} -> ${y}` : `${y}`) }
 * const f = (k: string, a: number) => `${k}-${a}`
 * const x = { c: 3, a: 1, b: 2 }
 * assert.deepStrictEqual(foldMapWithIndex(Ord)(m)(f)(x), 'a-1 -> b-2 -> c-3')
 * ```
 *
 * @public
 */
export function foldMapWithIndex(
  O: Ord<string>,
): <M>(M: Monoid<M>) => <K extends string, A>(f: (k: K, a: A) => M) => (fa: ReadonlyRecord<K, A>) => M
/**
 * Use the overload constrained by `Ord` instead.
 *
 * @deprecated Use the overload constrained by `Ord` instead.
 */
export function foldMapWithIndex<M>(
  M: Monoid<M>,
): <K extends string, A>(f: (k: K, a: A) => M) => (fa: ReadonlyRecord<K, A>) => M
export function foldMapWithIndex<M>(
  O: Ord<string> | Monoid<M>,
):
  | ((M: Monoid<M>) => <A>(f: (k: string, a: A) => M) => (fa: ReadonlyRecord<string, A>) => M)
  | (<A>(f: (k: string, a: A) => M) => (fa: ReadonlyRecord<string, A>) => M) {
  if ('compare' in O) {
    const keysO = keys_(O)
    return (M: Monoid<M>) =>
      <A>(f: (k: string, a: A) => M) =>
      (fa: ReadonlyRecord<string, A>) => {
        let out: M = M.empty
        const ks = keysO(fa)
        const len = ks.length
        for (let i = 0; i < len; i++) {
          const k = ks[i]
          out = M.concat(out, f(k, fa[k]))
        }
        return out
      }
  }
  return foldMapWithIndex(S.Ord)(O)
}

/**
 * Same as `reduceWithIndex`, but reduce starting from the right (i.e. in reverse order, from the last to the first
 * entry according to the given `Ord`).
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { reduceRightWithIndex } from '@fp-tx/core/ReadonlyRecord'
 * import { Ord } from '@fp-tx/core/string'
 *
 * const x = { c: 3, a: 'foo', b: false }
 * assert.deepStrictEqual(reduceRightWithIndex(Ord)([] as string[], (k, a, b) => [...b, `${k}-${a}`])(x), [
 *   'c-3',
 *   'b-false',
 *   'a-foo',
 * ])
 * ```
 *
 * @public
 */
export function reduceRightWithIndex(
  O: Ord<string>,
): <K extends string, A, B>(b: B, f: (k: K, a: A, b: B) => B) => (fa: ReadonlyRecord<K, A>) => B
/**
 * Use the overload constrained by `Ord` instead.
 *
 * @deprecated Use the overload constrained by `Ord` instead.
 */
export function reduceRightWithIndex<K extends string, A, B>(
  b: B,
  f: (k: K, a: A, b: B) => B,
): (fa: ReadonlyRecord<K, A>) => B
export function reduceRightWithIndex<A, B>(
  ...args: [Ord<string>] | [B, (k: string, a: A, b: B) => B]
):
  | ((b: B, f: (k: string, a: A, b: B) => B) => (fa: ReadonlyRecord<string, A>) => B)
  | ((fa: ReadonlyRecord<string, A>) => B) {
  if (args.length === 2) {
    return reduceRightWithIndex(S.Ord)(...args)
  }
  const keysO = keys_(args[0])
  return (b, f) => fa => {
    let out: B = b
    const ks = keysO(fa)
    const len = ks.length
    for (let i = len - 1; i >= 0; i--) {
      const k = ks[i]
      out = f(k, fa[k], out)
    }
    return out
  }
}

/**
 * Create a `ReadonlyRecord` with one key/value pair.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @example
 *
 * ```typescript
 * import { singleton } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(singleton('a', 1), { a: 1 })
 * ```
 *
 * @public
 */
export const singleton = <A>(k: string, a: A): ReadonlyRecord<string, A> => ({ [k]: a })

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function traverseWithIndex<F extends URIS4>(
  F: Applicative4<F>,
): <K extends string, S, R, E, A, B>(
  f: (k: K, a: A) => Kind4<F, S, R, E, B>,
) => (ta: ReadonlyRecord<K, A>) => Kind4<F, S, R, E, ReadonlyRecord<K, B>>
export function traverseWithIndex<F extends URIS3>(
  F: Applicative3<F>,
): <K extends string, R, E, A, B>(
  f: (k: K, a: A) => Kind3<F, R, E, B>,
) => (ta: ReadonlyRecord<K, A>) => Kind3<F, R, E, ReadonlyRecord<K, B>>
export function traverseWithIndex<F extends URIS3, E>(
  F: Applicative3C<F, E>,
): <K extends string, R, A, B>(
  f: (k: K, a: A) => Kind3<F, R, E, B>,
) => (ta: ReadonlyRecord<K, A>) => Kind3<F, R, E, ReadonlyRecord<K, B>>
export function traverseWithIndex<F extends URIS2>(
  F: Applicative2<F>,
): <K extends string, E, A, B>(
  f: (k: K, a: A) => Kind2<F, E, B>,
) => (ta: ReadonlyRecord<K, A>) => Kind2<F, E, ReadonlyRecord<K, B>>
export function traverseWithIndex<F extends URIS2, E>(
  F: Applicative2C<F, E>,
): <K extends string, A, B>(
  f: (k: K, a: A) => Kind2<F, E, B>,
) => (ta: ReadonlyRecord<K, A>) => Kind2<F, E, ReadonlyRecord<K, B>>
export function traverseWithIndex<F extends URIS>(
  F: Applicative1<F>,
): <K extends string, A, B>(
  f: (k: K, a: A) => Kind<F, B>,
) => (ta: ReadonlyRecord<K, A>) => Kind<F, ReadonlyRecord<K, B>>
export function traverseWithIndex<F>(
  F: Applicative<F>,
): <K extends string, A, B>(f: (k: K, a: A) => HKT<F, B>) => (ta: ReadonlyRecord<K, A>) => HKT<F, ReadonlyRecord<K, B>>
export function traverseWithIndex<F>(
  F: Applicative<F>,
): <A, B>(f: (k: string, a: A) => HKT<F, B>) => (ta: ReadonlyRecord<string, A>) => HKT<F, ReadonlyRecord<string, B>> {
  const traverseWithIndexOF = _traverseWithIndex(S.Ord)(F)
  return f => ta => traverseWithIndexOF(ta, f)
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function traverse<F extends URIS4>(
  F: Applicative4<F>,
): <S, R, E, A, B>(
  f: (a: A) => Kind4<F, S, R, E, B>,
) => <K extends string>(ta: ReadonlyRecord<K, A>) => Kind4<F, S, R, E, ReadonlyRecord<K, B>>
export function traverse<F extends URIS3>(
  F: Applicative3<F>,
): <R, E, A, B>(
  f: (a: A) => Kind3<F, R, E, B>,
) => <K extends string>(ta: ReadonlyRecord<K, A>) => Kind3<F, R, E, ReadonlyRecord<K, B>>
export function traverse<F extends URIS3, E>(
  F: Applicative3C<F, E>,
): <R, A, B>(
  f: (a: A) => Kind3<F, R, E, B>,
) => <K extends string>(ta: ReadonlyRecord<K, A>) => Kind3<F, R, E, ReadonlyRecord<K, B>>
export function traverse<F extends URIS2>(
  F: Applicative2<F>,
): <E, A, B>(
  f: (a: A) => Kind2<F, E, B>,
) => <K extends string>(ta: ReadonlyRecord<K, A>) => Kind2<F, E, ReadonlyRecord<K, B>>
export function traverse<F extends URIS2, E>(
  F: Applicative2C<F, E>,
): <A, B>(
  f: (a: A) => Kind2<F, E, B>,
) => <K extends string>(ta: ReadonlyRecord<K, A>) => Kind2<F, E, ReadonlyRecord<K, B>>
export function traverse<F extends URIS>(
  F: Applicative1<F>,
): <A, B>(f: (a: A) => Kind<F, B>) => <K extends string>(ta: ReadonlyRecord<K, A>) => Kind<F, ReadonlyRecord<K, B>>
export function traverse<F>(
  F: Applicative<F>,
): <A, B>(f: (a: A) => HKT<F, B>) => <K extends string>(ta: ReadonlyRecord<K, A>) => HKT<F, ReadonlyRecord<K, B>>
export function traverse<F>(
  F: Applicative<F>,
): <A, B>(f: (a: A) => HKT<F, B>) => (ta: ReadonlyRecord<string, A>) => HKT<F, ReadonlyRecord<string, B>> {
  const traverseOF = _traverse(S.Ord)(F)
  return f => ta => traverseOF(ta, f)
}

/**
 * `ReadonlyRecord` sequencing, i.e., take a `ReadonlyRecord` in which elements are monads and return a monad of a
 * `ReadonlyRecord` of the base types.
 *
 * The following example for instance shows sequencing a `ReadonlyRecord<string, Option<number>>` into an
 * `Option<ReadonlyRecord<string, number>>`.
 *
 * `sequence` in `ReadonlyRecord` is equivalent to `sequenceS` in `Apply.ts`.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { sequence } from '@fp-tx/core/ReadonlyRecord'
 * import { option } from 'fp-ts'
 * import { sequenceS } from '@fp-tx/core/Apply'
 *
 * assert.deepStrictEqual(
 *   sequence(option.Applicative)({ a: option.some(1), b: option.some(2) }),
 *   option.some({ a: 1, b: 2 }),
 * )
 * assert.deepStrictEqual(sequence(option.Applicative)({ a: option.some(1), b: option.none }), option.none)
 * assert.deepStrictEqual(
 *   sequence(option.Applicative)({ a: option.some(1), b: option.some(2) }),
 *   sequenceS(option.Applicative)({ a: option.some(1), b: option.some(2) }),
 * )
 * ```
 *
 * @public
 */
export function sequence<F extends URIS3>(
  F: Applicative3<F>,
): <K extends string, R, E, A>(ta: ReadonlyRecord<K, Kind3<F, R, E, A>>) => Kind3<F, R, E, ReadonlyRecord<K, A>>
export function sequence<F extends URIS3, E>(
  F: Applicative3C<F, E>,
): <K extends string, R, A>(ta: ReadonlyRecord<K, Kind3<F, R, E, A>>) => Kind3<F, R, E, ReadonlyRecord<K, A>>
export function sequence<F extends URIS2>(
  F: Applicative2<F>,
): <K extends string, E, A>(ta: ReadonlyRecord<K, Kind2<F, E, A>>) => Kind2<F, E, ReadonlyRecord<K, A>>
export function sequence<F extends URIS2, E>(
  F: Applicative2C<F, E>,
): <K extends string, A>(ta: ReadonlyRecord<K, Kind2<F, E, A>>) => Kind2<F, E, ReadonlyRecord<K, A>>
export function sequence<F extends URIS>(
  F: Applicative1<F>,
): <K extends string, A>(ta: ReadonlyRecord<K, Kind<F, A>>) => Kind<F, ReadonlyRecord<K, A>>
export function sequence<F>(
  F: Applicative<F>,
): <K extends string, A>(ta: ReadonlyRecord<K, HKT<F, A>>) => HKT<F, ReadonlyRecord<K, A>>
export function sequence<F>(
  F: Applicative<F>,
): <A>(ta: ReadonlyRecord<string, HKT<F, A>>) => HKT<F, ReadonlyRecord<string, A>> {
  return _sequence(S.Ord)(F)
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const wither: PipeableWither1<URI> = <F>(
  F: Applicative<F>,
): (<A, B>(f: (a: A) => HKT<F, Option<B>>) => (fa: ReadonlyRecord<string, A>) => HKT<F, ReadonlyRecord<string, B>>) => {
  const traverseF = traverse(F)
  return f => fa => F.map(pipe(fa, traverseF(f)), compact)
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const wilt: PipeableWilt1<URI> = <F>(
  F: Applicative<F>,
): (<A, B, C>(
  f: (a: A) => HKT<F, Either<B, C>>,
) => (fa: ReadonlyRecord<string, A>) => HKT<F, Separated<ReadonlyRecord<string, B>, ReadonlyRecord<string, C>>>) => {
  const traverseF = traverse(F)
  return f => fa => F.map(pipe(fa, traverseF(f)), separate)
}

/**
 * Maps a `ReadonlyRecord` with a function returning an `Either` and partitions the resulting `ReadonlyRecord` into
 * `Left`s and `Right`s.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { partitionMapWithIndex } from '@fp-tx/core/ReadonlyRecord'
 * import { either } from 'fp-ts'
 *
 * const f = (key: string, a: number) =>
 *   a >= 0 ? either.right(`${key} is >= 0 (${a})`) : either.left(`${key} is < 0 (${a})`)
 * assert.deepStrictEqual(partitionMapWithIndex(f)({ a: -1, b: 2, c: 123 }), {
 *   left: {
 *     a: 'a is < 0 (-1)',
 *   },
 *   right: {
 *     b: 'b is >= 0 (2)',
 *     c: 'c is >= 0 (123)',
 *   },
 * })
 * ```
 *
 * @public
 */
export function partitionMapWithIndex<K extends string, A, B, C>(
  f: (key: K, a: A) => Either<B, C>,
): (fa: ReadonlyRecord<K, A>) => Separated<ReadonlyRecord<string, B>, ReadonlyRecord<string, C>>
export function partitionMapWithIndex<A, B, C>(
  f: (key: string, a: A) => Either<B, C>,
): (fa: ReadonlyRecord<string, A>) => Separated<ReadonlyRecord<string, B>, ReadonlyRecord<string, C>> {
  return r => {
    const left: Record<string, B> = {}
    const right: Record<string, C> = {}
    for (const k in r) {
      if (_.has.call(r, k)) {
        const e = f(k, r[k])
        switch (e._tag) {
          case 'Left':
            left[k] = e.left
            break
          case 'Right':
            right[k] = e.right
            break
        }
      }
    }
    return separated(left, right)
  }
}

/**
 * Partition a `ReadonlyRecord` into two parts according to a predicate that takes a key and a value.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { partitionWithIndex } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(
 *   partitionWithIndex((key: string, a: number) => key.length <= 1 && a > 0)({ a: -1, b: 2, ccc: 7 }),
 *   {
 *     left: {
 *       a: -1,
 *       ccc: 7,
 *     },
 *     right: {
 *       b: 2,
 *     },
 *   },
 * )
 * ```
 *
 * @public
 */
export function partitionWithIndex<K extends string, A, B extends A>(
  refinementWithIndex: RefinementWithIndex<K, A, B>,
): (fa: ReadonlyRecord<K, A>) => Separated<ReadonlyRecord<string, A>, ReadonlyRecord<string, B>>
export function partitionWithIndex<K extends string, A>(
  predicateWithIndex: PredicateWithIndex<K, A>,
): <B extends A>(fb: ReadonlyRecord<K, B>) => Separated<ReadonlyRecord<string, B>, ReadonlyRecord<string, B>>
export function partitionWithIndex<K extends string, A>(
  predicateWithIndex: PredicateWithIndex<K, A>,
): (fa: ReadonlyRecord<K, A>) => Separated<ReadonlyRecord<string, A>, ReadonlyRecord<string, A>>
export function partitionWithIndex<A>(
  predicateWithIndex: PredicateWithIndex<string, A>,
): (fa: ReadonlyRecord<string, A>) => Separated<ReadonlyRecord<string, A>, ReadonlyRecord<string, A>> {
  return r => {
    const left: Record<string, A> = {}
    const right: Record<string, A> = {}
    for (const k in r) {
      if (_.has.call(r, k)) {
        const a = r[k]
        if (predicateWithIndex(k, a)) {
          right[k] = a
        } else {
          left[k] = a
        }
      }
    }
    return separated(left, right)
  }
}

/**
 * Maps a `ReadonlyRecord` with an iterating function that takes key and value and returns an `Option`, keeping only the
 * `Some` values and discarding `None`s.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { filterMapWithIndex } from '@fp-tx/core/ReadonlyRecord'
 * import { option } from 'fp-ts'
 *
 * const f = (key: string, a: number) => (a >= 0 ? option.some(`${key}${a}`) : option.none)
 * assert.deepStrictEqual(filterMapWithIndex(f)({ a: -1, b: 2, c: 3 }), {
 *   b: 'b2',
 *   c: 'c3',
 * })
 * ```
 *
 * @public
 */
export function filterMapWithIndex<K extends string, A, B>(
  f: (key: K, a: A) => Option<B>,
): (fa: ReadonlyRecord<K, A>) => ReadonlyRecord<string, B>
export function filterMapWithIndex<A, B>(
  f: (key: string, a: A) => Option<B>,
): (fa: ReadonlyRecord<string, A>) => ReadonlyRecord<string, B> {
  return r => {
    const out: Record<string, B> = {}
    for (const k in r) {
      if (_.has.call(r, k)) {
        const ob = f(k, r[k])
        if (_.isSome(ob)) {
          out[k] = ob.value
        }
      }
    }
    return out
  }
}

/**
 * Produce a new `ReadonlyRecord` keeping only the entries that satisfy a predicate taking key and value as input.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { filterWithIndex } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(
 *   filterWithIndex((s: string, v: number) => s.length <= 1 && v > 0)({ a: 1, b: -2, ccc: 3 }),
 *   {
 *     a: 1,
 *   },
 * )
 * ```
 *
 * @public
 */
export function filterWithIndex<K extends string, A, B extends A>(
  refinementWithIndex: RefinementWithIndex<K, A, B>,
): (fa: ReadonlyRecord<K, A>) => ReadonlyRecord<string, B>
export function filterWithIndex<K extends string, A>(
  predicateWithIndex: PredicateWithIndex<K, A>,
): <B extends A>(fb: ReadonlyRecord<K, B>) => ReadonlyRecord<string, B>
export function filterWithIndex<K extends string, A>(
  predicateWithIndex: PredicateWithIndex<K, A>,
): (fa: ReadonlyRecord<K, A>) => ReadonlyRecord<string, A>
export function filterWithIndex<A>(
  predicateWithIndex: PredicateWithIndex<string, A>,
): (fa: ReadonlyRecord<string, A>) => ReadonlyRecord<string, A> {
  return fa => {
    const out: Record<string, A> = {}
    let changed = false
    for (const key in fa) {
      if (_.has.call(fa, key)) {
        const a = fa[key]
        if (predicateWithIndex(key, a)) {
          out[key] = a
        } else {
          changed = true
        }
      }
    }
    return changed ? out : fa
  }
}

/**
 * Create a `ReadonlyRecord` from a foldable collection of key/value pairs, using the specified `Magma` to combine
 * values for duplicate keys.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function fromFoldable<F extends URIS3, A>(
  M: Magma<A>,
  F: Foldable3<F>,
): <R, E>(fka: Kind3<F, R, E, readonly [string, A]>) => ReadonlyRecord<string, A>
export function fromFoldable<F extends URIS2, A>(
  M: Magma<A>,
  F: Foldable2<F>,
): <E>(fka: Kind2<F, E, readonly [string, A]>) => ReadonlyRecord<string, A>
export function fromFoldable<F extends URIS, A>(
  M: Magma<A>,
  F: Foldable1<F>,
): (fka: Kind<F, readonly [string, A]>) => ReadonlyRecord<string, A>
export function fromFoldable<F, A>(
  M: Magma<A>,
  F: FoldableHKT<F>,
): (fka: HKT<F, readonly [string, A]>) => ReadonlyRecord<string, A>
export function fromFoldable<F, A>(
  M: Magma<A>,
  F: FoldableHKT<F>,
): (fka: HKT<F, readonly [string, A]>) => ReadonlyRecord<string, A> {
  const fromFoldableMapM = fromFoldableMap(M, F)
  return fka => fromFoldableMapM(fka, identity)
}

/**
 * Create a `ReadonlyRecord` from a foldable collection using the specified functions to:
 *
 * - Map to key/value pairs
 * - Combine values for duplicate keys.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { last } from '@fp-tx/core/Semigroup'
 * import { Foldable, zip } from '@fp-tx/core/ReadonlyArray'
 * import { identity } from '@fp-tx/core/function'
 * import { ReadonlyRecord, fromFoldableMap } from '@fp-tx/core/ReadonlyRecord'
 *
 * export const zipObject = <K extends string, A>(
 *   keys: ReadonlyArray<K>,
 *   values: ReadonlyArray<A>,
 * ): ReadonlyRecord<K, A> => fromFoldableMap(last<A>(), Foldable)(zip(keys, values), identity)
 *
 * assert.deepStrictEqual(zipObject(['a', 'b'], [1, 2, 3]), { a: 1, b: 2 })
 *
 * interface User {
 *   readonly id: string
 *   readonly name: string
 * }
 *
 * const users: ReadonlyArray<User> = [
 *   { id: 'id1', name: 'name1' },
 *   { id: 'id2', name: 'name2' },
 *   { id: 'id1', name: 'name3' },
 * ]
 *
 * assert.deepStrictEqual(
 *   fromFoldableMap(last<User>(), Foldable)(users, user => [user.id, user]),
 *   {
 *     id1: { id: 'id1', name: 'name3' },
 *     id2: { id: 'id2', name: 'name2' },
 *   },
 * )
 * ```
 *
 * @public
 */
export function fromFoldableMap<F extends URIS3, B>(
  M: Magma<B>,
  F: Foldable3<F>,
): <R, E, A>(fa: Kind3<F, R, E, A>, f: (a: A) => readonly [string, B]) => ReadonlyRecord<string, B>
export function fromFoldableMap<F extends URIS2, B>(
  M: Magma<B>,
  F: Foldable2<F>,
): <E, A>(fa: Kind2<F, E, A>, f: (a: A) => readonly [string, B]) => ReadonlyRecord<string, B>
export function fromFoldableMap<F extends URIS, B>(
  M: Magma<B>,
  F: Foldable1<F>,
): <A>(fa: Kind<F, A>, f: (a: A) => readonly [string, B]) => ReadonlyRecord<string, B>
export function fromFoldableMap<F, B>(
  M: Magma<B>,
  F: FoldableHKT<F>,
): <A>(fa: HKT<F, A>, f: (a: A) => readonly [string, B]) => ReadonlyRecord<string, B>
export function fromFoldableMap<F, B>(
  M: Magma<B>,
  F: FoldableHKT<F>,
): <A>(fa: HKT<F, A>, f: (a: A) => readonly [string, B]) => ReadonlyRecord<string, B> {
  return <A>(ta: HKT<F, A>, f: (a: A) => readonly [string, B]) => {
    return F.reduce<A, Record<string, B>>(ta, {}, (r, a) => {
      const [k, b] = f(a)
      r[k] = _.has.call(r, k) ? M.concat(r[k], b) : b
      return r
    })
  }
}

/**
 * Alias of [`toReadonlyArray`](#toreadonlyarray).
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @example
 *
 * ```typescript
 * import { toEntries } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(toEntries({ b: 2, a: 1 }), [
 *   ['a', 1],
 *   ['b', 2],
 * ])
 * ```
 *
 * @public
 */
export const toEntries = toReadonlyArray

/**
 * Converts a `ReadonlyArray` of `[key, value]` tuples into a `ReadonlyRecord`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Conversions
 * @example
 *
 * ```typescript
 * import { fromEntries } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(
 *   fromEntries([
 *     ['a', 1],
 *     ['b', 2],
 *     ['a', 3],
 *   ]),
 *   { b: 2, a: 3 },
 * )
 * ```
 *
 * @public
 */
export const fromEntries = <A>(fa: ReadonlyArray<readonly [string, A]>): ReadonlyRecord<string, A> => {
  const out: Record<string, A> = {}
  for (const a of fa) {
    out[a[0]] = a[1]
  }
  return out
}

/**
 * Test if every value in a `ReadonlyRecord` satisfies the predicate.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { every } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(every((n: number) => n >= 0)({ a: 1, b: 2 }), true)
 * assert.deepStrictEqual(every((n: number) => n >= 0)({ a: 1, b: -1 }), false)
 * ```
 *
 * @public
 */
export function every<A, B extends A>(
  refinement: Refinement<A, B>,
): Refinement<ReadonlyRecord<string, A>, ReadonlyRecord<string, B>>
export function every<A>(predicate: Predicate<A>): Predicate<ReadonlyRecord<string, A>>
export function every<A>(predicate: Predicate<A>): Predicate<ReadonlyRecord<string, A>> {
  return r => {
    for (const k in r) {
      if (!predicate(r[k])) {
        return false
      }
    }
    return true
  }
}

/**
 * Test if at least one value in a `ReadonlyRecord` satisfies the predicate.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { some } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(some((n: number) => n >= 0)({ a: 1, b: -2 }), true)
 * assert.deepStrictEqual(some((n: number) => n >= 0)({ a: -1, b: -2 }), false)
 * ```
 *
 * @public
 */
export function some<A>(predicate: (a: A) => boolean): (r: ReadonlyRecord<string, A>) => boolean {
  return r => {
    for (const k in r) {
      if (predicate(r[k])) {
        return true
      }
    }
    return false
  }
}

// TODO: remove non-curried overloading in v3
/**
 * Given an `Eq` checks if a `ReadonlyRecord` contains an entry with value equal to a provided value.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { elem } from '@fp-tx/core/ReadonlyRecord'
 * import { number } from 'fp-ts'
 *
 * assert.deepStrictEqual(elem(number.Eq)(123, { foo: 123, bar: 234 }), true)
 * assert.deepStrictEqual(elem(number.Eq)(-7, { foo: 123, bar: 234 }), false)
 * ```
 *
 * @public
 */
export function elem<A>(E: Eq<A>): {
  (a: A): (fa: ReadonlyRecord<string, A>) => boolean
  (a: A, fa: ReadonlyRecord<string, A>): boolean
}
export function elem<A>(
  E: Eq<A>,
): (a: A, fa?: ReadonlyRecord<string, A>) => boolean | ((fa: ReadonlyRecord<string, A>) => boolean) {
  return (a, fa?) => {
    if (fa === undefined) {
      const elemE = elem(E)
      return fa => elemE(a, fa)
    }
    for (const k in fa) {
      if (E.equals(fa[k], a)) {
        return true
      }
    }
    return false
  }
}

/**
 * Union of two `ReadonlyRecord`s. Takes two `ReadonlyRecord`s and produces a `ReadonlyRecord` combining all the entries
 * of the two inputs. It uses the `concat` function of the provided `Magma` to combine the elements with the same key.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { union } from '@fp-tx/core/ReadonlyRecord'
 * import { Magma } from '@fp-tx/core/Magma'
 *
 * const m1: Magma<number> = { concat: (x: number, y: number) => x + y }
 * assert.deepStrictEqual(union(m1)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 4, b: 2, c: 3 })
 * const m2: Magma<number> = { concat: (x: number) => x }
 * assert.deepStrictEqual(union(m2)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 1, b: 2, c: 3 })
 * ```
 *
 * @public
 */
export const union =
  <A>(M: Magma<A>) =>
  (second: ReadonlyRecord<string, A>) =>
  (first: ReadonlyRecord<string, A>): ReadonlyRecord<string, A> => {
    if (isEmpty(first)) {
      return second
    }
    if (isEmpty(second)) {
      return first
    }
    const out: Record<string, A> = {}
    for (const k in first) {
      if (has(k, second)) {
        out[k] = M.concat(first[k], second[k])
      } else {
        out[k] = first[k]
      }
    }
    for (const k in second) {
      if (!has(k, out)) {
        out[k] = second[k]
      }
    }
    return out
  }

/**
 * Intersection of two `ReadonlyRecord`s. Takes two `ReadonlyRecord`s and produces a `ReadonlyRecord` combining only the
 * entries of the two inputswith the same key. It uses the `concat` function of the provided `Magma` to combine the
 * elements.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { intersection } from '@fp-tx/core/ReadonlyRecord'
 * import { Magma } from '@fp-tx/core/Magma'
 *
 * const m1: Magma<number> = { concat: (x: number, y: number) => x + y }
 * assert.deepStrictEqual(intersection(m1)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 4 })
 * const m2: Magma<number> = { concat: (x: number) => x }
 * assert.deepStrictEqual(intersection(m2)({ a: 3, c: 3 })({ a: 1, b: 2 }), { a: 1 })
 * ```
 *
 * @public
 */
export const intersection =
  <A>(M: Magma<A>) =>
  (second: ReadonlyRecord<string, A>) =>
  (first: ReadonlyRecord<string, A>): ReadonlyRecord<string, A> => {
    if (isEmpty(first) || isEmpty(second)) {
      return empty
    }
    const out: Record<string, A> = {}
    for (const k in first) {
      if (has(k, second)) {
        out[k] = M.concat(first[k], second[k])
      }
    }
    return out
  }

/**
 * Difference between two `ReadonlyRecord`s. Takes two `ReadonlyRecord`s and produces a `ReadonlyRecord` composed by the
 * entries of the two inputs, removing the entries with the same key in both inputs.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { difference } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(difference({ a: 1 })({ a: 1, b: 2 }), { b: 2 })
 * assert.deepStrictEqual(difference({ a: 3 })({ a: 1, b: 2 }), { b: 2 })
 * assert.deepStrictEqual(difference({ a: 3, c: 3 })({ a: 1, b: 2 }), { b: 2, c: 3 })
 * ```
 *
 * @public
 */
export const difference =
  <A>(second: ReadonlyRecord<string, A>) =>
  (first: ReadonlyRecord<string, A>): ReadonlyRecord<string, A> => {
    if (isEmpty(first)) {
      return second
    }
    if (isEmpty(second)) {
      return first
    }
    const out: Record<string, A> = {}
    for (const k in first) {
      if (!has(k, second)) {
        out[k] = first[k]
      }
    }
    for (const k in second) {
      if (!has(k, first)) {
        out[k] = second[k]
      }
    }
    return out
  }

/** @internal */
export const _map: Functor1<URI>['map'] = (fa, f) => pipe(fa, map(f))
/** @internal */
/* istanbul ignore next */
export const _mapWithIndex: FunctorWithIndex1<URI, string>['mapWithIndex'] = (fa, f) => pipe(fa, mapWithIndex(f))
/** @internal */
/* istanbul ignore next */
export const _reduce: (O: Ord<string>) => Foldable1<URI>['reduce'] = (O: Ord<string>) => {
  const reduceO = reduce(O)
  return (fa, b, f) => pipe(fa, reduceO(b, f))
}
/** @internal */
export const _foldMap: (O: Ord<string>) => Foldable1<URI>['foldMap'] = O => M => {
  const foldMapM = foldMap(O)(M)
  return (fa, f) => pipe(fa, foldMapM(f))
}
/** @internal */
/* istanbul ignore next */
export const _reduceRight: (O: Ord<string>) => Foldable1<URI>['reduceRight'] = O => {
  const reduceRightO = reduceRight(O)
  return (fa, b, f) => pipe(fa, reduceRightO(b, f))
}
/** @internal */
/* istanbul ignore next */
export const _filter = <A>(fa: ReadonlyRecord<string, A>, predicate: Predicate<A>): ReadonlyRecord<string, A> =>
  pipe(fa, filter(predicate))
/** @internal */
/* istanbul ignore next */
export const _filterMap: Filterable1<URI>['filterMap'] = (fa, f) => pipe(fa, filterMap(f))
/** @internal */
/* istanbul ignore next */
export const _partition = <A>(
  fa: ReadonlyRecord<string, A>,
  predicate: Predicate<A>,
): Separated<ReadonlyRecord<string, A>, ReadonlyRecord<string, A>> => pipe(fa, partition(predicate))
/** @internal */
/* istanbul ignore next */
export const _partitionMap: Filterable1<URI>['partitionMap'] = (fa, f) => pipe(fa, partitionMap(f))
/** @internal */
/* istanbul ignore next */
export const _reduceWithIndex: (O: Ord<string>) => FoldableWithIndex1<URI, string>['reduceWithIndex'] = O => {
  const reduceWithIndexO = reduceWithIndex(O)
  return (fa, b, f) => pipe(fa, reduceWithIndexO(b, f))
}
/** @internal */
export const _foldMapWithIndex: (O: Ord<string>) => FoldableWithIndex1<URI, string>['foldMapWithIndex'] = O => {
  const foldMapWithIndexO = foldMapWithIndex(O)
  return M => {
    const foldMapWithIndexM = foldMapWithIndexO(M)
    return (fa, f) => pipe(fa, foldMapWithIndexM(f))
  }
}
/** @internal */
/* istanbul ignore next */
export const _reduceRightWithIndex: (O: Ord<string>) => FoldableWithIndex1<URI, string>['reduceRightWithIndex'] = O => {
  const reduceRightWithIndexO = reduceRightWithIndex(O)
  return (fa, b, f) => pipe(fa, reduceRightWithIndexO(b, f))
}
/** @internal */
/* istanbul ignore next */
export const _partitionMapWithIndex = <A, B, C>(
  fa: ReadonlyRecord<string, A>,
  f: (key: string, a: A) => Either<B, C>,
): Separated<ReadonlyRecord<string, B>, ReadonlyRecord<string, C>> => pipe(fa, partitionMapWithIndex(f))
/** @internal */
/* istanbul ignore next */
export const _partitionWithIndex = <A>(
  fa: ReadonlyRecord<string, A>,
  predicateWithIndex: PredicateWithIndex<string, A>,
): Separated<Readonly<Record<string, A>>, Readonly<Record<string, A>>> =>
  pipe(fa, partitionWithIndex(predicateWithIndex))
/** @internal */
/* istanbul ignore next */
export const _filterMapWithIndex = <A, B>(
  fa: ReadonlyRecord<string, A>,
  f: (key: string, a: A) => Option<B>,
): Readonly<Record<string, B>> => pipe(fa, filterMapWithIndex(f))
/** @internal */
/* istanbul ignore next */
export const _filterWithIndex = <A>(
  fa: ReadonlyRecord<string, A>,
  predicateWithIndex: PredicateWithIndex<string, A>,
): Readonly<Record<string, A>> => pipe(fa, filterWithIndex(predicateWithIndex))
/** @internal */
export const _traverse = (
  O: Ord<string>,
): (<F>(
  F: Applicative<F>,
) => <A, B>(ta: ReadonlyRecord<string, A>, f: (a: A) => HKT<F, B>) => HKT<F, ReadonlyRecord<string, B>>) => {
  const traverseWithIndexO = _traverseWithIndex(O)
  return F => {
    const traverseWithIndexOF = traverseWithIndexO(F)
    return (ta, f) => traverseWithIndexOF(ta, flow(SK, f))
  }
}
/** @internal */
export const _sequence = (
  O: Ord<string>,
): (<F>(F: Applicative<F>) => <A>(ta: ReadonlyRecord<string, HKT<F, A>>) => HKT<F, ReadonlyRecord<string, A>>) => {
  const traverseO = _traverse(O)
  return F => {
    const traverseOF = traverseO(F)
    return ta => traverseOF(ta, identity)
  }
}
const _traverseWithIndex =
  (O: Ord<string>) =>
  <F>(
    F: Applicative<F>,
  ): (<A, B>(
    ta: ReadonlyRecord<string, A>,
    f: (k: string, a: A) => HKT<F, B>,
  ) => HKT<F, ReadonlyRecord<string, B>>) => {
    const keysO = keys_(O)
    return <A, B>(ta: ReadonlyRecord<string, A>, f: (k: string, a: A) => HKT<F, B>) => {
      const ks = keysO(ta)
      if (ks.length === 0) {
        return F.of(empty)
      }
      let fr: HKT<F, Record<string, B>> = F.of({})
      for (const key of ks) {
        fr = F.ap(
          F.map(fr, r => (b: B) => Object.assign({}, r, { [key]: b })),
          f(key, ta[key]),
        )
      }
      return fr
    }
  }

/**
 * Given a `Predicate`, it produces a new `ReadonlyRecord` keeping only the entries with a value that satisfies the
 * provided predicate.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @example
 *
 * ```typescript
 * import { filter } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(filter((s: string) => s.length < 4)({ a: 'foo', b: 'bar', c: 'verylong' }), {
 *   a: 'foo',
 *   b: 'bar',
 * })
 * ```
 *
 * @public
 */
export const filter: {
  <A, B extends A>(refinement: Refinement<A, B>): (fa: ReadonlyRecord<string, A>) => ReadonlyRecord<string, B>
  <A>(predicate: Predicate<A>): <B extends A>(fb: ReadonlyRecord<string, B>) => ReadonlyRecord<string, B>
  <A>(predicate: Predicate<A>): (fa: ReadonlyRecord<string, A>) => ReadonlyRecord<string, A>
} = <A>(predicate: Predicate<A>): ((fa: ReadonlyRecord<string, A>) => ReadonlyRecord<string, A>) =>
  filterWithIndex((_, a) => predicate(a))

/**
 * Maps a `ReadonlyRecord` with an iterating function that returns an `Option` and it keeps only the `Some` values
 * discarding the `None`s.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @example
 *
 * ```typescript
 * import { filterMap } from '@fp-tx/core/ReadonlyRecord'
 * import { option } from 'fp-ts'
 *
 * const f = (s: string) => (s.length < 4 ? option.some(`${s} is short`) : option.none)
 * assert.deepStrictEqual(filterMap(f)({ a: 'foo', b: 'bar', c: 'verylong' }), {
 *   a: 'foo is short',
 *   b: 'bar is short',
 * })
 * ```
 *
 * @public
 */
export const filterMap: <A, B>(
  f: (a: A) => Option<B>,
) => (fa: ReadonlyRecord<string, A>) => ReadonlyRecord<string, B> = f => filterMapWithIndex((_, a) => f(a))

/**
 * Partition a `ReadonlyRecord` into two parts according to a `Predicate`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @example
 *
 * ```typescript
 * import { partition } from '@fp-tx/core/ReadonlyRecord'
 *
 * assert.deepStrictEqual(partition((s: string) => s.length < 4)({ a: 'foo', b: 'bar', c: 'verylong' }), {
 *   left: {
 *     c: 'verylong',
 *   },
 *   right: {
 *     a: 'foo',
 *     b: 'bar',
 *   },
 * })
 * ```
 *
 * @public
 */
export const partition: {
  <A, B extends A>(
    refinement: Refinement<A, B>,
  ): (fa: ReadonlyRecord<string, A>) => Separated<ReadonlyRecord<string, A>, ReadonlyRecord<string, B>>
  <A>(
    predicate: Predicate<A>,
  ): <B extends A>(fb: ReadonlyRecord<string, B>) => Separated<ReadonlyRecord<string, B>, ReadonlyRecord<string, B>>
  <A>(
    predicate: Predicate<A>,
  ): (fa: ReadonlyRecord<string, A>) => Separated<ReadonlyRecord<string, A>, ReadonlyRecord<string, A>>
} = <A>(
  predicate: Predicate<A>,
): ((fa: ReadonlyRecord<string, A>) => Separated<ReadonlyRecord<string, A>, ReadonlyRecord<string, A>>) =>
  partitionWithIndex((_, a) => predicate(a))

/**
 * Maps a `ReadonlyRecord` with a function returning an `Either` and partitions the resulting `ReadonlyRecord` into
 * `Left`s and `Right`s.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @example
 *
 * ```typescript
 * import { partitionMap } from '@fp-tx/core/ReadonlyRecord'
 * import { either } from 'fp-ts'
 *
 * const f = (s: string) => (s.length < 4 ? either.right(`${s} is short`) : either.left(`${s} is not short`))
 * assert.deepStrictEqual(partitionMap(f)({ a: 'foo', b: 'bar', c: 'verylong' }), {
 *   left: {
 *     c: 'verylong is not short',
 *   },
 *   right: {
 *     a: 'foo is short',
 *     b: 'bar is short',
 *   },
 * })
 * ```
 *
 * @public
 */
export const partitionMap: <A, B, C>(
  f: (a: A) => Either<B, C>,
) => (fa: ReadonlyRecord<string, A>) => Separated<ReadonlyRecord<string, B>, ReadonlyRecord<string, C>> = f =>
  partitionMapWithIndex((_, a) => f(a))

/**
 * Reduces a `ReadonlyRecord` passing each value to the iterating function. Entries are processed in order, sorted by
 * key according to the given `Ord`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @example
 *
 * ```typescript
 * import { reduce } from '@fp-tx/core/ReadonlyRecord'
 * import { Ord } from '@fp-tx/core/string'
 *
 * const x = { c: 3, a: 'foo', b: false }
 * assert.deepStrictEqual(reduce(Ord)([] as string[], (b, a) => [...b, `-${a}-`])(x), ['-foo-', '-false-', '-3-'])
 * ```
 *
 * @public
 */
export function reduce(O: Ord<string>): <A, B>(b: B, f: (b: B, a: A) => B) => (fa: ReadonlyRecord<string, A>) => B
/**
 * Use the overload constrained by `Ord` instead.
 *
 * @deprecated Use the overload constrained by `Ord` instead.
 */
export function reduce<A, B>(b: B, f: (b: B, a: A) => B): (fa: ReadonlyRecord<string, A>) => B
export function reduce<A, B>(
  ...args: [Ord<string>] | [B, (b: B, a: A) => B]
): ((b: B, f: (b: B, a: A) => B) => (fa: ReadonlyRecord<string, A>) => B) | ((fa: ReadonlyRecord<string, A>) => B) {
  if (args.length === 1) {
    const reduceWithIndexO = reduceWithIndex(args[0])
    return (b: B, f: (b: B, a: A) => B) => reduceWithIndexO(b, (_, b, a) => f(b, a))
  }
  return reduce(S.Ord)(...args)
}

/**
 * Map and fold a `ReadonlyRecord`. Map the `ReadonlyRecord` passing each value to the iterating function. Then fold the
 * results using the provided `Monoid`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @example
 *
 * ```typescript
 * import { foldMap } from '@fp-tx/core/ReadonlyRecord'
 * import { Ord } from '@fp-tx/core/string'
 * import { Monoid } from '@fp-tx/core/Monoid'
 *
 * const m: Monoid<string> = { empty: '', concat: (x: string, y: string) => (x ? `${x} -> ${y}` : `${y}`) }
 * const f = (a: number) => `-${a}-`
 * const x = { c: 3, a: 1, b: 2 }
 * assert.deepStrictEqual(foldMap(Ord)(m)(f)(x), '-1- -> -2- -> -3-')
 * ```
 *
 * @public
 */
export function foldMap(
  O: Ord<string>,
): <M>(M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: ReadonlyRecord<string, A>) => M
/**
 * Use the overload constrained by `Ord` instead.
 *
 * @deprecated Use the overload constrained by `Ord` instead.
 */
export function foldMap<M>(M: Monoid<M>): <A>(f: (a: A) => M) => (fa: ReadonlyRecord<string, A>) => M
export function foldMap<M>(
  O: Ord<string> | Monoid<M>,
):
  | ((M: Monoid<M>) => <A>(f: (a: A) => M) => (fa: ReadonlyRecord<string, A>) => M)
  | (<A>(f: (a: A) => M) => (fa: ReadonlyRecord<string, A>) => M) {
  if ('compare' in O) {
    const foldMapWithIndexO = foldMapWithIndex(O)
    return (M: Monoid<M>) => {
      const foldMapWithIndexM = foldMapWithIndexO(M)
      return <A>(f: (a: A) => M): ((fa: ReadonlyRecord<string, A>) => M) => foldMapWithIndexM((_, a) => f(a))
    }
  }
  return foldMap(S.Ord)(O)
}

/**
 * Same as `reduce` but entries are processed _from the right_, i.e. in reverse order, from the last to the first entry,
 * according to the given `Ord`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @example
 *
 * ```typescript
 * import { reduceRight } from '@fp-tx/core/ReadonlyRecord'
 * import { Ord } from '@fp-tx/core/string'
 *
 * const x = { c: 3, a: 'foo', b: false }
 * assert.deepStrictEqual(reduceRight(Ord)([] as string[], (a, b) => [...b, `-${a}-`])(x), [
 *   '-3-',
 *   '-false-',
 *   '-foo-',
 * ])
 * ```
 *
 * @public
 */
export function reduceRight(O: Ord<string>): <A, B>(b: B, f: (a: A, b: B) => B) => (fa: ReadonlyRecord<string, A>) => B
/**
 * Use the overload constrained by `Ord` instead.
 *
 * @deprecated Use the overload constrained by `Ord` instead.
 */
export function reduceRight<A, B>(b: B, f: (a: A, b: B) => B): (fa: ReadonlyRecord<string, A>) => B
export function reduceRight<A, B>(
  ...args: [Ord<string>] | [B, (a: A, b: B) => B]
): ((b: B, f: (a: A, b: B) => B) => (fa: ReadonlyRecord<string, A>) => B) | ((fa: ReadonlyRecord<string, A>) => B) {
  if (args.length === 1) {
    const reduceRightWithIndexO = reduceRightWithIndex(args[0])
    return (b: B, f: (a: A, b: B) => B) => reduceRightWithIndexO(b, (_, b, a) => f(b, a))
  }
  return reduceRight(S.Ord)(...args)
}

/**
 * Compact a `ReadonlyRecord` of `Option`s discarding the `None` values and keeping the `Some` values.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @example
 *
 * ```typescript
 * import { compact } from '@fp-tx/core/ReadonlyRecord'
 * import { option } from 'fp-ts'
 *
 * assert.deepStrictEqual(compact({ a: option.some('foo'), b: option.none, c: option.some('bar') }), {
 *   a: 'foo',
 *   c: 'bar',
 * })
 * ```
 *
 * @public
 */
export const compact = <A>(r: ReadonlyRecord<string, Option<A>>): ReadonlyRecord<string, A> => {
  const out: Record<string, A> = {}
  for (const k in r) {
    if (_.has.call(r, k)) {
      const oa = r[k]
      if (_.isSome(oa)) {
        out[k] = oa.value
      }
    }
  }
  return out
}

/**
 * Separate a `ReadonlyRecord` of `Either`s into `Left`s and `Right`s.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @example
 *
 * ```typescript
 * import { separate } from '@fp-tx/core/ReadonlyRecord'
 * import { either } from 'fp-ts'
 *
 * assert.deepStrictEqual(separate({ a: either.right('foo'), b: either.left('bar'), c: either.right('baz') }), {
 *   right: {
 *     a: 'foo',
 *     c: 'baz',
 *   },
 *   left: {
 *     b: 'bar',
 *   },
 * })
 * ```
 *
 * @public
 */
export const separate = <A, B>(
  r: ReadonlyRecord<string, Either<A, B>>,
): Separated<ReadonlyRecord<string, A>, ReadonlyRecord<string, B>> => {
  const left: Record<string, A> = {}
  const right: Record<string, B> = {}
  for (const k in r) {
    if (_.has.call(r, k)) {
      const e = r[k]
      if (_.isLeft(e)) {
        left[k] = e.left
      } else {
        right[k] = e.right
      }
    }
  }
  return separated(left, right)
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'ReadonlyRecord'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind<A> {
    readonly [URI]: ReadonlyRecord<string, A>
  }
}

/**
 * Produces a `Show` for a `ReadonlyRecord`, given a `Show` for the base type (a `Show` produces a human-readable
 * representation of an instance). `ReadonlyRecord` entries are sorted by key with the provided `Ord`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { getShow, ReadonlyRecord } from '@fp-tx/core/ReadonlyRecord'
 * import { Show } from '@fp-tx/core/Show'
 * import { Ord } from '@fp-tx/core/string'
 *
 * const sNumber: Show<number> = { show: (n: number) => `${n}` }
 * const sRecord: Show<ReadonlyRecord<string, number>> = getShow(Ord)(sNumber)
 * assert.deepStrictEqual(sRecord.show({ b: 2, a: 1 }), '{ "a": 1, "b": 2 }')
 * ```
 *
 * @public
 */
export function getShow(O: Ord<string>): <A>(S: Show<A>) => Show<ReadonlyRecord<string, A>>
/**
 * Use the overload constrained by `Ord` instead.
 *
 * @deprecated Zone of Death
 */
export function getShow<A>(S: Show<A>): Show<ReadonlyRecord<string, A>>
export function getShow<A>(
  O: Ord<string> | Show<A>,
): ((S: Show<A>) => Show<ReadonlyRecord<string, A>>) | Show<ReadonlyRecord<string, A>> {
  if ('compare' in O) {
    return (S: Show<A>) => ({
      show: (r: ReadonlyRecord<string, A>) => {
        const elements = collect(O)((k, a: A) => `${JSON.stringify(k)}: ${S.show(a)}`)(r).join(', ')
        return elements === '' ? '{}' : `{ ${elements} }`
      },
    })
  }
  return getShow(S.Ord)(O)
}

/**
 * Given an `Eq` for the base type, it produces an `Eq` for a `ReadonlyRecord` of that base type.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { getEq, ReadonlyRecord } from '@fp-tx/core/ReadonlyRecord'
 * import { string } from 'fp-ts'
 * import { Eq } from '@fp-tx/core/Eq'
 *
 * const eq: Eq<ReadonlyRecord<string, string>> = getEq(string.Eq)
 * assert.deepStrictEqual(eq.equals({ a: 'foo' }, { b: 'bar' }), false)
 * assert.deepStrictEqual(eq.equals({ a: 'foo' }, { a: 'foo' }), true)
 * ```
 *
 * @public
 */
export function getEq<K extends string, A>(E: Eq<A>): Eq<ReadonlyRecord<K, A>>
export function getEq<A>(E: Eq<A>): Eq<ReadonlyRecord<string, A>> {
  const isSubrecordE = isSubrecord(E)
  return fromEquals((x, y) => isSubrecordE(x)(y) && isSubrecordE(y)(x))
}

/**
 * Returns a `Monoid` instance for `ReadonlyRecord`s, given a `Semigroup` instance for the base type. The `Monoid` makes
 * the union of two `ReadonlyRecord`s comining the overlapping entries with the provided `Semigroup`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { SemigroupSum } from '@fp-tx/core/number'
 * import { getMonoid } from '@fp-tx/core/ReadonlyRecord'
 *
 * const M = getMonoid(SemigroupSum)
 * assert.deepStrictEqual(M.concat({ foo: 123, bar: 234 }, { foo: 456, baz: 567 }), {
 *   foo: 579,
 *   bar: 234,
 *   baz: 567,
 * })
 * ```
 *
 * @public
 */
export function getMonoid<K extends string, A>(S: Semigroup<A>): Monoid<ReadonlyRecord<K, A>>
export function getMonoid<A>(S: Semigroup<A>): Monoid<ReadonlyRecord<string, A>> {
  return {
    concat: (first, second) => {
      if (isEmpty(first)) {
        return second
      }
      if (isEmpty(second)) {
        return first
      }
      const r: Record<string, A> = Object.assign({}, first)
      for (const k in second) {
        if (_.has.call(second, k)) {
          r[k] = _.has.call(first, k) ? S.concat(first[k], second[k]) : second[k]
        }
      }
      return r
    },
    empty,
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Functor: Functor1<URI> = {
  URI,
  map: _map,
}

/**
 * Takes a value and a `ReadonlyRecord` of functions and returns a `ReadonlyRecord` by applying each function to the
 * input value.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Mapping
 * @example
 *
 * ```typescript
 * import { flap } from '@fp-tx/core/ReadonlyRecord'
 *
 * const fab = { x: (n: number) => `${n} times 2`, y: (n: number) => `${n * 2}` }
 * assert.deepStrictEqual(flap(3)(fab), {
 *   x: '3 times 2',
 *   y: '6',
 * })
 * ```
 *
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
export const FunctorWithIndex: FunctorWithIndex1<URI, string> = {
  URI,
  map: _map,
  mapWithIndex: _mapWithIndex,
}

/**
 * Produces a `Foldable` instance for a `ReadonlyRecord`, using the provided `Ord` to sort the `ReadonlyRecord`'s
 * entries by key.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const getFoldable = (O: Ord<string>): Foldable1<URI> => ({
  URI,
  reduce: _reduce(O),
  foldMap: _foldMap(O),
  reduceRight: _reduceRight(O),
})

/**
 * Produces a `FoldableWithIndex1` instance for a `ReadonlyRecord`, using the provided `Ord` to sort the
 * `ReadonlyRecord`'s entries by key.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Folding
 * @public
 */
export const getFoldableWithIndex = (O: Ord<string>): FoldableWithIndex1<URI, string> => ({
  URI,
  reduce: _reduce(O),
  foldMap: _foldMap(O),
  reduceRight: _reduceRight(O),
  reduceWithIndex: _reduceWithIndex(O),
  foldMapWithIndex: _foldMapWithIndex(O),
  reduceRightWithIndex: _reduceRightWithIndex(O),
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Compactable: Compactable1<URI> = {
  URI,
  compact,
  separate,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Filterable: Filterable1<URI> = {
  URI,
  map: _map,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const FilterableWithIndex: FilterableWithIndex1<URI, string> = {
  URI,
  map: _map,
  mapWithIndex: _mapWithIndex,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  filterMapWithIndex: _filterMapWithIndex,
  filterWithIndex: _filterWithIndex,
  partitionMapWithIndex: _partitionMapWithIndex,
  partitionWithIndex: _partitionWithIndex,
}

/**
 * Produces a `Traversable` instance for a `ReadonlyRecord`, using the provided `Ord` to sort the `ReadonlyRecord`'s
 * entries by key.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const getTraversable = (O: Ord<string>): Traversable1<URI> => ({
  URI,
  map: _map,
  reduce: _reduce(O),
  foldMap: _foldMap(O),
  reduceRight: _reduceRight(O),
  traverse: _traverse(O),
  sequence: _sequence(O),
})

/**
 * Produces a `TraversableWithIndex` instance for a `ReadonlyRecord`, using the provided `Ord` to sort the
 * `ReadonlyRecord`'s entries by key.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Traversing
 * @public
 */
export const getTraversableWithIndex = (O: Ord<string>): TraversableWithIndex1<URI, string> => ({
  URI,
  map: _map,
  mapWithIndex: _mapWithIndex,
  reduce: _reduce(O),
  foldMap: _foldMap(O),
  reduceRight: _reduceRight(O),
  reduceWithIndex: _reduceWithIndex(O),
  foldMapWithIndex: _foldMapWithIndex(O),
  reduceRightWithIndex: _reduceRightWithIndex(O),
  traverse: _traverse(O),
  sequence: _sequence(O),
  traverseWithIndex: _traverseWithIndex(O),
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Filtering
 * @public
 */
export const getWitherable = (O: Ord<string>): Witherable1<URI> => {
  const T = getTraversable(O)
  return {
    URI,
    map: _map,
    reduce: _reduce(O),
    foldMap: _foldMap(O),
    reduceRight: _reduceRight(O),
    traverse: T.traverse,
    sequence: T.sequence,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: witherDefault(T, Compactable),
    wilt: wiltDefault(T, Compactable),
  }
}

/**
 * Given a `Semigroup` in the base type, it produces a `Semigroup` in the `ReadonlyRecord` of the base type. The
 * resulting `Semigroup` concatenates two `ReadonlyRecord`s by `union`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { getUnionSemigroup, ReadonlyRecord } from '@fp-tx/core/ReadonlyRecord'
 * import { Semigroup } from '@fp-tx/core/Semigroup'
 *
 * const sNumber: Semigroup<number> = { concat: (x, y) => x - y }
 * const sReadonlyRecord: Semigroup<ReadonlyRecord<string, number>> = getUnionSemigroup(sNumber)
 * assert.deepStrictEqual(sReadonlyRecord.concat({ a: 1, b: 2 }, { b: 3, c: 4 }), { a: 1, b: -1, c: 4 })
 * ```
 *
 * @public
 */
export const getUnionSemigroup = <A>(S: Semigroup<A>): Semigroup<ReadonlyRecord<string, A>> => {
  const unionS = union(S)
  return {
    concat: (first, second) => unionS(second)(first),
  }
}

/**
 * Same as `getMonoid`. Returns a `Monoid` instance for `ReadonlyRecord`s given a `Semigroup` instance for the base
 * type. The `Monoid` makes the union of two `ReadonlyRecord`s combining the entries that have the same key with the
 * provided `Semigroup`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { SemigroupSum } from '@fp-tx/core/number'
 * import { getUnionMonoid } from '@fp-tx/core/ReadonlyRecord'
 *
 * const M = getUnionMonoid(SemigroupSum)
 * assert.deepStrictEqual(M.concat({ foo: 123, bar: 234 }, { foo: 456, baz: 567 }), {
 *   foo: 579,
 *   bar: 234,
 *   baz: 567,
 * })
 * ```
 *
 * @public
 */
export const getUnionMonoid = <A>(S: Semigroup<A>): Monoid<ReadonlyRecord<string, A>> => ({
  concat: getUnionSemigroup(S).concat,
  empty,
})

/**
 * Given a `Semigroup` in the base type, it produces a `Semigroup` in the `ReadonlyRecord` of the base type. The
 * resulting `Semigroup` concatenates two `ReadonlyRecord`s by `intersection`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { getIntersectionSemigroup, ReadonlyRecord } from '@fp-tx/core/ReadonlyRecord'
 * import { Semigroup } from '@fp-tx/core/Semigroup'
 *
 * const sNumber: Semigroup<number> = { concat: (x, y) => x - y }
 * const sReadonlyRecord: Semigroup<ReadonlyRecord<string, number>> = getIntersectionSemigroup(sNumber)
 * assert.deepStrictEqual(sReadonlyRecord.concat({ a: 1, b: 2 }, { b: 3, c: 4 }), { b: -1 })
 * ```
 *
 * @public
 */
export const getIntersectionSemigroup = <A>(S: Semigroup<A>): Semigroup<ReadonlyRecord<string, A>> => {
  const intersectionS = intersection(S)
  return {
    concat: (first, second) => intersectionS(second)(first),
  }
}

/**
 * Produces a `Magma` with a `concat` function that combines two `ReadonlyRecord`s by making the `difference`.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { getDifferenceMagma, difference, ReadonlyRecord } from '@fp-tx/core/ReadonlyRecord'
 * import { Magma } from '@fp-tx/core/Magma'
 *
 * const r1 = { a: 3, c: 3 }
 * const r2 = { a: 1, b: 2 }
 * const m: Magma<ReadonlyRecord<string, number>> = getDifferenceMagma<number>()
 * assert.deepStrictEqual(m.concat(r1, r2), difference(r2)(r1))
 * assert.deepStrictEqual(m.concat(r1, r2), { c: 3, b: 2 })
 * ```
 *
 * @public
 */
export const getDifferenceMagma = <A>(): Magma<ReadonlyRecord<string, A>> => ({
  concat: (first, second) => difference(second)(first),
})

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use `getFoldable` instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const Foldable: Foldable1<URI> = {
  URI,
  reduce: /*#__PURE__*/ _reduce(S.Ord),
  foldMap: /*#__PURE__*/ _foldMap(S.Ord),
  reduceRight: /*#__PURE__*/ _reduceRight(S.Ord),
}

/**
 * Use `getFoldableWithIndex` instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const FoldableWithIndex: FoldableWithIndex1<URI, string> = {
  URI,
  reduce: /*#__PURE__*/ _reduce(S.Ord),
  foldMap: /*#__PURE__*/ _foldMap(S.Ord),
  reduceRight: /*#__PURE__*/ _reduceRight(S.Ord),
  reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(S.Ord),
  foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(S.Ord),
  reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(S.Ord),
}

/**
 * Use `getTraversable` instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const Traversable: Traversable1<URI> = {
  URI,
  map: _map,
  reduce: /*#__PURE__*/ _reduce(S.Ord),
  foldMap: /*#__PURE__*/ _foldMap(S.Ord),
  reduceRight: /*#__PURE__*/ _reduceRight(S.Ord),
  traverse: /*#__PURE__*/ _traverse(S.Ord),
  sequence,
}

/**
 * Use `getTraversableWithIndex` instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const TraversableWithIndex: TraversableWithIndex1<URI, string> = {
  URI,
  map: _map,
  mapWithIndex: _mapWithIndex,
  reduce: /*#__PURE__*/ _reduce(S.Ord),
  foldMap: /*#__PURE__*/ _foldMap(S.Ord),
  reduceRight: /*#__PURE__*/ _reduceRight(S.Ord),
  reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(S.Ord),
  foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(S.Ord),
  reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(S.Ord),
  traverse: /*#__PURE__*/ _traverse(S.Ord),
  sequence,
  traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(S.Ord),
}

const _wither = /*#__PURE__*/ witherDefault(Traversable, Compactable)
const _wilt = /*#__PURE__*/ wiltDefault(Traversable, Compactable)

/**
 * Use `getWitherable` instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const Witherable: Witherable1<URI> = {
  URI,
  map: _map,
  reduce: /*#__PURE__*/ _reduce(S.Ord),
  foldMap: /*#__PURE__*/ _foldMap(S.Ord),
  reduceRight: /*#__PURE__*/ _reduceRight(S.Ord),
  traverse: /*#__PURE__*/ _traverse(S.Ord),
  sequence,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  wither: _wither,
  wilt: _wilt,
}

/**
 * Use [`upsertAt`](#upsertat) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const insertAt: <A>(k: string, a: A) => (r: ReadonlyRecord<string, A>) => ReadonlyRecord<string, A> = upsertAt

/**
 * Use [`has`](#has) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export function hasOwnProperty<K extends string>(k: string, r: ReadonlyRecord<K, unknown>): k is K
export function hasOwnProperty<K extends string>(this: any, k: string, r?: ReadonlyRecord<K, unknown>): k is K {
  return _.has.call(r === undefined ? this : r, k)
}

/**
 * This instance is deprecated, use small, specific instances instead. For example if a function needs a `Functor`
 * instance, pass `RR.Functor` instead of `RR.readonlyRecord`
 *
 * @remarks
 * Added in 1.0.0
 * @deprecated Zone of Death
 * @public
 */
export const readonlyRecord: FunctorWithIndex1<URI, string> &
  FoldableWithIndex1<URI, string> &
  FilterableWithIndex1<URI, string> &
  TraversableWithIndex1<URI, string> &
  Witherable1<URI> = {
  URI,
  map: _map,
  reduce: /*#__PURE__*/ _reduce(S.Ord),
  foldMap: /*#__PURE__*/ _foldMap(S.Ord),
  reduceRight: /*#__PURE__*/ _reduceRight(S.Ord),
  traverse: /*#__PURE__*/ _traverse(S.Ord),
  sequence,
  compact,
  separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap,
  mapWithIndex: _mapWithIndex,
  reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(S.Ord),
  foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(S.Ord),
  reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(S.Ord),
  filterMapWithIndex: _filterMapWithIndex,
  filterWithIndex: _filterWithIndex,
  partitionMapWithIndex: _partitionMapWithIndex,
  partitionWithIndex: _partitionWithIndex,
  traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(S.Ord),
  wither: _wither,
  wilt: _wilt,
}
