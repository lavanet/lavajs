import { RelayRequest, RelayReply } from "../pairing/relay";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseResponseConflict() {
  return {
    conflictRelayData0: undefined,
    conflictRelayData1: undefined
  };
}
export const ResponseConflict = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.conflictRelayData0 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData0, writer.uint32(10).fork()).ldelim();
    }
    if (message.conflictRelayData1 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseConflict();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    const message = createBaseResponseConflict();
    message.conflictRelayData0 = object.conflictRelayData0 !== undefined && object.conflictRelayData0 !== null ? ConflictRelayData.fromPartial(object.conflictRelayData0) : undefined;
    message.conflictRelayData1 = object.conflictRelayData1 !== undefined && object.conflictRelayData1 !== null ? ConflictRelayData.fromPartial(object.conflictRelayData1) : undefined;
    return message;
  }
};
function createBaseConflictRelayData() {
  return {
    request: undefined,
    reply: undefined
  };
}
export const ConflictRelayData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.request !== undefined) {
      RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.reply !== undefined) {
      ReplyMetadata.encode(message.reply, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConflictRelayData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = RelayRequest.decode(reader, reader.uint32());
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
  fromPartial(object) {
    const message = createBaseConflictRelayData();
    message.request = object.request !== undefined && object.request !== null ? RelayRequest.fromPartial(object.request) : undefined;
    message.reply = object.reply !== undefined && object.reply !== null ? ReplyMetadata.fromPartial(object.reply) : undefined;
    return message;
  }
};
function createBaseReplyMetadata() {
  return {
    hashAllDataHash: new Uint8Array(),
    sig: new Uint8Array(),
    latestBlock: Long.ZERO,
    finalizedBlocksHashes: new Uint8Array(),
    sigBlocks: new Uint8Array()
  };
}
export const ReplyMetadata = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.hashAllDataHash.length !== 0) {
      writer.uint32(10).bytes(message.hashAllDataHash);
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    if (!message.latestBlock.isZero()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReplyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$hashAllDataHa, _object$sig, _object$finalizedBloc, _object$sigBlocks;
    const message = createBaseReplyMetadata();
    message.hashAllDataHash = (_object$hashAllDataHa = object.hashAllDataHash) !== null && _object$hashAllDataHa !== void 0 ? _object$hashAllDataHa : new Uint8Array();
    message.sig = (_object$sig = object.sig) !== null && _object$sig !== void 0 ? _object$sig : new Uint8Array();
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? Long.fromValue(object.latestBlock) : Long.ZERO;
    message.finalizedBlocksHashes = (_object$finalizedBloc = object.finalizedBlocksHashes) !== null && _object$finalizedBloc !== void 0 ? _object$finalizedBloc : new Uint8Array();
    message.sigBlocks = (_object$sigBlocks = object.sigBlocks) !== null && _object$sigBlocks !== void 0 ? _object$sigBlocks : new Uint8Array();
    return message;
  }
};
function createBaseFinalizationConflict() {
  return {
    relayReply0: undefined,
    relayReply1: undefined
  };
}
export const FinalizationConflict = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.relayReply0 !== undefined) {
      RelayReply.encode(message.relayReply0, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayReply1 !== undefined) {
      RelayReply.encode(message.relayReply1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizationConflict();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayReply0 = RelayReply.decode(reader, reader.uint32());
          break;
        case 2:
          message.relayReply1 = RelayReply.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseFinalizationConflict();
    message.relayReply0 = object.relayReply0 !== undefined && object.relayReply0 !== null ? RelayReply.fromPartial(object.relayReply0) : undefined;
    message.relayReply1 = object.relayReply1 !== undefined && object.relayReply1 !== null ? RelayReply.fromPartial(object.relayReply1) : undefined;
    return message;
  }
};