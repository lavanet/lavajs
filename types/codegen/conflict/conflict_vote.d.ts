import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Provider {
    account: string;
    response: Uint8Array;
}
export interface ProviderSDKType {
    account: string;
    response: Uint8Array;
}
export interface Vote {
    address: string;
    Hash: Uint8Array;
    Result: Long;
}
export interface VoteSDKType {
    address: string;
    Hash: Uint8Array;
    Result: Long;
}
export interface ConflictVote {
    index: string;
    clientAddress: string;
    voteDeadline: Long;
    voteStartBlock: Long;
    voteState: Long;
    chainID: string;
    apiUrl: string;
    requestData: Uint8Array;
    requestBlock: Long;
    firstProvider?: Provider;
    secondProvider?: Provider;
    votes: Vote[];
}
export interface ConflictVoteSDKType {
    index: string;
    clientAddress: string;
    voteDeadline: Long;
    voteStartBlock: Long;
    voteState: Long;
    chainID: string;
    apiUrl: string;
    requestData: Uint8Array;
    requestBlock: Long;
    firstProvider?: ProviderSDKType;
    secondProvider?: ProviderSDKType;
    votes: VoteSDKType[];
}
export declare const Provider: {
    encode(message: Provider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Provider;
    fromJSON(object: any): Provider;
    toJSON(message: Provider): unknown;
    fromPartial(object: Partial<Provider>): Provider;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial(object: Partial<Vote>): Vote;
};
export declare const ConflictVote: {
    encode(message: ConflictVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConflictVote;
    fromJSON(object: any): ConflictVote;
    toJSON(message: ConflictVote): unknown;
    fromPartial(object: Partial<ConflictVote>): ConflictVote;
};
