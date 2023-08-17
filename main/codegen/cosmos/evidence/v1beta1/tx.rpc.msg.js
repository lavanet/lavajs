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
/** Msg defines the evidence Msg service. */
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.submitEvidence = this.submitEvidence.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "submitEvidence",
    value: function submitEvidence(request) {
      var data = _tx.MsgSubmitEvidence.encode(request).finish();
      var promise = this.rpc.request("cosmos.evidence.v1beta1.Msg", "SubmitEvidence", data);
      return promise.then(function (data) {
        return _tx.MsgSubmitEvidenceResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;