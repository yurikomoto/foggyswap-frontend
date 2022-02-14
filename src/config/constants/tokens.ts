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
  ada: new Token(MAINNET, addresses[106].AdaToken, 6, 'ADA', 'Cardano', 'https://www.cardano.org/'),
  cake: new Token(MAINNET, addresses[106].AstroToken, 18, 'ASTRO', 'AstroToken', 'https://www.astroswap.app/'),
  busd: new Token(
    MAINNET,
    '0xc111c29a988ae0c0087d97b33c6e6766808a3bd3',
    18,
    'BUSD',
    'Multichain BUSD',
    'https://www.astroswap.app/',
  ),
  wag: new Token(
    MAINNET,
    '0xabf26902fd7b624e0db40d31171ea9dddf078351',
    18,
    'WAG',
    'WAGToken',
    'https://www.wagyuswap.app/',
  ),
  adapad: new Token(
    MAINNET,
    '0xdb0170e2d0c1cc1b2e7a90313d9b9afa4f250289',
    18,
    'ADAPAD',
    'ADAPad',
    'https://adapad.io/',
  ),
  syrup: new Token(
    MAINNET,
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
  busd: new Token(
    TESTNET,
    '0xe2172a8E1762ae9962A59EE88a731522A61a4cc9',
    18,
    'BUSD',
    'Velas BUSD',
    'https://www.astroswap.app/',
  ),
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
