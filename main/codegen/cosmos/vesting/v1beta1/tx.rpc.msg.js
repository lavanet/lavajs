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
    this.createVestingAccount = this.createVestingAccount.bind(this);
    this.createPermanentLockedAccount = this.createPermanentLockedAccount.bind(this);
    this.createPeriodicVestingAccount = this.createPeriodicVestingAccount.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "createVestingAccount",
    value: function createVestingAccount(request) {
      var data = _tx.MsgCreateVestingAccount.encode(request).finish();
      var promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
      return promise.then(function (data) {
        return _tx.MsgCreateVestingAccountResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "createPermanentLockedAccount",
    value: function createPermanentLockedAccount(request) {
      var data = _tx.MsgCreatePermanentLockedAccount.encode(request).finish();
      var promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePermanentLockedAccount", data);
      return promise.then(function (data) {
        return _tx.MsgCreatePermanentLockedAccountResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "createPeriodicVestingAccount",
    value: function createPeriodicVestingAccount(request) {
      var data = _tx.MsgCreatePeriodicVestingAccount.encode(request).finish();
      var promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePeriodicVestingAccount", data);
      return promise.then(function (data) {
        return _tx.MsgCreatePeriodicVestingAccountResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;