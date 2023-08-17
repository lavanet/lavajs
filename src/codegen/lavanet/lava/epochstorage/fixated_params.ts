import { BinaryReader, BinaryWriter } from "../../../binary";
export interface FixatedParams {
  index: string;
  parameter: Uint8Array;
  fixationBlock: bigint;
}
export interface FixatedParamsSDKType {
  index: string;
  parameter: Uint8Array;
  fixationBlock: bigint;
}
function createBaseFixatedParams(): FixatedParams {
  return {
    index: "",
    parameter: new Uint8Array(),
    fixationBlock: BigInt(0)
  };
}
export const FixatedParams = {
  typeUrl: "/lavanet.lava.epochstorage.FixatedParams",
  encode(message: FixatedParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.parameter.length !== 0) {
      writer.uint32(18).bytes(message.parameter);
    }
    if (message.fixationBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.fixationBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FixatedParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixatedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.parameter = reader.bytes();
          break;
        case 3:
          message.fixationBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FixatedParams>): FixatedParams {
    const message = createBaseFixatedParams();
    message.index = object.index ?? "";
    message.parameter = object.parameter ?? new Uint8Array();
    message.fixationBlock = object.fixationBlock !== undefined && object.fixationBlock !== null ? BigInt(object.fixationBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FixatedParamsAmino): FixatedParams {
    return {
      index: object.index,
      parameter: object.parameter,
      fixationBlock: BigInt(object.fixationBlock)
    };
  },
  toAmino(message: FixatedParams): FixatedParamsAmino {
    const obj: any = {};
    obj.index = message.index;
    obj.parameter = message.parameter;
    obj.fixationBlock = message.fixationBlock ? message.fixationBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FixatedParamsAminoMsg): FixatedParams {
    return FixatedParams.fromAmino(object.value);
  },
  fromProtoMsg(message: FixatedParamsProtoMsg): FixatedParams {
    return FixatedParams.decode(message.value);
  },
  toProto(message: FixatedParams): Uint8Array {
    return FixatedParams.encode(message).finish();
  },
  toProtoMsg(message: FixatedParams): FixatedParamsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.FixatedParams",
      value: FixatedParams.encode(message).finish()
    };
  }
};