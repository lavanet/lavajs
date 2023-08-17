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
/** Msg defines the feegrant msg service. */
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.grantAllowance = this.grantAllowance.bind(this);
    this.revokeAllowance = this.revokeAllowance.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "grantAllowance",
    value: function grantAllowance(request) {
      var data = _tx.MsgGrantAllowance.encode(request).finish();
      var promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
      return promise.then(function (data) {
        return _tx.MsgGrantAllowanceResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "revokeAllowance",
    value: function revokeAllowance(request) {
      var data = _tx.MsgRevokeAllowance.encode(request).finish();
      var promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
      return promise.then(function (data) {
        return _tx.MsgRevokeAllowanceResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;