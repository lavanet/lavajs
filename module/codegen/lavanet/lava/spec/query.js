import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Spec } from "./spec";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.spec.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.spec.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.spec.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.spec.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSpecRequest() {
  return {
    ChainID: ""
  };
}
export const QueryGetSpecRequest = {
  typeUrl: "/lavanet.lava.spec.QueryGetSpecRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.ChainID !== "") {
      writer.uint32(10).string(message.ChainID);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$ChainID;
    const message = createBaseQueryGetSpecRequest();
    message.ChainID = (_object$ChainID = object.ChainID) !== null && _object$ChainID !== void 0 ? _object$ChainID : "";
    return message;
  },
  fromAmino(object) {
    return {
      ChainID: object.ChainID
    };
  },
  toAmino(message) {
    const obj = {};
    obj.ChainID = message.ChainID;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetSpecRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetSpecRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetSpecRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryGetSpecRequest",
      value: QueryGetSpecRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSpecResponse() {
  return {
    Spec: Spec.fromPartial({})
  };
}
export const QueryGetSpecResponse = {
  typeUrl: "/lavanet.lava.spec.QueryGetSpecResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.Spec !== undefined) {
      Spec.encode(message.Spec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryGetSpecResponse();
    message.Spec = object.Spec !== undefined && object.Spec !== null ? Spec.fromPartial(object.Spec) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      Spec: object !== null && object !== void 0 && object.Spec ? Spec.fromAmino(object.Spec) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.Spec = message.Spec ? Spec.toAmino(message.Spec) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetSpecResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetSpecResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetSpecResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryGetSpecResponse",
      value: QueryGetSpecResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSpecRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllSpecRequest = {
  typeUrl: "/lavanet.lava.spec.QueryAllSpecRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryAllSpecRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllSpecRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllSpecRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllSpecRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryAllSpecRequest",
      value: QueryAllSpecRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSpecResponse() {
  return {
    Spec: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllSpecResponse = {
  typeUrl: "/lavanet.lava.spec.QueryAllSpecResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.Spec) {
      Spec.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$Spec;
    const message = createBaseQueryAllSpecResponse();
    message.Spec = ((_object$Spec = object.Spec) === null || _object$Spec === void 0 ? void 0 : _object$Spec.map(e => Spec.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      Spec: Array.isArray(object === null || object === void 0 ? void 0 : object.Spec) ? object.Spec.map(e => Spec.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.Spec) {
      obj.Spec = message.Spec.map(e => e ? Spec.toAmino(e) : undefined);
    } else {
      obj.Spec = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllSpecResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllSpecResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllSpecResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryAllSpecResponse",
      value: QueryAllSpecResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowAllChainsRequest() {
  return {};
}
export const QueryShowAllChainsRequest = {
  typeUrl: "/lavanet.lava.spec.QueryShowAllChainsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromPartial(_) {
    const message = createBaseQueryShowAllChainsRequest();
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
    return QueryShowAllChainsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryShowAllChainsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryShowAllChainsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowAllChainsRequest",
      value: QueryShowAllChainsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowAllChainsResponse() {
  return {
    chainInfoList: []
  };
}
export const QueryShowAllChainsResponse = {
  typeUrl: "/lavanet.lava.spec.QueryShowAllChainsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.chainInfoList) {
      ShowAllChainsInfoStruct.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$chainInfoList;
    const message = createBaseQueryShowAllChainsResponse();
    message.chainInfoList = ((_object$chainInfoList = object.chainInfoList) === null || _object$chainInfoList === void 0 ? void 0 : _object$chainInfoList.map(e => ShowAllChainsInfoStruct.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      chainInfoList: Array.isArray(object === null || object === void 0 ? void 0 : object.chainInfoList) ? object.chainInfoList.map(e => ShowAllChainsInfoStruct.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.chainInfoList) {
      obj.chainInfoList = message.chainInfoList.map(e => e ? ShowAllChainsInfoStruct.toAmino(e) : undefined);
    } else {
      obj.chainInfoList = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryShowAllChainsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryShowAllChainsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryShowAllChainsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowAllChainsResponse",
      value: QueryShowAllChainsResponse.encode(message).finish()
    };
  }
};
function createBaseShowAllChainsInfoStruct() {
  return {
    chainName: "",
    chainID: "",
    enabledApiInterfaces: [],
    apiCount: BigInt(0)
  };
}
export const ShowAllChainsInfoStruct = {
  typeUrl: "/lavanet.lava.spec.ShowAllChainsInfoStruct",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    for (const v of message.enabledApiInterfaces) {
      writer.uint32(26).string(v);
    }
    if (message.apiCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.apiCount);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$chainName, _object$chainID, _object$enabledApiInt;
    const message = createBaseShowAllChainsInfoStruct();
    message.chainName = (_object$chainName = object.chainName) !== null && _object$chainName !== void 0 ? _object$chainName : "";
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.enabledApiInterfaces = ((_object$enabledApiInt = object.enabledApiInterfaces) === null || _object$enabledApiInt === void 0 ? void 0 : _object$enabledApiInt.map(e => e)) || [];
    message.apiCount = object.apiCount !== undefined && object.apiCount !== null ? BigInt(object.apiCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      chainName: object.chainName,
      chainID: object.chainID,
      enabledApiInterfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.enabledApiInterfaces) ? object.enabledApiInterfaces.map(e => e) : [],
      apiCount: BigInt(object.api_count)
    };
  },
  toAmino(message) {
    const obj = {};
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
  fromAminoMsg(object) {
    return ShowAllChainsInfoStruct.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ShowAllChainsInfoStruct.decode(message.value);
  },
  toProto(message) {
    return ShowAllChainsInfoStruct.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.ShowAllChainsInfoStruct",
      value: ShowAllChainsInfoStruct.encode(message).finish()
    };
  }
};
function createBaseQueryShowChainInfoRequest() {
  return {
    chainName: ""
  };
}
export const QueryShowChainInfoRequest = {
  typeUrl: "/lavanet.lava.spec.QueryShowChainInfoRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$chainName2;
    const message = createBaseQueryShowChainInfoRequest();
    message.chainName = (_object$chainName2 = object.chainName) !== null && _object$chainName2 !== void 0 ? _object$chainName2 : "";
    return message;
  },
  fromAmino(object) {
    return {
      chainName: object.chainName
    };
  },
  toAmino(message) {
    const obj = {};
    obj.chainName = message.chainName;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryShowChainInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryShowChainInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryShowChainInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowChainInfoRequest",
      value: QueryShowChainInfoRequest.encode(message).finish()
    };
  }
};
function createBaseApiList() {
  return {
    interface: "",
    supportedApis: [],
    addon: ""
  };
}
export const ApiList = {
  typeUrl: "/lavanet.lava.spec.ApiList",
  encode(message, writer = BinaryWriter.create()) {
    if (message.interface !== "") {
      writer.uint32(34).string(message.interface);
    }
    for (const v of message.supportedApis) {
      writer.uint32(42).string(v);
    }
    if (message.addon !== "") {
      writer.uint32(50).string(message.addon);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$interface, _object$supportedApis, _object$addon;
    const message = createBaseApiList();
    message.interface = (_object$interface = object.interface) !== null && _object$interface !== void 0 ? _object$interface : "";
    message.supportedApis = ((_object$supportedApis = object.supportedApis) === null || _object$supportedApis === void 0 ? void 0 : _object$supportedApis.map(e => e)) || [];
    message.addon = (_object$addon = object.addon) !== null && _object$addon !== void 0 ? _object$addon : "";
    return message;
  },
  fromAmino(object) {
    return {
      interface: object.interface,
      supportedApis: Array.isArray(object === null || object === void 0 ? void 0 : object.supportedApis) ? object.supportedApis.map(e => e) : [],
      addon: object.addon
    };
  },
  toAmino(message) {
    const obj = {};
    obj.interface = message.interface;
    if (message.supportedApis) {
      obj.supportedApis = message.supportedApis.map(e => e);
    } else {
      obj.supportedApis = [];
    }
    obj.addon = message.addon;
    return obj;
  },
  fromAminoMsg(object) {
    return ApiList.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ApiList.decode(message.value);
  },
  toProto(message) {
    return ApiList.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.ApiList",
      value: ApiList.encode(message).finish()
    };
  }
};
function createBaseQueryShowChainInfoResponse() {
  return {
    chainID: "",
    interfaces: [],
    supportedApisInterfaceList: [],
    optionalInterfaces: []
  };
}
export const QueryShowChainInfoResponse = {
  typeUrl: "/lavanet.lava.spec.QueryShowChainInfoResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    for (const v of message.interfaces) {
      writer.uint32(18).string(v);
    }
    for (const v of message.supportedApisInterfaceList) {
      ApiList.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.optionalInterfaces) {
      writer.uint32(34).string(v);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$chainID2, _object$interfaces, _object$supportedApis2, _object$optionalInter;
    const message = createBaseQueryShowChainInfoResponse();
    message.chainID = (_object$chainID2 = object.chainID) !== null && _object$chainID2 !== void 0 ? _object$chainID2 : "";
    message.interfaces = ((_object$interfaces = object.interfaces) === null || _object$interfaces === void 0 ? void 0 : _object$interfaces.map(e => e)) || [];
    message.supportedApisInterfaceList = ((_object$supportedApis2 = object.supportedApisInterfaceList) === null || _object$supportedApis2 === void 0 ? void 0 : _object$supportedApis2.map(e => ApiList.fromPartial(e))) || [];
    message.optionalInterfaces = ((_object$optionalInter = object.optionalInterfaces) === null || _object$optionalInter === void 0 ? void 0 : _object$optionalInter.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      chainID: object.chainID,
      interfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaces) ? object.interfaces.map(e => e) : [],
      supportedApisInterfaceList: Array.isArray(object === null || object === void 0 ? void 0 : object.supportedApisInterfaceList) ? object.supportedApisInterfaceList.map(e => ApiList.fromAmino(e)) : [],
      optionalInterfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.optional_interfaces) ? object.optional_interfaces.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
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
  fromAminoMsg(object) {
    return QueryShowChainInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryShowChainInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryShowChainInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowChainInfoResponse",
      value: QueryShowChainInfoResponse.encode(message).finish()
    };
  }
};