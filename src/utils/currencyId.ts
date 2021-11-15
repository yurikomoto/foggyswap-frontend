import { Currency, ETHER, Token } from '@astroswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'VLX'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
