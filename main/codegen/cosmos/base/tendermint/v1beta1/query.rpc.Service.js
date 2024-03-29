"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _binary = require("../../../../binary");
var _stargate = require("@cosmjs/stargate");
var _query = require("./query");
/** Service defines the gRPC querier service for tendermint queries. */
var ServiceClientImpl = /*#__PURE__*/function () {
  function ServiceClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, ServiceClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
  }
  (0, _createClass2["default"])(ServiceClientImpl, [{
    key: "getNodeInfo",
    value: function getNodeInfo() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.GetNodeInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
      return promise.then(function (data) {
        return _query.GetNodeInfoResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "getSyncing",
    value: function getSyncing() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.GetSyncingRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
      return promise.then(function (data) {
        return _query.GetSyncingResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "getLatestBlock",
    value: function getLatestBlock() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.GetLatestBlockRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
      return promise.then(function (data) {
        return _query.GetLatestBlockResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "getBlockByHeight",
    value: function getBlockByHeight(request) {
      var data = _query.GetBlockByHeightRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
      return promise.then(function (data) {
        return _query.GetBlockByHeightResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "getLatestValidatorSet",
    value: function getLatestValidatorSet() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.GetLatestValidatorSetRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
      return promise.then(function (data) {
        return _query.GetLatestValidatorSetResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "getValidatorSetByHeight",
    value: function getValidatorSetByHeight(request) {
      var data = _query.GetValidatorSetByHeightRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
      return promise.then(function (data) {
        return _query.GetValidatorSetByHeightResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }]);
  return ServiceClientImpl;
}();
exports.ServiceClientImpl = ServiceClientImpl;
var createRpcQueryExtension = function createRpcQueryExtension(base) {
  var rpc = (0, _stargate.createProtobufRpcClient)(base);
  var queryService = new ServiceClientImpl(rpc);
  return {
    getNodeInfo: function getNodeInfo(request) {
      return queryService.getNodeInfo(request);
    },
    getSyncing: function getSyncing(request) {
      return queryService.getSyncing(request);
    },
    getLatestBlock: function getLatestBlock(request) {
      return queryService.getLatestBlock(request);
    },
    getBlockByHeight: function getBlockByHeight(request) {
      return queryService.getBlockByHeight(request);
    },
    getLatestValidatorSet: function getLatestValidatorSet(request) {
      return queryService.getLatestValidatorSet(request);
    },
    getValidatorSetByHeight: function getValidatorSetByHeight(request) {
      return queryService.getValidatorSetByHeight(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;