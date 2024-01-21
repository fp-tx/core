/**
 * The `Ord` type class represents types which support comparisons with a _total order_.
 *
 * Instances should satisfy the laws of total orderings:
 *
 * 1. Reflexivity: `S.compare(a, a) <= 0`
 * 2. Antisymmetry: if `S.compare(a, b) <= 0` and `S.compare(b, a) <= 0` then `a <-> b`
 * 3. Transitivity: if `S.compare(a, b) <= 0` and `S.compare(b, c) <= 0` then `S.compare(a, c) <= 0`
 *
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Contravariant1 } from './Contravariant'
import { type Eq, eqStrict } from './Eq'
import { constant, constTrue, pipe } from './function'
import { type Monoid } from './Monoid'
import { type Ordering } from './Ordering'
import { type Semigroup } from './Semigroup'

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
export interface Ord<A> extends Eq<A> {
  readonly compare: (first: A, second: A) => Ordering
}

// -------------------------------------------------------------------------------------
// defaults
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Defaults
 * @public
 */
export const equalsDefault =
  <A>(compare: Ord<A>['compare']): Eq<A>['equals'] =>
  (first, second) =>
    first === second || compare(first, second) === 0

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @public
 */
export const fromCompare = <A>(compare: Ord<A>['compare']): Ord<A> => ({
  equals: equalsDefault(compare),
  compare: (first, second) => (first === second ? 0 : compare(first, second)),
})

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Given a tuple of `Ord`s returns an `Ord` for the tuple.
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { tuple } from '@fp-tx/core/Ord'
 * import * as B from '@fp-tx/core/boolean'
 * import * as S from '@fp-tx/core/string'
 * import * as N from '@fp-tx/core/number'
 *
 * const O = tuple(S.Ord, N.Ord, B.Ord)
 * assert.strictEqual(O.compare(['a', 1, true], ['b', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 1, false]), 1)
 * ```
 *
 * @public
 */
export const tuple = <A extends ReadonlyArray<unknown>>(...ords: { [K in keyof A]: Ord<A[K]> }): Ord<Readonly<A>> =>
  fromCompare((first, second) => {
    let i = 0
    for (; i < ords.length - 1; i++) {
      const r = ords[i].compare(first[i], second[i])
      if (r !== 0) {
        return r
      }
    }
    return ords[i].compare(first[i], second[i])
  })

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const reverse = <A>(O: Ord<A>): Ord<A> => fromCompare((first, second) => O.compare(second, first))

/* istanbul ignore next */
const contramap_: <A, B>(fa: Ord<A>, f: (b: B) => A) => Ord<B> = (fa, f) => pipe(fa, contramap(f))

/**
 * A typical use case for `contramap` would be like, given some `User` type, to construct an `Ord<User>`.
 *
 * We can do so with a function from `User -> X` where `X` is some value that we know how to compare for ordering
 * (meaning we have an `Ord<X>`)
 *
 * For example, given the following `User` type, there are lots of possible choices for `X`, but let's say we want to
 * sort a list of users by `lastName`.
 *
 * If we have a way of comparing `lastName`s for ordering (`ordLastName: Ord<string>`) and we know how to go from `User
 * -> string`, using `contramap` we can do this
 *
 * @remarks
 * Added in 1.0.0
 * @example
 *
 * ```typescript
 * import { pipe } from '@fp-tx/core/function'
 * import { contramap, Ord } from '@fp-tx/core/Ord'
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import * as S from '@fp-tx/core/string'
 *
 * interface User {
 *   readonly firstName: string
 *   readonly lastName: string
 * }
 *
 * const ordLastName: Ord<string> = S.Ord
 *
 * const ordByLastName: Ord<User> = pipe(
 *   ordLastName,
 *   contramap(user => user.lastName),
 * )
 *
 * assert.deepStrictEqual(
 *   RA.sort(ordByLastName)([
 *     { firstName: 'a', lastName: 'd' },
 *     { firstName: 'c', lastName: 'b' },
 *   ]),
 *   [
 *     { firstName: 'c', lastName: 'b' },
 *     { firstName: 'a', lastName: 'd' },
 *   ],
 * )
 * ```
 *
 * @public
 */
export const contramap: <A, B>(f: (b: B) => A) => (fa: Ord<A>) => Ord<B> = f => fa =>
  fromCompare((first, second) => fa.compare(f(first), f(second)))

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'Ord'

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
    readonly [URI]: Ord<A>
  }
}

/**
 * A typical use case for the `Semigroup` instance of `Ord` is merging two or more orderings.
 *
 * For example the following snippet builds an `Ord` for a type `User` which sorts by `created` date descending, and
 * **then** `lastName`
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import * as D from '@fp-tx/core/Date'
 * import { pipe } from '@fp-tx/core/function'
 * import { contramap, getSemigroup, Ord, reverse } from '@fp-tx/core/Ord'
 * import * as RA from '@fp-tx/core/ReadonlyArray'
 * import * as S from '@fp-tx/core/string'
 *
 * interface User {
 *   readonly id: string
 *   readonly lastName: string
 *   readonly created: Date
 * }
 *
 * const ordByLastName: Ord<User> = pipe(
 *   S.Ord,
 *   contramap(user => user.lastName),
 * )
 *
 * const ordByCreated: Ord<User> = pipe(
 *   D.Ord,
 *   contramap(user => user.created),
 * )
 *
 * const ordUserByCreatedDescThenLastName = getSemigroup<User>().concat(reverse(ordByCreated), ordByLastName)
 *
 * assert.deepStrictEqual(
 *   RA.sort(ordUserByCreatedDescThenLastName)([
 *     { id: 'c', lastName: 'd', created: new Date(1973, 10, 30) },
 *     { id: 'a', lastName: 'b', created: new Date(1973, 10, 30) },
 *     { id: 'e', lastName: 'f', created: new Date(1980, 10, 30) },
 *   ]),
 *   [
 *     { id: 'e', lastName: 'f', created: new Date(1980, 10, 30) },
 *     { id: 'a', lastName: 'b', created: new Date(1973, 10, 30) },
 *     { id: 'c', lastName: 'd', created: new Date(1973, 10, 30) },
 *   ],
 * )
 * ```
 *
 * @public
 */
