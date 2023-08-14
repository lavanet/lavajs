import { MsgDetection, MsgConflictVoteCommit, MsgConflictVoteReveal } from "./tx";
export const registry = [["/lavanet.lava.conflict.MsgDetection", MsgDetection], ["/lavanet.lava.conflict.MsgConflictVoteCommit", MsgConflictVoteCommit], ["/lavanet.lava.conflict.MsgConflictVoteReveal", MsgConflictVoteReveal]];
export const load = protoRegistry => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    detection(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgDetection",
        value: MsgDetection.encode(value).finish()
      };
    },
    conflictVoteCommit(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
        value: MsgConflictVoteCommit.encode(value).finish()
      };
    },
    conflictVoteReveal(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
        value: MsgConflictVoteReveal.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    detection(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgDetection",
        value
      };
    },
    conflictVoteCommit(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
        value
      };
    },
    conflictVoteReveal(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
        value
      };
    }
  },
  fromPartial: {
    detection(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgDetection",
        value: MsgDetection.fromPartial(value)
      };
    },
    conflictVoteCommit(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
        value: MsgConflictVoteCommit.fromPartial(value)
      };
    },
    conflictVoteReveal(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
        value: MsgConflictVoteReveal.fromPartial(value)
      };
    }
  }
};