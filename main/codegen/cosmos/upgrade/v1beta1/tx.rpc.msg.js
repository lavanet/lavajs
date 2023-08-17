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
/** Msg defines the upgrade Msg service. */
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.softwareUpgrade = this.softwareUpgrade.bind(this);
    this.cancelUpgrade = this.cancelUpgrade.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "softwareUpgrade",
    value: function softwareUpgrade(request) {
      var data = _tx.MsgSoftwareUpgrade.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "SoftwareUpgrade", data);
      return promise.then(function (data) {
        return _tx.MsgSoftwareUpgradeResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "cancelUpgrade",
    value: function cancelUpgrade(request) {
      var data = _tx.MsgCancelUpgrade.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "CancelUpgrade", data);
      return promise.then(function (data) {
        return _tx.MsgCancelUpgradeResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;