import { Long, isSet, bytesFromBase64, base64FromBytes } from "../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseEntry() {
  return {
    index: "",
    block: Long.UZERO,
    staleAt: Long.UZERO,
    refcount: Long.UZERO,
    data: new Uint8Array()
  };
}
export const Entry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (!message.block.isZero()) {
      writer.uint32(16).uint64(message.block);
    }
    if (!message.staleAt.isZero()) {
      writer.uint32(24).uint64(message.staleAt);
    }
    if (!message.refcount.isZero()) {
      writer.uint32(32).uint64(message.refcount);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.block = reader.uint64();
          break;
        case 3:
          message.staleAt = reader.uint64();
          break;
        case 4:
          message.refcount = reader.uint64();
          break;
        case 5:
          message.data = reader.bytes();
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
      index: isSet(object.index) ? String(object.index) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO,
      staleAt: isSet(object.staleAt) ? Long.fromValue(object.staleAt) : Long.UZERO,
      refcount: isSet(object.refcount) ? Long.fromValue(object.refcount) : Long.UZERO,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    message.staleAt !== undefined && (obj.staleAt = (message.staleAt || Long.UZERO).toString());
    message.refcount !== undefined && (obj.refcount = (message.refcount || Long.UZERO).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$index, _object$data;
    const message = createBaseEntry();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.staleAt = object.staleAt !== undefined && object.staleAt !== null ? Long.fromValue(object.staleAt) : Long.UZERO;
    message.refcount = object.refcount !== undefined && object.refcount !== null ? Long.fromValue(object.refcount) : Long.UZERO;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  }
};