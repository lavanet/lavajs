import { BinaryReader, BinaryWriter } from "../../binary";
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
  typeUrl: "/google.protobuf.DoubleValue",
  encode(message, writer = BinaryWriter.create()) {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$value;
    const message = createBaseDoubleValue();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : 0;
    return message;
  },
  fromAmino(object) {
    return {
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return DoubleValue.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DoubleValue.decode(message.value);
  },
  toProto(message) {
    return DoubleValue.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.DoubleValue",
      value: DoubleValue.encode(message).finish()
    };
  }
};
function createBaseFloatValue() {
  return {
    value: 0
  };
}
export const FloatValue = {
  typeUrl: "/google.protobuf.FloatValue",
  encode(message, writer = BinaryWriter.create()) {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$value2;
    const message = createBaseFloatValue();
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : 0;
    return message;
  },
  fromAmino(object) {
    return {
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return FloatValue.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FloatValue.decode(message.value);
  },
  toProto(message) {
    return FloatValue.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FloatValue",
      value: FloatValue.encode(message).finish()
    };
  }
};
function createBaseInt64Value() {
  return {
    value: BigInt(0)
  };
}
export const Int64Value = {
  typeUrl: "/google.protobuf.Int64Value",
  encode(message, writer = BinaryWriter.create()) {
    if (message.value !== BigInt(0)) {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    const message = createBaseInt64Value();
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      value: BigInt(object.value)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Int64Value.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Int64Value.decode(message.value);
  },
  toProto(message) {
    return Int64Value.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Int64Value",
      value: Int64Value.encode(message).finish()
    };
  }
};
function createBaseUInt64Value() {
  return {
    value: BigInt(0)
  };
}
export const UInt64Value = {
  typeUrl: "/google.protobuf.UInt64Value",
  encode(message, writer = BinaryWriter.create()) {
    if (message.value !== BigInt(0)) {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    const message = createBaseUInt64Value();
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      value: BigInt(object.value)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return UInt64Value.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UInt64Value.decode(message.value);
  },
  toProto(message) {
    return UInt64Value.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.UInt64Value",
      value: UInt64Value.encode(message).finish()
    };
  }
};
function createBaseInt32Value() {
  return {
    value: 0
  };
}
export const Int32Value = {
  typeUrl: "/google.protobuf.Int32Value",
  encode(message, writer = BinaryWriter.create()) {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$value3;
    const message = createBaseInt32Value();
    message.value = (_object$value3 = object.value) !== null && _object$value3 !== void 0 ? _object$value3 : 0;
    return message;
  },
  fromAmino(object) {
    return {
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return Int32Value.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Int32Value.decode(message.value);
  },
  toProto(message) {
    return Int32Value.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Int32Value",
      value: Int32Value.encode(message).finish()
    };
  }
};
function createBaseUInt32Value() {
  return {
    value: 0
  };
}
export const UInt32Value = {
  typeUrl: "/google.protobuf.UInt32Value",
  encode(message, writer = BinaryWriter.create()) {
    if (message.value !== 0) {
      writer.uint32(8).uint32(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$value4;
    const message = createBaseUInt32Value();
    message.value = (_object$value4 = object.value) !== null && _object$value4 !== void 0 ? _object$value4 : 0;
    return message;
  },
  fromAmino(object) {
    return {
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return UInt32Value.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UInt32Value.decode(message.value);
  },
  toProto(message) {
    return UInt32Value.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.UInt32Value",
      value: UInt32Value.encode(message).finish()
    };
  }
};
function createBaseBoolValue() {
  return {
    value: false
  };
}
export const BoolValue = {
  typeUrl: "/google.protobuf.BoolValue",
  encode(message, writer = BinaryWriter.create()) {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$value5;
    const message = createBaseBoolValue();
    message.value = (_object$value5 = object.value) !== null && _object$value5 !== void 0 ? _object$value5 : false;
    return message;
  },
  fromAmino(object) {
    return {
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return BoolValue.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return BoolValue.decode(message.value);
  },
  toProto(message) {
    return BoolValue.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.BoolValue",
      value: BoolValue.encode(message).finish()
    };
  }
};
function createBaseStringValue() {
  return {
    value: ""
  };
}
export const StringValue = {
  typeUrl: "/google.protobuf.StringValue",
  encode(message, writer = BinaryWriter.create()) {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$value6;
    const message = createBaseStringValue();
    message.value = (_object$value6 = object.value) !== null && _object$value6 !== void 0 ? _object$value6 : "";
    return message;
  },
  fromAmino(object) {
    return {
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return StringValue.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return StringValue.decode(message.value);
  },
  toProto(message) {
    return StringValue.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.StringValue",
      value: StringValue.encode(message).finish()
    };
  }
};
function createBaseBytesValue() {
  return {
    value: new Uint8Array()
  };
}
export const BytesValue = {
  typeUrl: "/google.protobuf.BytesValue",
  encode(message, writer = BinaryWriter.create()) {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$value7;
    const message = createBaseBytesValue();
    message.value = (_object$value7 = object.value) !== null && _object$value7 !== void 0 ? _object$value7 : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return BytesValue.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return BytesValue.decode(message.value);
  },
  toProto(message) {
    return BytesValue.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.BytesValue",
      value: BytesValue.encode(message).finish()
    };
  }
};