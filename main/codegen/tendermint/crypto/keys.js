"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublicKey = void 0;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** PublicKey defines the keys available for use with Tendermint Validators */

/** PublicKey defines the keys available for use with Tendermint Validators */

function createBasePublicKey() {
  return {
    ed25519: undefined,
    secp256k1: undefined
  };
}
var PublicKey = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    if (message.secp256k1 !== undefined) {
      writer.uint32(18).bytes(message.secp256k1);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePublicKey();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ed25519 = reader.bytes();
          break;
        case 2:
          message.secp256k1 = reader.bytes();
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
      ed25519: (0, _helpers.isSet)(object.ed25519) ? (0, _helpers.bytesFromBase64)(object.ed25519) : undefined,
      secp256k1: (0, _helpers.isSet)(object.secp256k1) ? (0, _helpers.bytesFromBase64)(object.secp256k1) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.ed25519 !== undefined && (obj.ed25519 = message.ed25519 !== undefined ? (0, _helpers.base64FromBytes)(message.ed25519) : undefined);
    message.secp256k1 !== undefined && (obj.secp256k1 = message.secp256k1 !== undefined ? (0, _helpers.base64FromBytes)(message.secp256k1) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$ed, _object$secp256k;
    var message = createBasePublicKey();
    message.ed25519 = (_object$ed = object.ed25519) !== null && _object$ed !== void 0 ? _object$ed : undefined;
    message.secp256k1 = (_object$secp256k = object.secp256k1) !== null && _object$secp256k !== void 0 ? _object$secp256k : undefined;
    return message;
  }
};
exports.PublicKey = PublicKey;