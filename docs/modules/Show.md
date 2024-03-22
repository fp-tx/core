
# Show







### Model

* [Show](#show)

### Utilities

* ~~[getStructShow](#getstructshow)~~ (deprecated)
* ~~[getTupleShow](#gettupleshow)~~ (deprecated)
* ~~[showBoolean](#showboolean)~~ (deprecated)
* ~~[showNumber](#shownumber)~~ (deprecated)
* ~~[showString](#showstring)~~ (deprecated)
* [struct](#struct)
* [tuple](#tuple)

## Model


### `Show`




#### Signature

```typescript
export interface Show<A> {
  readonly show: (a: A) => string
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`getStructShow`~~

Use [`struct`](#struct) instead.




#### Signature

```typescript
export declare const getStructShow: <O extends ReadonlyRecord<string, any>>(shows: {
  [K in keyof O]: Show<O[K]>
}) => Show<O>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getTupleShow`~~

Use [`tuple`](#tuple) instead.




#### Signature

```typescript
export declare const getTupleShow: <T extends ReadonlyArray<Show<any>>>(
  ...shows: T
) => Show<{
  [K in keyof T]: T[K] extends Show<infer A> ? A : never
}>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`showBoolean`~~

Use [`Show`](./boolean#show) instead.




#### Signature

```typescript
export declare const showBoolean: Show<boolean>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`showNumber`~~

Use [`Show`](./number#show) instead.




#### Signature

```typescript
export declare const showNumber: Show<number>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`showString`~~

Use [`Show`](./string#show) instead.




#### Signature

```typescript
export declare const showString: Show<string>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `struct`




#### Signature

```typescript
export declare const struct: <A>(shows: { [K in keyof A]: Show<A[K]> }) => Show<{ readonly [K_1 in keyof A]: A[K_1] }>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `tuple`




#### Signature

```typescript
export declare const tuple: <A extends readonly unknown[]>(
  ...shows: { [K in keyof A]: Show<A[K]> }
) => Show<Readonly<A>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti