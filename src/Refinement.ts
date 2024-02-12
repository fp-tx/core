/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Either } from './Either'
import * as _ from './internal'
import { type Option } from './Option'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
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
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromOptionK = <A, B extends A>(getOption: (a: A) => Option<B>): Refinement<A, B> => {
  return (a: A): a is B => _.isSome(getOption(a))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Lifting
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const fromEitherK = <A, B extends A>(getEither: (a: A) => Either<unknown, B>): Refinement<A, B> => {
  return (a: A): a is B => _.isRight(getEither(a))
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Category: Constructors
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const id = <A>(): Refinement<A, A> => {
  return (_): _ is A => true
}

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const not =
  <A, B extends A>(refinement: Refinement<A, B>): Refinement<A, Exclude<A, B>> =>
  (a): a is Exclude<A, B> =>
    !refinement(a)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const or =
  <A, C extends A>(second: Refinement<A, C>) =>
  <B extends A>(first: Refinement<A, B>): Refinement<A, B | C> =>
  (a): a is B | C =>
    first(a) || second(a)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const and =
  <A, C extends A>(second: Refinement<A, C>) =>
  <B extends A>(first: Refinement<A, B>): Refinement<A, B & C> =>
  (a): a is B & C =>
    first(a) && second(a)

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const zero = <A, B extends A>(): Refinement<A, B> => {
  return (_): _ is B => false
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export const compose =
  <A, B extends A, C extends B>(bc: Refinement<B, C>) =>
  (ab: Refinement<A, B>): Refinement<A, C> => {
    return (i): i is C => ab(i) && bc(i)
  }
