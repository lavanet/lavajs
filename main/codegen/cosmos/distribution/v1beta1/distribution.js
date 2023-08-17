"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidatorSlashEvents = exports.ValidatorSlashEvent = exports.ValidatorOutstandingRewards = exports.ValidatorHistoricalRewards = exports.ValidatorCurrentRewards = exports.ValidatorAccumulatedCommission = exports.Params = exports.FeePool = exports.DelegatorStartingInfo = exports.DelegationDelegatorReward = exports.CommunityPoolSpendProposalWithDeposit = exports.CommunityPoolSpendProposal = void 0;
var _coin = require("../../base/v1beta1/coin");
var _binary = require("../../../binary");
var _math = require("@cosmjs/math");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** Params defines the set of params for the distribution module. */

/** Params defines the set of params for the distribution module. */

/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */

/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */

/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */

/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */

/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */

/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */

/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */

/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */

/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */

/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */

/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */

/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */

/** FeePool is the global fee pool for distribution. */

/** FeePool is the global fee pool for distribution. */

/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */

/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */

/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */

/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */

/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */

/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */

/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */

/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */

function createBaseParams() {
  return {
    communityTax: "",
    baseProposerReward: "",
    bonusProposerReward: "",
    withdrawAddrEnabled: false
  };
}
var Params = {
  typeUrl: "/cosmos.distribution.v1beta1.Params",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.communityTax !== "") {
      writer.uint32(10).string(_math.Decimal.fromUserInput(message.communityTax, 18).atomics);
    }
    if (message.baseProposerReward !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.baseProposerReward, 18).atomics);
    }
    if (message.bonusProposerReward !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.bonusProposerReward, 18).atomics);
    }
    if (message.withdrawAddrEnabled === true) {
      writer.uint32(32).bool(message.withdrawAddrEnabled);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityTax = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.baseProposerReward = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.bonusProposerReward = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.withdrawAddrEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$communityTax, _object$baseProposerR, _object$bonusProposer, _object$withdrawAddrE;
    var message = createBaseParams();
    message.communityTax = (_object$communityTax = object.communityTax) !== null && _object$communityTax !== void 0 ? _object$communityTax : "";
    message.baseProposerReward = (_object$baseProposerR = object.baseProposerReward) !== null && _object$baseProposerR !== void 0 ? _object$baseProposerR : "";
    message.bonusProposerReward = (_object$bonusProposer = object.bonusProposerReward) !== null && _object$bonusProposer !== void 0 ? _object$bonusProposer : "";
    message.withdrawAddrEnabled = (_object$withdrawAddrE = object.withdrawAddrEnabled) !== null && _object$withdrawAddrE !== void 0 ? _object$withdrawAddrE : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      communityTax: object.community_tax,
      baseProposerReward: object.base_proposer_reward,
      bonusProposerReward: object.bonus_proposer_reward,
      withdrawAddrEnabled: object.withdraw_addr_enabled
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.community_tax = message.communityTax;
    obj.base_proposer_reward = message.baseProposerReward;
    obj.bonus_proposer_reward = message.bonusProposerReward;
    obj.withdraw_addr_enabled = message.withdrawAddrEnabled;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto: function toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
exports.Params = Params;
function createBaseValidatorHistoricalRewards() {
  return {
    cumulativeRewardRatio: [],
    referenceCount: 0
  };
}
var ValidatorHistoricalRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.cumulativeRewardRatio),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.referenceCount !== 0) {
      writer.uint32(16).uint32(message.referenceCount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeRewardRatio.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.referenceCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$cumulativeRew, _object$referenceCoun;
    var message = createBaseValidatorHistoricalRewards();
    message.cumulativeRewardRatio = ((_object$cumulativeRew = object.cumulativeRewardRatio) === null || _object$cumulativeRew === void 0 ? void 0 : _object$cumulativeRew.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    message.referenceCount = (_object$referenceCoun = object.referenceCount) !== null && _object$referenceCoun !== void 0 ? _object$referenceCoun : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      cumulativeRewardRatio: Array.isArray(object === null || object === void 0 ? void 0 : object.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map(function (e) {
        return _coin.DecCoin.fromAmino(e);
      }) : [],
      referenceCount: object.reference_count
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.cumulativeRewardRatio) {
      obj.cumulative_reward_ratio = message.cumulativeRewardRatio.map(function (e) {
        return e ? _coin.DecCoin.toAmino(e) : undefined;
      });
    } else {
      obj.cumulative_reward_ratio = [];
    }
    obj.reference_count = message.referenceCount;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorHistoricalRewards.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewards",
      value: ValidatorHistoricalRewards.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorHistoricalRewards.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorHistoricalRewards.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
      value: ValidatorHistoricalRewards.encode(message).finish()
    };
  }
};
exports.ValidatorHistoricalRewards = ValidatorHistoricalRewards;
function createBaseValidatorCurrentRewards() {
  return {
    rewards: [],
    period: BigInt(0)
  };
}
var ValidatorCurrentRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.rewards),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.period = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$rewards;
    var message = createBaseValidatorCurrentRewards();
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(function (e) {
        return _coin.DecCoin.fromAmino(e);
      }) : [],
      period: BigInt(object.period)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(function (e) {
        return e ? _coin.DecCoin.toAmino(e) : undefined;
      });
    } else {
      obj.rewards = [];
    }
    obj.period = message.period ? message.period.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorCurrentRewards.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewards",
      value: ValidatorCurrentRewards.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorCurrentRewards.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorCurrentRewards.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
      value: ValidatorCurrentRewards.encode(message).finish()
    };
  }
};
exports.ValidatorCurrentRewards = ValidatorCurrentRewards;
function createBaseValidatorAccumulatedCommission() {
  return {
    commission: []
  };
}
var ValidatorAccumulatedCommission = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator3 = _createForOfIteratorHelper(message.commission),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$commission;
    var message = createBaseValidatorAccumulatedCommission();
    message.commission = ((_object$commission = object.commission) === null || _object$commission === void 0 ? void 0 : _object$commission.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      commission: Array.isArray(object === null || object === void 0 ? void 0 : object.commission) ? object.commission.map(function (e) {
        return _coin.DecCoin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.commission) {
      obj.commission = message.commission.map(function (e) {
        return e ? _coin.DecCoin.toAmino(e) : undefined;
      });
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorAccumulatedCommission.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommission",
      value: ValidatorAccumulatedCommission.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorAccumulatedCommission.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorAccumulatedCommission.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
      value: ValidatorAccumulatedCommission.encode(message).finish()
    };
  }
};
exports.ValidatorAccumulatedCommission = ValidatorAccumulatedCommission;
function createBaseValidatorOutstandingRewards() {
  return {
    rewards: []
  };
}
var ValidatorOutstandingRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator4 = _createForOfIteratorHelper(message.rewards),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseValidatorOutstandingRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$rewards2;
    var message = createBaseValidatorOutstandingRewards();
    message.rewards = ((_object$rewards2 = object.rewards) === null || _object$rewards2 === void 0 ? void 0 : _object$rewards2.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(function (e) {
        return _coin.DecCoin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(function (e) {
        return e ? _coin.DecCoin.toAmino(e) : undefined;
      });
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorOutstandingRewards.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewards",
      value: ValidatorOutstandingRewards.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorOutstandingRewards.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorOutstandingRewards.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
      value: ValidatorOutstandingRewards.encode(message).finish()
    };
  }
};
exports.ValidatorOutstandingRewards = ValidatorOutstandingRewards;
function createBaseValidatorSlashEvent() {
  return {
    validatorPeriod: BigInt(0),
    fraction: ""
  };
}
var ValidatorSlashEvent = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.validatorPeriod);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.fraction, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorPeriod = reader.uint64();
          break;
        case 2:
          message.fraction = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fraction;
    var message = createBaseValidatorSlashEvent();
    message.validatorPeriod = object.validatorPeriod !== undefined && object.validatorPeriod !== null ? BigInt(object.validatorPeriod.toString()) : BigInt(0);
    message.fraction = (_object$fraction = object.fraction) !== null && _object$fraction !== void 0 ? _object$fraction : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorPeriod: BigInt(object.validator_period),
      fraction: object.fraction
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_period = message.validatorPeriod ? message.validatorPeriod.toString() : undefined;
    obj.fraction = message.fraction;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorSlashEvent.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorSlashEvent",
      value: ValidatorSlashEvent.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorSlashEvent.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorSlashEvent.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
      value: ValidatorSlashEvent.encode(message).finish()
    };
  }
};
exports.ValidatorSlashEvent = ValidatorSlashEvent;
function createBaseValidatorSlashEvents() {
  return {
    validatorSlashEvents: []
  };
}
var ValidatorSlashEvents = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator5 = _createForOfIteratorHelper(message.validatorSlashEvents),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorSlashEvents.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorSlas;
    var message = createBaseValidatorSlashEvents();
    message.validatorSlashEvents = ((_object$validatorSlas = object.validatorSlashEvents) === null || _object$validatorSlas === void 0 ? void 0 : _object$validatorSlas.map(function (e) {
      return ValidatorSlashEvent.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorSlashEvents: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_slash_events) ? object.validator_slash_events.map(function (e) {
        return ValidatorSlashEvent.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map(function (e) {
        return e ? ValidatorSlashEvent.toAmino(e) : undefined;
      });
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorSlashEvents.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValidatorSlashEvents",
      value: ValidatorSlashEvents.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorSlashEvents.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorSlashEvents.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
      value: ValidatorSlashEvents.encode(message).finish()
    };
  }
};
exports.ValidatorSlashEvents = ValidatorSlashEvents;
function createBaseFeePool() {
  return {
    communityPool: []
  };
}
var FeePool = {
  typeUrl: "/cosmos.distribution.v1beta1.FeePool",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator6 = _createForOfIteratorHelper(message.communityPool),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFeePool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityPool.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$communityPool;
    var message = createBaseFeePool();
    message.communityPool = ((_object$communityPool = object.communityPool) === null || _object$communityPool === void 0 ? void 0 : _object$communityPool.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      communityPool: Array.isArray(object === null || object === void 0 ? void 0 : object.community_pool) ? object.community_pool.map(function (e) {
        return _coin.DecCoin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.communityPool) {
      obj.community_pool = message.communityPool.map(function (e) {
        return e ? _coin.DecCoin.toAmino(e) : undefined;
      });
    } else {
      obj.community_pool = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return FeePool.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/FeePool",
      value: FeePool.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return FeePool.decode(message.value);
  },
  toProto: function toProto(message) {
    return FeePool.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.FeePool",
      value: FeePool.encode(message).finish()
    };
  }
};
exports.FeePool = FeePool;
function createBaseCommunityPoolSpendProposal() {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: []
  };
}
var CommunityPoolSpendProposal = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    var _iterator7 = _createForOfIteratorHelper(message.amount),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _coin.Coin.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
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
    var _object$title, _object$description, _object$recipient, _object$amount;
    var message = createBaseCommunityPoolSpendProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.recipient = (_object$recipient = object.recipient) !== null && _object$recipient !== void 0 ? _object$recipient : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      title: object.title,
      description: object.description,
      recipient: object.recipient,
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.recipient = message.recipient;
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
    return CommunityPoolSpendProposal.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return CommunityPoolSpendProposal.decode(message.value);
  },
  toProto: function toProto(message) {
    return CommunityPoolSpendProposal.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.encode(message).finish()
    };
  }
};
exports.CommunityPoolSpendProposal = CommunityPoolSpendProposal;
function createBaseDelegatorStartingInfo() {
  return {
    previousPeriod: BigInt(0),
    stake: "",
    height: BigInt(0)
  };
}
var DelegatorStartingInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.previousPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.previousPeriod);
    }
    if (message.stake !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.stake, 18).atomics);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousPeriod = reader.uint64();
          break;
        case 2:
          message.stake = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$stake;
    var message = createBaseDelegatorStartingInfo();
    message.previousPeriod = object.previousPeriod !== undefined && object.previousPeriod !== null ? BigInt(object.previousPeriod.toString()) : BigInt(0);
    message.stake = (_object$stake = object.stake) !== null && _object$stake !== void 0 ? _object$stake : "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      previousPeriod: BigInt(object.previous_period),
      stake: object.stake,
      height: BigInt(object.height)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.previous_period = message.previousPeriod ? message.previousPeriod.toString() : undefined;
    obj.stake = message.stake;
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DelegatorStartingInfo.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DelegatorStartingInfo",
      value: DelegatorStartingInfo.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DelegatorStartingInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return DelegatorStartingInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
      value: DelegatorStartingInfo.encode(message).finish()
    };
  }
};
exports.DelegatorStartingInfo = DelegatorStartingInfo;
function createBaseDelegationDelegatorReward() {
  return {
    validatorAddress: "",
    reward: []
  };
}
var DelegationDelegatorReward = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    var _iterator8 = _createForOfIteratorHelper(message.reward),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        _coin.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.reward.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr, _object$reward;
    var message = createBaseDelegationDelegatorReward();
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    message.reward = ((_object$reward = object.reward) === null || _object$reward === void 0 ? void 0 : _object$reward.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddress: object.validator_address,
      reward: Array.isArray(object === null || object === void 0 ? void 0 : object.reward) ? object.reward.map(function (e) {
        return _coin.DecCoin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_address = message.validatorAddress;
    if (message.reward) {
      obj.reward = message.reward.map(function (e) {
        return e ? _coin.DecCoin.toAmino(e) : undefined;
      });
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DelegationDelegatorReward.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DelegationDelegatorReward",
      value: DelegationDelegatorReward.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DelegationDelegatorReward.decode(message.value);
  },
  toProto: function toProto(message) {
    return DelegationDelegatorReward.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
      value: DelegationDelegatorReward.encode(message).finish()
    };
  }
};
exports.DelegationDelegatorReward = DelegationDelegatorReward;
function createBaseCommunityPoolSpendProposalWithDeposit() {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: ""
  };
}
var CommunityPoolSpendProposalWithDeposit = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$title2, _object$description2, _object$recipient2, _object$amount2, _object$deposit;
    var message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.recipient = (_object$recipient2 = object.recipient) !== null && _object$recipient2 !== void 0 ? _object$recipient2 : "";
    message.amount = (_object$amount2 = object.amount) !== null && _object$amount2 !== void 0 ? _object$amount2 : "";
    message.deposit = (_object$deposit = object.deposit) !== null && _object$deposit !== void 0 ? _object$deposit : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      title: object.title,
      description: object.description,
      recipient: object.recipient,
      amount: object.amount,
      deposit: object.deposit
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.recipient = message.recipient;
    obj.amount = message.amount;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return CommunityPoolSpendProposalWithDeposit.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
      value: CommunityPoolSpendProposalWithDeposit.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return CommunityPoolSpendProposalWithDeposit.decode(message.value);
  },
  toProto: function toProto(message) {
    return CommunityPoolSpendProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
      value: CommunityPoolSpendProposalWithDeposit.encode(message).finish()
    };
  }
};
exports.CommunityPoolSpendProposalWithDeposit = CommunityPoolSpendProposalWithDeposit;