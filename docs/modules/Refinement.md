
# Refinement







### Constructors

* [id](#id)

### Lifting

* [fromEitherK](#fromeitherk)
* [fromOptionK](#fromoptionk)

### Utilities

* [Refinement](#refinement)
* [and](#and)
* [compose](#compose)
* [not](#not)
* [or](#or)
* [zero](#zero)

## Constructors


### `id`




#### Signature

```typescript
export declare const id: <A>() => Refinement<A, A>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Lifting


### `fromEitherK`




#### Signature

```typescript
export declare const fromEitherK: <A, B extends A>(getEither: (a: A) => Either<unknown, B>) => Refinement<A, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `fromOptionK`

Returns a `Refinement` from a `Option` returning function. This function ensures that a `Refinement` definition is type-safe.




#### Signature

```typescript
export declare const fromOptionK: <A, B extends A>(getOption: (a: A) => Option<B>) => Refinement<A, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `Refinement`




#### Signature

```typescript
export interface Refinement<A, B extends A> {
  (a: A): a is B
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `and`




#### Signature

```typescript
export declare const and: <A, C extends A>(
  second: Refinement<A, C>,
) => <B extends A>(first: Refinement<A, B>) => Refinement<A, B & C>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `compose`




#### Signature

```typescript
export declare const compose: <A, B extends A, C extends B>(
  bc: Refinement<B, C>,
) => (ab: Refinement<A, B>) => Refinement<A, C>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `not`




#### Signature

```typescript
export declare const not: <A, B extends A>(refinement: Refinement<A, B>) => Refinement<A, Exclude<A, B>>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `or`




#### Signature

```typescript
export declare const or: <A, C extends A>(
  second: Refinement<A, C>,
) => <B extends A>(first: Refinement<A, B>) => Refinement<A, C | B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `zero`




#### Signature

```typescript
export declare const zero: <A, B extends A>() => Refinement<A, B>
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti