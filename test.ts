import { Oklink } from './src/oklink'
// For testing, I use config.ts file to store configurations like API key and test addresses
import { Config } from './config'
import { Address } from './src/types/Address'
import { ProtocolType } from './src/types/ProtocolType';

const oklink = new Oklink(Config.apiKey || "")

// Test get addressInfo
oklink.addressBalanceDetails(Config.test1 as Address, ProtocolType.token_20)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });

// Test get evmAddressInfo
// oklink.evmAddressInfo(Config.test1 as Address)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.error(error);
//   });