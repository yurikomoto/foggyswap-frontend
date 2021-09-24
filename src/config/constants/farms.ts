import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'WAG',
    lpAddresses: {
      111: '0x1cb91c74e838f0e0726adcf8e4f25f027e5feff8',
      106: '0x1cb91c74e838f0e0726adcf8e4f25f027e5feff8',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 1,
    lpSymbol: 'VLX_TE6 LP',
    lpAddresses: {
      111: '0x4a7Cbd0Aa9E113251698c3851690f8D4277b6AdD',
      106: '0x4a7Cbd0Aa9E113251698c3851690f8D4277b6AdD',
    },
    token: serializedTokens.te6,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 2,
    lpSymbol: 'VLX_TE9 LP',
    lpAddresses: {
      111: '0x02F1D5BD67580d8Ac0fA611Bc23953Fce19a9935',
      106: '0x02F1D5BD67580d8Ac0fA611Bc23953Fce19a9935',
    },
    token: serializedTokens.te9,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 3,
    lpSymbol: 'VLX_TE12 LP',
    lpAddresses: {
      111: '0x81443B242A30CbCd2F007990bd4713E7ad5891E6',
      106: '0x81443B242A30CbCd2F007990bd4713E7ad5891E6',
    },
    token: serializedTokens.te12,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 4,
    lpSymbol: 'VLX_TE18 LP',
    lpAddresses: {
      111: '0xD98AF4A17690066DcF7057c5F4EdA299Ed44DB0b',
      106: '0xD98AF4A17690066DcF7057c5F4EdA299Ed44DB0b',
    },
    token: serializedTokens.te18,
    quoteToken: serializedTokens.wvlx,
  },
]

export default farms
