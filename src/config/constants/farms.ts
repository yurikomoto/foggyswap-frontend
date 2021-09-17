import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  // {
  //   pid: 0,
  //   lpSymbol: 'WAG',
  //   lpAddresses: {
  //     111: '0xE51267C6780Bce26e76d3536baF5D8795d8dC883',
  //     106: '0xE51267C6780Bce26e76d3536baF5D8795d8dC883',
  //   },
  //   token: serializedTokens.syrup,
  //   quoteToken: serializedTokens.wvlx,
  // },
  {
    pid: 1,
    lpSymbol: 'VLX_TE6 LP',
    lpAddresses: {
      111: '0x4a7Cbd0Aa9E113251698c3851690f8D4277b6AdD',
      106: '0x4a7Cbd0Aa9E113251698c3851690f8D4277b6AdD',
    },
    token: serializedTokens.wvlx,
    quoteToken: serializedTokens.te6,
  },
  {
    pid: 2,
    lpSymbol: 'VLX_TE9 LP',
    lpAddresses: {
      111: '0x02F1D5BD67580d8Ac0fA611Bc23953Fce19a9935',
      106: '0x02F1D5BD67580d8Ac0fA611Bc23953Fce19a9935',
    },
    token: serializedTokens.wvlx,
    quoteToken: serializedTokens.te9,
  },
  {
    pid: 3,
    lpSymbol: 'VLX_TE12 LP',
    lpAddresses: {
      111: '0x81443B242A30CbCd2F007990bd4713E7ad5891E6',
      106: '0x81443B242A30CbCd2F007990bd4713E7ad5891E6',
    },
    token: serializedTokens.wvlx,
    quoteToken: serializedTokens.te12,
  },
  {
    pid: 4,
    lpSymbol: 'VLX_TE18 LP',
    lpAddresses: {
      111: '0xD98AF4A17690066DcF7057c5F4EdA299Ed44DB0b',
      106: '0xD98AF4A17690066DcF7057c5F4EdA299Ed44DB0b',
    },
    token: serializedTokens.wvlx,
    quoteToken: serializedTokens.te18,
  },
  {
    pid: 5,
    lpSymbol: 'VLX_ETH LP',
    lpAddresses: {
      111: '0x0bF711BE88bEA7b4BcDa0aBF357a1b1a4422F66E',
      106: '0x0bF711BE88bEA7b4BcDa0aBF357a1b1a4422F66E',
    },
    token: serializedTokens.wvlx,
    quoteToken: serializedTokens.weth,
  },
  {
    pid: 6,
    lpSymbol: 'VLX_USDT LP',
    lpAddresses: {
      111: '0xb6C8cD97985d4e170e6f40C6d34e8911CDfBAbcD',
      106: '0xb6C8cD97985d4e170e6f40C6d34e8911CDfBAbcD',
    },
    token: serializedTokens.wvlx,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 7,
    lpSymbol: 'VLX_USDC LP',
    lpAddresses: {
      111: '0x421aD110418e89d33988eBac3426a09B35efCFEb',
      106: '0x421aD110418e89d33988eBac3426a09B35efCFEb',
    },
    token: serializedTokens.wvlx,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 8,
    lpSymbol: 'VLX_BUSD LP',
    lpAddresses: {
      111: '0x6A100008591912681EDffB3dDcAb45288D004e34',
      106: '0x6A100008591912681EDffB3dDcAb45288D004e34',
    },
    token: serializedTokens.wvlx,
    quoteToken: serializedTokens.busd,
  },
]

export default farms
