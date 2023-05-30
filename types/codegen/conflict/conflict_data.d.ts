import { RelayRequest, RelayRequestSDKType, RelayReply, RelayReplySDKType } from "../pairing/relay";
import * as _m0 from "protobufjs/minimal";
export interface ResponseConflict {
    conflictRelayData0?: ConflictRelayData;
    conflictRelayData1?: ConflictRelayData;
}
export interface ResponseConflictSDKType {
    conflictRelayData0?: ConflictRelayDataSDKType;
    conflictRelayData1?: ConflictRelayDataSDKType;
}
export interface ConflictRelayData {
    request?: RelayRequest;
    reply?: RelayReply;
}
export interface ConflictRelayDataSDKType {
    request?: RelayRequestSDKType;
    reply?: RelayReplySDKType;
}
export interface FinalizationConflict {
    relayReply0?: RelayReply;
    relayReply1?: RelayReply;
}
export interface FinalizationConflictSDKType {
    relayReply0?: RelayReplySDKType;
    relayReply1?: RelayReplySDKType;
}
export declare const ResponseConflict: {
    encode(message: ResponseConflict, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseConflict;
    fromJSON(object: any): ResponseConflict;
    toJSON(message: ResponseConflict): unknown;
    fromPartial(object: Partial<ResponseConflict>): ResponseConflict;
};
export declare const ConflictRelayData: {
    encode(message: ConflictRelayData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConflictRelayData;
    fromJSON(object: any): ConflictRelayData;
    toJSON(message: ConflictRelayData): unknown;
    fromPartial(object: Partial<ConflictRelayData>): ConflictRelayData;
};
export declare const FinalizationConflict: {
    encode(message: FinalizationConflict, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FinalizationConflict;
    fromJSON(object: any): FinalizationConflict;
    toJSON(message: FinalizationConflict): unknown;
    fromPartial(object: Partial<FinalizationConflict>): FinalizationConflict;
};
