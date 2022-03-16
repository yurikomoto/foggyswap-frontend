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
            106: '0xB98BbAF45bCFbdB37690c7d021437BE15a562209',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '20',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 2,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.ada,
          contractAddress: {
            111: '',
            106: '0x4E80954B90ce9274F3533752371e1b937E1AAc39',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.826719',
          sortOrder: 3,
          isFinished: true,
        },
        {
          sousId: 3,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.adapad,
          contractAddress: {
            111: '',
            106: '0xe06E6ad9d046f2F45BB99EFadA66ddd9D8cE5855',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.3215',
          sortOrder: 4,
          isFinished: false,
        },
        {
          sousId: 4,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.wag,
          contractAddress: {
            111: '',
            106: '0xB71fcE0D2D3570b21e136Ae1f056F26B177541C3',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.064',
          sortOrder: 5,
          isFinished: false,
        },
        // {
        //   sousId: 5,
        //   stakingToken: serializedTokens.cake,
        //   earningToken: serializedTokens.wmt,
        //   contractAddress: {
        //     111: '',
        //     106: '0xb3cb1605FDAEFDc150825DB4Fc438C5b7D738DDe',
        //   },
        //   poolCategory: PoolCategory.CORE,
        //   harvest: true,
        //   tokenPerBlock: '0.0192',
        //   sortOrder: 6,
        //   isFinished: false,
        // },
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
