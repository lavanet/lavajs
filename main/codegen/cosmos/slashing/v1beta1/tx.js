"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUnjailResponse = exports.MsgUnjail = void 0;
var _binary = require("../../../binary");
/** MsgUnjail defines the Msg/Unjail request type */

/** MsgUnjail defines the Msg/Unjail request type */

/** MsgUnjailResponse defines the Msg/Unjail response type */

/** MsgUnjailResponse defines the Msg/Unjail response type */

function createBaseMsgUnjail() {
  return {
    validatorAddr: ""
  };
}
var MsgUnjail = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUnjail();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr;
    var message = createBaseMsgUnjail();
    message.validatorAddr = (_object$validatorAddr = object.validatorAddr) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddr: object.validator_addr
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgUnjail.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUnjail",
      value: MsgUnjail.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgUnjail.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgUnjail.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
      value: MsgUnjail.encode(message).finish()
    };
  }
};
exports.MsgUnjail = MsgUnjail;
function createBaseMsgUnjailResponse() {
  return {};
}
var MsgUnjailResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUnjailResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUnjailResponse();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgUnjailResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUnjailResponse",
      value: MsgUnjailResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgUnjailResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgUnjailResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
      value: MsgUnjailResponse.encode(message).finish()
    };
  }
};
exports.MsgUnjailResponse = MsgUnjailResponse;