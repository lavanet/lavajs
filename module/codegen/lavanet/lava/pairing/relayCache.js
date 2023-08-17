import { RelayRequest, RelayReply } from "./relay";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseCacheUsage() {
  return {
    CacheHits: BigInt(0),
    CacheMisses: BigInt(0)
  };
}
export const CacheUsage = {
  typeUrl: "/lavanet.lava.pairing.CacheUsage",
  encode(message, writer = BinaryWriter.create()) {
    if (message.CacheHits !== BigInt(0)) {
      writer.uint32(8).uint64(message.CacheHits);
    }
    if (message.CacheMisses !== BigInt(0)) {
      writer.uint32(16).uint64(message.CacheMisses);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseCacheUsage();
    message.CacheHits = object.CacheHits !== undefined && object.CacheHits !== null ? BigInt(object.CacheHits.toString()) : BigInt(0);
    message.CacheMisses = object.CacheMisses !== undefined && object.CacheMisses !== null ? BigInt(object.CacheMisses.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      CacheHits: BigInt(object.CacheHits),
      CacheMisses: BigInt(object.CacheMisses)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.CacheHits = message.CacheHits ? message.CacheHits.toString() : undefined;
    obj.CacheMisses = message.CacheMisses ? message.CacheMisses.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return CacheUsage.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return CacheUsage.decode(message.value);
  },
  toProto(message) {
    return CacheUsage.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.CacheUsage",
      value: CacheUsage.encode(message).finish()
    };
  }
};
function createBaseRelayCacheGet() {
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
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
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
  fromPartial(object) {
    var _object$apiInterface, _object$blockHash, _object$chainID, _object$finalized;
    const message = createBaseRelayCacheGet();
    message.request = object.request !== undefined && object.request !== null ? RelayRequest.fromPartial(object.request) : undefined;
    message.apiInterface = (_object$apiInterface = object.apiInterface) !== null && _object$apiInterface !== void 0 ? _object$apiInterface : "";
    message.blockHash = (_object$blockHash = object.blockHash) !== null && _object$blockHash !== void 0 ? _object$blockHash : new Uint8Array();
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.finalized = (_object$finalized = object.finalized) !== null && _object$finalized !== void 0 ? _object$finalized : false;
    return message;
  },
  fromAmino(object) {
    return {
      request: object !== null && object !== void 0 && object.request ? RelayRequest.fromAmino(object.request) : undefined,
      apiInterface: object.apiInterface,
      blockHash: object.blockHash,
      chainID: object.chainID,
      finalized: object.finalized
    };
  },
  toAmino(message) {
    const obj = {};
    obj.request = message.request ? RelayRequest.toAmino(message.request) : undefined;
    obj.apiInterface = message.apiInterface;
    obj.blockHash = message.blockHash;
    obj.chainID = message.chainID;
    obj.finalized = message.finalized;
    return obj;
  },
  fromAminoMsg(object) {
    return RelayCacheGet.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RelayCacheGet.decode(message.value);
  },
  toProto(message) {
    return RelayCacheGet.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayCacheGet",
      value: RelayCacheGet.encode(message).finish()
    };
  }
};
function createBaseRelayCacheSet() {
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
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
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
  fromPartial(object) {
    var _object$apiInterface2, _object$blockHash2, _object$chainID2, _object$bucketID, _object$finalized2;
    const message = createBaseRelayCacheSet();
    message.request = object.request !== undefined && object.request !== null ? RelayRequest.fromPartial(object.request) : undefined;
    message.apiInterface = (_object$apiInterface2 = object.apiInterface) !== null && _object$apiInterface2 !== void 0 ? _object$apiInterface2 : "";
    message.blockHash = (_object$blockHash2 = object.blockHash) !== null && _object$blockHash2 !== void 0 ? _object$blockHash2 : new Uint8Array();
    message.chainID = (_object$chainID2 = object.chainID) !== null && _object$chainID2 !== void 0 ? _object$chainID2 : "";
    message.bucketID = (_object$bucketID = object.bucketID) !== null && _object$bucketID !== void 0 ? _object$bucketID : "";
    message.response = object.response !== undefined && object.response !== null ? RelayReply.fromPartial(object.response) : undefined;
    message.finalized = (_object$finalized2 = object.finalized) !== null && _object$finalized2 !== void 0 ? _object$finalized2 : false;
    return message;
  },
  fromAmino(object) {
    return {
      request: object !== null && object !== void 0 && object.request ? RelayRequest.fromAmino(object.request) : undefined,
      apiInterface: object.apiInterface,
      blockHash: object.blockHash,
      chainID: object.chainID,
      bucketID: object.bucketID,
      response: object !== null && object !== void 0 && object.response ? RelayReply.fromAmino(object.response) : undefined,
      finalized: object.finalized
    };
  },
  toAmino(message) {
    const obj = {};
    obj.request = message.request ? RelayRequest.toAmino(message.request) : undefined;
    obj.apiInterface = message.apiInterface;
    obj.blockHash = message.blockHash;
    obj.chainID = message.chainID;
    obj.bucketID = message.bucketID;
    obj.response = message.response ? RelayReply.toAmino(message.response) : undefined;
    obj.finalized = message.finalized;
    return obj;
  },
  fromAminoMsg(object) {
    return RelayCacheSet.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return RelayCacheSet.decode(message.value);
  },
  toProto(message) {
    return RelayCacheSet.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayCacheSet",
      value: RelayCacheSet.encode(message).finish()
    };
  }
};