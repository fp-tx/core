/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { pipe } from './function'
import { type IO, map } from './IO'
import { type ReadonlyNonEmptyArray } from './ReadonlyNonEmptyArray'

/**
 * Returns a random number between 0 (inclusive) and 1 (exclusive). This is a direct wrapper around JavaScript's
 * `Math.random()`.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const random: IO<number> = () => Math.random()

/**
 * Takes a range specified by `low` (the first argument) and `high` (the second), and returns a random integer uniformly
 * distributed in the closed interval `[low, high]`. It is unspecified what happens if `low > high`, or if either of
 * `low` or `high` is not an integer.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function randomInt(low: number, high: number): IO<number> {
  return pipe(
    random,
    map(n => Math.floor((high - low + 1) * n + low)),
  )
}

/**
 * Returns a random number between a minimum value (inclusive) and a maximum value (exclusive). It is unspecified what
 * happens if `maximum < minimum`.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export function randomRange(min: number, max: number): IO<number> {
  return pipe(
    random,
    map(n => (max - min) * n + min),
  )
}

/**
 * Returns a random boolean value with an equal chance of being `true` or `false`
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const randomBool: IO<boolean> = /*#__PURE__*/ pipe(
  random,
  map(n => n < 0.5),
)

/**
 * Returns a random element of a `ReadonlyNonEmptyArray`.
 *
 * @remarks
 * Added in 1.0.0
 * @public
 */
export const randomElem = <A>(as: ReadonlyNonEmptyArray<A>): IO<A> =>
  pipe(
    randomInt(0, as.length - 1),
    map(i => as[i]),
  )
