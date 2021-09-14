import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0xE51267C6780Bce26e76d3536baF5D8795d8dC883',
      106: '0xE51267C6780Bce26e76d3536baF5D8795d8dC883',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.bnb,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x8283b7D18B957FE74e5545e6868b77bb2aF4dC2B',
      106: '0x8283b7D18B957FE74e5545e6868b77bb2aF4dC2B',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.eth,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x66600fb4DAA2C61215ac8B8eEaD3Af85A094c754',
      106: '0x66600fb4DAA2C61215ac8B8eEaD3Af85A094c754',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.usdt,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x32AF2cfaAD93554d6c6fFa34ac48A68D2D0EB9cb',
      106: '0x32AF2cfaAD93554d6c6fFa34ac48A68D2D0EB9cb',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: serializedTokens.bnb,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0xc050fBdeeA11F20DA6015cD1cf962D8e7f771638',
      106: '0xc050fBdeeA11F20DA6015cD1cf962D8e7f771638',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 5,
    stakingToken: serializedTokens.eth,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0xfa29Da534cF637213F20103F5F7ea03b4a1ED9c9',
      106: '0xfa29Da534cF637213F20103F5F7ea03b4a1ED9c9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 6,
    stakingToken: serializedTokens.usdt,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0xDb9c324c8C2680253CE05BeEB67EdB795E6FD8d3',
      106: '0xDb9c324c8C2680253CE05BeEB67EdB795E6FD8d3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
