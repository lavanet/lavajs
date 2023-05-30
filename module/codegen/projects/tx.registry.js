//@ts-nocheck

import { MsgAddKeys, MsgSetPolicy, MsgSetSubscriptionPolicy } from "./tx";
export const registry = [["/lavanet.lava.projects.MsgAddKeys", MsgAddKeys], ["/lavanet.lava.projects.MsgSetPolicy", MsgSetPolicy], ["/lavanet.lava.projects.MsgSetSubscriptionPolicy", MsgSetSubscriptionPolicy]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: MsgAddKeys.encode(value).finish()
      };
    },
    setPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value: MsgSetPolicy.encode(value).finish()
      };
    },
    setSubscriptionPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value: MsgSetSubscriptionPolicy.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value
      };
    },
    setPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value
      };
    },
    setSubscriptionPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value
      };
    }
  },
  toJSON: {
    addKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: MsgAddKeys.toJSON(value)
      };
    },
    setPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value: MsgSetPolicy.toJSON(value)
      };
    },
    setSubscriptionPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value: MsgSetSubscriptionPolicy.toJSON(value)
      };
    }
  },
  fromJSON: {
    addKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: MsgAddKeys.fromJSON(value)
      };
    },
    setPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value: MsgSetPolicy.fromJSON(value)
      };
    },
    setSubscriptionPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value: MsgSetSubscriptionPolicy.fromJSON(value)
      };
    }
  },
  fromPartial: {
    addKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: MsgAddKeys.fromPartial(value)
      };
    },
    setPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value: MsgSetPolicy.fromPartial(value)
      };
    },
    setSubscriptionPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value: MsgSetSubscriptionPolicy.fromPartial(value)
      };
    }
  }
};