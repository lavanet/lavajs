"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniquePaymentStorageClientProvider = void 0;
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseUniquePaymentStorageClientProvider() {
  return {
    index: "",
    block: _helpers.Long.UZERO,
    usedCU: _helpers.Long.UZERO
  };
}
var UniquePaymentStorageClientProvider = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (!message.block.isZero()) {
      writer.uint32(16).uint64(message.block);
    }
    if (!message.usedCU.isZero()) {
      writer.uint32(24).uint64(message.usedCU);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUniquePaymentStorageClientProvider();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.block = reader.uint64();
          break;
        case 3:
          message.usedCU = reader.uint64();
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
      block: (0, _helpers.isSet)(object.block) ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO,
      usedCU: (0, _helpers.isSet)(object.usedCU) ? _helpers.Long.fromValue(object.usedCU) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.block !== undefined && (obj.block = (message.block || _helpers.Long.UZERO).toString());
    message.usedCU !== undefined && (obj.usedCU = (message.usedCU || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$index;
    var message = createBaseUniquePaymentStorageClientProvider();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.block = object.block !== undefined && object.block !== null ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO;
    message.usedCU = object.usedCU !== undefined && object.usedCU !== null ? _helpers.Long.fromValue(object.usedCU) : _helpers.Long.UZERO;
    return message;
  }
};
exports.UniquePaymentStorageClientProvider = UniquePaymentStorageClientProvider;