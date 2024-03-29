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
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "balance",
    value: function balance(request) {
      var data = _query.QueryBalanceRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
      return promise.then(function (data) {
        return _query.QueryBalanceResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "allBalances",
    value: function allBalances(request) {
      var data = _query.QueryAllBalancesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
      return promise.then(function (data) {
        return _query.QueryAllBalancesResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "spendableBalances",
    value: function spendableBalances(request) {
      var data = _query.QuerySpendableBalancesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
      return promise.then(function (data) {
        return _query.QuerySpendableBalancesResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "totalSupply",
    value: function totalSupply() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryTotalSupplyRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
      return promise.then(function (data) {
        return _query.QueryTotalSupplyResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "supplyOf",
    value: function supplyOf(request) {
      var data = _query.QuerySupplyOfRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
      return promise.then(function (data) {
        return _query.QuerySupplyOfResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "denomMetadata",
    value: function denomMetadata(request) {
      var data = _query.QueryDenomMetadataRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
      return promise.then(function (data) {
        return _query.QueryDenomMetadataResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "denomsMetadata",
    value: function denomsMetadata() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryDenomsMetadataRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
      return promise.then(function (data) {
        return _query.QueryDenomsMetadataResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "denomOwners",
    value: function denomOwners(request) {
      var data = _query.QueryDenomOwnersRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
      return promise.then(function (data) {
        return _query.QueryDenomOwnersResponse.decode(new _binary.BinaryReader(data));
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
    balance: function balance(request) {
      return queryService.balance(request);
    },
    allBalances: function allBalances(request) {
      return queryService.allBalances(request);
    },
    spendableBalances: function spendableBalances(request) {
      return queryService.spendableBalances(request);
    },
    totalSupply: function totalSupply(request) {
      return queryService.totalSupply(request);
    },
    supplyOf: function supplyOf(request) {
      return queryService.supplyOf(request);
    },
    params: function params(request) {
      return queryService.params(request);
    },
    denomMetadata: function denomMetadata(request) {
      return queryService.denomMetadata(request);
    },
    denomsMetadata: function denomsMetadata(request) {
      return queryService.denomsMetadata(request);
    },
    denomOwners: function denomOwners(request) {
      return queryService.denomOwners(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;