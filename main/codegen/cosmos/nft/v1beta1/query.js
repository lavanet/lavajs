"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuerySupplyResponse = exports.QuerySupplyRequest = exports.QueryOwnerResponse = exports.QueryOwnerRequest = exports.QueryNFTsResponse = exports.QueryNFTsRequest = exports.QueryNFTResponse = exports.QueryNFTRequest = exports.QueryClassesResponse = exports.QueryClassesRequest = exports.QueryClassResponse = exports.QueryClassRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = void 0;
var _pagination = require("../../base/query/v1beta1/pagination");
var _nft = require("./nft");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */

/** QueryBalanceRequest is the request type for the Query/Balance RPC method */

/** QueryBalanceResponse is the response type for the Query/Balance RPC method */

/** QueryBalanceResponse is the response type for the Query/Balance RPC method */

/** QueryOwnerRequest is the request type for the Query/Owner RPC method */

/** QueryOwnerRequest is the request type for the Query/Owner RPC method */

/** QueryOwnerResponse is the response type for the Query/Owner RPC method */

/** QueryOwnerResponse is the response type for the Query/Owner RPC method */

/** QuerySupplyRequest is the request type for the Query/Supply RPC method */

/** QuerySupplyRequest is the request type for the Query/Supply RPC method */

/** QuerySupplyResponse is the response type for the Query/Supply RPC method */

/** QuerySupplyResponse is the response type for the Query/Supply RPC method */

/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */

/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */

/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */

/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */

/** QueryNFTRequest is the request type for the Query/NFT RPC method */

/** QueryNFTRequest is the request type for the Query/NFT RPC method */

/** QueryNFTResponse is the response type for the Query/NFT RPC method */

/** QueryNFTResponse is the response type for the Query/NFT RPC method */

/** QueryClassRequest is the request type for the Query/Class RPC method */

/** QueryClassRequest is the request type for the Query/Class RPC method */

/** QueryClassResponse is the response type for the Query/Class RPC method */

/** QueryClassResponse is the response type for the Query/Class RPC method */

/** QueryClassesRequest is the request type for the Query/Classes RPC method */

/** QueryClassesRequest is the request type for the Query/Classes RPC method */

/** QueryClassesResponse is the response type for the Query/Classes RPC method */

/** QueryClassesResponse is the response type for the Query/Classes RPC method */

function createBaseQueryBalanceRequest() {
  return {
    classId: "",
    owner: ""
  };
}
var QueryBalanceRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$classId, _object$owner;
    var message = createBaseQueryBalanceRequest();
    message.classId = (_object$classId = object.classId) !== null && _object$classId !== void 0 ? _object$classId : "";
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      classId: object.class_id,
      owner: object.owner
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.class_id = message.classId;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryBalanceRequest",
      value: QueryBalanceRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
exports.QueryBalanceRequest = QueryBalanceRequest;
function createBaseQueryBalanceResponse() {
  return {
    amount: BigInt(0)
  };
}
var QueryBalanceResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryBalanceResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      amount: BigInt(object.amount)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryBalanceResponse",
      value: QueryBalanceResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
