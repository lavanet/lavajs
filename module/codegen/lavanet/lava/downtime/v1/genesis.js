import { Params, Downtime, DowntimeGarbageCollection } from "./downtime";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
/** GenesisState is the genesis state of the downtime module. */

/** GenesisState is the genesis state of the downtime module. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    downtimes: [],
    downtimesGarbageCollection: [],
    lastBlockTime: undefined
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.downtime.v1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.downtimes) {
      Downtime.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.downtimesGarbageCollection) {
      DowntimeGarbageCollection.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(34).fork()).ldelim();
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
          message.downtimes.push(Downtime.decode(reader, reader.uint32()));
          break;
        case 3:
          message.downtimesGarbageCollection.push(DowntimeGarbageCollection.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$downtimes, _object$downtimesGarb, _object$lastBlockTime;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.downtimes = ((_object$downtimes = object.downtimes) === null || _object$downtimes === void 0 ? void 0 : _object$downtimes.map(e => Downtime.fromPartial(e))) || [];
    message.downtimesGarbageCollection = ((_object$downtimesGarb = object.downtimesGarbageCollection) === null || _object$downtimesGarb === void 0 ? void 0 : _object$downtimesGarb.map(e => DowntimeGarbageCollection.fromPartial(e))) || [];
    message.lastBlockTime = (_object$lastBlockTime = object.lastBlockTime) !== null && _object$lastBlockTime !== void 0 ? _object$lastBlockTime : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined,
      downtimes: Array.isArray(object === null || object === void 0 ? void 0 : object.downtimes) ? object.downtimes.map(e => Downtime.fromAmino(e)) : [],
      downtimesGarbageCollection: Array.isArray(object === null || object === void 0 ? void 0 : object.downtimes_garbage_collection) ? object.downtimes_garbage_collection.map(e => DowntimeGarbageCollection.fromAmino(e)) : [],
      lastBlockTime: object === null || object === void 0 ? void 0 : object.last_block_time
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? Downtime.toAmino(e) : undefined);
    } else {
      obj.downtimes = [];
    }
    if (message.downtimesGarbageCollection) {
      obj.downtimes_garbage_collection = message.downtimesGarbageCollection.map(e => e ? DowntimeGarbageCollection.toAmino(e) : undefined);
    } else {
      obj.downtimes_garbage_collection = [];
    }
    obj.last_block_time = message.lastBlockTime;
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
      typeUrl: "/lavanet.lava.downtime.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};