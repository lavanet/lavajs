"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgVoteWeightedResponse = exports.MsgVoteWeighted = exports.MsgVoteResponse = exports.MsgVote = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = exports.MsgExecLegacyContentResponse = exports.MsgExecLegacyContent = exports.MsgDepositResponse = exports.MsgDeposit = void 0;
var _any = require("../../../google/protobuf/any");
var _coin = require("../../base/v1beta1/coin");
var _gov = require("./gov");
var _binary = require("../../../binary");
var _helpers = require("../../../helpers");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */

/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */

/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */

/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */

/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */

/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */

/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */

/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */

/** MsgVote defines a message to cast a vote. */

/** MsgVote defines a message to cast a vote. */

/** MsgVoteResponse defines the Msg/Vote response type. */

/** MsgVoteResponse defines the Msg/Vote response type. */

/** MsgVoteWeighted defines a message to cast a vote. */

/** MsgVoteWeighted defines a message to cast a vote. */

/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */

/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */

/** MsgDepositResponse defines the Msg/Deposit response type. */

/** MsgDepositResponse defines the Msg/Deposit response type. */

function createBaseMsgSubmitProposal() {
  return {
    messages: [],
    initialDeposit: [],
    proposer: "",
    metadata: ""
  };
}
var MsgSubmitProposal = {
  typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.messages),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _any.Any.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.initialDeposit),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _coin.Coin.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(_any.Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.initialDeposit.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
          break;
        case 4:
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
    var _object$messages, _object$initialDeposi, _object$proposer, _object$metadata;
    var message = createBaseMsgSubmitProposal();
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(function (e) {
      return _any.Any.fromPartial(e);
    })) || [];
    message.initialDeposit = ((_object$initialDeposi = object.initialDeposit) === null || _object$initialDeposi === void 0 ? void 0 : _object$initialDeposi.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.proposer = (_object$proposer = object.proposer) !== null && _object$proposer !== void 0 ? _object$proposer : "";
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) {
        return _any.Any.fromAmino(e);
      }) : [],
      initialDeposit: Array.isArray(object === null || object === void 0 ? void 0 : object.initial_deposit) ? object.initial_deposit.map(function (e) {
        return _coin.Coin.fromAmino(e);
      }) : [],
      proposer: object.proposer,
      metadata: object.metadata
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.messages) {
      obj.messages = message.messages.map(function (e) {
        return e ? _any.Any.toAmino(e) : undefined;
      });
    } else {
      obj.messages = [];
    }
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map(function (e) {
        return e ? _coin.Coin.toAmino(e) : undefined;
      });
    } else {
      obj.initial_deposit = [];
    }
    obj.proposer = message.proposer;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
