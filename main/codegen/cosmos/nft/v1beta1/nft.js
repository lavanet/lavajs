"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NFT = exports.Class = void 0;
var _any = require("../../../google/protobuf/any");
var _binary = require("../../../binary");
/** Class defines the class of the nft type. */

/** Class defines the class of the nft type. */

/** NFT defines the NFT. */

/** NFT defines the NFT. */

function createBaseClass() {
  return {
    id: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    data: _any.Any.fromPartial({})
  };
}
var Class = {
  typeUrl: "/cosmos.nft.v1beta1.Class",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.data !== undefined) {
      _any.Any.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseClass();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.data = _any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$id, _object$name, _object$symbol, _object$description, _object$uri, _object$uriHash;
    var message = createBaseClass();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.symbol = (_object$symbol = object.symbol) !== null && _object$symbol !== void 0 ? _object$symbol : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.uri = (_object$uri = object.uri) !== null && _object$uri !== void 0 ? _object$uri : "";
    message.uriHash = (_object$uriHash = object.uriHash) !== null && _object$uriHash !== void 0 ? _object$uriHash : "";
    message.data = object.data !== undefined && object.data !== null ? _any.Any.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      id: object.id,
      name: object.name,
      symbol: object.symbol,
      description: object.description,
      uri: object.uri,
      uriHash: object.uri_hash,
      data: object !== null && object !== void 0 && object.data ? _any.Any.fromAmino(object.data) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.description = message.description;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    obj.data = message.data ? _any.Any.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Class.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Class",
      value: Class.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Class.decode(message.value);
  },
  toProto: function toProto(message) {
    return Class.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.Class",
      value: Class.encode(message).finish()
    };
  }
};
exports.Class = Class;
function createBaseNFT() {
  return {
    classId: "",
    id: "",
    uri: "",
    uriHash: "",
    data: _any.Any.fromPartial({})
  };
}
var NFT = {
  typeUrl: "/cosmos.nft.v1beta1.NFT",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(34).string(message.uriHash);
    }
    if (message.data !== undefined) {
      _any.Any.encode(message.data, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseNFT();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.uriHash = reader.string();
          break;
        case 10:
          message.data = _any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$classId, _object$id2, _object$uri2, _object$uriHash2;
    var message = createBaseNFT();
    message.classId = (_object$classId = object.classId) !== null && _object$classId !== void 0 ? _object$classId : "";
    message.id = (_object$id2 = object.id) !== null && _object$id2 !== void 0 ? _object$id2 : "";
    message.uri = (_object$uri2 = object.uri) !== null && _object$uri2 !== void 0 ? _object$uri2 : "";
    message.uriHash = (_object$uriHash2 = object.uriHash) !== null && _object$uriHash2 !== void 0 ? _object$uriHash2 : "";
    message.data = object.data !== undefined && object.data !== null ? _any.Any.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      classId: object.class_id,
      id: object.id,
      uri: object.uri,
      uriHash: object.uri_hash,
      data: object !== null && object !== void 0 && object.data ? _any.Any.fromAmino(object.data) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    obj.data = message.data ? _any.Any.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return NFT.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/NFT",
      value: NFT.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return NFT.decode(message.value);
  },
  toProto: function toProto(message) {
    return NFT.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.NFT",
      value: NFT.encode(message).finish()
    };
  }
};
exports.NFT = NFT;