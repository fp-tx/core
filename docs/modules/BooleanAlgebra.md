
# BooleanAlgebra







### Instances

* [booleanAlgebraVoid](#booleanalgebravoid)

### Model

* [BooleanAlgebra](#booleanalgebra)

### Utilities

* ~~[booleanAlgebraBoolean](#booleanalgebraboolean)~~ (deprecated)
* ~~[getDualBooleanAlgebra](#getdualbooleanalgebra)~~ (deprecated)
* ~~[getFunctionBooleanAlgebra](#getfunctionbooleanalgebra)~~ (deprecated)
* [reverse](#reverse)

## Instances


### `booleanAlgebraVoid`




#### Signature

```typescript
export declare const booleanAlgebraVoid: BooleanAlgebra<void>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `BooleanAlgebra`




#### Signature

```typescript
export interface BooleanAlgebra<A> extends HeytingAlgebra<A> {}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`booleanAlgebraBoolean`~~

Use [`BooleanAlgebra`](./boolean.ts.html#booleanalgebra) instead.




#### Signature

```typescript
export declare const booleanAlgebraBoolean: BooleanAlgebra<boolean>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getDualBooleanAlgebra`~~

Use [`reverse`](#reverse) instead.




#### Signature

```typescript
export declare const getDualBooleanAlgebra: <A>(B: BooleanAlgebra<A>) => BooleanAlgebra<A>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getFunctionBooleanAlgebra`~~

Use [`getBooleanAlgebra`](./function.ts.html#getbooleanalgebra) instead.




#### Signature

```typescript
export declare const getFunctionBooleanAlgebra: <B>(
  B: BooleanAlgebra<B>,
) => <A = never>() => BooleanAlgebra<(a: A) => B>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `reverse`

Every boolean algebras has a dual algebra, which involves reversing one/zero as well as join/meet.




#### Signature

```typescript
export declare const reverse: <A>(B: BooleanAlgebra<A>) => BooleanAlgebra<A>
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti