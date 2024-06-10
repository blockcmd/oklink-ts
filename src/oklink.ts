const BASE_URL = "https://www.oklink.com/";
const chainId = "8217";
const chainFullName = "KLAYTN";
const chainShortName = "KLAYTN";

import { Address } from "./types/Address";
import { ProtocolType } from "./types/ProtocolType";


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
      "Content-Type": "application/json",
      "Ok-Access-Key": this.apiKey,
    };
    return headers;
  }

  async addressInfo(address: Address) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
    });
    const url = `${this.baseUrl}api/v5/explorer/address/address-summary?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async evmAddressInfo(address: Address) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
    });
    const url = `${this.baseUrl}api/v5/explorer/address/information-evm?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async addressActiveChain(address: Address) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
    });
    const url = `${this.baseUrl}api/v5/explorer/address/address-active-chain?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async addressTokenBalance(
    address: Address,
    protocolType: ProtocolType,
    tokenContractAddress?: Address,
    page?: string,
    limit?: string
  ) {
    const params: Record<string, any>  = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
      protocolType: protocolType,
    });
    if (!!tokenContractAddress) {
      params.append("tokenContractAddress", tokenContractAddress);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/address/token-balance?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async addressBalanceDetails(
    address: Address,
    protocolType: ProtocolType,
    tokenContractAddress?: Address,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
      protocolType: protocolType,
    });
    if (!!tokenContractAddress) {
      params.append("tokenContractAddress", tokenContractAddress);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/address/address-balance-fills?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async addressBalanceHistory(
    address: Address,
    height: string,
    tokenContractAddress?: Address,
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
      height: height,
    });
    if (!!tokenContractAddress) {
      params.append("tokenContractAddress", tokenContractAddress);
    }
    const url = `${this.baseUrl}api/v5/explorer/block/address-balance-history?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async addressTransactionList(
    address: Address,
    protocolType?: ProtocolType,
    symbol?: string,
    startBlockHeigh?: string,
    endBlockHeight?: string,
    isFromOrTo?: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
    });
    if (!!protocolType) {
      params.append("protocolType", protocolType.toString());
    }
    if (!!symbol) {
      params.append("symbol", symbol);
    }
    if (!!startBlockHeigh) {
      params.append("startBlockHeigh", startBlockHeigh);
    }
    if (!!endBlockHeight) {
      params.append("endBlockHeight", endBlockHeight);
    }
    if (!!isFromOrTo) {
      params.append("isFromOrTo", isFromOrTo);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/address/transaction-list?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async addressNormalTransactionList(
    address: Address,
    startBlockHeigh?: string,
    endBlockHeight?: string,
    isFromOrTo?: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
    });
    if (!!startBlockHeigh) {
      params.append("startBlockHeigh", startBlockHeigh);
    }
    if (!!endBlockHeight) {
      params.append("endBlockHeight", endBlockHeight);
    }
    if (!!isFromOrTo) {
      params.append("isFromOrTo", isFromOrTo);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/address/normal-transaction-list?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async addressInternalTransactionList(
    address: Address,
    startBlockHeigh?: string,
    endBlockHeight?: string,
    isFromOrTo?: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
    });
    if (!!startBlockHeigh) {
      params.append("startBlockHeigh", startBlockHeigh);
    }
    if (!!endBlockHeight) {
      params.append("endBlockHeight", endBlockHeight);
    }
    if (!!isFromOrTo) {
      params.append("isFromOrTo", isFromOrTo);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/address/internal-transaction-list?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async addressTokenTransactionList(
    address: Address,
    protocolType: ProtocolType,
    tokenContractAddress?: Address,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
      protocolType: protocolType,
    });
    if (!!tokenContractAddress) {
      params.append("tokenContractAddress", tokenContractAddress);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/address/token-transaction-list?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async addressEntityLabels(address: Address) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
    });
    const url = `${this.baseUrl}api/v5/explorer/address/entity-labels?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async batchAddressBalances(addresses: Address[]) {
    if (addresses.length > 100) {
      throw new Error("The maximum number of addresses is 100");
    }
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      addresses: addresses.join(","),
    });
    const url = `${this.baseUrl}api/v5/explorer/address/balance-multi?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }

  async batchAddressTokenBalances(
    addresses: Address[],
    protocolType?: ProtocolType,
    page?: string,
    limit?: string
  ) {
    if (addresses.length > 50) {
      throw new Error("The maximum number of addresses is 50");
    }
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      addresses: addresses.join(","),
    });
    if (!!protocolType) {
      params.append("protocolType", protocolType);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/address/token-balance-multi?${params}`;
    const response = await fetch(url, {
      headers: this.header(),
    });
    return response.json();
  }
}
