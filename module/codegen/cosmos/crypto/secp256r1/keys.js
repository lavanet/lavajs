import { BinaryReader, BinaryWriter } from "../../../binary";
/** PubKey defines a secp256r1 ECDSA public key. */

/** PubKey defines a secp256r1 ECDSA public key. */

/** PrivKey defines a secp256r1 ECDSA private key. */

/** PrivKey defines a secp256r1 ECDSA private key. */

function createBasePubKey() {
  return {
    key: new Uint8Array()
  };
}
export const PubKey = {
  typeUrl: "/cosmos.crypto.secp256r1.PubKey",
  encode(message, writer = BinaryWriter.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$key;
    const message = createBasePubKey();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      key: object.key
    };
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg(object) {
    return PubKey.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PubKey",
      value: PubKey.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PubKey.decode(message.value);
  },
  toProto(message) {
    return PubKey.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.secp256r1.PubKey",
      value: PubKey.encode(message).finish()
    };
  }
};
function createBasePrivKey() {
  return {
    secret: new Uint8Array()
  };
}
export const PrivKey = {
  typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
  encode(message, writer = BinaryWriter.create()) {
    if (message.secret.length !== 0) {
      writer.uint32(10).bytes(message.secret);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$secret;
    const message = createBasePrivKey();
    message.secret = (_object$secret = object.secret) !== null && _object$secret !== void 0 ? _object$secret : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      secret: object.secret
    };
  },
  toAmino(message) {
    const obj = {};
    obj.secret = message.secret;
    return obj;
  },
  fromAminoMsg(object) {
    return PrivKey.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PrivKey",
      value: PrivKey.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PrivKey.decode(message.value);
  },
  toProto(message) {
    return PrivKey.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  }
};