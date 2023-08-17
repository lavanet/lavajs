import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ApiCollection, ApiCollectionSDKType } from "./api_collection";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export enum Spec_ProvidersTypes {
  dynamic = 0,
  static = 1,
  UNRECOGNIZED = -1,
}
export const Spec_ProvidersTypesSDKType = Spec_ProvidersTypes;
export function spec_ProvidersTypesFromJSON(object: any): Spec_ProvidersTypes {
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
export function spec_ProvidersTypesToJSON(object: Spec_ProvidersTypes): string {
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
export interface Spec {
  index: string;
  name: string;
  enabled: boolean;
  reliabilityThreshold: number;
  dataReliabilityEnabled: boolean;
  blockDistanceForFinalizedData: number;
  blocksInFinalizationProof: number;
  averageBlockTime: bigint;
  allowedBlockLagForQosSync: bigint;
  blockLastUpdated: bigint;
  minStakeProvider: Coin;
  minStakeClient: Coin;
  providersTypes: Spec_ProvidersTypes;
  imports: string[];
  apiCollections: ApiCollection[];
}
export interface SpecSDKType {
  index: string;
  name: string;
  enabled: boolean;
  reliability_threshold: number;
  data_reliability_enabled: boolean;
  block_distance_for_finalized_data: number;
  blocks_in_finalization_proof: number;
  average_block_time: bigint;
  allowed_block_lag_for_qos_sync: bigint;
  block_last_updated: bigint;
  min_stake_provider: CoinSDKType;
  min_stake_client: CoinSDKType;
  providers_types: Spec_ProvidersTypes;
  imports: string[];
  api_collections: ApiCollectionSDKType[];
}
function createBaseSpec(): Spec {
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
  encode(message: Spec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(122).string(v!);
    }
    for (const v of message.apiCollections) {
      ApiCollection.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Spec {
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
          message.providersTypes = (reader.int32() as any);
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
  fromPartial(object: Partial<Spec>): Spec {
    const message = createBaseSpec();
    message.index = object.index ?? "";
    message.name = object.name ?? "";
    message.enabled = object.enabled ?? false;
    message.reliabilityThreshold = object.reliabilityThreshold ?? 0;
    message.dataReliabilityEnabled = object.dataReliabilityEnabled ?? false;
    message.blockDistanceForFinalizedData = object.blockDistanceForFinalizedData ?? 0;
    message.blocksInFinalizationProof = object.blocksInFinalizationProof ?? 0;
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? BigInt(object.averageBlockTime.toString()) : BigInt(0);
    message.allowedBlockLagForQosSync = object.allowedBlockLagForQosSync !== undefined && object.allowedBlockLagForQosSync !== null ? BigInt(object.allowedBlockLagForQosSync.toString()) : BigInt(0);
    message.blockLastUpdated = object.blockLastUpdated !== undefined && object.blockLastUpdated !== null ? BigInt(object.blockLastUpdated.toString()) : BigInt(0);
    message.minStakeProvider = object.minStakeProvider !== undefined && object.minStakeProvider !== null ? Coin.fromPartial(object.minStakeProvider) : undefined;
    message.minStakeClient = object.minStakeClient !== undefined && object.minStakeClient !== null ? Coin.fromPartial(object.minStakeClient) : undefined;
    message.providersTypes = object.providersTypes ?? 0;
    message.imports = object.imports?.map(e => e) || [];
    message.apiCollections = object.apiCollections?.map(e => ApiCollection.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SpecAmino): Spec {
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
      minStakeProvider: object?.min_stake_provider ? Coin.fromAmino(object.min_stake_provider) : undefined,
      minStakeClient: object?.min_stake_client ? Coin.fromAmino(object.min_stake_client) : undefined,
      providersTypes: isSet(object.providers_types) ? spec_ProvidersTypesFromJSON(object.providers_types) : -1,
      imports: Array.isArray(object?.imports) ? object.imports.map((e: any) => e) : [],
      apiCollections: Array.isArray(object?.api_collections) ? object.api_collections.map((e: any) => ApiCollection.fromAmino(e)) : []
    };
  },
  toAmino(message: Spec): SpecAmino {
    const obj: any = {};
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
  fromAminoMsg(object: SpecAminoMsg): Spec {
    return Spec.fromAmino(object.value);
  },
  fromProtoMsg(message: SpecProtoMsg): Spec {
    return Spec.decode(message.value);
  },
  toProto(message: Spec): Uint8Array {
    return Spec.encode(message).finish();
  },
  toProtoMsg(message: Spec): SpecProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Spec",
      value: Spec.encode(message).finish()
    };
  }
};