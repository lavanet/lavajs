import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Spec, SpecSDKType } from "./spec";
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
export interface QueryGetSpecRequest {
    ChainID: string;
}
export interface QueryGetSpecRequestSDKType {
    ChainID: string;
}
export interface QueryGetSpecResponse {
    Spec?: Spec;
}
export interface QueryGetSpecResponseSDKType {
    Spec?: SpecSDKType;
}
export interface QueryAllSpecRequest {
    pagination?: PageRequest;
}
export interface QueryAllSpecRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllSpecResponse {
    Spec: Spec[];
    pagination?: PageResponse;
}
export interface QueryAllSpecResponseSDKType {
    Spec: SpecSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryShowAllChainsRequest {
}
export interface QueryShowAllChainsRequestSDKType {
}
export interface QueryShowAllChainsResponse {
    chainInfoList: ShowAllChainsInfoStruct[];
}
export interface QueryShowAllChainsResponseSDKType {
    chainInfoList: ShowAllChainsInfoStructSDKType[];
}
export interface ShowAllChainsInfoStruct {
    chainName: string;
    chainID: string;
    enabledApiInterfaces: string[];
}
export interface ShowAllChainsInfoStructSDKType {
    chainName: string;
    chainID: string;
    enabledApiInterfaces: string[];
}
export interface QueryShowChainInfoRequest {
    chainName: string;
}
export interface QueryShowChainInfoRequestSDKType {
    chainName: string;
}
export interface ApiList {
    interface: string;
    supportedApis: string[];
}
export interface ApiListSDKType {
    interface: string;
    supportedApis: string[];
}
export interface QueryShowChainInfoResponse {
    chainID: string;
    interfaces: string[];
    supportedApisInterfaceList: ApiList[];
}
export interface QueryShowChainInfoResponseSDKType {
    chainID: string;
    interfaces: string[];
    supportedApisInterfaceList: ApiListSDKType[];
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
export declare const QueryGetSpecRequest: {
    encode(message: QueryGetSpecRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSpecRequest;
    fromJSON(object: any): QueryGetSpecRequest;
    toJSON(message: QueryGetSpecRequest): unknown;
    fromPartial(object: Partial<QueryGetSpecRequest>): QueryGetSpecRequest;
};
export declare const QueryGetSpecResponse: {
    encode(message: QueryGetSpecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSpecResponse;
    fromJSON(object: any): QueryGetSpecResponse;
    toJSON(message: QueryGetSpecResponse): unknown;
    fromPartial(object: Partial<QueryGetSpecResponse>): QueryGetSpecResponse;
};
export declare const QueryAllSpecRequest: {
    encode(message: QueryAllSpecRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSpecRequest;
    fromJSON(object: any): QueryAllSpecRequest;
    toJSON(message: QueryAllSpecRequest): unknown;
    fromPartial(object: Partial<QueryAllSpecRequest>): QueryAllSpecRequest;
};
export declare const QueryAllSpecResponse: {
    encode(message: QueryAllSpecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSpecResponse;
    fromJSON(object: any): QueryAllSpecResponse;
    toJSON(message: QueryAllSpecResponse): unknown;
    fromPartial(object: Partial<QueryAllSpecResponse>): QueryAllSpecResponse;
};
export declare const QueryShowAllChainsRequest: {
    encode(_: QueryShowAllChainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowAllChainsRequest;
    fromJSON(_: any): QueryShowAllChainsRequest;
    toJSON(_: QueryShowAllChainsRequest): unknown;
    fromPartial(_: Partial<QueryShowAllChainsRequest>): QueryShowAllChainsRequest;
};
export declare const QueryShowAllChainsResponse: {
    encode(message: QueryShowAllChainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowAllChainsResponse;
    fromJSON(object: any): QueryShowAllChainsResponse;
    toJSON(message: QueryShowAllChainsResponse): unknown;
    fromPartial(object: Partial<QueryShowAllChainsResponse>): QueryShowAllChainsResponse;
};
export declare const ShowAllChainsInfoStruct: {
    encode(message: ShowAllChainsInfoStruct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ShowAllChainsInfoStruct;
    fromJSON(object: any): ShowAllChainsInfoStruct;
    toJSON(message: ShowAllChainsInfoStruct): unknown;
    fromPartial(object: Partial<ShowAllChainsInfoStruct>): ShowAllChainsInfoStruct;
};
export declare const QueryShowChainInfoRequest: {
    encode(message: QueryShowChainInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowChainInfoRequest;
    fromJSON(object: any): QueryShowChainInfoRequest;
    toJSON(message: QueryShowChainInfoRequest): unknown;
    fromPartial(object: Partial<QueryShowChainInfoRequest>): QueryShowChainInfoRequest;
};
export declare const ApiList: {
    encode(message: ApiList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ApiList;
    fromJSON(object: any): ApiList;
    toJSON(message: ApiList): unknown;
    fromPartial(object: Partial<ApiList>): ApiList;
};
export declare const QueryShowChainInfoResponse: {
    encode(message: QueryShowChainInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowChainInfoResponse;
    fromJSON(object: any): QueryShowChainInfoResponse;
    toJSON(message: QueryShowChainInfoResponse): unknown;
    fromPartial(object: Partial<QueryShowChainInfoResponse>): QueryShowChainInfoResponse;
};