exports.MsgSubmitProposal = MsgSubmitProposal;
function createBaseMsgSubmitProposalResponse() {
  return {
    proposalId: BigInt(0)
  };
}
var MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
exports.MsgSubmitProposalResponse = MsgSubmitProposalResponse;
function createBaseMsgExecLegacyContent() {
  return {
    content: _any.Any.fromPartial({}),
    authority: ""
  };
}
var MsgExecLegacyContent = {
  typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.content !== undefined) {
      _any.Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExecLegacyContent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = _any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$authority;
    var message = createBaseMsgExecLegacyContent();
    message.content = object.content !== undefined && object.content !== null ? _any.Any.fromPartial(object.content) : undefined;
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      content: object !== null && object !== void 0 && object.content ? _any.Any.fromAmino(object.content) : undefined,
      authority: object.authority
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.content = message.content ? _any.Any.toAmino(message.content) : undefined;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgExecLegacyContent.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgExecLegacyContent",
      value: MsgExecLegacyContent.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgExecLegacyContent.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgExecLegacyContent.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
      value: MsgExecLegacyContent.encode(message).finish()
    };
  }
};
exports.MsgExecLegacyContent = MsgExecLegacyContent;
function createBaseMsgExecLegacyContentResponse() {
  return {};
}
var MsgExecLegacyContentResponse = {
  typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExecLegacyContentResponse();
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
    var message = createBaseMsgExecLegacyContentResponse();
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
    return MsgExecLegacyContentResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgExecLegacyContentResponse",
      value: MsgExecLegacyContentResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgExecLegacyContentResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgExecLegacyContentResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse",
      value: MsgExecLegacyContentResponse.encode(message).finish()
    };
  }
};
exports.MsgExecLegacyContentResponse = MsgExecLegacyContentResponse;
function createBaseMsgVote() {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    metadata: ""
  };
}
var MsgVote = {
  typeUrl: "/cosmos.gov.v1.MsgVote",
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
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVote();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$voter, _object$option, _object$metadata2;
    var message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter,
      option: (0, _helpers.isSet)(object.option) ? (0, _gov.voteOptionFromJSON)(object.option) : -1,
      metadata: object.metadata
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgVote.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
exports.MsgVote = MsgVote;
function createBaseMsgVoteResponse() {
  return {};
}
var MsgVoteResponse = {
  typeUrl: "/cosmos.gov.v1.MsgVoteResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVoteResponse();
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
    var message = createBaseMsgVoteResponse();
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
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgVoteResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
exports.MsgVoteResponse = MsgVoteResponse;
function createBaseMsgVoteWeighted() {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: [],
    metadata: ""
  };
}
var MsgVoteWeighted = {
  typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    var _iterator3 = _createForOfIteratorHelper(message.options),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _gov.WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVoteWeighted();
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
          message.options.push(_gov.WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 4:
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
    var _object$voter2, _object$options, _object$metadata3;
    var message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = (_object$voter2 = object.voter) !== null && _object$voter2 !== void 0 ? _object$voter2 : "";
    message.options = ((_object$options = object.options) === null || _object$options === void 0 ? void 0 : _object$options.map(function (e) {
      return _gov.WeightedVoteOption.fromPartial(e);
    })) || [];
    message.metadata = (_object$metadata3 = object.metadata) !== null && _object$metadata3 !== void 0 ? _object$metadata3 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter,
      options: Array.isArray(object === null || object === void 0 ? void 0 : object.options) ? object.options.map(function (e) {
        return _gov.WeightedVoteOption.fromAmino(e);
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
        return e ? _gov.WeightedVoteOption.toAmino(e) : undefined;
      });
    } else {
      obj.options = [];
    }
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgVoteWeighted.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgVoteWeighted",
      value: MsgVoteWeighted.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgVoteWeighted.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgVoteWeighted.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
      value: MsgVoteWeighted.encode(message).finish()
    };
  }
};
exports.MsgVoteWeighted = MsgVoteWeighted;
function createBaseMsgVoteWeightedResponse() {
  return {};
}
var MsgVoteWeightedResponse = {
  typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVoteWeightedResponse();
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
    var message = createBaseMsgVoteWeightedResponse();
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
    return MsgVoteWeightedResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgVoteWeightedResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgVoteWeightedResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.encode(message).finish()
    };
  }
};
exports.MsgVoteWeightedResponse = MsgVoteWeightedResponse;
function createBaseMsgDeposit() {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
var MsgDeposit = {
  typeUrl: "/cosmos.gov.v1.MsgDeposit",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    var _iterator4 = _createForOfIteratorHelper(message.amount),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseMsgDeposit();
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
    var message = createBaseMsgDeposit();
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
    return MsgDeposit.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgDeposit",
      value: MsgDeposit.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgDeposit.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
exports.MsgDeposit = MsgDeposit;
function createBaseMsgDepositResponse() {
  return {};
}
var MsgDepositResponse = {
  typeUrl: "/cosmos.gov.v1.MsgDepositResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDepositResponse();
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
    var message = createBaseMsgDepositResponse();
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
    return MsgDepositResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/v1/MsgDepositResponse",
      value: MsgDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgDepositResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
exports.MsgDepositResponse = MsgDepositResponse;