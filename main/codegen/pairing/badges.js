"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenerateBadgeResponse = exports.GenerateBadgeRequest = void 0;
var _relay = require("./relay");
var _stake_entry = require("../epochstorage/stake_entry");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseGenerateBadgeRequest() {
  return {
    badgeAddress: "",
    projectId: "",
    specId: undefined
  };
}
var GenerateBadgeRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.badgeAddress !== "") {
      writer.uint32(10).string(message.badgeAddress);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.specId !== undefined) {
      writer.uint32(26).string(message.specId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenerateBadgeRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badgeAddress = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.specId = reader.string();
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
      badgeAddress: (0, _helpers.isSet)(object.badgeAddress) ? String(object.badgeAddress) : "",
      projectId: (0, _helpers.isSet)(object.projectId) ? String(object.projectId) : "",
      specId: (0, _helpers.isSet)(object.specId) ? String(object.specId) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.badgeAddress !== undefined && (obj.badgeAddress = message.badgeAddress);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.specId !== undefined && (obj.specId = message.specId);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$badgeAddress, _object$projectId, _object$specId;
    var message = createBaseGenerateBadgeRequest();
    message.badgeAddress = (_object$badgeAddress = object.badgeAddress) !== null && _object$badgeAddress !== void 0 ? _object$badgeAddress : "";
    message.projectId = (_object$projectId = object.projectId) !== null && _object$projectId !== void 0 ? _object$projectId : "";
    message.specId = (_object$specId = object.specId) !== null && _object$specId !== void 0 ? _object$specId : undefined;
    return message;
  }
};
exports.GenerateBadgeRequest = GenerateBadgeRequest;
function createBaseGenerateBadgeResponse() {
  return {
    badge: undefined,
    pairingList: undefined,
    badgeSignerAddress: ""
  };
}
var GenerateBadgeResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.badge !== undefined) {
      _relay.Badge.encode(message.badge, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.pairingList),
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
    if (message.badgeSignerAddress !== "") {
      writer.uint32(26).string(message.badgeSignerAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenerateBadgeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badge = _relay.Badge.decode(reader, reader.uint32());
          break;
        case 2:
          message.pairingList.push(_stake_entry.StakeEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.badgeSignerAddress = reader.string();
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
      badge: (0, _helpers.isSet)(object.badge) ? _relay.Badge.fromJSON(object.badge) : undefined,
      pairingList: Array.isArray(object === null || object === void 0 ? void 0 : object.pairingList) ? object.pairingList.map(function (e) {
        return _stake_entry.StakeEntry.fromJSON(e);
      }) : [],
      badgeSignerAddress: (0, _helpers.isSet)(object.badgeSignerAddress) ? String(object.badgeSignerAddress) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.badge !== undefined && (obj.badge = message.badge ? _relay.Badge.toJSON(message.badge) : undefined);
    if (message.pairingList) {
      obj.pairingList = message.pairingList.map(function (e) {
        return e ? _stake_entry.StakeEntry.toJSON(e) : undefined;
      });
    } else {
      obj.pairingList = [];
    }
    message.badgeSignerAddress !== undefined && (obj.badgeSignerAddress = message.badgeSignerAddress);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$pairingList, _object$badgeSignerAd;
    var message = createBaseGenerateBadgeResponse();
    message.badge = object.badge !== undefined && object.badge !== null ? _relay.Badge.fromPartial(object.badge) : undefined;
    message.pairingList = ((_object$pairingList = object.pairingList) === null || _object$pairingList === void 0 ? void 0 : _object$pairingList.map(function (e) {
      return _stake_entry.StakeEntry.fromPartial(e);
    })) || [];
    message.badgeSignerAddress = (_object$badgeSignerAd = object.badgeSignerAddress) !== null && _object$badgeSignerAd !== void 0 ? _object$badgeSignerAd : "";
    return message;
  }
};
exports.GenerateBadgeResponse = GenerateBadgeResponse;