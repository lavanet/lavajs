"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _binary = require("../../../binary");
var _tx = require("./tx");
/** Msg defines the bank Msg service. */
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.submitProposal = this.submitProposal.bind(this);
    this.vote = this.vote.bind(this);
    this.voteWeighted = this.voteWeighted.bind(this);
    this.deposit = this.deposit.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "submitProposal",
    value: function submitProposal(request) {
      var data = _tx.MsgSubmitProposal.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "SubmitProposal", data);
      return promise.then(function (data) {
        return _tx.MsgSubmitProposalResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "vote",
    value: function vote(request) {
      var data = _tx.MsgVote.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Vote", data);
      return promise.then(function (data) {
        return _tx.MsgVoteResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "voteWeighted",
    value: function voteWeighted(request) {
      var data = _tx.MsgVoteWeighted.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "VoteWeighted", data);
      return promise.then(function (data) {
        return _tx.MsgVoteWeightedResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "deposit",
    value: function deposit(request) {
      var data = _tx.MsgDeposit.encode(request).finish();
      var promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Deposit", data);
      return promise.then(function (data) {
        return _tx.MsgDepositResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;