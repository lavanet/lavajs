"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = void 0;
var _types = require("./types");
var _evidence = require("./evidence");
var _binary = require("../../binary");
function createBaseBlock() {
  return {
    header: _types.Header.fromPartial({}),
    data: _types.Data.fromPartial({}),
    evidence: _evidence.EvidenceList.fromPartial({}),
    lastCommit: _types.Commit.fromPartial({})
  };
}
var Block = {
  typeUrl: "/tendermint.types.Block",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.header !== undefined) {
      _types.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      _types.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      _evidence.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== undefined) {
      _types.Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = _types.Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = _types.Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = _evidence.EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastCommit = _types.Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlock();
    message.header = object.header !== undefined && object.header !== null ? _types.Header.fromPartial(object.header) : undefined;
    message.data = object.data !== undefined && object.data !== null ? _types.Data.fromPartial(object.data) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? _evidence.EvidenceList.fromPartial(object.evidence) : undefined;
    message.lastCommit = object.lastCommit !== undefined && object.lastCommit !== null ? _types.Commit.fromPartial(object.lastCommit) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      header: object !== null && object !== void 0 && object.header ? _types.Header.fromAmino(object.header) : undefined,
      data: object !== null && object !== void 0 && object.data ? _types.Data.fromAmino(object.data) : undefined,
      evidence: object !== null && object !== void 0 && object.evidence ? _evidence.EvidenceList.fromAmino(object.evidence) : undefined,
      lastCommit: object !== null && object !== void 0 && object.last_commit ? _types.Commit.fromAmino(object.last_commit) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.header = message.header ? _types.Header.toAmino(message.header) : undefined;
    obj.data = message.data ? _types.Data.toAmino(message.data) : undefined;
    obj.evidence = message.evidence ? _evidence.EvidenceList.toAmino(message.evidence) : undefined;
    obj.last_commit = message.lastCommit ? _types.Commit.toAmino(message.lastCommit) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Block.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Block.decode(message.value);
  },
  toProto: function toProto(message) {
    return Block.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Block",
      value: Block.encode(message).finish()
    };
  }
};
exports.Block = Block;