import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
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
export const PubKey = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$key;
    const message = createBasePubKey();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    return message;
  }
};
function createBasePrivKey() {
  return {
    key: new Uint8Array()
  };
}
export const PrivKey = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$key2;
    const message = createBasePrivKey();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : new Uint8Array();
    return message;
  }
};