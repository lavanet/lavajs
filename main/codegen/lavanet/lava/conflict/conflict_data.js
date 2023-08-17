"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseConflict = exports.ReplyMetadata = exports.FinalizationConflict = exports.ConflictRelayData = void 0;
var _relay = require("../pairing/relay");
var _binary = require("../../../binary");
function createBaseResponseConflict() {
  return {
    conflictRelayData0: ConflictRelayData.fromPartial({}),
    conflictRelayData1: ConflictRelayData.fromPartial({})
  };
}
var ResponseConflict = {
  typeUrl: "/lavanet.lava.conflict.ResponseConflict",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.conflictRelayData0 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData0, writer.uint32(10).fork()).ldelim();
    }
    if (message.conflictRelayData1 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
  },
  fromAmino: function fromAmino(object) {
    return {
      conflictRelayData0: object !== null && object !== void 0 && object.conflictRelayData0 ? ConflictRelayData.fromAmino(object.conflictRelayData0) : undefined,
      conflictRelayData1: object !== null && object !== void 0 && object.conflictRelayData1 ? ConflictRelayData.fromAmino(object.conflictRelayData1) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.conflictRelayData0 = message.conflictRelayData0 ? ConflictRelayData.toAmino(message.conflictRelayData0) : undefined;
    obj.conflictRelayData1 = message.conflictRelayData1 ? ConflictRelayData.toAmino(message.conflictRelayData1) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ResponseConflict.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ResponseConflict.decode(message.value);
  },
  toProto: function toProto(message) {
    return ResponseConflict.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.ResponseConflict",
      value: ResponseConflict.encode(message).finish()
    };
  }
};
exports.ResponseConflict = ResponseConflict;
function createBaseConflictRelayData() {
  return {
    request: _relay.RelayRequest.fromPartial({}),
    reply: ReplyMetadata.fromPartial({})
  };
}
var ConflictRelayData = {
  typeUrl: "/lavanet.lava.conflict.ConflictRelayData",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.request !== undefined) {
      _relay.RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.reply !== undefined) {
      ReplyMetadata.encode(message.reply, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConflictRelayData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = _relay.RelayRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.reply = ReplyMetadata.decode(reader, reader.uint32());
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
    message.reply = object.reply !== undefined && object.reply !== null ? ReplyMetadata.fromPartial(object.reply) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      request: object !== null && object !== void 0 && object.request ? _relay.RelayRequest.fromAmino(object.request) : undefined,
      reply: object !== null && object !== void 0 && object.reply ? ReplyMetadata.fromAmino(object.reply) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.request = message.request ? _relay.RelayRequest.toAmino(message.request) : undefined;
    obj.reply = message.reply ? ReplyMetadata.toAmino(message.reply) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ConflictRelayData.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ConflictRelayData.decode(message.value);
  },
  toProto: function toProto(message) {
    return ConflictRelayData.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.ConflictRelayData",
      value: ConflictRelayData.encode(message).finish()
    };
  }
};
exports.ConflictRelayData = ConflictRelayData;
function createBaseReplyMetadata() {
  return {
    hashAllDataHash: new Uint8Array(),
    sig: new Uint8Array(),
    latestBlock: BigInt(0),
    finalizedBlocksHashes: new Uint8Array(),
    sigBlocks: new Uint8Array()
  };
}
var ReplyMetadata = {
  typeUrl: "/lavanet.lava.conflict.ReplyMetadata",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.hashAllDataHash.length !== 0) {
      writer.uint32(10).bytes(message.hashAllDataHash);
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    if (message.latestBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.latestBlock);
    }
    if (message.finalizedBlocksHashes.length !== 0) {
      writer.uint32(34).bytes(message.finalizedBlocksHashes);
    }
    if (message.sigBlocks.length !== 0) {
      writer.uint32(42).bytes(message.sigBlocks);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseReplyMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashAllDataHash = reader.bytes();
          break;
        case 2:
          message.sig = reader.bytes();
          break;
        case 3:
          message.latestBlock = reader.int64();
          break;
        case 4:
          message.finalizedBlocksHashes = reader.bytes();
          break;
        case 5:
          message.sigBlocks = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$hashAllDataHa, _object$sig, _object$finalizedBloc, _object$sigBlocks;
    var message = createBaseReplyMetadata();
    message.hashAllDataHash = (_object$hashAllDataHa = object.hashAllDataHash) !== null && _object$hashAllDataHa !== void 0 ? _object$hashAllDataHa : new Uint8Array();
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? BigInt(object.latestBlock.toString()) : BigInt(0);
    message.finalizedBlocksHashes = (_object$finalizedBloc = object.finalizedBlocksHashes) !== null && _object$finalizedBloc !== void 0 ? _object$finalizedBloc : new Uint8Array();
    message.sigBlocks = (_object$sigBlocks = object.sigBlocks) !== null && _object$sigBlocks !== void 0 ? _object$sigBlocks : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      hashAllDataHash: object.hash_all_data_hash,
      sig: object.sig,
      latestBlock: BigInt(object.latest_block),
      finalizedBlocksHashes: object.finalized_blocks_hashes,
      sigBlocks: object.sig_blocks
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.hash_all_data_hash = message.hashAllDataHash;
    obj.sig = message.sig;
    obj.latest_block = message.latestBlock ? message.latestBlock.toString() : undefined;
    obj.finalized_blocks_hashes = message.finalizedBlocksHashes;
    obj.sig_blocks = message.sigBlocks;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ReplyMetadata.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ReplyMetadata.decode(message.value);
  },
  toProto: function toProto(message) {
    return ReplyMetadata.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.ReplyMetadata",
      value: ReplyMetadata.encode(message).finish()
    };
  }
};
exports.ReplyMetadata = ReplyMetadata;
function createBaseFinalizationConflict() {
  return {
    relayReply0: _relay.RelayReply.fromPartial({}),
    relayReply1: _relay.RelayReply.fromPartial({})
  };
}
var FinalizationConflict = {
  typeUrl: "/lavanet.lava.conflict.FinalizationConflict",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.relayReply0 !== undefined) {
      _relay.RelayReply.encode(message.relayReply0, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayReply1 !== undefined) {
      _relay.RelayReply.encode(message.relayReply1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
  },
  fromAmino: function fromAmino(object) {
    return {
      relayReply0: object !== null && object !== void 0 && object.relayReply0 ? _relay.RelayReply.fromAmino(object.relayReply0) : undefined,
      relayReply1: object !== null && object !== void 0 && object.relayReply1 ? _relay.RelayReply.fromAmino(object.relayReply1) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.relayReply0 = message.relayReply0 ? _relay.RelayReply.toAmino(message.relayReply0) : undefined;
    obj.relayReply1 = message.relayReply1 ? _relay.RelayReply.toAmino(message.relayReply1) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return FinalizationConflict.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return FinalizationConflict.decode(message.value);
  },
  toProto: function toProto(message) {
    return FinalizationConflict.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.FinalizationConflict",
      value: FinalizationConflict.encode(message).finish()
    };
  }
};
exports.FinalizationConflict = FinalizationConflict;