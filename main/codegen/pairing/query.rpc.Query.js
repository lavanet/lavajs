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
    this.providers = this.providers.bind(this);
    this.getPairing = this.getPairing.bind(this);
    this.verifyPairing = this.verifyPairing.bind(this);
    this.uniquePaymentStorageClientProvider = this.uniquePaymentStorageClientProvider.bind(this);
    this.uniquePaymentStorageClientProviderAll = this.uniquePaymentStorageClientProviderAll.bind(this);
    this.providerPaymentStorage = this.providerPaymentStorage.bind(this);
    this.providerPaymentStorageAll = this.providerPaymentStorageAll.bind(this);
    this.epochPayments = this.epochPayments.bind(this);
    this.epochPaymentsAll = this.epochPaymentsAll.bind(this);
    this.userEntry = this.userEntry.bind(this);
    this.staticProvidersList = this.staticProvidersList.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "providers",
    value: function providers(request) {
      var data = _query.QueryProvidersRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "Providers", data);
      return promise.then(function (data) {
        return _query.QueryProvidersResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getPairing",
    value: function getPairing(request) {
      var data = _query.QueryGetPairingRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "GetPairing", data);
      return promise.then(function (data) {
        return _query.QueryGetPairingResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "verifyPairing",
    value: function verifyPairing(request) {
      var data = _query.QueryVerifyPairingRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "VerifyPairing", data);
      return promise.then(function (data) {
        return _query.QueryVerifyPairingResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "uniquePaymentStorageClientProvider",
    value: function uniquePaymentStorageClientProvider(request) {
      var data = _query.QueryGetUniquePaymentStorageClientProviderRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "UniquePaymentStorageClientProvider", data);
      return promise.then(function (data) {
        return _query.QueryGetUniquePaymentStorageClientProviderResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "uniquePaymentStorageClientProviderAll",
    value: function uniquePaymentStorageClientProviderAll() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllUniquePaymentStorageClientProviderRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "UniquePaymentStorageClientProviderAll", data);
      return promise.then(function (data) {
        return _query.QueryAllUniquePaymentStorageClientProviderResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "providerPaymentStorage",
    value: function providerPaymentStorage(request) {
      var data = _query.QueryGetProviderPaymentStorageRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "ProviderPaymentStorage", data);
      return promise.then(function (data) {
        return _query.QueryGetProviderPaymentStorageResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "providerPaymentStorageAll",
    value: function providerPaymentStorageAll() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllProviderPaymentStorageRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "ProviderPaymentStorageAll", data);
      return promise.then(function (data) {
        return _query.QueryAllProviderPaymentStorageResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "epochPayments",
    value: function epochPayments(request) {
      var data = _query.QueryGetEpochPaymentsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "EpochPayments", data);
      return promise.then(function (data) {
        return _query.QueryGetEpochPaymentsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "epochPaymentsAll",
    value: function epochPaymentsAll() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllEpochPaymentsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "EpochPaymentsAll", data);
      return promise.then(function (data) {
        return _query.QueryAllEpochPaymentsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "userEntry",
    value: function userEntry(request) {
      var data = _query.QueryUserEntryRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "UserEntry", data);
      return promise.then(function (data) {
        return _query.QueryUserEntryResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "staticProvidersList",
    value: function staticProvidersList(request) {
      var data = _query.QueryStaticProvidersListRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.pairing.Query", "StaticProvidersList", data);
      return promise.then(function (data) {
        return _query.QueryStaticProvidersListResponse.decode(new _m0.Reader(data));
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
    providers: function providers(request) {
      return queryService.providers(request);
    },
    getPairing: function getPairing(request) {
      return queryService.getPairing(request);
    },
    verifyPairing: function verifyPairing(request) {
      return queryService.verifyPairing(request);
    },
    uniquePaymentStorageClientProvider: function uniquePaymentStorageClientProvider(request) {
      return queryService.uniquePaymentStorageClientProvider(request);
    },
    uniquePaymentStorageClientProviderAll: function uniquePaymentStorageClientProviderAll(request) {
      return queryService.uniquePaymentStorageClientProviderAll(request);
    },
    providerPaymentStorage: function providerPaymentStorage(request) {
      return queryService.providerPaymentStorage(request);
    },
    providerPaymentStorageAll: function providerPaymentStorageAll(request) {
      return queryService.providerPaymentStorageAll(request);
    },
    epochPayments: function epochPayments(request) {
      return queryService.epochPayments(request);
    },
    epochPaymentsAll: function epochPaymentsAll(request) {
      return queryService.epochPaymentsAll(request);
    },
    userEntry: function userEntry(request) {
      return queryService.userEntry(request);
    },
    staticProvidersList: function staticProvidersList(request) {
      return queryService.staticProvidersList(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;