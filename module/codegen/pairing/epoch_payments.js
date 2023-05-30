import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
function createBaseEpochPayments() {
  return {
    index: "",
    providerPaymentStorageKeys: []
  };
}
export const EpochPayments = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.providerPaymentStorageKeys) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      providerPaymentStorageKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.providerPaymentStorageKeys) ? object.providerPaymentStorageKeys.map(e => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== undefined && (obj.index = message.index);
    if (message.providerPaymentStorageKeys) {
      obj.providerPaymentStorageKeys = message.providerPaymentStorageKeys.map(e => e);
    } else {
      obj.providerPaymentStorageKeys = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$index, _object$providerPayme;
    const message = createBaseEpochPayments();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.providerPaymentStorageKeys = ((_object$providerPayme = object.providerPaymentStorageKeys) === null || _object$providerPayme === void 0 ? void 0 : _object$providerPayme.map(e => e)) || [];
    return message;
  }
};