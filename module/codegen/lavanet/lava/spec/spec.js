import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ApiCollection } from "./api_collection";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export let Spec_ProvidersTypes = /*#__PURE__*/function (Spec_ProvidersTypes) {
  Spec_ProvidersTypes[Spec_ProvidersTypes["dynamic"] = 0] = "dynamic";
  Spec_ProvidersTypes[Spec_ProvidersTypes["static"] = 1] = "static";
  Spec_ProvidersTypes[Spec_ProvidersTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Spec_ProvidersTypes;
}({});
export const Spec_ProvidersTypesSDKType = Spec_ProvidersTypes;
export function spec_ProvidersTypesFromJSON(object) {
  switch (object) {
    case 0:
    case "dynamic":
      return Spec_ProvidersTypes.dynamic;
    case 1:
    case "static":
      return Spec_ProvidersTypes.static;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Spec_ProvidersTypes.UNRECOGNIZED;
  }
}
export function spec_ProvidersTypesToJSON(object) {
  switch (object) {
    case Spec_ProvidersTypes.dynamic:
      return "dynamic";
    case Spec_ProvidersTypes.static:
      return "static";
    case Spec_ProvidersTypes.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseSpec() {
  return {
    index: "",
    name: "",
    enabled: false,
    reliabilityThreshold: 0,
    dataReliabilityEnabled: false,
    blockDistanceForFinalizedData: 0,
    blocksInFinalizationProof: 0,
    averageBlockTime: Long.ZERO,
    allowedBlockLagForQosSync: Long.ZERO,
    blockLastUpdated: Long.UZERO,
    minStakeProvider: undefined,
    minStakeClient: undefined,
    providersTypes: 0,
    imports: [],
    apiCollections: []
  };
}
export const Spec = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.reliabilityThreshold !== 0) {
      writer.uint32(40).uint32(message.reliabilityThreshold);
    }
    if (message.dataReliabilityEnabled === true) {
      writer.uint32(48).bool(message.dataReliabilityEnabled);
    }
    if (message.blockDistanceForFinalizedData !== 0) {
      writer.uint32(56).uint32(message.blockDistanceForFinalizedData);
    }
    if (message.blocksInFinalizationProof !== 0) {
      writer.uint32(64).uint32(message.blocksInFinalizationProof);
    }
    if (!message.averageBlockTime.isZero()) {
      writer.uint32(72).int64(message.averageBlockTime);
    }
    if (!message.allowedBlockLagForQosSync.isZero()) {
      writer.uint32(80).int64(message.allowedBlockLagForQosSync);
    }
    if (!message.blockLastUpdated.isZero()) {
      writer.uint32(88).uint64(message.blockLastUpdated);
    }
    if (message.minStakeProvider !== undefined) {
      Coin.encode(message.minStakeProvider, writer.uint32(98).fork()).ldelim();
    }
    if (message.minStakeClient !== undefined) {
      Coin.encode(message.minStakeClient, writer.uint32(106).fork()).ldelim();
    }
    if (message.providersTypes !== 0) {
      writer.uint32(112).int32(message.providersTypes);
    }
    for (const v of message.imports) {
      writer.uint32(122).string(v);
    }
    for (const v of message.apiCollections) {
      ApiCollection.encode(v, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.reliabilityThreshold = reader.uint32();
          break;
        case 6:
          message.dataReliabilityEnabled = reader.bool();
          break;
        case 7:
          message.blockDistanceForFinalizedData = reader.uint32();
          break;
        case 8:
          message.blocksInFinalizationProof = reader.uint32();
          break;
        case 9:
          message.averageBlockTime = reader.int64();
          break;
        case 10:
          message.allowedBlockLagForQosSync = reader.int64();
          break;
        case 11:
          message.blockLastUpdated = reader.uint64();
          break;
        case 12:
          message.minStakeProvider = Coin.decode(reader, reader.uint32());
          break;
        case 13:
          message.minStakeClient = Coin.decode(reader, reader.uint32());
          break;
        case 14:
          message.providersTypes = reader.int32();
          break;
        case 15:
          message.imports.push(reader.string());
          break;
        case 16:
          message.apiCollections.push(ApiCollection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index, _object$name, _object$enabled, _object$reliabilityTh, _object$dataReliabili, _object$blockDistance, _object$blocksInFinal, _object$providersType, _object$imports, _object$apiCollection;
    const message = createBaseSpec();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    message.reliabilityThreshold = (_object$reliabilityTh = object.reliabilityThreshold) !== null && _object$reliabilityTh !== void 0 ? _object$reliabilityTh : 0;
    message.dataReliabilityEnabled = (_object$dataReliabili = object.dataReliabilityEnabled) !== null && _object$dataReliabili !== void 0 ? _object$dataReliabili : false;
    message.blockDistanceForFinalizedData = (_object$blockDistance = object.blockDistanceForFinalizedData) !== null && _object$blockDistance !== void 0 ? _object$blockDistance : 0;
    message.blocksInFinalizationProof = (_object$blocksInFinal = object.blocksInFinalizationProof) !== null && _object$blocksInFinal !== void 0 ? _object$blocksInFinal : 0;
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? Long.fromValue(object.averageBlockTime) : Long.ZERO;
    message.allowedBlockLagForQosSync = object.allowedBlockLagForQosSync !== undefined && object.allowedBlockLagForQosSync !== null ? Long.fromValue(object.allowedBlockLagForQosSync) : Long.ZERO;
    message.blockLastUpdated = object.blockLastUpdated !== undefined && object.blockLastUpdated !== null ? Long.fromValue(object.blockLastUpdated) : Long.UZERO;
    message.minStakeProvider = object.minStakeProvider !== undefined && object.minStakeProvider !== null ? Coin.fromPartial(object.minStakeProvider) : undefined;
    message.minStakeClient = object.minStakeClient !== undefined && object.minStakeClient !== null ? Coin.fromPartial(object.minStakeClient) : undefined;
    message.providersTypes = (_object$providersType = object.providersTypes) !== null && _object$providersType !== void 0 ? _object$providersType : 0;
    message.imports = ((_object$imports = object.imports) === null || _object$imports === void 0 ? void 0 : _object$imports.map(e => e)) || [];
    message.apiCollections = ((_object$apiCollection = object.apiCollections) === null || _object$apiCollection === void 0 ? void 0 : _object$apiCollection.map(e => ApiCollection.fromPartial(e))) || [];
    return message;
  }
};