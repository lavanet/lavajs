import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseEntry() {
  return {
    index: "",
    block: Long.UZERO,
    staleAt: Long.UZERO,
    refcount: Long.UZERO,
    data: new Uint8Array(),
    deleteAt: Long.UZERO,
    isLatest: false
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
    if (!message.deleteAt.isZero()) {
      writer.uint32(48).uint64(message.deleteAt);
    }
    if (message.isLatest === true) {
      writer.uint32(56).bool(message.isLatest);
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
        case 6:
          message.deleteAt = reader.uint64();
          break;
        case 7:
          message.isLatest = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index, _object$data, _object$isLatest;
    const message = createBaseEntry();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.staleAt = object.staleAt !== undefined && object.staleAt !== null ? Long.fromValue(object.staleAt) : Long.UZERO;
    message.refcount = object.refcount !== undefined && object.refcount !== null ? Long.fromValue(object.refcount) : Long.UZERO;
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.deleteAt = object.deleteAt !== undefined && object.deleteAt !== null ? Long.fromValue(object.deleteAt) : Long.UZERO;
    message.isLatest = (_object$isLatest = object.isLatest) !== null && _object$isLatest !== void 0 ? _object$isLatest : false;
    return message;
  }
};
function createBaseRawMessage() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const RawMessage = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRawMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$key, _object$value;
    const message = createBaseRawMessage();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    return message;
  }
};