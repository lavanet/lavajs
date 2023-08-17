import { Params, ParamsSDKType } from "./params";
import { RawMessage, RawMessageSDKType } from "../common/fixationEntry";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the plan module's genesis state. */
export interface GenesisState {
  params: Params;
  plansFS: RawMessage[];
}
/** GenesisState defines the plan module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  plansFS: RawMessageSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    plansFS: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.plans.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.plansFS) {
      RawMessage.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.plansFS.push(RawMessage.decode(reader, reader.uint32()));
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
    message.plansFS = object.plansFS?.map(e => RawMessage.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      plansFS: Array.isArray(object?.plansFS) ? object.plansFS.map((e: any) => RawMessage.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.plansFS) {
      obj.plansFS = message.plansFS.map(e => e ? RawMessage.toAmino(e) : undefined);
    } else {
      obj.plansFS = [];
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
      typeUrl: "/lavanet.lava.plans.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};