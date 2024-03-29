import { Any } from "../../../google/protobuf/any";
import { signModeFromJSON } from "../signing/v1beta1/signing";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Tx is the standard type used for broadcasting transactions. */

/** Tx is the standard type used for broadcasting transactions. */

/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 */

/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 */

/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */

/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */

/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 * 
 * Since: cosmos-sdk 0.46
 */

/** TxBody is the body of a transaction that all signers sign over. */

/** TxBody is the body of a transaction that all signers sign over. */

/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 */

/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 */

/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 */

/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 */

/** ModeInfo describes the signing mode of a single or nested multisig signer. */

/** ModeInfo describes the signing mode of a single or nested multisig signer. */

/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 */

/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 */

/** Multi is the mode info for a multisig public key */

/** Multi is the mode info for a multisig public key */

/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */

/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */

/**
 * Tip is the tip used for meta-transactions.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * Tip is the tip used for meta-transactions.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 * 
 * Since: cosmos-sdk 0.46
 */

function createBaseTx() {
  return {
    body: TxBody.fromPartial({}),
    authInfo: AuthInfo.fromPartial({}),
    signatures: []
  };
}
export const Tx = {
  typeUrl: "/cosmos.tx.v1beta1.Tx",
  encode(message, writer = BinaryWriter.create()) {
    if (message.body !== undefined) {
      TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.authInfo !== undefined) {
      AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = TxBody.decode(reader, reader.uint32());
          break;
        case 2:
          message.authInfo = AuthInfo.decode(reader, reader.uint32());
          break;
        case 3:
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
    const message = createBaseTx();
    message.body = object.body !== undefined && object.body !== null ? TxBody.fromPartial(object.body) : undefined;
    message.authInfo = object.authInfo !== undefined && object.authInfo !== null ? AuthInfo.fromPartial(object.authInfo) : undefined;
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      body: object !== null && object !== void 0 && object.body ? TxBody.fromAmino(object.body) : undefined,
      authInfo: object !== null && object !== void 0 && object.auth_info ? AuthInfo.fromAmino(object.auth_info) : undefined,
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.body = message.body ? TxBody.toAmino(message.body) : undefined;
    obj.auth_info = message.authInfo ? AuthInfo.toAmino(message.authInfo) : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Tx.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Tx",
      value: Tx.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Tx.decode(message.value);
  },
  toProto(message) {
    return Tx.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.Tx",
      value: Tx.encode(message).finish()
    };
  }
};
function createBaseTxRaw() {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    signatures: []
  };
}
export const TxRaw = {
  typeUrl: "/cosmos.tx.v1beta1.TxRaw",
  encode(message, writer = BinaryWriter.create()) {
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxRaw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.authInfoBytes = reader.bytes();
          break;
        case 3:
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
    var _object$bodyBytes, _object$authInfoBytes, _object$signatures2;
    const message = createBaseTxRaw();
    message.bodyBytes = (_object$bodyBytes = object.bodyBytes) !== null && _object$bodyBytes !== void 0 ? _object$bodyBytes : new Uint8Array();
    message.authInfoBytes = (_object$authInfoBytes = object.authInfoBytes) !== null && _object$authInfoBytes !== void 0 ? _object$authInfoBytes : new Uint8Array();
    message.signatures = ((_object$signatures2 = object.signatures) === null || _object$signatures2 === void 0 ? void 0 : _object$signatures2.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      bodyBytes: object.body_bytes,
      authInfoBytes: object.auth_info_bytes,
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.body_bytes = message.bodyBytes;
    obj.auth_info_bytes = message.authInfoBytes;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return TxRaw.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxRaw",
      value: TxRaw.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxRaw.decode(message.value);
  },
  toProto(message) {
    return TxRaw.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxRaw",
      value: TxRaw.encode(message).finish()
    };
  }
};
function createBaseSignDoc() {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    chainId: "",
    accountNumber: BigInt(0)
  };
}
export const SignDoc = {
  typeUrl: "/cosmos.tx.v1beta1.SignDoc",
  encode(message, writer = BinaryWriter.create()) {
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(32).uint64(message.accountNumber);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.authInfoBytes = reader.bytes();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.accountNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$bodyBytes2, _object$authInfoBytes2, _object$chainId;
    const message = createBaseSignDoc();
    message.bodyBytes = (_object$bodyBytes2 = object.bodyBytes) !== null && _object$bodyBytes2 !== void 0 ? _object$bodyBytes2 : new Uint8Array();
    message.authInfoBytes = (_object$authInfoBytes2 = object.authInfoBytes) !== null && _object$authInfoBytes2 !== void 0 ? _object$authInfoBytes2 : new Uint8Array();
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      bodyBytes: object.body_bytes,
      authInfoBytes: object.auth_info_bytes,
      chainId: object.chain_id,
      accountNumber: BigInt(object.account_number)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.body_bytes = message.bodyBytes;
    obj.auth_info_bytes = message.authInfoBytes;
    obj.chain_id = message.chainId;
    obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return SignDoc.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SignDoc",
      value: SignDoc.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignDoc.decode(message.value);
  },
  toProto(message) {
    return SignDoc.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SignDoc",
      value: SignDoc.encode(message).finish()
    };
  }
};
function createBaseSignDocDirectAux() {
  return {
    bodyBytes: new Uint8Array(),
    publicKey: Any.fromPartial({}),
    chainId: "",
    accountNumber: BigInt(0),
    sequence: BigInt(0),
    tip: Tip.fromPartial({})
  };
}
export const SignDocDirectAux = {
  typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
  encode(message, writer = BinaryWriter.create()) {
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(32).uint64(message.accountNumber);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(40).uint64(message.sequence);
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignDocDirectAux();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.accountNumber = reader.uint64();
          break;
        case 5:
          message.sequence = reader.uint64();
          break;
        case 6:
          message.tip = Tip.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$bodyBytes3, _object$chainId2;
    const message = createBaseSignDocDirectAux();
    message.bodyBytes = (_object$bodyBytes3 = object.bodyBytes) !== null && _object$bodyBytes3 !== void 0 ? _object$bodyBytes3 : new Uint8Array();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.chainId = (_object$chainId2 = object.chainId) !== null && _object$chainId2 !== void 0 ? _object$chainId2 : "";
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      bodyBytes: object.body_bytes,
      publicKey: object !== null && object !== void 0 && object.public_key ? Any.fromAmino(object.public_key) : undefined,
      chainId: object.chain_id,
      accountNumber: BigInt(object.account_number),
      sequence: BigInt(object.sequence),
      tip: object !== null && object !== void 0 && object.tip ? Tip.fromAmino(object.tip) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.body_bytes = message.bodyBytes;
    obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
    obj.chain_id = message.chainId;
    obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.tip = message.tip ? Tip.toAmino(message.tip) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return SignDocDirectAux.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SignDocDirectAux",
      value: SignDocDirectAux.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignDocDirectAux.decode(message.value);
  },
  toProto(message) {
    return SignDocDirectAux.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
      value: SignDocDirectAux.encode(message).finish()
    };
  }
};
function createBaseTxBody() {
  return {
    messages: [],
    memo: "",
    timeoutHeight: BigInt(0),
    extensionOptions: [],
    nonCriticalExtensionOptions: []
  };
}
export const TxBody = {
  typeUrl: "/cosmos.tx.v1beta1.TxBody",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    if (message.timeoutHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.timeoutHeight);
    }
    for (const v of message.extensionOptions) {
      Any.encode(v, writer.uint32(8186).fork()).ldelim();
    }
    for (const v of message.nonCriticalExtensionOptions) {
      Any.encode(v, writer.uint32(16378).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.memo = reader.string();
          break;
        case 3:
          message.timeoutHeight = reader.uint64();
          break;
        case 1023:
          message.extensionOptions.push(Any.decode(reader, reader.uint32()));
          break;
        case 2047:
          message.nonCriticalExtensionOptions.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$messages, _object$memo, _object$extensionOpti, _object$nonCriticalEx;
    const message = createBaseTxBody();
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(e => Any.fromPartial(e))) || [];
    message.memo = (_object$memo = object.memo) !== null && _object$memo !== void 0 ? _object$memo : "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? BigInt(object.timeoutHeight.toString()) : BigInt(0);
    message.extensionOptions = ((_object$extensionOpti = object.extensionOptions) === null || _object$extensionOpti === void 0 ? void 0 : _object$extensionOpti.map(e => Any.fromPartial(e))) || [];
    message.nonCriticalExtensionOptions = ((_object$nonCriticalEx = object.nonCriticalExtensionOptions) === null || _object$nonCriticalEx === void 0 ? void 0 : _object$nonCriticalEx.map(e => Any.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(e => Any.fromAmino(e)) : [],
      memo: object.memo,
      timeoutHeight: BigInt(object.timeout_height),
      extensionOptions: Array.isArray(object === null || object === void 0 ? void 0 : object.extension_options) ? object.extension_options.map(e => Any.fromAmino(e)) : [],
      nonCriticalExtensionOptions: Array.isArray(object === null || object === void 0 ? void 0 : object.non_critical_extension_options) ? object.non_critical_extension_options.map(e => Any.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }
    obj.memo = message.memo;
    obj.timeout_height = message.timeoutHeight ? message.timeoutHeight.toString() : undefined;
    if (message.extensionOptions) {
      obj.extension_options = message.extensionOptions.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.extension_options = [];
    }
    if (message.nonCriticalExtensionOptions) {
      obj.non_critical_extension_options = message.nonCriticalExtensionOptions.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.non_critical_extension_options = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return TxBody.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TxBody",
      value: TxBody.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return TxBody.decode(message.value);
  },
  toProto(message) {
    return TxBody.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: TxBody.encode(message).finish()
    };
  }
};
function createBaseAuthInfo() {
  return {
    signerInfos: [],
    fee: Fee.fromPartial({}),
    tip: Tip.fromPartial({})
  };
}
export const AuthInfo = {
  typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.signerInfos) {
      SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signerInfos.push(SignerInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 3:
          message.tip = Tip.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$signerInfos;
    const message = createBaseAuthInfo();
    message.signerInfos = ((_object$signerInfos = object.signerInfos) === null || _object$signerInfos === void 0 ? void 0 : _object$signerInfos.map(e => SignerInfo.fromPartial(e))) || [];
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      signerInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.signer_infos) ? object.signer_infos.map(e => SignerInfo.fromAmino(e)) : [],
      fee: object !== null && object !== void 0 && object.fee ? Fee.fromAmino(object.fee) : undefined,
      tip: object !== null && object !== void 0 && object.tip ? Tip.fromAmino(object.tip) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.signerInfos) {
      obj.signer_infos = message.signerInfos.map(e => e ? SignerInfo.toAmino(e) : undefined);
    } else {
      obj.signer_infos = [];
    }
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    obj.tip = message.tip ? Tip.toAmino(message.tip) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return AuthInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AuthInfo",
      value: AuthInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AuthInfo.decode(message.value);
  },
  toProto(message) {
    return AuthInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
      value: AuthInfo.encode(message).finish()
    };
  }
};
function createBaseSignerInfo() {
  return {
    publicKey: Any.fromPartial({}),
    modeInfo: ModeInfo.fromPartial({}),
    sequence: BigInt(0)
  };
}
export const SignerInfo = {
  typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.modeInfo !== undefined) {
      ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.modeInfo = ModeInfo.decode(reader, reader.uint32());
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
    const message = createBaseSignerInfo();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.modeInfo = object.modeInfo !== undefined && object.modeInfo !== null ? ModeInfo.fromPartial(object.modeInfo) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      publicKey: object !== null && object !== void 0 && object.public_key ? Any.fromAmino(object.public_key) : undefined,
      modeInfo: object !== null && object !== void 0 && object.mode_info ? ModeInfo.fromAmino(object.mode_info) : undefined,
      sequence: BigInt(object.sequence)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
    obj.mode_info = message.modeInfo ? ModeInfo.toAmino(message.modeInfo) : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return SignerInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SignerInfo",
      value: SignerInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignerInfo.decode(message.value);
  },
  toProto(message) {
    return SignerInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
      value: SignerInfo.encode(message).finish()
    };
  }
};
function createBaseModeInfo() {
  return {
    single: undefined,
    multi: undefined
  };
}
export const ModeInfo = {
  typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.single !== undefined) {
      ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = ModeInfo_Single.decode(reader, reader.uint32());
          break;
        case 2:
          message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseModeInfo();
    message.single = object.single !== undefined && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      single: object !== null && object !== void 0 && object.single ? ModeInfo_Single.fromAmino(object.single) : undefined,
      multi: object !== null && object !== void 0 && object.multi ? ModeInfo_Multi.fromAmino(object.multi) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.single = message.single ? ModeInfo_Single.toAmino(message.single) : undefined;
    obj.multi = message.multi ? ModeInfo_Multi.toAmino(message.multi) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return ModeInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ModeInfo",
      value: ModeInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModeInfo.decode(message.value);
  },
  toProto(message) {
    return ModeInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
      value: ModeInfo.encode(message).finish()
    };
  }
};
function createBaseModeInfo_Single() {
  return {
    mode: 0
  };
}
export const ModeInfo_Single = {
  typeUrl: "/cosmos.tx.v1beta1.Single",
  encode(message, writer = BinaryWriter.create()) {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$mode;
    const message = createBaseModeInfo_Single();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    return message;
  },
  fromAmino(object) {
    return {
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : -1
    };
  },
  toAmino(message) {
    const obj = {};
    obj.mode = message.mode;
    return obj;
  },
  fromAminoMsg(object) {
    return ModeInfo_Single.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Single",
      value: ModeInfo_Single.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModeInfo_Single.decode(message.value);
  },
  toProto(message) {
    return ModeInfo_Single.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.Single",
      value: ModeInfo_Single.encode(message).finish()
    };
  }
};
function createBaseModeInfo_Multi() {
  return {
    bitarray: CompactBitArray.fromPartial({}),
    modeInfos: []
  };
}
export const ModeInfo_Multi = {
  typeUrl: "/cosmos.tx.v1beta1.Multi",
  encode(message, writer = BinaryWriter.create()) {
    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.modeInfos) {
      ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.modeInfos.push(ModeInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$modeInfos;
    const message = createBaseModeInfo_Multi();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.modeInfos = ((_object$modeInfos = object.modeInfos) === null || _object$modeInfos === void 0 ? void 0 : _object$modeInfos.map(e => ModeInfo.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      bitarray: object !== null && object !== void 0 && object.bitarray ? CompactBitArray.fromAmino(object.bitarray) : undefined,
      modeInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.mode_infos) ? object.mode_infos.map(e => ModeInfo.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.bitarray = message.bitarray ? CompactBitArray.toAmino(message.bitarray) : undefined;
    if (message.modeInfos) {
      obj.mode_infos = message.modeInfos.map(e => e ? ModeInfo.toAmino(e) : undefined);
    } else {
      obj.mode_infos = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ModeInfo_Multi.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Multi",
      value: ModeInfo_Multi.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModeInfo_Multi.decode(message.value);
  },
  toProto(message) {
    return ModeInfo_Multi.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.Multi",
      value: ModeInfo_Multi.encode(message).finish()
    };
  }
};
function createBaseFee() {
  return {
    amount: [],
    gasLimit: BigInt(0),
    payer: "",
    granter: ""
  };
}
export const Fee = {
  typeUrl: "/cosmos.tx.v1beta1.Fee",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasLimit);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.granter !== "") {
      writer.uint32(34).string(message.granter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.gasLimit = reader.uint64();
          break;
        case 3:
          message.payer = reader.string();
          break;
        case 4:
          message.granter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$amount, _object$payer, _object$granter;
    const message = createBaseFee();
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
    message.payer = (_object$payer = object.payer) !== null && _object$payer !== void 0 ? _object$payer : "";
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    return message;
  },
  fromAmino(object) {
    return {
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromAmino(e)) : [],
      gasLimit: BigInt(object.gas_limit),
      payer: object.payer,
      granter: object.granter
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.gas_limit = message.gasLimit ? message.gasLimit.toString() : undefined;
    obj.payer = message.payer;
    obj.granter = message.granter;
    return obj;
  },
  fromAminoMsg(object) {
    return Fee.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Fee",
      value: Fee.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Fee.decode(message.value);
  },
  toProto(message) {
    return Fee.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.Fee",
      value: Fee.encode(message).finish()
    };
  }
};
function createBaseTip() {
  return {
    amount: [],
    tipper: ""
  };
}
export const Tip = {
  typeUrl: "/cosmos.tx.v1beta1.Tip",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.tipper !== "") {
      writer.uint32(18).string(message.tipper);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tipper = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$amount2, _object$tipper;
    const message = createBaseTip();
    message.amount = ((_object$amount2 = object.amount) === null || _object$amount2 === void 0 ? void 0 : _object$amount2.map(e => Coin.fromPartial(e))) || [];
    message.tipper = (_object$tipper = object.tipper) !== null && _object$tipper !== void 0 ? _object$tipper : "";
    return message;
  },
  fromAmino(object) {
    return {
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromAmino(e)) : [],
      tipper: object.tipper
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.tipper = message.tipper;
    return obj;
  },
  fromAminoMsg(object) {
    return Tip.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Tip",
      value: Tip.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Tip.decode(message.value);
  },
  toProto(message) {
    return Tip.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.Tip",
      value: Tip.encode(message).finish()
    };
  }
};
function createBaseAuxSignerData() {
  return {
    address: "",
    signDoc: SignDocDirectAux.fromPartial({}),
    mode: 0,
    sig: new Uint8Array()
  };
}
export const AuxSignerData = {
  typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.signDoc !== undefined) {
      SignDocDirectAux.encode(message.signDoc, writer.uint32(18).fork()).ldelim();
    }
    if (message.mode !== 0) {
      writer.uint32(24).int32(message.mode);
    }
    if (message.sig.length !== 0) {
      writer.uint32(34).bytes(message.sig);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxSignerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.signDoc = SignDocDirectAux.decode(reader, reader.uint32());
          break;
        case 3:
          message.mode = reader.int32();
          break;
        case 4:
          message.sig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$address, _object$mode2, _object$sig;
    const message = createBaseAuxSignerData();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? SignDocDirectAux.fromPartial(object.signDoc) : undefined;
    message.mode = (_object$mode2 = object.mode) !== null && _object$mode2 !== void 0 ? _object$mode2 : 0;
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      address: object.address,
      signDoc: object !== null && object !== void 0 && object.sign_doc ? SignDocDirectAux.fromAmino(object.sign_doc) : undefined,
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : -1,
      sig: object.sig
    };
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address;
    obj.sign_doc = message.signDoc ? SignDocDirectAux.toAmino(message.signDoc) : undefined;
    obj.mode = message.mode;
    obj.sig = message.sig;
    return obj;
  },
  fromAminoMsg(object) {
    return AuxSignerData.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AuxSignerData",
      value: AuxSignerData.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AuxSignerData.decode(message.value);
  },
  toProto(message) {
    return AuxSignerData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
      value: AuxSignerData.encode(message).finish()
    };
  }
};