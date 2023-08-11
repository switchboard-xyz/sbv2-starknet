/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Admin,
  AdminInterface,
} from "../../../../../contracts/src/SwitchboardPushReceiver/admin/Admin";

const _abi = [
  {
    inputs: [],
    name: "ACLAdminAlreadyInitialized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "ACLNotAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "functionId",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_switchboard",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "isAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "isAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_functionId",
        type: "address",
      },
    ],
    name: "setFunctionId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_switchboard",
        type: "address",
      },
    ],
    name: "setSwitchboard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "switchboard",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105c6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80634b0bddd2116100665780634b0bddd214610108578063ad224b071461011b578063babcc5391461012e578063c4d66de814610141578063f84e198f1461015457600080fd5b806318ccf0991461009857806324d7806c146100bd5780632a8f9607146100e05780634697f05d146100f5575b600080fd5b6100a061015c565b6040516001600160a01b0390911681526020015b60405180910390f35b6100d06100cb366004610512565b610194565b60405190151581526020016100b4565b6100f36100ee366004610512565b6101a5565b005b6100f3610103366004610534565b61020e565b6100f3610116366004610534565b610280565b6100f3610129366004610512565b610292565b6100d061013c366004610512565b6102f6565b6100f361014f366004610512565b610301565b6100a0610364565b600061018f7fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c826546001600160a01b031690565b905090565b600061019f82610397565b92915050565b6101ae33610397565b6101d1576040516275103f60e11b81523360048201526024015b60405180910390fd5b7fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c82780546001600160a01b0319166001600160a01b03831617905550565b61021733610397565b610235576040516275103f60e11b81523360048201526024016101c8565b6001600160a01b03821660009081527fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c82560205260409020805460ff19168215151790555050565b5050565b6102886103ce565b61027c8282610457565b61029b33610397565b6102b9576040516275103f60e11b81523360048201526024016101c8565b7fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c82680546001600160a01b0319166001600160a01b03831617905550565b600061019f826104a1565b6000805160206105718339815191525460ff161561033257604051637373cb0d60e01b815260040160405180910390fd5b61033a6103ce565b610345336001610457565b6102b9600080516020610571833981519152805460ff19166001179055565b600061018f7fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c827546001600160a01b031690565b60006000805160206105718339815191525b6001600160a01b03909216600090815260019290920160205250604090205460ff1690565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146104555760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b60648201526084016101c8565b565b6001600160a01b039190911660009081527fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c82460205260409020805460ff1916911515919091179055565b6001600160a01b03811660009081527fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c825602052604081205460ff168061019f57506000805160206105718339815191526103a9565b80356001600160a01b038116811461050d57600080fd5b919050565b60006020828403121561052457600080fd5b61052d826104f6565b9392505050565b6000806040838503121561054757600080fd5b610550836104f6565b91506020830135801515811461056557600080fd5b80915050925092905056feec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c823a2646970667358221220cd033ca53b736dd6a038996943a2a3ca65e889b8e72ce254b6f74667d7673a0564736f6c63430008110033";

type AdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Admin__factory extends ContractFactory {
  constructor(...args: AdminConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Admin> {
    return super.deploy(overrides || {}) as Promise<Admin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Admin {
    return super.attach(address) as Admin;
  }
  override connect(signer: Signer): Admin__factory {
    return super.connect(signer) as Admin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdminInterface {
    return new utils.Interface(_abi) as AdminInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Admin {
    return new Contract(address, _abi, signerOrProvider) as Admin;
  }
}
