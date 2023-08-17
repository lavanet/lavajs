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
    this.current = this.current.bind(this);
    this.listProjects = this.listProjects.bind(this);
    this.list = this.list.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.subscription.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "current",
    value: function current(request) {
      var data = _query.QueryCurrentRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.subscription.Query", "Current", data);
      return promise.then(function (data) {
        return _query.QueryCurrentResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "listProjects",
    value: function listProjects(request) {
      var data = _query.QueryListProjectsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.subscription.Query", "ListProjects", data);
      return promise.then(function (data) {
        return _query.QueryListProjectsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "list",
    value: function list() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryListRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.subscription.Query", "List", data);
      return promise.then(function (data) {
        return _query.QueryListResponse.decode(new _binary.BinaryReader(data));
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
    current: function current(request) {
      return queryService.current(request);
    },
    listProjects: function listProjects(request) {
      return queryService.listProjects(request);
    },
    list: function list(request) {
      return queryService.list(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;