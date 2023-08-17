"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PubKey = exports.PrivKey = void 0;
var _binary = require("../../../binary");
/** PubKey defines a secp256r1 ECDSA public key. */

/** PubKey defines a secp256r1 ECDSA public key. */

/** PrivKey defines a secp256r1 ECDSA private key. */

/** PrivKey defines a secp256r1 ECDSA private key. */

function createBasePubKey() {
  return {
    key: new Uint8Array()
  };
}
var PubKey = {
  typeUrl: "/cosmos.crypto.secp256r1.PubKey",
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
      typeUrl: "/cosmos.crypto.secp256r1.PubKey",
      value: PubKey.encode(message).finish()
    };
  }
};
exports.PubKey = PubKey;
function createBasePrivKey() {
  return {
    secret: new Uint8Array()
  };
}
var PrivKey = {
  typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.secret.length !== 0) {
      writer.uint32(10).bytes(message.secret);
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
          message.secret = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$secret;
    var message = createBasePrivKey();
    message.secret = (_object$secret = object.secret) !== null && _object$secret !== void 0 ? _object$secret : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      secret: object.secret
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.secret = message.secret;
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
      typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  }
};
exports.PrivKey = PrivKey;