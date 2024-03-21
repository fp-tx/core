
# MonadTask







### Model

* [MonadTask](#monadtask)
* [MonadTask1](#monadtask1)
* [MonadTask2](#monadtask2)
* [MonadTask2C](#monadtask2c)
* [MonadTask3](#monadtask3)
* [MonadTask3C](#monadtask3c)
* [MonadTask4](#monadtask4)

## Model


### `MonadTask`




#### Signature

```typescript
export interface MonadTask<M> extends MonadIO<M>, FromTask<M> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadTask1`




#### Signature

```typescript
export interface MonadTask1<M extends URIS> extends MonadIO1<M>, FromTask1<M> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadTask2`




#### Signature

```typescript
export interface MonadTask2<M extends URIS2> extends MonadIO2<M>, FromTask2<M> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadTask2C`




#### Signature

```typescript
export interface MonadTask2C<M extends URIS2, E> extends MonadIO2C<M, E>, FromTask2C<M, E> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadTask3`




#### Signature

```typescript
export interface MonadTask3<M extends URIS3> extends MonadIO3<M>, FromTask3<M> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadTask3C`




#### Signature

```typescript
export interface MonadTask3C<M extends URIS3, E> extends MonadIO3C<M, E>, FromTask3C<M, E> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `MonadTask4`




#### Signature

```typescript
export interface MonadTask4<M extends URIS4> extends MonadIO4<M>, FromTask4<M> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti