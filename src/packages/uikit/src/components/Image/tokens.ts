import addresses from '../../addresses.json'

/**
 * @see https://github.com/pancakeswap/pancake-frontend/blob/develop/src/config/constants/tokens.ts
 */
const tokens = {
  cake: {
    symbol: 'Astro',
    address: {
      106: addresses[106].AstroToken,
      111: addresses[111].AstroToken,
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
      106: addresses[106].AstroStake,
      111: addresses[106].AstroStake,
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      106: '0xc111c29a988ae0c0087d97b33c6e6766808a3bd3',
      111: '0xe2172a8e1762ae9962a59ee88a731522a61a4cc9',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },
}

export default tokens
