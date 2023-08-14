"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _stargate = require("@cosmjs/stargate");
var _query = require("./query");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "spec",
    value: function spec(request) {
      var data = _query.QueryGetSpecRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.spec.Query", "Spec", data);
      return promise.then(function (data) {
        return _query.QueryGetSpecResponse.decode(new _m0.Reader(data));
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
        return _query.QueryAllSpecResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "specRaw",
    value: function specRaw(request) {
      var data = _query.QueryGetSpecRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.spec.Query", "SpecRaw", data);
      return promise.then(function (data) {
        return _query.QueryGetSpecResponse.decode(new _m0.Reader(data));
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
        return _query.QueryAllSpecResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "showAllChains",
    value: function showAllChains() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryShowAllChainsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.spec.Query", "ShowAllChains", data);
      return promise.then(function (data) {
        return _query.QueryShowAllChainsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "showChainInfo",
    value: function showChainInfo(request) {
      var data = _query.QueryShowChainInfoRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.spec.Query", "ShowChainInfo", data);
      return promise.then(function (data) {
        return _query.QueryShowChainInfoResponse.decode(new _m0.Reader(data));
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