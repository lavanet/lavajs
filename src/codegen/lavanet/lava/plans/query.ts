import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Plan, PlanSDKType } from "./plan";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryListRequest {}
export interface QueryListRequestSDKType {}
export interface QueryListResponse {
  plansInfo: ListInfoStruct[];
}
export interface QueryListResponseSDKType {
  plans_info: ListInfoStructSDKType[];
}
export interface ListInfoStruct {
  index: string;
  description: string;
  price: Coin;
}
export interface ListInfoStructSDKType {
  index: string;
  description: string;
  price: CoinSDKType;
}
export interface QueryInfoRequest {
  planIndex: string;
}
export interface QueryInfoRequestSDKType {
  plan_index: string;
}
export interface QueryInfoResponse {
  planInfo: Plan;
}
export interface QueryInfoResponseSDKType {
  plan_info: PlanSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.plans.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lavanet.lava.plans.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListRequest(): QueryListRequest {
  return {};
}
export const QueryListRequest = {
  typeUrl: "/lavanet.lava.plans.QueryListRequest",
  encode(_: QueryListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListRequest {
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
  fromPartial(_: Partial<QueryListRequest>): QueryListRequest {
    const message = createBaseQueryListRequest();
    return message;
  },
  fromAmino(_: QueryListRequestAmino): QueryListRequest {
    return {};
  },
  toAmino(_: QueryListRequest): QueryListRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryListRequestAminoMsg): QueryListRequest {
    return QueryListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListRequestProtoMsg): QueryListRequest {
    return QueryListRequest.decode(message.value);
  },
  toProto(message: QueryListRequest): Uint8Array {
    return QueryListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListRequest): QueryListRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.QueryListRequest",
      value: QueryListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListResponse(): QueryListResponse {
  return {
    plansInfo: []
  };
}
export const QueryListResponse = {
  typeUrl: "/lavanet.lava.plans.QueryListResponse",
  encode(message: QueryListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.plansInfo) {
      ListInfoStruct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListResponse {
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
  fromPartial(object: Partial<QueryListResponse>): QueryListResponse {
    const message = createBaseQueryListResponse();
    message.plansInfo = object.plansInfo?.map(e => ListInfoStruct.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryListResponseAmino): QueryListResponse {
    return {
      plansInfo: Array.isArray(object?.plans_info) ? object.plans_info.map((e: any) => ListInfoStruct.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryListResponse): QueryListResponseAmino {
    const obj: any = {};
    if (message.plansInfo) {
      obj.plans_info = message.plansInfo.map(e => e ? ListInfoStruct.toAmino(e) : undefined);
    } else {
      obj.plans_info = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryListResponseAminoMsg): QueryListResponse {
    return QueryListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListResponseProtoMsg): QueryListResponse {
    return QueryListResponse.decode(message.value);
  },
  toProto(message: QueryListResponse): Uint8Array {
    return QueryListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListResponse): QueryListResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.QueryListResponse",
      value: QueryListResponse.encode(message).finish()
    };
  }
};
function createBaseListInfoStruct(): ListInfoStruct {
  return {
    index: "",
    description: "",
    price: Coin.fromPartial({})
  };
}
export const ListInfoStruct = {
  typeUrl: "/lavanet.lava.plans.ListInfoStruct",
  encode(message: ListInfoStruct, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ListInfoStruct {
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
  fromPartial(object: Partial<ListInfoStruct>): ListInfoStruct {
    const message = createBaseListInfoStruct();
    message.index = object.index ?? "";
    message.description = object.description ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: ListInfoStructAmino): ListInfoStruct {
    return {
      index: object.index,
      description: object.description,
      price: object?.price ? Coin.fromAmino(object.price) : undefined
    };
  },
  toAmino(message: ListInfoStruct): ListInfoStructAmino {
    const obj: any = {};
    obj.index = message.index;
    obj.description = message.description;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListInfoStructAminoMsg): ListInfoStruct {
    return ListInfoStruct.fromAmino(object.value);
  },
  fromProtoMsg(message: ListInfoStructProtoMsg): ListInfoStruct {
    return ListInfoStruct.decode(message.value);
  },
  toProto(message: ListInfoStruct): Uint8Array {
    return ListInfoStruct.encode(message).finish();
  },
  toProtoMsg(message: ListInfoStruct): ListInfoStructProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.ListInfoStruct",
      value: ListInfoStruct.encode(message).finish()
    };
  }
};
function createBaseQueryInfoRequest(): QueryInfoRequest {
  return {
    planIndex: ""
  };
}
export const QueryInfoRequest = {
  typeUrl: "/lavanet.lava.plans.QueryInfoRequest",
  encode(message: QueryInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.planIndex !== "") {
      writer.uint32(10).string(message.planIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInfoRequest {
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
  fromPartial(object: Partial<QueryInfoRequest>): QueryInfoRequest {
    const message = createBaseQueryInfoRequest();
    message.planIndex = object.planIndex ?? "";
    return message;
  },
  fromAmino(object: QueryInfoRequestAmino): QueryInfoRequest {
    return {
      planIndex: object.plan_index
    };
  },
  toAmino(message: QueryInfoRequest): QueryInfoRequestAmino {
    const obj: any = {};
    obj.plan_index = message.planIndex;
    return obj;
  },
  fromAminoMsg(object: QueryInfoRequestAminoMsg): QueryInfoRequest {
    return QueryInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInfoRequestProtoMsg): QueryInfoRequest {
    return QueryInfoRequest.decode(message.value);
  },
  toProto(message: QueryInfoRequest): Uint8Array {
    return QueryInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInfoRequest): QueryInfoRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.QueryInfoRequest",
      value: QueryInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInfoResponse(): QueryInfoResponse {
  return {
    planInfo: Plan.fromPartial({})
  };
}
export const QueryInfoResponse = {
  typeUrl: "/lavanet.lava.plans.QueryInfoResponse",
  encode(message: QueryInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.planInfo !== undefined) {
      Plan.encode(message.planInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInfoResponse {
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
  fromPartial(object: Partial<QueryInfoResponse>): QueryInfoResponse {
    const message = createBaseQueryInfoResponse();
    message.planInfo = object.planInfo !== undefined && object.planInfo !== null ? Plan.fromPartial(object.planInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryInfoResponseAmino): QueryInfoResponse {
    return {
      planInfo: object?.plan_info ? Plan.fromAmino(object.plan_info) : undefined
    };
  },
  toAmino(message: QueryInfoResponse): QueryInfoResponseAmino {
    const obj: any = {};
    obj.plan_info = message.planInfo ? Plan.toAmino(message.planInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInfoResponseAminoMsg): QueryInfoResponse {
    return QueryInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInfoResponseProtoMsg): QueryInfoResponse {
    return QueryInfoResponse.decode(message.value);
  },
  toProto(message: QueryInfoResponse): Uint8Array {
    return QueryInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInfoResponse): QueryInfoResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.QueryInfoResponse",
      value: QueryInfoResponse.encode(message).finish()
    };
  }
};