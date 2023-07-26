import { Params } from "./params";
import { ConflictVote } from "./conflict_vote";
import * as _m0 from "protobufjs/minimal";

/** GenesisState defines the conflict module's genesis state. */

/** GenesisState defines the conflict module's genesis state. */

function createBaseGenesisState() {
  return {
    params: undefined,
    conflictVoteList: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.conflictVoteList) {
      ConflictVote.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};