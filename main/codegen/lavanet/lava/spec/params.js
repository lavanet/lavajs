"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = void 0;
var _binary = require("../../../binary");
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    geolocationCount: BigInt(0),
    maxCU: BigInt(0)
  };
}
var Params = {
  typeUrl: "/lavanet.lava.spec.Params",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.geolocationCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.geolocationCount);
    }
    if (message.maxCU !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxCU);
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
  fromPartial: function fromPartial(object) {
    var message = createBaseParams();
    message.geolocationCount = object.geolocationCount !== undefined && object.geolocationCount !== null ? BigInt(object.geolocationCount.toString()) : BigInt(0);
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? BigInt(object.maxCU.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      geolocationCount: BigInt(object.geolocationCount),
      maxCU: BigInt(object.maxCU)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.geolocationCount = message.geolocationCount ? message.geolocationCount.toString() : undefined;
    obj.maxCU = message.maxCU ? message.maxCU.toString() : undefined;
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
      typeUrl: "/lavanet.lava.spec.Params",
      value: Params.encode(message).finish()
    };
  }
};
exports.Params = Params;