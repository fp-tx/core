
# Invariant







### Model

* [Invariant](#invariant)
* [Invariant1](#invariant1)
* [Invariant2](#invariant2)
* [Invariant2C](#invariant2c)
* [Invariant3](#invariant3)
* [Invariant3C](#invariant3c)
* [Invariant4](#invariant4)

## Model


### `Invariant`




#### Signature

```typescript
export interface Invariant<F> {
  readonly imap: <A, B>(fa: HKT<F, A>, f: (a: A) => B, g: (b: B) => A) => HKT<F, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Invariant1`




#### Signature

```typescript
export interface Invariant1<F extends URIS> {
  readonly imap: <A, B>(fa: Kind<F, A>, f: (a: A) => B, g: (b: B) => A) => Kind<F, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Invariant2`




#### Signature

```typescript
export interface Invariant2<F extends URIS2> {
  readonly imap: <E, A, B>(fa: Kind2<F, E, A>, f: (a: A) => B, g: (b: B) => A) => Kind2<F, E, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Invariant2C`




#### Signature

```typescript
export interface Invariant2C<F extends URIS2, E> {
  readonly _E: E
  readonly imap: <A, B>(fa: Kind2<F, E, A>, f: (a: A) => B, g: (b: B) => A) => Kind2<F, E, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Invariant3`




#### Signature

```typescript
export interface Invariant3<F extends URIS3> {
  readonly imap: <R, E, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => B, g: (b: B) => A) => Kind3<F, R, E, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Invariant3C`




#### Signature

```typescript
export interface Invariant3C<F extends URIS3, E> {
  readonly _E: E
  readonly imap: <R, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => B, g: (b: B) => A) => Kind3<F, R, E, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Invariant4`




#### Signature

```typescript
export interface Invariant4<F extends URIS4> {
  readonly imap: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, f: (a: A) => B, g: (b: B) => A) => Kind4<F, S, R, E, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti