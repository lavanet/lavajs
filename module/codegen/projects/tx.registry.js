import { MsgAddKeys, MsgDelKeys, MsgSetPolicy, MsgSetSubscriptionPolicy } from "./tx";
export const registry = [["/lavanet.lava.projects.MsgAddKeys", MsgAddKeys], ["/lavanet.lava.projects.MsgDelKeys", MsgDelKeys], ["/lavanet.lava.projects.MsgSetPolicy", MsgSetPolicy], ["/lavanet.lava.projects.MsgSetSubscriptionPolicy", MsgSetSubscriptionPolicy]];
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
    delKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgDelKeys",
        value: MsgDelKeys.encode(value).finish()
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
    delKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgDelKeys",
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
  fromPartial: {
    addKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: MsgAddKeys.fromPartial(value)
      };
    },
    delKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgDelKeys",
        value: MsgDelKeys.fromPartial(value)
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