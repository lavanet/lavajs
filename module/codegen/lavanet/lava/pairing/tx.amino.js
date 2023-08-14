import { Long } from "../../../helpers";
export const AminoConverter = {
  "/lavanet.lava.pairing.MsgStakeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgStakeProvider",
    toAmino: ({
      creator,
      chainID,
      amount,
      endpoints,
      geolocation,
      moniker
    }) => {
      return {
        creator,
        chainID,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        endpoints: endpoints.map(el0 => ({
          iPPORT: el0.iPPORT,
          geolocation: el0.geolocation.toString(),
          addons: el0.addons,
          api_interfaces: el0.apiInterfaces,
          extensions: el0.extensions
        })),
        geolocation: geolocation.toString(),
        moniker
      };
    },
    fromAmino: ({
      creator,
      chainID,
      amount,
      endpoints,
      geolocation,
      moniker
    }) => {
      return {
        creator,
        chainID,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        endpoints: endpoints.map(el0 => ({
          iPPORT: el0.iPPORT,
          geolocation: Long.fromString(el0.geolocation),
          addons: el0.addons,
          apiInterfaces: el0.api_interfaces,
          extensions: el0.extensions
        })),
        geolocation: Long.fromString(geolocation),
        moniker
      };
    }
  },
  "/lavanet.lava.pairing.MsgUnstakeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgUnstakeProvider",
    toAmino: ({
      creator,
      chainID
    }) => {
      return {
        creator,
        chainID
      };
    },
    fromAmino: ({
      creator,
      chainID
    }) => {
      return {
        creator,
        chainID
      };
    }
  },
  "/lavanet.lava.pairing.MsgRelayPayment": {
    aminoType: "/lavanet.lava.pairing.MsgRelayPayment",
    toAmino: ({
      creator,
      relays,
      descriptionString
    }) => {
      return {
        creator,
        relays: relays.map(el0 => ({
          spec_id: el0.specId,
          content_hash: el0.contentHash,
          session_id: el0.sessionId.toString(),
          cu_sum: el0.cuSum.toString(),
          provider: el0.provider,
          relay_num: el0.relayNum.toString(),
          qos_report: {
            latency: el0.qosReport.latency,
            availability: el0.qosReport.availability,
            sync: el0.qosReport.sync
          },
          epoch: el0.epoch.toString(),
          unresponsive_providers: el0.unresponsiveProviders,
          lava_chain_id: el0.lavaChainId,
          sig: el0.sig,
          badge: {
            cu_allocation: el0.badge.cuAllocation.toString(),
            epoch: el0.badge.epoch.toString(),
            address: el0.badge.address,
            lava_chain_id: el0.badge.lavaChainId,
            project_sig: el0.badge.projectSig
          },
          qos_excellence_report: {
            latency: el0.qosExcellenceReport.latency,
            availability: el0.qosExcellenceReport.availability,
            sync: el0.qosExcellenceReport.sync
          }
        })),
        descriptionString
      };
    },
    fromAmino: ({
      creator,
      relays,
      descriptionString
    }) => {
      return {
        creator,
        relays: relays.map(el0 => ({
          specId: el0.spec_id,
          contentHash: el0.content_hash,
          sessionId: Long.fromString(el0.session_id),
          cuSum: Long.fromString(el0.cu_sum),
          provider: el0.provider,
          relayNum: Long.fromString(el0.relay_num),
          qosReport: {
            latency: el0.qos_report.latency,
            availability: el0.qos_report.availability,
            sync: el0.qos_report.sync
          },
          epoch: Long.fromString(el0.epoch),
          unresponsiveProviders: el0.unresponsive_providers,
          lavaChainId: el0.lava_chain_id,
          sig: el0.sig,
          badge: {
            cuAllocation: Long.fromString(el0.badge.cu_allocation),
            epoch: Long.fromString(el0.badge.epoch),
            address: el0.badge.address,
            lavaChainId: el0.badge.lava_chain_id,
            projectSig: el0.badge.project_sig
          },
          qosExcellenceReport: {
            latency: el0.qos_excellence_report.latency,
            availability: el0.qos_excellence_report.availability,
            sync: el0.qos_excellence_report.sync
          }
        })),
        descriptionString
      };
    }
  },
  "/lavanet.lava.pairing.MsgFreezeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgFreezeProvider",
    toAmino: ({
      creator,
      chainIds,
      reason
    }) => {
      return {
        creator,
        chainIds,
        reason
      };
    },
    fromAmino: ({
      creator,
      chainIds,
      reason
    }) => {
      return {
        creator,
        chainIds,
        reason
      };
    }
  },
  "/lavanet.lava.pairing.MsgUnfreezeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgUnfreezeProvider",
    toAmino: ({
      creator,
      chainIds
    }) => {
      return {
        creator,
        chainIds
      };
    },
    fromAmino: ({
      creator,
      chainIds
    }) => {
      return {
        creator,
        chainIds
      };
    }
  }
};