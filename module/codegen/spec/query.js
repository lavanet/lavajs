import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Spec } from "./spec";
import * as _m0 from "protobufjs/minimal";

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromPartial(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryGetSpecRequest() {
  return {
    ChainID: ""
  };
}
export const QueryGetSpecRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.ChainID !== "") {
      writer.uint32(10).string(message.ChainID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseQueryGetSpecResponse() {
  return {
    Spec: undefined
  };
}
export const QueryGetSpecResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.Spec !== undefined) {
      Spec.encode(message.Spec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseQueryAllSpecRequest() {
  return {
    pagination: undefined
  };
}
export const QueryAllSpecRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseQueryAllSpecResponse() {
  return {
    Spec: [],
    pagination: undefined
  };
}
export const QueryAllSpecResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.Spec) {
      Spec.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseQueryShowAllChainsRequest() {
  return {};
}
export const QueryShowAllChainsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseQueryShowAllChainsResponse() {
  return {
    chainInfoList: []
  };
}
export const QueryShowAllChainsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.chainInfoList) {
      ShowAllChainsInfoStruct.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseShowAllChainsInfoStruct() {
  return {
    chainName: "",
    chainID: "",
    enabledApiInterfaces: []
  };
}
export const ShowAllChainsInfoStruct = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    for (const v of message.enabledApiInterfaces) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return message;
  }
};
function createBaseQueryShowChainInfoRequest() {
  return {
    chainName: ""
  };
}
export const QueryShowChainInfoRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseApiList() {
  return {
    interface: "",
    supportedApis: []
  };
}
export const ApiList = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.interface !== "") {
      writer.uint32(34).string(message.interface);
    }
    for (const v of message.supportedApis) {
      writer.uint32(42).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$interface, _object$supportedApis;
    const message = createBaseApiList();
    message.interface = (_object$interface = object.interface) !== null && _object$interface !== void 0 ? _object$interface : "";
    message.supportedApis = ((_object$supportedApis = object.supportedApis) === null || _object$supportedApis === void 0 ? void 0 : _object$supportedApis.map(e => e)) || [];
    return message;
  }
};
function createBaseQueryShowChainInfoResponse() {
  return {
    chainID: "",
    interfaces: [],
    supportedApisInterfaceList: []
  };
}
export const QueryShowChainInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    for (const v of message.interfaces) {
      writer.uint32(18).string(v);
    }
    for (const v of message.supportedApisInterfaceList) {
      ApiList.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$chainID2, _object$interfaces, _object$supportedApis2;
    const message = createBaseQueryShowChainInfoResponse();
    message.chainID = (_object$chainID2 = object.chainID) !== null && _object$chainID2 !== void 0 ? _object$chainID2 : "";
    message.interfaces = ((_object$interfaces = object.interfaces) === null || _object$interfaces === void 0 ? void 0 : _object$interfaces.map(e => e)) || [];
    message.supportedApisInterfaceList = ((_object$supportedApis2 = object.supportedApisInterfaceList) === null || _object$supportedApis2 === void 0 ? void 0 : _object$supportedApis2.map(e => ApiList.fromPartial(e))) || [];
    return message;
  }
};