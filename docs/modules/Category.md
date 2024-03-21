
# Category







### Model

* [Category](#category)
* [Category2](#category2)
* [Category3](#category3)
* [Category4](#category4)

## Model


### `Category`




#### Signature

```typescript
export interface Category<F> extends Semigroupoid<F> {
  readonly id: <A>() => HKT2<F, A, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Category2`




#### Signature

```typescript
export interface Category2<F extends URIS2> extends Semigroupoid2<F> {
  readonly id: <A>() => Kind2<F, A, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Category3`




#### Signature

```typescript
export interface Category3<F extends URIS3> extends Semigroupoid3<F> {
  readonly id: <R, A>() => Kind3<F, R, A, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Category4`




#### Signature

```typescript
export interface Category4<F extends URIS4> extends Semigroupoid4<F> {
  readonly id: <S, R, A>() => Kind4<F, S, R, A, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti