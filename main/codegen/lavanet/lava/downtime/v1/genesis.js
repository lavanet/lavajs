"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _downtime = require("./downtime");
var _timestamp = require("../../../../google/protobuf/timestamp");
var _binary = require("../../../../binary");
var _helpers = require("../../../../helpers");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState is the genesis state of the downtime module. */

/** GenesisState is the genesis state of the downtime module. */

function createBaseGenesisState() {
  return {
    params: _downtime.Params.fromPartial({}),
    downtimes: [],
    downtimesGarbageCollection: [],
    lastBlockTime: undefined
  };
}
var GenesisState = {
  typeUrl: "/lavanet.lava.downtime.v1.GenesisState",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _downtime.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.downtimes),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _downtime.Downtime.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.downtimesGarbageCollection),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _downtime.DowntimeGarbageCollection.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.lastBlockTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.lastBlockTime), writer.uint32(34).fork()).ldelim();
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
          message.params = _downtime.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.downtimes.push(_downtime.Downtime.decode(reader, reader.uint32()));
          break;
        case 3:
          message.downtimesGarbageCollection.push(_downtime.DowntimeGarbageCollection.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastBlockTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$downtimes, _object$downtimesGarb, _object$lastBlockTime;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _downtime.Params.fromPartial(object.params) : undefined;
    message.downtimes = ((_object$downtimes = object.downtimes) === null || _object$downtimes === void 0 ? void 0 : _object$downtimes.map(function (e) {
      return _downtime.Downtime.fromPartial(e);
    })) || [];
    message.downtimesGarbageCollection = ((_object$downtimesGarb = object.downtimesGarbageCollection) === null || _object$downtimesGarb === void 0 ? void 0 : _object$downtimesGarb.map(function (e) {
      return _downtime.DowntimeGarbageCollection.fromPartial(e);
    })) || [];
    message.lastBlockTime = (_object$lastBlockTime = object.lastBlockTime) !== null && _object$lastBlockTime !== void 0 ? _object$lastBlockTime : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _downtime.Params.fromAmino(object.params) : undefined,
      downtimes: Array.isArray(object === null || object === void 0 ? void 0 : object.downtimes) ? object.downtimes.map(function (e) {
        return _downtime.Downtime.fromAmino(e);
      }) : [],
      downtimesGarbageCollection: Array.isArray(object === null || object === void 0 ? void 0 : object.downtimes_garbage_collection) ? object.downtimes_garbage_collection.map(function (e) {
        return _downtime.DowntimeGarbageCollection.fromAmino(e);
      }) : [],
      lastBlockTime: object === null || object === void 0 ? void 0 : object.last_block_time
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _downtime.Params.toAmino(message.params) : undefined;
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(function (e) {
        return e ? _downtime.Downtime.toAmino(e) : undefined;
      });
    } else {
      obj.downtimes = [];
    }
    if (message.downtimesGarbageCollection) {
      obj.downtimes_garbage_collection = message.downtimesGarbageCollection.map(function (e) {
        return e ? _downtime.DowntimeGarbageCollection.toAmino(e) : undefined;
      });
    } else {
      obj.downtimes_garbage_collection = [];
    }
    obj.last_block_time = message.lastBlockTime;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto: function toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
exports.GenesisState = GenesisState;