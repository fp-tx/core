
# Zero







### Do notation

* [guard](#guard)

### Model

* [Zero](#zero)
* [Zero1](#zero1)
* [Zero2](#zero2)
* [Zero2C](#zero2c)
* [Zero3](#zero3)
* [Zero3C](#zero3c)
* [Zero4](#zero4)

## Do notation


### `guard`




#### Signature

```typescript
export declare function guard<F extends URIS4>(
  F: Zero4<F>,
  P: Pointed4<F>,
): <S, R, E>(b: boolean) => Kind4<F, S, R, E, void>



export declare function guard<F extends URIS3>(F: Zero3<F>, P: Pointed3<F>): <R, E>(b: boolean) => Kind3<F, R, E, void>



export declare function guard<F extends URIS3, E>(
  F: Zero3C<F, E>,
  P: Pointed3C<F, E>,
): <R>(b: boolean) => Kind3<F, R, E, void>



export declare function guard<F extends URIS2>(F: Zero2<F>, P: Pointed2<F>): <E>(b: boolean) => Kind2<F, E, void>



export declare function guard<F extends URIS2, E>(
  F: Zero2C<F, E>,
  P: Pointed2C<F, E>,
): (b: boolean) => Kind2<F, E, void>



export declare function guard<F extends URIS>(F: Zero1<F>, P: Pointed1<F>): (b: boolean) => Kind<F, void>



export declare function guard<F>(F: Zero<F>, P: Pointed<F>): (b: boolean) => HKT<F, void>

```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Zero`




#### Signature

```typescript
export interface Zero<F> {
  readonly URI: F
  readonly zero: <A>() => HKT<F, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Zero1`




#### Signature

```typescript
export interface Zero1<F extends URIS> {
  readonly URI: F
  readonly zero: <A>() => Kind<F, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Zero2`




#### Signature

```typescript
export interface Zero2<F extends URIS2> {
  readonly URI: F
  readonly zero: <E, A>() => Kind2<F, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Zero2C`




#### Signature

```typescript
export interface Zero2C<F extends URIS2, E> {
  readonly _E: E
  readonly URI: F
  readonly zero: <A>() => Kind2<F, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Zero3`




#### Signature

```typescript
export interface Zero3<F extends URIS3> {
  readonly URI: F
  readonly zero: <R, E, A>() => Kind3<F, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Zero3C`




#### Signature

```typescript
export interface Zero3C<F extends URIS3, E> {
  readonly _E: E
  readonly URI: F
  readonly zero: <R, A>() => Kind3<F, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Zero4`




#### Signature

```typescript
export interface Zero4<F extends URIS4> {
  readonly URI: F
  readonly zero: <S, R, E, A>() => Kind4<F, S, R, E, A>
}
```

#### Details

* Added in 1.0.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti