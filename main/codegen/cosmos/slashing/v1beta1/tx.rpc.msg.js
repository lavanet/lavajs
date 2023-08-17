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
/** Msg defines the slashing Msg service. */
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.unjail = this.unjail.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "unjail",
    value: function unjail(request) {
      var data = _tx.MsgUnjail.encode(request).finish();
      var promise = this.rpc.request("cosmos.slashing.v1beta1.Msg", "Unjail", data);
      return promise.then(function (data) {
        return _tx.MsgUnjailResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;