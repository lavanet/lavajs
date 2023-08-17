import { Params, ParamsSDKType } from "./params";
import { RawMessage, RawMessageSDKType } from "../common/fixationEntry";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the subscription module's genesis state. */
export interface GenesisState {
  params: Params;
  subsFS: RawMessage[];
  subsTS: RawMessage[];
}
/** GenesisState defines the subscription module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  subsFS: RawMessageSDKType[];
  subsTS: RawMessageSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    subsFS: [],
    subsTS: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.subscription.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.subsFS) {
      RawMessage.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.subsTS) {
      RawMessage.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.subsFS.push(RawMessage.decode(reader, reader.uint32()));
          break;
        case 3:
          message.subsTS.push(RawMessage.decode(reader, reader.uint32()));
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
    message.subsFS = object.subsFS?.map(e => RawMessage.fromPartial(e)) || [];
    message.subsTS = object.subsTS?.map(e => RawMessage.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      subsFS: Array.isArray(object?.subsFS) ? object.subsFS.map((e: any) => RawMessage.fromAmino(e)) : [],
      subsTS: Array.isArray(object?.subsTS) ? object.subsTS.map((e: any) => RawMessage.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.subsFS) {
      obj.subsFS = message.subsFS.map(e => e ? RawMessage.toAmino(e) : undefined);
    } else {
      obj.subsFS = [];
    }
    if (message.subsTS) {
      obj.subsTS = message.subsTS.map(e => e ? RawMessage.toAmino(e) : undefined);
    } else {
      obj.subsTS = [];
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
      typeUrl: "/lavanet.lava.subscription.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};