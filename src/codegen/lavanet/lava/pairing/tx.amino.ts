import { AminoMsg } from "@cosmjs/amino";
import { MsgStakeProvider, MsgUnstakeProvider, MsgRelayPayment, MsgFreezeProvider, MsgUnfreezeProvider } from "./tx";
export interface MsgStakeProviderAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgStakeProvider";
  value: {
    creator: string;
    chainID: string;
    amount: {
      denom: string;
      amount: string;
    };
    endpoints: {
      iPPORT: string;
      geolocation: string;
      addons: string[];
      api_interfaces: string[];
      extensions: string[];
    }[];
    geolocation: string;
    moniker: string;
  };
}
export interface MsgUnstakeProviderAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgUnstakeProvider";
  value: {
    creator: string;
    chainID: string;
  };
}
export interface MsgRelayPaymentAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgRelayPayment";
  value: {
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
      qos_excellence_report: {
        latency: string;
        availability: string;
        sync: string;
      };
    }[];
    descriptionString: string;
  };
}
export interface MsgFreezeProviderAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgFreezeProvider";
  value: {
    creator: string;
    chainIds: string[];
    reason: string;
  };
}
export interface MsgUnfreezeProviderAminoType extends AminoMsg {
  type: "/lavanet.lava.pairing.MsgUnfreezeProvider";
  value: {
    creator: string;
    chainIds: string[];
  };
}
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
    }: MsgStakeProvider): MsgStakeProviderAminoType["value"] => {
      return {
        creator,
        chainID,
        amount: {
          denom: amount.denom,
          amount: amount.amount
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
    }: MsgStakeProviderAminoType["value"]): MsgStakeProvider => {
      return {
        creator,
        chainID,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        endpoints: endpoints.map(el0 => ({
          iPPORT: el0.iPPORT,
          geolocation: BigInt(el0.geolocation),
          addons: el0.addons,
          apiInterfaces: el0.api_interfaces,
          extensions: el0.extensions
        })),
        geolocation: BigInt(geolocation),
        moniker
      };
    }
  },
  "/lavanet.lava.pairing.MsgUnstakeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgUnstakeProvider",
    toAmino: ({
      creator,
      chainID
    }: MsgUnstakeProvider): MsgUnstakeProviderAminoType["value"] => {
      return {
        creator,
        chainID
      };
    },
    fromAmino: ({
      creator,
      chainID
    }: MsgUnstakeProviderAminoType["value"]): MsgUnstakeProvider => {
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
    }: MsgRelayPayment): MsgRelayPaymentAminoType["value"] => {
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
    }: MsgRelayPaymentAminoType["value"]): MsgRelayPayment => {
      return {
        creator,
        relays: relays.map(el0 => ({
          specId: el0.spec_id,
          contentHash: el0.content_hash,
          sessionId: BigInt(el0.session_id),
          cuSum: BigInt(el0.cu_sum),
          provider: el0.provider,
          relayNum: BigInt(el0.relay_num),
          qosReport: {
            latency: el0.qos_report.latency,
            availability: el0.qos_report.availability,
            sync: el0.qos_report.sync
          },
          epoch: BigInt(el0.epoch),
          unresponsiveProviders: el0.unresponsive_providers,
          lavaChainId: el0.lava_chain_id,
          sig: el0.sig,
          badge: {
            cuAllocation: BigInt(el0.badge.cu_allocation),
            epoch: BigInt(el0.badge.epoch),
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
    }: MsgFreezeProvider): MsgFreezeProviderAminoType["value"] => {
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
    }: MsgFreezeProviderAminoType["value"]): MsgFreezeProvider => {
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
    }: MsgUnfreezeProvider): MsgUnfreezeProviderAminoType["value"] => {
      return {
        creator,
        chainIds
      };
    },
    fromAmino: ({
      creator,
      chainIds
    }: MsgUnfreezeProviderAminoType["value"]): MsgUnfreezeProvider => {
      return {
        creator,
        chainIds
      };
    }
  }
};