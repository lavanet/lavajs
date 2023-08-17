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
    this.spec = this.spec.bind(this);
    this.specAll = this.specAll.bind(this);
    this.specRaw = this.specRaw.bind(this);
    this.specAllRaw = this.specAllRaw.bind(this);
    this.showAllChains = this.showAllChains.bind(this);
    this.showChainInfo = this.showChainInfo.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.spec.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "spec",
    value: function spec(request) {
      var data = _query.QueryGetSpecRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.spec.Query", "Spec", data);
      return promise.then(function (data) {
        return _query.QueryGetSpecResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "specAll",
    value: function specAll() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllSpecRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.spec.Query", "SpecAll", data);
      return promise.then(function (data) {
        return _query.QueryAllSpecResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "specRaw",
    value: function specRaw(request) {
      var data = _query.QueryGetSpecRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.spec.Query", "SpecRaw", data);
      return promise.then(function (data) {
        return _query.QueryGetSpecResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "specAllRaw",
    value: function specAllRaw() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllSpecRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.spec.Query", "SpecAllRaw", data);
      return promise.then(function (data) {
        return _query.QueryAllSpecResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "showAllChains",
    value: function showAllChains() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryShowAllChainsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.spec.Query", "ShowAllChains", data);
      return promise.then(function (data) {
        return _query.QueryShowAllChainsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "showChainInfo",
    value: function showChainInfo(request) {
      var data = _query.QueryShowChainInfoRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.spec.Query", "ShowChainInfo", data);
      return promise.then(function (data) {
        return _query.QueryShowChainInfoResponse.decode(new _binary.BinaryReader(data));
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
    spec: function spec(request) {
      return queryService.spec(request);
    },
    specAll: function specAll(request) {
      return queryService.specAll(request);
    },
    specRaw: function specRaw(request) {
      return queryService.specRaw(request);
    },
    specAllRaw: function specAllRaw(request) {
      return queryService.specAllRaw(request);
    },
    showAllChains: function showAllChains(request) {
      return queryService.showAllChains(request);
    },
    showChainInfo: function showChainInfo(request) {
      return queryService.showChainInfo(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;