import { Duration } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
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
    downtimeDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.downtime.v1.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.downtimeDuration !== undefined) {
      Duration.encode(message.downtimeDuration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseParams();
    message.downtimeDuration = object.downtimeDuration !== undefined && object.downtimeDuration !== null ? Duration.fromPartial(object.downtimeDuration) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      downtimeDuration: object !== null && object !== void 0 && object.downtime_duration ? Duration.fromAmino(object.downtime_duration) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.downtime_duration = message.downtimeDuration ? Duration.toAmino(message.downtimeDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseDowntime() {
  return {
    block: BigInt(0),
    duration: Duration.fromPartial({})
  };
}
export const Downtime = {
  typeUrl: "/lavanet.lava.downtime.v1.Downtime",
  encode(message, writer = BinaryWriter.create()) {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseDowntime();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      block: BigInt(object.block),
      duration: object !== null && object !== void 0 && object.duration ? Duration.fromAmino(object.duration) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.block = message.block ? message.block.toString() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Downtime.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Downtime.decode(message.value);
  },
  toProto(message) {
    return Downtime.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.Downtime",
      value: Downtime.encode(message).finish()
    };
  }
};
function createBaseDowntimeGarbageCollection() {
  return {
    block: BigInt(0),
    gcBlock: BigInt(0)
  };
}
export const DowntimeGarbageCollection = {
  typeUrl: "/lavanet.lava.downtime.v1.DowntimeGarbageCollection",
  encode(message, writer = BinaryWriter.create()) {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.gcBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.gcBlock);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseDowntimeGarbageCollection();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.gcBlock = object.gcBlock !== undefined && object.gcBlock !== null ? BigInt(object.gcBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      block: BigInt(object.block),
      gcBlock: BigInt(object.gc_block)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.block = message.block ? message.block.toString() : undefined;
    obj.gc_block = message.gcBlock ? message.gcBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return DowntimeGarbageCollection.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DowntimeGarbageCollection.decode(message.value);
  },
  toProto(message) {
    return DowntimeGarbageCollection.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.DowntimeGarbageCollection",
      value: DowntimeGarbageCollection.encode(message).finish()
    };
  }
};