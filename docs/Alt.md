
# Alt







### Model

* [Alt](#alt)
* [Alt1](#alt1)
* [Alt2](#alt2)
* [Alt2C](#alt2c)
* [Alt3](#alt3)
* [Alt3C](#alt3c)
* [Alt4](#alt4)

### Utilities

* [altAll](#altall)

## Model


### `Alt`




#### Signature

```typescript
export interface Alt<F> extends Functor<F> {
  readonly alt: <A>(fa: HKT<F, A>, that: LazyArg<HKT<F, A>>) => HKT<F, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alt1`




#### Signature

```typescript
export interface Alt1<F extends URIS> extends Functor1<F> {
  readonly alt: <A>(fa: Kind<F, A>, that: LazyArg<Kind<F, A>>) => Kind<F, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alt2`




#### Signature

```typescript
export interface Alt2<F extends URIS2> extends Functor2<F> {
  readonly alt: <E, A>(fa: Kind2<F, E, A>, that: LazyArg<Kind2<F, E, A>>) => Kind2<F, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alt2C`




#### Signature

```typescript
export interface Alt2C<F extends URIS2, E> extends Functor2C<F, E> {
  readonly alt: <A>(fa: Kind2<F, E, A>, that: LazyArg<Kind2<F, E, A>>) => Kind2<F, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alt3`




#### Signature

```typescript
export interface Alt3<F extends URIS3> extends Functor3<F> {
  readonly alt: <R, E, A>(fa: Kind3<F, R, E, A>, that: LazyArg<Kind3<F, R, E, A>>) => Kind3<F, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alt3C`




#### Signature

```typescript
export interface Alt3C<F extends URIS3, E> extends Functor3C<F, E> {
  readonly alt: <R, A>(fa: Kind3<F, R, E, A>, that: LazyArg<Kind3<F, R, E, A>>) => Kind3<F, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Alt4`




#### Signature

```typescript
export interface Alt4<F extends URIS4> extends Functor4<F> {
  readonly alt: <S, R, E, A>(fa: Kind4<F, S, R, E, A>, that: LazyArg<Kind4<F, S, R, E, A>>) => Kind4<F, S, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### `altAll`




#### Signature

```typescript
export declare function altAll<F extends URIS4>(
  F: Alt4<F>,
): <S, R, E, A>(startWith: Kind4<F, S, R, E, A>) => (as: ReadonlyArray<Kind4<F, S, R, E, A>>) => Kind4<F, S, R, E, A>



export declare function altAll<F extends URIS3>(
  F: Alt3<F>,
): <R, E, A>(startWith: Kind3<F, R, E, A>) => (as: ReadonlyArray<Kind3<F, R, E, A>>) => Kind3<F, R, E, A>



export declare function altAll<F extends URIS3, E>(
  F: Alt3C<F, E>,
): <R, A>(startWith: Kind3<F, R, E, A>) => (as: ReadonlyArray<Kind3<F, R, E, A>>) => Kind3<F, R, E, A>



export declare function altAll<F extends URIS2>(
  F: Alt2<F>,
): <E, A>(startWith: Kind2<F, E, A>) => (as: ReadonlyArray<Kind2<F, E, A>>) => Kind2<F, E, A>



export declare function altAll<F extends URIS2, E>(
  F: Alt2C<F, E>,
): <A>(startWith: Kind2<F, E, A>) => (as: ReadonlyArray<Kind2<F, E, A>>) => Kind2<F, E, A>



export declare function altAll<F extends URIS>(
  F: Alt1<F>,
): <A>(startWith: Kind<F, A>) => (as: ReadonlyArray<Kind<F, A>>) => Kind<F, A>



export declare function altAll<F>(F: Alt<F>): <A>(startWith: HKT<F, A>) => (as: ReadonlyArray<HKT<F, A>>) => HKT<F, A>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti