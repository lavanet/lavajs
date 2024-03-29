"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryValidatorsResponse = exports.QueryValidatorsRequest = exports.QueryValidatorUnbondingDelegationsResponse = exports.QueryValidatorUnbondingDelegationsRequest = exports.QueryValidatorResponse = exports.QueryValidatorRequest = exports.QueryValidatorDelegationsResponse = exports.QueryValidatorDelegationsRequest = exports.QueryUnbondingDelegationResponse = exports.QueryUnbondingDelegationRequest = exports.QueryRedelegationsResponse = exports.QueryRedelegationsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryHistoricalInfoResponse = exports.QueryHistoricalInfoRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryDelegatorValidatorResponse = exports.QueryDelegatorValidatorRequest = exports.QueryDelegatorUnbondingDelegationsResponse = exports.QueryDelegatorUnbondingDelegationsRequest = exports.QueryDelegatorDelegationsResponse = exports.QueryDelegatorDelegationsRequest = exports.QueryDelegationResponse = exports.QueryDelegationRequest = void 0;
var _pagination = require("../../base/query/v1beta1/pagination");
var _staking = require("./staking");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */

/** QueryValidatorsRequest is request type for Query/Validators RPC method. */

/** QueryValidatorsResponse is response type for the Query/Validators RPC method */

/** QueryValidatorsResponse is response type for the Query/Validators RPC method */

/** QueryValidatorRequest is response type for the Query/Validator RPC method */

/** QueryValidatorRequest is response type for the Query/Validator RPC method */

/** QueryValidatorResponse is response type for the Query/Validator RPC method */

/** QueryValidatorResponse is response type for the Query/Validator RPC method */

/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */

/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */

/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */

/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */

/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */

/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */

/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */

/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */

/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */

/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */

/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */

/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */

/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */

/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */

/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */

/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */

/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */

/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */

/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */

/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */

/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */

/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */

/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */

/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */

/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */

/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */

/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */

/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */

/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */

/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */

/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */

/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */

/** QueryPoolRequest is request type for the Query/Pool RPC method. */

/** QueryPoolRequest is request type for the Query/Pool RPC method. */

/** QueryPoolResponse is response type for the Query/Pool RPC method. */

