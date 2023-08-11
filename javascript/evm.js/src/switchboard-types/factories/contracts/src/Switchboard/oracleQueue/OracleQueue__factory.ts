/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  OracleQueue,
  OracleQueueInterface,
} from "../../../../../contracts/src/Switchboard/oracleQueue/OracleQueue";

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
        internalType: "uint256",
        name: "argumentIndex",
        type: "uint256",
      },
    ],
    name: "InvalidArgument",
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
    inputs: [
      {
        internalType: "address",
        name: "oracleId",
        type: "address",
      },
    ],
    name: "OracleAlreadyExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "accountId",
        type: "address",
      },
    ],
    name: "OracleQueueAccountInit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "queueId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "attestationQueueId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "mrEnclave",
        type: "bytes32",
      },
    ],
    name: "OracleQueueAddMrEnclave",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "queueId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "attestationQueueId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "mrEnclave",
        type: "bytes32",
      },
    ],
    name: "OracleQueueRemoveMrEnclave",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "queueId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "attestationQueueId",
        type: "address",
      },
    ],
    name: "OracleQueueSetAttestationConfig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "queueId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "OracleQueueSetConfig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "queueId",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "granter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "grantee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "permission",
        type: "uint256",
      },
    ],
    name: "OracleQueueSetPermission",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "queueId",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "mrEnclave",
        type: "bytes32",
      },
    ],
    name: "addMrEnclaveToOracleQueue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "authority",
        type: "address",
      },
      {
        internalType: "bool",
        name: "unpermissionedFeedsEnabled",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "maxSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oracleTimeout",
        type: "uint256",
      },
    ],
    name: "createOracleQueue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracleId",
        type: "address",
      },
    ],
    name: "getOracleIdx",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
    name: "getOracleQueueAllowedMrEnclaves",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
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
    name: "getOracles",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
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
    name: "oracleQueues",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "authority",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "oracles",
            type: "address[]",
          },
          {
            internalType: "bool",
            name: "unpermissionedFeedsEnabled",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "maxSize",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleTimeout",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gcIdx",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currIdx",
            type: "uint256",
          },
        ],
        internalType: "struct OracleQueueLib.OracleQueue",
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
    name: "queueAttestationConfigs",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "attestationQueueId",
            type: "address",
          },
          {
            internalType: "bytes32[]",
            name: "mrEnclaves",
            type: "bytes32[]",
          },
          {
            internalType: "bool",
            name: "requireValidEnclave",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "requireHeartbeatPermission",
            type: "bool",
          },
        ],
        internalType: "struct OracleQueueLib.AttestationConfig",
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
      {
        internalType: "bytes32",
        name: "mrEnclave",
        type: "bytes32",
      },
    ],
    name: "removeMrEnclaveFromOracleQueue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "queueId",
        type: "address",
      },
      {
        internalType: "address",
        name: "attestationQueueId",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "mrEnclaves",
        type: "bytes32[]",
      },
      {
        internalType: "bool",
        name: "requireValidEnclave",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "requireHeartbeatPermission",
        type: "bool",
      },
    ],
    name: "setOracleQueueAttestationConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "queueId",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "authority",
        type: "address",
      },
      {
        internalType: "bool",
        name: "unpermissionedFeedsEnabled",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "maxSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oracleTimeout",
        type: "uint256",
      },
    ],
    name: "setOracleQueueConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "queueId",
        type: "address",
      },
      {
        internalType: "address",
        name: "grantee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "permission",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "on",
        type: "bool",
      },
    ],
    name: "setOracleQueuePermission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612053806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638e749281116100715780638e74928114610125578063b659041114610145578063d87dd0ac14610158578063e767565114610179578063f04b0f591461018c578063f2378e88146101ac57600080fd5b806301fc1ba2146100ae578063262955d8146100c357806351a426d8146100d65780636ddc9122146100e957806388033af514610112575b600080fd5b6100c16100bc3660046118a9565b6101cc565b005b6100c16100d13660046118f6565b61042c565b6100c16100e43660046118f6565b610642565b6100fc6100f7366004611920565b610853565b6040516101099190611942565b60405180910390f35b6100c16101203660046119db565b610918565b610138610133366004611920565b610af9565b6040516101099190611ade565b6100c1610153366004611b74565b610b80565b61016b610166366004611920565b610d5e565b604051908152602001610109565b6100c1610187366004611c04565b610f57565b61019f61019a366004611920565b611133565b6040516101099190611c84565b6101bf6101ba366004611920565b6111c5565b6040516101099190611d46565b600360006101e6600080516020611fbe8339815191525490565b905060028260048111156101fc576101fc611df4565b118015610216575061021461020f611380565b6113ad565b155b1561024d57610223611380565b604051630754d25d60e51b81526001600160a01b0390911660048201526024015b60405180910390fd5b600482600481111561026157610261611df4565b14801561027b5750610279610274611380565b611437565b155b156102ac57610288611380565b6040516275103f60e11b81526001600160a01b039091166004820152602401610244565b60018260048111156102c0576102c0611df4565b1480156102cc57508015155b156102ea5760405163887efaa560e01b815260040160405180910390fd5b600181141580156102fa57508015155b156103185760405163887efaa560e01b815260040160405180910390fd5b61033f82600481111561032d5761032d611df4565b600080516020611fbe83398151915255565b6000600080516020611ffe8339815191526001600160a01b0380891660009081526020839052604090206001810154929350911633146103a957600181015460405163bf89df8360e01b81526001600160a01b039091166004820152336024820152604401610244565b6103b58888888861145f565b866001600160a01b0316336001600160a01b0316896001600160a01b03167f4ab602199efe705581978cabf4102049f6ee95185921d83e76dfc368067fe9758960405161040491815260200190565b60405180910390a4505061042481600080516020611fbe83398151915255565b505050505050565b60036000610446600080516020611fbe8339815191525490565b9050600282600481111561045c5761045c611df4565b118015610471575061046f61020f611380565b155b1561047e57610223611380565b600482600481111561049257610492611df4565b1480156104a757506104a5610274611380565b155b156104b457610288611380565b60018260048111156104c8576104c8611df4565b1480156104d457508015155b156104f25760405163887efaa560e01b815260040160405180910390fd5b6001811415801561050257508015155b156105205760405163887efaa560e01b815260040160405180910390fd5b61053582600481111561032d5761032d611df4565b6001600160a01b0384166000908152600080516020611ffe8339815191526020819052604082209091610567876114e6565b60018301549091506001600160a01b031633146105ae57600182015460405163bf89df8360e01b81526001600160a01b039091166004820152336024820152604401610244565b60006105ba888861150d565b9050806105dd5760405163d14e7c9b60e01b815260016004820152602401610244565b81546040518881526001600160a01b03918216918a16907ff6ce0aa504327e5ba8c211a9933cb380a53dedf29b60d4f0844729064ac029fe906020015b60405180910390a35050505061063c81600080516020611fbe83398151915255565b50505050565b6003600061065c600080516020611fbe8339815191525490565b9050600282600481111561067257610672611df4565b118015610687575061068561020f611380565b155b1561069457610223611380565b60048260048111156106a8576106a8611df4565b1480156106bd57506106bb610274611380565b155b156106ca57610288611380565b60018260048111156106de576106de611df4565b1480156106ea57508015155b156107085760405163887efaa560e01b815260040160405180910390fd5b6001811415801561071857508015155b156107365760405163887efaa560e01b815260040160405180910390fd5b61074b82600481111561032d5761032d611df4565b6001600160a01b0384166000908152600080516020611ffe833981519152602081905260408220909161077c611380565b60018301549091506001600160a01b038083169116146107c857600182015460405163bf89df8360e01b81526001600160a01b0391821660048201529082166024820152604401610244565b6001600160a01b0387166000908152600080516020611fde8339815191526020908152604082206001908101805491820181558352912001869055600061080e886114e6565b80546040518981529192506001600160a01b0390811691908a16907f8adde73675979995c8a86acbad75b3609a7dcf2a8efb3917585f4b446d8927e49060200161061a565b60408051608081018252600080825260606020830181905292820181905291810191909152610881826114e6565b6040805160808101825282546001600160a01b031681526001830180548351602082810282018101909552818152929493808601939291908301828280156108e857602002820191906000526020600020905b8154815260200190600101908083116108d4575b50505091835250506002919091015460ff8082161515602084015261010090910416151560409091015292915050565b60036000610932600080516020611fbe8339815191525490565b9050600282600481111561094857610948611df4565b11801561095d575061095b61020f611380565b155b1561096a57610223611380565b600482600481111561097e5761097e611df4565b1480156109935750610991610274611380565b155b156109a057610288611380565b60018260048111156109b4576109b4611df4565b1480156109c057508015155b156109de5760405163887efaa560e01b815260040160405180910390fd5b600181141580156109ee57508015155b15610a0c5760405163887efaa560e01b815260040160405180910390fd5b610a2182600481111561032d5761032d611df4565b6000600080516020611ffe8339815191526001600160a01b03808a166000908152602083905260409020600181015492935091163314610a8b57600181015460405163bf89df8360e01b81526001600160a01b039091166004820152336024820152604401610244565b610a988989898989611635565b876001600160a01b0316896001600160a01b03167fa62b3b9c0f77cdc5e48921c5696b03608cdce23ce96b44f2014bb257ddccb7c460405160405180910390a35050610af081600080516020611fbe83398151915255565b50505050505050565b6001600160a01b0381166000908152600080516020611ffe8339815191526020818152604092839020600201805484518184028101840190955280855260609492830182828015610b7357602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610b55575b5050505050915050919050565b60036000610b9a600080516020611fbe8339815191525490565b90506002826004811115610bb057610bb0611df4565b118015610bc55750610bc361020f611380565b155b15610bd257610223611380565b6004826004811115610be657610be6611df4565b148015610bfb5750610bf9610274611380565b155b15610c0857610288611380565b6001826004811115610c1c57610c1c611df4565b148015610c2857508015155b15610c465760405163887efaa560e01b815260040160405180910390fd5b60018114158015610c5657508015155b15610c745760405163887efaa560e01b815260040160405180910390fd5b610c8982600481111561032d5761032d611df4565b6001600160a01b038a81166000908152600080516020611ffe8339815191526020819052604090912060010154909116338114610cea5760405163bf89df8360e01b81526001600160a01b0382166004820152336024820152604401610244565b610cfa8c8c8c8c8c8c8c8c6116c5565b886001600160a01b03168c6001600160a01b03167f0d2df14c824664732d7089f8fe0a9b8399811e909a3faacd16c648a335109a3360405160405180910390a35050610d5281600080516020611fbe83398151915255565b50505050505050505050565b6000600080516020611ffe833981519152818181610d7b8661174a565b600301546001600160a01b031681526020810191909152604090810160002081516101208101909252805482908290610db390611e0a565b80601f0160208091040260200160405190810160405280929190818152602001828054610ddf90611e0a565b8015610e2c5780601f10610e0157610100808354040283529160200191610e2c565b820191906000526020600020905b815481529060010190602001808311610e0f57829003601f168201915b505050918352505060018201546001600160a01b03166020808301919091526002830180546040805182850281018501825282815294019392830182828015610e9e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610e80575b5050509183525050600382015460ff1615156020820152600482015460408201526005820154606082015260068201546080820152600782015460a082015260089091015460c090910152905060005b816040015151811015610f4b57846001600160a01b031682604001518281518110610f1b57610f1b611e44565b60200260200101516001600160a01b031603610f3957949350505050565b80610f4381611e70565b915050610eee565b50600019949350505050565b60036000610f71600080516020611fbe8339815191525490565b90506002826004811115610f8757610f87611df4565b118015610f9c5750610f9a61020f611380565b155b15610fa957610223611380565b6004826004811115610fbd57610fbd611df4565b148015610fd25750610fd0610274611380565b155b15610fdf57610288611380565b6001826004811115610ff357610ff3611df4565b148015610fff57508015155b1561101d5760405163887efaa560e01b815260040160405180910390fd5b6001811415801561102d57508015155b1561104b5760405163887efaa560e01b815260040160405180910390fd5b61106082600481111561032d5761032d611df4565b600061106a61178c565b6001600160a01b038082166000908152600080516020611ffe833981519152602052604090206001015491925016156110c1576040516307fefd1f60e01b81526001600160a01b0382166004820152602401610244565b6110d1818b8b8b8b8b8b8b6116c5565b806001600160a01b0316886001600160a01b03167ffd73b4fde809de38770a6f0170160c2c1a4fb8f80c80d33658e98140d64966f160405160405180910390a35061112881600080516020611fbe83398151915255565b505050505050505050565b6001600160a01b0381166000908152600080516020611fde8339815191526020908152604091829020600181018054845181850281018501909552808552606094600080516020611ffe83398151915294909291908301828280156111b757602002820191906000526020600020905b8154815260200190600101908083116111a3575b505050505092505050919050565b61121f6040518061012001604052806060815260200160006001600160a01b031681526020016060815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081525090565b61122882611807565b6040518061012001604052908160008201805461124490611e0a565b80601f016020809104026020016040519081016040528092919081815260200182805461127090611e0a565b80156112bd5780601f10611292576101008083540402835291602001916112bd565b820191906000526020600020905b8154815290600101906020018083116112a057829003601f168201915b505050918352505060018201546001600160a01b0316602080830191909152600283018054604080518285028101850182528281529401939283018282801561132f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611311575b5050509183525050600382015460ff1615156020820152600482015460408201526005820154606082015260068201546080820152600782015460a082015260089091015460c09091015292915050565b336014361080159061139a57506001600160a01b03811630145b156113aa575060131936013560601c5b90565b6001600160a01b03811660009081527fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c825602052604081205460ff168061143157507fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c8235b6001600160a01b0383166000908152600191909101602052604090205460ff165b92915050565b60007fec717508ea0d3d9f736b2da60dd18c1864c124710105fae8984f76b69eb3c823611410565b7fdc662b6192622eddc6e089aea0ceba83a6d6004cf0824f8f89d137cc0bb9622781156114b4576001600160a01b038086166000908152602083815260408083209388168352929052208054841790556114df565b6001600160a01b03808616600090815260208381526040808320938816835292905220805484191690555b5050505050565b6001600160a01b03166000908152600080516020611fde8339815191526020526040902090565b6001600160a01b0382166000908152600080516020611fde83398151915260205260408120600080516020611ffe8339815191529082805b6001830154811015611591578583600101828154811061156757611567611e44565b90600052602060002001540361157f57809150611591565b8061158981611e70565b915050611545565b50600182015481036115a95760009350505050611431565b6001828101546000916115bb91611e89565b90508260010181815481106115d2576115d2611e44565b90600052602060002001548360010183815481106115f2576115f2611e44565b6000918252602090912001556001830180548061161157611611611e9c565b60019003818190600052602060002001600090559055600194505050505092915050565b6001600160a01b038581166000908152600080516020611fde8339815191526020908152604090912080546001600160a01b0319169287169290921782558451600080516020611ffe833981519152929161169791600184019188019061181d565b50600201805461ffff191693151561ff00191693909317610100921515929092029190911790915550505050565b6001600160a01b0388166000908152600080516020611ffe83398151915260208190526040909120806116f9898b83611efd565b506001810180546001600160a01b0319166001600160a01b0398909816979097179096555060038501805460ff19169415159490941790935560048401919091556005830155600690910155505050565b60007fd5e768d90a086ea7b33932448c5752ff84f596734910969a9da74dd838b9b9755b6001600160a01b039092166000908152602092909252506040902090565b6000807f20ced3562caba8901b8e6c0f45f2eefc88fe6f62c9647c3abea04219d18063b580546000906117be90611e70565b91829055506117ce600143611e89565b406040516020016117e9929190918252602082015260400190565b60408051601f19818403018152919052805160209091012092915050565b6000600080516020611ffe83398151915261176e565b828054828255906000526020600020908101928215611858579160200282015b8281111561185857825182559160200191906001019061183d565b50611864929150611868565b5090565b5b808211156118645760008155600101611869565b80356001600160a01b038116811461189457600080fd5b919050565b8035801515811461189457600080fd5b600080600080608085870312156118bf57600080fd5b6118c88561187d565b93506118d66020860161187d565b9250604085013591506118eb60608601611899565b905092959194509250565b6000806040838503121561190957600080fd5b6119128361187d565b946020939093013593505050565b60006020828403121561193257600080fd5b61193b8261187d565b9392505050565b602080825282516001600160a01b0316828201528281015160806040840152805160a0840181905260009291820190839060c08601905b808310156119995783518252928401926001929092019190840190611979565b50604087015115156060870152606087015193506119bb608087018515159052565b9695505050505050565b634e487b7160e01b600052604160045260246000fd5b600080600080600060a086880312156119f357600080fd5b6119fc8661187d565b94506020611a0b81880161187d565b9450604087013567ffffffffffffffff80821115611a2857600080fd5b818901915089601f830112611a3c57600080fd5b813581811115611a4e57611a4e6119c5565b8060051b604051601f19603f83011681018181108582111715611a7357611a736119c5565b60405291825284820192508381018501918c831115611a9157600080fd5b938501935b82851015611aaf57843584529385019392850192611a96565b809850505050505050611ac460608701611899565b9150611ad260808701611899565b90509295509295909350565b6020808252825182820181905260009190848201906040850190845b81811015611b1f5783516001600160a01b031683529284019291840191600101611afa565b50909695505050505050565b60008083601f840112611b3d57600080fd5b50813567ffffffffffffffff811115611b5557600080fd5b602083019150836020828501011115611b6d57600080fd5b9250929050565b60008060008060008060008060e0898b031215611b9057600080fd5b611b998961187d565b9750602089013567ffffffffffffffff811115611bb557600080fd5b611bc18b828c01611b2b565b9098509650611bd4905060408a0161187d565b9450611be260608a01611899565b979a96995094979396956080850135955060a08501359460c001359350915050565b600080600080600080600060c0888a031215611c1f57600080fd5b873567ffffffffffffffff811115611c3657600080fd5b611c428a828b01611b2b565b9098509650611c5590506020890161187d565b9450611c6360408901611899565b969995985093966060810135956080820135955060a0909101359350915050565b6020808252825182820181905260009190848201906040850190845b81811015611b1f57835183529284019291840191600101611ca0565b6000815180845260005b81811015611ce257602081850181015186830182015201611cc6565b506000602082860101526020601f19601f83011685010191505092915050565b600081518084526020808501945080840160005b83811015611d3b5781516001600160a01b031687529582019590820190600101611d16565b509495945050505050565b6020815260008251610120806020850152611d65610140850183611cbc565b91506020850151611d8160408601826001600160a01b03169052565b506040850151848303601f19016060860152611d9d8382611d02565b9250506060850151611db3608086018215159052565b50608085015160a085015260a085015160c085015260c085015160e085015260e0850151610100818187015280870151838701525050508091505092915050565b634e487b7160e01b600052602160045260246000fd5b600181811c90821680611e1e57607f821691505b602082108103611e3e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611e8257611e82611e5a565b5060010190565b8181038181111561143157611431611e5a565b634e487b7160e01b600052603160045260246000fd5b601f821115611ef857600081815260208120601f850160051c81016020861015611ed95750805b601f850160051c820191505b8181101561042457828155600101611ee5565b505050565b67ffffffffffffffff831115611f1557611f156119c5565b611f2983611f238354611e0a565b83611eb2565b6000601f841160018114611f5d5760008515611f455750838201355b600019600387901b1c1916600186901b1783556114df565b600083815260209020601f19861690835b82811015611f8e5786850135825560209485019460019092019101611f6e565b5086821015611fab5760001960f88860031b161c19848701351681555b505060018560011b018355505050505056fe20ced3562caba8901b8e6c0f45f2eefc88fe6f62c9647c3abea04219d18063b62595278b5418f83c9fa36a8f4776a43941e2fee2d557036ff22ad4d7597c28cc2595278b5418f83c9fa36a8f4776a43941e2fee2d557036ff22ad4d7597c28cba264697066735822122004973d231e33f1eb39c346f6b547e8399f0c2443e80f5ec227dcedfe9b73467c64736f6c63430008110033";

type OracleQueueConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleQueueConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleQueue__factory extends ContractFactory {
  constructor(...args: OracleQueueConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OracleQueue> {
    return super.deploy(overrides || {}) as Promise<OracleQueue>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OracleQueue {
    return super.attach(address) as OracleQueue;
  }
  override connect(signer: Signer): OracleQueue__factory {
    return super.connect(signer) as OracleQueue__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleQueueInterface {
    return new utils.Interface(_abi) as OracleQueueInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleQueue {
    return new Contract(address, _abi, signerOrProvider) as OracleQueue;
  }
}
