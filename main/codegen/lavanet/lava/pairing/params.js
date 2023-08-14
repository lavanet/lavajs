"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = void 0;
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    mintCoinsPerCU: "",
    fraudStakeSlashingFactor: "",
    fraudSlashingAmount: _helpers.Long.UZERO,
    epochBlocksOverlap: _helpers.Long.UZERO,
    unpayLimit: "",
    slashLimit: "",
    dataReliabilityReward: "",
    QoSWeight: "",
    recommendedEpochNumToCollectPayment: _helpers.Long.UZERO
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.mintCoinsPerCU !== "") {
      writer.uint32(26).string(message.mintCoinsPerCU);
    }
    if (message.fraudStakeSlashingFactor !== "") {
      writer.uint32(42).string(message.fraudStakeSlashingFactor);
    }
    if (!message.fraudSlashingAmount.isZero()) {
      writer.uint32(48).uint64(message.fraudSlashingAmount);
    }
    if (!message.epochBlocksOverlap.isZero()) {
      writer.uint32(64).uint64(message.epochBlocksOverlap);
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.mintCoinsPerCU = reader.string();
          break;
        case 5:
          message.fraudStakeSlashingFactor = reader.string();
          break;
        case 6:
          message.fraudSlashingAmount = reader.uint64();
          break;
        case 8:
          message.epochBlocksOverlap = reader.uint64();
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
  fromPartial: function fromPartial(object) {
    var _object$mintCoinsPerC, _object$fraudStakeSla, _object$unpayLimit, _object$slashLimit, _object$dataReliabili, _object$QoSWeight;
    var message = createBaseParams();
    message.mintCoinsPerCU = (_object$mintCoinsPerC = object.mintCoinsPerCU) !== null && _object$mintCoinsPerC !== void 0 ? _object$mintCoinsPerC : "";
    message.fraudStakeSlashingFactor = (_object$fraudStakeSla = object.fraudStakeSlashingFactor) !== null && _object$fraudStakeSla !== void 0 ? _object$fraudStakeSla : "";
    message.fraudSlashingAmount = object.fraudSlashingAmount !== undefined && object.fraudSlashingAmount !== null ? _helpers.Long.fromValue(object.fraudSlashingAmount) : _helpers.Long.UZERO;
    message.epochBlocksOverlap = object.epochBlocksOverlap !== undefined && object.epochBlocksOverlap !== null ? _helpers.Long.fromValue(object.epochBlocksOverlap) : _helpers.Long.UZERO;
    message.unpayLimit = (_object$unpayLimit = object.unpayLimit) !== null && _object$unpayLimit !== void 0 ? _object$unpayLimit : "";
    message.slashLimit = (_object$slashLimit = object.slashLimit) !== null && _object$slashLimit !== void 0 ? _object$slashLimit : "";
    message.dataReliabilityReward = (_object$dataReliabili = object.dataReliabilityReward) !== null && _object$dataReliabili !== void 0 ? _object$dataReliabili : "";
    message.QoSWeight = (_object$QoSWeight = object.QoSWeight) !== null && _object$QoSWeight !== void 0 ? _object$QoSWeight : "";
    message.recommendedEpochNumToCollectPayment = object.recommendedEpochNumToCollectPayment !== undefined && object.recommendedEpochNumToCollectPayment !== null ? _helpers.Long.fromValue(object.recommendedEpochNumToCollectPayment) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Params = Params;