import { Oklink } from "./src/oklink";
// For testing, I use config.ts file to store configurations like API key and test addresses
import { Config } from "./config";
import { Address } from "./src/types/Address";
import { ProtocolType } from "./src/types/ProtocolType";
import * as util from "util";
const oklink = new Oklink(Config.apiKey || "");

// Test get addressInfo
oklink.addressInfo(Config.test1 as Address)
  .then((result) => {
    console.log(util.inspect(result, { depth: null })); // Use 'util.inspect' with the correct syntax
  })
  .catch((error) => {
    console.error(error);
  });

// Test get addressActiveChain
oklink.addressActiveChain(Config.test1 as Address)
  .then((result) => {
    console.log(util.inspect(result, { depth: null })); // Use 'util.inspect' with the correct syntax
  })
  .catch((error) => {
    console.error(error);
  });

// Test get addressBalance
oklink.addressTokenBalance(Config.test1 as Address, ProtocolType.token_20)
  .then((result) => {
    console.log(util.inspect(result, { depth: null })); // Use 'util.inspect' with the correct syntax
  })
  .catch((error) => {
    console.error(error);
  });
