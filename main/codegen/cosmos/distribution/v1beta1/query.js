"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryValidatorSlashesResponse = exports.QueryValidatorSlashesRequest = exports.QueryValidatorOutstandingRewardsResponse = exports.QueryValidatorOutstandingRewardsRequest = exports.QueryValidatorCommissionResponse = exports.QueryValidatorCommissionRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDelegatorWithdrawAddressResponse = exports.QueryDelegatorWithdrawAddressRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryDelegationTotalRewardsResponse = exports.QueryDelegationTotalRewardsRequest = exports.QueryDelegationRewardsResponse = exports.QueryDelegationRewardsRequest = exports.QueryCommunityPoolResponse = exports.QueryCommunityPoolRequest = void 0;
var _pagination = require("../../base/query/v1beta1/pagination");
var _distribution = require("./distribution");
var _coin = require("../../base/v1beta1/coin");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */

/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */

/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */

/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */

/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */

/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */

/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */

/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */

/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */

/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */

/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */

/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */

/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */

/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */

/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */

/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */

/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */

/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */

/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */

/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */

/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */

/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */

/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */

/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */

/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */

/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */

/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */

function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
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
      typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: _distribution.Params.fromPartial({})
  };
}
var QueryParamsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _distribution.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = _distribution.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== undefined && object.params !== null ? _distribution.Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _distribution.Params.fromAmino(object.params) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _distribution.Params.toAmino(message.params) : undefined;
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
      typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryValidatorOutstandingRewardsRequest() {
  return {
    validatorAddress: ""
  };
}
var QueryValidatorOutstandingRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorOutstandingRewardsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
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
    var message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddress: object.validator_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorOutstandingRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
      value: QueryValidatorOutstandingRewardsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorOutstandingRewardsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorOutstandingRewardsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
      value: QueryValidatorOutstandingRewardsRequest.encode(message).finish()
    };
  }
};
exports.QueryValidatorOutstandingRewardsRequest = QueryValidatorOutstandingRewardsRequest;
function createBaseQueryValidatorOutstandingRewardsResponse() {
  return {
    rewards: _distribution.ValidatorOutstandingRewards.fromPartial({})
  };
}
var QueryValidatorOutstandingRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.rewards !== undefined) {
      _distribution.ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = _distribution.ValidatorOutstandingRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryValidatorOutstandingRewardsResponse();
    message.rewards = object.rewards !== undefined && object.rewards !== null ? _distribution.ValidatorOutstandingRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      rewards: object !== null && object !== void 0 && object.rewards ? _distribution.ValidatorOutstandingRewards.fromAmino(object.rewards) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.rewards = message.rewards ? _distribution.ValidatorOutstandingRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorOutstandingRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
      value: QueryValidatorOutstandingRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorOutstandingRewardsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorOutstandingRewardsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
      value: QueryValidatorOutstandingRewardsResponse.encode(message).finish()
    };
  }
};
exports.QueryValidatorOutstandingRewardsResponse = QueryValidatorOutstandingRewardsResponse;
function createBaseQueryValidatorCommissionRequest() {
  return {
    validatorAddress: ""
  };
}
var QueryValidatorCommissionRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorCommissionRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
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
    var message = createBaseQueryValidatorCommissionRequest();
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddress: object.validator_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorCommissionRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorCommissionRequest",
      value: QueryValidatorCommissionRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorCommissionRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorCommissionRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
      value: QueryValidatorCommissionRequest.encode(message).finish()
    };
  }
};
exports.QueryValidatorCommissionRequest = QueryValidatorCommissionRequest;
function createBaseQueryValidatorCommissionResponse() {
  return {
    commission: _distribution.ValidatorAccumulatedCommission.fromPartial({})
  };
}
var QueryValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.commission !== undefined) {
      _distribution.ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorCommissionResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = _distribution.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryValidatorCommissionResponse();
    message.commission = object.commission !== undefined && object.commission !== null ? _distribution.ValidatorAccumulatedCommission.fromPartial(object.commission) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      commission: object !== null && object !== void 0 && object.commission ? _distribution.ValidatorAccumulatedCommission.fromAmino(object.commission) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.commission = message.commission ? _distribution.ValidatorAccumulatedCommission.toAmino(message.commission) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorCommissionResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorCommissionResponse",
      value: QueryValidatorCommissionResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorCommissionResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
      value: QueryValidatorCommissionResponse.encode(message).finish()
    };
  }
};
exports.QueryValidatorCommissionResponse = QueryValidatorCommissionResponse;
function createBaseQueryValidatorSlashesRequest() {
  return {
    validatorAddress: "",
    startingHeight: BigInt(0),
    endingHeight: BigInt(0),
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryValidatorSlashesRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.startingHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingHeight);
    }
    if (message.endingHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.endingHeight);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryValidatorSlashesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.startingHeight = reader.uint64();
          break;
        case 3:
          message.endingHeight = reader.uint64();
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
    var _object$validatorAddr3;
    var message = createBaseQueryValidatorSlashesRequest();
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.startingHeight = object.startingHeight !== undefined && object.startingHeight !== null ? BigInt(object.startingHeight.toString()) : BigInt(0);
    message.endingHeight = object.endingHeight !== undefined && object.endingHeight !== null ? BigInt(object.endingHeight.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validatorAddress: object.validator_address,
      startingHeight: BigInt(object.starting_height),
      endingHeight: BigInt(object.ending_height),
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.validator_address = message.validatorAddress;
    obj.starting_height = message.startingHeight ? message.startingHeight.toString() : undefined;
    obj.ending_height = message.endingHeight ? message.endingHeight.toString() : undefined;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorSlashesRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorSlashesRequest",
      value: QueryValidatorSlashesRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorSlashesRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorSlashesRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
      value: QueryValidatorSlashesRequest.encode(message).finish()
    };
  }
};
exports.QueryValidatorSlashesRequest = QueryValidatorSlashesRequest;
function createBaseQueryValidatorSlashesResponse() {
  return {
    slashes: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryValidatorSlashesResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.slashes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _distribution.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryValidatorSlashesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashes.push(_distribution.ValidatorSlashEvent.decode(reader, reader.uint32()));
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
    var _object$slashes;
    var message = createBaseQueryValidatorSlashesResponse();
    message.slashes = ((_object$slashes = object.slashes) === null || _object$slashes === void 0 ? void 0 : _object$slashes.map(function (e) {
      return _distribution.ValidatorSlashEvent.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      slashes: Array.isArray(object === null || object === void 0 ? void 0 : object.slashes) ? object.slashes.map(function (e) {
        return _distribution.ValidatorSlashEvent.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map(function (e) {
        return e ? _distribution.ValidatorSlashEvent.toAmino(e) : undefined;
      });
    } else {
      obj.slashes = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryValidatorSlashesResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryValidatorSlashesResponse",
      value: QueryValidatorSlashesResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryValidatorSlashesResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryValidatorSlashesResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
      value: QueryValidatorSlashesResponse.encode(message).finish()
    };
  }
};
exports.QueryValidatorSlashesResponse = QueryValidatorSlashesResponse;
function createBaseQueryDelegationRewardsRequest() {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
var QueryDelegationRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegationRewardsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
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
    var message = createBaseQueryDelegationRewardsRequest();
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.validatorAddress = (_object$validatorAddr4 = object.validatorAddress) !== null && _object$validatorAddr4 !== void 0 ? _object$validatorAddr4 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegationRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationRewardsRequest",
      value: QueryDelegationRewardsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegationRewardsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegationRewardsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
      value: QueryDelegationRewardsRequest.encode(message).finish()
    };
  }
};
exports.QueryDelegationRewardsRequest = QueryDelegationRewardsRequest;
function createBaseQueryDelegationRewardsResponse() {
  return {
    rewards: []
  };
}
var QueryDelegationRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.rewards),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegationRewardsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$rewards;
    var message = createBaseQueryDelegationRewardsResponse();
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(function (e) {
        return _coin.DecCoin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(function (e) {
        return e ? _coin.DecCoin.toAmino(e) : undefined;
      });
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegationRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationRewardsResponse",
      value: QueryDelegationRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegationRewardsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
      value: QueryDelegationRewardsResponse.encode(message).finish()
    };
  }
};
exports.QueryDelegationRewardsResponse = QueryDelegationRewardsResponse;
function createBaseQueryDelegationTotalRewardsRequest() {
  return {
    delegatorAddress: ""
  };
}
var QueryDelegationTotalRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegationTotalRewardsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2;
    var message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegationTotalRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
      value: QueryDelegationTotalRewardsRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegationTotalRewardsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegationTotalRewardsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
      value: QueryDelegationTotalRewardsRequest.encode(message).finish()
    };
  }
};
exports.QueryDelegationTotalRewardsRequest = QueryDelegationTotalRewardsRequest;
function createBaseQueryDelegationTotalRewardsResponse() {
  return {
    rewards: [],
    total: []
  };
}
var QueryDelegationTotalRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator3 = _createForOfIteratorHelper(message.rewards),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _distribution.DelegationDelegatorReward.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var _iterator4 = _createForOfIteratorHelper(message.total),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v = _step4.value;
        _coin.DecCoin.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegationTotalRewardsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(_distribution.DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$rewards2, _object$total;
    var message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = ((_object$rewards2 = object.rewards) === null || _object$rewards2 === void 0 ? void 0 : _object$rewards2.map(function (e) {
      return _distribution.DelegationDelegatorReward.fromPartial(e);
    })) || [];
    message.total = ((_object$total = object.total) === null || _object$total === void 0 ? void 0 : _object$total.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(function (e) {
        return _distribution.DelegationDelegatorReward.fromAmino(e);
      }) : [],
      total: Array.isArray(object === null || object === void 0 ? void 0 : object.total) ? object.total.map(function (e) {
        return _coin.DecCoin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(function (e) {
        return e ? _distribution.DelegationDelegatorReward.toAmino(e) : undefined;
      });
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map(function (e) {
        return e ? _coin.DecCoin.toAmino(e) : undefined;
      });
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegationTotalRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
      value: QueryDelegationTotalRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegationTotalRewardsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegationTotalRewardsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
      value: QueryDelegationTotalRewardsResponse.encode(message).finish()
    };
  }
};
exports.QueryDelegationTotalRewardsResponse = QueryDelegationTotalRewardsResponse;
function createBaseQueryDelegatorValidatorsRequest() {
  return {
    delegatorAddress: ""
  };
}
var QueryDelegatorValidatorsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
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
          message.delegatorAddress = reader.string();
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
    var message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
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
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.encode(message).finish()
    };
  }
};
exports.QueryDelegatorValidatorsRequest = QueryDelegatorValidatorsRequest;
function createBaseQueryDelegatorValidatorsResponse() {
  return {
    validators: []
  };
}
var QueryDelegatorValidatorsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator5 = _createForOfIteratorHelper(message.validators),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
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
          message.validators.push(reader.string());
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
    var message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e;
      });
    } else {
      obj.validators = [];
    }
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
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.encode(message).finish()
    };
  }
};
exports.QueryDelegatorValidatorsResponse = QueryDelegatorValidatorsResponse;
function createBaseQueryDelegatorWithdrawAddressRequest() {
  return {
    delegatorAddress: ""
  };
}
var QueryDelegatorWithdrawAddressRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorWithdrawAddressRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
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
    var message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegatorWithdrawAddressRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
      value: QueryDelegatorWithdrawAddressRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegatorWithdrawAddressRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegatorWithdrawAddressRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
      value: QueryDelegatorWithdrawAddressRequest.encode(message).finish()
    };
  }
};
exports.QueryDelegatorWithdrawAddressRequest = QueryDelegatorWithdrawAddressRequest;
function createBaseQueryDelegatorWithdrawAddressResponse() {
  return {
    withdrawAddress: ""
  };
}
var QueryDelegatorWithdrawAddressResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorWithdrawAddressResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$withdrawAddre;
    var message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = (_object$withdrawAddre = object.withdrawAddress) !== null && _object$withdrawAddre !== void 0 ? _object$withdrawAddre : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      withdrawAddress: object.withdraw_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDelegatorWithdrawAddressResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
      value: QueryDelegatorWithdrawAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDelegatorWithdrawAddressResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDelegatorWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
      value: QueryDelegatorWithdrawAddressResponse.encode(message).finish()
    };
  }
};
exports.QueryDelegatorWithdrawAddressResponse = QueryDelegatorWithdrawAddressResponse;
function createBaseQueryCommunityPoolRequest() {
  return {};
}
var QueryCommunityPoolRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCommunityPoolRequest();
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
    var message = createBaseQueryCommunityPoolRequest();
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
    return QueryCommunityPoolRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryCommunityPoolRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryCommunityPoolRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.encode(message).finish()
    };
  }
};
exports.QueryCommunityPoolRequest = QueryCommunityPoolRequest;
function createBaseQueryCommunityPoolResponse() {
  return {
    pool: []
  };
}
var QueryCommunityPoolResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator6 = _createForOfIteratorHelper(message.pool),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(_coin.DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$pool;
    var message = createBaseQueryCommunityPoolResponse();
    message.pool = ((_object$pool = object.pool) === null || _object$pool === void 0 ? void 0 : _object$pool.map(function (e) {
      return _coin.DecCoin.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      pool: Array.isArray(object === null || object === void 0 ? void 0 : object.pool) ? object.pool.map(function (e) {
        return _coin.DecCoin.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.pool) {
      obj.pool = message.pool.map(function (e) {
        return e ? _coin.DecCoin.toAmino(e) : undefined;
      });
    } else {
      obj.pool = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryCommunityPoolResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryCommunityPoolResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.encode(message).finish()
    };
  }
};
exports.QueryCommunityPoolResponse = QueryCommunityPoolResponse;