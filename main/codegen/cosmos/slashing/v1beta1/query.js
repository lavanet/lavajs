"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuerySigningInfosResponse = exports.QuerySigningInfosRequest = exports.QuerySigningInfoResponse = exports.QuerySigningInfoRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
var _pagination = require("../../base/query/v1beta1/pagination");
var _slashing = require("./slashing");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryParamsRequest is the request type for the Query/Params RPC method */

/** QueryParamsRequest is the request type for the Query/Params RPC method */

/** QueryParamsResponse is the response type for the Query/Params RPC method */

/** QueryParamsResponse is the response type for the Query/Params RPC method */

/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */

/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */

/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */

/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */

/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */

/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */

/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */

/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */

function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: _slashing.Params.fromPartial({})
  };
}
var QueryParamsResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _slashing.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _slashing.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _slashing.Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _slashing.Params.fromAmino(object.params) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _slashing.Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQuerySigningInfoRequest() {
  return {
    consAddress: ""
  };
}
var QuerySigningInfoRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySigningInfoRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$consAddress;
    var message = createBaseQuerySigningInfoRequest();
    message.consAddress = (_object$consAddress = object.consAddress) !== null && _object$consAddress !== void 0 ? _object$consAddress : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      consAddress: object.cons_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.cons_address = message.consAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QuerySigningInfoRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySigningInfoRequest",
      value: QuerySigningInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QuerySigningInfoRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QuerySigningInfoRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
      value: QuerySigningInfoRequest.encode(message).finish()
    };
  }
};
exports.QuerySigningInfoRequest = QuerySigningInfoRequest;
function createBaseQuerySigningInfoResponse() {
  return {
    valSigningInfo: _slashing.ValidatorSigningInfo.fromPartial({})
  };
}
var QuerySigningInfoResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.valSigningInfo !== undefined) {
      _slashing.ValidatorSigningInfo.encode(message.valSigningInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySigningInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valSigningInfo = _slashing.ValidatorSigningInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQuerySigningInfoResponse();
    message.valSigningInfo = object.valSigningInfo !== undefined && object.valSigningInfo !== null ? _slashing.ValidatorSigningInfo.fromPartial(object.valSigningInfo) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      valSigningInfo: object !== null && object !== void 0 && object.val_signing_info ? _slashing.ValidatorSigningInfo.fromAmino(object.val_signing_info) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.val_signing_info = message.valSigningInfo ? _slashing.ValidatorSigningInfo.toAmino(message.valSigningInfo) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QuerySigningInfoResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySigningInfoResponse",
      value: QuerySigningInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QuerySigningInfoResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QuerySigningInfoResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
      value: QuerySigningInfoResponse.encode(message).finish()
    };
  }
};
exports.QuerySigningInfoResponse = QuerySigningInfoResponse;
function createBaseQuerySigningInfosRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QuerySigningInfosRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
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
    var message = createBaseQuerySigningInfosRequest();
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
    var message = createBaseQuerySigningInfosRequest();
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
    return QuerySigningInfosRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySigningInfosRequest",
      value: QuerySigningInfosRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QuerySigningInfosRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QuerySigningInfosRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
      value: QuerySigningInfosRequest.encode(message).finish()
    };
  }
};
exports.QuerySigningInfosRequest = QuerySigningInfosRequest;
function createBaseQuerySigningInfosResponse() {
  return {
    info: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QuerySigningInfosResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.info),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _slashing.ValidatorSigningInfo.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQuerySigningInfosResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info.push(_slashing.ValidatorSigningInfo.decode(reader, reader.uint32()));
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
    var _object$info;
    var message = createBaseQuerySigningInfosResponse();
    message.info = ((_object$info = object.info) === null || _object$info === void 0 ? void 0 : _object$info.map(function (e) {
      return _slashing.ValidatorSigningInfo.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      info: Array.isArray(object === null || object === void 0 ? void 0 : object.info) ? object.info.map(function (e) {
        return _slashing.ValidatorSigningInfo.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.info) {
      obj.info = message.info.map(function (e) {
        return e ? _slashing.ValidatorSigningInfo.toAmino(e) : undefined;
      });
    } else {
      obj.info = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QuerySigningInfosResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QuerySigningInfosResponse",
      value: QuerySigningInfosResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QuerySigningInfosResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QuerySigningInfosResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
      value: QuerySigningInfosResponse.encode(message).finish()
    };
  }
};
exports.QuerySigningInfosResponse = QuerySigningInfosResponse;