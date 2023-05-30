import { StakeEntry } from "./stake_entry";
import * as _m0 from "protobufjs/minimal";
function createBaseStakeStorage() {
  return {
    index: "",
    stakeEntries: [],
    epochBlockHash: new Uint8Array()
  };
}
export const StakeStorage = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.stakeEntries) {
      StakeEntry.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochBlockHash.length !== 0) {
      writer.uint32(26).bytes(message.epochBlockHash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.stakeEntries.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.epochBlockHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index, _object$stakeEntries, _object$epochBlockHas;
    const message = createBaseStakeStorage();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.stakeEntries = ((_object$stakeEntries = object.stakeEntries) === null || _object$stakeEntries === void 0 ? void 0 : _object$stakeEntries.map(e => StakeEntry.fromPartial(e))) || [];
    message.epochBlockHash = (_object$epochBlockHas = object.epochBlockHash) !== null && _object$epochBlockHas !== void 0 ? _object$epochBlockHas : new Uint8Array();
    return message;
  }
};