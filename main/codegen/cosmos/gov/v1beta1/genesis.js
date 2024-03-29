"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _gov = require("./gov");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the gov module's genesis state. */

/** GenesisState defines the gov module's genesis state. */

function createBaseGenesisState() {
  return {
    startingProposalId: BigInt(0),
    deposits: [],
    votes: [],
    proposals: [],
    depositParams: _gov.DepositParams.fromPartial({}),
    votingParams: _gov.VotingParams.fromPartial({}),
    tallyParams: _gov.TallyParams.fromPartial({})
  };
}
var GenesisState = {
  typeUrl: "/cosmos.gov.v1beta1.GenesisState",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.startingProposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.startingProposalId);
    }
    var _iterator = _createForOfIteratorHelper(message.deposits),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _gov.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.votes),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _gov.Vote.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.proposals),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _gov.Proposal.encode(_v2, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.depositParams !== undefined) {
      _gov.DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.votingParams !== undefined) {
      _gov.VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      _gov.TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
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
          message.startingProposalId = reader.uint64();
          break;
        case 2:
          message.deposits.push(_gov.Deposit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.votes.push(_gov.Vote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.proposals.push(_gov.Proposal.decode(reader, reader.uint32()));
          break;
        case 5:
          message.depositParams = _gov.DepositParams.decode(reader, reader.uint32());
          break;
        case 6:
          message.votingParams = _gov.VotingParams.decode(reader, reader.uint32());
          break;
        case 7:
          message.tallyParams = _gov.TallyParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$deposits, _object$votes, _object$proposals;
    var message = createBaseGenesisState();
    message.startingProposalId = object.startingProposalId !== undefined && object.startingProposalId !== null ? BigInt(object.startingProposalId.toString()) : BigInt(0);
    message.deposits = ((_object$deposits = object.deposits) === null || _object$deposits === void 0 ? void 0 : _object$deposits.map(function (e) {
      return _gov.Deposit.fromPartial(e);
    })) || [];
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(function (e) {
      return _gov.Vote.fromPartial(e);
    })) || [];
    message.proposals = ((_object$proposals = object.proposals) === null || _object$proposals === void 0 ? void 0 : _object$proposals.map(function (e) {
      return _gov.Proposal.fromPartial(e);
    })) || [];
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? _gov.DepositParams.fromPartial(object.depositParams) : undefined;
    message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? _gov.VotingParams.fromPartial(object.votingParams) : undefined;
    message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? _gov.TallyParams.fromPartial(object.tallyParams) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      startingProposalId: BigInt(object.starting_proposal_id),
      deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.deposits) ? object.deposits.map(function (e) {
        return _gov.Deposit.fromAmino(e);
      }) : [],
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) {
        return _gov.Vote.fromAmino(e);
      }) : [],
      proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map(function (e) {
        return _gov.Proposal.fromAmino(e);
      }) : [],
      depositParams: object !== null && object !== void 0 && object.deposit_params ? _gov.DepositParams.fromAmino(object.deposit_params) : undefined,
      votingParams: object !== null && object !== void 0 && object.voting_params ? _gov.VotingParams.fromAmino(object.voting_params) : undefined,
      tallyParams: object !== null && object !== void 0 && object.tally_params ? _gov.TallyParams.fromAmino(object.tally_params) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.starting_proposal_id = message.startingProposalId ? message.startingProposalId.toString() : undefined;
    if (message.deposits) {
      obj.deposits = message.deposits.map(function (e) {
        return e ? _gov.Deposit.toAmino(e) : undefined;
      });
    } else {
      obj.deposits = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(function (e) {
        return e ? _gov.Vote.toAmino(e) : undefined;
      });
    } else {
      obj.votes = [];
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map(function (e) {
        return e ? _gov.Proposal.toAmino(e) : undefined;
      });
    } else {
      obj.proposals = [];
    }
    obj.deposit_params = message.depositParams ? _gov.DepositParams.toAmino(message.depositParams) : undefined;
    obj.voting_params = message.votingParams ? _gov.VotingParams.toAmino(message.votingParams) : undefined;
    obj.tally_params = message.tallyParams ? _gov.TallyParams.toAmino(message.tallyParams) : undefined;
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
      typeUrl: "/cosmos.gov.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
exports.GenesisState = GenesisState;