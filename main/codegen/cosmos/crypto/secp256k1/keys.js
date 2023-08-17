"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PubKey = exports.PrivKey = void 0;
var _binary = require("../../../binary");
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */

/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */

/** PrivKey defines a secp256k1 private key. */

/** PrivKey defines a secp256k1 private key. */

function createBasePubKey() {
  return {
    key: new Uint8Array()
  };
}
var PubKey = {
  typeUrl: "/cosmos.crypto.secp256k1.PubKey",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePubKey();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$key;
    var message = createBasePubKey();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      key: object.key
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PubKey.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PubKey",
      value: PubKey.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PubKey.decode(message.value);
  },
  toProto: function toProto(message) {
    return PubKey.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: PubKey.encode(message).finish()
    };
  }
};
exports.PubKey = PubKey;
function createBasePrivKey() {
  return {
    key: new Uint8Array()
  };
}
var PrivKey = {
  typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePrivKey();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$key2;
    var message = createBasePrivKey();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      key: object.key
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PrivKey.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PrivKey",
      value: PrivKey.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PrivKey.decode(message.value);
  },
  toProto: function toProto(message) {
    return PrivKey.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  }
};
exports.PrivKey = PrivKey;