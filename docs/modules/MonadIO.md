
# MonadIO







### Model

* [MonadIO](#monadio)
* [MonadIO1](#monadio1)
* [MonadIO2](#monadio2)
* [MonadIO2C](#monadio2c)
* [MonadIO3](#monadio3)
* [MonadIO3C](#monadio3c)
* [MonadIO4](#monadio4)

## Model


### `MonadIO`




#### Signature

```typescript
export interface MonadIO<M> extends Monad<M>, FromIO<M> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadIO1`




#### Signature

```typescript
export interface MonadIO1<M extends URIS> extends Monad1<M>, FromIO1<M> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadIO2`




#### Signature

```typescript
export interface MonadIO2<M extends URIS2> extends Monad2<M>, FromIO2<M> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadIO2C`




#### Signature

```typescript
export interface MonadIO2C<M extends URIS2, E> extends Monad2C<M, E>, FromIO2C<M, E> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadIO3`




#### Signature

```typescript
export interface MonadIO3<M extends URIS3> extends Monad3<M>, FromIO3<M> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadIO3C`




#### Signature

```typescript
export interface MonadIO3C<M extends URIS3, E> extends Monad3C<M, E>, FromIO3C<M, E> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadIO4`




#### Signature

```typescript
export interface MonadIO4<M extends URIS4> extends Monad4<M>, FromIO4<M> {}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti