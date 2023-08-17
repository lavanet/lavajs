"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = exports.Entry = void 0;
var _nft = require("./nft");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the nft module's genesis state. */

/** GenesisState defines the nft module's genesis state. */

/** Entry Defines all nft owned by a person */

/** Entry Defines all nft owned by a person */

function createBaseGenesisState() {
  return {
    classes: [],
    entries: []
  };
}
var GenesisState = {
  typeUrl: "/cosmos.nft.v1beta1.GenesisState",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.classes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _nft.Class.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.entries),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        Entry.encode(_v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(_nft.Class.decode(reader, reader.uint32()));
          break;
        case 2:
          message.entries.push(Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$classes, _object$entries;
    var message = createBaseGenesisState();
    message.classes = ((_object$classes = object.classes) === null || _object$classes === void 0 ? void 0 : _object$classes.map(function (e) {
      return _nft.Class.fromPartial(e);
    })) || [];
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map(function (e) {
      return Entry.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      classes: Array.isArray(object === null || object === void 0 ? void 0 : object.classes) ? object.classes.map(function (e) {
        return _nft.Class.fromAmino(e);
      }) : [],
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function (e) {
        return Entry.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.classes) {
      obj.classes = message.classes.map(function (e) {
        return e ? _nft.Class.toAmino(e) : undefined;
      });
    } else {
      obj.classes = [];
    }
    if (message.entries) {
      obj.entries = message.entries.map(function (e) {
        return e ? Entry.toAmino(e) : undefined;
      });
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto: function toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
exports.GenesisState = GenesisState;
function createBaseEntry() {
  return {
    owner: "",
    nfts: []
  };
}
var Entry = {
  typeUrl: "/cosmos.nft.v1beta1.Entry",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    var _iterator3 = _createForOfIteratorHelper(message.nfts),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _nft.NFT.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.nfts.push(_nft.NFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$owner, _object$nfts;
    var message = createBaseEntry();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.nfts = ((_object$nfts = object.nfts) === null || _object$nfts === void 0 ? void 0 : _object$nfts.map(function (e) {
      return _nft.NFT.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      owner: object.owner,
      nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts) ? object.nfts.map(function (e) {
        return _nft.NFT.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.owner = message.owner;
    if (message.nfts) {
      obj.nfts = message.nfts.map(function (e) {
        return e ? _nft.NFT.toAmino(e) : undefined;
      });
    } else {
      obj.nfts = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Entry.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Entry",
      value: Entry.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Entry.decode(message.value);
  },
  toProto: function toProto(message) {
    return Entry.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.Entry",
      value: Entry.encode(message).finish()
    };
  }
};
exports.Entry = Entry;