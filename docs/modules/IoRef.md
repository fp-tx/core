
# IoRef







### Constructors

* [newIORef](#newioref)

### Model

* [IORef](#ioref)

## Constructors


### `newIORef`




#### Signature

```typescript
export declare function newIORef<A>(a: A): IO<IORef<A>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `IORef`



#### Signature

```typescript
export declare class IORef<A>
```

```typescript
constructor(value: A);
```

#### Details

* Added in 0.1.0

#### Example

```typescript
import { flatMap } from '@fp-tx/core/IO'
import { newIORef } from '@fp-tx/core/IORef'

assert.strictEqual(flatMap(newIORef(1), ref => flatMap(ref.write(2), () => ref.read))(), 2)

```

#### License

* MIT – Copyright (c) 2017-present Giulio Canti

#### Properties and Methods


##### `modify` (method)

* Added in 0.1.0
```typescript
modify(f: (a: A) => A): IO<void>;
```


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

##### `read` (property)

* Added in 0.1.0
```typescript
readonly read: IO<A>;
```


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

##### `write` (method)

* Added in 0.1.0
```typescript
write(a: A): IO<void>;
```


#### License

* MIT – Copyright (c) 2017-present Giulio Canti