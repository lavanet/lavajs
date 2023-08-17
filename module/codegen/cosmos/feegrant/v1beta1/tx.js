import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */

/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */

/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */

/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */

/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */

/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */

/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */

/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */

function createBaseMsgGrantAllowance() {
  return {
    granter: "",
    grantee: "",
    allowance: Any.fromPartial({})
  };
}
export const MsgGrantAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  encode(message, writer = BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$granter, _object$grantee;
    const message = createBaseMsgGrantAllowance();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      granter: object.granter,
      grantee: object.grantee,
      allowance: object !== null && object !== void 0 && object.allowance ? Any.fromAmino(object.allowance) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.allowance = message.allowance ? Any.toAmino(message.allowance) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgGrantAllowance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgGrantAllowance",
      value: MsgGrantAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgGrantAllowance.decode(message.value);
  },
  toProto(message) {
    return MsgGrantAllowance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
      value: MsgGrantAllowance.encode(message).finish()
    };
  }
};
function createBaseMsgGrantAllowanceResponse() {
  return {};
}
export const MsgGrantAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgGrantAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgGrantAllowanceResponse",
      value: MsgGrantAllowanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgGrantAllowanceResponse.decode(message.value);
  },
  toProto(message) {
    return MsgGrantAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
      value: MsgGrantAllowanceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeAllowance() {
  return {
    granter: "",
    grantee: ""
  };
}
export const MsgRevokeAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
  encode(message, writer = BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
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
    var _object$granter2, _object$grantee2;
    const message = createBaseMsgRevokeAllowance();
    message.granter = (_object$granter2 = object.granter) !== null && _object$granter2 !== void 0 ? _object$granter2 : "";
    message.grantee = (_object$grantee2 = object.grantee) !== null && _object$grantee2 !== void 0 ? _object$grantee2 : "";
    return message;
  },
  fromAmino(object) {
    return {
      granter: object.granter,
      grantee: object.grantee
    };
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRevokeAllowance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRevokeAllowance",
      value: MsgRevokeAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRevokeAllowance.decode(message.value);
  },
  toProto(message) {
    return MsgRevokeAllowance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
      value: MsgRevokeAllowance.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeAllowanceResponse() {
  return {};
}
export const MsgRevokeAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRevokeAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgRevokeAllowanceResponse",
      value: MsgRevokeAllowanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgRevokeAllowanceResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRevokeAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
      value: MsgRevokeAllowanceResponse.encode(message).finish()
    };
  }
};