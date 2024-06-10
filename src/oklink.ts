const BASE_URL = "https://www.oklink.com/"
const chainId = "8217"
const chainFullName = "KLAYTN"
const chainShortName = "KLAYTN"

export type Address = `0x${string}`

export class Oklink {
  apiKey: string;
  baseUrl: string;

  // initialize the class with the API key
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = BASE_URL;
  }

  private header(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Ok-Access-Key': this.apiKey
    }
    return headers
  }

  async addressInfo(address: Address) {
    const params = new URLSearchParams({
      'chainShortName': chainShortName,
      'address': address,
    });
    const url = `${this.baseUrl}api/v5/explorer/address/address-summary?${params}`
    const response = await fetch(url, {
      headers: this.header()
    })
    return response.json();
  }

  async evmAddressInfo(address: Address) {
    const params = new URLSearchParams({
      'chainShortName': chainShortName,
      'address': address,
    });
    const url = `${this.baseUrl}api/v5/explorer/address/information-evm?${params}`
    const response = await fetch(url, {
      headers: this.header()
    })
    return response.json();
  }
}