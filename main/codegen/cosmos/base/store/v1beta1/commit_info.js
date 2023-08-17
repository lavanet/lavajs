"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreInfo = exports.CommitInfo = exports.CommitID = void 0;
var _binary = require("../../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */

/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */

/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */

/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */

/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */

/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */

function createBaseCommitInfo() {
  return {
    version: BigInt(0),
    storeInfos: []
  };
}
var CommitInfo = {
  typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(message.version);
    }
    var _iterator = _createForOfIteratorHelper(message.storeInfos),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseCommitInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$storeInfos;
    var message = createBaseCommitInfo();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.storeInfos = ((_object$storeInfos = object.storeInfos) === null || _object$storeInfos === void 0 ? void 0 : _object$storeInfos.map(function (e) {
      return StoreInfo.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      version: BigInt(object.version),
      storeInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.store_infos) ? object.store_infos.map(function (e) {
        return StoreInfo.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.version = message.version ? message.version.toString() : undefined;
    if (message.storeInfos) {
      obj.store_infos = message.storeInfos.map(function (e) {
        return e ? StoreInfo.toAmino(e) : undefined;
      });
    } else {
      obj.store_infos = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return CommitInfo.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommitInfo",
      value: CommitInfo.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return CommitInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return CommitInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
      value: CommitInfo.encode(message).finish()
    };
  }
};
exports.CommitInfo = CommitInfo;
function createBaseStoreInfo() {
  return {
    name: "",
    commitId: CommitID.fromPartial({})
  };
}
var StoreInfo = {
  typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.commitId !== undefined) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStoreInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.commitId = CommitID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name;
    var message = createBaseStoreInfo();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.commitId = object.commitId !== undefined && object.commitId !== null ? CommitID.fromPartial(object.commitId) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      commitId: object !== null && object !== void 0 && object.commit_id ? CommitID.fromAmino(object.commit_id) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj.commit_id = message.commitId ? CommitID.toAmino(message.commitId) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return StoreInfo.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/StoreInfo",
      value: StoreInfo.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return StoreInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return StoreInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
      value: StoreInfo.encode(message).finish()
    };
  }
};
exports.StoreInfo = StoreInfo;
function createBaseCommitID() {
  return {
    version: BigInt(0),
    hash: new Uint8Array()
  };
}
var CommitID = {
  typeUrl: "/cosmos.base.store.v1beta1.CommitID",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(message.version);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommitID();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
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
    var _object$hash;
    var message = createBaseCommitID();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      version: BigInt(object.version),
      hash: object.hash
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.version = message.version ? message.version.toString() : undefined;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return CommitID.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommitID",
      value: CommitID.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return CommitID.decode(message.value);
  },
  toProto: function toProto(message) {
    return CommitID.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.CommitID",
      value: CommitID.encode(message).finish()
    };
  }
};
exports.CommitID = CommitID;