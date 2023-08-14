"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryListResponse = exports.QueryListRequest = exports.QueryListProjectsResponse = exports.QueryListProjectsRequest = exports.QueryCurrentResponse = exports.QueryCurrentRequest = exports.ListInfoStruct = void 0;
var _params = require("./params");
var _subscription = require("./subscription");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
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
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryCurrentRequest() {
  return {
    consumer: ""
  };
}
var QueryCurrentRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCurrentRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$consumer;
    var message = createBaseQueryCurrentRequest();
    message.consumer = (_object$consumer = object.consumer) !== null && _object$consumer !== void 0 ? _object$consumer : "";
    return message;
  }
};
exports.QueryCurrentRequest = QueryCurrentRequest;
function createBaseQueryCurrentResponse() {
  return {
    sub: undefined
  };
}
var QueryCurrentResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.sub !== undefined) {
      _subscription.Subscription.encode(message.sub, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCurrentResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sub = _subscription.Subscription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryCurrentResponse();
    message.sub = object.sub !== undefined && object.sub !== null ? _subscription.Subscription.fromPartial(object.sub) : undefined;
    return message;
  }
};
exports.QueryCurrentResponse = QueryCurrentResponse;
function createBaseQueryListProjectsRequest() {
  return {
    subscription: ""
  };
}
var QueryListProjectsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.subscription !== "") {
      writer.uint32(10).string(message.subscription);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryListProjectsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$subscription;
    var message = createBaseQueryListProjectsRequest();
    message.subscription = (_object$subscription = object.subscription) !== null && _object$subscription !== void 0 ? _object$subscription : "";
    return message;
  }
};
exports.QueryListProjectsRequest = QueryListProjectsRequest;
function createBaseQueryListProjectsResponse() {
  return {
    projects: []
  };
}
var QueryListProjectsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.projects),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryListProjectsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$projects;
    var message = createBaseQueryListProjectsResponse();
    message.projects = ((_object$projects = object.projects) === null || _object$projects === void 0 ? void 0 : _object$projects.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.QueryListProjectsResponse = QueryListProjectsResponse;
function createBaseQueryListRequest() {
  return {};
}
var QueryListRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryListRequest();
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
    var message = createBaseQueryListRequest();
    return message;
  }
};
exports.QueryListRequest = QueryListRequest;
function createBaseQueryListResponse() {
  return {
    subsInfo: []
  };
}
var QueryListResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.subsInfo),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        ListInfoStruct.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryListResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$subsInfo;
    var message = createBaseQueryListResponse();
    message.subsInfo = ((_object$subsInfo = object.subsInfo) === null || _object$subsInfo === void 0 ? void 0 : _object$subsInfo.map(function (e) {
      return ListInfoStruct.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryListResponse = QueryListResponse;
function createBaseListInfoStruct() {
  return {
    consumer: "",
    plan: "",
    durationTotal: _helpers.Long.UZERO,
    durationLeft: _helpers.Long.UZERO,
    monthExpiry: _helpers.Long.UZERO,
    monthCuTotal: _helpers.Long.UZERO,
    monthCuLeft: _helpers.Long.UZERO
  };
}
var ListInfoStruct = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseListInfoStruct();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        case 2:
          message.plan = reader.string();
          break;
        case 3:
          message.durationTotal = reader.uint64();
          break;
        case 4:
          message.durationLeft = reader.uint64();
          break;
        case 5:
          message.monthExpiry = reader.uint64();
          break;
        case 6:
          message.monthCuTotal = reader.uint64();
          break;
        case 7:
          message.monthCuLeft = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$consumer2, _object$plan;
    var message = createBaseListInfoStruct();
    message.consumer = (_object$consumer2 = object.consumer) !== null && _object$consumer2 !== void 0 ? _object$consumer2 : "";
    message.plan = (_object$plan = object.plan) !== null && _object$plan !== void 0 ? _object$plan : "";
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? _helpers.Long.fromValue(object.durationTotal) : _helpers.Long.UZERO;
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? _helpers.Long.fromValue(object.durationLeft) : _helpers.Long.UZERO;
    message.monthExpiry = object.monthExpiry !== undefined && object.monthExpiry !== null ? _helpers.Long.fromValue(object.monthExpiry) : _helpers.Long.UZERO;
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? _helpers.Long.fromValue(object.monthCuTotal) : _helpers.Long.UZERO;
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? _helpers.Long.fromValue(object.monthCuLeft) : _helpers.Long.UZERO;
    return message;
  }
};
exports.ListInfoStruct = ListInfoStruct;