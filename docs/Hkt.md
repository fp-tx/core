
# Hkt







### Utilities

* [HKT](#hkt)
* [HKT2](#hkt2)
* [HKT3](#hkt3)
* [HKT4](#hkt4)
* [Kind](#kind)
* [Kind2](#kind2)
* [Kind3](#kind3)
* [Kind4](#kind4)
* [URIS](#uris)
* [URIS2](#uris2)
* [URIS3](#uris3)
* [URIS4](#uris4)
* [URItoKind](#uritokind)
* [URItoKind2](#uritokind2)
* [URItoKind3](#uritokind3)
* [URItoKind4](#uritokind4)

## Utilities


### `HKT`

`* -> *` constructors




#### Signature

```typescript
export interface HKT<URI, A> {
  readonly _A: A
  readonly _URI: URI
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `HKT2`

`* -> * -> *` constructors




#### Signature

```typescript
export interface HKT2<URI, E, A> extends HKT<URI, A> {
  readonly _E: E
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `HKT3`

`* -> * -> * -> *` constructors




#### Signature

```typescript
export interface HKT3<URI, R, E, A> extends HKT2<URI, E, A> {
  readonly _R: R
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `HKT4`

`* -> * -> * -> * -> *` constructors




#### Signature

```typescript
export interface HKT4<URI, S, R, E, A> extends HKT3<URI, R, E, A> {
  readonly _S: S
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Kind`

`* -> *` constructors




#### Signature

```typescript
export type Kind<URI extends URIS, A> = URI extends URIS ? URItoKind<A>[URI] : any
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Kind2`

`* -> * -> *` constructors




#### Signature

```typescript
export type Kind2<URI extends URIS2, E, A> = URI extends URIS2 ? URItoKind2<E, A>[URI] : any
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Kind3`

`* -> * -> * -> *` constructors




#### Signature

```typescript
export type Kind3<URI extends URIS3, R, E, A> = URI extends URIS3 ? URItoKind3<R, E, A>[URI] : any
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Kind4`

`* -> * -> * -> * -> *` constructors




#### Signature

```typescript
export type Kind4<URI extends URIS4, S, R, E, A> = URI extends URIS4 ? URItoKind4<S, R, E, A>[URI] : any
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URIS`

`* -> *` constructors




#### Signature

```typescript
export type URIS = keyof URItoKind<any>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URIS2`

`* -> * -> *` constructors




#### Signature

```typescript
export type URIS2 = keyof URItoKind2<any, any>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URIS3`

`* -> * -> * -> *` constructors




#### Signature

```typescript
export type URIS3 = keyof URItoKind3<any, any, any>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URIS4`

`* -> * -> * -> * -> *` constructors




#### Signature

```typescript
export type URIS4 = keyof URItoKind4<any, any, any, any>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URItoKind`

`* -> *` constructors




#### Signature

```typescript
export interface URItoKind<A> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URItoKind2`

`* -> * -> *` constructors




#### Signature

```typescript
export interface URItoKind2<E, A> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URItoKind3`

`* -> * -> * -> *` constructors




#### Signature

```typescript
export interface URItoKind3<R, E, A> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URItoKind4`

`* -> * -> * -> * -> *` constructors




#### Signature

```typescript
export interface URItoKind4<S, R, E, A> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti