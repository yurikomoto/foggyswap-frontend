import { ChainId } from '@astroswap/sdk'
import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] =
  chainId === MAINNET
    ? [
        {
          sousId: 0,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.cake,
          contractAddress: {
            111: '0x0FE7711dD2A622725FfB30f378145e1D40127f80',
            106: '0xa7e8280b8CE4f87dFeFc3d1F2254B5CCD971E852',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '3.25',
          sortOrder: 1,
          isFinished: false,
        },
      ]
    : [
        {
          sousId: 0,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.cake,
          contractAddress: {
            111: '0x2F1a6cbE5844516fdFA78f9a17F72cD60dd042b7',
            106: '',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '4.25',
          sortOrder: 1,
          isFinished: false,
        },
        // {
        //   sousId: 1,
        //   stakingToken: serializedTokens.te6,
        //   earningToken: serializedTokens.cake,
        //   contractAddress: {
        //     111: '0x8a68Eed82c2D91ED02aDf4A1a8BFF099C73374f3',
        //     106: '',
        //   },
        //   poolCategory: PoolCategory.CORE,
        //   harvest: true,
        //   tokenPerBlock: '1',
        //   sortOrder: 1,
        //   isFinished: false,
        // },
        // {
        //   sousId: 2,
        //   stakingToken: serializedTokens.te9,
        //   earningToken: serializedTokens.cake,
        //   contractAddress: {
        //     111: '0x873a2E7D6ce0A79F33cE7a4d0501f88C3CA8FCCB',
        //     106: '',
        //   },
        //   poolCategory: PoolCategory.CORE,
        //   harvest: true,
        //   tokenPerBlock: '1',
        //   sortOrder: 1,
        //   isFinished: false,
        // },
        // {
        //   sousId: 3,
        //   stakingToken: serializedTokens.te12,
        //   earningToken: serializedTokens.cake,
        //   contractAddress: {
        //     111: '0xdbc585d038494F5c1e2BC08a1c944d51595D0f4B',
        //     106: '',
        //   },
        //   poolCategory: PoolCategory.CORE,
        //   harvest: true,
        //   tokenPerBlock: '1',
        //   sortOrder: 1,
        //   isFinished: false,
        // },
        // {
        //   sousId: 4,
        //   stakingToken: serializedTokens.te18,
        //   earningToken: serializedTokens.cake,
        //   contractAddress: {
        //     111: '0x623D161c9D4a0d0A5EFB0eB20f65412f52da005c',
        //     106: '',
        //   },
        //   poolCategory: PoolCategory.CORE,
        //   harvest: true,
        //   tokenPerBlock: '1',
        //   sortOrder: 1,
        //   isFinished: false,
        // },
      ]

export default pools
