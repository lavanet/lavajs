import { Duration } from "../../../../google/protobuf/duration";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters of the downtime module. */

/** Params defines the parameters of the downtime module. */

/** Downtime defines a single downtime record. */

/** Downtime defines a single downtime record. */

/**
 * DowntimeGarbageCollection defines when garbage collection will be performed, for a specific downtime.
 * used only in genesis.
 */

/**
 * DowntimeGarbageCollection defines when garbage collection will be performed, for a specific downtime.
 * used only in genesis.
 */

function createBaseParams() {
  return {
    downtimeDuration: undefined
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.downtimeDuration !== undefined) {
      Duration.encode(message.downtimeDuration, writer.uint32(10).fork()).ldelim();
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
          message.downtimeDuration = Duration.decode(reader, reader.uint32());
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
    message.downtimeDuration = object.downtimeDuration !== undefined && object.downtimeDuration !== null ? Duration.fromPartial(object.downtimeDuration) : undefined;
    return message;
  }
};
function createBaseDowntime() {
  return {
    block: Long.UZERO,
    duration: undefined
  };
}
export const Downtime = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDowntime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDowntime();
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseDowntimeGarbageCollection() {
  return {
    block: Long.UZERO,
    gcBlock: Long.UZERO
  };
}
export const DowntimeGarbageCollection = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    if (!message.gcBlock.isZero()) {
      writer.uint32(16).uint64(message.gcBlock);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDowntimeGarbageCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        case 2:
          message.gcBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseDowntimeGarbageCollection();
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.gcBlock = object.gcBlock !== undefined && object.gcBlock !== null ? Long.fromValue(object.gcBlock) : Long.UZERO;
    return message;
  }
};