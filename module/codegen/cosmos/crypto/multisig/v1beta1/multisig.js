import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 */

/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 */

/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 */

/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 */

function createBaseMultiSignature() {
  return {
    signatures: []
  };
}
export const MultiSignature = {
  typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.signatures) {
      writer.uint32(10).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$signatures;
    const message = createBaseMultiSignature();
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MultiSignature.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MultiSignature",
      value: MultiSignature.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MultiSignature.decode(message.value);
  },
  toProto(message) {
    return MultiSignature.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
      value: MultiSignature.encode(message).finish()
    };
  }
};
function createBaseCompactBitArray() {
  return {
    extraBitsStored: 0,
    elems: new Uint8Array()
  };
}
export const CompactBitArray = {
  typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
  encode(message, writer = BinaryWriter.create()) {
    if (message.extraBitsStored !== 0) {
      writer.uint32(8).uint32(message.extraBitsStored);
    }
    if (message.elems.length !== 0) {
      writer.uint32(18).bytes(message.elems);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompactBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extraBitsStored = reader.uint32();
          break;
        case 2:
          message.elems = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$extraBitsStor, _object$elems;
    const message = createBaseCompactBitArray();
    message.extraBitsStored = (_object$extraBitsStor = object.extraBitsStored) !== null && _object$extraBitsStor !== void 0 ? _object$extraBitsStor : 0;
    message.elems = (_object$elems = object.elems) !== null && _object$elems !== void 0 ? _object$elems : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      extraBitsStored: object.extra_bits_stored,
      elems: object.elems
    };
  },
  toAmino(message) {
    const obj = {};
    obj.extra_bits_stored = message.extraBitsStored;
    obj.elems = message.elems;
    return obj;
  },
  fromAminoMsg(object) {
    return CompactBitArray.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CompactBitArray",
      value: CompactBitArray.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CompactBitArray.decode(message.value);
  },
  toProto(message) {
    return CompactBitArray.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
      value: CompactBitArray.encode(message).finish()
    };
  }
};