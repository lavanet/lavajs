import { StakeEntry } from "./stake_entry";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseStakeStorage() {
  return {
    index: "",
    stakeEntries: [],
    epochBlockHash: new Uint8Array()
  };
}
export const StakeStorage = {
  typeUrl: "/lavanet.lava.epochstorage.StakeStorage",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      index: object.index,
      stakeEntries: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeEntries) ? object.stakeEntries.map(e => StakeEntry.fromAmino(e)) : [],
      epochBlockHash: object.epochBlockHash
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    if (message.stakeEntries) {
      obj.stakeEntries = message.stakeEntries.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.stakeEntries = [];
    }
    obj.epochBlockHash = message.epochBlockHash;
    return obj;
  },
  fromAminoMsg(object) {
    return StakeStorage.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return StakeStorage.decode(message.value);
  },
  toProto(message) {
    return StakeStorage.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.StakeStorage",
      value: StakeStorage.encode(message).finish()
    };
  }
};