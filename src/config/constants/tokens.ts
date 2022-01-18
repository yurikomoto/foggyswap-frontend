import { ChainId, Token } from '@astroswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'
import addresses from './addresses.json'

const { MAINNET, TESTNET } = ChainId

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wvlx: new Token(MAINNET, addresses[106].WVLX, 18, 'WVLX', 'Wrapped VLX', 'https://www.astroswap.app/'),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  vlx: new Token(MAINNET, addresses[106].WVLX, 18, 'VLX', 'VLX', 'https://www.astroswap.app/'),
  cake: new Token(MAINNET, addresses[106].AstroToken, 18, 'ASTRO', 'AstroToken', 'https://www.astroswap.app/'),
  usdt: new Token(
    MAINNET,
    '0x01445C31581c354b7338AC35693AB2001B50b9aE',
    6,
    'USDT',
    'Multichain Tether USD',
    'https://www.astroswap.app/',
  ),
  weth: new Token(
    MAINNET,
    '0x85219708c49aa701871Ad330A94EA0f41dFf24Ca',
    18,
    'WETH',
    'Multichain WETH',
    'https://www.astroswap.app/',
  ),
  busd: new Token(
    MAINNET,
    '0xc111c29A988AE0C0087D97b33C6E6766808A3BD3',
    18,
    'BUSD',
    'Velas BUSD',
    'https://www.astroswap.app/',
  ),
  usdc: new Token(
    MAINNET,
    '0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993',
    6,
    'USDC',
    'Velas USDC',
    'https://www.astroswap.app/',
  ),
  syrup: new Token(
    TESTNET,
    addresses[106].AstroStake,
    18,
    'AstroStake',
    'AstroStake Token',
    'https://www.astroswap.app/',
  ),
}

export const testnetTokens = {
  wvlx: new Token(TESTNET, addresses[111].WVLX, 18, 'WVLX', 'Wrapped VLX', 'https://www.astroswap.app/'),
  ada: new Token(TESTNET, addresses[111].AdaToken, 18, 'ADA', 'Cardano', 'https://www.cardano.org/'),
  cake: new Token(TESTNET, addresses[111].AstroToken, 18, 'ASTRO', 'AstroToken', 'https://www.astroswap.app/'),
  syrup: new Token(
    TESTNET,
    addresses[111].AstroStake,
    18,
    'AstroStake',
    'AstroStake Token',
    'https://www.astroswap.app/',
  ),
  usdt: new Token(
    TESTNET,
    '0x6Ef054B3E3C3C83E14527E8fa593c2c4435A6ea4',
    18,
    'USDT',
    'Velas USDT',
    'https://www.astroswap.app/',
  ),
  busd: new Token(
    TESTNET,
    '0xe2172a8E1762ae9962A59EE88a731522A61a4cc9',
    18,
    'BUSD',
    'Velas BUSD',
    'https://www.astroswap.app/',
  ),
  usdc: new Token(
    TESTNET,
    '0x6b82bDB5a1AdFfa3816D1F942D60f0269647C646',
    18,
    'USDC',
    'Velas USDC',
    'https://www.astroswap.app/',
  ),
  weth: new Token(
    TESTNET,
    '0x3538C7f88aDbc8ad1F435f7EA70287e26b926344',
    18,
    'WETH',
    'Multichain WETH',
    'https://www.astroswap.app/',
  ),
  te6: new Token(TESTNET, addresses[111].TE6, 6, 'TE6', 'ERC20 Token', 'https://www.astroswap.app/'),
  te9: new Token(TESTNET, addresses[111].TE9, 9, 'TE9', 'ERC20 Token', 'https://www.astroswap.app/'),
  te12: new Token(TESTNET, addresses[111].TE12, 12, 'TE12', 'ERC20 Token', 'https://www.astroswap.app/'),
  te18: new Token(TESTNET, addresses[111].TE18, 18, 'TE18', 'ERC20 Token', 'https://www.astroswap.app/'),
}

const tokens = (): TokenList => {
  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (chainId === ChainId.TESTNET) {
    // return Object.keys(mainnetTokens).reduce((accum, key) => {
    //   return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    // }, {})

    return Object.keys(testnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
