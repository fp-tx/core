
# Predicate







### Instances

* [Contravariant](#contravariant)
* [getMonoidAll](#getmonoidall)
* [getMonoidAny](#getmonoidany)
* [getSemigroupAll](#getsemigroupall)
* [getSemigroupAny](#getsemigroupany)

### Type lambdas

* [URI](#uri)
* [URI](#uri)

### Utilities

* [Predicate](#predicate)
* [and](#and)
* [contramap](#contramap)
* [not](#not)
* [or](#or)

## Instances


### `Contravariant`




#### Signature

```typescript
export declare const Contravariant: Contravariant1<URI>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonoidAll`




#### Signature

```typescript
export declare const getMonoidAll: <A = never>() => Monoid<Predicate<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getMonoidAny`




#### Signature

```typescript
export declare const getMonoidAny: <A = never>() => Monoid<Predicate<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroupAll`




#### Signature

```typescript
export declare const getSemigroupAll: <A = never>() => Semigroup<Predicate<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `getSemigroupAny`




#### Signature

```typescript
export declare const getSemigroupAny: <A = never>() => Semigroup<Predicate<A>>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Type lambdas


### `URI`




#### Signature

```typescript
export type URI = typeof URI
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `URI`




#### Signature

```typescript
export declare const URI = 'Predicate'
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `Predicate`




#### Signature

```typescript
export interface Predicate<A> {
  (a: A): boolean
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `and`




#### Signature

```typescript
export declare const and: <A>(second: Predicate<A>) => (first: Predicate<A>) => Predicate<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `contramap`




#### Signature

```typescript
export declare const contramap: <B, A>(f: (b: B) => A) => (predicate: Predicate<A>) => Predicate<B>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `not`




#### Signature

```typescript
export declare const not: <A>(predicate: Predicate<A>) => Predicate<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `or`




#### Signature

```typescript
export declare const or: <A>(second: Predicate<A>) => (first: Predicate<A>) => Predicate<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti