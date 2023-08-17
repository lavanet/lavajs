import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Plan } from "./plan";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.plans.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.plans.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.plans.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.plans.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListRequest() {
  return {};
}
export const QueryListRequest = {
  typeUrl: "/lavanet.lava.plans.QueryListRequest",
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
      typeUrl: "/lavanet.lava.plans.QueryListRequest",
      value: QueryListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListResponse() {
  return {
    plansInfo: []
  };
}
export const QueryListResponse = {
  typeUrl: "/lavanet.lava.plans.QueryListResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.plansInfo) {
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
          message.plansInfo.push(ListInfoStruct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$plansInfo;
    const message = createBaseQueryListResponse();
    message.plansInfo = ((_object$plansInfo = object.plansInfo) === null || _object$plansInfo === void 0 ? void 0 : _object$plansInfo.map(e => ListInfoStruct.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      plansInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.plans_info) ? object.plans_info.map(e => ListInfoStruct.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.plansInfo) {
      obj.plans_info = message.plansInfo.map(e => e ? ListInfoStruct.toAmino(e) : undefined);
    } else {
      obj.plans_info = [];
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
      typeUrl: "/lavanet.lava.plans.QueryListResponse",
      value: QueryListResponse.encode(message).finish()
    };
  }
};
function createBaseListInfoStruct() {
  return {
    index: "",
    description: "",
    price: Coin.fromPartial({})
  };
}
export const ListInfoStruct = {
  typeUrl: "/lavanet.lava.plans.ListInfoStruct",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
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
          message.index = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index, _object$description;
    const message = createBaseListInfoStruct();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index,
      description: object.description,
      price: object !== null && object !== void 0 && object.price ? Coin.fromAmino(object.price) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    obj.description = message.description;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
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
      typeUrl: "/lavanet.lava.plans.ListInfoStruct",
      value: ListInfoStruct.encode(message).finish()
    };
  }
};
function createBaseQueryInfoRequest() {
  return {
    planIndex: ""
  };
}
export const QueryInfoRequest = {
  typeUrl: "/lavanet.lava.plans.QueryInfoRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.planIndex !== "") {
      writer.uint32(10).string(message.planIndex);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$planIndex;
    const message = createBaseQueryInfoRequest();
    message.planIndex = (_object$planIndex = object.planIndex) !== null && _object$planIndex !== void 0 ? _object$planIndex : "";
    return message;
  },
  fromAmino(object) {
    return {
      planIndex: object.plan_index
    };
  },
  toAmino(message) {
    const obj = {};
    obj.plan_index = message.planIndex;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.plans.QueryInfoRequest",
      value: QueryInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInfoResponse() {
  return {
    planInfo: Plan.fromPartial({})
  };
}
export const QueryInfoResponse = {
  typeUrl: "/lavanet.lava.plans.QueryInfoResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.planInfo !== undefined) {
      Plan.encode(message.planInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planInfo = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryInfoResponse();
    message.planInfo = object.planInfo !== undefined && object.planInfo !== null ? Plan.fromPartial(object.planInfo) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      planInfo: object !== null && object !== void 0 && object.plan_info ? Plan.fromAmino(object.plan_info) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.plan_info = message.planInfo ? Plan.toAmino(message.planInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.plans.QueryInfoResponse",
      value: QueryInfoResponse.encode(message).finish()
    };
  }
};