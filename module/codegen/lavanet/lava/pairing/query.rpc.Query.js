import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryProvidersRequest, QueryProvidersResponse, QueryGetPairingRequest, QueryGetPairingResponse, QueryVerifyPairingRequest, QueryVerifyPairingResponse, QueryGetUniquePaymentStorageClientProviderRequest, QueryGetUniquePaymentStorageClientProviderResponse, QueryAllUniquePaymentStorageClientProviderRequest, QueryAllUniquePaymentStorageClientProviderResponse, QueryGetProviderPaymentStorageRequest, QueryGetProviderPaymentStorageResponse, QueryAllProviderPaymentStorageRequest, QueryAllProviderPaymentStorageResponse, QueryGetEpochPaymentsRequest, QueryGetEpochPaymentsResponse, QueryAllEpochPaymentsRequest, QueryAllEpochPaymentsResponse, QueryUserEntryRequest, QueryUserEntryResponse, QueryStaticProvidersListRequest, QueryStaticProvidersListResponse, QueryEffectivePolicyRequest, QueryEffectivePolicyResponse } from "./query";
/** Query defines the gRPC querier service. */

export class QueryClientImpl {
  constructor(rpc) {
    _defineProperty(this, "rpc", void 0);
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.providers = this.providers.bind(this);
    this.getPairing = this.getPairing.bind(this);
    this.verifyPairing = this.verifyPairing.bind(this);
    this.uniquePaymentStorageClientProvider = this.uniquePaymentStorageClientProvider.bind(this);
    this.uniquePaymentStorageClientProviderAll = this.uniquePaymentStorageClientProviderAll.bind(this);
    this.providerPaymentStorage = this.providerPaymentStorage.bind(this);
    this.providerPaymentStorageAll = this.providerPaymentStorageAll.bind(this);
    this.epochPayments = this.epochPayments.bind(this);
    this.epochPaymentsAll = this.epochPaymentsAll.bind(this);
    this.userEntry = this.userEntry.bind(this);
    this.staticProvidersList = this.staticProvidersList.bind(this);
    this.effectivePolicy = this.effectivePolicy.bind(this);
  }
  params(request = {}) {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  providers(request) {
    const data = QueryProvidersRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "Providers", data);
    return promise.then(data => QueryProvidersResponse.decode(new _m0.Reader(data)));
  }
  getPairing(request) {
    const data = QueryGetPairingRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "GetPairing", data);
    return promise.then(data => QueryGetPairingResponse.decode(new _m0.Reader(data)));
  }
  verifyPairing(request) {
    const data = QueryVerifyPairingRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "VerifyPairing", data);
    return promise.then(data => QueryVerifyPairingResponse.decode(new _m0.Reader(data)));
  }
  uniquePaymentStorageClientProvider(request) {
    const data = QueryGetUniquePaymentStorageClientProviderRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "UniquePaymentStorageClientProvider", data);
    return promise.then(data => QueryGetUniquePaymentStorageClientProviderResponse.decode(new _m0.Reader(data)));
  }
  uniquePaymentStorageClientProviderAll(request = {
    pagination: undefined
  }) {
    const data = QueryAllUniquePaymentStorageClientProviderRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "UniquePaymentStorageClientProviderAll", data);
    return promise.then(data => QueryAllUniquePaymentStorageClientProviderResponse.decode(new _m0.Reader(data)));
  }
  providerPaymentStorage(request) {
    const data = QueryGetProviderPaymentStorageRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "ProviderPaymentStorage", data);
    return promise.then(data => QueryGetProviderPaymentStorageResponse.decode(new _m0.Reader(data)));
  }
  providerPaymentStorageAll(request = {
    pagination: undefined
  }) {
    const data = QueryAllProviderPaymentStorageRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "ProviderPaymentStorageAll", data);
    return promise.then(data => QueryAllProviderPaymentStorageResponse.decode(new _m0.Reader(data)));
  }
  epochPayments(request) {
    const data = QueryGetEpochPaymentsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "EpochPayments", data);
    return promise.then(data => QueryGetEpochPaymentsResponse.decode(new _m0.Reader(data)));
  }
  epochPaymentsAll(request = {
    pagination: undefined
  }) {
    const data = QueryAllEpochPaymentsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "EpochPaymentsAll", data);
    return promise.then(data => QueryAllEpochPaymentsResponse.decode(new _m0.Reader(data)));
  }
  userEntry(request) {
    const data = QueryUserEntryRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "UserEntry", data);
    return promise.then(data => QueryUserEntryResponse.decode(new _m0.Reader(data)));
  }
  staticProvidersList(request) {
    const data = QueryStaticProvidersListRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "StaticProvidersList", data);
    return promise.then(data => QueryStaticProvidersListResponse.decode(new _m0.Reader(data)));
  }
  effectivePolicy(request) {
    const data = QueryEffectivePolicyRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "EffectivePolicy", data);
    return promise.then(data => QueryEffectivePolicyResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = base => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request) {
      return queryService.params(request);
    },
    providers(request) {
      return queryService.providers(request);
    },
    getPairing(request) {
      return queryService.getPairing(request);
    },
    verifyPairing(request) {
      return queryService.verifyPairing(request);
    },
    uniquePaymentStorageClientProvider(request) {
      return queryService.uniquePaymentStorageClientProvider(request);
    },
    uniquePaymentStorageClientProviderAll(request) {
      return queryService.uniquePaymentStorageClientProviderAll(request);
    },
    providerPaymentStorage(request) {
      return queryService.providerPaymentStorage(request);
    },
    providerPaymentStorageAll(request) {
      return queryService.providerPaymentStorageAll(request);
    },
    epochPayments(request) {
      return queryService.epochPayments(request);
    },
    epochPaymentsAll(request) {
      return queryService.epochPaymentsAll(request);
    },
    userEntry(request) {
      return queryService.userEntry(request);
    },
    staticProvidersList(request) {
      return queryService.staticProvidersList(request);
    },
    effectivePolicy(request) {
      return queryService.effectivePolicy(request);
    }
  };
};