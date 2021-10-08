import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x0FE7711dD2A622725FfB30f378145e1D40127f80',
      106: '0x0FE7711dD2A622725FfB30f378145e1D40127f80',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.3',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.te6,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x77e631209Cc3151c2835fF2B7585d8f0Db781aff',
      106: '0x77e631209Cc3151c2835fF2B7585d8f0Db781aff',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.te9,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0xf4BB219600ad1680cA381331bF9ADd4422844BcC',
      106: '0xf4BB219600ad1680cA381331bF9ADd4422844BcC',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.te12,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x98a6816Cd29F063Fe3c1ECA3492Bb2D5E36f467a',
      106: '0x98a6816Cd29F063Fe3c1ECA3492Bb2D5E36f467a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: serializedTokens.te18,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0xccE4829D6D2c04A006F774968bc41d1d2fe714cB',
      106: '0xccE4829D6D2c04A006F774968bc41d1d2fe714cB',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
