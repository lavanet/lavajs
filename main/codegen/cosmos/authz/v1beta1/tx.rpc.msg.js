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
/** Msg defines the authz Msg service. */
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.grant = this.grant.bind(this);
    this.exec = this.exec.bind(this);
    this.revoke = this.revoke.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "grant",
    value: function grant(request) {
      var data = _tx.MsgGrant.encode(request).finish();
      var promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
      return promise.then(function (data) {
        return _tx.MsgGrantResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "exec",
    value: function exec(request) {
      var data = _tx.MsgExec.encode(request).finish();
      var promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
      return promise.then(function (data) {
        return _tx.MsgExecResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "revoke",
    value: function revoke(request) {
      var data = _tx.MsgRevoke.encode(request).finish();
      var promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
      return promise.then(function (data) {
        return _tx.MsgRevokeResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;