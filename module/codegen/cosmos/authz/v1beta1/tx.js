import { Grant } from "./authz";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */

/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */

/** MsgExecResponse defines the Msg/MsgExecResponse response type. */

/** MsgExecResponse defines the Msg/MsgExecResponse response type. */

/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */

/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */

/** MsgGrantResponse defines the Msg/MsgGrant response type. */

/** MsgGrantResponse defines the Msg/MsgGrant response type. */

/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */

/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */

/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */

/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */

function createBaseMsgGrant() {
  return {
    granter: "",
    grantee: "",
    grant: undefined
  };
}
export const MsgGrant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
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
          message.grant = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      grant: isSet(object.grant) ? Grant.fromJSON(object.grant) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.grant !== undefined && (obj.grant = message.grant ? Grant.toJSON(message.grant) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$granter, _object$grantee;
    const message = createBaseMsgGrant();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
    return message;
  }
};
function createBaseMsgExecResponse() {
  return {
    results: []
  };
}
export const MsgExecResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.results) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      results: Array.isArray(object === null || object === void 0 ? void 0 : object.results) ? object.results.map(e => bytesFromBase64(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.results) {
      obj.results = message.results.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$results;
    const message = createBaseMsgExecResponse();
    message.results = ((_object$results = object.results) === null || _object$results === void 0 ? void 0 : _object$results.map(e => e)) || [];
    return message;
  }
};
function createBaseMsgExec() {
  return {
    grantee: "",
    msgs: []
  };
}
export const MsgExec = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    for (const v of message.msgs) {
      Any.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgs: Array.isArray(object === null || object === void 0 ? void 0 : object.msgs) ? object.msgs.map(e => Any.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$grantee2, _object$msgs;
    const message = createBaseMsgExec();
    message.grantee = (_object$grantee2 = object.grantee) !== null && _object$grantee2 !== void 0 ? _object$grantee2 : "";
    message.msgs = ((_object$msgs = object.msgs) === null || _object$msgs === void 0 ? void 0 : _object$msgs.map(e => Any.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgGrantResponse() {
  return {};
}
export const MsgGrantResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgGrantResponse();
    return message;
  }
};
function createBaseMsgRevoke() {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: ""
  };
}
export const MsgRevoke = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
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
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },
  fromPartial(object) {
    var _object$granter2, _object$grantee3, _object$msgTypeUrl;
    const message = createBaseMsgRevoke();
    message.granter = (_object$granter2 = object.granter) !== null && _object$granter2 !== void 0 ? _object$granter2 : "";
    message.grantee = (_object$grantee3 = object.grantee) !== null && _object$grantee3 !== void 0 ? _object$grantee3 : "";
    message.msgTypeUrl = (_object$msgTypeUrl = object.msgTypeUrl) !== null && _object$msgTypeUrl !== void 0 ? _object$msgTypeUrl : "";
    return message;
  }
};
function createBaseMsgRevokeResponse() {
  return {};
}
export const MsgRevokeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgRevokeResponse();
    return message;
  }
};