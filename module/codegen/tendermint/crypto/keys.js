import { BinaryReader, BinaryWriter } from "../../binary";
/** PublicKey defines the keys available for use with Tendermint Validators */

/** PublicKey defines the keys available for use with Tendermint Validators */

function createBasePublicKey() {
  return {
    ed25519: undefined,
    secp256k1: undefined
  };
}
export const PublicKey = {
  typeUrl: "/tendermint.crypto.PublicKey",
  encode(message, writer = BinaryWriter.create()) {
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    if (message.secp256k1 !== undefined) {
      writer.uint32(18).bytes(message.secp256k1);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$ed, _object$secp256k;
    const message = createBasePublicKey();
    message.ed25519 = (_object$ed = object.ed25519) !== null && _object$ed !== void 0 ? _object$ed : undefined;
    message.secp256k1 = (_object$secp256k = object.secp256k1) !== null && _object$secp256k !== void 0 ? _object$secp256k : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      ed25519: object === null || object === void 0 ? void 0 : object.ed25519,
      secp256k1: object === null || object === void 0 ? void 0 : object.secp256k1
    };
  },
  toAmino(message) {
    const obj = {};
    obj.ed25519 = message.ed25519;
    obj.secp256k1 = message.secp256k1;
    return obj;
  },
  fromAminoMsg(object) {
    return PublicKey.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return PublicKey.decode(message.value);
  },
  toProto(message) {
    return PublicKey.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.PublicKey",
      value: PublicKey.encode(message).finish()
    };
  }
};