import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseUniquePaymentStorageClientProvider() {
  return {
    index: "",
    block: BigInt(0),
    usedCU: BigInt(0)
  };
}
export const UniquePaymentStorageClientProvider = {
  typeUrl: "/lavanet.lava.pairing.UniquePaymentStorageClientProvider",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(16).uint64(message.block);
    }
    if (message.usedCU !== BigInt(0)) {
      writer.uint32(24).uint64(message.usedCU);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniquePaymentStorageClientProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.block = reader.uint64();
          break;
        case 3:
          message.usedCU = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index;
    const message = createBaseUniquePaymentStorageClientProvider();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.usedCU = object.usedCU !== undefined && object.usedCU !== null ? BigInt(object.usedCU.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index,
      block: BigInt(object.block),
      usedCU: BigInt(object.usedCU)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    obj.block = message.block ? message.block.toString() : undefined;
    obj.usedCU = message.usedCU ? message.usedCU.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return UniquePaymentStorageClientProvider.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UniquePaymentStorageClientProvider.decode(message.value);
  },
  toProto(message) {
    return UniquePaymentStorageClientProvider.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.UniquePaymentStorageClientProvider",
      value: UniquePaymentStorageClientProvider.encode(message).finish()
    };
  }
};