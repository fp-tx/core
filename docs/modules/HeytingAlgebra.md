
# HeytingAlgebra







### Model

* [HeytingAlgebra](#heytingalgebra)

## Model


### `HeytingAlgebra`




#### Signature

```typescript
export interface HeytingAlgebra<A> extends BoundedDistributiveLattice<A> {
  readonly implies: (x: A, y: A) => A
  readonly not: (x: A) => A
}
```

#### Details

* Added in 0.1.0


#### License

* MIT – Copyright (c) 2017-present Giulio Canti