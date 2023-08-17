"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EpochDetails = void 0;
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseEpochDetails() {
  return {
    startBlock: BigInt(0),
    earliestStart: BigInt(0),
    deletedEpochs: []
  };
}
var EpochDetails = {
  typeUrl: "/lavanet.lava.epochstorage.EpochDetails",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.startBlock);
    }
    if (message.earliestStart !== BigInt(0)) {
      writer.uint32(16).uint64(message.earliestStart);
    }
    writer.uint32(26).fork();
    var _iterator = _createForOfIteratorHelper(message.deletedEpochs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEpochDetails();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlock = reader.uint64();
          break;
        case 2:
          message.earliestStart = reader.uint64();
          break;
        case 3:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deletedEpochs.push(reader.uint64());
            }
          } else {
            message.deletedEpochs.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$deletedEpochs;
    var message = createBaseEpochDetails();
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.earliestStart = object.earliestStart !== undefined && object.earliestStart !== null ? BigInt(object.earliestStart.toString()) : BigInt(0);
    message.deletedEpochs = ((_object$deletedEpochs = object.deletedEpochs) === null || _object$deletedEpochs === void 0 ? void 0 : _object$deletedEpochs.map(function (e) {
      return BigInt(e.toString());
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      startBlock: BigInt(object.startBlock),
      earliestStart: BigInt(object.earliestStart),
      deletedEpochs: Array.isArray(object === null || object === void 0 ? void 0 : object.deletedEpochs) ? object.deletedEpochs.map(function (e) {
        return BigInt(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.startBlock = message.startBlock ? message.startBlock.toString() : undefined;
    obj.earliestStart = message.earliestStart ? message.earliestStart.toString() : undefined;
    if (message.deletedEpochs) {
      obj.deletedEpochs = message.deletedEpochs.map(function (e) {
        return e.toString();
      });
    } else {
      obj.deletedEpochs = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EpochDetails.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EpochDetails.decode(message.value);
  },
  toProto: function toProto(message) {
    return EpochDetails.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.EpochDetails",
      value: EpochDetails.encode(message).finish()
    };
  }
};
exports.EpochDetails = EpochDetails;