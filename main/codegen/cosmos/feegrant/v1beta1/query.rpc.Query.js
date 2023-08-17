"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _binary = require("../../../binary");
var _stargate = require("@cosmjs/stargate");
var _query = require("./query");
/** Query defines the gRPC querier service. */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.allowance = this.allowance.bind(this);
    this.allowances = this.allowances.bind(this);
    this.allowancesByGranter = this.allowancesByGranter.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "allowance",
    value: function allowance(request) {
      var data = _query.QueryAllowanceRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
      return promise.then(function (data) {
        return _query.QueryAllowanceResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "allowances",
    value: function allowances(request) {
      var data = _query.QueryAllowancesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
      return promise.then(function (data) {
        return _query.QueryAllowancesResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "allowancesByGranter",
    value: function allowancesByGranter(request) {
      var data = _query.QueryAllowancesByGranterRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "AllowancesByGranter", data);
      return promise.then(function (data) {
        return _query.QueryAllowancesByGranterResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return QueryClientImpl;
}();
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function createRpcQueryExtension(base) {
  var rpc = (0, _stargate.createProtobufRpcClient)(base);
  var queryService = new QueryClientImpl(rpc);
  return {
    allowance: function allowance(request) {
      return queryService.allowance(request);
    },
    allowances: function allowances(request) {
      return queryService.allowances(request);
    },
    allowancesByGranter: function allowancesByGranter(request) {
      return queryService.allowancesByGranter(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;