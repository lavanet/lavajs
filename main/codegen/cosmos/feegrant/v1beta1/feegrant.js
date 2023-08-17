"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeriodicAllowance = exports.Grant = exports.BasicAllowance = exports.AllowedMsgAllowance = void 0;
var _coin = require("../../base/v1beta1/coin");
var _timestamp = require("../../../google/protobuf/timestamp");
var _duration = require("../../../google/protobuf/duration");
var _any = require("../../../google/protobuf/any");
var _binary = require("../../../binary");
var _helpers = require("../../../helpers");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */

/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */

/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */

/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */

/** AllowedMsgAllowance creates allowance only for specified message types. */

/** AllowedMsgAllowance creates allowance only for specified message types. */

/** Grant is stored in the KVStore to record a grant with full context */

/** Grant is stored in the KVStore to record a grant with full context */

function createBaseBasicAllowance() {
  return {
    spendLimit: [],
    expiration: new Date()
  };
}
var BasicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.spendLimit),
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
    if (message.expiration !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBasicAllowance();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.expiration = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$spendLimit, _object$expiration;
    var message = createBaseBasicAllowance();
    message.spendLimit = ((_object$spendLimit = object.spendLimit) === null || _object$spendLimit === void 0 ? void 0 : _object$spendLimit.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.expiration = (_object$expiration = object.expiration) !== null && _object$expiration !== void 0 ? _object$expiration : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      spendLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.spend_limit) ? object.spend_limit.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : [],
      expiration: object.expiration
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.spend_limit = [];
    }
    obj.expiration = message.expiration;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return BasicAllowance.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/BasicAllowance",
      value: BasicAllowance.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return BasicAllowance.decode(message.value);
  },
  toProto: function toProto(message) {
    return BasicAllowance.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
      value: BasicAllowance.encode(message).finish()
    };
  }
};
exports.BasicAllowance = BasicAllowance;
function createBasePeriodicAllowance() {
  return {
    basic: BasicAllowance.fromPartial({}),
    period: _duration.Duration.fromPartial({}),
    periodSpendLimit: [],
    periodCanSpend: [],
    periodReset: new Date()
  };
}
var PeriodicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.basic !== undefined) {
      BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== undefined) {
      _duration.Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.periodSpendLimit),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.periodCanSpend),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        _coin.Coin.encode(_v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.periodReset !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.periodReset), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePeriodicAllowance();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basic = BasicAllowance.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.periodSpendLimit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.periodCanSpend.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.periodReset = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$periodSpendLi, _object$periodCanSpen, _object$periodReset;
    var message = createBasePeriodicAllowance();
    message.basic = object.basic !== undefined && object.basic !== null ? BasicAllowance.fromPartial(object.basic) : undefined;
    message.period = object.period !== undefined && object.period !== null ? _duration.Duration.fromPartial(object.period) : undefined;
    message.periodSpendLimit = ((_object$periodSpendLi = object.periodSpendLimit) === null || _object$periodSpendLi === void 0 ? void 0 : _object$periodSpendLi.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.periodCanSpend = ((_object$periodCanSpen = object.periodCanSpend) === null || _object$periodCanSpen === void 0 ? void 0 : _object$periodCanSpen.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.periodReset = (_object$periodReset = object.periodReset) !== null && _object$periodReset !== void 0 ? _object$periodReset : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      basic: object !== null && object !== void 0 && object.basic ? BasicAllowance.fromAmino(object.basic) : undefined,
      period: object !== null && object !== void 0 && object.period ? _duration.Duration.fromAmino(object.period) : undefined,
      periodSpendLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.period_spend_limit) ? object.period_spend_limit.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : [],
      periodCanSpend: Array.isArray(object === null || object === void 0 ? void 0 : object.period_can_spend) ? object.period_can_spend.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : [],
      periodReset: object.period_reset
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.basic = message.basic ? BasicAllowance.toAmino(message.basic) : undefined;
    obj.period = message.period ? _duration.Duration.toAmino(message.period) : undefined;
    if (message.periodSpendLimit) {
      obj.period_spend_limit = message.periodSpendLimit.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.period_spend_limit = [];
    }
    if (message.periodCanSpend) {
      obj.period_can_spend = message.periodCanSpend.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.period_can_spend = [];
    }
    obj.period_reset = message.periodReset;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PeriodicAllowance.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PeriodicAllowance",
      value: PeriodicAllowance.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PeriodicAllowance.decode(message.value);
  },
  toProto: function toProto(message) {
    return PeriodicAllowance.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
      value: PeriodicAllowance.encode(message).finish()
    };
  }
};
exports.PeriodicAllowance = PeriodicAllowance;
function createBaseAllowedMsgAllowance() {
  return {
    allowance: _any.Any.fromPartial({}),
    allowedMessages: []
  };
}
var AllowedMsgAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.allowance !== undefined) {
      _any.Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    var _iterator4 = _createForOfIteratorHelper(message.allowedMessages),
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
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAllowedMsgAllowance();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = _any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowedMessages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$allowedMessag;
    var message = createBaseAllowedMsgAllowance();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? _any.Any.fromPartial(object.allowance) : undefined;
    message.allowedMessages = ((_object$allowedMessag = object.allowedMessages) === null || _object$allowedMessag === void 0 ? void 0 : _object$allowedMessag.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      allowance: object !== null && object !== void 0 && object.allowance ? _any.Any.fromAmino(object.allowance) : undefined,
      allowedMessages: Array.isArray(object === null || object === void 0 ? void 0 : object.allowed_messages) ? object.allowed_messages.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.allowance = message.allowance ? _any.Any.toAmino(message.allowance) : undefined;
    if (message.allowedMessages) {
      obj.allowed_messages = message.allowedMessages.map(function (e) {
        return e;
      });
    } else {
      obj.allowed_messages = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return AllowedMsgAllowance.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AllowedMsgAllowance",
      value: AllowedMsgAllowance.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return AllowedMsgAllowance.decode(message.value);
  },
  toProto: function toProto(message) {
    return AllowedMsgAllowance.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
      value: AllowedMsgAllowance.encode(message).finish()
    };
  }
};
exports.AllowedMsgAllowance = AllowedMsgAllowance;
function createBaseGrant() {
  return {
    granter: "",
    grantee: "",
    allowance: _any.Any.fromPartial({})
  };
}
var Grant = {
  typeUrl: "/cosmos.feegrant.v1beta1.Grant",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      _any.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGrant();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = _any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$granter, _object$grantee;
    var message = createBaseGrant();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? _any.Any.fromPartial(object.allowance) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      granter: object.granter,
      grantee: object.grantee,
      allowance: object !== null && object !== void 0 && object.allowance ? _any.Any.fromAmino(object.allowance) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.allowance = message.allowance ? _any.Any.toAmino(message.allowance) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Grant.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Grant",
      value: Grant.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Grant.decode(message.value);
  },
  toProto: function toProto(message) {
    return Grant.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  }
};
exports.Grant = Grant;