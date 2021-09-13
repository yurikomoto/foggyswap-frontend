import addresses from '../../addresses.json'

/**
 * @see https://github.com/pancakeswap/pancake-frontend/blob/develop/src/config/constants/tokens.ts
 */
const tokens = {
  cake: {
    symbol: 'CAKE',
    address: {
      106: addresses[106].CakeToken,
      111: addresses[111].CakeToken,
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },

  wvlx: {
    symbol: 'wVLX',
    address: {
      106: addresses[106].WVLX,
      111: addresses[111].WVLX,
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  syrup: {
    symbol: 'SYRUP',
    address: {
      106: addresses[106].SyrupBar,
      111: addresses[106].SyrupBar,
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      106: addresses[106].VUSDT,
      111: addresses[111].VUSDT,
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },
}

export default tokens
