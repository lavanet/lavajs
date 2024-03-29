"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidatorSlashEventRecord = exports.ValidatorOutstandingRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.GenesisState = exports.DelegatorWithdrawInfo = exports.DelegatorStartingInfoRecord = void 0;
var _coin = require("../../base/v1beta1/coin");
var _distribution = require("./distribution");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */

/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */

/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */

/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */

/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */

/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */

/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */

/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */

/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */

/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */

/** DelegatorStartingInfoRecord used for import / export via genesis json. */

/** DelegatorStartingInfoRecord used for import / export via genesis json. */

/** ValidatorSlashEventRecord is used for import / export via genesis json. */

/** ValidatorSlashEventRecord is used for import / export via genesis json. */

/** GenesisState defines the distribution module's genesis state. */

/** GenesisState defines the distribution module's genesis state. */

function createBaseDelegatorWithdrawInfo() {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
var DelegatorWithdrawInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
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
    var message = createBaseDelegatorWithdrawInfo();
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
    var message = createBaseDelegatorWithdrawInfo();
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
    return DelegatorWithdrawInfo.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DelegatorWithdrawInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return DelegatorWithdrawInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.encode(message).finish()
    };
  }
};
exports.DelegatorWithdrawInfo = DelegatorWithdrawInfo;
function createBaseValidatorOutstandingRewardsRecord() {
  return {
    validatorAddress: "",
    outstandingRewards: []
  };
}
var ValidatorOutstandingRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    var _iterator = _createForOfIteratorHelper(message.outstandingRewards),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseValidatorOutstandingRewardsRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.outstandingRewards.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr, _object$outstandingRe;
    var message = createBaseValidatorOutstandingRewardsRecord();
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    message.outstandingRewards = ((_object$outstandingRe = object.outstandingRewards) === null || _object$outstandingRe === void 0 ? void 0 : _object$outstandingRe.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddress: object.validator_address,
      outstandingRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstanding_rewards) ? object.outstanding_rewards.map(function (e) {
        return _coin.DecCoin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_address = message.validatorAddress;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(function (e) {
        return e ? _coin.DecCoin.toAmino(e) : undefined;
      });
    } else {
      obj.outstanding_rewards = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorOutstandingRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorOutstandingRewardsRecord.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorOutstandingRewardsRecord.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.encode(message).finish()
    };
  }
};
exports.ValidatorOutstandingRewardsRecord = ValidatorOutstandingRewardsRecord;
function createBaseValidatorAccumulatedCommissionRecord() {
  return {
    validatorAddress: "",
    accumulated: _distribution.ValidatorAccumulatedCommission.fromPartial({})
  };
}
var ValidatorAccumulatedCommissionRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.accumulated !== undefined) {
      _distribution.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.accumulated = _distribution.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
    var message = createBaseValidatorAccumulatedCommissionRecord();
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? _distribution.ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddress: object.validator_address,
      accumulated: object !== null && object !== void 0 && object.accumulated ? _distribution.ValidatorAccumulatedCommission.fromAmino(object.accumulated) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_address = message.validatorAddress;
    obj.accumulated = message.accumulated ? _distribution.ValidatorAccumulatedCommission.toAmino(message.accumulated) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorAccumulatedCommissionRecord.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorAccumulatedCommissionRecord.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorAccumulatedCommissionRecord.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.encode(message).finish()
    };
  }
};
exports.ValidatorAccumulatedCommissionRecord = ValidatorAccumulatedCommissionRecord;
function createBaseValidatorHistoricalRewardsRecord() {
  return {
    validatorAddress: "",
    period: BigInt(0),
    rewards: _distribution.ValidatorHistoricalRewards.fromPartial({})
  };
}
var ValidatorHistoricalRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      _distribution.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorHistoricalRewardsRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.rewards = _distribution.ValidatorHistoricalRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr3;
    var message = createBaseValidatorHistoricalRewardsRecord();
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.rewards = object.rewards !== undefined && object.rewards !== null ? _distribution.ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddress: object.validator_address,
      period: BigInt(object.period),
      rewards: object !== null && object !== void 0 && object.rewards ? _distribution.ValidatorHistoricalRewards.fromAmino(object.rewards) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_address = message.validatorAddress;
    obj.period = message.period ? message.period.toString() : undefined;
    obj.rewards = message.rewards ? _distribution.ValidatorHistoricalRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorHistoricalRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorHistoricalRewardsRecord.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorHistoricalRewardsRecord.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.encode(message).finish()
    };
  }
};
exports.ValidatorHistoricalRewardsRecord = ValidatorHistoricalRewardsRecord;
function createBaseValidatorCurrentRewardsRecord() {
  return {
    validatorAddress: "",
    rewards: _distribution.ValidatorCurrentRewards.fromPartial({})
  };
}
var ValidatorCurrentRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.rewards !== undefined) {
      _distribution.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorCurrentRewardsRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.rewards = _distribution.ValidatorCurrentRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr4;
    var message = createBaseValidatorCurrentRewardsRecord();
    message.validatorAddress = (_object$validatorAddr4 = object.validatorAddress) !== null && _object$validatorAddr4 !== void 0 ? _object$validatorAddr4 : "";
    message.rewards = object.rewards !== undefined && object.rewards !== null ? _distribution.ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddress: object.validator_address,
      rewards: object !== null && object !== void 0 && object.rewards ? _distribution.ValidatorCurrentRewards.fromAmino(object.rewards) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_address = message.validatorAddress;
    obj.rewards = message.rewards ? _distribution.ValidatorCurrentRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorCurrentRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorCurrentRewardsRecord.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorCurrentRewardsRecord.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.encode(message).finish()
    };
  }
};
exports.ValidatorCurrentRewardsRecord = ValidatorCurrentRewardsRecord;
function createBaseDelegatorStartingInfoRecord() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    startingInfo: _distribution.DelegatorStartingInfo.fromPartial({})
  };
}
var DelegatorStartingInfoRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.startingInfo !== undefined) {
      _distribution.DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegatorStartingInfoRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.startingInfo = _distribution.DelegatorStartingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorAddr5;
    var message = createBaseDelegatorStartingInfoRecord();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    message.validatorAddress = (_object$validatorAddr5 = object.validatorAddress) !== null && _object$validatorAddr5 !== void 0 ? _object$validatorAddr5 : "";
    message.startingInfo = object.startingInfo !== undefined && object.startingInfo !== null ? _distribution.DelegatorStartingInfo.fromPartial(object.startingInfo) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      startingInfo: object !== null && object !== void 0 && object.starting_info ? _distribution.DelegatorStartingInfo.fromAmino(object.starting_info) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.starting_info = message.startingInfo ? _distribution.DelegatorStartingInfo.toAmino(message.startingInfo) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DelegatorStartingInfoRecord.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DelegatorStartingInfoRecord.decode(message.value);
  },
  toProto: function toProto(message) {
    return DelegatorStartingInfoRecord.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.encode(message).finish()
    };
  }
};
exports.DelegatorStartingInfoRecord = DelegatorStartingInfoRecord;
function createBaseValidatorSlashEventRecord() {
  return {
    validatorAddress: "",
    height: BigInt(0),
    period: BigInt(0),
    validatorSlashEvent: _distribution.ValidatorSlashEvent.fromPartial({})
  };
}
var ValidatorSlashEventRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(24).uint64(message.period);
    }
    if (message.validatorSlashEvent !== undefined) {
      _distribution.ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorSlashEventRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.period = reader.uint64();
          break;
        case 4:
          message.validatorSlashEvent = _distribution.ValidatorSlashEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr6;
    var message = createBaseValidatorSlashEventRecord();
    message.validatorAddress = (_object$validatorAddr6 = object.validatorAddress) !== null && _object$validatorAddr6 !== void 0 ? _object$validatorAddr6 : "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.validatorSlashEvent = object.validatorSlashEvent !== undefined && object.validatorSlashEvent !== null ? _distribution.ValidatorSlashEvent.fromPartial(object.validatorSlashEvent) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddress: object.validator_address,
      height: BigInt(object.height),
      period: BigInt(object.period),
      validatorSlashEvent: object !== null && object !== void 0 && object.validator_slash_event ? _distribution.ValidatorSlashEvent.fromAmino(object.validator_slash_event) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_address = message.validatorAddress;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.period = message.period ? message.period.toString() : undefined;
    obj.validator_slash_event = message.validatorSlashEvent ? _distribution.ValidatorSlashEvent.toAmino(message.validatorSlashEvent) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorSlashEventRecord.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorSlashEventRecord.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorSlashEventRecord.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.encode(message).finish()
    };
  }
};
exports.ValidatorSlashEventRecord = ValidatorSlashEventRecord;
function createBaseGenesisState() {
  return {
    params: _distribution.Params.fromPartial({}),
    feePool: _distribution.FeePool.fromPartial({}),
    delegatorWithdrawInfos: [],
    previousProposer: "",
    outstandingRewards: [],
    validatorAccumulatedCommissions: [],
    validatorHistoricalRewards: [],
    validatorCurrentRewards: [],
    delegatorStartingInfos: [],
    validatorSlashEvents: []
  };
}
var GenesisState = {
  typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _distribution.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.feePool !== undefined) {
      _distribution.FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.delegatorWithdrawInfos),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.previousProposer !== "") {
      writer.uint32(34).string(message.previousProposer);
    }
    var _iterator3 = _createForOfIteratorHelper(message.outstandingRewards),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        ValidatorOutstandingRewardsRecord.encode(_v, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var _iterator4 = _createForOfIteratorHelper(message.validatorAccumulatedCommissions),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v2 = _step4.value;
        ValidatorAccumulatedCommissionRecord.encode(_v2, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.validatorHistoricalRewards),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v3 = _step5.value;
        ValidatorHistoricalRewardsRecord.encode(_v3, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(message.validatorCurrentRewards),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v4 = _step6.value;
        ValidatorCurrentRewardsRecord.encode(_v4, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    var _iterator7 = _createForOfIteratorHelper(message.delegatorStartingInfos),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _v5 = _step7.value;
        DelegatorStartingInfoRecord.encode(_v5, writer.uint32(74).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    var _iterator8 = _createForOfIteratorHelper(message.validatorSlashEvents),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _v6 = _step8.value;
        ValidatorSlashEventRecord.encode(_v6, writer.uint32(82).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _distribution.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.feePool = _distribution.FeePool.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegatorWithdrawInfos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.previousProposer = reader.string();
          break;
        case 5:
          message.outstandingRewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validatorAccumulatedCommissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.validatorHistoricalRewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.validatorCurrentRewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 9:
          message.delegatorStartingInfos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.validatorSlashEvents.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorWith, _object$previousPropo, _object$outstandingRe2, _object$validatorAccu, _object$validatorHist, _object$validatorCurr, _object$delegatorStar, _object$validatorSlas;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _distribution.Params.fromPartial(object.params) : undefined;
    message.feePool = object.feePool !== undefined && object.feePool !== null ? _distribution.FeePool.fromPartial(object.feePool) : undefined;
    message.delegatorWithdrawInfos = ((_object$delegatorWith = object.delegatorWithdrawInfos) === null || _object$delegatorWith === void 0 ? void 0 : _object$delegatorWith.map(function (e) {
      return DelegatorWithdrawInfo.fromPartial(e);
    })) || [];
    message.previousProposer = (_object$previousPropo = object.previousProposer) !== null && _object$previousPropo !== void 0 ? _object$previousPropo : "";
    message.outstandingRewards = ((_object$outstandingRe2 = object.outstandingRewards) === null || _object$outstandingRe2 === void 0 ? void 0 : _object$outstandingRe2.map(function (e) {
      return ValidatorOutstandingRewardsRecord.fromPartial(e);
    })) || [];
    message.validatorAccumulatedCommissions = ((_object$validatorAccu = object.validatorAccumulatedCommissions) === null || _object$validatorAccu === void 0 ? void 0 : _object$validatorAccu.map(function (e) {
      return ValidatorAccumulatedCommissionRecord.fromPartial(e);
    })) || [];
    message.validatorHistoricalRewards = ((_object$validatorHist = object.validatorHistoricalRewards) === null || _object$validatorHist === void 0 ? void 0 : _object$validatorHist.map(function (e) {
      return ValidatorHistoricalRewardsRecord.fromPartial(e);
    })) || [];
    message.validatorCurrentRewards = ((_object$validatorCurr = object.validatorCurrentRewards) === null || _object$validatorCurr === void 0 ? void 0 : _object$validatorCurr.map(function (e) {
      return ValidatorCurrentRewardsRecord.fromPartial(e);
    })) || [];
    message.delegatorStartingInfos = ((_object$delegatorStar = object.delegatorStartingInfos) === null || _object$delegatorStar === void 0 ? void 0 : _object$delegatorStar.map(function (e) {
      return DelegatorStartingInfoRecord.fromPartial(e);
    })) || [];
    message.validatorSlashEvents = ((_object$validatorSlas = object.validatorSlashEvents) === null || _object$validatorSlas === void 0 ? void 0 : _object$validatorSlas.map(function (e) {
      return ValidatorSlashEventRecord.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _distribution.Params.fromAmino(object.params) : undefined,
      feePool: object !== null && object !== void 0 && object.fee_pool ? _distribution.FeePool.fromAmino(object.fee_pool) : undefined,
      delegatorWithdrawInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map(function (e) {
        return DelegatorWithdrawInfo.fromAmino(e);
      }) : [],
      previousProposer: object.previous_proposer,
      outstandingRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstanding_rewards) ? object.outstanding_rewards.map(function (e) {
        return ValidatorOutstandingRewardsRecord.fromAmino(e);
      }) : [],
      validatorAccumulatedCommissions: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map(function (e) {
        return ValidatorAccumulatedCommissionRecord.fromAmino(e);
      }) : [],
      validatorHistoricalRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_historical_rewards) ? object.validator_historical_rewards.map(function (e) {
        return ValidatorHistoricalRewardsRecord.fromAmino(e);
      }) : [],
      validatorCurrentRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_current_rewards) ? object.validator_current_rewards.map(function (e) {
        return ValidatorCurrentRewardsRecord.fromAmino(e);
      }) : [],
      delegatorStartingInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_starting_infos) ? object.delegator_starting_infos.map(function (e) {
        return DelegatorStartingInfoRecord.fromAmino(e);
      }) : [],
      validatorSlashEvents: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_slash_events) ? object.validator_slash_events.map(function (e) {
        return ValidatorSlashEventRecord.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _distribution.Params.toAmino(message.params) : undefined;
    obj.fee_pool = message.feePool ? _distribution.FeePool.toAmino(message.feePool) : undefined;
    if (message.delegatorWithdrawInfos) {
      obj.delegator_withdraw_infos = message.delegatorWithdrawInfos.map(function (e) {
        return e ? DelegatorWithdrawInfo.toAmino(e) : undefined;
      });
    } else {
      obj.delegator_withdraw_infos = [];
    }
    obj.previous_proposer = message.previousProposer;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(function (e) {
        return e ? ValidatorOutstandingRewardsRecord.toAmino(e) : undefined;
      });
    } else {
      obj.outstanding_rewards = [];
    }
    if (message.validatorAccumulatedCommissions) {
      obj.validator_accumulated_commissions = message.validatorAccumulatedCommissions.map(function (e) {
        return e ? ValidatorAccumulatedCommissionRecord.toAmino(e) : undefined;
      });
    } else {
      obj.validator_accumulated_commissions = [];
    }
    if (message.validatorHistoricalRewards) {
      obj.validator_historical_rewards = message.validatorHistoricalRewards.map(function (e) {
        return e ? ValidatorHistoricalRewardsRecord.toAmino(e) : undefined;
      });
    } else {
      obj.validator_historical_rewards = [];
    }
    if (message.validatorCurrentRewards) {
      obj.validator_current_rewards = message.validatorCurrentRewards.map(function (e) {
        return e ? ValidatorCurrentRewardsRecord.toAmino(e) : undefined;
      });
    } else {
      obj.validator_current_rewards = [];
    }
    if (message.delegatorStartingInfos) {
      obj.delegator_starting_infos = message.delegatorStartingInfos.map(function (e) {
        return e ? DelegatorStartingInfoRecord.toAmino(e) : undefined;
      });
    } else {
      obj.delegator_starting_infos = [];
    }
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map(function (e) {
        return e ? ValidatorSlashEventRecord.toAmino(e) : undefined;
      });
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto: function toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
exports.GenesisState = GenesisState;