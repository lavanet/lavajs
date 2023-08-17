"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consensus = exports.App = void 0;
var _binary = require("../../binary");
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */

/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */

function createBaseApp() {
  return {
    protocol: BigInt(0),
    software: ""
  };
}
var App = {
  typeUrl: "/tendermint.version.App",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.protocol !== BigInt(0)) {
      writer.uint32(8).uint64(message.protocol);
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseApp();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocol = reader.uint64();
          break;
        case 2:
          message.software = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$software;
    var message = createBaseApp();
    message.protocol = object.protocol !== undefined && object.protocol !== null ? BigInt(object.protocol.toString()) : BigInt(0);
    message.software = (_object$software = object.software) !== null && _object$software !== void 0 ? _object$software : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      protocol: BigInt(object.protocol),
      software: object.software
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.protocol = message.protocol ? message.protocol.toString() : undefined;
    obj.software = message.software;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return App.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return App.decode(message.value);
  },
  toProto: function toProto(message) {
    return App.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.version.App",
      value: App.encode(message).finish()
    };
  }
};
exports.App = App;
function createBaseConsensus() {
  return {
    block: BigInt(0),
    app: BigInt(0)
  };
}
var Consensus = {
  typeUrl: "/tendermint.version.Consensus",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.app !== BigInt(0)) {
      writer.uint32(16).uint64(message.app);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConsensus();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        case 2:
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
    var message = createBaseConsensus();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      block: BigInt(object.block),
      app: BigInt(object.app)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block = message.block ? message.block.toString() : undefined;
    obj.app = message.app ? message.app.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Consensus.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Consensus.decode(message.value);
  },
  toProto: function toProto(message) {
    return Consensus.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.version.Consensus",
      value: Consensus.encode(message).finish()
    };
  }
};
exports.Consensus = Consensus;