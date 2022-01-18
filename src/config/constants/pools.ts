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
            111: '0x89a9648a910244C172BAE8F004a0DCc4772dB9c0',
            106: '',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '4.25',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 1,
          stakingToken: serializedTokens.te6,
          earningToken: serializedTokens.cake,
          contractAddress: {
            111: '0xfd482d069A0708E54CB70b464Bb4Caf57B00e1Fc',
            106: '',
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
            111: '0x3bE7C997cf946C9AF492A6BBb194bCbb7b1C5E5d',
            106: '',
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
            111: '0x70b00521b93d65C43C7B8FbEC7adBcd58FF01435',
            106: '',
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
            111: '0x2ED0fF6d27C032C2Db907daec99fFC279733d490',
            106: '',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '1',
          sortOrder: 1,
          isFinished: false,
        },
      ]

export default pools