export const getSemigroup = <A = never>(): Semigroup<Ord<A>> => ({
  concat: (first, second) =>
    fromCompare((a, b) => {
      const ox = first.compare(a, b)
      return ox !== 0 ? ox : second.compare(a, b)
    }),
})

/**
 * Returns a `Monoid` such that:
 *
 * - Its `concat(ord1, ord2)` operation will order first by `ord1`, and then by `ord2`
 * - Its `empty` value is an `Ord` that always considers compared elements equal
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @example
 *
 * ```typescript
 * import { sort } from '@fp-tx/core/Array'
 * import { contramap, reverse, getMonoid } from '@fp-tx/core/Ord'
 * import * as S from '@fp-tx/core/string'
 * import * as B from '@fp-tx/core/boolean'
 * import { pipe } from '@fp-tx/core/function'
 * import { concatAll } from '@fp-tx/core/Monoid'
 * import * as N from '@fp-tx/core/number'
 *
 * interface User {
 *   readonly id: number
 *   readonly name: string
 *   readonly age: number
 *   readonly rememberMe: boolean
 * }
 *
 * const byName = pipe(
 *   S.Ord,
 *   contramap((p: User) => p.name),
 * )
 *
 * const byAge = pipe(
 *   N.Ord,
 *   contramap((p: User) => p.age),
 * )
 *
 * const byRememberMe = pipe(
 *   B.Ord,
 *   contramap((p: User) => p.rememberMe),
 * )
 *
 * const M = getMonoid<User>()
 *
 * const users: Array<User> = [
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 * ]
 *
 * // sort by name, then by age, then by `rememberMe`
 * const O1 = concatAll(M)([byName, byAge, byRememberMe])
 * assert.deepStrictEqual(sort(O1)(users), [
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false },
 * ])
 *
 * // now `rememberMe = true` first, then by name, then by age
 * const O2 = concatAll(M)([reverse(byRememberMe), byName, byAge])
 * assert.deepStrictEqual(sort(O2)(users), [
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false },
 * ])
 * ```
 *
 * @public
 */
