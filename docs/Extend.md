
# Extend







### Model

* [Extend](#extend)
* [Extend1](#extend1)
* [Extend2](#extend2)
* [Extend2C](#extend2c)
* [Extend3](#extend3)
* [Extend3C](#extend3c)
* [Extend4](#extend4)

## Model


### `Extend`




#### Signature

```typescript
export interface Extend<W> extends Functor<W> {
  readonly extend: <A, B>(wa: HKT<W, A>, f: (wa: HKT<W, A>) => B) => HKT<W, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Extend1`




#### Signature

```typescript
export interface Extend1<W extends URIS> extends Functor1<W> {
  readonly extend: <A, B>(wa: Kind<W, A>, f: (wa: Kind<W, A>) => B) => Kind<W, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Extend2`




#### Signature

```typescript
export interface Extend2<W extends URIS2> extends Functor2<W> {
  readonly extend: <E, A, B>(wa: Kind2<W, E, A>, f: (wa: Kind2<W, E, A>) => B) => Kind2<W, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Extend2C`




#### Signature

```typescript
export interface Extend2C<W extends URIS2, E> extends Functor2C<W, E> {
  readonly extend: <A, B>(wa: Kind2<W, E, A>, f: (wa: Kind2<W, E, A>) => B) => Kind2<W, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Extend3`




#### Signature

```typescript
export interface Extend3<W extends URIS3> extends Functor3<W> {
  readonly extend: <R, E, A, B>(wa: Kind3<W, R, E, A>, f: (wa: Kind3<W, R, E, A>) => B) => Kind3<W, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Extend3C`




#### Signature

```typescript
export interface Extend3C<W extends URIS3, E> extends Functor3C<W, E> {
  readonly extend: <R, A, B>(wa: Kind3<W, R, E, A>, f: (wa: Kind3<W, R, E, A>) => B) => Kind3<W, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Extend4`




#### Signature

```typescript
export interface Extend4<W extends URIS4> extends Functor4<W> {
  readonly extend: <S, R, E, A, B>(wa: Kind4<W, S, R, E, A>, f: (wa: Kind4<W, S, R, E, A>) => B) => Kind4<W, S, R, E, B>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti