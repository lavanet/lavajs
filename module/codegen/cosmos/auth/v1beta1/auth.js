import { Any } from "../../../google/protobuf/any";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */

/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */

/** ModuleAccount defines an account for modules that holds coins on a pool. */

/** ModuleAccount defines an account for modules that holds coins on a pool. */

/** Params defines the parameters for the auth module. */

/** Params defines the parameters for the auth module. */

function createBaseBaseAccount() {
  return {
    address: "",
    pubKey: undefined,
    accountNumber: Long.UZERO,
    sequence: Long.UZERO
  };
}
export const BaseAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountNumber = reader.uint64();
          break;
        case 4:
          message.sequence = reader.uint64();
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
      address: isSet(object.address) ? String(object.address) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      accountNumber: isSet(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseBaseAccount();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }
};
function createBaseModuleAccount() {
  return {
    baseAccount: undefined,
    name: "",
    permissions: []
  };
}
export const ModuleAccount = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
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
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      permissions: Array.isArray(object === null || object === void 0 ? void 0 : object.permissions) ? object.permissions.map(e => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$name, _object$permissions;
    const message = createBaseModuleAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.permissions = ((_object$permissions = object.permissions) === null || _object$permissions === void 0 ? void 0 : _object$permissions.map(e => e)) || [];
    return message;
  }
};
function createBaseParams() {
  return {
    maxMemoCharacters: Long.UZERO,
    txSigLimit: Long.UZERO,
    txSizeCostPerByte: Long.UZERO,
    sigVerifyCostEd25519: Long.UZERO,
    sigVerifyCostSecp256k1: Long.UZERO
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.maxMemoCharacters.isZero()) {
      writer.uint32(8).uint64(message.maxMemoCharacters);
    }
    if (!message.txSigLimit.isZero()) {
      writer.uint32(16).uint64(message.txSigLimit);
    }
    if (!message.txSizeCostPerByte.isZero()) {
      writer.uint32(24).uint64(message.txSizeCostPerByte);
    }
    if (!message.sigVerifyCostEd25519.isZero()) {
      writer.uint32(32).uint64(message.sigVerifyCostEd25519);
    }
    if (!message.sigVerifyCostSecp256k1.isZero()) {
      writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMemoCharacters = reader.uint64();
          break;
        case 2:
          message.txSigLimit = reader.uint64();
          break;
        case 3:
          message.txSizeCostPerByte = reader.uint64();
          break;
        case 4:
          message.sigVerifyCostEd25519 = reader.uint64();
          break;
        case 5:
          message.sigVerifyCostSecp256k1 = reader.uint64();
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
      maxMemoCharacters: isSet(object.maxMemoCharacters) ? Long.fromValue(object.maxMemoCharacters) : Long.UZERO,
      txSigLimit: isSet(object.txSigLimit) ? Long.fromValue(object.txSigLimit) : Long.UZERO,
      txSizeCostPerByte: isSet(object.txSizeCostPerByte) ? Long.fromValue(object.txSizeCostPerByte) : Long.UZERO,
      sigVerifyCostEd25519: isSet(object.sigVerifyCostEd25519) ? Long.fromValue(object.sigVerifyCostEd25519) : Long.UZERO,
      sigVerifyCostSecp256k1: isSet(object.sigVerifyCostSecp256k1) ? Long.fromValue(object.sigVerifyCostSecp256k1) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.maxMemoCharacters !== undefined && (obj.maxMemoCharacters = (message.maxMemoCharacters || Long.UZERO).toString());
    message.txSigLimit !== undefined && (obj.txSigLimit = (message.txSigLimit || Long.UZERO).toString());
    message.txSizeCostPerByte !== undefined && (obj.txSizeCostPerByte = (message.txSizeCostPerByte || Long.UZERO).toString());
    message.sigVerifyCostEd25519 !== undefined && (obj.sigVerifyCostEd25519 = (message.sigVerifyCostEd25519 || Long.UZERO).toString());
    message.sigVerifyCostSecp256k1 !== undefined && (obj.sigVerifyCostSecp256k1 = (message.sigVerifyCostSecp256k1 || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.maxMemoCharacters = object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null ? Long.fromValue(object.maxMemoCharacters) : Long.UZERO;
    message.txSigLimit = object.txSigLimit !== undefined && object.txSigLimit !== null ? Long.fromValue(object.txSigLimit) : Long.UZERO;
    message.txSizeCostPerByte = object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null ? Long.fromValue(object.txSizeCostPerByte) : Long.UZERO;
    message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null ? Long.fromValue(object.sigVerifyCostEd25519) : Long.UZERO;
    message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null ? Long.fromValue(object.sigVerifyCostSecp256k1) : Long.UZERO;
    return message;
  }
};