"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgWithdrawValidatorCommissionResponse = exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorRewardResponse = exports.MsgWithdrawDelegatorReward = exports.MsgSetWithdrawAddressResponse = exports.MsgSetWithdrawAddress = exports.MsgFundCommunityPoolResponse = exports.MsgFundCommunityPool = void 0;
var _coin = require("../../base/v1beta1/coin");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */

/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */

/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */

/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */

/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */

/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */

/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */

/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */

/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */

/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */

/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */

/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */

/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */

/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */

function createBaseMsgSetWithdrawAddress() {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
var MsgSetWithdrawAddress = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetWithdrawAddress();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr, _object$withdrawAddre;
    var message = createBaseMsgSetWithdrawAddress();
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.withdrawAddress = (_object$withdrawAddre = object.withdrawAddress) !== null && _object$withdrawAddre !== void 0 ? _object$withdrawAddre : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address,
      withdrawAddress: object.withdraw_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgSetWithdrawAddress.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgModifyWithdrawAddress",
      value: MsgSetWithdrawAddress.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSetWithdrawAddress.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSetWithdrawAddress.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.encode(message).finish()
    };
  }
};
exports.MsgSetWithdrawAddress = MsgSetWithdrawAddress;
function createBaseMsgSetWithdrawAddressResponse() {
  return {};
}
var MsgSetWithdrawAddressResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetWithdrawAddressResponse();
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
    var message = createBaseMsgSetWithdrawAddressResponse();
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
    return MsgSetWithdrawAddressResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSetWithdrawAddressResponse",
      value: MsgSetWithdrawAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSetWithdrawAddressResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSetWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
      value: MsgSetWithdrawAddressResponse.encode(message).finish()
    };
  }
};
exports.MsgSetWithdrawAddressResponse = MsgSetWithdrawAddressResponse;
function createBaseMsgWithdrawDelegatorReward() {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
var MsgWithdrawDelegatorReward = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawDelegatorReward();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorAddr;
    var message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgWithdrawDelegatorReward.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawDelegationReward",
      value: MsgWithdrawDelegatorReward.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgWithdrawDelegatorReward.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgWithdrawDelegatorReward.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.encode(message).finish()
    };
  }
};
exports.MsgWithdrawDelegatorReward = MsgWithdrawDelegatorReward;
function createBaseMsgWithdrawDelegatorRewardResponse() {
  return {
    amount: []
  };
}
var MsgWithdrawDelegatorRewardResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.amount),
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
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawDelegatorRewardResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$amount;
    var message = createBaseMsgWithdrawDelegatorRewardResponse();
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgWithdrawDelegatorRewardResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse",
      value: MsgWithdrawDelegatorRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgWithdrawDelegatorRewardResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgWithdrawDelegatorRewardResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
      value: MsgWithdrawDelegatorRewardResponse.encode(message).finish()
    };
  }
};
exports.MsgWithdrawDelegatorRewardResponse = MsgWithdrawDelegatorRewardResponse;
function createBaseMsgWithdrawValidatorCommission() {
  return {
    validatorAddress: ""
  };
}
var MsgWithdrawValidatorCommission = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawValidatorCommission();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr2;
    var message = createBaseMsgWithdrawValidatorCommission();
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddress: object.validator_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgWithdrawValidatorCommission.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgWithdrawValidatorCommission.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgWithdrawValidatorCommission.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.encode(message).finish()
    };
  }
};
exports.MsgWithdrawValidatorCommission = MsgWithdrawValidatorCommission;
function createBaseMsgWithdrawValidatorCommissionResponse() {
  return {
    amount: []
  };
}
var MsgWithdrawValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.amount),
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
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawValidatorCommissionResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$amount2;
    var message = createBaseMsgWithdrawValidatorCommissionResponse();
    message.amount = ((_object$amount2 = object.amount) === null || _object$amount2 === void 0 ? void 0 : _object$amount2.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgWithdrawValidatorCommissionResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse",
      value: MsgWithdrawValidatorCommissionResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgWithdrawValidatorCommissionResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgWithdrawValidatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
      value: MsgWithdrawValidatorCommissionResponse.encode(message).finish()
    };
  }
};
exports.MsgWithdrawValidatorCommissionResponse = MsgWithdrawValidatorCommissionResponse;
function createBaseMsgFundCommunityPool() {
  return {
    amount: [],
    depositor: ""
  };
}
var MsgFundCommunityPool = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator3 = _createForOfIteratorHelper(message.amount),
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
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgFundCommunityPool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$amount3, _object$depositor;
    var message = createBaseMsgFundCommunityPool();
    message.amount = ((_object$amount3 = object.amount) === null || _object$amount3 === void 0 ? void 0 : _object$amount3.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.depositor = (_object$depositor = object.depositor) !== null && _object$depositor !== void 0 ? _object$depositor : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : [],
      depositor: object.depositor
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.amount) {
      obj.amount = message.amount.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.amount = [];
    }
    obj.depositor = message.depositor;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgFundCommunityPool.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgFundCommunityPool",
      value: MsgFundCommunityPool.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgFundCommunityPool.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgFundCommunityPool.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
      value: MsgFundCommunityPool.encode(message).finish()
    };
  }
};
exports.MsgFundCommunityPool = MsgFundCommunityPool;
function createBaseMsgFundCommunityPoolResponse() {
  return {};
}
var MsgFundCommunityPoolResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgFundCommunityPoolResponse();
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
    var message = createBaseMsgFundCommunityPoolResponse();
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
    return MsgFundCommunityPoolResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgFundCommunityPoolResponse",
      value: MsgFundCommunityPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgFundCommunityPoolResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgFundCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
      value: MsgFundCommunityPoolResponse.encode(message).finish()
    };
  }
};
exports.MsgFundCommunityPoolResponse = MsgFundCommunityPoolResponse;