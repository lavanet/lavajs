import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAuthorization } from "./authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$granter, _object$grantee, _object$msgTypeUrl;
    const message = createBaseQueryGrantsRequest();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.msgTypeUrl = (_object$msgTypeUrl = object.msgTypeUrl) !== null && _object$msgTypeUrl !== void 0 ? _object$msgTypeUrl : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      granter: object.granter,
      grantee: object.grantee,
      msgTypeUrl: object.msg_type_url,
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.msg_type_url = message.msgTypeUrl;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGrantsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGrantsRequest",
      value: QueryGrantsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGrantsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
      value: QueryGrantsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGrantsResponse() {
  return {
    grants: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.grants) {
      Grant.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$grants;
    const message = createBaseQueryGrantsResponse();
    message.grants = ((_object$grants = object.grants) === null || _object$grants === void 0 ? void 0 : _object$grants.map(e => Grant.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(e => Grant.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? Grant.toAmino(e) : undefined);
    } else {
      obj.grants = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGrantsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGrantsResponse",
      value: QueryGrantsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGrantsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
      value: QueryGrantsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGranterGrantsRequest() {
  return {
    granter: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryGranterGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$granter2;
    const message = createBaseQueryGranterGrantsRequest();
    message.granter = (_object$granter2 = object.granter) !== null && _object$granter2 !== void 0 ? _object$granter2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      granter: object.granter,
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGranterGrantsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGranterGrantsRequest",
      value: QueryGranterGrantsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGranterGrantsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGranterGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest",
      value: QueryGranterGrantsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGranterGrantsResponse() {
  return {
    grants: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryGranterGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.grants) {
      GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$grants2;
    const message = createBaseQueryGranterGrantsResponse();
    message.grants = ((_object$grants2 = object.grants) === null || _object$grants2 === void 0 ? void 0 : _object$grants2.map(e => GrantAuthorization.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(e => GrantAuthorization.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
    } else {
      obj.grants = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGranterGrantsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGranterGrantsResponse",
      value: QueryGranterGrantsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGranterGrantsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGranterGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse",
      value: QueryGranterGrantsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGranteeGrantsRequest() {
  return {
    grantee: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryGranteeGrantsRequest = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$grantee2;
    const message = createBaseQueryGranteeGrantsRequest();
    message.grantee = (_object$grantee2 = object.grantee) !== null && _object$grantee2 !== void 0 ? _object$grantee2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      grantee: object.grantee,
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.grantee = message.grantee;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGranteeGrantsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGranteeGrantsRequest",
      value: QueryGranteeGrantsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGranteeGrantsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGranteeGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest",
      value: QueryGranteeGrantsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGranteeGrantsResponse() {
  return {
    grants: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryGranteeGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.grants) {
      GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$grants3;
    const message = createBaseQueryGranteeGrantsResponse();
    message.grants = ((_object$grants3 = object.grants) === null || _object$grants3 === void 0 ? void 0 : _object$grants3.map(e => GrantAuthorization.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      grants: Array.isArray(object === null || object === void 0 ? void 0 : object.grants) ? object.grants.map(e => GrantAuthorization.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
    } else {
      obj.grants = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGranteeGrantsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryGranteeGrantsResponse",
      value: QueryGranteeGrantsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryGranteeGrantsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGranteeGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse",
      value: QueryGranteeGrantsResponse.encode(message).finish()
    };
  }
};