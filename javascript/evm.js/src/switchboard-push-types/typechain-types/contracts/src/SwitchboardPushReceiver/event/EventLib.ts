/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  Signer,
  utils,
} from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface EventLibInterface extends utils.Interface {
  functions: {};

  events: {
    "NewAdapter(bytes32,address,address)": EventFragment;
    "NewResult(bytes32,uint80,int256,uint256)": EventFragment;
    "ReadEvent(address,address,int256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewAdapter"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewResult"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReadEvent"): EventFragment;
}

export interface NewAdapterEventObject {
  feedId: string;
  adapter: string;
  sender: string;
}
export type NewAdapterEvent = TypedEvent<
  [string, string, string],
  NewAdapterEventObject
>;

export type NewAdapterEventFilter = TypedEventFilter<NewAdapterEvent>;

export interface NewResultEventObject {
  feedId: string;
  roundId: BigNumber;
  value: BigNumber;
  timestamp: BigNumber;
}
export type NewResultEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  NewResultEventObject
>;

export type NewResultEventFilter = TypedEventFilter<NewResultEvent>;

export interface ReadEventEventObject {
  feedId: string;
  sender: string;
  value: BigNumber;
  timestamp: BigNumber;
}
export type ReadEventEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  ReadEventEventObject
>;

export type ReadEventEventFilter = TypedEventFilter<ReadEventEvent>;

export interface EventLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventLibInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "NewAdapter(bytes32,address,address)"(
      feedId?: PromiseOrValue<BytesLike> | null,
      adapter?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): NewAdapterEventFilter;
    NewAdapter(
      feedId?: PromiseOrValue<BytesLike> | null,
      adapter?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): NewAdapterEventFilter;

    "NewResult(bytes32,uint80,int256,uint256)"(
      feedId?: PromiseOrValue<BytesLike> | null,
      roundId?: PromiseOrValue<BigNumberish> | null,
      value?: null,
      timestamp?: null
    ): NewResultEventFilter;
    NewResult(
      feedId?: PromiseOrValue<BytesLike> | null,
      roundId?: PromiseOrValue<BigNumberish> | null,
      value?: null,
      timestamp?: null
    ): NewResultEventFilter;

    "ReadEvent(address,address,int256,uint256)"(
      feedId?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null,
      value?: null,
      timestamp?: null
    ): ReadEventEventFilter;
    ReadEvent(
      feedId?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null,
      value?: null,
      timestamp?: null
    ): ReadEventEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
