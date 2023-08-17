import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  geolocationCount: bigint;
  maxCU: bigint;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  geolocationCount: bigint;
  maxCU: bigint;
}
function createBaseParams(): Params {
  return {
    geolocationCount: BigInt(0),
    maxCU: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.spec.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.geolocationCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.geolocationCount);
    }
    if (message.maxCU !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxCU);
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
          message.geolocationCount = reader.uint64();
          break;
        case 2:
          message.maxCU = reader.uint64();
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
    message.geolocationCount = object.geolocationCount !== undefined && object.geolocationCount !== null ? BigInt(object.geolocationCount.toString()) : BigInt(0);
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? BigInt(object.maxCU.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      geolocationCount: BigInt(object.geolocationCount),
      maxCU: BigInt(object.maxCU)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.geolocationCount = message.geolocationCount ? message.geolocationCount.toString() : undefined;
    obj.maxCU = message.maxCU ? message.maxCU.toString() : undefined;
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
      typeUrl: "/lavanet.lava.spec.Params",
      value: Params.encode(message).finish()
    };
  }
};