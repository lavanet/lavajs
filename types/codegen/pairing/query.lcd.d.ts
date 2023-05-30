import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryProvidersRequest, QueryProvidersResponseSDKType, QueryClientsRequest, QueryClientsResponseSDKType, QueryGetPairingRequest, QueryGetPairingResponseSDKType, QueryVerifyPairingRequest, QueryVerifyPairingResponseSDKType, QueryGetUniquePaymentStorageClientProviderRequest, QueryGetUniquePaymentStorageClientProviderResponseSDKType, QueryAllUniquePaymentStorageClientProviderRequest, QueryAllUniquePaymentStorageClientProviderResponseSDKType, QueryGetProviderPaymentStorageRequest, QueryGetProviderPaymentStorageResponseSDKType, QueryAllProviderPaymentStorageRequest, QueryAllProviderPaymentStorageResponseSDKType, QueryGetEpochPaymentsRequest, QueryGetEpochPaymentsResponseSDKType, QueryAllEpochPaymentsRequest, QueryAllEpochPaymentsResponseSDKType, QueryUserEntryRequest, QueryUserEntryResponseSDKType, QueryStaticProvidersListRequest, QueryStaticProvidersListResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    providers(params: QueryProvidersRequest): Promise<QueryProvidersResponseSDKType>;
    clients(params: QueryClientsRequest): Promise<QueryClientsResponseSDKType>;
    getPairing(params: QueryGetPairingRequest): Promise<QueryGetPairingResponseSDKType>;
    verifyPairing(params: QueryVerifyPairingRequest): Promise<QueryVerifyPairingResponseSDKType>;
    uniquePaymentStorageClientProvider(params: QueryGetUniquePaymentStorageClientProviderRequest): Promise<QueryGetUniquePaymentStorageClientProviderResponseSDKType>;
    uniquePaymentStorageClientProviderAll(params?: QueryAllUniquePaymentStorageClientProviderRequest): Promise<QueryAllUniquePaymentStorageClientProviderResponseSDKType>;
    providerPaymentStorage(params: QueryGetProviderPaymentStorageRequest): Promise<QueryGetProviderPaymentStorageResponseSDKType>;
    providerPaymentStorageAll(params?: QueryAllProviderPaymentStorageRequest): Promise<QueryAllProviderPaymentStorageResponseSDKType>;
    epochPayments(params: QueryGetEpochPaymentsRequest): Promise<QueryGetEpochPaymentsResponseSDKType>;
    epochPaymentsAll(params?: QueryAllEpochPaymentsRequest): Promise<QueryAllEpochPaymentsResponseSDKType>;
    userEntry(params: QueryUserEntryRequest): Promise<QueryUserEntryResponseSDKType>;
    staticProvidersList(params: QueryStaticProvidersListRequest): Promise<QueryStaticProvidersListResponseSDKType>;
}
