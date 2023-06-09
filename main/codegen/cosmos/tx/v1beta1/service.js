"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimulateResponse = exports.SimulateRequest = exports.OrderBySDKType = exports.OrderBy = exports.GetTxsEventResponse = exports.GetTxsEventRequest = exports.GetTxResponse = exports.GetTxRequest = exports.GetBlockWithTxsResponse = exports.GetBlockWithTxsRequest = exports.BroadcastTxResponse = exports.BroadcastTxRequest = exports.BroadcastModeSDKType = exports.BroadcastMode = void 0;
exports.broadcastModeFromJSON = broadcastModeFromJSON;
exports.broadcastModeToJSON = broadcastModeToJSON;
exports.orderByFromJSON = orderByFromJSON;
exports.orderByToJSON = orderByToJSON;
var _tx = require("./tx");
var _pagination = require("../../base/query/v1beta1/pagination");
var _abci = require("../../base/abci/v1beta1/abci");
var _types = require("../../../tendermint/types/types");
var _block = require("../../../tendermint/types/block");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** OrderBy defines the sorting order */
var OrderBy = /*#__PURE__*/function (OrderBy) {
  OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
  OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
  OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
  OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return OrderBy;
}({});
exports.OrderBy = OrderBy;
var OrderBySDKType = OrderBy;
exports.OrderBySDKType = OrderBySDKType;
function orderByFromJSON(object) {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;
    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;
    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}
