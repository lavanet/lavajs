"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoteOptionSDKType = exports.VoteOption = exports.Vote = exports.ThresholdDecisionPolicy = exports.TallyResult = exports.ProposalStatusSDKType = exports.ProposalStatus = exports.ProposalResultSDKType = exports.ProposalResult = exports.ProposalExecutorResultSDKType = exports.ProposalExecutorResult = exports.Proposal = exports.PercentageDecisionPolicy = exports.Members = exports.Member = exports.GroupPolicyInfo = exports.GroupMember = exports.GroupInfo = exports.DecisionPolicyWindows = void 0;
exports.proposalExecutorResultFromJSON = proposalExecutorResultFromJSON;
exports.proposalExecutorResultToJSON = proposalExecutorResultToJSON;
exports.proposalResultFromJSON = proposalResultFromJSON;
exports.proposalResultToJSON = proposalResultToJSON;
exports.proposalStatusFromJSON = proposalStatusFromJSON;
exports.proposalStatusToJSON = proposalStatusToJSON;
exports.voteOptionFromJSON = voteOptionFromJSON;
exports.voteOptionToJSON = voteOptionToJSON;
var _timestamp = require("../../../google/protobuf/timestamp");
var _duration = require("../../../google/protobuf/duration");
var _any = require("../../../google/protobuf/any");
var _binary = require("../../../binary");
var _helpers = require("../../../helpers");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** VoteOption enumerates the valid vote options for a given proposal. */
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
/** ProposalStatus defines proposal statuses. */
var ProposalStatus = /*#__PURE__*/function (ProposalStatus) {
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_CLOSED"] = 2] = "PROPOSAL_STATUS_CLOSED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ABORTED"] = 3] = "PROPOSAL_STATUS_ABORTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_WITHDRAWN"] = 4] = "PROPOSAL_STATUS_WITHDRAWN";
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
    case "PROPOSAL_STATUS_SUBMITTED":
      return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
    case 2:
    case "PROPOSAL_STATUS_CLOSED":
      return ProposalStatus.PROPOSAL_STATUS_CLOSED;
    case 3:
    case "PROPOSAL_STATUS_ABORTED":
      return ProposalStatus.PROPOSAL_STATUS_ABORTED;
    case 4:
    case "PROPOSAL_STATUS_WITHDRAWN":
      return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
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
    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return "PROPOSAL_STATUS_SUBMITTED";
    case ProposalStatus.PROPOSAL_STATUS_CLOSED:
      return "PROPOSAL_STATUS_CLOSED";
    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return "PROPOSAL_STATUS_ABORTED";
    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return "PROPOSAL_STATUS_WITHDRAWN";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalResult defines types of proposal results. */
var ProposalResult = /*#__PURE__*/function (ProposalResult) {
  ProposalResult[ProposalResult["PROPOSAL_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_RESULT_UNSPECIFIED";
  ProposalResult[ProposalResult["PROPOSAL_RESULT_UNFINALIZED"] = 1] = "PROPOSAL_RESULT_UNFINALIZED";
  ProposalResult[ProposalResult["PROPOSAL_RESULT_ACCEPTED"] = 2] = "PROPOSAL_RESULT_ACCEPTED";
  ProposalResult[ProposalResult["PROPOSAL_RESULT_REJECTED"] = 3] = "PROPOSAL_RESULT_REJECTED";
  ProposalResult[ProposalResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProposalResult;
}({});
exports.ProposalResult = ProposalResult;
var ProposalResultSDKType = ProposalResult;
exports.ProposalResultSDKType = ProposalResultSDKType;
function proposalResultFromJSON(object) {
  switch (object) {
    case 0:
    case "PROPOSAL_RESULT_UNSPECIFIED":
      return ProposalResult.PROPOSAL_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_RESULT_UNFINALIZED":
      return ProposalResult.PROPOSAL_RESULT_UNFINALIZED;
    case 2:
    case "PROPOSAL_RESULT_ACCEPTED":
      return ProposalResult.PROPOSAL_RESULT_ACCEPTED;
    case 3:
    case "PROPOSAL_RESULT_REJECTED":
      return ProposalResult.PROPOSAL_RESULT_REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalResult.UNRECOGNIZED;
  }
}
function proposalResultToJSON(object) {
  switch (object) {
    case ProposalResult.PROPOSAL_RESULT_UNSPECIFIED:
      return "PROPOSAL_RESULT_UNSPECIFIED";
    case ProposalResult.PROPOSAL_RESULT_UNFINALIZED:
      return "PROPOSAL_RESULT_UNFINALIZED";
    case ProposalResult.PROPOSAL_RESULT_ACCEPTED:
      return "PROPOSAL_RESULT_ACCEPTED";
    case ProposalResult.PROPOSAL_RESULT_REJECTED:
      return "PROPOSAL_RESULT_REJECTED";
    case ProposalResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalExecutorResult defines types of proposal executor results. */
var ProposalExecutorResult = /*#__PURE__*/function (ProposalExecutorResult) {
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = 1] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = 2] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
  ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = 3] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
  ProposalExecutorResult[ProposalExecutorResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProposalExecutorResult;
}({});
exports.ProposalExecutorResult = ProposalExecutorResult;
var ProposalExecutorResultSDKType = ProposalExecutorResult;
exports.ProposalExecutorResultSDKType = ProposalExecutorResultSDKType;
function proposalExecutorResultFromJSON(object) {
  switch (object) {
    case 0:
    case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
    case 2:
    case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
    case 3:
    case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalExecutorResult.UNRECOGNIZED;
  }
}
function proposalExecutorResultToJSON(object) {
  switch (object) {
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
      return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
      return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
      return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
      return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    case ProposalExecutorResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Member represents a group member with an account address,
 * non-zero weight and metadata.
 */

/**
 * Member represents a group member with an account address,
 * non-zero weight and metadata.
 */

/** Members defines a repeated slice of Member objects. */

/** Members defines a repeated slice of Member objects. */

/** ThresholdDecisionPolicy implements the DecisionPolicy interface */

/** ThresholdDecisionPolicy implements the DecisionPolicy interface */

/** PercentageDecisionPolicy implements the DecisionPolicy interface */

/** PercentageDecisionPolicy implements the DecisionPolicy interface */

/** DecisionPolicyWindows defines the different windows for voting and execution. */

/** DecisionPolicyWindows defines the different windows for voting and execution. */

/** GroupInfo represents the high-level on-chain information for a group. */

/** GroupInfo represents the high-level on-chain information for a group. */

/** GroupMember represents the relationship between a group and a member. */

/** GroupMember represents the relationship between a group and a member. */

/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */

/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */

/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */

/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */

/** TallyResult represents the sum of weighted votes for each vote option. */

/** TallyResult represents the sum of weighted votes for each vote option. */

/** Vote represents a vote for a proposal. */

/** Vote represents a vote for a proposal. */

function createBaseMember() {
  return {
    address: "",
    weight: "",
    metadata: "",
    addedAt: new Date()
  };
}
var Member = {
  typeUrl: "/cosmos.group.v1.Member",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.addedAt !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.addedAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMember();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.addedAt = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$weight, _object$metadata, _object$addedAt;
    var message = createBaseMember();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    message.addedAt = (_object$addedAt = object.addedAt) !== null && _object$addedAt !== void 0 ? _object$addedAt : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address,
      weight: object.weight,
      metadata: object.metadata,
      addedAt: object.added_at
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    obj.weight = message.weight;
    obj.metadata = message.metadata;
    obj.added_at = message.addedAt;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Member.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Member",
      value: Member.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Member.decode(message.value);
  },
  toProto: function toProto(message) {
    return Member.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.Member",
      value: Member.encode(message).finish()
    };
  }
};
exports.Member = Member;
function createBaseMembers() {
  return {
    members: []
  };
}
var Members = {
  typeUrl: "/cosmos.group.v1.Members",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.members),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Member.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseMembers();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$members;
    var message = createBaseMembers();
    message.members = ((_object$members = object.members) === null || _object$members === void 0 ? void 0 : _object$members.map(function (e) {
      return Member.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function (e) {
        return Member.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.members) {
      obj.members = message.members.map(function (e) {
        return e ? Member.toAmino(e) : undefined;
      });
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Members.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Members",
      value: Members.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Members.decode(message.value);
  },
  toProto: function toProto(message) {
    return Members.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.Members",
      value: Members.encode(message).finish()
    };
  }
};
exports.Members = Members;
function createBaseThresholdDecisionPolicy() {
  return {
    threshold: "",
    windows: DecisionPolicyWindows.fromPartial({})
  };
}
var ThresholdDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseThresholdDecisionPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$threshold;
    var message = createBaseThresholdDecisionPolicy();
    message.threshold = (_object$threshold = object.threshold) !== null && _object$threshold !== void 0 ? _object$threshold : "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      threshold: object.threshold,
      windows: object !== null && object !== void 0 && object.windows ? DecisionPolicyWindows.fromAmino(object.windows) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.threshold = message.threshold;
    obj.windows = message.windows ? DecisionPolicyWindows.toAmino(message.windows) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ThresholdDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ThresholdDecisionPolicy",
      value: ThresholdDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ThresholdDecisionPolicy.decode(message.value);
  },
  toProto: function toProto(message) {
    return ThresholdDecisionPolicy.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
      value: ThresholdDecisionPolicy.encode(message).finish()
    };
  }
};
exports.ThresholdDecisionPolicy = ThresholdDecisionPolicy;
function createBasePercentageDecisionPolicy() {
  return {
    percentage: "",
    windows: DecisionPolicyWindows.fromPartial({})
  };
}
var PercentageDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePercentageDecisionPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$percentage;
    var message = createBasePercentageDecisionPolicy();
    message.percentage = (_object$percentage = object.percentage) !== null && _object$percentage !== void 0 ? _object$percentage : "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      percentage: object.percentage,
      windows: object !== null && object !== void 0 && object.windows ? DecisionPolicyWindows.fromAmino(object.windows) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.percentage = message.percentage;
    obj.windows = message.windows ? DecisionPolicyWindows.toAmino(message.windows) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PercentageDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PercentageDecisionPolicy",
      value: PercentageDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PercentageDecisionPolicy.decode(message.value);
  },
  toProto: function toProto(message) {
    return PercentageDecisionPolicy.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
      value: PercentageDecisionPolicy.encode(message).finish()
    };
  }
};
exports.PercentageDecisionPolicy = PercentageDecisionPolicy;
function createBaseDecisionPolicyWindows() {
  return {
    votingPeriod: _duration.Duration.fromPartial({}),
    minExecutionPeriod: _duration.Duration.fromPartial({})
  };
}
var DecisionPolicyWindows = {
  typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.votingPeriod !== undefined) {
      _duration.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.minExecutionPeriod !== undefined) {
      _duration.Duration.encode(message.minExecutionPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDecisionPolicyWindows();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.minExecutionPeriod = _duration.Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseDecisionPolicyWindows();
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? _duration.Duration.fromPartial(object.votingPeriod) : undefined;
    message.minExecutionPeriod = object.minExecutionPeriod !== undefined && object.minExecutionPeriod !== null ? _duration.Duration.fromPartial(object.minExecutionPeriod) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      votingPeriod: object !== null && object !== void 0 && object.voting_period ? _duration.Duration.fromAmino(object.voting_period) : undefined,
      minExecutionPeriod: object !== null && object !== void 0 && object.min_execution_period ? _duration.Duration.fromAmino(object.min_execution_period) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.voting_period = message.votingPeriod ? _duration.Duration.toAmino(message.votingPeriod) : undefined;
    obj.min_execution_period = message.minExecutionPeriod ? _duration.Duration.toAmino(message.minExecutionPeriod) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DecisionPolicyWindows.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/DecisionPolicyWindows",
      value: DecisionPolicyWindows.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DecisionPolicyWindows.decode(message.value);
  },
  toProto: function toProto(message) {
    return DecisionPolicyWindows.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
      value: DecisionPolicyWindows.encode(message).finish()
    };
  }
};
exports.DecisionPolicyWindows = DecisionPolicyWindows;
function createBaseGroupInfo() {
  return {
    id: BigInt(0),
    admin: "",
    metadata: "",
    version: BigInt(0),
    totalWeight: "",
    createdAt: new Date()
  };
}
var GroupInfo = {
  typeUrl: "/cosmos.group.v1.GroupInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(32).uint64(message.version);
    }
    if (message.totalWeight !== "") {
      writer.uint32(42).string(message.totalWeight);
    }
    if (message.createdAt !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGroupInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.version = reader.uint64();
          break;
        case 5:
          message.totalWeight = reader.string();
          break;
        case 6:
          message.createdAt = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin, _object$metadata2, _object$totalWeight, _object$createdAt;
    var message = createBaseGroupInfo();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.totalWeight = (_object$totalWeight = object.totalWeight) !== null && _object$totalWeight !== void 0 ? _object$totalWeight : "";
    message.createdAt = (_object$createdAt = object.createdAt) !== null && _object$createdAt !== void 0 ? _object$createdAt : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      id: BigInt(object.id),
      admin: object.admin,
      metadata: object.metadata,
      version: BigInt(object.version),
      totalWeight: object.total_weight,
      createdAt: object.created_at
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.version = message.version ? message.version.toString() : undefined;
    obj.total_weight = message.totalWeight;
    obj.created_at = message.createdAt;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GroupInfo.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GroupInfo",
      value: GroupInfo.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GroupInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return GroupInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.GroupInfo",
      value: GroupInfo.encode(message).finish()
    };
  }
};
exports.GroupInfo = GroupInfo;
function createBaseGroupMember() {
  return {
    groupId: BigInt(0),
    member: Member.fromPartial({})
  };
}
var GroupMember = {
  typeUrl: "/cosmos.group.v1.GroupMember",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGroupMember();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGroupMember();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.member = object.member !== undefined && object.member !== null ? Member.fromPartial(object.member) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      groupId: BigInt(object.group_id),
      member: object !== null && object !== void 0 && object.member ? Member.fromAmino(object.member) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.member = message.member ? Member.toAmino(message.member) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GroupMember.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GroupMember",
      value: GroupMember.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GroupMember.decode(message.value);
  },
  toProto: function toProto(message) {
    return GroupMember.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.GroupMember",
      value: GroupMember.encode(message).finish()
    };
  }
};
exports.GroupMember = GroupMember;
function createBaseGroupPolicyInfo() {
  return {
    address: "",
    groupId: BigInt(0),
    admin: "",
    metadata: "",
    version: BigInt(0),
    decisionPolicy: _any.Any.fromPartial({}),
    createdAt: new Date()
  };
}
var GroupPolicyInfo = {
  typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(40).uint64(message.version);
    }
    if (message.decisionPolicy !== undefined) {
      _any.Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.createdAt), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGroupPolicyInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.version = reader.uint64();
          break;
        case 6:
          message.decisionPolicy = _any.Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.createdAt = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address2, _object$admin2, _object$metadata3, _object$createdAt2;
    var message = createBaseGroupPolicyInfo();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.metadata = (_object$metadata3 = object.metadata) !== null && _object$metadata3 !== void 0 ? _object$metadata3 : "";
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? _any.Any.fromPartial(object.decisionPolicy) : undefined;
    message.createdAt = (_object$createdAt2 = object.createdAt) !== null && _object$createdAt2 !== void 0 ? _object$createdAt2 : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address,
      groupId: BigInt(object.group_id),
      admin: object.admin,
      metadata: object.metadata,
      version: BigInt(object.version),
      decisionPolicy: object !== null && object !== void 0 && object.decision_policy ? _any.Any.fromAmino(object.decision_policy) : undefined,
      createdAt: object.created_at
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.version = message.version ? message.version.toString() : undefined;
    obj.decision_policy = message.decisionPolicy ? _any.Any.toAmino(message.decisionPolicy) : undefined;
    obj.created_at = message.createdAt;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GroupPolicyInfo.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GroupPolicyInfo",
      value: GroupPolicyInfo.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GroupPolicyInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return GroupPolicyInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
      value: GroupPolicyInfo.encode(message).finish()
    };
  }
};
exports.GroupPolicyInfo = GroupPolicyInfo;
function createBaseProposal() {
  return {
    id: BigInt(0),
    address: "",
    metadata: "",
    proposers: [],
    submitTime: new Date(),
    groupVersion: BigInt(0),
    groupPolicyVersion: BigInt(0),
    status: 0,
    result: 0,
    finalTallyResult: TallyResult.fromPartial({}),
    votingPeriodEnd: new Date(),
    executorResult: 0,
    messages: []
  };
}
var Proposal = {
  typeUrl: "/cosmos.group.v1.Proposal",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    var _iterator2 = _createForOfIteratorHelper(message.proposers),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(34).string(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.submitTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.groupVersion !== BigInt(0)) {
      writer.uint32(48).uint64(message.groupVersion);
    }
    if (message.groupPolicyVersion !== BigInt(0)) {
      writer.uint32(56).uint64(message.groupPolicyVersion);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.result !== 0) {
      writer.uint32(72).int32(message.result);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(82).fork()).ldelim();
    }
    if (message.votingPeriodEnd !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.votingPeriodEnd), writer.uint32(90).fork()).ldelim();
    }
    if (message.executorResult !== 0) {
      writer.uint32(96).int32(message.executorResult);
    }
    var _iterator3 = _createForOfIteratorHelper(message.messages),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        _any.Any.encode(_v, writer.uint32(106).fork()).ldelim();
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
    var message = createBaseProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.proposers.push(reader.string());
          break;
        case 5:
          message.submitTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.groupVersion = reader.uint64();
          break;
        case 7:
          message.groupPolicyVersion = reader.uint64();
          break;
        case 8:
          message.status = reader.int32();
          break;
        case 9:
          message.result = reader.int32();
          break;
        case 10:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 11:
          message.votingPeriodEnd = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 12:
          message.executorResult = reader.int32();
          break;
        case 13:
          message.messages.push(_any.Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address3, _object$metadata4, _object$proposers, _object$submitTime, _object$status, _object$result, _object$votingPeriodE, _object$executorResul, _object$messages;
    var message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.metadata = (_object$metadata4 = object.metadata) !== null && _object$metadata4 !== void 0 ? _object$metadata4 : "";
    message.proposers = ((_object$proposers = object.proposers) === null || _object$proposers === void 0 ? void 0 : _object$proposers.map(function (e) {
      return e;
    })) || [];
    message.submitTime = (_object$submitTime = object.submitTime) !== null && _object$submitTime !== void 0 ? _object$submitTime : undefined;
    message.groupVersion = object.groupVersion !== undefined && object.groupVersion !== null ? BigInt(object.groupVersion.toString()) : BigInt(0);
    message.groupPolicyVersion = object.groupPolicyVersion !== undefined && object.groupPolicyVersion !== null ? BigInt(object.groupPolicyVersion.toString()) : BigInt(0);
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : undefined;
    message.votingPeriodEnd = (_object$votingPeriodE = object.votingPeriodEnd) !== null && _object$votingPeriodE !== void 0 ? _object$votingPeriodE : undefined;
    message.executorResult = (_object$executorResul = object.executorResult) !== null && _object$executorResul !== void 0 ? _object$executorResul : 0;
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      id: BigInt(object.id),
      address: object.address,
      metadata: object.metadata,
      proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map(function (e) {
        return e;
      }) : [],
      submitTime: object.submit_time,
      groupVersion: BigInt(object.group_version),
      groupPolicyVersion: BigInt(object.group_policy_version),
      status: (0, _helpers.isSet)(object.status) ? proposalStatusFromJSON(object.status) : -1,
      result: (0, _helpers.isSet)(object.result) ? proposalResultFromJSON(object.result) : -1,
      finalTallyResult: object !== null && object !== void 0 && object.final_tally_result ? TallyResult.fromAmino(object.final_tally_result) : undefined,
      votingPeriodEnd: object.voting_period_end,
      executorResult: (0, _helpers.isSet)(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) {
        return _any.Any.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.address = message.address;
    obj.metadata = message.metadata;
    if (message.proposers) {
      obj.proposers = message.proposers.map(function (e) {
        return e;
      });
    } else {
      obj.proposers = [];
    }
    obj.submit_time = message.submitTime;
    obj.group_version = message.groupVersion ? message.groupVersion.toString() : undefined;
    obj.group_policy_version = message.groupPolicyVersion ? message.groupPolicyVersion.toString() : undefined;
    obj.status = message.status;
    obj.result = message.result;
    obj.final_tally_result = message.finalTallyResult ? TallyResult.toAmino(message.finalTallyResult) : undefined;
    obj.voting_period_end = message.votingPeriodEnd;
    obj.executor_result = message.executorResult;
    if (message.messages) {
      obj.messages = message.messages.map(function (e) {
        return e ? _any.Any.toAmino(e) : undefined;
      });
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Proposal.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Proposal",
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
      typeUrl: "/cosmos.group.v1.Proposal",
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
  typeUrl: "/cosmos.group.v1.TallyResult",
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
      type: "cosmos-sdk/TallyResult",
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
      typeUrl: "/cosmos.group.v1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
exports.TallyResult = TallyResult;
function createBaseVote() {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    metadata: "",
    submitTime: new Date()
  };
}
var Vote = {
  typeUrl: "/cosmos.group.v1.Vote",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.submitTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
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
        case 3:
          message.option = reader.int32();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.submitTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$voter, _object$option, _object$metadata5, _object$submitTime2;
    var message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.metadata = (_object$metadata5 = object.metadata) !== null && _object$metadata5 !== void 0 ? _object$metadata5 : "";
    message.submitTime = (_object$submitTime2 = object.submitTime) !== null && _object$submitTime2 !== void 0 ? _object$submitTime2 : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter,
      option: (0, _helpers.isSet)(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: object.metadata,
      submitTime: object.submit_time
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    obj.metadata = message.metadata;
    obj.submit_time = message.submitTime;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Vote.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Vote",
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
      typeUrl: "/cosmos.group.v1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
exports.Vote = Vote;