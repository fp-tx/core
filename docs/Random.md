
# Random







### Utilities

* [random](#random)
* [randomBool](#randombool)
* [randomElem](#randomelem)
* [randomInt](#randomint)
* [randomRange](#randomrange)

## Utilities


### `random`

Returns a random number between 0 (inclusive) and 1 (exclusive). This is a direct wrapper around JavaScript's `Math.random()`.




#### Signature

```typescript
export declare const random: IO<number>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `randomBool`

Returns a random boolean value with an equal chance of being `true` or `false`




#### Signature

```typescript
export declare const randomBool: IO<boolean>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `randomElem`

Returns a random element of a `ReadonlyNonEmptyArray`.




#### Signature

```typescript
export declare const randomElem: <A>(as: ReadonlyNonEmptyArray<A>) => IO<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `randomInt`

Takes a range specified by `low` (the first argument) and `high` (the second), and returns a random integer uniformly distributed in the closed interval `[low, high]`. It is unspecified what happens if `low > high`, or if either of `low` or `high` is not an integer.




#### Signature

```typescript
export declare function randomInt(low: number, high: number): IO<number>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `randomRange`

Returns a random number between a minimum value (inclusive) and a maximum value (exclusive). It is unspecified what happens if `maximum < minimum`.




#### Signature

```typescript
export declare function randomRange(min: number, max: number): IO<number>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti