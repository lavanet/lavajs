import { Duration, DurationSDKType } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Params defines the parameters of the downtime module. */
export interface Params {
  /**
   * downtime_duration defines the minimum time elapsed between blocks
   * that we consider the chain to be down.
   */
  downtimeDuration: Duration;
}
/** Params defines the parameters of the downtime module. */
export interface ParamsSDKType {
  downtime_duration: DurationSDKType;
}
/** Downtime defines a single downtime record. */
export interface Downtime {
  /** block defines the block that took time to produce. */
  block: bigint;
  /**
   * duration defines the time elapsed between the previous block and this one.
   * this defines the effective downtime duration.
   */
  duration: Duration;
}
/** Downtime defines a single downtime record. */
export interface DowntimeSDKType {
  block: bigint;
  duration: DurationSDKType;
}
/**
 * DowntimeGarbageCollection defines when garbage collection will be performed, for a specific downtime.
 * used only in genesis.
 */
export interface DowntimeGarbageCollection {
  /** block defines the block that references a Downtime. */
  block: bigint;
  /** gc_time defines the block when garbage collection will be performed. */
  gcBlock: bigint;
}
/**
 * DowntimeGarbageCollection defines when garbage collection will be performed, for a specific downtime.
 * used only in genesis.
 */
export interface DowntimeGarbageCollectionSDKType {
  block: bigint;
  gc_block: bigint;
}
function createBaseParams(): Params {
  return {
    downtimeDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.downtime.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.downtimeDuration !== undefined) {
      Duration.encode(message.downtimeDuration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.downtimeDuration = object.downtimeDuration !== undefined && object.downtimeDuration !== null ? Duration.fromPartial(object.downtimeDuration) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      downtimeDuration: object?.downtime_duration ? Duration.fromAmino(object.downtime_duration) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.downtime_duration = message.downtimeDuration ? Duration.toAmino(message.downtimeDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseDowntime(): Downtime {
  return {
    block: BigInt(0),
    duration: Duration.fromPartial({})
  };
}
export const Downtime = {
  typeUrl: "/lavanet.lava.downtime.v1.Downtime",
  encode(message: Downtime, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Downtime {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Downtime>): Downtime {
    const message = createBaseDowntime();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino(object: DowntimeAmino): Downtime {
    return {
      block: BigInt(object.block),
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
    };
  },
  toAmino(message: Downtime): DowntimeAmino {
    const obj: any = {};
    obj.block = message.block ? message.block.toString() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: DowntimeAminoMsg): Downtime {
    return Downtime.fromAmino(object.value);
  },
  fromProtoMsg(message: DowntimeProtoMsg): Downtime {
    return Downtime.decode(message.value);
  },
  toProto(message: Downtime): Uint8Array {
    return Downtime.encode(message).finish();
  },
  toProtoMsg(message: Downtime): DowntimeProtoMsg {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.Downtime",
      value: Downtime.encode(message).finish()
    };
  }
};
function createBaseDowntimeGarbageCollection(): DowntimeGarbageCollection {
  return {
    block: BigInt(0),
    gcBlock: BigInt(0)
  };
}
export const DowntimeGarbageCollection = {
  typeUrl: "/lavanet.lava.downtime.v1.DowntimeGarbageCollection",
  encode(message: DowntimeGarbageCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.gcBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.gcBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DowntimeGarbageCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<DowntimeGarbageCollection>): DowntimeGarbageCollection {
    const message = createBaseDowntimeGarbageCollection();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.gcBlock = object.gcBlock !== undefined && object.gcBlock !== null ? BigInt(object.gcBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DowntimeGarbageCollectionAmino): DowntimeGarbageCollection {
    return {
      block: BigInt(object.block),
      gcBlock: BigInt(object.gc_block)
    };
  },
  toAmino(message: DowntimeGarbageCollection): DowntimeGarbageCollectionAmino {
    const obj: any = {};
    obj.block = message.block ? message.block.toString() : undefined;
    obj.gc_block = message.gcBlock ? message.gcBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DowntimeGarbageCollectionAminoMsg): DowntimeGarbageCollection {
    return DowntimeGarbageCollection.fromAmino(object.value);
  },
  fromProtoMsg(message: DowntimeGarbageCollectionProtoMsg): DowntimeGarbageCollection {
    return DowntimeGarbageCollection.decode(message.value);
  },
  toProto(message: DowntimeGarbageCollection): Uint8Array {
    return DowntimeGarbageCollection.encode(message).finish();
  },
  toProtoMsg(message: DowntimeGarbageCollection): DowntimeGarbageCollectionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.DowntimeGarbageCollection",
      value: DowntimeGarbageCollection.encode(message).finish()
    };
  }
};