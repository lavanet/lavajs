import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    geolocationCount: BigInt(0),
    maxCU: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.spec.Params",
  encode(message, writer = BinaryWriter.create()) {
    if (message.geolocationCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.geolocationCount);
    }
    if (message.maxCU !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxCU);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseParams();
    message.geolocationCount = object.geolocationCount !== undefined && object.geolocationCount !== null ? BigInt(object.geolocationCount.toString()) : BigInt(0);
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? BigInt(object.maxCU.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      geolocationCount: BigInt(object.geolocationCount),
      maxCU: BigInt(object.maxCU)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.geolocationCount = message.geolocationCount ? message.geolocationCount.toString() : undefined;
    obj.maxCU = message.maxCU ? message.maxCU.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.Params",
      value: Params.encode(message).finish()
    };
  }
};