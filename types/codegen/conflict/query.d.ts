import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { ConflictVote, ConflictVoteSDKType } from "./conflict_vote";
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
export interface QueryGetConflictVoteRequest {
    index: string;
}
export interface QueryGetConflictVoteRequestSDKType {
    index: string;
}
export interface QueryGetConflictVoteResponse {
    conflictVote?: ConflictVote;
}
export interface QueryGetConflictVoteResponseSDKType {
    conflictVote?: ConflictVoteSDKType;
}
export interface QueryAllConflictVoteRequest {
    pagination?: PageRequest;
}
export interface QueryAllConflictVoteRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllConflictVoteResponse {
    conflictVote: ConflictVote[];
    pagination?: PageResponse;
}
export interface QueryAllConflictVoteResponseSDKType {
    conflictVote: ConflictVoteSDKType[];
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
export declare const QueryGetConflictVoteRequest: {
    encode(message: QueryGetConflictVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConflictVoteRequest;
    fromJSON(object: any): QueryGetConflictVoteRequest;
    toJSON(message: QueryGetConflictVoteRequest): unknown;
    fromPartial(object: Partial<QueryGetConflictVoteRequest>): QueryGetConflictVoteRequest;
};
export declare const QueryGetConflictVoteResponse: {
    encode(message: QueryGetConflictVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConflictVoteResponse;
    fromJSON(object: any): QueryGetConflictVoteResponse;
    toJSON(message: QueryGetConflictVoteResponse): unknown;
    fromPartial(object: Partial<QueryGetConflictVoteResponse>): QueryGetConflictVoteResponse;
};
export declare const QueryAllConflictVoteRequest: {
    encode(message: QueryAllConflictVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConflictVoteRequest;
    fromJSON(object: any): QueryAllConflictVoteRequest;
    toJSON(message: QueryAllConflictVoteRequest): unknown;
    fromPartial(object: Partial<QueryAllConflictVoteRequest>): QueryAllConflictVoteRequest;
};
export declare const QueryAllConflictVoteResponse: {
    encode(message: QueryAllConflictVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConflictVoteResponse;
    fromJSON(object: any): QueryAllConflictVoteResponse;
    toJSON(message: QueryAllConflictVoteResponse): unknown;
    fromPartial(object: Partial<QueryAllConflictVoteResponse>): QueryAllConflictVoteResponse;
};
