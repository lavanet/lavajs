import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryProvidersRequest, QueryProvidersResponse, QueryGetPairingRequest, QueryGetPairingResponse, QueryVerifyPairingRequest, QueryVerifyPairingResponse, QueryGetUniquePaymentStorageClientProviderRequest, QueryGetUniquePaymentStorageClientProviderResponse, QueryAllUniquePaymentStorageClientProviderRequest, QueryAllUniquePaymentStorageClientProviderResponse, QueryGetProviderPaymentStorageRequest, QueryGetProviderPaymentStorageResponse, QueryAllProviderPaymentStorageRequest, QueryAllProviderPaymentStorageResponse, QueryGetEpochPaymentsRequest, QueryGetEpochPaymentsResponse, QueryAllEpochPaymentsRequest, QueryAllEpochPaymentsResponse, QueryUserEntryRequest, QueryUserEntryResponse, QueryStaticProvidersListRequest, QueryStaticProvidersListResponse, QueryEffectivePolicyRequest, QueryEffectivePolicyResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Providers items. */
  providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse>;
  /** Queries a list of GetPairing items. */
  getPairing(request: QueryGetPairingRequest): Promise<QueryGetPairingResponse>;
  /** Queries a list of VerifyPairing items. */
  verifyPairing(request: QueryVerifyPairingRequest): Promise<QueryVerifyPairingResponse>;
  /** Queries a UniquePaymentStorageClientProvider by index. */
  uniquePaymentStorageClientProvider(request: QueryGetUniquePaymentStorageClientProviderRequest): Promise<QueryGetUniquePaymentStorageClientProviderResponse>;
  /** Queries a list of UniquePaymentStorageClientProvider items. */
  uniquePaymentStorageClientProviderAll(request?: QueryAllUniquePaymentStorageClientProviderRequest): Promise<QueryAllUniquePaymentStorageClientProviderResponse>;
  /** Queries a ProviderPaymentStorage by index. */
  providerPaymentStorage(request: QueryGetProviderPaymentStorageRequest): Promise<QueryGetProviderPaymentStorageResponse>;
  /** Queries a list of ProviderPaymentStorage items. */
  providerPaymentStorageAll(request?: QueryAllProviderPaymentStorageRequest): Promise<QueryAllProviderPaymentStorageResponse>;
  /** Queries a EpochPayments by index. */
  epochPayments(request: QueryGetEpochPaymentsRequest): Promise<QueryGetEpochPaymentsResponse>;
  /** Queries a list of EpochPayments items. */
  epochPaymentsAll(request?: QueryAllEpochPaymentsRequest): Promise<QueryAllEpochPaymentsResponse>;
  /** Queries a UserEntry items. */
  userEntry(request: QueryUserEntryRequest): Promise<QueryUserEntryResponse>;
  /** Queries a list of StaticProvidersList items. */
  staticProvidersList(request: QueryStaticProvidersListRequest): Promise<QueryStaticProvidersListResponse>;
  /** Queries a list of EffectivePolicy items. */
  effectivePolicy(request: QueryEffectivePolicyRequest): Promise<QueryEffectivePolicyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse> {
    const data = QueryProvidersRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "Providers", data);
    return promise.then(data => QueryProvidersResponse.decode(new BinaryReader(data)));
  }
  getPairing(request: QueryGetPairingRequest): Promise<QueryGetPairingResponse> {
    const data = QueryGetPairingRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "GetPairing", data);
    return promise.then(data => QueryGetPairingResponse.decode(new BinaryReader(data)));
  }
  verifyPairing(request: QueryVerifyPairingRequest): Promise<QueryVerifyPairingResponse> {
    const data = QueryVerifyPairingRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "VerifyPairing", data);
    return promise.then(data => QueryVerifyPairingResponse.decode(new BinaryReader(data)));
  }
  uniquePaymentStorageClientProvider(request: QueryGetUniquePaymentStorageClientProviderRequest): Promise<QueryGetUniquePaymentStorageClientProviderResponse> {
    const data = QueryGetUniquePaymentStorageClientProviderRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "UniquePaymentStorageClientProvider", data);
    return promise.then(data => QueryGetUniquePaymentStorageClientProviderResponse.decode(new BinaryReader(data)));
  }
  uniquePaymentStorageClientProviderAll(request: QueryAllUniquePaymentStorageClientProviderRequest = {
    pagination: undefined
  }): Promise<QueryAllUniquePaymentStorageClientProviderResponse> {
    const data = QueryAllUniquePaymentStorageClientProviderRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "UniquePaymentStorageClientProviderAll", data);
    return promise.then(data => QueryAllUniquePaymentStorageClientProviderResponse.decode(new BinaryReader(data)));
  }
  providerPaymentStorage(request: QueryGetProviderPaymentStorageRequest): Promise<QueryGetProviderPaymentStorageResponse> {
    const data = QueryGetProviderPaymentStorageRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "ProviderPaymentStorage", data);
    return promise.then(data => QueryGetProviderPaymentStorageResponse.decode(new BinaryReader(data)));
  }
  providerPaymentStorageAll(request: QueryAllProviderPaymentStorageRequest = {
    pagination: undefined
  }): Promise<QueryAllProviderPaymentStorageResponse> {
    const data = QueryAllProviderPaymentStorageRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "ProviderPaymentStorageAll", data);
    return promise.then(data => QueryAllProviderPaymentStorageResponse.decode(new BinaryReader(data)));
  }
  epochPayments(request: QueryGetEpochPaymentsRequest): Promise<QueryGetEpochPaymentsResponse> {
    const data = QueryGetEpochPaymentsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "EpochPayments", data);
    return promise.then(data => QueryGetEpochPaymentsResponse.decode(new BinaryReader(data)));
  }
  epochPaymentsAll(request: QueryAllEpochPaymentsRequest = {
    pagination: undefined
  }): Promise<QueryAllEpochPaymentsResponse> {
    const data = QueryAllEpochPaymentsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "EpochPaymentsAll", data);
    return promise.then(data => QueryAllEpochPaymentsResponse.decode(new BinaryReader(data)));
  }
  userEntry(request: QueryUserEntryRequest): Promise<QueryUserEntryResponse> {
    const data = QueryUserEntryRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "UserEntry", data);
    return promise.then(data => QueryUserEntryResponse.decode(new BinaryReader(data)));
  }
  staticProvidersList(request: QueryStaticProvidersListRequest): Promise<QueryStaticProvidersListResponse> {
    const data = QueryStaticProvidersListRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "StaticProvidersList", data);
    return promise.then(data => QueryStaticProvidersListResponse.decode(new BinaryReader(data)));
  }
  effectivePolicy(request: QueryEffectivePolicyRequest): Promise<QueryEffectivePolicyResponse> {
    const data = QueryEffectivePolicyRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "EffectivePolicy", data);
    return promise.then(data => QueryEffectivePolicyResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse> {
      return queryService.providers(request);
    },
    getPairing(request: QueryGetPairingRequest): Promise<QueryGetPairingResponse> {
      return queryService.getPairing(request);
    },
    verifyPairing(request: QueryVerifyPairingRequest): Promise<QueryVerifyPairingResponse> {
      return queryService.verifyPairing(request);
    },
    uniquePaymentStorageClientProvider(request: QueryGetUniquePaymentStorageClientProviderRequest): Promise<QueryGetUniquePaymentStorageClientProviderResponse> {
      return queryService.uniquePaymentStorageClientProvider(request);
    },
    uniquePaymentStorageClientProviderAll(request?: QueryAllUniquePaymentStorageClientProviderRequest): Promise<QueryAllUniquePaymentStorageClientProviderResponse> {
      return queryService.uniquePaymentStorageClientProviderAll(request);
    },
    providerPaymentStorage(request: QueryGetProviderPaymentStorageRequest): Promise<QueryGetProviderPaymentStorageResponse> {
      return queryService.providerPaymentStorage(request);
    },
    providerPaymentStorageAll(request?: QueryAllProviderPaymentStorageRequest): Promise<QueryAllProviderPaymentStorageResponse> {
      return queryService.providerPaymentStorageAll(request);
    },
    epochPayments(request: QueryGetEpochPaymentsRequest): Promise<QueryGetEpochPaymentsResponse> {
      return queryService.epochPayments(request);
    },
    epochPaymentsAll(request?: QueryAllEpochPaymentsRequest): Promise<QueryAllEpochPaymentsResponse> {
      return queryService.epochPaymentsAll(request);
    },
    userEntry(request: QueryUserEntryRequest): Promise<QueryUserEntryResponse> {
      return queryService.userEntry(request);
    },
    staticProvidersList(request: QueryStaticProvidersListRequest): Promise<QueryStaticProvidersListResponse> {
      return queryService.staticProvidersList(request);
    },
    effectivePolicy(request: QueryEffectivePolicyRequest): Promise<QueryEffectivePolicyResponse> {
      return queryService.effectivePolicy(request);
    }
  };
};