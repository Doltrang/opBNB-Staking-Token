/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { StakeFuture, StakeFutureInterface } from "../StakeFuture";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_balances",
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
    name: "_totalSupply",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
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
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
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
    name: "rewardPerToken",
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
    name: "rewardPerTokenStored",
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
    name: "rewardRate",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
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
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052670de0b6b3a764000060025534801561001c57600080fd5b50604051610f72380380610f72833981810160405281019061003e91906100db565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610160565b6000815190506100d581610149565b92915050565b600080604083850312156100ee57600080fd5b60006100fc858286016100c6565b925050602061010d858286016100c6565b9150509250929050565b600061012282610129565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b61015281610117565b811461015d57600080fd5b50565b610e038061016f6000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c80637b0a47ee1161008c578063c8f33c9111610066578063c8f33c911461024a578063cd3daf9d14610268578063d1af0c7d14610286578063df136d65146102a4576100e9565b80637b0a47ee146101e05780638b876347146101fe578063a694fc3a1461022e576100e9565b80633d18b912116100c85780633d18b9121461016a5780633eaaf86b146101745780636ebcf6071461019257806372f702f3146101c2576100e9565b80628cc262146100ee5780630700037d1461011e5780632e1a7d4d1461014e575b600080fd5b61010860048036038101906101039190610a6b565b6102c2565b6040516101159190610b8e565b60405180910390f35b61013860048036038101906101339190610a6b565b6103c4565b6040516101459190610b8e565b60405180910390f35b61016860048036038101906101639190610abd565b6103dc565b005b6101726105a7565b005b61017c610769565b6040516101899190610b8e565b60405180910390f35b6101ac60048036038101906101a79190610a6b565b61076f565b6040516101b99190610b8e565b60405180910390f35b6101ca610787565b6040516101d79190610b73565b60405180910390f35b6101e86107ad565b6040516101f59190610b8e565b60405180910390f35b61021860048036038101906102139190610a6b565b6107b3565b6040516102259190610b8e565b60405180910390f35b61024860048036038101906102439190610abd565b6107cb565b005b610252610998565b60405161025f9190610b8e565b60405180910390f35b61027061099e565b60405161027d9190610b8e565b60405180910390f35b61028e610a02565b60405161029b9190610b73565b60405180910390f35b6102ac610a26565b6040516102b99190610b8e565b60405180910390f35b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054670de0b6b3a7640000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461035561099e565b61035f9190610c8a565b600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103a99190610c30565b6103b39190610bff565b6103bd9190610ba9565b9050919050565b60066020528060005260406000206000915090505481565b336103e561099e565b600481905550426003819055506103fb816102c2565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600454600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600760008282546104969190610c8a565b9250508190555081600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104ec9190610c8a565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401610550929190610b4a565b602060405180830381600087803b15801561056a57600080fd5b505af115801561057e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a29190610a94565b505050565b336105b061099e565b600481905550426003819055506105c6816102c2565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600454600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b8152600401610733929190610b4a565b600060405180830381600087803b15801561074d57600080fd5b505af1158015610761573d6000803e3d6000fd5b505050505050565b60075481565b60086020528060005260406000206000915090505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60056020528060005260406000206000915090505481565b336107d461099e565b600481905550426003819055506107ea816102c2565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600454600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600760008282546108859190610ba9565b9250508190555081600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108db9190610ba9565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161094193929190610b13565b602060405180830381600087803b15801561095b57600080fd5b505af115801561096f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109939190610a94565b505050565b60035481565b60008060075414156109b45760045490506109ff565b600754670de0b6b3a7640000600254600354426109d19190610c8a565b6109db9190610c30565b6109e59190610c30565b6109ef9190610bff565b6004546109fc9190610ba9565b90505b90565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b600081359050610a3b81610d88565b92915050565b600081519050610a5081610d9f565b92915050565b600081359050610a6581610db6565b92915050565b600060208284031215610a7d57600080fd5b6000610a8b84828501610a2c565b91505092915050565b600060208284031215610aa657600080fd5b6000610ab484828501610a41565b91505092915050565b600060208284031215610acf57600080fd5b6000610add84828501610a56565b91505092915050565b610aef81610cbe565b82525050565b610afe81610d06565b82525050565b610b0d81610cfc565b82525050565b6000606082019050610b286000830186610ae6565b610b356020830185610ae6565b610b426040830184610b04565b949350505050565b6000604082019050610b5f6000830185610ae6565b610b6c6020830184610b04565b9392505050565b6000602082019050610b886000830184610af5565b92915050565b6000602082019050610ba36000830184610b04565b92915050565b6000610bb482610cfc565b9150610bbf83610cfc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610bf457610bf3610d2a565b5b828201905092915050565b6000610c0a82610cfc565b9150610c1583610cfc565b925082610c2557610c24610d59565b5b828204905092915050565b6000610c3b82610cfc565b9150610c4683610cfc565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610c7f57610c7e610d2a565b5b828202905092915050565b6000610c9582610cfc565b9150610ca083610cfc565b925082821015610cb357610cb2610d2a565b5b828203905092915050565b6000610cc982610cdc565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610d1182610d18565b9050919050565b6000610d2382610cdc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b610d9181610cbe565b8114610d9c57600080fd5b50565b610da881610cd0565b8114610db357600080fd5b50565b610dbf81610cfc565b8114610dca57600080fd5b5056fea26469706673582212203c139570c2fcfc6f75d3cd46083775f7ecc8bb5711665bf9bbe6b7d8e818aa0064736f6c63430008040033";

type StakeFutureConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakeFutureConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakeFuture__factory extends ContractFactory {
  constructor(...args: StakeFutureConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _stakingToken: PromiseOrValue<string>,
    _rewardsToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StakeFuture> {
    return super.deploy(
      _stakingToken,
      _rewardsToken,
      overrides || {}
    ) as Promise<StakeFuture>;
  }
  override getDeployTransaction(
    _stakingToken: PromiseOrValue<string>,
    _rewardsToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _stakingToken,
      _rewardsToken,
      overrides || {}
    );
  }
  override attach(address: string): StakeFuture {
    return super.attach(address) as StakeFuture;
  }
  override connect(signer: Signer): StakeFuture__factory {
    return super.connect(signer) as StakeFuture__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakeFutureInterface {
    return new utils.Interface(_abi) as StakeFutureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakeFuture {
    return new Contract(address, _abi, signerOrProvider) as StakeFuture;
  }
}