import { Oklink } from './src/oklink'
// For testing, I use config.ts file to store configurations like API key and test addresses
import { Config } from './config'
import { Address } from './src/oklink'

const oklink = new Oklink(Config.apiKey || "")

// Test get addressInfo
oklink.addressInfo(Config.test1 as Address)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });

// Test get evmAddressInfo
oklink.evmAddressInfo(Config.test1 as Address)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });