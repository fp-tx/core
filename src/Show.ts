/**
 * The `Show` type class represents those types which can be converted into a human-readable `string` representation.
 *
 * While not required, it is recommended that for any expression `x`, the string `show(x)` be executable TypeScript code
 * which evaluates to the same value as the expression `x`.
 *
 * @meta
 * {@since 0.1.0}
 * @packageDocumentation
 */
import * as _ from './internal'
import { type ReadonlyRecord } from './ReadonlyRecord'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@category Model}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export interface Show<A> {
  readonly show: (a: A) => string
}

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const struct = <A>(shows: { [K in keyof A]: Show<A[K]> }): Show<{ readonly [K in keyof A]: A[K] }> => ({
  show: a => {
    let s = '{'
    for (const k in shows) {
      if (_.has.call(shows, k)) {
        s += ` ${k}: ${shows[k].show(a[k])},`
      }
    }
    if (s.length > 1) {
      s = s.slice(0, -1) + ' '
    }
    s += '}'
    return s
  },
})

/**
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const tuple = <A extends ReadonlyArray<unknown>>(
  ...shows: { [K in keyof A]: Show<A[K]> }
): Show<Readonly<A>> => ({
  show: t => `[${t.map((a, i) => shows[i].show(a)).join(', ')}]`,
})

// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`tuple`](#tuple) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getTupleShow: <T extends ReadonlyArray<Show<any>>>(
  ...shows: T
) => Show<{ [K in keyof T]: T[K] extends Show<infer A> ? A : never }> = tuple

/**
 * Use [`struct`](#struct) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const getStructShow: <O extends ReadonlyRecord<string, any>>(shows: { [K in keyof O]: Show<O[K]> }) => Show<O> =
  struct

/**
 * Use [`Show`](./boolean#show) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const showBoolean: Show<boolean> = {
  show: a => JSON.stringify(a),
}

/**
 * Use [`Show`](./string#show) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const showString: Show<string> = {
  show: a => JSON.stringify(a),
}

/**
 * Use [`Show`](./number#show) instead.
 *
 * @deprecated Zone of Death
 * @meta
 * {@since 0.1.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */
export const showNumber: Show<number> = {
  show: a => JSON.stringify(a),
}