function orderByToJSON(object) {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";
    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";
    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";
    case OrderBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
var BroadcastMode = /*#__PURE__*/function (BroadcastMode) {
  BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
  BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
  BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BroadcastMode;
}({});
exports.BroadcastMode = BroadcastMode;
var BroadcastModeSDKType = BroadcastMode;
exports.BroadcastModeSDKType = BroadcastModeSDKType;
function broadcastModeFromJSON(object) {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
function broadcastModeToJSON(object) {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";
    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";
    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";
    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";
    case BroadcastMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */

/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */

/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */

/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */

/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */

/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */

/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */

/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */

/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */

/** GetTxResponse is the response type for the Service.GetTx method. */

/** GetTxResponse is the response type for the Service.GetTx method. */

/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

function createBaseGetTxsEventRequest() {
  return {
    events: [],
    pagination: undefined,
    orderBy: 0
  };
}
var GetTxsEventRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.events),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderBy !== 0) {
      writer.uint32(24).int32(message.orderBy);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderBy = reader.int32();
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
      events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) {
        return String(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined,
      orderBy: (0, _helpers.isSet)(object.orderBy) ? orderByFromJSON(object.orderBy) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.events) {
      obj.events = message.events.map(function (e) {
        return e;
      });
    } else {
      obj.events = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    message.orderBy !== undefined && (obj.orderBy = orderByToJSON(message.orderBy));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$events, _object$orderBy;
    var message = createBaseGetTxsEventRequest();
    message.events = ((_object$events = object.events) === null || _object$events === void 0 ? void 0 : _object$events.map(function (e) {
      return e;
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    message.orderBy = (_object$orderBy = object.orderBy) !== null && _object$orderBy !== void 0 ? _object$orderBy : 0;
    return message;
  }
};
exports.GetTxsEventRequest = GetTxsEventRequest;
function createBaseGetTxsEventResponse() {
  return {
    txs: [],
    txResponses: [],
    pagination: undefined
  };
}
var GetTxsEventResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.txs),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _tx.Tx.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.txResponses),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        _abci.TxResponse.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(_tx.Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(_abci.TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) {
        return _tx.Tx.fromJSON(e);
      }) : [],
      txResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.txResponses) ? object.txResponses.map(function (e) {
        return _abci.TxResponse.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.txs) {
      obj.txs = message.txs.map(function (e) {
        return e ? _tx.Tx.toJSON(e) : undefined;
      });
    } else {
      obj.txs = [];
    }
    if (message.txResponses) {
      obj.txResponses = message.txResponses.map(function (e) {
        return e ? _abci.TxResponse.toJSON(e) : undefined;
      });
    } else {
      obj.txResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$txs, _object$txResponses;
    var message = createBaseGetTxsEventResponse();
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(function (e) {
      return _tx.Tx.fromPartial(e);
    })) || [];
    message.txResponses = ((_object$txResponses = object.txResponses) === null || _object$txResponses === void 0 ? void 0 : _object$txResponses.map(function (e) {
      return _abci.TxResponse.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetTxsEventResponse = GetTxsEventResponse;
function createBaseBroadcastTxRequest() {
  return {
    txBytes: new Uint8Array(),
    mode: 0
  };
}
var BroadcastTxRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBroadcastTxRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        case 2:
          message.mode = reader.int32();
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
      txBytes: (0, _helpers.isSet)(object.txBytes) ? (0, _helpers.bytesFromBase64)(object.txBytes) : new Uint8Array(),
      mode: (0, _helpers.isSet)(object.mode) ? broadcastModeFromJSON(object.mode) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.txBytes !== undefined && (obj.txBytes = (0, _helpers.base64FromBytes)(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
    message.mode !== undefined && (obj.mode = broadcastModeToJSON(message.mode));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$txBytes, _object$mode;
    var message = createBaseBroadcastTxRequest();
    message.txBytes = (_object$txBytes = object.txBytes) !== null && _object$txBytes !== void 0 ? _object$txBytes : new Uint8Array();
    message.mode = (_object$mode = object.mode) !== null && _object$mode !== void 0 ? _object$mode : 0;
    return message;
  }
};
exports.BroadcastTxRequest = BroadcastTxRequest;
function createBaseBroadcastTxResponse() {
  return {
    txResponse: undefined
  };
}
var BroadcastTxResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.txResponse !== undefined) {
      _abci.TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txResponse = _abci.TxResponse.decode(reader, reader.uint32());
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
      txResponse: (0, _helpers.isSet)(object.txResponse) ? _abci.TxResponse.fromJSON(object.txResponse) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.txResponse !== undefined && (obj.txResponse = message.txResponse ? _abci.TxResponse.toJSON(message.txResponse) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBroadcastTxResponse();
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? _abci.TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  }
};
exports.BroadcastTxResponse = BroadcastTxResponse;
function createBaseSimulateRequest() {
  return {
    tx: undefined,
    txBytes: new Uint8Array()
  };
}
var SimulateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx !== undefined) {
      _tx.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSimulateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = _tx.Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txBytes = reader.bytes();
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
      tx: (0, _helpers.isSet)(object.tx) ? _tx.Tx.fromJSON(object.tx) : undefined,
      txBytes: (0, _helpers.isSet)(object.txBytes) ? (0, _helpers.bytesFromBase64)(object.txBytes) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.tx !== undefined && (obj.tx = message.tx ? _tx.Tx.toJSON(message.tx) : undefined);
    message.txBytes !== undefined && (obj.txBytes = (0, _helpers.base64FromBytes)(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$txBytes2;
    var message = createBaseSimulateRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? _tx.Tx.fromPartial(object.tx) : undefined;
    message.txBytes = (_object$txBytes2 = object.txBytes) !== null && _object$txBytes2 !== void 0 ? _object$txBytes2 : new Uint8Array();
    return message;
  }
};
exports.SimulateRequest = SimulateRequest;
function createBaseSimulateResponse() {
  return {
    gasInfo: undefined,
    result: undefined
  };
}
var SimulateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.gasInfo !== undefined) {
      _abci.GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      _abci.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSimulateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = _abci.GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = _abci.Result.decode(reader, reader.uint32());
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
      gasInfo: (0, _helpers.isSet)(object.gasInfo) ? _abci.GasInfo.fromJSON(object.gasInfo) : undefined,
      result: (0, _helpers.isSet)(object.result) ? _abci.Result.fromJSON(object.result) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? _abci.GasInfo.toJSON(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? _abci.Result.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSimulateResponse();
    message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? _abci.GasInfo.fromPartial(object.gasInfo) : undefined;
    message.result = object.result !== undefined && object.result !== null ? _abci.Result.fromPartial(object.result) : undefined;
    return message;
  }
};
exports.SimulateResponse = SimulateResponse;
function createBaseGetTxRequest() {
  return {
    hash: ""
  };
}
var GetTxRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
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
      hash: (0, _helpers.isSet)(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$hash;
    var message = createBaseGetTxRequest();
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : "";
    return message;
  }
};
exports.GetTxRequest = GetTxRequest;
function createBaseGetTxResponse() {
  return {
    tx: undefined,
    txResponse: undefined
  };
}
var GetTxResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tx !== undefined) {
      _tx.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== undefined) {
      _abci.TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetTxResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = _tx.Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = _abci.TxResponse.decode(reader, reader.uint32());
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
      tx: (0, _helpers.isSet)(object.tx) ? _tx.Tx.fromJSON(object.tx) : undefined,
      txResponse: (0, _helpers.isSet)(object.txResponse) ? _abci.TxResponse.fromJSON(object.txResponse) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.tx !== undefined && (obj.tx = message.tx ? _tx.Tx.toJSON(message.tx) : undefined);
    message.txResponse !== undefined && (obj.txResponse = message.txResponse ? _abci.TxResponse.toJSON(message.txResponse) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetTxResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? _tx.Tx.fromPartial(object.tx) : undefined;
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? _abci.TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  }
};
exports.GetTxResponse = GetTxResponse;
function createBaseGetBlockWithTxsRequest() {
  return {
    height: _helpers.Long.ZERO,
    pagination: undefined
  };
}
var GetBlockWithTxsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
      height: (0, _helpers.isSet)(object.height) ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO,
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.height !== undefined && (obj.height = (message.height || _helpers.Long.ZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetBlockWithTxsRequest();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetBlockWithTxsRequest = GetBlockWithTxsRequest;
function createBaseGetBlockWithTxsResponse() {
  return {
    txs: [],
    blockId: undefined,
    block: undefined,
    pagination: undefined
  };
}
var GetBlockWithTxsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.txs),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _tx.Tx.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.blockId !== undefined) {
      _types.BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(_tx.Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockId = _types.BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = _block.Block.decode(reader, reader.uint32());
          break;
        case 4:
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
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) {
        return _tx.Tx.fromJSON(e);
      }) : [],
      blockId: (0, _helpers.isSet)(object.blockId) ? _types.BlockID.fromJSON(object.blockId) : undefined,
      block: (0, _helpers.isSet)(object.block) ? _block.Block.fromJSON(object.block) : undefined,
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.txs) {
      obj.txs = message.txs.map(function (e) {
        return e ? _tx.Tx.toJSON(e) : undefined;
      });
    } else {
      obj.txs = [];
    }
    message.blockId !== undefined && (obj.blockId = message.blockId ? _types.BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? _block.Block.toJSON(message.block) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$txs2;
    var message = createBaseGetBlockWithTxsResponse();
    message.txs = ((_object$txs2 = object.txs) === null || _object$txs2 === void 0 ? void 0 : _object$txs2.map(function (e) {
      return _tx.Tx.fromPartial(e);
    })) || [];
    message.blockId = object.blockId !== undefined && object.blockId !== null ? _types.BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.GetBlockWithTxsResponse = GetBlockWithTxsResponse;