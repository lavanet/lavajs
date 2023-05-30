import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Wrapper message for `double`.
 * 
 * The JSON representation for `DoubleValue` is JSON number.
 */

/**
 * Wrapper message for `double`.
 * 
 * The JSON representation for `DoubleValue` is JSON number.
 */

/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */

/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */

/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */

/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */

/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */

/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */

/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */

/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */

/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */

/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */

/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */

/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */

/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */

/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */

/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */

/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */

function createBaseDoubleValue() {
  return {
    value: 0
  };
}
export const DoubleValue = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
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
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object) {
    var _object$value;
    const message = createBaseDoubleValue();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : 0;
    return message;
  }
};
function createBaseFloatValue() {
  return {
    value: 0
  };
}
export const FloatValue = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.float();
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
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object) {
    var _object$value2;
    const message = createBaseFloatValue();
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : 0;
    return message;
  }
};
function createBaseInt64Value() {
  return {
    value: Long.ZERO
  };
}
export const Int64Value = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.value.isZero()) {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int64();
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
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseInt64Value();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  }
};
function createBaseUInt64Value() {
  return {
    value: Long.UZERO
  };
}
export const UInt64Value = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.value.isZero()) {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.uint64();
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
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseUInt64Value();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  }
};
function createBaseInt32Value() {
  return {
    value: 0
  };
}
export const Int32Value = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt32Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
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
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
  fromPartial(object) {
    var _object$value3;
    const message = createBaseInt32Value();
    message.value = (_object$value3 = object.value) !== null && _object$value3 !== void 0 ? _object$value3 : 0;
    return message;
  }
};
function createBaseUInt32Value() {
  return {
    value: 0
  };
}
export const UInt32Value = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.value !== 0) {
      writer.uint32(8).uint32(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt32Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.uint32();
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
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
  fromPartial(object) {
    var _object$value4;
    const message = createBaseUInt32Value();
    message.value = (_object$value4 = object.value) !== null && _object$value4 !== void 0 ? _object$value4 : 0;
    return message;
  }
};
function createBaseBoolValue() {
  return {
    value: false
  };
}
export const BoolValue = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
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
      value: isSet(object.value) ? Boolean(object.value) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object) {
    var _object$value5;
    const message = createBaseBoolValue();
    message.value = (_object$value5 = object.value) !== null && _object$value5 !== void 0 ? _object$value5 : false;
    return message;
  }
};
function createBaseStringValue() {
  return {
    value: ""
  };
}
export const StringValue = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
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
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object) {
    var _object$value6;
    const message = createBaseStringValue();
    message.value = (_object$value6 = object.value) !== null && _object$value6 !== void 0 ? _object$value6 : "";
    return message;
  }
};
function createBaseBytesValue() {
  return {
    value: new Uint8Array()
  };
}
export const BytesValue = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bytes();
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
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$value7;
    const message = createBaseBytesValue();
    message.value = (_object$value7 = object.value) !== null && _object$value7 !== void 0 ? _object$value7 : new Uint8Array();
    return message;
  }
};