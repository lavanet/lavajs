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
/** Query defines the gRPC querier service for gov module */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "proposal",
    value: function proposal(request) {
      var data = _query.QueryProposalRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Proposal", data);
      return promise.then(function (data) {
        return _query.QueryProposalResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "proposals",
    value: function proposals(request) {
      var data = _query.QueryProposalsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Proposals", data);
      return promise.then(function (data) {
        return _query.QueryProposalsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "vote",
    value: function vote(request) {
      var data = _query.QueryVoteRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Vote", data);
      return promise.then(function (data) {
        return _query.QueryVoteResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "votes",
    value: function votes(request) {
      var data = _query.QueryVotesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Votes", data);
      return promise.then(function (data) {
        return _query.QueryVotesResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "params",
    value: function params(request) {
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "deposit",
    value: function deposit(request) {
      var data = _query.QueryDepositRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Deposit", data);
      return promise.then(function (data) {
        return _query.QueryDepositResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "deposits",
    value: function deposits(request) {
      var data = _query.QueryDepositsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "Deposits", data);
      return promise.then(function (data) {
        return _query.QueryDepositsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "tallyResult",
    value: function tallyResult(request) {
      var data = _query.QueryTallyResultRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1.Query", "TallyResult", data);
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
    proposal: function proposal(request) {
      return queryService.proposal(request);
    },
    proposals: function proposals(request) {
      return queryService.proposals(request);
    },
    vote: function vote(request) {
      return queryService.vote(request);
    },
    votes: function votes(request) {
      return queryService.votes(request);
    },
    params: function params(request) {
      return queryService.params(request);
    },
    deposit: function deposit(request) {
      return queryService.deposit(request);
    },
    deposits: function deposits(request) {
      return queryService.deposits(request);
    },
    tallyResult: function tallyResult(request) {
      return queryService.tallyResult(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;