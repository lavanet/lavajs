"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseConflict = exports.FinalizationConflict = exports.ConflictRelayData = void 0;
var _relay = require("../pairing/relay");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseResponseConflict() {
  return {
    conflictRelayData0: undefined,
    conflictRelayData1: undefined
  };
}
var ResponseConflict = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.conflictRelayData0 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData0, writer.uint32(10).fork()).ldelim();
    }
    if (message.conflictRelayData1 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseResponseConflict();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictRelayData0 = ConflictRelayData.decode(reader, reader.uint32());
          break;
        case 2:
          message.conflictRelayData1 = ConflictRelayData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseResponseConflict();
    message.conflictRelayData0 = object.conflictRelayData0 !== undefined && object.conflictRelayData0 !== null ? ConflictRelayData.fromPartial(object.conflictRelayData0) : undefined;
    message.conflictRelayData1 = object.conflictRelayData1 !== undefined && object.conflictRelayData1 !== null ? ConflictRelayData.fromPartial(object.conflictRelayData1) : undefined;
    return message;
  }
};
exports.ResponseConflict = ResponseConflict;
function createBaseConflictRelayData() {
  return {
    request: undefined,
    reply: undefined
  };
}
var ConflictRelayData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.request !== undefined) {
      _relay.RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.reply !== undefined) {
      _relay.RelayReply.encode(message.reply, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConflictRelayData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = _relay.RelayRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.reply = _relay.RelayReply.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConflictRelayData();
    message.request = object.request !== undefined && object.request !== null ? _relay.RelayRequest.fromPartial(object.request) : undefined;
    message.reply = object.reply !== undefined && object.reply !== null ? _relay.RelayReply.fromPartial(object.reply) : undefined;
    return message;
  }
};
exports.ConflictRelayData = ConflictRelayData;
function createBaseFinalizationConflict() {
  return {
    relayReply0: undefined,
    relayReply1: undefined
  };
}
var FinalizationConflict = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.relayReply0 !== undefined) {
      _relay.RelayReply.encode(message.relayReply0, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayReply1 !== undefined) {
      _relay.RelayReply.encode(message.relayReply1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFinalizationConflict();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayReply0 = _relay.RelayReply.decode(reader, reader.uint32());
          break;
        case 2:
          message.relayReply1 = _relay.RelayReply.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseFinalizationConflict();
    message.relayReply0 = object.relayReply0 !== undefined && object.relayReply0 !== null ? _relay.RelayReply.fromPartial(object.relayReply0) : undefined;
    message.relayReply1 = object.relayReply1 !== undefined && object.relayReply1 !== null ? _relay.RelayReply.fromPartial(object.relayReply1) : undefined;
    return message;
  }
};
exports.FinalizationConflict = FinalizationConflict;