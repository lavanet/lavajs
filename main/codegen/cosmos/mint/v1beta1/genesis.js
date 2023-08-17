"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _mint = require("./mint");
var _binary = require("../../../binary");
/** GenesisState defines the mint module's genesis state. */

/** GenesisState defines the mint module's genesis state. */

function createBaseGenesisState() {
  return {
    minter: _mint.Minter.fromPartial({}),
    params: _mint.Params.fromPartial({})
  };
}
var GenesisState = {
  typeUrl: "/cosmos.mint.v1beta1.GenesisState",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.minter !== undefined) {
      _mint.Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      _mint.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
        case 1:
          message.minter = _mint.Minter.decode(reader, reader.uint32());
          break;
        case 2:
          message.params = _mint.Params.decode(reader, reader.uint32());
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
    message.minter = object.minter !== undefined && object.minter !== null ? _mint.Minter.fromPartial(object.minter) : undefined;
    message.params = object.params !== undefined && object.params !== null ? _mint.Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      minter: object !== null && object !== void 0 && object.minter ? _mint.Minter.fromAmino(object.minter) : undefined,
      params: object !== null && object !== void 0 && object.params ? _mint.Params.fromAmino(object.params) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.minter = message.minter ? _mint.Minter.toAmino(message.minter) : undefined;
    obj.params = message.params ? _mint.Params.toAmino(message.params) : undefined;
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
      typeUrl: "/cosmos.mint.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
exports.GenesisState = GenesisState;