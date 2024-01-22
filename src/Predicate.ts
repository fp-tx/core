/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Contravariant1 } from './Contravariant'
import { constFalse, constTrue, flow, pipe } from './function'
import { type Monoid } from './Monoid'
import { type Semigroup } from './Semigroup'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export interface Predicate<A> {
  (a: A): boolean
}

const contramap_: Contravariant1<URI>['contramap'] = (predicate, f) => pipe(predicate, contramap(f))

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const contramap =
  <B, A>(f: (b: B) => A) =>
  (predicate: Predicate<A>): Predicate<B> =>
    flow(f, predicate)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Type lambdas
 * @public
 */
export const URI = 'Predicate'

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
    readonly [URI]: Predicate<A>
  }
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getSemigroupAny = <A = never>(): Semigroup<Predicate<A>> => ({
  concat: (first, second) => pipe(first, or(second)),
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getMonoidAny = <A = never>(): Monoid<Predicate<A>> => ({
  concat: getSemigroupAny<A>().concat,
  empty: constFalse,
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getSemigroupAll = <A = never>(): Semigroup<Predicate<A>> => ({
  concat: (first, second) => pipe(first, and(second)),
})

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Instances
 * @public
 */
export const getMonoidAll = <A = never>(): Monoid<Predicate<A>> => ({
  concat: getSemigroupAll<A>().concat,
  empty: constTrue,
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
export const not =
  <A>(predicate: Predicate<A>): Predicate<A> =>
  a =>
    !predicate(a)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const or =
  <A>(second: Predicate<A>) =>
  (first: Predicate<A>): Predicate<A> =>
  a =>
    first(a) || second(a)

/**
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const and =
  <A>(second: Predicate<A>) =>
  (first: Predicate<A>): Predicate<A> =>
  a =>
    first(a) && second(a)
