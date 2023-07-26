import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    geolocationCount: Long.UZERO,
    maxCU: Long.UZERO
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.geolocationCount.isZero()) {
      writer.uint32(8).uint64(message.geolocationCount);
    }
    if (!message.maxCU.isZero()) {
      writer.uint32(16).uint64(message.maxCU);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.geolocationCount = reader.uint64();
          break;
        case 2:
          message.maxCU = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.geolocationCount = object.geolocationCount !== undefined && object.geolocationCount !== null ? Long.fromValue(object.geolocationCount) : Long.UZERO;
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? Long.fromValue(object.maxCU) : Long.UZERO;
    return message;
  }
};