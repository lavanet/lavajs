import { FinalizationConflict, ResponseConflict } from "./conflict_data";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** TODO:: change coin type to another proto (define proto in another file int this directory) */

/** TODO:: change coin type to another proto (define proto in another file int this directory) */

function createBaseMsgDetection() {
  return {
    creator: "",
    finalizationConflict: FinalizationConflict.fromPartial({}),
    responseConflict: ResponseConflict.fromPartial({}),
    sameProviderConflict: FinalizationConflict.fromPartial({})
  };
}
export const MsgDetection = {
  typeUrl: "/lavanet.lava.conflict.MsgDetection",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.finalizationConflict !== undefined) {
      FinalizationConflict.encode(message.finalizationConflict, writer.uint32(18).fork()).ldelim();
    }
    if (message.responseConflict !== undefined) {
      ResponseConflict.encode(message.responseConflict, writer.uint32(26).fork()).ldelim();
    }
    if (message.sameProviderConflict !== undefined) {
      FinalizationConflict.encode(message.sameProviderConflict, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.finalizationConflict = FinalizationConflict.decode(reader, reader.uint32());
          break;
        case 3:
          message.responseConflict = ResponseConflict.decode(reader, reader.uint32());
          break;
        case 4:
          message.sameProviderConflict = FinalizationConflict.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$creator;
    const message = createBaseMsgDetection();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.finalizationConflict = object.finalizationConflict !== undefined && object.finalizationConflict !== null ? FinalizationConflict.fromPartial(object.finalizationConflict) : undefined;
    message.responseConflict = object.responseConflict !== undefined && object.responseConflict !== null ? ResponseConflict.fromPartial(object.responseConflict) : undefined;
    message.sameProviderConflict = object.sameProviderConflict !== undefined && object.sameProviderConflict !== null ? FinalizationConflict.fromPartial(object.sameProviderConflict) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      finalizationConflict: object !== null && object !== void 0 && object.finalizationConflict ? FinalizationConflict.fromAmino(object.finalizationConflict) : undefined,
      responseConflict: object !== null && object !== void 0 && object.responseConflict ? ResponseConflict.fromAmino(object.responseConflict) : undefined,
      sameProviderConflict: object !== null && object !== void 0 && object.sameProviderConflict ? FinalizationConflict.fromAmino(object.sameProviderConflict) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    obj.finalizationConflict = message.finalizationConflict ? FinalizationConflict.toAmino(message.finalizationConflict) : undefined;
    obj.responseConflict = message.responseConflict ? ResponseConflict.toAmino(message.responseConflict) : undefined;
    obj.sameProviderConflict = message.sameProviderConflict ? FinalizationConflict.toAmino(message.sameProviderConflict) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDetection.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgDetection.decode(message.value);
  },
  toProto(message) {
    return MsgDetection.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgDetection",
      value: MsgDetection.encode(message).finish()
    };
  }
};
function createBaseMsgDetectionResponse() {
  return {};
}
export const MsgDetectionResponse = {
  typeUrl: "/lavanet.lava.conflict.MsgDetectionResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDetectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgDetectionResponse();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDetectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgDetectionResponse.decode(message.value);
  },
  toProto(message) {
    return MsgDetectionResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgDetectionResponse",
      value: MsgDetectionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConflictVoteCommit() {
  return {
    creator: "",
    voteID: "",
    hash: new Uint8Array()
  };
}
export const MsgConflictVoteCommit = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConflictVoteCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$creator2, _object$voteID, _object$hash;
    const message = createBaseMsgConflictVoteCommit();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.voteID = (_object$voteID = object.voteID) !== null && _object$voteID !== void 0 ? _object$voteID : "";
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      voteID: object.voteID,
      hash: object.hash
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    obj.voteID = message.voteID;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConflictVoteCommit.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgConflictVoteCommit.decode(message.value);
  },
  toProto(message) {
    return MsgConflictVoteCommit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
      value: MsgConflictVoteCommit.encode(message).finish()
    };
  }
};
function createBaseMsgConflictVoteCommitResponse() {
  return {};
}
export const MsgConflictVoteCommitResponse = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommitResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConflictVoteCommitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgConflictVoteCommitResponse();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConflictVoteCommitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgConflictVoteCommitResponse.decode(message.value);
  },
  toProto(message) {
    return MsgConflictVoteCommitResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommitResponse",
      value: MsgConflictVoteCommitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConflictVoteReveal() {
  return {
    creator: "",
    voteID: "",
    nonce: BigInt(0),
    hash: new Uint8Array()
  };
}
export const MsgConflictVoteReveal = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConflictVoteReveal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$creator3, _object$voteID2, _object$hash2;
    const message = createBaseMsgConflictVoteReveal();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.voteID = (_object$voteID2 = object.voteID) !== null && _object$voteID2 !== void 0 ? _object$voteID2 : "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      voteID: object.voteID,
      nonce: BigInt(object.nonce),
      hash: object.hash
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    obj.voteID = message.voteID;
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConflictVoteReveal.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgConflictVoteReveal.decode(message.value);
  },
  toProto(message) {
    return MsgConflictVoteReveal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
      value: MsgConflictVoteReveal.encode(message).finish()
    };
  }
};
function createBaseMsgConflictVoteRevealResponse() {
  return {};
}
export const MsgConflictVoteRevealResponse = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteRevealResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConflictVoteRevealResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgConflictVoteRevealResponse();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgConflictVoteRevealResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgConflictVoteRevealResponse.decode(message.value);
  },
  toProto(message) {
    return MsgConflictVoteRevealResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteRevealResponse",
      value: MsgConflictVoteRevealResponse.encode(message).finish()
    };
  }
};