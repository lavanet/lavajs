import { CollectionData, CollectionDataSDKType } from "../spec/api_collection";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** the enum below determines the pairing algorithm's behaviour with the selected providers feature */
export enum SELECTED_PROVIDERS_MODE {
  /** ALLOWED - no providers restrictions */
  ALLOWED = 0,
  /** MIXED - use the selected providers mixed with randomly chosen providers */
  MIXED = 1,
  /** EXCLUSIVE - use only the selected providers */
  EXCLUSIVE = 2,
  /** DISABLED - selected providers feature is disabled */
  DISABLED = 3,
  UNRECOGNIZED = -1,
}
export const SELECTED_PROVIDERS_MODESDKType = SELECTED_PROVIDERS_MODE;
export function sELECTED_PROVIDERS_MODEFromJSON(object: any): SELECTED_PROVIDERS_MODE {
  switch (object) {
    case 0:
    case "ALLOWED":
      return SELECTED_PROVIDERS_MODE.ALLOWED;
    case 1:
    case "MIXED":
      return SELECTED_PROVIDERS_MODE.MIXED;
    case 2:
    case "EXCLUSIVE":
      return SELECTED_PROVIDERS_MODE.EXCLUSIVE;
    case 3:
    case "DISABLED":
      return SELECTED_PROVIDERS_MODE.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SELECTED_PROVIDERS_MODE.UNRECOGNIZED;
  }
}
export function sELECTED_PROVIDERS_MODEToJSON(object: SELECTED_PROVIDERS_MODE): string {
  switch (object) {
    case SELECTED_PROVIDERS_MODE.ALLOWED:
      return "ALLOWED";
    case SELECTED_PROVIDERS_MODE.MIXED:
      return "MIXED";
    case SELECTED_PROVIDERS_MODE.EXCLUSIVE:
      return "EXCLUSIVE";
    case SELECTED_PROVIDERS_MODE.DISABLED:
      return "DISABLED";
    case SELECTED_PROVIDERS_MODE.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** protobuf expected in YAML format: used "moretags" to simplify parsing */
export interface Policy {
  chainPolicies: ChainPolicy[];
  geolocationProfile: bigint;
  totalCuLimit: bigint;
  epochCuLimit: bigint;
  maxProvidersToPair: bigint;
  selectedProvidersMode: SELECTED_PROVIDERS_MODE;
  selectedProviders: string[];
}
/** protobuf expected in YAML format: used "moretags" to simplify parsing */
export interface PolicySDKType {
  chain_policies: ChainPolicySDKType[];
  geolocation_profile: bigint;
  total_cu_limit: bigint;
  epoch_cu_limit: bigint;
  max_providers_to_pair: bigint;
  selected_providers_mode: SELECTED_PROVIDERS_MODE;
  selected_providers: string[];
}
export interface ChainPolicy {
  chainId: string;
  apis: string[];
  requirements: ChainRequirement[];
}
export interface ChainPolicySDKType {
  chain_id: string;
  apis: string[];
  requirements: ChainRequirementSDKType[];
}
export interface ChainRequirement {
  collection: CollectionData;
  extensions: string[];
}
export interface ChainRequirementSDKType {
  collection: CollectionDataSDKType;
  extensions: string[];
}
function createBasePolicy(): Policy {
  return {
    chainPolicies: [],
    geolocationProfile: BigInt(0),
    totalCuLimit: BigInt(0),
    epochCuLimit: BigInt(0),
    maxProvidersToPair: BigInt(0),
    selectedProvidersMode: 0,
    selectedProviders: []
  };
}
export const Policy = {
  typeUrl: "/lavanet.lava.plans.Policy",
  encode(message: Policy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.chainPolicies) {
      ChainPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.geolocationProfile !== BigInt(0)) {
      writer.uint32(16).uint64(message.geolocationProfile);
    }
    if (message.totalCuLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalCuLimit);
    }
    if (message.epochCuLimit !== BigInt(0)) {
      writer.uint32(32).uint64(message.epochCuLimit);
    }
    if (message.maxProvidersToPair !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxProvidersToPair);
    }
    if (message.selectedProvidersMode !== 0) {
      writer.uint32(48).int32(message.selectedProvidersMode);
    }
    for (const v of message.selectedProviders) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Policy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainPolicies.push(ChainPolicy.decode(reader, reader.uint32()));
          break;
        case 2:
          message.geolocationProfile = reader.uint64();
          break;
        case 3:
          message.totalCuLimit = reader.uint64();
          break;
        case 4:
          message.epochCuLimit = reader.uint64();
          break;
        case 5:
          message.maxProvidersToPair = reader.uint64();
          break;
        case 6:
          message.selectedProvidersMode = (reader.int32() as any);
          break;
        case 7:
          message.selectedProviders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Policy>): Policy {
    const message = createBasePolicy();
    message.chainPolicies = object.chainPolicies?.map(e => ChainPolicy.fromPartial(e)) || [];
    message.geolocationProfile = object.geolocationProfile !== undefined && object.geolocationProfile !== null ? BigInt(object.geolocationProfile.toString()) : BigInt(0);
    message.totalCuLimit = object.totalCuLimit !== undefined && object.totalCuLimit !== null ? BigInt(object.totalCuLimit.toString()) : BigInt(0);
    message.epochCuLimit = object.epochCuLimit !== undefined && object.epochCuLimit !== null ? BigInt(object.epochCuLimit.toString()) : BigInt(0);
    message.maxProvidersToPair = object.maxProvidersToPair !== undefined && object.maxProvidersToPair !== null ? BigInt(object.maxProvidersToPair.toString()) : BigInt(0);
    message.selectedProvidersMode = object.selectedProvidersMode ?? 0;
    message.selectedProviders = object.selectedProviders?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PolicyAmino): Policy {
    return {
      chainPolicies: Array.isArray(object?.chain_policies) ? object.chain_policies.map((e: any) => ChainPolicy.fromAmino(e)) : [],
      geolocationProfile: BigInt(object.geolocation_profile),
      totalCuLimit: BigInt(object.total_cu_limit),
      epochCuLimit: BigInt(object.epoch_cu_limit),
      maxProvidersToPair: BigInt(object.max_providers_to_pair),
      selectedProvidersMode: isSet(object.selected_providers_mode) ? sELECTED_PROVIDERS_MODEFromJSON(object.selected_providers_mode) : -1,
      selectedProviders: Array.isArray(object?.selected_providers) ? object.selected_providers.map((e: any) => e) : []
    };
  },
  toAmino(message: Policy): PolicyAmino {
    const obj: any = {};
    if (message.chainPolicies) {
      obj.chain_policies = message.chainPolicies.map(e => e ? ChainPolicy.toAmino(e) : undefined);
    } else {
      obj.chain_policies = [];
    }
    obj.geolocation_profile = message.geolocationProfile ? message.geolocationProfile.toString() : undefined;
    obj.total_cu_limit = message.totalCuLimit ? message.totalCuLimit.toString() : undefined;
    obj.epoch_cu_limit = message.epochCuLimit ? message.epochCuLimit.toString() : undefined;
    obj.max_providers_to_pair = message.maxProvidersToPair ? message.maxProvidersToPair.toString() : undefined;
    obj.selected_providers_mode = message.selectedProvidersMode;
    if (message.selectedProviders) {
      obj.selected_providers = message.selectedProviders.map(e => e);
    } else {
      obj.selected_providers = [];
    }
    return obj;
  },
  fromAminoMsg(object: PolicyAminoMsg): Policy {
    return Policy.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyProtoMsg): Policy {
    return Policy.decode(message.value);
  },
  toProto(message: Policy): Uint8Array {
    return Policy.encode(message).finish();
  },
  toProtoMsg(message: Policy): PolicyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.Policy",
      value: Policy.encode(message).finish()
    };
  }
};
function createBaseChainPolicy(): ChainPolicy {
  return {
    chainId: "",
    apis: [],
    requirements: []
  };
}
export const ChainPolicy = {
  typeUrl: "/lavanet.lava.plans.ChainPolicy",
  encode(message: ChainPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    for (const v of message.apis) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.requirements) {
      ChainRequirement.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.apis.push(reader.string());
          break;
        case 3:
          message.requirements.push(ChainRequirement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ChainPolicy>): ChainPolicy {
    const message = createBaseChainPolicy();
    message.chainId = object.chainId ?? "";
    message.apis = object.apis?.map(e => e) || [];
    message.requirements = object.requirements?.map(e => ChainRequirement.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ChainPolicyAmino): ChainPolicy {
    return {
      chainId: object.chain_id,
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => e) : [],
      requirements: Array.isArray(object?.requirements) ? object.requirements.map((e: any) => ChainRequirement.fromAmino(e)) : []
    };
  },
  toAmino(message: ChainPolicy): ChainPolicyAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    if (message.apis) {
      obj.apis = message.apis.map(e => e);
    } else {
      obj.apis = [];
    }
    if (message.requirements) {
      obj.requirements = message.requirements.map(e => e ? ChainRequirement.toAmino(e) : undefined);
    } else {
      obj.requirements = [];
    }
    return obj;
  },
  fromAminoMsg(object: ChainPolicyAminoMsg): ChainPolicy {
    return ChainPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainPolicyProtoMsg): ChainPolicy {
    return ChainPolicy.decode(message.value);
  },
  toProto(message: ChainPolicy): Uint8Array {
    return ChainPolicy.encode(message).finish();
  },
  toProtoMsg(message: ChainPolicy): ChainPolicyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.ChainPolicy",
      value: ChainPolicy.encode(message).finish()
    };
  }
};
function createBaseChainRequirement(): ChainRequirement {
  return {
    collection: CollectionData.fromPartial({}),
    extensions: []
  };
}
export const ChainRequirement = {
  typeUrl: "/lavanet.lava.plans.ChainRequirement",
  encode(message: ChainRequirement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collection !== undefined) {
      CollectionData.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.extensions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainRequirement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = CollectionData.decode(reader, reader.uint32());
          break;
        case 2:
          message.extensions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ChainRequirement>): ChainRequirement {
    const message = createBaseChainRequirement();
    message.collection = object.collection !== undefined && object.collection !== null ? CollectionData.fromPartial(object.collection) : undefined;
    message.extensions = object.extensions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ChainRequirementAmino): ChainRequirement {
    return {
      collection: object?.collection ? CollectionData.fromAmino(object.collection) : undefined,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => e) : []
    };
  },
  toAmino(message: ChainRequirement): ChainRequirementAmino {
    const obj: any = {};
    obj.collection = message.collection ? CollectionData.toAmino(message.collection) : undefined;
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e);
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromAminoMsg(object: ChainRequirementAminoMsg): ChainRequirement {
    return ChainRequirement.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainRequirementProtoMsg): ChainRequirement {
    return ChainRequirement.decode(message.value);
  },
  toProto(message: ChainRequirement): Uint8Array {
    return ChainRequirement.encode(message).finish();
  },
  toProtoMsg(message: ChainRequirement): ChainRequirementProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.ChainRequirement",
      value: ChainRequirement.encode(message).finish()
    };
  }
};