import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { ConflictVote, ConflictVoteSDKType } from "./conflict_vote";
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
export interface QueryGetConflictVoteRequest {
  index: string;
}
export interface QueryGetConflictVoteRequestSDKType {
  index: string;
}
export interface QueryGetConflictVoteResponse {
  conflictVote: ConflictVote;
}
export interface QueryGetConflictVoteResponseSDKType {
  conflictVote: ConflictVoteSDKType;
}
export interface QueryAllConflictVoteRequest {
  pagination: PageRequest;
}
export interface QueryAllConflictVoteRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllConflictVoteResponse {
  conflictVote: ConflictVote[];
  pagination: PageResponse;
}
export interface QueryAllConflictVoteResponseSDKType {
  conflictVote: ConflictVoteSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.conflict.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.conflict.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.conflict.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.conflict.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetConflictVoteRequest(): QueryGetConflictVoteRequest {
  return {
    index: ""
  };
}
export const QueryGetConflictVoteRequest = {
  typeUrl: "/lavanet.lava.conflict.QueryGetConflictVoteRequest",
  encode(message: QueryGetConflictVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetConflictVoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConflictVoteRequest();
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
  fromPartial(object: Partial<QueryGetConflictVoteRequest>): QueryGetConflictVoteRequest {
    const message = createBaseQueryGetConflictVoteRequest();
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryGetConflictVoteRequestAmino): QueryGetConflictVoteRequest {
    return {
      index: object.index
    };
  },
  toAmino(message: QueryGetConflictVoteRequest): QueryGetConflictVoteRequestAmino {
    const obj: any = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetConflictVoteRequestAminoMsg): QueryGetConflictVoteRequest {
    return QueryGetConflictVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetConflictVoteRequestProtoMsg): QueryGetConflictVoteRequest {
    return QueryGetConflictVoteRequest.decode(message.value);
  },
  toProto(message: QueryGetConflictVoteRequest): Uint8Array {
    return QueryGetConflictVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetConflictVoteRequest): QueryGetConflictVoteRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.QueryGetConflictVoteRequest",
      value: QueryGetConflictVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetConflictVoteResponse(): QueryGetConflictVoteResponse {
  return {
    conflictVote: ConflictVote.fromPartial({})
  };
}
export const QueryGetConflictVoteResponse = {
  typeUrl: "/lavanet.lava.conflict.QueryGetConflictVoteResponse",
  encode(message: QueryGetConflictVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.conflictVote !== undefined) {
      ConflictVote.encode(message.conflictVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetConflictVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConflictVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictVote = ConflictVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetConflictVoteResponse>): QueryGetConflictVoteResponse {
    const message = createBaseQueryGetConflictVoteResponse();
    message.conflictVote = object.conflictVote !== undefined && object.conflictVote !== null ? ConflictVote.fromPartial(object.conflictVote) : undefined;
    return message;
  },
  fromAmino(object: QueryGetConflictVoteResponseAmino): QueryGetConflictVoteResponse {
    return {
      conflictVote: object?.conflictVote ? ConflictVote.fromAmino(object.conflictVote) : undefined
    };
  },
  toAmino(message: QueryGetConflictVoteResponse): QueryGetConflictVoteResponseAmino {
    const obj: any = {};
    obj.conflictVote = message.conflictVote ? ConflictVote.toAmino(message.conflictVote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetConflictVoteResponseAminoMsg): QueryGetConflictVoteResponse {
    return QueryGetConflictVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetConflictVoteResponseProtoMsg): QueryGetConflictVoteResponse {
    return QueryGetConflictVoteResponse.decode(message.value);
  },
  toProto(message: QueryGetConflictVoteResponse): Uint8Array {
    return QueryGetConflictVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetConflictVoteResponse): QueryGetConflictVoteResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.QueryGetConflictVoteResponse",
      value: QueryGetConflictVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllConflictVoteRequest(): QueryAllConflictVoteRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllConflictVoteRequest = {
  typeUrl: "/lavanet.lava.conflict.QueryAllConflictVoteRequest",
  encode(message: QueryAllConflictVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllConflictVoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConflictVoteRequest();
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
  fromPartial(object: Partial<QueryAllConflictVoteRequest>): QueryAllConflictVoteRequest {
    const message = createBaseQueryAllConflictVoteRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllConflictVoteRequestAmino): QueryAllConflictVoteRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllConflictVoteRequest): QueryAllConflictVoteRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllConflictVoteRequestAminoMsg): QueryAllConflictVoteRequest {
    return QueryAllConflictVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllConflictVoteRequestProtoMsg): QueryAllConflictVoteRequest {
    return QueryAllConflictVoteRequest.decode(message.value);
  },
  toProto(message: QueryAllConflictVoteRequest): Uint8Array {
    return QueryAllConflictVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllConflictVoteRequest): QueryAllConflictVoteRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.QueryAllConflictVoteRequest",
      value: QueryAllConflictVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllConflictVoteResponse(): QueryAllConflictVoteResponse {
  return {
    conflictVote: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllConflictVoteResponse = {
  typeUrl: "/lavanet.lava.conflict.QueryAllConflictVoteResponse",
  encode(message: QueryAllConflictVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.conflictVote) {
      ConflictVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllConflictVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConflictVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictVote.push(ConflictVote.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllConflictVoteResponse>): QueryAllConflictVoteResponse {
    const message = createBaseQueryAllConflictVoteResponse();
    message.conflictVote = object.conflictVote?.map(e => ConflictVote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllConflictVoteResponseAmino): QueryAllConflictVoteResponse {
    return {
      conflictVote: Array.isArray(object?.conflictVote) ? object.conflictVote.map((e: any) => ConflictVote.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllConflictVoteResponse): QueryAllConflictVoteResponseAmino {
    const obj: any = {};
    if (message.conflictVote) {
      obj.conflictVote = message.conflictVote.map(e => e ? ConflictVote.toAmino(e) : undefined);
    } else {
      obj.conflictVote = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllConflictVoteResponseAminoMsg): QueryAllConflictVoteResponse {
    return QueryAllConflictVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllConflictVoteResponseProtoMsg): QueryAllConflictVoteResponse {
    return QueryAllConflictVoteResponse.decode(message.value);
  },
  toProto(message: QueryAllConflictVoteResponse): Uint8Array {
    return QueryAllConflictVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllConflictVoteResponse): QueryAllConflictVoteResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.QueryAllConflictVoteResponse",
      value: QueryAllConflictVoteResponse.encode(message).finish()
    };
  }
};