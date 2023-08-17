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
    this.params = this.params.bind(this);
    this.list = this.list.bind(this);
    this.info = this.info.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.plans.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "list",
    value: function list() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryListRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.plans.Query", "List", data);
      return promise.then(function (data) {
        return _query.QueryListResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "info",
    value: function info(request) {
      var data = _query.QueryInfoRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.plans.Query", "Info", data);
      return promise.then(function (data) {
        return _query.QueryInfoResponse.decode(new _binary.BinaryReader(data));
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
    params: function params(request) {
      return queryService.params(request);
    },
    list: function list(request) {
      return queryService.list(request);
    },
    info: function info(request) {
      return queryService.info(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;