exports.QueryBalanceResponse = QueryBalanceResponse;
function createBaseQueryOwnerRequest() {
  return {
    classId: "",
    id: ""
  };
}
var QueryOwnerRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryOwnerRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$classId2, _object$id;
    var message = createBaseQueryOwnerRequest();
    message.classId = (_object$classId2 = object.classId) !== null && _object$classId2 !== void 0 ? _object$classId2 : "";
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      classId: object.class_id,
      id: object.id
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryOwnerRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryOwnerRequest",
      value: QueryOwnerRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryOwnerRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryOwnerRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
      value: QueryOwnerRequest.encode(message).finish()
    };
  }
};
exports.QueryOwnerRequest = QueryOwnerRequest;
function createBaseQueryOwnerResponse() {
  return {
    owner: ""
  };
}
var QueryOwnerResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryOwnerResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner2;
    var message = createBaseQueryOwnerResponse();
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      owner: object.owner
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryOwnerResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryOwnerResponse",
      value: QueryOwnerResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryOwnerResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryOwnerResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
      value: QueryOwnerResponse.encode(message).finish()
    };
  }
};
exports.QueryOwnerResponse = QueryOwnerResponse;
function createBaseQuerySupplyRequest() {
  return {
    classId: ""
  };
}
var QuerySupplyRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$classId3;
    var message = createBaseQuerySupplyRequest();
    message.classId = (_object$classId3 = object.classId) !== null && _object$classId3 !== void 0 ? _object$classId3 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      classId: object.class_id
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySupplyRequest",
      value: QuerySupplyRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }
};
exports.QuerySupplyRequest = QuerySupplyRequest;
function createBaseQuerySupplyResponse() {
  return {
    amount: BigInt(0)
  };
}
var QuerySupplyResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQuerySupplyResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      amount: BigInt(object.amount)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySupplyResponse",
      value: QuerySupplyResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }
};
exports.QuerySupplyResponse = QuerySupplyResponse;
function createBaseQueryNFTsRequest() {
  return {
    classId: "",
    owner: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryNFTsRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryNFTsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$classId4, _object$owner3;
    var message = createBaseQueryNFTsRequest();
    message.classId = (_object$classId4 = object.classId) !== null && _object$classId4 !== void 0 ? _object$classId4 : "";
    message.owner = (_object$owner3 = object.owner) !== null && _object$owner3 !== void 0 ? _object$owner3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      classId: object.class_id,
      owner: object.owner,
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.class_id = message.classId;
    obj.owner = message.owner;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryNFTsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryNFTsRequest",
      value: QueryNFTsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryNFTsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryNFTsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
      value: QueryNFTsRequest.encode(message).finish()
    };
  }
};
exports.QueryNFTsRequest = QueryNFTsRequest;
function createBaseQueryNFTsResponse() {
  return {
    nfts: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryNFTsResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.nfts),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _nft.NFT.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryNFTsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(_nft.NFT.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$nfts;
    var message = createBaseQueryNFTsResponse();
    message.nfts = ((_object$nfts = object.nfts) === null || _object$nfts === void 0 ? void 0 : _object$nfts.map(function (e) {
      return _nft.NFT.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts) ? object.nfts.map(function (e) {
        return _nft.NFT.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(function (e) {
        return e ? _nft.NFT.toAmino(e) : undefined;
      });
    } else {
      obj.nfts = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryNFTsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryNFTsResponse",
      value: QueryNFTsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryNFTsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryNFTsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
      value: QueryNFTsResponse.encode(message).finish()
    };
  }
};
exports.QueryNFTsResponse = QueryNFTsResponse;
function createBaseQueryNFTRequest() {
  return {
    classId: "",
    id: ""
  };
}
var QueryNFTRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$classId5, _object$id2;
    var message = createBaseQueryNFTRequest();
    message.classId = (_object$classId5 = object.classId) !== null && _object$classId5 !== void 0 ? _object$classId5 : "";
    message.id = (_object$id2 = object.id) !== null && _object$id2 !== void 0 ? _object$id2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      classId: object.class_id,
      id: object.id
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryNFTRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryNFTRequest",
      value: QueryNFTRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryNFTRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryNFTRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
      value: QueryNFTRequest.encode(message).finish()
    };
  }
};
exports.QueryNFTRequest = QueryNFTRequest;
function createBaseQueryNFTResponse() {
  return {
    nft: _nft.NFT.fromPartial({})
  };
}
var QueryNFTResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.nft !== undefined) {
      _nft.NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = _nft.NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryNFTResponse();
    message.nft = object.nft !== undefined && object.nft !== null ? _nft.NFT.fromPartial(object.nft) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      nft: object !== null && object !== void 0 && object.nft ? _nft.NFT.fromAmino(object.nft) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.nft = message.nft ? _nft.NFT.toAmino(message.nft) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryNFTResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryNFTResponse",
      value: QueryNFTResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryNFTResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryNFTResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
      value: QueryNFTResponse.encode(message).finish()
    };
  }
};
exports.QueryNFTResponse = QueryNFTResponse;
function createBaseQueryClassRequest() {
  return {
    classId: ""
  };
}
var QueryClassRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$classId6;
    var message = createBaseQueryClassRequest();
    message.classId = (_object$classId6 = object.classId) !== null && _object$classId6 !== void 0 ? _object$classId6 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      classId: object.class_id
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryClassRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryClassRequest",
      value: QueryClassRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryClassRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryClassRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
      value: QueryClassRequest.encode(message).finish()
    };
  }
};
exports.QueryClassRequest = QueryClassRequest;
function createBaseQueryClassResponse() {
  return {
    "class": _nft.Class.fromPartial({})
  };
}
var QueryClassResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message["class"] !== undefined) {
      _nft.Class.encode(message["class"], writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message["class"] = _nft.Class.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryClassResponse();
    message["class"] = object["class"] !== undefined && object["class"] !== null ? _nft.Class.fromPartial(object["class"]) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      "class": object !== null && object !== void 0 && object["class"] ? _nft.Class.fromAmino(object["class"]) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj["class"] = message["class"] ? _nft.Class.toAmino(message["class"]) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryClassResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryClassResponse",
      value: QueryClassResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryClassResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryClassResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
      value: QueryClassResponse.encode(message).finish()
    };
  }
};
exports.QueryClassResponse = QueryClassResponse;
function createBaseQueryClassesRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryClassesRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryClassesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryClassesRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryClassesRequest",
      value: QueryClassesRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryClassesRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryClassesRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
      value: QueryClassesRequest.encode(message).finish()
    };
  }
};
exports.QueryClassesRequest = QueryClassesRequest;
function createBaseQueryClassesResponse() {
  return {
    classes: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryClassesResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.classes),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _nft.Class.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(_nft.Class.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$classes;
    var message = createBaseQueryClassesResponse();
    message.classes = ((_object$classes = object.classes) === null || _object$classes === void 0 ? void 0 : _object$classes.map(function (e) {
      return _nft.Class.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      classes: Array.isArray(object === null || object === void 0 ? void 0 : object.classes) ? object.classes.map(function (e) {
        return _nft.Class.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.classes) {
      obj.classes = message.classes.map(function (e) {
        return e ? _nft.Class.toAmino(e) : undefined;
      });
    } else {
      obj.classes = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryClassesResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryClassesResponse",
      value: QueryClassesResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryClassesResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryClassesResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
      value: QueryClassesResponse.encode(message).finish()
    };
  }
};
exports.QueryClassesResponse = QueryClassesResponse;