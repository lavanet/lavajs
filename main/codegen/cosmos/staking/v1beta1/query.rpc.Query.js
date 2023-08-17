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
    this.validators = this.validators.bind(this);
    this.validator = this.validator.bind(this);
    this.validatorDelegations = this.validatorDelegations.bind(this);
    this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
    this.delegation = this.delegation.bind(this);
    this.unbondingDelegation = this.unbondingDelegation.bind(this);
    this.delegatorDelegations = this.delegatorDelegations.bind(this);
    this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
    this.redelegations = this.redelegations.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorValidator = this.delegatorValidator.bind(this);
    this.historicalInfo = this.historicalInfo.bind(this);
    this.pool = this.pool.bind(this);
    this.params = this.params.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "validators",
    value: function validators(request) {
      var data = _query.QueryValidatorsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
      return promise.then(function (data) {
        return _query.QueryValidatorsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "validator",
    value: function validator(request) {
      var data = _query.QueryValidatorRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
      return promise.then(function (data) {
        return _query.QueryValidatorResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "validatorDelegations",
    value: function validatorDelegations(request) {
      var data = _query.QueryValidatorDelegationsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
      return promise.then(function (data) {
        return _query.QueryValidatorDelegationsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "validatorUnbondingDelegations",
    value: function validatorUnbondingDelegations(request) {
      var data = _query.QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
      return promise.then(function (data) {
        return _query.QueryValidatorUnbondingDelegationsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "delegation",
    value: function delegation(request) {
      var data = _query.QueryDelegationRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
      return promise.then(function (data) {
        return _query.QueryDelegationResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "unbondingDelegation",
    value: function unbondingDelegation(request) {
      var data = _query.QueryUnbondingDelegationRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
      return promise.then(function (data) {
        return _query.QueryUnbondingDelegationResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "delegatorDelegations",
    value: function delegatorDelegations(request) {
      var data = _query.QueryDelegatorDelegationsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
      return promise.then(function (data) {
        return _query.QueryDelegatorDelegationsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "delegatorUnbondingDelegations",
    value: function delegatorUnbondingDelegations(request) {
      var data = _query.QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
      return promise.then(function (data) {
        return _query.QueryDelegatorUnbondingDelegationsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "redelegations",
    value: function redelegations(request) {
      var data = _query.QueryRedelegationsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
      return promise.then(function (data) {
        return _query.QueryRedelegationsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "delegatorValidators",
    value: function delegatorValidators(request) {
      var data = _query.QueryDelegatorValidatorsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
      return promise.then(function (data) {
        return _query.QueryDelegatorValidatorsResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "delegatorValidator",
    value: function delegatorValidator(request) {
      var data = _query.QueryDelegatorValidatorRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
      return promise.then(function (data) {
        return _query.QueryDelegatorValidatorResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "historicalInfo",
    value: function historicalInfo(request) {
      var data = _query.QueryHistoricalInfoRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
      return promise.then(function (data) {
        return _query.QueryHistoricalInfoResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "pool",
    value: function pool() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryPoolRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
      return promise.then(function (data) {
        return _query.QueryPoolResponse.decode(new _binary.BinaryReader(data));
      });
    }
  }, {
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _binary.BinaryReader(data));
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
    validators: function validators(request) {
      return queryService.validators(request);
    },
    validator: function validator(request) {
      return queryService.validator(request);
    },
    validatorDelegations: function validatorDelegations(request) {
      return queryService.validatorDelegations(request);
    },
    validatorUnbondingDelegations: function validatorUnbondingDelegations(request) {
      return queryService.validatorUnbondingDelegations(request);
    },
    delegation: function delegation(request) {
      return queryService.delegation(request);
    },
    unbondingDelegation: function unbondingDelegation(request) {
      return queryService.unbondingDelegation(request);
    },
    delegatorDelegations: function delegatorDelegations(request) {
      return queryService.delegatorDelegations(request);
    },
    delegatorUnbondingDelegations: function delegatorUnbondingDelegations(request) {
      return queryService.delegatorUnbondingDelegations(request);
    },
    redelegations: function redelegations(request) {
      return queryService.redelegations(request);
    },
    delegatorValidators: function delegatorValidators(request) {
      return queryService.delegatorValidators(request);
    },
    delegatorValidator: function delegatorValidator(request) {
      return queryService.delegatorValidator(request);
    },
    historicalInfo: function historicalInfo(request) {
      return queryService.historicalInfo(request);
    },
    pool: function pool(request) {
      return queryService.pool(request);
    },
    params: function params(request) {
      return queryService.params(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;