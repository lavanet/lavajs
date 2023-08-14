"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelaySession = exports.RelayRequest = exports.RelayReply = exports.RelayPrivateData = exports.QualityOfServiceReport = exports.ProbeRequest = exports.ProbeReply = exports.Metadata = exports.Badge = void 0;
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseProbeRequest() {
  return {
    guid: _helpers.Long.UZERO,
    specId: "",
    apiInterface: ""
  };
}
var ProbeRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.guid.isZero()) {
      writer.uint32(8).uint64(message.guid);
    }
    if (message.specId !== "") {
      writer.uint32(18).string(message.specId);
    }
    if (message.apiInterface !== "") {
      writer.uint32(26).string(message.apiInterface);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProbeRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guid = reader.uint64();
          break;
        case 2:
          message.specId = reader.string();
          break;
        case 3:
          message.apiInterface = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$specId, _object$apiInterface;
    var message = createBaseProbeRequest();
    message.guid = object.guid !== undefined && object.guid !== null ? _helpers.Long.fromValue(object.guid) : _helpers.Long.UZERO;
    message.specId = (_object$specId = object.specId) !== null && _object$specId !== void 0 ? _object$specId : "";
    message.apiInterface = (_object$apiInterface = object.apiInterface) !== null && _object$apiInterface !== void 0 ? _object$apiInterface : "";
    return message;
  }
};
exports.ProbeRequest = ProbeRequest;
function createBaseProbeReply() {
  return {
    guid: _helpers.Long.UZERO,
    latestBlock: _helpers.Long.ZERO,
    finalizedBlocksHashes: new Uint8Array(),
    lavaEpoch: _helpers.Long.UZERO
  };
}
var ProbeReply = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.guid.isZero()) {
      writer.uint32(8).uint64(message.guid);
    }
    if (!message.latestBlock.isZero()) {
      writer.uint32(16).int64(message.latestBlock);
    }
    if (message.finalizedBlocksHashes.length !== 0) {
      writer.uint32(26).bytes(message.finalizedBlocksHashes);
    }
    if (!message.lavaEpoch.isZero()) {
      writer.uint32(32).uint64(message.lavaEpoch);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProbeReply();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guid = reader.uint64();
          break;
        case 2:
          message.latestBlock = reader.int64();
          break;
        case 3:
          message.finalizedBlocksHashes = reader.bytes();
          break;
        case 4:
          message.lavaEpoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$finalizedBloc;
    var message = createBaseProbeReply();
    message.guid = object.guid !== undefined && object.guid !== null ? _helpers.Long.fromValue(object.guid) : _helpers.Long.UZERO;
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? _helpers.Long.fromValue(object.latestBlock) : _helpers.Long.ZERO;
    message.finalizedBlocksHashes = (_object$finalizedBloc = object.finalizedBlocksHashes) !== null && _object$finalizedBloc !== void 0 ? _object$finalizedBloc : new Uint8Array();
    message.lavaEpoch = object.lavaEpoch !== undefined && object.lavaEpoch !== null ? _helpers.Long.fromValue(object.lavaEpoch) : _helpers.Long.UZERO;
    return message;
  }
};
exports.ProbeReply = ProbeReply;
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
    badge: undefined,
    qosExcellenceReport: undefined
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
    if (message.qosExcellenceReport !== undefined) {
      QualityOfServiceReport.encode(message.qosExcellenceReport, writer.uint32(106).fork()).ldelim();
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
        case 13:
          message.qosExcellenceReport = QualityOfServiceReport.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$specId2, _object$contentHash, _object$provider, _object$unresponsiveP, _object$lavaChainId, _object$sig;
    var message = createBaseRelaySession();
    message.specId = (_object$specId2 = object.specId) !== null && _object$specId2 !== void 0 ? _object$specId2 : "";
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
    message.qosExcellenceReport = object.qosExcellenceReport !== undefined && object.qosExcellenceReport !== null ? QualityOfServiceReport.fromPartial(object.qosExcellenceReport) : undefined;
    return message;
  }
};
exports.RelaySession = RelaySession;
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
function createBaseRelayPrivateData() {
  return {
    connectionType: "",
    apiUrl: "",
    data: new Uint8Array(),
    requestBlock: _helpers.Long.ZERO,
    apiInterface: "",
    salt: new Uint8Array(),
    metadata: [],
    addon: "",
    extensions: []
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
    var _iterator = _createForOfIteratorHelper(message.metadata),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Metadata.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.addon !== "") {
      writer.uint32(66).string(message.addon);
    }
    var _iterator2 = _createForOfIteratorHelper(message.extensions),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        writer.uint32(74).string(_v);
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
        case 7:
          message.metadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        case 8:
          message.addon = reader.string();
          break;
        case 9:
          message.extensions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$connectionTyp, _object$apiUrl, _object$data, _object$apiInterface2, _object$salt, _object$metadata, _object$addon, _object$extensions;
    var message = createBaseRelayPrivateData();
    message.connectionType = (_object$connectionTyp = object.connectionType) !== null && _object$connectionTyp !== void 0 ? _object$connectionTyp : "";
    message.apiUrl = (_object$apiUrl = object.apiUrl) !== null && _object$apiUrl !== void 0 ? _object$apiUrl : "";
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.requestBlock = object.requestBlock !== undefined && object.requestBlock !== null ? _helpers.Long.fromValue(object.requestBlock) : _helpers.Long.ZERO;
    message.apiInterface = (_object$apiInterface2 = object.apiInterface) !== null && _object$apiInterface2 !== void 0 ? _object$apiInterface2 : "";
    message.salt = (_object$salt = object.salt) !== null && _object$salt !== void 0 ? _object$salt : new Uint8Array();
    message.metadata = ((_object$metadata = object.metadata) === null || _object$metadata === void 0 ? void 0 : _object$metadata.map(function (e) {
      return Metadata.fromPartial(e);
    })) || [];
    message.addon = (_object$addon = object.addon) !== null && _object$addon !== void 0 ? _object$addon : "";
    message.extensions = ((_object$extensions = object.extensions) === null || _object$extensions === void 0 ? void 0 : _object$extensions.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.RelayPrivateData = RelayPrivateData;
function createBaseMetadata() {
  return {
    name: "",
    value: ""
  };
}
var Metadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$value;
    var message = createBaseMetadata();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : "";
    return message;
  }
};
exports.Metadata = Metadata;
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
  fromPartial: function fromPartial(object) {
    var message = createBaseRelayRequest();
    message.relaySession = object.relaySession !== undefined && object.relaySession !== null ? RelaySession.fromPartial(object.relaySession) : undefined;
    message.relayData = object.relayData !== undefined && object.relayData !== null ? RelayPrivateData.fromPartial(object.relayData) : undefined;
    return message;
  }
};
exports.RelayRequest = RelayRequest;
function createBaseRelayReply() {
  return {
    data: new Uint8Array(),
    sig: new Uint8Array(),
    latestBlock: _helpers.Long.ZERO,
    finalizedBlocksHashes: new Uint8Array(),
    sigBlocks: new Uint8Array(),
    metadata: []
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
    if (!message.latestBlock.isZero()) {
      writer.uint32(32).int64(message.latestBlock);
    }
    if (message.finalizedBlocksHashes.length !== 0) {
      writer.uint32(42).bytes(message.finalizedBlocksHashes);
    }
    if (message.sigBlocks.length !== 0) {
      writer.uint32(50).bytes(message.sigBlocks);
    }
    var _iterator3 = _createForOfIteratorHelper(message.metadata),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        Metadata.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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
        case 4:
          message.latestBlock = reader.int64();
          break;
        case 5:
          message.finalizedBlocksHashes = reader.bytes();
          break;
        case 6:
          message.sigBlocks = reader.bytes();
          break;
        case 7:
          message.metadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$data2, _object$sig2, _object$finalizedBloc2, _object$sigBlocks, _object$metadata2;
    var message = createBaseRelayReply();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    message.sig = (_object$sig2 = object.sig) !== null && _object$sig2 !== void 0 ? _object$sig2 : new Uint8Array();
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? _helpers.Long.fromValue(object.latestBlock) : _helpers.Long.ZERO;
    message.finalizedBlocksHashes = (_object$finalizedBloc2 = object.finalizedBlocksHashes) !== null && _object$finalizedBloc2 !== void 0 ? _object$finalizedBloc2 : new Uint8Array();
    message.sigBlocks = (_object$sigBlocks = object.sigBlocks) !== null && _object$sigBlocks !== void 0 ? _object$sigBlocks : new Uint8Array();
    message.metadata = ((_object$metadata2 = object.metadata) === null || _object$metadata2 === void 0 ? void 0 : _object$metadata2.map(function (e) {
      return Metadata.fromPartial(e);
    })) || [];
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