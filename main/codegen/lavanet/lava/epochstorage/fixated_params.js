"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FixatedParams = void 0;
var _binary = require("../../../binary");
function createBaseFixatedParams() {
  return {
    index: "",
    parameter: new Uint8Array(),
    fixationBlock: BigInt(0)
  };
}
var FixatedParams = {
  typeUrl: "/lavanet.lava.epochstorage.FixatedParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.parameter.length !== 0) {
      writer.uint32(18).bytes(message.parameter);
    }
    if (message.fixationBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.fixationBlock);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFixatedParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.parameter = reader.bytes();
          break;
        case 3:
          message.fixationBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$parameter;
    var message = createBaseFixatedParams();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.parameter = (_object$parameter = object.parameter) !== null && _object$parameter !== void 0 ? _object$parameter : new Uint8Array();
    message.fixationBlock = object.fixationBlock !== undefined && object.fixationBlock !== null ? BigInt(object.fixationBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: object.index,
      parameter: object.parameter,
      fixationBlock: BigInt(object.fixationBlock)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index;
    obj.parameter = message.parameter;
    obj.fixationBlock = message.fixationBlock ? message.fixationBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return FixatedParams.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return FixatedParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return FixatedParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.FixatedParams",
      value: FixatedParams.encode(message).finish()
    };
  }
};
exports.FixatedParams = FixatedParams;