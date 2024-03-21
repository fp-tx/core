/**
 * @meta
 * {@since 1.0.0}
 * {@license MIT – Copyright (c) 2017-present Giulio Canti}
 * @public
 */

import * as alt from './Alt'
import * as alternative from './Alternative'
import * as applicative from './Applicative'
import * as apply from './Apply'
import * as array from './Array'
import * as bifunctor from './Bifunctor'
import * as boolean from './boolean'
import * as booleanAlgebra from './BooleanAlgebra'
import * as bounded from './Bounded'
import * as boundedDistributiveLattice from './BoundedDistributiveLattice'
import * as boundedJoinSemilattice from './BoundedJoinSemilattice'
import * as boundedLattice from './BoundedLattice'
import * as boundedMeetSemilattice from './BoundedMeetSemilattice'
import * as category from './Category'
import * as chain from './Chain'
import * as chainRec from './ChainRec'
import * as choice from './Choice'
import * as comonad from './Comonad'
import * as compactable from './Compactable'
import * as console from './Console'
import * as const_ from './Const'
import * as contravariant from './Contravariant'
import * as date from './Date'
import * as distributiveLattice from './DistributiveLattice'
import * as either from './Either'
import * as eitherT from './EitherT'
import * as endomorphism from './Endomorphism'
import * as eq from './Eq'
import * as extend from './Extend'
import * as field from './Field'
import * as filterable from './Filterable'
import * as filterableWithIndex from './FilterableWithIndex'
import * as foldable from './Foldable'
import * as foldableWithIndex from './FoldableWithIndex'
import * as fromEither from './FromEither'
import * as fromIO from './FromIO'
import * as fromReader from './FromReader'
import * as fromState from './FromState'
import * as fromTask from './FromTask'
import * as fromThese from './FromThese'
import * as function_ from './function'
import * as functor from './Functor'
import * as functorWithIndex from './FunctorWithIndex'
import * as group from './Group'
import * as heytingAlgebra from './HeytingAlgebra'
import * as hkt from './HKT'
import * as identity from './Identity'
import * as invariant from './Invariant'
import * as io from './IO'
import * as ioEither from './IOEither'
import * as ioOption from './IOOption'
import * as ioRef from './IORef'
import * as joinSemilattice from './JoinSemilattice'
import * as json from './Json'
import * as lattice from './Lattice'
import * as magma from './Magma'
import * as map from './Map'
import * as meetSemilattice from './MeetSemilattice'
import * as monad from './Monad'
import * as monadIO from './MonadIO'
import * as monadTask from './MonadTask'
import * as monadThrow from './MonadThrow'
import * as monoid from './Monoid'
import * as naturalTransformation from './NaturalTransformation'
import * as nonEmptyArray from './NonEmptyArray'
import * as number from './number'
import * as option from './Option'
import * as optionT from './OptionT'
import * as ord from './Ord'
import * as ordering from './Ordering'
import * as pipeable from './pipeable'
import * as pointed from './Pointed'
import * as predicate from './Predicate'
import * as profunctor from './Profunctor'
import * as random from './Random'
import * as reader from './Reader'
import * as readerEither from './ReaderEither'
import * as readerIO from './ReaderIO'
import * as readerT from './ReaderT'
import * as readerTask from './ReaderTask'
import * as readerTaskEither from './ReaderTaskEither'
import * as readonlyArray from './ReadonlyArray'
import * as readonlyMap from './ReadonlyMap'
import * as readonlyNonEmptyArray from './ReadonlyNonEmptyArray'
import * as readonlyRecord from './ReadonlyRecord'
import * as readonlySet from './ReadonlySet'
import * as readonlyTuple from './ReadonlyTuple'
import * as record from './Record'
import * as refinement from './Refinement'
import * as ring from './Ring'
import * as semigroup from './Semigroup'
import * as semigroupoid from './Semigroupoid'
import * as semiring from './Semiring'
import * as separated from './Separated'
import * as set from './Set'
import * as show from './Show'
import * as state from './State'
import * as stateReaderTaskEither from './StateReaderTaskEither'
import * as stateT from './StateT'
import * as store from './Store'
import * as string from './string'
import * as strong from './Strong'
import * as struct from './struct'
import * as task from './Task'
import * as taskEither from './TaskEither'
import * as taskOption from './TaskOption'
import * as taskThese from './TaskThese'
import * as these from './These'
import * as theseT from './TheseT'
import * as traced from './Traced'
import * as traversable from './Traversable'
import * as traversableWithIndex from './TraversableWithIndex'
import * as tree from './Tree'
import * as tuple from './Tuple'
import * as unfoldable from './Unfoldable'
import * as validationT from './ValidationT'
import * as void_ from './void'
import * as witherable from './Witherable'
import * as writer from './Writer'
import * as writerT from './WriterT'
import * as zero from './Zero'

export {
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  alt,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  alternative,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  applicative,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  apply,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  array,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  bifunctor,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  boolean,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  booleanAlgebra,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  bounded,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  boundedDistributiveLattice,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  boundedJoinSemilattice,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  boundedLattice,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  boundedMeetSemilattice,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  category,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  chain,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  chainRec,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  choice,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  comonad,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  compactable,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  console,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  const_ as const,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  contravariant,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  date,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  distributiveLattice,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  either,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Monad transformers}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  eitherT,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  endomorphism,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  eq,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  extend,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  field,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  filterable,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  filterableWithIndex,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  foldable,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  foldableWithIndex,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  fromEither,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  fromIO,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  fromReader,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  fromState,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  fromTask,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  fromThese,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  function_ as function,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  functor,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  functorWithIndex,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  group,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  heytingAlgebra,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  hkt,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  identity,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  invariant,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  io,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  ioEither,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  ioOption,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  ioRef,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  joinSemilattice,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  json,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  lattice,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  magma,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  map,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  meetSemilattice,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  monad,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  monadIO,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  monadTask,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  monadThrow,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  monoid,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  naturalTransformation,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  nonEmptyArray,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  number,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  option,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Monad transformers}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  optionT,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  ord,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  ordering,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  pipeable,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  pointed,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  predicate,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  profunctor,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  random,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  reader,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readerEither,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readerIO,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Monad transformers}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readerT,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readerTask,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readerTaskEither,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readonlyArray,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readonlyMap,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readonlyNonEmptyArray,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readonlyRecord,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readonlySet,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  readonlyTuple,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  record,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  refinement,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  ring,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  semigroup,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  semigroupoid,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  semiring,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  separated,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  set,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  show,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  state,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  stateReaderTaskEither,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Monad transformers}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  stateT,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  store,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  string,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  strong,
  /**
   * @meta
   * {@since 1.0.0}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  struct,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  task,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  taskEither,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  taskOption,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  taskThese,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  these,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Monad transformers}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  theseT,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  traced,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  traversable,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  traversableWithIndex,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  tree,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  tuple,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  unfoldable,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  validationT,
  /**
   * @deprecated Use applicative validation instead
   * @meta
   * {@since 1.0.0}
   * {@category Zone of death}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  void_ as void,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  witherable,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Data types}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  writer,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Monad transformers}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  writerT,
  /**
   * @meta
   * {@since 1.0.0}
   * {@category Model}
   * {@license MIT – Copyright (c) 2017-present Giulio Canti}
   * @public
   */
  zero,
}
