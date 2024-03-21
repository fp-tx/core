
# Contravariant







### Model

* [Contravariant](#contravariant)
* [Contravariant1](#contravariant1)
* [Contravariant2](#contravariant2)
* [Contravariant2C](#contravariant2c)
* [Contravariant3](#contravariant3)
* [Contravariant3C](#contravariant3c)
* [Contravariant4](#contravariant4)

## Model


### `Contravariant`




#### Signature

```typescript
export interface Contravariant<F> {
  readonly contramap: <A, B>(fa: HKT<F, A>, f: (b: B) => A) => HKT<F, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Contravariant1`




#### Signature

```typescript
export interface Contravariant1<F extends URIS> {
  readonly contramap: <A, B>(fa: Kind<F, A>, f: (b: B) => A) => Kind<F, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Contravariant2`




#### Signature

```typescript
export interface Contravariant2<F extends URIS2> {
  readonly contramap: <E, A, B>(fa: Kind2<F, E, A>, f: (b: B) => A) => Kind2<F, E, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Contravariant2C`




#### Signature

```typescript
export interface Contravariant2C<F extends URIS2, E> {
  readonly _E: E
  readonly contramap: <A, B>(fa: Kind2<F, E, A>, f: (b: B) => A) => Kind2<F, E, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Contravariant3`




#### Signature

```typescript
export interface Contravariant3<F extends URIS3> {
  readonly contramap: <R, E, A, B>(fa: Kind3<F, R, E, A>, f: (b: B) => A) => Kind3<F, R, E, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Contravariant3C`




#### Signature

```typescript
export interface Contravariant3C<F extends URIS3, E> {
  readonly _E: E
  readonly contramap: <R, A, B>(fa: Kind3<F, R, E, A>, f: (b: B) => A) => Kind3<F, R, E, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Contravariant4`




#### Signature

```typescript
export interface Contravariant4<F extends URIS4> {
  readonly contramap: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, f: (b: B) => A) => Kind4<F, S, R, E, B>
  readonly URI: F
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti