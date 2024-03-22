
# NaturalTransformation







### Utilities

* [NaturalTransformation](#naturaltransformation)
* [NaturalTransformation11](#naturaltransformation11)
* [NaturalTransformation12](#naturaltransformation12)
* [NaturalTransformation12C](#naturaltransformation12c)
* [NaturalTransformation13](#naturaltransformation13)
* [NaturalTransformation13C](#naturaltransformation13c)
* [NaturalTransformation14](#naturaltransformation14)
* [NaturalTransformation14C](#naturaltransformation14c)
* [NaturalTransformation21](#naturaltransformation21)
* [NaturalTransformation22](#naturaltransformation22)
* [NaturalTransformation22C](#naturaltransformation22c)
* [NaturalTransformation23](#naturaltransformation23)
* [NaturalTransformation23C](#naturaltransformation23c)
* [NaturalTransformation23R](#naturaltransformation23r)
* [NaturalTransformation23RC](#naturaltransformation23rc)
* [NaturalTransformation24](#naturaltransformation24)
* [NaturalTransformation24R](#naturaltransformation24r)
* [NaturalTransformation24S](#naturaltransformation24s)
* [NaturalTransformation33](#naturaltransformation33)
* [NaturalTransformation34](#naturaltransformation34)

## Utilities


### `NaturalTransformation`




#### Signature

```typescript
export interface NaturalTransformation<F, G> {
  <A>(fa: HKT<F, A>): HKT<G, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation11`




#### Signature

```typescript
export interface NaturalTransformation11<F extends URIS, G extends URIS> {
  <A>(fa: Kind<F, A>): Kind<G, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation12`




#### Signature

```typescript
export interface NaturalTransformation12<F extends URIS, G extends URIS2> {
  <A, E>(fa: Kind<F, A>): Kind2<G, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation12C`




#### Signature

```typescript
export interface NaturalTransformation12C<F extends URIS, G extends URIS2, E> {
  <A>(fa: Kind<F, A>): Kind2<G, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation13`




#### Signature

```typescript
export interface NaturalTransformation13<F extends URIS, G extends URIS3> {
  <A, R, E>(fa: Kind<F, A>): Kind3<G, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation13C`




#### Signature

```typescript
export interface NaturalTransformation13C<F extends URIS, G extends URIS3, E> {
  <A, R>(fa: Kind<F, A>): Kind3<G, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation14`




#### Signature

```typescript
export interface NaturalTransformation14<F extends URIS, G extends URIS4> {
  <A, S, R, E>(fa: Kind<F, A>): Kind4<G, S, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation14C`




#### Signature

```typescript
export interface NaturalTransformation14C<F extends URIS, G extends URIS4, E> {
  <A, S, R>(fa: Kind<F, A>): Kind4<G, S, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation21`




#### Signature

```typescript
export interface NaturalTransformation21<F extends URIS2, G extends URIS> {
  <A>(fa: Kind2<F, unknown, A>): Kind<G, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation22`




#### Signature

```typescript
export interface NaturalTransformation22<F extends URIS2, G extends URIS2> {
  <E, A>(fa: Kind2<F, E, A>): Kind2<G, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation22C`




#### Signature

```typescript
export interface NaturalTransformation22C<F extends URIS2, G extends URIS2, E> {
  <A>(fa: Kind2<F, E, A>): Kind2<G, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation23`




#### Signature

```typescript
export interface NaturalTransformation23<F extends URIS2, G extends URIS3> {
  <E, A, R>(fa: Kind2<F, E, A>): Kind3<G, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation23C`




#### Signature

```typescript
export interface NaturalTransformation23C<F extends URIS2, G extends URIS3, E> {
  <A, R>(fa: Kind2<F, E, A>): Kind3<G, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation23R`




#### Signature

```typescript
export interface NaturalTransformation23R<F extends URIS2, G extends URIS3> {
  <R, A, E>(fa: Kind2<F, R, A>): Kind3<G, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation23RC`




#### Signature

```typescript
export interface NaturalTransformation23RC<F extends URIS2, G extends URIS3, E> {
  <R, A>(fa: Kind2<F, R, A>): Kind3<G, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation24`




#### Signature

```typescript
export interface NaturalTransformation24<F extends URIS2, G extends URIS4> {
  <E, A, S, R>(fa: Kind2<F, E, A>): Kind4<G, S, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation24R`




#### Signature

```typescript
export interface NaturalTransformation24R<F extends URIS2, G extends URIS4> {
  <R, A, S, E>(fa: Kind2<F, R, A>): Kind4<G, S, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation24S`




#### Signature

```typescript
export interface NaturalTransformation24S<F extends URIS2, G extends URIS4> {
  <S, A, R, E>(fa: Kind2<F, S, A>): Kind4<G, S, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation33`




#### Signature

```typescript
export interface NaturalTransformation33<F extends URIS3, G extends URIS3> {
  <R, E, A>(fa: Kind3<F, R, E, A>): Kind3<G, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `NaturalTransformation34`




#### Signature

```typescript
export interface NaturalTransformation34<F extends URIS3, G extends URIS4> {
  <R, E, A, S>(fa: Kind3<F, R, E, A>): Kind4<G, S, R, E, A>
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti