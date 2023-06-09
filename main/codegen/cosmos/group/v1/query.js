"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryVotesByVoterResponse = exports.QueryVotesByVoterRequest = exports.QueryVotesByProposalResponse = exports.QueryVotesByProposalRequest = exports.QueryVoteByProposalVoterResponse = exports.QueryVoteByProposalVoterRequest = exports.QueryTallyResultResponse = exports.QueryTallyResultRequest = exports.QueryProposalsByGroupPolicyResponse = exports.QueryProposalsByGroupPolicyRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = exports.QueryGroupsByMemberResponse = exports.QueryGroupsByMemberRequest = exports.QueryGroupsByAdminResponse = exports.QueryGroupsByAdminRequest = exports.QueryGroupPolicyInfoResponse = exports.QueryGroupPolicyInfoRequest = exports.QueryGroupPoliciesByGroupResponse = exports.QueryGroupPoliciesByGroupRequest = exports.QueryGroupPoliciesByAdminResponse = exports.QueryGroupPoliciesByAdminRequest = exports.QueryGroupMembersResponse = exports.QueryGroupMembersRequest = exports.QueryGroupInfoResponse = exports.QueryGroupInfoRequest = void 0;
var _pagination = require("../../base/query/v1beta1/pagination");
var _types = require("./types");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */

/** QueryGroupInfoRequest is the Query/GroupInfo request type. */

/** QueryGroupInfoResponse is the Query/GroupInfo response type. */

/** QueryGroupInfoResponse is the Query/GroupInfo response type. */

/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */

/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */

/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */

/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */

/** QueryGroupMembersRequest is the Query/GroupMembers request type. */

/** QueryGroupMembersRequest is the Query/GroupMembers request type. */

/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */

/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */

/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */

/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */

/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */

/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */

/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */

/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */

/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */

/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */

/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */

/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */

/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */

/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */

/** QueryProposalRequest is the Query/Proposal request type. */

/** QueryProposalRequest is the Query/Proposal request type. */

/** QueryProposalResponse is the Query/Proposal response type. */

/** QueryProposalResponse is the Query/Proposal response type. */

/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */

/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */

/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */

/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */

/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */

/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */

/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */

/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */

/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */

/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */

/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */

/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */

/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */

/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */

/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */

/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */

/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */

/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */

/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */

/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */

/** QueryTallyResultRequest is the Query/TallyResult request type. */

/** QueryTallyResultRequest is the Query/TallyResult request type. */

/** QueryTallyResultResponse is the Query/TallyResult response type. */

/** QueryTallyResultResponse is the Query/TallyResult response type. */

function createBaseQueryGroupInfoRequest() {
  return {
    groupId: _helpers.Long.UZERO
  };
}
var QueryGroupInfoRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupInfoRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
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
      groupId: (0, _helpers.isSet)(object.groupId) ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGroupInfoRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryGroupInfoRequest = QueryGroupInfoRequest;
function createBaseQueryGroupInfoResponse() {
  return {
    info: undefined
  };
}
var QueryGroupInfoResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.info !== undefined) {
      _types.GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = _types.GroupInfo.decode(reader, reader.uint32());
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
      info: (0, _helpers.isSet)(object.info) ? _types.GroupInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.info !== undefined && (obj.info = message.info ? _types.GroupInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGroupInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? _types.GroupInfo.fromPartial(object.info) : undefined;
    return message;
  }
};
exports.QueryGroupInfoResponse = QueryGroupInfoResponse;
function createBaseQueryGroupPolicyInfoRequest() {
  return {
    address: ""
  };
}
var QueryGroupPolicyInfoRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupPolicyInfoRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
      address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseQueryGroupPolicyInfoRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
exports.QueryGroupPolicyInfoRequest = QueryGroupPolicyInfoRequest;
function createBaseQueryGroupPolicyInfoResponse() {
  return {
    info: undefined
  };
}
var QueryGroupPolicyInfoResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.info !== undefined) {
      _types.GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupPolicyInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = _types.GroupPolicyInfo.decode(reader, reader.uint32());
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
      info: (0, _helpers.isSet)(object.info) ? _types.GroupPolicyInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.info !== undefined && (obj.info = message.info ? _types.GroupPolicyInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGroupPolicyInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? _types.GroupPolicyInfo.fromPartial(object.info) : undefined;
    return message;
  }
};
exports.QueryGroupPolicyInfoResponse = QueryGroupPolicyInfoResponse;
function createBaseQueryGroupMembersRequest() {
  return {
    groupId: _helpers.Long.UZERO,
    pagination: undefined
  };
}
var QueryGroupMembersRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupMembersRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || _helpers.Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGroupMembersRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryGroupMembersRequest = QueryGroupMembersRequest;
function createBaseQueryGroupMembersResponse() {
  return {
    members: [],
    pagination: undefined
  };
}
var QueryGroupMembersResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.members),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _types.GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupMembersResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(_types.GroupMember.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
        return _types.GroupMember.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.members) {
      obj.members = message.members.map(function (e) {
        return e ? _types.GroupMember.toJSON(e) : undefined;
      });
    } else {
      obj.members = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$members;
    var message = createBaseQueryGroupMembersResponse();
    message.members = ((_object$members = object.members) === null || _object$members === void 0 ? void 0 : _object$members.map(function (e) {
      return _types.GroupMember.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryGroupMembersResponse = QueryGroupMembersResponse;
function createBaseQueryGroupsByAdminRequest() {
  return {
    admin: "",
    pagination: undefined
  };
}
var QueryGroupsByAdminRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupsByAdminRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin;
    var message = createBaseQueryGroupsByAdminRequest();
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryGroupsByAdminRequest = QueryGroupsByAdminRequest;
function createBaseQueryGroupsByAdminResponse() {
  return {
    groups: [],
    pagination: undefined
  };
}
var QueryGroupsByAdminResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.groups),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _types.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupsByAdminResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(_types.GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map(function (e) {
        return _types.GroupInfo.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.groups) {
      obj.groups = message.groups.map(function (e) {
        return e ? _types.GroupInfo.toJSON(e) : undefined;
      });
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$groups;
    var message = createBaseQueryGroupsByAdminResponse();
    message.groups = ((_object$groups = object.groups) === null || _object$groups === void 0 ? void 0 : _object$groups.map(function (e) {
      return _types.GroupInfo.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryGroupsByAdminResponse = QueryGroupsByAdminResponse;
function createBaseQueryGroupPoliciesByGroupRequest() {
  return {
    groupId: _helpers.Long.UZERO,
    pagination: undefined
  };
}
var QueryGroupPoliciesByGroupRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupPoliciesByGroupRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || _helpers.Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGroupPoliciesByGroupRequest();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? _helpers.Long.fromValue(object.groupId) : _helpers.Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryGroupPoliciesByGroupRequest = QueryGroupPoliciesByGroupRequest;
function createBaseQueryGroupPoliciesByGroupResponse() {
  return {
    groupPolicies: [],
    pagination: undefined
  };
}
var QueryGroupPoliciesByGroupResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.groupPolicies),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _types.GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupPoliciesByGroupResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(_types.GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      groupPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.groupPolicies) ? object.groupPolicies.map(function (e) {
        return _types.GroupPolicyInfo.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map(function (e) {
        return e ? _types.GroupPolicyInfo.toJSON(e) : undefined;
      });
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$groupPolicies;
    var message = createBaseQueryGroupPoliciesByGroupResponse();
    message.groupPolicies = ((_object$groupPolicies = object.groupPolicies) === null || _object$groupPolicies === void 0 ? void 0 : _object$groupPolicies.map(function (e) {
      return _types.GroupPolicyInfo.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryGroupPoliciesByGroupResponse = QueryGroupPoliciesByGroupResponse;
function createBaseQueryGroupPoliciesByAdminRequest() {
  return {
    admin: "",
    pagination: undefined
  };
}
var QueryGroupPoliciesByAdminRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupPoliciesByAdminRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      admin: (0, _helpers.isSet)(object.admin) ? String(object.admin) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$admin2;
    var message = createBaseQueryGroupPoliciesByAdminRequest();
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryGroupPoliciesByAdminRequest = QueryGroupPoliciesByAdminRequest;
function createBaseQueryGroupPoliciesByAdminResponse() {
  return {
    groupPolicies: [],
    pagination: undefined
  };
}
var QueryGroupPoliciesByAdminResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.groupPolicies),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _types.GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupPoliciesByAdminResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicies.push(_types.GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      groupPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.groupPolicies) ? object.groupPolicies.map(function (e) {
        return _types.GroupPolicyInfo.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map(function (e) {
        return e ? _types.GroupPolicyInfo.toJSON(e) : undefined;
      });
    } else {
      obj.groupPolicies = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$groupPolicies2;
    var message = createBaseQueryGroupPoliciesByAdminResponse();
    message.groupPolicies = ((_object$groupPolicies2 = object.groupPolicies) === null || _object$groupPolicies2 === void 0 ? void 0 : _object$groupPolicies2.map(function (e) {
      return _types.GroupPolicyInfo.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryGroupPoliciesByAdminResponse = QueryGroupPoliciesByAdminResponse;
function createBaseQueryProposalRequest() {
  return {
    proposalId: _helpers.Long.UZERO
  };
}
var QueryProposalRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryProposalRequest();
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
  fromJSON: function fromJSON(object) {
    return {
      proposalId: (0, _helpers.isSet)(object.proposalId) ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryProposalRequest = QueryProposalRequest;
function createBaseQueryProposalResponse() {
  return {
    proposal: undefined
  };
}
var QueryProposalResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.proposal !== undefined) {
      _types.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = _types.Proposal.decode(reader, reader.uint32());
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
      proposal: (0, _helpers.isSet)(object.proposal) ? _types.Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? _types.Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? _types.Proposal.fromPartial(object.proposal) : undefined;
    return message;
  }
};
exports.QueryProposalResponse = QueryProposalResponse;
function createBaseQueryProposalsByGroupPolicyRequest() {
  return {
    address: "",
    pagination: undefined
  };
}
var QueryProposalsByGroupPolicyRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryProposalsByGroupPolicyRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address2;
    var message = createBaseQueryProposalsByGroupPolicyRequest();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryProposalsByGroupPolicyRequest = QueryProposalsByGroupPolicyRequest;
function createBaseQueryProposalsByGroupPolicyResponse() {
  return {
    proposals: [],
    pagination: undefined
  };
}
var QueryProposalsByGroupPolicyResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.proposals),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _types.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryProposalsByGroupPolicyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(_types.Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map(function (e) {
        return _types.Proposal.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(function (e) {
        return e ? _types.Proposal.toJSON(e) : undefined;
      });
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$proposals;
    var message = createBaseQueryProposalsByGroupPolicyResponse();
    message.proposals = ((_object$proposals = object.proposals) === null || _object$proposals === void 0 ? void 0 : _object$proposals.map(function (e) {
      return _types.Proposal.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryProposalsByGroupPolicyResponse = QueryProposalsByGroupPolicyResponse;
function createBaseQueryVoteByProposalVoterRequest() {
  return {
    proposalId: _helpers.Long.UZERO,
    voter: ""
  };
}
var QueryVoteByProposalVoterRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryVoteByProposalVoterRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
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
      voter: (0, _helpers.isSet)(object.voter) ? String(object.voter) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || _helpers.Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$voter;
    var message = createBaseQueryVoteByProposalVoterRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    return message;
  }
};
exports.QueryVoteByProposalVoterRequest = QueryVoteByProposalVoterRequest;
function createBaseQueryVoteByProposalVoterResponse() {
  return {
    vote: undefined
  };
}
var QueryVoteByProposalVoterResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.vote !== undefined) {
      _types.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryVoteByProposalVoterResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = _types.Vote.decode(reader, reader.uint32());
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
      vote: (0, _helpers.isSet)(object.vote) ? _types.Vote.fromJSON(object.vote) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.vote !== undefined && (obj.vote = message.vote ? _types.Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryVoteByProposalVoterResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? _types.Vote.fromPartial(object.vote) : undefined;
    return message;
  }
};
exports.QueryVoteByProposalVoterResponse = QueryVoteByProposalVoterResponse;
function createBaseQueryVotesByProposalRequest() {
  return {
    proposalId: _helpers.Long.UZERO,
    pagination: undefined
  };
}
var QueryVotesByProposalRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryVotesByProposalRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || _helpers.Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryVotesByProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryVotesByProposalRequest = QueryVotesByProposalRequest;
function createBaseQueryVotesByProposalResponse() {
  return {
    votes: [],
    pagination: undefined
  };
}
var QueryVotesByProposalResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.votes),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _types.Vote.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryVotesByProposalResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(_types.Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) {
        return _types.Vote.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.votes) {
      obj.votes = message.votes.map(function (e) {
        return e ? _types.Vote.toJSON(e) : undefined;
      });
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$votes;
    var message = createBaseQueryVotesByProposalResponse();
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(function (e) {
      return _types.Vote.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryVotesByProposalResponse = QueryVotesByProposalResponse;
function createBaseQueryVotesByVoterRequest() {
  return {
    voter: "",
    pagination: undefined
  };
}
var QueryVotesByVoterRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryVotesByVoterRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      voter: (0, _helpers.isSet)(object.voter) ? String(object.voter) : "",
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$voter2;
    var message = createBaseQueryVotesByVoterRequest();
    message.voter = (_object$voter2 = object.voter) !== null && _object$voter2 !== void 0 ? _object$voter2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryVotesByVoterRequest = QueryVotesByVoterRequest;
function createBaseQueryVotesByVoterResponse() {
  return {
    votes: [],
    pagination: undefined
  };
}
var QueryVotesByVoterResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator7 = _createForOfIteratorHelper(message.votes),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _types.Vote.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryVotesByVoterResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(_types.Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) {
        return _types.Vote.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.votes) {
      obj.votes = message.votes.map(function (e) {
        return e ? _types.Vote.toJSON(e) : undefined;
      });
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$votes2;
    var message = createBaseQueryVotesByVoterResponse();
    message.votes = ((_object$votes2 = object.votes) === null || _object$votes2 === void 0 ? void 0 : _object$votes2.map(function (e) {
      return _types.Vote.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryVotesByVoterResponse = QueryVotesByVoterResponse;
function createBaseQueryGroupsByMemberRequest() {
  return {
    address: "",
    pagination: undefined
  };
}
var QueryGroupsByMemberRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupsByMemberRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$address3;
    var message = createBaseQueryGroupsByMemberRequest();
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryGroupsByMemberRequest = QueryGroupsByMemberRequest;
function createBaseQueryGroupsByMemberResponse() {
  return {
    groups: [],
    pagination: undefined
  };
}
var QueryGroupsByMemberResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator8 = _createForOfIteratorHelper(message.groups),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var v = _step8.value;
        _types.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGroupsByMemberResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(_types.GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
      groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map(function (e) {
        return _types.GroupInfo.fromJSON(e);
      }) : [],
      pagination: (0, _helpers.isSet)(object.pagination) ? _pagination.PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.groups) {
      obj.groups = message.groups.map(function (e) {
        return e ? _types.GroupInfo.toJSON(e) : undefined;
      });
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$groups2;
    var message = createBaseQueryGroupsByMemberResponse();
    message.groups = ((_object$groups2 = object.groups) === null || _object$groups2 === void 0 ? void 0 : _object$groups2.map(function (e) {
      return _types.GroupInfo.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryGroupsByMemberResponse = QueryGroupsByMemberResponse;
function createBaseQueryTallyResultRequest() {
  return {
    proposalId: _helpers.Long.UZERO
  };
}
var QueryTallyResultRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTallyResultRequest();
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
  fromJSON: function fromJSON(object) {
    return {
      proposalId: (0, _helpers.isSet)(object.proposalId) ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryTallyResultRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? _helpers.Long.fromValue(object.proposalId) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryTallyResultRequest = QueryTallyResultRequest;
function createBaseQueryTallyResultResponse() {
  return {
    tally: undefined
  };
}
var QueryTallyResultResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.tally !== undefined) {
      _types.TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = _types.TallyResult.decode(reader, reader.uint32());
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
      tally: (0, _helpers.isSet)(object.tally) ? _types.TallyResult.fromJSON(object.tally) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.tally !== undefined && (obj.tally = message.tally ? _types.TallyResult.toJSON(message.tally) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== undefined && object.tally !== null ? _types.TallyResult.fromPartial(object.tally) : undefined;
    return message;
  }
};
exports.QueryTallyResultResponse = QueryTallyResultResponse;