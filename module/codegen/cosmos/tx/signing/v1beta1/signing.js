import { CompactBitArray } from "../../../crypto/multisig/v1beta1/multisig";
import { Any } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/**
 * SignMode represents a signing mode with its own security guarantees.
 * 
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
export let SignMode = /*#__PURE__*/function (SignMode) {
  SignMode[SignMode["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
  SignMode[SignMode["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
  SignMode[SignMode["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
  SignMode[SignMode["SIGN_MODE_DIRECT_AUX"] = 3] = "SIGN_MODE_DIRECT_AUX";
  SignMode[SignMode["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
  SignMode[SignMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return SignMode;
}({});
export const SignModeSDKType = SignMode;
export function signModeFromJSON(object) {
  switch (object) {
    case 0:
    case "SIGN_MODE_UNSPECIFIED":
      return SignMode.SIGN_MODE_UNSPECIFIED;
    case 1:
    case "SIGN_MODE_DIRECT":
      return SignMode.SIGN_MODE_DIRECT;
    case 2:
    case "SIGN_MODE_TEXTUAL":
      return SignMode.SIGN_MODE_TEXTUAL;
    case 3:
    case "SIGN_MODE_DIRECT_AUX":
      return SignMode.SIGN_MODE_DIRECT_AUX;
    case 127:
    case "SIGN_MODE_LEGACY_AMINO_JSON":
      return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignMode.UNRECOGNIZED;
  }
}
export function signModeToJSON(object) {
  switch (object) {
    case SignMode.SIGN_MODE_UNSPECIFIED:
      return "SIGN_MODE_UNSPECIFIED";
    case SignMode.SIGN_MODE_DIRECT:
      return "SIGN_MODE_DIRECT";
    case SignMode.SIGN_MODE_TEXTUAL:
      return "SIGN_MODE_TEXTUAL";
    case SignMode.SIGN_MODE_DIRECT_AUX:
      return "SIGN_MODE_DIRECT_AUX";
    case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
      return "SIGN_MODE_LEGACY_AMINO_JSON";
    case SignMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SignatureDescriptors wraps multiple SignatureDescriptor's. */

/** SignatureDescriptors wraps multiple SignatureDescriptor's. */

/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */

/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */

/** Data represents signature data */

/** Data represents signature data */

/** Single is the signature data for a single signer */

/** Single is the signature data for a single signer */

/** Multi is the signature data for a multisig public key */

/** Multi is the signature data for a multisig public key */

function createBaseSignatureDescriptors() {
  return {
    signatures: []
  };
}
export const SignatureDescriptors = {
  typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.signatures) {
      SignatureDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatures.push(SignatureDescriptor.decode(reader, reader.uint32()));
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
    const message = createBaseSignatureDescriptors();
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map(e => SignatureDescriptor.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(e => SignatureDescriptor.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor.toAmino(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return SignatureDescriptors.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SignatureDescriptors",
      value: SignatureDescriptors.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignatureDescriptors.decode(message.value);
  },
  toProto(message) {
    return SignatureDescriptors.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors",
      value: SignatureDescriptors.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor() {
  return {
    publicKey: Any.fromPartial({}),
    data: SignatureDescriptor_Data.fromPartial({}),
    sequence: BigInt(0)
  };
}
export const SignatureDescriptor = {
  typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      SignatureDescriptor_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = SignatureDescriptor_Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSignatureDescriptor();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.data = object.data !== undefined && object.data !== null ? SignatureDescriptor_Data.fromPartial(object.data) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      publicKey: object !== null && object !== void 0 && object.public_key ? Any.fromAmino(object.public_key) : undefined,
      data: object !== null && object !== void 0 && object.data ? SignatureDescriptor_Data.fromAmino(object.data) : undefined,
      sequence: BigInt(object.sequence)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
    obj.data = message.data ? SignatureDescriptor_Data.toAmino(message.data) : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return SignatureDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SignatureDescriptor",
      value: SignatureDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignatureDescriptor.decode(message.value);
  },
  toProto(message) {
    return SignatureDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor",
      value: SignatureDescriptor.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor_Data() {
  return {
    single: undefined,
    multi: undefined
  };
}
export const SignatureDescriptor_Data = {
  typeUrl: "/cosmos.tx.signing.v1beta1.Data",
  encode(message, writer = BinaryWriter.create()) {
    if (message.single !== undefined) {
      SignatureDescriptor_Data_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      SignatureDescriptor_Data_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = SignatureDescriptor_Data_Single.decode(reader, reader.uint32());
          break;
        case 2:
          message.multi = SignatureDescriptor_Data_Multi.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSignatureDescriptor_Data();
    message.single = object.single !== undefined && object.single !== null ? SignatureDescriptor_Data_Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? SignatureDescriptor_Data_Multi.fromPartial(object.multi) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      single: object !== null && object !== void 0 && object.single ? SignatureDescriptor_Data_Single.fromAmino(object.single) : undefined,
      multi: object !== null && object !== void 0 && object.multi ? SignatureDescriptor_Data_Multi.fromAmino(object.multi) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.single = message.single ? SignatureDescriptor_Data_Single.toAmino(message.single) : undefined;
    obj.multi = message.multi ? SignatureDescriptor_Data_Multi.toAmino(message.multi) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return SignatureDescriptor_Data.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Data",
      value: SignatureDescriptor_Data.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignatureDescriptor_Data.decode(message.value);
  },
  toProto(message) {
    return SignatureDescriptor_Data.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.Data",
      value: SignatureDescriptor_Data.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor_Data_Single() {
  return {
    mode: 0,
    signature: new Uint8Array()
  };
}
export const SignatureDescriptor_Data_Single = {
  typeUrl: "/cosmos.tx.signing.v1beta1.Single",
  encode(message, writer = BinaryWriter.create()) {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$mode, _object$signature;
    const message = createBaseSignatureDescriptor_Data_Single();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    message.signature = (_object$signature = object.signature) !== null && _object$signature !== void 0 ? _object$signature : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : -1,
      signature: object.signature
    };
  },
  toAmino(message) {
    const obj = {};
    obj.mode = message.mode;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object) {
    return SignatureDescriptor_Data_Single.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Single",
      value: SignatureDescriptor_Data_Single.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignatureDescriptor_Data_Single.decode(message.value);
  },
  toProto(message) {
    return SignatureDescriptor_Data_Single.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.Single",
      value: SignatureDescriptor_Data_Single.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor_Data_Multi() {
  return {
    bitarray: CompactBitArray.fromPartial({}),
    signatures: []
  };
}
export const SignatureDescriptor_Data_Multi = {
  typeUrl: "/cosmos.tx.signing.v1beta1.Multi",
  encode(message, writer = BinaryWriter.create()) {
    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      SignatureDescriptor_Data.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.signatures.push(SignatureDescriptor_Data.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$signatures2;
    const message = createBaseSignatureDescriptor_Data_Multi();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.signatures = ((_object$signatures2 = object.signatures) === null || _object$signatures2 === void 0 ? void 0 : _object$signatures2.map(e => SignatureDescriptor_Data.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      bitarray: object !== null && object !== void 0 && object.bitarray ? CompactBitArray.fromAmino(object.bitarray) : undefined,
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(e => SignatureDescriptor_Data.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.bitarray = message.bitarray ? CompactBitArray.toAmino(message.bitarray) : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor_Data.toAmino(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return SignatureDescriptor_Data_Multi.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Multi",
      value: SignatureDescriptor_Data_Multi.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignatureDescriptor_Data_Multi.decode(message.value);
  },
  toProto(message) {
    return SignatureDescriptor_Data_Multi.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.Multi",
      value: SignatureDescriptor_Data_Multi.encode(message).finish()
    };
  }
};