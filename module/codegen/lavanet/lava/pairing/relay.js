import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseProbeRequest() {
  return {
    guid: Long.UZERO,
    specId: "",
    apiInterface: ""
  };
}
export const ProbeRequest = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProbeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$specId, _object$apiInterface;
    const message = createBaseProbeRequest();
    message.guid = object.guid !== undefined && object.guid !== null ? Long.fromValue(object.guid) : Long.UZERO;
    message.specId = (_object$specId = object.specId) !== null && _object$specId !== void 0 ? _object$specId : "";
    message.apiInterface = (_object$apiInterface = object.apiInterface) !== null && _object$apiInterface !== void 0 ? _object$apiInterface : "";
    return message;
  }
};
function createBaseProbeReply() {
  return {
    guid: Long.UZERO,
    latestBlock: Long.ZERO,
    finalizedBlocksHashes: new Uint8Array(),
    lavaEpoch: Long.UZERO
  };
}
export const ProbeReply = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProbeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$finalizedBloc;
    const message = createBaseProbeReply();
    message.guid = object.guid !== undefined && object.guid !== null ? Long.fromValue(object.guid) : Long.UZERO;
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? Long.fromValue(object.latestBlock) : Long.ZERO;
    message.finalizedBlocksHashes = (_object$finalizedBloc = object.finalizedBlocksHashes) !== null && _object$finalizedBloc !== void 0 ? _object$finalizedBloc : new Uint8Array();
    message.lavaEpoch = object.lavaEpoch !== undefined && object.lavaEpoch !== null ? Long.fromValue(object.lavaEpoch) : Long.UZERO;
    return message;
  }
};
function createBaseRelaySession() {
  return {
    specId: "",
    contentHash: new Uint8Array(),
    sessionId: Long.UZERO,
    cuSum: Long.UZERO,
    provider: "",
    relayNum: Long.UZERO,
    qosReport: undefined,
    epoch: Long.ZERO,
    unresponsiveProviders: new Uint8Array(),
    lavaChainId: "",
    sig: new Uint8Array(),
    badge: undefined,
    qosExcellenceReport: undefined
  };
}
export const RelaySession = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelaySession();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$specId2, _object$contentHash, _object$provider, _object$unresponsiveP, _object$lavaChainId, _object$sig;
    const message = createBaseRelaySession();
    message.specId = (_object$specId2 = object.specId) !== null && _object$specId2 !== void 0 ? _object$specId2 : "";
    message.contentHash = (_object$contentHash = object.contentHash) !== null && _object$contentHash !== void 0 ? _object$contentHash : new Uint8Array();
    message.sessionId = object.sessionId !== undefined && object.sessionId !== null ? Long.fromValue(object.sessionId) : Long.UZERO;
    message.cuSum = object.cuSum !== undefined && object.cuSum !== null ? Long.fromValue(object.cuSum) : Long.UZERO;
    message.provider = (_object$provider = object.provider) !== null && _object$provider !== void 0 ? _object$provider : "";
    message.relayNum = object.relayNum !== undefined && object.relayNum !== null ? Long.fromValue(object.relayNum) : Long.UZERO;
    message.qosReport = object.qosReport !== undefined && object.qosReport !== null ? QualityOfServiceReport.fromPartial(object.qosReport) : undefined;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.ZERO;
    message.unresponsiveProviders = (_object$unresponsiveP = object.unresponsiveProviders) !== null && _object$unresponsiveP !== void 0 ? _object$unresponsiveP : new Uint8Array();
    message.lavaChainId = (_object$lavaChainId = object.lavaChainId) !== null && _object$lavaChainId !== void 0 ? _object$lavaChainId : "";
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    message.badge = object.badge !== undefined && object.badge !== null ? Badge.fromPartial(object.badge) : undefined;
    message.qosExcellenceReport = object.qosExcellenceReport !== undefined && object.qosExcellenceReport !== null ? QualityOfServiceReport.fromPartial(object.qosExcellenceReport) : undefined;
    return message;
  }
};
function createBaseBadge() {
  return {
    cuAllocation: Long.UZERO,
    epoch: Long.UZERO,
    address: "",
    lavaChainId: "",
    projectSig: new Uint8Array()
  };
}
export const Badge = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadge();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$address, _object$lavaChainId2, _object$projectSig;
    const message = createBaseBadge();
    message.cuAllocation = object.cuAllocation !== undefined && object.cuAllocation !== null ? Long.fromValue(object.cuAllocation) : Long.UZERO;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.lavaChainId = (_object$lavaChainId2 = object.lavaChainId) !== null && _object$lavaChainId2 !== void 0 ? _object$lavaChainId2 : "";
    message.projectSig = (_object$projectSig = object.projectSig) !== null && _object$projectSig !== void 0 ? _object$projectSig : new Uint8Array();
    return message;
  }
};
function createBaseRelayPrivateData() {
  return {
    connectionType: "",
    apiUrl: "",
    data: new Uint8Array(),
    requestBlock: Long.ZERO,
    apiInterface: "",
    salt: new Uint8Array(),
    metadata: [],
    addon: "",
    extensions: []
  };
}
export const RelayPrivateData = {
  encode(message, writer = _m0.Writer.create()) {
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
    for (const v of message.metadata) {
      Metadata.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.addon !== "") {
      writer.uint32(66).string(message.addon);
    }
    for (const v of message.extensions) {
      writer.uint32(74).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayPrivateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$connectionTyp, _object$apiUrl, _object$data, _object$apiInterface2, _object$salt, _object$metadata, _object$addon, _object$extensions;
    const message = createBaseRelayPrivateData();
    message.connectionType = (_object$connectionTyp = object.connectionType) !== null && _object$connectionTyp !== void 0 ? _object$connectionTyp : "";
    message.apiUrl = (_object$apiUrl = object.apiUrl) !== null && _object$apiUrl !== void 0 ? _object$apiUrl : "";
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.requestBlock = object.requestBlock !== undefined && object.requestBlock !== null ? Long.fromValue(object.requestBlock) : Long.ZERO;
    message.apiInterface = (_object$apiInterface2 = object.apiInterface) !== null && _object$apiInterface2 !== void 0 ? _object$apiInterface2 : "";
    message.salt = (_object$salt = object.salt) !== null && _object$salt !== void 0 ? _object$salt : new Uint8Array();
    message.metadata = ((_object$metadata = object.metadata) === null || _object$metadata === void 0 ? void 0 : _object$metadata.map(e => Metadata.fromPartial(e))) || [];
    message.addon = (_object$addon = object.addon) !== null && _object$addon !== void 0 ? _object$addon : "";
    message.extensions = ((_object$extensions = object.extensions) === null || _object$extensions === void 0 ? void 0 : _object$extensions.map(e => e)) || [];
    return message;
  }
};
function createBaseMetadata() {
  return {
    name: "",
    value: ""
  };
}
export const Metadata = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$name, _object$value;
    const message = createBaseMetadata();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : "";
    return message;
  }
};
function createBaseRelayRequest() {
  return {
    relaySession: undefined,
    relayData: undefined
  };
}
export const RelayRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.relaySession !== undefined) {
      RelaySession.encode(message.relaySession, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayData !== undefined) {
      RelayPrivateData.encode(message.relayData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseRelayRequest();
    message.relaySession = object.relaySession !== undefined && object.relaySession !== null ? RelaySession.fromPartial(object.relaySession) : undefined;
    message.relayData = object.relayData !== undefined && object.relayData !== null ? RelayPrivateData.fromPartial(object.relayData) : undefined;
    return message;
  }
};
function createBaseRelayReply() {
  return {
    data: new Uint8Array(),
    sig: new Uint8Array(),
    latestBlock: Long.ZERO,
    finalizedBlocksHashes: new Uint8Array(),
    sigBlocks: new Uint8Array(),
    metadata: []
  };
}
export const RelayReply = {
  encode(message, writer = _m0.Writer.create()) {
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
    for (const v of message.metadata) {
      Metadata.encode(v, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$data2, _object$sig2, _object$finalizedBloc2, _object$sigBlocks, _object$metadata2;
    const message = createBaseRelayReply();
    message.data = (_object$data2 = object.data) !== null && _object$data2 !== void 0 ? _object$data2 : new Uint8Array();
    message.sig = (_object$sig2 = object.sig) !== null && _object$sig2 !== void 0 ? _object$sig2 : new Uint8Array();
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? Long.fromValue(object.latestBlock) : Long.ZERO;
    message.finalizedBlocksHashes = (_object$finalizedBloc2 = object.finalizedBlocksHashes) !== null && _object$finalizedBloc2 !== void 0 ? _object$finalizedBloc2 : new Uint8Array();
    message.sigBlocks = (_object$sigBlocks = object.sigBlocks) !== null && _object$sigBlocks !== void 0 ? _object$sigBlocks : new Uint8Array();
    message.metadata = ((_object$metadata2 = object.metadata) === null || _object$metadata2 === void 0 ? void 0 : _object$metadata2.map(e => Metadata.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQualityOfServiceReport() {
  return {
    latency: "",
    availability: "",
    sync: ""
  };
}
export const QualityOfServiceReport = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQualityOfServiceReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$latency, _object$availability, _object$sync;
    const message = createBaseQualityOfServiceReport();
    message.latency = (_object$latency = object.latency) !== null && _object$latency !== void 0 ? _object$latency : "";
    message.availability = (_object$availability = object.availability) !== null && _object$availability !== void 0 ? _object$availability : "";
    message.sync = (_object$sync = object.sync) !== null && _object$sync !== void 0 ? _object$sync : "";
    return message;
  }
};