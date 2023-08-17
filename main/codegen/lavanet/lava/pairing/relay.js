"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelaySession = exports.RelayRequest = exports.RelayReply = exports.RelayPrivateData = exports.QualityOfServiceReport = exports.ProbeRequest = exports.ProbeReply = exports.Metadata = exports.Badge = void 0;
var _binary = require("../../../binary");
var _math = require("@cosmjs/math");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseProbeRequest() {
  return {
    guid: BigInt(0),
    specId: "",
    apiInterface: ""
  };
}
var ProbeRequest = {
  typeUrl: "/lavanet.lava.pairing.ProbeRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.guid !== BigInt(0)) {
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
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
    message.guid = object.guid !== undefined && object.guid !== null ? BigInt(object.guid.toString()) : BigInt(0);
    message.specId = (_object$specId = object.specId) !== null && _object$specId !== void 0 ? _object$specId : "";
    message.apiInterface = (_object$apiInterface = object.apiInterface) !== null && _object$apiInterface !== void 0 ? _object$apiInterface : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      guid: BigInt(object.guid),
      specId: object.spec_id,
      apiInterface: object.api_interface
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.guid = message.guid ? message.guid.toString() : undefined;
    obj.spec_id = message.specId;
    obj.api_interface = message.apiInterface;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ProbeRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ProbeRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return ProbeRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.ProbeRequest",
      value: ProbeRequest.encode(message).finish()
    };
  }
};
exports.ProbeRequest = ProbeRequest;
function createBaseProbeReply() {
  return {
    guid: BigInt(0),
    latestBlock: BigInt(0),
    finalizedBlocksHashes: new Uint8Array(),
    lavaEpoch: BigInt(0)
  };
}
var ProbeReply = {
  typeUrl: "/lavanet.lava.pairing.ProbeReply",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.guid !== BigInt(0)) {
      writer.uint32(8).uint64(message.guid);
    }
    if (message.latestBlock !== BigInt(0)) {
      writer.uint32(16).int64(message.latestBlock);
    }
    if (message.finalizedBlocksHashes.length !== 0) {
      writer.uint32(26).bytes(message.finalizedBlocksHashes);
    }
    if (message.lavaEpoch !== BigInt(0)) {
      writer.uint32(32).uint64(message.lavaEpoch);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
    message.guid = object.guid !== undefined && object.guid !== null ? BigInt(object.guid.toString()) : BigInt(0);
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? BigInt(object.latestBlock.toString()) : BigInt(0);
    message.finalizedBlocksHashes = (_object$finalizedBloc = object.finalizedBlocksHashes) !== null && _object$finalizedBloc !== void 0 ? _object$finalizedBloc : new Uint8Array();
    message.lavaEpoch = object.lavaEpoch !== undefined && object.lavaEpoch !== null ? BigInt(object.lavaEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      guid: BigInt(object.guid),
      latestBlock: BigInt(object.latest_block),
      finalizedBlocksHashes: object.finalized_blocks_hashes,
      lavaEpoch: BigInt(object.lava_epoch)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.guid = message.guid ? message.guid.toString() : undefined;
    obj.latest_block = message.latestBlock ? message.latestBlock.toString() : undefined;
    obj.finalized_blocks_hashes = message.finalizedBlocksHashes;
    obj.lava_epoch = message.lavaEpoch ? message.lavaEpoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ProbeReply.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ProbeReply.decode(message.value);
  },
  toProto: function toProto(message) {
    return ProbeReply.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.ProbeReply",
      value: ProbeReply.encode(message).finish()
    };
  }
};
exports.ProbeReply = ProbeReply;
function createBaseRelaySession() {
  return {
    specId: "",
    contentHash: new Uint8Array(),
    sessionId: BigInt(0),
    cuSum: BigInt(0),
    provider: "",
    relayNum: BigInt(0),
    qosReport: QualityOfServiceReport.fromPartial({}),
    epoch: BigInt(0),
    unresponsiveProviders: new Uint8Array(),
    lavaChainId: "",
    sig: new Uint8Array(),
    badge: Badge.fromPartial({}),
    qosExcellenceReport: QualityOfServiceReport.fromPartial({})
  };
}
var RelaySession = {
  typeUrl: "/lavanet.lava.pairing.RelaySession",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.specId !== "") {
      writer.uint32(10).string(message.specId);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(18).bytes(message.contentHash);
    }
    if (message.sessionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.sessionId);
    }
    if (message.cuSum !== BigInt(0)) {
      writer.uint32(32).uint64(message.cuSum);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.relayNum !== BigInt(0)) {
      writer.uint32(48).uint64(message.relayNum);
    }
    if (message.qosReport !== undefined) {
      QualityOfServiceReport.encode(message.qosReport, writer.uint32(58).fork()).ldelim();
    }
    if (message.epoch !== BigInt(0)) {
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
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
    message.sessionId = object.sessionId !== undefined && object.sessionId !== null ? BigInt(object.sessionId.toString()) : BigInt(0);
    message.cuSum = object.cuSum !== undefined && object.cuSum !== null ? BigInt(object.cuSum.toString()) : BigInt(0);
    message.provider = (_object$provider = object.provider) !== null && _object$provider !== void 0 ? _object$provider : "";
    message.relayNum = object.relayNum !== undefined && object.relayNum !== null ? BigInt(object.relayNum.toString()) : BigInt(0);
    message.qosReport = object.qosReport !== undefined && object.qosReport !== null ? QualityOfServiceReport.fromPartial(object.qosReport) : undefined;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.unresponsiveProviders = (_object$unresponsiveP = object.unresponsiveProviders) !== null && _object$unresponsiveP !== void 0 ? _object$unresponsiveP : new Uint8Array();
    message.lavaChainId = (_object$lavaChainId = object.lavaChainId) !== null && _object$lavaChainId !== void 0 ? _object$lavaChainId : "";
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    message.badge = object.badge !== undefined && object.badge !== null ? Badge.fromPartial(object.badge) : undefined;
    message.qosExcellenceReport = object.qosExcellenceReport !== undefined && object.qosExcellenceReport !== null ? QualityOfServiceReport.fromPartial(object.qosExcellenceReport) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      specId: object.spec_id,
      contentHash: object.content_hash,
      sessionId: BigInt(object.session_id),
      cuSum: BigInt(object.cu_sum),
      provider: object.provider,
      relayNum: BigInt(object.relay_num),
      qosReport: object !== null && object !== void 0 && object.qos_report ? QualityOfServiceReport.fromAmino(object.qos_report) : undefined,
      epoch: BigInt(object.epoch),
      unresponsiveProviders: object.unresponsive_providers,
      lavaChainId: object.lava_chain_id,
      sig: object.sig,
      badge: object !== null && object !== void 0 && object.badge ? Badge.fromAmino(object.badge) : undefined,
      qosExcellenceReport: object !== null && object !== void 0 && object.qos_excellence_report ? QualityOfServiceReport.fromAmino(object.qos_excellence_report) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.spec_id = message.specId;
    obj.content_hash = message.contentHash;
    obj.session_id = message.sessionId ? message.sessionId.toString() : undefined;
    obj.cu_sum = message.cuSum ? message.cuSum.toString() : undefined;
    obj.provider = message.provider;
    obj.relay_num = message.relayNum ? message.relayNum.toString() : undefined;
    obj.qos_report = message.qosReport ? QualityOfServiceReport.toAmino(message.qosReport) : undefined;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.unresponsive_providers = message.unresponsiveProviders;
    obj.lava_chain_id = message.lavaChainId;
    obj.sig = message.sig;
    obj.badge = message.badge ? Badge.toAmino(message.badge) : undefined;
    obj.qos_excellence_report = message.qosExcellenceReport ? QualityOfServiceReport.toAmino(message.qosExcellenceReport) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RelaySession.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RelaySession.decode(message.value);
  },
  toProto: function toProto(message) {
    return RelaySession.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.RelaySession",
      value: RelaySession.encode(message).finish()
    };
  }
};
exports.RelaySession = RelaySession;
function createBaseBadge() {
  return {
    cuAllocation: BigInt(0),
    epoch: BigInt(0),
    address: "",
    lavaChainId: "",
    projectSig: new Uint8Array()
  };
}
var Badge = {
  typeUrl: "/lavanet.lava.pairing.Badge",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.cuAllocation !== BigInt(0)) {
      writer.uint32(8).uint64(message.cuAllocation);
    }
    if (message.epoch !== BigInt(0)) {
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
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
    message.cuAllocation = object.cuAllocation !== undefined && object.cuAllocation !== null ? BigInt(object.cuAllocation.toString()) : BigInt(0);
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.lavaChainId = (_object$lavaChainId2 = object.lavaChainId) !== null && _object$lavaChainId2 !== void 0 ? _object$lavaChainId2 : "";
    message.projectSig = (_object$projectSig = object.projectSig) !== null && _object$projectSig !== void 0 ? _object$projectSig : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      cuAllocation: BigInt(object.cu_allocation),
      epoch: BigInt(object.epoch),
      address: object.address,
      lavaChainId: object.lava_chain_id,
      projectSig: object.project_sig
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.cu_allocation = message.cuAllocation ? message.cuAllocation.toString() : undefined;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.address = message.address;
    obj.lava_chain_id = message.lavaChainId;
    obj.project_sig = message.projectSig;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Badge.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Badge.decode(message.value);
  },
  toProto: function toProto(message) {
    return Badge.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.Badge",
      value: Badge.encode(message).finish()
    };
  }
};
exports.Badge = Badge;
function createBaseRelayPrivateData() {
  return {
    connectionType: "",
    apiUrl: "",
    data: new Uint8Array(),
    requestBlock: BigInt(0),
    apiInterface: "",
    salt: new Uint8Array(),
    metadata: [],
    addon: "",
    extensions: []
  };
}
var RelayPrivateData = {
  typeUrl: "/lavanet.lava.pairing.RelayPrivateData",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.connectionType !== "") {
      writer.uint32(10).string(message.connectionType);
    }
    if (message.apiUrl !== "") {
      writer.uint32(18).string(message.apiUrl);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.requestBlock !== BigInt(0)) {
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
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
    message.requestBlock = object.requestBlock !== undefined && object.requestBlock !== null ? BigInt(object.requestBlock.toString()) : BigInt(0);
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
  },
  fromAmino: function fromAmino(object) {
    return {
      connectionType: object.connection_type,
      apiUrl: object.api_url,
      data: object.data,
      requestBlock: BigInt(object.request_block),
      apiInterface: object.api_interface,
      salt: object.salt,
      metadata: Array.isArray(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata.map(function (e) {
        return Metadata.fromAmino(e);
      }) : [],
      addon: object.addon,
      extensions: Array.isArray(object === null || object === void 0 ? void 0 : object.extensions) ? object.extensions.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.connection_type = message.connectionType;
    obj.api_url = message.apiUrl;
    obj.data = message.data;
    obj.request_block = message.requestBlock ? message.requestBlock.toString() : undefined;
    obj.api_interface = message.apiInterface;
    obj.salt = message.salt;
    if (message.metadata) {
      obj.metadata = message.metadata.map(function (e) {
        return e ? Metadata.toAmino(e) : undefined;
      });
    } else {
      obj.metadata = [];
    }
    obj.addon = message.addon;
    if (message.extensions) {
      obj.extensions = message.extensions.map(function (e) {
        return e;
      });
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RelayPrivateData.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RelayPrivateData.decode(message.value);
  },
  toProto: function toProto(message) {
    return RelayPrivateData.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayPrivateData",
      value: RelayPrivateData.encode(message).finish()
    };
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
  typeUrl: "/lavanet.lava.pairing.Metadata",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      value: object.value
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Metadata.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Metadata.decode(message.value);
  },
  toProto: function toProto(message) {
    return Metadata.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
exports.Metadata = Metadata;
function createBaseRelayRequest() {
  return {
    relaySession: RelaySession.fromPartial({}),
    relayData: RelayPrivateData.fromPartial({})
  };
}
var RelayRequest = {
  typeUrl: "/lavanet.lava.pairing.RelayRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.relaySession !== undefined) {
      RelaySession.encode(message.relaySession, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayData !== undefined) {
      RelayPrivateData.encode(message.relayData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
  },
  fromAmino: function fromAmino(object) {
    return {
      relaySession: object !== null && object !== void 0 && object.relay_session ? RelaySession.fromAmino(object.relay_session) : undefined,
      relayData: object !== null && object !== void 0 && object.relay_data ? RelayPrivateData.fromAmino(object.relay_data) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.relay_session = message.relaySession ? RelaySession.toAmino(message.relaySession) : undefined;
    obj.relay_data = message.relayData ? RelayPrivateData.toAmino(message.relayData) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RelayRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RelayRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return RelayRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayRequest",
      value: RelayRequest.encode(message).finish()
    };
  }
};
exports.RelayRequest = RelayRequest;
function createBaseRelayReply() {
  return {
    data: new Uint8Array(),
    sig: new Uint8Array(),
    latestBlock: BigInt(0),
    finalizedBlocksHashes: new Uint8Array(),
    sigBlocks: new Uint8Array(),
    metadata: []
  };
}
var RelayReply = {
  typeUrl: "/lavanet.lava.pairing.RelayReply",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    if (message.latestBlock !== BigInt(0)) {
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
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? BigInt(object.latestBlock.toString()) : BigInt(0);
    message.finalizedBlocksHashes = (_object$finalizedBloc2 = object.finalizedBlocksHashes) !== null && _object$finalizedBloc2 !== void 0 ? _object$finalizedBloc2 : new Uint8Array();
    message.sigBlocks = (_object$sigBlocks = object.sigBlocks) !== null && _object$sigBlocks !== void 0 ? _object$sigBlocks : new Uint8Array();
    message.metadata = ((_object$metadata2 = object.metadata) === null || _object$metadata2 === void 0 ? void 0 : _object$metadata2.map(function (e) {
      return Metadata.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      data: object.data,
      sig: object.sig,
      latestBlock: BigInt(object.latest_block),
      finalizedBlocksHashes: object.finalized_blocks_hashes,
      sigBlocks: object.sig_blocks,
      metadata: Array.isArray(object === null || object === void 0 ? void 0 : object.metadata) ? object.metadata.map(function (e) {
        return Metadata.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.data = message.data;
    obj.sig = message.sig;
    obj.latest_block = message.latestBlock ? message.latestBlock.toString() : undefined;
    obj.finalized_blocks_hashes = message.finalizedBlocksHashes;
    obj.sig_blocks = message.sigBlocks;
    if (message.metadata) {
      obj.metadata = message.metadata.map(function (e) {
        return e ? Metadata.toAmino(e) : undefined;
      });
    } else {
      obj.metadata = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RelayReply.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RelayReply.decode(message.value);
  },
  toProto: function toProto(message) {
    return RelayReply.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayReply",
      value: RelayReply.encode(message).finish()
    };
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
  typeUrl: "/lavanet.lava.pairing.QualityOfServiceReport",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.latency !== "") {
      writer.uint32(10).string(_math.Decimal.fromUserInput(message.latency, 18).atomics);
    }
    if (message.availability !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.availability, 18).atomics);
    }
    if (message.sync !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.sync, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQualityOfServiceReport();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latency = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.availability = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.sync = _math.Decimal.fromAtomics(reader.string(), 18).toString();
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
  },
  fromAmino: function fromAmino(object) {
    return {
      latency: object.latency,
      availability: object.availability,
      sync: object.sync
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.latency = message.latency;
    obj.availability = message.availability;
    obj.sync = message.sync;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QualityOfServiceReport.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QualityOfServiceReport.decode(message.value);
  },
  toProto: function toProto(message) {
    return QualityOfServiceReport.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QualityOfServiceReport",
      value: QualityOfServiceReport.encode(message).finish()
    };
  }
};
exports.QualityOfServiceReport = QualityOfServiceReport;