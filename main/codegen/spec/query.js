"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowAllChainsInfoStruct = exports.QueryShowChainInfoResponse = exports.QueryShowChainInfoRequest = exports.QueryShowAllChainsResponse = exports.QueryShowAllChainsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryGetSpecResponse = exports.QueryGetSpecRequest = exports.QueryAllSpecResponse = exports.QueryAllSpecRequest = exports.ApiList = void 0;
var _pagination = require("../cosmos/base/query/v1beta1/pagination");
var _params = require("./params");
var _spec = require("./spec");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryParamsRequest();
    return message;
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
var QueryParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      params: (0, _helpers.isSet)(object.params) ? _params.Params.fromJSON(object.params) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.params !== undefined && (obj.params = message.params ? _params.Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryGetSpecRequest() {
  return {
    ChainID: ""
  };
}
var QueryGetSpecRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.ChainID !== "") {
      writer.uint32(10).string(message.ChainID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      ChainID: (0, _helpers.isSet)(object.ChainID) ? String(object.ChainID) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.ChainID !== undefined && (obj.ChainID = message.ChainID);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$ChainID;
    var message = createBaseQueryGetSpecRequest();
    message.ChainID = (_object$ChainID = object.ChainID) !== null && _object$ChainID !== void 0 ? _object$ChainID : "";
    return message;
  }
};
exports.QueryGetSpecRequest = QueryGetSpecRequest;
function createBaseQueryGetSpecResponse() {
  return {
    Spec: undefined
  };
}
var QueryGetSpecResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.Spec !== undefined) {
      _spec.Spec.encode(message.Spec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      Spec: (0, _helpers.isSet)(object.Spec) ? _spec.Spec.fromJSON(object.Spec) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.Spec !== undefined && (obj.Spec = message.Spec ? _spec.Spec.toJSON(message.Spec) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetSpecResponse();
    message.Spec = object.Spec !== undefined && object.Spec !== null ? _spec.Spec.fromPartial(object.Spec) : undefined;
    return message;
  }
};
exports.QueryGetSpecResponse = QueryGetSpecResponse;
function createBaseQueryAllSpecRequest() {
  return {
    pagination: undefined
  };
}
var QueryAllSpecRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAllSpecRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllSpecRequest = QueryAllSpecRequest;
function createBaseQueryAllSpecResponse() {
  return {
    Spec: [],
    pagination: undefined
  };
}
var QueryAllSpecResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      Spec: Array.isArray(object === null || object === void 0 ? void 0 : object.Spec) ? object.Spec.map(function (e) {
        return _spec.Spec.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.Spec) {
      obj.Spec = message.Spec.map(function (e) {
        return e ? _spec.Spec.toJSON(e) : undefined;
      });
    } else {
      obj.Spec = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$Spec;
    var message = createBaseQueryAllSpecResponse();
    message.Spec = ((_object$Spec = object.Spec) === null || _object$Spec === void 0 ? void 0 : _object$Spec.map(function (e) {
      return _spec.Spec.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllSpecResponse = QueryAllSpecResponse;
function createBaseQueryShowAllChainsRequest() {
  return {};
}
var QueryShowAllChainsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryShowAllChainsRequest();
    return message;
  }
};
exports.QueryShowAllChainsRequest = QueryShowAllChainsRequest;
function createBaseQueryShowAllChainsResponse() {
  return {
    chainInfoList: []
  };
}
var QueryShowAllChainsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      chainInfoList: Array.isArray(object === null || object === void 0 ? void 0 : object.chainInfoList) ? object.chainInfoList.map(function (e) {
        return ShowAllChainsInfoStruct.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.chainInfoList) {
      obj.chainInfoList = message.chainInfoList.map(function (e) {
        return e ? ShowAllChainsInfoStruct.toJSON(e) : undefined;
      });
    } else {
      obj.chainInfoList = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainInfoList;
    var message = createBaseQueryShowAllChainsResponse();
    message.chainInfoList = ((_object$chainInfoList = object.chainInfoList) === null || _object$chainInfoList === void 0 ? void 0 : _object$chainInfoList.map(function (e) {
      return ShowAllChainsInfoStruct.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryShowAllChainsResponse = QueryShowAllChainsResponse;
function createBaseShowAllChainsInfoStruct() {
  return {
    chainName: "",
    chainID: "",
    enabledApiInterfaces: []
  };
}
var ShowAllChainsInfoStruct = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      chainName: (0, _helpers.isSet)(object.chainName) ? String(object.chainName) : "",
      chainID: (0, _helpers.isSet)(object.chainID) ? String(object.chainID) : "",
      enabledApiInterfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.enabledApiInterfaces) ? object.enabledApiInterfaces.map(function (e) {
        return String(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    if (message.enabledApiInterfaces) {
      obj.enabledApiInterfaces = message.enabledApiInterfaces.map(function (e) {
        return e;
      });
    } else {
      obj.enabledApiInterfaces = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainName, _object$chainID, _object$enabledApiInt;
    var message = createBaseShowAllChainsInfoStruct();
    message.chainName = (_object$chainName = object.chainName) !== null && _object$chainName !== void 0 ? _object$chainName : "";
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.enabledApiInterfaces = ((_object$enabledApiInt = object.enabledApiInterfaces) === null || _object$enabledApiInt === void 0 ? void 0 : _object$enabledApiInt.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ShowAllChainsInfoStruct = ShowAllChainsInfoStruct;
function createBaseQueryShowChainInfoRequest() {
  return {
    chainName: ""
  };
}
var QueryShowChainInfoRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      chainName: (0, _helpers.isSet)(object.chainName) ? String(object.chainName) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainName2;
    var message = createBaseQueryShowChainInfoRequest();
    message.chainName = (_object$chainName2 = object.chainName) !== null && _object$chainName2 !== void 0 ? _object$chainName2 : "";
    return message;
  }
};
exports.QueryShowChainInfoRequest = QueryShowChainInfoRequest;
function createBaseApiList() {
  return {
    "interface": "",
    supportedApis: []
  };
}
var ApiList = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      "interface": (0, _helpers.isSet)(object["interface"]) ? String(object["interface"]) : "",
      supportedApis: Array.isArray(object === null || object === void 0 ? void 0 : object.supportedApis) ? object.supportedApis.map(function (e) {
        return String(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message["interface"] !== undefined && (obj["interface"] = message["interface"]);
    if (message.supportedApis) {
      obj.supportedApis = message.supportedApis.map(function (e) {
        return e;
      });
    } else {
      obj.supportedApis = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$interface, _object$supportedApis;
    var message = createBaseApiList();
    message["interface"] = (_object$interface = object["interface"]) !== null && _object$interface !== void 0 ? _object$interface : "";
    message.supportedApis = ((_object$supportedApis = object.supportedApis) === null || _object$supportedApis === void 0 ? void 0 : _object$supportedApis.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ApiList = ApiList;
function createBaseQueryShowChainInfoResponse() {
  return {
    chainID: "",
    interfaces: [],
    supportedApisInterfaceList: []
  };
}
var QueryShowChainInfoResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      chainID: (0, _helpers.isSet)(object.chainID) ? String(object.chainID) : "",
      interfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaces) ? object.interfaces.map(function (e) {
        return String(e);
      }) : [],
      supportedApisInterfaceList: Array.isArray(object === null || object === void 0 ? void 0 : object.supportedApisInterfaceList) ? object.supportedApisInterfaceList.map(function (e) {
        return ApiList.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(function (e) {
        return e;
      });
    } else {
      obj.interfaces = [];
    }
    if (message.supportedApisInterfaceList) {
      obj.supportedApisInterfaceList = message.supportedApisInterfaceList.map(function (e) {
        return e ? ApiList.toJSON(e) : undefined;
      });
    } else {
      obj.supportedApisInterfaceList = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainID2, _object$interfaces, _object$supportedApis2;
    var message = createBaseQueryShowChainInfoResponse();
    message.chainID = (_object$chainID2 = object.chainID) !== null && _object$chainID2 !== void 0 ? _object$chainID2 : "";
    message.interfaces = ((_object$interfaces = object.interfaces) === null || _object$interfaces === void 0 ? void 0 : _object$interfaces.map(function (e) {
      return e;
    })) || [];
    message.supportedApisInterfaceList = ((_object$supportedApis2 = object.supportedApisInterfaceList) === null || _object$supportedApis2 === void 0 ? void 0 : _object$supportedApis2.map(function (e) {
      return ApiList.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryShowChainInfoResponse = QueryShowChainInfoResponse;