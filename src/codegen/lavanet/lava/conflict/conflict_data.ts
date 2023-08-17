import { RelayRequest, RelayRequestSDKType, RelayReply, RelayReplySDKType } from "../pairing/relay";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface ResponseConflict {
  conflictRelayData0: ConflictRelayData;
  conflictRelayData1: ConflictRelayData;
}
export interface ResponseConflictSDKType {
  conflictRelayData0: ConflictRelayDataSDKType;
  conflictRelayData1: ConflictRelayDataSDKType;
}
export interface ConflictRelayData {
  request: RelayRequest;
  reply: ReplyMetadata;
}
export interface ConflictRelayDataSDKType {
  request: RelayRequestSDKType;
  reply: ReplyMetadataSDKType;
}
export interface ReplyMetadata {
  hashAllDataHash: Uint8Array;
  sig: Uint8Array;
  latestBlock: bigint;
  finalizedBlocksHashes: Uint8Array;
  sigBlocks: Uint8Array;
}
export interface ReplyMetadataSDKType {
  hash_all_data_hash: Uint8Array;
  sig: Uint8Array;
  latest_block: bigint;
  finalized_blocks_hashes: Uint8Array;
  sig_blocks: Uint8Array;
}
export interface FinalizationConflict {
  relayReply0: RelayReply;
  relayReply1: RelayReply;
}
export interface FinalizationConflictSDKType {
  relayReply0: RelayReplySDKType;
  relayReply1: RelayReplySDKType;
}
function createBaseResponseConflict(): ResponseConflict {
  return {
    conflictRelayData0: ConflictRelayData.fromPartial({}),
    conflictRelayData1: ConflictRelayData.fromPartial({})
  };
}
export const ResponseConflict = {
  typeUrl: "/lavanet.lava.conflict.ResponseConflict",
  encode(message: ResponseConflict, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.conflictRelayData0 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData0, writer.uint32(10).fork()).ldelim();
    }
    if (message.conflictRelayData1 !== undefined) {
      ConflictRelayData.encode(message.conflictRelayData1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseConflict {
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
  fromPartial(object: Partial<ResponseConflict>): ResponseConflict {
    const message = createBaseResponseConflict();
    message.conflictRelayData0 = object.conflictRelayData0 !== undefined && object.conflictRelayData0 !== null ? ConflictRelayData.fromPartial(object.conflictRelayData0) : undefined;
    message.conflictRelayData1 = object.conflictRelayData1 !== undefined && object.conflictRelayData1 !== null ? ConflictRelayData.fromPartial(object.conflictRelayData1) : undefined;
    return message;
  },
  fromAmino(object: ResponseConflictAmino): ResponseConflict {
    return {
      conflictRelayData0: object?.conflictRelayData0 ? ConflictRelayData.fromAmino(object.conflictRelayData0) : undefined,
      conflictRelayData1: object?.conflictRelayData1 ? ConflictRelayData.fromAmino(object.conflictRelayData1) : undefined
    };
  },
  toAmino(message: ResponseConflict): ResponseConflictAmino {
    const obj: any = {};
    obj.conflictRelayData0 = message.conflictRelayData0 ? ConflictRelayData.toAmino(message.conflictRelayData0) : undefined;
    obj.conflictRelayData1 = message.conflictRelayData1 ? ConflictRelayData.toAmino(message.conflictRelayData1) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseConflictAminoMsg): ResponseConflict {
    return ResponseConflict.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseConflictProtoMsg): ResponseConflict {
    return ResponseConflict.decode(message.value);
  },
  toProto(message: ResponseConflict): Uint8Array {
    return ResponseConflict.encode(message).finish();
  },
  toProtoMsg(message: ResponseConflict): ResponseConflictProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.ResponseConflict",
      value: ResponseConflict.encode(message).finish()
    };
  }
};
function createBaseConflictRelayData(): ConflictRelayData {
  return {
    request: RelayRequest.fromPartial({}),
    reply: ReplyMetadata.fromPartial({})
  };
}
export const ConflictRelayData = {
  typeUrl: "/lavanet.lava.conflict.ConflictRelayData",
  encode(message: ConflictRelayData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.request !== undefined) {
      RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.reply !== undefined) {
      ReplyMetadata.encode(message.reply, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConflictRelayData {
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
  fromPartial(object: Partial<ConflictRelayData>): ConflictRelayData {
    const message = createBaseConflictRelayData();
    message.request = object.request !== undefined && object.request !== null ? RelayRequest.fromPartial(object.request) : undefined;
    message.reply = object.reply !== undefined && object.reply !== null ? ReplyMetadata.fromPartial(object.reply) : undefined;
    return message;
  },
  fromAmino(object: ConflictRelayDataAmino): ConflictRelayData {
    return {
      request: object?.request ? RelayRequest.fromAmino(object.request) : undefined,
      reply: object?.reply ? ReplyMetadata.fromAmino(object.reply) : undefined
    };
  },
  toAmino(message: ConflictRelayData): ConflictRelayDataAmino {
    const obj: any = {};
    obj.request = message.request ? RelayRequest.toAmino(message.request) : undefined;
    obj.reply = message.reply ? ReplyMetadata.toAmino(message.reply) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConflictRelayDataAminoMsg): ConflictRelayData {
    return ConflictRelayData.fromAmino(object.value);
  },
  fromProtoMsg(message: ConflictRelayDataProtoMsg): ConflictRelayData {
    return ConflictRelayData.decode(message.value);
  },
  toProto(message: ConflictRelayData): Uint8Array {
    return ConflictRelayData.encode(message).finish();
  },
  toProtoMsg(message: ConflictRelayData): ConflictRelayDataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.ConflictRelayData",
      value: ConflictRelayData.encode(message).finish()
    };
  }
};
function createBaseReplyMetadata(): ReplyMetadata {
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
  encode(message: ReplyMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ReplyMetadata {
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
  fromPartial(object: Partial<ReplyMetadata>): ReplyMetadata {
    const message = createBaseReplyMetadata();
    message.hashAllDataHash = object.hashAllDataHash ?? new Uint8Array();
    message.sig = object.sig ?? new Uint8Array();
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? BigInt(object.latestBlock.toString()) : BigInt(0);
    message.finalizedBlocksHashes = object.finalizedBlocksHashes ?? new Uint8Array();
    message.sigBlocks = object.sigBlocks ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ReplyMetadataAmino): ReplyMetadata {
    return {
      hashAllDataHash: object.hash_all_data_hash,
      sig: object.sig,
      latestBlock: BigInt(object.latest_block),
      finalizedBlocksHashes: object.finalized_blocks_hashes,
      sigBlocks: object.sig_blocks
    };
  },
  toAmino(message: ReplyMetadata): ReplyMetadataAmino {
    const obj: any = {};
    obj.hash_all_data_hash = message.hashAllDataHash;
    obj.sig = message.sig;
    obj.latest_block = message.latestBlock ? message.latestBlock.toString() : undefined;
    obj.finalized_blocks_hashes = message.finalizedBlocksHashes;
    obj.sig_blocks = message.sigBlocks;
    return obj;
  },
  fromAminoMsg(object: ReplyMetadataAminoMsg): ReplyMetadata {
    return ReplyMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ReplyMetadataProtoMsg): ReplyMetadata {
    return ReplyMetadata.decode(message.value);
  },
  toProto(message: ReplyMetadata): Uint8Array {
    return ReplyMetadata.encode(message).finish();
  },
  toProtoMsg(message: ReplyMetadata): ReplyMetadataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.ReplyMetadata",
      value: ReplyMetadata.encode(message).finish()
    };
  }
};
function createBaseFinalizationConflict(): FinalizationConflict {
  return {
    relayReply0: RelayReply.fromPartial({}),
    relayReply1: RelayReply.fromPartial({})
  };
}
export const FinalizationConflict = {
  typeUrl: "/lavanet.lava.conflict.FinalizationConflict",
  encode(message: FinalizationConflict, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relayReply0 !== undefined) {
      RelayReply.encode(message.relayReply0, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayReply1 !== undefined) {
      RelayReply.encode(message.relayReply1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FinalizationConflict {
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
  fromPartial(object: Partial<FinalizationConflict>): FinalizationConflict {
    const message = createBaseFinalizationConflict();
    message.relayReply0 = object.relayReply0 !== undefined && object.relayReply0 !== null ? RelayReply.fromPartial(object.relayReply0) : undefined;
    message.relayReply1 = object.relayReply1 !== undefined && object.relayReply1 !== null ? RelayReply.fromPartial(object.relayReply1) : undefined;
    return message;
  },
  fromAmino(object: FinalizationConflictAmino): FinalizationConflict {
    return {
      relayReply0: object?.relayReply0 ? RelayReply.fromAmino(object.relayReply0) : undefined,
      relayReply1: object?.relayReply1 ? RelayReply.fromAmino(object.relayReply1) : undefined
    };
  },
  toAmino(message: FinalizationConflict): FinalizationConflictAmino {
    const obj: any = {};
    obj.relayReply0 = message.relayReply0 ? RelayReply.toAmino(message.relayReply0) : undefined;
    obj.relayReply1 = message.relayReply1 ? RelayReply.toAmino(message.relayReply1) : undefined;
    return obj;
  },
  fromAminoMsg(object: FinalizationConflictAminoMsg): FinalizationConflict {
    return FinalizationConflict.fromAmino(object.value);
  },
  fromProtoMsg(message: FinalizationConflictProtoMsg): FinalizationConflict {
    return FinalizationConflict.decode(message.value);
  },
  toProto(message: FinalizationConflict): Uint8Array {
    return FinalizationConflict.encode(message).finish();
  },
  toProtoMsg(message: FinalizationConflict): FinalizationConflictProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.FinalizationConflict",
      value: FinalizationConflict.encode(message).finish()
    };
  }
};