"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rewards = exports.Params = void 0;
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    majorityPercent: "",
    voteStartSpan: _helpers.Long.UZERO,
    votePeriod: _helpers.Long.UZERO,
    Rewards: undefined
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.majorityPercent !== "") {
      writer.uint32(10).string(message.majorityPercent);
    }
    if (!message.voteStartSpan.isZero()) {
      writer.uint32(16).uint64(message.voteStartSpan);
    }
    if (!message.votePeriod.isZero()) {
      writer.uint32(24).uint64(message.votePeriod);
    }
    if (message.Rewards !== undefined) {
      Rewards.encode(message.Rewards, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.majorityPercent = reader.string();
          break;
        case 2:
          message.voteStartSpan = reader.uint64();
          break;
        case 3:
          message.votePeriod = reader.uint64();
          break;
        case 4:
          message.Rewards = Rewards.decode(reader, reader.uint32());
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
      majorityPercent: (0, _helpers.isSet)(object.majorityPercent) ? String(object.majorityPercent) : "",
      voteStartSpan: (0, _helpers.isSet)(object.voteStartSpan) ? _helpers.Long.fromValue(object.voteStartSpan) : _helpers.Long.UZERO,
      votePeriod: (0, _helpers.isSet)(object.votePeriod) ? _helpers.Long.fromValue(object.votePeriod) : _helpers.Long.UZERO,
      Rewards: (0, _helpers.isSet)(object.Rewards) ? Rewards.fromJSON(object.Rewards) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.majorityPercent !== undefined && (obj.majorityPercent = message.majorityPercent);
    message.voteStartSpan !== undefined && (obj.voteStartSpan = (message.voteStartSpan || _helpers.Long.UZERO).toString());
    message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || _helpers.Long.UZERO).toString());
    message.Rewards !== undefined && (obj.Rewards = message.Rewards ? Rewards.toJSON(message.Rewards) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$majorityPerce;
    var message = createBaseParams();
    message.majorityPercent = (_object$majorityPerce = object.majorityPercent) !== null && _object$majorityPerce !== void 0 ? _object$majorityPerce : "";
    message.voteStartSpan = object.voteStartSpan !== undefined && object.voteStartSpan !== null ? _helpers.Long.fromValue(object.voteStartSpan) : _helpers.Long.UZERO;
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? _helpers.Long.fromValue(object.votePeriod) : _helpers.Long.UZERO;
    message.Rewards = object.Rewards !== undefined && object.Rewards !== null ? Rewards.fromPartial(object.Rewards) : undefined;
    return message;
  }
};
exports.Params = Params;
function createBaseRewards() {
  return {
    winnerRewardPercent: "",
    clientRewardPercent: "",
    votersRewardPercent: ""
  };
}
var Rewards = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.winnerRewardPercent !== "") {
      writer.uint32(10).string(message.winnerRewardPercent);
    }
    if (message.clientRewardPercent !== "") {
      writer.uint32(18).string(message.clientRewardPercent);
    }
    if (message.votersRewardPercent !== "") {
      writer.uint32(26).string(message.votersRewardPercent);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winnerRewardPercent = reader.string();
          break;
        case 2:
          message.clientRewardPercent = reader.string();
          break;
        case 3:
          message.votersRewardPercent = reader.string();
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
      winnerRewardPercent: (0, _helpers.isSet)(object.winnerRewardPercent) ? String(object.winnerRewardPercent) : "",
      clientRewardPercent: (0, _helpers.isSet)(object.clientRewardPercent) ? String(object.clientRewardPercent) : "",
      votersRewardPercent: (0, _helpers.isSet)(object.votersRewardPercent) ? String(object.votersRewardPercent) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.winnerRewardPercent !== undefined && (obj.winnerRewardPercent = message.winnerRewardPercent);
    message.clientRewardPercent !== undefined && (obj.clientRewardPercent = message.clientRewardPercent);
    message.votersRewardPercent !== undefined && (obj.votersRewardPercent = message.votersRewardPercent);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$winnerRewardP, _object$clientRewardP, _object$votersRewardP;
    var message = createBaseRewards();
    message.winnerRewardPercent = (_object$winnerRewardP = object.winnerRewardPercent) !== null && _object$winnerRewardP !== void 0 ? _object$winnerRewardP : "";
    message.clientRewardPercent = (_object$clientRewardP = object.clientRewardPercent) !== null && _object$clientRewardP !== void 0 ? _object$clientRewardP : "";
    message.votersRewardPercent = (_object$votersRewardP = object.votersRewardPercent) !== null && _object$votersRewardP !== void 0 ? _object$votersRewardP : "";
    return message;
  }
};
exports.Rewards = Rewards;