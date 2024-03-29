"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueOp = exports.ProofOps = exports.ProofOp = exports.Proof = exports.DominoOp = void 0;
var _binary = require("../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */

/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */

/** ProofOps is Merkle proof defined by the list of ProofOps */

/** ProofOps is Merkle proof defined by the list of ProofOps */

function createBaseProof() {
  return {
    total: BigInt(0),
    index: BigInt(0),
    leafHash: new Uint8Array(),
    aunts: []
  };
}
var Proof = {
  typeUrl: "/tendermint.crypto.Proof",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.total !== BigInt(0)) {
      writer.uint32(8).int64(message.total);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(16).int64(message.index);
    }
    if (message.leafHash.length !== 0) {
      writer.uint32(26).bytes(message.leafHash);
    }
    var _iterator = _createForOfIteratorHelper(message.aunts),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(34).bytes(v);
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
    var message = createBaseProof();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.int64();
          break;
        case 2:
          message.index = reader.int64();
          break;
        case 3:
          message.leafHash = reader.bytes();
          break;
        case 4:
          message.aunts.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$leafHash, _object$aunts;
    var message = createBaseProof();
    message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.leafHash = (_object$leafHash = object.leafHash) !== null && _object$leafHash !== void 0 ? _object$leafHash : new Uint8Array();
    message.aunts = ((_object$aunts = object.aunts) === null || _object$aunts === void 0 ? void 0 : _object$aunts.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      total: BigInt(object.total),
      index: BigInt(object.index),
      leafHash: object.leaf_hash,
      aunts: Array.isArray(object === null || object === void 0 ? void 0 : object.aunts) ? object.aunts.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.total = message.total ? message.total.toString() : undefined;
    obj.index = message.index ? message.index.toString() : undefined;
    obj.leaf_hash = message.leafHash;
    if (message.aunts) {
      obj.aunts = message.aunts.map(function (e) {
        return e;
      });
    } else {
      obj.aunts = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Proof.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Proof.decode(message.value);
  },
  toProto: function toProto(message) {
    return Proof.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.Proof",
      value: Proof.encode(message).finish()
    };
  }
};
exports.Proof = Proof;
function createBaseValueOp() {
  return {
    key: new Uint8Array(),
    proof: Proof.fromPartial({})
  };
}
var ValueOp = {
  typeUrl: "/tendermint.crypto.ValueOp",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValueOp();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$key;
    var message = createBaseValueOp();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      key: object.key,
      proof: object !== null && object !== void 0 && object.proof ? Proof.fromAmino(object.proof) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.key = message.key;
    obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ValueOp.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ValueOp.decode(message.value);
  },
  toProto: function toProto(message) {
    return ValueOp.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.ValueOp",
      value: ValueOp.encode(message).finish()
    };
  }
};
exports.ValueOp = ValueOp;
function createBaseDominoOp() {
  return {
    key: "",
    input: "",
    output: ""
  };
}
var DominoOp = {
  typeUrl: "/tendermint.crypto.DominoOp",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.input !== "") {
      writer.uint32(18).string(message.input);
    }
    if (message.output !== "") {
      writer.uint32(26).string(message.output);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDominoOp();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.input = reader.string();
          break;
        case 3:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$key2, _object$input, _object$output;
    var message = createBaseDominoOp();
    message.key = (_object$key2 = object.key) !== null && _object$key2 !== void 0 ? _object$key2 : "";
    message.input = (_object$input = object.input) !== null && _object$input !== void 0 ? _object$input : "";
    message.output = (_object$output = object.output) !== null && _object$output !== void 0 ? _object$output : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      key: object.key,
      input: object.input,
      output: object.output
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.key = message.key;
    obj.input = message.input;
    obj.output = message.output;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DominoOp.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DominoOp.decode(message.value);
  },
  toProto: function toProto(message) {
    return DominoOp.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.DominoOp",
      value: DominoOp.encode(message).finish()
    };
  }
};
exports.DominoOp = DominoOp;
function createBaseProofOp() {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
var ProofOp = {
  typeUrl: "/tendermint.crypto.ProofOp",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProofOp();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$type, _object$key3, _object$data;
    var message = createBaseProofOp();
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.key = (_object$key3 = object.key) !== null && _object$key3 !== void 0 ? _object$key3 : new Uint8Array();
    message.data = (_object$data = object.data) !== null && _object$data !== void 0 ? _object$data : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      type: object.type,
      key: object.key,
      data: object.data
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.type = message.type;
    obj.key = message.key;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ProofOp.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ProofOp.decode(message.value);
  },
  toProto: function toProto(message) {
    return ProofOp.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.ProofOp",
      value: ProofOp.encode(message).finish()
    };
  }
};
exports.ProofOp = ProofOp;
function createBaseProofOps() {
  return {
    ops: []
  };
}
var ProofOps = {
  typeUrl: "/tendermint.crypto.ProofOps",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator2 = _createForOfIteratorHelper(message.ops),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseProofOps();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$ops;
    var message = createBaseProofOps();
    message.ops = ((_object$ops = object.ops) === null || _object$ops === void 0 ? void 0 : _object$ops.map(function (e) {
      return ProofOp.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      ops: Array.isArray(object === null || object === void 0 ? void 0 : object.ops) ? object.ops.map(function (e) {
        return ProofOp.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.ops) {
      obj.ops = message.ops.map(function (e) {
        return e ? ProofOp.toAmino(e) : undefined;
      });
    } else {
      obj.ops = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ProofOps.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ProofOps.decode(message.value);
  },
  toProto: function toProto(message) {
    return ProofOps.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.crypto.ProofOps",
      value: ProofOps.encode(message).finish()
    };
  }
};
exports.ProofOps = ProofOps;