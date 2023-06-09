import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StakeStorage, StakeStorageSDKType } from "./stake_storage";
import { EpochDetails, EpochDetailsSDKType } from "./epoch_details";
import { FixatedParams, FixatedParamsSDKType } from "./fixated_params";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
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
export interface QueryGetStakeStorageRequest {
  index: string;
}
export interface QueryGetStakeStorageRequestSDKType {
  index: string;
}
export interface QueryGetStakeStorageResponse {
  stakeStorage?: StakeStorage;
}
export interface QueryGetStakeStorageResponseSDKType {
  stakeStorage?: StakeStorageSDKType;
}
export interface QueryAllStakeStorageRequest {
  pagination?: PageRequest;
}
export interface QueryAllStakeStorageRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllStakeStorageResponse {
  stakeStorage: StakeStorage[];
  pagination?: PageResponse;
}
export interface QueryAllStakeStorageResponseSDKType {
  stakeStorage: StakeStorageSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetEpochDetailsRequest {}
export interface QueryGetEpochDetailsRequestSDKType {}
export interface QueryGetEpochDetailsResponse {
  EpochDetails?: EpochDetails;
}
export interface QueryGetEpochDetailsResponseSDKType {
  EpochDetails?: EpochDetailsSDKType;
}
export interface QueryGetFixatedParamsRequest {
  index: string;
}
export interface QueryGetFixatedParamsRequestSDKType {
  index: string;
}
export interface QueryGetFixatedParamsResponse {
  fixatedParams?: FixatedParams;
}
export interface QueryGetFixatedParamsResponseSDKType {
  fixatedParams?: FixatedParamsSDKType;
}
export interface QueryAllFixatedParamsRequest {
  pagination?: PageRequest;
}
export interface QueryAllFixatedParamsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllFixatedParamsResponse {
  fixatedParams: FixatedParams[];
  pagination?: PageResponse;
}
export interface QueryAllFixatedParamsResponseSDKType {
  fixatedParams: FixatedParamsSDKType[];
  pagination?: PageResponseSDKType;
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryGetStakeStorageRequest(): QueryGetStakeStorageRequest {
  return {
    index: ""
  };
}
export const QueryGetStakeStorageRequest = {
  encode(message: QueryGetStakeStorageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakeStorageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakeStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetStakeStorageRequest {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: QueryGetStakeStorageRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object: Partial<QueryGetStakeStorageRequest>): QueryGetStakeStorageRequest {
    const message = createBaseQueryGetStakeStorageRequest();
    message.index = object.index ?? "";
    return message;
  }
};
function createBaseQueryGetStakeStorageResponse(): QueryGetStakeStorageResponse {
  return {
    stakeStorage: undefined
  };
}
export const QueryGetStakeStorageResponse = {
  encode(message: QueryGetStakeStorageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakeStorage !== undefined) {
      StakeStorage.encode(message.stakeStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStakeStorageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakeStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeStorage = StakeStorage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetStakeStorageResponse {
    return {
      stakeStorage: isSet(object.stakeStorage) ? StakeStorage.fromJSON(object.stakeStorage) : undefined
    };
  },
  toJSON(message: QueryGetStakeStorageResponse): unknown {
    const obj: any = {};
    message.stakeStorage !== undefined && (obj.stakeStorage = message.stakeStorage ? StakeStorage.toJSON(message.stakeStorage) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetStakeStorageResponse>): QueryGetStakeStorageResponse {
    const message = createBaseQueryGetStakeStorageResponse();
    message.stakeStorage = object.stakeStorage !== undefined && object.stakeStorage !== null ? StakeStorage.fromPartial(object.stakeStorage) : undefined;
    return message;
  }
};
function createBaseQueryAllStakeStorageRequest(): QueryAllStakeStorageRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllStakeStorageRequest = {
  encode(message: QueryAllStakeStorageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakeStorageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakeStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllStakeStorageRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllStakeStorageRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllStakeStorageRequest>): QueryAllStakeStorageRequest {
    const message = createBaseQueryAllStakeStorageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllStakeStorageResponse(): QueryAllStakeStorageResponse {
  return {
    stakeStorage: [],
    pagination: undefined
  };
}
export const QueryAllStakeStorageResponse = {
  encode(message: QueryAllStakeStorageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakeStorage) {
      StakeStorage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakeStorageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakeStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeStorage.push(StakeStorage.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllStakeStorageResponse {
    return {
      stakeStorage: Array.isArray(object?.stakeStorage) ? object.stakeStorage.map((e: any) => StakeStorage.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllStakeStorageResponse): unknown {
    const obj: any = {};
    if (message.stakeStorage) {
      obj.stakeStorage = message.stakeStorage.map(e => e ? StakeStorage.toJSON(e) : undefined);
    } else {
      obj.stakeStorage = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllStakeStorageResponse>): QueryAllStakeStorageResponse {
    const message = createBaseQueryAllStakeStorageResponse();
    message.stakeStorage = object.stakeStorage?.map(e => StakeStorage.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetEpochDetailsRequest(): QueryGetEpochDetailsRequest {
  return {};
}
export const QueryGetEpochDetailsRequest = {
  encode(_: QueryGetEpochDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochDetailsRequest();
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
  fromJSON(_: any): QueryGetEpochDetailsRequest {
    return {};
  },
  toJSON(_: QueryGetEpochDetailsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetEpochDetailsRequest>): QueryGetEpochDetailsRequest {
    const message = createBaseQueryGetEpochDetailsRequest();
    return message;
  }
};
function createBaseQueryGetEpochDetailsResponse(): QueryGetEpochDetailsResponse {
  return {
    EpochDetails: undefined
  };
}
export const QueryGetEpochDetailsResponse = {
  encode(message: QueryGetEpochDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EpochDetails !== undefined) {
      EpochDetails.encode(message.EpochDetails, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EpochDetails = EpochDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetEpochDetailsResponse {
    return {
      EpochDetails: isSet(object.EpochDetails) ? EpochDetails.fromJSON(object.EpochDetails) : undefined
    };
  },
  toJSON(message: QueryGetEpochDetailsResponse): unknown {
    const obj: any = {};
    message.EpochDetails !== undefined && (obj.EpochDetails = message.EpochDetails ? EpochDetails.toJSON(message.EpochDetails) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetEpochDetailsResponse>): QueryGetEpochDetailsResponse {
    const message = createBaseQueryGetEpochDetailsResponse();
    message.EpochDetails = object.EpochDetails !== undefined && object.EpochDetails !== null ? EpochDetails.fromPartial(object.EpochDetails) : undefined;
    return message;
  }
};
function createBaseQueryGetFixatedParamsRequest(): QueryGetFixatedParamsRequest {
  return {
    index: ""
  };
}
export const QueryGetFixatedParamsRequest = {
  encode(message: QueryGetFixatedParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFixatedParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFixatedParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFixatedParamsRequest {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: QueryGetFixatedParamsRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object: Partial<QueryGetFixatedParamsRequest>): QueryGetFixatedParamsRequest {
    const message = createBaseQueryGetFixatedParamsRequest();
    message.index = object.index ?? "";
    return message;
  }
};
function createBaseQueryGetFixatedParamsResponse(): QueryGetFixatedParamsResponse {
  return {
    fixatedParams: undefined
  };
}
export const QueryGetFixatedParamsResponse = {
  encode(message: QueryGetFixatedParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fixatedParams !== undefined) {
      FixatedParams.encode(message.fixatedParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFixatedParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFixatedParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixatedParams = FixatedParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFixatedParamsResponse {
    return {
      fixatedParams: isSet(object.fixatedParams) ? FixatedParams.fromJSON(object.fixatedParams) : undefined
    };
  },
  toJSON(message: QueryGetFixatedParamsResponse): unknown {
    const obj: any = {};
    message.fixatedParams !== undefined && (obj.fixatedParams = message.fixatedParams ? FixatedParams.toJSON(message.fixatedParams) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetFixatedParamsResponse>): QueryGetFixatedParamsResponse {
    const message = createBaseQueryGetFixatedParamsResponse();
    message.fixatedParams = object.fixatedParams !== undefined && object.fixatedParams !== null ? FixatedParams.fromPartial(object.fixatedParams) : undefined;
    return message;
  }
};
function createBaseQueryAllFixatedParamsRequest(): QueryAllFixatedParamsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllFixatedParamsRequest = {
  encode(message: QueryAllFixatedParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFixatedParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFixatedParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllFixatedParamsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFixatedParamsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFixatedParamsRequest>): QueryAllFixatedParamsRequest {
    const message = createBaseQueryAllFixatedParamsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllFixatedParamsResponse(): QueryAllFixatedParamsResponse {
  return {
    fixatedParams: [],
    pagination: undefined
  };
}
export const QueryAllFixatedParamsResponse = {
  encode(message: QueryAllFixatedParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fixatedParams) {
      FixatedParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFixatedParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFixatedParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixatedParams.push(FixatedParams.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllFixatedParamsResponse {
    return {
      fixatedParams: Array.isArray(object?.fixatedParams) ? object.fixatedParams.map((e: any) => FixatedParams.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFixatedParamsResponse): unknown {
    const obj: any = {};
    if (message.fixatedParams) {
      obj.fixatedParams = message.fixatedParams.map(e => e ? FixatedParams.toJSON(e) : undefined);
    } else {
      obj.fixatedParams = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFixatedParamsResponse>): QueryAllFixatedParamsResponse {
    const message = createBaseQueryAllFixatedParamsResponse();
    message.fixatedParams = object.fixatedParams?.map(e => FixatedParams.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};