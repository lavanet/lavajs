"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryModuleAccountsResponse = exports.QueryModuleAccountsRequest = exports.QueryAccountsResponse = exports.QueryAccountsRequest = exports.QueryAccountResponse = exports.QueryAccountRequest = exports.Bech32PrefixResponse = exports.Bech32PrefixRequest = exports.AddressStringToBytesResponse = exports.AddressStringToBytesRequest = exports.AddressBytesToStringResponse = exports.AddressBytesToStringRequest = void 0;
var _pagination = require("../../base/query/v1beta1/pagination");
var _any = require("../../../google/protobuf/any");
var _auth = require("./auth");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */

/** QueryAccountRequest is the request type for the Query/Account RPC method. */

/** QueryAccountRequest is the request type for the Query/Account RPC method. */

/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */

/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/** QueryAccountResponse is the response type for the Query/Account RPC method. */

/** QueryAccountResponse is the response type for the Query/Account RPC method. */

/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */

/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */

/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */

/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */

/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */

/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */

/** AddressBytesToStringRequest is the request type for AddressString rpc method */

/** AddressBytesToStringRequest is the request type for AddressString rpc method */

/** AddressBytesToStringResponse is the response type for AddressString rpc method */

/** AddressBytesToStringResponse is the response type for AddressString rpc method */

/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */

/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */

/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */

/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */

function createBaseQueryAccountsRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAccountsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
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
    var message = createBaseQueryAccountsRequest();
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
    var message = createBaseQueryAccountsRequest();
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
    return QueryAccountsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountsRequest",
      value: QueryAccountsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryAccountsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryAccountsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
      value: QueryAccountsRequest.encode(message).finish()
    };
  }
};
exports.QueryAccountsRequest = QueryAccountsRequest;
function createBaseQueryAccountsResponse() {
  return {
    accounts: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAccountsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.accounts),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _any.Any.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(_any.Any.decode(reader, reader.uint32()));
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
    var _object$accounts;
    var message = createBaseQueryAccountsResponse();
    message.accounts = ((_object$accounts = object.accounts) === null || _object$accounts === void 0 ? void 0 : _object$accounts.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map(function (e) {
        return _any.Any.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(function (e) {
        return e ? _any.Any.toAmino(e) : undefined;
      });
    } else {
      obj.accounts = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryAccountsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountsResponse",
      value: QueryAccountsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryAccountsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryAccountsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
      value: QueryAccountsResponse.encode(message).finish()
    };
  }
};
exports.QueryAccountsResponse = QueryAccountsResponse;
function createBaseQueryAccountRequest() {
  return {
    address: ""
  };
}
var QueryAccountRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseQueryAccountRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryAccountRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountRequest",
      value: QueryAccountRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryAccountRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryAccountRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
      value: QueryAccountRequest.encode(message).finish()
    };
  }
};
exports.QueryAccountRequest = QueryAccountRequest;
function createBaseQueryModuleAccountsRequest() {
  return {};
}
var QueryModuleAccountsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryModuleAccountsRequest();
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
    var message = createBaseQueryModuleAccountsRequest();
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
    return QueryModuleAccountsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryModuleAccountsRequest",
      value: QueryModuleAccountsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryModuleAccountsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryModuleAccountsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
      value: QueryModuleAccountsRequest.encode(message).finish()
    };
  }
};
exports.QueryModuleAccountsRequest = QueryModuleAccountsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: _auth.Params.fromPartial({})
  };
}
var QueryParamsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _auth.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = _auth.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== undefined && object.params !== null ? _auth.Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _auth.Params.fromAmino(object.params) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _auth.Params.toAmino(message.params) : undefined;
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
      typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryAccountResponse() {
  return {
    account: _any.Any.fromPartial({})
  };
}
var QueryAccountResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.account !== undefined) {
      _any.Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = _any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? _any.Any.fromPartial(object.account) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      account: object !== null && object !== void 0 && object.account ? _any.Any.fromAmino(object.account) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.account = message.account ? _any.Any.toAmino(message.account) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryAccountResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryAccountResponse",
      value: QueryAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryAccountResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryAccountResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
      value: QueryAccountResponse.encode(message).finish()
    };
  }
};
exports.QueryAccountResponse = QueryAccountResponse;
function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
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
      typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryModuleAccountsResponse() {
  return {
    accounts: []
  };
}
var QueryModuleAccountsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.accounts),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _any.Any.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryModuleAccountsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(_any.Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$accounts2;
    var message = createBaseQueryModuleAccountsResponse();
    message.accounts = ((_object$accounts2 = object.accounts) === null || _object$accounts2 === void 0 ? void 0 : _object$accounts2.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map(function (e) {
        return _any.Any.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(function (e) {
        return e ? _any.Any.toAmino(e) : undefined;
      });
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryModuleAccountsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryModuleAccountsResponse",
      value: QueryModuleAccountsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryModuleAccountsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryModuleAccountsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
      value: QueryModuleAccountsResponse.encode(message).finish()
    };
  }
};
exports.QueryModuleAccountsResponse = QueryModuleAccountsResponse;
function createBaseBech32PrefixRequest() {
  return {};
}
var Bech32PrefixRequest = {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBech32PrefixRequest();
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
    var message = createBaseBech32PrefixRequest();
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
    return Bech32PrefixRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Bech32PrefixRequest",
      value: Bech32PrefixRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Bech32PrefixRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return Bech32PrefixRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
      value: Bech32PrefixRequest.encode(message).finish()
    };
  }
};
exports.Bech32PrefixRequest = Bech32PrefixRequest;
function createBaseBech32PrefixResponse() {
  return {
    bech32Prefix: ""
  };
}
var Bech32PrefixResponse = {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBech32PrefixResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$bech32Prefix;
    var message = createBaseBech32PrefixResponse();
    message.bech32Prefix = (_object$bech32Prefix = object.bech32Prefix) !== null && _object$bech32Prefix !== void 0 ? _object$bech32Prefix : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      bech32Prefix: object.bech32_prefix
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.bech32_prefix = message.bech32Prefix;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Bech32PrefixResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Bech32PrefixResponse",
      value: Bech32PrefixResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Bech32PrefixResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return Bech32PrefixResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
      value: Bech32PrefixResponse.encode(message).finish()
    };
  }
};
exports.Bech32PrefixResponse = Bech32PrefixResponse;
function createBaseAddressBytesToStringRequest() {
  return {
    addressBytes: new Uint8Array()
  };
}
var AddressBytesToStringRequest = {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAddressBytesToStringRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$addressBytes;
    var message = createBaseAddressBytesToStringRequest();
    message.addressBytes = (_object$addressBytes = object.addressBytes) !== null && _object$addressBytes !== void 0 ? _object$addressBytes : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      addressBytes: object.address_bytes
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address_bytes = message.addressBytes;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return AddressBytesToStringRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AddressBytesToStringRequest",
      value: AddressBytesToStringRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return AddressBytesToStringRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return AddressBytesToStringRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
      value: AddressBytesToStringRequest.encode(message).finish()
    };
  }
};
exports.AddressBytesToStringRequest = AddressBytesToStringRequest;
function createBaseAddressBytesToStringResponse() {
  return {
    addressString: ""
  };
}
var AddressBytesToStringResponse = {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAddressBytesToStringResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$addressString;
    var message = createBaseAddressBytesToStringResponse();
    message.addressString = (_object$addressString = object.addressString) !== null && _object$addressString !== void 0 ? _object$addressString : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      addressString: object.address_string
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address_string = message.addressString;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return AddressBytesToStringResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AddressBytesToStringResponse",
      value: AddressBytesToStringResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return AddressBytesToStringResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return AddressBytesToStringResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
      value: AddressBytesToStringResponse.encode(message).finish()
    };
  }
};
exports.AddressBytesToStringResponse = AddressBytesToStringResponse;
function createBaseAddressStringToBytesRequest() {
  return {
    addressString: ""
  };
}
var AddressStringToBytesRequest = {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAddressStringToBytesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$addressString2;
    var message = createBaseAddressStringToBytesRequest();
    message.addressString = (_object$addressString2 = object.addressString) !== null && _object$addressString2 !== void 0 ? _object$addressString2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      addressString: object.address_string
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address_string = message.addressString;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return AddressStringToBytesRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AddressStringToBytesRequest",
      value: AddressStringToBytesRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return AddressStringToBytesRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return AddressStringToBytesRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
      value: AddressStringToBytesRequest.encode(message).finish()
    };
  }
};
exports.AddressStringToBytesRequest = AddressStringToBytesRequest;
function createBaseAddressStringToBytesResponse() {
  return {
    addressBytes: new Uint8Array()
  };
}
var AddressStringToBytesResponse = {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAddressStringToBytesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$addressBytes2;
    var message = createBaseAddressStringToBytesResponse();
    message.addressBytes = (_object$addressBytes2 = object.addressBytes) !== null && _object$addressBytes2 !== void 0 ? _object$addressBytes2 : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      addressBytes: object.address_bytes
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address_bytes = message.addressBytes;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return AddressStringToBytesResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AddressStringToBytesResponse",
      value: AddressStringToBytesResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return AddressStringToBytesResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return AddressStringToBytesResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
      value: AddressStringToBytesResponse.encode(message).finish()
    };
  }
};
exports.AddressStringToBytesResponse = AddressStringToBytesResponse;