"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowAllChainsInfoStruct = exports.QueryShowChainInfoResponse = exports.QueryShowChainInfoRequest = exports.QueryShowAllChainsResponse = exports.QueryShowAllChainsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryGetSpecResponse = exports.QueryGetSpecRequest = exports.QueryAllSpecResponse = exports.QueryAllSpecRequest = exports.ApiList = void 0;
var _pagination = require("../../../cosmos/base/query/v1beta1/pagination");
var _params = require("./params");
var _spec = require("./spec");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  typeUrl: "/lavanet.lava.spec.QueryParamsRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: _params.Params.fromPartial({})
  };
}
var QueryParamsResponse = {
  typeUrl: "/lavanet.lava.spec.QueryParamsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _params.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _params.Params.fromAmino(object.params) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _params.Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryGetSpecRequest() {
  return {
    ChainID: ""
  };
}
var QueryGetSpecRequest = {
  typeUrl: "/lavanet.lava.spec.QueryGetSpecRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.ChainID !== "") {
      writer.uint32(10).string(message.ChainID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetSpecRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$ChainID;
    var message = createBaseQueryGetSpecRequest();
    message.ChainID = (_object$ChainID = object.ChainID) !== null && _object$ChainID !== void 0 ? _object$ChainID : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      ChainID: object.ChainID
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.ChainID = message.ChainID;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGetSpecRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGetSpecRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGetSpecRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryGetSpecRequest",
      value: QueryGetSpecRequest.encode(message).finish()
    };
  }
};
exports.QueryGetSpecRequest = QueryGetSpecRequest;
function createBaseQueryGetSpecResponse() {
  return {
    Spec: _spec.Spec.fromPartial({})
  };
}
var QueryGetSpecResponse = {
  typeUrl: "/lavanet.lava.spec.QueryGetSpecResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.Spec !== undefined) {
      _spec.Spec.encode(message.Spec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetSpecResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Spec = _spec.Spec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetSpecResponse();
    message.Spec = object.Spec !== undefined && object.Spec !== null ? _spec.Spec.fromPartial(object.Spec) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      Spec: object !== null && object !== void 0 && object.Spec ? _spec.Spec.fromAmino(object.Spec) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.Spec = message.Spec ? _spec.Spec.toAmino(message.Spec) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGetSpecResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGetSpecResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGetSpecResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryGetSpecResponse",
      value: QueryGetSpecResponse.encode(message).finish()
    };
  }
};
exports.QueryGetSpecResponse = QueryGetSpecResponse;
function createBaseQueryAllSpecRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAllSpecRequest = {
  typeUrl: "/lavanet.lava.spec.QueryAllSpecRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllSpecRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAllSpecRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryAllSpecRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryAllSpecRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryAllSpecRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryAllSpecRequest",
      value: QueryAllSpecRequest.encode(message).finish()
    };
  }
};
exports.QueryAllSpecRequest = QueryAllSpecRequest;
function createBaseQueryAllSpecResponse() {
  return {
    Spec: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAllSpecResponse = {
  typeUrl: "/lavanet.lava.spec.QueryAllSpecResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.Spec),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _spec.Spec.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllSpecResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Spec.push(_spec.Spec.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$Spec;
    var message = createBaseQueryAllSpecResponse();
    message.Spec = ((_object$Spec = object.Spec) === null || _object$Spec === void 0 ? void 0 : _object$Spec.map(function (e) {
      return _spec.Spec.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      Spec: Array.isArray(object === null || object === void 0 ? void 0 : object.Spec) ? object.Spec.map(function (e) {
        return _spec.Spec.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.Spec) {
      obj.Spec = message.Spec.map(function (e) {
        return e ? _spec.Spec.toAmino(e) : undefined;
      });
    } else {
      obj.Spec = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryAllSpecResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryAllSpecResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryAllSpecResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryAllSpecResponse",
      value: QueryAllSpecResponse.encode(message).finish()
    };
  }
};
exports.QueryAllSpecResponse = QueryAllSpecResponse;
function createBaseQueryShowAllChainsRequest() {
  return {};
}
var QueryShowAllChainsRequest = {
  typeUrl: "/lavanet.lava.spec.QueryShowAllChainsRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryShowAllChainsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryShowAllChainsRequest();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryShowAllChainsRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryShowAllChainsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryShowAllChainsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowAllChainsRequest",
      value: QueryShowAllChainsRequest.encode(message).finish()
    };
  }
};
exports.QueryShowAllChainsRequest = QueryShowAllChainsRequest;
function createBaseQueryShowAllChainsResponse() {
  return {
    chainInfoList: []
  };
}
var QueryShowAllChainsResponse = {
  typeUrl: "/lavanet.lava.spec.QueryShowAllChainsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.chainInfoList),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        ShowAllChainsInfoStruct.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryShowAllChainsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$chainInfoList;
    var message = createBaseQueryShowAllChainsResponse();
    message.chainInfoList = ((_object$chainInfoList = object.chainInfoList) === null || _object$chainInfoList === void 0 ? void 0 : _object$chainInfoList.map(function (e) {
      return ShowAllChainsInfoStruct.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      chainInfoList: Array.isArray(object === null || object === void 0 ? void 0 : object.chainInfoList) ? object.chainInfoList.map(function (e) {
        return ShowAllChainsInfoStruct.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.chainInfoList) {
      obj.chainInfoList = message.chainInfoList.map(function (e) {
        return e ? ShowAllChainsInfoStruct.toAmino(e) : undefined;
      });
    } else {
      obj.chainInfoList = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryShowAllChainsResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryShowAllChainsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryShowAllChainsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowAllChainsResponse",
      value: QueryShowAllChainsResponse.encode(message).finish()
    };
  }
};
exports.QueryShowAllChainsResponse = QueryShowAllChainsResponse;
function createBaseShowAllChainsInfoStruct() {
  return {
    chainName: "",
    chainID: "",
    enabledApiInterfaces: [],
    apiCount: BigInt(0)
  };
}
var ShowAllChainsInfoStruct = {
  typeUrl: "/lavanet.lava.spec.ShowAllChainsInfoStruct",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    var _iterator3 = _createForOfIteratorHelper(message.enabledApiInterfaces),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        writer.uint32(26).string(v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.apiCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.apiCount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseShowAllChainsInfoStruct();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$chainName, _object$chainID, _object$enabledApiInt;
    var message = createBaseShowAllChainsInfoStruct();
    message.chainName = (_object$chainName = object.chainName) !== null && _object$chainName !== void 0 ? _object$chainName : "";
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.enabledApiInterfaces = ((_object$enabledApiInt = object.enabledApiInterfaces) === null || _object$enabledApiInt === void 0 ? void 0 : _object$enabledApiInt.map(function (e) {
      return e;
    })) || [];
    message.apiCount = object.apiCount !== undefined && object.apiCount !== null ? BigInt(object.apiCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      chainName: object.chainName,
      chainID: object.chainID,
      enabledApiInterfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.enabledApiInterfaces) ? object.enabledApiInterfaces.map(function (e) {
        return e;
      }) : [],
      apiCount: BigInt(object.api_count)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.chainName = message.chainName;
    obj.chainID = message.chainID;
    if (message.enabledApiInterfaces) {
      obj.enabledApiInterfaces = message.enabledApiInterfaces.map(function (e) {
        return e;
      });
    } else {
      obj.enabledApiInterfaces = [];
    }
    obj.api_count = message.apiCount ? message.apiCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ShowAllChainsInfoStruct.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ShowAllChainsInfoStruct.decode(message.value);
  },
  toProto: function toProto(message) {
    return ShowAllChainsInfoStruct.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.ShowAllChainsInfoStruct",
      value: ShowAllChainsInfoStruct.encode(message).finish()
    };
  }
};
exports.ShowAllChainsInfoStruct = ShowAllChainsInfoStruct;
function createBaseQueryShowChainInfoRequest() {
  return {
    chainName: ""
  };
}
var QueryShowChainInfoRequest = {
  typeUrl: "/lavanet.lava.spec.QueryShowChainInfoRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryShowChainInfoRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$chainName2;
    var message = createBaseQueryShowChainInfoRequest();
    message.chainName = (_object$chainName2 = object.chainName) !== null && _object$chainName2 !== void 0 ? _object$chainName2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      chainName: object.chainName
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.chainName = message.chainName;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryShowChainInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryShowChainInfoRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryShowChainInfoRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowChainInfoRequest",
      value: QueryShowChainInfoRequest.encode(message).finish()
    };
  }
};
exports.QueryShowChainInfoRequest = QueryShowChainInfoRequest;
function createBaseApiList() {
  return {
    "interface": "",
    supportedApis: [],
    addon: ""
  };
}
var ApiList = {
  typeUrl: "/lavanet.lava.spec.ApiList",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message["interface"] !== "") {
      writer.uint32(34).string(message["interface"]);
    }
    var _iterator4 = _createForOfIteratorHelper(message.supportedApis),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint32(42).string(v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.addon !== "") {
      writer.uint32(50).string(message.addon);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseApiList();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message["interface"] = reader.string();
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
  fromPartial: function fromPartial(object) {
    var _object$interface, _object$supportedApis, _object$addon;
    var message = createBaseApiList();
    message["interface"] = (_object$interface = object["interface"]) !== null && _object$interface !== void 0 ? _object$interface : "";
    message.supportedApis = ((_object$supportedApis = object.supportedApis) === null || _object$supportedApis === void 0 ? void 0 : _object$supportedApis.map(function (e) {
      return e;
    })) || [];
    message.addon = (_object$addon = object.addon) !== null && _object$addon !== void 0 ? _object$addon : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      "interface": object["interface"],
      supportedApis: Array.isArray(object === null || object === void 0 ? void 0 : object.supportedApis) ? object.supportedApis.map(function (e) {
        return e;
      }) : [],
      addon: object.addon
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj["interface"] = message["interface"];
    if (message.supportedApis) {
      obj.supportedApis = message.supportedApis.map(function (e) {
        return e;
      });
    } else {
      obj.supportedApis = [];
    }
    obj.addon = message.addon;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ApiList.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ApiList.decode(message.value);
  },
  toProto: function toProto(message) {
    return ApiList.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.ApiList",
      value: ApiList.encode(message).finish()
    };
  }
};
exports.ApiList = ApiList;
function createBaseQueryShowChainInfoResponse() {
  return {
    chainID: "",
    interfaces: [],
    supportedApisInterfaceList: [],
    optionalInterfaces: []
  };
}
var QueryShowChainInfoResponse = {
  typeUrl: "/lavanet.lava.spec.QueryShowChainInfoResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    var _iterator5 = _createForOfIteratorHelper(message.interfaces),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(message.supportedApisInterfaceList),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v = _step6.value;
        ApiList.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    var _iterator7 = _createForOfIteratorHelper(message.optionalInterfaces),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _v2 = _step7.value;
        writer.uint32(34).string(_v2);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryShowChainInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$chainID2, _object$interfaces, _object$supportedApis2, _object$optionalInter;
    var message = createBaseQueryShowChainInfoResponse();
    message.chainID = (_object$chainID2 = object.chainID) !== null && _object$chainID2 !== void 0 ? _object$chainID2 : "";
    message.interfaces = ((_object$interfaces = object.interfaces) === null || _object$interfaces === void 0 ? void 0 : _object$interfaces.map(function (e) {
      return e;
    })) || [];
    message.supportedApisInterfaceList = ((_object$supportedApis2 = object.supportedApisInterfaceList) === null || _object$supportedApis2 === void 0 ? void 0 : _object$supportedApis2.map(function (e) {
      return ApiList.fromPartial(e);
    })) || [];
    message.optionalInterfaces = ((_object$optionalInter = object.optionalInterfaces) === null || _object$optionalInter === void 0 ? void 0 : _object$optionalInter.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      chainID: object.chainID,
      interfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaces) ? object.interfaces.map(function (e) {
        return e;
      }) : [],
      supportedApisInterfaceList: Array.isArray(object === null || object === void 0 ? void 0 : object.supportedApisInterfaceList) ? object.supportedApisInterfaceList.map(function (e) {
        return ApiList.fromAmino(e);
      }) : [],
      optionalInterfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.optional_interfaces) ? object.optional_interfaces.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.chainID = message.chainID;
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(function (e) {
        return e;
      });
    } else {
      obj.interfaces = [];
    }
    if (message.supportedApisInterfaceList) {
      obj.supportedApisInterfaceList = message.supportedApisInterfaceList.map(function (e) {
        return e ? ApiList.toAmino(e) : undefined;
      });
    } else {
      obj.supportedApisInterfaceList = [];
    }
    if (message.optionalInterfaces) {
      obj.optional_interfaces = message.optionalInterfaces.map(function (e) {
        return e;
      });
    } else {
      obj.optional_interfaces = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryShowChainInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryShowChainInfoResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryShowChainInfoResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowChainInfoResponse",
      value: QueryShowChainInfoResponse.encode(message).finish()
    };
  }
};
exports.QueryShowChainInfoResponse = QueryShowChainInfoResponse;