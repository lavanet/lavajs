"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenerateBadgeResponse = exports.GenerateBadgeRequest = void 0;
var _relay = require("./relay");
var _stake_entry = require("../epochstorage/stake_entry");
var _binary = require("../../../binary");
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
  typeUrl: "/lavanet.lava.pairing.GenerateBadgeRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
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
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
  fromPartial: function fromPartial(object) {
    var _object$badgeAddress, _object$projectId, _object$specId;
    var message = createBaseGenerateBadgeRequest();
    message.badgeAddress = (_object$badgeAddress = object.badgeAddress) !== null && _object$badgeAddress !== void 0 ? _object$badgeAddress : "";
    message.projectId = (_object$projectId = object.projectId) !== null && _object$projectId !== void 0 ? _object$projectId : "";
    message.specId = (_object$specId = object.specId) !== null && _object$specId !== void 0 ? _object$specId : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      badgeAddress: object.badge_address,
      projectId: object.project_id,
      specId: object === null || object === void 0 ? void 0 : object.spec_id
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.badge_address = message.badgeAddress;
    obj.project_id = message.projectId;
    obj.spec_id = message.specId;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GenerateBadgeRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GenerateBadgeRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return GenerateBadgeRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.GenerateBadgeRequest",
      value: GenerateBadgeRequest.encode(message).finish()
    };
  }
};
exports.GenerateBadgeRequest = GenerateBadgeRequest;
function createBaseGenerateBadgeResponse() {
  return {
    badge: _relay.Badge.fromPartial({}),
    pairingList: undefined,
    badgeSignerAddress: ""
  };
}
var GenerateBadgeResponse = {
  typeUrl: "/lavanet.lava.pairing.GenerateBadgeResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
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
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
  fromPartial: function fromPartial(object) {
    var _object$pairingList, _object$badgeSignerAd;
    var message = createBaseGenerateBadgeResponse();
    message.badge = object.badge !== undefined && object.badge !== null ? _relay.Badge.fromPartial(object.badge) : undefined;
    message.pairingList = ((_object$pairingList = object.pairingList) === null || _object$pairingList === void 0 ? void 0 : _object$pairingList.map(function (e) {
      return _stake_entry.StakeEntry.fromPartial(e);
    })) || [];
    message.badgeSignerAddress = (_object$badgeSignerAd = object.badgeSignerAddress) !== null && _object$badgeSignerAd !== void 0 ? _object$badgeSignerAd : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      badge: object !== null && object !== void 0 && object.badge ? _relay.Badge.fromAmino(object.badge) : undefined,
      pairingList: Array.isArray(object === null || object === void 0 ? void 0 : object.pairing_list) ? object.pairing_list.map(function (e) {
        return _stake_entry.StakeEntry.fromAmino(e);
      }) : [],
      badgeSignerAddress: object.badge_signer_address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.badge = message.badge ? _relay.Badge.toAmino(message.badge) : undefined;
    if (message.pairingList) {
      obj.pairing_list = message.pairingList.map(function (e) {
        return e ? _stake_entry.StakeEntry.toAmino(e) : undefined;
      });
    } else {
      obj.pairing_list = [];
    }
    obj.badge_signer_address = message.badgeSignerAddress;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GenerateBadgeResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GenerateBadgeResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return GenerateBadgeResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.GenerateBadgeResponse",
      value: GenerateBadgeResponse.encode(message).finish()
    };
  }
};
exports.GenerateBadgeResponse = GenerateBadgeResponse;