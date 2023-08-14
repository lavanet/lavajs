import { Duration, DurationSDKType } from "../../../../google/protobuf/duration";
import { Long, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters of the downtime module. */
export interface Params {
  /**
   * downtime_duration defines the minimum time elapsed between blocks
   * that we consider the chain to be down.
   */
  downtimeDuration?: Duration;
}
/** Params defines the parameters of the downtime module. */
export interface ParamsSDKType {
  downtime_duration?: DurationSDKType;
}
/** Downtime defines a single downtime record. */
export interface Downtime {
  /** block defines the block that took time to produce. */
  block: Long;
  /**
   * duration defines the time elapsed between the previous block and this one.
   * this defines the effective downtime duration.
   */
  duration?: Duration;
}
/** Downtime defines a single downtime record. */
export interface DowntimeSDKType {
  block: Long;
  duration?: DurationSDKType;
}
/**
 * DowntimeGarbageCollection defines when garbage collection will be performed, for a specific downtime.
 * used only in genesis.
 */
export interface DowntimeGarbageCollection {
  /** block defines the block that references a Downtime. */
  block: Long;
  /** gc_time defines the block when garbage collection will be performed. */
  gcBlock: Long;
}
/**
 * DowntimeGarbageCollection defines when garbage collection will be performed, for a specific downtime.
 * used only in genesis.
 */
export interface DowntimeGarbageCollectionSDKType {
  block: Long;
  gc_block: Long;
}
function createBaseParams(): Params {
  return {
    downtimeDuration: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.downtimeDuration !== undefined) {
      Duration.encode(message.downtimeDuration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
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
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.downtimeDuration = object.downtimeDuration !== undefined && object.downtimeDuration !== null ? Duration.fromPartial(object.downtimeDuration) : undefined;
    return message;
  }
};
function createBaseDowntime(): Downtime {
  return {
    block: Long.UZERO,
    duration: undefined
  };
}
export const Downtime = {
  encode(message: Downtime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Downtime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDowntime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<Downtime>): Downtime {
    const message = createBaseDowntime();
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
function createBaseDowntimeGarbageCollection(): DowntimeGarbageCollection {
  return {
    block: Long.UZERO,
    gcBlock: Long.UZERO
  };
}
export const DowntimeGarbageCollection = {
  encode(message: DowntimeGarbageCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    if (!message.gcBlock.isZero()) {
      writer.uint32(16).uint64(message.gcBlock);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DowntimeGarbageCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDowntimeGarbageCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = (reader.uint64() as Long);
          break;
        case 2:
          message.gcBlock = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DowntimeGarbageCollection>): DowntimeGarbageCollection {
    const message = createBaseDowntimeGarbageCollection();
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.gcBlock = object.gcBlock !== undefined && object.gcBlock !== null ? Long.fromValue(object.gcBlock) : Long.UZERO;
    return message;
  }
};