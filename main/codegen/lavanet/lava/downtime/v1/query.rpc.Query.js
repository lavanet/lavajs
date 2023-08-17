"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _binary = require("../../../../binary");
var _stargate = require("@cosmjs/stargate");
var _query = require("./query");
/** Query represents the query service API for the downtime module. */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.queryParams = this.queryParams.bind(this);
    this.queryDowntime = this.queryDowntime.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "queryParams",
    value: function queryParams() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.downtime.v1.Query", "QueryParams", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "queryDowntime",
    value: function queryDowntime(request) {
      var data = _query.QueryDowntimeRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.downtime.v1.Query", "QueryDowntime", data);
      return promise.then(function (data) {
        return _query.QueryDowntimeResponse.decode(new _binary.BinaryReader(data));
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
    queryParams: function queryParams(request) {
      return queryService.queryParams(request);
    },
    queryDowntime: function queryDowntime(request) {
      return queryService.queryDowntime(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;