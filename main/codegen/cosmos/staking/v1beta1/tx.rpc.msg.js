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
/** Msg defines the staking Msg service. */
var MsgClientImpl = /*#__PURE__*/function () {
  function MsgClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, MsgClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.createValidator = this.createValidator.bind(this);
    this.editValidator = this.editValidator.bind(this);
    this.delegate = this.delegate.bind(this);
    this.beginRedelegate = this.beginRedelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "createValidator",
    value: function createValidator(request) {
      var data = _tx.MsgCreateValidator.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
      return promise.then(function (data) {
        return _tx.MsgCreateValidatorResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "editValidator",
    value: function editValidator(request) {
      var data = _tx.MsgEditValidator.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
      return promise.then(function (data) {
        return _tx.MsgEditValidatorResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "delegate",
    value: function delegate(request) {
      var data = _tx.MsgDelegate.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
      return promise.then(function (data) {
        return _tx.MsgDelegateResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "beginRedelegate",
    value: function beginRedelegate(request) {
      var data = _tx.MsgBeginRedelegate.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
      return promise.then(function (data) {
        return _tx.MsgBeginRedelegateResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "undelegate",
    value: function undelegate(request) {
      var data = _tx.MsgUndelegate.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
      return promise.then(function (data) {
        return _tx.MsgUndelegateResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;