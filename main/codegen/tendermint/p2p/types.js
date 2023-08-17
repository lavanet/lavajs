"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProtocolVersion = exports.PeerInfo = exports.PeerAddressInfo = exports.NodeInfoOther = exports.NodeInfo = void 0;
var _timestamp = require("../../google/protobuf/timestamp");
var _binary = require("../../binary");
var _helpers = require("../../helpers");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseProtocolVersion() {
  return {
    p2p: BigInt(0),
    block: BigInt(0),
    app: BigInt(0)
  };
}
var ProtocolVersion = {
  typeUrl: "/tendermint.p2p.ProtocolVersion",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.p2p !== BigInt(0)) {
      writer.uint32(8).uint64(message.p2p);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(16).uint64(message.block);
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProtocolVersion();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = reader.uint64();
          break;
        case 2:
          message.block = reader.uint64();
          break;
        case 3:
          message.app = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseProtocolVersion();
    message.p2p = object.p2p !== undefined && object.p2p !== null ? BigInt(object.p2p.toString()) : BigInt(0);
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      p2p: BigInt(object.p2p),
      block: BigInt(object.block),
      app: BigInt(object.app)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.p2p = message.p2p ? message.p2p.toString() : undefined;
    obj.block = message.block ? message.block.toString() : undefined;
    obj.app = message.app ? message.app.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ProtocolVersion.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ProtocolVersion.decode(message.value);
  },
  toProto: function toProto(message) {
    return ProtocolVersion.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.p2p.ProtocolVersion",
      value: ProtocolVersion.encode(message).finish()
    };
  }
};
exports.ProtocolVersion = ProtocolVersion;
function createBaseNodeInfo() {
  return {
    protocolVersion: ProtocolVersion.fromPartial({}),
    nodeId: "",
    listenAddr: "",
    network: "",
    version: "",
    channels: new Uint8Array(),
    moniker: "",
    other: NodeInfoOther.fromPartial({})
  };
}
var NodeInfo = {
  typeUrl: "/tendermint.p2p.NodeInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.protocolVersion !== undefined) {
      ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.listenAddr !== "") {
      writer.uint32(26).string(message.listenAddr);
    }
    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== undefined) {
      NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNodeInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32());
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.listenAddr = reader.string();
          break;
        case 4:
          message.network = reader.string();
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.channels = reader.bytes();
          break;
        case 7:
          message.moniker = reader.string();
          break;
        case 8:
          message.other = NodeInfoOther.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$nodeId, _object$listenAddr, _object$network, _object$version, _object$channels, _object$moniker;
    var message = createBaseNodeInfo();
    message.protocolVersion = object.protocolVersion !== undefined && object.protocolVersion !== null ? ProtocolVersion.fromPartial(object.protocolVersion) : undefined;
    message.nodeId = (_object$nodeId = object.nodeId) !== null && _object$nodeId !== void 0 ? _object$nodeId : "";
    message.listenAddr = (_object$listenAddr = object.listenAddr) !== null && _object$listenAddr !== void 0 ? _object$listenAddr : "";
    message.network = (_object$network = object.network) !== null && _object$network !== void 0 ? _object$network : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.channels = (_object$channels = object.channels) !== null && _object$channels !== void 0 ? _object$channels : new Uint8Array();
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    message.other = object.other !== undefined && object.other !== null ? NodeInfoOther.fromPartial(object.other) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      protocolVersion: object !== null && object !== void 0 && object.protocol_version ? ProtocolVersion.fromAmino(object.protocol_version) : undefined,
      nodeId: object.node_id,
      listenAddr: object.listen_addr,
      network: object.network,
      version: object.version,
      channels: object.channels,
      moniker: object.moniker,
      other: object !== null && object !== void 0 && object.other ? NodeInfoOther.fromAmino(object.other) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.protocol_version = message.protocolVersion ? ProtocolVersion.toAmino(message.protocolVersion) : undefined;
    obj.node_id = message.nodeId;
    obj.listen_addr = message.listenAddr;
    obj.network = message.network;
    obj.version = message.version;
    obj.channels = message.channels;
    obj.moniker = message.moniker;
    obj.other = message.other ? NodeInfoOther.toAmino(message.other) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return NodeInfo.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return NodeInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return NodeInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.p2p.NodeInfo",
      value: NodeInfo.encode(message).finish()
    };
  }
};
exports.NodeInfo = NodeInfo;
function createBaseNodeInfoOther() {
  return {
    txIndex: "",
    rpcAddress: ""
  };
}
var NodeInfoOther = {
  typeUrl: "/tendermint.p2p.NodeInfoOther",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.txIndex !== "") {
      writer.uint32(10).string(message.txIndex);
    }
    if (message.rpcAddress !== "") {
      writer.uint32(18).string(message.rpcAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNodeInfoOther();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txIndex = reader.string();
          break;
        case 2:
          message.rpcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$txIndex, _object$rpcAddress;
    var message = createBaseNodeInfoOther();
    message.txIndex = (_object$txIndex = object.txIndex) !== null && _object$txIndex !== void 0 ? _object$txIndex : "";
    message.rpcAddress = (_object$rpcAddress = object.rpcAddress) !== null && _object$rpcAddress !== void 0 ? _object$rpcAddress : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      txIndex: object.tx_index,
      rpcAddress: object.rpc_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.tx_index = message.txIndex;
    obj.rpc_address = message.rpcAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return NodeInfoOther.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return NodeInfoOther.decode(message.value);
  },
  toProto: function toProto(message) {
    return NodeInfoOther.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.p2p.NodeInfoOther",
      value: NodeInfoOther.encode(message).finish()
    };
  }
};
exports.NodeInfoOther = NodeInfoOther;
function createBasePeerInfo() {
  return {
    id: "",
    addressInfo: [],
    lastConnected: new Date()
  };
}
var PeerInfo = {
  typeUrl: "/tendermint.p2p.PeerInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    var _iterator = _createForOfIteratorHelper(message.addressInfo),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        PeerAddressInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.lastConnected !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.lastConnected), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePeerInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.addressInfo.push(PeerAddressInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lastConnected = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$id, _object$addressInfo, _object$lastConnected;
    var message = createBasePeerInfo();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.addressInfo = ((_object$addressInfo = object.addressInfo) === null || _object$addressInfo === void 0 ? void 0 : _object$addressInfo.map(function (e) {
      return PeerAddressInfo.fromPartial(e);
    })) || [];
    message.lastConnected = (_object$lastConnected = object.lastConnected) !== null && _object$lastConnected !== void 0 ? _object$lastConnected : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      id: object.id,
      addressInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.address_info) ? object.address_info.map(function (e) {
        return PeerAddressInfo.fromAmino(e);
      }) : [],
      lastConnected: object.last_connected
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.id = message.id;
    if (message.addressInfo) {
      obj.address_info = message.addressInfo.map(function (e) {
        return e ? PeerAddressInfo.toAmino(e) : undefined;
      });
    } else {
      obj.address_info = [];
    }
    obj.last_connected = message.lastConnected;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PeerInfo.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PeerInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return PeerInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.p2p.PeerInfo",
      value: PeerInfo.encode(message).finish()
    };
  }
};
exports.PeerInfo = PeerInfo;
function createBasePeerAddressInfo() {
  return {
    address: "",
    lastDialSuccess: new Date(),
    lastDialFailure: new Date(),
    dialFailures: 0
  };
}
var PeerAddressInfo = {
  typeUrl: "/tendermint.p2p.PeerAddressInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.lastDialSuccess !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.lastDialSuccess), writer.uint32(18).fork()).ldelim();
    }
    if (message.lastDialFailure !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.lastDialFailure), writer.uint32(26).fork()).ldelim();
    }
    if (message.dialFailures !== 0) {
      writer.uint32(32).uint32(message.dialFailures);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePeerAddressInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.lastDialSuccess = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lastDialFailure = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.dialFailures = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$lastDialSucce, _object$lastDialFailu, _object$dialFailures;
    var message = createBasePeerAddressInfo();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.lastDialSuccess = (_object$lastDialSucce = object.lastDialSuccess) !== null && _object$lastDialSucce !== void 0 ? _object$lastDialSucce : undefined;
    message.lastDialFailure = (_object$lastDialFailu = object.lastDialFailure) !== null && _object$lastDialFailu !== void 0 ? _object$lastDialFailu : undefined;
    message.dialFailures = (_object$dialFailures = object.dialFailures) !== null && _object$dialFailures !== void 0 ? _object$dialFailures : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address,
      lastDialSuccess: object.last_dial_success,
      lastDialFailure: object.last_dial_failure,
      dialFailures: object.dial_failures
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    obj.last_dial_success = message.lastDialSuccess;
    obj.last_dial_failure = message.lastDialFailure;
    obj.dial_failures = message.dialFailures;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PeerAddressInfo.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PeerAddressInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return PeerAddressInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.p2p.PeerAddressInfo",
      value: PeerAddressInfo.encode(message).finish()
    };
  }
};
exports.PeerAddressInfo = PeerAddressInfo;