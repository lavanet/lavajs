"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryGetStakeStorageResponse = exports.QueryGetStakeStorageRequest = exports.QueryGetFixatedParamsResponse = exports.QueryGetFixatedParamsRequest = exports.QueryGetEpochDetailsResponse = exports.QueryGetEpochDetailsRequest = exports.QueryAllStakeStorageResponse = exports.QueryAllStakeStorageRequest = exports.QueryAllFixatedParamsResponse = exports.QueryAllFixatedParamsRequest = void 0;
var _pagination = require("../../../cosmos/base/query/v1beta1/pagination");
var _params = require("./params");
var _stake_storage = require("./stake_storage");
var _epoch_details = require("./epoch_details");
var _fixated_params = require("./fixated_params");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryParamsRequest",
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
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: _params.Params.fromPartial({})
  };
}
var QueryParamsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryParamsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = _params.Params.decode(reader, reader.uint32());
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
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _params.Params.fromAmino(object.params) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _params.Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryGetStakeStorageRequest() {
  return {
    index: ""
  };
}
var QueryGetStakeStorageRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetStakeStorageRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index;
    var message = createBaseQueryGetStakeStorageRequest();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: object.index
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGetStakeStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGetStakeStorageRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGetStakeStorageRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageRequest",
      value: QueryGetStakeStorageRequest.encode(message).finish()
    };
  }
};
exports.QueryGetStakeStorageRequest = QueryGetStakeStorageRequest;
function createBaseQueryGetStakeStorageResponse() {
  return {
    stakeStorage: _stake_storage.StakeStorage.fromPartial({})
  };
}
var QueryGetStakeStorageResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.stakeStorage !== undefined) {
      _stake_storage.StakeStorage.encode(message.stakeStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetStakeStorageResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeStorage = _stake_storage.StakeStorage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetStakeStorageResponse();
    message.stakeStorage = object.stakeStorage !== undefined && object.stakeStorage !== null ? _stake_storage.StakeStorage.fromPartial(object.stakeStorage) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      stakeStorage: object !== null && object !== void 0 && object.stakeStorage ? _stake_storage.StakeStorage.fromAmino(object.stakeStorage) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.stakeStorage = message.stakeStorage ? _stake_storage.StakeStorage.toAmino(message.stakeStorage) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGetStakeStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGetStakeStorageResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGetStakeStorageResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageResponse",
      value: QueryGetStakeStorageResponse.encode(message).finish()
    };
  }
};
exports.QueryGetStakeStorageResponse = QueryGetStakeStorageResponse;
function createBaseQueryAllStakeStorageRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAllStakeStorageRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllStakeStorageRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var message = createBaseQueryAllStakeStorageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryAllStakeStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryAllStakeStorageRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryAllStakeStorageRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageRequest",
      value: QueryAllStakeStorageRequest.encode(message).finish()
    };
  }
};
exports.QueryAllStakeStorageRequest = QueryAllStakeStorageRequest;
function createBaseQueryAllStakeStorageResponse() {
  return {
    stakeStorage: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAllStakeStorageResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.stakeStorage),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _stake_storage.StakeStorage.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryAllStakeStorageResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeStorage.push(_stake_storage.StakeStorage.decode(reader, reader.uint32()));
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
    var _object$stakeStorage;
    var message = createBaseQueryAllStakeStorageResponse();
    message.stakeStorage = ((_object$stakeStorage = object.stakeStorage) === null || _object$stakeStorage === void 0 ? void 0 : _object$stakeStorage.map(function (e) {
      return _stake_storage.StakeStorage.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      stakeStorage: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeStorage) ? object.stakeStorage.map(function (e) {
        return _stake_storage.StakeStorage.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.stakeStorage) {
      obj.stakeStorage = message.stakeStorage.map(function (e) {
        return e ? _stake_storage.StakeStorage.toAmino(e) : undefined;
      });
    } else {
      obj.stakeStorage = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryAllStakeStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryAllStakeStorageResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryAllStakeStorageResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageResponse",
      value: QueryAllStakeStorageResponse.encode(message).finish()
    };
  }
};
exports.QueryAllStakeStorageResponse = QueryAllStakeStorageResponse;
function createBaseQueryGetEpochDetailsRequest() {
  return {};
}
var QueryGetEpochDetailsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetEpochDetailsRequest();
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
    var message = createBaseQueryGetEpochDetailsRequest();
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
    return QueryGetEpochDetailsRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGetEpochDetailsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGetEpochDetailsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsRequest",
      value: QueryGetEpochDetailsRequest.encode(message).finish()
    };
  }
};
exports.QueryGetEpochDetailsRequest = QueryGetEpochDetailsRequest;
function createBaseQueryGetEpochDetailsResponse() {
  return {
    EpochDetails: _epoch_details.EpochDetails.fromPartial({})
  };
}
var QueryGetEpochDetailsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.EpochDetails !== undefined) {
      _epoch_details.EpochDetails.encode(message.EpochDetails, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetEpochDetailsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.EpochDetails = _epoch_details.EpochDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetEpochDetailsResponse();
    message.EpochDetails = object.EpochDetails !== undefined && object.EpochDetails !== null ? _epoch_details.EpochDetails.fromPartial(object.EpochDetails) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      EpochDetails: object !== null && object !== void 0 && object.EpochDetails ? _epoch_details.EpochDetails.fromAmino(object.EpochDetails) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.EpochDetails = message.EpochDetails ? _epoch_details.EpochDetails.toAmino(message.EpochDetails) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGetEpochDetailsResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGetEpochDetailsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGetEpochDetailsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsResponse",
      value: QueryGetEpochDetailsResponse.encode(message).finish()
    };
  }
};
exports.QueryGetEpochDetailsResponse = QueryGetEpochDetailsResponse;
function createBaseQueryGetFixatedParamsRequest() {
  return {
    index: ""
  };
}
var QueryGetFixatedParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetFixatedParamsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index2;
    var message = createBaseQueryGetFixatedParamsRequest();
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: object.index
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGetFixatedParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGetFixatedParamsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGetFixatedParamsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsRequest",
      value: QueryGetFixatedParamsRequest.encode(message).finish()
    };
  }
};
exports.QueryGetFixatedParamsRequest = QueryGetFixatedParamsRequest;
function createBaseQueryGetFixatedParamsResponse() {
  return {
    fixatedParams: _fixated_params.FixatedParams.fromPartial({})
  };
}
var QueryGetFixatedParamsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.fixatedParams !== undefined) {
      _fixated_params.FixatedParams.encode(message.fixatedParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetFixatedParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixatedParams = _fixated_params.FixatedParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetFixatedParamsResponse();
    message.fixatedParams = object.fixatedParams !== undefined && object.fixatedParams !== null ? _fixated_params.FixatedParams.fromPartial(object.fixatedParams) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      fixatedParams: object !== null && object !== void 0 && object.fixatedParams ? _fixated_params.FixatedParams.fromAmino(object.fixatedParams) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.fixatedParams = message.fixatedParams ? _fixated_params.FixatedParams.toAmino(message.fixatedParams) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryGetFixatedParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryGetFixatedParamsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryGetFixatedParamsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsResponse",
      value: QueryGetFixatedParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryGetFixatedParamsResponse = QueryGetFixatedParamsResponse;
function createBaseQueryAllFixatedParamsRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var QueryAllFixatedParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllFixatedParamsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var message = createBaseQueryAllFixatedParamsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryAllFixatedParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryAllFixatedParamsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryAllFixatedParamsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsRequest",
      value: QueryAllFixatedParamsRequest.encode(message).finish()
    };
  }
};
exports.QueryAllFixatedParamsRequest = QueryAllFixatedParamsRequest;
function createBaseQueryAllFixatedParamsResponse() {
  return {
    fixatedParams: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var QueryAllFixatedParamsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.fixatedParams),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _fixated_params.FixatedParams.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseQueryAllFixatedParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixatedParams.push(_fixated_params.FixatedParams.decode(reader, reader.uint32()));
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
    var _object$fixatedParams;
    var message = createBaseQueryAllFixatedParamsResponse();
    message.fixatedParams = ((_object$fixatedParams = object.fixatedParams) === null || _object$fixatedParams === void 0 ? void 0 : _object$fixatedParams.map(function (e) {
      return _fixated_params.FixatedParams.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      fixatedParams: Array.isArray(object === null || object === void 0 ? void 0 : object.fixatedParams) ? object.fixatedParams.map(function (e) {
        return _fixated_params.FixatedParams.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.fixatedParams) {
      obj.fixatedParams = message.fixatedParams.map(function (e) {
        return e ? _fixated_params.FixatedParams.toAmino(e) : undefined;
      });
    } else {
      obj.fixatedParams = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryAllFixatedParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryAllFixatedParamsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryAllFixatedParamsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsResponse",
      value: QueryAllFixatedParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryAllFixatedParamsResponse = QueryAllFixatedParamsResponse;