/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace FunctionLib {
  export type FunctionConfigStruct = {
    schedule: PromiseOrValue<string>;
    permittedCallers: PromiseOrValue<string>[];
    containerRegistry: PromiseOrValue<string>;
    container: PromiseOrValue<string>;
    version: PromiseOrValue<string>;
    paramsSchema: PromiseOrValue<string>;
  };

  export type FunctionConfigStructOutput = [
    string,
    string[],
    string,
    string,
    string,
    string
  ] & {
    schedule: string;
    permittedCallers: string[];
    containerRegistry: string;
    container: string;
    version: string;
    paramsSchema: string;
  };

  export type FunctionStateStruct = {
    consecutiveFailures: PromiseOrValue<BigNumberish>;
    lastExecutionTimestamp: PromiseOrValue<BigNumberish>;
    nextAllowedTimestamp: PromiseOrValue<BigNumberish>;
    lastExecutionGasCost: PromiseOrValue<BigNumberish>;
    triggeredSince: PromiseOrValue<BigNumberish>;
    triggerCount: PromiseOrValue<BigNumberish>;
    queueIdx: PromiseOrValue<BigNumberish>;
    triggered: PromiseOrValue<boolean>;
  };

  export type FunctionStateStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    consecutiveFailures: BigNumber;
    lastExecutionTimestamp: BigNumber;
    nextAllowedTimestamp: BigNumber;
    lastExecutionGasCost: BigNumber;
    triggeredSince: BigNumber;
    triggerCount: BigNumber;
    queueIdx: BigNumber;
    triggered: boolean;
  };

  export type SbFunctionStruct = {
    name: PromiseOrValue<string>;
    authority: PromiseOrValue<string>;
    enclaveId: PromiseOrValue<string>;
    queueId: PromiseOrValue<string>;
    balance: PromiseOrValue<BigNumberish>;
    status: PromiseOrValue<BigNumberish>;
    config: FunctionLib.FunctionConfigStruct;
    state: FunctionLib.FunctionStateStruct;
  };

  export type SbFunctionStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
    number,
    FunctionLib.FunctionConfigStructOutput,
    FunctionLib.FunctionStateStructOutput
  ] & {
    name: string;
    authority: string;
    enclaveId: string;
    queueId: string;
    balance: BigNumber;
    status: number;
    config: FunctionLib.FunctionConfigStructOutput;
    state: FunctionLib.FunctionStateStructOutput;
  };
}

export interface SbFunctionViewInterface extends utils.Interface {
  functions: {
    "estimatedRunCost(address,uint256)": FunctionFragment;
    "funcs(address)": FunctionFragment;
    "functionExists(address)": FunctionFragment;
    "getActiveFunctionsByQueue(address)": FunctionFragment;
    "getAllFunctions()": FunctionFragment;
    "getFunctionsByAuthority(address)": FunctionFragment;
    "getTransactionHash(uint256,uint256,uint256,address,address,bytes)": FunctionFragment;
    "isTrustedForwarder(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "estimatedRunCost"
      | "funcs"
      | "functionExists"
      | "getActiveFunctionsByQueue"
      | "getAllFunctions"
      | "getFunctionsByAuthority"
      | "getTransactionHash"
      | "isTrustedForwarder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "estimatedRunCost",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "funcs",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "functionExists",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveFunctionsByQueue",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllFunctions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFunctionsByAuthority",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionHash",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimatedRunCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "funcs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "functionExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveFunctionsByQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllFunctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFunctionsByAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SbFunctionView extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SbFunctionViewInterface;

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

  functions: {
    estimatedRunCost(
      functionId: PromiseOrValue<string>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    funcs(
      functionId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[FunctionLib.SbFunctionStructOutput]>;

    functionExists(
      functionId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getActiveFunctionsByQueue(
      queueId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], FunctionLib.SbFunctionStructOutput[]]>;

    getAllFunctions(
      overrides?: CallOverrides
    ): Promise<[string[], FunctionLib.SbFunctionStructOutput[]]>;

    getFunctionsByAuthority(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], FunctionLib.SbFunctionStructOutput[]]>;

    getTransactionHash(
      expirationTimeSeconds: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isTrustedForwarder(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  estimatedRunCost(
    functionId: PromiseOrValue<string>,
    gasPrice: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  funcs(
    functionId: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<FunctionLib.SbFunctionStructOutput>;

  functionExists(
    functionId: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getActiveFunctionsByQueue(
    queueId: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string[], FunctionLib.SbFunctionStructOutput[]]>;

  getAllFunctions(
    overrides?: CallOverrides
  ): Promise<[string[], FunctionLib.SbFunctionStructOutput[]]>;

  getFunctionsByAuthority(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string[], FunctionLib.SbFunctionStructOutput[]]>;

  getTransactionHash(
    expirationTimeSeconds: PromiseOrValue<BigNumberish>,
    gasLimit: PromiseOrValue<BigNumberish>,
    value: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  isTrustedForwarder(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    estimatedRunCost(
      functionId: PromiseOrValue<string>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    funcs(
      functionId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<FunctionLib.SbFunctionStructOutput>;

    functionExists(
      functionId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getActiveFunctionsByQueue(
      queueId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], FunctionLib.SbFunctionStructOutput[]]>;

    getAllFunctions(
      overrides?: CallOverrides
    ): Promise<[string[], FunctionLib.SbFunctionStructOutput[]]>;

    getFunctionsByAuthority(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], FunctionLib.SbFunctionStructOutput[]]>;

    getTransactionHash(
      expirationTimeSeconds: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    isTrustedForwarder(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    estimatedRunCost(
      functionId: PromiseOrValue<string>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    funcs(
      functionId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    functionExists(
      functionId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getActiveFunctionsByQueue(
      queueId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllFunctions(overrides?: CallOverrides): Promise<BigNumber>;

    getFunctionsByAuthority(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransactionHash(
      expirationTimeSeconds: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTrustedForwarder(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    estimatedRunCost(
      functionId: PromiseOrValue<string>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    funcs(
      functionId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    functionExists(
      functionId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getActiveFunctionsByQueue(
      queueId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllFunctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFunctionsByAuthority(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionHash(
      expirationTimeSeconds: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTrustedForwarder(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
