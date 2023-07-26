"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Version = exports.Params = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseVersion() {
  return {
    providerTarget: "",
    providerMin: "",
    consumerTarget: "",
    consumerMin: ""
  };
}
var Version = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.providerTarget !== "") {
      writer.uint32(10).string(message.providerTarget);
    }
    if (message.providerMin !== "") {
      writer.uint32(18).string(message.providerMin);
    }
    if (message.consumerTarget !== "") {
      writer.uint32(26).string(message.consumerTarget);
    }
    if (message.consumerMin !== "") {
      writer.uint32(34).string(message.consumerMin);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersion();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerTarget = reader.string();
          break;
        case 2:
          message.providerMin = reader.string();
          break;
        case 3:
          message.consumerTarget = reader.string();
          break;
        case 4:
          message.consumerMin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$providerTarge, _object$providerMin, _object$consumerTarge, _object$consumerMin;
    var message = createBaseVersion();
    message.providerTarget = (_object$providerTarge = object.providerTarget) !== null && _object$providerTarge !== void 0 ? _object$providerTarge : "";
    message.providerMin = (_object$providerMin = object.providerMin) !== null && _object$providerMin !== void 0 ? _object$providerMin : "";
    message.consumerTarget = (_object$consumerTarge = object.consumerTarget) !== null && _object$consumerTarge !== void 0 ? _object$consumerTarge : "";
    message.consumerMin = (_object$consumerMin = object.consumerMin) !== null && _object$consumerMin !== void 0 ? _object$consumerMin : "";
    return message;
  }
};
exports.Version = Version;
function createBaseParams() {
  return {
    version: undefined
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Version.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseParams();
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    return message;
  }
};
exports.Params = Params;