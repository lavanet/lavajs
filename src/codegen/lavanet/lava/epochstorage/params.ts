import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  unstakeHoldBlocks: bigint;
  epochBlocks: bigint;
  epochsToSave: bigint;
  latestParamChange: bigint;
  unstakeHoldBlocksStatic: bigint;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  unstakeHoldBlocks: bigint;
  epochBlocks: bigint;
  epochsToSave: bigint;
  latestParamChange: bigint;
  unstakeHoldBlocksStatic: bigint;
}
function createBaseParams(): Params {
  return {
    unstakeHoldBlocks: BigInt(0),
    epochBlocks: BigInt(0),
    epochsToSave: BigInt(0),
    latestParamChange: BigInt(0),
    unstakeHoldBlocksStatic: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.epochstorage.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unstakeHoldBlocks !== BigInt(0)) {
      writer.uint32(8).uint64(message.unstakeHoldBlocks);
    }
    if (message.epochBlocks !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochBlocks);
    }
    if (message.epochsToSave !== BigInt(0)) {
      writer.uint32(24).uint64(message.epochsToSave);
    }
    if (message.latestParamChange !== BigInt(0)) {
      writer.uint32(32).uint64(message.latestParamChange);
    }
    if (message.unstakeHoldBlocksStatic !== BigInt(0)) {
      writer.uint32(40).uint64(message.unstakeHoldBlocksStatic);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unstakeHoldBlocks = reader.uint64();
          break;
        case 2:
          message.epochBlocks = reader.uint64();
          break;
        case 3:
          message.epochsToSave = reader.uint64();
          break;
        case 4:
          message.latestParamChange = reader.uint64();
          break;
        case 5:
          message.unstakeHoldBlocksStatic = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.unstakeHoldBlocks = object.unstakeHoldBlocks !== undefined && object.unstakeHoldBlocks !== null ? BigInt(object.unstakeHoldBlocks.toString()) : BigInt(0);
    message.epochBlocks = object.epochBlocks !== undefined && object.epochBlocks !== null ? BigInt(object.epochBlocks.toString()) : BigInt(0);
    message.epochsToSave = object.epochsToSave !== undefined && object.epochsToSave !== null ? BigInt(object.epochsToSave.toString()) : BigInt(0);
    message.latestParamChange = object.latestParamChange !== undefined && object.latestParamChange !== null ? BigInt(object.latestParamChange.toString()) : BigInt(0);
    message.unstakeHoldBlocksStatic = object.unstakeHoldBlocksStatic !== undefined && object.unstakeHoldBlocksStatic !== null ? BigInt(object.unstakeHoldBlocksStatic.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      unstakeHoldBlocks: BigInt(object.unstakeHoldBlocks),
      epochBlocks: BigInt(object.epochBlocks),
      epochsToSave: BigInt(object.epochsToSave),
      latestParamChange: BigInt(object.latestParamChange),
      unstakeHoldBlocksStatic: BigInt(object.unstakeHoldBlocksStatic)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.unstakeHoldBlocks = message.unstakeHoldBlocks ? message.unstakeHoldBlocks.toString() : undefined;
    obj.epochBlocks = message.epochBlocks ? message.epochBlocks.toString() : undefined;
    obj.epochsToSave = message.epochsToSave ? message.epochsToSave.toString() : undefined;
    obj.latestParamChange = message.latestParamChange ? message.latestParamChange.toString() : undefined;
    obj.unstakeHoldBlocksStatic = message.unstakeHoldBlocksStatic ? message.unstakeHoldBlocksStatic.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.Params",
      value: Params.encode(message).finish()
    };
  }
};