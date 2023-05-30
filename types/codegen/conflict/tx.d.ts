import { FinalizationConflict, FinalizationConflictSDKType, ResponseConflict, ResponseConflictSDKType } from "./conflict_data";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** TODO:: change coin type to another proto (define proto in another file int this directory) */
export interface MsgDetection {
    creator: string;
    finalizationConflict?: FinalizationConflict;
    responseConflict?: ResponseConflict;
    sameProviderConflict?: FinalizationConflict;
}
/** TODO:: change coin type to another proto (define proto in another file int this directory) */
export interface MsgDetectionSDKType {
    creator: string;
    finalizationConflict?: FinalizationConflictSDKType;
    responseConflict?: ResponseConflictSDKType;
    sameProviderConflict?: FinalizationConflictSDKType;
}
export interface MsgDetectionResponse {
}
export interface MsgDetectionResponseSDKType {
}
export interface MsgConflictVoteCommit {
    creator: string;
    voteID: string;
    hash: Uint8Array;
}
export interface MsgConflictVoteCommitSDKType {
    creator: string;
    voteID: string;
    hash: Uint8Array;
}
export interface MsgConflictVoteCommitResponse {
}
export interface MsgConflictVoteCommitResponseSDKType {
}
export interface MsgConflictVoteReveal {
    creator: string;
    voteID: string;
    nonce: Long;
    hash: Uint8Array;
}
export interface MsgConflictVoteRevealSDKType {
    creator: string;
    voteID: string;
    nonce: Long;
    hash: Uint8Array;
}
export interface MsgConflictVoteRevealResponse {
}
export interface MsgConflictVoteRevealResponseSDKType {
}
export declare const MsgDetection: {
    encode(message: MsgDetection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDetection;
    fromJSON(object: any): MsgDetection;
    toJSON(message: MsgDetection): unknown;
    fromPartial(object: Partial<MsgDetection>): MsgDetection;
};
export declare const MsgDetectionResponse: {
    encode(_: MsgDetectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDetectionResponse;
    fromJSON(_: any): MsgDetectionResponse;
    toJSON(_: MsgDetectionResponse): unknown;
    fromPartial(_: Partial<MsgDetectionResponse>): MsgDetectionResponse;
};
export declare const MsgConflictVoteCommit: {
    encode(message: MsgConflictVoteCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConflictVoteCommit;
    fromJSON(object: any): MsgConflictVoteCommit;
    toJSON(message: MsgConflictVoteCommit): unknown;
    fromPartial(object: Partial<MsgConflictVoteCommit>): MsgConflictVoteCommit;
};
export declare const MsgConflictVoteCommitResponse: {
    encode(_: MsgConflictVoteCommitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConflictVoteCommitResponse;
    fromJSON(_: any): MsgConflictVoteCommitResponse;
    toJSON(_: MsgConflictVoteCommitResponse): unknown;
    fromPartial(_: Partial<MsgConflictVoteCommitResponse>): MsgConflictVoteCommitResponse;
};
export declare const MsgConflictVoteReveal: {
    encode(message: MsgConflictVoteReveal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConflictVoteReveal;
    fromJSON(object: any): MsgConflictVoteReveal;
    toJSON(message: MsgConflictVoteReveal): unknown;
    fromPartial(object: Partial<MsgConflictVoteReveal>): MsgConflictVoteReveal;
};
export declare const MsgConflictVoteRevealResponse: {
    encode(_: MsgConflictVoteRevealResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConflictVoteRevealResponse;
    fromJSON(_: any): MsgConflictVoteRevealResponse;
    toJSON(_: MsgConflictVoteRevealResponse): unknown;
    fromPartial(_: Partial<MsgConflictVoteRevealResponse>): MsgConflictVoteRevealResponse;
};
