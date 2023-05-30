import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseProviderPaymentStorage() {
  return {
    index: "",
    epoch: Long.UZERO,
    uniquePaymentStorageClientProviderKeys: [],
    complainersTotalCu: Long.UZERO
  };
}
export const ProviderPaymentStorage = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(24).uint64(message.epoch);
    }
    for (const v of message.uniquePaymentStorageClientProviderKeys) {
      writer.uint32(42).string(v);
    }
    if (!message.complainersTotalCu.isZero()) {
      writer.uint32(48).uint64(message.complainersTotalCu);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      uniquePaymentStorageClientProviderKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.uniquePaymentStorageClientProviderKeys) ? object.uniquePaymentStorageClientProviderKeys.map(e => String(e)) : [],
      complainersTotalCu: isSet(object.complainersTotalCu) ? Long.fromValue(object.complainersTotalCu) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    if (message.uniquePaymentStorageClientProviderKeys) {
      obj.uniquePaymentStorageClientProviderKeys = message.uniquePaymentStorageClientProviderKeys.map(e => e);
    } else {
      obj.uniquePaymentStorageClientProviderKeys = [];
    }
    message.complainersTotalCu !== undefined && (obj.complainersTotalCu = (message.complainersTotalCu || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$index, _object$uniquePayment;
    const message = createBaseProviderPaymentStorage();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.uniquePaymentStorageClientProviderKeys = ((_object$uniquePayment = object.uniquePaymentStorageClientProviderKeys) === null || _object$uniquePayment === void 0 ? void 0 : _object$uniquePayment.map(e => e)) || [];
    message.complainersTotalCu = object.complainersTotalCu !== undefined && object.complainersTotalCu !== null ? Long.fromValue(object.complainersTotalCu) : Long.UZERO;
    return message;
  }
};