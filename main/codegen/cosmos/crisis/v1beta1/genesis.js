"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _coin = require("../../base/v1beta1/coin");
var _binary = require("../../../binary");
/** GenesisState defines the crisis module's genesis state. */

/** GenesisState defines the crisis module's genesis state. */

function createBaseGenesisState() {
  return {
    constantFee: _coin.Coin.fromPartial({})
  };
}
var GenesisState = {
  typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.constantFee !== undefined) {
      _coin.Coin.encode(message.constantFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.constantFee = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGenesisState();
    message.constantFee = object.constantFee !== undefined && object.constantFee !== null ? _coin.Coin.fromPartial(object.constantFee) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      constantFee: object !== null && object !== void 0 && object.constant_fee ? _coin.Coin.fromAmino(object.constant_fee) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.constant_fee = message.constantFee ? _coin.Coin.toAmino(message.constantFee) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto: function toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crisis.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
exports.GenesisState = GenesisState;