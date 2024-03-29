"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BitArray = void 0;
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseBitArray() {
  return {
    bits: BigInt(0),
    elems: []
  };
}
var BitArray = {
  typeUrl: "/tendermint.libs.bits.BitArray",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.bits !== BigInt(0)) {
      writer.uint32(8).int64(message.bits);
    }
    writer.uint32(18).fork();
    var _iterator = _createForOfIteratorHelper(message.elems),
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
    var message = createBaseBitArray();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bits = reader.int64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.elems.push(reader.uint64());
            }
          } else {
            message.elems.push(reader.uint64());
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
    var _object$elems;
    var message = createBaseBitArray();
    message.bits = object.bits !== undefined && object.bits !== null ? BigInt(object.bits.toString()) : BigInt(0);
    message.elems = ((_object$elems = object.elems) === null || _object$elems === void 0 ? void 0 : _object$elems.map(function (e) {
      return BigInt(e.toString());
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      bits: BigInt(object.bits),
      elems: Array.isArray(object === null || object === void 0 ? void 0 : object.elems) ? object.elems.map(function (e) {
        return BigInt(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.bits = message.bits ? message.bits.toString() : undefined;
    if (message.elems) {
      obj.elems = message.elems.map(function (e) {
        return e.toString();
      });
    } else {
      obj.elems = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return BitArray.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return BitArray.decode(message.value);
  },
  toProto: function toProto(message) {
    return BitArray.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.libs.bits.BitArray",
      value: BitArray.encode(message).finish()
    };
  }
};
exports.BitArray = BitArray;