import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      111: '0x0eD58Aa06C9ceBB1DdF8208C07f28fa21ec6fcE4',
      106: '0x0eD58Aa06C9ceBB1DdF8208C07f28fa21ec6fcE4',
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
      111: '0x5E32b9036CC17FAFeB0E39D916E47C25b95E686c',
      106: '0x5E32b9036CC17FAFeB0E39D916E47C25b95E686c',
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
      111: '0x9610ecd805EcDc210D3863fd9E6A613859c00a45',
      106: '0x9610ecd805EcDc210D3863fd9E6A613859c00a45',
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
      111: '0x998Ea6F2A1D2237959d6c4fD2AA42F045f585A96',
      106: '0x998Ea6F2A1D2237959d6c4fD2AA42F045f585A96',
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
      111: '0xB9E2C1b7f341ebF82a172c4C701E2cae84163F66',
      106: '0xB9E2C1b7f341ebF82a172c4C701E2cae84163F66',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10000000000',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
