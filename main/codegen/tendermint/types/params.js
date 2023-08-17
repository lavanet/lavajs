"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionParams = exports.ValidatorParams = exports.HashedParams = exports.EvidenceParams = exports.ConsensusParams = exports.BlockParams = void 0;
var _duration = require("../../google/protobuf/duration");
var _binary = require("../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */

/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */

/** BlockParams contains limits on the block size. */

/** BlockParams contains limits on the block size. */

/** EvidenceParams determine how we handle evidence of malfeasance. */

/** EvidenceParams determine how we handle evidence of malfeasance. */

/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */

/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */

/** VersionParams contains the ABCI application version. */

/** VersionParams contains the ABCI application version. */

/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */

/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */

function createBaseConsensusParams() {
  return {
    block: BlockParams.fromPartial({}),
    evidence: EvidenceParams.fromPartial({}),
    validator: ValidatorParams.fromPartial({}),
    version: VersionParams.fromPartial({})
  };
}
var ConsensusParams = {
  typeUrl: "/tendermint.types.ConsensusParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConsensusParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      block: object !== null && object !== void 0 && object.block ? BlockParams.fromAmino(object.block) : undefined,
      evidence: object !== null && object !== void 0 && object.evidence ? EvidenceParams.fromAmino(object.evidence) : undefined,
      validator: object !== null && object !== void 0 && object.validator ? ValidatorParams.fromAmino(object.validator) : undefined,
      version: object !== null && object !== void 0 && object.version ? VersionParams.fromAmino(object.version) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block = message.block ? BlockParams.toAmino(message.block) : undefined;
    obj.evidence = message.evidence ? EvidenceParams.toAmino(message.evidence) : undefined;
    obj.validator = message.validator ? ValidatorParams.toAmino(message.validator) : undefined;
    obj.version = message.version ? VersionParams.toAmino(message.version) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ConsensusParams.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ConsensusParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return ConsensusParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.ConsensusParams",
      value: ConsensusParams.encode(message).finish()
    };
  }
};
exports.ConsensusParams = ConsensusParams;
function createBaseBlockParams() {
  return {
    maxBytes: BigInt(0),
    maxGas: BigInt(0),
    timeIotaMs: BigInt(0)
  };
}
var BlockParams = {
  typeUrl: "/tendermint.types.BlockParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.maxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (message.maxGas !== BigInt(0)) {
      writer.uint32(16).int64(message.maxGas);
    }
    if (message.timeIotaMs !== BigInt(0)) {
      writer.uint32(24).int64(message.timeIotaMs);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = reader.int64();
          break;
        case 2:
          message.maxGas = reader.int64();
          break;
        case 3:
          message.timeIotaMs = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockParams();
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
    message.timeIotaMs = object.timeIotaMs !== undefined && object.timeIotaMs !== null ? BigInt(object.timeIotaMs.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      maxBytes: BigInt(object.max_bytes),
      maxGas: BigInt(object.max_gas),
      timeIotaMs: BigInt(object.time_iota_ms)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
    obj.max_gas = message.maxGas ? message.maxGas.toString() : undefined;
    obj.time_iota_ms = message.timeIotaMs ? message.timeIotaMs.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return BlockParams.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return BlockParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return BlockParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.BlockParams",
      value: BlockParams.encode(message).finish()
    };
  }
};
exports.BlockParams = BlockParams;
function createBaseEvidenceParams() {
  return {
    maxAgeNumBlocks: BigInt(0),
    maxAgeDuration: _duration.Duration.fromPartial({}),
    maxBytes: BigInt(0)
  };
}
var EvidenceParams = {
  typeUrl: "/tendermint.types.EvidenceParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.maxAgeNumBlocks !== BigInt(0)) {
      writer.uint32(8).int64(message.maxAgeNumBlocks);
    }
    if (message.maxAgeDuration !== undefined) {
      _duration.Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxBytes !== BigInt(0)) {
      writer.uint32(24).int64(message.maxBytes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEvidenceParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = reader.int64();
          break;
        case 2:
          message.maxAgeDuration = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxBytes = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEvidenceParams();
    message.maxAgeNumBlocks = object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt(0);
    message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? _duration.Duration.fromPartial(object.maxAgeDuration) : undefined;
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      maxAgeNumBlocks: BigInt(object.max_age_num_blocks),
      maxAgeDuration: object !== null && object !== void 0 && object.max_age_duration ? _duration.Duration.fromAmino(object.max_age_duration) : undefined,
      maxBytes: BigInt(object.max_bytes)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.max_age_num_blocks = message.maxAgeNumBlocks ? message.maxAgeNumBlocks.toString() : undefined;
    obj.max_age_duration = message.maxAgeDuration ? _duration.Duration.toAmino(message.maxAgeDuration) : undefined;
    obj.max_bytes = message.maxBytes ? message.maxBytes.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EvidenceParams.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EvidenceParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return EvidenceParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.EvidenceParams",
      value: EvidenceParams.encode(message).finish()
    };
  }
};
exports.EvidenceParams = EvidenceParams;
function createBaseValidatorParams() {
  return {
    pubKeyTypes: []
  };
}
var ValidatorParams = {
  typeUrl: "/tendermint.types.ValidatorParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.pubKeyTypes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValidatorParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeyTypes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$pubKeyTypes;
    var message = createBaseValidatorParams();
    message.pubKeyTypes = ((_object$pubKeyTypes = object.pubKeyTypes) === null || _object$pubKeyTypes === void 0 ? void 0 : _object$pubKeyTypes.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      pubKeyTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.pub_key_types) ? object.pub_key_types.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.pubKeyTypes) {
      obj.pub_key_types = message.pubKeyTypes.map(function (e) {
        return e;
      });
    } else {
      obj.pub_key_types = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValidatorParams.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValidatorParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValidatorParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.ValidatorParams",
      value: ValidatorParams.encode(message).finish()
    };
  }
};
exports.ValidatorParams = ValidatorParams;
function createBaseVersionParams() {
  return {
    appVersion: BigInt(0)
  };
}
var VersionParams = {
  typeUrl: "/tendermint.types.VersionParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.appVersion !== BigInt(0)) {
      writer.uint32(8).uint64(message.appVersion);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersionParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appVersion = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseVersionParams();
    message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      appVersion: BigInt(object.app_version)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.app_version = message.appVersion ? message.appVersion.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return VersionParams.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return VersionParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return VersionParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.VersionParams",
      value: VersionParams.encode(message).finish()
    };
  }
};
exports.VersionParams = VersionParams;
function createBaseHashedParams() {
  return {
    blockMaxBytes: BigInt(0),
    blockMaxGas: BigInt(0)
  };
}
var HashedParams = {
  typeUrl: "/tendermint.types.HashedParams",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.blockMaxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.blockMaxBytes);
    }
    if (message.blockMaxGas !== BigInt(0)) {
      writer.uint32(16).int64(message.blockMaxGas);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHashedParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockMaxBytes = reader.int64();
          break;
        case 2:
          message.blockMaxGas = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseHashedParams();
    message.blockMaxBytes = object.blockMaxBytes !== undefined && object.blockMaxBytes !== null ? BigInt(object.blockMaxBytes.toString()) : BigInt(0);
    message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? BigInt(object.blockMaxGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      blockMaxBytes: BigInt(object.block_max_bytes),
      blockMaxGas: BigInt(object.block_max_gas)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block_max_bytes = message.blockMaxBytes ? message.blockMaxBytes.toString() : undefined;
    obj.block_max_gas = message.blockMaxGas ? message.blockMaxGas.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return HashedParams.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return HashedParams.decode(message.value);
  },
  toProto: function toProto(message) {
    return HashedParams.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.HashedParams",
      value: HashedParams.encode(message).finish()
    };
  }
};
exports.HashedParams = HashedParams;