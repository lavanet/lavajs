import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Spec, SpecSDKType } from "./spec";
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
export interface QueryGetSpecRequest {
  ChainID: string;
}
export interface QueryGetSpecRequestSDKType {
  ChainID: string;
}
export interface QueryGetSpecResponse {
  Spec: Spec;
}
export interface QueryGetSpecResponseSDKType {
  Spec: SpecSDKType;
}
export interface QueryAllSpecRequest {
  pagination: PageRequest;
}
export interface QueryAllSpecRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllSpecResponse {
  Spec: Spec[];
  pagination: PageResponse;
}
export interface QueryAllSpecResponseSDKType {
  Spec: SpecSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryShowAllChainsRequest {}
export interface QueryShowAllChainsRequestSDKType {}
export interface QueryShowAllChainsResponse {
  chainInfoList: ShowAllChainsInfoStruct[];
}
export interface QueryShowAllChainsResponseSDKType {
  chainInfoList: ShowAllChainsInfoStructSDKType[];
}
export interface ShowAllChainsInfoStruct {
  chainName: string;
  chainID: string;
  enabledApiInterfaces: string[];
  apiCount: bigint;
}
export interface ShowAllChainsInfoStructSDKType {
  chainName: string;
  chainID: string;
  enabledApiInterfaces: string[];
  api_count: bigint;
}
export interface QueryShowChainInfoRequest {
  chainName: string;
}
export interface QueryShowChainInfoRequestSDKType {
  chainName: string;
}
export interface ApiList {
  interface: string;
  supportedApis: string[];
  addon: string;
}
export interface ApiListSDKType {
  interface: string;
  supportedApis: string[];
  addon: string;
}
export interface QueryShowChainInfoResponse {
  chainID: string;
  interfaces: string[];
  supportedApisInterfaceList: ApiList[];
  optionalInterfaces: string[];
}
export interface QueryShowChainInfoResponseSDKType {
  chainID: string;
  interfaces: string[];
  supportedApisInterfaceList: ApiListSDKType[];
  optional_interfaces: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.spec.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.spec.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.spec.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.spec.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSpecRequest(): QueryGetSpecRequest {
  return {
    ChainID: ""
  };
}
export const QueryGetSpecRequest = {
  typeUrl: "/lavanet.lava.spec.QueryGetSpecRequest",
  encode(message: QueryGetSpecRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ChainID !== "") {
      writer.uint32(10).string(message.ChainID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSpecRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSpecRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ChainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetSpecRequest>): QueryGetSpecRequest {
    const message = createBaseQueryGetSpecRequest();
    message.ChainID = object.ChainID ?? "";
    return message;
  },
  fromAmino(object: QueryGetSpecRequestAmino): QueryGetSpecRequest {
    return {
      ChainID: object.ChainID
    };
  },
  toAmino(message: QueryGetSpecRequest): QueryGetSpecRequestAmino {
    const obj: any = {};
    obj.ChainID = message.ChainID;
    return obj;
  },
  fromAminoMsg(object: QueryGetSpecRequestAminoMsg): QueryGetSpecRequest {
    return QueryGetSpecRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSpecRequestProtoMsg): QueryGetSpecRequest {
    return QueryGetSpecRequest.decode(message.value);
  },
  toProto(message: QueryGetSpecRequest): Uint8Array {
    return QueryGetSpecRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSpecRequest): QueryGetSpecRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryGetSpecRequest",
      value: QueryGetSpecRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSpecResponse(): QueryGetSpecResponse {
  return {
    Spec: Spec.fromPartial({})
  };
}
export const QueryGetSpecResponse = {
  typeUrl: "/lavanet.lava.spec.QueryGetSpecResponse",
  encode(message: QueryGetSpecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Spec !== undefined) {
      Spec.encode(message.Spec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSpecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSpecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Spec = Spec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetSpecResponse>): QueryGetSpecResponse {
    const message = createBaseQueryGetSpecResponse();
    message.Spec = object.Spec !== undefined && object.Spec !== null ? Spec.fromPartial(object.Spec) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSpecResponseAmino): QueryGetSpecResponse {
    return {
      Spec: object?.Spec ? Spec.fromAmino(object.Spec) : undefined
    };
  },
  toAmino(message: QueryGetSpecResponse): QueryGetSpecResponseAmino {
    const obj: any = {};
    obj.Spec = message.Spec ? Spec.toAmino(message.Spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSpecResponseAminoMsg): QueryGetSpecResponse {
    return QueryGetSpecResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSpecResponseProtoMsg): QueryGetSpecResponse {
    return QueryGetSpecResponse.decode(message.value);
  },
  toProto(message: QueryGetSpecResponse): Uint8Array {
    return QueryGetSpecResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSpecResponse): QueryGetSpecResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryGetSpecResponse",
      value: QueryGetSpecResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSpecRequest(): QueryAllSpecRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllSpecRequest = {
  typeUrl: "/lavanet.lava.spec.QueryAllSpecRequest",
  encode(message: QueryAllSpecRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSpecRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSpecRequest();
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
  fromPartial(object: Partial<QueryAllSpecRequest>): QueryAllSpecRequest {
    const message = createBaseQueryAllSpecRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSpecRequestAmino): QueryAllSpecRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllSpecRequest): QueryAllSpecRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSpecRequestAminoMsg): QueryAllSpecRequest {
    return QueryAllSpecRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSpecRequestProtoMsg): QueryAllSpecRequest {
    return QueryAllSpecRequest.decode(message.value);
  },
  toProto(message: QueryAllSpecRequest): Uint8Array {
    return QueryAllSpecRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSpecRequest): QueryAllSpecRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryAllSpecRequest",
      value: QueryAllSpecRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSpecResponse(): QueryAllSpecResponse {
  return {
    Spec: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllSpecResponse = {
  typeUrl: "/lavanet.lava.spec.QueryAllSpecResponse",
  encode(message: QueryAllSpecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Spec) {
      Spec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSpecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSpecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Spec.push(Spec.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllSpecResponse>): QueryAllSpecResponse {
    const message = createBaseQueryAllSpecResponse();
    message.Spec = object.Spec?.map(e => Spec.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSpecResponseAmino): QueryAllSpecResponse {
    return {
      Spec: Array.isArray(object?.Spec) ? object.Spec.map((e: any) => Spec.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllSpecResponse): QueryAllSpecResponseAmino {
    const obj: any = {};
    if (message.Spec) {
      obj.Spec = message.Spec.map(e => e ? Spec.toAmino(e) : undefined);
    } else {
      obj.Spec = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSpecResponseAminoMsg): QueryAllSpecResponse {
    return QueryAllSpecResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSpecResponseProtoMsg): QueryAllSpecResponse {
    return QueryAllSpecResponse.decode(message.value);
  },
  toProto(message: QueryAllSpecResponse): Uint8Array {
    return QueryAllSpecResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSpecResponse): QueryAllSpecResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryAllSpecResponse",
      value: QueryAllSpecResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowAllChainsRequest(): QueryShowAllChainsRequest {
  return {};
}
export const QueryShowAllChainsRequest = {
  typeUrl: "/lavanet.lava.spec.QueryShowAllChainsRequest",
  encode(_: QueryShowAllChainsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowAllChainsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowAllChainsRequest();
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
  fromPartial(_: Partial<QueryShowAllChainsRequest>): QueryShowAllChainsRequest {
    const message = createBaseQueryShowAllChainsRequest();
    return message;
  },
  fromAmino(_: QueryShowAllChainsRequestAmino): QueryShowAllChainsRequest {
    return {};
  },
  toAmino(_: QueryShowAllChainsRequest): QueryShowAllChainsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryShowAllChainsRequestAminoMsg): QueryShowAllChainsRequest {
    return QueryShowAllChainsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowAllChainsRequestProtoMsg): QueryShowAllChainsRequest {
    return QueryShowAllChainsRequest.decode(message.value);
  },
  toProto(message: QueryShowAllChainsRequest): Uint8Array {
    return QueryShowAllChainsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowAllChainsRequest): QueryShowAllChainsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowAllChainsRequest",
      value: QueryShowAllChainsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowAllChainsResponse(): QueryShowAllChainsResponse {
  return {
    chainInfoList: []
  };
}
export const QueryShowAllChainsResponse = {
  typeUrl: "/lavanet.lava.spec.QueryShowAllChainsResponse",
  encode(message: QueryShowAllChainsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.chainInfoList) {
      ShowAllChainsInfoStruct.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowAllChainsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowAllChainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.chainInfoList.push(ShowAllChainsInfoStruct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowAllChainsResponse>): QueryShowAllChainsResponse {
    const message = createBaseQueryShowAllChainsResponse();
    message.chainInfoList = object.chainInfoList?.map(e => ShowAllChainsInfoStruct.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryShowAllChainsResponseAmino): QueryShowAllChainsResponse {
    return {
      chainInfoList: Array.isArray(object?.chainInfoList) ? object.chainInfoList.map((e: any) => ShowAllChainsInfoStruct.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryShowAllChainsResponse): QueryShowAllChainsResponseAmino {
    const obj: any = {};
    if (message.chainInfoList) {
      obj.chainInfoList = message.chainInfoList.map(e => e ? ShowAllChainsInfoStruct.toAmino(e) : undefined);
    } else {
      obj.chainInfoList = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryShowAllChainsResponseAminoMsg): QueryShowAllChainsResponse {
    return QueryShowAllChainsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowAllChainsResponseProtoMsg): QueryShowAllChainsResponse {
    return QueryShowAllChainsResponse.decode(message.value);
  },
  toProto(message: QueryShowAllChainsResponse): Uint8Array {
    return QueryShowAllChainsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowAllChainsResponse): QueryShowAllChainsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowAllChainsResponse",
      value: QueryShowAllChainsResponse.encode(message).finish()
    };
  }
};
function createBaseShowAllChainsInfoStruct(): ShowAllChainsInfoStruct {
  return {
    chainName: "",
    chainID: "",
    enabledApiInterfaces: [],
    apiCount: BigInt(0)
  };
}
export const ShowAllChainsInfoStruct = {
  typeUrl: "/lavanet.lava.spec.ShowAllChainsInfoStruct",
  encode(message: ShowAllChainsInfoStruct, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    for (const v of message.enabledApiInterfaces) {
      writer.uint32(26).string(v!);
    }
    if (message.apiCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.apiCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ShowAllChainsInfoStruct {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowAllChainsInfoStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.enabledApiInterfaces.push(reader.string());
          break;
        case 4:
          message.apiCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ShowAllChainsInfoStruct>): ShowAllChainsInfoStruct {
    const message = createBaseShowAllChainsInfoStruct();
    message.chainName = object.chainName ?? "";
    message.chainID = object.chainID ?? "";
    message.enabledApiInterfaces = object.enabledApiInterfaces?.map(e => e) || [];
    message.apiCount = object.apiCount !== undefined && object.apiCount !== null ? BigInt(object.apiCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ShowAllChainsInfoStructAmino): ShowAllChainsInfoStruct {
    return {
      chainName: object.chainName,
      chainID: object.chainID,
      enabledApiInterfaces: Array.isArray(object?.enabledApiInterfaces) ? object.enabledApiInterfaces.map((e: any) => e) : [],
      apiCount: BigInt(object.api_count)
    };
  },
  toAmino(message: ShowAllChainsInfoStruct): ShowAllChainsInfoStructAmino {
    const obj: any = {};
    obj.chainName = message.chainName;
    obj.chainID = message.chainID;
    if (message.enabledApiInterfaces) {
      obj.enabledApiInterfaces = message.enabledApiInterfaces.map(e => e);
    } else {
      obj.enabledApiInterfaces = [];
    }
    obj.api_count = message.apiCount ? message.apiCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ShowAllChainsInfoStructAminoMsg): ShowAllChainsInfoStruct {
    return ShowAllChainsInfoStruct.fromAmino(object.value);
  },
  fromProtoMsg(message: ShowAllChainsInfoStructProtoMsg): ShowAllChainsInfoStruct {
    return ShowAllChainsInfoStruct.decode(message.value);
  },
  toProto(message: ShowAllChainsInfoStruct): Uint8Array {
    return ShowAllChainsInfoStruct.encode(message).finish();
  },
  toProtoMsg(message: ShowAllChainsInfoStruct): ShowAllChainsInfoStructProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.ShowAllChainsInfoStruct",
      value: ShowAllChainsInfoStruct.encode(message).finish()
    };
  }
};
function createBaseQueryShowChainInfoRequest(): QueryShowChainInfoRequest {
  return {
    chainName: ""
  };
}
export const QueryShowChainInfoRequest = {
  typeUrl: "/lavanet.lava.spec.QueryShowChainInfoRequest",
  encode(message: QueryShowChainInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowChainInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowChainInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowChainInfoRequest>): QueryShowChainInfoRequest {
    const message = createBaseQueryShowChainInfoRequest();
    message.chainName = object.chainName ?? "";
    return message;
  },
  fromAmino(object: QueryShowChainInfoRequestAmino): QueryShowChainInfoRequest {
    return {
      chainName: object.chainName
    };
  },
  toAmino(message: QueryShowChainInfoRequest): QueryShowChainInfoRequestAmino {
    const obj: any = {};
    obj.chainName = message.chainName;
    return obj;
  },
  fromAminoMsg(object: QueryShowChainInfoRequestAminoMsg): QueryShowChainInfoRequest {
    return QueryShowChainInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowChainInfoRequestProtoMsg): QueryShowChainInfoRequest {
    return QueryShowChainInfoRequest.decode(message.value);
  },
  toProto(message: QueryShowChainInfoRequest): Uint8Array {
    return QueryShowChainInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowChainInfoRequest): QueryShowChainInfoRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowChainInfoRequest",
      value: QueryShowChainInfoRequest.encode(message).finish()
    };
  }
};
function createBaseApiList(): ApiList {
  return {
    interface: "",
    supportedApis: [],
    addon: ""
  };
}
export const ApiList = {
  typeUrl: "/lavanet.lava.spec.ApiList",
  encode(message: ApiList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interface !== "") {
      writer.uint32(34).string(message.interface);
    }
    for (const v of message.supportedApis) {
      writer.uint32(42).string(v!);
    }
    if (message.addon !== "") {
      writer.uint32(50).string(message.addon);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ApiList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.interface = reader.string();
          break;
        case 5:
          message.supportedApis.push(reader.string());
          break;
        case 6:
          message.addon = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ApiList>): ApiList {
    const message = createBaseApiList();
    message.interface = object.interface ?? "";
    message.supportedApis = object.supportedApis?.map(e => e) || [];
    message.addon = object.addon ?? "";
    return message;
  },
  fromAmino(object: ApiListAmino): ApiList {
    return {
      interface: object.interface,
      supportedApis: Array.isArray(object?.supportedApis) ? object.supportedApis.map((e: any) => e) : [],
      addon: object.addon
    };
  },
  toAmino(message: ApiList): ApiListAmino {
    const obj: any = {};
    obj.interface = message.interface;
    if (message.supportedApis) {
      obj.supportedApis = message.supportedApis.map(e => e);
    } else {
      obj.supportedApis = [];
    }
    obj.addon = message.addon;
    return obj;
  },
  fromAminoMsg(object: ApiListAminoMsg): ApiList {
    return ApiList.fromAmino(object.value);
  },
  fromProtoMsg(message: ApiListProtoMsg): ApiList {
    return ApiList.decode(message.value);
  },
  toProto(message: ApiList): Uint8Array {
    return ApiList.encode(message).finish();
  },
  toProtoMsg(message: ApiList): ApiListProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.ApiList",
      value: ApiList.encode(message).finish()
    };
  }
};
function createBaseQueryShowChainInfoResponse(): QueryShowChainInfoResponse {
  return {
    chainID: "",
    interfaces: [],
    supportedApisInterfaceList: [],
    optionalInterfaces: []
  };
}
export const QueryShowChainInfoResponse = {
  typeUrl: "/lavanet.lava.spec.QueryShowChainInfoResponse",
  encode(message: QueryShowChainInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    for (const v of message.interfaces) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.supportedApisInterfaceList) {
      ApiList.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.optionalInterfaces) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowChainInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowChainInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.interfaces.push(reader.string());
          break;
        case 3:
          message.supportedApisInterfaceList.push(ApiList.decode(reader, reader.uint32()));
          break;
        case 4:
          message.optionalInterfaces.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowChainInfoResponse>): QueryShowChainInfoResponse {
    const message = createBaseQueryShowChainInfoResponse();
    message.chainID = object.chainID ?? "";
    message.interfaces = object.interfaces?.map(e => e) || [];
    message.supportedApisInterfaceList = object.supportedApisInterfaceList?.map(e => ApiList.fromPartial(e)) || [];
    message.optionalInterfaces = object.optionalInterfaces?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryShowChainInfoResponseAmino): QueryShowChainInfoResponse {
    return {
      chainID: object.chainID,
      interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e: any) => e) : [],
      supportedApisInterfaceList: Array.isArray(object?.supportedApisInterfaceList) ? object.supportedApisInterfaceList.map((e: any) => ApiList.fromAmino(e)) : [],
      optionalInterfaces: Array.isArray(object?.optional_interfaces) ? object.optional_interfaces.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryShowChainInfoResponse): QueryShowChainInfoResponseAmino {
    const obj: any = {};
    obj.chainID = message.chainID;
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(e => e);
    } else {
      obj.interfaces = [];
    }
    if (message.supportedApisInterfaceList) {
      obj.supportedApisInterfaceList = message.supportedApisInterfaceList.map(e => e ? ApiList.toAmino(e) : undefined);
    } else {
      obj.supportedApisInterfaceList = [];
    }
    if (message.optionalInterfaces) {
      obj.optional_interfaces = message.optionalInterfaces.map(e => e);
    } else {
      obj.optional_interfaces = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryShowChainInfoResponseAminoMsg): QueryShowChainInfoResponse {
    return QueryShowChainInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowChainInfoResponseProtoMsg): QueryShowChainInfoResponse {
    return QueryShowChainInfoResponse.decode(message.value);
  },
  toProto(message: QueryShowChainInfoResponse): Uint8Array {
    return QueryShowChainInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowChainInfoResponse): QueryShowChainInfoResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowChainInfoResponse",
      value: QueryShowChainInfoResponse.encode(message).finish()
    };
  }
};