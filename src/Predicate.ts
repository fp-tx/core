/** @since 1.0.0 */
import { type Contravariant1 } from './Contravariant'
import { constFalse, constTrue, flow, pipe } from './function'
import { type Monoid } from './Monoid'
import { type Semigroup } from './Semigroup'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/** @since 1.0.0 */
export interface Predicate<A> {
  (a: A): boolean
}

const contramap_: Contravariant1<URI>['contramap'] = (predicate, f) => pipe(predicate, contramap(f))

/** @since 1.0.0 */
export const contramap =
  <B, A>(f: (b: B) => A) =>
  (predicate: Predicate<A>): Predicate<B> =>
    flow(f, predicate)

/**
 * @since 1.0.0
 * @category Type lambdas
 */
export const URI = 'Predicate'

/**
 * @since 1.0.0
 * @category Type lambdas
 */
export type URI = typeof URI

declare module './HKT' {
  interface URItoKind<A> {
    readonly [URI]: Predicate<A>
  }
}

/**
 * @since 1.0.0
 * @category Instances
 */
export const getSemigroupAny = <A = never>(): Semigroup<Predicate<A>> => ({
  concat: (first, second) => pipe(first, or(second)),
})

/**
 * @since 1.0.0
 * @category Instances
 */
export const getMonoidAny = <A = never>(): Monoid<Predicate<A>> => ({
  concat: getSemigroupAny<A>().concat,
  empty: constFalse,
})

/**
 * @since 1.0.0
 * @category Instances
 */
export const getSemigroupAll = <A = never>(): Semigroup<Predicate<A>> => ({
  concat: (first, second) => pipe(first, and(second)),
})

/**
 * @since 1.0.0
 * @category Instances
 */
export const getMonoidAll = <A = never>(): Monoid<Predicate<A>> => ({
  concat: getSemigroupAll<A>().concat,
  empty: constTrue,
})

/**
 * @since 1.0.0
 * @category Instances
 */
export const Contravariant: Contravariant1<URI> = {
  URI,
  contramap: contramap_,
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/** @since 1.0.0 */
export const not =
  <A>(predicate: Predicate<A>): Predicate<A> =>
  a =>
    !predicate(a)

/** @since 1.0.0 */
export const or =
  <A>(second: Predicate<A>) =>
  (first: Predicate<A>): Predicate<A> =>
  a =>
    first(a) || second(a)

/** @since 1.0.0 */
export const and =
  <A>(second: Predicate<A>) =>
  (first: Predicate<A>): Predicate<A> =>
  a =>
    first(a) && second(a)
