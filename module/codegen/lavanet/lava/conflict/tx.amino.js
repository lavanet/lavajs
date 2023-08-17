export const AminoConverter = {
  "/lavanet.lava.conflict.MsgDetection": {
    aminoType: "/lavanet.lava.conflict.MsgDetection",
    toAmino: ({
      creator,
      finalizationConflict,
      responseConflict,
      sameProviderConflict
    }) => {
      return {
        creator,
        finalizationConflict: {
          relayReply0: {
            data: finalizationConflict.relayReply0.data,
            sig: finalizationConflict.relayReply0.sig,
            latest_block: finalizationConflict.relayReply0.latestBlock.toString(),
            finalized_blocks_hashes: finalizationConflict.relayReply0.finalizedBlocksHashes,
            sig_blocks: finalizationConflict.relayReply0.sigBlocks,
            metadata: finalizationConflict.relayReply0.metadata.map(el0 => ({
              name: el0.name,
              value: el0.value
            }))
          },
          relayReply1: {
            data: finalizationConflict.relayReply1.data,
            sig: finalizationConflict.relayReply1.sig,
            latest_block: finalizationConflict.relayReply1.latestBlock.toString(),
            finalized_blocks_hashes: finalizationConflict.relayReply1.finalizedBlocksHashes,
            sig_blocks: finalizationConflict.relayReply1.sigBlocks,
            metadata: finalizationConflict.relayReply1.metadata.map(el0 => ({
              name: el0.name,
              value: el0.value
            }))
          }
        },
        responseConflict: {
          conflictRelayData0: {
            request: {
              relay_session: {
                spec_id: responseConflict.conflictRelayData0.request.relaySession.specId,
                content_hash: responseConflict.conflictRelayData0.request.relaySession.contentHash,
                session_id: responseConflict.conflictRelayData0.request.relaySession.sessionId.toString(),
                cu_sum: responseConflict.conflictRelayData0.request.relaySession.cuSum.toString(),
                provider: responseConflict.conflictRelayData0.request.relaySession.provider,
                relay_num: responseConflict.conflictRelayData0.request.relaySession.relayNum.toString(),
                qos_report: {
                  latency: responseConflict.conflictRelayData0.request.relaySession.qosReport.latency,
                  availability: responseConflict.conflictRelayData0.request.relaySession.qosReport.availability,
                  sync: responseConflict.conflictRelayData0.request.relaySession.qosReport.sync
                },
                epoch: responseConflict.conflictRelayData0.request.relaySession.epoch.toString(),
                unresponsive_providers: responseConflict.conflictRelayData0.request.relaySession.unresponsiveProviders,
                lava_chain_id: responseConflict.conflictRelayData0.request.relaySession.lavaChainId,
                sig: responseConflict.conflictRelayData0.request.relaySession.sig,
                badge: {
                  cu_allocation: responseConflict.conflictRelayData0.request.relaySession.badge.cuAllocation.toString(),
                  epoch: responseConflict.conflictRelayData0.request.relaySession.badge.epoch.toString(),
                  address: responseConflict.conflictRelayData0.request.relaySession.badge.address,
                  lava_chain_id: responseConflict.conflictRelayData0.request.relaySession.badge.lavaChainId,
                  project_sig: responseConflict.conflictRelayData0.request.relaySession.badge.projectSig
                },
                qos_excellence_report: {
                  latency: responseConflict.conflictRelayData0.request.relaySession.qosExcellenceReport.latency,
                  availability: responseConflict.conflictRelayData0.request.relaySession.qosExcellenceReport.availability,
                  sync: responseConflict.conflictRelayData0.request.relaySession.qosExcellenceReport.sync
                }
              },
              relay_data: {
                connection_type: responseConflict.conflictRelayData0.request.relayData.connectionType,
                api_url: responseConflict.conflictRelayData0.request.relayData.apiUrl,
                data: responseConflict.conflictRelayData0.request.relayData.data,
                request_block: responseConflict.conflictRelayData0.request.relayData.requestBlock.toString(),
                api_interface: responseConflict.conflictRelayData0.request.relayData.apiInterface,
                salt: responseConflict.conflictRelayData0.request.relayData.salt,
                metadata: responseConflict.conflictRelayData0.request.relayData.metadata.map(el0 => ({
                  name: el0.name,
                  value: el0.value
                })),
                addon: responseConflict.conflictRelayData0.request.relayData.addon,
                extensions: responseConflict.conflictRelayData0.request.relayData.extensions
              }
            },
            reply: {
              hash_all_data_hash: responseConflict.conflictRelayData0.reply.hashAllDataHash,
              sig: responseConflict.conflictRelayData0.reply.sig,
              latest_block: responseConflict.conflictRelayData0.reply.latestBlock.toString(),
              finalized_blocks_hashes: responseConflict.conflictRelayData0.reply.finalizedBlocksHashes,
              sig_blocks: responseConflict.conflictRelayData0.reply.sigBlocks
            }
          },
          conflictRelayData1: {
            request: {
              relay_session: {
                spec_id: responseConflict.conflictRelayData1.request.relaySession.specId,
                content_hash: responseConflict.conflictRelayData1.request.relaySession.contentHash,
                session_id: responseConflict.conflictRelayData1.request.relaySession.sessionId.toString(),
                cu_sum: responseConflict.conflictRelayData1.request.relaySession.cuSum.toString(),
                provider: responseConflict.conflictRelayData1.request.relaySession.provider,
                relay_num: responseConflict.conflictRelayData1.request.relaySession.relayNum.toString(),
                qos_report: {
                  latency: responseConflict.conflictRelayData1.request.relaySession.qosReport.latency,
                  availability: responseConflict.conflictRelayData1.request.relaySession.qosReport.availability,
                  sync: responseConflict.conflictRelayData1.request.relaySession.qosReport.sync
                },
                epoch: responseConflict.conflictRelayData1.request.relaySession.epoch.toString(),
                unresponsive_providers: responseConflict.conflictRelayData1.request.relaySession.unresponsiveProviders,
                lava_chain_id: responseConflict.conflictRelayData1.request.relaySession.lavaChainId,
                sig: responseConflict.conflictRelayData1.request.relaySession.sig,
                badge: {
                  cu_allocation: responseConflict.conflictRelayData1.request.relaySession.badge.cuAllocation.toString(),
                  epoch: responseConflict.conflictRelayData1.request.relaySession.badge.epoch.toString(),
                  address: responseConflict.conflictRelayData1.request.relaySession.badge.address,
                  lava_chain_id: responseConflict.conflictRelayData1.request.relaySession.badge.lavaChainId,
                  project_sig: responseConflict.conflictRelayData1.request.relaySession.badge.projectSig
                },
                qos_excellence_report: {
                  latency: responseConflict.conflictRelayData1.request.relaySession.qosExcellenceReport.latency,
                  availability: responseConflict.conflictRelayData1.request.relaySession.qosExcellenceReport.availability,
                  sync: responseConflict.conflictRelayData1.request.relaySession.qosExcellenceReport.sync
                }
              },
              relay_data: {
                connection_type: responseConflict.conflictRelayData1.request.relayData.connectionType,
                api_url: responseConflict.conflictRelayData1.request.relayData.apiUrl,
                data: responseConflict.conflictRelayData1.request.relayData.data,
                request_block: responseConflict.conflictRelayData1.request.relayData.requestBlock.toString(),
                api_interface: responseConflict.conflictRelayData1.request.relayData.apiInterface,
                salt: responseConflict.conflictRelayData1.request.relayData.salt,
                metadata: responseConflict.conflictRelayData1.request.relayData.metadata.map(el0 => ({
                  name: el0.name,
                  value: el0.value
                })),
                addon: responseConflict.conflictRelayData1.request.relayData.addon,
                extensions: responseConflict.conflictRelayData1.request.relayData.extensions
              }
            },
            reply: {
              hash_all_data_hash: responseConflict.conflictRelayData1.reply.hashAllDataHash,
              sig: responseConflict.conflictRelayData1.reply.sig,
              latest_block: responseConflict.conflictRelayData1.reply.latestBlock.toString(),
              finalized_blocks_hashes: responseConflict.conflictRelayData1.reply.finalizedBlocksHashes,
              sig_blocks: responseConflict.conflictRelayData1.reply.sigBlocks
            }
          }
        },
        sameProviderConflict: {
          relayReply0: {
            data: sameProviderConflict.relayReply0.data,
            sig: sameProviderConflict.relayReply0.sig,
            latest_block: sameProviderConflict.relayReply0.latestBlock.toString(),
            finalized_blocks_hashes: sameProviderConflict.relayReply0.finalizedBlocksHashes,
            sig_blocks: sameProviderConflict.relayReply0.sigBlocks,
            metadata: sameProviderConflict.relayReply0.metadata.map(el0 => ({
              name: el0.name,
              value: el0.value
            }))
          },
          relayReply1: {
            data: sameProviderConflict.relayReply1.data,
            sig: sameProviderConflict.relayReply1.sig,
            latest_block: sameProviderConflict.relayReply1.latestBlock.toString(),
            finalized_blocks_hashes: sameProviderConflict.relayReply1.finalizedBlocksHashes,
            sig_blocks: sameProviderConflict.relayReply1.sigBlocks,
            metadata: sameProviderConflict.relayReply1.metadata.map(el0 => ({
              name: el0.name,
              value: el0.value
            }))
          }
        }
      };
    },
    fromAmino: ({
      creator,
      finalizationConflict,
      responseConflict,
      sameProviderConflict
    }) => {
      return {
        creator,
        finalizationConflict: {
          relayReply0: {
            data: finalizationConflict.relayReply0.data,
            sig: finalizationConflict.relayReply0.sig,
            latestBlock: BigInt(finalizationConflict.relayReply0.latest_block),
            finalizedBlocksHashes: finalizationConflict.relayReply0.finalized_blocks_hashes,
            sigBlocks: finalizationConflict.relayReply0.sig_blocks,
            metadata: finalizationConflict.relayReply0.metadata.map(el2 => ({
              name: el2.name,
              value: el2.value
            }))
          },
          relayReply1: {
            data: finalizationConflict.relayReply1.data,
            sig: finalizationConflict.relayReply1.sig,
            latestBlock: BigInt(finalizationConflict.relayReply1.latest_block),
            finalizedBlocksHashes: finalizationConflict.relayReply1.finalized_blocks_hashes,
            sigBlocks: finalizationConflict.relayReply1.sig_blocks,
            metadata: finalizationConflict.relayReply1.metadata.map(el2 => ({
              name: el2.name,
              value: el2.value
            }))
          }
        },
        responseConflict: {
          conflictRelayData0: {
            request: {
              relaySession: {
                specId: responseConflict.conflictRelayData0.request.relay_session.spec_id,
                contentHash: responseConflict.conflictRelayData0.request.relay_session.content_hash,
                sessionId: BigInt(responseConflict.conflictRelayData0.request.relay_session.session_id),
                cuSum: BigInt(responseConflict.conflictRelayData0.request.relay_session.cu_sum),
                provider: responseConflict.conflictRelayData0.request.relay_session.provider,
                relayNum: BigInt(responseConflict.conflictRelayData0.request.relay_session.relay_num),
                qosReport: {
                  latency: responseConflict.conflictRelayData0.request.relay_session.qos_report.latency,
                  availability: responseConflict.conflictRelayData0.request.relay_session.qos_report.availability,
                  sync: responseConflict.conflictRelayData0.request.relay_session.qos_report.sync
                },
                epoch: BigInt(responseConflict.conflictRelayData0.request.relay_session.epoch),
                unresponsiveProviders: responseConflict.conflictRelayData0.request.relay_session.unresponsive_providers,
                lavaChainId: responseConflict.conflictRelayData0.request.relay_session.lava_chain_id,
                sig: responseConflict.conflictRelayData0.request.relay_session.sig,
                badge: {
                  cuAllocation: BigInt(responseConflict.conflictRelayData0.request.relay_session.badge.cu_allocation),
                  epoch: BigInt(responseConflict.conflictRelayData0.request.relay_session.badge.epoch),
                  address: responseConflict.conflictRelayData0.request.relay_session.badge.address,
                  lavaChainId: responseConflict.conflictRelayData0.request.relay_session.badge.lava_chain_id,
                  projectSig: responseConflict.conflictRelayData0.request.relay_session.badge.project_sig
                },
                qosExcellenceReport: {
                  latency: responseConflict.conflictRelayData0.request.relay_session.qos_excellence_report.latency,
                  availability: responseConflict.conflictRelayData0.request.relay_session.qos_excellence_report.availability,
                  sync: responseConflict.conflictRelayData0.request.relay_session.qos_excellence_report.sync
                }
              },
              relayData: {
                connectionType: responseConflict.conflictRelayData0.request.relay_data.connection_type,
                apiUrl: responseConflict.conflictRelayData0.request.relay_data.api_url,
                data: responseConflict.conflictRelayData0.request.relay_data.data,
                requestBlock: BigInt(responseConflict.conflictRelayData0.request.relay_data.request_block),
                apiInterface: responseConflict.conflictRelayData0.request.relay_data.api_interface,
                salt: responseConflict.conflictRelayData0.request.relay_data.salt,
                metadata: responseConflict.conflictRelayData0.request.relay_data.metadata.map(el4 => ({
                  name: el4.name,
                  value: el4.value
                })),
                addon: responseConflict.conflictRelayData0.request.relay_data.addon,
                extensions: responseConflict.conflictRelayData0.request.relay_data.extensions
              }
            },
            reply: {
              hashAllDataHash: responseConflict.conflictRelayData0.reply.hash_all_data_hash,
              sig: responseConflict.conflictRelayData0.reply.sig,
              latestBlock: BigInt(responseConflict.conflictRelayData0.reply.latest_block),
              finalizedBlocksHashes: responseConflict.conflictRelayData0.reply.finalized_blocks_hashes,
              sigBlocks: responseConflict.conflictRelayData0.reply.sig_blocks
            }
          },
          conflictRelayData1: {
            request: {
              relaySession: {
                specId: responseConflict.conflictRelayData1.request.relay_session.spec_id,
                contentHash: responseConflict.conflictRelayData1.request.relay_session.content_hash,
                sessionId: BigInt(responseConflict.conflictRelayData1.request.relay_session.session_id),
                cuSum: BigInt(responseConflict.conflictRelayData1.request.relay_session.cu_sum),
                provider: responseConflict.conflictRelayData1.request.relay_session.provider,
                relayNum: BigInt(responseConflict.conflictRelayData1.request.relay_session.relay_num),
                qosReport: {
                  latency: responseConflict.conflictRelayData1.request.relay_session.qos_report.latency,
                  availability: responseConflict.conflictRelayData1.request.relay_session.qos_report.availability,
                  sync: responseConflict.conflictRelayData1.request.relay_session.qos_report.sync
                },
                epoch: BigInt(responseConflict.conflictRelayData1.request.relay_session.epoch),
                unresponsiveProviders: responseConflict.conflictRelayData1.request.relay_session.unresponsive_providers,
                lavaChainId: responseConflict.conflictRelayData1.request.relay_session.lava_chain_id,
                sig: responseConflict.conflictRelayData1.request.relay_session.sig,
                badge: {
                  cuAllocation: BigInt(responseConflict.conflictRelayData1.request.relay_session.badge.cu_allocation),
                  epoch: BigInt(responseConflict.conflictRelayData1.request.relay_session.badge.epoch),
                  address: responseConflict.conflictRelayData1.request.relay_session.badge.address,
                  lavaChainId: responseConflict.conflictRelayData1.request.relay_session.badge.lava_chain_id,
                  projectSig: responseConflict.conflictRelayData1.request.relay_session.badge.project_sig
                },
                qosExcellenceReport: {
                  latency: responseConflict.conflictRelayData1.request.relay_session.qos_excellence_report.latency,
                  availability: responseConflict.conflictRelayData1.request.relay_session.qos_excellence_report.availability,
                  sync: responseConflict.conflictRelayData1.request.relay_session.qos_excellence_report.sync
                }
              },
              relayData: {
                connectionType: responseConflict.conflictRelayData1.request.relay_data.connection_type,
                apiUrl: responseConflict.conflictRelayData1.request.relay_data.api_url,
                data: responseConflict.conflictRelayData1.request.relay_data.data,
                requestBlock: BigInt(responseConflict.conflictRelayData1.request.relay_data.request_block),
                apiInterface: responseConflict.conflictRelayData1.request.relay_data.api_interface,
                salt: responseConflict.conflictRelayData1.request.relay_data.salt,
                metadata: responseConflict.conflictRelayData1.request.relay_data.metadata.map(el4 => ({
                  name: el4.name,
                  value: el4.value
                })),
                addon: responseConflict.conflictRelayData1.request.relay_data.addon,
                extensions: responseConflict.conflictRelayData1.request.relay_data.extensions
              }
            },
            reply: {
              hashAllDataHash: responseConflict.conflictRelayData1.reply.hash_all_data_hash,
              sig: responseConflict.conflictRelayData1.reply.sig,
              latestBlock: BigInt(responseConflict.conflictRelayData1.reply.latest_block),
              finalizedBlocksHashes: responseConflict.conflictRelayData1.reply.finalized_blocks_hashes,
              sigBlocks: responseConflict.conflictRelayData1.reply.sig_blocks
            }
          }
        },
        sameProviderConflict: {
          relayReply0: {
            data: sameProviderConflict.relayReply0.data,
            sig: sameProviderConflict.relayReply0.sig,
            latestBlock: BigInt(sameProviderConflict.relayReply0.latest_block),
            finalizedBlocksHashes: sameProviderConflict.relayReply0.finalized_blocks_hashes,
            sigBlocks: sameProviderConflict.relayReply0.sig_blocks,
            metadata: sameProviderConflict.relayReply0.metadata.map(el2 => ({
              name: el2.name,
              value: el2.value
            }))
          },
          relayReply1: {
            data: sameProviderConflict.relayReply1.data,
            sig: sameProviderConflict.relayReply1.sig,
            latestBlock: BigInt(sameProviderConflict.relayReply1.latest_block),
            finalizedBlocksHashes: sameProviderConflict.relayReply1.finalized_blocks_hashes,
            sigBlocks: sameProviderConflict.relayReply1.sig_blocks,
            metadata: sameProviderConflict.relayReply1.metadata.map(el2 => ({
              name: el2.name,
              value: el2.value
            }))
          }
        }
      };
    }
  },
  "/lavanet.lava.conflict.MsgConflictVoteCommit": {
    aminoType: "/lavanet.lava.conflict.MsgConflictVoteCommit",
    toAmino: ({
      creator,
      voteID,
      hash
    }) => {
      return {
        creator,
        voteID,
        hash
      };
    },
    fromAmino: ({
      creator,
      voteID,
      hash
    }) => {
      return {
        creator,
        voteID,
        hash
      };
    }
  },
  "/lavanet.lava.conflict.MsgConflictVoteReveal": {
    aminoType: "/lavanet.lava.conflict.MsgConflictVoteReveal",
    toAmino: ({
      creator,
      voteID,
      nonce,
      hash
    }) => {
      return {
        creator,
        voteID,
        nonce: nonce.toString(),
        hash
      };
    },
    fromAmino: ({
      creator,
      voteID,
      nonce,
      hash
    }) => {
      return {
        creator,
        voteID,
        nonce: BigInt(nonce),
        hash
      };
    }
  }
};