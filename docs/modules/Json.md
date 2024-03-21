
# Json







### Utilities

* [Json](#json)
* [JsonArray](#jsonarray)
* [JsonRecord](#jsonrecord)
* [parse](#parse)
* [stringify](#stringify)

## Utilities


### `Json`




#### Signature

```typescript
export type Json = boolean | number | string | null | JsonArray | JsonRecord
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `JsonArray`




#### Signature

```typescript
export interface JsonArray extends ReadonlyArray<Json> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `JsonRecord`




#### Signature

```typescript
export interface JsonRecord {
  readonly [key: string]: Json
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `parse`

Converts a JavaScript Object Notation (JSON) string into a `Json` type.




#### Signature

```typescript
export declare const parse: (s: string) => Either<unknown, Json>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as J from '@fp-tx/core/Json'
import * as E from '@fp-tx/core/Either'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(pipe('{"a":1}', J.parse), E.right({ a: 1 }))
assert.deepStrictEqual(
  pipe('{"a":}', J.parse),
  E.left(new SyntaxError('Unexpected token } in JSON at position 5')),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `stringify`

Converts a JavaScript value to a JavaScript Object Notation (JSON) string.




#### Signature

```typescript
export declare const stringify: <A>(a: A) => Either<unknown, string>
```

#### Details

* Added in 1.0.0

#### Example

```typescript
import * as E from '@fp-tx/core/Either'
import * as J from '@fp-tx/core/Json'
import { pipe } from '@fp-tx/core/function'

assert.deepStrictEqual(J.stringify({ a: 1 }), E.right('{"a":1}'))
const circular: any = { ref: null }
circular.ref = circular
assert.deepStrictEqual(
  pipe(
    J.stringify(circular),
    E.mapLeft(e => e instanceof Error && e.message.includes('Converting circular structure to JSON')),
  ),
  E.left(true),
)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti