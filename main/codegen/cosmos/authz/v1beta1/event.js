"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventRevoke = exports.EventGrant = void 0;
var _binary = require("../../../binary");
/** EventGrant is emitted on Msg/Grant */

/** EventGrant is emitted on Msg/Grant */

/** EventRevoke is emitted on Msg/Revoke */

/** EventRevoke is emitted on Msg/Revoke */

function createBaseEventGrant() {
  return {
    msgTypeUrl: "",
    granter: "",
    grantee: ""
  };
}
var EventGrant = {
  typeUrl: "/cosmos.authz.v1beta1.EventGrant",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.msgTypeUrl !== "") {
      writer.uint32(18).string(message.msgTypeUrl);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventGrant();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msgTypeUrl = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$msgTypeUrl, _object$granter, _object$grantee;
    var message = createBaseEventGrant();
    message.msgTypeUrl = (_object$msgTypeUrl = object.msgTypeUrl) !== null && _object$msgTypeUrl !== void 0 ? _object$msgTypeUrl : "";
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      msgTypeUrl: object.msg_type_url,
      granter: object.granter,
      grantee: object.grantee
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.msg_type_url = message.msgTypeUrl;
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventGrant.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventGrant",
      value: EventGrant.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventGrant.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventGrant.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventGrant",
      value: EventGrant.encode(message).finish()
    };
  }
};
exports.EventGrant = EventGrant;
function createBaseEventRevoke() {
  return {
    msgTypeUrl: "",
    granter: "",
    grantee: ""
  };
}
var EventRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.msgTypeUrl !== "") {
      writer.uint32(18).string(message.msgTypeUrl);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventRevoke();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msgTypeUrl = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$msgTypeUrl2, _object$granter2, _object$grantee2;
    var message = createBaseEventRevoke();
    message.msgTypeUrl = (_object$msgTypeUrl2 = object.msgTypeUrl) !== null && _object$msgTypeUrl2 !== void 0 ? _object$msgTypeUrl2 : "";
    message.granter = (_object$granter2 = object.granter) !== null && _object$granter2 !== void 0 ? _object$granter2 : "";
    message.grantee = (_object$grantee2 = object.grantee) !== null && _object$grantee2 !== void 0 ? _object$grantee2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      msgTypeUrl: object.msg_type_url,
      granter: object.granter,
      grantee: object.grantee
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.msg_type_url = message.msgTypeUrl;
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventRevoke.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventRevoke",
      value: EventRevoke.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventRevoke.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventRevoke.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
      value: EventRevoke.encode(message).finish()
    };
  }
};
exports.EventRevoke = EventRevoke;