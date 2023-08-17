import { FinalizationConflict, FinalizationConflictSDKType, ResponseConflict, ResponseConflictSDKType } from "./conflict_data";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** TODO:: change coin type to another proto (define proto in another file int this directory) */
export interface MsgDetection {
  creator: string;
  finalizationConflict: FinalizationConflict;
  responseConflict: ResponseConflict;
  sameProviderConflict: FinalizationConflict;
}
/** TODO:: change coin type to another proto (define proto in another file int this directory) */
export interface MsgDetectionSDKType {
  creator: string;
  finalizationConflict: FinalizationConflictSDKType;
  responseConflict: ResponseConflictSDKType;
  sameProviderConflict: FinalizationConflictSDKType;
}
export interface MsgDetectionResponse {}
export interface MsgDetectionResponseSDKType {}
export interface MsgConflictVoteCommit {
  creator: string;
  voteID: string;
  hash: Uint8Array;
}
export interface MsgConflictVoteCommitSDKType {
  creator: string;
  voteID: string;
  hash: Uint8Array;
}
export interface MsgConflictVoteCommitResponse {}
export interface MsgConflictVoteCommitResponseSDKType {}
export interface MsgConflictVoteReveal {
  creator: string;
  voteID: string;
  nonce: bigint;
  hash: Uint8Array;
}
export interface MsgConflictVoteRevealSDKType {
  creator: string;
  voteID: string;
  nonce: bigint;
  hash: Uint8Array;
}
export interface MsgConflictVoteRevealResponse {}
export interface MsgConflictVoteRevealResponseSDKType {}
function createBaseMsgDetection(): MsgDetection {
  return {
    creator: "",
    finalizationConflict: FinalizationConflict.fromPartial({}),
    responseConflict: ResponseConflict.fromPartial({}),
    sameProviderConflict: FinalizationConflict.fromPartial({})
  };
}
export const MsgDetection = {
  typeUrl: "/lavanet.lava.conflict.MsgDetection",
  encode(message: MsgDetection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDetection {
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
  fromPartial(object: Partial<MsgDetection>): MsgDetection {
    const message = createBaseMsgDetection();
    message.creator = object.creator ?? "";
    message.finalizationConflict = object.finalizationConflict !== undefined && object.finalizationConflict !== null ? FinalizationConflict.fromPartial(object.finalizationConflict) : undefined;
    message.responseConflict = object.responseConflict !== undefined && object.responseConflict !== null ? ResponseConflict.fromPartial(object.responseConflict) : undefined;
    message.sameProviderConflict = object.sameProviderConflict !== undefined && object.sameProviderConflict !== null ? FinalizationConflict.fromPartial(object.sameProviderConflict) : undefined;
    return message;
  },
  fromAmino(object: MsgDetectionAmino): MsgDetection {
    return {
      creator: object.creator,
      finalizationConflict: object?.finalizationConflict ? FinalizationConflict.fromAmino(object.finalizationConflict) : undefined,
      responseConflict: object?.responseConflict ? ResponseConflict.fromAmino(object.responseConflict) : undefined,
      sameProviderConflict: object?.sameProviderConflict ? FinalizationConflict.fromAmino(object.sameProviderConflict) : undefined
    };
  },
  toAmino(message: MsgDetection): MsgDetectionAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.finalizationConflict = message.finalizationConflict ? FinalizationConflict.toAmino(message.finalizationConflict) : undefined;
    obj.responseConflict = message.responseConflict ? ResponseConflict.toAmino(message.responseConflict) : undefined;
    obj.sameProviderConflict = message.sameProviderConflict ? FinalizationConflict.toAmino(message.sameProviderConflict) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDetectionAminoMsg): MsgDetection {
    return MsgDetection.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDetectionProtoMsg): MsgDetection {
    return MsgDetection.decode(message.value);
  },
  toProto(message: MsgDetection): Uint8Array {
    return MsgDetection.encode(message).finish();
  },
  toProtoMsg(message: MsgDetection): MsgDetectionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgDetection",
      value: MsgDetection.encode(message).finish()
    };
  }
};
function createBaseMsgDetectionResponse(): MsgDetectionResponse {
  return {};
}
export const MsgDetectionResponse = {
  typeUrl: "/lavanet.lava.conflict.MsgDetectionResponse",
  encode(_: MsgDetectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDetectionResponse {
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
  fromPartial(_: Partial<MsgDetectionResponse>): MsgDetectionResponse {
    const message = createBaseMsgDetectionResponse();
    return message;
  },
  fromAmino(_: MsgDetectionResponseAmino): MsgDetectionResponse {
    return {};
  },
  toAmino(_: MsgDetectionResponse): MsgDetectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDetectionResponseAminoMsg): MsgDetectionResponse {
    return MsgDetectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDetectionResponseProtoMsg): MsgDetectionResponse {
    return MsgDetectionResponse.decode(message.value);
  },
  toProto(message: MsgDetectionResponse): Uint8Array {
    return MsgDetectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDetectionResponse): MsgDetectionResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgDetectionResponse",
      value: MsgDetectionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConflictVoteCommit(): MsgConflictVoteCommit {
  return {
    creator: "",
    voteID: "",
    hash: new Uint8Array()
  };
}
export const MsgConflictVoteCommit = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
  encode(message: MsgConflictVoteCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConflictVoteCommit {
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
  fromPartial(object: Partial<MsgConflictVoteCommit>): MsgConflictVoteCommit {
    const message = createBaseMsgConflictVoteCommit();
    message.creator = object.creator ?? "";
    message.voteID = object.voteID ?? "";
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgConflictVoteCommitAmino): MsgConflictVoteCommit {
    return {
      creator: object.creator,
      voteID: object.voteID,
      hash: object.hash
    };
  },
  toAmino(message: MsgConflictVoteCommit): MsgConflictVoteCommitAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.voteID = message.voteID;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: MsgConflictVoteCommitAminoMsg): MsgConflictVoteCommit {
    return MsgConflictVoteCommit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConflictVoteCommitProtoMsg): MsgConflictVoteCommit {
    return MsgConflictVoteCommit.decode(message.value);
  },
  toProto(message: MsgConflictVoteCommit): Uint8Array {
    return MsgConflictVoteCommit.encode(message).finish();
  },
  toProtoMsg(message: MsgConflictVoteCommit): MsgConflictVoteCommitProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
      value: MsgConflictVoteCommit.encode(message).finish()
    };
  }
};
function createBaseMsgConflictVoteCommitResponse(): MsgConflictVoteCommitResponse {
  return {};
}
export const MsgConflictVoteCommitResponse = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommitResponse",
  encode(_: MsgConflictVoteCommitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConflictVoteCommitResponse {
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
  fromPartial(_: Partial<MsgConflictVoteCommitResponse>): MsgConflictVoteCommitResponse {
    const message = createBaseMsgConflictVoteCommitResponse();
    return message;
  },
  fromAmino(_: MsgConflictVoteCommitResponseAmino): MsgConflictVoteCommitResponse {
    return {};
  },
  toAmino(_: MsgConflictVoteCommitResponse): MsgConflictVoteCommitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConflictVoteCommitResponseAminoMsg): MsgConflictVoteCommitResponse {
    return MsgConflictVoteCommitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConflictVoteCommitResponseProtoMsg): MsgConflictVoteCommitResponse {
    return MsgConflictVoteCommitResponse.decode(message.value);
  },
  toProto(message: MsgConflictVoteCommitResponse): Uint8Array {
    return MsgConflictVoteCommitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConflictVoteCommitResponse): MsgConflictVoteCommitResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommitResponse",
      value: MsgConflictVoteCommitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConflictVoteReveal(): MsgConflictVoteReveal {
  return {
    creator: "",
    voteID: "",
    nonce: BigInt(0),
    hash: new Uint8Array()
  };
}
export const MsgConflictVoteReveal = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
  encode(message: MsgConflictVoteReveal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConflictVoteReveal {
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
  fromPartial(object: Partial<MsgConflictVoteReveal>): MsgConflictVoteReveal {
    const message = createBaseMsgConflictVoteReveal();
    message.creator = object.creator ?? "";
    message.voteID = object.voteID ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgConflictVoteRevealAmino): MsgConflictVoteReveal {
    return {
      creator: object.creator,
      voteID: object.voteID,
      nonce: BigInt(object.nonce),
      hash: object.hash
    };
  },
  toAmino(message: MsgConflictVoteReveal): MsgConflictVoteRevealAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.voteID = message.voteID;
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: MsgConflictVoteRevealAminoMsg): MsgConflictVoteReveal {
    return MsgConflictVoteReveal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConflictVoteRevealProtoMsg): MsgConflictVoteReveal {
    return MsgConflictVoteReveal.decode(message.value);
  },
  toProto(message: MsgConflictVoteReveal): Uint8Array {
    return MsgConflictVoteReveal.encode(message).finish();
  },
  toProtoMsg(message: MsgConflictVoteReveal): MsgConflictVoteRevealProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
      value: MsgConflictVoteReveal.encode(message).finish()
    };
  }
};
function createBaseMsgConflictVoteRevealResponse(): MsgConflictVoteRevealResponse {
  return {};
}
export const MsgConflictVoteRevealResponse = {
  typeUrl: "/lavanet.lava.conflict.MsgConflictVoteRevealResponse",
  encode(_: MsgConflictVoteRevealResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConflictVoteRevealResponse {
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
  fromPartial(_: Partial<MsgConflictVoteRevealResponse>): MsgConflictVoteRevealResponse {
    const message = createBaseMsgConflictVoteRevealResponse();
    return message;
  },
  fromAmino(_: MsgConflictVoteRevealResponseAmino): MsgConflictVoteRevealResponse {
    return {};
  },
  toAmino(_: MsgConflictVoteRevealResponse): MsgConflictVoteRevealResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConflictVoteRevealResponseAminoMsg): MsgConflictVoteRevealResponse {
    return MsgConflictVoteRevealResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConflictVoteRevealResponseProtoMsg): MsgConflictVoteRevealResponse {
    return MsgConflictVoteRevealResponse.decode(message.value);
  },
  toProto(message: MsgConflictVoteRevealResponse): Uint8Array {
    return MsgConflictVoteRevealResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConflictVoteRevealResponse): MsgConflictVoteRevealResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.MsgConflictVoteRevealResponse",
      value: MsgConflictVoteRevealResponse.encode(message).finish()
    };
  }
};