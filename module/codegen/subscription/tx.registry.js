//@ts-nocheck

import { MsgBuy, MsgAddProject } from "./tx";
export const registry = [["/lavanet.lava.subscription.MsgBuy", MsgBuy], ["/lavanet.lava.subscription.MsgAddProject", MsgAddProject]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    buy(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: MsgBuy.encode(value).finish()
      };
    },
    addProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: MsgAddProject.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    buy(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value
      };
    },
    addProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value
      };
    }
  },
  toJSON: {
    buy(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: MsgBuy.toJSON(value)
      };
    },
    addProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: MsgAddProject.toJSON(value)
      };
    }
  },
  fromJSON: {
    buy(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: MsgBuy.fromJSON(value)
      };
    },
    addProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: MsgAddProject.fromJSON(value)
      };
    }
  },
  fromPartial: {
    buy(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: MsgBuy.fromPartial(value)
      };
    },
    addProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: MsgAddProject.fromPartial(value)
      };
    }
  }
};