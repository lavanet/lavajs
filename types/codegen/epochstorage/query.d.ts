import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StakeStorage, StakeStorageSDKType } from "./stake_storage";
import { EpochDetails, EpochDetailsSDKType } from "./epoch_details";
import { FixatedParams, FixatedParamsSDKType } from "./fixated_params";
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
export interface QueryGetStakeStorageRequest {
    index: string;
}
export interface QueryGetStakeStorageRequestSDKType {
    index: string;
}
export interface QueryGetStakeStorageResponse {
    stakeStorage?: StakeStorage;
}
export interface QueryGetStakeStorageResponseSDKType {
    stakeStorage?: StakeStorageSDKType;
}
export interface QueryAllStakeStorageRequest {
    pagination?: PageRequest;
}
export interface QueryAllStakeStorageRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllStakeStorageResponse {
    stakeStorage: StakeStorage[];
    pagination?: PageResponse;
}
export interface QueryAllStakeStorageResponseSDKType {
    stakeStorage: StakeStorageSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetEpochDetailsRequest {
}
export interface QueryGetEpochDetailsRequestSDKType {
}
export interface QueryGetEpochDetailsResponse {
    EpochDetails?: EpochDetails;
}
export interface QueryGetEpochDetailsResponseSDKType {
    EpochDetails?: EpochDetailsSDKType;
}
export interface QueryGetFixatedParamsRequest {
    index: string;
}
export interface QueryGetFixatedParamsRequestSDKType {
    index: string;
}
export interface QueryGetFixatedParamsResponse {
    fixatedParams?: FixatedParams;
}
export interface QueryGetFixatedParamsResponseSDKType {
    fixatedParams?: FixatedParamsSDKType;
}
export interface QueryAllFixatedParamsRequest {
    pagination?: PageRequest;
}
export interface QueryAllFixatedParamsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllFixatedParamsResponse {
    fixatedParams: FixatedParams[];
    pagination?: PageResponse;
}
export interface QueryAllFixatedParamsResponseSDKType {
    fixatedParams: FixatedParamsSDKType[];
    pagination?: PageResponseSDKType;
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
export declare const QueryGetStakeStorageRequest: {
    encode(message: QueryGetStakeStorageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakeStorageRequest;
    fromJSON(object: any): QueryGetStakeStorageRequest;
    toJSON(message: QueryGetStakeStorageRequest): unknown;
    fromPartial(object: Partial<QueryGetStakeStorageRequest>): QueryGetStakeStorageRequest;
};
export declare const QueryGetStakeStorageResponse: {
    encode(message: QueryGetStakeStorageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakeStorageResponse;
    fromJSON(object: any): QueryGetStakeStorageResponse;
    toJSON(message: QueryGetStakeStorageResponse): unknown;
    fromPartial(object: Partial<QueryGetStakeStorageResponse>): QueryGetStakeStorageResponse;
};
export declare const QueryAllStakeStorageRequest: {
    encode(message: QueryAllStakeStorageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakeStorageRequest;
    fromJSON(object: any): QueryAllStakeStorageRequest;
    toJSON(message: QueryAllStakeStorageRequest): unknown;
    fromPartial(object: Partial<QueryAllStakeStorageRequest>): QueryAllStakeStorageRequest;
};
export declare const QueryAllStakeStorageResponse: {
    encode(message: QueryAllStakeStorageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakeStorageResponse;
    fromJSON(object: any): QueryAllStakeStorageResponse;
    toJSON(message: QueryAllStakeStorageResponse): unknown;
    fromPartial(object: Partial<QueryAllStakeStorageResponse>): QueryAllStakeStorageResponse;
};
export declare const QueryGetEpochDetailsRequest: {
    encode(_: QueryGetEpochDetailsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochDetailsRequest;
    fromJSON(_: any): QueryGetEpochDetailsRequest;
    toJSON(_: QueryGetEpochDetailsRequest): unknown;
    fromPartial(_: Partial<QueryGetEpochDetailsRequest>): QueryGetEpochDetailsRequest;
};
export declare const QueryGetEpochDetailsResponse: {
    encode(message: QueryGetEpochDetailsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochDetailsResponse;
    fromJSON(object: any): QueryGetEpochDetailsResponse;
    toJSON(message: QueryGetEpochDetailsResponse): unknown;
    fromPartial(object: Partial<QueryGetEpochDetailsResponse>): QueryGetEpochDetailsResponse;
};
export declare const QueryGetFixatedParamsRequest: {
    encode(message: QueryGetFixatedParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFixatedParamsRequest;
    fromJSON(object: any): QueryGetFixatedParamsRequest;
    toJSON(message: QueryGetFixatedParamsRequest): unknown;
    fromPartial(object: Partial<QueryGetFixatedParamsRequest>): QueryGetFixatedParamsRequest;
};
export declare const QueryGetFixatedParamsResponse: {
    encode(message: QueryGetFixatedParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFixatedParamsResponse;
    fromJSON(object: any): QueryGetFixatedParamsResponse;
    toJSON(message: QueryGetFixatedParamsResponse): unknown;
    fromPartial(object: Partial<QueryGetFixatedParamsResponse>): QueryGetFixatedParamsResponse;
};
export declare const QueryAllFixatedParamsRequest: {
    encode(message: QueryAllFixatedParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFixatedParamsRequest;
    fromJSON(object: any): QueryAllFixatedParamsRequest;
    toJSON(message: QueryAllFixatedParamsRequest): unknown;
    fromPartial(object: Partial<QueryAllFixatedParamsRequest>): QueryAllFixatedParamsRequest;
};
export declare const QueryAllFixatedParamsResponse: {
    encode(message: QueryAllFixatedParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFixatedParamsResponse;
    fromJSON(object: any): QueryAllFixatedParamsResponse;
    toJSON(message: QueryAllFixatedParamsResponse): unknown;
    fromPartial(object: Partial<QueryAllFixatedParamsResponse>): QueryAllFixatedParamsResponse;
};
