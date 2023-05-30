import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const lavanetAminoConverters: {
    "/lavanet.lava.subscription.MsgBuy": {
        aminoType: string;
        toAmino: ({ creator, consumer, index, duration }: import("../subscription/tx").MsgBuy) => {
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
        }) => import("../subscription/tx").MsgBuy;
    };
    "/lavanet.lava.subscription.MsgAddProject": {
        aminoType: string;
        toAmino: ({ creator, projectData }: import("../subscription/tx").MsgAddProject) => {
            creator: string;
            project_data: {
                name: string;
                description: string;
                enabled: boolean;
                projectKeys: {
                    key: string;
                    kinds: number;
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
                    kinds: number;
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
        }) => import("../subscription/tx").MsgAddProject;
    };
    "/lavanet.lava.projects.MsgAddKeys": {
        aminoType: string;
        toAmino: ({ creator, project, projectKeys }: import("../proto/projects/tx").MsgAddKeys) => {
            creator: string;
            project: string;
            project_keys: {
                key: string;
                kinds: number;
            }[];
        };
        fromAmino: ({ creator, project, project_keys }: {
            creator: string;
            project: string;
            project_keys: {
                key: string;
                kinds: number;
            }[];
        }) => import("../proto/projects/tx").MsgAddKeys;
    };
    "/lavanet.lava.projects.MsgSetPolicy": {
        aminoType: string;
        toAmino: ({ creator, project, policy }: import("../proto/projects/tx").MsgSetPolicy) => {
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
        }) => import("../proto/projects/tx").MsgSetPolicy;
    };
    "/lavanet.lava.projects.MsgSetSubscriptionPolicy": {
        aminoType: string;
        toAmino: ({ creator, projects, policy }: import("../proto/projects/tx").MsgSetSubscriptionPolicy) => {
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
        }) => import("../proto/projects/tx").MsgSetSubscriptionPolicy;
    };
    "/lavanet.lava.pairing.MsgStakeProvider": {
        aminoType: string;
        toAmino: ({ creator, chainID, amount, endpoints, geolocation, moniker }: import("../proto/pairing/tx").MsgStakeProvider) => {
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
        }) => import("../proto/pairing/tx").MsgStakeProvider;
    };
    "/lavanet.lava.pairing.MsgStakeClient": {
        aminoType: string;
        toAmino: ({ creator, chainID, amount, geolocation }: import("../proto/pairing/tx").MsgStakeClient) => {
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
        }) => import("../proto/pairing/tx").MsgStakeClient;
    };
    "/lavanet.lava.pairing.MsgUnstakeProvider": {
        aminoType: string;
        toAmino: ({ creator, chainID }: import("../proto/pairing/tx").MsgUnstakeProvider) => {
            creator: string;
            chainID: string;
        };
        fromAmino: ({ creator, chainID }: {
            creator: string;
            chainID: string;
        }) => import("../proto/pairing/tx").MsgUnstakeProvider;
    };
    "/lavanet.lava.pairing.MsgUnstakeClient": {
        aminoType: string;
        toAmino: ({ creator, chainID }: import("../proto/pairing/tx").MsgUnstakeClient) => {
            creator: string;
            chainID: string;
        };
        fromAmino: ({ creator, chainID }: {
            creator: string;
            chainID: string;
        }) => import("../proto/pairing/tx").MsgUnstakeClient;
    };
    "/lavanet.lava.pairing.MsgRelayPayment": {
        aminoType: string;
        toAmino: ({ creator, relays, descriptionString }: import("../proto/pairing/tx").MsgRelayPayment) => {
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
        }) => import("../proto/pairing/tx").MsgRelayPayment;
    };
    "/lavanet.lava.pairing.MsgFreezeProvider": {
        aminoType: string;
        toAmino: ({ creator, chainIds, reason }: import("../proto/pairing/tx").MsgFreezeProvider) => {
            creator: string;
            chainIds: string[];
            reason: string;
        };
        fromAmino: ({ creator, chainIds, reason }: {
            creator: string;
            chainIds: string[];
            reason: string;
        }) => import("../proto/pairing/tx").MsgFreezeProvider;
    };
    "/lavanet.lava.pairing.MsgUnfreezeProvider": {
        aminoType: string;
        toAmino: ({ creator, chainIds }: import("../proto/pairing/tx").MsgUnfreezeProvider) => {
            creator: string;
            chainIds: string[];
        };
        fromAmino: ({ creator, chainIds }: {
            creator: string;
            chainIds: string[];
        }) => import("../proto/pairing/tx").MsgUnfreezeProvider;
    };
    "/lavanet.lava.conflict.MsgDetection": {
        aminoType: string;
        toAmino: ({ creator, finalizationConflict, responseConflict, sameProviderConflict }: import("../proto/conflict/tx").MsgDetection) => {
            creator: string;
            finalizationConflict: {
                relayReply0: {
                    data: Uint8Array;
                    sig: Uint8Array;
                    nonce: number;
                    latest_block: string;
                    finalized_blocks_hashes: Uint8Array;
                    sig_blocks: Uint8Array;
                    metadata: {
                        name: string;
                        value: string;
                    }[];
                };
                relayReply1: {
                    data: Uint8Array;
                    sig: Uint8Array;
                    nonce: number;
                    latest_block: string;
                    finalized_blocks_hashes: Uint8Array;
                    sig_blocks: Uint8Array;
                    metadata: {
                        name: string;
                        value: string;
                    }[];
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
                            metadata: {
                                name: string;
                                value: string;
                            }[];
                        };
                    };
                    reply: {
                        data: Uint8Array;
                        sig: Uint8Array;
                        nonce: number;
                        latest_block: string;
                        finalized_blocks_hashes: Uint8Array;
                        sig_blocks: Uint8Array;
                        metadata: {
                            name: string;
                            value: string;
                        }[];
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
                            metadata: {
                                name: string;
                                value: string;
                            }[];
                        };
                    };
                    reply: {
                        data: Uint8Array;
                        sig: Uint8Array;
                        nonce: number;
                        latest_block: string;
                        finalized_blocks_hashes: Uint8Array;
                        sig_blocks: Uint8Array;
                        metadata: {
                            name: string;
                            value: string;
                        }[];
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
                    metadata: {
                        name: string;
                        value: string;
                    }[];
                };
                relayReply1: {
                    data: Uint8Array;
                    sig: Uint8Array;
                    nonce: number;
                    latest_block: string;
                    finalized_blocks_hashes: Uint8Array;
                    sig_blocks: Uint8Array;
                    metadata: {
                        name: string;
                        value: string;
                    }[];
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
                    metadata: {
                        name: string;
                        value: string;
                    }[];
                };
                relayReply1: {
                    data: Uint8Array;
                    sig: Uint8Array;
                    nonce: number;
                    latest_block: string;
                    finalized_blocks_hashes: Uint8Array;
                    sig_blocks: Uint8Array;
                    metadata: {
                        name: string;
                        value: string;
                    }[];
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
                            metadata: {
                                name: string;
                                value: string;
                            }[];
                        };
                    };
                    reply: {
                        data: Uint8Array;
                        sig: Uint8Array;
                        nonce: number;
                        latest_block: string;
                        finalized_blocks_hashes: Uint8Array;
                        sig_blocks: Uint8Array;
                        metadata: {
                            name: string;
                            value: string;
                        }[];
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
                            metadata: {
                                name: string;
                                value: string;
                            }[];
                        };
                    };
                    reply: {
                        data: Uint8Array;
                        sig: Uint8Array;
                        nonce: number;
                        latest_block: string;
                        finalized_blocks_hashes: Uint8Array;
                        sig_blocks: Uint8Array;
                        metadata: {
                            name: string;
                            value: string;
                        }[];
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
                    metadata: {
                        name: string;
                        value: string;
                    }[];
                };
                relayReply1: {
                    data: Uint8Array;
                    sig: Uint8Array;
                    nonce: number;
                    latest_block: string;
                    finalized_blocks_hashes: Uint8Array;
                    sig_blocks: Uint8Array;
                    metadata: {
                        name: string;
                        value: string;
                    }[];
                };
            };
        }) => import("../proto/conflict/tx").MsgDetection;
    };
    "/lavanet.lava.conflict.MsgConflictVoteCommit": {
        aminoType: string;
        toAmino: ({ creator, voteID, hash }: import("../proto/conflict/tx").MsgConflictVoteCommit) => {
            creator: string;
            voteID: string;
            hash: Uint8Array;
        };
        fromAmino: ({ creator, voteID, hash }: {
            creator: string;
            voteID: string;
            hash: Uint8Array;
        }) => import("../proto/conflict/tx").MsgConflictVoteCommit;
    };
    "/lavanet.lava.conflict.MsgConflictVoteReveal": {
        aminoType: string;
        toAmino: ({ creator, voteID, nonce, hash }: import("../proto/conflict/tx").MsgConflictVoteReveal) => {
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
        }) => import("../proto/conflict/tx").MsgConflictVoteReveal;
    };
};
export declare const lavanetProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningLavanetClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningLavanetClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
