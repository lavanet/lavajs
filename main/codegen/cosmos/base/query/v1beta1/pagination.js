"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageResponse = exports.PageRequest = void 0;
var _binary = require("../../../../binary");
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */

/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */

/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */

/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */

function createBasePageRequest() {
  return {
    key: new Uint8Array(),
    offset: BigInt(0),
    limit: BigInt(0),
    countTotal: false,
    reverse: false
  };
}
var PageRequest = {
  typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.offset !== BigInt(0)) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.countTotal === true) {
      writer.uint32(32).bool(message.countTotal);
    }
    if (message.reverse === true) {
      writer.uint32(40).bool(message.reverse);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePageRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.offset = reader.uint64();
          break;
        case 3:
          message.limit = reader.uint64();
          break;
        case 4:
          message.countTotal = reader.bool();
          break;
        case 5:
          message.reverse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$key, _object$countTotal, _object$reverse;
    var message = createBasePageRequest();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.offset = object.offset !== undefined && object.offset !== null ? BigInt(object.offset.toString()) : BigInt(0);
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.countTotal = (_object$countTotal = object.countTotal) !== null && _object$countTotal !== void 0 ? _object$countTotal : false;
    message.reverse = (_object$reverse = object.reverse) !== null && _object$reverse !== void 0 ? _object$reverse : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      key: object.key,
      offset: BigInt(object.offset),
      limit: BigInt(object.limit),
      countTotal: object.count_total,
      reverse: object.reverse
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.key = message.key;
    obj.offset = message.offset ? message.offset.toString() : undefined;
    obj.limit = message.limit ? message.limit.toString() : undefined;
    obj.count_total = message.countTotal;
    obj.reverse = message.reverse;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PageRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PageRequest",
      value: PageRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PageRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return PageRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
      value: PageRequest.encode(message).finish()
    };
  }
};
exports.PageRequest = PageRequest;
function createBasePageResponse() {
  return {
    nextKey: new Uint8Array(),
    total: BigInt(0)
  };
}
var PageResponse = {
  typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.nextKey.length !== 0) {
      writer.uint32(10).bytes(message.nextKey);
    }
    if (message.total !== BigInt(0)) {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePageResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextKey = reader.bytes();
          break;
        case 2:
          message.total = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$nextKey;
    var message = createBasePageResponse();
    message.nextKey = (_object$nextKey = object.nextKey) !== null && _object$nextKey !== void 0 ? _object$nextKey : new Uint8Array();
    message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      nextKey: object.next_key,
      total: BigInt(object.total)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.next_key = message.nextKey;
    obj.total = message.total ? message.total.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PageResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PageResponse",
      value: PageResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PageResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return PageResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
      value: PageResponse.encode(message).finish()
    };
  }
};
exports.PageResponse = PageResponse;