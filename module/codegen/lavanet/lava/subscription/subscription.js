import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseSubscription() {
  return {
    creator: "",
    consumer: "",
    block: Long.UZERO,
    planIndex: "",
    planBlock: Long.UZERO,
    durationTotal: Long.UZERO,
    durationLeft: Long.UZERO,
    monthExpiryTime: Long.UZERO,
    monthCuTotal: Long.UZERO,
    monthCuLeft: Long.UZERO
  };
}
export const Subscription = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (!message.block.isZero()) {
      writer.uint32(24).uint64(message.block);
    }
    if (message.planIndex !== "") {
      writer.uint32(34).string(message.planIndex);
    }
    if (!message.planBlock.isZero()) {
      writer.uint32(40).uint64(message.planBlock);
    }
    if (!message.durationTotal.isZero()) {
      writer.uint32(48).uint64(message.durationTotal);
    }
    if (!message.durationLeft.isZero()) {
      writer.uint32(56).uint64(message.durationLeft);
    }
    if (!message.monthExpiryTime.isZero()) {
      writer.uint32(64).uint64(message.monthExpiryTime);
    }
    if (!message.monthCuTotal.isZero()) {
      writer.uint32(80).uint64(message.monthCuTotal);
    }
    if (!message.monthCuLeft.isZero()) {
      writer.uint32(88).uint64(message.monthCuLeft);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumer = reader.string();
          break;
        case 3:
          message.block = reader.uint64();
          break;
        case 4:
          message.planIndex = reader.string();
          break;
        case 5:
          message.planBlock = reader.uint64();
          break;
        case 6:
          message.durationTotal = reader.uint64();
          break;
        case 7:
          message.durationLeft = reader.uint64();
          break;
        case 8:
          message.monthExpiryTime = reader.uint64();
          break;
        case 10:
          message.monthCuTotal = reader.uint64();
          break;
        case 11:
          message.monthCuLeft = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$creator, _object$consumer, _object$planIndex;
    const message = createBaseSubscription();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.consumer = (_object$consumer = object.consumer) !== null && _object$consumer !== void 0 ? _object$consumer : "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.planIndex = (_object$planIndex = object.planIndex) !== null && _object$planIndex !== void 0 ? _object$planIndex : "";
    message.planBlock = object.planBlock !== undefined && object.planBlock !== null ? Long.fromValue(object.planBlock) : Long.UZERO;
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? Long.fromValue(object.durationTotal) : Long.UZERO;
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? Long.fromValue(object.durationLeft) : Long.UZERO;
    message.monthExpiryTime = object.monthExpiryTime !== undefined && object.monthExpiryTime !== null ? Long.fromValue(object.monthExpiryTime) : Long.UZERO;
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? Long.fromValue(object.monthCuTotal) : Long.UZERO;
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? Long.fromValue(object.monthCuLeft) : Long.UZERO;
    return message;
  }
};