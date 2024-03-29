"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StakeStorage = void 0;
var _stake_entry = require("./stake_entry");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseStakeStorage() {
  return {
    index: "",
    stakeEntries: [],
    epochBlockHash: new Uint8Array()
  };
}
var StakeStorage = {
  typeUrl: "/lavanet.lava.epochstorage.StakeStorage",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    var _iterator = _createForOfIteratorHelper(message.stakeEntries),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _stake_entry.StakeEntry.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.epochBlockHash.length !== 0) {
      writer.uint32(26).bytes(message.epochBlockHash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStakeStorage();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.stakeEntries.push(_stake_entry.StakeEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.epochBlockHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$stakeEntries, _object$epochBlockHas;
    var message = createBaseStakeStorage();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.stakeEntries = ((_object$stakeEntries = object.stakeEntries) === null || _object$stakeEntries === void 0 ? void 0 : _object$stakeEntries.map(function (e) {
      return _stake_entry.StakeEntry.fromPartial(e);
    })) || [];
    message.epochBlockHash = (_object$epochBlockHas = object.epochBlockHash) !== null && _object$epochBlockHas !== void 0 ? _object$epochBlockHas : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: object.index,
      stakeEntries: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeEntries) ? object.stakeEntries.map(function (e) {
        return _stake_entry.StakeEntry.fromAmino(e);
      }) : [],
      epochBlockHash: object.epochBlockHash
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index;
    if (message.stakeEntries) {
      obj.stakeEntries = message.stakeEntries.map(function (e) {
        return e ? _stake_entry.StakeEntry.toAmino(e) : undefined;
      });
    } else {
      obj.stakeEntries = [];
    }
    obj.epochBlockHash = message.epochBlockHash;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return StakeStorage.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return StakeStorage.decode(message.value);
  },
  toProto: function toProto(message) {
    return StakeStorage.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.StakeStorage",
      value: StakeStorage.encode(message).finish()
    };
  }
};
exports.StakeStorage = StakeStorage;