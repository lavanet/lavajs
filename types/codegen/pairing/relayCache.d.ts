import { RelayRequest, RelayRequestSDKType, RelayReply, RelayReplySDKType } from "./relay";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CacheUsage {
    CacheHits: Long;
    CacheMisses: Long;
}
export interface CacheUsageSDKType {
    CacheHits: Long;
    CacheMisses: Long;
}
export interface RelayCacheGet {
    request?: RelayRequest;
    apiInterface: string;
    blockHash: Uint8Array;
    /** Used to differentiate between different chains so each has its own bucket */
    chainID: string;
    finalized: boolean;
}
export interface RelayCacheGetSDKType {
    request?: RelayRequestSDKType;
    apiInterface: string;
    blockHash: Uint8Array;
    chainID: string;
    finalized: boolean;
}
export interface RelayCacheSet {
    request?: RelayRequest;
    apiInterface: string;
    blockHash: Uint8Array;
    /** Used to differentiate between different chains so each has its own bucket */
    chainID: string;
    /** bucketID is used to make sure a big user doesnt flood the cache, on providers this will be consumer address, on portal it will be dappID */
    bucketID: string;
    response?: RelayReply;
    finalized: boolean;
}
export interface RelayCacheSetSDKType {
    request?: RelayRequestSDKType;
    apiInterface: string;
    blockHash: Uint8Array;
    chainID: string;
    bucketID: string;
    response?: RelayReplySDKType;
    finalized: boolean;
}
export declare const CacheUsage: {
    encode(message: CacheUsage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CacheUsage;
    fromJSON(object: any): CacheUsage;
    toJSON(message: CacheUsage): unknown;
    fromPartial(object: Partial<CacheUsage>): CacheUsage;
};
export declare const RelayCacheGet: {
    encode(message: RelayCacheGet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RelayCacheGet;
    fromJSON(object: any): RelayCacheGet;
    toJSON(message: RelayCacheGet): unknown;
    fromPartial(object: Partial<RelayCacheGet>): RelayCacheGet;
};
export declare const RelayCacheSet: {
    encode(message: RelayCacheSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RelayCacheSet;
    fromJSON(object: any): RelayCacheSet;
    toJSON(message: RelayCacheSet): unknown;
    fromPartial(object: Partial<RelayCacheSet>): RelayCacheSet;
};
