import { Params } from "./params";
import { Subscription } from "./subscription";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryParamsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
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
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentRequest() {
  return {
    consumer: ""
  };
}
export const QueryCurrentRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryCurrentRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$consumer;
    const message = createBaseQueryCurrentRequest();
    message.consumer = (_object$consumer = object.consumer) !== null && _object$consumer !== void 0 ? _object$consumer : "";
    return message;
  },
  fromAmino(object) {
    return {
      consumer: object.consumer
    };
  },
  toAmino(message) {
    const obj = {};
    obj.consumer = message.consumer;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCurrentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryCurrentRequest.decode(message.value);
  },
  toProto(message) {
    return QueryCurrentRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryCurrentRequest",
      value: QueryCurrentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentResponse() {
  return {
    sub: undefined
  };
}
export const QueryCurrentResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryCurrentResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.sub !== undefined) {
      Subscription.encode(message.sub, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sub = Subscription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCurrentResponse();
    message.sub = object.sub !== undefined && object.sub !== null ? Subscription.fromPartial(object.sub) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      sub: object !== null && object !== void 0 && object.sub ? Subscription.fromAmino(object.sub) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.sub = message.sub ? Subscription.toAmino(message.sub) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCurrentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryCurrentResponse.decode(message.value);
  },
  toProto(message) {
    return QueryCurrentResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryCurrentResponse",
      value: QueryCurrentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListProjectsRequest() {
  return {
    subscription: ""
  };
}
export const QueryListProjectsRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryListProjectsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.subscription !== "") {
      writer.uint32(10).string(message.subscription);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProjectsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$subscription;
    const message = createBaseQueryListProjectsRequest();
    message.subscription = (_object$subscription = object.subscription) !== null && _object$subscription !== void 0 ? _object$subscription : "";
    return message;
  },
  fromAmino(object) {
    return {
      subscription: object.subscription
    };
  },
  toAmino(message) {
    const obj = {};
    obj.subscription = message.subscription;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryListProjectsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryListProjectsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryListProjectsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListProjectsRequest",
      value: QueryListProjectsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListProjectsResponse() {
  return {
    projects: []
  };
}
export const QueryListProjectsResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryListProjectsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.projects) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProjectsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projects.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$projects;
    const message = createBaseQueryListProjectsResponse();
    message.projects = ((_object$projects = object.projects) === null || _object$projects === void 0 ? void 0 : _object$projects.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      projects: Array.isArray(object === null || object === void 0 ? void 0 : object.projects) ? object.projects.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e);
    } else {
      obj.projects = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryListProjectsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryListProjectsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryListProjectsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListProjectsResponse",
      value: QueryListProjectsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListRequest() {
  return {};
}
export const QueryListRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryListRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRequest();
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
    const message = createBaseQueryListRequest();
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
    return QueryListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryListRequest.decode(message.value);
  },
  toProto(message) {
    return QueryListRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListRequest",
      value: QueryListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListResponse() {
  return {
    subsInfo: []
  };
}
export const QueryListResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryListResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.subsInfo) {
      ListInfoStruct.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subsInfo.push(ListInfoStruct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$subsInfo;
    const message = createBaseQueryListResponse();
    message.subsInfo = ((_object$subsInfo = object.subsInfo) === null || _object$subsInfo === void 0 ? void 0 : _object$subsInfo.map(e => ListInfoStruct.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      subsInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.subs_info) ? object.subs_info.map(e => ListInfoStruct.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.subsInfo) {
      obj.subs_info = message.subsInfo.map(e => e ? ListInfoStruct.toAmino(e) : undefined);
    } else {
      obj.subs_info = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryListResponse.decode(message.value);
  },
  toProto(message) {
    return QueryListResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListResponse",
      value: QueryListResponse.encode(message).finish()
    };
  }
};
function createBaseListInfoStruct() {
  return {
    consumer: "",
    plan: "",
    durationTotal: BigInt(0),
    durationLeft: BigInt(0),
    monthExpiry: BigInt(0),
    monthCuTotal: BigInt(0),
    monthCuLeft: BigInt(0)
  };
}
export const ListInfoStruct = {
  typeUrl: "/lavanet.lava.subscription.ListInfoStruct",
  encode(message, writer = BinaryWriter.create()) {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    if (message.plan !== "") {
      writer.uint32(18).string(message.plan);
    }
    if (message.durationTotal !== BigInt(0)) {
      writer.uint32(24).uint64(message.durationTotal);
    }
    if (message.durationLeft !== BigInt(0)) {
      writer.uint32(32).uint64(message.durationLeft);
    }
    if (message.monthExpiry !== BigInt(0)) {
      writer.uint32(40).uint64(message.monthExpiry);
    }
    if (message.monthCuTotal !== BigInt(0)) {
      writer.uint32(48).uint64(message.monthCuTotal);
    }
    if (message.monthCuLeft !== BigInt(0)) {
      writer.uint32(56).uint64(message.monthCuLeft);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInfoStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        case 2:
          message.plan = reader.string();
          break;
        case 3:
          message.durationTotal = reader.uint64();
          break;
        case 4:
          message.durationLeft = reader.uint64();
          break;
        case 5:
          message.monthExpiry = reader.uint64();
          break;
        case 6:
          message.monthCuTotal = reader.uint64();
          break;
        case 7:
          message.monthCuLeft = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$consumer2, _object$plan;
    const message = createBaseListInfoStruct();
    message.consumer = (_object$consumer2 = object.consumer) !== null && _object$consumer2 !== void 0 ? _object$consumer2 : "";
    message.plan = (_object$plan = object.plan) !== null && _object$plan !== void 0 ? _object$plan : "";
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? BigInt(object.durationTotal.toString()) : BigInt(0);
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? BigInt(object.durationLeft.toString()) : BigInt(0);
    message.monthExpiry = object.monthExpiry !== undefined && object.monthExpiry !== null ? BigInt(object.monthExpiry.toString()) : BigInt(0);
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? BigInt(object.monthCuTotal.toString()) : BigInt(0);
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? BigInt(object.monthCuLeft.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      consumer: object.consumer,
      plan: object.plan,
      durationTotal: BigInt(object.duration_total),
      durationLeft: BigInt(object.duration_left),
      monthExpiry: BigInt(object.month_expiry),
      monthCuTotal: BigInt(object.month_cu_total),
      monthCuLeft: BigInt(object.month_cu_left)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.consumer = message.consumer;
    obj.plan = message.plan;
    obj.duration_total = message.durationTotal ? message.durationTotal.toString() : undefined;
    obj.duration_left = message.durationLeft ? message.durationLeft.toString() : undefined;
    obj.month_expiry = message.monthExpiry ? message.monthExpiry.toString() : undefined;
    obj.month_cu_total = message.monthCuTotal ? message.monthCuTotal.toString() : undefined;
    obj.month_cu_left = message.monthCuLeft ? message.monthCuLeft.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return ListInfoStruct.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ListInfoStruct.decode(message.value);
  },
  toProto(message) {
    return ListInfoStruct.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.ListInfoStruct",
      value: ListInfoStruct.encode(message).finish()
    };
  }
};