"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validator = exports.ValAddresses = exports.UnbondingDelegationEntry = exports.UnbondingDelegation = exports.RedelegationResponse = exports.RedelegationEntryResponse = exports.RedelegationEntry = exports.Redelegation = exports.Pool = exports.Params = exports.HistoricalInfo = exports.Description = exports.DelegationResponse = exports.Delegation = exports.DVVTriplets = exports.DVVTriplet = exports.DVPairs = exports.DVPair = exports.CommissionRates = exports.Commission = exports.BondStatusSDKType = exports.BondStatus = void 0;
exports.bondStatusFromJSON = bondStatusFromJSON;
exports.bondStatusToJSON = bondStatusToJSON;
var _types = require("../../../tendermint/types/types");
var _timestamp = require("../../../google/protobuf/timestamp");
var _any = require("../../../google/protobuf/any");
var _duration = require("../../../google/protobuf/duration");
var _coin = require("../../base/v1beta1/coin");
var _binary = require("../../../binary");
var _math = require("@cosmjs/math");
var _helpers = require("../../../helpers");
var _encoding = require("@cosmjs/encoding");
var _amino = require("@cosmjs/amino");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** BondStatus is the status of a validator. */
var BondStatus = /*#__PURE__*/function (BondStatus) {
  BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
  BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
  BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
  BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
  BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BondStatus;
}({});
exports.BondStatus = BondStatus;
var BondStatusSDKType = BondStatus;
exports.BondStatusSDKType = BondStatusSDKType;
function bondStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}
function bondStatusToJSON(object) {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    case BondStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */

/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */

/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */

/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */

/** Commission defines commission parameters for a given validator. */

/** Commission defines commission parameters for a given validator. */

/** Description defines a validator description. */

/** Description defines a validator description. */

/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */

/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */

/** ValAddresses defines a repeated set of validator addresses. */

/** ValAddresses defines a repeated set of validator addresses. */

/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */

/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */

/** DVPairs defines an array of DVPair objects. */

/** DVPairs defines an array of DVPair objects. */

/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */

/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */

/** DVVTriplets defines an array of DVVTriplet objects. */

/** DVVTriplets defines an array of DVVTriplet objects. */

/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */

/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */

/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */

/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */

/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */

/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */

/** RedelegationEntry defines a redelegation object with relevant metadata. */

/** RedelegationEntry defines a redelegation object with relevant metadata. */

/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */

/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */

/** Params defines the parameters for the staking module. */

/** Params defines the parameters for the staking module. */

/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */

/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */

/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */

/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */

/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */

/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */

/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */

/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */

function createBaseHistoricalInfo() {
  return {
    header: _types.Header.fromPartial({}),
    valset: []
  };
}
var HistoricalInfo = {
  typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.header !== undefined) {
      _types.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.valset),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Validator.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = _types.Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$valset;
    var message = createBaseHistoricalInfo();
    message.header = object.header !== undefined && object.header !== null ? _types.Header.fromPartial(object.header) : undefined;
    message.valset = ((_object$valset = object.valset) === null || _object$valset === void 0 ? void 0 : _object$valset.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      header: object !== null && object !== void 0 && object.header ? _types.Header.fromAmino(object.header) : undefined,
      valset: Array.isArray(object === null || object === void 0 ? void 0 : object.valset) ? object.valset.map(function (e) {
        return Validator.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.header = message.header ? _types.Header.toAmino(message.header) : undefined;
    if (message.valset) {
      obj.valset = message.valset.map(function (e) {
        return e ? Validator.toAmino(e) : undefined;
      });
    } else {
      obj.valset = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return HistoricalInfo.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/HistoricalInfo",
      value: HistoricalInfo.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return HistoricalInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return HistoricalInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
      value: HistoricalInfo.encode(message).finish()
    };
  }
};
exports.HistoricalInfo = HistoricalInfo;
function createBaseCommissionRates() {
  return {
    rate: "",
    maxRate: "",
    maxChangeRate: ""
  };
}
var CommissionRates = {
  typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.rate !== "") {
      writer.uint32(10).string(_math.Decimal.fromUserInput(message.rate, 18).atomics);
    }
    if (message.maxRate !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.maxRate, 18).atomics);
    }
    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.maxChangeRate, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommissionRates();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.maxRate = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.maxChangeRate = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$rate, _object$maxRate, _object$maxChangeRate;
    var message = createBaseCommissionRates();
    message.rate = (_object$rate = object.rate) !== null && _object$rate !== void 0 ? _object$rate : "";
    message.maxRate = (_object$maxRate = object.maxRate) !== null && _object$maxRate !== void 0 ? _object$maxRate : "";
    message.maxChangeRate = (_object$maxChangeRate = object.maxChangeRate) !== null && _object$maxChangeRate !== void 0 ? _object$maxChangeRate : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      rate: object.rate,
      maxRate: object.max_rate,
      maxChangeRate: object.max_change_rate
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.rate = message.rate;
    obj.max_rate = message.maxRate;
    obj.max_change_rate = message.maxChangeRate;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return CommissionRates.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommissionRates",
      value: CommissionRates.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return CommissionRates.decode(message.value);
  },
  toProto: function toProto(message) {
    return CommissionRates.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
      value: CommissionRates.encode(message).finish()
    };
  }
};
exports.CommissionRates = CommissionRates;
function createBaseCommission() {
  return {
    commissionRates: CommissionRates.fromPartial({}),
    updateTime: new Date()
  };
}
var Commission = {
  typeUrl: "/cosmos.staking.v1beta1.Commission",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.commissionRates !== undefined) {
      CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.updateTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommission();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$updateTime;
    var message = createBaseCommission();
    message.commissionRates = object.commissionRates !== undefined && object.commissionRates !== null ? CommissionRates.fromPartial(object.commissionRates) : undefined;
    message.updateTime = (_object$updateTime = object.updateTime) !== null && _object$updateTime !== void 0 ? _object$updateTime : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      commissionRates: object !== null && object !== void 0 && object.commission_rates ? CommissionRates.fromAmino(object.commission_rates) : undefined,
      updateTime: object.update_time
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.commission_rates = message.commissionRates ? CommissionRates.toAmino(message.commissionRates) : undefined;
    obj.update_time = message.updateTime;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Commission.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Commission",
      value: Commission.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Commission.decode(message.value);
  },
  toProto: function toProto(message) {
    return Commission.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Commission",
      value: Commission.encode(message).finish()
    };
  }
};
exports.Commission = Commission;
function createBaseDescription() {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: ""
  };
}
var Description = {
  typeUrl: "/cosmos.staking.v1beta1.Description",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescription();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$moniker, _object$identity, _object$website, _object$securityConta, _object$details;
    var message = createBaseDescription();
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    message.identity = (_object$identity = object.identity) !== null && _object$identity !== void 0 ? _object$identity : "";
    message.website = (_object$website = object.website) !== null && _object$website !== void 0 ? _object$website : "";
    message.securityContact = (_object$securityConta = object.securityContact) !== null && _object$securityConta !== void 0 ? _object$securityConta : "";
    message.details = (_object$details = object.details) !== null && _object$details !== void 0 ? _object$details : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      moniker: object.moniker,
      identity: object.identity,
      website: object.website,
      securityContact: object.security_contact,
      details: object.details
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.moniker = message.moniker;
    obj.identity = message.identity;
    obj.website = message.website;
    obj.security_contact = message.securityContact;
    obj.details = message.details;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Description.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Description",
      value: Description.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Description.decode(message.value);
  },
  toProto: function toProto(message) {
    return Description.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Description",
      value: Description.encode(message).finish()
    };
  }
};
exports.Description = Description;
function createBaseValidator() {
  return {
    operatorAddress: "",
    consensusPubkey: _any.Any.fromPartial({}),
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    description: Description.fromPartial({}),
    unbondingHeight: BigInt(0),
    unbondingTime: new Date(),
    commission: Commission.fromPartial({}),
    minSelfDelegation: ""
  };
}
var Validator = {
  typeUrl: "/cosmos.staking.v1beta1.Validator",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== undefined) {
      _any.Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(50).string(_math.Decimal.fromUserInput(message.delegatorShares, 18).atomics);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (message.unbondingHeight !== BigInt(0)) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.unbondingTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.consensusPubkey = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32();
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegatorShares = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbondingHeight = reader.int64();
          break;
        case 9:
          message.unbondingTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$operatorAddre, _object$jailed, _object$status, _object$tokens, _object$delegatorShar, _object$unbondingTime, _object$minSelfDelega;
    var message = createBaseValidator();
    message.operatorAddress = (_object$operatorAddre = object.operatorAddress) !== null && _object$operatorAddre !== void 0 ? _object$operatorAddre : "";
    message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? _any.Any.fromPartial(object.consensusPubkey) : undefined;
    message.jailed = (_object$jailed = object.jailed) !== null && _object$jailed !== void 0 ? _object$jailed : false;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.tokens = (_object$tokens = object.tokens) !== null && _object$tokens !== void 0 ? _object$tokens : "";
    message.delegatorShares = (_object$delegatorShar = object.delegatorShares) !== null && _object$delegatorShar !== void 0 ? _object$delegatorShar : "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? BigInt(object.unbondingHeight.toString()) : BigInt(0);
    message.unbondingTime = (_object$unbondingTime = object.unbondingTime) !== null && _object$unbondingTime !== void 0 ? _object$unbondingTime : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = (_object$minSelfDelega = object.minSelfDelegation) !== null && _object$minSelfDelega !== void 0 ? _object$minSelfDelega : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      operatorAddress: object.operator_address,
      consensusPubkey: (0, _amino.encodeBech32Pubkey)({
        type: "tendermint/PubKeySecp256k1",
        value: (0, _encoding.toBase64)(object.consensus_pubkey.value)
      }, "cosmos"),
      jailed: object.jailed,
      status: (0, _helpers.isSet)(object.status) ? bondStatusFromJSON(object.status) : -1,
      tokens: object.tokens,
      delegatorShares: object.delegator_shares,
      description: object !== null && object !== void 0 && object.description ? Description.fromAmino(object.description) : undefined,
      unbondingHeight: BigInt(object.unbonding_height),
      unbondingTime: object.unbonding_time,
      commission: object !== null && object !== void 0 && object.commission ? Commission.fromAmino(object.commission) : undefined,
      minSelfDelegation: object.min_self_delegation
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.operator_address = message.operatorAddress;
    obj.consensus_pubkey = message.consensusPubkey ? {
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: (0, _encoding.fromBase64)((0, _amino.decodeBech32Pubkey)(message.consensusPubkey).value)
    } : undefined;
    obj.jailed = message.jailed;
    obj.status = message.status;
    obj.tokens = message.tokens;
    obj.delegator_shares = message.delegatorShares;
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.unbonding_height = message.unbondingHeight ? message.unbondingHeight.toString() : undefined;
    obj.unbonding_time = message.unbondingTime;
    obj.commission = message.commission ? Commission.toAmino(message.commission) : undefined;
    obj.min_self_delegation = message.minSelfDelegation;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Validator.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Validator",
      value: Validator.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Validator.decode(message.value);
  },
  toProto: function toProto(message) {
    return Validator.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
exports.Validator = Validator;
function createBaseValAddresses() {
  return {
    addresses: []
  };
}
var ValAddresses = {
  typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.addresses),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(10).string(v);
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
    var message = createBaseValAddresses();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$addresses;
    var message = createBaseValAddresses();
    message.addresses = ((_object$addresses = object.addresses) === null || _object$addresses === void 0 ? void 0 : _object$addresses.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses) ? object.addresses.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(function (e) {
        return e;
      });
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValAddresses.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ValAddresses",
      value: ValAddresses.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValAddresses.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValAddresses.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
      value: ValAddresses.encode(message).finish()
    };
  }
};
exports.ValAddresses = ValAddresses;
function createBaseDVPair() {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
var DVPair = {
  typeUrl: "/cosmos.staking.v1beta1.DVPair",
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
    var message = createBaseDVPair();
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
    var _object$delegatorAddr, _object$validatorAddr;
    var message = createBaseDVPair();
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
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
    return DVPair.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DVPair",
      value: DVPair.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DVPair.decode(message.value);
  },
  toProto: function toProto(message) {
    return DVPair.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVPair",
      value: DVPair.encode(message).finish()
    };
  }
};
exports.DVPair = DVPair;
function createBaseDVPairs() {
  return {
    pairs: []
  };
}
var DVPairs = {
  typeUrl: "/cosmos.staking.v1beta1.DVPairs",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator3 = _createForOfIteratorHelper(message.pairs),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        DVPair.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseDVPairs();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$pairs;
    var message = createBaseDVPairs();
    message.pairs = ((_object$pairs = object.pairs) === null || _object$pairs === void 0 ? void 0 : _object$pairs.map(function (e) {
      return DVPair.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      pairs: Array.isArray(object === null || object === void 0 ? void 0 : object.pairs) ? object.pairs.map(function (e) {
        return DVPair.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(function (e) {
        return e ? DVPair.toAmino(e) : undefined;
      });
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DVPairs.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DVPairs",
      value: DVPairs.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DVPairs.decode(message.value);
  },
  toProto: function toProto(message) {
    return DVPairs.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVPairs",
      value: DVPairs.encode(message).finish()
    };
  }
};
exports.DVPairs = DVPairs;
function createBaseDVVTriplet() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: ""
  };
}
var DVVTriplet = {
  typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDVVTriplet();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorSrcA, _object$validatorDstA;
    var message = createBaseDVVTriplet();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    message.validatorSrcAddress = (_object$validatorSrcA = object.validatorSrcAddress) !== null && _object$validatorSrcA !== void 0 ? _object$validatorSrcA : "";
    message.validatorDstAddress = (_object$validatorDstA = object.validatorDstAddress) !== null && _object$validatorDstA !== void 0 ? _object$validatorDstA : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address,
      validatorSrcAddress: object.validator_src_address,
      validatorDstAddress: object.validator_dst_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DVVTriplet.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DVVTriplet",
      value: DVVTriplet.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DVVTriplet.decode(message.value);
  },
  toProto: function toProto(message) {
    return DVVTriplet.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
      value: DVVTriplet.encode(message).finish()
    };
  }
};
exports.DVVTriplet = DVVTriplet;
function createBaseDVVTriplets() {
  return {
    triplets: []
  };
}
var DVVTriplets = {
  typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator4 = _createForOfIteratorHelper(message.triplets),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseDVVTriplets();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$triplets;
    var message = createBaseDVVTriplets();
    message.triplets = ((_object$triplets = object.triplets) === null || _object$triplets === void 0 ? void 0 : _object$triplets.map(function (e) {
      return DVVTriplet.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      triplets: Array.isArray(object === null || object === void 0 ? void 0 : object.triplets) ? object.triplets.map(function (e) {
        return DVVTriplet.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map(function (e) {
        return e ? DVVTriplet.toAmino(e) : undefined;
      });
    } else {
      obj.triplets = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DVVTriplets.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DVVTriplets",
      value: DVVTriplets.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DVVTriplets.decode(message.value);
  },
  toProto: function toProto(message) {
    return DVVTriplets.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
      value: DVVTriplets.encode(message).finish()
    };
  }
};
exports.DVVTriplets = DVVTriplets;
function createBaseDelegation() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    shares: ""
  };
}
var Delegation = {
  typeUrl: "/cosmos.staking.v1beta1.Delegation",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.shares, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegation();
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
          message.shares = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr3, _object$validatorAddr2, _object$shares;
    var message = createBaseDelegation();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    message.shares = (_object$shares = object.shares) !== null && _object$shares !== void 0 ? _object$shares : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      shares: object.shares
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.shares = message.shares;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Delegation.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Delegation",
      value: Delegation.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Delegation.decode(message.value);
  },
  toProto: function toProto(message) {
    return Delegation.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Delegation",
      value: Delegation.encode(message).finish()
    };
  }
};
exports.Delegation = Delegation;
function createBaseUnbondingDelegation() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    entries: []
  };
}
var UnbondingDelegation = {
  typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    var _iterator5 = _createForOfIteratorHelper(message.entries),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseUnbondingDelegation();
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
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr4, _object$validatorAddr3, _object$entries;
    var message = createBaseUnbondingDelegation();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map(function (e) {
      return UnbondingDelegationEntry.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function (e) {
        return UnbondingDelegationEntry.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    if (message.entries) {
      obj.entries = message.entries.map(function (e) {
        return e ? UnbondingDelegationEntry.toAmino(e) : undefined;
      });
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return UnbondingDelegation.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/UnbondingDelegation",
      value: UnbondingDelegation.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return UnbondingDelegation.decode(message.value);
  },
  toProto: function toProto(message) {
    return UnbondingDelegation.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
      value: UnbondingDelegation.encode(message).finish()
    };
  }
};
exports.UnbondingDelegation = UnbondingDelegation;
function createBaseUnbondingDelegationEntry() {
  return {
    creationHeight: BigInt(0),
    completionTime: new Date(),
    initialBalance: "",
    balance: ""
  };
}
var UnbondingDelegationEntry = {
  typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$completionTim, _object$initialBalanc, _object$balance;
    var message = createBaseUnbondingDelegationEntry();
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    message.completionTime = (_object$completionTim = object.completionTime) !== null && _object$completionTim !== void 0 ? _object$completionTim : undefined;
    message.initialBalance = (_object$initialBalanc = object.initialBalance) !== null && _object$initialBalanc !== void 0 ? _object$initialBalanc : "";
    message.balance = (_object$balance = object.balance) !== null && _object$balance !== void 0 ? _object$balance : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creationHeight: BigInt(object.creation_height),
      completionTime: object.completion_time,
      initialBalance: object.initial_balance,
      balance: object.balance
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creation_height = message.creationHeight ? message.creationHeight.toString() : undefined;
    obj.completion_time = message.completionTime;
    obj.initial_balance = message.initialBalance;
    obj.balance = message.balance;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return UnbondingDelegationEntry.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/UnbondingDelegationEntry",
      value: UnbondingDelegationEntry.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return UnbondingDelegationEntry.decode(message.value);
  },
  toProto: function toProto(message) {
    return UnbondingDelegationEntry.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
      value: UnbondingDelegationEntry.encode(message).finish()
    };
  }
};
exports.UnbondingDelegationEntry = UnbondingDelegationEntry;
function createBaseRedelegationEntry() {
  return {
    creationHeight: BigInt(0),
    completionTime: new Date(),
    initialBalance: "",
    sharesDst: ""
  };
}
var RedelegationEntry = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(34).string(_math.Decimal.fromUserInput(message.sharesDst, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.sharesDst = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$completionTim2, _object$initialBalanc2, _object$sharesDst;
    var message = createBaseRedelegationEntry();
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    message.completionTime = (_object$completionTim2 = object.completionTime) !== null && _object$completionTim2 !== void 0 ? _object$completionTim2 : undefined;
    message.initialBalance = (_object$initialBalanc2 = object.initialBalance) !== null && _object$initialBalanc2 !== void 0 ? _object$initialBalanc2 : "";
    message.sharesDst = (_object$sharesDst = object.sharesDst) !== null && _object$sharesDst !== void 0 ? _object$sharesDst : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creationHeight: BigInt(object.creation_height),
      completionTime: object.completion_time,
      initialBalance: object.initial_balance,
      sharesDst: object.shares_dst
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creation_height = message.creationHeight ? message.creationHeight.toString() : undefined;
    obj.completion_time = message.completionTime;
    obj.initial_balance = message.initialBalance;
    obj.shares_dst = message.sharesDst;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RedelegationEntry.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/RedelegationEntry",
      value: RedelegationEntry.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RedelegationEntry.decode(message.value);
  },
  toProto: function toProto(message) {
    return RedelegationEntry.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
      value: RedelegationEntry.encode(message).finish()
    };
  }
};
exports.RedelegationEntry = RedelegationEntry;
function createBaseRedelegation() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    entries: []
  };
}
var Redelegation = {
  typeUrl: "/cosmos.staking.v1beta1.Redelegation",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    var _iterator6 = _createForOfIteratorHelper(message.entries),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
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
    var message = createBaseRedelegation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr5, _object$validatorSrcA2, _object$validatorDstA2, _object$entries2;
    var message = createBaseRedelegation();
    message.delegatorAddress = (_object$delegatorAddr5 = object.delegatorAddress) !== null && _object$delegatorAddr5 !== void 0 ? _object$delegatorAddr5 : "";
    message.validatorSrcAddress = (_object$validatorSrcA2 = object.validatorSrcAddress) !== null && _object$validatorSrcA2 !== void 0 ? _object$validatorSrcA2 : "";
    message.validatorDstAddress = (_object$validatorDstA2 = object.validatorDstAddress) !== null && _object$validatorDstA2 !== void 0 ? _object$validatorDstA2 : "";
    message.entries = ((_object$entries2 = object.entries) === null || _object$entries2 === void 0 ? void 0 : _object$entries2.map(function (e) {
      return RedelegationEntry.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address,
      validatorSrcAddress: object.validator_src_address,
      validatorDstAddress: object.validator_dst_address,
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function (e) {
        return RedelegationEntry.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress;
    if (message.entries) {
      obj.entries = message.entries.map(function (e) {
        return e ? RedelegationEntry.toAmino(e) : undefined;
      });
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Redelegation.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Redelegation",
      value: Redelegation.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Redelegation.decode(message.value);
  },
  toProto: function toProto(message) {
    return Redelegation.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Redelegation",
      value: Redelegation.encode(message).finish()
    };
  }
};
exports.Redelegation = Redelegation;
function createBaseParams() {
  return {
    unbondingTime: _duration.Duration.fromPartial({}),
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: "",
    minCommissionRate: ""
  };
}
var Params = {
  typeUrl: "/cosmos.staking.v1beta1.Params",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.unbondingTime !== undefined) {
      _duration.Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.bondDenom !== "") {
      writer.uint32(42).string(message.bondDenom);
    }
    if (message.minCommissionRate !== "") {
      writer.uint32(50).string(_math.Decimal.fromUserInput(message.minCommissionRate, 18).atomics);
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
          message.unbondingTime = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxValidators = reader.uint32();
          break;
        case 3:
          message.maxEntries = reader.uint32();
          break;
        case 4:
          message.historicalEntries = reader.uint32();
          break;
        case 5:
          message.bondDenom = reader.string();
          break;
        case 6:
          message.minCommissionRate = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$maxValidators, _object$maxEntries, _object$historicalEnt, _object$bondDenom, _object$minCommission;
    var message = createBaseParams();
    message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? _duration.Duration.fromPartial(object.unbondingTime) : undefined;
    message.maxValidators = (_object$maxValidators = object.maxValidators) !== null && _object$maxValidators !== void 0 ? _object$maxValidators : 0;
    message.maxEntries = (_object$maxEntries = object.maxEntries) !== null && _object$maxEntries !== void 0 ? _object$maxEntries : 0;
    message.historicalEntries = (_object$historicalEnt = object.historicalEntries) !== null && _object$historicalEnt !== void 0 ? _object$historicalEnt : 0;
    message.bondDenom = (_object$bondDenom = object.bondDenom) !== null && _object$bondDenom !== void 0 ? _object$bondDenom : "";
    message.minCommissionRate = (_object$minCommission = object.minCommissionRate) !== null && _object$minCommission !== void 0 ? _object$minCommission : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      unbondingTime: object !== null && object !== void 0 && object.unbonding_time ? _duration.Duration.fromAmino(object.unbonding_time) : undefined,
      maxValidators: object.max_validators,
      maxEntries: object.max_entries,
      historicalEntries: object.historical_entries,
      bondDenom: object.bond_denom,
      minCommissionRate: object.min_commission_rate
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.unbonding_time = message.unbondingTime ? _duration.Duration.toAmino(message.unbondingTime) : undefined;
    obj.max_validators = message.maxValidators;
    obj.max_entries = message.maxEntries;
    obj.historical_entries = message.historicalEntries;
    obj.bond_denom = message.bondDenom;
    obj.min_commission_rate = message.minCommissionRate;
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
      typeUrl: "/cosmos.staking.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
exports.Params = Params;
function createBaseDelegationResponse() {
  return {
    delegation: Delegation.fromPartial({}),
    balance: _coin.Coin.fromPartial({})
  };
}
var DelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      _coin.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
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
  fromPartial: function fromPartial(object) {
    var message = createBaseDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? _coin.Coin.fromPartial(object.balance) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegation: object !== null && object !== void 0 && object.delegation ? Delegation.fromAmino(object.delegation) : undefined,
      balance: object !== null && object !== void 0 && object.balance ? _coin.Coin.fromAmino(object.balance) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegation = message.delegation ? Delegation.toAmino(message.delegation) : undefined;
    obj.balance = message.balance ? _coin.Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DelegationResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DelegationResponse",
      value: DelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DelegationResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return DelegationResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
      value: DelegationResponse.encode(message).finish()
    };
  }
};
exports.DelegationResponse = DelegationResponse;
function createBaseRedelegationEntryResponse() {
  return {
    redelegationEntry: RedelegationEntry.fromPartial({}),
    balance: ""
  };
}
var RedelegationEntryResponse = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.redelegationEntry !== undefined) {
      RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$balance2;
    var message = createBaseRedelegationEntryResponse();
    message.redelegationEntry = object.redelegationEntry !== undefined && object.redelegationEntry !== null ? RedelegationEntry.fromPartial(object.redelegationEntry) : undefined;
    message.balance = (_object$balance2 = object.balance) !== null && _object$balance2 !== void 0 ? _object$balance2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      redelegationEntry: object !== null && object !== void 0 && object.redelegation_entry ? RedelegationEntry.fromAmino(object.redelegation_entry) : undefined,
      balance: object.balance
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.redelegation_entry = message.redelegationEntry ? RedelegationEntry.toAmino(message.redelegationEntry) : undefined;
    obj.balance = message.balance;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RedelegationEntryResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/RedelegationEntryResponse",
      value: RedelegationEntryResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RedelegationEntryResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return RedelegationEntryResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
      value: RedelegationEntryResponse.encode(message).finish()
    };
  }
};
exports.RedelegationEntryResponse = RedelegationEntryResponse;
function createBaseRedelegationResponse() {
  return {
    redelegation: Redelegation.fromPartial({}),
    entries: []
  };
}
var RedelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    var _iterator7 = _createForOfIteratorHelper(message.entries),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$entries3;
    var message = createBaseRedelegationResponse();
    message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
    message.entries = ((_object$entries3 = object.entries) === null || _object$entries3 === void 0 ? void 0 : _object$entries3.map(function (e) {
      return RedelegationEntryResponse.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      redelegation: object !== null && object !== void 0 && object.redelegation ? Redelegation.fromAmino(object.redelegation) : undefined,
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function (e) {
        return RedelegationEntryResponse.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.redelegation = message.redelegation ? Redelegation.toAmino(message.redelegation) : undefined;
    if (message.entries) {
      obj.entries = message.entries.map(function (e) {
        return e ? RedelegationEntryResponse.toAmino(e) : undefined;
      });
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return RedelegationResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/RedelegationResponse",
      value: RedelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return RedelegationResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return RedelegationResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
      value: RedelegationResponse.encode(message).finish()
    };
  }
};
exports.RedelegationResponse = RedelegationResponse;
function createBasePool() {
  return {
    notBondedTokens: "",
    bondedTokens: ""
  };
}
var Pool = {
  typeUrl: "/cosmos.staking.v1beta1.Pool",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notBondedTokens = reader.string();
          break;
        case 2:
          message.bondedTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$notBondedToke, _object$bondedTokens;
    var message = createBasePool();
    message.notBondedTokens = (_object$notBondedToke = object.notBondedTokens) !== null && _object$notBondedToke !== void 0 ? _object$notBondedToke : "";
    message.bondedTokens = (_object$bondedTokens = object.bondedTokens) !== null && _object$bondedTokens !== void 0 ? _object$bondedTokens : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      notBondedTokens: object.not_bonded_tokens,
      bondedTokens: object.bonded_tokens
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.not_bonded_tokens = message.notBondedTokens;
    obj.bonded_tokens = message.bondedTokens;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Pool.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Pool",
      value: Pool.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Pool.decode(message.value);
  },
  toProto: function toProto(message) {
    return Pool.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
exports.Pool = Pool;