"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _tx = require("./tx");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
        return _tx.MsgDetectionResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "conflictVoteCommit",
    value: function conflictVoteCommit(request) {
      var data = _tx.MsgConflictVoteCommit.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.conflict.Msg", "ConflictVoteCommit", data);
      return promise.then(function (data) {
        return _tx.MsgConflictVoteCommitResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "conflictVoteReveal",
    value: function conflictVoteReveal(request) {
      var data = _tx.MsgConflictVoteReveal.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.conflict.Msg", "ConflictVoteReveal", data);
      return promise.then(function (data) {
        return _tx.MsgConflictVoteRevealResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;