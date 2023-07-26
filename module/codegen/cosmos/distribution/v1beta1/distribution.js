import { DecCoin, Coin } from "../../base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.communityTax !== "") {
      writer.uint32(10).string(message.communityTax);
    }
    if (message.baseProposerReward !== "") {
      writer.uint32(18).string(message.baseProposerReward);
    }
    if (message.bonusProposerReward !== "") {
      writer.uint32(26).string(message.bonusProposerReward);
    }
    if (message.withdrawAddrEnabled === true) {
      writer.uint32(32).bool(message.withdrawAddrEnabled);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityTax = reader.string();
          break;
        case 2:
          message.baseProposerReward = reader.string();
          break;
        case 3:
          message.bonusProposerReward = reader.string();
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
  fromPartial(object) {
    var _object$communityTax, _object$baseProposerR, _object$bonusProposer, _object$withdrawAddrE;
    const message = createBaseParams();
    message.communityTax = (_object$communityTax = object.communityTax) !== null && _object$communityTax !== void 0 ? _object$communityTax : "";
    message.baseProposerReward = (_object$baseProposerR = object.baseProposerReward) !== null && _object$baseProposerR !== void 0 ? _object$baseProposerR : "";
    message.bonusProposerReward = (_object$bonusProposer = object.bonusProposerReward) !== null && _object$bonusProposer !== void 0 ? _object$bonusProposer : "";
    message.withdrawAddrEnabled = (_object$withdrawAddrE = object.withdrawAddrEnabled) !== null && _object$withdrawAddrE !== void 0 ? _object$withdrawAddrE : false;
    return message;
  }
};
function createBaseValidatorHistoricalRewards() {
  return {
    cumulativeRewardRatio: [],
    referenceCount: 0
  };
}
export const ValidatorHistoricalRewards = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.cumulativeRewardRatio) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.referenceCount !== 0) {
      writer.uint32(16).uint32(message.referenceCount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeRewardRatio.push(DecCoin.decode(reader, reader.uint32()));
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
  fromPartial(object) {
    var _object$cumulativeRew, _object$referenceCoun;
    const message = createBaseValidatorHistoricalRewards();
    message.cumulativeRewardRatio = ((_object$cumulativeRew = object.cumulativeRewardRatio) === null || _object$cumulativeRew === void 0 ? void 0 : _object$cumulativeRew.map(e => DecCoin.fromPartial(e))) || [];
    message.referenceCount = (_object$referenceCoun = object.referenceCount) !== null && _object$referenceCoun !== void 0 ? _object$referenceCoun : 0;
    return message;
  }
};
function createBaseValidatorCurrentRewards() {
  return {
    rewards: [],
    period: Long.UZERO
  };
}
export const ValidatorCurrentRewards = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rewards) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
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
  fromPartial(object) {
    var _object$rewards;
    const message = createBaseValidatorCurrentRewards();
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map(e => DecCoin.fromPartial(e))) || [];
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    return message;
  }
};
function createBaseValidatorAccumulatedCommission() {
  return {
    commission: []
  };
}
export const ValidatorAccumulatedCommission = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.commission) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$commission;
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = ((_object$commission = object.commission) === null || _object$commission === void 0 ? void 0 : _object$commission.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseValidatorOutstandingRewards() {
  return {
    rewards: []
  };
}
export const ValidatorOutstandingRewards = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.rewards) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$rewards2;
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = ((_object$rewards2 = object.rewards) === null || _object$rewards2 === void 0 ? void 0 : _object$rewards2.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseValidatorSlashEvent() {
  return {
    validatorPeriod: Long.UZERO,
    fraction: ""
  };
}
export const ValidatorSlashEvent = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.validatorPeriod.isZero()) {
      writer.uint32(8).uint64(message.validatorPeriod);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(message.fraction);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorPeriod = reader.uint64();
          break;
        case 2:
          message.fraction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$fraction;
    const message = createBaseValidatorSlashEvent();
    message.validatorPeriod = object.validatorPeriod !== undefined && object.validatorPeriod !== null ? Long.fromValue(object.validatorPeriod) : Long.UZERO;
    message.fraction = (_object$fraction = object.fraction) !== null && _object$fraction !== void 0 ? _object$fraction : "";
    return message;
  }
};
function createBaseValidatorSlashEvents() {
  return {
    validatorSlashEvents: []
  };
}
export const ValidatorSlashEvents = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$validatorSlas;
    const message = createBaseValidatorSlashEvents();
    message.validatorSlashEvents = ((_object$validatorSlas = object.validatorSlashEvents) === null || _object$validatorSlas === void 0 ? void 0 : _object$validatorSlas.map(e => ValidatorSlashEvent.fromPartial(e))) || [];
    return message;
  }
};
function createBaseFeePool() {
  return {
    communityPool: []
  };
}
export const FeePool = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.communityPool) {
      DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityPool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$communityPool;
    const message = createBaseFeePool();
    message.communityPool = ((_object$communityPool = object.communityPool) === null || _object$communityPool === void 0 ? void 0 : _object$communityPool.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCommunityPoolSpendProposal() {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: []
  };
}
export const CommunityPoolSpendProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$recipient, _object$amount;
    const message = createBaseCommunityPoolSpendProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.recipient = (_object$recipient = object.recipient) !== null && _object$recipient !== void 0 ? _object$recipient : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseDelegatorStartingInfo() {
  return {
    previousPeriod: Long.UZERO,
    stake: "",
    height: Long.UZERO
  };
}
export const DelegatorStartingInfo = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.previousPeriod.isZero()) {
      writer.uint32(8).uint64(message.previousPeriod);
    }
    if (message.stake !== "") {
      writer.uint32(18).string(message.stake);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousPeriod = reader.uint64();
          break;
        case 2:
          message.stake = reader.string();
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
  fromPartial(object) {
    var _object$stake;
    const message = createBaseDelegatorStartingInfo();
    message.previousPeriod = object.previousPeriod !== undefined && object.previousPeriod !== null ? Long.fromValue(object.previousPeriod) : Long.UZERO;
    message.stake = (_object$stake = object.stake) !== null && _object$stake !== void 0 ? _object$stake : "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  }
};
function createBaseDelegationDelegatorReward() {
  return {
    validatorAddress: "",
    reward: []
  };
}
export const DelegationDelegatorReward = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.reward) {
      DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$validatorAddr, _object$reward;
    const message = createBaseDelegationDelegatorReward();
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    message.reward = ((_object$reward = object.reward) === null || _object$reward === void 0 ? void 0 : _object$reward.map(e => DecCoin.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: ""
  };
}
export const CommunityPoolSpendProposalWithDeposit = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$title2, _object$description2, _object$recipient2, _object$amount2, _object$deposit;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.recipient = (_object$recipient2 = object.recipient) !== null && _object$recipient2 !== void 0 ? _object$recipient2 : "";
    message.amount = (_object$amount2 = object.amount) !== null && _object$amount2 !== void 0 ? _object$amount2 : "";
    message.deposit = (_object$deposit = object.deposit) !== null && _object$deposit !== void 0 ? _object$deposit : "";
    return message;
  }
};