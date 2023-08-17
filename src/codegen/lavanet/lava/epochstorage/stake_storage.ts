import { StakeEntry, StakeEntrySDKType } from "./stake_entry";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface StakeStorage {
  index: string;
  stakeEntries: StakeEntry[];
  epochBlockHash: Uint8Array;
}
export interface StakeStorageSDKType {
  index: string;
  stakeEntries: StakeEntrySDKType[];
  epochBlockHash: Uint8Array;
}
function createBaseStakeStorage(): StakeStorage {
  return {
    index: "",
    stakeEntries: [],
    epochBlockHash: new Uint8Array()
  };
}
export const StakeStorage = {
  typeUrl: "/lavanet.lava.epochstorage.StakeStorage",
  encode(message: StakeStorage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.stakeEntries) {
      StakeEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochBlockHash.length !== 0) {
      writer.uint32(26).bytes(message.epochBlockHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakeStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.stakeEntries.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.epochBlockHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakeStorage>): StakeStorage {
    const message = createBaseStakeStorage();
    message.index = object.index ?? "";
    message.stakeEntries = object.stakeEntries?.map(e => StakeEntry.fromPartial(e)) || [];
    message.epochBlockHash = object.epochBlockHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StakeStorageAmino): StakeStorage {
    return {
      index: object.index,
      stakeEntries: Array.isArray(object?.stakeEntries) ? object.stakeEntries.map((e: any) => StakeEntry.fromAmino(e)) : [],
      epochBlockHash: object.epochBlockHash
    };
  },
  toAmino(message: StakeStorage): StakeStorageAmino {
    const obj: any = {};
    obj.index = message.index;
    if (message.stakeEntries) {
      obj.stakeEntries = message.stakeEntries.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.stakeEntries = [];
    }
    obj.epochBlockHash = message.epochBlockHash;
    return obj;
  },
  fromAminoMsg(object: StakeStorageAminoMsg): StakeStorage {
    return StakeStorage.fromAmino(object.value);
  },
  fromProtoMsg(message: StakeStorageProtoMsg): StakeStorage {
    return StakeStorage.decode(message.value);
  },
  toProto(message: StakeStorage): Uint8Array {
    return StakeStorage.encode(message).finish();
  },
  toProtoMsg(message: StakeStorage): StakeStorageProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.StakeStorage",
      value: StakeStorage.encode(message).finish()
    };
  }
};