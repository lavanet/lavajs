import { Params, ParamsSDKType } from "./params";
import { Subscription, SubscriptionSDKType } from "./subscription";
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
export interface QueryCurrentRequest {
    consumer: string;
}
export interface QueryCurrentRequestSDKType {
    consumer: string;
}
export interface QueryCurrentResponse {
    sub?: Subscription;
}
export interface QueryCurrentResponseSDKType {
    sub?: SubscriptionSDKType;
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
export declare const QueryCurrentRequest: {
    encode(message: QueryCurrentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentRequest;
    fromJSON(object: any): QueryCurrentRequest;
    toJSON(message: QueryCurrentRequest): unknown;
    fromPartial(object: Partial<QueryCurrentRequest>): QueryCurrentRequest;
};
export declare const QueryCurrentResponse: {
    encode(message: QueryCurrentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentResponse;
    fromJSON(object: any): QueryCurrentResponse;
    toJSON(message: QueryCurrentResponse): unknown;
    fromPartial(object: Partial<QueryCurrentResponse>): QueryCurrentResponse;
};
