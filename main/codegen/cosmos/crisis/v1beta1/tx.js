"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgVerifyInvariantResponse = exports.MsgVerifyInvariant = void 0;
var _binary = require("../../../binary");
/** MsgVerifyInvariant represents a message to verify a particular invariance. */

/** MsgVerifyInvariant represents a message to verify a particular invariance. */

/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */

/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */

function createBaseMsgVerifyInvariant() {
  return {
    sender: "",
    invariantModuleName: "",
    invariantRoute: ""
  };
}
var MsgVerifyInvariant = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariantModuleName !== "") {
      writer.uint32(18).string(message.invariantModuleName);
    }
    if (message.invariantRoute !== "") {
      writer.uint32(26).string(message.invariantRoute);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invariantModuleName = reader.string();
          break;
        case 3:
          message.invariantRoute = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$sender, _object$invariantModu, _object$invariantRout;
    var message = createBaseMsgVerifyInvariant();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.invariantModuleName = (_object$invariantModu = object.invariantModuleName) !== null && _object$invariantModu !== void 0 ? _object$invariantModu : "";
    message.invariantRoute = (_object$invariantRout = object.invariantRoute) !== null && _object$invariantRout !== void 0 ? _object$invariantRout : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      sender: object.sender,
      invariantModuleName: object.invariant_module_name,
      invariantRoute: object.invariant_route
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.sender = message.sender;
    obj.invariant_module_name = message.invariantModuleName;
    obj.invariant_route = message.invariantRoute;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgVerifyInvariant.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVerifyInvariant",
      value: MsgVerifyInvariant.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgVerifyInvariant.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgVerifyInvariant.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
      value: MsgVerifyInvariant.encode(message).finish()
    };
  }
};
exports.MsgVerifyInvariant = MsgVerifyInvariant;
function createBaseMsgVerifyInvariantResponse() {
  return {};
}
var MsgVerifyInvariantResponse = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVerifyInvariantResponse();
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
    var message = createBaseMsgVerifyInvariantResponse();
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
    return MsgVerifyInvariantResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVerifyInvariantResponse",
      value: MsgVerifyInvariantResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgVerifyInvariantResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgVerifyInvariantResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
      value: MsgVerifyInvariantResponse.encode(message).finish()
    };
  }
};
exports.MsgVerifyInvariantResponse = MsgVerifyInvariantResponse;