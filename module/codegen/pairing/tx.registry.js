//@ts-nocheck

import { MsgStakeProvider, MsgUnstakeProvider, MsgRelayPayment, MsgFreezeProvider, MsgUnfreezeProvider } from "./tx";
export const registry = [["/lavanet.lava.pairing.MsgStakeProvider", MsgStakeProvider], ["/lavanet.lava.pairing.MsgUnstakeProvider", MsgUnstakeProvider], ["/lavanet.lava.pairing.MsgRelayPayment", MsgRelayPayment], ["/lavanet.lava.pairing.MsgFreezeProvider", MsgFreezeProvider], ["/lavanet.lava.pairing.MsgUnfreezeProvider", MsgUnfreezeProvider]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    stakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.encode(value).finish()
      };
    },
    unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.encode(value).finish()
      };
    },
    relayPayment(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.encode(value).finish()
      };
    },
    freezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.encode(value).finish()
      };
    },
    unfreezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    stakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value
      };
    },
    unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value
      };
    },
    relayPayment(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value
      };
    },
    freezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value
      };
    },
    unfreezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value
      };
    }
  },
  toJSON: {
    stakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.toJSON(value)
      };
    },
    unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.toJSON(value)
      };
    },
    relayPayment(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.toJSON(value)
      };
    },
    freezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.toJSON(value)
      };
    },
    unfreezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.toJSON(value)
      };
    }
  },
  fromJSON: {
    stakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.fromJSON(value)
      };
    },
    unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.fromJSON(value)
      };
    },
    relayPayment(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.fromJSON(value)
      };
    },
    freezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.fromJSON(value)
      };
    },
    unfreezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.fromJSON(value)
      };
    }
  },
  fromPartial: {
    stakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.fromPartial(value)
      };
    },
    unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.fromPartial(value)
      };
    },
    relayPayment(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.fromPartial(value)
      };
    },
    freezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.fromPartial(value)
      };
    },
    unfreezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.fromPartial(value)
      };
    }
  }
};