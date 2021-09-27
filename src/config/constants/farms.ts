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
      111: '0x1bC60cFc522A264639866D47C634EfCdddd624eA',
      106: '0x1bC60cFc522A264639866D47C634EfCdddd624eA',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 1,
    lpSymbol: 'VLX_TE6 LP',
    lpAddresses: {
      111: '0x04394d1d07F24C30d82D06097301Da1f9732E54f',
      106: '0x04394d1d07F24C30d82D06097301Da1f9732E54f',
    },
    token: serializedTokens.te6,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 2,
    lpSymbol: 'VLX_TE9 LP',
    lpAddresses: {
      111: '0x3124E72d06f181a225e9E587C1ca4Da5E905Bd37',
      106: '0x3124E72d06f181a225e9E587C1ca4Da5E905Bd37',
    },
    token: serializedTokens.te9,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 3,
    lpSymbol: 'VLX_TE12 LP',
    lpAddresses: {
      111: '0xBBf16449Aa3D7cd988810bf966982f68d1154023',
      106: '0xBBf16449Aa3D7cd988810bf966982f68d1154023',
    },
    token: serializedTokens.te12,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 4,
    lpSymbol: 'VLX_TE18 LP',
    lpAddresses: {
      111: '0x4522640cF08B6acba90dDA9D4e6Ae3003b4e0ED7',
      106: '0x4522640cF08B6acba90dDA9D4e6Ae3003b4e0ED7',
    },
    token: serializedTokens.te18,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 5,
    lpSymbol: 'VLX_ETH LP',
    lpAddresses: {
      111: '0x2537C7D256D7aec0f41BEf15C93Ec269D263F772',
      106: '0x2537C7D256D7aec0f41BEf15C93Ec269D263F772',
    },
    token: serializedTokens.weth,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 6,
    lpSymbol: 'VLX_USDT LP',
    lpAddresses: {
      111: '0x681Ce22f568720eeFA34548d360c94721aCE1A50',
      106: '0x681Ce22f568720eeFA34548d360c94721aCE1A50',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 7,
    lpSymbol: 'VLX_USDC LP',
    lpAddresses: {
      111: '0xe29d45F71C3132391dFD0F92e54fcA74DE37c45A',
      106: '0xe29d45F71C3132391dFD0F92e54fcA74DE37c45A',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 8,
    lpSymbol: 'VLX_BUSD LP',
    lpAddresses: {
      111: '0x02d14903A8423027643e185ae0277D1d09e22497',
      106: '0x02d14903A8423027643e185ae0277D1d09e22497',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wvlx,
  },
  {
    pid: 9,
    lpSymbol: 'VLX_WAG LP',
    lpAddresses: {
      111: '0x518F4Fea9084D981f5faA63F7b549eC922333e54',
      106: '0x518F4Fea9084D981f5faA63F7b549eC922333e54',
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
