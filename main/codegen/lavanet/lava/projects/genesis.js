"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _params = require("./params");
var _fixationEntry = require("../common/fixationEntry");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the projects module's genesis state. */

/** GenesisState defines the projects module's genesis state. */

function createBaseGenesisState() {
  return {
    params: _params.Params.fromPartial({}),
    projectsFS: [],
    developerFS: []
  };
}
var GenesisState = {
  typeUrl: "/lavanet.lava.projects.GenesisState",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.projectsFS),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _fixationEntry.RawMessage.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.developerFS),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _fixationEntry.RawMessage.encode(_v, writer.uint32(26).fork()).ldelim();
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
          message.params = _params.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.projectsFS.push(_fixationEntry.RawMessage.decode(reader, reader.uint32()));
          break;
        case 3:
          message.developerFS.push(_fixationEntry.RawMessage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$projectsFS, _object$developerFS;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    message.projectsFS = ((_object$projectsFS = object.projectsFS) === null || _object$projectsFS === void 0 ? void 0 : _object$projectsFS.map(function (e) {
      return _fixationEntry.RawMessage.fromPartial(e);
    })) || [];
    message.developerFS = ((_object$developerFS = object.developerFS) === null || _object$developerFS === void 0 ? void 0 : _object$developerFS.map(function (e) {
      return _fixationEntry.RawMessage.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _params.Params.fromAmino(object.params) : undefined,
      projectsFS: Array.isArray(object === null || object === void 0 ? void 0 : object.projectsFS) ? object.projectsFS.map(function (e) {
        return _fixationEntry.RawMessage.fromAmino(e);
      }) : [],
      developerFS: Array.isArray(object === null || object === void 0 ? void 0 : object.developerFS) ? object.developerFS.map(function (e) {
        return _fixationEntry.RawMessage.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _params.Params.toAmino(message.params) : undefined;
    if (message.projectsFS) {
      obj.projectsFS = message.projectsFS.map(function (e) {
        return e ? _fixationEntry.RawMessage.toAmino(e) : undefined;
      });
    } else {
      obj.projectsFS = [];
    }
    if (message.developerFS) {
      obj.developerFS = message.developerFS.map(function (e) {
        return e ? _fixationEntry.RawMessage.toAmino(e) : undefined;
      });
    } else {
      obj.developerFS = [];
    }
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
      typeUrl: "/lavanet.lava.projects.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
exports.GenesisState = GenesisState;