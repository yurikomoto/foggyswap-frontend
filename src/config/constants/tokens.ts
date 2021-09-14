import { ChainId, Token } from '@wagyu-swap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'
import addresses from './addresses.json'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wvlx: new Token(MAINNET, addresses[106].WVLX, 18, 'WVLX', 'Wrapped VLX', 'https://www.binance.com/'),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  vlx: new Token(MAINNET, addresses[106].WVLX, 18, 'VLX', 'VLX', 'https://www.binance.com/'),
  cake: new Token(MAINNET, addresses[106].CakeToken, 18, 'CAKE', 'PancakeSwap Token', 'https://pancakeswap.finance/'),
  usdt: new Token(MAINNET, addresses[106].VUSDT, 18, 'USDT', 'Tether USD', 'https://tether.to/'),
  eth: new Token(MAINNET, addresses[106].VETHER, 18, 'ETH', 'Velas-Peg Ethereum Token', 'https://ethereum.org/en/'),
  bnb: new Token(TESTNET, addresses[106].VBNB, 18, 'VBNB', 'Velas BNB', 'https://www.binance.com/'),
  syrup: new Token(TESTNET, addresses[111].SyrupBar, 18, 'SYRUP', 'SyrupBar Token', 'https://pancakeswap.finance/'),
}

export const testnetTokens = {
  wvlx: new Token(TESTNET, addresses[111].WVLX, 18, 'WVLX', 'Wrapped VLX', 'https://www.binance.com/'),
  cake: new Token(TESTNET, addresses[111].CakeToken, 18, 'CAKE', 'PancakeSwap Token', 'https://pancakeswap.finance/'),
  syrup: new Token(TESTNET, addresses[111].SyrupBar, 18, 'SYRUP', 'SyrupBar Token', 'https://pancakeswap.finance/'),
  bnb: new Token(TESTNET, addresses[111].VBNB, 18, 'VBNB', 'Velas BNB', 'https://www.binance.com/'),
  usdt: new Token(TESTNET, addresses[111].VUSDT, 18, 'VUSDT', 'Velas USDT', 'https://www.binance.com/'),
  eth: new Token(TESTNET, addresses[111].VETHER, 18, 'VETH', 'Velas ETH', 'https://www.binance.com/'),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
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
