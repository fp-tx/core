/** @since 1.0.0 */
import * as _ from './internal'
import { type Semigroup } from './Semigroup'

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * Return a semigroup which works like `Object.assign`.
 *
 * @since 1.0.0
 * @category Instances
 * @example
 *   import { getAssignSemigroup } from 'fp-ts/struct'
 *
 *   interface Person {
 *     readonly name: string
 *     readonly age: number
 *   }
 *
 *   const S = getAssignSemigroup<Person>()
 *   assert.deepStrictEqual(S.concat({ name: 'name', age: 23 }, { name: 'name', age: 24 }), { name: 'name', age: 24 })
 */
export const getAssignSemigroup = <A extends object = never>(): Semigroup<A> => ({
  concat: (first, second) => Object.assign({}, first, second),
})

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Creates a new object by recursively evolving a shallow copy of `a`, according to the `transformation` functions.
 *
 * @since 1.0.0
 * @example
 *   import { pipe } from 'fp-ts/function'
 *   import { evolve } from 'fp-ts/struct'
 *
 *   assert.deepStrictEqual(
 *     pipe(
 *       { a: 'a', b: 1 },
 *       evolve({
 *         a: a => a.length,
 *         b: b => b * 2,
 *       }),
 *     ),
 *     { a: 1, b: 2 },
 *   )
 */
export const evolve =
  <A, F extends { [K in keyof A]: (a: A[K]) => unknown }>(transformations: F) =>
  (a: A): { [K in keyof F]: ReturnType<F[K]> } => {
    const out: Record<string, unknown> = {}
    for (const k in a) {
      if (_.has.call(a, k)) {
        out[k] = transformations[k](a[k])
      }
    }
    return out as any
  }
