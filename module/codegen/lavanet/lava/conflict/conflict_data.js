import { RelayRequest, RelayReply } from "../pairing/relay";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseResponseConflict() {
  return {
    conflictRelayData0: ConflictRelayData.fromPartial({}),
    conflictRelayData1: ConflictRelayData.fromPartial({})
  };
}
export const ResponseConflict = {
  typeUrl: "/lavanet.lava.conflict.ResponseConflict",
  encode(message, writer = BinaryWriter.create()) {
    if (message.conflictRelayData0 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData0, writer.uint32(10).fork()).ldelim();
    }
    if (message.conflictRelayData1 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      conflictRelayData0: object !== null && object !== void 0 && object.conflictRelayData0 ? ConflictRelayData.fromAmino(object.conflictRelayData0) : undefined,
      conflictRelayData1: object !== null && object !== void 0 && object.conflictRelayData1 ? ConflictRelayData.fromAmino(object.conflictRelayData1) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.conflictRelayData0 = message.conflictRelayData0 ? ConflictRelayData.toAmino(message.conflictRelayData0) : undefined;
    obj.conflictRelayData1 = message.conflictRelayData1 ? ConflictRelayData.toAmino(message.conflictRelayData1) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return ResponseConflict.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ResponseConflict.decode(message.value);
  },
  toProto(message) {
    return ResponseConflict.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.ResponseConflict",
      value: ResponseConflict.encode(message).finish()
    };
  }
};
function createBaseConflictRelayData() {
  return {
    request: RelayRequest.fromPartial({}),
    reply: ReplyMetadata.fromPartial({})
  };
}
export const ConflictRelayData = {
  typeUrl: "/lavanet.lava.conflict.ConflictRelayData",
  encode(message, writer = BinaryWriter.create()) {
    if (message.request !== undefined) {
      RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.reply !== undefined) {
      ReplyMetadata.encode(message.reply, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      request: object !== null && object !== void 0 && object.request ? RelayRequest.fromAmino(object.request) : undefined,
      reply: object !== null && object !== void 0 && object.reply ? ReplyMetadata.fromAmino(object.reply) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.request = message.request ? RelayRequest.toAmino(message.request) : undefined;
    obj.reply = message.reply ? ReplyMetadata.toAmino(message.reply) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return ConflictRelayData.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ConflictRelayData.decode(message.value);
  },
  toProto(message) {
    return ConflictRelayData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.ConflictRelayData",
      value: ConflictRelayData.encode(message).finish()
    };
  }
};
function createBaseReplyMetadata() {
  return {
    hashAllDataHash: new Uint8Array(),
    sig: new Uint8Array(),
    latestBlock: BigInt(0),
    finalizedBlocksHashes: new Uint8Array(),
    sigBlocks: new Uint8Array()
  };
}
export const ReplyMetadata = {
  typeUrl: "/lavanet.lava.conflict.ReplyMetadata",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? BigInt(object.latestBlock.toString()) : BigInt(0);
    message.finalizedBlocksHashes = (_object$finalizedBloc = object.finalizedBlocksHashes) !== null && _object$finalizedBloc !== void 0 ? _object$finalizedBloc : new Uint8Array();
    message.sigBlocks = (_object$sigBlocks = object.sigBlocks) !== null && _object$sigBlocks !== void 0 ? _object$sigBlocks : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      hashAllDataHash: object.hash_all_data_hash,
      sig: object.sig,
      latestBlock: BigInt(object.latest_block),
      finalizedBlocksHashes: object.finalized_blocks_hashes,
      sigBlocks: object.sig_blocks
    };
  },
  toAmino(message) {
    const obj = {};
    obj.hash_all_data_hash = message.hashAllDataHash;
    obj.sig = message.sig;
    obj.latest_block = message.latestBlock ? message.latestBlock.toString() : undefined;
    obj.finalized_blocks_hashes = message.finalizedBlocksHashes;
    obj.sig_blocks = message.sigBlocks;
    return obj;
  },
  fromAminoMsg(object) {
    return ReplyMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ReplyMetadata.decode(message.value);
  },
  toProto(message) {
    return ReplyMetadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.ReplyMetadata",
      value: ReplyMetadata.encode(message).finish()
    };
  }
};
function createBaseFinalizationConflict() {
  return {
    relayReply0: RelayReply.fromPartial({}),
    relayReply1: RelayReply.fromPartial({})
  };
}
export const FinalizationConflict = {
  typeUrl: "/lavanet.lava.conflict.FinalizationConflict",
  encode(message, writer = BinaryWriter.create()) {
    if (message.relayReply0 !== undefined) {
      RelayReply.encode(message.relayReply0, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayReply1 !== undefined) {
      RelayReply.encode(message.relayReply1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      relayReply0: object !== null && object !== void 0 && object.relayReply0 ? RelayReply.fromAmino(object.relayReply0) : undefined,
      relayReply1: object !== null && object !== void 0 && object.relayReply1 ? RelayReply.fromAmino(object.relayReply1) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.relayReply0 = message.relayReply0 ? RelayReply.toAmino(message.relayReply0) : undefined;
    obj.relayReply1 = message.relayReply1 ? RelayReply.toAmino(message.relayReply1) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return FinalizationConflict.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FinalizationConflict.decode(message.value);
  },
  toProto(message) {
    return FinalizationConflict.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.FinalizationConflict",
      value: FinalizationConflict.encode(message).finish()
    };
  }
};