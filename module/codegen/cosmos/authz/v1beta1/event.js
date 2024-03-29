import { BinaryReader, BinaryWriter } from "../../../binary";
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
export const EventGrant = {
  typeUrl: "/cosmos.authz.v1beta1.EventGrant",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$msgTypeUrl, _object$granter, _object$grantee;
    const message = createBaseEventGrant();
    message.msgTypeUrl = (_object$msgTypeUrl = object.msgTypeUrl) !== null && _object$msgTypeUrl !== void 0 ? _object$msgTypeUrl : "";
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    return message;
  },
  fromAmino(object) {
    return {
      msgTypeUrl: object.msg_type_url,
      granter: object.granter,
      grantee: object.grantee
    };
  },
  toAmino(message) {
    const obj = {};
    obj.msg_type_url = message.msgTypeUrl;
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object) {
    return EventGrant.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventGrant",
      value: EventGrant.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return EventGrant.decode(message.value);
  },
  toProto(message) {
    return EventGrant.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventGrant",
      value: EventGrant.encode(message).finish()
    };
  }
};
function createBaseEventRevoke() {
  return {
    msgTypeUrl: "",
    granter: "",
    grantee: ""
  };
}
export const EventRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$msgTypeUrl2, _object$granter2, _object$grantee2;
    const message = createBaseEventRevoke();
    message.msgTypeUrl = (_object$msgTypeUrl2 = object.msgTypeUrl) !== null && _object$msgTypeUrl2 !== void 0 ? _object$msgTypeUrl2 : "";
    message.granter = (_object$granter2 = object.granter) !== null && _object$granter2 !== void 0 ? _object$granter2 : "";
    message.grantee = (_object$grantee2 = object.grantee) !== null && _object$grantee2 !== void 0 ? _object$grantee2 : "";
    return message;
  },
  fromAmino(object) {
    return {
      msgTypeUrl: object.msg_type_url,
      granter: object.granter,
      grantee: object.grantee
    };
  },
  toAmino(message) {
    const obj = {};
    obj.msg_type_url = message.msgTypeUrl;
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object) {
    return EventRevoke.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventRevoke",
      value: EventRevoke.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return EventRevoke.decode(message.value);
  },
  toProto(message) {
    return EventRevoke.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
      value: EventRevoke.encode(message).finish()
    };
  }
};