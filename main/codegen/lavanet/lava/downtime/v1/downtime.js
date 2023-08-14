"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.DowntimeGarbageCollection = exports.Downtime = void 0;
var _duration = require("../../../../google/protobuf/duration");
var _helpers = require("../../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Params defines the parameters of the downtime module. */

/** Params defines the parameters of the downtime module. */

/** Downtime defines a single downtime record. */

/** Downtime defines a single downtime record. */

/**
 * DowntimeGarbageCollection defines when garbage collection will be performed, for a specific downtime.
 * used only in genesis.
 */

/**
 * DowntimeGarbageCollection defines when garbage collection will be performed, for a specific downtime.
 * used only in genesis.
 */

function createBaseParams() {
  return {
    downtimeDuration: undefined
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.downtimeDuration !== undefined) {
      _duration.Duration.encode(message.downtimeDuration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downtimeDuration = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseParams();
    message.downtimeDuration = object.downtimeDuration !== undefined && object.downtimeDuration !== null ? _duration.Duration.fromPartial(object.downtimeDuration) : undefined;
    return message;
  }
};
exports.Params = Params;
function createBaseDowntime() {
  return {
    block: _helpers.Long.UZERO,
    duration: undefined
  };
}
var Downtime = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.duration !== undefined) {
      _duration.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDowntime();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        case 2:
          message.duration = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseDowntime();
    message.block = object.block !== undefined && object.block !== null ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? _duration.Duration.fromPartial(object.duration) : undefined;
    return message;
  }
};
exports.Downtime = Downtime;
function createBaseDowntimeGarbageCollection() {
  return {
    block: _helpers.Long.UZERO,
    gcBlock: _helpers.Long.UZERO
  };
}
var DowntimeGarbageCollection = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    if (!message.gcBlock.isZero()) {
      writer.uint32(16).uint64(message.gcBlock);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDowntimeGarbageCollection();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        case 2:
          message.gcBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseDowntimeGarbageCollection();
    message.block = object.block !== undefined && object.block !== null ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO;
    message.gcBlock = object.gcBlock !== undefined && object.gcBlock !== null ? _helpers.Long.fromValue(object.gcBlock) : _helpers.Long.UZERO;
    return message;
  }
};
exports.DowntimeGarbageCollection = DowntimeGarbageCollection;