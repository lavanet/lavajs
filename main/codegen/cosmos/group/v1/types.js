"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
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
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    addedAt: undefined
  };
}
var Member = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
      _timestamp.Timestamp.encode(message.addedAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.addedAt = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      weight: (0, _helpers.isSet)(object.weight) ? String(object.weight) : "",
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      addedAt: (0, _helpers.isSet)(object.addedAt) ? (0, _helpers.fromJsonTimestamp)(object.addedAt) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.addedAt !== undefined && (obj.addedAt = (0, _helpers.fromTimestamp)(message.addedAt).toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$weight, _object$metadata;
    var message = createBaseMember();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.weight = (_object$weight = object.weight) !== null && _object$weight !== void 0 ? _object$weight : "";
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    message.addedAt = object.addedAt !== undefined && object.addedAt !== null ? _timestamp.Timestamp.fromPartial(object.addedAt) : undefined;
    return message;
  }
};
exports.Member = Member;
function createBaseMembers() {
  return {
    members: []
  };
}
var Members = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function (e) {
        return Member.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.members) {
      obj.members = message.members.map(function (e) {
        return e ? Member.toJSON(e) : undefined;
      });
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$members;
    var message = createBaseMembers();
    message.members = ((_object$members = object.members) === null || _object$members === void 0 ? void 0 : _object$members.map(function (e) {
      return Member.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.Members = Members;
function createBaseThresholdDecisionPolicy() {
  return {
    threshold: "",
    windows: undefined
  };
}
var ThresholdDecisionPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      threshold: (0, _helpers.isSet)(object.threshold) ? String(object.threshold) : "",
      windows: (0, _helpers.isSet)(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$threshold;
    var message = createBaseThresholdDecisionPolicy();
    message.threshold = (_object$threshold = object.threshold) !== null && _object$threshold !== void 0 ? _object$threshold : "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  }
};
exports.ThresholdDecisionPolicy = ThresholdDecisionPolicy;
function createBasePercentageDecisionPolicy() {
  return {
    percentage: "",
    windows: undefined
  };
}
var PercentageDecisionPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      percentage: (0, _helpers.isSet)(object.percentage) ? String(object.percentage) : "",
      windows: (0, _helpers.isSet)(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$percentage;
    var message = createBasePercentageDecisionPolicy();
    message.percentage = (_object$percentage = object.percentage) !== null && _object$percentage !== void 0 ? _object$percentage : "";
    message.windows = object.windows !== undefined && object.windows !== null ? DecisionPolicyWindows.fromPartial(object.windows) : undefined;
    return message;
  }
};
exports.PercentageDecisionPolicy = PercentageDecisionPolicy;
function createBaseDecisionPolicyWindows() {
  return {
    votingPeriod: undefined,
    minExecutionPeriod: undefined
  };
}
var DecisionPolicyWindows = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.votingPeriod !== undefined) {
      _duration.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.minExecutionPeriod !== undefined) {
      _duration.Duration.encode(message.minExecutionPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      votingPeriod: (0, _helpers.isSet)(object.votingPeriod) ? _duration.Duration.fromJSON(object.votingPeriod) : undefined,
      minExecutionPeriod: (0, _helpers.isSet)(object.minExecutionPeriod) ? _duration.Duration.fromJSON(object.minExecutionPeriod) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.votingPeriod !== undefined && (obj.votingPeriod = message.votingPeriod ? _duration.Duration.toJSON(message.votingPeriod) : undefined);
    message.minExecutionPeriod !== undefined && (obj.minExecutionPeriod = message.minExecutionPeriod ? _duration.Duration.toJSON(message.minExecutionPeriod) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseDecisionPolicyWindows();
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? _duration.Duration.fromPartial(object.votingPeriod) : undefined;
    message.minExecutionPeriod = object.minExecutionPeriod !== undefined && object.minExecutionPeriod !== null ? _duration.Duration.fromPartial(object.minExecutionPeriod) : undefined;
    return message;
  }
};
exports.DecisionPolicyWindows = DecisionPolicyWindows;
function createBaseGroupInfo() {
  return {
    id: _helpers.Long.UZERO,
    admin: "",
    metadata: "",
    version: _helpers.Long.UZERO,
    totalWeight: "",
    createdAt: undefined
  };
}
var GroupInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (!message.version.isZero()) {
      writer.uint32(32).uint64(message.version);
    }
    if (message.totalWeight !== "") {
      writer.uint32(42).string(message.totalWeight);
    }
    if (message.createdAt !== undefined) {
      _timestamp.Timestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.createdAt = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      id: (0, _helpers.isSet)(object.id) ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO,
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      version: (0, _helpers.isSet)(object.version) ? _helpers.Long.fromValue(object.version) : _helpers.Long.UZERO,
      totalWeight: (0, _helpers.isSet)(object.totalWeight) ? String(object.totalWeight) : "",
      createdAt: (0, _helpers.isSet)(object.createdAt) ? (0, _helpers.fromJsonTimestamp)(object.createdAt) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.id !== undefined && (obj.id = (message.id || _helpers.Long.UZERO).toString());
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.version !== undefined && (obj.version = (message.version || _helpers.Long.UZERO).toString());
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
    message.createdAt !== undefined && (obj.createdAt = (0, _helpers.fromTimestamp)(message.createdAt).toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin, _object$metadata2, _object$totalWeight;
    var message = createBaseGroupInfo();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    message.version = object.version !== undefined && object.version !== null ? _helpers.Long.fromValue(object.version) : _helpers.Long.UZERO;
    message.totalWeight = (_object$totalWeight = object.totalWeight) !== null && _object$totalWeight !== void 0 ? _object$totalWeight : "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? _timestamp.Timestamp.fromPartial(object.createdAt) : undefined;
    return message;
  }
};
exports.GroupInfo = GroupInfo;
function createBaseGroupMember() {
  return {
    groupId: _helpers.Long.UZERO,
    member: undefined
  };
}
var GroupMember = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      groupId: (0, _helpers.isSet)(object.groupId) ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO,
      member: (0, _helpers.isSet)(object.member) ? Member.fromJSON(object.member) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || _helpers.Long.UZERO).toString());
    message.member !== undefined && (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGroupMember();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    message.member = object.member !== undefined && object.member !== null ? Member.fromPartial(object.member) : undefined;
    return message;
  }
};
exports.GroupMember = GroupMember;
function createBaseGroupPolicyInfo() {
  return {
    address: "",
    groupId: _helpers.Long.UZERO,
    admin: "",
    metadata: "",
    version: _helpers.Long.UZERO,
    decisionPolicy: undefined,
    createdAt: undefined
  };
}
var GroupPolicyInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (!message.version.isZero()) {
      writer.uint32(40).uint64(message.version);
    }
    if (message.decisionPolicy !== undefined) {
      _any.Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      _timestamp.Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.createdAt = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      groupId: (0, _helpers.isSet)(object.groupId) ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO,
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      version: (0, _helpers.isSet)(object.version) ? _helpers.Long.fromValue(object.version) : _helpers.Long.UZERO,
      decisionPolicy: (0, _helpers.isSet)(object.decisionPolicy) ? _any.Any.fromJSON(object.decisionPolicy) : undefined,
      createdAt: (0, _helpers.isSet)(object.createdAt) ? (0, _helpers.fromJsonTimestamp)(object.createdAt) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.groupId !== undefined && (obj.groupId = (message.groupId || _helpers.Long.UZERO).toString());
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.version !== undefined && (obj.version = (message.version || _helpers.Long.UZERO).toString());
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? _any.Any.toJSON(message.decisionPolicy) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (0, _helpers.fromTimestamp)(message.createdAt).toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address2, _object$admin2, _object$metadata3;
    var message = createBaseGroupPolicyInfo();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.metadata = (_object$metadata3 = object.metadata) !== null && _object$metadata3 !== void 0 ? _object$metadata3 : "";
    message.version = object.version !== undefined && object.version !== null ? _helpers.Long.fromValue(object.version) : _helpers.Long.UZERO;
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? _any.Any.fromPartial(object.decisionPolicy) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? _timestamp.Timestamp.fromPartial(object.createdAt) : undefined;
    return message;
  }
};
exports.GroupPolicyInfo = GroupPolicyInfo;
function createBaseProposal() {
  return {
    id: _helpers.Long.UZERO,
    address: "",
    metadata: "",
    proposers: [],
    submitTime: undefined,
    groupVersion: _helpers.Long.UZERO,
    groupPolicyVersion: _helpers.Long.UZERO,
    status: 0,
    result: 0,
    finalTallyResult: undefined,
    votingPeriodEnd: undefined,
    executorResult: 0,
    messages: []
  };
}
var Proposal = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.id.isZero()) {
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
      _timestamp.Timestamp.encode(message.submitTime, writer.uint32(42).fork()).ldelim();
    }
    if (!message.groupVersion.isZero()) {
      writer.uint32(48).uint64(message.groupVersion);
    }
    if (!message.groupPolicyVersion.isZero()) {
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
      _timestamp.Timestamp.encode(message.votingPeriodEnd, writer.uint32(90).fork()).ldelim();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.submitTime = _timestamp.Timestamp.decode(reader, reader.uint32());
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
          message.votingPeriodEnd = _timestamp.Timestamp.decode(reader, reader.uint32());
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
  fromJSON: function fromJSON(object) {
    return {
      id: (0, _helpers.isSet)(object.id) ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO,
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : "",
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map(function (e) {
        return String(e);
      }) : [],
      submitTime: (0, _helpers.isSet)(object.submitTime) ? (0, _helpers.fromJsonTimestamp)(object.submitTime) : undefined,
      groupVersion: (0, _helpers.isSet)(object.groupVersion) ? _helpers.Long.fromValue(object.groupVersion) : _helpers.Long.UZERO,
      groupPolicyVersion: (0, _helpers.isSet)(object.groupPolicyVersion) ? _helpers.Long.fromValue(object.groupPolicyVersion) : _helpers.Long.UZERO,
      status: (0, _helpers.isSet)(object.status) ? proposalStatusFromJSON(object.status) : 0,
      result: (0, _helpers.isSet)(object.result) ? proposalResultFromJSON(object.result) : 0,
      finalTallyResult: (0, _helpers.isSet)(object.finalTallyResult) ? TallyResult.fromJSON(object.finalTallyResult) : undefined,
      votingPeriodEnd: (0, _helpers.isSet)(object.votingPeriodEnd) ? (0, _helpers.fromJsonTimestamp)(object.votingPeriodEnd) : undefined,
      executorResult: (0, _helpers.isSet)(object.executorResult) ? proposalExecutorResultFromJSON(object.executorResult) : 0,
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) {
        return _any.Any.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.id !== undefined && (obj.id = (message.id || _helpers.Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.proposers) {
      obj.proposers = message.proposers.map(function (e) {
        return e;
      });
    } else {
      obj.proposers = [];
    }
    message.submitTime !== undefined && (obj.submitTime = (0, _helpers.fromTimestamp)(message.submitTime).toISOString());
    message.groupVersion !== undefined && (obj.groupVersion = (message.groupVersion || _helpers.Long.UZERO).toString());
    message.groupPolicyVersion !== undefined && (obj.groupPolicyVersion = (message.groupPolicyVersion || _helpers.Long.UZERO).toString());
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.result !== undefined && (obj.result = proposalResultToJSON(message.result));
    message.finalTallyResult !== undefined && (obj.finalTallyResult = message.finalTallyResult ? TallyResult.toJSON(message.finalTallyResult) : undefined);
    message.votingPeriodEnd !== undefined && (obj.votingPeriodEnd = (0, _helpers.fromTimestamp)(message.votingPeriodEnd).toISOString());
    message.executorResult !== undefined && (obj.executorResult = proposalExecutorResultToJSON(message.executorResult));
    if (message.messages) {
      obj.messages = message.messages.map(function (e) {
        return e ? _any.Any.toJSON(e) : undefined;
      });
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address3, _object$metadata4, _object$proposers, _object$status, _object$result, _object$executorResul, _object$messages;
    var message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.metadata = (_object$metadata4 = object.metadata) !== null && _object$metadata4 !== void 0 ? _object$metadata4 : "";
    message.proposers = ((_object$proposers = object.proposers) === null || _object$proposers === void 0 ? void 0 : _object$proposers.map(function (e) {
      return e;
    })) || [];
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? _timestamp.Timestamp.fromPartial(object.submitTime) : undefined;
    message.groupVersion = object.groupVersion !== undefined && object.groupVersion !== null ? _helpers.Long.fromValue(object.groupVersion) : _helpers.Long.UZERO;
    message.groupPolicyVersion = object.groupPolicyVersion !== undefined && object.groupPolicyVersion !== null ? _helpers.Long.fromValue(object.groupPolicyVersion) : _helpers.Long.UZERO;
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : 0;
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : undefined;
    message.votingPeriodEnd = object.votingPeriodEnd !== undefined && object.votingPeriodEnd !== null ? _timestamp.Timestamp.fromPartial(object.votingPeriodEnd) : undefined;
    message.executorResult = (_object$executorResul = object.executorResult) !== null && _object$executorResul !== void 0 ? _object$executorResul : 0;
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    return message;
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
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      yesCount: (0, _helpers.isSet)(object.yesCount) ? String(object.yesCount) : "",
      abstainCount: (0, _helpers.isSet)(object.abstainCount) ? String(object.abstainCount) : "",
      noCount: (0, _helpers.isSet)(object.noCount) ? String(object.noCount) : "",
      noWithVetoCount: (0, _helpers.isSet)(object.noWithVetoCount) ? String(object.noWithVetoCount) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.yesCount !== undefined && (obj.yesCount = message.yesCount);
    message.abstainCount !== undefined && (obj.abstainCount = message.abstainCount);
    message.noCount !== undefined && (obj.noCount = message.noCount);
    message.noWithVetoCount !== undefined && (obj.noWithVetoCount = message.noWithVetoCount);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$yesCount, _object$abstainCount, _object$noCount, _object$noWithVetoCou;
    var message = createBaseTallyResult();
    message.yesCount = (_object$yesCount = object.yesCount) !== null && _object$yesCount !== void 0 ? _object$yesCount : "";
    message.abstainCount = (_object$abstainCount = object.abstainCount) !== null && _object$abstainCount !== void 0 ? _object$abstainCount : "";
    message.noCount = (_object$noCount = object.noCount) !== null && _object$noCount !== void 0 ? _object$noCount : "";
    message.noWithVetoCount = (_object$noWithVetoCou = object.noWithVetoCount) !== null && _object$noWithVetoCou !== void 0 ? _object$noWithVetoCou : "";
    return message;
  }
};
exports.TallyResult = TallyResult;
function createBaseVote() {
  return {
    proposalId: _helpers.Long.UZERO,
    voter: "",
    option: 0,
    metadata: "",
    submitTime: undefined
  };
}
var Vote = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposalId.isZero()) {
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
      _timestamp.Timestamp.encode(message.submitTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.submitTime = _timestamp.Timestamp.decode(reader, reader.uint32());
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
      proposalId: (0, _helpers.isSet)(object.proposalId) ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO,
      voter: (0, _helpers.isSet)(object.voter) ? String(object.voter) : "",
      option: (0, _helpers.isSet)(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: (0, _helpers.isSet)(object.metadata) ? String(object.metadata) : "",
      submitTime: (0, _helpers.isSet)(object.submitTime) ? (0, _helpers.fromJsonTimestamp)(object.submitTime) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || _helpers.Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.submitTime !== undefined && (obj.submitTime = (0, _helpers.fromTimestamp)(message.submitTime).toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$voter, _object$option, _object$metadata5;
    var message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.metadata = (_object$metadata5 = object.metadata) !== null && _object$metadata5 !== void 0 ? _object$metadata5 : "";
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? _timestamp.Timestamp.fromPartial(object.submitTime) : undefined;
    return message;
  }
};
exports.Vote = Vote;