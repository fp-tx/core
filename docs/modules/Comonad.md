
# Comonad







### Model

* [Comonad](#comonad)
* [Comonad1](#comonad1)
* [Comonad2](#comonad2)
* [Comonad2C](#comonad2c)
* [Comonad3](#comonad3)
* [Comonad3C](#comonad3c)
* [Comonad4](#comonad4)

## Model


### `Comonad`




#### Signature

```typescript
export interface Comonad<W> extends Extend<W> {
  readonly extract: <A>(wa: HKT<W, A>) => A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Comonad1`




#### Signature

```typescript
export interface Comonad1<W extends URIS> extends Extend1<W> {
  readonly extract: <A>(wa: Kind<W, A>) => A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Comonad2`




#### Signature

```typescript
export interface Comonad2<W extends URIS2> extends Extend2<W> {
  readonly extract: <E, A>(wa: Kind2<W, E, A>) => A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Comonad2C`




#### Signature

```typescript
export interface Comonad2C<W extends URIS2, E> extends Extend2C<W, E> {
  readonly extract: <A>(wa: Kind2<W, E, A>) => A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Comonad3`




#### Signature

```typescript
export interface Comonad3<W extends URIS3> extends Extend3<W> {
  readonly extract: <R, E, A>(wa: Kind3<W, R, E, A>) => A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Comonad3C`




#### Signature

```typescript
export interface Comonad3C<W extends URIS3, E> extends Extend3C<W, E> {
  readonly extract: <R, A>(wa: Kind3<W, R, E, A>) => A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Comonad4`




#### Signature

```typescript
export interface Comonad4<W extends URIS4> extends Extend4<W> {
  readonly extract: <S, R, E, A>(wa: Kind4<W, S, R, E, A>) => A
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti