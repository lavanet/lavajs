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
/** Msg defines the distribution Msg service. */
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
    this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
    this.fundCommunityPool = this.fundCommunityPool.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "setWithdrawAddress",
    value: function setWithdrawAddress(request) {
      var data = _tx.MsgSetWithdrawAddress.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
      return promise.then(function (data) {
        return _tx.MsgSetWithdrawAddressResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "withdrawDelegatorReward",
    value: function withdrawDelegatorReward(request) {
      var data = _tx.MsgWithdrawDelegatorReward.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
      return promise.then(function (data) {
        return _tx.MsgWithdrawDelegatorRewardResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "withdrawValidatorCommission",
    value: function withdrawValidatorCommission(request) {
      var data = _tx.MsgWithdrawValidatorCommission.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
      return promise.then(function (data) {
        return _tx.MsgWithdrawValidatorCommissionResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "fundCommunityPool",
    value: function fundCommunityPool(request) {
      var data = _tx.MsgFundCommunityPool.encode(request).finish();
      var promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
      return promise.then(function (data) {
        return _tx.MsgFundCommunityPoolResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;