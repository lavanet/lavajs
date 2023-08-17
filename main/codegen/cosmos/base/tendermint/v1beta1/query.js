"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionInfo = exports.Validator = exports.Module = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = void 0;
var _pagination = require("../../query/v1beta1/pagination");
var _any = require("../../../../google/protobuf/any");
var _types = require("../../../../tendermint/types/types");
var _block = require("../../../../tendermint/types/block");
var _types2 = require("../../../../tendermint/p2p/types");
var _binary = require("../../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */

/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */

/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */

/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */

/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */

/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */

/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */

/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */

/** Validator is the type for the validator-set. */

/** Validator is the type for the validator-set. */

/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */

/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */

/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */

/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */

/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */

/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */

/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */

/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */

/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */

/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */

/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */

/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */

/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */

/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */

/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */

/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */

/** VersionInfo is the type for the GetNodeInfoResponse message. */

/** VersionInfo is the type for the GetNodeInfoResponse message. */

/** Module is the type for VersionInfo */

/** Module is the type for VersionInfo */

function createBaseGetValidatorSetByHeightRequest() {
  return {
    height: BigInt(0),
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var GetValidatorSetByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
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
    var message = createBaseGetValidatorSetByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      height: BigInt(object.height),
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.pagination = message.pagination ? _pagination.PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetValidatorSetByHeightRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetValidatorSetByHeightRequest",
      value: GetValidatorSetByHeightRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetValidatorSetByHeightRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetValidatorSetByHeightRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
      value: GetValidatorSetByHeightRequest.encode(message).finish()
    };
  }
};
exports.GetValidatorSetByHeightRequest = GetValidatorSetByHeightRequest;
function createBaseGetValidatorSetByHeightResponse() {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var GetValidatorSetByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    var _iterator = _createForOfIteratorHelper(message.validators),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Validator.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
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
    var message = createBaseGetValidatorSetByHeightResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      blockHeight: BigInt(object.block_height),
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return Validator.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? Validator.toAmino(e) : undefined;
      });
    } else {
      obj.validators = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetValidatorSetByHeightResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetValidatorSetByHeightResponse",
      value: GetValidatorSetByHeightResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetValidatorSetByHeightResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetValidatorSetByHeightResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
      value: GetValidatorSetByHeightResponse.encode(message).finish()
    };
  }
};
exports.GetValidatorSetByHeightResponse = GetValidatorSetByHeightResponse;
function createBaseGetLatestValidatorSetRequest() {
  return {
    pagination: _pagination.PageRequest.fromPartial({})
  };
}
var GetLatestValidatorSetRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
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
    var message = createBaseGetLatestValidatorSetRequest();
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
    var message = createBaseGetLatestValidatorSetRequest();
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
    return GetLatestValidatorSetRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetLatestValidatorSetRequest",
      value: GetLatestValidatorSetRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetLatestValidatorSetRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetLatestValidatorSetRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
      value: GetLatestValidatorSetRequest.encode(message).finish()
    };
  }
};
exports.GetLatestValidatorSetRequest = GetLatestValidatorSetRequest;
function createBaseGetLatestValidatorSetResponse() {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: _pagination.PageResponse.fromPartial({})
  };
}
var GetLatestValidatorSetResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    var _iterator2 = _createForOfIteratorHelper(message.validators),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        Validator.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
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
    var message = createBaseGetLatestValidatorSetResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = ((_object$validators2 = object.validators) === null || _object$validators2 === void 0 ? void 0 : _object$validators2.map(function (e) {
      return Validator.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      blockHeight: BigInt(object.block_height),
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) {
        return Validator.fromAmino(e);
      }) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? _pagination.PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(function (e) {
        return e ? Validator.toAmino(e) : undefined;
      });
    } else {
      obj.validators = [];
    }
    obj.pagination = message.pagination ? _pagination.PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetLatestValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetLatestValidatorSetResponse",
      value: GetLatestValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetLatestValidatorSetResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetLatestValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
      value: GetLatestValidatorSetResponse.encode(message).finish()
    };
  }
};
exports.GetLatestValidatorSetResponse = GetLatestValidatorSetResponse;
function createBaseValidator() {
  return {
    address: "",
    pubKey: _any.Any.fromPartial({}),
    votingPower: BigInt(0),
    proposerPriority: BigInt(0)
  };
}
var Validator = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      _any.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64();
          break;
        case 4:
          message.proposerPriority = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? _any.Any.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
    message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address,
      pubKey: object !== null && object !== void 0 && object.pub_key ? _any.Any.fromAmino(object.pub_key) : undefined,
      votingPower: BigInt(object.voting_power),
      proposerPriority: BigInt(object.proposer_priority)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    obj.pub_key = message.pubKey ? _any.Any.toAmino(message.pubKey) : undefined;
    obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
    obj.proposer_priority = message.proposerPriority ? message.proposerPriority.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Validator.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Validator",
      value: Validator.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Validator.decode(message.value);
  },
  toProto: function toProto(message) {
    return Validator.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
exports.Validator = Validator;
function createBaseGetBlockByHeightRequest() {
  return {
    height: BigInt(0)
  };
}
var GetBlockByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
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
    var message = createBaseGetBlockByHeightRequest();
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
    var message = createBaseGetBlockByHeightRequest();
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
    return GetBlockByHeightRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetBlockByHeightRequest",
      value: GetBlockByHeightRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetBlockByHeightRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetBlockByHeightRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
      value: GetBlockByHeightRequest.encode(message).finish()
    };
  }
};
exports.GetBlockByHeightRequest = GetBlockByHeightRequest;
function createBaseGetBlockByHeightResponse() {
  return {
    blockId: _types.BlockID.fromPartial({}),
    block: _block.Block.fromPartial({})
  };
}
var GetBlockByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.blockId !== undefined) {
      _types.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = _types.BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = _block.Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetBlockByHeightResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? _types.BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      blockId: object !== null && object !== void 0 && object.block_id ? _types.BlockID.fromAmino(object.block_id) : undefined,
      block: object !== null && object !== void 0 && object.block ? _block.Block.fromAmino(object.block) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block_id = message.blockId ? _types.BlockID.toAmino(message.blockId) : undefined;
    obj.block = message.block ? _block.Block.toAmino(message.block) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetBlockByHeightResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetBlockByHeightResponse",
      value: GetBlockByHeightResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetBlockByHeightResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetBlockByHeightResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
      value: GetBlockByHeightResponse.encode(message).finish()
    };
  }
};
exports.GetBlockByHeightResponse = GetBlockByHeightResponse;
function createBaseGetLatestBlockRequest() {
  return {};
}
var GetLatestBlockRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestBlockRequest();
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
    var message = createBaseGetLatestBlockRequest();
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
    return GetLatestBlockRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetLatestBlockRequest",
      value: GetLatestBlockRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetLatestBlockRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetLatestBlockRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
      value: GetLatestBlockRequest.encode(message).finish()
    };
  }
};
exports.GetLatestBlockRequest = GetLatestBlockRequest;
function createBaseGetLatestBlockResponse() {
  return {
    blockId: _types.BlockID.fromPartial({}),
    block: _block.Block.fromPartial({})
  };
}
var GetLatestBlockResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.blockId !== undefined) {
      _types.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      _block.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = _types.BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = _block.Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetLatestBlockResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? _types.BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? _block.Block.fromPartial(object.block) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      blockId: object !== null && object !== void 0 && object.block_id ? _types.BlockID.fromAmino(object.block_id) : undefined,
      block: object !== null && object !== void 0 && object.block ? _block.Block.fromAmino(object.block) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block_id = message.blockId ? _types.BlockID.toAmino(message.blockId) : undefined;
    obj.block = message.block ? _block.Block.toAmino(message.block) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetLatestBlockResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetLatestBlockResponse",
      value: GetLatestBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetLatestBlockResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetLatestBlockResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
      value: GetLatestBlockResponse.encode(message).finish()
    };
  }
};
exports.GetLatestBlockResponse = GetLatestBlockResponse;
function createBaseGetSyncingRequest() {
  return {};
}
var GetSyncingRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetSyncingRequest();
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
    var message = createBaseGetSyncingRequest();
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
    return GetSyncingRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetSyncingRequest",
      value: GetSyncingRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetSyncingRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetSyncingRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
      value: GetSyncingRequest.encode(message).finish()
    };
  }
};
exports.GetSyncingRequest = GetSyncingRequest;
function createBaseGetSyncingResponse() {
  return {
    syncing: false
  };
}
var GetSyncingResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$syncing;
    var message = createBaseGetSyncingResponse();
    message.syncing = (_object$syncing = object.syncing) !== null && _object$syncing !== void 0 ? _object$syncing : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      syncing: object.syncing
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.syncing = message.syncing;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetSyncingResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetSyncingResponse",
      value: GetSyncingResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetSyncingResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetSyncingResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
      value: GetSyncingResponse.encode(message).finish()
    };
  }
};
exports.GetSyncingResponse = GetSyncingResponse;
function createBaseGetNodeInfoRequest() {
  return {};
}
var GetNodeInfoRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetNodeInfoRequest();
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
    var message = createBaseGetNodeInfoRequest();
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
    return GetNodeInfoRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetNodeInfoRequest",
      value: GetNodeInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetNodeInfoRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetNodeInfoRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
      value: GetNodeInfoRequest.encode(message).finish()
    };
  }
};
exports.GetNodeInfoRequest = GetNodeInfoRequest;
function createBaseGetNodeInfoResponse() {
  return {
    nodeInfo: _types2.NodeInfo.fromPartial({}),
    applicationVersion: VersionInfo.fromPartial({})
  };
}
var GetNodeInfoResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.nodeInfo !== undefined) {
      _types2.NodeInfo.encode(message.nodeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.applicationVersion !== undefined) {
      VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeInfo = _types2.NodeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseGetNodeInfoResponse();
    message.nodeInfo = object.nodeInfo !== undefined && object.nodeInfo !== null ? _types2.NodeInfo.fromPartial(object.nodeInfo) : undefined;
    message.applicationVersion = object.applicationVersion !== undefined && object.applicationVersion !== null ? VersionInfo.fromPartial(object.applicationVersion) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      nodeInfo: object !== null && object !== void 0 && object.node_info ? _types2.NodeInfo.fromAmino(object.node_info) : undefined,
      applicationVersion: object !== null && object !== void 0 && object.application_version ? VersionInfo.fromAmino(object.application_version) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.node_info = message.nodeInfo ? _types2.NodeInfo.toAmino(message.nodeInfo) : undefined;
    obj.application_version = message.applicationVersion ? VersionInfo.toAmino(message.applicationVersion) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GetNodeInfoResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GetNodeInfoResponse",
      value: GetNodeInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GetNodeInfoResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GetNodeInfoResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
      value: GetNodeInfoResponse.encode(message).finish()
    };
  }
};
exports.GetNodeInfoResponse = GetNodeInfoResponse;
function createBaseVersionInfo() {
  return {
    name: "",
    appName: "",
    version: "",
    gitCommit: "",
    buildTags: "",
    goVersion: "",
    buildDeps: [],
    cosmosSdkVersion: ""
  };
}
var VersionInfo = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }
    var _iterator3 = _createForOfIteratorHelper(message.buildDeps),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        Module.encode(v, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersionInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.gitCommit = reader.string();
          break;
        case 5:
          message.buildTags = reader.string();
          break;
        case 6:
          message.goVersion = reader.string();
          break;
        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32()));
          break;
        case 8:
          message.cosmosSdkVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$appName, _object$version, _object$gitCommit, _object$buildTags, _object$goVersion, _object$buildDeps, _object$cosmosSdkVers;
    var message = createBaseVersionInfo();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.appName = (_object$appName = object.appName) !== null && _object$appName !== void 0 ? _object$appName : "";
    message.version = (_object$version = object.version) !== null && _object$version !== void 0 ? _object$version : "";
    message.gitCommit = (_object$gitCommit = object.gitCommit) !== null && _object$gitCommit !== void 0 ? _object$gitCommit : "";
    message.buildTags = (_object$buildTags = object.buildTags) !== null && _object$buildTags !== void 0 ? _object$buildTags : "";
    message.goVersion = (_object$goVersion = object.goVersion) !== null && _object$goVersion !== void 0 ? _object$goVersion : "";
    message.buildDeps = ((_object$buildDeps = object.buildDeps) === null || _object$buildDeps === void 0 ? void 0 : _object$buildDeps.map(function (e) {
      return Module.fromPartial(e);
    })) || [];
    message.cosmosSdkVersion = (_object$cosmosSdkVers = object.cosmosSdkVersion) !== null && _object$cosmosSdkVers !== void 0 ? _object$cosmosSdkVers : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      appName: object.app_name,
      version: object.version,
      gitCommit: object.git_commit,
      buildTags: object.build_tags,
      goVersion: object.go_version,
      buildDeps: Array.isArray(object === null || object === void 0 ? void 0 : object.build_deps) ? object.build_deps.map(function (e) {
        return Module.fromAmino(e);
      }) : [],
      cosmosSdkVersion: object.cosmos_sdk_version
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj.app_name = message.appName;
    obj.version = message.version;
    obj.git_commit = message.gitCommit;
    obj.build_tags = message.buildTags;
    obj.go_version = message.goVersion;
    if (message.buildDeps) {
      obj.build_deps = message.buildDeps.map(function (e) {
        return e ? Module.toAmino(e) : undefined;
      });
    } else {
      obj.build_deps = [];
    }
    obj.cosmos_sdk_version = message.cosmosSdkVersion;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return VersionInfo.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/VersionInfo",
      value: VersionInfo.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return VersionInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return VersionInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
      value: VersionInfo.encode(message).finish()
    };
  }
};
exports.VersionInfo = VersionInfo;
function createBaseModule() {
  return {
    path: "",
    version: "",
    sum: ""
  };
}
var Module = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModule();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$path, _object$version2, _object$sum;
    var message = createBaseModule();
    message.path = (_object$path = object.path) !== null && _object$path !== void 0 ? _object$path : "";
    message.version = (_object$version2 = object.version) !== null && _object$version2 !== void 0 ? _object$version2 : "";
    message.sum = (_object$sum = object.sum) !== null && _object$sum !== void 0 ? _object$sum : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      path: object.path,
      version: object.version,
      sum: object.sum
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.path = message.path;
    obj.version = message.version;
    obj.sum = message.sum;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Module.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Module.decode(message.value);
  },
  toProto: function toProto(message) {
    return Module.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
      value: Module.encode(message).finish()
    };
  }
};
exports.Module = Module;