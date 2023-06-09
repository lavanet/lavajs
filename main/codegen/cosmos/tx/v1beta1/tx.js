"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxRaw = exports.TxBody = exports.Tx = exports.Tip = exports.SignerInfo = exports.SignDocDirectAux = exports.SignDoc = exports.ModeInfo_Single = exports.ModeInfo_Multi = exports.ModeInfo = exports.Fee = exports.AuxSignerData = exports.AuthInfo = void 0;
var _any = require("../../../google/protobuf/any");
var _signing = require("../signing/v1beta1/signing");
var _multisig = require("../../crypto/multisig/v1beta1/multisig");
var _coin = require("../../base/v1beta1/coin");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    body: undefined,
    authInfo: undefined,
    signatures: []
  };
}
var Tx = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.body !== undefined) {
      TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.authInfo !== undefined) {
      AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.signatures),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(26).bytes(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTx();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      body: (0, _helpers.isSet)(object.body) ? TxBody.fromJSON(object.body) : undefined,
      authInfo: (0, _helpers.isSet)(object.authInfo) ? AuthInfo.fromJSON(object.authInfo) : undefined,
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(function (e) {
        return (0, _helpers.bytesFromBase64)(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.body !== undefined && (obj.body = message.body ? TxBody.toJSON(message.body) : undefined);
    message.authInfo !== undefined && (obj.authInfo = message.authInfo ? AuthInfo.toJSON(message.authInfo) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map(function (e) {
        return (0, _helpers.base64FromBytes)(e !== undefined ? e : new Uint8Array());
      });
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$signatures;
    var message = createBaseTx();
    message.body = object.body !== undefined && object.body !== null ? TxBody.fromPartial(object.body) : undefined;
    message.authInfo = object.authInfo !== undefined && object.authInfo !== null ? AuthInfo.fromPartial(object.authInfo) : undefined;
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.Tx = Tx;
function createBaseTxRaw() {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    signatures: []
  };
}
var TxRaw = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }
    var _iterator2 = _createForOfIteratorHelper(message.signatures),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(26).bytes(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxRaw();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      bodyBytes: (0, _helpers.isSet)(object.bodyBytes) ? (0, _helpers.bytesFromBase64)(object.bodyBytes) : new Uint8Array(),
      authInfoBytes: (0, _helpers.isSet)(object.authInfoBytes) ? (0, _helpers.bytesFromBase64)(object.authInfoBytes) : new Uint8Array(),
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(function (e) {
        return (0, _helpers.bytesFromBase64)(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bodyBytes !== undefined && (obj.bodyBytes = (0, _helpers.base64FromBytes)(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
    message.authInfoBytes !== undefined && (obj.authInfoBytes = (0, _helpers.base64FromBytes)(message.authInfoBytes !== undefined ? message.authInfoBytes : new Uint8Array()));
    if (message.signatures) {
      obj.signatures = message.signatures.map(function (e) {
        return (0, _helpers.base64FromBytes)(e !== undefined ? e : new Uint8Array());
      });
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$bodyBytes, _object$authInfoBytes, _object$signatures2;
    var message = createBaseTxRaw();
    message.bodyBytes = (_object$bodyBytes = object.bodyBytes) !== null && _object$bodyBytes !== void 0 ? _object$bodyBytes : new Uint8Array();
    message.authInfoBytes = (_object$authInfoBytes = object.authInfoBytes) !== null && _object$authInfoBytes !== void 0 ? _object$authInfoBytes : new Uint8Array();
    message.signatures = ((_object$signatures2 = object.signatures) === null || _object$signatures2 === void 0 ? void 0 : _object$signatures2.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.TxRaw = TxRaw;
function createBaseSignDoc() {
  return {
    bodyBytes: new Uint8Array(),
    authInfoBytes: new Uint8Array(),
    chainId: "",
    accountNumber: _helpers.Long.UZERO
  };
}
var SignDoc = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(32).uint64(message.accountNumber);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignDoc();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      bodyBytes: (0, _helpers.isSet)(object.bodyBytes) ? (0, _helpers.bytesFromBase64)(object.bodyBytes) : new Uint8Array(),
      authInfoBytes: (0, _helpers.isSet)(object.authInfoBytes) ? (0, _helpers.bytesFromBase64)(object.authInfoBytes) : new Uint8Array(),
      chainId: (0, _helpers.isSet)(object.chainId) ? String(object.chainId) : "",
      accountNumber: (0, _helpers.isSet)(object.accountNumber) ? _helpers.Long.fromValue(object.accountNumber) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bodyBytes !== undefined && (obj.bodyBytes = (0, _helpers.base64FromBytes)(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
    message.authInfoBytes !== undefined && (obj.authInfoBytes = (0, _helpers.base64FromBytes)(message.authInfoBytes !== undefined ? message.authInfoBytes : new Uint8Array()));
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$bodyBytes2, _object$authInfoBytes2, _object$chainId;
    var message = createBaseSignDoc();
    message.bodyBytes = (_object$bodyBytes2 = object.bodyBytes) !== null && _object$bodyBytes2 !== void 0 ? _object$bodyBytes2 : new Uint8Array();
    message.authInfoBytes = (_object$authInfoBytes2 = object.authInfoBytes) !== null && _object$authInfoBytes2 !== void 0 ? _object$authInfoBytes2 : new Uint8Array();
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? _helpers.Long.fromValue(object.accountNumber) : _helpers.Long.UZERO;
    return message;
  }
};
exports.SignDoc = SignDoc;
function createBaseSignDocDirectAux() {
  return {
    bodyBytes: new Uint8Array(),
    publicKey: undefined,
    chainId: "",
    accountNumber: _helpers.Long.UZERO,
    sequence: _helpers.Long.UZERO,
    tip: undefined
  };
}
var SignDocDirectAux = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.publicKey !== undefined) {
      _any.Any.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(32).uint64(message.accountNumber);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(40).uint64(message.sequence);
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignDocDirectAux();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.publicKey = _any.Any.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      bodyBytes: (0, _helpers.isSet)(object.bodyBytes) ? (0, _helpers.bytesFromBase64)(object.bodyBytes) : new Uint8Array(),
      publicKey: (0, _helpers.isSet)(object.publicKey) ? _any.Any.fromJSON(object.publicKey) : undefined,
      chainId: (0, _helpers.isSet)(object.chainId) ? String(object.chainId) : "",
      accountNumber: (0, _helpers.isSet)(object.accountNumber) ? _helpers.Long.fromValue(object.accountNumber) : _helpers.Long.UZERO,
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO,
      tip: (0, _helpers.isSet)(object.tip) ? Tip.fromJSON(object.tip) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bodyBytes !== undefined && (obj.bodyBytes = (0, _helpers.base64FromBytes)(message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array()));
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? _any.Any.toJSON(message.publicKey) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || _helpers.Long.UZERO).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || _helpers.Long.UZERO).toString());
    message.tip !== undefined && (obj.tip = message.tip ? Tip.toJSON(message.tip) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$bodyBytes3, _object$chainId2;
    var message = createBaseSignDocDirectAux();
    message.bodyBytes = (_object$bodyBytes3 = object.bodyBytes) !== null && _object$bodyBytes3 !== void 0 ? _object$bodyBytes3 : new Uint8Array();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? _any.Any.fromPartial(object.publicKey) : undefined;
    message.chainId = (_object$chainId2 = object.chainId) !== null && _object$chainId2 !== void 0 ? _object$chainId2 : "";
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? _helpers.Long.fromValue(object.accountNumber) : _helpers.Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  }
};
exports.SignDocDirectAux = SignDocDirectAux;
function createBaseTxBody() {
  return {
    messages: [],
    memo: "",
    timeoutHeight: _helpers.Long.UZERO,
    extensionOptions: [],
    nonCriticalExtensionOptions: []
  };
}
var TxBody = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.messages),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _any.Any.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    if (!message.timeoutHeight.isZero()) {
      writer.uint32(24).uint64(message.timeoutHeight);
    }
    var _iterator4 = _createForOfIteratorHelper(message.extensionOptions),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v = _step4.value;
        _any.Any.encode(_v, writer.uint32(8186).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.nonCriticalExtensionOptions),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v2 = _step5.value;
        _any.Any.encode(_v2, writer.uint32(16378).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxBody();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(_any.Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.memo = reader.string();
          break;
        case 3:
          message.timeoutHeight = reader.uint64();
          break;
        case 1023:
          message.extensionOptions.push(_any.Any.decode(reader, reader.uint32()));
          break;
        case 2047:
          message.nonCriticalExtensionOptions.push(_any.Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : [],
      memo: (0, _helpers.isSet)(object.memo) ? String(object.memo) : "",
      timeoutHeight: (0, _helpers.isSet)(object.timeoutHeight) ? _helpers.Long.fromValue(object.timeoutHeight) : _helpers.Long.UZERO,
      extensionOptions: Array.isArray(object === null || object === void 0 ? void 0 : object.extensionOptions) ? object.extensionOptions.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : [],
      nonCriticalExtensionOptions: Array.isArray(object === null || object === void 0 ? void 0 : object.nonCriticalExtensionOptions) ? object.nonCriticalExtensionOptions.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.messages) {
      obj.messages = message.messages.map(function (e) {
        return e ? _any.Any.toJSON(e) : undefined;
      });
    } else {
      obj.messages = [];
    }
    message.memo !== undefined && (obj.memo = message.memo);
    message.timeoutHeight !== undefined && (obj.timeoutHeight = (message.timeoutHeight || _helpers.Long.UZERO).toString());
    if (message.extensionOptions) {
      obj.extensionOptions = message.extensionOptions.map(function (e) {
        return e ? _any.Any.toJSON(e) : undefined;
      });
    } else {
      obj.extensionOptions = [];
    }
    if (message.nonCriticalExtensionOptions) {
      obj.nonCriticalExtensionOptions = message.nonCriticalExtensionOptions.map(function (e) {
        return e ? _any.Any.toJSON(e) : undefined;
      });
    } else {
      obj.nonCriticalExtensionOptions = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$messages, _object$memo, _object$extensionOpti, _object$nonCriticalEx;
    var message = createBaseTxBody();
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.memo = (_object$memo = object.memo) !== null && _object$memo !== void 0 ? _object$memo : "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? _helpers.Long.fromValue(object.timeoutHeight) : _helpers.Long.UZERO;
    message.extensionOptions = ((_object$extensionOpti = object.extensionOptions) === null || _object$extensionOpti === void 0 ? void 0 : _object$extensionOpti.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.nonCriticalExtensionOptions = ((_object$nonCriticalEx = object.nonCriticalExtensionOptions) === null || _object$nonCriticalEx === void 0 ? void 0 : _object$nonCriticalEx.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.TxBody = TxBody;
function createBaseAuthInfo() {
  return {
    signerInfos: [],
    fee: undefined,
    tip: undefined
  };
}
var AuthInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.signerInfos),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAuthInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      signerInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.signerInfos) ? object.signerInfos.map(function (e) {
        return SignerInfo.fromJSON(e);
      }) : [],
      fee: (0, _helpers.isSet)(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      tip: (0, _helpers.isSet)(object.tip) ? Tip.fromJSON(object.tip) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.signerInfos) {
      obj.signerInfos = message.signerInfos.map(function (e) {
        return e ? SignerInfo.toJSON(e) : undefined;
      });
    } else {
      obj.signerInfos = [];
    }
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.tip !== undefined && (obj.tip = message.tip ? Tip.toJSON(message.tip) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$signerInfos;
    var message = createBaseAuthInfo();
    message.signerInfos = ((_object$signerInfos = object.signerInfos) === null || _object$signerInfos === void 0 ? void 0 : _object$signerInfos.map(function (e) {
      return SignerInfo.fromPartial(e);
    })) || [];
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
    return message;
  }
};
exports.AuthInfo = AuthInfo;
function createBaseSignerInfo() {
  return {
    publicKey: undefined,
    modeInfo: undefined,
    sequence: _helpers.Long.UZERO
  };
}
var SignerInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.publicKey !== undefined) {
      _any.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.modeInfo !== undefined) {
      ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignerInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = _any.Any.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      publicKey: (0, _helpers.isSet)(object.publicKey) ? _any.Any.fromJSON(object.publicKey) : undefined,
      modeInfo: (0, _helpers.isSet)(object.modeInfo) ? ModeInfo.fromJSON(object.modeInfo) : undefined,
      sequence: (0, _helpers.isSet)(object.sequence) ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? _any.Any.toJSON(message.publicKey) : undefined);
    message.modeInfo !== undefined && (obj.modeInfo = message.modeInfo ? ModeInfo.toJSON(message.modeInfo) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSignerInfo();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? _any.Any.fromPartial(object.publicKey) : undefined;
    message.modeInfo = object.modeInfo !== undefined && object.modeInfo !== null ? ModeInfo.fromPartial(object.modeInfo) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.SignerInfo = SignerInfo;
function createBaseModeInfo() {
  return {
    single: undefined,
    multi: undefined
  };
}
var ModeInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.single !== undefined) {
      ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModeInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      single: (0, _helpers.isSet)(object.single) ? ModeInfo_Single.fromJSON(object.single) : undefined,
      multi: (0, _helpers.isSet)(object.multi) ? ModeInfo_Multi.fromJSON(object.multi) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.single !== undefined && (obj.single = message.single ? ModeInfo_Single.toJSON(message.single) : undefined);
    message.multi !== undefined && (obj.multi = message.multi ? ModeInfo_Multi.toJSON(message.multi) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseModeInfo();
    message.single = object.single !== undefined && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : undefined;
    return message;
  }
};
exports.ModeInfo = ModeInfo;
function createBaseModeInfo_Single() {
  return {
    mode: 0
  };
}
var ModeInfo_Single = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModeInfo_Single();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      mode: (0, _helpers.isSet)(object.mode) ? (0, _signing.signModeFromJSON)(object.mode) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.mode !== undefined && (obj.mode = (0, _signing.signModeToJSON)(message.mode));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$mode;
    var message = createBaseModeInfo_Single();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    return message;
  }
};
exports.ModeInfo_Single = ModeInfo_Single;
function createBaseModeInfo_Multi() {
  return {
    bitarray: undefined,
    modeInfos: []
  };
}
var ModeInfo_Multi = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.bitarray !== undefined) {
      _multisig.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    var _iterator7 = _createForOfIteratorHelper(message.modeInfos),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModeInfo_Multi();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = _multisig.CompactBitArray.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      bitarray: (0, _helpers.isSet)(object.bitarray) ? _multisig.CompactBitArray.fromJSON(object.bitarray) : undefined,
      modeInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.modeInfos) ? object.modeInfos.map(function (e) {
        return ModeInfo.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bitarray !== undefined && (obj.bitarray = message.bitarray ? _multisig.CompactBitArray.toJSON(message.bitarray) : undefined);
    if (message.modeInfos) {
      obj.modeInfos = message.modeInfos.map(function (e) {
        return e ? ModeInfo.toJSON(e) : undefined;
      });
    } else {
      obj.modeInfos = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$modeInfos;
    var message = createBaseModeInfo_Multi();
    message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? _multisig.CompactBitArray.fromPartial(object.bitarray) : undefined;
    message.modeInfos = ((_object$modeInfos = object.modeInfos) === null || _object$modeInfos === void 0 ? void 0 : _object$modeInfos.map(function (e) {
      return ModeInfo.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ModeInfo_Multi = ModeInfo_Multi;
function createBaseFee() {
  return {
    amount: [],
    gasLimit: _helpers.Long.UZERO,
    payer: "",
    granter: ""
  };
}
var Fee = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator8 = _createForOfIteratorHelper(message.amount),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    if (!message.gasLimit.isZero()) {
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFee();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
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
  fromJSON: function fromJSON(object) {
    return {
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      gasLimit: (0, _helpers.isSet)(object.gasLimit) ? _helpers.Long.fromValue(object.gasLimit) : _helpers.Long.UZERO,
      payer: (0, _helpers.isSet)(object.payer) ? String(object.payer) : "",
      granter: (0, _helpers.isSet)(object.granter) ? String(object.granter) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? _coin.Coin.toJSON(e) : undefined;
      });
    } else {
      obj.amount = [];
    }
    message.gasLimit !== undefined && (obj.gasLimit = (message.gasLimit || _helpers.Long.UZERO).toString());
    message.payer !== undefined && (obj.payer = message.payer);
    message.granter !== undefined && (obj.granter = message.granter);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$amount, _object$payer, _object$granter;
    var message = createBaseFee();
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? _helpers.Long.fromValue(object.gasLimit) : _helpers.Long.UZERO;
    message.payer = (_object$payer = object.payer) !== null && _object$payer !== void 0 ? _object$payer : "";
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    return message;
  }
};
exports.Fee = Fee;
function createBaseTip() {
  return {
    amount: [],
    tipper: ""
  };
}
var Tip = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator9 = _createForOfIteratorHelper(message.amount),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    if (message.tipper !== "") {
      writer.uint32(18).string(message.tipper);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTip();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
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
  fromJSON: function fromJSON(object) {
    return {
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      tipper: (0, _helpers.isSet)(object.tipper) ? String(object.tipper) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? _coin.Coin.toJSON(e) : undefined;
      });
    } else {
      obj.amount = [];
    }
    message.tipper !== undefined && (obj.tipper = message.tipper);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$amount2, _object$tipper;
    var message = createBaseTip();
    message.amount = ((_object$amount2 = object.amount) === null || _object$amount2 === void 0 ? void 0 : _object$amount2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.tipper = (_object$tipper = object.tipper) !== null && _object$tipper !== void 0 ? _object$tipper : "";
    return message;
  }
};
exports.Tip = Tip;
function createBaseAuxSignerData() {
  return {
    address: "",
    signDoc: undefined,
    mode: 0,
    sig: new Uint8Array()
  };
}
var AuxSignerData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAuxSignerData();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      signDoc: (0, _helpers.isSet)(object.signDoc) ? SignDocDirectAux.fromJSON(object.signDoc) : undefined,
      mode: (0, _helpers.isSet)(object.mode) ? (0, _signing.signModeFromJSON)(object.mode) : 0,
      sig: (0, _helpers.isSet)(object.sig) ? (0, _helpers.bytesFromBase64)(object.sig) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.signDoc !== undefined && (obj.signDoc = message.signDoc ? SignDocDirectAux.toJSON(message.signDoc) : undefined);
    message.mode !== undefined && (obj.mode = (0, _signing.signModeToJSON)(message.mode));
    message.sig !== undefined && (obj.sig = (0, _helpers.base64FromBytes)(message.sig !== undefined ? message.sig : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$mode2, _object$sig;
    var message = createBaseAuxSignerData();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? SignDocDirectAux.fromPartial(object.signDoc) : undefined;
    message.mode = (_object$mode2 = object.mode) !== null && _object$mode2 !== void 0 ? _object$mode2 : 0;
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    return message;
  }
};
exports.AuxSignerData = AuxSignerData;