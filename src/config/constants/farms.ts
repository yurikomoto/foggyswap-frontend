import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  // {
  //   pid: 0,
  //   lpSymbol: 'WAGYU',
  //   lpAddresses: {
  //     111: '0xE51267C6780Bce26e76d3536baF5D8795d8dC883',
  //     106: '0xE51267C6780Bce26e76d3536baF5D8795d8dC883',
  //   },
  //   token: serializedTokens.syrup,
  //   quoteToken: serializedTokens.wvlx,
  // },
  {
    pid: 1,
    lpSymbol: 'VLX-VBNB LP',
    lpAddresses: {
      111: '0x97618e5Ff6013b2CEF0f6AA078bCCDd42dDA2Cc3',
      106: '0x97618e5Ff6013b2CEF0f6AA078bCCDd42dDA2Cc3',
    },
    token: serializedTokens.wvlx,
    quoteToken: serializedTokens.bnb,
  },
  {
    pid: 2,
    lpSymbol: 'VLX-VETH LP',
    lpAddresses: {
      111: '0x9391Da3E19358F5B3c3D0460cdE6E1f58A94b0D4',
      106: '0x9391Da3E19358F5B3c3D0460cdE6E1f58A94b0D4',
    },
    token: serializedTokens.wvlx,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 3,
    lpSymbol: 'VLX-VUSDT LP',
    lpAddresses: {
      111: '0x811BCa2eDaD082ED4E16D27Fce388BE983De3868',
      106: '0x811BCa2eDaD082ED4E16D27Fce388BE983De3868',
    },
    token: serializedTokens.wvlx,
    quoteToken: serializedTokens.usdt,
  },
]

export default farms
