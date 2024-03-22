
# Functor







### Mapping

* [flap](#flap)

### Model

* [Functor](#functor)
* [Functor1](#functor1)
* [Functor2](#functor2)
* [Functor2C](#functor2c)
* [Functor3](#functor3)
* [Functor3C](#functor3c)
* [Functor4](#functor4)

### Utilities

* ~~[FunctorComposition](#functorcomposition)~~ (deprecated)
* ~~[FunctorComposition11](#functorcomposition11)~~ (deprecated)
* ~~[FunctorComposition12](#functorcomposition12)~~ (deprecated)
* ~~[FunctorComposition12C](#functorcomposition12c)~~ (deprecated)
* ~~[FunctorComposition21](#functorcomposition21)~~ (deprecated)
* ~~[FunctorComposition22](#functorcomposition22)~~ (deprecated)
* ~~[FunctorComposition22C](#functorcomposition22c)~~ (deprecated)
* ~~[FunctorComposition23](#functorcomposition23)~~ (deprecated)
* ~~[FunctorComposition23C](#functorcomposition23c)~~ (deprecated)
* ~~[FunctorComposition2C1](#functorcomposition2c1)~~ (deprecated)
* ~~[FunctorCompositionHKT1](#functorcompositionhkt1)~~ (deprecated)
* ~~[FunctorCompositionHKT2](#functorcompositionhkt2)~~ (deprecated)
* ~~[FunctorCompositionHKT2C](#functorcompositionhkt2c)~~ (deprecated)
* [bindTo](#bindto)
* ~~[getFunctorComposition](#getfunctorcomposition)~~ (deprecated)
* [let](#let)
* [map](#map)

## Mapping


### `flap`




#### Signature

```typescript
export declare function flap<F extends URIS4>(
  F: Functor4<F>,
): <A>(a: A) => <S, R, E, B>(fab: Kind4<F, S, R, E, (a: A) => B>) => Kind4<F, S, R, E, B>



export declare function flap<F extends URIS3>(
  F: Functor3<F>,
): <A>(a: A) => <R, E, B>(fab: Kind3<F, R, E, (a: A) => B>) => Kind3<F, R, E, B>



export declare function flap<F extends URIS2>(
  F: Functor2<F>,
): <A>(a: A) => <E, B>(fab: Kind2<F, E, (a: A) => B>) => Kind2<F, E, B>



export declare function flap<F extends URIS>(F: Functor1<F>): <A>(a: A) => <B>(fab: Kind<F, (a: A) => B>) => Kind<F, B>



export declare function flap<F>(F: Functor<F>): <A>(a: A) => <B>(fab: HKT<F, (a: A) => B>) => HKT<F, B>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Model


### `Functor`




#### Signature

```typescript
export interface Functor<F> {
  readonly map: <A, B>(fa: HKT<F, A>, f: (a: A) => B) => HKT<F, B>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor1`




#### Signature

```typescript
export interface Functor1<F extends URIS> {
  readonly map: <A, B>(fa: Kind<F, A>, f: (a: A) => B) => Kind<F, B>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor2`




#### Signature

```typescript
export interface Functor2<F extends URIS2> {
  readonly map: <E, A, B>(fa: Kind2<F, E, A>, f: (a: A) => B) => Kind2<F, E, B>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor2C`




#### Signature

```typescript
export interface Functor2C<F extends URIS2, E> {
  readonly _E: E
  readonly map: <A, B>(fa: Kind2<F, E, A>, f: (a: A) => B) => Kind2<F, E, B>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor3`




#### Signature

```typescript
export interface Functor3<F extends URIS3> {
  readonly map: <R, E, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => B) => Kind3<F, R, E, B>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor3C`




#### Signature

```typescript
export interface Functor3C<F extends URIS3, E> {
  readonly _E: E
  readonly map: <R, A, B>(fa: Kind3<F, R, E, A>, f: (a: A) => B) => Kind3<F, R, E, B>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `Functor4`




#### Signature

```typescript
export interface Functor4<F extends URIS4> {
  readonly map: <S, R, E, A, B>(fa: Kind4<F, S, R, E, A>, f: (a: A) => B) => Kind4<F, S, R, E, B>
  readonly URI: F
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

## Utilities


### ~~`FunctorComposition`~~




#### Signature

```typescript
export interface FunctorComposition<F, G> {
  readonly map: <A, B>(fa: HKT<F, HKT<G, A>>, f: (a: A) => B) => HKT<F, HKT<G, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorComposition11`~~




#### Signature

```typescript
export interface FunctorComposition11<F extends URIS, G extends URIS> {
  readonly map: <A, B>(fa: Kind<F, Kind<G, A>>, f: (a: A) => B) => Kind<F, Kind<G, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorComposition12`~~




#### Signature

```typescript
export interface FunctorComposition12<F extends URIS, G extends URIS2> {
  readonly map: <E, A, B>(fa: Kind<F, Kind2<G, E, A>>, f: (a: A) => B) => Kind<F, Kind2<G, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorComposition12C`~~




#### Signature

```typescript
export interface FunctorComposition12C<F extends URIS, G extends URIS2, E> {
  readonly map: <A, B>(fa: Kind<F, Kind2<G, E, A>>, f: (a: A) => B) => Kind<F, Kind2<G, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorComposition21`~~




#### Signature

```typescript
export interface FunctorComposition21<F extends URIS2, G extends URIS> {
  readonly map: <E, A, B>(fa: Kind2<F, E, Kind<G, A>>, f: (a: A) => B) => Kind2<F, E, Kind<G, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorComposition22`~~




#### Signature

```typescript
export interface FunctorComposition22<F extends URIS2, G extends URIS2> {
  readonly map: <FE, GE, A, B>(fa: Kind2<F, FE, Kind2<G, GE, A>>, f: (a: A) => B) => Kind2<F, FE, Kind2<G, GE, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorComposition22C`~~




#### Signature

```typescript
export interface FunctorComposition22C<F extends URIS2, G extends URIS2, E> {
  readonly map: <FE, A, B>(fa: Kind2<F, FE, Kind2<G, E, A>>, f: (a: A) => B) => Kind2<F, FE, Kind2<G, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorComposition23`~~




#### Signature

```typescript
export interface FunctorComposition23<F extends URIS2, G extends URIS3> {
  readonly map: <FE, R, E, A, B>(fa: Kind2<F, FE, Kind3<G, R, E, A>>, f: (a: A) => B) => Kind2<F, FE, Kind3<G, R, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorComposition23C`~~




#### Signature

```typescript
export interface FunctorComposition23C<F extends URIS2, G extends URIS3, E> {
  readonly map: <FE, R, A, B>(fa: Kind2<F, FE, Kind3<G, R, E, A>>, f: (a: A) => B) => Kind2<F, FE, Kind3<G, R, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorComposition2C1`~~




#### Signature

```typescript
export interface FunctorComposition2C1<F extends URIS2, G extends URIS, E> {
  readonly map: <A, B>(fa: Kind2<F, E, Kind<G, A>>, f: (a: A) => B) => Kind2<F, E, Kind<G, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorCompositionHKT1`~~




#### Signature

```typescript
export interface FunctorCompositionHKT1<F, G extends URIS> {
  readonly map: <A, B>(fa: HKT<F, Kind<G, A>>, f: (a: A) => B) => HKT<F, Kind<G, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorCompositionHKT2`~~




#### Signature

```typescript
export interface FunctorCompositionHKT2<F, G extends URIS2> {
  readonly map: <E, A, B>(fa: HKT<F, Kind2<G, E, A>>, f: (a: A) => B) => HKT<F, Kind2<G, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`FunctorCompositionHKT2C`~~




#### Signature

```typescript
export interface FunctorCompositionHKT2C<F, G extends URIS2, E> {
  readonly map: <A, B>(fa: HKT<F, Kind2<G, E, A>>, f: (a: A) => B) => HKT<F, Kind2<G, E, B>>
}
```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `bindTo`




#### Signature

```typescript
export declare function bindTo<F extends URIS4>(
  F: Functor4<F>,
): <N extends string>(
  name: N,
) => <S, R, E, A>(
  fa: Kind4<F, S, R, E, A>,
) => Kind4<
  F,
  S,
  R,
  E,
  {
    readonly [K in N]: A
  }
>



export declare function bindTo<F extends URIS3>(
  F: Functor3<F>,
): <N extends string>(
  name: N,
) => <R, E, A>(
  fa: Kind3<F, R, E, A>,
) => Kind3<
  F,
  R,
  E,
  {
    readonly [K in N]: A
  }
>



export declare function bindTo<F extends URIS3, E>(
  F: Functor3C<F, E>,
): <N extends string>(
  name: N,
) => <R, A>(
  fa: Kind3<F, R, E, A>,
) => Kind3<
  F,
  R,
  E,
  {
    readonly [K in N]: A
  }
>



export declare function bindTo<F extends URIS2>(
  F: Functor2<F>,
): <N extends string>(
  name: N,
) => <E, A>(
  fa: Kind2<F, E, A>,
) => Kind2<
  F,
  E,
  {
    readonly [K in N]: A
  }
>



export declare function bindTo<F extends URIS2, E>(
  F: Functor2C<F, E>,
): <N extends string>(
  name: N,
) => <A>(fa: Kind2<F, E, A>) => Kind2<
  F,
  E,
  {
    readonly [K in N]: A
  }
>



export declare function bindTo<F extends URIS>(
  F: Functor1<F>,
): <N extends string>(
  name: N,
) => <A>(fa: Kind<F, A>) => Kind<
  F,
  {
    readonly [K in N]: A
  }
>



export declare function bindTo<F>(F: Functor<F>): <N extends string>(
  name: N,
) => <A>(fa: HKT<F, A>) => HKT<
  F,
  {
    readonly [K in N]: A
  }
>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### ~~`getFunctorComposition`~~

Use [`map`](#map) instead.




#### Signature

```typescript
export declare function getFunctorComposition<F extends URIS2, G extends URIS3, E>(
  F: Functor2<F>,
  G: Functor3C<G, E>,
): FunctorComposition23C<F, G, E>



export declare function getFunctorComposition<F extends URIS2, G extends URIS2, E>(
  F: Functor2<F>,
  G: Functor2C<G, E>,
): FunctorComposition22C<F, G, E>



export declare function getFunctorComposition<F extends URIS2, G extends URIS2>(
  F: Functor2<F>,
  G: Functor2<G>,
): FunctorComposition22<F, G>



export declare function getFunctorComposition<F extends URIS2, G extends URIS, E>(
  F: Functor2C<F, E>,
  G: Functor1<G>,
): FunctorComposition2C1<F, G, E>



export declare function getFunctorComposition<F extends URIS2, G extends URIS>(
  F: Functor2<F>,
  G: Functor1<G>,
): FunctorComposition21<F, G>



export declare function getFunctorComposition<F extends URIS, G extends URIS2, E>(
  F: Functor1<F>,
  G: Functor2C<G, E>,
): FunctorComposition12C<F, G, E>



export declare function getFunctorComposition<F extends URIS, G extends URIS2>(
  F: Functor1<F>,
  G: Functor2<G>,
): FunctorComposition12<F, G>



export declare function getFunctorComposition<F extends URIS, G extends URIS>(
  F: Functor1<F>,
  G: Functor1<G>,
): FunctorComposition11<F, G>



export declare function getFunctorComposition<F, G>(F: Functor<F>, G: Functor<G>): FunctorComposition<F, G>

```

#### Details

* Added in 0.1.0
* **Deprecated**


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `let`




#### Signature

```typescript
declare function let_<F extends URIS4>(
  F: Functor4<F>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => <S, R, E>(
  fa: Kind4<F, S, R, E, A>,
) => Kind4<
  F,
  S,
  R,
  E,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



declare function let_<F extends URIS3>(
  F: Functor3<F>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => <R, E>(
  fa: Kind3<F, R, E, A>,
) => Kind3<
  F,
  R,
  E,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



declare function let_<F extends URIS3, E>(
  F: Functor3C<F, E>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => <R>(fa: Kind3<F, R, E, A>) => Kind3<
  F,
  R,
  E,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



declare function let_<F extends URIS2>(
  F: Functor2<F>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => <E>(fa: Kind2<F, E, A>) => Kind2<
  F,
  E,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



declare function let_<F extends URIS2, E>(
  F: Functor2C<F, E>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => (fa: Kind2<F, E, A>) => Kind2<
  F,
  E,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



declare function let_<F extends URIS>(
  F: Functor1<F>,
): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => (fa: Kind<F, A>) => Kind<
  F,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>



declare function let_<F>(F: Functor<F>): <N extends string, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => B,
) => (fa: HKT<F, A>) => HKT<
  F,
  {
    readonly [K in keyof A | N]: K extends keyof A ? A[K] : B
  }
>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti

---


### `map`

`map` composition.




#### Signature

```typescript
export declare function map<F extends URIS3, G extends URIS>(
  F: Functor3<F>,
  G: Functor1<G>,
): <A, B>(f: (a: A) => B) => <R, E>(fa: Kind3<F, R, E, Kind<G, A>>) => Kind3<F, R, E, Kind<G, B>>



export declare function map<F extends URIS2, G extends URIS2>(
  F: Functor2<F>,
  G: Functor2<G>,
): <A, B>(f: (a: A) => B) => <EF, EG>(fa: Kind2<F, EF, Kind2<G, EG, A>>) => Kind2<F, EF, Kind2<G, EG, B>>



export declare function map<F extends URIS2, G extends URIS>(
  F: Functor2<F>,
  G: Functor1<G>,
): <A, B>(f: (a: A) => B) => <E>(fa: Kind2<F, E, Kind<G, A>>) => Kind2<F, E, Kind<G, B>>



export declare function map<F extends URIS, G extends URIS3>(
  F: Functor1<F>,
  G: Functor3<G>,
): <A, B>(f: (a: A) => B) => <R, E>(fa: Kind<F, Kind3<G, R, E, A>>) => Kind<F, Kind3<G, R, E, B>>



export declare function map<F extends URIS, G extends URIS2>(
  F: Functor1<F>,
  G: Functor2<G>,
): <A, B>(f: (a: A) => B) => <E>(fa: Kind<F, Kind2<G, E, A>>) => Kind<F, Kind2<G, E, B>>



export declare function map<F extends URIS, G extends URIS>(
  F: Functor1<F>,
  G: Functor1<G>,
): <A, B>(f: (a: A) => B) => (fa: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>



export declare function map<F, G extends URIS2>(
  F: Functor<F>,
  G: Functor2<G>,
): <A, B>(f: (a: A) => B) => <E>(fa: HKT<F, Kind2<G, E, A>>) => HKT<F, Kind2<G, E, B>>



export declare function map<F, G extends URIS>(
  F: Functor<F>,
  G: Functor1<G>,
): <A, B>(f: (a: A) => B) => (fa: HKT<F, Kind<G, A>>) => HKT<F, Kind<G, B>>



export declare function map<F, G>(
  F: Functor<F>,
  G: Functor<G>,
): <A, B>(f: (a: A) => B) => (fa: HKT<F, HKT<G, A>>) => HKT<F, HKT<G, B>>

```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti