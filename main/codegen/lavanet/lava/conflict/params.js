"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rewards = exports.Params = void 0;
var _binary = require("../../../binary");
var _math = require("@cosmjs/math");
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    majorityPercent: "",
    voteStartSpan: BigInt(0),
    votePeriod: BigInt(0),
    Rewards: Rewards.fromPartial({})
  };
}
var Params = {
  typeUrl: "/lavanet.lava.conflict.Params",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.majorityPercent !== "") {
      writer.uint32(10).string(_math.Decimal.fromUserInput(message.majorityPercent, 18).atomics);
    }
    if (message.voteStartSpan !== BigInt(0)) {
      writer.uint32(16).uint64(message.voteStartSpan);
    }
    if (message.votePeriod !== BigInt(0)) {
      writer.uint32(24).uint64(message.votePeriod);
    }
    if (message.Rewards !== undefined) {
      Rewards.encode(message.Rewards, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.majorityPercent = _math.Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromPartial: function fromPartial(object) {
    var _object$majorityPerce;
    var message = createBaseParams();
    message.majorityPercent = (_object$majorityPerce = object.majorityPercent) !== null && _object$majorityPerce !== void 0 ? _object$majorityPerce : "";
    message.voteStartSpan = object.voteStartSpan !== undefined && object.voteStartSpan !== null ? BigInt(object.voteStartSpan.toString()) : BigInt(0);
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
    message.Rewards = object.Rewards !== undefined && object.Rewards !== null ? Rewards.fromPartial(object.Rewards) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      majorityPercent: object.majorityPercent,
      voteStartSpan: BigInt(object.voteStartSpan),
      votePeriod: BigInt(object.votePeriod),
      Rewards: object !== null && object !== void 0 && object.Rewards ? Rewards.fromAmino(object.Rewards) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.majorityPercent = message.majorityPercent;
    obj.voteStartSpan = message.voteStartSpan ? message.voteStartSpan.toString() : undefined;
    obj.votePeriod = message.votePeriod ? message.votePeriod.toString() : undefined;
    obj.Rewards = message.Rewards ? Rewards.toAmino(message.Rewards) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Params.decode(message.value);
  },
  toProto: function toProto(message) {
    return Params.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.Params",
      value: Params.encode(message).finish()
    };
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
  typeUrl: "/lavanet.lava.conflict.Rewards",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.winnerRewardPercent !== "") {
      writer.uint32(10).string(_math.Decimal.fromUserInput(message.winnerRewardPercent, 18).atomics);
    }
    if (message.clientRewardPercent !== "") {
      writer.uint32(18).string(_math.Decimal.fromUserInput(message.clientRewardPercent, 18).atomics);
    }
    if (message.votersRewardPercent !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.votersRewardPercent, 18).atomics);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winnerRewardPercent = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.clientRewardPercent = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.votersRewardPercent = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$winnerRewardP, _object$clientRewardP, _object$votersRewardP;
    var message = createBaseRewards();
    message.winnerRewardPercent = (_object$winnerRewardP = object.winnerRewardPercent) !== null && _object$winnerRewardP !== void 0 ? _object$winnerRewardP : "";
    message.clientRewardPercent = (_object$clientRewardP = object.clientRewardPercent) !== null && _object$clientRewardP !== void 0 ? _object$clientRewardP : "";
    message.votersRewardPercent = (_object$votersRewardP = object.votersRewardPercent) !== null && _object$votersRewardP !== void 0 ? _object$votersRewardP : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      winnerRewardPercent: object.winnerRewardPercent,
      clientRewardPercent: object.clientRewardPercent,
      votersRewardPercent: object.votersRewardPercent
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.winnerRewardPercent = message.winnerRewardPercent;
    obj.clientRewardPercent = message.clientRewardPercent;
    obj.votersRewardPercent = message.votersRewardPercent;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Rewards.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Rewards.decode(message.value);
  },
  toProto: function toProto(message) {
    return Rewards.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.Rewards",
      value: Rewards.encode(message).finish()
    };
  }
};
exports.Rewards = Rewards;