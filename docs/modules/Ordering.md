
# Ordering







### Instances

* [Eq](#eq)
* [Monoid](#monoid)
* [Semigroup](#semigroup)

### Model

* [Ordering](#ordering)

### Pattern matching

* [match](#match)
* [matchW](#matchw)

### Utilities

* ~~[eqOrdering](#eqordering)~~ (deprecated)
* ~~[invert](#invert)~~ (deprecated)
* ~~[monoidOrdering](#monoidordering)~~ (deprecated)
* [reverse](#reverse)
* ~~[semigroupOrdering](#semigroupordering)~~ (deprecated)
* [sign](#sign)

## Instances


### `Eq`




#### Signature

```typescript
export declare const Eq: E.Eq<Ordering>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Monoid`




#### Signature

```typescript
export declare const Monoid: M.Monoid<Ordering>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Semigroup`




#### Signature

```typescript
export declare const Semigroup: S.Semigroup<Ordering>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Ordering`




#### Signature

```typescript
export type Ordering = -1 | 0 | 1
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Pattern matching


### `match`




#### Signature

```typescript
export declare const match: <A>(onLessThan: () => A, onEqual: () => A, onGreaterThan: () => A) => (o: Ordering) => A
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `matchW`

Less strict version of [`match`](#match).


The `W` suffix (short for **W**idening) means that the handler return types will be merged.




#### Signature

```typescript
export declare const matchW: <A, B, C>(
  onLessThan: () => A,
  onEqual: () => B,
  onGreaterThan: () => C,
) => (o: Ordering) => A | B | C
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`eqOrdering`~~

Use [`Eq`](#eq) instead




#### Signature

```typescript
export declare const eqOrdering: E.Eq<Ordering>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`invert`~~

Use [`reverse`](#reverse) instead.




#### Signature

```typescript
export declare const invert: (o: Ordering) => Ordering
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`monoidOrdering`~~

Use [`Monoid`](#monoid) instead




#### Signature

```typescript
export declare const monoidOrdering: M.Monoid<Ordering>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reverse`




#### Signature

```typescript
export declare const reverse: (o: Ordering) => Ordering
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`semigroupOrdering`~~

Use [`Semigroup`](#semigroup) instead




#### Signature

```typescript
export declare const semigroupOrdering: S.Semigroup<Ordering>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `sign`




#### Signature

```typescript
export declare const sign: (n: number) => Ordering
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti