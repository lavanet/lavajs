import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseEntry() {
  return {
    index: "",
    block: BigInt(0),
    staleAt: BigInt(0),
    refcount: BigInt(0),
    data: new Uint8Array(),
    deleteAt: BigInt(0),
    isLatest: false
  };
}
export const Entry = {
  typeUrl: "/lavanet.lava.common.Entry",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(16).uint64(message.block);
    }
    if (message.staleAt !== BigInt(0)) {
      writer.uint32(24).uint64(message.staleAt);
    }
    if (message.refcount !== BigInt(0)) {
      writer.uint32(32).uint64(message.refcount);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    if (message.deleteAt !== BigInt(0)) {
      writer.uint32(48).uint64(message.deleteAt);
    }
    if (message.isLatest === true) {
      writer.uint32(56).bool(message.isLatest);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.staleAt = object.staleAt !== undefined && object.staleAt !== null ? BigInt(object.staleAt.toString()) : BigInt(0);
    message.refcount = object.refcount !== undefined && object.refcount !== null ? BigInt(object.refcount.toString()) : BigInt(0);
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.deleteAt = object.deleteAt !== undefined && object.deleteAt !== null ? BigInt(object.deleteAt.toString()) : BigInt(0);
    message.isLatest = (_object$isLatest = object.isLatest) !== null && _object$isLatest !== void 0 ? _object$isLatest : false;
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index,
      block: BigInt(object.block),
      staleAt: BigInt(object.stale_at),
      refcount: BigInt(object.refcount),
      data: object.data,
      deleteAt: BigInt(object.delete_at),
      isLatest: object.is_latest
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    obj.block = message.block ? message.block.toString() : undefined;
    obj.stale_at = message.staleAt ? message.staleAt.toString() : undefined;
    obj.refcount = message.refcount ? message.refcount.toString() : undefined;
    obj.data = message.data;
    obj.delete_at = message.deleteAt ? message.deleteAt.toString() : undefined;
    obj.is_latest = message.isLatest;
    return obj;
  },
  fromAminoMsg(object) {
    return Entry.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Entry.decode(message.value);
  },
  toProto(message) {
    return Entry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.common.Entry",
      value: Entry.encode(message).finish()
    };
  }
};
function createBaseRawMessage() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const RawMessage = {
  typeUrl: "/lavanet.lava.common.RawMessage",
  encode(message, writer = BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return RawMessage.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RawMessage.decode(message.value);
  },
  toProto(message) {
    return RawMessage.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.common.RawMessage",
      value: RawMessage.encode(message).finish()
    };
  }
};