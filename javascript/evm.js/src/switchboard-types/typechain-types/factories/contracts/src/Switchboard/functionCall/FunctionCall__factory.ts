/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  FunctionCall,
  FunctionCallInterface,
} from "../../../../../contracts/src/Switchboard/functionCall/FunctionCall";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "ACLNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "functionId",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "FunctionCallerNotPermitted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "functionId",
        type: "address",
      },
    ],
    name: "FunctionDoesNotExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "functionId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "received",
        type: "uint256",
      },
    ],
    name: "FunctionFeeTooLow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "expectedAuthority",
        type: "address",
      },
      {
        internalType: "address",
        name: "receivedAuthority",
        type: "address",
      },
    ],
    name: "InvalidAuthority",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidEntry",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "functionId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "callId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "FunctionCallEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "functionId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FunctionCallFund",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "functionId",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "callFunction",
    outputs: [
      {
        internalType: "address",
        name: "callId",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "functionId",
        type: "address",
      },
    ],
    name: "functionCallSettings",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "requireEstimatedRunCostFee",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "minimumFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxGasCost",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "requireCallerPayFullCost",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "requireSenderBeReturnAddress",
            type: "bool",
          },
        ],
        internalType: "struct FunctionCallLib.FunctionCallSettings",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "callId",
        type: "address",
      },
    ],
    name: "functionCalls",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "functionId",
            type: "address",
          },
          {
            internalType: "address",
            name: "caller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "consecutiveFailures",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feePaid",
            type: "uint256",
          },
        ],
        internalType: "struct FunctionCallLib.FunctionCall",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "queueId",
        type: "address",
      },
    ],
    name: "getActiveFunctionCallsByQueue",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "functionId",
            type: "address",
          },
          {
            internalType: "address",
            name: "caller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "consecutiveFailures",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feePaid",
            type: "uint256",
          },
        ],
        internalType: "struct FunctionCallLib.FunctionCall[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "functionId",
        type: "address",
      },
      {
        internalType: "bool",
        name: "requireEstimatedRunCostFee",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "minimumFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxGasCost",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "requireCallerPayFullCost",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "requireSenderBeReturnAddress",
        type: "bool",
      },
    ],
    name: "setFunctionCallSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061232a806100206000396000f3fe60806040526004361061004a5760003560e01c80636b7ef38b1461004f578063826df326146100715780639c23da50146100a7578063a30f8d25146100d2578063fa88c651146101e6575b600080fd5b34801561005b57600080fd5b5061006f61006a366004611de5565b610214565b005b34801561007d57600080fd5b5061009161008c366004611e4b565b610499565b60405161009e9190611f1e565b60405180910390f35b6100ba6100b5366004611f47565b6105c8565b6040516001600160a01b03909116815260200161009e565b3480156100de57600080fd5b5061019e6100ed366004611e4b565b6040805160a0808201835260008083526020808401829052838501829052606080850183905260809485018390526001600160a01b039690961682527fac917e5a91e3acb656f85d06b7b48bef4356fe56119fafe1fa91bc7497fe3a5481529084902084519283018552805460ff9081161515845260018201549284019290925260028101549483019490945260039093015480841615159482019490945261010090930490911615159082015290565b60405161009e9190600060a082019050825115158252602083015160208301526040830151604083015260608301511515606083015260808301511515608083015292915050565b3480156101f257600080fd5b50610206610201366004611e4b565b610a2d565b60405161009e929190612009565b6002600061022e6000805160206122b58339815191525490565b90506002826004811115610244576102446120aa565b11801561025e575061025c61025761191b565b611948565b155b156102955761026b61191b565b604051630754d25d60e51b81526001600160a01b0390911660048201526024015b60405180910390fd5b60048260048111156102a9576102a96120aa565b1480156102c357506102c16102bc61191b565b6119d2565b155b156102f4576102d061191b565b6040516275103f60e11b81526001600160a01b03909116600482015260240161028c565b6001826004811115610308576103086120aa565b14801561031457508015155b156103325760405163887efaa560e01b815260040160405180910390fd5b6001811415801561034257508015155b156103605760405163887efaa560e01b815260040160405180910390fd5b610387826004811115610375576103756120aa565b6000805160206122b583398151915255565b610390886119fa565b6103b857604051631e1d8eb160e11b81526001600160a01b038916600482015260240161028c565b60006103c389611a2a565b60018101549091506001600160a01b0316331461040a57600181015460405163bf89df8360e01b81526001600160a01b03909116600482015233602482015260440161028c565b6001600160a01b03891660009081527fac917e5a91e3acb656f85d06b7b48bef4356fe56119fafe1fa91bc7497fe3a5460205260409020805460ff19168915151781556001810188905560028101879055600301805461ffff191686151561ff00191617610100861515021790555061048f816000805160206122b583398151915255565b5050505050505050565b6104a1611d68565b6001600160a01b0382811660009081527fac917e5a91e3acb656f85d06b7b48bef4356fe56119fafe1fa91bc7497fe3a5260208181526040808420815160e08101835281548716815260018201549096169286019290925260028201549085015260038101805492949260608401919061051a906120c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610546906120c0565b80156105935780601f1061056857610100808354040283529160200191610593565b820191906000526020600020905b81548152906001019060200180831161057657829003601f168201915b5050509183525050600482015460ff161515602082015260058201546040820152600690910154606090910152949350505050565b6000600260006105e46000805160206122b58339815191525490565b905060028260048111156105fa576105fa6120aa565b11801561060f575061060d61025761191b565b155b1561061c5761026b61191b565b6004826004811115610630576106306120aa565b14801561064557506106436102bc61191b565b155b15610652576102d061191b565b6001826004811115610666576106666120aa565b14801561067257508015155b156106905760405163887efaa560e01b815260040160405180910390fd5b600181141580156106a057508015155b156106be5760405163887efaa560e01b815260040160405180910390fd5b6106d3826004811115610375576103756120aa565b60006106dd61191b565b90506106e8866119fa565b61071057604051631e1d8eb160e11b81526001600160a01b038716600482015260240161028c565b600061071b87611a2a565b9050600061075c886001600160a01b031660009081527fac917e5a91e3acb656f85d06b7b48bef4356fe56119fafe1fa91bc7497fe3a546020526040902090565b6040805160a081018252825460ff908116158015835260018501546020840152600285015493830193909352600390930154808416151560608301526101009004909216151560808301529091506107f75760006107ba893a611a5a565b9050803410156107f55760405163f3663dbf60e01b81526001600160a01b038a1660048201526024810182905234604482015260640161028c565b505b6000816020015111801561080e5750806020015134105b1561084a57602081015160405163f3663dbf60e01b81526001600160a01b038a166004820152602481019190915234604482015260640161028c565b6007820154158015906108c357506108c1826006016001018054806020026020016040519081016040528092919081815260200182805480156108b657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610898575b505050505084611abf565b155b156108f457604051630724d91960e31b81526001600160a01b03808a1660048301528416602482015260440161028c565b6108fc611b24565b955061090b8689858a34611b9f565b7fac917e5a91e3acb656f85d06b7b48bef4356fe56119fafe1fa91bc7497fe3a5380546001810182556000919091527fd9baf67f3fd348377d9488b9802786657307b23170a8400f8ea1a97b00aee5580180546001600160a01b0319166001600160a01b038816179055856001600160a01b0316836001600160a01b0316896001600160a01b03167ff1a90642ecfa4389367880462084bb97e955b8ca43147fa46c14ba3ea9c55bbe8a6040516109c291906120fa565b60405180910390a46109d48834611ca9565b604051349033906001600160a01b038b16907f31808e14ead6333a4f45ddacc0d112cf411c91d79dd91d197aeb0f58411c00cf90600090a4505050610a25816000805160206122b583398151915255565b505092915050565b6060806000805160206122d58339815191527fac917e5a91e3acb656f85d06b7b48bef4356fe56119fafe1fa91bc7497fe3a526000805b60018301548110156110c1576000836001018281548110610a8757610a8761210d565b60009182526020808320909101546001600160a01b039081168084528783526040808520815160e0810183528154851681526001820154909416948401949094526002840154908301526003830180549195509192916060840191610aeb906120c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610b17906120c0565b8015610b645780601f10610b3957610100808354040283529160200191610b64565b820191906000526020600020905b815481529060010190602001808311610b4757829003601f168201915b5050509183525050600482015460ff161515602080830191909152600583015460408084019190915260069093015460609092019190915282516001600160a01b0316600090815290899052818120825161010081019093528054939450909282908290610bd1906120c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610bfd906120c0565b8015610c4a5780601f10610c1f57610100808354040283529160200191610c4a565b820191906000526020600020905b815481529060010190602001808311610c2d57829003601f168201915b505050918352505060018201546001600160a01b03908116602083015260028301548116604083015260038301541660608201526004820154608082015260058083015460a09092019160ff1690811115610ca757610ca76120aa565b6005811115610cb857610cb86120aa565b8152602001600682016040518060c0016040529081600082018054610cdc906120c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d08906120c0565b8015610d555780601f10610d2a57610100808354040283529160200191610d55565b820191906000526020600020905b815481529060010190602001808311610d3857829003601f168201915b5050505050815260200160018201805480602002602001604051908101604052809291908181526020018280548015610db757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610d99575b50505050508152602001600282018054610dd0906120c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610dfc906120c0565b8015610e495780601f10610e1e57610100808354040283529160200191610e49565b820191906000526020600020905b815481529060010190602001808311610e2c57829003601f168201915b50505050508152602001600382018054610e62906120c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610e8e906120c0565b8015610edb5780601f10610eb057610100808354040283529160200191610edb565b820191906000526020600020905b815481529060010190602001808311610ebe57829003601f168201915b50505050508152602001600482018054610ef4906120c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610f20906120c0565b8015610f6d5780601f10610f4257610100808354040283529160200191610f6d565b820191906000526020600020905b815481529060010190602001808311610f5057829003601f168201915b50505050508152602001600582018054610f86906120c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb2906120c0565b8015610fff5780601f10610fd457610100808354040283529160200191610fff565b820191906000526020600020905b815481529060010190602001808311610fe257829003601f168201915b5050509190925250505081526040805161010081018252600c8401548152600d840154602080830191909152600e85015492820192909252600f84015460608083019190915260108501546080830152601185015460a0830152601285015460c083015260139094015460ff16151560e08201529101528101519091506001600160a01b038b8116911614801561109857506080820151155b156110ab57846110a781612139565b9550505b50505080806110b990612139565b915050610a64565b5060008167ffffffffffffffff8111156110dd576110dd611f31565b604051908082528060200260200182016040528015611106578160200160208202803683370190505b50905060008267ffffffffffffffff81111561112457611124611f31565b60405190808252806020026020018201604052801561115d57816020015b61114a611d68565b8152602001906001900390816111425790505b50905060005b600185015481101561190d5760008560010182815481106111865761118661210d565b60009182526020808320909101546001600160a01b039081168084528983526040808520815160e08101835281548516815260018201549094169484019490945260028401549083015260038301805491955091929160608401916111ea906120c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611216906120c0565b80156112635780601f1061123857610100808354040283529160200191611263565b820191906000526020600020905b81548152906001019060200180831161124657829003601f168201915b5050509183525050600482015460ff161515602080830191909152600583015460408084019190915260069093015460609092019190915282516001600160a01b03166000908152908b90528181208251610100810190935280549394509092829082906112d0906120c0565b80601f01602080910402602001604051908101604052809291908181526020018280546112fc906120c0565b80156113495780601f1061131e57610100808354040283529160200191611349565b820191906000526020600020905b81548152906001019060200180831161132c57829003601f168201915b505050918352505060018201546001600160a01b03908116602083015260028301548116604083015260038301541660608201526004820154608082015260058083015460a09092019160ff16908111156113a6576113a66120aa565b60058111156113b7576113b76120aa565b8152602001600682016040518060c00160405290816000820180546113db906120c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611407906120c0565b80156114545780601f1061142957610100808354040283529160200191611454565b820191906000526020600020905b81548152906001019060200180831161143757829003601f168201915b50505050508152602001600182018054806020026020016040519081016040528092919081815260200182805480156114b657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611498575b505050505081526020016002820180546114cf906120c0565b80601f01602080910402602001604051908101604052809291908181526020018280546114fb906120c0565b80156115485780601f1061151d57610100808354040283529160200191611548565b820191906000526020600020905b81548152906001019060200180831161152b57829003601f168201915b50505050508152602001600382018054611561906120c0565b80601f016020809104026020016040519081016040528092919081815260200182805461158d906120c0565b80156115da5780601f106115af576101008083540402835291602001916115da565b820191906000526020600020905b8154815290600101906020018083116115bd57829003601f168201915b505050505081526020016004820180546115f3906120c0565b80601f016020809104026020016040519081016040528092919081815260200182805461161f906120c0565b801561166c5780601f106116415761010080835404028352916020019161166c565b820191906000526020600020905b81548152906001019060200180831161164f57829003601f168201915b50505050508152602001600582018054611685906120c0565b80601f01602080910402602001604051908101604052809291908181526020018280546116b1906120c0565b80156116fe5780601f106116d3576101008083540402835291602001916116fe565b820191906000526020600020905b8154815290600101906020018083116116e157829003601f168201915b5050509190925250505081526040805161010081018252600c8401548152600d840154602080830191909152600e85015492820192909252600f84015460608083019190915260108501546080830152601185015460a0830152601285015460c083015260139094015460ff16151560e08201529101528101519091506001600160a01b038d8116911614801561179757506080820151155b156118f7576001600160a01b03808416600090815260208a8152604091829020825160e0810184528154851681526001820154909416918401919091526002810154918301919091526003810180546060840191906117f5906120c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611821906120c0565b801561186e5780601f106118435761010080835404028352916020019161186e565b820191906000526020600020905b81548152906001019060200180831161185157829003601f168201915b5050509183525050600482015460ff161515602082015260058201546040820152600690910154606090910152856118a589612152565b985088815181106118b8576118b861210d565b6020026020010181905250828688815181106118d6576118d661210d565b60200260200101906001600160a01b031690816001600160a01b0316815250505b505050808061190590612139565b915050611163565b509097909650945050505050565b336014361080159061193557506001600160a01b03811630145b15611945575060131936013560601c5b90565b6001600160a01b03811660009081527fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c825602052604081205460ff16806119cc57507fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c8235b6001600160a01b0383166000908152600191909101602052604090205460ff165b92915050565b60007fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c8236119ab565b6001600160a01b0390811660009081526000805160206122d5833981519152602052604090206001015416151590565b60006000805160206122d58339815191525b6001600160a01b039092166000908152602092909252506040902090565b6001600160a01b0382811660009081526000805160206122d5833981519152602052604081206003810154919290918391611a959116611d40565b60030154600f830154909150611aab8183612169565b611ab5908661217c565b9695505050505050565b6000805b8351811015611b1a57826001600160a01b0316848281518110611ae857611ae861210d565b60200260200101516001600160a01b031603611b085760019150506119cc565b80611b1281612139565b915050611ac3565b5060009392505050565b6000807f20ced3562caba8901b8e6c0f45f2eefc88fe6f62c9647c3abea04219d18063b58054600090611b5690612139565b9182905550611b66600143612193565b40604051602001611b81929190918252602082015260400190565b60408051601f19818403018152919052805160209091012092915050565b6040518060e00160405280856001600160a01b03168152602001846001600160a01b031681526020014281526020018381526020016000151581526020016000815260200182815250611c0f7fac917e5a91e3acb656f85d06b7b48bef4356fe56119fafe1fa91bc7497fe3a5290565b6001600160a01b0380881660009081526020928352604090819020845181549084166001600160a01b03199182161782559385015160018201805491909416941693909317909155820151600282015560608201516003820190611c7390826121f4565b50608082015160048201805460ff191691151591909117905560a0820151600582015560c0909101516006909101555050505050565b6001600160a01b03821660009081526000805160206122d5833981519152602052604081206004018054839290611ce1908490612169565b90915550506001600160a01b03821660009081526000805160206122d58339815191526020526040902060058082015460049160ff90911690811115611d2957611d296120aa565b03611d3b5760058101805460ff191690555b505050565b60007f60afd68830977364a6093883acfe9f98da214c7c3590e74cf82ad9ef006ddc3e611a3c565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016060815260200160001515815260200160008152602001600081525090565b80356001600160a01b0381168114611dd057600080fd5b919050565b80358015158114611dd057600080fd5b60008060008060008060c08789031215611dfe57600080fd5b611e0787611db9565b9550611e1560208801611dd5565b94506040870135935060608701359250611e3160808801611dd5565b9150611e3f60a08801611dd5565b90509295509295509295565b600060208284031215611e5d57600080fd5b611e6682611db9565b9392505050565b6000815180845260005b81811015611e9357602081850181015186830182015201611e77565b506000602082860101526020601f19601f83011685010191505092915050565b600060018060a01b038083511684528060208401511660208501525060408201516040840152606082015160e06060850152611ef260e0850182611e6d565b905060808301511515608085015260a083015160a085015260c083015160c08501528091505092915050565b602081526000611e666020830184611eb3565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215611f5a57600080fd5b611f6383611db9565b9150602083013567ffffffffffffffff80821115611f8057600080fd5b818501915085601f830112611f9457600080fd5b813581811115611fa657611fa6611f31565b604051601f8201601f19908116603f01168101908382118183101715611fce57611fce611f31565b81604052828152886020848701011115611fe757600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b604080825283519082018190526000906020906060840190828701845b8281101561204b5781516001600160a01b031684529284019290840190600101612026565b50505083810382850152845180825282820190600581901b8301840187850160005b8381101561209b57601f19868403018552612089838351611eb3565b9487019492509086019060010161206d565b50909998505050505050505050565b634e487b7160e01b600052602160045260246000fd5b600181811c908216806120d457607f821691505b6020821081036120f457634e487b7160e01b600052602260045260246000fd5b50919050565b602081526000611e666020830184611e6d565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161214b5761214b612123565b5060010190565b60008161216157612161612123565b506000190190565b808201808211156119cc576119cc612123565b80820281158282048414176119cc576119cc612123565b818103818111156119cc576119cc612123565b601f821115611d3b57600081815260208120601f850160051c810160208610156121cd5750805b601f850160051c820191505b818110156121ec578281556001016121d9565b505050505050565b815167ffffffffffffffff81111561220e5761220e611f31565b6122228161221c84546120c0565b846121a6565b602080601f831160018114612257576000841561223f5750858301515b600019600386901b1c1916600185901b1785556121ec565b600085815260208120601f198616915b8281101561228657888601518255948401946001909101908401612267565b50858210156122a45787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fe20ced3562caba8901b8e6c0f45f2eefc88fe6f62c9647c3abea04219d18063b672050865ba43dca306a7c9a249316457b134cf9751dcee5ef976e9d66668f897a26469706673582212206ebd5307d616ac034507ba1009737a20ff4b160ad9908abd8bb89c4082b9d5ad64736f6c63430008110033";

type FunctionCallConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FunctionCallConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FunctionCall__factory extends ContractFactory {
  constructor(...args: FunctionCallConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FunctionCall> {
    return super.deploy(overrides || {}) as Promise<FunctionCall>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FunctionCall {
    return super.attach(address) as FunctionCall;
  }
  override connect(signer: Signer): FunctionCall__factory {
    return super.connect(signer) as FunctionCall__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FunctionCallInterface {
    return new utils.Interface(_abi) as FunctionCallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FunctionCall {
    return new Contract(address, _abi, signerOrProvider) as FunctionCall;
  }
}
