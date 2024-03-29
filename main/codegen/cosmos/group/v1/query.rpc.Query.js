"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _binary = require("../../../binary");
var _stargate = require("@cosmjs/stargate");
var _query = require("./query");
/** Query is the cosmos.group.v1 Query service. */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.groupInfo = this.groupInfo.bind(this);
    this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
    this.groupMembers = this.groupMembers.bind(this);
    this.groupsByAdmin = this.groupsByAdmin.bind(this);
    this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
    this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
    this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
    this.votesByProposal = this.votesByProposal.bind(this);
    this.votesByVoter = this.votesByVoter.bind(this);
    this.groupsByMember = this.groupsByMember.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "groupInfo",
    value: function groupInfo(request) {
      var data = _query.QueryGroupInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
      return promise.then(function (data) {
        return _query.QueryGroupInfoResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "groupPolicyInfo",
    value: function groupPolicyInfo(request) {
      var data = _query.QueryGroupPolicyInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
      return promise.then(function (data) {
        return _query.QueryGroupPolicyInfoResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "groupMembers",
    value: function groupMembers(request) {
      var data = _query.QueryGroupMembersRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
      return promise.then(function (data) {
        return _query.QueryGroupMembersResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "groupsByAdmin",
    value: function groupsByAdmin(request) {
      var data = _query.QueryGroupsByAdminRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
      return promise.then(function (data) {
        return _query.QueryGroupsByAdminResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "groupPoliciesByGroup",
    value: function groupPoliciesByGroup(request) {
      var data = _query.QueryGroupPoliciesByGroupRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
      return promise.then(function (data) {
        return _query.QueryGroupPoliciesByGroupResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "groupPoliciesByAdmin",
    value: function groupPoliciesByAdmin(request) {
      var data = _query.QueryGroupPoliciesByAdminRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
      return promise.then(function (data) {
        return _query.QueryGroupPoliciesByAdminResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "proposal",
    value: function proposal(request) {
      var data = _query.QueryProposalRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
      return promise.then(function (data) {
        return _query.QueryProposalResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "proposalsByGroupPolicy",
    value: function proposalsByGroupPolicy(request) {
      var data = _query.QueryProposalsByGroupPolicyRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
      return promise.then(function (data) {
        return _query.QueryProposalsByGroupPolicyResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "voteByProposalVoter",
    value: function voteByProposalVoter(request) {
      var data = _query.QueryVoteByProposalVoterRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
      return promise.then(function (data) {
        return _query.QueryVoteByProposalVoterResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "votesByProposal",
    value: function votesByProposal(request) {
      var data = _query.QueryVotesByProposalRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
      return promise.then(function (data) {
        return _query.QueryVotesByProposalResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "votesByVoter",
    value: function votesByVoter(request) {
      var data = _query.QueryVotesByVoterRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
      return promise.then(function (data) {
        return _query.QueryVotesByVoterResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "groupsByMember",
    value: function groupsByMember(request) {
      var data = _query.QueryGroupsByMemberRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
      return promise.then(function (data) {
        return _query.QueryGroupsByMemberResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "tallyResult",
    value: function tallyResult(request) {
      var data = _query.QueryTallyResultRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
      return promise.then(function (data) {
        return _query.QueryTallyResultResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return QueryClientImpl;
}();
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function createRpcQueryExtension(base) {
  var rpc = (0, _stargate.createProtobufRpcClient)(base);
  var queryService = new QueryClientImpl(rpc);
  return {
    groupInfo: function groupInfo(request) {
      return queryService.groupInfo(request);
    },
    groupPolicyInfo: function groupPolicyInfo(request) {
      return queryService.groupPolicyInfo(request);
    },
    groupMembers: function groupMembers(request) {
      return queryService.groupMembers(request);
    },
    groupsByAdmin: function groupsByAdmin(request) {
      return queryService.groupsByAdmin(request);
    },
    groupPoliciesByGroup: function groupPoliciesByGroup(request) {
      return queryService.groupPoliciesByGroup(request);
    },
    groupPoliciesByAdmin: function groupPoliciesByAdmin(request) {
      return queryService.groupPoliciesByAdmin(request);
    },
    proposal: function proposal(request) {
      return queryService.proposal(request);
    },
    proposalsByGroupPolicy: function proposalsByGroupPolicy(request) {
      return queryService.proposalsByGroupPolicy(request);
    },
    voteByProposalVoter: function voteByProposalVoter(request) {
      return queryService.voteByProposalVoter(request);
    },
    votesByProposal: function votesByProposal(request) {
      return queryService.votesByProposal(request);
    },
    votesByVoter: function votesByVoter(request) {
      return queryService.votesByVoter(request);
    },
    groupsByMember: function groupsByMember(request) {
      return queryService.groupsByMember(request);
    },
    tallyResult: function tallyResult(request) {
      return queryService.tallyResult(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;