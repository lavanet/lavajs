"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeightedVoteOption = exports.VotingParams = exports.VoteOptionSDKType = exports.VoteOption = exports.Vote = exports.TallyResult = exports.TallyParams = exports.ProposalStatusSDKType = exports.ProposalStatus = exports.Proposal = exports.DepositParams = exports.Deposit = void 0;
exports.proposalStatusFromJSON = proposalStatusFromJSON;
exports.proposalStatusToJSON = proposalStatusToJSON;
exports.voteOptionFromJSON = voteOptionFromJSON;
exports.voteOptionToJSON = voteOptionToJSON;
var _coin = require("../../base/v1beta1/coin");
var _any = require("../../../google/protobuf/any");
var _timestamp = require("../../../google/protobuf/timestamp");
var _duration = require("../../../google/protobuf/duration");
var _binary = require("../../../binary");
var _helpers = require("../../../helpers");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** VoteOption enumerates the valid vote options for a given governance proposal. */
var VoteOption = /*#__PURE__*/function (VoteOption) {
  VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
  VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
  VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
  VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
  VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
  VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return VoteOption;
}({});
exports.VoteOption = VoteOption;
var VoteOptionSDKType = VoteOption;
exports.VoteOptionSDKType = VoteOptionSDKType;
function voteOptionFromJSON(object) {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
function voteOptionToJSON(object) {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
var ProposalStatus = /*#__PURE__*/function (ProposalStatus) {
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
  ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProposalStatus;
}({});
exports.ProposalStatus = ProposalStatus;
var ProposalStatusSDKType = ProposalStatus;
exports.ProposalStatusSDKType = ProposalStatusSDKType;
function proposalStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
function proposalStatusToJSON(object) {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** WeightedVoteOption defines a unit of vote for vote split. */

/** WeightedVoteOption defines a unit of vote for vote split. */

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */

/** Proposal defines the core field members of a governance proposal. */

/** Proposal defines the core field members of a governance proposal. */

/** TallyResult defines a standard tally for a governance proposal. */

/** TallyResult defines a standard tally for a governance proposal. */

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */

/** DepositParams defines the params for deposits on governance proposals. */

/** DepositParams defines the params for deposits on governance proposals. */

/** VotingParams defines the params for voting on governance proposals. */

/** VotingParams defines the params for voting on governance proposals. */

/** TallyParams defines the params for tallying votes on governance proposals. */

/** TallyParams defines the params for tallying votes on governance proposals. */

function createBaseWeightedVoteOption() {
  return {
    option: 0,
    weight: ""
  };
}
var WeightedVoteOption = {
  typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$option, _object$weight;
    var message = createBaseWeightedVoteOption();
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      option: (0, _helpers.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
      weight: object.weight
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.option = message.option;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return WeightedVoteOption.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/WeightedVoteOption",
      value: WeightedVoteOption.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return WeightedVoteOption.decode(message.value);
  },
  toProto: function toProto(message) {
    return WeightedVoteOption.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
      value: WeightedVoteOption.encode(message).finish()
    };
  }
};
exports.WeightedVoteOption = WeightedVoteOption;
function createBaseDeposit() {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
var Deposit = {
  typeUrl: "/cosmos.gov.v1.Deposit",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    var _iterator = _createForOfIteratorHelper(message.amount),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseDeposit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
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
    var _object$depositor, _object$amount;
    var message = createBaseDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = (_object$depositor = object.depositor) !== null && _object$depositor !== void 0 ? _object$depositor : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      depositor: object.depositor,
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.depositor = message.depositor;
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
    return Deposit.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/Deposit",
      value: Deposit.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Deposit.decode(message.value);
  },
  toProto: function toProto(message) {
    return Deposit.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
exports.Deposit = Deposit;
function createBaseProposal() {
  return {
    id: BigInt(0),
    messages: [],
    status: 0,
    finalTallyResult: TallyResult.fromPartial({}),
    submitTime: new Date(),
    depositEndTime: new Date(),
    totalDeposit: [],
    votingStartTime: new Date(),
    votingEndTime: new Date(),
    metadata: ""
  };
}
var Proposal = {
  typeUrl: "/cosmos.gov.v1.Proposal",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    var _iterator2 = _createForOfIteratorHelper(message.messages),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _any.Any.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.depositEndTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.depositEndTime), writer.uint32(50).fork()).ldelim();
    }
    var _iterator3 = _createForOfIteratorHelper(message.totalDeposit),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        _coin.Coin.encode(_v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.votingStartTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.votingStartTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.votingEndTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.messages.push(_any.Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = reader.int32();
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submitTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.depositEndTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalDeposit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.votingEndTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$messages, _object$status, _object$submitTime, _object$depositEndTim, _object$totalDeposit, _object$votingStartTi, _object$votingEndTime, _object$metadata;
    var message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : undefined;
    message.submitTime = (_object$submitTime = object.submitTime) !== null && _object$submitTime !== void 0 ? _object$submitTime : undefined;
    message.depositEndTime = (_object$depositEndTim = object.depositEndTime) !== null && _object$depositEndTim !== void 0 ? _object$depositEndTim : undefined;
    message.totalDeposit = ((_object$totalDeposit = object.totalDeposit) === null || _object$totalDeposit === void 0 ? void 0 : _object$totalDeposit.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.votingStartTime = (_object$votingStartTi = object.votingStartTime) !== null && _object$votingStartTi !== void 0 ? _object$votingStartTi : undefined;
    message.votingEndTime = (_object$votingEndTime = object.votingEndTime) !== null && _object$votingEndTime !== void 0 ? _object$votingEndTime : undefined;
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      id: BigInt(object.id),
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) {
        return _any.Any.fromAmino(e);
      }) : [],
      status: (0, _helpers.isSet)(object.status) ? proposalStatusFromJSON(object.status) : -1,
      finalTallyResult: object !== null && object !== void 0 && object.final_tally_result ? TallyResult.fromAmino(object.final_tally_result) : undefined,
      submitTime: object.submit_time,
      depositEndTime: object.deposit_end_time,
      totalDeposit: Array.isArray(object === null || object === void 0 ? void 0 : object.total_deposit) ? object.total_deposit.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : [],
      votingStartTime: object.voting_start_time,
      votingEndTime: object.voting_end_time,
      metadata: object.metadata
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.id = message.id ? message.id.toString() : undefined;
    if (message.messages) {
      obj.messages = message.messages.map(function (e) {
        return e ? _any.Any.toAmino(e) : undefined;
      });
    } else {
      obj.messages = [];
    }
    obj.status = message.status;
    obj.final_tally_result = message.finalTallyResult ? TallyResult.toAmino(message.finalTallyResult) : undefined;
    obj.submit_time = message.submitTime;
    obj.deposit_end_time = message.depositEndTime;
    if (message.totalDeposit) {
      obj.total_deposit = message.totalDeposit.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.total_deposit = [];
    }
    obj.voting_start_time = message.votingStartTime;
    obj.voting_end_time = message.votingEndTime;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Proposal.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/Proposal",
      value: Proposal.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Proposal.decode(message.value);
  },
  toProto: function toProto(message) {
    return Proposal.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
exports.Proposal = Proposal;
function createBaseTallyResult() {
  return {
    yesCount: "",
    abstainCount: "",
    noCount: "",
    noWithVetoCount: ""
  };
}
var TallyResult = {
  typeUrl: "/cosmos.gov.v1.TallyResult",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.abstainCount !== "") {
      writer.uint32(18).string(message.abstainCount);
    }
    if (message.noCount !== "") {
      writer.uint32(26).string(message.noCount);
    }
    if (message.noWithVetoCount !== "") {
      writer.uint32(34).string(message.noWithVetoCount);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTallyResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.abstainCount = reader.string();
          break;
        case 3:
          message.noCount = reader.string();
          break;
        case 4:
          message.noWithVetoCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$yesCount, _object$abstainCount, _object$noCount, _object$noWithVetoCou;
    var message = createBaseTallyResult();
    message.yesCount = (_object$yesCount = object.yesCount) !== null && _object$yesCount !== void 0 ? _object$yesCount : "";
    message.abstainCount = (_object$abstainCount = object.abstainCount) !== null && _object$abstainCount !== void 0 ? _object$abstainCount : "";
    message.noCount = (_object$noCount = object.noCount) !== null && _object$noCount !== void 0 ? _object$noCount : "";
    message.noWithVetoCount = (_object$noWithVetoCou = object.noWithVetoCount) !== null && _object$noWithVetoCou !== void 0 ? _object$noWithVetoCou : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      yesCount: object.yes_count,
      abstainCount: object.abstain_count,
      noCount: object.no_count,
      noWithVetoCount: object.no_with_veto_count
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.yes_count = message.yesCount;
    obj.abstain_count = message.abstainCount;
    obj.no_count = message.noCount;
    obj.no_with_veto_count = message.noWithVetoCount;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return TallyResult.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/TallyResult",
      value: TallyResult.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return TallyResult.decode(message.value);
  },
  toProto: function toProto(message) {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
exports.TallyResult = TallyResult;
function createBaseVote() {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: [],
    metadata: ""
  };
}
var Vote = {
  typeUrl: "/cosmos.gov.v1.Vote",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    var _iterator4 = _createForOfIteratorHelper(message.options),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 5:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$voter, _object$options, _object$metadata2;
    var message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.options = ((_object$options = object.options) === null || _object$options === void 0 ? void 0 : _object$options.map(function (e) {
      return WeightedVoteOption.fromPartial(e);
    })) || [];
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter,
      options: Array.isArray(object === null || object === void 0 ? void 0 : object.options) ? object.options.map(function (e) {
        return WeightedVoteOption.fromAmino(e);
      }) : [],
      metadata: object.metadata
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    if (message.options) {
      obj.options = message.options.map(function (e) {
        return e ? WeightedVoteOption.toAmino(e) : undefined;
      });
    } else {
      obj.options = [];
    }
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Vote.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/Vote",
      value: Vote.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Vote.decode(message.value);
  },
  toProto: function toProto(message) {
    return Vote.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
exports.Vote = Vote;
function createBaseDepositParams() {
  return {
    minDeposit: [],
    maxDepositPeriod: _duration.Duration.fromPartial({})
  };
}
var DepositParams = {
  typeUrl: "/cosmos.gov.v1.DepositParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator5 = _createForOfIteratorHelper(message.minDeposit),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.maxDepositPeriod !== undefined) {
      _duration.Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDepositParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$minDeposit;
    var message = createBaseDepositParams();
    message.minDeposit = ((_object$minDeposit = object.minDeposit) === null || _object$minDeposit === void 0 ? void 0 : _object$minDeposit.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? _duration.Duration.fromPartial(object.maxDepositPeriod) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      minDeposit: Array.isArray(object === null || object === void 0 ? void 0 : object.min_deposit) ? object.min_deposit.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : [],
      maxDepositPeriod: object !== null && object !== void 0 && object.max_deposit_period ? _duration.Duration.fromAmino(object.max_deposit_period) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.min_deposit = [];
    }
    obj.max_deposit_period = message.maxDepositPeriod ? _duration.Duration.toAmino(message.maxDepositPeriod) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DepositParams.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/DepositParams",
      value: DepositParams.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DepositParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return DepositParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.DepositParams",
      value: DepositParams.encode(message).finish()
    };
  }
};
exports.DepositParams = DepositParams;
function createBaseVotingParams() {
  return {
    votingPeriod: _duration.Duration.fromPartial({})
  };
}
var VotingParams = {
  typeUrl: "/cosmos.gov.v1.VotingParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.votingPeriod !== undefined) {
      _duration.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVotingParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseVotingParams();
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? _duration.Duration.fromPartial(object.votingPeriod) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      votingPeriod: object !== null && object !== void 0 && object.voting_period ? _duration.Duration.fromAmino(object.voting_period) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.voting_period = message.votingPeriod ? _duration.Duration.toAmino(message.votingPeriod) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return VotingParams.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/VotingParams",
      value: VotingParams.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return VotingParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return VotingParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.VotingParams",
      value: VotingParams.encode(message).finish()
    };
  }
};
exports.VotingParams = VotingParams;
function createBaseTallyParams() {
  return {
    quorum: "",
    threshold: "",
    vetoThreshold: ""
  };
}
var TallyParams = {
  typeUrl: "/cosmos.gov.v1.TallyParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.vetoThreshold !== "") {
      writer.uint32(26).string(message.vetoThreshold);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTallyParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;
        case 2:
          message.threshold = reader.string();
          break;
        case 3:
          message.vetoThreshold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$quorum, _object$threshold, _object$vetoThreshold;
    var message = createBaseTallyParams();
    message.quorum = (_object$quorum = object.quorum) !== null && _object$quorum !== void 0 ? _object$quorum : "";
    message.threshold = (_object$threshold = object.threshold) !== null && _object$threshold !== void 0 ? _object$threshold : "";
    message.vetoThreshold = (_object$vetoThreshold = object.vetoThreshold) !== null && _object$vetoThreshold !== void 0 ? _object$vetoThreshold : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      quorum: object.quorum,
      threshold: object.threshold,
      vetoThreshold: object.veto_threshold
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.quorum = message.quorum;
    obj.threshold = message.threshold;
    obj.veto_threshold = message.vetoThreshold;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return TallyParams.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/TallyParams",
      value: TallyParams.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return TallyParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return TallyParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.TallyParams",
      value: TallyParams.encode(message).finish()
    };
  }
};
exports.TallyParams = TallyParams;