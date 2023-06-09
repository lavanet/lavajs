import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
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
    secret: new Uint8Array()
  };
}
export const PrivKey = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.secret.length !== 0) {
      writer.uint32(10).bytes(message.secret);
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
          message.secret = reader.bytes();
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
      secret: isSet(object.secret) ? bytesFromBase64(object.secret) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.secret !== undefined && (obj.secret = base64FromBytes(message.secret !== undefined ? message.secret : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$secret;
    const message = createBasePrivKey();
    message.secret = (_object$secret = object.secret) !== null && _object$secret !== void 0 ? _object$secret : new Uint8Array();
    return message;
  }
};