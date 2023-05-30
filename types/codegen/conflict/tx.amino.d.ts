import { AminoMsg } from "@cosmjs/amino";
import { MsgDetection, MsgConflictVoteCommit, MsgConflictVoteReveal } from "./tx";
export interface MsgDetectionAminoType extends AminoMsg {
    type: "/lavanet.lava.conflict.MsgDetection";
    value: {
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
}
export interface MsgConflictVoteCommitAminoType extends AminoMsg {
    type: "/lavanet.lava.conflict.MsgConflictVoteCommit";
    value: {
        creator: string;
        voteID: string;
        hash: Uint8Array;
    };
}
export interface MsgConflictVoteRevealAminoType extends AminoMsg {
    type: "/lavanet.lava.conflict.MsgConflictVoteReveal";
    value: {
        creator: string;
        voteID: string;
        nonce: string;
        hash: Uint8Array;
    };
}
export declare const AminoConverter: {
    "/lavanet.lava.conflict.MsgDetection": {
        aminoType: string;
        toAmino: ({ creator, finalizationConflict, responseConflict, sameProviderConflict }: MsgDetection) => MsgDetectionAminoType["value"];
        fromAmino: ({ creator, finalizationConflict, responseConflict, sameProviderConflict }: MsgDetectionAminoType["value"]) => MsgDetection;
    };
    "/lavanet.lava.conflict.MsgConflictVoteCommit": {
        aminoType: string;
        toAmino: ({ creator, voteID, hash }: MsgConflictVoteCommit) => MsgConflictVoteCommitAminoType["value"];
        fromAmino: ({ creator, voteID, hash }: MsgConflictVoteCommitAminoType["value"]) => MsgConflictVoteCommit;
    };
    "/lavanet.lava.conflict.MsgConflictVoteReveal": {
        aminoType: string;
        toAmino: ({ creator, voteID, nonce, hash }: MsgConflictVoteReveal) => MsgConflictVoteRevealAminoType["value"];
        fromAmino: ({ creator, voteID, nonce, hash }: MsgConflictVoteRevealAminoType["value"]) => MsgConflictVoteReveal;
    };
};
