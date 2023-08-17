import { RelayRequest, RelayRequestSDKType, RelayReply, RelayReplySDKType } from "./relay";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface CacheUsage {
  CacheHits: bigint;
  CacheMisses: bigint;
}
export interface CacheUsageSDKType {
  CacheHits: bigint;
  CacheMisses: bigint;
}
export interface RelayCacheGet {
  request: RelayRequest;
  apiInterface: string;
  blockHash: Uint8Array;
  /** Used to differentiate between different chains so each has its own bucket */
  chainID: string;
  finalized: boolean;
}
export interface RelayCacheGetSDKType {
  request: RelayRequestSDKType;
  apiInterface: string;
  blockHash: Uint8Array;
  chainID: string;
  finalized: boolean;
}
export interface RelayCacheSet {
  request: RelayRequest;
  apiInterface: string;
  blockHash: Uint8Array;
  /** Used to differentiate between different chains so each has its own bucket */
  chainID: string;
  /** bucketID is used to make sure a big user doesnt flood the cache, on providers this will be consumer address, on portal it will be dappID */
  bucketID: string;
  response: RelayReply;
  finalized: boolean;
}
export interface RelayCacheSetSDKType {
  request: RelayRequestSDKType;
  apiInterface: string;
  blockHash: Uint8Array;
  chainID: string;
  bucketID: string;
  response: RelayReplySDKType;
  finalized: boolean;
}
function createBaseCacheUsage(): CacheUsage {
  return {
    CacheHits: BigInt(0),
    CacheMisses: BigInt(0)
  };
}
export const CacheUsage = {
  typeUrl: "/lavanet.lava.pairing.CacheUsage",
  encode(message: CacheUsage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.CacheHits !== BigInt(0)) {
      writer.uint32(8).uint64(message.CacheHits);
    }
    if (message.CacheMisses !== BigInt(0)) {
      writer.uint32(16).uint64(message.CacheMisses);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CacheUsage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CacheHits = reader.uint64();
          break;
        case 2:
          message.CacheMisses = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CacheUsage>): CacheUsage {
    const message = createBaseCacheUsage();
    message.CacheHits = object.CacheHits !== undefined && object.CacheHits !== null ? BigInt(object.CacheHits.toString()) : BigInt(0);
    message.CacheMisses = object.CacheMisses !== undefined && object.CacheMisses !== null ? BigInt(object.CacheMisses.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CacheUsageAmino): CacheUsage {
    return {
      CacheHits: BigInt(object.CacheHits),
      CacheMisses: BigInt(object.CacheMisses)
    };
  },
  toAmino(message: CacheUsage): CacheUsageAmino {
    const obj: any = {};
    obj.CacheHits = message.CacheHits ? message.CacheHits.toString() : undefined;
    obj.CacheMisses = message.CacheMisses ? message.CacheMisses.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CacheUsageAminoMsg): CacheUsage {
    return CacheUsage.fromAmino(object.value);
  },
  fromProtoMsg(message: CacheUsageProtoMsg): CacheUsage {
    return CacheUsage.decode(message.value);
  },
  toProto(message: CacheUsage): Uint8Array {
    return CacheUsage.encode(message).finish();
  },
  toProtoMsg(message: CacheUsage): CacheUsageProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.CacheUsage",
      value: CacheUsage.encode(message).finish()
    };
  }
};
function createBaseRelayCacheGet(): RelayCacheGet {
  return {
    request: RelayRequest.fromPartial({}),
    apiInterface: "",
    blockHash: new Uint8Array(),
    chainID: "",
    finalized: false
  };
}
export const RelayCacheGet = {
  typeUrl: "/lavanet.lava.pairing.RelayCacheGet",
  encode(message: RelayCacheGet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.request !== undefined) {
      RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.apiInterface !== "") {
      writer.uint32(18).string(message.apiInterface);
    }
    if (message.blockHash.length !== 0) {
      writer.uint32(26).bytes(message.blockHash);
    }
    if (message.chainID !== "") {
      writer.uint32(34).string(message.chainID);
    }
    if (message.finalized === true) {
      writer.uint32(40).bool(message.finalized);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayCacheGet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayCacheGet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = RelayRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.apiInterface = reader.string();
          break;
        case 3:
          message.blockHash = reader.bytes();
          break;
        case 4:
          message.chainID = reader.string();
          break;
        case 5:
          message.finalized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelayCacheGet>): RelayCacheGet {
    const message = createBaseRelayCacheGet();
    message.request = object.request !== undefined && object.request !== null ? RelayRequest.fromPartial(object.request) : undefined;
    message.apiInterface = object.apiInterface ?? "";
    message.blockHash = object.blockHash ?? new Uint8Array();
    message.chainID = object.chainID ?? "";
    message.finalized = object.finalized ?? false;
    return message;
  },
  fromAmino(object: RelayCacheGetAmino): RelayCacheGet {
    return {
      request: object?.request ? RelayRequest.fromAmino(object.request) : undefined,
      apiInterface: object.apiInterface,
      blockHash: object.blockHash,
      chainID: object.chainID,
      finalized: object.finalized
    };
  },
  toAmino(message: RelayCacheGet): RelayCacheGetAmino {
    const obj: any = {};
    obj.request = message.request ? RelayRequest.toAmino(message.request) : undefined;
    obj.apiInterface = message.apiInterface;
    obj.blockHash = message.blockHash;
    obj.chainID = message.chainID;
    obj.finalized = message.finalized;
    return obj;
  },
  fromAminoMsg(object: RelayCacheGetAminoMsg): RelayCacheGet {
    return RelayCacheGet.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayCacheGetProtoMsg): RelayCacheGet {
    return RelayCacheGet.decode(message.value);
  },
  toProto(message: RelayCacheGet): Uint8Array {
    return RelayCacheGet.encode(message).finish();
  },
  toProtoMsg(message: RelayCacheGet): RelayCacheGetProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayCacheGet",
      value: RelayCacheGet.encode(message).finish()
    };
  }
};
function createBaseRelayCacheSet(): RelayCacheSet {
  return {
    request: RelayRequest.fromPartial({}),
    apiInterface: "",
    blockHash: new Uint8Array(),
    chainID: "",
    bucketID: "",
    response: RelayReply.fromPartial({}),
    finalized: false
  };
}
export const RelayCacheSet = {
  typeUrl: "/lavanet.lava.pairing.RelayCacheSet",
  encode(message: RelayCacheSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.request !== undefined) {
      RelayRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.apiInterface !== "") {
      writer.uint32(18).string(message.apiInterface);
    }
    if (message.blockHash.length !== 0) {
      writer.uint32(26).bytes(message.blockHash);
    }
    if (message.chainID !== "") {
      writer.uint32(34).string(message.chainID);
    }
    if (message.bucketID !== "") {
      writer.uint32(42).string(message.bucketID);
    }
    if (message.response !== undefined) {
      RelayReply.encode(message.response, writer.uint32(50).fork()).ldelim();
    }
    if (message.finalized === true) {
      writer.uint32(56).bool(message.finalized);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayCacheSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayCacheSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = RelayRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.apiInterface = reader.string();
          break;
        case 3:
          message.blockHash = reader.bytes();
          break;
        case 4:
          message.chainID = reader.string();
          break;
        case 5:
          message.bucketID = reader.string();
          break;
        case 6:
          message.response = RelayReply.decode(reader, reader.uint32());
          break;
        case 7:
          message.finalized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelayCacheSet>): RelayCacheSet {
    const message = createBaseRelayCacheSet();
    message.request = object.request !== undefined && object.request !== null ? RelayRequest.fromPartial(object.request) : undefined;
    message.apiInterface = object.apiInterface ?? "";
    message.blockHash = object.blockHash ?? new Uint8Array();
    message.chainID = object.chainID ?? "";
    message.bucketID = object.bucketID ?? "";
    message.response = object.response !== undefined && object.response !== null ? RelayReply.fromPartial(object.response) : undefined;
    message.finalized = object.finalized ?? false;
    return message;
  },
  fromAmino(object: RelayCacheSetAmino): RelayCacheSet {
    return {
      request: object?.request ? RelayRequest.fromAmino(object.request) : undefined,
      apiInterface: object.apiInterface,
      blockHash: object.blockHash,
      chainID: object.chainID,
      bucketID: object.bucketID,
      response: object?.response ? RelayReply.fromAmino(object.response) : undefined,
      finalized: object.finalized
    };
  },
  toAmino(message: RelayCacheSet): RelayCacheSetAmino {
    const obj: any = {};
    obj.request = message.request ? RelayRequest.toAmino(message.request) : undefined;
    obj.apiInterface = message.apiInterface;
    obj.blockHash = message.blockHash;
    obj.chainID = message.chainID;
    obj.bucketID = message.bucketID;
    obj.response = message.response ? RelayReply.toAmino(message.response) : undefined;
    obj.finalized = message.finalized;
    return obj;
  },
  fromAminoMsg(object: RelayCacheSetAminoMsg): RelayCacheSet {
    return RelayCacheSet.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayCacheSetProtoMsg): RelayCacheSet {
    return RelayCacheSet.decode(message.value);
  },
  toProto(message: RelayCacheSet): Uint8Array {
    return RelayCacheSet.encode(message).finish();
  },
  toProtoMsg(message: RelayCacheSet): RelayCacheSetProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayCacheSet",
      value: RelayCacheSet.encode(message).finish()
    };
  }
};