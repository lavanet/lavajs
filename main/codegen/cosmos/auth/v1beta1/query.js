"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryModuleAccountsResponse = exports.QueryModuleAccountsRequest = exports.QueryAccountsResponse = exports.QueryAccountsRequest = exports.QueryAccountResponse = exports.QueryAccountRequest = exports.Bech32PrefixResponse = exports.Bech32PrefixRequest = exports.AddressStringToBytesResponse = exports.AddressStringToBytesRequest = exports.AddressBytesToStringResponse = exports.AddressBytesToStringRequest = void 0;
var _pagination = require("../../base/query/v1beta1/pagination");
var _any = require("../../../google/protobuf/any");
var _auth = require("./auth");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    pagination: undefined
  };
}
var QueryAccountsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAccountsRequest = QueryAccountsRequest;
function createBaseQueryAccountsResponse() {
  return {
    accounts: [],
    pagination: undefined
  };
}
var QueryAccountsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(function (e) {
        return e ? _any.Any.toJSON(e) : undefined;
      });
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$accounts;
    var message = createBaseQueryAccountsResponse();
    message.accounts = ((_object$accounts = object.accounts) === null || _object$accounts === void 0 ? void 0 : _object$accounts.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAccountsResponse = QueryAccountsResponse;
function createBaseQueryAccountRequest() {
  return {
    address: ""
  };
}
var QueryAccountRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseQueryAccountRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
exports.QueryAccountRequest = QueryAccountRequest;
function createBaseQueryModuleAccountsRequest() {
  return {};
}
var QueryModuleAccountsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryModuleAccountsRequest();
    return message;
  }
};
exports.QueryModuleAccountsRequest = QueryModuleAccountsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
var QueryParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _auth.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      params: (0, _helpers.isSet)(object.params) ? _auth.Params.fromJSON(object.params) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.params !== undefined && (obj.params = message.params ? _auth.Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _auth.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryAccountResponse() {
  return {
    account: undefined
  };
}
var QueryAccountResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.account !== undefined) {
      _any.Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      account: (0, _helpers.isSet)(object.account) ? _any.Any.fromJSON(object.account) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.account !== undefined && (obj.account = message.account ? _any.Any.toJSON(message.account) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? _any.Any.fromPartial(object.account) : undefined;
    return message;
  }
};
exports.QueryAccountResponse = QueryAccountResponse;
function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryParamsRequest();
    return message;
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryModuleAccountsResponse() {
  return {
    accounts: []
  };
}
var QueryModuleAccountsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(function (e) {
        return e ? _any.Any.toJSON(e) : undefined;
      });
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$accounts2;
    var message = createBaseQueryModuleAccountsResponse();
    message.accounts = ((_object$accounts2 = object.accounts) === null || _object$accounts2 === void 0 ? void 0 : _object$accounts2.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryModuleAccountsResponse = QueryModuleAccountsResponse;
function createBaseBech32PrefixRequest() {
  return {};
}
var Bech32PrefixRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseBech32PrefixRequest();
    return message;
  }
};
exports.Bech32PrefixRequest = Bech32PrefixRequest;
function createBaseBech32PrefixResponse() {
  return {
    bech32Prefix: ""
  };
}
var Bech32PrefixResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      bech32Prefix: (0, _helpers.isSet)(object.bech32Prefix) ? String(object.bech32Prefix) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.bech32Prefix !== undefined && (obj.bech32Prefix = message.bech32Prefix);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$bech32Prefix;
    var message = createBaseBech32PrefixResponse();
    message.bech32Prefix = (_object$bech32Prefix = object.bech32Prefix) !== null && _object$bech32Prefix !== void 0 ? _object$bech32Prefix : "";
    return message;
  }
};
exports.Bech32PrefixResponse = Bech32PrefixResponse;
function createBaseAddressBytesToStringRequest() {
  return {
    addressBytes: new Uint8Array()
  };
}
var AddressBytesToStringRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      addressBytes: (0, _helpers.isSet)(object.addressBytes) ? (0, _helpers.bytesFromBase64)(object.addressBytes) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.addressBytes !== undefined && (obj.addressBytes = (0, _helpers.base64FromBytes)(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$addressBytes;
    var message = createBaseAddressBytesToStringRequest();
    message.addressBytes = (_object$addressBytes = object.addressBytes) !== null && _object$addressBytes !== void 0 ? _object$addressBytes : new Uint8Array();
    return message;
  }
};
exports.AddressBytesToStringRequest = AddressBytesToStringRequest;
function createBaseAddressBytesToStringResponse() {
  return {
    addressString: ""
  };
}
var AddressBytesToStringResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      addressString: (0, _helpers.isSet)(object.addressString) ? String(object.addressString) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$addressString;
    var message = createBaseAddressBytesToStringResponse();
    message.addressString = (_object$addressString = object.addressString) !== null && _object$addressString !== void 0 ? _object$addressString : "";
    return message;
  }
};
exports.AddressBytesToStringResponse = AddressBytesToStringResponse;
function createBaseAddressStringToBytesRequest() {
  return {
    addressString: ""
  };
}
var AddressStringToBytesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      addressString: (0, _helpers.isSet)(object.addressString) ? String(object.addressString) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$addressString2;
    var message = createBaseAddressStringToBytesRequest();
    message.addressString = (_object$addressString2 = object.addressString) !== null && _object$addressString2 !== void 0 ? _object$addressString2 : "";
    return message;
  }
};
exports.AddressStringToBytesRequest = AddressStringToBytesRequest;
function createBaseAddressStringToBytesResponse() {
  return {
    addressBytes: new Uint8Array()
  };
}
var AddressStringToBytesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      addressBytes: (0, _helpers.isSet)(object.addressBytes) ? (0, _helpers.bytesFromBase64)(object.addressBytes) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.addressBytes !== undefined && (obj.addressBytes = (0, _helpers.base64FromBytes)(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$addressBytes2;
    var message = createBaseAddressStringToBytesResponse();
    message.addressBytes = (_object$addressBytes2 = object.addressBytes) !== null && _object$addressBytes2 !== void 0 ? _object$addressBytes2 : new Uint8Array();
    return message;
  }
};
exports.AddressStringToBytesResponse = AddressStringToBytesResponse;