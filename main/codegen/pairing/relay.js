"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelaySession = exports.RelayRequest = exports.RelayReply = exports.RelayPrivateData = exports.QualityOfServiceReport = exports.Badge = void 0;
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseRelaySession() {
  return {
    specId: "",
    contentHash: new Uint8Array(),
    sessionId: _helpers.Long.UZERO,
    cuSum: _helpers.Long.UZERO,
    provider: "",
    relayNum: _helpers.Long.UZERO,
    qosReport: undefined,
    epoch: _helpers.Long.ZERO,
    unresponsiveProviders: new Uint8Array(),
    lavaChainId: "",
    sig: new Uint8Array(),
    badge: undefined
  };
}
var RelaySession = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.specId !== "") {
      writer.uint32(10).string(message.specId);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(18).bytes(message.contentHash);
    }
    if (!message.sessionId.isZero()) {
      writer.uint32(24).uint64(message.sessionId);
    }
    if (!message.cuSum.isZero()) {
      writer.uint32(32).uint64(message.cuSum);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (!message.relayNum.isZero()) {
      writer.uint32(48).uint64(message.relayNum);
    }
    if (message.qosReport !== undefined) {
      QualityOfServiceReport.encode(message.qosReport, writer.uint32(58).fork()).ldelim();
    }
    if (!message.epoch.isZero()) {
      writer.uint32(64).int64(message.epoch);
    }
    if (message.unresponsiveProviders.length !== 0) {
      writer.uint32(74).bytes(message.unresponsiveProviders);
    }
    if (message.lavaChainId !== "") {
      writer.uint32(82).string(message.lavaChainId);
    }
    if (message.sig.length !== 0) {
      writer.uint32(90).bytes(message.sig);
    }
    if (message.badge !== undefined) {
      Badge.encode(message.badge, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRelaySession();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.specId = reader.string();
          break;
        case 2:
          message.contentHash = reader.bytes();
          break;
        case 3:
          message.sessionId = reader.uint64();
          break;
        case 4:
          message.cuSum = reader.uint64();
          break;
        case 5:
          message.provider = reader.string();
          break;
        case 6:
          message.relayNum = reader.uint64();
          break;
        case 7:
          message.qosReport = QualityOfServiceReport.decode(reader, reader.uint32());
          break;
        case 8:
          message.epoch = reader.int64();
          break;
        case 9:
          message.unresponsiveProviders = reader.bytes();
          break;
        case 10:
          message.lavaChainId = reader.string();
          break;
        case 11:
          message.sig = reader.bytes();
          break;
        case 12:
          message.badge = Badge.decode(reader, reader.uint32());
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
      specId: (0, _helpers.isSet)(object.specId) ? String(object.specId) : "",
      contentHash: (0, _helpers.isSet)(object.contentHash) ? (0, _helpers.bytesFromBase64)(object.contentHash) : new Uint8Array(),
      sessionId: (0, _helpers.isSet)(object.sessionId) ? _helpers.Long.fromValue(object.sessionId) : _helpers.Long.UZERO,
      cuSum: (0, _helpers.isSet)(object.cuSum) ? _helpers.Long.fromValue(object.cuSum) : _helpers.Long.UZERO,
      provider: (0, _helpers.isSet)(object.provider) ? String(object.provider) : "",
      relayNum: (0, _helpers.isSet)(object.relayNum) ? _helpers.Long.fromValue(object.relayNum) : _helpers.Long.UZERO,
      qosReport: (0, _helpers.isSet)(object.qosReport) ? QualityOfServiceReport.fromJSON(object.qosReport) : undefined,
      epoch: (0, _helpers.isSet)(object.epoch) ? _helpers.Long.fromValue(object.epoch) : _helpers.Long.ZERO,
      unresponsiveProviders: (0, _helpers.isSet)(object.unresponsiveProviders) ? (0, _helpers.bytesFromBase64)(object.unresponsiveProviders) : new Uint8Array(),
      lavaChainId: (0, _helpers.isSet)(object.lavaChainId) ? String(object.lavaChainId) : "",
      sig: (0, _helpers.isSet)(object.sig) ? (0, _helpers.bytesFromBase64)(object.sig) : new Uint8Array(),
      badge: (0, _helpers.isSet)(object.badge) ? Badge.fromJSON(object.badge) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.specId !== undefined && (obj.specId = message.specId);
    message.contentHash !== undefined && (obj.contentHash = (0, _helpers.base64FromBytes)(message.contentHash !== undefined ? message.contentHash : new Uint8Array()));
    message.sessionId !== undefined && (obj.sessionId = (message.sessionId || _helpers.Long.UZERO).toString());
    message.cuSum !== undefined && (obj.cuSum = (message.cuSum || _helpers.Long.UZERO).toString());
    message.provider !== undefined && (obj.provider = message.provider);
    message.relayNum !== undefined && (obj.relayNum = (message.relayNum || _helpers.Long.UZERO).toString());
    message.qosReport !== undefined && (obj.qosReport = message.qosReport ? QualityOfServiceReport.toJSON(message.qosReport) : undefined);
    message.epoch !== undefined && (obj.epoch = (message.epoch || _helpers.Long.ZERO).toString());
    message.unresponsiveProviders !== undefined && (obj.unresponsiveProviders = (0, _helpers.base64FromBytes)(message.unresponsiveProviders !== undefined ? message.unresponsiveProviders : new Uint8Array()));
    message.lavaChainId !== undefined && (obj.lavaChainId = message.lavaChainId);
    message.sig !== undefined && (obj.sig = (0, _helpers.base64FromBytes)(message.sig !== undefined ? message.sig : new Uint8Array()));
    message.badge !== undefined && (obj.badge = message.badge ? Badge.toJSON(message.badge) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$specId, _object$contentHash, _object$provider, _object$unresponsiveP, _object$lavaChainId, _object$sig;
    var message = createBaseRelaySession();
    message.specId = (_object$specId = object.specId) !== null && _object$specId !== void 0 ? _object$specId : "";
    message.contentHash = (_object$contentHash = object.contentHash) !== null && _object$contentHash !== void 0 ? _object$contentHash : new Uint8Array();
    message.sessionId = object.sessionId !== undefined && object.sessionId !== null ? _helpers.Long.fromValue(object.sessionId) : _helpers.Long.UZERO;
    message.cuSum = object.cuSum !== undefined && object.cuSum !== null ? _helpers.Long.fromValue(object.cuSum) : _helpers.Long.UZERO;
    message.provider = (_object$provider = object.provider) !== null && _object$provider !== void 0 ? _object$provider : "";
    message.relayNum = object.relayNum !== undefined && object.relayNum !== null ? _helpers.Long.fromValue(object.relayNum) : _helpers.Long.UZERO;
    message.qosReport = object.qosReport !== undefined && object.qosReport !== null ? QualityOfServiceReport.fromPartial(object.qosReport) : undefined;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? _helpers.Long.fromValue(object.epoch) : _helpers.Long.ZERO;
    message.unresponsiveProviders = (_object$unresponsiveP = object.unresponsiveProviders) !== null && _object$unresponsiveP !== void 0 ? _object$unresponsiveP : new Uint8Array();
    message.lavaChainId = (_object$lavaChainId = object.lavaChainId) !== null && _object$lavaChainId !== void 0 ? _object$lavaChainId : "";
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    message.badge = object.badge !== undefined && object.badge !== null ? Badge.fromPartial(object.badge) : undefined;
    return message;
  }
};
exports.RelaySession = RelaySession;
function createBaseRelayPrivateData() {
  return {
    connectionType: "",
    apiUrl: "",
    data: new Uint8Array(),
    requestBlock: _helpers.Long.ZERO,
    apiInterface: "",
    salt: new Uint8Array()
  };
}
var RelayPrivateData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connectionType !== "") {
      writer.uint32(10).string(message.connectionType);
    }
    if (message.apiUrl !== "") {
      writer.uint32(18).string(message.apiUrl);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (!message.requestBlock.isZero()) {
      writer.uint32(32).int64(message.requestBlock);
    }
    if (message.apiInterface !== "") {
      writer.uint32(42).string(message.apiInterface);
    }
    if (message.salt.length !== 0) {
      writer.uint32(50).bytes(message.salt);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRelayPrivateData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionType = reader.string();
          break;
        case 2:
          message.apiUrl = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.requestBlock = reader.int64();
          break;
        case 5:
          message.apiInterface = reader.string();
          break;
        case 6:
          message.salt = reader.bytes();
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
      connectionType: (0, _helpers.isSet)(object.connectionType) ? String(object.connectionType) : "",
      apiUrl: (0, _helpers.isSet)(object.apiUrl) ? String(object.apiUrl) : "",
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array(),
      requestBlock: (0, _helpers.isSet)(object.requestBlock) ? _helpers.Long.fromValue(object.requestBlock) : _helpers.Long.ZERO,
      apiInterface: (0, _helpers.isSet)(object.apiInterface) ? String(object.apiInterface) : "",
      salt: (0, _helpers.isSet)(object.salt) ? (0, _helpers.bytesFromBase64)(object.salt) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.connectionType !== undefined && (obj.connectionType = message.connectionType);
    message.apiUrl !== undefined && (obj.apiUrl = message.apiUrl);
    message.data !== undefined && (obj.data = (0, _helpers.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
    message.requestBlock !== undefined && (obj.requestBlock = (message.requestBlock || _helpers.Long.ZERO).toString());
    message.apiInterface !== undefined && (obj.apiInterface = message.apiInterface);
    message.salt !== undefined && (obj.salt = (0, _helpers.base64FromBytes)(message.salt !== undefined ? message.salt : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$connectionTyp, _object$apiUrl, _object$data, _object$apiInterface, _object$salt;
    var message = createBaseRelayPrivateData();
    message.connectionType = (_object$connectionTyp = object.connectionType) !== null && _object$connectionTyp !== void 0 ? _object$connectionTyp : "";
    message.apiUrl = (_object$apiUrl = object.apiUrl) !== null && _object$apiUrl !== void 0 ? _object$apiUrl : "";
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.requestBlock = object.requestBlock !== undefined && object.requestBlock !== null ? _helpers.Long.fromValue(object.requestBlock) : _helpers.Long.ZERO;
    message.apiInterface = (_object$apiInterface = object.apiInterface) !== null && _object$apiInterface !== void 0 ? _object$apiInterface : "";
    message.salt = (_object$salt = object.salt) !== null && _object$salt !== void 0 ? _object$salt : new Uint8Array();
    return message;
  }
};
exports.RelayPrivateData = RelayPrivateData;
function createBaseRelayRequest() {
  return {
    relaySession: undefined,
    relayData: undefined
  };
}
var RelayRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.relaySession !== undefined) {
      RelaySession.encode(message.relaySession, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayData !== undefined) {
      RelayPrivateData.encode(message.relayData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRelayRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relaySession = RelaySession.decode(reader, reader.uint32());
          break;
        case 2:
          message.relayData = RelayPrivateData.decode(reader, reader.uint32());
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
      relaySession: (0, _helpers.isSet)(object.relaySession) ? RelaySession.fromJSON(object.relaySession) : undefined,
      relayData: (0, _helpers.isSet)(object.relayData) ? RelayPrivateData.fromJSON(object.relayData) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.relaySession !== undefined && (obj.relaySession = message.relaySession ? RelaySession.toJSON(message.relaySession) : undefined);
    message.relayData !== undefined && (obj.relayData = message.relayData ? RelayPrivateData.toJSON(message.relayData) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseRelayRequest();
    message.relaySession = object.relaySession !== undefined && object.relaySession !== null ? RelaySession.fromPartial(object.relaySession) : undefined;
    message.relayData = object.relayData !== undefined && object.relayData !== null ? RelayPrivateData.fromPartial(object.relayData) : undefined;
    return message;
  }
};
exports.RelayRequest = RelayRequest;
function createBaseBadge() {
  return {
    cuAllocation: _helpers.Long.UZERO,
    epoch: _helpers.Long.UZERO,
    address: "",
    lavaChainId: "",
    projectSig: new Uint8Array()
  };
}
var Badge = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.cuAllocation.isZero()) {
      writer.uint32(8).uint64(message.cuAllocation);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.lavaChainId !== "") {
      writer.uint32(34).string(message.lavaChainId);
    }
    if (message.projectSig.length !== 0) {
      writer.uint32(42).bytes(message.projectSig);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBadge();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cuAllocation = reader.uint64();
          break;
        case 2:
          message.epoch = reader.uint64();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.lavaChainId = reader.string();
          break;
        case 5:
          message.projectSig = reader.bytes();
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
      cuAllocation: (0, _helpers.isSet)(object.cuAllocation) ? _helpers.Long.fromValue(object.cuAllocation) : _helpers.Long.UZERO,
      epoch: (0, _helpers.isSet)(object.epoch) ? _helpers.Long.fromValue(object.epoch) : _helpers.Long.UZERO,
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      lavaChainId: (0, _helpers.isSet)(object.lavaChainId) ? String(object.lavaChainId) : "",
      projectSig: (0, _helpers.isSet)(object.projectSig) ? (0, _helpers.bytesFromBase64)(object.projectSig) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.cuAllocation !== undefined && (obj.cuAllocation = (message.cuAllocation || _helpers.Long.UZERO).toString());
    message.epoch !== undefined && (obj.epoch = (message.epoch || _helpers.Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.lavaChainId !== undefined && (obj.lavaChainId = message.lavaChainId);
    message.projectSig !== undefined && (obj.projectSig = (0, _helpers.base64FromBytes)(message.projectSig !== undefined ? message.projectSig : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$lavaChainId2, _object$projectSig;
    var message = createBaseBadge();
    message.cuAllocation = object.cuAllocation !== undefined && object.cuAllocation !== null ? _helpers.Long.fromValue(object.cuAllocation) : _helpers.Long.UZERO;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? _helpers.Long.fromValue(object.epoch) : _helpers.Long.UZERO;
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.lavaChainId = (_object$lavaChainId2 = object.lavaChainId) !== null && _object$lavaChainId2 !== void 0 ? _object$lavaChainId2 : "";
    message.projectSig = (_object$projectSig = object.projectSig) !== null && _object$projectSig !== void 0 ? _object$projectSig : new Uint8Array();
    return message;
  }
};
exports.Badge = Badge;
function createBaseRelayReply() {
  return {
    data: new Uint8Array(),
    sig: new Uint8Array(),
    nonce: 0,
    latestBlock: _helpers.Long.ZERO,
    finalizedBlocksHashes: new Uint8Array(),
    sigBlocks: new Uint8Array()
  };
}
var RelayReply = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    if (message.nonce !== 0) {
      writer.uint32(24).uint32(message.nonce);
    }
    if (!message.latestBlock.isZero()) {
      writer.uint32(32).int64(message.latestBlock);
    }
    if (message.finalizedBlocksHashes.length !== 0) {
      writer.uint32(42).bytes(message.finalizedBlocksHashes);
    }
    if (message.sigBlocks.length !== 0) {
      writer.uint32(50).bytes(message.sigBlocks);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRelayReply();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.sig = reader.bytes();
          break;
        case 3:
          message.nonce = reader.uint32();
          break;
        case 4:
          message.latestBlock = reader.int64();
          break;
        case 5:
          message.finalizedBlocksHashes = reader.bytes();
          break;
        case 6:
          message.sigBlocks = reader.bytes();
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
      data: (0, _helpers.isSet)(object.data) ? (0, _helpers.bytesFromBase64)(object.data) : new Uint8Array(),
      sig: (0, _helpers.isSet)(object.sig) ? (0, _helpers.bytesFromBase64)(object.sig) : new Uint8Array(),
      nonce: (0, _helpers.isSet)(object.nonce) ? Number(object.nonce) : 0,
      latestBlock: (0, _helpers.isSet)(object.latestBlock) ? _helpers.Long.fromValue(object.latestBlock) : _helpers.Long.ZERO,
      finalizedBlocksHashes: (0, _helpers.isSet)(object.finalizedBlocksHashes) ? (0, _helpers.bytesFromBase64)(object.finalizedBlocksHashes) : new Uint8Array(),
      sigBlocks: (0, _helpers.isSet)(object.sigBlocks) ? (0, _helpers.bytesFromBase64)(object.sigBlocks) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.data !== undefined && (obj.data = (0, _helpers.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
    message.sig !== undefined && (obj.sig = (0, _helpers.base64FromBytes)(message.sig !== undefined ? message.sig : new Uint8Array()));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.latestBlock !== undefined && (obj.latestBlock = (message.latestBlock || _helpers.Long.ZERO).toString());
    message.finalizedBlocksHashes !== undefined && (obj.finalizedBlocksHashes = (0, _helpers.base64FromBytes)(message.finalizedBlocksHashes !== undefined ? message.finalizedBlocksHashes : new Uint8Array()));
    message.sigBlocks !== undefined && (obj.sigBlocks = (0, _helpers.base64FromBytes)(message.sigBlocks !== undefined ? message.sigBlocks : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$data2, _object$sig2, _object$nonce, _object$finalizedBloc, _object$sigBlocks;
    var message = createBaseRelayReply();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    message.sig = (_object$sig2 = object.sig) !== null && _object$sig2 !== void 0 ? _object$sig2 : new Uint8Array();
    message.nonce = (_object$nonce = object.nonce) !== null && _object$nonce !== void 0 ? _object$nonce : 0;
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? _helpers.Long.fromValue(object.latestBlock) : _helpers.Long.ZERO;
    message.finalizedBlocksHashes = (_object$finalizedBloc = object.finalizedBlocksHashes) !== null && _object$finalizedBloc !== void 0 ? _object$finalizedBloc : new Uint8Array();
    message.sigBlocks = (_object$sigBlocks = object.sigBlocks) !== null && _object$sigBlocks !== void 0 ? _object$sigBlocks : new Uint8Array();
    return message;
  }
};
exports.RelayReply = RelayReply;
function createBaseQualityOfServiceReport() {
  return {
    latency: "",
    availability: "",
    sync: ""
  };
}
var QualityOfServiceReport = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.latency !== "") {
      writer.uint32(10).string(message.latency);
    }
    if (message.availability !== "") {
      writer.uint32(18).string(message.availability);
    }
    if (message.sync !== "") {
      writer.uint32(26).string(message.sync);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQualityOfServiceReport();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latency = reader.string();
          break;
        case 2:
          message.availability = reader.string();
          break;
        case 3:
          message.sync = reader.string();
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
      latency: (0, _helpers.isSet)(object.latency) ? String(object.latency) : "",
      availability: (0, _helpers.isSet)(object.availability) ? String(object.availability) : "",
      sync: (0, _helpers.isSet)(object.sync) ? String(object.sync) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.latency !== undefined && (obj.latency = message.latency);
    message.availability !== undefined && (obj.availability = message.availability);
    message.sync !== undefined && (obj.sync = message.sync);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$latency, _object$availability, _object$sync;
    var message = createBaseQualityOfServiceReport();
    message.latency = (_object$latency = object.latency) !== null && _object$latency !== void 0 ? _object$latency : "";
    message.availability = (_object$availability = object.availability) !== null && _object$availability !== void 0 ? _object$availability : "";
    message.sync = (_object$sync = object.sync) !== null && _object$sync !== void 0 ? _object$sync : "";
    return message;
  }
};
exports.QualityOfServiceReport = QualityOfServiceReport;