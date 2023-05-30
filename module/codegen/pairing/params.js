import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    mintCoinsPerCU: "",
    burnCoinsPerCU: "",
    fraudStakeSlashingFactor: "",
    fraudSlashingAmount: Long.UZERO,
    servicersToPairCount: Long.UZERO,
    epochBlocksOverlap: Long.UZERO,
    stakeToMaxCUList: "",
    unpayLimit: "",
    slashLimit: "",
    dataReliabilityReward: "",
    QoSWeight: "",
    recommendedEpochNumToCollectPayment: Long.UZERO
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.mintCoinsPerCU !== "") {
      writer.uint32(26).string(message.mintCoinsPerCU);
    }
    if (message.burnCoinsPerCU !== "") {
      writer.uint32(34).string(message.burnCoinsPerCU);
    }
    if (message.fraudStakeSlashingFactor !== "") {
      writer.uint32(42).string(message.fraudStakeSlashingFactor);
    }
    if (!message.fraudSlashingAmount.isZero()) {
      writer.uint32(48).uint64(message.fraudSlashingAmount);
    }
    if (!message.servicersToPairCount.isZero()) {
      writer.uint32(56).uint64(message.servicersToPairCount);
    }
    if (!message.epochBlocksOverlap.isZero()) {
      writer.uint32(64).uint64(message.epochBlocksOverlap);
    }
    if (message.stakeToMaxCUList !== "") {
      writer.uint32(74).string(message.stakeToMaxCUList);
    }
    if (message.unpayLimit !== "") {
      writer.uint32(82).string(message.unpayLimit);
    }
    if (message.slashLimit !== "") {
      writer.uint32(90).string(message.slashLimit);
    }
    if (message.dataReliabilityReward !== "") {
      writer.uint32(98).string(message.dataReliabilityReward);
    }
    if (message.QoSWeight !== "") {
      writer.uint32(106).string(message.QoSWeight);
    }
    if (!message.recommendedEpochNumToCollectPayment.isZero()) {
      writer.uint32(112).uint64(message.recommendedEpochNumToCollectPayment);
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
        case 3:
          message.mintCoinsPerCU = reader.string();
          break;
        case 4:
          message.burnCoinsPerCU = reader.string();
          break;
        case 5:
          message.fraudStakeSlashingFactor = reader.string();
          break;
        case 6:
          message.fraudSlashingAmount = reader.uint64();
          break;
        case 7:
          message.servicersToPairCount = reader.uint64();
          break;
        case 8:
          message.epochBlocksOverlap = reader.uint64();
          break;
        case 9:
          message.stakeToMaxCUList = reader.string();
          break;
        case 10:
          message.unpayLimit = reader.string();
          break;
        case 11:
          message.slashLimit = reader.string();
          break;
        case 12:
          message.dataReliabilityReward = reader.string();
          break;
        case 13:
          message.QoSWeight = reader.string();
          break;
        case 14:
          message.recommendedEpochNumToCollectPayment = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$mintCoinsPerC, _object$burnCoinsPerC, _object$fraudStakeSla, _object$stakeToMaxCUL, _object$unpayLimit, _object$slashLimit, _object$dataReliabili, _object$QoSWeight;
    const message = createBaseParams();
    message.mintCoinsPerCU = (_object$mintCoinsPerC = object.mintCoinsPerCU) !== null && _object$mintCoinsPerC !== void 0 ? _object$mintCoinsPerC : "";
    message.burnCoinsPerCU = (_object$burnCoinsPerC = object.burnCoinsPerCU) !== null && _object$burnCoinsPerC !== void 0 ? _object$burnCoinsPerC : "";
    message.fraudStakeSlashingFactor = (_object$fraudStakeSla = object.fraudStakeSlashingFactor) !== null && _object$fraudStakeSla !== void 0 ? _object$fraudStakeSla : "";
    message.fraudSlashingAmount = object.fraudSlashingAmount !== undefined && object.fraudSlashingAmount !== null ? Long.fromValue(object.fraudSlashingAmount) : Long.UZERO;
    message.servicersToPairCount = object.servicersToPairCount !== undefined && object.servicersToPairCount !== null ? Long.fromValue(object.servicersToPairCount) : Long.UZERO;
    message.epochBlocksOverlap = object.epochBlocksOverlap !== undefined && object.epochBlocksOverlap !== null ? Long.fromValue(object.epochBlocksOverlap) : Long.UZERO;
    message.stakeToMaxCUList = (_object$stakeToMaxCUL = object.stakeToMaxCUList) !== null && _object$stakeToMaxCUL !== void 0 ? _object$stakeToMaxCUL : "";
    message.unpayLimit = (_object$unpayLimit = object.unpayLimit) !== null && _object$unpayLimit !== void 0 ? _object$unpayLimit : "";
    message.slashLimit = (_object$slashLimit = object.slashLimit) !== null && _object$slashLimit !== void 0 ? _object$slashLimit : "";
    message.dataReliabilityReward = (_object$dataReliabili = object.dataReliabilityReward) !== null && _object$dataReliabili !== void 0 ? _object$dataReliabili : "";
    message.QoSWeight = (_object$QoSWeight = object.QoSWeight) !== null && _object$QoSWeight !== void 0 ? _object$QoSWeight : "";
    message.recommendedEpochNumToCollectPayment = object.recommendedEpochNumToCollectPayment !== undefined && object.recommendedEpochNumToCollectPayment !== null ? Long.fromValue(object.recommendedEpochNumToCollectPayment) : Long.UZERO;
    return message;
  }
};