"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgDetectionResponse = exports.MsgDetection = exports.MsgConflictVoteRevealResponse = exports.MsgConflictVoteReveal = exports.MsgConflictVoteCommitResponse = exports.MsgConflictVoteCommit = void 0;
var _conflict_data = require("./conflict_data");
var _binary = require("../../../binary");
/** TODO:: change coin type to another proto (define proto in another file int this directory) */

/** TODO:: change coin type to another proto (define proto in another file int this directory) */

function createBaseMsgDetection() {
  return {
    creator: "",
    finalizationConflict: _conflict_data.FinalizationConflict.fromPartial({}),
    responseConflict: _conflict_data.ResponseConflict.fromPartial({}),
    sameProviderConflict: _conflict_data.FinalizationConflict.fromPartial({})
  };
}
var MsgDetection = {
  typeUrl: "/lavanet.lava.conflict.MsgDetection",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.finalizationConflict !== undefined) {
      _conflict_data.FinalizationConflict.encode(message.finalizationConflict, writer.uint32(18).fork()).ldelim();
    }
    if (message.responseConflict !== undefined) {
      _conflict_data.ResponseConflict.encode(message.responseConflict, writer.uint32(26).fork()).ldelim();
    }
    if (message.sameProviderConflict !== undefined) {
      _conflict_data.FinalizationConflict.encode(message.sameProviderConflict, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDetection();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.finalizationConflict = _conflict_data.FinalizationConflict.decode(reader, reader.uint32());
          break;
        case 3:
          message.responseConflict = _conflict_data.ResponseConflict.decode(reader, reader.uint32());
          break;
        case 4:
          message.sameProviderConflict = _conflict_data.FinalizationConflict.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator;
    var message = createBaseMsgDetection();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.finalizationConflict = object.finalizationConflict !== undefined && object.finalizationConflict !== null ? _conflict_data.FinalizationConflict.fromPartial(object.finalizationConflict) : undefined;
    message.responseConflict = object.responseConflict !== undefined && object.responseConflict !== null ? _conflict_data.ResponseConflict.fromPartial(object.responseConflict) : undefined;
    message.sameProviderConflict = object.sameProviderConflict !== undefined && object.sameProviderConflict !== null ? _conflict_data.FinalizationConflict.fromPartial(object.sameProviderConflict) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creator: object.creator,
      finalizationConflict: object !== null && object !== void 0 && object.finalizationConflict ? _conflict_data.FinalizationConflict.fromAmino(object.finalizationConflict) : undefined,
      responseConflict: object !== null && object !== void 0 && object.responseConflict ? _conflict_data.ResponseConflict.fromAmino(object.responseConflict) : undefined,
      sameProviderConflict: object !== null && object !== void 0 && object.sameProviderConflict ? _conflict_data.FinalizationConflict.fromAmino(object.sameProviderConflict) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creator = message.creator;
    obj.finalizationConflict = message.finalizationConflict ? _conflict_data.FinalizationConflict.toAmino(message.finalizationConflict) : undefined;
    obj.responseConflict = message.responseConflict ? _conflict_data.ResponseConflict.toAmino(message.responseConflict) : undefined;
    obj.sameProviderConflict = message.sameProviderConflict ? _conflict_data.FinalizationConflict.toAmino(message.sameProviderConflict) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgDetection.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgDetection.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgDetection.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgDetection",
      value: MsgDetection.encode(message).finish()
    };
  }
};
exports.MsgDetection = MsgDetection;
function createBaseMsgDetectionResponse() {
  return {};
}
var MsgDetectionResponse = {
  typeUrl: "/lavanet.lava.conflict.MsgDetectionResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDetectionResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgDetectionResponse();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgDetectionResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgDetectionResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgDetectionResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgDetectionResponse",
      value: MsgDetectionResponse.encode(message).finish()
    };
  }
};
exports.MsgDetectionResponse = MsgDetectionResponse;
function createBaseMsgConflictVoteCommit() {
  return {
    creator: "",
    voteID: "",
    hash: new Uint8Array()
  };
}
var MsgConflictVoteCommit = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.voteID !== "") {
      writer.uint32(18).string(message.voteID);
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConflictVoteCommit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.voteID = reader.string();
          break;
        case 3:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$voteID, _object$hash;
    var message = createBaseMsgConflictVoteCommit();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.voteID = (_object$voteID = object.voteID) !== null && _object$voteID !== void 0 ? _object$voteID : "";
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creator: object.creator,
      voteID: object.voteID,
      hash: object.hash
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creator = message.creator;
    obj.voteID = message.voteID;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgConflictVoteCommit.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgConflictVoteCommit.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgConflictVoteCommit.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
      value: MsgConflictVoteCommit.encode(message).finish()
    };
  }
};
exports.MsgConflictVoteCommit = MsgConflictVoteCommit;
function createBaseMsgConflictVoteCommitResponse() {
  return {};
}
var MsgConflictVoteCommitResponse = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommitResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConflictVoteCommitResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgConflictVoteCommitResponse();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgConflictVoteCommitResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgConflictVoteCommitResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgConflictVoteCommitResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommitResponse",
      value: MsgConflictVoteCommitResponse.encode(message).finish()
    };
  }
};
exports.MsgConflictVoteCommitResponse = MsgConflictVoteCommitResponse;
function createBaseMsgConflictVoteReveal() {
  return {
    creator: "",
    voteID: "",
    nonce: BigInt(0),
    hash: new Uint8Array()
  };
}
var MsgConflictVoteReveal = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.voteID !== "") {
      writer.uint32(18).string(message.voteID);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(24).int64(message.nonce);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConflictVoteReveal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.voteID = reader.string();
          break;
        case 3:
          message.nonce = reader.int64();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator3, _object$voteID2, _object$hash2;
    var message = createBaseMsgConflictVoteReveal();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.voteID = (_object$voteID2 = object.voteID) !== null && _object$voteID2 !== void 0 ? _object$voteID2 : "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creator: object.creator,
      voteID: object.voteID,
      nonce: BigInt(object.nonce),
      hash: object.hash
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creator = message.creator;
    obj.voteID = message.voteID;
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgConflictVoteReveal.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgConflictVoteReveal.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgConflictVoteReveal.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
      value: MsgConflictVoteReveal.encode(message).finish()
    };
  }
};
exports.MsgConflictVoteReveal = MsgConflictVoteReveal;
function createBaseMsgConflictVoteRevealResponse() {
  return {};
}
var MsgConflictVoteRevealResponse = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteRevealResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConflictVoteRevealResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgConflictVoteRevealResponse();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgConflictVoteRevealResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgConflictVoteRevealResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgConflictVoteRevealResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteRevealResponse",
      value: MsgConflictVoteRevealResponse.encode(message).finish()
    };
  }
};
exports.MsgConflictVoteRevealResponse = MsgConflictVoteRevealResponse;