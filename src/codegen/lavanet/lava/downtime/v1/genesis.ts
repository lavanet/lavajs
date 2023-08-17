import { Params, ParamsSDKType, Downtime, DowntimeSDKType, DowntimeGarbageCollection, DowntimeGarbageCollectionSDKType } from "./downtime";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
/** GenesisState is the genesis state of the downtime module. */
export interface GenesisState {
  params: Params;
  downtimes: Downtime[];
  downtimesGarbageCollection: DowntimeGarbageCollection[];
  /**
   * last_block_time keeps track of when the last block time was set.
   * it's nullable because we might want it to be non existent.
   * we want it to exist when we have a genesis export-import migration scenario.
   */
  lastBlockTime?: Date;
}
/** GenesisState is the genesis state of the downtime module. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  downtimes: DowntimeSDKType[];
  downtimes_garbage_collection: DowntimeGarbageCollectionSDKType[];
  last_block_time?: Date;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    downtimes: [],
    downtimesGarbageCollection: [],
    lastBlockTime: undefined
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.downtime.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.downtimes) {
      Downtime.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.downtimesGarbageCollection) {
      DowntimeGarbageCollection.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(34).fork()).ldelim();
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
          message.downtimes.push(Downtime.decode(reader, reader.uint32()));
          break;
        case 3:
          message.downtimesGarbageCollection.push(DowntimeGarbageCollection.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    message.downtimes = object.downtimes?.map(e => Downtime.fromPartial(e)) || [];
    message.downtimesGarbageCollection = object.downtimesGarbageCollection?.map(e => DowntimeGarbageCollection.fromPartial(e)) || [];
    message.lastBlockTime = object.lastBlockTime ?? undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e: any) => Downtime.fromAmino(e)) : [],
      downtimesGarbageCollection: Array.isArray(object?.downtimes_garbage_collection) ? object.downtimes_garbage_collection.map((e: any) => DowntimeGarbageCollection.fromAmino(e)) : [],
      lastBlockTime: object?.last_block_time
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? Downtime.toAmino(e) : undefined);
    } else {
      obj.downtimes = [];
    }
    if (message.downtimesGarbageCollection) {
      obj.downtimes_garbage_collection = message.downtimesGarbageCollection.map(e => e ? DowntimeGarbageCollection.toAmino(e) : undefined);
    } else {
      obj.downtimes_garbage_collection = [];
    }
    obj.last_block_time = message.lastBlockTime;
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
      typeUrl: "/lavanet.lava.downtime.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};