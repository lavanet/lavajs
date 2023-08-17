import { Params, ParamsSDKType } from "./params";
import { Spec, SpecSDKType } from "./spec";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the spec module's genesis state. */
export interface GenesisState {
  params: Params;
  specList: Spec[];
  specCount: bigint;
}
/** GenesisState defines the spec module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  specList: SpecSDKType[];
  specCount: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    specList: [],
    specCount: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.spec.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.specList) {
      Spec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.specCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.specCount);
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
          message.specList.push(Spec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.specCount = reader.uint64();
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
    message.specList = object.specList?.map(e => Spec.fromPartial(e)) || [];
    message.specCount = object.specCount !== undefined && object.specCount !== null ? BigInt(object.specCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      specList: Array.isArray(object?.specList) ? object.specList.map((e: any) => Spec.fromAmino(e)) : [],
      specCount: BigInt(object.specCount)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.specList) {
      obj.specList = message.specList.map(e => e ? Spec.toAmino(e) : undefined);
    } else {
      obj.specList = [];
    }
    obj.specCount = message.specCount ? message.specCount.toString() : undefined;
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
      typeUrl: "/lavanet.lava.spec.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};