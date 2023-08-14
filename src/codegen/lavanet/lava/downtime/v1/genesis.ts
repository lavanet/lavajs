import { Params, ParamsSDKType, Downtime, DowntimeSDKType, DowntimeGarbageCollection, DowntimeGarbageCollectionSDKType } from "./downtime";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../../helpers";
/** GenesisState is the genesis state of the downtime module. */
export interface GenesisState {
  params?: Params;
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
  params?: ParamsSDKType;
  downtimes: DowntimeSDKType[];
  downtimes_garbage_collection: DowntimeGarbageCollectionSDKType[];
  last_block_time?: Date;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    downtimes: [],
    downtimesGarbageCollection: [],
    lastBlockTime: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.downtimes = object.downtimes?.map(e => Downtime.fromPartial(e)) || [];
    message.downtimesGarbageCollection = object.downtimesGarbageCollection?.map(e => DowntimeGarbageCollection.fromPartial(e)) || [];
    message.lastBlockTime = object.lastBlockTime ?? undefined;
    return message;
  }
};