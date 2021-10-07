import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x9C1A0dAC312A663E9EC5441adAefaB02a2E3fcfB',
      106: '0x9C1A0dAC312A663E9EC5441adAefaB02a2E3fcfB',
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
      111: '0x32bdd14928061567d856425D2922B02718641A4d',
      106: '0x32bdd14928061567d856425D2922B02718641A4d',
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
      111: '0x9F74384f38f4Bb0343d0634f08E55588c94449Ca',
      106: '0x9F74384f38f4Bb0343d0634f08E55588c94449Ca',
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
      111: '0xaE39713ccC1C2Ee81EeEC9DA2733184cE3D1CE0D',
      106: '0xaE39713ccC1C2Ee81EeEC9DA2733184cE3D1CE0D',
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
      111: '0x8Ada7A9925f25e3caAC06bF97805E8191cdeD8B0',
      106: '0x8Ada7A9925f25e3caAC06bF97805E8191cdeD8B0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
