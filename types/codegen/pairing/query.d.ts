import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StakeEntry, StakeEntrySDKType } from "../epochstorage/stake_entry";
import { UniquePaymentStorageClientProvider, UniquePaymentStorageClientProviderSDKType } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage, ProviderPaymentStorageSDKType } from "./provider_payment_storage";
import { EpochPayments, EpochPaymentsSDKType } from "./epoch_payments";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryProvidersRequest {
    chainID: string;
    showFrozen: boolean;
}
export interface QueryProvidersRequestSDKType {
    chainID: string;
    showFrozen: boolean;
}
export interface QueryProvidersResponse {
    stakeEntry: StakeEntry[];
    output: string;
}
export interface QueryProvidersResponseSDKType {
    stakeEntry: StakeEntrySDKType[];
    output: string;
}
export interface QueryClientsRequest {
    chainID: string;
}
export interface QueryClientsRequestSDKType {
    chainID: string;
}
export interface QueryClientsResponse {
    stakeEntry: StakeEntry[];
    output: string;
}
export interface QueryClientsResponseSDKType {
    stakeEntry: StakeEntrySDKType[];
    output: string;
}
export interface QueryGetPairingRequest {
    chainID: string;
    client: string;
}
export interface QueryGetPairingRequestSDKType {
    chainID: string;
    client: string;
}
export interface QueryGetPairingResponse {
    providers: StakeEntry[];
    currentEpoch: Long;
    timeLeftToNextPairing: Long;
    specLastUpdatedBlock: Long;
    blockOfNextPairing: Long;
}
export interface QueryGetPairingResponseSDKType {
    providers: StakeEntrySDKType[];
    current_epoch: Long;
    time_left_to_next_pairing: Long;
    spec_last_updated_block: Long;
    block_of_next_pairing: Long;
}
export interface QueryVerifyPairingRequest {
    chainID: string;
    client: string;
    provider: string;
    block: Long;
}
export interface QueryVerifyPairingRequestSDKType {
    chainID: string;
    client: string;
    provider: string;
    block: Long;
}
export interface QueryVerifyPairingResponse {
    valid: boolean;
    pairedProviders: Long;
    cuPerEpoch: Long;
}
export interface QueryVerifyPairingResponseSDKType {
    valid: boolean;
    paired_providers: Long;
    cu_per_epoch: Long;
}
export interface QueryGetUniquePaymentStorageClientProviderRequest {
    index: string;
}
export interface QueryGetUniquePaymentStorageClientProviderRequestSDKType {
    index: string;
}
export interface QueryGetUniquePaymentStorageClientProviderResponse {
    uniquePaymentStorageClientProvider?: UniquePaymentStorageClientProvider;
}
export interface QueryGetUniquePaymentStorageClientProviderResponseSDKType {
    uniquePaymentStorageClientProvider?: UniquePaymentStorageClientProviderSDKType;
}
export interface QueryAllUniquePaymentStorageClientProviderRequest {
    pagination?: PageRequest;
}
export interface QueryAllUniquePaymentStorageClientProviderRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllUniquePaymentStorageClientProviderResponse {
    uniquePaymentStorageClientProvider: UniquePaymentStorageClientProvider[];
    pagination?: PageResponse;
}
export interface QueryAllUniquePaymentStorageClientProviderResponseSDKType {
    uniquePaymentStorageClientProvider: UniquePaymentStorageClientProviderSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetProviderPaymentStorageRequest {
    index: string;
}
export interface QueryGetProviderPaymentStorageRequestSDKType {
    index: string;
}
export interface QueryGetProviderPaymentStorageResponse {
    providerPaymentStorage?: ProviderPaymentStorage;
}
export interface QueryGetProviderPaymentStorageResponseSDKType {
    providerPaymentStorage?: ProviderPaymentStorageSDKType;
}
export interface QueryAllProviderPaymentStorageRequest {
    pagination?: PageRequest;
}
export interface QueryAllProviderPaymentStorageRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllProviderPaymentStorageResponse {
    providerPaymentStorage: ProviderPaymentStorage[];
    pagination?: PageResponse;
}
export interface QueryAllProviderPaymentStorageResponseSDKType {
    providerPaymentStorage: ProviderPaymentStorageSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetEpochPaymentsRequest {
    index: string;
}
export interface QueryGetEpochPaymentsRequestSDKType {
    index: string;
}
export interface QueryGetEpochPaymentsResponse {
    epochPayments?: EpochPayments;
}
export interface QueryGetEpochPaymentsResponseSDKType {
    epochPayments?: EpochPaymentsSDKType;
}
export interface QueryAllEpochPaymentsRequest {
    pagination?: PageRequest;
}
export interface QueryAllEpochPaymentsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllEpochPaymentsResponse {
    epochPayments: EpochPayments[];
    pagination?: PageResponse;
}
export interface QueryAllEpochPaymentsResponseSDKType {
    epochPayments: EpochPaymentsSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryUserEntryRequest {
    address: string;
    chainID: string;
    block: Long;
}
export interface QueryUserEntryRequestSDKType {
    address: string;
    chainID: string;
    block: Long;
}
export interface QueryUserEntryResponse {
    consumer?: StakeEntry;
    maxCU: Long;
}
export interface QueryUserEntryResponseSDKType {
    consumer?: StakeEntrySDKType;
    maxCU: Long;
}
export interface QueryStaticProvidersListRequest {
    chainID: string;
}
export interface QueryStaticProvidersListRequestSDKType {
    chainID: string;
}
export interface QueryStaticProvidersListResponse {
    providers: StakeEntry[];
}
export interface QueryStaticProvidersListResponseSDKType {
    providers: StakeEntrySDKType[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryProvidersRequest: {
    encode(message: QueryProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersRequest;
    fromJSON(object: any): QueryProvidersRequest;
    toJSON(message: QueryProvidersRequest): unknown;
    fromPartial(object: Partial<QueryProvidersRequest>): QueryProvidersRequest;
};
export declare const QueryProvidersResponse: {
    encode(message: QueryProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersResponse;
    fromJSON(object: any): QueryProvidersResponse;
    toJSON(message: QueryProvidersResponse): unknown;
    fromPartial(object: Partial<QueryProvidersResponse>): QueryProvidersResponse;
};
export declare const QueryClientsRequest: {
    encode(message: QueryClientsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientsRequest;
    fromJSON(object: any): QueryClientsRequest;
    toJSON(message: QueryClientsRequest): unknown;
    fromPartial(object: Partial<QueryClientsRequest>): QueryClientsRequest;
};
export declare const QueryClientsResponse: {
    encode(message: QueryClientsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientsResponse;
    fromJSON(object: any): QueryClientsResponse;
    toJSON(message: QueryClientsResponse): unknown;
    fromPartial(object: Partial<QueryClientsResponse>): QueryClientsResponse;
};
export declare const QueryGetPairingRequest: {
    encode(message: QueryGetPairingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPairingRequest;
    fromJSON(object: any): QueryGetPairingRequest;
    toJSON(message: QueryGetPairingRequest): unknown;
    fromPartial(object: Partial<QueryGetPairingRequest>): QueryGetPairingRequest;
};
export declare const QueryGetPairingResponse: {
    encode(message: QueryGetPairingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPairingResponse;
    fromJSON(object: any): QueryGetPairingResponse;
    toJSON(message: QueryGetPairingResponse): unknown;
    fromPartial(object: Partial<QueryGetPairingResponse>): QueryGetPairingResponse;
};
export declare const QueryVerifyPairingRequest: {
    encode(message: QueryVerifyPairingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyPairingRequest;
    fromJSON(object: any): QueryVerifyPairingRequest;
    toJSON(message: QueryVerifyPairingRequest): unknown;
    fromPartial(object: Partial<QueryVerifyPairingRequest>): QueryVerifyPairingRequest;
};
export declare const QueryVerifyPairingResponse: {
    encode(message: QueryVerifyPairingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyPairingResponse;
    fromJSON(object: any): QueryVerifyPairingResponse;
    toJSON(message: QueryVerifyPairingResponse): unknown;
    fromPartial(object: Partial<QueryVerifyPairingResponse>): QueryVerifyPairingResponse;
};
export declare const QueryGetUniquePaymentStorageClientProviderRequest: {
    encode(message: QueryGetUniquePaymentStorageClientProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUniquePaymentStorageClientProviderRequest;
    fromJSON(object: any): QueryGetUniquePaymentStorageClientProviderRequest;
    toJSON(message: QueryGetUniquePaymentStorageClientProviderRequest): unknown;
    fromPartial(object: Partial<QueryGetUniquePaymentStorageClientProviderRequest>): QueryGetUniquePaymentStorageClientProviderRequest;
};
export declare const QueryGetUniquePaymentStorageClientProviderResponse: {
    encode(message: QueryGetUniquePaymentStorageClientProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUniquePaymentStorageClientProviderResponse;
    fromJSON(object: any): QueryGetUniquePaymentStorageClientProviderResponse;
    toJSON(message: QueryGetUniquePaymentStorageClientProviderResponse): unknown;
    fromPartial(object: Partial<QueryGetUniquePaymentStorageClientProviderResponse>): QueryGetUniquePaymentStorageClientProviderResponse;
};
export declare const QueryAllUniquePaymentStorageClientProviderRequest: {
    encode(message: QueryAllUniquePaymentStorageClientProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUniquePaymentStorageClientProviderRequest;
    fromJSON(object: any): QueryAllUniquePaymentStorageClientProviderRequest;
    toJSON(message: QueryAllUniquePaymentStorageClientProviderRequest): unknown;
    fromPartial(object: Partial<QueryAllUniquePaymentStorageClientProviderRequest>): QueryAllUniquePaymentStorageClientProviderRequest;
};
export declare const QueryAllUniquePaymentStorageClientProviderResponse: {
    encode(message: QueryAllUniquePaymentStorageClientProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUniquePaymentStorageClientProviderResponse;
    fromJSON(object: any): QueryAllUniquePaymentStorageClientProviderResponse;
    toJSON(message: QueryAllUniquePaymentStorageClientProviderResponse): unknown;
    fromPartial(object: Partial<QueryAllUniquePaymentStorageClientProviderResponse>): QueryAllUniquePaymentStorageClientProviderResponse;
};
export declare const QueryGetProviderPaymentStorageRequest: {
    encode(message: QueryGetProviderPaymentStorageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProviderPaymentStorageRequest;
    fromJSON(object: any): QueryGetProviderPaymentStorageRequest;
    toJSON(message: QueryGetProviderPaymentStorageRequest): unknown;
    fromPartial(object: Partial<QueryGetProviderPaymentStorageRequest>): QueryGetProviderPaymentStorageRequest;
};
export declare const QueryGetProviderPaymentStorageResponse: {
    encode(message: QueryGetProviderPaymentStorageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProviderPaymentStorageResponse;
    fromJSON(object: any): QueryGetProviderPaymentStorageResponse;
    toJSON(message: QueryGetProviderPaymentStorageResponse): unknown;
    fromPartial(object: Partial<QueryGetProviderPaymentStorageResponse>): QueryGetProviderPaymentStorageResponse;
};
export declare const QueryAllProviderPaymentStorageRequest: {
    encode(message: QueryAllProviderPaymentStorageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProviderPaymentStorageRequest;
    fromJSON(object: any): QueryAllProviderPaymentStorageRequest;
    toJSON(message: QueryAllProviderPaymentStorageRequest): unknown;
    fromPartial(object: Partial<QueryAllProviderPaymentStorageRequest>): QueryAllProviderPaymentStorageRequest;
};
export declare const QueryAllProviderPaymentStorageResponse: {
    encode(message: QueryAllProviderPaymentStorageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProviderPaymentStorageResponse;
    fromJSON(object: any): QueryAllProviderPaymentStorageResponse;
    toJSON(message: QueryAllProviderPaymentStorageResponse): unknown;
    fromPartial(object: Partial<QueryAllProviderPaymentStorageResponse>): QueryAllProviderPaymentStorageResponse;
};
export declare const QueryGetEpochPaymentsRequest: {
    encode(message: QueryGetEpochPaymentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochPaymentsRequest;
    fromJSON(object: any): QueryGetEpochPaymentsRequest;
    toJSON(message: QueryGetEpochPaymentsRequest): unknown;
    fromPartial(object: Partial<QueryGetEpochPaymentsRequest>): QueryGetEpochPaymentsRequest;
};
export declare const QueryGetEpochPaymentsResponse: {
    encode(message: QueryGetEpochPaymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochPaymentsResponse;
    fromJSON(object: any): QueryGetEpochPaymentsResponse;
    toJSON(message: QueryGetEpochPaymentsResponse): unknown;
    fromPartial(object: Partial<QueryGetEpochPaymentsResponse>): QueryGetEpochPaymentsResponse;
};
export declare const QueryAllEpochPaymentsRequest: {
    encode(message: QueryAllEpochPaymentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochPaymentsRequest;
    fromJSON(object: any): QueryAllEpochPaymentsRequest;
    toJSON(message: QueryAllEpochPaymentsRequest): unknown;
    fromPartial(object: Partial<QueryAllEpochPaymentsRequest>): QueryAllEpochPaymentsRequest;
};
export declare const QueryAllEpochPaymentsResponse: {
    encode(message: QueryAllEpochPaymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochPaymentsResponse;
    fromJSON(object: any): QueryAllEpochPaymentsResponse;
    toJSON(message: QueryAllEpochPaymentsResponse): unknown;
    fromPartial(object: Partial<QueryAllEpochPaymentsResponse>): QueryAllEpochPaymentsResponse;
};
export declare const QueryUserEntryRequest: {
    encode(message: QueryUserEntryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserEntryRequest;
    fromJSON(object: any): QueryUserEntryRequest;
    toJSON(message: QueryUserEntryRequest): unknown;
    fromPartial(object: Partial<QueryUserEntryRequest>): QueryUserEntryRequest;
};
export declare const QueryUserEntryResponse: {
    encode(message: QueryUserEntryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserEntryResponse;
    fromJSON(object: any): QueryUserEntryResponse;
    toJSON(message: QueryUserEntryResponse): unknown;
    fromPartial(object: Partial<QueryUserEntryResponse>): QueryUserEntryResponse;
};
export declare const QueryStaticProvidersListRequest: {
    encode(message: QueryStaticProvidersListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStaticProvidersListRequest;
    fromJSON(object: any): QueryStaticProvidersListRequest;
    toJSON(message: QueryStaticProvidersListRequest): unknown;
    fromPartial(object: Partial<QueryStaticProvidersListRequest>): QueryStaticProvidersListRequest;
};
export declare const QueryStaticProvidersListResponse: {
    encode(message: QueryStaticProvidersListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStaticProvidersListResponse;
    fromJSON(object: any): QueryStaticProvidersListResponse;
    toJSON(message: QueryStaticProvidersListResponse): unknown;
    fromPartial(object: Partial<QueryStaticProvidersListResponse>): QueryStaticProvidersListResponse;
};
