import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAuthorization } from "./authz";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */

/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */

/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */

/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */

/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */

/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */

/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */

/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */

/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */

/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */

/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */

/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */

function createBaseQueryGrantsRequest() {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: "",
    pagination: undefined
  };
}
export const QueryGrantsRequest = {
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
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsRequest();
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
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$granter, _object$grantee, _object$msgTypeUrl;
    const message = createBaseQueryGrantsRequest();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.msgTypeUrl = (_object$msgTypeUrl = object.msgTypeUrl) !== null && _object$msgTypeUrl !== void 0 ? _object$msgTypeUrl : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGrantsResponse() {
  return {
    grants: [],
    pagination: undefined
  };
}
export const QueryGrantsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.grants) {
      Grant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(e => Grant.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? Grant.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$grants;
    const message = createBaseQueryGrantsResponse();
    message.grants = ((_object$grants = object.grants) === null || _object$grants === void 0 ? void 0 : _object$grants.map(e => Grant.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGranterGrantsRequest() {
  return {
    granter: "",
    pagination: undefined
  };
}
export const QueryGranterGrantsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranterGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$granter2;
    const message = createBaseQueryGranterGrantsRequest();
    message.granter = (_object$granter2 = object.granter) !== null && _object$granter2 !== void 0 ? _object$granter2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGranterGrantsResponse() {
  return {
    grants: [],
    pagination: undefined
  };
}
export const QueryGranterGrantsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.grants) {
      GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranterGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(e => GrantAuthorization.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$grants2;
    const message = createBaseQueryGranterGrantsResponse();
    message.grants = ((_object$grants2 = object.grants) === null || _object$grants2 === void 0 ? void 0 : _object$grants2.map(e => GrantAuthorization.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGranteeGrantsRequest() {
  return {
    grantee: "",
    pagination: undefined
  };
}
export const QueryGranteeGrantsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$grantee2;
    const message = createBaseQueryGranteeGrantsRequest();
    message.grantee = (_object$grantee2 = object.grantee) !== null && _object$grantee2 !== void 0 ? _object$grantee2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGranteeGrantsResponse() {
  return {
    grants: [],
    pagination: undefined
  };
}
export const QueryGranteeGrantsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.grants) {
      GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(e => GrantAuthorization.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toJSON(e) : undefined);
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$grants3;
    const message = createBaseQueryGranteeGrantsResponse();
    message.grants = ((_object$grants3 = object.grants) === null || _object$grants3 === void 0 ? void 0 : _object$grants3.map(e => GrantAuthorization.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};