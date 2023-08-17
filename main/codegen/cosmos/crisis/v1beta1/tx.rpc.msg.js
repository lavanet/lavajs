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
    this.verifyInvariant = this.verifyInvariant.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "verifyInvariant",
    value: function verifyInvariant(request) {
      var data = _tx.MsgVerifyInvariant.encode(request).finish();
      var promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
      return promise.then(function (data) {
        return _tx.MsgVerifyInvariantResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;