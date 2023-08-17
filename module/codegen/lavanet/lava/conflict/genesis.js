import { Params } from "./params";
import { ConflictVote } from "./conflict_vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the conflict module's genesis state. */

/** GenesisState defines the conflict module's genesis state. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    conflictVoteList: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.conflict.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.conflictVoteList) {
      ConflictVote.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.conflictVoteList.push(ConflictVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$conflictVoteL;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.conflictVoteList = ((_object$conflictVoteL = object.conflictVoteList) === null || _object$conflictVoteL === void 0 ? void 0 : _object$conflictVoteL.map(e => ConflictVote.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined,
      conflictVoteList: Array.isArray(object === null || object === void 0 ? void 0 : object.conflictVoteList) ? object.conflictVoteList.map(e => ConflictVote.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.conflictVoteList) {
      obj.conflictVoteList = message.conflictVoteList.map(e => e ? ConflictVote.toAmino(e) : undefined);
    } else {
      obj.conflictVoteList = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};