import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryProvidersRequest, QueryProvidersResponse, QueryClientsRequest, QueryClientsResponse, QueryGetPairingRequest, QueryGetPairingResponse, QueryVerifyPairingRequest, QueryVerifyPairingResponse, QueryGetUniquePaymentStorageClientProviderRequest, QueryGetUniquePaymentStorageClientProviderResponse, QueryAllUniquePaymentStorageClientProviderRequest, QueryAllUniquePaymentStorageClientProviderResponse, QueryGetProviderPaymentStorageRequest, QueryGetProviderPaymentStorageResponse, QueryAllProviderPaymentStorageRequest, QueryAllProviderPaymentStorageResponse, QueryGetEpochPaymentsRequest, QueryGetEpochPaymentsResponse, QueryAllEpochPaymentsRequest, QueryAllEpochPaymentsResponse, QueryUserEntryRequest, QueryUserEntryResponse, QueryStaticProvidersListRequest, QueryStaticProvidersListResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Providers items. */
    providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse>;
    /** Queries a list of Clients items. */
    clients(request: QueryClientsRequest): Promise<QueryClientsResponse>;
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
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse>;
    clients(request: QueryClientsRequest): Promise<QueryClientsResponse>;
    getPairing(request: QueryGetPairingRequest): Promise<QueryGetPairingResponse>;
    verifyPairing(request: QueryVerifyPairingRequest): Promise<QueryVerifyPairingResponse>;
    uniquePaymentStorageClientProvider(request: QueryGetUniquePaymentStorageClientProviderRequest): Promise<QueryGetUniquePaymentStorageClientProviderResponse>;
    uniquePaymentStorageClientProviderAll(request?: QueryAllUniquePaymentStorageClientProviderRequest): Promise<QueryAllUniquePaymentStorageClientProviderResponse>;
    providerPaymentStorage(request: QueryGetProviderPaymentStorageRequest): Promise<QueryGetProviderPaymentStorageResponse>;
    providerPaymentStorageAll(request?: QueryAllProviderPaymentStorageRequest): Promise<QueryAllProviderPaymentStorageResponse>;
    epochPayments(request: QueryGetEpochPaymentsRequest): Promise<QueryGetEpochPaymentsResponse>;
    epochPaymentsAll(request?: QueryAllEpochPaymentsRequest): Promise<QueryAllEpochPaymentsResponse>;
    userEntry(request: QueryUserEntryRequest): Promise<QueryUserEntryResponse>;
    staticProvidersList(request: QueryStaticProvidersListRequest): Promise<QueryStaticProvidersListResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse>;
    clients(request: QueryClientsRequest): Promise<QueryClientsResponse>;
    getPairing(request: QueryGetPairingRequest): Promise<QueryGetPairingResponse>;
    verifyPairing(request: QueryVerifyPairingRequest): Promise<QueryVerifyPairingResponse>;
    uniquePaymentStorageClientProvider(request: QueryGetUniquePaymentStorageClientProviderRequest): Promise<QueryGetUniquePaymentStorageClientProviderResponse>;
    uniquePaymentStorageClientProviderAll(request?: QueryAllUniquePaymentStorageClientProviderRequest): Promise<QueryAllUniquePaymentStorageClientProviderResponse>;
    providerPaymentStorage(request: QueryGetProviderPaymentStorageRequest): Promise<QueryGetProviderPaymentStorageResponse>;
    providerPaymentStorageAll(request?: QueryAllProviderPaymentStorageRequest): Promise<QueryAllProviderPaymentStorageResponse>;
    epochPayments(request: QueryGetEpochPaymentsRequest): Promise<QueryGetEpochPaymentsResponse>;
    epochPaymentsAll(request?: QueryAllEpochPaymentsRequest): Promise<QueryAllEpochPaymentsResponse>;
    userEntry(request: QueryUserEntryRequest): Promise<QueryUserEntryResponse>;
    staticProvidersList(request: QueryStaticProvidersListRequest): Promise<QueryStaticProvidersListResponse>;
};
