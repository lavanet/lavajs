import { Params, ParamsSDKType } from "./params";
import { ConflictVote, ConflictVoteSDKType } from "./conflict_vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the conflict module's genesis state. */
export interface GenesisState {
  params: Params;
  conflictVoteList: ConflictVote[];
}
/** GenesisState defines the conflict module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  conflictVoteList: ConflictVoteSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    conflictVoteList: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.conflict.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.conflictVoteList) {
      ConflictVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.conflictVoteList.push(ConflictVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.conflictVoteList = object.conflictVoteList?.map(e => ConflictVote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      conflictVoteList: Array.isArray(object?.conflictVoteList) ? object.conflictVoteList.map((e: any) => ConflictVote.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.conflictVoteList) {
      obj.conflictVoteList = message.conflictVoteList.map(e => e ? ConflictVote.toAmino(e) : undefined);
    } else {
      obj.conflictVoteList = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};