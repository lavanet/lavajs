import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */

/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */

function createBaseEquivocation() {
  return {
    height: Long.ZERO,
    time: undefined,
    power: Long.ZERO,
    consensusAddress: ""
  };
}
export const Equivocation = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }
    if (message.consensusAddress !== "") {
      writer.uint32(34).string(message.consensusAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquivocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.power = reader.int64();
          break;
        case 4:
          message.consensusAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO,
      consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.power !== undefined && (obj.power = (message.power || Long.ZERO).toString());
    message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
    return obj;
  },
  fromPartial(object) {
    var _object$consensusAddr;
    const message = createBaseEquivocation();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    message.consensusAddress = (_object$consensusAddr = object.consensusAddress) !== null && _object$consensusAddr !== void 0 ? _object$consensusAddr : "";
    return message;
  }
};