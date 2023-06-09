import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * Coin defines a token with a denomination and an amount.
 * 
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */

/**
 * Coin defines a token with a denomination and an amount.
 * 
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */

/**
 * DecCoin defines a token with a denomination and a decimal amount.
 * 
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */

/**
 * DecCoin defines a token with a denomination and a decimal amount.
 * 
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */

/** IntProto defines a Protobuf wrapper around an Int object. */

/** IntProto defines a Protobuf wrapper around an Int object. */

/** DecProto defines a Protobuf wrapper around a Dec object. */

/** DecProto defines a Protobuf wrapper around a Dec object. */

function createBaseCoin() {
  return {
    denom: "",
    amount: ""
  };
}
export const Coin = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
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
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object) {
    var _object$denom, _object$amount;
    const message = createBaseCoin();
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    message.amount = (_object$amount = object.amount) !== null && _object$amount !== void 0 ? _object$amount : "";
    return message;
  }
};
function createBaseDecCoin() {
  return {
    denom: "",
    amount: ""
  };
}
export const DecCoin = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
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
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object) {
    var _object$denom2, _object$amount2;
    const message = createBaseDecCoin();
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    message.amount = (_object$amount2 = object.amount) !== null && _object$amount2 !== void 0 ? _object$amount2 : "";
    return message;
  }
};
function createBaseIntProto() {
  return {
    int: ""
  };
}
export const IntProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.int !== "") {
      writer.uint32(10).string(message.int);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.int = reader.string();
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
      int: isSet(object.int) ? String(object.int) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.int !== undefined && (obj.int = message.int);
    return obj;
  },
  fromPartial(object) {
    var _object$int;
    const message = createBaseIntProto();
    message.int = (_object$int = object.int) !== null && _object$int !== void 0 ? _object$int : "";
    return message;
  }
};
function createBaseDecProto() {
  return {
    dec: ""
  };
}
export const DecProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.dec !== "") {
      writer.uint32(10).string(message.dec);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dec = reader.string();
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
      dec: isSet(object.dec) ? String(object.dec) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.dec !== undefined && (obj.dec = message.dec);
    return obj;
  },
  fromPartial(object) {
    var _object$dec;
    const message = createBaseDecProto();
    message.dec = (_object$dec = object.dec) !== null && _object$dec !== void 0 ? _object$dec : "";
    return message;
  }
};