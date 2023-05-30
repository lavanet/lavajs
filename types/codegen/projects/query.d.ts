import { Params, ParamsSDKType } from "./params";
import { Project, ProjectSDKType } from "./project";
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
export interface QueryInfoRequest {
    project: string;
}
export interface QueryInfoRequestSDKType {
    project: string;
}
export interface QueryInfoResponse {
    project?: Project;
}
export interface QueryInfoResponseSDKType {
    project?: ProjectSDKType;
}
export interface QueryDeveloperRequest {
    developer: string;
}
export interface QueryDeveloperRequestSDKType {
    developer: string;
}
export interface QueryDeveloperResponse {
    project?: Project;
}
export interface QueryDeveloperResponseSDKType {
    project?: ProjectSDKType;
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
export declare const QueryDeveloperRequest: {
    encode(message: QueryDeveloperRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeveloperRequest;
    fromJSON(object: any): QueryDeveloperRequest;
    toJSON(message: QueryDeveloperRequest): unknown;
    fromPartial(object: Partial<QueryDeveloperRequest>): QueryDeveloperRequest;
};
export declare const QueryDeveloperResponse: {
    encode(message: QueryDeveloperResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeveloperResponse;
    fromJSON(object: any): QueryDeveloperResponse;
    toJSON(message: QueryDeveloperResponse): unknown;
    fromPartial(object: Partial<QueryDeveloperResponse>): QueryDeveloperResponse;
};
