"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.DowntimeGarbageCollection = exports.Downtime = void 0;
var _duration = require("../../../../google/protobuf/duration");
var _binary = require("../../../../binary");
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
    downtimeDuration: _duration.Duration.fromPartial({})
  };
}
var Params = {
  typeUrl: "/lavanet.lava.downtime.v1.Params",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.downtimeDuration !== undefined) {
      _duration.Duration.encode(message.downtimeDuration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtimeDuration = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseParams();
    message.downtimeDuration = object.downtimeDuration !== undefined && object.downtimeDuration !== null ? _duration.Duration.fromPartial(object.downtimeDuration) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      downtimeDuration: object !== null && object !== void 0 && object.downtime_duration ? _duration.Duration.fromAmino(object.downtime_duration) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.downtime_duration = message.downtimeDuration ? _duration.Duration.toAmino(message.downtimeDuration) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto: function toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
exports.Params = Params;
function createBaseDowntime() {
  return {
    block: BigInt(0),
    duration: _duration.Duration.fromPartial({})
  };
}
var Downtime = {
  typeUrl: "/lavanet.lava.downtime.v1.Downtime",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDowntime();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        case 2:
          message.duration = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseDowntime();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      block: BigInt(object.block),
      duration: object !== null && object !== void 0 && object.duration ? _duration.Duration.fromAmino(object.duration) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block = message.block ? message.block.toString() : undefined;
    obj.duration = message.duration ? _duration.Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Downtime.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Downtime.decode(message.value);
  },
  toProto: function toProto(message) {
    return Downtime.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.Downtime",
      value: Downtime.encode(message).finish()
    };
  }
};
exports.Downtime = Downtime;
function createBaseDowntimeGarbageCollection() {
  return {
    block: BigInt(0),
    gcBlock: BigInt(0)
  };
}
var DowntimeGarbageCollection = {
  typeUrl: "/lavanet.lava.downtime.v1.DowntimeGarbageCollection",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.gcBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.gcBlock);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDowntimeGarbageCollection();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var message = createBaseDowntimeGarbageCollection();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.gcBlock = object.gcBlock !== undefined && object.gcBlock !== null ? BigInt(object.gcBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      block: BigInt(object.block),
      gcBlock: BigInt(object.gc_block)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block = message.block ? message.block.toString() : undefined;
    obj.gc_block = message.gcBlock ? message.gcBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DowntimeGarbageCollection.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DowntimeGarbageCollection.decode(message.value);
  },
  toProto: function toProto(message) {
    return DowntimeGarbageCollection.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.DowntimeGarbageCollection",
      value: DowntimeGarbageCollection.encode(message).finish()
    };
  }
};
exports.DowntimeGarbageCollection = DowntimeGarbageCollection;