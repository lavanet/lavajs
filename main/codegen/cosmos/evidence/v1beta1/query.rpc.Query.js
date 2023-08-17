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
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "evidence",
    value: function evidence(request) {
      var data = _query.QueryEvidenceRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
      return promise.then(function (data) {
        return _query.QueryEvidenceResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "allEvidence",
    value: function allEvidence() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllEvidenceRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
      return promise.then(function (data) {
        return _query.QueryAllEvidenceResponse.decode(new _binary.BinaryReader(data));
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
    evidence: function evidence(request) {
      return queryService.evidence(request);
    },
    allEvidence: function allEvidence(request) {
      return queryService.allEvidence(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;