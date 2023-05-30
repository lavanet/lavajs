"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelayCacheSet = exports.RelayCacheGet = exports.CacheUsage = void 0;
var _relay = require("./relay");
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseCacheUsage() {
  return {
    CacheHits: _helpers.Long.UZERO,
    CacheMisses: _helpers.Long.UZERO
  };
}
var CacheUsage = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.CacheHits.isZero()) {
      writer.uint32(8).uint64(message.CacheHits);
    }
    if (!message.CacheMisses.isZero()) {
      writer.uint32(16).uint64(message.CacheMisses);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCacheUsage();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CacheHits = reader.uint64();
          break;
        case 2:
          message.CacheMisses = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseCacheUsage();
    message.CacheHits = object.CacheHits !== undefined && object.CacheHits !== null ? _helpers.Long.fromValue(object.CacheHits) : _helpers.Long.UZERO;
    message.CacheMisses = object.CacheMisses !== undefined && object.CacheMisses !== null ? _helpers.Long.fromValue(object.CacheMisses) : _helpers.Long.UZERO;
    return message;
  }
};
exports.CacheUsage = CacheUsage;
function createBaseRelayCacheGet() {
  return {
    request: undefined,
    apiInterface: "",
    blockHash: new Uint8Array(),
    chainID: "",
    finalized: false
  };
}
var RelayCacheGet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.request !== undefined) {
      _relay.RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.apiInterface !== "") {
      writer.uint32(18).string(message.apiInterface);
    }
    if (message.blockHash.length !== 0) {
      writer.uint32(26).bytes(message.blockHash);
    }
    if (message.chainID !== "") {
      writer.uint32(34).string(message.chainID);
    }
    if (message.finalized === true) {
      writer.uint32(40).bool(message.finalized);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRelayCacheGet();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = _relay.RelayRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.apiInterface = reader.string();
          break;
        case 3:
          message.blockHash = reader.bytes();
          break;
        case 4:
          message.chainID = reader.string();
          break;
        case 5:
          message.finalized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$apiInterface, _object$blockHash, _object$chainID, _object$finalized;
    var message = createBaseRelayCacheGet();
    message.request = object.request !== undefined && object.request !== null ? _relay.RelayRequest.fromPartial(object.request) : undefined;
    message.apiInterface = (_object$apiInterface = object.apiInterface) !== null && _object$apiInterface !== void 0 ? _object$apiInterface : "";
    message.blockHash = (_object$blockHash = object.blockHash) !== null && _object$blockHash !== void 0 ? _object$blockHash : new Uint8Array();
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.finalized = (_object$finalized = object.finalized) !== null && _object$finalized !== void 0 ? _object$finalized : false;
    return message;
  }
};
exports.RelayCacheGet = RelayCacheGet;
function createBaseRelayCacheSet() {
  return {
    request: undefined,
    apiInterface: "",
    blockHash: new Uint8Array(),
    chainID: "",
    bucketID: "",
    response: undefined,
    finalized: false
  };
}
var RelayCacheSet = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.request !== undefined) {
      _relay.RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.apiInterface !== "") {
      writer.uint32(18).string(message.apiInterface);
    }
    if (message.blockHash.length !== 0) {
      writer.uint32(26).bytes(message.blockHash);
    }
    if (message.chainID !== "") {
      writer.uint32(34).string(message.chainID);
    }
    if (message.bucketID !== "") {
      writer.uint32(42).string(message.bucketID);
    }
    if (message.response !== undefined) {
      _relay.RelayReply.encode(message.response, writer.uint32(50).fork()).ldelim();
    }
    if (message.finalized === true) {
      writer.uint32(56).bool(message.finalized);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRelayCacheSet();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = _relay.RelayRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.apiInterface = reader.string();
          break;
        case 3:
          message.blockHash = reader.bytes();
          break;
        case 4:
          message.chainID = reader.string();
          break;
        case 5:
          message.bucketID = reader.string();
          break;
        case 6:
          message.response = _relay.RelayReply.decode(reader, reader.uint32());
          break;
        case 7:
          message.finalized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$apiInterface2, _object$blockHash2, _object$chainID2, _object$bucketID, _object$finalized2;
    var message = createBaseRelayCacheSet();
    message.request = object.request !== undefined && object.request !== null ? _relay.RelayRequest.fromPartial(object.request) : undefined;
    message.apiInterface = (_object$apiInterface2 = object.apiInterface) !== null && _object$apiInterface2 !== void 0 ? _object$apiInterface2 : "";
    message.blockHash = (_object$blockHash2 = object.blockHash) !== null && _object$blockHash2 !== void 0 ? _object$blockHash2 : new Uint8Array();
    message.chainID = (_object$chainID2 = object.chainID) !== null && _object$chainID2 !== void 0 ? _object$chainID2 : "";
    message.bucketID = (_object$bucketID = object.bucketID) !== null && _object$bucketID !== void 0 ? _object$bucketID : "";
    message.response = object.response !== undefined && object.response !== null ? _relay.RelayReply.fromPartial(object.response) : undefined;
    message.finalized = (_object$finalized2 = object.finalized) !== null && _object$finalized2 !== void 0 ? _object$finalized2 : false;
    return message;
  }
};
exports.RelayCacheSet = RelayCacheSet;