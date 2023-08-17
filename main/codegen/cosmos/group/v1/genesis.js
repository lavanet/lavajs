"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _types = require("./types");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the group module's genesis state. */

/** GenesisState defines the group module's genesis state. */

function createBaseGenesisState() {
  return {
    groupSeq: BigInt(0),
    groups: [],
    groupMembers: [],
    groupPolicySeq: BigInt(0),
    groupPolicies: [],
    proposalSeq: BigInt(0),
    proposals: [],
    votes: []
  };
}
var GenesisState = {
  typeUrl: "/cosmos.group.v1.GenesisState",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.groupSeq !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupSeq);
    }
    var _iterator = _createForOfIteratorHelper(message.groups),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _types.GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.groupMembers),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _types.GroupMember.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.groupPolicySeq !== BigInt(0)) {
      writer.uint32(32).uint64(message.groupPolicySeq);
    }
    var _iterator3 = _createForOfIteratorHelper(message.groupPolicies),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _types.GroupPolicyInfo.encode(_v2, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.proposalSeq !== BigInt(0)) {
      writer.uint32(48).uint64(message.proposalSeq);
    }
    var _iterator4 = _createForOfIteratorHelper(message.proposals),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        _types.Proposal.encode(_v3, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.votes),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v4 = _step5.value;
        _types.Vote.encode(_v4, writer.uint32(66).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSeq = reader.uint64();
          break;
        case 2:
          message.groups.push(_types.GroupInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMembers.push(_types.GroupMember.decode(reader, reader.uint32()));
          break;
        case 4:
          message.groupPolicySeq = reader.uint64();
          break;
        case 5:
          message.groupPolicies.push(_types.GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.proposalSeq = reader.uint64();
          break;
        case 7:
          message.proposals.push(_types.Proposal.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votes.push(_types.Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$groups, _object$groupMembers, _object$groupPolicies, _object$proposals, _object$votes;
    var message = createBaseGenesisState();
    message.groupSeq = object.groupSeq !== undefined && object.groupSeq !== null ? BigInt(object.groupSeq.toString()) : BigInt(0);
    message.groups = ((_object$groups = object.groups) === null || _object$groups === void 0 ? void 0 : _object$groups.map(function (e) {
      return _types.GroupInfo.fromPartial(e);
    })) || [];
    message.groupMembers = ((_object$groupMembers = object.groupMembers) === null || _object$groupMembers === void 0 ? void 0 : _object$groupMembers.map(function (e) {
      return _types.GroupMember.fromPartial(e);
    })) || [];
    message.groupPolicySeq = object.groupPolicySeq !== undefined && object.groupPolicySeq !== null ? BigInt(object.groupPolicySeq.toString()) : BigInt(0);
    message.groupPolicies = ((_object$groupPolicies = object.groupPolicies) === null || _object$groupPolicies === void 0 ? void 0 : _object$groupPolicies.map(function (e) {
      return _types.GroupPolicyInfo.fromPartial(e);
    })) || [];
    message.proposalSeq = object.proposalSeq !== undefined && object.proposalSeq !== null ? BigInt(object.proposalSeq.toString()) : BigInt(0);
    message.proposals = ((_object$proposals = object.proposals) === null || _object$proposals === void 0 ? void 0 : _object$proposals.map(function (e) {
      return _types.Proposal.fromPartial(e);
    })) || [];
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(function (e) {
      return _types.Vote.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      groupSeq: BigInt(object.group_seq),
      groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map(function (e) {
        return _types.GroupInfo.fromAmino(e);
      }) : [],
      groupMembers: Array.isArray(object === null || object === void 0 ? void 0 : object.group_members) ? object.group_members.map(function (e) {
        return _types.GroupMember.fromAmino(e);
      }) : [],
      groupPolicySeq: BigInt(object.group_policy_seq),
      groupPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.group_policies) ? object.group_policies.map(function (e) {
        return _types.GroupPolicyInfo.fromAmino(e);
      }) : [],
      proposalSeq: BigInt(object.proposal_seq),
      proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map(function (e) {
        return _types.Proposal.fromAmino(e);
      }) : [],
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) {
        return _types.Vote.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.group_seq = message.groupSeq ? message.groupSeq.toString() : undefined;
    if (message.groups) {
      obj.groups = message.groups.map(function (e) {
        return e ? _types.GroupInfo.toAmino(e) : undefined;
      });
    } else {
      obj.groups = [];
    }
    if (message.groupMembers) {
      obj.group_members = message.groupMembers.map(function (e) {
        return e ? _types.GroupMember.toAmino(e) : undefined;
      });
    } else {
      obj.group_members = [];
    }
    obj.group_policy_seq = message.groupPolicySeq ? message.groupPolicySeq.toString() : undefined;
    if (message.groupPolicies) {
      obj.group_policies = message.groupPolicies.map(function (e) {
        return e ? _types.GroupPolicyInfo.toAmino(e) : undefined;
      });
    } else {
      obj.group_policies = [];
    }
    obj.proposal_seq = message.proposalSeq ? message.proposalSeq.toString() : undefined;
    if (message.proposals) {
      obj.proposals = message.proposals.map(function (e) {
        return e ? _types.Proposal.toAmino(e) : undefined;
      });
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(function (e) {
        return e ? _types.Vote.toAmino(e) : undefined;
      });
    } else {
      obj.votes = [];
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
      typeUrl: "/cosmos.group.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
exports.GenesisState = GenesisState;