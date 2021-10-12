import { ChainId } from '@wagyu-swap/sdk'

import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

export const VLX_WAG_LP_PID = chainId === MAINNET ? 1 : 9
export const VLX_USDT_LP_PID = chainId === MAINNET ? 5 : 6

const farms: SerializedFarmConfig[] =
  chainId === MAINNET
    ? [
        {
          pid: 0,
          lpSymbol: 'WAG',
          lpAddresses: {
            111: '0xb830d8213e2c3dD621037703D05A5e594387B6Be',
            106: '0x40c8002c2887ADE2297AD48D9Dc101dE08bD104C',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 1,
          lpSymbol: 'VLX_WAG LP',
          lpAddresses: {
            111: '0xdC415f9c745a28893b0Cbb6A8eaC1bb6ed42C581',
            106: '0x1E4cf38D767364BfF986658c620302010d338bF0',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 2,
          lpSymbol: 'VLX_ETH LP',
          lpAddresses: {
            111: '0x8A70d2a3e2cba2CAD61FbA419E62eB821F18Bb57',
            106: '0x3601F724D9cC2f4C96A39CEc560F842151EDFEbe',
          },
          token: serializedTokens.weth,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 3,
          lpSymbol: 'VLX_BUSD LP',
          lpAddresses: {
            111: '0xe25107384e3d23403c4537967D34cCe02A2b56c6',
            106: '0xed4b109d49Fe69e6582fEb0fCBfD172F44c4CAED',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 4,
          lpSymbol: 'VLX_USDC LP',
          lpAddresses: {
            111: '0x33ea93e391aF9cAA4b8e9C3368236B93DFCF39C4',
            106: '0x2d5EB9519F2d745D84Ed6CD0b923073Fc794d423',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 5,
          lpSymbol: 'VLX_USDT LP',
          lpAddresses: {
            111: '0xF20c93c5e5F534C9D95567497Ea17a841164d37b',
            106: '0x92a86D1585918Bc077ddD9C7c63f32DAAe687923',
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
          lpSymbol: 'WAG',
          lpAddresses: {
            111: '0xb830d8213e2c3dD621037703D05A5e594387B6Be',
            106: '0x9C1Ac064Ef030b4213e49BD5A1fD203437dc6714',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 1,
          lpSymbol: 'VLX_TE6 LP',
          lpAddresses: {
            111: '0xC056BBe888547986Ad2bb0Ff7F9fA484A0c27743',
            106: '0xC056BBe888547986Ad2bb0Ff7F9fA484A0c27743',
          },
          token: serializedTokens.te6,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 2,
          lpSymbol: 'VLX_TE9 LP',
          lpAddresses: {
            111: '0x40d4fC460eF4C76a20CE1BaEAEB6b921050f483f',
            106: '0x40d4fC460eF4C76a20CE1BaEAEB6b921050f483f',
          },
          token: serializedTokens.te9,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 3,
          lpSymbol: 'VLX_TE12 LP',
          lpAddresses: {
            111: '0xc40969848d5B549138f0b1B499a69fA9B510407d',
            106: '0xc40969848d5B549138f0b1B499a69fA9B510407d',
          },
          token: serializedTokens.te12,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 4,
          lpSymbol: 'VLX_TE18 LP',
          lpAddresses: {
            111: '0xf01D3d7827211626E7b76DD583EaC8b369d046b0',
            106: '0xf01D3d7827211626E7b76DD583EaC8b369d046b0',
          },
          token: serializedTokens.te18,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 5,
          lpSymbol: 'VLX_ETH LP',
          lpAddresses: {
            111: '0x8A70d2a3e2cba2CAD61FbA419E62eB821F18Bb57',
            106: '0x8A70d2a3e2cba2CAD61FbA419E62eB821F18Bb57',
          },
          token: serializedTokens.weth,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 6,
          lpSymbol: 'VLX_USDT LP',
          lpAddresses: {
            111: '0xF20c93c5e5F534C9D95567497Ea17a841164d37b',
            106: '0xF20c93c5e5F534C9D95567497Ea17a841164d37b',
          },
          token: serializedTokens.usdt,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 7,
          lpSymbol: 'VLX_USDC LP',
          lpAddresses: {
            111: '0x33ea93e391aF9cAA4b8e9C3368236B93DFCF39C4',
            106: '0x33ea93e391aF9cAA4b8e9C3368236B93DFCF39C4',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 8,
          lpSymbol: 'VLX_BUSD LP',
          lpAddresses: {
            111: '0xe25107384e3d23403c4537967D34cCe02A2b56c6',
            106: '0xe25107384e3d23403c4537967D34cCe02A2b56c6',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 9,
          lpSymbol: 'VLX_WAG LP',
          lpAddresses: {
            111: '0xdC415f9c745a28893b0Cbb6A8eaC1bb6ed42C581',
            106: '0xdC415f9c745a28893b0Cbb6A8eaC1bb6ed42C581',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.wvlx,
        },
      ]

export default farms

/*
"VLX_TE6_LP": {
        "pair": "0x04394d1d07F24C30d82D06097301Da1f9732E54f",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x24f1a66765601999c853136611f5AC999Ca77F50"
    },
    "VLX_TE9_LP": {
        "pair": "0x3124E72d06f181a225e9E587C1ca4Da5E905Bd37",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xb8075860b634c367dA432a8Bc84ad1556AB19679"
    },
    "VLX_TE12_LP": {
        "pair": "0xBBf16449Aa3D7cd988810bf966982f68d1154023",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x660F4DfEe75a28525DdB7916556418CDc9b329D3"
    },
    "VLX_TE18_LP": {
        "pair": "0x4522640cF08B6acba90dDA9D4e6Ae3003b4e0ED7",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xE76592830037d81e1cD5A49d912e8BFf029901Be"
    },
    "VLX_ETH_LP": {
        "pair": "0x2537C7D256D7aec0f41BEf15C93Ec269D263F772",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x3538C7f88aDbc8ad1F435f7EA70287e26b926344"
    },
    "VLX_USDT_LP": {
        "pair": "0x681Ce22f568720eeFA34548d360c94721aCE1A50",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x6Ef054B3E3C3C83E14527E8fa593c2c4435A6ea4"
    },
    "VLX_USDC_LP": {
        "pair": "0xe29d45F71C3132391dFD0F92e54fcA74DE37c45A",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x6b82bDB5a1AdFfa3816D1F942D60f0269647C646"
    },
    "VLX_BUSD_LP": {
        "pair": "0x02d14903A8423027643e185ae0277D1d09e22497",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xe2172a8E1762ae9962A59EE88a731522A61a4cc9"
    },
    "VLX_WAG_LP": {
        "pair": "0x518F4Fea9084D981f5faA63F7b549eC922333e54",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x1bC60cFc522A264639866D47C634EfCdddd624eA"
    }
*/
