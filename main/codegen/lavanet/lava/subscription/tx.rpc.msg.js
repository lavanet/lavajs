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
    this.buy = this.buy.bind(this);
    this.addProject = this.addProject.bind(this);
    this.delProject = this.delProject.bind(this);
  }
  (0, _createClass2["default"])(MsgClientImpl, [{
    key: "buy",
    value: function buy(request) {
      var data = _tx.MsgBuy.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.subscription.Msg", "Buy", data);
      return promise.then(function (data) {
        return _tx.MsgBuyResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "addProject",
    value: function addProject(request) {
      var data = _tx.MsgAddProject.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.subscription.Msg", "AddProject", data);
      return promise.then(function (data) {
        return _tx.MsgAddProjectResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "delProject",
    value: function delProject(request) {
      var data = _tx.MsgDelProject.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.subscription.Msg", "DelProject", data);
      return promise.then(function (data) {
        return _tx.MsgDelProjectResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return MsgClientImpl;
}();
exports.MsgClientImpl = MsgClientImpl;