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
/** Query defines the gRPC upgrade querier service. */
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.currentPlan = this.currentPlan.bind(this);
    this.appliedPlan = this.appliedPlan.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    this.moduleVersions = this.moduleVersions.bind(this);
    this.authority = this.authority.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "currentPlan",
    value: function currentPlan() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryCurrentPlanRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
      return promise.then(function (data) {
        return _query.QueryCurrentPlanResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "appliedPlan",
    value: function appliedPlan(request) {
      var data = _query.QueryAppliedPlanRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
      return promise.then(function (data) {
        return _query.QueryAppliedPlanResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "upgradedConsensusState",
    value: function upgradedConsensusState(request) {
      var data = _query.QueryUpgradedConsensusStateRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
      return promise.then(function (data) {
        return _query.QueryUpgradedConsensusStateResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "moduleVersions",
    value: function moduleVersions(request) {
      var data = _query.QueryModuleVersionsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
      return promise.then(function (data) {
        return _query.QueryModuleVersionsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "authority",
    value: function authority() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryAuthorityRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "Authority", data);
      return promise.then(function (data) {
        return _query.QueryAuthorityResponse.decode(new _binary.BinaryReader(data));
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
    currentPlan: function currentPlan(request) {
      return queryService.currentPlan(request);
    },
    appliedPlan: function appliedPlan(request) {
      return queryService.appliedPlan(request);
    },
    upgradedConsensusState: function upgradedConsensusState(request) {
      return queryService.upgradedConsensusState(request);
    },
    moduleVersions: function moduleVersions(request) {
      return queryService.moduleVersions(request);
    },
    authority: function authority(request) {
      return queryService.authority(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;