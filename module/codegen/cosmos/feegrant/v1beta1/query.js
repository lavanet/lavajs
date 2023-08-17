import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant } from "./feegrant";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */

/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */

/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */

/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */

/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */

/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */

/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */

/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */

/** QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method. */

/** QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method. */

/** QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method. */

/** QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method. */

function createBaseQueryAllowanceRequest() {
  return {
    granter: "",
    grantee: ""
  };
}
export const QueryAllowanceRequest = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
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
    const message = createBaseQueryAllowanceRequest();
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
    var _object$granter, _object$grantee;
    const message = createBaseQueryAllowanceRequest();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
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
    return QueryAllowanceRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAllowanceRequest",
      value: QueryAllowanceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllowanceRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllowanceRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
      value: QueryAllowanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllowanceResponse() {
  return {
    allowance: Grant.fromPartial({})
  };
}
export const QueryAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.allowance !== undefined) {
      Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllowanceResponse();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Grant.fromPartial(object.allowance) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      allowance: object !== null && object !== void 0 && object.allowance ? Grant.fromAmino(object.allowance) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.allowance = message.allowance ? Grant.toAmino(message.allowance) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAllowanceResponse",
      value: QueryAllowanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllowanceResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
      value: QueryAllowanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllowancesRequest() {
  return {
    grantee: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllowancesRequest = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
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
    const message = createBaseQueryAllowancesRequest();
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
    const message = createBaseQueryAllowancesRequest();
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
    return QueryAllowancesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAllowancesRequest",
      value: QueryAllowancesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllowancesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllowancesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
      value: QueryAllowancesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllowancesResponse() {
  return {
    allowances: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllowancesResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.allowances) {
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
    const message = createBaseQueryAllowancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
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
    var _object$allowances;
    const message = createBaseQueryAllowancesResponse();
    message.allowances = ((_object$allowances = object.allowances) === null || _object$allowances === void 0 ? void 0 : _object$allowances.map(e => Grant.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      allowances: Array.isArray(object === null || object === void 0 ? void 0 : object.allowances) ? object.allowances.map(e => Grant.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toAmino(e) : undefined);
    } else {
      obj.allowances = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllowancesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAllowancesResponse",
      value: QueryAllowancesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllowancesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllowancesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
      value: QueryAllowancesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllowancesByGranterRequest() {
  return {
    granter: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllowancesByGranterRequest = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
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
    const message = createBaseQueryAllowancesByGranterRequest();
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
    const message = createBaseQueryAllowancesByGranterRequest();
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
    return QueryAllowancesByGranterRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAllowancesByGranterRequest",
      value: QueryAllowancesByGranterRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllowancesByGranterRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllowancesByGranterRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
      value: QueryAllowancesByGranterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllowancesByGranterResponse() {
  return {
    allowances: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllowancesByGranterResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.allowances) {
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
    const message = createBaseQueryAllowancesByGranterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
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
    var _object$allowances2;
    const message = createBaseQueryAllowancesByGranterResponse();
    message.allowances = ((_object$allowances2 = object.allowances) === null || _object$allowances2 === void 0 ? void 0 : _object$allowances2.map(e => Grant.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      allowances: Array.isArray(object === null || object === void 0 ? void 0 : object.allowances) ? object.allowances.map(e => Grant.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toAmino(e) : undefined);
    } else {
      obj.allowances = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllowancesByGranterResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAllowancesByGranterResponse",
      value: QueryAllowancesByGranterResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllowancesByGranterResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllowancesByGranterResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
      value: QueryAllowancesByGranterResponse.encode(message).finish()
    };
  }
};