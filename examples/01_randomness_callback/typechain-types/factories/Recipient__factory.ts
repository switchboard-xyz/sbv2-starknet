/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Recipient, RecipientInterface } from "../Recipient";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_switchboard",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x60a0604052348015600f57600080fd5b5060405160bc38038060bc833981016040819052602a91603a565b6001600160a01b03166080526068565b600060208284031215604b57600080fd5b81516001600160a01b0381168114606157600080fd5b9392505050565b608051603f607d60003960005050603f6000f3fe6080604052600080fdfea2646970667358221220d1b445367460f2d7da92ac9f038e4e2879bd6b14cd5f909b572ef2f5d94982d364736f6c63430008110033";

type RecipientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RecipientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Recipient__factory extends ContractFactory {
  constructor(...args: RecipientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _switchboard: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Recipient> {
    return super.deploy(_switchboard, overrides || {}) as Promise<Recipient>;
  }
  override getDeployTransaction(
    _switchboard: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_switchboard, overrides || {});
  }
  override attach(address: string): Recipient {
    return super.attach(address) as Recipient;
  }
  override connect(signer: Signer): Recipient__factory {
    return super.connect(signer) as Recipient__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RecipientInterface {
    return new utils.Interface(_abi) as RecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Recipient {
    return new Contract(address, _abi, signerOrProvider) as Recipient;
  }
}
