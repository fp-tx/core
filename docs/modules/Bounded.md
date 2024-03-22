
# Bounded







### Model

* [Bounded](#bounded)

### Utils

* [clamp](#clamp)
* [reverse](#reverse)

### Utilities

* ~~[boundedNumber](#boundednumber)~~ (deprecated)

## Model


### `Bounded`




#### Signature

```typescript
export interface Bounded<A> extends Ord<A> {
  readonly bottom: A
  readonly top: A
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utils


### `clamp`

Clamp a value between bottom and top values.




#### Signature

```typescript
export declare const clamp: <A>(B: Bounded<A>) => (a: A) => A
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reverse`

Reverses the Ord of a bound and swaps top and bottom values.




#### Signature

```typescript
export declare const reverse: <A>(B: Bounded<A>) => Bounded<A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`boundedNumber`~~

Use [`Bounded`](./number#bounded) instead.




#### Signature

```typescript
export declare const boundedNumber: Bounded<number>
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti