import { ChainId } from '@wagyu-swap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://evmexplorer.velas.com/rpc',
  [ChainId.TESTNET]: 'https://evmexplorer.testnet.velas.com/rpc',
}

export default NETWORK_URLS
