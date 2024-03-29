import { MsgBuy, MsgAddProject, MsgDelProject } from "./tx";
export const registry = [["/lavanet.lava.subscription.MsgBuy", MsgBuy], ["/lavanet.lava.subscription.MsgAddProject", MsgAddProject], ["/lavanet.lava.subscription.MsgDelProject", MsgDelProject]];
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
    },
    delProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value: MsgDelProject.encode(value).finish()
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
    },
    delProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value
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
    },
    delProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value: MsgDelProject.fromPartial(value)
      };
    }
  }
};