"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProviderPaymentStorage = void 0;
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseProviderPaymentStorage() {
  return {
    index: "",
    epoch: _helpers.Long.UZERO,
    uniquePaymentStorageClientProviderKeys: [],
    complainersTotalCu: _helpers.Long.UZERO
  };
}
var ProviderPaymentStorage = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(24).uint64(message.epoch);
    }
    var _iterator = _createForOfIteratorHelper(message.uniquePaymentStorageClientProviderKeys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(42).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!message.complainersTotalCu.isZero()) {
      writer.uint32(48).uint64(message.complainersTotalCu);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProviderPaymentStorage();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.epoch = reader.uint64();
          break;
        case 5:
          message.uniquePaymentStorageClientProviderKeys.push(reader.string());
          break;
        case 6:
          message.complainersTotalCu = reader.uint64();
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
      index: (0, _helpers.isSet)(object.index) ? String(object.index) : "",
      epoch: (0, _helpers.isSet)(object.epoch) ? _helpers.Long.fromValue(object.epoch) : _helpers.Long.UZERO,
      uniquePaymentStorageClientProviderKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.uniquePaymentStorageClientProviderKeys) ? object.uniquePaymentStorageClientProviderKeys.map(function (e) {
        return String(e);
      }) : [],
      complainersTotalCu: (0, _helpers.isSet)(object.complainersTotalCu) ? _helpers.Long.fromValue(object.complainersTotalCu) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.epoch !== undefined && (obj.epoch = (message.epoch || _helpers.Long.UZERO).toString());
    if (message.uniquePaymentStorageClientProviderKeys) {
      obj.uniquePaymentStorageClientProviderKeys = message.uniquePaymentStorageClientProviderKeys.map(function (e) {
        return e;
      });
    } else {
      obj.uniquePaymentStorageClientProviderKeys = [];
    }
    message.complainersTotalCu !== undefined && (obj.complainersTotalCu = (message.complainersTotalCu || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$uniquePayment;
    var message = createBaseProviderPaymentStorage();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? _helpers.Long.fromValue(object.epoch) : _helpers.Long.UZERO;
    message.uniquePaymentStorageClientProviderKeys = ((_object$uniquePayment = object.uniquePaymentStorageClientProviderKeys) === null || _object$uniquePayment === void 0 ? void 0 : _object$uniquePayment.map(function (e) {
      return e;
    })) || [];
    message.complainersTotalCu = object.complainersTotalCu !== undefined && object.complainersTotalCu !== null ? _helpers.Long.fromValue(object.complainersTotalCu) : _helpers.Long.UZERO;
    return message;
  }
};
exports.ProviderPaymentStorage = ProviderPaymentStorage;