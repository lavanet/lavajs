"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProtocolVersion = exports.PeerInfo = exports.PeerAddressInfo = exports.NodeInfoOther = exports.NodeInfo = void 0;
var _timestamp = require("../../google/protobuf/timestamp");
var _helpers = require("../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseProtocolVersion() {
  return {
    p2p: _helpers.Long.UZERO,
    block: _helpers.Long.UZERO,
    app: _helpers.Long.UZERO
  };
}
var ProtocolVersion = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.p2p.isZero()) {
      writer.uint32(8).uint64(message.p2p);
    }
    if (!message.block.isZero()) {
      writer.uint32(16).uint64(message.block);
    }
    if (!message.app.isZero()) {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    message.p2p = object.p2p !== undefined && object.p2p !== null ? _helpers.Long.fromValue(object.p2p) : _helpers.Long.UZERO;
    message.block = object.block !== undefined && object.block !== null ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO;
    message.app = object.app !== undefined && object.app !== null ? _helpers.Long.fromValue(object.app) : _helpers.Long.UZERO;
    return message;
  }
};
exports.ProtocolVersion = ProtocolVersion;
function createBaseNodeInfo() {
  return {
    protocolVersion: undefined,
    nodeId: "",
    listenAddr: "",
    network: "",
    version: "",
    channels: new Uint8Array(),
    moniker: "",
    other: undefined
  };
}
var NodeInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.txIndex !== "") {
      writer.uint32(10).string(message.txIndex);
    }
    if (message.rpcAddress !== "") {
      writer.uint32(18).string(message.rpcAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
exports.NodeInfoOther = NodeInfoOther;
function createBasePeerInfo() {
  return {
    id: "",
    addressInfo: [],
    lastConnected: undefined
  };
}
var PeerInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
exports.PeerInfo = PeerInfo;
function createBasePeerAddressInfo() {
  return {
    address: "",
    lastDialSuccess: undefined,
    lastDialFailure: undefined,
    dialFailures: 0
  };
}
var PeerAddressInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
exports.PeerAddressInfo = PeerAddressInfo;