/** @since 1.0.0 */
import { type Either, tryCatch } from './Either'
import { identity } from './function'

/** @since 1.0.0 */
export type Json = boolean | number | string | null | JsonArray | JsonRecord

/** @since 1.0.0 */
export interface JsonRecord {
  readonly [key: string]: Json
}

/** @since 1.0.0 */
export interface JsonArray extends ReadonlyArray<Json> {}

/**
 * Converts a JavaScript Object Notation (JSON) string into a `Json` type.
 *
 * @since 1.0.0
 * @example
 *   import * as J from 'fp-ts/Json'
 *   import * as E from 'fp-ts/Either'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(pipe('{"a":1}', J.parse), E.right({ a: 1 }))
 *   assert.deepStrictEqual(
 *     pipe('{"a":}', J.parse),
 *     E.left(new SyntaxError('Unexpected token } in JSON at position 5')),
 *   )
 */
export const parse = (s: string): Either<unknown, Json> => tryCatch(() => JSON.parse(s), identity)

/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @since 1.0.0
 * @example
 *   import * as E from 'fp-ts/Either'
 *   import * as J from 'fp-ts/Json'
 *   import { pipe } from 'fp-ts/function'
 *
 *   assert.deepStrictEqual(J.stringify({ a: 1 }), E.right('{"a":1}'))
 *   const circular: any = { ref: null }
 *   circular.ref = circular
 *   assert.deepStrictEqual(
 *     pipe(
 *       J.stringify(circular),
 *       E.mapLeft(e => e instanceof Error && e.message.includes('Converting circular structure to JSON')),
 *     ),
 *     E.left(true),
 *   )
 */
export const stringify = <A>(a: A): Either<unknown, string> =>
  tryCatch(() => {
    const s = JSON.stringify(a)
    if (typeof s !== 'string') {
      throw new Error('Converting unsupported structure to JSON')
    }
    return s
  }, identity)
