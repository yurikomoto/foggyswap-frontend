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
        {
          pid: 11,
          lpSymbol: 'ADA_XRAY LP',
          lpAddresses: {
            111: '',
            106: '0xAB5aaD53320498B54EC1000CCbd293a6386B852D',
          },
          token: serializedTokens.xray,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 12,
          lpSymbol: 'ADA_PAVIA LP',
          lpAddresses: {
            111: '',
            106: '0xCe9250cDc7DAB5038809f78Ba147f99C7eA83a20',
          },
          token: serializedTokens.pavia,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 13,
          lpSymbol: 'ADA_VYFI LP',
          lpAddresses: {
            111: '',
            106: '0x996EA5f6Fb82f565e41F64Bf10B951Fe40b81441',
          },
          token: serializedTokens.vyfi,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 14,
          lpSymbol: 'ADA_AADA LP',
          lpAddresses: {
            111: '',
            106: '0x78c9997e126E7a11C4bb6465bdD278643568A2Cd',
          },
          token: serializedTokens.aada,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 15,
          lpSymbol: 'ADA_CLAP LP',
          lpAddresses: {
            111: '',
            106: '0x2F153F7D04c58516264ab7753c98AB88D6280339',
          },
          token: serializedTokens.clap,
          quoteToken: serializedTokens.ada,
        },
        {
          pid: 17,
          lpSymbol: 'ADA_ADAX LP',
          lpAddresses: {
            111: '',
            106: '0xc89cE8E36E0acfE4F39F31d2D265A6d143319CD2',
          },
          token: serializedTokens.adax,
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
