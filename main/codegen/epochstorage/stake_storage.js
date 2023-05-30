"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StakeStorage = void 0;
var _stake_entry = require("./stake_entry");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      index: (0, _helpers.isSet)(object.index) ? String(object.index) : "",
      stakeEntries: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeEntries) ? object.stakeEntries.map(function (e) {
        return _stake_entry.StakeEntry.fromJSON(e);
      }) : [],
      epochBlockHash: (0, _helpers.isSet)(object.epochBlockHash) ? (0, _helpers.bytesFromBase64)(object.epochBlockHash) : new Uint8Array()
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.index !== undefined && (obj.index = message.index);
    if (message.stakeEntries) {
      obj.stakeEntries = message.stakeEntries.map(function (e) {
        return e ? _stake_entry.StakeEntry.toJSON(e) : undefined;
      });
    } else {
      obj.stakeEntries = [];
    }
    message.epochBlockHash !== undefined && (obj.epochBlockHash = (0, _helpers.base64FromBytes)(message.epochBlockHash !== undefined ? message.epochBlockHash : new Uint8Array()));
    return obj;
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
  }
};
exports.StakeStorage = StakeStorage;