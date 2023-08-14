"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDowntimeResponse = exports.QueryDowntimeRequest = void 0;
var _downtime = require("./downtime");
var _duration = require("../../../../google/protobuf/duration");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */

/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */

/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */

/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */

function createBaseQueryDowntimeRequest() {
  return {
    startBlock: _helpers.Long.UZERO,
    endBlock: _helpers.Long.UZERO
  };
}
var QueryDowntimeRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.startBlock.isZero()) {
      writer.uint32(8).uint64(message.startBlock);
    }
    if (!message.endBlock.isZero()) {
      writer.uint32(16).uint64(message.endBlock);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDowntimeRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlock = reader.uint64();
          break;
        case 2:
          message.endBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryDowntimeRequest();
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? _helpers.Long.fromValue(object.startBlock) : _helpers.Long.UZERO;
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? _helpers.Long.fromValue(object.endBlock) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryDowntimeRequest = QueryDowntimeRequest;
function createBaseQueryDowntimeResponse() {
  return {
    downtimes: [],
    cumulativeDowntimeDuration: undefined
  };
}
var QueryDowntimeResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.downtimes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _downtime.Downtime.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.cumulativeDowntimeDuration !== undefined) {
      _duration.Duration.encode(message.cumulativeDowntimeDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDowntimeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtimes.push(_downtime.Downtime.decode(reader, reader.uint32()));
          break;
        case 2:
          message.cumulativeDowntimeDuration = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$downtimes;
    var message = createBaseQueryDowntimeResponse();
    message.downtimes = ((_object$downtimes = object.downtimes) === null || _object$downtimes === void 0 ? void 0 : _object$downtimes.map(function (e) {
      return _downtime.Downtime.fromPartial(e);
    })) || [];
    message.cumulativeDowntimeDuration = object.cumulativeDowntimeDuration !== undefined && object.cumulativeDowntimeDuration !== null ? _duration.Duration.fromPartial(object.cumulativeDowntimeDuration) : undefined;
    return message;
  }
};
exports.QueryDowntimeResponse = QueryDowntimeResponse;
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
      _downtime.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = _downtime.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== undefined && object.params !== null ? _downtime.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;