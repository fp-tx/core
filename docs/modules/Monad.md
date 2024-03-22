
# Monad







### Model

* [Monad](#monad)
* [Monad1](#monad1)
* [Monad2](#monad2)
* [Monad2C](#monad2c)
* [Monad3](#monad3)
* [Monad3C](#monad3c)
* [Monad4](#monad4)

## Model


### `Monad`




#### Signature

```typescript
export interface Monad<F> extends Applicative<F>, Chain<F> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad1`




#### Signature

```typescript
export interface Monad1<F extends URIS> extends Applicative1<F>, Chain1<F> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad2`




#### Signature

```typescript
export interface Monad2<M extends URIS2> extends Applicative2<M>, Chain2<M> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad2C`




#### Signature

```typescript
export interface Monad2C<M extends URIS2, L> extends Applicative2C<M, L>, Chain2C<M, L> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad3`




#### Signature

```typescript
export interface Monad3<M extends URIS3> extends Applicative3<M>, Chain3<M> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad3C`




#### Signature

```typescript
export interface Monad3C<M extends URIS3, E> extends Applicative3C<M, E>, Chain3C<M, E> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monad4`




#### Signature

```typescript
export interface Monad4<M extends URIS4> extends Applicative4<M>, Chain4<M> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti