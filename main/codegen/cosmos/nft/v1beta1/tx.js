"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSendResponse = exports.MsgSend = void 0;
var _binary = require("../../../binary");
/** MsgSend represents a message to send a nft from one account to another account. */

/** MsgSend represents a message to send a nft from one account to another account. */

/** MsgSendResponse defines the Msg/Send response type. */

/** MsgSendResponse defines the Msg/Send response type. */

function createBaseMsgSend() {
  return {
    classId: "",
    id: "",
    sender: "",
    receiver: ""
  };
}
var MsgSend = {
  typeUrl: "/cosmos.nft.v1beta1.MsgSend",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSend();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$classId, _object$id, _object$sender, _object$receiver;
    var message = createBaseMsgSend();
    message.classId = (_object$classId = object.classId) !== null && _object$classId !== void 0 ? _object$classId : "";
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.receiver = (_object$receiver = object.receiver) !== null && _object$receiver !== void 0 ? _object$receiver : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      classId: object.class_id,
      id: object.id,
      sender: object.sender,
      receiver: object.receiver
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgSend.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgNFTSend",
      value: MsgSend.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSend.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSend.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.MsgSend",
      value: MsgSend.encode(message).finish()
    };
  }
};
exports.MsgSend = MsgSend;
function createBaseMsgSendResponse() {
  return {};
}
var MsgSendResponse = {
  typeUrl: "/cosmos.nft.v1beta1.MsgSendResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSendResponse();
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
    var message = createBaseMsgSendResponse();
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
    return MsgSendResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSendResponse",
      value: MsgSendResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSendResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSendResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.MsgSendResponse",
      value: MsgSendResponse.encode(message).finish()
    };
  }
};
exports.MsgSendResponse = MsgSendResponse;