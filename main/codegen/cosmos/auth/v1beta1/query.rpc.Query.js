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
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "accounts",
    value: function accounts() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAccountsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
      return promise.then(function (data) {
        return _query.QueryAccountsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "account",
    value: function account(request) {
      var data = _query.QueryAccountRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
      return promise.then(function (data) {
        return _query.QueryAccountResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "moduleAccounts",
    value: function moduleAccounts() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryModuleAccountsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
      return promise.then(function (data) {
        return _query.QueryModuleAccountsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "bech32Prefix",
    value: function bech32Prefix() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.Bech32PrefixRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
      return promise.then(function (data) {
        return _query.Bech32PrefixResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "addressBytesToString",
    value: function addressBytesToString(request) {
      var data = _query.AddressBytesToStringRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
      return promise.then(function (data) {
        return _query.AddressBytesToStringResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "addressStringToBytes",
    value: function addressStringToBytes(request) {
      var data = _query.AddressStringToBytesRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
      return promise.then(function (data) {
        return _query.AddressStringToBytesResponse.decode(new _binary.BinaryReader(data));
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
    accounts: function accounts(request) {
      return queryService.accounts(request);
    },
    account: function account(request) {
      return queryService.account(request);
    },
    params: function params(request) {
      return queryService.params(request);
    },
    moduleAccounts: function moduleAccounts(request) {
      return queryService.moduleAccounts(request);
    },
    bech32Prefix: function bech32Prefix(request) {
      return queryService.bech32Prefix(request);
    },
    addressBytesToString: function addressBytesToString(request) {
      return queryService.addressBytesToString(request);
    },
    addressStringToBytes: function addressStringToBytes(request) {
      return queryService.addressStringToBytes(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;