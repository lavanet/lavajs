import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseEpochPayments() {
  return {
    index: "",
    providerPaymentStorageKeys: []
  };
}
export const EpochPayments = {
  typeUrl: "/lavanet.lava.pairing.EpochPayments",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.providerPaymentStorageKeys) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochPayments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.providerPaymentStorageKeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index, _object$providerPayme;
    const message = createBaseEpochPayments();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.providerPaymentStorageKeys = ((_object$providerPayme = object.providerPaymentStorageKeys) === null || _object$providerPayme === void 0 ? void 0 : _object$providerPayme.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index,
      providerPaymentStorageKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.providerPaymentStorageKeys) ? object.providerPaymentStorageKeys.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    if (message.providerPaymentStorageKeys) {
      obj.providerPaymentStorageKeys = message.providerPaymentStorageKeys.map(e => e);
    } else {
      obj.providerPaymentStorageKeys = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return EpochPayments.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EpochPayments.decode(message.value);
  },
  toProto(message) {
    return EpochPayments.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.EpochPayments",
      value: EpochPayments.encode(message).finish()
    };
  }
};