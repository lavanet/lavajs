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
/** Msg defines the Msg service. */
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.detection = this.detection.bind(this);
    this.conflictVoteCommit = this.conflictVoteCommit.bind(this);
    this.conflictVoteReveal = this.conflictVoteReveal.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "detection",
    value: function detection(request) {
      var data = _tx.MsgDetection.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.conflict.Msg", "Detection", data);
      return promise.then(function (data) {
        return _tx.MsgDetectionResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "conflictVoteCommit",
    value: function conflictVoteCommit(request) {
      var data = _tx.MsgConflictVoteCommit.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.conflict.Msg", "ConflictVoteCommit", data);
      return promise.then(function (data) {
        return _tx.MsgConflictVoteCommitResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "conflictVoteReveal",
    value: function conflictVoteReveal(request) {
      var data = _tx.MsgConflictVoteReveal.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.conflict.Msg", "ConflictVoteReveal", data);
      return promise.then(function (data) {
        return _tx.MsgConflictVoteRevealResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;