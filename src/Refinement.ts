/** @since 1.0.0 */
import { type Either } from './Either'
import * as _ from './internal'
import { type Option } from './Option'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/** @since 1.0.0 */
export interface Refinement<A, B extends A> {
  (a: A): a is B
}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Returns a `Refinement` from a `Option` returning function. This function ensures that a `Refinement` definition is
 * type-safe.
 *
 * @since 1.0.0
 * @category Lifting
 */
export const fromOptionK = <A, B extends A>(getOption: (a: A) => Option<B>): Refinement<A, B> => {
  return (a: A): a is B => _.isSome(getOption(a))
}

/**
 * @since 1.0.0
 * @category Lifting
 */
export const fromEitherK = <A, B extends A>(getEither: (a: A) => Either<unknown, B>): Refinement<A, B> => {
  return (a: A): a is B => _.isRight(getEither(a))
}

/**
 * @since 1.0.0
 * @category Constructors
 */
export const id = <A>(): Refinement<A, A> => {
  return (_): _ is A => true
}

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/** @since 1.0.0 */
export const not =
  <A, B extends A>(refinement: Refinement<A, B>): Refinement<A, Exclude<A, B>> =>
  (a): a is Exclude<A, B> =>
    !refinement(a)

/** @since 1.0.0 */
export const or =
  <A, C extends A>(second: Refinement<A, C>) =>
  <B extends A>(first: Refinement<A, B>): Refinement<A, B | C> =>
  (a): a is B | C =>
    first(a) || second(a)

/** @since 1.0.0 */
export const and =
  <A, C extends A>(second: Refinement<A, C>) =>
  <B extends A>(first: Refinement<A, B>): Refinement<A, B & C> =>
  (a): a is B & C =>
    first(a) && second(a)

/** @since 1.0.0 */
export const zero = <A, B extends A>(): Refinement<A, B> => {
  return (_): _ is B => false
}

/** @since 1.0.0 */
export const compose =
  <A, B extends A, C extends B>(bc: Refinement<B, C>) =>
  (ab: Refinement<A, B>): Refinement<A, C> => {
    return (i): i is C => ab(i) && bc(i)
  }
