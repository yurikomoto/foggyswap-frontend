import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0xa9dBdF2e4104B17c91CBecAE02e6d49ebA3eE541',
      106: '0xa9dBdF2e4104B17c91CBecAE02e6d49ebA3eE541',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.te6,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x00DEcB04CE648aA77EC22eC3D050A639B565D3FA',
      106: '0x00DEcB04CE648aA77EC22eC3D050A639B565D3FA',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.te9,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x2f1D0093e7866Fa6a337fa6b176661C2fCE22831',
      106: '0x2f1D0093e7866Fa6a337fa6b176661C2fCE22831',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.te12,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x41115Cdb43B59f9a7094F8fE5141B9e15EAe70c3',
      106: '0x41115Cdb43B59f9a7094F8fE5141B9e15EAe70c3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: serializedTokens.te18,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x7591e6794Be6c260700943cf3279D61A74711Bcf',
      106: '0x7591e6794Be6c260700943cf3279D61A74711Bcf',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
