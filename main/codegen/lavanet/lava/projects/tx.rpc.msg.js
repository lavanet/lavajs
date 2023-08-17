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
    this.addKeys = this.addKeys.bind(this);
    this.delKeys = this.delKeys.bind(this);
    this.setPolicy = this.setPolicy.bind(this);
    this.setSubscriptionPolicy = this.setSubscriptionPolicy.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "addKeys",
    value: function addKeys(request) {
      var data = _tx.MsgAddKeys.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.projects.Msg", "AddKeys", data);
      return promise.then(function (data) {
        return _tx.MsgAddKeysResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "delKeys",
    value: function delKeys(request) {
      var data = _tx.MsgDelKeys.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.projects.Msg", "DelKeys", data);
      return promise.then(function (data) {
        return _tx.MsgDelKeysResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "setPolicy",
    value: function setPolicy(request) {
      var data = _tx.MsgSetPolicy.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.projects.Msg", "SetPolicy", data);
      return promise.then(function (data) {
        return _tx.MsgSetPolicyResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "setSubscriptionPolicy",
    value: function setSubscriptionPolicy(request) {
      var data = _tx.MsgSetSubscriptionPolicy.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.projects.Msg", "SetSubscriptionPolicy", data);
      return promise.then(function (data) {
        return _tx.MsgSetSubscriptionPolicyResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;