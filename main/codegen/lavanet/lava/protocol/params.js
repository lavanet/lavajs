"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Version = exports.Params = void 0;
var _binary = require("../../../binary");
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseVersion() {
  return {
    providerTarget: "",
    providerMin: "",
    consumerTarget: "",
    consumerMin: ""
  };
}
var Version = {
  typeUrl: "/lavanet.lava.protocol.Version",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.providerTarget !== "") {
      writer.uint32(10).string(message.providerTarget);
    }
    if (message.providerMin !== "") {
      writer.uint32(18).string(message.providerMin);
    }
    if (message.consumerTarget !== "") {
      writer.uint32(26).string(message.consumerTarget);
    }
    if (message.consumerMin !== "") {
      writer.uint32(34).string(message.consumerMin);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersion();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerTarget = reader.string();
          break;
        case 2:
          message.providerMin = reader.string();
          break;
        case 3:
          message.consumerTarget = reader.string();
          break;
        case 4:
          message.consumerMin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$providerTarge, _object$providerMin, _object$consumerTarge, _object$consumerMin;
    var message = createBaseVersion();
    message.providerTarget = (_object$providerTarge = object.providerTarget) !== null && _object$providerTarge !== void 0 ? _object$providerTarge : "";
    message.providerMin = (_object$providerMin = object.providerMin) !== null && _object$providerMin !== void 0 ? _object$providerMin : "";
    message.consumerTarget = (_object$consumerTarge = object.consumerTarget) !== null && _object$consumerTarge !== void 0 ? _object$consumerTarge : "";
    message.consumerMin = (_object$consumerMin = object.consumerMin) !== null && _object$consumerMin !== void 0 ? _object$consumerMin : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      providerTarget: object.provider_target,
      providerMin: object.provider_min,
      consumerTarget: object.consumer_target,
      consumerMin: object.consumer_min
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.provider_target = message.providerTarget;
    obj.provider_min = message.providerMin;
    obj.consumer_target = message.consumerTarget;
    obj.consumer_min = message.consumerMin;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Version.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Version.decode(message.value);
  },
  toProto: function toProto(message) {
    return Version.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.protocol.Version",
      value: Version.encode(message).finish()
    };
  }
};
exports.Version = Version;
function createBaseParams() {
  return {
    version: Version.fromPartial({})
  };
}
var Params = {
  typeUrl: "/lavanet.lava.protocol.Params",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
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
          message.version = Version.decode(reader, reader.uint32());
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
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      version: object !== null && object !== void 0 && object.version ? Version.fromAmino(object.version) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.version = message.version ? Version.toAmino(message.version) : undefined;
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
      typeUrl: "/lavanet.lava.protocol.Params",
      value: Params.encode(message).finish()
    };
  }
};
exports.Params = Params;