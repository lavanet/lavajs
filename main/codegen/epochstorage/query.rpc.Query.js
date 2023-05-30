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
    this.stakeStorage = this.stakeStorage.bind(this);
    this.stakeStorageAll = this.stakeStorageAll.bind(this);
    this.epochDetails = this.epochDetails.bind(this);
    this.fixatedParams = this.fixatedParams.bind(this);
    this.fixatedParamsAll = this.fixatedParamsAll.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.epochstorage.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "stakeStorage",
    value: function stakeStorage(request) {
      var data = _query.QueryGetStakeStorageRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.epochstorage.Query", "StakeStorage", data);
      return promise.then(function (data) {
        return _query.QueryGetStakeStorageResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "stakeStorageAll",
    value: function stakeStorageAll() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllStakeStorageRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.epochstorage.Query", "StakeStorageAll", data);
      return promise.then(function (data) {
        return _query.QueryAllStakeStorageResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "epochDetails",
    value: function epochDetails() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryGetEpochDetailsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.epochstorage.Query", "EpochDetails", data);
      return promise.then(function (data) {
        return _query.QueryGetEpochDetailsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "fixatedParams",
    value: function fixatedParams(request) {
      var data = _query.QueryGetFixatedParamsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.epochstorage.Query", "FixatedParams", data);
      return promise.then(function (data) {
        return _query.QueryGetFixatedParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "fixatedParamsAll",
    value: function fixatedParamsAll() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllFixatedParamsRequest.encode(request).finish();
      var promise = this.rpc.request("lavanet.lava.epochstorage.Query", "FixatedParamsAll", data);
      return promise.then(function (data) {
        return _query.QueryAllFixatedParamsResponse.decode(new _m0.Reader(data));
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
    stakeStorage: function stakeStorage(request) {
      return queryService.stakeStorage(request);
    },
    stakeStorageAll: function stakeStorageAll(request) {
      return queryService.stakeStorageAll(request);
    },
    epochDetails: function epochDetails(request) {
      return queryService.epochDetails(request);
    },
    fixatedParams: function fixatedParams(request) {
      return queryService.fixatedParams(request);
    },
    fixatedParamsAll: function fixatedParamsAll(request) {
      return queryService.fixatedParamsAll(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;