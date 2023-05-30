import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** BIP44Params is used as path field in ledger item in Record. */

/** BIP44Params is used as path field in ledger item in Record. */

function createBaseBIP44Params() {
  return {
    purpose: 0,
    coinType: 0,
    account: 0,
    change: false,
    addressIndex: 0
  };
}
export const BIP44Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.purpose !== 0) {
      writer.uint32(8).uint32(message.purpose);
    }
    if (message.coinType !== 0) {
      writer.uint32(16).uint32(message.coinType);
    }
    if (message.account !== 0) {
      writer.uint32(24).uint32(message.account);
    }
    if (message.change === true) {
      writer.uint32(32).bool(message.change);
    }
    if (message.addressIndex !== 0) {
      writer.uint32(40).uint32(message.addressIndex);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBIP44Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purpose = reader.uint32();
          break;
        case 2:
          message.coinType = reader.uint32();
          break;
        case 3:
          message.account = reader.uint32();
          break;
        case 4:
          message.change = reader.bool();
          break;
        case 5:
          message.addressIndex = reader.uint32();
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
      purpose: isSet(object.purpose) ? Number(object.purpose) : 0,
      coinType: isSet(object.coinType) ? Number(object.coinType) : 0,
      account: isSet(object.account) ? Number(object.account) : 0,
      change: isSet(object.change) ? Boolean(object.change) : false,
      addressIndex: isSet(object.addressIndex) ? Number(object.addressIndex) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.purpose !== undefined && (obj.purpose = Math.round(message.purpose));
    message.coinType !== undefined && (obj.coinType = Math.round(message.coinType));
    message.account !== undefined && (obj.account = Math.round(message.account));
    message.change !== undefined && (obj.change = message.change);
    message.addressIndex !== undefined && (obj.addressIndex = Math.round(message.addressIndex));
    return obj;
  },
  fromPartial(object) {
    var _object$purpose, _object$coinType, _object$account, _object$change, _object$addressIndex;
    const message = createBaseBIP44Params();
    message.purpose = (_object$purpose = object.purpose) !== null && _object$purpose !== void 0 ? _object$purpose : 0;
    message.coinType = (_object$coinType = object.coinType) !== null && _object$coinType !== void 0 ? _object$coinType : 0;
    message.account = (_object$account = object.account) !== null && _object$account !== void 0 ? _object$account : 0;
    message.change = (_object$change = object.change) !== null && _object$change !== void 0 ? _object$change : false;
    message.addressIndex = (_object$addressIndex = object.addressIndex) !== null && _object$addressIndex !== void 0 ? _object$addressIndex : 0;
    return message;
  }
};