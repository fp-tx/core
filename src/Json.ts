/**
 * @remarks
 * Added in 1.0.0
 * @packageDocumentation
 */
import { type Either, tryCatch } from './Either'
import { identity } from './function'

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export type Json = boolean | number | string | null | JsonArray | JsonRecord

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface JsonRecord {
  readonly [key: string]: Json
}

/**
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @public
 */
export interface JsonArray extends ReadonlyArray<Json> {}

/**
 * Converts a JavaScript Object Notation (JSON) string into a `Json` type.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import * as J from '@fp-tx/core/Json'
 * import * as E from '@fp-tx/core/Either'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(pipe('{"a":1}', J.parse), E.right({ a: 1 }))
 * assert.deepStrictEqual(
 *   pipe('{"a":}', J.parse),
 *   E.left(new SyntaxError('Unexpected token } in JSON at position 5')),
 * )
 * ```
 *
 * @public
 */
export const parse = (s: string): Either<unknown, Json> => tryCatch(() => JSON.parse(s), identity)

/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @remarks
 * Added in 1.0.0
 * @remarks
 * Original License: MIT – Copyright (c) 2017-present Giulio Canti
 * @example
 *
 * ```typescript
 * import * as E from '@fp-tx/core/Either'
 * import * as J from '@fp-tx/core/Json'
 * import { pipe } from '@fp-tx/core/function'
 *
 * assert.deepStrictEqual(J.stringify({ a: 1 }), E.right('{"a":1}'))
 * const circular: any = { ref: null }
 * circular.ref = circular
 * assert.deepStrictEqual(
 *   pipe(
 *     J.stringify(circular),
 *     E.mapLeft(e => e instanceof Error && e.message.includes('Converting circular structure to JSON')),
 *   ),
 *   E.left(true),
 * )
 * ```
 *
 * @public
 */
export const stringify = <A>(a: A): Either<unknown, string> =>
  tryCatch(() => {
    const s = JSON.stringify(a)
    if (typeof s !== 'string') {
      throw new Error('Converting unsupported structure to JSON')
    }
    return s
  }, identity)
