"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Equivocation = void 0;
var _timestamp = require("../../../google/protobuf/timestamp");
var _binary = require("../../../binary");
var _helpers = require("../../../helpers");
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */

/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */

function createBaseEquivocation() {
  return {
    height: BigInt(0),
    time: new Date(),
    power: BigInt(0),
    consensusAddress: ""
  };
}
var Equivocation = {
  typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(18).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    if (message.consensusAddress !== "") {
      writer.uint32(34).string(message.consensusAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEquivocation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.power = reader.int64();
          break;
        case 4:
          message.consensusAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$time, _object$consensusAddr;
    var message = createBaseEquivocation();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : undefined;
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.consensusAddress = (_object$consensusAddr = object.consensusAddress) !== null && _object$consensusAddr !== void 0 ? _object$consensusAddr : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      height: BigInt(object.height),
      time: object.time,
      power: BigInt(object.power),
      consensusAddress: object.consensus_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.time = message.time;
    obj.power = message.power ? message.power.toString() : undefined;
    obj.consensus_address = message.consensusAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Equivocation.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Equivocation",
      value: Equivocation.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Equivocation.decode(message.value);
  },
  toProto: function toProto(message) {
    return Equivocation.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
      value: Equivocation.encode(message).finish()
    };
  }
};
exports.Equivocation = Equivocation;