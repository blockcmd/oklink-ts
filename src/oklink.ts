import { Address } from "./types/Address";
import { ProtocolType } from "./types/ProtocolType";
import { AddressInformation } from "./interfaces/AddressInformationResponse";

const BASE_URL = "https://www.oklink.com/";
const chainId = "8217";
const chainFullName = "KLAYTN";
const chainShortName = "KLAYTN";
interface ApiResponse<T> {
  code: number;
  data: T;
  msg: string;
}
export class Oklink {
  apiKey: string;
  baseUrl: string;

  // initialize the class with the API key
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = BASE_URL;
  }

  private header(): Record<string, string> {
    return {
      "Content-Type": "application/json",
      "Ok-Access-Key": this.apiKey,
    };
  }

  private async fetchApi<T>(url: string): Promise<ApiResponse<T>> {
    try {
    const response = await fetch(url, {
      headers: this.header(),
    });
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if(data.code != 0) {
      throw new Error(`API error! code: ${data.code}, message: ${data.msg}`);
    }
    return data;
    } catch (error) {
      console.log(`throw New Error: ${error}`);
      throw error;
    }
  }
  // Blockchain General API - Address (https://www.oklink.com/docs/en/#blockchain-general-api-address)
  async addressInfo(address: Address): Promise<ApiResponse<AddressInformation>> {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
    });
    const url = `${this.baseUrl}api/v5/explorer/address/address-summary?${params}`;
    return this.fetchApi<AddressInformation>(url);
  }

  async evmAddressInfo(address: Address) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
    });
    const url = `${this.baseUrl}api/v5/explorer/address/information-evm?${params}`;
    return this.fetchApi(url);
  }

  async addressActiveChain(address: Address) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
    });
    const url = `${this.baseUrl}api/v5/explorer/address/address-active-chain?${params}`;
    return this.fetchApi(url);
  }

  async addressTokenBalance(
    address: Address,
    protocolType: ProtocolType,
    tokenContractAddress?: Address,
    page?: string,
    limit?: string
  ) {
    const params: Record<string, any> = new URLSearchParams({
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
    return this.fetchApi(url);
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
    return this.fetchApi(url);
  }

  async addressBalanceHistory(
    address: Address,
    height: string,
    tokenContractAddress?: Address
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
    return this.fetchApi(url);
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
    return this.fetchApi(url);

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
    return this.fetchApi(url);

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
    return this.fetchApi(url);

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
    return this.fetchApi(url);
    
  }

  async addressEntityLabels(address: Address) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      address: address,
    });
    const url = `${this.baseUrl}api/v5/explorer/address/entity-labels?${params}`;
    return this.fetchApi(url);

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
    return this.fetchApi(url);

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
    return this.fetchApi(url);

  }

  async batchAddressNormalTransactionList(
    addresses: Address[],
    startBlockHeigh?: string,
    endBlockHeight?: string,
    isFromOrTo?: string,
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
    const url = `${this.baseUrl}api/v5/explorer/address/normal-transaction-list-multi?${params}`;
    return this.fetchApi(url);

  }

  async batchAddressInternalTransactionList(
    addresses: Address[],
    startBlockHeigh?: string,
    endBlockHeight?: string,
    isFromOrTo?: string,
    page?: string,
    limit?: string
  ) {
    if (addresses.length > 20) {
      throw new Error("The maximum number of addresses is 20");
    }
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      addresses: addresses.join(","),
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
    const url = `${this.baseUrl}api/v5/explorer/address/internal-transaction-list-multi?${params}`;
    return this.fetchApi(url);

  }

  async batchAddressTokenTransactionList(
    addresses: Address[],
    startBlockHeigh: string,
    endBlockHeight: string,
    page?: string,
    limit?: string,
    protocolType?: ProtocolType,
    tokenContractAddress?: Address,
    isFromOrTo?: string
  ) {
    if (addresses.length > 20) {
      throw new Error("The maximum number of addresses is 20");
    }
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      addresses: addresses.join(","),
      startBlockHeigh: startBlockHeigh,
      endBlockHeight: endBlockHeight,
    });
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    if (!!protocolType) {
      params.append("protocolType", protocolType);
    }
    if (!!tokenContractAddress) {
      params.append("tokenContractAddress", tokenContractAddress);
    }
    if (!!isFromOrTo) {
      params.append("isFromOrTo", isFromOrTo);
    }
    const url = `${this.baseUrl}api/v5/explorer/address/token-transaction-list-multi?${params}`;
    return this.fetchApi(url);

  }

  async richList(address?: Address) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
    });
    if (!!address) {
      params.append("address", address);
    }
    const url = `${this.baseUrl}api/v5/explorer/address/rich-list?${params}`;
    return this.fetchApi(url);

  }

  async nativeTokenRanking(page?: string, limit?: string) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
    });
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/address/native-token-position-list?${params}`;
    return this.fetchApi(url);

  }

  // Transaction (https://www.oklink.com/docs/en/#blockchain-general-api-transaction)
  async transactionList(
    blockHash?: string,
    height?: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
    });
    if (!!blockHash) {
      params.append("blockHash", blockHash);
    }
    if (!!height) {
      params.append("height", height);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/transaction/transaction-list?${params}`;
    return this.fetchApi(url);

  }

  async largeTransactionList(
    type?: string,
    height?: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
    });
    if (!!type) {
      params.append("type", type);
    }
    if (!!height) {
      params.append("height", height);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/transaction/large-transaction-list?${params}`;
    return this.fetchApi(url);

  }

  async unconfirmedTransactionList(page?: string, limit?: string) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
    });
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/transaction/unconfirmed-transaction-list?${params}`;
    return this.fetchApi(url);

  }

  async internalTransactionDetails(
    txId: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      txId: txId,
    });
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/transaction/internal-transaction-detail?${params}`;
    return this.fetchApi(url);

  }

  async tokenTransactionDetails(
    txId: string,
    protocolType: ProtocolType,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      txId: txId,
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
    const url = `${this.baseUrl}api/v5/explorer/transaction/token-transaction-detail?${params}`;
    return this.fetchApi(url);

  }

  async transactionDetails(txId: string) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      txId: txId,
    });
    const url = `${this.baseUrl}api/v5/explorer/transaction/transaction-fills?${params}`;
    return this.fetchApi(url);

  }

  async batchTransactionDetails(txIds: string[]) {
    if (txIds.length > 20) {
      throw new Error("The maximum number of transactions is 20");
    }
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      txIds: txIds.join(","),
    });
    const url = `${this.baseUrl}api/v5/explorer/transaction/transaction-multi?${params}`;
    return this.fetchApi(url);

  }

  async batchInternalTransactionDetails(txIds: string[]) {
    if (txIds.length > 20) {
      throw new Error("The maximum number of transactions is 20");
    }
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      txIds: txIds.join(","),
    });
    const url = `${this.baseUrl}api/v5/explorer/transaction/internal-transaction-multi?${params}`;
    return this.fetchApi(url);
    
  }

  async batchTokenTransactionDetails(
    txIds: string[],
    protocolType?: ProtocolType,
    page?: string,
    limit?: string
  ) {
    if (txIds.length > 20) {
      throw new Error("The maximum number of transactions is 20");
    }
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      txIds: txIds.join(","),
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
    const url = `${this.baseUrl}api/v5/explorer/transaction/token-transfer-multi?${params}`;
    return this.fetchApi(url);

  }

  // Token (https://www.oklink.com/docs/en/#blockchain-general-api-token)
  async tokenList(
    protocolType?: string,
    tokenContractAddress?: string,
    startTime?: string,
    endTime?: string,
    orderBy?: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
    });
    if (!!protocolType) {
      params.append("protocolType", protocolType);
    }
    if (!!tokenContractAddress) {
      params.append("tokenContractAddress", tokenContractAddress);
    }
    if (!!startTime) {
      params.append("startTime", startTime);
    }
    if (!!endTime) {
      params.append("endTime", endTime);
    }
    if (!!orderBy) {
      params.append("orderBy", orderBy);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/token/token-list?${params}`;
    return this.fetchApi(url);

  }

  async tokenPositionList(
    tokenContractAddress: string,
    holderAddress?: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      tokenContractAddress: tokenContractAddress,
    });
    if (!!holderAddress) {
      params.append("holderAddress", holderAddress);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/token/position-list?${params}`;
    return this.fetchApi(url);

  }

  async tokenPositionStatistics(
    tokenContractAddress: string,
    holderAddress?: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      tokenContractAddress: tokenContractAddress,
    });
    if (!!holderAddress) {
      params.append("holderAddress", holderAddress);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/token/position-statistics?${params}`;
    return this.fetchApi(url);

  }

  async tokenTransferDetails(
    tokenContractAddress: string,
    maxAmount?: string,
    minAmount?: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      tokenContractAddress: tokenContractAddress,
    });
    if (!!maxAmount) {
      params.append("maxAmount", maxAmount);
    }
    if (!!minAmount) {
      params.append("minAmount", minAmount);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/token/transaction-list?${params}`;
    return this.fetchApi(url);

  }

  async batchTokenTransaction(
    tokenContractAddress: string,
    startBlockHeight: string,
    endBlockHeight: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      tokenContractAddress: tokenContractAddress,
      startBlockHeight: startBlockHeight,
      endBlockHeight: endBlockHeight,
    });
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/token/token-transaction-list-multi?${params}`;
    return this.fetchApi(url);

  }

  async tokenSupplyHistory(
    tokenContractAddress: string,
    height: string,
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      tokenContractAddress: tokenContractAddress,
      height: height,
    });
    const url = `${this.baseUrl}api/v5/explorer/token/supply-history?${params}`;
    return this.fetchApi(url);

  }

  async tokenTransactionStatistics(
    tokenContractAddress: string,
    orderBy?: string,
    page?: string,
    limit?: string
  ) {
    const params = new URLSearchParams({
      chainShortName: chainShortName,
      tokenContractAddress: tokenContractAddress,
    });
    if (!!orderBy) {
      params.append("orderBy", orderBy);
    }
    if (!!page) {
      params.append("page", page);
    }
    if (!!limit) {
      params.append("limit", limit);
    }
    const url = `${this.baseUrl}api/v5/explorer/token/transaction-stats?${params}`;
    return this.fetchApi(url);

  }
}
