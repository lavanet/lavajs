"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryTotalSupplyResponse = exports.QueryTotalSupplyRequest = exports.QuerySupplyOfResponse = exports.QuerySupplyOfRequest = exports.QuerySpendableBalancesResponse = exports.QuerySpendableBalancesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDenomsMetadataResponse = exports.QueryDenomsMetadataRequest = exports.QueryDenomOwnersResponse = exports.QueryDenomOwnersRequest = exports.QueryDenomMetadataResponse = exports.QueryDenomMetadataRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = exports.QueryAllBalancesResponse = exports.QueryAllBalancesRequest = exports.DenomOwner = void 0;
var _pagination = require("../../base/query/v1beta1/pagination");
var _coin = require("../../base/v1beta1/coin");
var _bank = require("./bank");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */

/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */

/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */

/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */

/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */

/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */

/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 */

/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 */

/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 */

/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 */

/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */

/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */

/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */

/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */

/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */

/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */

/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */

/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */

/** QueryParamsRequest defines the request type for querying x/bank parameters. */

/** QueryParamsRequest defines the request type for querying x/bank parameters. */

/** QueryParamsResponse defines the response type for querying x/bank parameters. */

/** QueryParamsResponse defines the response type for querying x/bank parameters. */

/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */

/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */

/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */

/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */

/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */

/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */

/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */

/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */

/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */

/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */

/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 */

/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 */

/** QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query. */

/** QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query. */

