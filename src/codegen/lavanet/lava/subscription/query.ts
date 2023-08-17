import { Params, ParamsSDKType } from "./params";
import { Subscription, SubscriptionSDKType } from "./subscription";
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
export interface QueryCurrentRequest {
  consumer: string;
}
export interface QueryCurrentRequestSDKType {
  consumer: string;
}
export interface QueryCurrentResponse {
  sub?: Subscription;
}
export interface QueryCurrentResponseSDKType {
  sub?: SubscriptionSDKType;
}
export interface QueryListProjectsRequest {
  subscription: string;
}
export interface QueryListProjectsRequestSDKType {
  subscription: string;
}
export interface QueryListProjectsResponse {
  projects: string[];
}
export interface QueryListProjectsResponseSDKType {
  projects: string[];
}
export interface QueryListRequest {}
export interface QueryListRequestSDKType {}
export interface QueryListResponse {
  subsInfo: ListInfoStruct[];
}
export interface QueryListResponseSDKType {
  subs_info: ListInfoStructSDKType[];
}
export interface ListInfoStruct {
  /** beneficiary consumer */
  consumer: string;
  /** plan assosiated with the subscription */
  plan: string;
  /** total duration in months (purchase/renewal) */
  durationTotal: bigint;
  /** remaining duration in months */
  durationLeft: bigint;
  /** upcoming expiry (of current month) in unix time */
  monthExpiry: bigint;
  /** total CU allowance per month */
  monthCuTotal: bigint;
  /** remaining CU allowance this month */
  monthCuLeft: bigint;
}
export interface ListInfoStructSDKType {
  consumer: string;
  plan: string;
  duration_total: bigint;
  duration_left: bigint;
  month_expiry: bigint;
  month_cu_total: bigint;
  month_cu_left: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.subscription.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.subscription.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.subscription.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentRequest(): QueryCurrentRequest {
  return {
    consumer: ""
  };
}
export const QueryCurrentRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryCurrentRequest",
  encode(message: QueryCurrentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentRequest {
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
  fromPartial(object: Partial<QueryCurrentRequest>): QueryCurrentRequest {
    const message = createBaseQueryCurrentRequest();
    message.consumer = object.consumer ?? "";
    return message;
  },
  fromAmino(object: QueryCurrentRequestAmino): QueryCurrentRequest {
    return {
      consumer: object.consumer
    };
  },
  toAmino(message: QueryCurrentRequest): QueryCurrentRequestAmino {
    const obj: any = {};
    obj.consumer = message.consumer;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentRequestAminoMsg): QueryCurrentRequest {
    return QueryCurrentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentRequestProtoMsg): QueryCurrentRequest {
    return QueryCurrentRequest.decode(message.value);
  },
  toProto(message: QueryCurrentRequest): Uint8Array {
    return QueryCurrentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentRequest): QueryCurrentRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryCurrentRequest",
      value: QueryCurrentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentResponse(): QueryCurrentResponse {
  return {
    sub: undefined
  };
}
export const QueryCurrentResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryCurrentResponse",
  encode(message: QueryCurrentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sub !== undefined) {
      Subscription.encode(message.sub, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentResponse {
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
  fromPartial(object: Partial<QueryCurrentResponse>): QueryCurrentResponse {
    const message = createBaseQueryCurrentResponse();
    message.sub = object.sub !== undefined && object.sub !== null ? Subscription.fromPartial(object.sub) : undefined;
    return message;
  },
  fromAmino(object: QueryCurrentResponseAmino): QueryCurrentResponse {
    return {
      sub: object?.sub ? Subscription.fromAmino(object.sub) : undefined
    };
  },
  toAmino(message: QueryCurrentResponse): QueryCurrentResponseAmino {
    const obj: any = {};
    obj.sub = message.sub ? Subscription.toAmino(message.sub) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentResponseAminoMsg): QueryCurrentResponse {
    return QueryCurrentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentResponseProtoMsg): QueryCurrentResponse {
    return QueryCurrentResponse.decode(message.value);
  },
  toProto(message: QueryCurrentResponse): Uint8Array {
    return QueryCurrentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentResponse): QueryCurrentResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryCurrentResponse",
      value: QueryCurrentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListProjectsRequest(): QueryListProjectsRequest {
  return {
    subscription: ""
  };
}
export const QueryListProjectsRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryListProjectsRequest",
  encode(message: QueryListProjectsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscription !== "") {
      writer.uint32(10).string(message.subscription);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListProjectsRequest {
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
  fromPartial(object: Partial<QueryListProjectsRequest>): QueryListProjectsRequest {
    const message = createBaseQueryListProjectsRequest();
    message.subscription = object.subscription ?? "";
    return message;
  },
  fromAmino(object: QueryListProjectsRequestAmino): QueryListProjectsRequest {
    return {
      subscription: object.subscription
    };
  },
  toAmino(message: QueryListProjectsRequest): QueryListProjectsRequestAmino {
    const obj: any = {};
    obj.subscription = message.subscription;
    return obj;
  },
  fromAminoMsg(object: QueryListProjectsRequestAminoMsg): QueryListProjectsRequest {
    return QueryListProjectsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListProjectsRequestProtoMsg): QueryListProjectsRequest {
    return QueryListProjectsRequest.decode(message.value);
  },
  toProto(message: QueryListProjectsRequest): Uint8Array {
    return QueryListProjectsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListProjectsRequest): QueryListProjectsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListProjectsRequest",
      value: QueryListProjectsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListProjectsResponse(): QueryListProjectsResponse {
  return {
    projects: []
  };
}
export const QueryListProjectsResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryListProjectsResponse",
  encode(message: QueryListProjectsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.projects) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListProjectsResponse {
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
  fromPartial(object: Partial<QueryListProjectsResponse>): QueryListProjectsResponse {
    const message = createBaseQueryListProjectsResponse();
    message.projects = object.projects?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryListProjectsResponseAmino): QueryListProjectsResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryListProjectsResponse): QueryListProjectsResponseAmino {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e);
    } else {
      obj.projects = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryListProjectsResponseAminoMsg): QueryListProjectsResponse {
    return QueryListProjectsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListProjectsResponseProtoMsg): QueryListProjectsResponse {
    return QueryListProjectsResponse.decode(message.value);
  },
  toProto(message: QueryListProjectsResponse): Uint8Array {
    return QueryListProjectsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListProjectsResponse): QueryListProjectsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListProjectsResponse",
      value: QueryListProjectsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListRequest(): QueryListRequest {
  return {};
}
export const QueryListRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryListRequest",
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
      typeUrl: "/lavanet.lava.subscription.QueryListRequest",
      value: QueryListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListResponse(): QueryListResponse {
  return {
    subsInfo: []
  };
}
export const QueryListResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryListResponse",
  encode(message: QueryListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subsInfo) {
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
          message.subsInfo.push(ListInfoStruct.decode(reader, reader.uint32()));
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
    message.subsInfo = object.subsInfo?.map(e => ListInfoStruct.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryListResponseAmino): QueryListResponse {
    return {
      subsInfo: Array.isArray(object?.subs_info) ? object.subs_info.map((e: any) => ListInfoStruct.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryListResponse): QueryListResponseAmino {
    const obj: any = {};
    if (message.subsInfo) {
      obj.subs_info = message.subsInfo.map(e => e ? ListInfoStruct.toAmino(e) : undefined);
    } else {
      obj.subs_info = [];
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
      typeUrl: "/lavanet.lava.subscription.QueryListResponse",
      value: QueryListResponse.encode(message).finish()
    };
  }
};
function createBaseListInfoStruct(): ListInfoStruct {
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
  encode(message: ListInfoStruct, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ListInfoStruct {
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
  fromPartial(object: Partial<ListInfoStruct>): ListInfoStruct {
    const message = createBaseListInfoStruct();
    message.consumer = object.consumer ?? "";
    message.plan = object.plan ?? "";
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? BigInt(object.durationTotal.toString()) : BigInt(0);
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? BigInt(object.durationLeft.toString()) : BigInt(0);
    message.monthExpiry = object.monthExpiry !== undefined && object.monthExpiry !== null ? BigInt(object.monthExpiry.toString()) : BigInt(0);
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? BigInt(object.monthCuTotal.toString()) : BigInt(0);
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? BigInt(object.monthCuLeft.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ListInfoStructAmino): ListInfoStruct {
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
  toAmino(message: ListInfoStruct): ListInfoStructAmino {
    const obj: any = {};
    obj.consumer = message.consumer;
    obj.plan = message.plan;
    obj.duration_total = message.durationTotal ? message.durationTotal.toString() : undefined;
    obj.duration_left = message.durationLeft ? message.durationLeft.toString() : undefined;
    obj.month_expiry = message.monthExpiry ? message.monthExpiry.toString() : undefined;
    obj.month_cu_total = message.monthCuTotal ? message.monthCuTotal.toString() : undefined;
    obj.month_cu_left = message.monthCuLeft ? message.monthCuLeft.toString() : undefined;
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
      typeUrl: "/lavanet.lava.subscription.ListInfoStruct",
      value: ListInfoStruct.encode(message).finish()
    };
  }
};