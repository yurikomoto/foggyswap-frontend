import { ChainId } from '@astroswap/sdk'

import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

export const VLX_ASTRO_LP_PID = chainId === MAINNET ? 1 : 9
export const VLX_USDT_LP_PID = chainId === MAINNET ? 5 : 6

const farms: SerializedFarmConfig[] =
  chainId === MAINNET
    ? [
        {
          pid: 0,
          lpSymbol: 'ASTRO',
          lpAddresses: {
            111: '0xb830d8213e2c3dD621037703D05A5e594387B6Be',
            106: '0xaBf26902Fd7B624e0db40D31171eA9ddDf078351',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 1,
          lpSymbol: 'ADA_Astro LP',
          lpAddresses: {
            111: '0xdC415f9c745a28893b0Cbb6A8eaC1bb6ed42C581',
            106: '0x33f879690C165cC320B0BA04cEb1F9CeaC80F376',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 2,
          lpSymbol: 'ADA_ETH LP',
          lpAddresses: {
            111: '0x8A70d2a3e2cba2CAD61FbA419E62eB821F18Bb57',
            106: '0x7c3F1eA99770aa23Fe1b19097c93BB0cF34C8351',
          },
          token: serializedTokens.weth,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 3,
          lpSymbol: 'ADA_BUSD LP',
          lpAddresses: {
            111: '0xe25107384e3d23403c4537967D34cCe02A2b56c6',
            106: '0x8e2B762Bee3E2bf2C8fB0cdd04274042748D6C23',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 4,
          lpSymbol: 'ADA_USDC LP',
          lpAddresses: {
            111: '0x33ea93e391aF9cAA4b8e9C3368236B93DFCF39C4',
            106: '0x757Ac3cDFfa84b67dFC58c5880Aa8037ef5a23d5',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 5,
          lpSymbol: 'ADA_USDT LP',
          lpAddresses: {
            111: '0xF20c93c5e5F534C9D95567497Ea17a841164d37b',
            106: '0x7F3cB73FC470c2c9F543FdD17dF4De0e97b51A97',
          },
          token: serializedTokens.usdt,
          quoteToken: serializedTokens.wvlx,
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
            111: '0x33106157A082EB2B5951C98D3A01eDF84BE3Efbf',
            106: '',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 1,
          lpSymbol: 'VLX_TE6 LP',
          lpAddresses: {
            111: '0x6155546674938FCf82F56DB25D3Cc73C92a16f6c',
            106: '',
          },
          token: serializedTokens.te6,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 2,
          lpSymbol: 'VLX_TE9 LP',
          lpAddresses: {
            111: '0xE88Ba0F4A34cdFC4154c3F55dECB88ab9970B4DB',
            106: '',
          },
          token: serializedTokens.te9,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 3,
          lpSymbol: 'VLX_TE12 LP',
          lpAddresses: {
            111: '0xB5dcC22D820CDE64B19Fd98a24A16a73C0411F12',
            106: '',
          },
          token: serializedTokens.te12,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 4,
          lpSymbol: 'VLX_TE18 LP',
          lpAddresses: {
            111: '0x59d8eDC1E8D71b85827d82510FC50FCc840A3aA1',
            106: '',
          },
          token: serializedTokens.te18,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 5,
          lpSymbol: 'VLX_ETH LP',
          lpAddresses: {
            111: '0x58d1C019b06b1153741c9EbE47b0D49Aec3CbC24',
            106: '',
          },
          token: serializedTokens.weth,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 6,
          lpSymbol: 'VLX_USDT LP',
          lpAddresses: {
            111: '0x9a14356ecdCed3347358Fb4BE4A6efEd61523027',
            106: '',
          },
          token: serializedTokens.usdt,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 7,
          lpSymbol: 'VLX_USDC LP',
          lpAddresses: {
            111: '0x31Afb0CCB31D79818faF7AfCb5230A4625B40B61',
            106: '',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 8,
          lpSymbol: 'VLX_BUSD LP',
          lpAddresses: {
            111: '0x79F7f5E2c438775eEc7B3570F3cf73D70d66aE58',
            106: '',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 9,
          lpSymbol: 'VLX_ASTRO LP',
          lpAddresses: {
            111: '0x2469B9C215b398ac5FB59fA9AC1a25a877C87876',
            106: '',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.wvlx,
        },
      ]

export default farms