/** QueryPoolResponse is response type for the Query/Pool RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryValidatorsRequest() {
  return {
    status: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryValidatorsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$status;
    var message = createBaseQueryValidatorsRequest();
    message.status = (_object$status = object.status) !== null && _object$status !== void 0 ? _object$status : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      status: object.status,
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.status = message.status;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorsRequest",
      value: QueryValidatorsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
      value: QueryValidatorsRequest.encode(message).finish()
    };
  }
};
exports.QueryValidatorsRequest = QueryValidatorsRequest;
function createBaseQueryValidatorsResponse() {
  return {
    validators: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryValidatorsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.validators),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _staking.Validator.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(_staking.Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validators;
    var message = createBaseQueryValidatorsResponse();
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return _staking.Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return _staking.Validator.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? _staking.Validator.toAmino(e) : undefined;
      });
    } else {
      obj.validators = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorsResponse",
      value: QueryValidatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
      value: QueryValidatorsResponse.encode(message).finish()
    };
  }
};
exports.QueryValidatorsResponse = QueryValidatorsResponse;
function createBaseQueryValidatorRequest() {
  return {
    validatorAddr: ""
  };
}
var QueryValidatorRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr;
    var message = createBaseQueryValidatorRequest();
    message.validatorAddr = (_object$validatorAddr = object.validatorAddr) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddr: object.validator_addr
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorRequest",
      value: QueryValidatorRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
      value: QueryValidatorRequest.encode(message).finish()
    };
  }
};
exports.QueryValidatorRequest = QueryValidatorRequest;
function createBaseQueryValidatorResponse() {
  return {
    validator: _staking.Validator.fromPartial({})
  };
}
var QueryValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validator !== undefined) {
      _staking.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = _staking.Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? _staking.Validator.fromPartial(object.validator) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validator: object !== null && object !== void 0 && object.validator ? _staking.Validator.fromAmino(object.validator) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator = message.validator ? _staking.Validator.toAmino(message.validator) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorResponse",
      value: QueryValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
      value: QueryValidatorResponse.encode(message).finish()
    };
  }
};
exports.QueryValidatorResponse = QueryValidatorResponse;
function createBaseQueryValidatorDelegationsRequest() {
  return {
    validatorAddr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryValidatorDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr2;
    var message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = (_object$validatorAddr2 = object.validatorAddr) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddr: object.validator_addr,
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_addr = message.validatorAddr;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorDelegationsRequest",
      value: QueryValidatorDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorDelegationsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
      value: QueryValidatorDelegationsRequest.encode(message).finish()
    };
  }
};
exports.QueryValidatorDelegationsRequest = QueryValidatorDelegationsRequest;
function createBaseQueryValidatorDelegationsResponse() {
  return {
    delegationResponses: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryValidatorDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.delegationResponses),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _staking.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(_staking.DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegationRes;
    var message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = ((_object$delegationRes = object.delegationResponses) === null || _object$delegationRes === void 0 ? void 0 : _object$delegationRes.map(function (e) {
      return _staking.DelegationResponse.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_responses) ? object.delegation_responses.map(function (e) {
        return _staking.DelegationResponse.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(function (e) {
        return e ? _staking.DelegationResponse.toAmino(e) : undefined;
      });
    } else {
      obj.delegation_responses = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorDelegationsResponse",
      value: QueryValidatorDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorDelegationsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
      value: QueryValidatorDelegationsResponse.encode(message).finish()
    };
  }
};
exports.QueryValidatorDelegationsResponse = QueryValidatorDelegationsResponse;
function createBaseQueryValidatorUnbondingDelegationsRequest() {
  return {
    validatorAddr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryValidatorUnbondingDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr3;
    var message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = (_object$validatorAddr3 = object.validatorAddr) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddr: object.validator_addr,
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_addr = message.validatorAddr;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest",
      value: QueryValidatorUnbondingDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorUnbondingDelegationsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
      value: QueryValidatorUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
exports.QueryValidatorUnbondingDelegationsRequest = QueryValidatorUnbondingDelegationsRequest;
function createBaseQueryValidatorUnbondingDelegationsResponse() {
  return {
    unbondingResponses: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryValidatorUnbondingDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator3 = _createForOfIteratorHelper(message.unbondingResponses),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _staking.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(_staking.UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$unbondingResp;
    var message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = ((_object$unbondingResp = object.unbondingResponses) === null || _object$unbondingResp === void 0 ? void 0 : _object$unbondingResp.map(function (e) {
      return _staking.UnbondingDelegation.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      unbondingResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_responses) ? object.unbonding_responses.map(function (e) {
        return _staking.UnbondingDelegation.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(function (e) {
        return e ? _staking.UnbondingDelegation.toAmino(e) : undefined;
      });
    } else {
      obj.unbonding_responses = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse",
      value: QueryValidatorUnbondingDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorUnbondingDelegationsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
      value: QueryValidatorUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
exports.QueryValidatorUnbondingDelegationsResponse = QueryValidatorUnbondingDelegationsResponse;
function createBaseQueryDelegationRequest() {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
var QueryDelegationRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr, _object$validatorAddr4;
    var message = createBaseQueryDelegationRequest();
    message.delegatorAddr = (_object$delegatorAddr = object.delegatorAddr) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.validatorAddr = (_object$validatorAddr4 = object.validatorAddr) !== null && _object$validatorAddr4 !== void 0 ? _object$validatorAddr4 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddr: object.delegator_addr,
      validatorAddr: object.validator_addr
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegationRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationRequest",
      value: QueryDelegationRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegationRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegationRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
      value: QueryDelegationRequest.encode(message).finish()
    };
  }
};
exports.QueryDelegationRequest = QueryDelegationRequest;
function createBaseQueryDelegationResponse() {
  return {
    delegationResponse: _staking.DelegationResponse.fromPartial({})
  };
}
var QueryDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegationResponse !== undefined) {
      _staking.DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = _staking.DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryDelegationResponse();
    message.delegationResponse = object.delegationResponse !== undefined && object.delegationResponse !== null ? _staking.DelegationResponse.fromPartial(object.delegationResponse) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegationResponse: object !== null && object !== void 0 && object.delegation_response ? _staking.DelegationResponse.fromAmino(object.delegation_response) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegation_response = message.delegationResponse ? _staking.DelegationResponse.toAmino(message.delegationResponse) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationResponse",
      value: QueryDelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegationResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegationResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
      value: QueryDelegationResponse.encode(message).finish()
    };
  }
};
exports.QueryDelegationResponse = QueryDelegationResponse;
function createBaseQueryUnbondingDelegationRequest() {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
var QueryUnbondingDelegationRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorAddr5;
    var message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = (_object$delegatorAddr2 = object.delegatorAddr) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    message.validatorAddr = (_object$validatorAddr5 = object.validatorAddr) !== null && _object$validatorAddr5 !== void 0 ? _object$validatorAddr5 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddr: object.delegator_addr,
      validatorAddr: object.validator_addr
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryUnbondingDelegationRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryUnbondingDelegationRequest",
      value: QueryUnbondingDelegationRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryUnbondingDelegationRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryUnbondingDelegationRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
      value: QueryUnbondingDelegationRequest.encode(message).finish()
    };
  }
};
exports.QueryUnbondingDelegationRequest = QueryUnbondingDelegationRequest;
function createBaseQueryUnbondingDelegationResponse() {
  return {
    unbond: _staking.UnbondingDelegation.fromPartial({})
  };
}
var QueryUnbondingDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.unbond !== undefined) {
      _staking.UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = _staking.UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = object.unbond !== undefined && object.unbond !== null ? _staking.UnbondingDelegation.fromPartial(object.unbond) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      unbond: object !== null && object !== void 0 && object.unbond ? _staking.UnbondingDelegation.fromAmino(object.unbond) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.unbond = message.unbond ? _staking.UnbondingDelegation.toAmino(message.unbond) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryUnbondingDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryUnbondingDelegationResponse",
      value: QueryUnbondingDelegationResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryUnbondingDelegationResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
      value: QueryUnbondingDelegationResponse.encode(message).finish()
    };
  }
};
exports.QueryUnbondingDelegationResponse = QueryUnbondingDelegationResponse;
function createBaseQueryDelegatorDelegationsRequest() {
  return {
    delegatorAddr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryDelegatorDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr3;
    var message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = (_object$delegatorAddr3 = object.delegatorAddr) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddr: object.delegator_addr,
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegatorDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorDelegationsRequest",
      value: QueryDelegatorDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegatorDelegationsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
      value: QueryDelegatorDelegationsRequest.encode(message).finish()
    };
  }
};
exports.QueryDelegatorDelegationsRequest = QueryDelegatorDelegationsRequest;
function createBaseQueryDelegatorDelegationsResponse() {
  return {
    delegationResponses: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryDelegatorDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator4 = _createForOfIteratorHelper(message.delegationResponses),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _staking.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(_staking.DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegationRes2;
    var message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = ((_object$delegationRes2 = object.delegationResponses) === null || _object$delegationRes2 === void 0 ? void 0 : _object$delegationRes2.map(function (e) {
      return _staking.DelegationResponse.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_responses) ? object.delegation_responses.map(function (e) {
        return _staking.DelegationResponse.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(function (e) {
        return e ? _staking.DelegationResponse.toAmino(e) : undefined;
      });
    } else {
      obj.delegation_responses = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegatorDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorDelegationsResponse",
      value: QueryDelegatorDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegatorDelegationsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
      value: QueryDelegatorDelegationsResponse.encode(message).finish()
    };
  }
};
exports.QueryDelegatorDelegationsResponse = QueryDelegatorDelegationsResponse;
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
  return {
    delegatorAddr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryDelegatorUnbondingDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr4;
    var message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = (_object$delegatorAddr4 = object.delegatorAddr) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddr: object.delegator_addr,
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest",
      value: QueryDelegatorUnbondingDelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegatorUnbondingDelegationsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
      value: QueryDelegatorUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
exports.QueryDelegatorUnbondingDelegationsRequest = QueryDelegatorUnbondingDelegationsRequest;
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
  return {
    unbondingResponses: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryDelegatorUnbondingDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator5 = _createForOfIteratorHelper(message.unbondingResponses),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _staking.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(_staking.UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$unbondingResp2;
    var message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = ((_object$unbondingResp2 = object.unbondingResponses) === null || _object$unbondingResp2 === void 0 ? void 0 : _object$unbondingResp2.map(function (e) {
      return _staking.UnbondingDelegation.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      unbondingResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_responses) ? object.unbonding_responses.map(function (e) {
        return _staking.UnbondingDelegation.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(function (e) {
        return e ? _staking.UnbondingDelegation.toAmino(e) : undefined;
      });
    } else {
      obj.unbonding_responses = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse",
      value: QueryDelegatorUnbondingDelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegatorUnbondingDelegationsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
      value: QueryDelegatorUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
exports.QueryDelegatorUnbondingDelegationsResponse = QueryDelegatorUnbondingDelegationsResponse;
function createBaseQueryRedelegationsRequest() {
  return {
    delegatorAddr: "",
    srcValidatorAddr: "",
    dstValidatorAddr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryRedelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }
    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.srcValidatorAddr = reader.string();
          break;
        case 3:
          message.dstValidatorAddr = reader.string();
          break;
        case 4:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr5, _object$srcValidatorA, _object$dstValidatorA;
    var message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = (_object$delegatorAddr5 = object.delegatorAddr) !== null && _object$delegatorAddr5 !== void 0 ? _object$delegatorAddr5 : "";
    message.srcValidatorAddr = (_object$srcValidatorA = object.srcValidatorAddr) !== null && _object$srcValidatorA !== void 0 ? _object$srcValidatorA : "";
    message.dstValidatorAddr = (_object$dstValidatorA = object.dstValidatorAddr) !== null && _object$dstValidatorA !== void 0 ? _object$dstValidatorA : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddr: object.delegator_addr,
      srcValidatorAddr: object.src_validator_addr,
      dstValidatorAddr: object.dst_validator_addr,
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.src_validator_addr = message.srcValidatorAddr;
    obj.dst_validator_addr = message.dstValidatorAddr;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryRedelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryRedelegationsRequest",
      value: QueryRedelegationsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryRedelegationsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryRedelegationsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
      value: QueryRedelegationsRequest.encode(message).finish()
    };
  }
};
exports.QueryRedelegationsRequest = QueryRedelegationsRequest;
function createBaseQueryRedelegationsResponse() {
  return {
    redelegationResponses: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryRedelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator6 = _createForOfIteratorHelper(message.redelegationResponses),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _staking.RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(_staking.RedelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$redelegationR;
    var message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = ((_object$redelegationR = object.redelegationResponses) === null || _object$redelegationR === void 0 ? void 0 : _object$redelegationR.map(function (e) {
      return _staking.RedelegationResponse.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      redelegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegation_responses) ? object.redelegation_responses.map(function (e) {
        return _staking.RedelegationResponse.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.redelegationResponses) {
      obj.redelegation_responses = message.redelegationResponses.map(function (e) {
        return e ? _staking.RedelegationResponse.toAmino(e) : undefined;
      });
    } else {
      obj.redelegation_responses = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryRedelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryRedelegationsResponse",
      value: QueryRedelegationsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryRedelegationsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryRedelegationsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
      value: QueryRedelegationsResponse.encode(message).finish()
    };
  }
};
exports.QueryRedelegationsResponse = QueryRedelegationsResponse;
function createBaseQueryDelegatorValidatorsRequest() {
  return {
    delegatorAddr: "",
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryDelegatorValidatorsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr6;
    var message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = (_object$delegatorAddr6 = object.delegatorAddr) !== null && _object$delegatorAddr6 !== void 0 ? _object$delegatorAddr6 : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddr: object.delegator_addr,
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegatorValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegatorValidatorsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegatorValidatorsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.encode(message).finish()
    };
  }
};
exports.QueryDelegatorValidatorsRequest = QueryDelegatorValidatorsRequest;
function createBaseQueryDelegatorValidatorsResponse() {
  return {
    validators: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryDelegatorValidatorsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator7 = _createForOfIteratorHelper(message.validators),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _staking.Validator.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(_staking.Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validators2;
    var message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(function (e) {
      return _staking.Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return _staking.Validator.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? _staking.Validator.toAmino(e) : undefined;
      });
    } else {
      obj.validators = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegatorValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegatorValidatorsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegatorValidatorsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.encode(message).finish()
    };
  }
};
exports.QueryDelegatorValidatorsResponse = QueryDelegatorValidatorsResponse;
function createBaseQueryDelegatorValidatorRequest() {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
var QueryDelegatorValidatorRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr7, _object$validatorAddr6;
    var message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = (_object$delegatorAddr7 = object.delegatorAddr) !== null && _object$delegatorAddr7 !== void 0 ? _object$delegatorAddr7 : "";
    message.validatorAddr = (_object$validatorAddr6 = object.validatorAddr) !== null && _object$validatorAddr6 !== void 0 ? _object$validatorAddr6 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddr: object.delegator_addr,
      validatorAddr: object.validator_addr
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegatorValidatorRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorRequest",
      value: QueryDelegatorValidatorRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegatorValidatorRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegatorValidatorRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
      value: QueryDelegatorValidatorRequest.encode(message).finish()
    };
  }
};
exports.QueryDelegatorValidatorRequest = QueryDelegatorValidatorRequest;
function createBaseQueryDelegatorValidatorResponse() {
  return {
    validator: _staking.Validator.fromPartial({})
  };
}
var QueryDelegatorValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validator !== undefined) {
      _staking.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = _staking.Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryDelegatorValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? _staking.Validator.fromPartial(object.validator) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validator: object !== null && object !== void 0 && object.validator ? _staking.Validator.fromAmino(object.validator) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator = message.validator ? _staking.Validator.toAmino(message.validator) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegatorValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorResponse",
      value: QueryDelegatorValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegatorValidatorResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegatorValidatorResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
      value: QueryDelegatorValidatorResponse.encode(message).finish()
    };
  }
};
exports.QueryDelegatorValidatorResponse = QueryDelegatorValidatorResponse;
function createBaseQueryHistoricalInfoRequest() {
  return {
    height: BigInt(0)
  };
}
var QueryHistoricalInfoRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryHistoricalInfoRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryHistoricalInfoRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      height: BigInt(object.height)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryHistoricalInfoRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryHistoricalInfoRequest",
      value: QueryHistoricalInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryHistoricalInfoRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryHistoricalInfoRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
      value: QueryHistoricalInfoRequest.encode(message).finish()
    };
  }
};
exports.QueryHistoricalInfoRequest = QueryHistoricalInfoRequest;
function createBaseQueryHistoricalInfoResponse() {
  return {
    hist: _staking.HistoricalInfo.fromPartial({})
  };
}
var QueryHistoricalInfoResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.hist !== undefined) {
      _staking.HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = _staking.HistoricalInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryHistoricalInfoResponse();
    message.hist = object.hist !== undefined && object.hist !== null ? _staking.HistoricalInfo.fromPartial(object.hist) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      hist: object !== null && object !== void 0 && object.hist ? _staking.HistoricalInfo.fromAmino(object.hist) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.hist = message.hist ? _staking.HistoricalInfo.toAmino(message.hist) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryHistoricalInfoResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryHistoricalInfoResponse",
      value: QueryHistoricalInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryHistoricalInfoResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryHistoricalInfoResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
      value: QueryHistoricalInfoResponse.encode(message).finish()
    };
  }
};
exports.QueryHistoricalInfoResponse = QueryHistoricalInfoResponse;
function createBaseQueryPoolRequest() {
  return {};
}
var QueryPoolRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryPoolRequest();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryPoolRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPoolRequest",
      value: QueryPoolRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryPoolRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
exports.QueryPoolRequest = QueryPoolRequest;
function createBaseQueryPoolResponse() {
  return {
    pool: _staking.Pool.fromPartial({})
  };
}
var QueryPoolResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.pool !== undefined) {
      _staking.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = _staking.Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? _staking.Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      pool: object !== null && object !== void 0 && object.pool ? _staking.Pool.fromAmino(object.pool) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.pool = message.pool ? _staking.Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryPoolResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryPoolResponse",
      value: QueryPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryPoolResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
exports.QueryPoolResponse = QueryPoolResponse;
function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: _staking.Params.fromPartial({})
  };
}
var QueryParamsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _staking.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _staking.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _staking.Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _staking.Params.fromAmino(object.params) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _staking.Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryParamsResponse = QueryParamsResponse;