/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  UserInitializedReceiverExample,
  UserInitializedReceiverExampleInterface,
} from "../UserInitializedReceiverExample";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_switchboard",
        type: "address",
      },
      {
        internalType: "address",
        name: "_functionId",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "InvalidOrder",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "expected",
        type: "address",
      },
      {
        internalType: "address",
        name: "actual",
        type: "address",
      },
    ],
    name: "InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "InvalidValue",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "callId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "OrderCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "callId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "OrderResolved",
    type: "event",
  },
  {
    inputs: [],
    name: "EXPECTED_FUNCTION_GAS_COST",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "createOrder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "fillOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "latestValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "orders",
    outputs: [
      {
        internalType: "address",
        name: "callId",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "filled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516106a33803806106a383398101604081905261002f91610076565b6001600160a01b03918216608052600080546001600160a01b031916919092161781556001556100a9565b80516001600160a01b038116811461007157600080fd5b919050565b6000806040838503121561008957600080fd5b6100928361005a565b91506100a06020840161005a565b90509250929050565b6080516105d86100cb600039600081816103b201526103fd01526105d86000f3fe60806040526004361061004a5760003560e01c80634ab5cc821461004f5780636512e6ec14610078578063a85c38ef14610082578063c37dfc5b14610103578063e93be9dd14610123575b600080fd5b34801561005b57600080fd5b5061006560035481565b6040519081526020015b60405180910390f35b61008061013a565b005b34801561008e57600080fd5b506100d661009d366004610494565b600260208190526000918252604090912080546001820154928201546003909201546001600160a01b0391821693909116919060ff1684565b604080516001600160a01b039586168152949093166020850152918301521515606082015260800161006f565b34801561010f57600080fd5b5061008061011e3660046104ad565b61029c565b34801561012f57600080fd5b50610065620493e081565b6101473a620493e06104e5565b34101561016e5760405163181c9d0b60e21b81523460048201526024015b60405180910390fd5b60006040518060400160405280600154815260200161018b6103a3565b6001600160a01b031690526040516101c19190602001815181526020918201516001600160a01b03169181019190915260400190565b60408051601f1981840301815291905260008054919250906101ec906001600160a01b0316836103f9565b6001805460009081526002602052604080822083018054336001600160a01b03199182161790915583548352912080549091166001600160a01b038416179055549091507fd4e0aaf5be9b8773c644dfebba8b63f878965712ad8589d85ca4bc9d1b671e2c908261025b6103a3565b604080519384526001600160a01b03928316602085015291169082015260600160405180910390a16001805490600061029383610502565b91905055505050565b60006102a66103a3565b6000549091506001600160a01b038083169116146102ee5760005460405163708986dd60e11b81526001600160a01b0391821660048201529082166024820152604401610165565b6000838152600260205260409020600101546001600160a01b031661032957604051631ec9f4d560e31b815260048101849052602401610165565b6000838152600260208181526040928390209182018590556003918201805460ff191660011790559084905581518581526001600160a01b038416918101919091529081018390527ff6a1e5c37818fe137574647cca20b912bdb303d2aecb77821888147f61598ba59060600160405180910390a1505050565b33601436108015906103e657507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316145b156103f6575060131936013560601c5b90565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639c23da503485856040518463ffffffff1660e01b815260040161044a92919061051b565b60206040518083038185885af1158015610468573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061048d9190610579565b9392505050565b6000602082840312156104a657600080fd5b5035919050565b600080604083850312156104c057600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176104fc576104fc6104cf565b92915050565b600060018201610514576105146104cf565b5060010190565b60018060a01b038316815260006020604081840152835180604085015260005b818110156105575785810183015185820160600152820161053b565b506000606082860101526060601f19601f830116850101925050509392505050565b60006020828403121561058b57600080fd5b81516001600160a01b038116811461048d57600080fdfea2646970667358221220b6e8052203d119cc6965c75327ea6a492832b3abdcde65932cb05c0d37a3519364736f6c63430008110033";

type UserInitializedReceiverExampleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserInitializedReceiverExampleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserInitializedReceiverExample__factory extends ContractFactory {
  constructor(...args: UserInitializedReceiverExampleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _switchboard: PromiseOrValue<string>,
    _functionId: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UserInitializedReceiverExample> {
    return super.deploy(
      _switchboard,
      _functionId,
      overrides || {}
    ) as Promise<UserInitializedReceiverExample>;
  }
  override getDeployTransaction(
    _switchboard: PromiseOrValue<string>,
    _functionId: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _switchboard,
      _functionId,
      overrides || {}
    );
  }
  override attach(address: string): UserInitializedReceiverExample {
    return super.attach(address) as UserInitializedReceiverExample;
  }
  override connect(signer: Signer): UserInitializedReceiverExample__factory {
    return super.connect(signer) as UserInitializedReceiverExample__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserInitializedReceiverExampleInterface {
    return new utils.Interface(_abi) as UserInitializedReceiverExampleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserInitializedReceiverExample {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UserInitializedReceiverExample;
  }
}
