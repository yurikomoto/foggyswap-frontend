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
