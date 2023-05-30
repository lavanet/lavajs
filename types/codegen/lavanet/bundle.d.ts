import * as _2 from "../proto/common/fixationEntry";
import * as _9 from "../proto/conflict/conflict_data";
import * as _10 from "../proto/conflict/conflict_vote";
import * as _11 from "../proto/conflict/genesis";
import * as _12 from "../proto/conflict/params";
import * as _13 from "../proto/conflict/query";
import * as _14 from "../proto/conflict/tx";
import * as _24 from "../proto/epochstorage/endpoint";
import * as _25 from "../proto/epochstorage/epoch_details";
import * as _26 from "../proto/epochstorage/fixated_params";
import * as _27 from "../proto/epochstorage/genesis";
import * as _28 from "../proto/epochstorage/params";
import * as _29 from "../proto/epochstorage/query";
import * as _30 from "../proto/epochstorage/stake_entry";
import * as _31 from "../proto/epochstorage/stake_storage";
import * as _44 from "../proto/pairing/epoch_payments";
import * as _45 from "../proto/pairing/genesis";
import * as _46 from "../proto/pairing/params";
import * as _47 from "../proto/pairing/provider_payment_storage";
import * as _48 from "../proto/pairing/query";
import * as _49 from "../proto/pairing/relay";
import * as _50 from "../proto/pairing/relayCache";
import * as _51 from "../proto/pairing/stake_to_max_cu_list";
import * as _52 from "../proto/pairing/tx";
import * as _53 from "../proto/pairing/unique_payment_storage_client_provider";
import * as _60 from "../proto/plans/genesis";
import * as _61 from "../proto/plans/params";
import * as _62 from "../proto/plans/plan";
import * as _63 from "../proto/plans/plans_add_proposal";
import * as _64 from "../proto/plans/query";
import * as _68 from "../projects/project";
import * as _71 from "../proto/projects/genesis";
import * as _72 from "../proto/projects/params";
import * as _73 from "../proto/projects/project";
import * as _74 from "../proto/projects/query";
import * as _75 from "../proto/projects/tx";
import * as _83 from "../spec/genesis";
import * as _84 from "../spec/params";
import * as _85 from "../spec/query";
import * as _86 from "../spec/service_api";
import * as _87 from "../spec/spec_add_proposal";
import * as _88 from "../spec/spec";
import * as _92 from "../proto/subscription/query";
import * as _95 from "../subscription/genesis";
import * as _96 from "../subscription/params";
import * as _97 from "../subscription/query";
import * as _98 from "../subscription/subscription";
import * as _99 from "../subscription/tx";
import * as _234 from "../proto/conflict/query.rpc.Query";
import * as _235 from "../proto/epochstorage/query.rpc.Query";
import * as _236 from "../proto/pairing/query.rpc.Query";
import * as _237 from "../proto/plans/query.rpc.Query";
import * as _238 from "../proto/projects/query.rpc.Query";
import * as _241 from "../spec/query.rpc.Query";
import * as _242 from "../subscription/query.rpc.Query";
import * as _246 from "../proto/conflict/tx.rpc.msg";
import * as _247 from "../proto/pairing/tx.rpc.msg";
import * as _248 from "../proto/projects/tx.rpc.msg";
import * as _250 from "../subscription/tx.rpc.msg";
export declare namespace lavanet {
    namespace lava {
        const common: {
            Entry: {
                encode(message: _2.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Entry;
                fromJSON(object: any): _2.Entry;
                toJSON(message: _2.Entry): unknown;
                fromPartial(object: Partial<_2.Entry>): _2.Entry;
            };
        };
        const conflict: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                conflictVote(request: _13.QueryGetConflictVoteRequest): Promise<_13.QueryGetConflictVoteResponse>;
                conflictVoteAll(request?: _13.QueryAllConflictVoteRequest): Promise<_13.QueryAllConflictVoteResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    detection(value: _14.MsgDetection): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    conflictVoteCommit(value: _14.MsgConflictVoteCommit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    conflictVoteReveal(value: _14.MsgConflictVoteReveal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    detection(value: _14.MsgDetection): {
                        typeUrl: string;
                        value: _14.MsgDetection;
                    };
                    conflictVoteCommit(value: _14.MsgConflictVoteCommit): {
                        typeUrl: string;
                        value: _14.MsgConflictVoteCommit;
                    };
                    conflictVoteReveal(value: _14.MsgConflictVoteReveal): {
                        typeUrl: string;
                        value: _14.MsgConflictVoteReveal;
                    };
                };
                toJSON: {
                    detection(value: _14.MsgDetection): {
                        typeUrl: string;
                        value: unknown;
                    };
                    conflictVoteCommit(value: _14.MsgConflictVoteCommit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    conflictVoteReveal(value: _14.MsgConflictVoteReveal): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    detection(value: any): {
                        typeUrl: string;
                        value: _14.MsgDetection;
                    };
                    conflictVoteCommit(value: any): {
                        typeUrl: string;
                        value: _14.MsgConflictVoteCommit;
                    };
                    conflictVoteReveal(value: any): {
                        typeUrl: string;
                        value: _14.MsgConflictVoteReveal;
                    };
                };
                fromPartial: {
                    detection(value: _14.MsgDetection): {
                        typeUrl: string;
                        value: _14.MsgDetection;
                    };
                    conflictVoteCommit(value: _14.MsgConflictVoteCommit): {
                        typeUrl: string;
                        value: _14.MsgConflictVoteCommit;
                    };
                    conflictVoteReveal(value: _14.MsgConflictVoteReveal): {
                        typeUrl: string;
                        value: _14.MsgConflictVoteReveal;
                    };
                };
            };
            AminoConverter: {
                "/lavanet.lava.conflict.MsgDetection": {
                    aminoType: string;
                    toAmino: ({ creator, finalizationConflict, responseConflict, sameProviderConflict }: _14.MsgDetection) => {
                        creator: string;
                        finalizationConflict: {
                            relayReply0: {
                                data: Uint8Array;
                                sig: Uint8Array;
                                nonce: number;
                                latest_block: string;
                                finalized_blocks_hashes: Uint8Array;
                                sig_blocks: Uint8Array;
                            };
                            relayReply1: {
                                data: Uint8Array;
                                sig: Uint8Array;
                                nonce: number;
                                latest_block: string;
                                finalized_blocks_hashes: Uint8Array;
                                sig_blocks: Uint8Array;
                            };
                        };
                        responseConflict: {
                            conflictRelayData0: {
                                request: {
                                    relay_session: {
                                        spec_id: string;
                                        content_hash: Uint8Array;
                                        session_id: string;
                                        cu_sum: string;
                                        provider: string;
                                        relay_num: string;
                                        qos_report: {
                                            latency: string;
                                            availability: string;
                                            sync: string;
                                        };
                                        epoch: string;
                                        unresponsive_providers: Uint8Array;
                                        lava_chain_id: string;
                                        sig: Uint8Array;
                                        badge: {
                                            cu_allocation: string;
                                            epoch: string;
                                            address: string;
                                            lava_chain_id: string;
                                            project_sig: Uint8Array;
                                        };
                                    };
                                    relay_data: {
                                        connection_type: string;
                                        api_url: string;
                                        data: Uint8Array;
                                        request_block: string;
                                        api_interface: string;
                                        salt: Uint8Array;
                                    };
                                };
                                reply: {
                                    data: Uint8Array;
                                    sig: Uint8Array;
                                    nonce: number;
                                    latest_block: string;
                                    finalized_blocks_hashes: Uint8Array;
                                    sig_blocks: Uint8Array;
                                };
                            };
                            conflictRelayData1: {
                                request: {
                                    relay_session: {
                                        spec_id: string;
                                        content_hash: Uint8Array;
                                        session_id: string;
                                        cu_sum: string;
                                        provider: string;
                                        relay_num: string;
                                        qos_report: {
                                            latency: string;
                                            availability: string;
                                            sync: string;
                                        };
                                        epoch: string;
                                        unresponsive_providers: Uint8Array;
                                        lava_chain_id: string;
                                        sig: Uint8Array;
                                        badge: {
                                            cu_allocation: string;
                                            epoch: string;
                                            address: string;
                                            lava_chain_id: string;
                                            project_sig: Uint8Array;
                                        };
                                    };
                                    relay_data: {
                                        connection_type: string;
                                        api_url: string;
                                        data: Uint8Array;
                                        request_block: string;
                                        api_interface: string;
                                        salt: Uint8Array;
                                    };
                                };
                                reply: {
                                    data: Uint8Array;
                                    sig: Uint8Array;
                                    nonce: number;
                                    latest_block: string;
                                    finalized_blocks_hashes: Uint8Array;
                                    sig_blocks: Uint8Array;
                                };
                            };
                        };
                        sameProviderConflict: {
                            relayReply0: {
                                data: Uint8Array;
                                sig: Uint8Array;
                                nonce: number;
                                latest_block: string;
                                finalized_blocks_hashes: Uint8Array;
                                sig_blocks: Uint8Array;
                            };
                            relayReply1: {
                                data: Uint8Array;
                                sig: Uint8Array;
                                nonce: number;
                                latest_block: string;
                                finalized_blocks_hashes: Uint8Array;
                                sig_blocks: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ creator, finalizationConflict, responseConflict, sameProviderConflict }: {
                        creator: string;
                        finalizationConflict: {
                            relayReply0: {
                                data: Uint8Array;
                                sig: Uint8Array;
                                nonce: number;
                                latest_block: string;
                                finalized_blocks_hashes: Uint8Array;
                                sig_blocks: Uint8Array;
                            };
                            relayReply1: {
                                data: Uint8Array;
                                sig: Uint8Array;
                                nonce: number;
                                latest_block: string;
                                finalized_blocks_hashes: Uint8Array;
                                sig_blocks: Uint8Array;
                            };
                        };
                        responseConflict: {
                            conflictRelayData0: {
                                request: {
                                    relay_session: {
                                        spec_id: string;
                                        content_hash: Uint8Array;
                                        session_id: string;
                                        cu_sum: string;
                                        provider: string;
                                        relay_num: string;
                                        qos_report: {
                                            latency: string;
                                            availability: string;
                                            sync: string;
                                        };
                                        epoch: string;
                                        unresponsive_providers: Uint8Array;
                                        lava_chain_id: string;
                                        sig: Uint8Array;
                                        badge: {
                                            cu_allocation: string;
                                            epoch: string;
                                            address: string;
                                            lava_chain_id: string;
                                            project_sig: Uint8Array;
                                        };
                                    };
                                    relay_data: {
                                        connection_type: string;
                                        api_url: string;
                                        data: Uint8Array;
                                        request_block: string;
                                        api_interface: string;
                                        salt: Uint8Array;
                                    };
                                };
                                reply: {
                                    data: Uint8Array;
                                    sig: Uint8Array;
                                    nonce: number;
                                    latest_block: string;
                                    finalized_blocks_hashes: Uint8Array;
                                    sig_blocks: Uint8Array;
                                };
                            };
                            conflictRelayData1: {
                                request: {
                                    relay_session: {
                                        spec_id: string;
                                        content_hash: Uint8Array;
                                        session_id: string;
                                        cu_sum: string;
                                        provider: string;
                                        relay_num: string;
                                        qos_report: {
                                            latency: string;
                                            availability: string;
                                            sync: string;
                                        };
                                        epoch: string;
                                        unresponsive_providers: Uint8Array;
                                        lava_chain_id: string;
                                        sig: Uint8Array;
                                        badge: {
                                            cu_allocation: string;
                                            epoch: string;
                                            address: string;
                                            lava_chain_id: string;
                                            project_sig: Uint8Array;
                                        };
                                    };
                                    relay_data: {
                                        connection_type: string;
                                        api_url: string;
                                        data: Uint8Array;
                                        request_block: string;
                                        api_interface: string;
                                        salt: Uint8Array;
                                    };
                                };
                                reply: {
                                    data: Uint8Array;
                                    sig: Uint8Array;
                                    nonce: number;
                                    latest_block: string;
                                    finalized_blocks_hashes: Uint8Array;
                                    sig_blocks: Uint8Array;
                                };
                            };
                        };
                        sameProviderConflict: {
                            relayReply0: {
                                data: Uint8Array;
                                sig: Uint8Array;
                                nonce: number;
                                latest_block: string;
                                finalized_blocks_hashes: Uint8Array;
                                sig_blocks: Uint8Array;
                            };
                            relayReply1: {
                                data: Uint8Array;
                                sig: Uint8Array;
                                nonce: number;
                                latest_block: string;
                                finalized_blocks_hashes: Uint8Array;
                                sig_blocks: Uint8Array;
                            };
                        };
                    }) => _14.MsgDetection;
                };
                "/lavanet.lava.conflict.MsgConflictVoteCommit": {
                    aminoType: string;
                    toAmino: ({ creator, voteID, hash }: _14.MsgConflictVoteCommit) => {
                        creator: string;
                        voteID: string;
                        hash: Uint8Array;
                    };
                    fromAmino: ({ creator, voteID, hash }: {
                        creator: string;
                        voteID: string;
                        hash: Uint8Array;
                    }) => _14.MsgConflictVoteCommit;
                };
                "/lavanet.lava.conflict.MsgConflictVoteReveal": {
                    aminoType: string;
                    toAmino: ({ creator, voteID, nonce, hash }: _14.MsgConflictVoteReveal) => {
                        creator: string;
                        voteID: string;
                        nonce: string;
                        hash: Uint8Array;
                    };
                    fromAmino: ({ creator, voteID, nonce, hash }: {
                        creator: string;
                        voteID: string;
                        nonce: string;
                        hash: Uint8Array;
                    }) => _14.MsgConflictVoteReveal;
                };
            };
            MsgDetection: {
                encode(message: _14.MsgDetection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgDetection;
                fromJSON(object: any): _14.MsgDetection;
                toJSON(message: _14.MsgDetection): unknown;
                fromPartial(object: Partial<_14.MsgDetection>): _14.MsgDetection;
            };
            MsgDetectionResponse: {
                encode(_: _14.MsgDetectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgDetectionResponse;
                fromJSON(_: any): _14.MsgDetectionResponse;
                toJSON(_: _14.MsgDetectionResponse): unknown;
                fromPartial(_: Partial<_14.MsgDetectionResponse>): _14.MsgDetectionResponse;
            };
            MsgConflictVoteCommit: {
                encode(message: _14.MsgConflictVoteCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgConflictVoteCommit;
                fromJSON(object: any): _14.MsgConflictVoteCommit;
                toJSON(message: _14.MsgConflictVoteCommit): unknown;
                fromPartial(object: Partial<_14.MsgConflictVoteCommit>): _14.MsgConflictVoteCommit;
            };
            MsgConflictVoteCommitResponse: {
                encode(_: _14.MsgConflictVoteCommitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgConflictVoteCommitResponse;
                fromJSON(_: any): _14.MsgConflictVoteCommitResponse;
                toJSON(_: _14.MsgConflictVoteCommitResponse): unknown;
                fromPartial(_: Partial<_14.MsgConflictVoteCommitResponse>): _14.MsgConflictVoteCommitResponse;
            };
            MsgConflictVoteReveal: {
                encode(message: _14.MsgConflictVoteReveal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgConflictVoteReveal;
                fromJSON(object: any): _14.MsgConflictVoteReveal;
                toJSON(message: _14.MsgConflictVoteReveal): unknown;
                fromPartial(object: Partial<_14.MsgConflictVoteReveal>): _14.MsgConflictVoteReveal;
            };
            MsgConflictVoteRevealResponse: {
                encode(_: _14.MsgConflictVoteRevealResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgConflictVoteRevealResponse;
                fromJSON(_: any): _14.MsgConflictVoteRevealResponse;
                toJSON(_: _14.MsgConflictVoteRevealResponse): unknown;
                fromPartial(_: Partial<_14.MsgConflictVoteRevealResponse>): _14.MsgConflictVoteRevealResponse;
            };
            QueryParamsRequest: {
                encode(_: _13.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsRequest;
                fromJSON(_: any): _13.QueryParamsRequest;
                toJSON(_: _13.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_13.QueryParamsRequest>): _13.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _13.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsResponse;
                fromJSON(object: any): _13.QueryParamsResponse;
                toJSON(message: _13.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_13.QueryParamsResponse>): _13.QueryParamsResponse;
            };
            QueryGetConflictVoteRequest: {
                encode(message: _13.QueryGetConflictVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryGetConflictVoteRequest;
                fromJSON(object: any): _13.QueryGetConflictVoteRequest;
                toJSON(message: _13.QueryGetConflictVoteRequest): unknown;
                fromPartial(object: Partial<_13.QueryGetConflictVoteRequest>): _13.QueryGetConflictVoteRequest;
            };
            QueryGetConflictVoteResponse: {
                encode(message: _13.QueryGetConflictVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryGetConflictVoteResponse;
                fromJSON(object: any): _13.QueryGetConflictVoteResponse;
                toJSON(message: _13.QueryGetConflictVoteResponse): unknown;
                fromPartial(object: Partial<_13.QueryGetConflictVoteResponse>): _13.QueryGetConflictVoteResponse;
            };
            QueryAllConflictVoteRequest: {
                encode(message: _13.QueryAllConflictVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAllConflictVoteRequest;
                fromJSON(object: any): _13.QueryAllConflictVoteRequest;
                toJSON(message: _13.QueryAllConflictVoteRequest): unknown;
                fromPartial(object: Partial<_13.QueryAllConflictVoteRequest>): _13.QueryAllConflictVoteRequest;
            };
            QueryAllConflictVoteResponse: {
                encode(message: _13.QueryAllConflictVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAllConflictVoteResponse;
                fromJSON(object: any): _13.QueryAllConflictVoteResponse;
                toJSON(message: _13.QueryAllConflictVoteResponse): unknown;
                fromPartial(object: Partial<_13.QueryAllConflictVoteResponse>): _13.QueryAllConflictVoteResponse;
            };
            Params: {
                encode(message: _12.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Params;
                fromJSON(object: any): _12.Params;
                toJSON(message: _12.Params): unknown;
                fromPartial(object: Partial<_12.Params>): _12.Params;
            };
            Rewards: {
                encode(message: _12.Rewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Rewards;
                fromJSON(object: any): _12.Rewards;
                toJSON(message: _12.Rewards): unknown;
                fromPartial(object: Partial<_12.Rewards>): _12.Rewards;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GenesisState;
                fromJSON(object: any): _11.GenesisState;
                toJSON(message: _11.GenesisState): unknown;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            };
            Provider: {
                encode(message: _10.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Provider;
                fromJSON(object: any): _10.Provider;
                toJSON(message: _10.Provider): unknown;
                fromPartial(object: Partial<_10.Provider>): _10.Provider;
            };
            Vote: {
                encode(message: _10.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Vote;
                fromJSON(object: any): _10.Vote;
                toJSON(message: _10.Vote): unknown;
                fromPartial(object: Partial<_10.Vote>): _10.Vote;
            };
            ConflictVote: {
                encode(message: _10.ConflictVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.ConflictVote;
                fromJSON(object: any): _10.ConflictVote;
                toJSON(message: _10.ConflictVote): unknown;
                fromPartial(object: Partial<_10.ConflictVote>): _10.ConflictVote;
            };
            ResponseConflict: {
                encode(message: _9.ResponseConflict, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.ResponseConflict;
                fromJSON(object: any): _9.ResponseConflict;
                toJSON(message: _9.ResponseConflict): unknown;
                fromPartial(object: Partial<_9.ResponseConflict>): _9.ResponseConflict;
            };
            ConflictRelayData: {
                encode(message: _9.ConflictRelayData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.ConflictRelayData;
                fromJSON(object: any): _9.ConflictRelayData;
                toJSON(message: _9.ConflictRelayData): unknown;
                fromPartial(object: Partial<_9.ConflictRelayData>): _9.ConflictRelayData;
            };
            FinalizationConflict: {
                encode(message: _9.FinalizationConflict, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.FinalizationConflict;
                fromJSON(object: any): _9.FinalizationConflict;
                toJSON(message: _9.FinalizationConflict): unknown;
                fromPartial(object: Partial<_9.FinalizationConflict>): _9.FinalizationConflict;
            };
        };
        const epochstorage: {
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                stakeStorage(request: _29.QueryGetStakeStorageRequest): Promise<_29.QueryGetStakeStorageResponse>;
                stakeStorageAll(request?: _29.QueryAllStakeStorageRequest): Promise<_29.QueryAllStakeStorageResponse>;
                epochDetails(request?: _29.QueryGetEpochDetailsRequest): Promise<_29.QueryGetEpochDetailsResponse>;
                fixatedParams(request: _29.QueryGetFixatedParamsRequest): Promise<_29.QueryGetFixatedParamsResponse>;
                fixatedParamsAll(request?: _29.QueryAllFixatedParamsRequest): Promise<_29.QueryAllFixatedParamsResponse>;
            };
            StakeStorage: {
                encode(message: _31.StakeStorage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.StakeStorage;
                fromJSON(object: any): _31.StakeStorage;
                toJSON(message: _31.StakeStorage): unknown;
                fromPartial(object: Partial<_31.StakeStorage>): _31.StakeStorage;
            };
            StakeEntry: {
                encode(message: _30.StakeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.StakeEntry;
                fromJSON(object: any): _30.StakeEntry;
                toJSON(message: _30.StakeEntry): unknown;
                fromPartial(object: Partial<_30.StakeEntry>): _30.StakeEntry;
            };
            QueryParamsRequest: {
                encode(_: _29.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryParamsRequest;
                fromJSON(_: any): _29.QueryParamsRequest;
                toJSON(_: _29.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _29.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryParamsResponse;
                fromJSON(object: any): _29.QueryParamsResponse;
                toJSON(message: _29.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
            };
            QueryGetStakeStorageRequest: {
                encode(message: _29.QueryGetStakeStorageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryGetStakeStorageRequest;
                fromJSON(object: any): _29.QueryGetStakeStorageRequest;
                toJSON(message: _29.QueryGetStakeStorageRequest): unknown;
                fromPartial(object: Partial<_29.QueryGetStakeStorageRequest>): _29.QueryGetStakeStorageRequest;
            };
            QueryGetStakeStorageResponse: {
                encode(message: _29.QueryGetStakeStorageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryGetStakeStorageResponse;
                fromJSON(object: any): _29.QueryGetStakeStorageResponse;
                toJSON(message: _29.QueryGetStakeStorageResponse): unknown;
                fromPartial(object: Partial<_29.QueryGetStakeStorageResponse>): _29.QueryGetStakeStorageResponse;
            };
            QueryAllStakeStorageRequest: {
                encode(message: _29.QueryAllStakeStorageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryAllStakeStorageRequest;
                fromJSON(object: any): _29.QueryAllStakeStorageRequest;
                toJSON(message: _29.QueryAllStakeStorageRequest): unknown;
                fromPartial(object: Partial<_29.QueryAllStakeStorageRequest>): _29.QueryAllStakeStorageRequest;
            };
            QueryAllStakeStorageResponse: {
                encode(message: _29.QueryAllStakeStorageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryAllStakeStorageResponse;
                fromJSON(object: any): _29.QueryAllStakeStorageResponse;
                toJSON(message: _29.QueryAllStakeStorageResponse): unknown;
                fromPartial(object: Partial<_29.QueryAllStakeStorageResponse>): _29.QueryAllStakeStorageResponse;
            };
            QueryGetEpochDetailsRequest: {
                encode(_: _29.QueryGetEpochDetailsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryGetEpochDetailsRequest;
                fromJSON(_: any): _29.QueryGetEpochDetailsRequest;
                toJSON(_: _29.QueryGetEpochDetailsRequest): unknown;
                fromPartial(_: Partial<_29.QueryGetEpochDetailsRequest>): _29.QueryGetEpochDetailsRequest;
            };
            QueryGetEpochDetailsResponse: {
                encode(message: _29.QueryGetEpochDetailsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryGetEpochDetailsResponse;
                fromJSON(object: any): _29.QueryGetEpochDetailsResponse;
                toJSON(message: _29.QueryGetEpochDetailsResponse): unknown;
                fromPartial(object: Partial<_29.QueryGetEpochDetailsResponse>): _29.QueryGetEpochDetailsResponse;
            };
            QueryGetFixatedParamsRequest: {
                encode(message: _29.QueryGetFixatedParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryGetFixatedParamsRequest;
                fromJSON(object: any): _29.QueryGetFixatedParamsRequest;
                toJSON(message: _29.QueryGetFixatedParamsRequest): unknown;
                fromPartial(object: Partial<_29.QueryGetFixatedParamsRequest>): _29.QueryGetFixatedParamsRequest;
            };
            QueryGetFixatedParamsResponse: {
                encode(message: _29.QueryGetFixatedParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryGetFixatedParamsResponse;
                fromJSON(object: any): _29.QueryGetFixatedParamsResponse;
                toJSON(message: _29.QueryGetFixatedParamsResponse): unknown;
                fromPartial(object: Partial<_29.QueryGetFixatedParamsResponse>): _29.QueryGetFixatedParamsResponse;
            };
            QueryAllFixatedParamsRequest: {
                encode(message: _29.QueryAllFixatedParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryAllFixatedParamsRequest;
                fromJSON(object: any): _29.QueryAllFixatedParamsRequest;
                toJSON(message: _29.QueryAllFixatedParamsRequest): unknown;
                fromPartial(object: Partial<_29.QueryAllFixatedParamsRequest>): _29.QueryAllFixatedParamsRequest;
            };
            QueryAllFixatedParamsResponse: {
                encode(message: _29.QueryAllFixatedParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryAllFixatedParamsResponse;
                fromJSON(object: any): _29.QueryAllFixatedParamsResponse;
                toJSON(message: _29.QueryAllFixatedParamsResponse): unknown;
                fromPartial(object: Partial<_29.QueryAllFixatedParamsResponse>): _29.QueryAllFixatedParamsResponse;
            };
            Params: {
                encode(message: _28.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Params;
                fromJSON(object: any): _28.Params;
                toJSON(message: _28.Params): unknown;
                fromPartial(object: Partial<_28.Params>): _28.Params;
            };
            GenesisState: {
                encode(message: _27.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenesisState;
                fromJSON(object: any): _27.GenesisState;
                toJSON(message: _27.GenesisState): unknown;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
            };
            FixatedParams: {
                encode(message: _26.FixatedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.FixatedParams;
                fromJSON(object: any): _26.FixatedParams;
                toJSON(message: _26.FixatedParams): unknown;
                fromPartial(object: Partial<_26.FixatedParams>): _26.FixatedParams;
            };
            EpochDetails: {
                encode(message: _25.EpochDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.EpochDetails;
                fromJSON(object: any): _25.EpochDetails;
                toJSON(message: _25.EpochDetails): unknown;
                fromPartial(object: Partial<_25.EpochDetails>): _25.EpochDetails;
            };
            Endpoint: {
                encode(message: _24.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Endpoint;
                fromJSON(object: any): _24.Endpoint;
                toJSON(message: _24.Endpoint): unknown;
                fromPartial(object: Partial<_24.Endpoint>): _24.Endpoint;
            };
        };
        const pairing: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                providers(request: _48.QueryProvidersRequest): Promise<_48.QueryProvidersResponse>;
                clients(request: _48.QueryClientsRequest): Promise<_48.QueryClientsResponse>;
                getPairing(request: _48.QueryGetPairingRequest): Promise<_48.QueryGetPairingResponse>;
                verifyPairing(request: _48.QueryVerifyPairingRequest): Promise<_48.QueryVerifyPairingResponse>;
                uniquePaymentStorageClientProvider(request: _48.QueryGetUniquePaymentStorageClientProviderRequest): Promise<_48.QueryGetUniquePaymentStorageClientProviderResponse>;
                uniquePaymentStorageClientProviderAll(request?: _48.QueryAllUniquePaymentStorageClientProviderRequest): Promise<_48.QueryAllUniquePaymentStorageClientProviderResponse>;
                providerPaymentStorage(request: _48.QueryGetProviderPaymentStorageRequest): Promise<_48.QueryGetProviderPaymentStorageResponse>;
                providerPaymentStorageAll(request?: _48.QueryAllProviderPaymentStorageRequest): Promise<_48.QueryAllProviderPaymentStorageResponse>;
                epochPayments(request: _48.QueryGetEpochPaymentsRequest): Promise<_48.QueryGetEpochPaymentsResponse>;
                epochPaymentsAll(request?: _48.QueryAllEpochPaymentsRequest): Promise<_48.QueryAllEpochPaymentsResponse>;
                userEntry(request: _48.QueryUserEntryRequest): Promise<_48.QueryUserEntryResponse>;
                staticProvidersList(request: _48.QueryStaticProvidersListRequest): Promise<_48.QueryStaticProvidersListResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    stakeProvider(value: _52.MsgStakeProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    stakeClient(value: _52.MsgStakeClient): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unstakeProvider(value: _52.MsgUnstakeProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unstakeClient(value: _52.MsgUnstakeClient): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayPayment(value: _52.MsgRelayPayment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    freezeProvider(value: _52.MsgFreezeProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unfreezeProvider(value: _52.MsgUnfreezeProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    stakeProvider(value: _52.MsgStakeProvider): {
                        typeUrl: string;
                        value: _52.MsgStakeProvider;
                    };
                    stakeClient(value: _52.MsgStakeClient): {
                        typeUrl: string;
                        value: _52.MsgStakeClient;
                    };
                    unstakeProvider(value: _52.MsgUnstakeProvider): {
                        typeUrl: string;
                        value: _52.MsgUnstakeProvider;
                    };
                    unstakeClient(value: _52.MsgUnstakeClient): {
                        typeUrl: string;
                        value: _52.MsgUnstakeClient;
                    };
                    relayPayment(value: _52.MsgRelayPayment): {
                        typeUrl: string;
                        value: _52.MsgRelayPayment;
                    };
                    freezeProvider(value: _52.MsgFreezeProvider): {
                        typeUrl: string;
                        value: _52.MsgFreezeProvider;
                    };
                    unfreezeProvider(value: _52.MsgUnfreezeProvider): {
                        typeUrl: string;
                        value: _52.MsgUnfreezeProvider;
                    };
                };
                toJSON: {
                    stakeProvider(value: _52.MsgStakeProvider): {
                        typeUrl: string;
                        value: unknown;
                    };
                    stakeClient(value: _52.MsgStakeClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unstakeProvider(value: _52.MsgUnstakeProvider): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unstakeClient(value: _52.MsgUnstakeClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    relayPayment(value: _52.MsgRelayPayment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    freezeProvider(value: _52.MsgFreezeProvider): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unfreezeProvider(value: _52.MsgUnfreezeProvider): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    stakeProvider(value: any): {
                        typeUrl: string;
                        value: _52.MsgStakeProvider;
                    };
                    stakeClient(value: any): {
                        typeUrl: string;
                        value: _52.MsgStakeClient;
                    };
                    unstakeProvider(value: any): {
                        typeUrl: string;
                        value: _52.MsgUnstakeProvider;
                    };
                    unstakeClient(value: any): {
                        typeUrl: string;
                        value: _52.MsgUnstakeClient;
                    };
                    relayPayment(value: any): {
                        typeUrl: string;
                        value: _52.MsgRelayPayment;
                    };
                    freezeProvider(value: any): {
                        typeUrl: string;
                        value: _52.MsgFreezeProvider;
                    };
                    unfreezeProvider(value: any): {
                        typeUrl: string;
                        value: _52.MsgUnfreezeProvider;
                    };
                };
                fromPartial: {
                    stakeProvider(value: _52.MsgStakeProvider): {
                        typeUrl: string;
                        value: _52.MsgStakeProvider;
                    };
                    stakeClient(value: _52.MsgStakeClient): {
                        typeUrl: string;
                        value: _52.MsgStakeClient;
                    };
                    unstakeProvider(value: _52.MsgUnstakeProvider): {
                        typeUrl: string;
                        value: _52.MsgUnstakeProvider;
                    };
                    unstakeClient(value: _52.MsgUnstakeClient): {
                        typeUrl: string;
                        value: _52.MsgUnstakeClient;
                    };
                    relayPayment(value: _52.MsgRelayPayment): {
                        typeUrl: string;
                        value: _52.MsgRelayPayment;
                    };
                    freezeProvider(value: _52.MsgFreezeProvider): {
                        typeUrl: string;
                        value: _52.MsgFreezeProvider;
                    };
                    unfreezeProvider(value: _52.MsgUnfreezeProvider): {
                        typeUrl: string;
                        value: _52.MsgUnfreezeProvider;
                    };
                };
            };
            AminoConverter: {
                "/lavanet.lava.pairing.MsgStakeProvider": {
                    aminoType: string;
                    toAmino: ({ creator, chainID, amount, endpoints, geolocation, moniker }: _52.MsgStakeProvider) => {
                        creator: string;
                        chainID: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        endpoints: {
                            iPPORT: string;
                            useType: string;
                            geolocation: string;
                        }[];
                        geolocation: string;
                        moniker: string;
                    };
                    fromAmino: ({ creator, chainID, amount, endpoints, geolocation, moniker }: {
                        creator: string;
                        chainID: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        endpoints: {
                            iPPORT: string;
                            useType: string;
                            geolocation: string;
                        }[];
                        geolocation: string;
                        moniker: string;
                    }) => _52.MsgStakeProvider;
                };
                "/lavanet.lava.pairing.MsgStakeClient": {
                    aminoType: string;
                    toAmino: ({ creator, chainID, amount, geolocation }: _52.MsgStakeClient) => {
                        creator: string;
                        chainID: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        geolocation: string;
                    };
                    fromAmino: ({ creator, chainID, amount, geolocation }: {
                        creator: string;
                        chainID: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        geolocation: string;
                    }) => _52.MsgStakeClient;
                };
                "/lavanet.lava.pairing.MsgUnstakeProvider": {
                    aminoType: string;
                    toAmino: ({ creator, chainID }: _52.MsgUnstakeProvider) => {
                        creator: string;
                        chainID: string;
                    };
                    fromAmino: ({ creator, chainID }: {
                        creator: string;
                        chainID: string;
                    }) => _52.MsgUnstakeProvider;
                };
                "/lavanet.lava.pairing.MsgUnstakeClient": {
                    aminoType: string;
                    toAmino: ({ creator, chainID }: _52.MsgUnstakeClient) => {
                        creator: string;
                        chainID: string;
                    };
                    fromAmino: ({ creator, chainID }: {
                        creator: string;
                        chainID: string;
                    }) => _52.MsgUnstakeClient;
                };
                "/lavanet.lava.pairing.MsgRelayPayment": {
                    aminoType: string;
                    toAmino: ({ creator, relays, descriptionString }: _52.MsgRelayPayment) => {
                        creator: string;
                        relays: {
                            spec_id: string;
                            content_hash: Uint8Array;
                            session_id: string;
                            cu_sum: string;
                            provider: string;
                            relay_num: string;
                            qos_report: {
                                latency: string;
                                availability: string;
                                sync: string;
                            };
                            epoch: string;
                            unresponsive_providers: Uint8Array;
                            lava_chain_id: string;
                            sig: Uint8Array;
                            badge: {
                                cu_allocation: string;
                                epoch: string;
                                address: string;
                                lava_chain_id: string;
                                project_sig: Uint8Array;
                            };
                        }[];
                        descriptionString: string;
                    };
                    fromAmino: ({ creator, relays, descriptionString }: {
                        creator: string;
                        relays: {
                            spec_id: string;
                            content_hash: Uint8Array;
                            session_id: string;
                            cu_sum: string;
                            provider: string;
                            relay_num: string;
                            qos_report: {
                                latency: string;
                                availability: string;
                                sync: string;
                            };
                            epoch: string;
                            unresponsive_providers: Uint8Array;
                            lava_chain_id: string;
                            sig: Uint8Array;
                            badge: {
                                cu_allocation: string;
                                epoch: string;
                                address: string;
                                lava_chain_id: string;
                                project_sig: Uint8Array;
                            };
                        }[];
                        descriptionString: string;
                    }) => _52.MsgRelayPayment;
                };
                "/lavanet.lava.pairing.MsgFreezeProvider": {
                    aminoType: string;
                    toAmino: ({ creator, chainIds, reason }: _52.MsgFreezeProvider) => {
                        creator: string;
                        chainIds: string[];
                        reason: string;
                    };
                    fromAmino: ({ creator, chainIds, reason }: {
                        creator: string;
                        chainIds: string[];
                        reason: string;
                    }) => _52.MsgFreezeProvider;
                };
                "/lavanet.lava.pairing.MsgUnfreezeProvider": {
                    aminoType: string;
                    toAmino: ({ creator, chainIds }: _52.MsgUnfreezeProvider) => {
                        creator: string;
                        chainIds: string[];
                    };
                    fromAmino: ({ creator, chainIds }: {
                        creator: string;
                        chainIds: string[];
                    }) => _52.MsgUnfreezeProvider;
                };
            };
            UniquePaymentStorageClientProvider: {
                encode(message: _53.UniquePaymentStorageClientProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.UniquePaymentStorageClientProvider;
                fromJSON(object: any): _53.UniquePaymentStorageClientProvider;
                toJSON(message: _53.UniquePaymentStorageClientProvider): unknown;
                fromPartial(object: Partial<_53.UniquePaymentStorageClientProvider>): _53.UniquePaymentStorageClientProvider;
            };
            MsgStakeProvider: {
                encode(message: _52.MsgStakeProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgStakeProvider;
                fromJSON(object: any): _52.MsgStakeProvider;
                toJSON(message: _52.MsgStakeProvider): unknown;
                fromPartial(object: Partial<_52.MsgStakeProvider>): _52.MsgStakeProvider;
            };
            MsgStakeProviderResponse: {
                encode(_: _52.MsgStakeProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgStakeProviderResponse;
                fromJSON(_: any): _52.MsgStakeProviderResponse;
                toJSON(_: _52.MsgStakeProviderResponse): unknown;
                fromPartial(_: Partial<_52.MsgStakeProviderResponse>): _52.MsgStakeProviderResponse;
            };
            MsgStakeClient: {
                encode(message: _52.MsgStakeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgStakeClient;
                fromJSON(object: any): _52.MsgStakeClient;
                toJSON(message: _52.MsgStakeClient): unknown;
                fromPartial(object: Partial<_52.MsgStakeClient>): _52.MsgStakeClient;
            };
            MsgStakeClientResponse: {
                encode(_: _52.MsgStakeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgStakeClientResponse;
                fromJSON(_: any): _52.MsgStakeClientResponse;
                toJSON(_: _52.MsgStakeClientResponse): unknown;
                fromPartial(_: Partial<_52.MsgStakeClientResponse>): _52.MsgStakeClientResponse;
            };
            MsgUnstakeProvider: {
                encode(message: _52.MsgUnstakeProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgUnstakeProvider;
                fromJSON(object: any): _52.MsgUnstakeProvider;
                toJSON(message: _52.MsgUnstakeProvider): unknown;
                fromPartial(object: Partial<_52.MsgUnstakeProvider>): _52.MsgUnstakeProvider;
            };
            MsgUnstakeProviderResponse: {
                encode(_: _52.MsgUnstakeProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgUnstakeProviderResponse;
                fromJSON(_: any): _52.MsgUnstakeProviderResponse;
                toJSON(_: _52.MsgUnstakeProviderResponse): unknown;
                fromPartial(_: Partial<_52.MsgUnstakeProviderResponse>): _52.MsgUnstakeProviderResponse;
            };
            MsgUnstakeClient: {
                encode(message: _52.MsgUnstakeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgUnstakeClient;
                fromJSON(object: any): _52.MsgUnstakeClient;
                toJSON(message: _52.MsgUnstakeClient): unknown;
                fromPartial(object: Partial<_52.MsgUnstakeClient>): _52.MsgUnstakeClient;
            };
            MsgUnstakeClientResponse: {
                encode(_: _52.MsgUnstakeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgUnstakeClientResponse;
                fromJSON(_: any): _52.MsgUnstakeClientResponse;
                toJSON(_: _52.MsgUnstakeClientResponse): unknown;
                fromPartial(_: Partial<_52.MsgUnstakeClientResponse>): _52.MsgUnstakeClientResponse;
            };
            MsgRelayPayment: {
                encode(message: _52.MsgRelayPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgRelayPayment;
                fromJSON(object: any): _52.MsgRelayPayment;
                toJSON(message: _52.MsgRelayPayment): unknown;
                fromPartial(object: Partial<_52.MsgRelayPayment>): _52.MsgRelayPayment;
            };
            MsgRelayPaymentResponse: {
                encode(_: _52.MsgRelayPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgRelayPaymentResponse;
                fromJSON(_: any): _52.MsgRelayPaymentResponse;
                toJSON(_: _52.MsgRelayPaymentResponse): unknown;
                fromPartial(_: Partial<_52.MsgRelayPaymentResponse>): _52.MsgRelayPaymentResponse;
            };
            MsgFreezeProvider: {
                encode(message: _52.MsgFreezeProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgFreezeProvider;
                fromJSON(object: any): _52.MsgFreezeProvider;
                toJSON(message: _52.MsgFreezeProvider): unknown;
                fromPartial(object: Partial<_52.MsgFreezeProvider>): _52.MsgFreezeProvider;
            };
            MsgFreezeProviderResponse: {
                encode(_: _52.MsgFreezeProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgFreezeProviderResponse;
                fromJSON(_: any): _52.MsgFreezeProviderResponse;
                toJSON(_: _52.MsgFreezeProviderResponse): unknown;
                fromPartial(_: Partial<_52.MsgFreezeProviderResponse>): _52.MsgFreezeProviderResponse;
            };
            MsgUnfreezeProvider: {
                encode(message: _52.MsgUnfreezeProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgUnfreezeProvider;
                fromJSON(object: any): _52.MsgUnfreezeProvider;
                toJSON(message: _52.MsgUnfreezeProvider): unknown;
                fromPartial(object: Partial<_52.MsgUnfreezeProvider>): _52.MsgUnfreezeProvider;
            };
            MsgUnfreezeProviderResponse: {
                encode(_: _52.MsgUnfreezeProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgUnfreezeProviderResponse;
                fromJSON(_: any): _52.MsgUnfreezeProviderResponse;
                toJSON(_: _52.MsgUnfreezeProviderResponse): unknown;
                fromPartial(_: Partial<_52.MsgUnfreezeProviderResponse>): _52.MsgUnfreezeProviderResponse;
            };
            StakeToMaxCUList: {
                encode(message: _51.StakeToMaxCUList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.StakeToMaxCUList;
                fromJSON(object: any): _51.StakeToMaxCUList;
                toJSON(message: _51.StakeToMaxCUList): unknown;
                fromPartial(object: Partial<_51.StakeToMaxCUList>): _51.StakeToMaxCUList;
            };
            StakeToMaxCU: {
                encode(message: _51.StakeToMaxCU, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.StakeToMaxCU;
                fromJSON(object: any): _51.StakeToMaxCU;
                toJSON(message: _51.StakeToMaxCU): unknown;
                fromPartial(object: Partial<_51.StakeToMaxCU>): _51.StakeToMaxCU;
            };
            CacheUsage: {
                encode(message: _50.CacheUsage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.CacheUsage;
                fromJSON(object: any): _50.CacheUsage;
                toJSON(message: _50.CacheUsage): unknown;
                fromPartial(object: Partial<_50.CacheUsage>): _50.CacheUsage;
            };
            RelayCacheGet: {
                encode(message: _50.RelayCacheGet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.RelayCacheGet;
                fromJSON(object: any): _50.RelayCacheGet;
                toJSON(message: _50.RelayCacheGet): unknown;
                fromPartial(object: Partial<_50.RelayCacheGet>): _50.RelayCacheGet;
            };
            RelayCacheSet: {
                encode(message: _50.RelayCacheSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.RelayCacheSet;
                fromJSON(object: any): _50.RelayCacheSet;
                toJSON(message: _50.RelayCacheSet): unknown;
                fromPartial(object: Partial<_50.RelayCacheSet>): _50.RelayCacheSet;
            };
            RelaySession: {
                encode(message: _49.RelaySession, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.RelaySession;
                fromJSON(object: any): _49.RelaySession;
                toJSON(message: _49.RelaySession): unknown;
                fromPartial(object: Partial<_49.RelaySession>): _49.RelaySession;
            };
            RelayPrivateData: {
                encode(message: _49.RelayPrivateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.RelayPrivateData;
                fromJSON(object: any): _49.RelayPrivateData;
                toJSON(message: _49.RelayPrivateData): unknown;
                fromPartial(object: Partial<_49.RelayPrivateData>): _49.RelayPrivateData;
            };
            Metadata: {
                encode(message: _49.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Metadata;
                fromJSON(object: any): _49.Metadata;
                toJSON(message: _49.Metadata): unknown;
                fromPartial(object: Partial<_49.Metadata>): _49.Metadata;
            };
            RelayRequest: {
                encode(message: _49.RelayRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.RelayRequest;
                fromJSON(object: any): _49.RelayRequest;
                toJSON(message: _49.RelayRequest): unknown;
                fromPartial(object: Partial<_49.RelayRequest>): _49.RelayRequest;
            };
            Badge: {
                encode(message: _49.Badge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Badge;
                fromJSON(object: any): _49.Badge;
                toJSON(message: _49.Badge): unknown;
                fromPartial(object: Partial<_49.Badge>): _49.Badge;
            };
            GenerateBadgeRequest: {
                encode(message: _49.GenerateBadgeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GenerateBadgeRequest;
                fromJSON(object: any): _49.GenerateBadgeRequest;
                toJSON(message: _49.GenerateBadgeRequest): unknown;
                fromPartial(object: Partial<_49.GenerateBadgeRequest>): _49.GenerateBadgeRequest;
            };
            GenerateBadgeResponse: {
                encode(message: _49.GenerateBadgeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GenerateBadgeResponse;
                fromJSON(object: any): _49.GenerateBadgeResponse;
                toJSON(message: _49.GenerateBadgeResponse): unknown;
                fromPartial(object: Partial<_49.GenerateBadgeResponse>): _49.GenerateBadgeResponse;
            };
            RelayReply: {
                encode(message: _49.RelayReply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.RelayReply;
                fromJSON(object: any): _49.RelayReply;
                toJSON(message: _49.RelayReply): unknown;
                fromPartial(object: Partial<_49.RelayReply>): _49.RelayReply;
            };
            QualityOfServiceReport: {
                encode(message: _49.QualityOfServiceReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QualityOfServiceReport;
                fromJSON(object: any): _49.QualityOfServiceReport;
                toJSON(message: _49.QualityOfServiceReport): unknown;
                fromPartial(object: Partial<_49.QualityOfServiceReport>): _49.QualityOfServiceReport;
            };
            QueryParamsRequest: {
                encode(_: _48.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsRequest;
                fromJSON(_: any): _48.QueryParamsRequest;
                toJSON(_: _48.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _48.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsResponse;
                fromJSON(object: any): _48.QueryParamsResponse;
                toJSON(message: _48.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
            };
            QueryProvidersRequest: {
                encode(message: _48.QueryProvidersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProvidersRequest;
                fromJSON(object: any): _48.QueryProvidersRequest;
                toJSON(message: _48.QueryProvidersRequest): unknown;
                fromPartial(object: Partial<_48.QueryProvidersRequest>): _48.QueryProvidersRequest;
            };
            QueryProvidersResponse: {
                encode(message: _48.QueryProvidersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProvidersResponse;
                fromJSON(object: any): _48.QueryProvidersResponse;
                toJSON(message: _48.QueryProvidersResponse): unknown;
                fromPartial(object: Partial<_48.QueryProvidersResponse>): _48.QueryProvidersResponse;
            };
            QueryClientsRequest: {
                encode(message: _48.QueryClientsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryClientsRequest;
                fromJSON(object: any): _48.QueryClientsRequest;
                toJSON(message: _48.QueryClientsRequest): unknown;
                fromPartial(object: Partial<_48.QueryClientsRequest>): _48.QueryClientsRequest;
            };
            QueryClientsResponse: {
                encode(message: _48.QueryClientsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryClientsResponse;
                fromJSON(object: any): _48.QueryClientsResponse;
                toJSON(message: _48.QueryClientsResponse): unknown;
                fromPartial(object: Partial<_48.QueryClientsResponse>): _48.QueryClientsResponse;
            };
            QueryGetPairingRequest: {
                encode(message: _48.QueryGetPairingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryGetPairingRequest;
                fromJSON(object: any): _48.QueryGetPairingRequest;
                toJSON(message: _48.QueryGetPairingRequest): unknown;
                fromPartial(object: Partial<_48.QueryGetPairingRequest>): _48.QueryGetPairingRequest;
            };
            QueryGetPairingResponse: {
                encode(message: _48.QueryGetPairingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryGetPairingResponse;
                fromJSON(object: any): _48.QueryGetPairingResponse;
                toJSON(message: _48.QueryGetPairingResponse): unknown;
                fromPartial(object: Partial<_48.QueryGetPairingResponse>): _48.QueryGetPairingResponse;
            };
            QueryVerifyPairingRequest: {
                encode(message: _48.QueryVerifyPairingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVerifyPairingRequest;
                fromJSON(object: any): _48.QueryVerifyPairingRequest;
                toJSON(message: _48.QueryVerifyPairingRequest): unknown;
                fromPartial(object: Partial<_48.QueryVerifyPairingRequest>): _48.QueryVerifyPairingRequest;
            };
            QueryVerifyPairingResponse: {
                encode(message: _48.QueryVerifyPairingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVerifyPairingResponse;
                fromJSON(object: any): _48.QueryVerifyPairingResponse;
                toJSON(message: _48.QueryVerifyPairingResponse): unknown;
                fromPartial(object: Partial<_48.QueryVerifyPairingResponse>): _48.QueryVerifyPairingResponse;
            };
            QueryGetUniquePaymentStorageClientProviderRequest: {
                encode(message: _48.QueryGetUniquePaymentStorageClientProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryGetUniquePaymentStorageClientProviderRequest;
                fromJSON(object: any): _48.QueryGetUniquePaymentStorageClientProviderRequest;
                toJSON(message: _48.QueryGetUniquePaymentStorageClientProviderRequest): unknown;
                fromPartial(object: Partial<_48.QueryGetUniquePaymentStorageClientProviderRequest>): _48.QueryGetUniquePaymentStorageClientProviderRequest;
            };
            QueryGetUniquePaymentStorageClientProviderResponse: {
                encode(message: _48.QueryGetUniquePaymentStorageClientProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryGetUniquePaymentStorageClientProviderResponse;
                fromJSON(object: any): _48.QueryGetUniquePaymentStorageClientProviderResponse;
                toJSON(message: _48.QueryGetUniquePaymentStorageClientProviderResponse): unknown;
                fromPartial(object: Partial<_48.QueryGetUniquePaymentStorageClientProviderResponse>): _48.QueryGetUniquePaymentStorageClientProviderResponse;
            };
            QueryAllUniquePaymentStorageClientProviderRequest: {
                encode(message: _48.QueryAllUniquePaymentStorageClientProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllUniquePaymentStorageClientProviderRequest;
                fromJSON(object: any): _48.QueryAllUniquePaymentStorageClientProviderRequest;
                toJSON(message: _48.QueryAllUniquePaymentStorageClientProviderRequest): unknown;
                fromPartial(object: Partial<_48.QueryAllUniquePaymentStorageClientProviderRequest>): _48.QueryAllUniquePaymentStorageClientProviderRequest;
            };
            QueryAllUniquePaymentStorageClientProviderResponse: {
                encode(message: _48.QueryAllUniquePaymentStorageClientProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllUniquePaymentStorageClientProviderResponse;
                fromJSON(object: any): _48.QueryAllUniquePaymentStorageClientProviderResponse;
                toJSON(message: _48.QueryAllUniquePaymentStorageClientProviderResponse): unknown;
                fromPartial(object: Partial<_48.QueryAllUniquePaymentStorageClientProviderResponse>): _48.QueryAllUniquePaymentStorageClientProviderResponse;
            };
            QueryGetProviderPaymentStorageRequest: {
                encode(message: _48.QueryGetProviderPaymentStorageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryGetProviderPaymentStorageRequest;
                fromJSON(object: any): _48.QueryGetProviderPaymentStorageRequest;
                toJSON(message: _48.QueryGetProviderPaymentStorageRequest): unknown;
                fromPartial(object: Partial<_48.QueryGetProviderPaymentStorageRequest>): _48.QueryGetProviderPaymentStorageRequest;
            };
            QueryGetProviderPaymentStorageResponse: {
                encode(message: _48.QueryGetProviderPaymentStorageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryGetProviderPaymentStorageResponse;
                fromJSON(object: any): _48.QueryGetProviderPaymentStorageResponse;
                toJSON(message: _48.QueryGetProviderPaymentStorageResponse): unknown;
                fromPartial(object: Partial<_48.QueryGetProviderPaymentStorageResponse>): _48.QueryGetProviderPaymentStorageResponse;
            };
            QueryAllProviderPaymentStorageRequest: {
                encode(message: _48.QueryAllProviderPaymentStorageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllProviderPaymentStorageRequest;
                fromJSON(object: any): _48.QueryAllProviderPaymentStorageRequest;
                toJSON(message: _48.QueryAllProviderPaymentStorageRequest): unknown;
                fromPartial(object: Partial<_48.QueryAllProviderPaymentStorageRequest>): _48.QueryAllProviderPaymentStorageRequest;
            };
            QueryAllProviderPaymentStorageResponse: {
                encode(message: _48.QueryAllProviderPaymentStorageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllProviderPaymentStorageResponse;
                fromJSON(object: any): _48.QueryAllProviderPaymentStorageResponse;
                toJSON(message: _48.QueryAllProviderPaymentStorageResponse): unknown;
                fromPartial(object: Partial<_48.QueryAllProviderPaymentStorageResponse>): _48.QueryAllProviderPaymentStorageResponse;
            };
            QueryGetEpochPaymentsRequest: {
                encode(message: _48.QueryGetEpochPaymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryGetEpochPaymentsRequest;
                fromJSON(object: any): _48.QueryGetEpochPaymentsRequest;
                toJSON(message: _48.QueryGetEpochPaymentsRequest): unknown;
                fromPartial(object: Partial<_48.QueryGetEpochPaymentsRequest>): _48.QueryGetEpochPaymentsRequest;
            };
            QueryGetEpochPaymentsResponse: {
                encode(message: _48.QueryGetEpochPaymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryGetEpochPaymentsResponse;
                fromJSON(object: any): _48.QueryGetEpochPaymentsResponse;
                toJSON(message: _48.QueryGetEpochPaymentsResponse): unknown;
                fromPartial(object: Partial<_48.QueryGetEpochPaymentsResponse>): _48.QueryGetEpochPaymentsResponse;
            };
            QueryAllEpochPaymentsRequest: {
                encode(message: _48.QueryAllEpochPaymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllEpochPaymentsRequest;
                fromJSON(object: any): _48.QueryAllEpochPaymentsRequest;
                toJSON(message: _48.QueryAllEpochPaymentsRequest): unknown;
                fromPartial(object: Partial<_48.QueryAllEpochPaymentsRequest>): _48.QueryAllEpochPaymentsRequest;
            };
            QueryAllEpochPaymentsResponse: {
                encode(message: _48.QueryAllEpochPaymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllEpochPaymentsResponse;
                fromJSON(object: any): _48.QueryAllEpochPaymentsResponse;
                toJSON(message: _48.QueryAllEpochPaymentsResponse): unknown;
                fromPartial(object: Partial<_48.QueryAllEpochPaymentsResponse>): _48.QueryAllEpochPaymentsResponse;
            };
            QueryUserEntryRequest: {
                encode(message: _48.QueryUserEntryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryUserEntryRequest;
                fromJSON(object: any): _48.QueryUserEntryRequest;
                toJSON(message: _48.QueryUserEntryRequest): unknown;
                fromPartial(object: Partial<_48.QueryUserEntryRequest>): _48.QueryUserEntryRequest;
            };
            QueryUserEntryResponse: {
                encode(message: _48.QueryUserEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryUserEntryResponse;
                fromJSON(object: any): _48.QueryUserEntryResponse;
                toJSON(message: _48.QueryUserEntryResponse): unknown;
                fromPartial(object: Partial<_48.QueryUserEntryResponse>): _48.QueryUserEntryResponse;
            };
            QueryStaticProvidersListRequest: {
                encode(message: _48.QueryStaticProvidersListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryStaticProvidersListRequest;
                fromJSON(object: any): _48.QueryStaticProvidersListRequest;
                toJSON(message: _48.QueryStaticProvidersListRequest): unknown;
                fromPartial(object: Partial<_48.QueryStaticProvidersListRequest>): _48.QueryStaticProvidersListRequest;
            };
            QueryStaticProvidersListResponse: {
                encode(message: _48.QueryStaticProvidersListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryStaticProvidersListResponse;
                fromJSON(object: any): _48.QueryStaticProvidersListResponse;
                toJSON(message: _48.QueryStaticProvidersListResponse): unknown;
                fromPartial(object: Partial<_48.QueryStaticProvidersListResponse>): _48.QueryStaticProvidersListResponse;
            };
            QueryAccountInfoResponse: {
                encode(message: _48.QueryAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAccountInfoResponse;
                fromJSON(object: any): _48.QueryAccountInfoResponse;
                toJSON(message: _48.QueryAccountInfoResponse): unknown;
                fromPartial(object: Partial<_48.QueryAccountInfoResponse>): _48.QueryAccountInfoResponse;
            };
            ProviderPaymentStorage: {
                encode(message: _47.ProviderPaymentStorage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ProviderPaymentStorage;
                fromJSON(object: any): _47.ProviderPaymentStorage;
                toJSON(message: _47.ProviderPaymentStorage): unknown;
                fromPartial(object: Partial<_47.ProviderPaymentStorage>): _47.ProviderPaymentStorage;
            };
            Params: {
                encode(message: _46.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Params;
                fromJSON(object: any): _46.Params;
                toJSON(message: _46.Params): unknown;
                fromPartial(object: Partial<_46.Params>): _46.Params;
            };
            BadgeUsedCu: {
                encode(message: _45.BadgeUsedCu, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.BadgeUsedCu;
                fromJSON(object: any): _45.BadgeUsedCu;
                toJSON(message: _45.BadgeUsedCu): unknown;
                fromPartial(object: Partial<_45.BadgeUsedCu>): _45.BadgeUsedCu;
            };
            GenesisState: {
                encode(message: _45.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisState;
                fromJSON(object: any): _45.GenesisState;
                toJSON(message: _45.GenesisState): unknown;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
            };
            EpochPayments: {
                encode(message: _44.EpochPayments, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.EpochPayments;
                fromJSON(object: any): _44.EpochPayments;
                toJSON(message: _44.EpochPayments): unknown;
                fromPartial(object: Partial<_44.EpochPayments>): _44.EpochPayments;
            };
        };
        const plans: {
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                list(request?: _64.QueryListRequest): Promise<_64.QueryListResponse>;
                info(request: _64.QueryInfoRequest): Promise<_64.QueryInfoResponse>;
            };
            QueryParamsRequest: {
                encode(_: _64.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsRequest;
                fromJSON(_: any): _64.QueryParamsRequest;
                toJSON(_: _64.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_64.QueryParamsRequest>): _64.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _64.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsResponse;
                fromJSON(object: any): _64.QueryParamsResponse;
                toJSON(message: _64.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_64.QueryParamsResponse>): _64.QueryParamsResponse;
            };
            QueryListRequest: {
                encode(_: _64.QueryListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryListRequest;
                fromJSON(_: any): _64.QueryListRequest;
                toJSON(_: _64.QueryListRequest): unknown;
                fromPartial(_: Partial<_64.QueryListRequest>): _64.QueryListRequest;
            };
            QueryListResponse: {
                encode(message: _64.QueryListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryListResponse;
                fromJSON(object: any): _64.QueryListResponse;
                toJSON(message: _64.QueryListResponse): unknown;
                fromPartial(object: Partial<_64.QueryListResponse>): _64.QueryListResponse;
            };
            ListInfoStruct: {
                encode(message: _64.ListInfoStruct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.ListInfoStruct;
                fromJSON(object: any): _64.ListInfoStruct;
                toJSON(message: _64.ListInfoStruct): unknown;
                fromPartial(object: Partial<_64.ListInfoStruct>): _64.ListInfoStruct;
            };
            QueryInfoRequest: {
                encode(message: _64.QueryInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryInfoRequest;
                fromJSON(object: any): _64.QueryInfoRequest;
                toJSON(message: _64.QueryInfoRequest): unknown;
                fromPartial(object: Partial<_64.QueryInfoRequest>): _64.QueryInfoRequest;
            };
            QueryInfoResponse: {
                encode(message: _64.QueryInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryInfoResponse;
                fromJSON(object: any): _64.QueryInfoResponse;
                toJSON(message: _64.QueryInfoResponse): unknown;
                fromPartial(object: Partial<_64.QueryInfoResponse>): _64.QueryInfoResponse;
            };
            PlansAddProposal: {
                encode(message: _63.PlansAddProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PlansAddProposal;
                fromJSON(object: any): _63.PlansAddProposal;
                toJSON(message: _63.PlansAddProposal): unknown;
                fromPartial(object: Partial<_63.PlansAddProposal>): _63.PlansAddProposal;
            };
            Plan: {
                encode(message: _62.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Plan;
                fromJSON(object: any): _62.Plan;
                toJSON(message: _62.Plan): unknown;
                fromPartial(object: Partial<_62.Plan>): _62.Plan;
            };
            Params: {
                encode(_: _61.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Params;
                fromJSON(_: any): _61.Params;
                toJSON(_: _61.Params): unknown;
                fromPartial(_: Partial<_61.Params>): _61.Params;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GenesisState;
                fromJSON(object: any): _60.GenesisState;
                toJSON(message: _60.GenesisState): unknown;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
            };
        };
        const projects: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                info(request: _74.QueryInfoRequest): Promise<_74.QueryInfoResponse>;
                developer(request: _74.QueryDeveloperRequest): Promise<_74.QueryDeveloperResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    addKeys(value: _75.MsgAddKeys): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPolicy(value: _75.MsgSetPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSubscriptionPolicy(value: _75.MsgSetSubscriptionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    addKeys(value: _75.MsgAddKeys): {
                        typeUrl: string;
                        value: _75.MsgAddKeys;
                    };
                    setPolicy(value: _75.MsgSetPolicy): {
                        typeUrl: string;
                        value: _75.MsgSetPolicy;
                    };
                    setSubscriptionPolicy(value: _75.MsgSetSubscriptionPolicy): {
                        typeUrl: string;
                        value: _75.MsgSetSubscriptionPolicy;
                    };
                };
                toJSON: {
                    addKeys(value: _75.MsgAddKeys): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setPolicy(value: _75.MsgSetPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSubscriptionPolicy(value: _75.MsgSetSubscriptionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    addKeys(value: any): {
                        typeUrl: string;
                        value: _75.MsgAddKeys;
                    };
                    setPolicy(value: any): {
                        typeUrl: string;
                        value: _75.MsgSetPolicy;
                    };
                    setSubscriptionPolicy(value: any): {
                        typeUrl: string;
                        value: _75.MsgSetSubscriptionPolicy;
                    };
                };
                fromPartial: {
                    addKeys(value: _75.MsgAddKeys): {
                        typeUrl: string;
                        value: _75.MsgAddKeys;
                    };
                    setPolicy(value: _75.MsgSetPolicy): {
                        typeUrl: string;
                        value: _75.MsgSetPolicy;
                    };
                    setSubscriptionPolicy(value: _75.MsgSetSubscriptionPolicy): {
                        typeUrl: string;
                        value: _75.MsgSetSubscriptionPolicy;
                    };
                };
            };
            AminoConverter: {
                "/lavanet.lava.projects.MsgAddKeys": {
                    aminoType: string;
                    toAmino: ({ creator, project, projectKeys }: _75.MsgAddKeys) => {
                        creator: string;
                        project: string;
                        project_keys: {
                            key: string;
                            types: {
                                types: number;
                            }[];
                        }[];
                    };
                    fromAmino: ({ creator, project, project_keys }: {
                        creator: string;
                        project: string;
                        project_keys: {
                            key: string;
                            types: {
                                types: number;
                            }[];
                        }[];
                    }) => _75.MsgAddKeys;
                };
                "/lavanet.lava.projects.MsgSetPolicy": {
                    aminoType: string;
                    toAmino: ({ creator, project, policy }: _75.MsgSetPolicy) => {
                        creator: string;
                        project: string;
                        policy: {
                            chain_policies: {
                                chain_id: string;
                                apis: string[];
                            }[];
                            geolocation_profile: string;
                            total_cu_limit: string;
                            epoch_cu_limit: string;
                            max_providers_to_pair: string;
                        };
                    };
                    fromAmino: ({ creator, project, policy }: {
                        creator: string;
                        project: string;
                        policy: {
                            chain_policies: {
                                chain_id: string;
                                apis: string[];
                            }[];
                            geolocation_profile: string;
                            total_cu_limit: string;
                            epoch_cu_limit: string;
                            max_providers_to_pair: string;
                        };
                    }) => _75.MsgSetPolicy;
                };
                "/lavanet.lava.projects.MsgSetSubscriptionPolicy": {
                    aminoType: string;
                    toAmino: ({ creator, projects, policy }: _75.MsgSetSubscriptionPolicy) => {
                        creator: string;
                        projects: string[];
                        policy: {
                            chain_policies: {
                                chain_id: string;
                                apis: string[];
                            }[];
                            geolocation_profile: string;
                            total_cu_limit: string;
                            epoch_cu_limit: string;
                            max_providers_to_pair: string;
                        };
                    };
                    fromAmino: ({ creator, projects, policy }: {
                        creator: string;
                        projects: string[];
                        policy: {
                            chain_policies: {
                                chain_id: string;
                                apis: string[];
                            }[];
                            geolocation_profile: string;
                            total_cu_limit: string;
                            epoch_cu_limit: string;
                            max_providers_to_pair: string;
                        };
                    }) => _75.MsgSetSubscriptionPolicy;
                };
            };
            MsgAddKeys: {
                encode(message: _75.MsgAddKeys, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgAddKeys;
                fromJSON(object: any): _75.MsgAddKeys;
                toJSON(message: _75.MsgAddKeys): unknown;
                fromPartial(object: Partial<_75.MsgAddKeys>): _75.MsgAddKeys;
            };
            MsgAddKeysResponse: {
                encode(_: _75.MsgAddKeysResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgAddKeysResponse;
                fromJSON(_: any): _75.MsgAddKeysResponse;
                toJSON(_: _75.MsgAddKeysResponse): unknown;
                fromPartial(_: Partial<_75.MsgAddKeysResponse>): _75.MsgAddKeysResponse;
            };
            MsgSetPolicy: {
                encode(message: _75.MsgSetPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSetPolicy;
                fromJSON(object: any): _75.MsgSetPolicy;
                toJSON(message: _75.MsgSetPolicy): unknown;
                fromPartial(object: Partial<_75.MsgSetPolicy>): _75.MsgSetPolicy;
            };
            MsgSetPolicyResponse: {
                encode(_: _75.MsgSetPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSetPolicyResponse;
                fromJSON(_: any): _75.MsgSetPolicyResponse;
                toJSON(_: _75.MsgSetPolicyResponse): unknown;
                fromPartial(_: Partial<_75.MsgSetPolicyResponse>): _75.MsgSetPolicyResponse;
            };
            MsgSetSubscriptionPolicy: {
                encode(message: _75.MsgSetSubscriptionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSetSubscriptionPolicy;
                fromJSON(object: any): _75.MsgSetSubscriptionPolicy;
                toJSON(message: _75.MsgSetSubscriptionPolicy): unknown;
                fromPartial(object: Partial<_75.MsgSetSubscriptionPolicy>): _75.MsgSetSubscriptionPolicy;
            };
            MsgSetSubscriptionPolicyResponse: {
                encode(_: _75.MsgSetSubscriptionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSetSubscriptionPolicyResponse;
                fromJSON(_: any): _75.MsgSetSubscriptionPolicyResponse;
                toJSON(_: _75.MsgSetSubscriptionPolicyResponse): unknown;
                fromPartial(_: Partial<_75.MsgSetSubscriptionPolicyResponse>): _75.MsgSetSubscriptionPolicyResponse;
            };
            QueryParamsRequest: {
                encode(_: _74.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsRequest;
                fromJSON(_: any): _74.QueryParamsRequest;
                toJSON(_: _74.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _74.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsResponse;
                fromJSON(object: any): _74.QueryParamsResponse;
                toJSON(message: _74.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_74.QueryParamsResponse>): _74.QueryParamsResponse;
            };
            QueryInfoRequest: {
                encode(message: _74.QueryInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryInfoRequest;
                fromJSON(object: any): _74.QueryInfoRequest;
                toJSON(message: _74.QueryInfoRequest): unknown;
                fromPartial(object: Partial<_74.QueryInfoRequest>): _74.QueryInfoRequest;
            };
            QueryInfoResponse: {
                encode(message: _74.QueryInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryInfoResponse;
                fromJSON(object: any): _74.QueryInfoResponse;
                toJSON(message: _74.QueryInfoResponse): unknown;
                fromPartial(object: Partial<_74.QueryInfoResponse>): _74.QueryInfoResponse;
            };
            QueryDeveloperRequest: {
                encode(message: _74.QueryDeveloperRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDeveloperRequest;
                fromJSON(object: any): _74.QueryDeveloperRequest;
                toJSON(message: _74.QueryDeveloperRequest): unknown;
                fromPartial(object: Partial<_74.QueryDeveloperRequest>): _74.QueryDeveloperRequest;
            };
            QueryDeveloperResponse: {
                encode(message: _74.QueryDeveloperResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryDeveloperResponse;
                fromJSON(object: any): _74.QueryDeveloperResponse;
                toJSON(message: _74.QueryDeveloperResponse): unknown;
                fromPartial(object: Partial<_74.QueryDeveloperResponse>): _74.QueryDeveloperResponse;
            };
            projectKey_TypeFromJSON(object: any): _73.ProjectKey_Type;
            projectKey_TypeToJSON(object: _73.ProjectKey_Type): string;
            ProjectKey_Type: typeof _73.ProjectKey_Type;
            ProjectKey_TypeSDKType: typeof _73.ProjectKey_Type;
            Project: {
                encode(message: _73.Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Project;
                fromJSON(object: any): _73.Project;
                toJSON(message: _73.Project): unknown;
                fromPartial(object: Partial<_73.Project>): _73.Project;
            };
            ProjectKey: {
                encode(message: _73.ProjectKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ProjectKey;
                fromJSON(object: any): _73.ProjectKey;
                toJSON(message: _73.ProjectKey): unknown;
                fromPartial(object: Partial<_73.ProjectKey>): _73.ProjectKey;
            };
            Policy: {
                encode(message: _73.Policy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Policy;
                fromJSON(object: any): _73.Policy;
                toJSON(message: _73.Policy): unknown;
                fromPartial(object: Partial<_73.Policy>): _73.Policy;
            };
            ChainPolicy: {
                encode(message: _73.ChainPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ChainPolicy;
                fromJSON(object: any): _73.ChainPolicy;
                toJSON(message: _73.ChainPolicy): unknown;
                fromPartial(object: Partial<_73.ChainPolicy>): _73.ChainPolicy;
            };
            ProtoDeveloperData: {
                encode(message: _73.ProtoDeveloperData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ProtoDeveloperData;
                fromJSON(object: any): _73.ProtoDeveloperData;
                toJSON(message: _73.ProtoDeveloperData): unknown;
                fromPartial(object: Partial<_73.ProtoDeveloperData>): _73.ProtoDeveloperData;
            };
            ProjectData: {
                encode(message: _73.ProjectData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ProjectData;
                fromJSON(object: any): _73.ProjectData;
                toJSON(message: _73.ProjectData): unknown;
                fromPartial(object: Partial<_73.ProjectData>): _73.ProjectData;
            };
            Params: {
                encode(_: _72.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Params;
                fromJSON(_: any): _72.Params;
                toJSON(_: _72.Params): unknown;
                fromPartial(_: Partial<_72.Params>): _72.Params;
            };
            GenesisState: {
                encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisState;
                fromJSON(object: any): _71.GenesisState;
                toJSON(message: _71.GenesisState): unknown;
                fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
            };
            keyTypeFromJSON(object: any): _68.KeyType;
            keyTypeToJSON(object: _68.KeyType): string;
            KeyType: typeof _68.KeyType;
            KeyTypeSDKType: typeof _68.KeyType;
            KeyTypeObject: {
                encode(message: _68.KeyTypeObject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.KeyTypeObject;
                fromJSON(object: any): _68.KeyTypeObject;
                toJSON(message: _68.KeyTypeObject): unknown;
                fromPartial(object: Partial<_68.KeyTypeObject>): _68.KeyTypeObject;
            };
        };
        const spec: {
            QueryClientImpl: typeof _241.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                spec(request: _85.QueryGetSpecRequest): Promise<_85.QueryGetSpecResponse>;
                specAll(request?: _85.QueryAllSpecRequest): Promise<_85.QueryAllSpecResponse>;
                specRaw(request: _85.QueryGetSpecRequest): Promise<_85.QueryGetSpecResponse>;
                specAllRaw(request?: _85.QueryAllSpecRequest): Promise<_85.QueryAllSpecResponse>;
                showAllChains(request?: _85.QueryShowAllChainsRequest): Promise<_85.QueryShowAllChainsResponse>;
                showChainInfo(request: _85.QueryShowChainInfoRequest): Promise<_85.QueryShowChainInfoResponse>;
            };
            spec_ProvidersTypesFromJSON(object: any): _88.Spec_ProvidersTypes;
            spec_ProvidersTypesToJSON(object: _88.Spec_ProvidersTypes): string;
            Spec_ProvidersTypes: typeof _88.Spec_ProvidersTypes;
            Spec_ProvidersTypesSDKType: typeof _88.Spec_ProvidersTypes;
            Spec: {
                encode(message: _88.Spec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Spec;
                fromJSON(object: any): _88.Spec;
                toJSON(message: _88.Spec): unknown;
                fromPartial(object: Partial<_88.Spec>): _88.Spec;
            };
            SpecAddProposal: {
                encode(message: _87.SpecAddProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SpecAddProposal;
                fromJSON(object: any): _87.SpecAddProposal;
                toJSON(message: _87.SpecAddProposal): unknown;
                fromPartial(object: Partial<_87.SpecAddProposal>): _87.SpecAddProposal;
            };
            pARSER_FUNCFromJSON(object: any): _86.PARSER_FUNC;
            pARSER_FUNCToJSON(object: _86.PARSER_FUNC): string;
            PARSER_FUNC: typeof _86.PARSER_FUNC;
            PARSER_FUNCSDKType: typeof _86.PARSER_FUNC;
            ServiceApi: {
                encode(message: _86.ServiceApi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ServiceApi;
                fromJSON(object: any): _86.ServiceApi;
                toJSON(message: _86.ServiceApi): unknown;
                fromPartial(object: Partial<_86.ServiceApi>): _86.ServiceApi;
            };
            Parsing: {
                encode(message: _86.Parsing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Parsing;
                fromJSON(object: any): _86.Parsing;
                toJSON(message: _86.Parsing): unknown;
                fromPartial(object: Partial<_86.Parsing>): _86.Parsing;
            };
            ApiInterface: {
                encode(message: _86.ApiInterface, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ApiInterface;
                fromJSON(object: any): _86.ApiInterface;
                toJSON(message: _86.ApiInterface): unknown;
                fromPartial(object: Partial<_86.ApiInterface>): _86.ApiInterface;
            };
            BlockParser: {
                encode(message: _86.BlockParser, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BlockParser;
                fromJSON(object: any): _86.BlockParser;
                toJSON(message: _86.BlockParser): unknown;
                fromPartial(object: Partial<_86.BlockParser>): _86.BlockParser;
            };
            SpecCategory: {
                encode(message: _86.SpecCategory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SpecCategory;
                fromJSON(object: any): _86.SpecCategory;
                toJSON(message: _86.SpecCategory): unknown;
                fromPartial(object: Partial<_86.SpecCategory>): _86.SpecCategory;
            };
            QueryParamsRequest: {
                encode(_: _85.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsRequest;
                fromJSON(_: any): _85.QueryParamsRequest;
                toJSON(_: _85.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _85.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsResponse;
                fromJSON(object: any): _85.QueryParamsResponse;
                toJSON(message: _85.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_85.QueryParamsResponse>): _85.QueryParamsResponse;
            };
            QueryGetSpecRequest: {
                encode(message: _85.QueryGetSpecRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryGetSpecRequest;
                fromJSON(object: any): _85.QueryGetSpecRequest;
                toJSON(message: _85.QueryGetSpecRequest): unknown;
                fromPartial(object: Partial<_85.QueryGetSpecRequest>): _85.QueryGetSpecRequest;
            };
            QueryGetSpecResponse: {
                encode(message: _85.QueryGetSpecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryGetSpecResponse;
                fromJSON(object: any): _85.QueryGetSpecResponse;
                toJSON(message: _85.QueryGetSpecResponse): unknown;
                fromPartial(object: Partial<_85.QueryGetSpecResponse>): _85.QueryGetSpecResponse;
            };
            QueryAllSpecRequest: {
                encode(message: _85.QueryAllSpecRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryAllSpecRequest;
                fromJSON(object: any): _85.QueryAllSpecRequest;
                toJSON(message: _85.QueryAllSpecRequest): unknown;
                fromPartial(object: Partial<_85.QueryAllSpecRequest>): _85.QueryAllSpecRequest;
            };
            QueryAllSpecResponse: {
                encode(message: _85.QueryAllSpecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryAllSpecResponse;
                fromJSON(object: any): _85.QueryAllSpecResponse;
                toJSON(message: _85.QueryAllSpecResponse): unknown;
                fromPartial(object: Partial<_85.QueryAllSpecResponse>): _85.QueryAllSpecResponse;
            };
            QueryShowAllChainsRequest: {
                encode(_: _85.QueryShowAllChainsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryShowAllChainsRequest;
                fromJSON(_: any): _85.QueryShowAllChainsRequest;
                toJSON(_: _85.QueryShowAllChainsRequest): unknown;
                fromPartial(_: Partial<_85.QueryShowAllChainsRequest>): _85.QueryShowAllChainsRequest;
            };
            QueryShowAllChainsResponse: {
                encode(message: _85.QueryShowAllChainsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryShowAllChainsResponse;
                fromJSON(object: any): _85.QueryShowAllChainsResponse;
                toJSON(message: _85.QueryShowAllChainsResponse): unknown;
                fromPartial(object: Partial<_85.QueryShowAllChainsResponse>): _85.QueryShowAllChainsResponse;
            };
            ShowAllChainsInfoStruct: {
                encode(message: _85.ShowAllChainsInfoStruct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ShowAllChainsInfoStruct;
                fromJSON(object: any): _85.ShowAllChainsInfoStruct;
                toJSON(message: _85.ShowAllChainsInfoStruct): unknown;
                fromPartial(object: Partial<_85.ShowAllChainsInfoStruct>): _85.ShowAllChainsInfoStruct;
            };
            QueryShowChainInfoRequest: {
                encode(message: _85.QueryShowChainInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryShowChainInfoRequest;
                fromJSON(object: any): _85.QueryShowChainInfoRequest;
                toJSON(message: _85.QueryShowChainInfoRequest): unknown;
                fromPartial(object: Partial<_85.QueryShowChainInfoRequest>): _85.QueryShowChainInfoRequest;
            };
            ApiList: {
                encode(message: _85.ApiList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ApiList;
                fromJSON(object: any): _85.ApiList;
                toJSON(message: _85.ApiList): unknown;
                fromPartial(object: Partial<_85.ApiList>): _85.ApiList;
            };
            QueryShowChainInfoResponse: {
                encode(message: _85.QueryShowChainInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryShowChainInfoResponse;
                fromJSON(object: any): _85.QueryShowChainInfoResponse;
                toJSON(message: _85.QueryShowChainInfoResponse): unknown;
                fromPartial(object: Partial<_85.QueryShowChainInfoResponse>): _85.QueryShowChainInfoResponse;
            };
            Params: {
                encode(message: _84.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Params;
                fromJSON(object: any): _84.Params;
                toJSON(message: _84.Params): unknown;
                fromPartial(object: Partial<_84.Params>): _84.Params;
            };
            GenesisState: {
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                fromJSON(object: any): _83.GenesisState;
                toJSON(message: _83.GenesisState): unknown;
                fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
            };
        };
        const subscription: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                current(request: _97.QueryCurrentRequest): Promise<_97.QueryCurrentResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    buy(value: _99.MsgBuy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addProject(value: _99.MsgAddProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    buy(value: _99.MsgBuy): {
                        typeUrl: string;
                        value: _99.MsgBuy;
                    };
                    addProject(value: _99.MsgAddProject): {
                        typeUrl: string;
                        value: _99.MsgAddProject;
                    };
                };
                toJSON: {
                    buy(value: _99.MsgBuy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addProject(value: _99.MsgAddProject): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    buy(value: any): {
                        typeUrl: string;
                        value: _99.MsgBuy;
                    };
                    addProject(value: any): {
                        typeUrl: string;
                        value: _99.MsgAddProject;
                    };
                };
                fromPartial: {
                    buy(value: _99.MsgBuy): {
                        typeUrl: string;
                        value: _99.MsgBuy;
                    };
                    addProject(value: _99.MsgAddProject): {
                        typeUrl: string;
                        value: _99.MsgAddProject;
                    };
                };
            };
            AminoConverter: {
                "/lavanet.lava.subscription.MsgBuy": {
                    aminoType: string;
                    toAmino: ({ creator, consumer, index, duration }: _99.MsgBuy) => {
                        creator: string;
                        consumer: string;
                        index: string;
                        duration: string;
                    };
                    fromAmino: ({ creator, consumer, index, duration }: {
                        creator: string;
                        consumer: string;
                        index: string;
                        duration: string;
                    }) => _99.MsgBuy;
                };
                "/lavanet.lava.subscription.MsgAddProject": {
                    aminoType: string;
                    toAmino: ({ creator, projectData }: _99.MsgAddProject) => {
                        creator: string;
                        project_data: {
                            name: string;
                            description: string;
                            enabled: boolean;
                            projectKeys: {
                                key: string;
                                types: {
                                    types: number;
                                }[];
                            }[];
                            policy: {
                                chain_policies: {
                                    chain_id: string;
                                    apis: string[];
                                }[];
                                geolocation_profile: string;
                                total_cu_limit: string;
                                epoch_cu_limit: string;
                                max_providers_to_pair: string;
                            };
                        };
                    };
                    fromAmino: ({ creator, project_data }: {
                        creator: string;
                        project_data: {
                            name: string;
                            description: string;
                            enabled: boolean;
                            projectKeys: {
                                key: string;
                                types: {
                                    types: number;
                                }[];
                            }[];
                            policy: {
                                chain_policies: {
                                    chain_id: string;
                                    apis: string[];
                                }[];
                                geolocation_profile: string;
                                total_cu_limit: string;
                                epoch_cu_limit: string;
                                max_providers_to_pair: string;
                            };
                        };
                    }) => _99.MsgAddProject;
                };
            };
            MsgBuy: {
                encode(message: _99.MsgBuy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgBuy;
                fromJSON(object: any): _99.MsgBuy;
                toJSON(message: _99.MsgBuy): unknown;
                fromPartial(object: Partial<_99.MsgBuy>): _99.MsgBuy;
            };
            MsgBuyResponse: {
                encode(_: _99.MsgBuyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgBuyResponse;
                fromJSON(_: any): _99.MsgBuyResponse;
                toJSON(_: _99.MsgBuyResponse): unknown;
                fromPartial(_: Partial<_99.MsgBuyResponse>): _99.MsgBuyResponse;
            };
            MsgAddProject: {
                encode(message: _99.MsgAddProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgAddProject;
                fromJSON(object: any): _99.MsgAddProject;
                toJSON(message: _99.MsgAddProject): unknown;
                fromPartial(object: Partial<_99.MsgAddProject>): _99.MsgAddProject;
            };
            MsgAddProjectResponse: {
                encode(_: _99.MsgAddProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgAddProjectResponse;
                fromJSON(_: any): _99.MsgAddProjectResponse;
                toJSON(_: _99.MsgAddProjectResponse): unknown;
                fromPartial(_: Partial<_99.MsgAddProjectResponse>): _99.MsgAddProjectResponse;
            };
            Subscription: {
                encode(message: _98.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Subscription;
                fromJSON(object: any): _98.Subscription;
                toJSON(message: _98.Subscription): unknown;
                fromPartial(object: Partial<_98.Subscription>): _98.Subscription;
            };
            QueryParamsRequest: {
                encode(_: _97.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryParamsRequest;
                fromJSON(_: any): _97.QueryParamsRequest;
                toJSON(_: _97.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_97.QueryParamsRequest>): _97.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _97.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryParamsResponse;
                fromJSON(object: any): _97.QueryParamsResponse;
                toJSON(message: _97.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_97.QueryParamsResponse>): _97.QueryParamsResponse;
            };
            QueryCurrentRequest: {
                encode(message: _97.QueryCurrentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCurrentRequest;
                fromJSON(object: any): _97.QueryCurrentRequest;
                toJSON(message: _97.QueryCurrentRequest): unknown;
                fromPartial(object: Partial<_97.QueryCurrentRequest>): _97.QueryCurrentRequest;
            };
            QueryCurrentResponse: {
                encode(message: _97.QueryCurrentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCurrentResponse;
                fromJSON(object: any): _97.QueryCurrentResponse;
                toJSON(message: _97.QueryCurrentResponse): unknown;
                fromPartial(object: Partial<_97.QueryCurrentResponse>): _97.QueryCurrentResponse;
            };
            Params: {
                encode(_: _96.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Params;
                fromJSON(_: any): _96.Params;
                toJSON(_: _96.Params): unknown;
                fromPartial(_: Partial<_96.Params>): _96.Params;
            };
            GenesisState: {
                encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GenesisState;
                fromJSON(object: any): _95.GenesisState;
                toJSON(message: _95.GenesisState): unknown;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
            };
            QueryListProjectsRequest: {
                encode(message: _92.QueryListProjectsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryListProjectsRequest;
                fromJSON(object: any): _92.QueryListProjectsRequest;
                toJSON(message: _92.QueryListProjectsRequest): unknown;
                fromPartial(object: Partial<_92.QueryListProjectsRequest>): _92.QueryListProjectsRequest;
            };
            QueryListProjectsResponse: {
                encode(message: _92.QueryListProjectsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryListProjectsResponse;
                fromJSON(object: any): _92.QueryListProjectsResponse;
                toJSON(message: _92.QueryListProjectsResponse): unknown;
                fromPartial(object: Partial<_92.QueryListProjectsResponse>): _92.QueryListProjectsResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            lavanet: {
                lava: {
                    conflict: _246.MsgClientImpl;
                    pairing: _247.MsgClientImpl;
                    projects: _248.MsgClientImpl;
                    subscription: _250.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            lavanet: {
                lava: {
                    conflict: {
                        params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                        conflictVote(request: _13.QueryGetConflictVoteRequest): Promise<_13.QueryGetConflictVoteResponse>;
                        conflictVoteAll(request?: _13.QueryAllConflictVoteRequest): Promise<_13.QueryAllConflictVoteResponse>;
                    };
                    epochstorage: {
                        params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        stakeStorage(request: _29.QueryGetStakeStorageRequest): Promise<_29.QueryGetStakeStorageResponse>;
                        stakeStorageAll(request?: _29.QueryAllStakeStorageRequest): Promise<_29.QueryAllStakeStorageResponse>;
                        epochDetails(request?: _29.QueryGetEpochDetailsRequest): Promise<_29.QueryGetEpochDetailsResponse>;
                        fixatedParams(request: _29.QueryGetFixatedParamsRequest): Promise<_29.QueryGetFixatedParamsResponse>;
                        fixatedParamsAll(request?: _29.QueryAllFixatedParamsRequest): Promise<_29.QueryAllFixatedParamsResponse>;
                    };
                    pairing: {
                        params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        providers(request: _48.QueryProvidersRequest): Promise<_48.QueryProvidersResponse>;
                        clients(request: _48.QueryClientsRequest): Promise<_48.QueryClientsResponse>;
                        getPairing(request: _48.QueryGetPairingRequest): Promise<_48.QueryGetPairingResponse>;
                        verifyPairing(request: _48.QueryVerifyPairingRequest): Promise<_48.QueryVerifyPairingResponse>;
                        uniquePaymentStorageClientProvider(request: _48.QueryGetUniquePaymentStorageClientProviderRequest): Promise<_48.QueryGetUniquePaymentStorageClientProviderResponse>;
                        uniquePaymentStorageClientProviderAll(request?: _48.QueryAllUniquePaymentStorageClientProviderRequest): Promise<_48.QueryAllUniquePaymentStorageClientProviderResponse>;
                        providerPaymentStorage(request: _48.QueryGetProviderPaymentStorageRequest): Promise<_48.QueryGetProviderPaymentStorageResponse>;
                        providerPaymentStorageAll(request?: _48.QueryAllProviderPaymentStorageRequest): Promise<_48.QueryAllProviderPaymentStorageResponse>;
                        epochPayments(request: _48.QueryGetEpochPaymentsRequest): Promise<_48.QueryGetEpochPaymentsResponse>;
                        epochPaymentsAll(request?: _48.QueryAllEpochPaymentsRequest): Promise<_48.QueryAllEpochPaymentsResponse>;
                        userEntry(request: _48.QueryUserEntryRequest): Promise<_48.QueryUserEntryResponse>;
                        staticProvidersList(request: _48.QueryStaticProvidersListRequest): Promise<_48.QueryStaticProvidersListResponse>;
                    };
                    plans: {
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        list(request?: _64.QueryListRequest): Promise<_64.QueryListResponse>;
                        info(request: _64.QueryInfoRequest): Promise<_64.QueryInfoResponse>;
                    };
                    projects: {
                        params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                        info(request: _74.QueryInfoRequest): Promise<_74.QueryInfoResponse>;
                        developer(request: _74.QueryDeveloperRequest): Promise<_74.QueryDeveloperResponse>;
                    };
                    spec: {
                        params(request?: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                        spec(request: _85.QueryGetSpecRequest): Promise<_85.QueryGetSpecResponse>;
                        specAll(request?: _85.QueryAllSpecRequest): Promise<_85.QueryAllSpecResponse>;
                        specRaw(request: _85.QueryGetSpecRequest): Promise<_85.QueryGetSpecResponse>;
                        specAllRaw(request?: _85.QueryAllSpecRequest): Promise<_85.QueryAllSpecResponse>;
                        showAllChains(request?: _85.QueryShowAllChainsRequest): Promise<_85.QueryShowAllChainsResponse>;
                        showChainInfo(request: _85.QueryShowChainInfoRequest): Promise<_85.QueryShowChainInfoResponse>;
                    };
                    subscription: {
                        params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                        current(request: _97.QueryCurrentRequest): Promise<_97.QueryCurrentResponse>;
                    };
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
