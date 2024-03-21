
# ValidationT







### Utilities

* ~~[ValidationM](#validationm)~~ (deprecated)
* ~~[ValidationM1](#validationm1)~~ (deprecated)
* ~~[ValidationM2](#validationm2)~~ (deprecated)
* ~~[ValidationT](#validationt)~~ (deprecated)
* ~~[ValidationT1](#validationt1)~~ (deprecated)
* ~~[ValidationT2](#validationt2)~~ (deprecated)
* ~~[getValidationM](#getvalidationm)~~ (deprecated)

## Utilities


### ~~`ValidationM`~~




#### Signature

```typescript
export interface ValidationM<M, E> extends ApplicativeCompositionHKT2C<M, E.URI, E> {
  readonly alt: <A>(fa: ValidationT<M, E, A>, that: LazyArg<ValidationT<M, E, A>>) => ValidationT<M, E, A>
  readonly chain: <A, B>(ma: ValidationT<M, E, A>, f: (a: A) => ValidationT<M, E, B>) => ValidationT<M, E, B>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ValidationM1`~~




#### Signature

```typescript
export interface ValidationM1<M extends URIS, E> extends ApplicativeComposition12C<M, E.URI, E> {
  readonly alt: <A>(fa: ValidationT1<M, E, A>, that: LazyArg<ValidationT1<M, E, A>>) => ValidationT1<M, E, A>
  readonly chain: <A, B>(ma: ValidationT1<M, E, A>, f: (a: A) => ValidationT1<M, E, B>) => ValidationT1<M, E, B>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ValidationM2`~~




#### Signature

```typescript
export interface ValidationM2<M extends URIS2, E> extends ApplicativeComposition22C<M, E.URI, E> {
  readonly alt: <R, A>(
    fa: ValidationT2<M, R, E, A>,
    that: LazyArg<ValidationT2<M, R, E, A>>,
  ) => ValidationT2<M, R, E, A>
  readonly chain: <R, A, B>(
    ma: ValidationT2<M, R, E, A>,
    f: (a: A) => ValidationT2<M, R, E, B>,
  ) => ValidationT2<M, R, E, B>
}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ValidationT`~~




#### Signature

```typescript
export interface ValidationT<M, E, A> extends HKT<M, Either<E, A>> {}
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ValidationT1`~~




#### Signature

```typescript
export type ValidationT1<M extends URIS, E, A> = Kind<M, Either<E, A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`ValidationT2`~~




#### Signature

```typescript
export type ValidationT2<M extends URIS2, R, E, A> = Kind2<M, R, Either<E, A>>
```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getValidationM`~~

Use `EitherT` instead.




#### Signature

```typescript
export declare function getValidationM<E, M extends URIS2>(S: Semigroup<E>, M: Monad2<M>): ValidationM2<M, E>



export declare function getValidationM<E, M extends URIS>(S: Semigroup<E>, M: Monad1<M>): ValidationM1<M, E>



export declare function getValidationM<E, M>(S: Semigroup<E>, M: Monad<M>): ValidationM<M, E>

```

#### Details

* Added in 1.0.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti