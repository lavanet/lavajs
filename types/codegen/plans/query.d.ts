import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Plan, PlanSDKType } from "./plan";
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
export interface QueryListRequest {
}
export interface QueryListRequestSDKType {
}
export interface QueryListResponse {
    plansInfo: ListInfoStruct[];
}
export interface QueryListResponseSDKType {
    plans_info: ListInfoStructSDKType[];
}
export interface ListInfoStruct {
    index: string;
    description: string;
    price?: Coin;
}
export interface ListInfoStructSDKType {
    index: string;
    description: string;
    price?: CoinSDKType;
}
export interface QueryInfoRequest {
    planIndex: string;
}
export interface QueryInfoRequestSDKType {
    plan_index: string;
}
export interface QueryInfoResponse {
    planInfo?: Plan;
}
export interface QueryInfoResponseSDKType {
    plan_info?: PlanSDKType;
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
export declare const QueryListRequest: {
    encode(_: QueryListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRequest;
    fromJSON(_: any): QueryListRequest;
    toJSON(_: QueryListRequest): unknown;
    fromPartial(_: Partial<QueryListRequest>): QueryListRequest;
};
export declare const QueryListResponse: {
    encode(message: QueryListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListResponse;
    fromJSON(object: any): QueryListResponse;
    toJSON(message: QueryListResponse): unknown;
    fromPartial(object: Partial<QueryListResponse>): QueryListResponse;
};
export declare const ListInfoStruct: {
    encode(message: ListInfoStruct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListInfoStruct;
    fromJSON(object: any): ListInfoStruct;
    toJSON(message: ListInfoStruct): unknown;
    fromPartial(object: Partial<ListInfoStruct>): ListInfoStruct;
};
export declare const QueryInfoRequest: {
    encode(message: QueryInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInfoRequest;
    fromJSON(object: any): QueryInfoRequest;
    toJSON(message: QueryInfoRequest): unknown;
    fromPartial(object: Partial<QueryInfoRequest>): QueryInfoRequest;
};
export declare const QueryInfoResponse: {
    encode(message: QueryInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInfoResponse;
    fromJSON(object: any): QueryInfoResponse;
    toJSON(message: QueryInfoResponse): unknown;
    fromPartial(object: Partial<QueryInfoResponse>): QueryInfoResponse;
};
