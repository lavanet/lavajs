import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseProviderPaymentStorage() {
  return {
    index: "",
    epoch: BigInt(0),
    uniquePaymentStorageClientProviderKeys: [],
    complainersTotalCu: BigInt(0)
  };
}
export const ProviderPaymentStorage = {
  typeUrl: "/lavanet.lava.pairing.ProviderPaymentStorage",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(24).uint64(message.epoch);
    }
    for (const v of message.uniquePaymentStorageClientProviderKeys) {
      writer.uint32(42).string(v);
    }
    if (message.complainersTotalCu !== BigInt(0)) {
      writer.uint32(48).uint64(message.complainersTotalCu);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderPaymentStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.epoch = reader.uint64();
          break;
        case 5:
          message.uniquePaymentStorageClientProviderKeys.push(reader.string());
          break;
        case 6:
          message.complainersTotalCu = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index, _object$uniquePayment;
    const message = createBaseProviderPaymentStorage();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.uniquePaymentStorageClientProviderKeys = ((_object$uniquePayment = object.uniquePaymentStorageClientProviderKeys) === null || _object$uniquePayment === void 0 ? void 0 : _object$uniquePayment.map(e => e)) || [];
    message.complainersTotalCu = object.complainersTotalCu !== undefined && object.complainersTotalCu !== null ? BigInt(object.complainersTotalCu.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index,
      epoch: BigInt(object.epoch),
      uniquePaymentStorageClientProviderKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.uniquePaymentStorageClientProviderKeys) ? object.uniquePaymentStorageClientProviderKeys.map(e => e) : [],
      complainersTotalCu: BigInt(object.complainersTotalCu)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    if (message.uniquePaymentStorageClientProviderKeys) {
      obj.uniquePaymentStorageClientProviderKeys = message.uniquePaymentStorageClientProviderKeys.map(e => e);
    } else {
      obj.uniquePaymentStorageClientProviderKeys = [];
    }
    obj.complainersTotalCu = message.complainersTotalCu ? message.complainersTotalCu.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return ProviderPaymentStorage.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ProviderPaymentStorage.decode(message.value);
  },
  toProto(message) {
    return ProviderPaymentStorage.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.ProviderPaymentStorage",
      value: ProviderPaymentStorage.encode(message).finish()
    };
  }
};