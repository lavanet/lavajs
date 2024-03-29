"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vote = exports.TxProof = exports.SignedMsgTypeSDKType = exports.SignedMsgType = exports.SignedHeader = exports.Proposal = exports.PartSetHeader = exports.Part = exports.LightBlock = exports.Header = exports.Data = exports.CommitSig = exports.Commit = exports.BlockMeta = exports.BlockIDFlagSDKType = exports.BlockIDFlag = exports.BlockID = void 0;
exports.blockIDFlagFromJSON = blockIDFlagFromJSON;
exports.blockIDFlagToJSON = blockIDFlagToJSON;
exports.signedMsgTypeFromJSON = signedMsgTypeFromJSON;
exports.signedMsgTypeToJSON = signedMsgTypeToJSON;
var _proof = require("../crypto/proof");
var _types = require("../version/types");
var _timestamp = require("../../google/protobuf/timestamp");
var _validator = require("./validator");
var _binary = require("../../binary");
var _helpers = require("../../helpers");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** BlockIdFlag indicates which BlcokID the signature is for */
var BlockIDFlag = /*#__PURE__*/function (BlockIDFlag) {
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
  BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
  BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BlockIDFlag;
}({});
exports.BlockIDFlag = BlockIDFlag;
var BlockIDFlagSDKType = BlockIDFlag;
exports.BlockIDFlagSDKType = BlockIDFlagSDKType;
function blockIDFlagFromJSON(object) {
  switch (object) {
    case 0:
    case "BLOCK_ID_FLAG_UNKNOWN":
      return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
    case 1:
    case "BLOCK_ID_FLAG_ABSENT":
      return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
    case 2:
    case "BLOCK_ID_FLAG_COMMIT":
      return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
    case 3:
    case "BLOCK_ID_FLAG_NIL":
      return BlockIDFlag.BLOCK_ID_FLAG_NIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BlockIDFlag.UNRECOGNIZED;
  }
}
function blockIDFlagToJSON(object) {
  switch (object) {
    case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
      return "BLOCK_ID_FLAG_UNKNOWN";
    case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
      return "BLOCK_ID_FLAG_ABSENT";
    case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
      return "BLOCK_ID_FLAG_COMMIT";
    case BlockIDFlag.BLOCK_ID_FLAG_NIL:
      return "BLOCK_ID_FLAG_NIL";
    case BlockIDFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SignedMsgType is a type of signed message in the consensus. */
var SignedMsgType = /*#__PURE__*/function (SignedMsgType) {
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
  SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
  SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return SignedMsgType;
}({});
exports.SignedMsgType = SignedMsgType;
var SignedMsgTypeSDKType = SignedMsgType;
exports.SignedMsgTypeSDKType = SignedMsgTypeSDKType;
function signedMsgTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "SIGNED_MSG_TYPE_UNKNOWN":
      return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
    case 1:
    case "SIGNED_MSG_TYPE_PREVOTE":
      return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
    case 2:
    case "SIGNED_MSG_TYPE_PRECOMMIT":
      return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
    case 32:
    case "SIGNED_MSG_TYPE_PROPOSAL":
      return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignedMsgType.UNRECOGNIZED;
  }
}
function signedMsgTypeToJSON(object) {
  switch (object) {
    case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
      return "SIGNED_MSG_TYPE_UNKNOWN";
    case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
      return "SIGNED_MSG_TYPE_PREVOTE";
    case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
      return "SIGNED_MSG_TYPE_PRECOMMIT";
    case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
      return "SIGNED_MSG_TYPE_PROPOSAL";
    case SignedMsgType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** PartsetHeader */

/** PartsetHeader */

/** BlockID */

/** BlockID */

/** Header defines the structure of a Tendermint block header. */

/** Header defines the structure of a Tendermint block header. */

/** Data contains the set of transactions included in the block */

/** Data contains the set of transactions included in the block */

/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */

/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */

/** Commit contains the evidence that a block was committed by a set of validators. */

/** Commit contains the evidence that a block was committed by a set of validators. */

/** CommitSig is a part of the Vote included in a Commit. */

/** CommitSig is a part of the Vote included in a Commit. */

/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */

/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */

function createBasePartSetHeader() {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}
var PartSetHeader = {
  typeUrl: "/tendermint.types.PartSetHeader",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePartSetHeader();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$total, _object$hash;
    var message = createBasePartSetHeader();
    message.total = (_object$total = object.total) !== null && _object$total !== void 0 ? _object$total : 0;
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      total: object.total,
      hash: object.hash
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.total = message.total;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PartSetHeader.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PartSetHeader.decode(message.value);
  },
  toProto: function toProto(message) {
    return PartSetHeader.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.PartSetHeader",
      value: PartSetHeader.encode(message).finish()
    };
  }
};
exports.PartSetHeader = PartSetHeader;
function createBasePart() {
  return {
    index: 0,
    bytes: new Uint8Array(),
    proof: _proof.Proof.fromPartial({})
  };
}
var Part = {
  typeUrl: "/tendermint.types.Part",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.bytes.length !== 0) {
      writer.uint32(18).bytes(message.bytes);
    }
    if (message.proof !== undefined) {
      _proof.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePart();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.bytes = reader.bytes();
          break;
        case 3:
          message.proof = _proof.Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$bytes;
    var message = createBasePart();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : 0;
    message.bytes = (_object$bytes = object.bytes) !== null && _object$bytes !== void 0 ? _object$bytes : new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? _proof.Proof.fromPartial(object.proof) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: object.index,
      bytes: object.bytes,
      proof: object !== null && object !== void 0 && object.proof ? _proof.Proof.fromAmino(object.proof) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index;
    obj.bytes = message.bytes;
    obj.proof = message.proof ? _proof.Proof.toAmino(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Part.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Part.decode(message.value);
  },
  toProto: function toProto(message) {
    return Part.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Part",
      value: Part.encode(message).finish()
    };
  }
};
exports.Part = Part;
function createBaseBlockID() {
  return {
    hash: new Uint8Array(),
    partSetHeader: PartSetHeader.fromPartial({})
  };
}
var BlockID = {
  typeUrl: "/tendermint.types.BlockID",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.partSetHeader !== undefined) {
      PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockID();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.partSetHeader = PartSetHeader.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$hash2;
    var message = createBaseBlockID();
    message.hash = (_object$hash2 = object.hash) !== null && _object$hash2 !== void 0 ? _object$hash2 : new Uint8Array();
    message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? PartSetHeader.fromPartial(object.partSetHeader) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      hash: object.hash,
      partSetHeader: object !== null && object !== void 0 && object.part_set_header ? PartSetHeader.fromAmino(object.part_set_header) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.hash = message.hash;
    obj.part_set_header = message.partSetHeader ? PartSetHeader.toAmino(message.partSetHeader) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return BlockID.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return BlockID.decode(message.value);
  },
  toProto: function toProto(message) {
    return BlockID.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.BlockID",
      value: BlockID.encode(message).finish()
    };
  }
};
exports.BlockID = BlockID;
function createBaseHeader() {
  return {
    version: _types.Consensus.fromPartial({}),
    chainId: "",
    height: BigInt(0),
    time: new Date(),
    lastBlockId: BlockID.fromPartial({}),
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: new Uint8Array()
  };
}
var Header = {
  typeUrl: "/tendermint.types.Header",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.version !== undefined) {
      _types.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }
    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }
    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(114).bytes(message.proposerAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHeader();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = _types.Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.lastCommitHash = reader.bytes();
          break;
        case 7:
          message.dataHash = reader.bytes();
          break;
        case 8:
          message.validatorsHash = reader.bytes();
          break;
        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 10:
          message.consensusHash = reader.bytes();
          break;
        case 11:
          message.appHash = reader.bytes();
          break;
        case 12:
          message.lastResultsHash = reader.bytes();
          break;
        case 13:
          message.evidenceHash = reader.bytes();
          break;
        case 14:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainId, _object$time, _object$lastCommitHas, _object$dataHash, _object$validatorsHas, _object$nextValidator, _object$consensusHash, _object$appHash, _object$lastResultsHa, _object$evidenceHash, _object$proposerAddre;
    var message = createBaseHeader();
    message.version = object.version !== undefined && object.version !== null ? _types.Consensus.fromPartial(object.version) : undefined;
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = (_object$time = object.time) !== null && _object$time !== void 0 ? _object$time : undefined;
    message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
    message.lastCommitHash = (_object$lastCommitHas = object.lastCommitHash) !== null && _object$lastCommitHas !== void 0 ? _object$lastCommitHas : new Uint8Array();
    message.dataHash = (_object$dataHash = object.dataHash) !== null && _object$dataHash !== void 0 ? _object$dataHash : new Uint8Array();
    message.validatorsHash = (_object$validatorsHas = object.validatorsHash) !== null && _object$validatorsHas !== void 0 ? _object$validatorsHas : new Uint8Array();
    message.nextValidatorsHash = (_object$nextValidator = object.nextValidatorsHash) !== null && _object$nextValidator !== void 0 ? _object$nextValidator : new Uint8Array();
    message.consensusHash = (_object$consensusHash = object.consensusHash) !== null && _object$consensusHash !== void 0 ? _object$consensusHash : new Uint8Array();
    message.appHash = (_object$appHash = object.appHash) !== null && _object$appHash !== void 0 ? _object$appHash : new Uint8Array();
    message.lastResultsHash = (_object$lastResultsHa = object.lastResultsHash) !== null && _object$lastResultsHa !== void 0 ? _object$lastResultsHa : new Uint8Array();
    message.evidenceHash = (_object$evidenceHash = object.evidenceHash) !== null && _object$evidenceHash !== void 0 ? _object$evidenceHash : new Uint8Array();
    message.proposerAddress = (_object$proposerAddre = object.proposerAddress) !== null && _object$proposerAddre !== void 0 ? _object$proposerAddre : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      version: object !== null && object !== void 0 && object.version ? _types.Consensus.fromAmino(object.version) : undefined,
      chainId: object.chain_id,
      height: BigInt(object.height),
      time: object.time,
      lastBlockId: object !== null && object !== void 0 && object.last_block_id ? BlockID.fromAmino(object.last_block_id) : undefined,
      lastCommitHash: object.last_commit_hash,
      dataHash: object.data_hash,
      validatorsHash: object.validators_hash,
      nextValidatorsHash: object.next_validators_hash,
      consensusHash: object.consensus_hash,
      appHash: object.app_hash,
      lastResultsHash: object.last_results_hash,
      evidenceHash: object.evidence_hash,
      proposerAddress: object.proposer_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.version = message.version ? _types.Consensus.toAmino(message.version) : undefined;
    obj.chain_id = message.chainId;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.time = message.time;
    obj.last_block_id = message.lastBlockId ? BlockID.toAmino(message.lastBlockId) : undefined;
    obj.last_commit_hash = message.lastCommitHash;
    obj.data_hash = message.dataHash;
    obj.validators_hash = message.validatorsHash;
    obj.next_validators_hash = message.nextValidatorsHash;
    obj.consensus_hash = message.consensusHash;
    obj.app_hash = message.appHash;
    obj.last_results_hash = message.lastResultsHash;
    obj.evidence_hash = message.evidenceHash;
    obj.proposer_address = message.proposerAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Header.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Header.decode(message.value);
  },
  toProto: function toProto(message) {
    return Header.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Header",
      value: Header.encode(message).finish()
    };
  }
};
exports.Header = Header;
function createBaseData() {
  return {
    txs: []
  };
}
var Data = {
  typeUrl: "/tendermint.types.Data",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.txs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(10).bytes(v);
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
    var message = createBaseData();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$txs;
    var message = createBaseData();
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.txs) {
      obj.txs = message.txs.map(function (e) {
        return e;
      });
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Data.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Data.decode(message.value);
  },
  toProto: function toProto(message) {
    return Data.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Data",
      value: Data.encode(message).finish()
    };
  }
};
exports.Data = Data;
function createBaseVote() {
  return {
    type: 0,
    height: BigInt(0),
    round: 0,
    blockId: BlockID.fromPartial({}),
    timestamp: new Date(),
    validatorAddress: new Uint8Array(),
    validatorIndex: 0,
    signature: new Uint8Array()
  };
}
var Vote = {
  typeUrl: "/tendermint.types.Vote",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(50).bytes(message.validatorAddress);
    }
    if (message.validatorIndex !== 0) {
      writer.uint32(56).int32(message.validatorIndex);
    }
    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validatorAddress = reader.bytes();
          break;
        case 7:
          message.validatorIndex = reader.int32();
          break;
        case 8:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$type, _object$round, _object$timestamp, _object$validatorAddr, _object$validatorInde, _object$signature;
    var message = createBaseVote();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 0;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = (_object$round = object.round) !== null && _object$round !== void 0 ? _object$round : 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : undefined;
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : new Uint8Array();
    message.validatorIndex = (_object$validatorInde = object.validatorIndex) !== null && _object$validatorInde !== void 0 ? _object$validatorInde : 0;
    message.signature = (_object$signature = object.signature) !== null && _object$signature !== void 0 ? _object$signature : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      type: (0, _helpers.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: BigInt(object.height),
      round: object.round,
      blockId: object !== null && object !== void 0 && object.block_id ? BlockID.fromAmino(object.block_id) : undefined,
      timestamp: object.timestamp,
      validatorAddress: object.validator_address,
      validatorIndex: object.validator_index,
      signature: object.signature
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.type = message.type;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.round = message.round;
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.timestamp = message.timestamp;
    obj.validator_address = message.validatorAddress;
    obj.validator_index = message.validatorIndex;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Vote.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Vote.decode(message.value);
  },
  toProto: function toProto(message) {
    return Vote.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
exports.Vote = Vote;
function createBaseCommit() {
  return {
    height: BigInt(0),
    round: 0,
    blockId: BlockID.fromPartial({}),
    signatures: []
  };
}
var Commit = {
  typeUrl: "/tendermint.types.Commit",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.signatures),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
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
    var message = createBaseCommit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 4:
          message.signatures.push(CommitSig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$round2, _object$signatures;
    var message = createBaseCommit();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = (_object$round2 = object.round) !== null && _object$round2 !== void 0 ? _object$round2 : 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.signatures = ((_object$signatures = object.signatures) === null || _object$signatures === void 0 ? void 0 : _object$signatures.map(function (e) {
      return CommitSig.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      height: BigInt(object.height),
      round: object.round,
      blockId: object !== null && object !== void 0 && object.block_id ? BlockID.fromAmino(object.block_id) : undefined,
      signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(function (e) {
        return CommitSig.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.round = message.round;
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map(function (e) {
        return e ? CommitSig.toAmino(e) : undefined;
      });
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Commit.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Commit.decode(message.value);
  },
  toProto: function toProto(message) {
    return Commit.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Commit",
      value: Commit.encode(message).finish()
    };
  }
};
exports.Commit = Commit;
function createBaseCommitSig() {
  return {
    blockIdFlag: 0,
    validatorAddress: new Uint8Array(),
    timestamp: new Date(),
    signature: new Uint8Array()
  };
}
var CommitSig = {
  typeUrl: "/tendermint.types.CommitSig",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommitSig();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockIdFlag = reader.int32();
          break;
        case 2:
          message.validatorAddress = reader.bytes();
          break;
        case 3:
          message.timestamp = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$blockIdFlag, _object$validatorAddr2, _object$timestamp2, _object$signature2;
    var message = createBaseCommitSig();
    message.blockIdFlag = (_object$blockIdFlag = object.blockIdFlag) !== null && _object$blockIdFlag !== void 0 ? _object$blockIdFlag : 0;
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : new Uint8Array();
    message.timestamp = (_object$timestamp2 = object.timestamp) !== null && _object$timestamp2 !== void 0 ? _object$timestamp2 : undefined;
    message.signature = (_object$signature2 = object.signature) !== null && _object$signature2 !== void 0 ? _object$signature2 : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      blockIdFlag: (0, _helpers.isSet)(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1,
      validatorAddress: object.validator_address,
      timestamp: object.timestamp,
      signature: object.signature
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block_id_flag = message.blockIdFlag;
    obj.validator_address = message.validatorAddress;
    obj.timestamp = message.timestamp;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return CommitSig.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return CommitSig.decode(message.value);
  },
  toProto: function toProto(message) {
    return CommitSig.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.CommitSig",
      value: CommitSig.encode(message).finish()
    };
  }
};
exports.CommitSig = CommitSig;
function createBaseProposal() {
  return {
    type: 0,
    height: BigInt(0),
    round: 0,
    polRound: 0,
    blockId: BlockID.fromPartial({}),
    timestamp: new Date(),
    signature: new Uint8Array()
  };
}
var Proposal = {
  typeUrl: "/tendermint.types.Proposal",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.polRound !== 0) {
      writer.uint32(32).int32(message.polRound);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.timestamp), writer.uint32(50).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.polRound = reader.int32();
          break;
        case 5:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.timestamp = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$type2, _object$round3, _object$polRound, _object$timestamp3, _object$signature3;
    var message = createBaseProposal();
    message.type = (_object$type2 = object.type) !== null && _object$type2 !== void 0 ? _object$type2 : 0;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = (_object$round3 = object.round) !== null && _object$round3 !== void 0 ? _object$round3 : 0;
    message.polRound = (_object$polRound = object.polRound) !== null && _object$polRound !== void 0 ? _object$polRound : 0;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = (_object$timestamp3 = object.timestamp) !== null && _object$timestamp3 !== void 0 ? _object$timestamp3 : undefined;
    message.signature = (_object$signature3 = object.signature) !== null && _object$signature3 !== void 0 ? _object$signature3 : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      type: (0, _helpers.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: BigInt(object.height),
      round: object.round,
      polRound: object.pol_round,
      blockId: object !== null && object !== void 0 && object.block_id ? BlockID.fromAmino(object.block_id) : undefined,
      timestamp: object.timestamp,
      signature: object.signature
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.type = message.type;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.round = message.round;
    obj.pol_round = message.polRound;
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.timestamp = message.timestamp;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Proposal.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Proposal.decode(message.value);
  },
  toProto: function toProto(message) {
    return Proposal.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
exports.Proposal = Proposal;
function createBaseSignedHeader() {
  return {
    header: Header.fromPartial({}),
    commit: Commit.fromPartial({})
  };
}
var SignedHeader = {
  typeUrl: "/tendermint.types.SignedHeader",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSignedHeader();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.commit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseSignedHeader();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? Commit.fromPartial(object.commit) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      header: object !== null && object !== void 0 && object.header ? Header.fromAmino(object.header) : undefined,
      commit: object !== null && object !== void 0 && object.commit ? Commit.fromAmino(object.commit) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    obj.commit = message.commit ? Commit.toAmino(message.commit) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return SignedHeader.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return SignedHeader.decode(message.value);
  },
  toProto: function toProto(message) {
    return SignedHeader.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.SignedHeader",
      value: SignedHeader.encode(message).finish()
    };
  }
};
exports.SignedHeader = SignedHeader;
function createBaseLightBlock() {
  return {
    signedHeader: SignedHeader.fromPartial({}),
    validatorSet: _validator.ValidatorSet.fromPartial({})
  };
}
var LightBlock = {
  typeUrl: "/tendermint.types.LightBlock",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.signedHeader !== undefined) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorSet !== undefined) {
      _validator.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLightBlock();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorSet = _validator.ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseLightBlock();
    message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? SignedHeader.fromPartial(object.signedHeader) : undefined;
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? _validator.ValidatorSet.fromPartial(object.validatorSet) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      signedHeader: object !== null && object !== void 0 && object.signed_header ? SignedHeader.fromAmino(object.signed_header) : undefined,
      validatorSet: object !== null && object !== void 0 && object.validator_set ? _validator.ValidatorSet.fromAmino(object.validator_set) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.signed_header = message.signedHeader ? SignedHeader.toAmino(message.signedHeader) : undefined;
    obj.validator_set = message.validatorSet ? _validator.ValidatorSet.toAmino(message.validatorSet) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return LightBlock.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return LightBlock.decode(message.value);
  },
  toProto: function toProto(message) {
    return LightBlock.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.LightBlock",
      value: LightBlock.encode(message).finish()
    };
  }
};
exports.LightBlock = LightBlock;
function createBaseBlockMeta() {
  return {
    blockId: BlockID.fromPartial({}),
    blockSize: BigInt(0),
    header: Header.fromPartial({}),
    numTxs: BigInt(0)
  };
}
var BlockMeta = {
  typeUrl: "/tendermint.types.BlockMeta",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockSize !== BigInt(0)) {
      writer.uint32(16).int64(message.blockSize);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (message.numTxs !== BigInt(0)) {
      writer.uint32(32).int64(message.numTxs);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockMeta();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockSize = reader.int64();
          break;
        case 3:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 4:
          message.numTxs = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockMeta();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.blockSize = object.blockSize !== undefined && object.blockSize !== null ? BigInt(object.blockSize.toString()) : BigInt(0);
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.numTxs = object.numTxs !== undefined && object.numTxs !== null ? BigInt(object.numTxs.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      blockId: object !== null && object !== void 0 && object.block_id ? BlockID.fromAmino(object.block_id) : undefined,
      blockSize: BigInt(object.block_size),
      header: object !== null && object !== void 0 && object.header ? Header.fromAmino(object.header) : undefined,
      numTxs: BigInt(object.num_txs)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.block_size = message.blockSize ? message.blockSize.toString() : undefined;
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    obj.num_txs = message.numTxs ? message.numTxs.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return BlockMeta.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return BlockMeta.decode(message.value);
  },
  toProto: function toProto(message) {
    return BlockMeta.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.BlockMeta",
      value: BlockMeta.encode(message).finish()
    };
  }
};
exports.BlockMeta = BlockMeta;
function createBaseTxProof() {
  return {
    rootHash: new Uint8Array(),
    data: new Uint8Array(),
    proof: _proof.Proof.fromPartial({})
  };
}
var TxProof = {
  typeUrl: "/tendermint.types.TxProof",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.rootHash.length !== 0) {
      writer.uint32(10).bytes(message.rootHash);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.proof !== undefined) {
      _proof.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxProof();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootHash = reader.bytes();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.proof = _proof.Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$rootHash, _object$data;
    var message = createBaseTxProof();
    message.rootHash = (_object$rootHash = object.rootHash) !== null && _object$rootHash !== void 0 ? _object$rootHash : new Uint8Array();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? _proof.Proof.fromPartial(object.proof) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      rootHash: object.root_hash,
      data: object.data,
      proof: object !== null && object !== void 0 && object.proof ? _proof.Proof.fromAmino(object.proof) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.root_hash = message.rootHash;
    obj.data = message.data;
    obj.proof = message.proof ? _proof.Proof.toAmino(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return TxProof.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return TxProof.decode(message.value);
  },
  toProto: function toProto(message) {
    return TxProof.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.TxProof",
      value: TxProof.encode(message).finish()
    };
  }
};
exports.TxProof = TxProof;