export const getMonoid = <A = never>(): Monoid<Ord<A>> => ({
  concat: getSemigroup<A>().concat,
  empty: fromCompare(() => 0),
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const Contravariant: Contravariant1<URI> = {
  URI,
  contramap: contramap_,
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const trivial: Ord<unknown> = {
  equals: constTrue,
  compare: /*#__PURE__*/ constant(0),
}

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const equals =
  <A>(O: Ord<A>) =>
  (second: A) =>
  (first: A): boolean =>
    first === second || O.compare(first, second) === 0

// TODO: curry in v3
/**
 * Test whether one value is _strictly less than_ another
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const lt =
  <A>(O: Ord<A>) =>
  (first: A, second: A): boolean =>
    O.compare(first, second) === -1

// TODO: curry in v3
/**
 * Test whether one value is _strictly greater than_ another
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const gt =
  <A>(O: Ord<A>) =>
  (first: A, second: A): boolean =>
    O.compare(first, second) === 1

// TODO: curry in v3
/**
 * Test whether one value is _non-strictly less than_ another
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const leq =
  <A>(O: Ord<A>) =>
  (first: A, second: A): boolean =>
    O.compare(first, second) !== 1

// TODO: curry in v3
/**
 * Test whether one value is _non-strictly greater than_ another
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const geq =
  <A>(O: Ord<A>) =>
  (first: A, second: A): boolean =>
    O.compare(first, second) !== -1

// TODO: curry in v3
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const min =
  <A>(O: Ord<A>) =>
  (first: A, second: A): A =>
    first === second || O.compare(first, second) < 1 ? first : second

// TODO: curry in v3
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const max =
  <A>(O: Ord<A>) =>
  (first: A, second: A): A =>
    first === second || O.compare(first, second) > -1 ? first : second

/**
 * Clamp a value between a minimum and a maximum
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const clamp = <A>(O: Ord<A>): ((low: A, hi: A) => (a: A) => A) => {
  const minO = min(O)
  const maxO = max(O)
  return (low, hi) => a => maxO(minO(a, hi), low)
}

/**
 * Test whether a value is between a minimum and a maximum (inclusive)
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const between = <A>(O: Ord<A>): ((low: A, hi: A) => (a: A) => boolean) => {
  const ltO = lt(O)
  const gtO = gt(O)
  return (low, hi) => a => (ltO(a, low) || gtO(a, hi) ? false : true)
}

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`tuple`](#tuple) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const getTupleOrd: <T extends ReadonlyArray<Ord<any>>>(
  ...ords: T
) => Ord<{ [K in keyof T]: T[K] extends Ord<infer A> ? A : never }> = tuple

/**
 * Use [`reverse`](#reverse) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const getDualOrd = reverse

/**
 * Use [`Contravariant`](#contravariant) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const ord: Contravariant1<URI> = Contravariant

// default compare for primitive types
function compare(first: any, second: any): Ordering {
  return (
    first < second ? -1
    : first > second ? 1
    : 0
  )
}

const strictOrd = {
  equals: eqStrict.equals,
  compare,
}

/**
 * Use [`Ord`](./boolean.ts.html#ord) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const ordBoolean: Ord<boolean> = strictOrd

/**
 * Use [`Ord`](./string.ts.html#ord) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const ordString: Ord<string> = strictOrd

/**
 * Use [`Ord`](./number.ts.html#ord) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const ordNumber: Ord<number> = strictOrd

/**
 * Use [`Ord`](./Date.ts.html#ord) instead.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Zone of death
 * @deprecated
 * @public
 */
export const ordDate: Ord<Date> = /*#__PURE__*/ pipe(
  ordNumber,
  /*#__PURE__*/
  contramap(date => date.valueOf()),
)
