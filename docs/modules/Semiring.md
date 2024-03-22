
# Semiring







### Model

* [Semiring](#semiring)

### Utilities

* ~~[getFunctionSemiring](#getfunctionsemiring)~~ (deprecated)

## Model


### `Semiring`




#### Signature

```typescript
export interface Semiring<A> {
  readonly add: (x: A, y: A) => A
  readonly mul: (x: A, y: A) => A
  readonly one: A
  readonly zero: A
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`getFunctionSemiring`~~

Use [`getSemiring`](./function#getsemiring) instead.




#### Signature

```typescript
export declare const getFunctionSemiring: <A, B>(S: Semiring<B>) => Semiring<(a: A) => B>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti