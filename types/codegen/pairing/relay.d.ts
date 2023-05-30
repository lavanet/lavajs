import { StakeEntry, StakeEntrySDKType } from "../epochstorage/stake_entry";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface RelaySession {
    specId: string;
    contentHash: Uint8Array;
    sessionId: Long;
    /** total compute unit used including this relay */
    cuSum: Long;
    provider: string;
    relayNum: Long;
    qosReport?: QualityOfServiceReport;
    epoch: Long;
    unresponsiveProviders: Uint8Array;
    lavaChainId: string;
    sig: Uint8Array;
    badge?: Badge;
}
export interface RelaySessionSDKType {
    spec_id: string;
    content_hash: Uint8Array;
    session_id: Long;
    cu_sum: Long;
    provider: string;
    relay_num: Long;
    qos_report?: QualityOfServiceReportSDKType;
    epoch: Long;
    unresponsive_providers: Uint8Array;
    lava_chain_id: string;
    sig: Uint8Array;
    badge?: BadgeSDKType;
}
export interface RelayPrivateData {
    connectionType: string;
    /** some relays have associated urls that are filled with params ('/block/{height}') */
    apiUrl: string;
    data: Uint8Array;
    requestBlock: Long;
    apiInterface: string;
    salt: Uint8Array;
    metadata: Metadata[];
}
export interface RelayPrivateDataSDKType {
    connection_type: string;
    api_url: string;
    data: Uint8Array;
    request_block: Long;
    api_interface: string;
    salt: Uint8Array;
    metadata: MetadataSDKType[];
}
export interface Metadata {
    name: string;
    value: string;
}
export interface MetadataSDKType {
    name: string;
    value: string;
}
export interface RelayRequest {
    relaySession?: RelaySession;
    relayData?: RelayPrivateData;
}
export interface RelayRequestSDKType {
    relay_session?: RelaySessionSDKType;
    relay_data?: RelayPrivateDataSDKType;
}
export interface Badge {
    cuAllocation: Long;
    epoch: Long;
    address: string;
    lavaChainId: string;
    projectSig: Uint8Array;
}
export interface BadgeSDKType {
    cu_allocation: Long;
    epoch: Long;
    address: string;
    lava_chain_id: string;
    project_sig: Uint8Array;
}
export interface GenerateBadgeRequest {
    badgeAddress: string;
    projectId: string;
    specId: string;
}
export interface GenerateBadgeRequestSDKType {
    badge_address: string;
    project_id: string;
    spec_id: string;
}
export interface GenerateBadgeResponse {
    badge?: Badge;
    pairingList: StakeEntry[];
}
export interface GenerateBadgeResponseSDKType {
    badge?: BadgeSDKType;
    pairing_list: StakeEntrySDKType[];
}
export interface RelayReply {
    data: Uint8Array;
    /** sign the data hash+query hash+nonce */
    sig: Uint8Array;
    nonce: number;
    latestBlock: Long;
    finalizedBlocksHashes: Uint8Array;
    /** sign latest_block+finalized_blocks_hashes+session_id+block_height+relay_num */
    sigBlocks: Uint8Array;
    metadata: Metadata[];
}
export interface RelayReplySDKType {
    data: Uint8Array;
    sig: Uint8Array;
    nonce: number;
    latest_block: Long;
    finalized_blocks_hashes: Uint8Array;
    sig_blocks: Uint8Array;
    metadata: MetadataSDKType[];
}
export interface QualityOfServiceReport {
    latency: string;
    availability: string;
    sync: string;
}
export interface QualityOfServiceReportSDKType {
    latency: string;
    availability: string;
    sync: string;
}
export declare const RelaySession: {
    encode(message: RelaySession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RelaySession;
    fromJSON(object: any): RelaySession;
    toJSON(message: RelaySession): unknown;
    fromPartial(object: Partial<RelaySession>): RelaySession;
};
export declare const RelayPrivateData: {
    encode(message: RelayPrivateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RelayPrivateData;
    fromJSON(object: any): RelayPrivateData;
    toJSON(message: RelayPrivateData): unknown;
    fromPartial(object: Partial<RelayPrivateData>): RelayPrivateData;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial(object: Partial<Metadata>): Metadata;
};
export declare const RelayRequest: {
    encode(message: RelayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RelayRequest;
    fromJSON(object: any): RelayRequest;
    toJSON(message: RelayRequest): unknown;
    fromPartial(object: Partial<RelayRequest>): RelayRequest;
};
export declare const Badge: {
    encode(message: Badge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Badge;
    fromJSON(object: any): Badge;
    toJSON(message: Badge): unknown;
    fromPartial(object: Partial<Badge>): Badge;
};
export declare const GenerateBadgeRequest: {
    encode(message: GenerateBadgeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateBadgeRequest;
    fromJSON(object: any): GenerateBadgeRequest;
    toJSON(message: GenerateBadgeRequest): unknown;
    fromPartial(object: Partial<GenerateBadgeRequest>): GenerateBadgeRequest;
};
export declare const GenerateBadgeResponse: {
    encode(message: GenerateBadgeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateBadgeResponse;
    fromJSON(object: any): GenerateBadgeResponse;
    toJSON(message: GenerateBadgeResponse): unknown;
    fromPartial(object: Partial<GenerateBadgeResponse>): GenerateBadgeResponse;
};
export declare const RelayReply: {
    encode(message: RelayReply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RelayReply;
    fromJSON(object: any): RelayReply;
    toJSON(message: RelayReply): unknown;
    fromPartial(object: Partial<RelayReply>): RelayReply;
};
export declare const QualityOfServiceReport: {
    encode(message: QualityOfServiceReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QualityOfServiceReport;
    fromJSON(object: any): QualityOfServiceReport;
    toJSON(message: QualityOfServiceReport): unknown;
    fromPartial(object: Partial<QualityOfServiceReport>): QualityOfServiceReport;
};
