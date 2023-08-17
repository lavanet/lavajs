"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublicKey = void 0;
var _binary = require("../../binary");
/** PublicKey defines the keys available for use with Tendermint Validators */

/** PublicKey defines the keys available for use with Tendermint Validators */

function createBasePublicKey() {
  return {
    ed25519: undefined,
    secp256k1: undefined
  };
}
var PublicKey = {
  typeUrl: "/tendermint.crypto.PublicKey",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    if (message.secp256k1 !== undefined) {
      writer.uint32(18).bytes(message.secp256k1);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
  fromPartial: function fromPartial(object) {
    var _object$ed, _object$secp256k;
    var message = createBasePublicKey();
    message.ed25519 = (_object$ed = object.ed25519) !== null && _object$ed !== void 0 ? _object$ed : undefined;
    message.secp256k1 = (_object$secp256k = object.secp256k1) !== null && _object$secp256k !== void 0 ? _object$secp256k : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      ed25519: object === null || object === void 0 ? void 0 : object.ed25519,
      secp256k1: object === null || object === void 0 ? void 0 : object.secp256k1
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.ed25519 = message.ed25519;
    obj.secp256k1 = message.secp256k1;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PublicKey.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PublicKey.decode(message.value);
  },
  toProto: function toProto(message) {
    return PublicKey.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.PublicKey",
      value: PublicKey.encode(message).finish()
    };
  }
};
exports.PublicKey = PublicKey;