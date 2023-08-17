import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StakeStorage, StakeStorageSDKType } from "./stake_storage";
import { EpochDetails, EpochDetailsSDKType } from "./epoch_details";
import { FixatedParams, FixatedParamsSDKType } from "./fixated_params";
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
export interface QueryGetStakeStorageRequest {
  index: string;
}
export interface QueryGetStakeStorageRequestSDKType {
  index: string;
}
export interface QueryGetStakeStorageResponse {
  stakeStorage: StakeStorage;
}
export interface QueryGetStakeStorageResponseSDKType {
  stakeStorage: StakeStorageSDKType;
}
export interface QueryAllStakeStorageRequest {
  pagination: PageRequest;
}
export interface QueryAllStakeStorageRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllStakeStorageResponse {
  stakeStorage: StakeStorage[];
  pagination: PageResponse;
}
export interface QueryAllStakeStorageResponseSDKType {
  stakeStorage: StakeStorageSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryGetEpochDetailsRequest {}
export interface QueryGetEpochDetailsRequestSDKType {}
export interface QueryGetEpochDetailsResponse {
  EpochDetails: EpochDetails;
}
export interface QueryGetEpochDetailsResponseSDKType {
  EpochDetails: EpochDetailsSDKType;
}
export interface QueryGetFixatedParamsRequest {
  index: string;
}
export interface QueryGetFixatedParamsRequestSDKType {
  index: string;
}
export interface QueryGetFixatedParamsResponse {
  fixatedParams: FixatedParams;
}
export interface QueryGetFixatedParamsResponseSDKType {
  fixatedParams: FixatedParamsSDKType;
}
export interface QueryAllFixatedParamsRequest {
  pagination: PageRequest;
}
export interface QueryAllFixatedParamsRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllFixatedParamsResponse {
  fixatedParams: FixatedParams[];
  pagination: PageResponse;
}
export interface QueryAllFixatedParamsResponseSDKType {
  fixatedParams: FixatedParamsSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.epochstorage.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.epochstorage.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.epochstorage.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetStakeStorageRequest(): QueryGetStakeStorageRequest {
  return {
    index: ""
  };
}
export const QueryGetStakeStorageRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageRequest",
  encode(message: QueryGetStakeStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStakeStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryGetStakeStorageRequest>): QueryGetStakeStorageRequest {
    const message = createBaseQueryGetStakeStorageRequest();
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryGetStakeStorageRequestAmino): QueryGetStakeStorageRequest {
    return {
      index: object.index
    };
  },
  toAmino(message: QueryGetStakeStorageRequest): QueryGetStakeStorageRequestAmino {
    const obj: any = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetStakeStorageRequestAminoMsg): QueryGetStakeStorageRequest {
    return QueryGetStakeStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStakeStorageRequestProtoMsg): QueryGetStakeStorageRequest {
    return QueryGetStakeStorageRequest.decode(message.value);
  },
  toProto(message: QueryGetStakeStorageRequest): Uint8Array {
    return QueryGetStakeStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStakeStorageRequest): QueryGetStakeStorageRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageRequest",
      value: QueryGetStakeStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetStakeStorageResponse(): QueryGetStakeStorageResponse {
  return {
    stakeStorage: StakeStorage.fromPartial({})
  };
}
export const QueryGetStakeStorageResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageResponse",
  encode(message: QueryGetStakeStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeStorage !== undefined) {
      StakeStorage.encode(message.stakeStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStakeStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryGetStakeStorageResponse>): QueryGetStakeStorageResponse {
    const message = createBaseQueryGetStakeStorageResponse();
    message.stakeStorage = object.stakeStorage !== undefined && object.stakeStorage !== null ? StakeStorage.fromPartial(object.stakeStorage) : undefined;
    return message;
  },
  fromAmino(object: QueryGetStakeStorageResponseAmino): QueryGetStakeStorageResponse {
    return {
      stakeStorage: object?.stakeStorage ? StakeStorage.fromAmino(object.stakeStorage) : undefined
    };
  },
  toAmino(message: QueryGetStakeStorageResponse): QueryGetStakeStorageResponseAmino {
    const obj: any = {};
    obj.stakeStorage = message.stakeStorage ? StakeStorage.toAmino(message.stakeStorage) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStakeStorageResponseAminoMsg): QueryGetStakeStorageResponse {
    return QueryGetStakeStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStakeStorageResponseProtoMsg): QueryGetStakeStorageResponse {
    return QueryGetStakeStorageResponse.decode(message.value);
  },
  toProto(message: QueryGetStakeStorageResponse): Uint8Array {
    return QueryGetStakeStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStakeStorageResponse): QueryGetStakeStorageResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageResponse",
      value: QueryGetStakeStorageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakeStorageRequest(): QueryAllStakeStorageRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllStakeStorageRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageRequest",
  encode(message: QueryAllStakeStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakeStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAllStakeStorageRequest>): QueryAllStakeStorageRequest {
    const message = createBaseQueryAllStakeStorageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakeStorageRequestAmino): QueryAllStakeStorageRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllStakeStorageRequest): QueryAllStakeStorageRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakeStorageRequestAminoMsg): QueryAllStakeStorageRequest {
    return QueryAllStakeStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakeStorageRequestProtoMsg): QueryAllStakeStorageRequest {
    return QueryAllStakeStorageRequest.decode(message.value);
  },
  toProto(message: QueryAllStakeStorageRequest): Uint8Array {
    return QueryAllStakeStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakeStorageRequest): QueryAllStakeStorageRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageRequest",
      value: QueryAllStakeStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakeStorageResponse(): QueryAllStakeStorageResponse {
  return {
    stakeStorage: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllStakeStorageResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageResponse",
  encode(message: QueryAllStakeStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakeStorage) {
      StakeStorage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakeStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAllStakeStorageResponse>): QueryAllStakeStorageResponse {
    const message = createBaseQueryAllStakeStorageResponse();
    message.stakeStorage = object.stakeStorage?.map(e => StakeStorage.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakeStorageResponseAmino): QueryAllStakeStorageResponse {
    return {
      stakeStorage: Array.isArray(object?.stakeStorage) ? object.stakeStorage.map((e: any) => StakeStorage.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllStakeStorageResponse): QueryAllStakeStorageResponseAmino {
    const obj: any = {};
    if (message.stakeStorage) {
      obj.stakeStorage = message.stakeStorage.map(e => e ? StakeStorage.toAmino(e) : undefined);
    } else {
      obj.stakeStorage = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakeStorageResponseAminoMsg): QueryAllStakeStorageResponse {
    return QueryAllStakeStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakeStorageResponseProtoMsg): QueryAllStakeStorageResponse {
    return QueryAllStakeStorageResponse.decode(message.value);
  },
  toProto(message: QueryAllStakeStorageResponse): Uint8Array {
    return QueryAllStakeStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakeStorageResponse): QueryAllStakeStorageResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageResponse",
      value: QueryAllStakeStorageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochDetailsRequest(): QueryGetEpochDetailsRequest {
  return {};
}
export const QueryGetEpochDetailsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsRequest",
  encode(_: QueryGetEpochDetailsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochDetailsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: Partial<QueryGetEpochDetailsRequest>): QueryGetEpochDetailsRequest {
    const message = createBaseQueryGetEpochDetailsRequest();
    return message;
  },
  fromAmino(_: QueryGetEpochDetailsRequestAmino): QueryGetEpochDetailsRequest {
    return {};
  },
  toAmino(_: QueryGetEpochDetailsRequest): QueryGetEpochDetailsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochDetailsRequestAminoMsg): QueryGetEpochDetailsRequest {
    return QueryGetEpochDetailsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochDetailsRequestProtoMsg): QueryGetEpochDetailsRequest {
    return QueryGetEpochDetailsRequest.decode(message.value);
  },
  toProto(message: QueryGetEpochDetailsRequest): Uint8Array {
    return QueryGetEpochDetailsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochDetailsRequest): QueryGetEpochDetailsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsRequest",
      value: QueryGetEpochDetailsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochDetailsResponse(): QueryGetEpochDetailsResponse {
  return {
    EpochDetails: EpochDetails.fromPartial({})
  };
}
export const QueryGetEpochDetailsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsResponse",
  encode(message: QueryGetEpochDetailsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.EpochDetails !== undefined) {
      EpochDetails.encode(message.EpochDetails, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochDetailsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryGetEpochDetailsResponse>): QueryGetEpochDetailsResponse {
    const message = createBaseQueryGetEpochDetailsResponse();
    message.EpochDetails = object.EpochDetails !== undefined && object.EpochDetails !== null ? EpochDetails.fromPartial(object.EpochDetails) : undefined;
    return message;
  },
  fromAmino(object: QueryGetEpochDetailsResponseAmino): QueryGetEpochDetailsResponse {
    return {
      EpochDetails: object?.EpochDetails ? EpochDetails.fromAmino(object.EpochDetails) : undefined
    };
  },
  toAmino(message: QueryGetEpochDetailsResponse): QueryGetEpochDetailsResponseAmino {
    const obj: any = {};
    obj.EpochDetails = message.EpochDetails ? EpochDetails.toAmino(message.EpochDetails) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochDetailsResponseAminoMsg): QueryGetEpochDetailsResponse {
    return QueryGetEpochDetailsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochDetailsResponseProtoMsg): QueryGetEpochDetailsResponse {
    return QueryGetEpochDetailsResponse.decode(message.value);
  },
  toProto(message: QueryGetEpochDetailsResponse): Uint8Array {
    return QueryGetEpochDetailsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochDetailsResponse): QueryGetEpochDetailsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsResponse",
      value: QueryGetEpochDetailsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetFixatedParamsRequest(): QueryGetFixatedParamsRequest {
  return {
    index: ""
  };
}
export const QueryGetFixatedParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsRequest",
  encode(message: QueryGetFixatedParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFixatedParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryGetFixatedParamsRequest>): QueryGetFixatedParamsRequest {
    const message = createBaseQueryGetFixatedParamsRequest();
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryGetFixatedParamsRequestAmino): QueryGetFixatedParamsRequest {
    return {
      index: object.index
    };
  },
  toAmino(message: QueryGetFixatedParamsRequest): QueryGetFixatedParamsRequestAmino {
    const obj: any = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetFixatedParamsRequestAminoMsg): QueryGetFixatedParamsRequest {
    return QueryGetFixatedParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFixatedParamsRequestProtoMsg): QueryGetFixatedParamsRequest {
    return QueryGetFixatedParamsRequest.decode(message.value);
  },
  toProto(message: QueryGetFixatedParamsRequest): Uint8Array {
    return QueryGetFixatedParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFixatedParamsRequest): QueryGetFixatedParamsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsRequest",
      value: QueryGetFixatedParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetFixatedParamsResponse(): QueryGetFixatedParamsResponse {
  return {
    fixatedParams: FixatedParams.fromPartial({})
  };
}
export const QueryGetFixatedParamsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsResponse",
  encode(message: QueryGetFixatedParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fixatedParams !== undefined) {
      FixatedParams.encode(message.fixatedParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFixatedParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryGetFixatedParamsResponse>): QueryGetFixatedParamsResponse {
    const message = createBaseQueryGetFixatedParamsResponse();
    message.fixatedParams = object.fixatedParams !== undefined && object.fixatedParams !== null ? FixatedParams.fromPartial(object.fixatedParams) : undefined;
    return message;
  },
  fromAmino(object: QueryGetFixatedParamsResponseAmino): QueryGetFixatedParamsResponse {
    return {
      fixatedParams: object?.fixatedParams ? FixatedParams.fromAmino(object.fixatedParams) : undefined
    };
  },
  toAmino(message: QueryGetFixatedParamsResponse): QueryGetFixatedParamsResponseAmino {
    const obj: any = {};
    obj.fixatedParams = message.fixatedParams ? FixatedParams.toAmino(message.fixatedParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetFixatedParamsResponseAminoMsg): QueryGetFixatedParamsResponse {
    return QueryGetFixatedParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFixatedParamsResponseProtoMsg): QueryGetFixatedParamsResponse {
    return QueryGetFixatedParamsResponse.decode(message.value);
  },
  toProto(message: QueryGetFixatedParamsResponse): Uint8Array {
    return QueryGetFixatedParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFixatedParamsResponse): QueryGetFixatedParamsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsResponse",
      value: QueryGetFixatedParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllFixatedParamsRequest(): QueryAllFixatedParamsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllFixatedParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsRequest",
  encode(message: QueryAllFixatedParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFixatedParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAllFixatedParamsRequest>): QueryAllFixatedParamsRequest {
    const message = createBaseQueryAllFixatedParamsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFixatedParamsRequestAmino): QueryAllFixatedParamsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllFixatedParamsRequest): QueryAllFixatedParamsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFixatedParamsRequestAminoMsg): QueryAllFixatedParamsRequest {
    return QueryAllFixatedParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFixatedParamsRequestProtoMsg): QueryAllFixatedParamsRequest {
    return QueryAllFixatedParamsRequest.decode(message.value);
  },
  toProto(message: QueryAllFixatedParamsRequest): Uint8Array {
    return QueryAllFixatedParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFixatedParamsRequest): QueryAllFixatedParamsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsRequest",
      value: QueryAllFixatedParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllFixatedParamsResponse(): QueryAllFixatedParamsResponse {
  return {
    fixatedParams: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllFixatedParamsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsResponse",
  encode(message: QueryAllFixatedParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fixatedParams) {
      FixatedParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFixatedParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryAllFixatedParamsResponse>): QueryAllFixatedParamsResponse {
    const message = createBaseQueryAllFixatedParamsResponse();
    message.fixatedParams = object.fixatedParams?.map(e => FixatedParams.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFixatedParamsResponseAmino): QueryAllFixatedParamsResponse {
    return {
      fixatedParams: Array.isArray(object?.fixatedParams) ? object.fixatedParams.map((e: any) => FixatedParams.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllFixatedParamsResponse): QueryAllFixatedParamsResponseAmino {
    const obj: any = {};
    if (message.fixatedParams) {
      obj.fixatedParams = message.fixatedParams.map(e => e ? FixatedParams.toAmino(e) : undefined);
    } else {
      obj.fixatedParams = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFixatedParamsResponseAminoMsg): QueryAllFixatedParamsResponse {
    return QueryAllFixatedParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFixatedParamsResponseProtoMsg): QueryAllFixatedParamsResponse {
    return QueryAllFixatedParamsResponse.decode(message.value);
  },
  toProto(message: QueryAllFixatedParamsResponse): Uint8Array {
    return QueryAllFixatedParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFixatedParamsResponse): QueryAllFixatedParamsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsResponse",
      value: QueryAllFixatedParamsResponse.encode(message).finish()
    };
  }
};