import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x2a574976C9C463665dB97f32C84969E3484813C5',
      106: '0x2a574976C9C463665dB97f32C84969E3484813C5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.te6,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x7C6C4629e4bc383bbE02d450a5b2605929E2eA42',
      106: '0x7C6C4629e4bc383bbE02d450a5b2605929E2eA42',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.te9,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x9165503d5389bEB0E736dAA5241010a5236Acc1D',
      106: '0x9165503d5389bEB0E736dAA5241010a5236Acc1D',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.te12,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x5a82a790dD313baD0e15DFbb2d4DB290Cb9149Ce',
      106: '0x5a82a790dD313baD0e15DFbb2d4DB290Cb9149Ce',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: serializedTokens.te18,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x8BdaB0da401360Fc6d781Cfd1BC27b8E46B537EF',
      106: '0x8BdaB0da401360Fc6d781Cfd1BC27b8E46B537EF',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
