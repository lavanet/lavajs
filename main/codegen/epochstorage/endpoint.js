"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Endpoint = void 0;
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseEndpoint() {
  return {
    iPPORT: "",
    useType: "",
    geolocation: _helpers.Long.UZERO
  };
}
var Endpoint = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.iPPORT !== "") {
      writer.uint32(10).string(message.iPPORT);
    }
    if (message.useType !== "") {
      writer.uint32(18).string(message.useType);
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(24).uint64(message.geolocation);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEndpoint();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iPPORT = reader.string();
          break;
        case 2:
          message.useType = reader.string();
          break;
        case 3:
          message.geolocation = reader.uint64();
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
      iPPORT: (0, _helpers.isSet)(object.iPPORT) ? String(object.iPPORT) : "",
      useType: (0, _helpers.isSet)(object.useType) ? String(object.useType) : "",
      geolocation: (0, _helpers.isSet)(object.geolocation) ? _helpers.Long.fromValue(object.geolocation) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.iPPORT !== undefined && (obj.iPPORT = message.iPPORT);
    message.useType !== undefined && (obj.useType = message.useType);
    message.geolocation !== undefined && (obj.geolocation = (message.geolocation || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$iPPORT, _object$useType;
    var message = createBaseEndpoint();
    message.iPPORT = (_object$iPPORT = object.iPPORT) !== null && _object$iPPORT !== void 0 ? _object$iPPORT : "";
    message.useType = (_object$useType = object.useType) !== null && _object$useType !== void 0 ? _object$useType : "";
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? _helpers.Long.fromValue(object.geolocation) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Endpoint = Endpoint;