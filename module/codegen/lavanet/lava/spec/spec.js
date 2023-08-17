import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ApiCollection } from "./api_collection";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
    averageBlockTime: BigInt(0),
    allowedBlockLagForQosSync: BigInt(0),
    blockLastUpdated: BigInt(0),
    minStakeProvider: Coin.fromPartial({}),
    minStakeClient: Coin.fromPartial({}),
    providersTypes: 0,
    imports: [],
    apiCollections: []
  };
}
export const Spec = {
  typeUrl: "/lavanet.lava.spec.Spec",
  encode(message, writer = BinaryWriter.create()) {
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
    if (message.averageBlockTime !== BigInt(0)) {
      writer.uint32(72).int64(message.averageBlockTime);
    }
    if (message.allowedBlockLagForQosSync !== BigInt(0)) {
      writer.uint32(80).int64(message.allowedBlockLagForQosSync);
    }
    if (message.blockLastUpdated !== BigInt(0)) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? BigInt(object.averageBlockTime.toString()) : BigInt(0);
    message.allowedBlockLagForQosSync = object.allowedBlockLagForQosSync !== undefined && object.allowedBlockLagForQosSync !== null ? BigInt(object.allowedBlockLagForQosSync.toString()) : BigInt(0);
    message.blockLastUpdated = object.blockLastUpdated !== undefined && object.blockLastUpdated !== null ? BigInt(object.blockLastUpdated.toString()) : BigInt(0);
    message.minStakeProvider = object.minStakeProvider !== undefined && object.minStakeProvider !== null ? Coin.fromPartial(object.minStakeProvider) : undefined;
    message.minStakeClient = object.minStakeClient !== undefined && object.minStakeClient !== null ? Coin.fromPartial(object.minStakeClient) : undefined;
    message.providersTypes = (_object$providersType = object.providersTypes) !== null && _object$providersType !== void 0 ? _object$providersType : 0;
    message.imports = ((_object$imports = object.imports) === null || _object$imports === void 0 ? void 0 : _object$imports.map(e => e)) || [];
    message.apiCollections = ((_object$apiCollection = object.apiCollections) === null || _object$apiCollection === void 0 ? void 0 : _object$apiCollection.map(e => ApiCollection.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index,
      name: object.name,
      enabled: object.enabled,
      reliabilityThreshold: object.reliability_threshold,
      dataReliabilityEnabled: object.data_reliability_enabled,
      blockDistanceForFinalizedData: object.block_distance_for_finalized_data,
      blocksInFinalizationProof: object.blocks_in_finalization_proof,
      averageBlockTime: BigInt(object.average_block_time),
      allowedBlockLagForQosSync: BigInt(object.allowed_block_lag_for_qos_sync),
      blockLastUpdated: BigInt(object.block_last_updated),
      minStakeProvider: object !== null && object !== void 0 && object.min_stake_provider ? Coin.fromAmino(object.min_stake_provider) : undefined,
      minStakeClient: object !== null && object !== void 0 && object.min_stake_client ? Coin.fromAmino(object.min_stake_client) : undefined,
      providersTypes: isSet(object.providers_types) ? spec_ProvidersTypesFromJSON(object.providers_types) : -1,
      imports: Array.isArray(object === null || object === void 0 ? void 0 : object.imports) ? object.imports.map(e => e) : [],
      apiCollections: Array.isArray(object === null || object === void 0 ? void 0 : object.api_collections) ? object.api_collections.map(e => ApiCollection.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    obj.name = message.name;
    obj.enabled = message.enabled;
    obj.reliability_threshold = message.reliabilityThreshold;
    obj.data_reliability_enabled = message.dataReliabilityEnabled;
    obj.block_distance_for_finalized_data = message.blockDistanceForFinalizedData;
    obj.blocks_in_finalization_proof = message.blocksInFinalizationProof;
    obj.average_block_time = message.averageBlockTime ? message.averageBlockTime.toString() : undefined;
    obj.allowed_block_lag_for_qos_sync = message.allowedBlockLagForQosSync ? message.allowedBlockLagForQosSync.toString() : undefined;
    obj.block_last_updated = message.blockLastUpdated ? message.blockLastUpdated.toString() : undefined;
    obj.min_stake_provider = message.minStakeProvider ? Coin.toAmino(message.minStakeProvider) : undefined;
    obj.min_stake_client = message.minStakeClient ? Coin.toAmino(message.minStakeClient) : undefined;
    obj.providers_types = message.providersTypes;
    if (message.imports) {
      obj.imports = message.imports.map(e => e);
    } else {
      obj.imports = [];
    }
    if (message.apiCollections) {
      obj.api_collections = message.apiCollections.map(e => e ? ApiCollection.toAmino(e) : undefined);
    } else {
      obj.api_collections = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Spec.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Spec.decode(message.value);
  },
  toProto(message) {
    return Spec.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.Spec",
      value: Spec.encode(message).finish()
    };
  }
};