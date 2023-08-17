import { Params, ParamsSDKType } from "./params";
import { Project, ProjectSDKType } from "./project";
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
export interface QueryInfoRequest {
  project: string;
}
export interface QueryInfoRequestSDKType {
  project: string;
}
export interface QueryInfoResponse {
  project: Project;
}
export interface QueryInfoResponseSDKType {
  project: ProjectSDKType;
}
export interface QueryDeveloperRequest {
  developer: string;
}
export interface QueryDeveloperRequestSDKType {
  developer: string;
}
export interface QueryDeveloperResponse {
  project: Project;
}
export interface QueryDeveloperResponseSDKType {
  project: ProjectSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.projects.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.projects.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.projects.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.projects.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInfoRequest(): QueryInfoRequest {
  return {
    project: ""
  };
}
export const QueryInfoRequest = {
  typeUrl: "/lavanet.lava.projects.QueryInfoRequest",
  encode(message: QueryInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.project !== "") {
      writer.uint32(10).string(message.project);
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
          message.project = reader.string();
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
    message.project = object.project ?? "";
    return message;
  },
  fromAmino(object: QueryInfoRequestAmino): QueryInfoRequest {
    return {
      project: object.project
    };
  },
  toAmino(message: QueryInfoRequest): QueryInfoRequestAmino {
    const obj: any = {};
    obj.project = message.project;
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
      typeUrl: "/lavanet.lava.projects.QueryInfoRequest",
      value: QueryInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInfoResponse(): QueryInfoResponse {
  return {
    project: Project.fromPartial({})
  };
}
export const QueryInfoResponse = {
  typeUrl: "/lavanet.lava.projects.QueryInfoResponse",
  encode(message: QueryInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
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
          message.project = Project.decode(reader, reader.uint32());
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
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    return message;
  },
  fromAmino(object: QueryInfoResponseAmino): QueryInfoResponse {
    return {
      project: object?.project ? Project.fromAmino(object.project) : undefined
    };
  },
  toAmino(message: QueryInfoResponse): QueryInfoResponseAmino {
    const obj: any = {};
    obj.project = message.project ? Project.toAmino(message.project) : undefined;
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
      typeUrl: "/lavanet.lava.projects.QueryInfoResponse",
      value: QueryInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDeveloperRequest(): QueryDeveloperRequest {
  return {
    developer: ""
  };
}
export const QueryDeveloperRequest = {
  typeUrl: "/lavanet.lava.projects.QueryDeveloperRequest",
  encode(message: QueryDeveloperRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.developer !== "") {
      writer.uint32(10).string(message.developer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeveloperRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeveloperRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.developer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDeveloperRequest>): QueryDeveloperRequest {
    const message = createBaseQueryDeveloperRequest();
    message.developer = object.developer ?? "";
    return message;
  },
  fromAmino(object: QueryDeveloperRequestAmino): QueryDeveloperRequest {
    return {
      developer: object.developer
    };
  },
  toAmino(message: QueryDeveloperRequest): QueryDeveloperRequestAmino {
    const obj: any = {};
    obj.developer = message.developer;
    return obj;
  },
  fromAminoMsg(object: QueryDeveloperRequestAminoMsg): QueryDeveloperRequest {
    return QueryDeveloperRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeveloperRequestProtoMsg): QueryDeveloperRequest {
    return QueryDeveloperRequest.decode(message.value);
  },
  toProto(message: QueryDeveloperRequest): Uint8Array {
    return QueryDeveloperRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeveloperRequest): QueryDeveloperRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.QueryDeveloperRequest",
      value: QueryDeveloperRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDeveloperResponse(): QueryDeveloperResponse {
  return {
    project: Project.fromPartial({})
  };
}
export const QueryDeveloperResponse = {
  typeUrl: "/lavanet.lava.projects.QueryDeveloperResponse",
  encode(message: QueryDeveloperResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeveloperResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeveloperResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDeveloperResponse>): QueryDeveloperResponse {
    const message = createBaseQueryDeveloperResponse();
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    return message;
  },
  fromAmino(object: QueryDeveloperResponseAmino): QueryDeveloperResponse {
    return {
      project: object?.project ? Project.fromAmino(object.project) : undefined
    };
  },
  toAmino(message: QueryDeveloperResponse): QueryDeveloperResponseAmino {
    const obj: any = {};
    obj.project = message.project ? Project.toAmino(message.project) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeveloperResponseAminoMsg): QueryDeveloperResponse {
    return QueryDeveloperResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeveloperResponseProtoMsg): QueryDeveloperResponse {
    return QueryDeveloperResponse.decode(message.value);
  },
  toProto(message: QueryDeveloperResponse): Uint8Array {
    return QueryDeveloperResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeveloperResponse): QueryDeveloperResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.QueryDeveloperResponse",
      value: QueryDeveloperResponse.encode(message).finish()
    };
  }
};