function createBaseQueryBalanceRequest() {
  return {
    address: "",
    denom: ""
  };
}
var QueryBalanceRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$denom;
    var message = createBaseQueryBalanceRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.denom = (_object$denom = object.denom) !== null && _object$denom !== void 0 ? _object$denom : "";
    return message;
  }
};
exports.QueryBalanceRequest = QueryBalanceRequest;
function createBaseQueryBalanceResponse() {
  return {
    balance: undefined
  };
}
var QueryBalanceResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.balance !== undefined) {
      _coin.Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = _coin.Coin.decode(reader, reader.uint32());
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
      balance: (0, _helpers.isSet)(object.balance) ? _coin.Coin.fromJSON(object.balance) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.balance !== undefined && (obj.balance = message.balance ? _coin.Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? _coin.Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
exports.QueryBalanceResponse = QueryBalanceResponse;
function createBaseQueryAllBalancesRequest() {
  return {
    address: "",
    pagination: undefined
  };
}
var QueryAllBalancesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllBalancesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address2;
    var message = createBaseQueryAllBalancesRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllBalancesRequest = QueryAllBalancesRequest;
function createBaseQueryAllBalancesResponse() {
  return {
    balances: [],
    pagination: undefined
  };
}
var QueryAllBalancesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.balances),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryAllBalancesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(_coin.Coin.decode(reader, reader.uint32()));
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
      balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.balances) {
      obj.balances = message.balances.map(function (e) {
        return e ? _coin.Coin.toJSON(e) : undefined;
      });
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$balances;
    var message = createBaseQueryAllBalancesResponse();
    message.balances = ((_object$balances = object.balances) === null || _object$balances === void 0 ? void 0 : _object$balances.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllBalancesResponse = QueryAllBalancesResponse;
function createBaseQuerySpendableBalancesRequest() {
  return {
    address: "",
    pagination: undefined
  };
}
var QuerySpendableBalancesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySpendableBalancesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address3;
    var message = createBaseQuerySpendableBalancesRequest();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QuerySpendableBalancesRequest = QuerySpendableBalancesRequest;
function createBaseQuerySpendableBalancesResponse() {
  return {
    balances: [],
    pagination: undefined
  };
}
var QuerySpendableBalancesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.balances),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySpendableBalancesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(_coin.Coin.decode(reader, reader.uint32()));
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
      balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.balances) {
      obj.balances = message.balances.map(function (e) {
        return e ? _coin.Coin.toJSON(e) : undefined;
      });
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$balances2;
    var message = createBaseQuerySpendableBalancesResponse();
    message.balances = ((_object$balances2 = object.balances) === null || _object$balances2 === void 0 ? void 0 : _object$balances2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QuerySpendableBalancesResponse = QuerySpendableBalancesResponse;
function createBaseQueryTotalSupplyRequest() {
  return {
    pagination: undefined
  };
}
var QueryTotalSupplyRequest = {
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
    var message = createBaseQueryTotalSupplyRequest();
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
    var message = createBaseQueryTotalSupplyRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryTotalSupplyRequest = QueryTotalSupplyRequest;
function createBaseQueryTotalSupplyResponse() {
  return {
    supply: [],
    pagination: undefined
  };
}
var QueryTotalSupplyResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.supply),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(_coin.Coin.decode(reader, reader.uint32()));
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
      supply: Array.isArray(object === null || object === void 0 ? void 0 : object.supply) ? object.supply.map(function (e) {
        return _coin.Coin.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.supply) {
      obj.supply = message.supply.map(function (e) {
        return e ? _coin.Coin.toJSON(e) : undefined;
      });
    } else {
      obj.supply = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$supply;
    var message = createBaseQueryTotalSupplyResponse();
    message.supply = ((_object$supply = object.supply) === null || _object$supply === void 0 ? void 0 : _object$supply.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryTotalSupplyResponse = QueryTotalSupplyResponse;
function createBaseQuerySupplyOfRequest() {
  return {
    denom: ""
  };
}
var QuerySupplyOfRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySupplyOfRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
      denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$denom2;
    var message = createBaseQuerySupplyOfRequest();
    message.denom = (_object$denom2 = object.denom) !== null && _object$denom2 !== void 0 ? _object$denom2 : "";
    return message;
  }
};
exports.QuerySupplyOfRequest = QuerySupplyOfRequest;
function createBaseQuerySupplyOfResponse() {
  return {
    amount: undefined
  };
}
var QuerySupplyOfResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.amount !== undefined) {
      _coin.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySupplyOfResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = _coin.Coin.decode(reader, reader.uint32());
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
      amount: (0, _helpers.isSet)(object.amount) ? _coin.Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.amount !== undefined && (obj.amount = message.amount ? _coin.Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQuerySupplyOfResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
exports.QuerySupplyOfResponse = QuerySupplyOfResponse;
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
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
var QueryParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _bank.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = _bank.Params.decode(reader, reader.uint32());
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
      params: (0, _helpers.isSet)(object.params) ? _bank.Params.fromJSON(object.params) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.params !== undefined && (obj.params = message.params ? _bank.Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _bank.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryDenomsMetadataRequest() {
  return {
    pagination: undefined
  };
}
var QueryDenomsMetadataRequest = {
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
    var message = createBaseQueryDenomsMetadataRequest();
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
    var message = createBaseQueryDenomsMetadataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDenomsMetadataRequest = QueryDenomsMetadataRequest;
function createBaseQueryDenomsMetadataResponse() {
  return {
    metadatas: [],
    pagination: undefined
  };
}
var QueryDenomsMetadataResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.metadatas),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _bank.Metadata.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDenomsMetadataResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadatas.push(_bank.Metadata.decode(reader, reader.uint32()));
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
      metadatas: Array.isArray(object === null || object === void 0 ? void 0 : object.metadatas) ? object.metadatas.map(function (e) {
        return _bank.Metadata.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map(function (e) {
        return e ? _bank.Metadata.toJSON(e) : undefined;
      });
    } else {
      obj.metadatas = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$metadatas;
    var message = createBaseQueryDenomsMetadataResponse();
    message.metadatas = ((_object$metadatas = object.metadatas) === null || _object$metadatas === void 0 ? void 0 : _object$metadatas.map(function (e) {
      return _bank.Metadata.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDenomsMetadataResponse = QueryDenomsMetadataResponse;
function createBaseQueryDenomMetadataRequest() {
  return {
    denom: ""
  };
}
var QueryDenomMetadataRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDenomMetadataRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
      denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$denom3;
    var message = createBaseQueryDenomMetadataRequest();
    message.denom = (_object$denom3 = object.denom) !== null && _object$denom3 !== void 0 ? _object$denom3 : "";
    return message;
  }
};
exports.QueryDenomMetadataRequest = QueryDenomMetadataRequest;
function createBaseQueryDenomMetadataResponse() {
  return {
    metadata: undefined
  };
}
var QueryDenomMetadataResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.metadata !== undefined) {
      _bank.Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDenomMetadataResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = _bank.Metadata.decode(reader, reader.uint32());
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
      metadata: (0, _helpers.isSet)(object.metadata) ? _bank.Metadata.fromJSON(object.metadata) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.metadata !== undefined && (obj.metadata = message.metadata ? _bank.Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryDenomMetadataResponse();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? _bank.Metadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};
exports.QueryDenomMetadataResponse = QueryDenomMetadataResponse;
function createBaseQueryDenomOwnersRequest() {
  return {
    denom: "",
    pagination: undefined
  };
}
var QueryDenomOwnersRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDenomOwnersRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
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
      denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$denom4;
    var message = createBaseQueryDenomOwnersRequest();
    message.denom = (_object$denom4 = object.denom) !== null && _object$denom4 !== void 0 ? _object$denom4 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDenomOwnersRequest = QueryDenomOwnersRequest;
function createBaseDenomOwner() {
  return {
    address: "",
    balance: undefined
  };
}
var DenomOwner = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== undefined) {
      _coin.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDenomOwner();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = _coin.Coin.decode(reader, reader.uint32());
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      balance: (0, _helpers.isSet)(object.balance) ? _coin.Coin.fromJSON(object.balance) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.balance !== undefined && (obj.balance = message.balance ? _coin.Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address4;
    var message = createBaseDenomOwner();
    message.address = (_object$address4 = object.address) !== null && _object$address4 !== void 0 ? _object$address4 : "";
    message.balance = object.balance !== undefined && object.balance !== null ? _coin.Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
exports.DenomOwner = DenomOwner;
function createBaseQueryDenomOwnersResponse() {
  return {
    denomOwners: [],
    pagination: undefined
  };
}
var QueryDenomOwnersResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.denomOwners),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        DenomOwner.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDenomOwnersResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOwners.push(DenomOwner.decode(reader, reader.uint32()));
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
      denomOwners: Array.isArray(object === null || object === void 0 ? void 0 : object.denomOwners) ? object.denomOwners.map(function (e) {
        return DenomOwner.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.denomOwners) {
      obj.denomOwners = message.denomOwners.map(function (e) {
        return e ? DenomOwner.toJSON(e) : undefined;
      });
    } else {
      obj.denomOwners = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$denomOwners;
    var message = createBaseQueryDenomOwnersResponse();
    message.denomOwners = ((_object$denomOwners = object.denomOwners) === null || _object$denomOwners === void 0 ? void 0 : _object$denomOwners.map(function (e) {
      return DenomOwner.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryDenomOwnersResponse = QueryDenomOwnersResponse;