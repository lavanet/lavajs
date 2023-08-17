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
    this.stakeProvider = this.stakeProvider.bind(this);
    this.unstakeProvider = this.unstakeProvider.bind(this);
    this.relayPayment = this.relayPayment.bind(this);
    this.freezeProvider = this.freezeProvider.bind(this);
    this.unfreezeProvider = this.unfreezeProvider.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "stakeProvider",
    value: function stakeProvider(request) {
      var data = _tx.MsgStakeProvider.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Msg", "StakeProvider", data);
      return promise.then(function (data) {
        return _tx.MsgStakeProviderResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "unstakeProvider",
    value: function unstakeProvider(request) {
      var data = _tx.MsgUnstakeProvider.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Msg", "UnstakeProvider", data);
      return promise.then(function (data) {
        return _tx.MsgUnstakeProviderResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "relayPayment",
    value: function relayPayment(request) {
      var data = _tx.MsgRelayPayment.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Msg", "RelayPayment", data);
      return promise.then(function (data) {
        return _tx.MsgRelayPaymentResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "freezeProvider",
    value: function freezeProvider(request) {
      var data = _tx.MsgFreezeProvider.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Msg", "FreezeProvider", data);
      return promise.then(function (data) {
        return _tx.MsgFreezeProviderResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "unfreezeProvider",
    value: function unfreezeProvider(request) {
      var data = _tx.MsgUnfreezeProvider.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Msg", "UnfreezeProvider", data);
      return promise.then(function (data) {
        return _tx.MsgUnfreezeProviderResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;