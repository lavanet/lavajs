import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    majorityPercent: "",
    voteStartSpan: Long.UZERO,
    votePeriod: Long.UZERO,
    Rewards: undefined
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$majorityPerce;
    const message = createBaseParams();
    message.majorityPercent = (_object$majorityPerce = object.majorityPercent) !== null && _object$majorityPerce !== void 0 ? _object$majorityPerce : "";
    message.voteStartSpan = object.voteStartSpan !== undefined && object.voteStartSpan !== null ? Long.fromValue(object.voteStartSpan) : Long.UZERO;
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? Long.fromValue(object.votePeriod) : Long.UZERO;
    message.Rewards = object.Rewards !== undefined && object.Rewards !== null ? Rewards.fromPartial(object.Rewards) : undefined;
    return message;
  }
};
function createBaseRewards() {
  return {
    winnerRewardPercent: "",
    clientRewardPercent: "",
    votersRewardPercent: ""
  };
}
export const Rewards = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$winnerRewardP, _object$clientRewardP, _object$votersRewardP;
    const message = createBaseRewards();
    message.winnerRewardPercent = (_object$winnerRewardP = object.winnerRewardPercent) !== null && _object$winnerRewardP !== void 0 ? _object$winnerRewardP : "";
    message.clientRewardPercent = (_object$clientRewardP = object.clientRewardPercent) !== null && _object$clientRewardP !== void 0 ? _object$clientRewardP : "";
    message.votersRewardPercent = (_object$votersRewardP = object.votersRewardPercent) !== null && _object$votersRewardP !== void 0 ? _object$votersRewardP : "";
    return message;
  }
};