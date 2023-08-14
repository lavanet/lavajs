import { Params, ParamsSDKType } from "./params";
import { Subscription, SubscriptionSDKType } from "./subscription";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
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
  durationTotal: Long;
  /** remaining duration in months */
  durationLeft: Long;
  /** upcoming expiry (of current month) in unix time */
  monthExpiry: Long;
  /** total CU allowance per month */
  monthCuTotal: Long;
  /** remaining CU allowance this month */
  monthCuLeft: Long;
}
export interface ListInfoStructSDKType {
  consumer: string;
  plan: string;
  duration_total: Long;
  duration_left: Long;
  month_expiry: Long;
  month_cu_total: Long;
  month_cu_left: Long;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryCurrentRequest(): QueryCurrentRequest {
  return {
    consumer: ""
  };
}
export const QueryCurrentRequest = {
  encode(message: QueryCurrentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryCurrentRequest>): QueryCurrentRequest {
    const message = createBaseQueryCurrentRequest();
    message.consumer = object.consumer ?? "";
    return message;
  }
};
function createBaseQueryCurrentResponse(): QueryCurrentResponse {
  return {
    sub: undefined
  };
}
export const QueryCurrentResponse = {
  encode(message: QueryCurrentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sub !== undefined) {
      Subscription.encode(message.sub, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryCurrentResponse>): QueryCurrentResponse {
    const message = createBaseQueryCurrentResponse();
    message.sub = object.sub !== undefined && object.sub !== null ? Subscription.fromPartial(object.sub) : undefined;
    return message;
  }
};
function createBaseQueryListProjectsRequest(): QueryListProjectsRequest {
  return {
    subscription: ""
  };
}
export const QueryListProjectsRequest = {
  encode(message: QueryListProjectsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscription !== "") {
      writer.uint32(10).string(message.subscription);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListProjectsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryListProjectsRequest>): QueryListProjectsRequest {
    const message = createBaseQueryListProjectsRequest();
    message.subscription = object.subscription ?? "";
    return message;
  }
};
function createBaseQueryListProjectsResponse(): QueryListProjectsResponse {
  return {
    projects: []
  };
}
export const QueryListProjectsResponse = {
  encode(message: QueryListProjectsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projects) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListProjectsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryListProjectsResponse>): QueryListProjectsResponse {
    const message = createBaseQueryListProjectsResponse();
    message.projects = object.projects?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryListRequest(): QueryListRequest {
  return {};
}
export const QueryListRequest = {
  encode(_: QueryListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(_: DeepPartial<QueryListRequest>): QueryListRequest {
    const message = createBaseQueryListRequest();
    return message;
  }
};
function createBaseQueryListResponse(): QueryListResponse {
  return {
    subsInfo: []
  };
}
export const QueryListResponse = {
  encode(message: QueryListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subsInfo) {
      ListInfoStruct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryListResponse>): QueryListResponse {
    const message = createBaseQueryListResponse();
    message.subsInfo = object.subsInfo?.map(e => ListInfoStruct.fromPartial(e)) || [];
    return message;
  }
};
function createBaseListInfoStruct(): ListInfoStruct {
  return {
    consumer: "",
    plan: "",
    durationTotal: Long.UZERO,
    durationLeft: Long.UZERO,
    monthExpiry: Long.UZERO,
    monthCuTotal: Long.UZERO,
    monthCuLeft: Long.UZERO
  };
}
export const ListInfoStruct = {
  encode(message: ListInfoStruct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    if (message.plan !== "") {
      writer.uint32(18).string(message.plan);
    }
    if (!message.durationTotal.isZero()) {
      writer.uint32(24).uint64(message.durationTotal);
    }
    if (!message.durationLeft.isZero()) {
      writer.uint32(32).uint64(message.durationLeft);
    }
    if (!message.monthExpiry.isZero()) {
      writer.uint32(40).uint64(message.monthExpiry);
    }
    if (!message.monthCuTotal.isZero()) {
      writer.uint32(48).uint64(message.monthCuTotal);
    }
    if (!message.monthCuLeft.isZero()) {
      writer.uint32(56).uint64(message.monthCuLeft);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListInfoStruct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.durationTotal = (reader.uint64() as Long);
          break;
        case 4:
          message.durationLeft = (reader.uint64() as Long);
          break;
        case 5:
          message.monthExpiry = (reader.uint64() as Long);
          break;
        case 6:
          message.monthCuTotal = (reader.uint64() as Long);
          break;
        case 7:
          message.monthCuLeft = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListInfoStruct>): ListInfoStruct {
    const message = createBaseListInfoStruct();
    message.consumer = object.consumer ?? "";
    message.plan = object.plan ?? "";
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? Long.fromValue(object.durationTotal) : Long.UZERO;
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? Long.fromValue(object.durationLeft) : Long.UZERO;
    message.monthExpiry = object.monthExpiry !== undefined && object.monthExpiry !== null ? Long.fromValue(object.monthExpiry) : Long.UZERO;
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? Long.fromValue(object.monthCuTotal) : Long.UZERO;
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? Long.fromValue(object.monthCuLeft) : Long.UZERO;
    return message;
  }
};