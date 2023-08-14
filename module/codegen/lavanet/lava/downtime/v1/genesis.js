import { Params, Downtime, DowntimeGarbageCollection } from "./downtime";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
/** GenesisState is the genesis state of the downtime module. */

/** GenesisState is the genesis state of the downtime module. */

function createBaseGenesisState() {
  return {
    params: undefined,
    downtimes: [],
    downtimesGarbageCollection: [],
    lastBlockTime: undefined
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
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
  }
};