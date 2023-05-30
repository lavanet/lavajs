"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FixatedParams = void 0;
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseFixatedParams() {
  return {
    index: "",
    parameter: new Uint8Array(),
    fixationBlock: _helpers.Long.UZERO
  };
}
var FixatedParams = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.parameter.length !== 0) {
      writer.uint32(18).bytes(message.parameter);
    }
    if (!message.fixationBlock.isZero()) {
      writer.uint32(24).uint64(message.fixationBlock);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFixatedParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.parameter = reader.bytes();
          break;
        case 3:
          message.fixationBlock = reader.uint64();
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
      parameter: (0, _helpers.isSet)(object.parameter) ? (0, _helpers.bytesFromBase64)(object.parameter) : new Uint8Array(),
      fixationBlock: (0, _helpers.isSet)(object.fixationBlock) ? _helpers.Long.fromValue(object.fixationBlock) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.parameter !== undefined && (obj.parameter = (0, _helpers.base64FromBytes)(message.parameter !== undefined ? message.parameter : new Uint8Array()));
    message.fixationBlock !== undefined && (obj.fixationBlock = (message.fixationBlock || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$parameter;
    var message = createBaseFixatedParams();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.parameter = (_object$parameter = object.parameter) !== null && _object$parameter !== void 0 ? _object$parameter : new Uint8Array();
    message.fixationBlock = object.fixationBlock !== undefined && object.fixationBlock !== null ? _helpers.Long.fromValue(object.fixationBlock) : _helpers.Long.UZERO;
    return message;
  }
};
exports.FixatedParams = FixatedParams;