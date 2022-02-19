import { ChainId } from '@astroswap/sdk'

import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

export const ADA_ASTRO_LP_PID = chainId === MAINNET ? 1 : 1
export const ADA_BUSD_LP_PID = chainId === MAINNET ? 3 : 5

const farms: SerializedFarmConfig[] =
  chainId === MAINNET
    ? [
        {
          pid: 0,
          lpSymbol: 'ASTRO',
          lpAddresses: {
            111: '',
            106: '0x72eB7CA07399Ec402c5b7aa6A65752B6A1Dc0C27',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 1,
          lpSymbol: 'ADA_ASTRO LP',
          lpAddresses: {
            111: '',
            106: '0xeE5266e5b54B5Bc55b969FB9Dc3B2A32E196Dd92',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 2,
          lpSymbol: 'ADA_VLX LP',
          lpAddresses: {
            111: '',
            106: '0x0513fdbEb64589f01269eee85B36C97d93Da40a1',
          },
          token: serializedTokens.wvlx,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 3,
          lpSymbol: 'ADA_BUSD LP',
          lpAddresses: {
            111: '',
            106: '0xc12e7E665B7d6537f87635655E70F7387Da12D90',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 5,
          lpSymbol: 'ADA_ADAPAD LP',
          lpAddresses: {
            111: '',
            106: '0xDB1C92B2a9b0eeEFf1307D4921b75724f87a80F0',
          },
          token: serializedTokens.adapad,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 6,
          lpSymbol: 'ADA_WAG LP',
          lpAddresses: {
            111: '',
            106: '0xd8f105Fd317d58f49e77eC048Ab6e2925cd16915',
          },
          token: serializedTokens.wag,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 7,
          lpSymbol: 'ADA_DANA LP',
          lpAddresses: {
            111: '',
            106: '0x69cf53f67aA38ea4091e6aabeF08ea21d5074E70',
          },
          token: serializedTokens.dana,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 8,
          lpSymbol: 'ADA_REVU LP',
          lpAddresses: {
            111: '',
            106: '0x9417AfAcd1880C5E8919Dbe9232181b3a4bF59Bc',
          },
          token: serializedTokens.revu,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 9,
          lpSymbol: 'ADA_MELD LP',
          lpAddresses: {
            111: '',
            106: '0xd18D20E4Df848868d43aB6c7259E046EceDE45fb',
          },
          token: serializedTokens.meld,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 10,
          lpSymbol: 'ADA_LQ LP',
          lpAddresses: {
            111: '',
            106: '0xB93e56451e5D98ff4104D915D33929cbEb0b6168',
          },
          token: serializedTokens.lq,
          quoteToken: serializedTokens.ada,
        },
      ]
    : [
        /**
         * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
         */
        {
          pid: 0,
          lpSymbol: 'Astro',
          lpAddresses: {
            111: '0x73E199C7AED3485B74e5A63f3A204407CE44A825',
            106: '',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.astro,
        },
        {
          pid: 1,
          lpSymbol: 'ADA_ASTRO LP',
          lpAddresses: {
            111: '0xF8A8dA66e3D7A7e696464A50061BbEe1A3cf9e6b',
            106: '',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 5,
          lpSymbol: 'ADA_BUSD LP',
          lpAddresses: {
            111: '0xDCa7E16a316D6283B970fd0E50E6Ae8c0B852B51',
            106: '',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.ada,
        },
      ]

export default farms
