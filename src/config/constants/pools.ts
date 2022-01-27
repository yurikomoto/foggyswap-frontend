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
            111: '',
            106: '0x68bc14654E9eF98E67c8D478430B1D68102e1C88',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '2.6',
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
      ]

export default pools
