"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUnstakeProviderResponse = exports.MsgUnstakeProvider = exports.MsgUnfreezeProviderResponse = exports.MsgUnfreezeProvider = exports.MsgStakeProviderResponse = exports.MsgStakeProvider = exports.MsgRelayPaymentResponse = exports.MsgRelayPayment = exports.MsgFreezeProviderResponse = exports.MsgFreezeProvider = void 0;
var _coin = require("../cosmos/base/v1beta1/coin");
var _endpoint = require("../epochstorage/endpoint");
var _relay = require("./relay");
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseMsgStakeProvider() {
  return {
    creator: "",
    chainID: "",
    amount: undefined,
    endpoints: [],
    geolocation: _helpers.Long.UZERO,
    moniker: ""
  };
}
var MsgStakeProvider = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.amount !== undefined) {
      _coin.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.endpoints),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _endpoint.Endpoint.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(40).uint64(message.geolocation);
    }
    if (message.moniker !== "") {
      writer.uint32(50).string(message.moniker);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStakeProvider();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.amount = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.endpoints.push(_endpoint.Endpoint.decode(reader, reader.uint32()));
          break;
        case 5:
          message.geolocation = reader.uint64();
          break;
        case 6:
          message.moniker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator, _object$chainID, _object$endpoints, _object$moniker;
    var message = createBaseMsgStakeProvider();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    message.endpoints = ((_object$endpoints = object.endpoints) === null || _object$endpoints === void 0 ? void 0 : _object$endpoints.map(function (e) {
      return _endpoint.Endpoint.fromPartial(e);
    })) || [];
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? _helpers.Long.fromValue(object.geolocation) : _helpers.Long.UZERO;
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    return message;
  }
};
exports.MsgStakeProvider = MsgStakeProvider;
function createBaseMsgStakeProviderResponse() {
  return {};
}
var MsgStakeProviderResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgStakeProviderResponse();
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
    var message = createBaseMsgStakeProviderResponse();
    return message;
  }
};
exports.MsgStakeProviderResponse = MsgStakeProviderResponse;
function createBaseMsgUnstakeProvider() {
  return {
    creator: "",
    chainID: ""
  };
}
var MsgUnstakeProvider = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUnstakeProvider();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$chainID2;
    var message = createBaseMsgUnstakeProvider();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.chainID = (_object$chainID2 = object.chainID) !== null && _object$chainID2 !== void 0 ? _object$chainID2 : "";
    return message;
  }
};
exports.MsgUnstakeProvider = MsgUnstakeProvider;
function createBaseMsgUnstakeProviderResponse() {
  return {};
}
var MsgUnstakeProviderResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUnstakeProviderResponse();
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
    var message = createBaseMsgUnstakeProviderResponse();
    return message;
  }
};
exports.MsgUnstakeProviderResponse = MsgUnstakeProviderResponse;
function createBaseMsgRelayPayment() {
  return {
    creator: "",
    relays: [],
    descriptionString: ""
  };
}
var MsgRelayPayment = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    var _iterator2 = _createForOfIteratorHelper(message.relays),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _relay.RelaySession.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.descriptionString !== "") {
      writer.uint32(34).string(message.descriptionString);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRelayPayment();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.relays.push(_relay.RelaySession.decode(reader, reader.uint32()));
          break;
        case 4:
          message.descriptionString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator3, _object$relays, _object$descriptionSt;
    var message = createBaseMsgRelayPayment();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.relays = ((_object$relays = object.relays) === null || _object$relays === void 0 ? void 0 : _object$relays.map(function (e) {
      return _relay.RelaySession.fromPartial(e);
    })) || [];
    message.descriptionString = (_object$descriptionSt = object.descriptionString) !== null && _object$descriptionSt !== void 0 ? _object$descriptionSt : "";
    return message;
  }
};
exports.MsgRelayPayment = MsgRelayPayment;
function createBaseMsgRelayPaymentResponse() {
  return {};
}
var MsgRelayPaymentResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRelayPaymentResponse();
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
    var message = createBaseMsgRelayPaymentResponse();
    return message;
  }
};
exports.MsgRelayPaymentResponse = MsgRelayPaymentResponse;
function createBaseMsgFreezeProvider() {
  return {
    creator: "",
    chainIds: [],
    reason: ""
  };
}
var MsgFreezeProvider = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    var _iterator3 = _createForOfIteratorHelper(message.chainIds),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgFreezeProvider();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainIds.push(reader.string());
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator4, _object$chainIds, _object$reason;
    var message = createBaseMsgFreezeProvider();
    message.creator = (_object$creator4 = object.creator) !== null && _object$creator4 !== void 0 ? _object$creator4 : "";
    message.chainIds = ((_object$chainIds = object.chainIds) === null || _object$chainIds === void 0 ? void 0 : _object$chainIds.map(function (e) {
      return e;
    })) || [];
    message.reason = (_object$reason = object.reason) !== null && _object$reason !== void 0 ? _object$reason : "";
    return message;
  }
};
exports.MsgFreezeProvider = MsgFreezeProvider;
function createBaseMsgFreezeProviderResponse() {
  return {};
}
var MsgFreezeProviderResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgFreezeProviderResponse();
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
    var message = createBaseMsgFreezeProviderResponse();
    return message;
  }
};
exports.MsgFreezeProviderResponse = MsgFreezeProviderResponse;
function createBaseMsgUnfreezeProvider() {
  return {
    creator: "",
    chainIds: []
  };
}
var MsgUnfreezeProvider = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    var _iterator4 = _createForOfIteratorHelper(message.chainIds),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUnfreezeProvider();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator5, _object$chainIds2;
    var message = createBaseMsgUnfreezeProvider();
    message.creator = (_object$creator5 = object.creator) !== null && _object$creator5 !== void 0 ? _object$creator5 : "";
    message.chainIds = ((_object$chainIds2 = object.chainIds) === null || _object$chainIds2 === void 0 ? void 0 : _object$chainIds2.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.MsgUnfreezeProvider = MsgUnfreezeProvider;
function createBaseMsgUnfreezeProviderResponse() {
  return {};
}
var MsgUnfreezeProviderResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUnfreezeProviderResponse();
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
    var message = createBaseMsgUnfreezeProviderResponse();
    return message;
  }
};
exports.MsgUnfreezeProviderResponse = MsgUnfreezeProviderResponse;