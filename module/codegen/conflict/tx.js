import { FinalizationConflict, ResponseConflict } from "./conflict_data";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** TODO:: change coin type to another proto (define proto in another file int this directory) */

/** TODO:: change coin type to another proto (define proto in another file int this directory) */

function createBaseMsgDetection() {
  return {
    creator: "",
    finalizationConflict: undefined,
    responseConflict: undefined,
    sameProviderConflict: undefined
  };
}
export const MsgDetection = {
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      finalizationConflict: isSet(object.finalizationConflict) ? FinalizationConflict.fromJSON(object.finalizationConflict) : undefined,
      responseConflict: isSet(object.responseConflict) ? ResponseConflict.fromJSON(object.responseConflict) : undefined,
      sameProviderConflict: isSet(object.sameProviderConflict) ? FinalizationConflict.fromJSON(object.sameProviderConflict) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.finalizationConflict !== undefined && (obj.finalizationConflict = message.finalizationConflict ? FinalizationConflict.toJSON(message.finalizationConflict) : undefined);
    message.responseConflict !== undefined && (obj.responseConflict = message.responseConflict ? ResponseConflict.toJSON(message.responseConflict) : undefined);
    message.sameProviderConflict !== undefined && (obj.sameProviderConflict = message.sameProviderConflict ? FinalizationConflict.toJSON(message.sameProviderConflict) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$creator;
    const message = createBaseMsgDetection();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.finalizationConflict = object.finalizationConflict !== undefined && object.finalizationConflict !== null ? FinalizationConflict.fromPartial(object.finalizationConflict) : undefined;
    message.responseConflict = object.responseConflict !== undefined && object.responseConflict !== null ? ResponseConflict.fromPartial(object.responseConflict) : undefined;
    message.sameProviderConflict = object.sameProviderConflict !== undefined && object.sameProviderConflict !== null ? FinalizationConflict.fromPartial(object.sameProviderConflict) : undefined;
    return message;
  }
};
function createBaseMsgDetectionResponse() {
  return {};
}
export const MsgDetectionResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgDetectionResponse();
    return message;
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
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      voteID: isSet(object.voteID) ? String(object.voteID) : "",
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.voteID !== undefined && (obj.voteID = message.voteID);
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$creator2, _object$voteID, _object$hash;
    const message = createBaseMsgConflictVoteCommit();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.voteID = (_object$voteID = object.voteID) !== null && _object$voteID !== void 0 ? _object$voteID : "";
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  }
};
function createBaseMsgConflictVoteCommitResponse() {
  return {};
}
export const MsgConflictVoteCommitResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgConflictVoteCommitResponse();
    return message;
  }
};
function createBaseMsgConflictVoteReveal() {
  return {
    creator: "",
    voteID: "",
    nonce: Long.ZERO,
    hash: new Uint8Array()
  };
}
export const MsgConflictVoteReveal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.voteID !== "") {
      writer.uint32(18).string(message.voteID);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).int64(message.nonce);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      voteID: isSet(object.voteID) ? String(object.voteID) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.ZERO,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.voteID !== undefined && (obj.voteID = message.voteID);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.ZERO).toString());
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$creator3, _object$voteID2, _object$hash2;
    const message = createBaseMsgConflictVoteReveal();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.voteID = (_object$voteID2 = object.voteID) !== null && _object$voteID2 !== void 0 ? _object$voteID2 : "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.ZERO;
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    return message;
  }
};
function createBaseMsgConflictVoteRevealResponse() {
  return {};
}
export const MsgConflictVoteRevealResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgConflictVoteRevealResponse();
    return message;
  }
};