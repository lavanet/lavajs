import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { StakeEntry, StakeEntrySDKType } from "../epochstorage/stake_entry";
import { UniquePaymentStorageClientProvider, UniquePaymentStorageClientProviderSDKType } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage, ProviderPaymentStorageSDKType } from "./provider_payment_storage";
import { EpochPayments, EpochPaymentsSDKType } from "./epoch_payments";
import { Subscription, SubscriptionSDKType } from "../subscription/subscription";
import { Project, ProjectSDKType } from "../projects/project";
import { Policy, PolicySDKType } from "../plans/policy";
import { Spec, SpecSDKType } from "../spec/spec";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryProvidersRequest {
  chainID: string;
  showFrozen: boolean;
}
export interface QueryProvidersRequestSDKType {
  chainID: string;
  showFrozen: boolean;
}
export interface QueryProvidersResponse {
  stakeEntry: StakeEntry[];
  output: string;
}
export interface QueryProvidersResponseSDKType {
  stakeEntry: StakeEntrySDKType[];
  output: string;
}
export interface QueryGetPairingRequest {
  chainID: string;
  client: string;
}
export interface QueryGetPairingRequestSDKType {
  chainID: string;
  client: string;
}
export interface QueryGetPairingResponse {
  providers: StakeEntry[];
  currentEpoch: bigint;
  timeLeftToNextPairing: bigint;
  specLastUpdatedBlock: bigint;
  blockOfNextPairing: bigint;
}
export interface QueryGetPairingResponseSDKType {
  providers: StakeEntrySDKType[];
  current_epoch: bigint;
  time_left_to_next_pairing: bigint;
  spec_last_updated_block: bigint;
  block_of_next_pairing: bigint;
}
export interface QueryVerifyPairingRequest {
  chainID: string;
  client: string;
  provider: string;
  block: bigint;
}
export interface QueryVerifyPairingRequestSDKType {
  chainID: string;
  client: string;
  provider: string;
  block: bigint;
}
export interface QueryVerifyPairingResponse {
  valid: boolean;
  pairedProviders: bigint;
  cuPerEpoch: bigint;
  projectId: string;
}
export interface QueryVerifyPairingResponseSDKType {
  valid: boolean;
  paired_providers: bigint;
  cu_per_epoch: bigint;
  project_id: string;
}
export interface QueryGetUniquePaymentStorageClientProviderRequest {
  index: string;
}
export interface QueryGetUniquePaymentStorageClientProviderRequestSDKType {
  index: string;
}
export interface QueryGetUniquePaymentStorageClientProviderResponse {
  uniquePaymentStorageClientProvider: UniquePaymentStorageClientProvider;
}
export interface QueryGetUniquePaymentStorageClientProviderResponseSDKType {
  uniquePaymentStorageClientProvider: UniquePaymentStorageClientProviderSDKType;
}
export interface QueryAllUniquePaymentStorageClientProviderRequest {
  pagination: PageRequest;
}
export interface QueryAllUniquePaymentStorageClientProviderRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllUniquePaymentStorageClientProviderResponse {
  uniquePaymentStorageClientProvider: UniquePaymentStorageClientProvider[];
  pagination: PageResponse;
}
export interface QueryAllUniquePaymentStorageClientProviderResponseSDKType {
  uniquePaymentStorageClientProvider: UniquePaymentStorageClientProviderSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryGetProviderPaymentStorageRequest {
  index: string;
}
export interface QueryGetProviderPaymentStorageRequestSDKType {
  index: string;
}
export interface QueryGetProviderPaymentStorageResponse {
  providerPaymentStorage: ProviderPaymentStorage;
}
export interface QueryGetProviderPaymentStorageResponseSDKType {
  providerPaymentStorage: ProviderPaymentStorageSDKType;
}
export interface QueryAllProviderPaymentStorageRequest {
  pagination: PageRequest;
}
export interface QueryAllProviderPaymentStorageRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllProviderPaymentStorageResponse {
  providerPaymentStorage: ProviderPaymentStorage[];
  pagination: PageResponse;
}
export interface QueryAllProviderPaymentStorageResponseSDKType {
  providerPaymentStorage: ProviderPaymentStorageSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryGetEpochPaymentsRequest {
  index: string;
}
export interface QueryGetEpochPaymentsRequestSDKType {
  index: string;
}
export interface QueryGetEpochPaymentsResponse {
  epochPayments: EpochPayments;
}
export interface QueryGetEpochPaymentsResponseSDKType {
  epochPayments: EpochPaymentsSDKType;
}
export interface QueryAllEpochPaymentsRequest {
  pagination: PageRequest;
}
export interface QueryAllEpochPaymentsRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllEpochPaymentsResponse {
  epochPayments: EpochPayments[];
  pagination: PageResponse;
}
export interface QueryAllEpochPaymentsResponseSDKType {
  epochPayments: EpochPaymentsSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryUserEntryRequest {
  address: string;
  chainID: string;
  block: bigint;
}
export interface QueryUserEntryRequestSDKType {
  address: string;
  chainID: string;
  block: bigint;
}
export interface QueryUserEntryResponse {
  consumer: StakeEntry;
  maxCU: bigint;
}
export interface QueryUserEntryResponseSDKType {
  consumer: StakeEntrySDKType;
  maxCU: bigint;
}
export interface QueryStaticProvidersListRequest {
  chainID: string;
}
export interface QueryStaticProvidersListRequestSDKType {
  chainID: string;
}
export interface QueryStaticProvidersListResponse {
  providers: StakeEntry[];
}
export interface QueryStaticProvidersListResponseSDKType {
  providers: StakeEntrySDKType[];
}
export interface QueryAccountInfoResponse {
  provider: StakeEntry[];
  frozen: StakeEntry[];
  consumer: StakeEntry[];
  unstaked: StakeEntry[];
  subscription?: Subscription;
  project?: Project;
}
export interface QueryAccountInfoResponseSDKType {
  provider: StakeEntrySDKType[];
  frozen: StakeEntrySDKType[];
  consumer: StakeEntrySDKType[];
  unstaked: StakeEntrySDKType[];
  subscription?: SubscriptionSDKType;
  project?: ProjectSDKType;
}
export interface QueryEffectivePolicyRequest {
  consumer: string;
  specID: string;
}
export interface QueryEffectivePolicyRequestSDKType {
  consumer: string;
  specID: string;
}
export interface QueryEffectivePolicyResponse {
  policy: Policy;
}
export interface QueryEffectivePolicyResponseSDKType {
  policy: PolicySDKType;
}
export interface QuerySdkPairingResponse {
  pairing: QueryGetPairingResponse;
  maxCu: bigint;
  spec: Spec;
}
export interface QuerySdkPairingResponseSDKType {
  pairing: QueryGetPairingResponseSDKType;
  max_cu: bigint;
  spec: SpecSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProvidersRequest(): QueryProvidersRequest {
  return {
    chainID: "",
    showFrozen: false
  };
}
export const QueryProvidersRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersRequest",
  encode(message: QueryProvidersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.showFrozen === true) {
      writer.uint32(16).bool(message.showFrozen);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProvidersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.showFrozen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryProvidersRequest>): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    message.chainID = object.chainID ?? "";
    message.showFrozen = object.showFrozen ?? false;
    return message;
  },
  fromAmino(object: QueryProvidersRequestAmino): QueryProvidersRequest {
    return {
      chainID: object.chainID,
      showFrozen: object.showFrozen
    };
  },
  toAmino(message: QueryProvidersRequest): QueryProvidersRequestAmino {
    const obj: any = {};
    obj.chainID = message.chainID;
    obj.showFrozen = message.showFrozen;
    return obj;
  },
  fromAminoMsg(object: QueryProvidersRequestAminoMsg): QueryProvidersRequest {
    return QueryProvidersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProvidersRequestProtoMsg): QueryProvidersRequest {
    return QueryProvidersRequest.decode(message.value);
  },
  toProto(message: QueryProvidersRequest): Uint8Array {
    return QueryProvidersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersRequest): QueryProvidersRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProvidersRequest",
      value: QueryProvidersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    stakeEntry: [],
    output: ""
  };
}
export const QueryProvidersResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersResponse",
  encode(message: QueryProvidersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakeEntry) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.output !== "") {
      writer.uint32(18).string(message.output);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProvidersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeEntry.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryProvidersResponse>): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.stakeEntry = object.stakeEntry?.map(e => StakeEntry.fromPartial(e)) || [];
    message.output = object.output ?? "";
    return message;
  },
  fromAmino(object: QueryProvidersResponseAmino): QueryProvidersResponse {
    return {
      stakeEntry: Array.isArray(object?.stakeEntry) ? object.stakeEntry.map((e: any) => StakeEntry.fromAmino(e)) : [],
      output: object.output
    };
  },
  toAmino(message: QueryProvidersResponse): QueryProvidersResponseAmino {
    const obj: any = {};
    if (message.stakeEntry) {
      obj.stakeEntry = message.stakeEntry.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.stakeEntry = [];
    }
    obj.output = message.output;
    return obj;
  },
  fromAminoMsg(object: QueryProvidersResponseAminoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProvidersResponseProtoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.decode(message.value);
  },
  toProto(message: QueryProvidersResponse): Uint8Array {
    return QueryProvidersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersResponse): QueryProvidersResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProvidersResponse",
      value: QueryProvidersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPairingRequest(): QueryGetPairingRequest {
  return {
    chainID: "",
    client: ""
  };
}
export const QueryGetPairingRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryGetPairingRequest",
  encode(message: QueryGetPairingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.client !== "") {
      writer.uint32(18).string(message.client);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPairingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPairingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.client = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPairingRequest>): QueryGetPairingRequest {
    const message = createBaseQueryGetPairingRequest();
    message.chainID = object.chainID ?? "";
    message.client = object.client ?? "";
    return message;
  },
  fromAmino(object: QueryGetPairingRequestAmino): QueryGetPairingRequest {
    return {
      chainID: object.chainID,
      client: object.client
    };
  },
  toAmino(message: QueryGetPairingRequest): QueryGetPairingRequestAmino {
    const obj: any = {};
    obj.chainID = message.chainID;
    obj.client = message.client;
    return obj;
  },
  fromAminoMsg(object: QueryGetPairingRequestAminoMsg): QueryGetPairingRequest {
    return QueryGetPairingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPairingRequestProtoMsg): QueryGetPairingRequest {
    return QueryGetPairingRequest.decode(message.value);
  },
  toProto(message: QueryGetPairingRequest): Uint8Array {
    return QueryGetPairingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPairingRequest): QueryGetPairingRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetPairingRequest",
      value: QueryGetPairingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPairingResponse(): QueryGetPairingResponse {
  return {
    providers: [],
    currentEpoch: BigInt(0),
    timeLeftToNextPairing: BigInt(0),
    specLastUpdatedBlock: BigInt(0),
    blockOfNextPairing: BigInt(0)
  };
}
export const QueryGetPairingResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryGetPairingResponse",
  encode(message: QueryGetPairingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentEpoch);
    }
    if (message.timeLeftToNextPairing !== BigInt(0)) {
      writer.uint32(24).uint64(message.timeLeftToNextPairing);
    }
    if (message.specLastUpdatedBlock !== BigInt(0)) {
      writer.uint32(32).uint64(message.specLastUpdatedBlock);
    }
    if (message.blockOfNextPairing !== BigInt(0)) {
      writer.uint32(40).uint64(message.blockOfNextPairing);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPairingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPairingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentEpoch = reader.uint64();
          break;
        case 3:
          message.timeLeftToNextPairing = reader.uint64();
          break;
        case 4:
          message.specLastUpdatedBlock = reader.uint64();
          break;
        case 5:
          message.blockOfNextPairing = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetPairingResponse>): QueryGetPairingResponse {
    const message = createBaseQueryGetPairingResponse();
    message.providers = object.providers?.map(e => StakeEntry.fromPartial(e)) || [];
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    message.timeLeftToNextPairing = object.timeLeftToNextPairing !== undefined && object.timeLeftToNextPairing !== null ? BigInt(object.timeLeftToNextPairing.toString()) : BigInt(0);
    message.specLastUpdatedBlock = object.specLastUpdatedBlock !== undefined && object.specLastUpdatedBlock !== null ? BigInt(object.specLastUpdatedBlock.toString()) : BigInt(0);
    message.blockOfNextPairing = object.blockOfNextPairing !== undefined && object.blockOfNextPairing !== null ? BigInt(object.blockOfNextPairing.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPairingResponseAmino): QueryGetPairingResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => StakeEntry.fromAmino(e)) : [],
      currentEpoch: BigInt(object.current_epoch),
      timeLeftToNextPairing: BigInt(object.time_left_to_next_pairing),
      specLastUpdatedBlock: BigInt(object.spec_last_updated_block),
      blockOfNextPairing: BigInt(object.block_of_next_pairing)
    };
  },
  toAmino(message: QueryGetPairingResponse): QueryGetPairingResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.providers = [];
    }
    obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
    obj.time_left_to_next_pairing = message.timeLeftToNextPairing ? message.timeLeftToNextPairing.toString() : undefined;
    obj.spec_last_updated_block = message.specLastUpdatedBlock ? message.specLastUpdatedBlock.toString() : undefined;
    obj.block_of_next_pairing = message.blockOfNextPairing ? message.blockOfNextPairing.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPairingResponseAminoMsg): QueryGetPairingResponse {
    return QueryGetPairingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPairingResponseProtoMsg): QueryGetPairingResponse {
    return QueryGetPairingResponse.decode(message.value);
  },
  toProto(message: QueryGetPairingResponse): Uint8Array {
    return QueryGetPairingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPairingResponse): QueryGetPairingResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetPairingResponse",
      value: QueryGetPairingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVerifyPairingRequest(): QueryVerifyPairingRequest {
  return {
    chainID: "",
    client: "",
    provider: "",
    block: BigInt(0)
  };
}
export const QueryVerifyPairingRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingRequest",
  encode(message: QueryVerifyPairingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.client !== "") {
      writer.uint32(18).string(message.client);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(32).uint64(message.block);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyPairingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyPairingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.client = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.block = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVerifyPairingRequest>): QueryVerifyPairingRequest {
    const message = createBaseQueryVerifyPairingRequest();
    message.chainID = object.chainID ?? "";
    message.client = object.client ?? "";
    message.provider = object.provider ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryVerifyPairingRequestAmino): QueryVerifyPairingRequest {
    return {
      chainID: object.chainID,
      client: object.client,
      provider: object.provider,
      block: BigInt(object.block)
    };
  },
  toAmino(message: QueryVerifyPairingRequest): QueryVerifyPairingRequestAmino {
    const obj: any = {};
    obj.chainID = message.chainID;
    obj.client = message.client;
    obj.provider = message.provider;
    obj.block = message.block ? message.block.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVerifyPairingRequestAminoMsg): QueryVerifyPairingRequest {
    return QueryVerifyPairingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerifyPairingRequestProtoMsg): QueryVerifyPairingRequest {
    return QueryVerifyPairingRequest.decode(message.value);
  },
  toProto(message: QueryVerifyPairingRequest): Uint8Array {
    return QueryVerifyPairingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifyPairingRequest): QueryVerifyPairingRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingRequest",
      value: QueryVerifyPairingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVerifyPairingResponse(): QueryVerifyPairingResponse {
  return {
    valid: false,
    pairedProviders: BigInt(0),
    cuPerEpoch: BigInt(0),
    projectId: ""
  };
}
export const QueryVerifyPairingResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingResponse",
  encode(message: QueryVerifyPairingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    if (message.pairedProviders !== BigInt(0)) {
      writer.uint32(24).uint64(message.pairedProviders);
    }
    if (message.cuPerEpoch !== BigInt(0)) {
      writer.uint32(32).uint64(message.cuPerEpoch);
    }
    if (message.projectId !== "") {
      writer.uint32(42).string(message.projectId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyPairingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyPairingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        case 3:
          message.pairedProviders = reader.uint64();
          break;
        case 4:
          message.cuPerEpoch = reader.uint64();
          break;
        case 5:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVerifyPairingResponse>): QueryVerifyPairingResponse {
    const message = createBaseQueryVerifyPairingResponse();
    message.valid = object.valid ?? false;
    message.pairedProviders = object.pairedProviders !== undefined && object.pairedProviders !== null ? BigInt(object.pairedProviders.toString()) : BigInt(0);
    message.cuPerEpoch = object.cuPerEpoch !== undefined && object.cuPerEpoch !== null ? BigInt(object.cuPerEpoch.toString()) : BigInt(0);
    message.projectId = object.projectId ?? "";
    return message;
  },
  fromAmino(object: QueryVerifyPairingResponseAmino): QueryVerifyPairingResponse {
    return {
      valid: object.valid,
      pairedProviders: BigInt(object.paired_providers),
      cuPerEpoch: BigInt(object.cu_per_epoch),
      projectId: object.project_id
    };
  },
  toAmino(message: QueryVerifyPairingResponse): QueryVerifyPairingResponseAmino {
    const obj: any = {};
    obj.valid = message.valid;
    obj.paired_providers = message.pairedProviders ? message.pairedProviders.toString() : undefined;
    obj.cu_per_epoch = message.cuPerEpoch ? message.cuPerEpoch.toString() : undefined;
    obj.project_id = message.projectId;
    return obj;
  },
  fromAminoMsg(object: QueryVerifyPairingResponseAminoMsg): QueryVerifyPairingResponse {
    return QueryVerifyPairingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerifyPairingResponseProtoMsg): QueryVerifyPairingResponse {
    return QueryVerifyPairingResponse.decode(message.value);
  },
  toProto(message: QueryVerifyPairingResponse): Uint8Array {
    return QueryVerifyPairingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifyPairingResponse): QueryVerifyPairingResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingResponse",
      value: QueryVerifyPairingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUniquePaymentStorageClientProviderRequest(): QueryGetUniquePaymentStorageClientProviderRequest {
  return {
    index: ""
  };
}
export const QueryGetUniquePaymentStorageClientProviderRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest",
  encode(message: QueryGetUniquePaymentStorageClientProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUniquePaymentStorageClientProviderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUniquePaymentStorageClientProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetUniquePaymentStorageClientProviderRequest>): QueryGetUniquePaymentStorageClientProviderRequest {
    const message = createBaseQueryGetUniquePaymentStorageClientProviderRequest();
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryGetUniquePaymentStorageClientProviderRequestAmino): QueryGetUniquePaymentStorageClientProviderRequest {
    return {
      index: object.index
    };
  },
  toAmino(message: QueryGetUniquePaymentStorageClientProviderRequest): QueryGetUniquePaymentStorageClientProviderRequestAmino {
    const obj: any = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetUniquePaymentStorageClientProviderRequestAminoMsg): QueryGetUniquePaymentStorageClientProviderRequest {
    return QueryGetUniquePaymentStorageClientProviderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUniquePaymentStorageClientProviderRequestProtoMsg): QueryGetUniquePaymentStorageClientProviderRequest {
    return QueryGetUniquePaymentStorageClientProviderRequest.decode(message.value);
  },
  toProto(message: QueryGetUniquePaymentStorageClientProviderRequest): Uint8Array {
    return QueryGetUniquePaymentStorageClientProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUniquePaymentStorageClientProviderRequest): QueryGetUniquePaymentStorageClientProviderRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest",
      value: QueryGetUniquePaymentStorageClientProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUniquePaymentStorageClientProviderResponse(): QueryGetUniquePaymentStorageClientProviderResponse {
  return {
    uniquePaymentStorageClientProvider: UniquePaymentStorageClientProvider.fromPartial({})
  };
}
export const QueryGetUniquePaymentStorageClientProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse",
  encode(message: QueryGetUniquePaymentStorageClientProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uniquePaymentStorageClientProvider !== undefined) {
      UniquePaymentStorageClientProvider.encode(message.uniquePaymentStorageClientProvider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUniquePaymentStorageClientProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUniquePaymentStorageClientProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uniquePaymentStorageClientProvider = UniquePaymentStorageClientProvider.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetUniquePaymentStorageClientProviderResponse>): QueryGetUniquePaymentStorageClientProviderResponse {
    const message = createBaseQueryGetUniquePaymentStorageClientProviderResponse();
    message.uniquePaymentStorageClientProvider = object.uniquePaymentStorageClientProvider !== undefined && object.uniquePaymentStorageClientProvider !== null ? UniquePaymentStorageClientProvider.fromPartial(object.uniquePaymentStorageClientProvider) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUniquePaymentStorageClientProviderResponseAmino): QueryGetUniquePaymentStorageClientProviderResponse {
    return {
      uniquePaymentStorageClientProvider: object?.uniquePaymentStorageClientProvider ? UniquePaymentStorageClientProvider.fromAmino(object.uniquePaymentStorageClientProvider) : undefined
    };
  },
  toAmino(message: QueryGetUniquePaymentStorageClientProviderResponse): QueryGetUniquePaymentStorageClientProviderResponseAmino {
    const obj: any = {};
    obj.uniquePaymentStorageClientProvider = message.uniquePaymentStorageClientProvider ? UniquePaymentStorageClientProvider.toAmino(message.uniquePaymentStorageClientProvider) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUniquePaymentStorageClientProviderResponseAminoMsg): QueryGetUniquePaymentStorageClientProviderResponse {
    return QueryGetUniquePaymentStorageClientProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUniquePaymentStorageClientProviderResponseProtoMsg): QueryGetUniquePaymentStorageClientProviderResponse {
    return QueryGetUniquePaymentStorageClientProviderResponse.decode(message.value);
  },
  toProto(message: QueryGetUniquePaymentStorageClientProviderResponse): Uint8Array {
    return QueryGetUniquePaymentStorageClientProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUniquePaymentStorageClientProviderResponse): QueryGetUniquePaymentStorageClientProviderResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse",
      value: QueryGetUniquePaymentStorageClientProviderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUniquePaymentStorageClientProviderRequest(): QueryAllUniquePaymentStorageClientProviderRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllUniquePaymentStorageClientProviderRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest",
  encode(message: QueryAllUniquePaymentStorageClientProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUniquePaymentStorageClientProviderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUniquePaymentStorageClientProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllUniquePaymentStorageClientProviderRequest>): QueryAllUniquePaymentStorageClientProviderRequest {
    const message = createBaseQueryAllUniquePaymentStorageClientProviderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUniquePaymentStorageClientProviderRequestAmino): QueryAllUniquePaymentStorageClientProviderRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllUniquePaymentStorageClientProviderRequest): QueryAllUniquePaymentStorageClientProviderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUniquePaymentStorageClientProviderRequestAminoMsg): QueryAllUniquePaymentStorageClientProviderRequest {
    return QueryAllUniquePaymentStorageClientProviderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUniquePaymentStorageClientProviderRequestProtoMsg): QueryAllUniquePaymentStorageClientProviderRequest {
    return QueryAllUniquePaymentStorageClientProviderRequest.decode(message.value);
  },
  toProto(message: QueryAllUniquePaymentStorageClientProviderRequest): Uint8Array {
    return QueryAllUniquePaymentStorageClientProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUniquePaymentStorageClientProviderRequest): QueryAllUniquePaymentStorageClientProviderRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest",
      value: QueryAllUniquePaymentStorageClientProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUniquePaymentStorageClientProviderResponse(): QueryAllUniquePaymentStorageClientProviderResponse {
  return {
    uniquePaymentStorageClientProvider: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllUniquePaymentStorageClientProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse",
  encode(message: QueryAllUniquePaymentStorageClientProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.uniquePaymentStorageClientProvider) {
      UniquePaymentStorageClientProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUniquePaymentStorageClientProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUniquePaymentStorageClientProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uniquePaymentStorageClientProvider.push(UniquePaymentStorageClientProvider.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllUniquePaymentStorageClientProviderResponse>): QueryAllUniquePaymentStorageClientProviderResponse {
    const message = createBaseQueryAllUniquePaymentStorageClientProviderResponse();
    message.uniquePaymentStorageClientProvider = object.uniquePaymentStorageClientProvider?.map(e => UniquePaymentStorageClientProvider.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUniquePaymentStorageClientProviderResponseAmino): QueryAllUniquePaymentStorageClientProviderResponse {
    return {
      uniquePaymentStorageClientProvider: Array.isArray(object?.uniquePaymentStorageClientProvider) ? object.uniquePaymentStorageClientProvider.map((e: any) => UniquePaymentStorageClientProvider.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllUniquePaymentStorageClientProviderResponse): QueryAllUniquePaymentStorageClientProviderResponseAmino {
    const obj: any = {};
    if (message.uniquePaymentStorageClientProvider) {
      obj.uniquePaymentStorageClientProvider = message.uniquePaymentStorageClientProvider.map(e => e ? UniquePaymentStorageClientProvider.toAmino(e) : undefined);
    } else {
      obj.uniquePaymentStorageClientProvider = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUniquePaymentStorageClientProviderResponseAminoMsg): QueryAllUniquePaymentStorageClientProviderResponse {
    return QueryAllUniquePaymentStorageClientProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUniquePaymentStorageClientProviderResponseProtoMsg): QueryAllUniquePaymentStorageClientProviderResponse {
    return QueryAllUniquePaymentStorageClientProviderResponse.decode(message.value);
  },
  toProto(message: QueryAllUniquePaymentStorageClientProviderResponse): Uint8Array {
    return QueryAllUniquePaymentStorageClientProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUniquePaymentStorageClientProviderResponse): QueryAllUniquePaymentStorageClientProviderResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse",
      value: QueryAllUniquePaymentStorageClientProviderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProviderPaymentStorageRequest(): QueryGetProviderPaymentStorageRequest {
  return {
    index: ""
  };
}
export const QueryGetProviderPaymentStorageRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest",
  encode(message: QueryGetProviderPaymentStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProviderPaymentStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProviderPaymentStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetProviderPaymentStorageRequest>): QueryGetProviderPaymentStorageRequest {
    const message = createBaseQueryGetProviderPaymentStorageRequest();
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryGetProviderPaymentStorageRequestAmino): QueryGetProviderPaymentStorageRequest {
    return {
      index: object.index
    };
  },
  toAmino(message: QueryGetProviderPaymentStorageRequest): QueryGetProviderPaymentStorageRequestAmino {
    const obj: any = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetProviderPaymentStorageRequestAminoMsg): QueryGetProviderPaymentStorageRequest {
    return QueryGetProviderPaymentStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProviderPaymentStorageRequestProtoMsg): QueryGetProviderPaymentStorageRequest {
    return QueryGetProviderPaymentStorageRequest.decode(message.value);
  },
  toProto(message: QueryGetProviderPaymentStorageRequest): Uint8Array {
    return QueryGetProviderPaymentStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProviderPaymentStorageRequest): QueryGetProviderPaymentStorageRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest",
      value: QueryGetProviderPaymentStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProviderPaymentStorageResponse(): QueryGetProviderPaymentStorageResponse {
  return {
    providerPaymentStorage: ProviderPaymentStorage.fromPartial({})
  };
}
export const QueryGetProviderPaymentStorageResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse",
  encode(message: QueryGetProviderPaymentStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.providerPaymentStorage !== undefined) {
      ProviderPaymentStorage.encode(message.providerPaymentStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProviderPaymentStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProviderPaymentStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerPaymentStorage = ProviderPaymentStorage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetProviderPaymentStorageResponse>): QueryGetProviderPaymentStorageResponse {
    const message = createBaseQueryGetProviderPaymentStorageResponse();
    message.providerPaymentStorage = object.providerPaymentStorage !== undefined && object.providerPaymentStorage !== null ? ProviderPaymentStorage.fromPartial(object.providerPaymentStorage) : undefined;
    return message;
  },
  fromAmino(object: QueryGetProviderPaymentStorageResponseAmino): QueryGetProviderPaymentStorageResponse {
    return {
      providerPaymentStorage: object?.providerPaymentStorage ? ProviderPaymentStorage.fromAmino(object.providerPaymentStorage) : undefined
    };
  },
  toAmino(message: QueryGetProviderPaymentStorageResponse): QueryGetProviderPaymentStorageResponseAmino {
    const obj: any = {};
    obj.providerPaymentStorage = message.providerPaymentStorage ? ProviderPaymentStorage.toAmino(message.providerPaymentStorage) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProviderPaymentStorageResponseAminoMsg): QueryGetProviderPaymentStorageResponse {
    return QueryGetProviderPaymentStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProviderPaymentStorageResponseProtoMsg): QueryGetProviderPaymentStorageResponse {
    return QueryGetProviderPaymentStorageResponse.decode(message.value);
  },
  toProto(message: QueryGetProviderPaymentStorageResponse): Uint8Array {
    return QueryGetProviderPaymentStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProviderPaymentStorageResponse): QueryGetProviderPaymentStorageResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse",
      value: QueryGetProviderPaymentStorageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllProviderPaymentStorageRequest(): QueryAllProviderPaymentStorageRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllProviderPaymentStorageRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest",
  encode(message: QueryAllProviderPaymentStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllProviderPaymentStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProviderPaymentStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllProviderPaymentStorageRequest>): QueryAllProviderPaymentStorageRequest {
    const message = createBaseQueryAllProviderPaymentStorageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllProviderPaymentStorageRequestAmino): QueryAllProviderPaymentStorageRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllProviderPaymentStorageRequest): QueryAllProviderPaymentStorageRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllProviderPaymentStorageRequestAminoMsg): QueryAllProviderPaymentStorageRequest {
    return QueryAllProviderPaymentStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllProviderPaymentStorageRequestProtoMsg): QueryAllProviderPaymentStorageRequest {
    return QueryAllProviderPaymentStorageRequest.decode(message.value);
  },
  toProto(message: QueryAllProviderPaymentStorageRequest): Uint8Array {
    return QueryAllProviderPaymentStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllProviderPaymentStorageRequest): QueryAllProviderPaymentStorageRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest",
      value: QueryAllProviderPaymentStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllProviderPaymentStorageResponse(): QueryAllProviderPaymentStorageResponse {
  return {
    providerPaymentStorage: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllProviderPaymentStorageResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse",
  encode(message: QueryAllProviderPaymentStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providerPaymentStorage) {
      ProviderPaymentStorage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllProviderPaymentStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProviderPaymentStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerPaymentStorage.push(ProviderPaymentStorage.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllProviderPaymentStorageResponse>): QueryAllProviderPaymentStorageResponse {
    const message = createBaseQueryAllProviderPaymentStorageResponse();
    message.providerPaymentStorage = object.providerPaymentStorage?.map(e => ProviderPaymentStorage.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllProviderPaymentStorageResponseAmino): QueryAllProviderPaymentStorageResponse {
    return {
      providerPaymentStorage: Array.isArray(object?.providerPaymentStorage) ? object.providerPaymentStorage.map((e: any) => ProviderPaymentStorage.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllProviderPaymentStorageResponse): QueryAllProviderPaymentStorageResponseAmino {
    const obj: any = {};
    if (message.providerPaymentStorage) {
      obj.providerPaymentStorage = message.providerPaymentStorage.map(e => e ? ProviderPaymentStorage.toAmino(e) : undefined);
    } else {
      obj.providerPaymentStorage = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllProviderPaymentStorageResponseAminoMsg): QueryAllProviderPaymentStorageResponse {
    return QueryAllProviderPaymentStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllProviderPaymentStorageResponseProtoMsg): QueryAllProviderPaymentStorageResponse {
    return QueryAllProviderPaymentStorageResponse.decode(message.value);
  },
  toProto(message: QueryAllProviderPaymentStorageResponse): Uint8Array {
    return QueryAllProviderPaymentStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllProviderPaymentStorageResponse): QueryAllProviderPaymentStorageResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse",
      value: QueryAllProviderPaymentStorageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochPaymentsRequest(): QueryGetEpochPaymentsRequest {
  return {
    index: ""
  };
}
export const QueryGetEpochPaymentsRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryGetEpochPaymentsRequest",
  encode(message: QueryGetEpochPaymentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochPaymentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochPaymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetEpochPaymentsRequest>): QueryGetEpochPaymentsRequest {
    const message = createBaseQueryGetEpochPaymentsRequest();
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryGetEpochPaymentsRequestAmino): QueryGetEpochPaymentsRequest {
    return {
      index: object.index
    };
  },
  toAmino(message: QueryGetEpochPaymentsRequest): QueryGetEpochPaymentsRequestAmino {
    const obj: any = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochPaymentsRequestAminoMsg): QueryGetEpochPaymentsRequest {
    return QueryGetEpochPaymentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochPaymentsRequestProtoMsg): QueryGetEpochPaymentsRequest {
    return QueryGetEpochPaymentsRequest.decode(message.value);
  },
  toProto(message: QueryGetEpochPaymentsRequest): Uint8Array {
    return QueryGetEpochPaymentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochPaymentsRequest): QueryGetEpochPaymentsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetEpochPaymentsRequest",
      value: QueryGetEpochPaymentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochPaymentsResponse(): QueryGetEpochPaymentsResponse {
  return {
    epochPayments: EpochPayments.fromPartial({})
  };
}
export const QueryGetEpochPaymentsResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryGetEpochPaymentsResponse",
  encode(message: QueryGetEpochPaymentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochPayments !== undefined) {
      EpochPayments.encode(message.epochPayments, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochPaymentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochPaymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochPayments = EpochPayments.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetEpochPaymentsResponse>): QueryGetEpochPaymentsResponse {
    const message = createBaseQueryGetEpochPaymentsResponse();
    message.epochPayments = object.epochPayments !== undefined && object.epochPayments !== null ? EpochPayments.fromPartial(object.epochPayments) : undefined;
    return message;
  },
  fromAmino(object: QueryGetEpochPaymentsResponseAmino): QueryGetEpochPaymentsResponse {
    return {
      epochPayments: object?.epochPayments ? EpochPayments.fromAmino(object.epochPayments) : undefined
    };
  },
  toAmino(message: QueryGetEpochPaymentsResponse): QueryGetEpochPaymentsResponseAmino {
    const obj: any = {};
    obj.epochPayments = message.epochPayments ? EpochPayments.toAmino(message.epochPayments) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochPaymentsResponseAminoMsg): QueryGetEpochPaymentsResponse {
    return QueryGetEpochPaymentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochPaymentsResponseProtoMsg): QueryGetEpochPaymentsResponse {
    return QueryGetEpochPaymentsResponse.decode(message.value);
  },
  toProto(message: QueryGetEpochPaymentsResponse): Uint8Array {
    return QueryGetEpochPaymentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochPaymentsResponse): QueryGetEpochPaymentsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetEpochPaymentsResponse",
      value: QueryGetEpochPaymentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochPaymentsRequest(): QueryAllEpochPaymentsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllEpochPaymentsRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryAllEpochPaymentsRequest",
  encode(message: QueryAllEpochPaymentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEpochPaymentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochPaymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllEpochPaymentsRequest>): QueryAllEpochPaymentsRequest {
    const message = createBaseQueryAllEpochPaymentsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllEpochPaymentsRequestAmino): QueryAllEpochPaymentsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllEpochPaymentsRequest): QueryAllEpochPaymentsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEpochPaymentsRequestAminoMsg): QueryAllEpochPaymentsRequest {
    return QueryAllEpochPaymentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllEpochPaymentsRequestProtoMsg): QueryAllEpochPaymentsRequest {
    return QueryAllEpochPaymentsRequest.decode(message.value);
  },
  toProto(message: QueryAllEpochPaymentsRequest): Uint8Array {
    return QueryAllEpochPaymentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEpochPaymentsRequest): QueryAllEpochPaymentsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllEpochPaymentsRequest",
      value: QueryAllEpochPaymentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochPaymentsResponse(): QueryAllEpochPaymentsResponse {
  return {
    epochPayments: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllEpochPaymentsResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryAllEpochPaymentsResponse",
  encode(message: QueryAllEpochPaymentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochPayments) {
      EpochPayments.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEpochPaymentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochPaymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochPayments.push(EpochPayments.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllEpochPaymentsResponse>): QueryAllEpochPaymentsResponse {
    const message = createBaseQueryAllEpochPaymentsResponse();
    message.epochPayments = object.epochPayments?.map(e => EpochPayments.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllEpochPaymentsResponseAmino): QueryAllEpochPaymentsResponse {
    return {
      epochPayments: Array.isArray(object?.epochPayments) ? object.epochPayments.map((e: any) => EpochPayments.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllEpochPaymentsResponse): QueryAllEpochPaymentsResponseAmino {
    const obj: any = {};
    if (message.epochPayments) {
      obj.epochPayments = message.epochPayments.map(e => e ? EpochPayments.toAmino(e) : undefined);
    } else {
      obj.epochPayments = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEpochPaymentsResponseAminoMsg): QueryAllEpochPaymentsResponse {
    return QueryAllEpochPaymentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllEpochPaymentsResponseProtoMsg): QueryAllEpochPaymentsResponse {
    return QueryAllEpochPaymentsResponse.decode(message.value);
  },
  toProto(message: QueryAllEpochPaymentsResponse): Uint8Array {
    return QueryAllEpochPaymentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEpochPaymentsResponse): QueryAllEpochPaymentsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllEpochPaymentsResponse",
      value: QueryAllEpochPaymentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserEntryRequest(): QueryUserEntryRequest {
  return {
    address: "",
    chainID: "",
    block: BigInt(0)
  };
}
export const QueryUserEntryRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryUserEntryRequest",
  encode(message: QueryUserEntryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(24).uint64(message.block);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserEntryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.block = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserEntryRequest>): QueryUserEntryRequest {
    const message = createBaseQueryUserEntryRequest();
    message.address = object.address ?? "";
    message.chainID = object.chainID ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryUserEntryRequestAmino): QueryUserEntryRequest {
    return {
      address: object.address,
      chainID: object.chainID,
      block: BigInt(object.block)
    };
  },
  toAmino(message: QueryUserEntryRequest): QueryUserEntryRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.chainID = message.chainID;
    obj.block = message.block ? message.block.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserEntryRequestAminoMsg): QueryUserEntryRequest {
    return QueryUserEntryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserEntryRequestProtoMsg): QueryUserEntryRequest {
    return QueryUserEntryRequest.decode(message.value);
  },
  toProto(message: QueryUserEntryRequest): Uint8Array {
    return QueryUserEntryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserEntryRequest): QueryUserEntryRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryUserEntryRequest",
      value: QueryUserEntryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserEntryResponse(): QueryUserEntryResponse {
  return {
    consumer: StakeEntry.fromPartial({}),
    maxCU: BigInt(0)
  };
}
export const QueryUserEntryResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryUserEntryResponse",
  encode(message: QueryUserEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consumer !== undefined) {
      StakeEntry.encode(message.consumer, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxCU !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxCU);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = StakeEntry.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxCU = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserEntryResponse>): QueryUserEntryResponse {
    const message = createBaseQueryUserEntryResponse();
    message.consumer = object.consumer !== undefined && object.consumer !== null ? StakeEntry.fromPartial(object.consumer) : undefined;
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? BigInt(object.maxCU.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryUserEntryResponseAmino): QueryUserEntryResponse {
    return {
      consumer: object?.consumer ? StakeEntry.fromAmino(object.consumer) : undefined,
      maxCU: BigInt(object.maxCU)
    };
  },
  toAmino(message: QueryUserEntryResponse): QueryUserEntryResponseAmino {
    const obj: any = {};
    obj.consumer = message.consumer ? StakeEntry.toAmino(message.consumer) : undefined;
    obj.maxCU = message.maxCU ? message.maxCU.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserEntryResponseAminoMsg): QueryUserEntryResponse {
    return QueryUserEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserEntryResponseProtoMsg): QueryUserEntryResponse {
    return QueryUserEntryResponse.decode(message.value);
  },
  toProto(message: QueryUserEntryResponse): Uint8Array {
    return QueryUserEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserEntryResponse): QueryUserEntryResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryUserEntryResponse",
      value: QueryUserEntryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStaticProvidersListRequest(): QueryStaticProvidersListRequest {
  return {
    chainID: ""
  };
}
export const QueryStaticProvidersListRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListRequest",
  encode(message: QueryStaticProvidersListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStaticProvidersListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStaticProvidersListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStaticProvidersListRequest>): QueryStaticProvidersListRequest {
    const message = createBaseQueryStaticProvidersListRequest();
    message.chainID = object.chainID ?? "";
    return message;
  },
  fromAmino(object: QueryStaticProvidersListRequestAmino): QueryStaticProvidersListRequest {
    return {
      chainID: object.chainID
    };
  },
  toAmino(message: QueryStaticProvidersListRequest): QueryStaticProvidersListRequestAmino {
    const obj: any = {};
    obj.chainID = message.chainID;
    return obj;
  },
  fromAminoMsg(object: QueryStaticProvidersListRequestAminoMsg): QueryStaticProvidersListRequest {
    return QueryStaticProvidersListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStaticProvidersListRequestProtoMsg): QueryStaticProvidersListRequest {
    return QueryStaticProvidersListRequest.decode(message.value);
  },
  toProto(message: QueryStaticProvidersListRequest): Uint8Array {
    return QueryStaticProvidersListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStaticProvidersListRequest): QueryStaticProvidersListRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListRequest",
      value: QueryStaticProvidersListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStaticProvidersListResponse(): QueryStaticProvidersListResponse {
  return {
    providers: []
  };
}
export const QueryStaticProvidersListResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListResponse",
  encode(message: QueryStaticProvidersListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStaticProvidersListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStaticProvidersListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStaticProvidersListResponse>): QueryStaticProvidersListResponse {
    const message = createBaseQueryStaticProvidersListResponse();
    message.providers = object.providers?.map(e => StakeEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryStaticProvidersListResponseAmino): QueryStaticProvidersListResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => StakeEntry.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryStaticProvidersListResponse): QueryStaticProvidersListResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryStaticProvidersListResponseAminoMsg): QueryStaticProvidersListResponse {
    return QueryStaticProvidersListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStaticProvidersListResponseProtoMsg): QueryStaticProvidersListResponse {
    return QueryStaticProvidersListResponse.decode(message.value);
  },
  toProto(message: QueryStaticProvidersListResponse): Uint8Array {
    return QueryStaticProvidersListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStaticProvidersListResponse): QueryStaticProvidersListResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListResponse",
      value: QueryStaticProvidersListResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountInfoResponse(): QueryAccountInfoResponse {
  return {
    provider: [],
    frozen: [],
    consumer: [],
    unstaked: [],
    subscription: undefined,
    project: undefined
  };
}
export const QueryAccountInfoResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryAccountInfoResponse",
  encode(message: QueryAccountInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.provider) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.frozen) {
      StakeEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.consumer) {
      StakeEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.unstaked) {
      StakeEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.subscription !== undefined) {
      Subscription.encode(message.subscription, writer.uint32(42).fork()).ldelim();
    }
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.frozen.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.consumer.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 4:
          message.unstaked.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 5:
          message.subscription = Subscription.decode(reader, reader.uint32());
          break;
        case 6:
          message.project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountInfoResponse>): QueryAccountInfoResponse {
    const message = createBaseQueryAccountInfoResponse();
    message.provider = object.provider?.map(e => StakeEntry.fromPartial(e)) || [];
    message.frozen = object.frozen?.map(e => StakeEntry.fromPartial(e)) || [];
    message.consumer = object.consumer?.map(e => StakeEntry.fromPartial(e)) || [];
    message.unstaked = object.unstaked?.map(e => StakeEntry.fromPartial(e)) || [];
    message.subscription = object.subscription !== undefined && object.subscription !== null ? Subscription.fromPartial(object.subscription) : undefined;
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountInfoResponseAmino): QueryAccountInfoResponse {
    return {
      provider: Array.isArray(object?.provider) ? object.provider.map((e: any) => StakeEntry.fromAmino(e)) : [],
      frozen: Array.isArray(object?.frozen) ? object.frozen.map((e: any) => StakeEntry.fromAmino(e)) : [],
      consumer: Array.isArray(object?.consumer) ? object.consumer.map((e: any) => StakeEntry.fromAmino(e)) : [],
      unstaked: Array.isArray(object?.unstaked) ? object.unstaked.map((e: any) => StakeEntry.fromAmino(e)) : [],
      subscription: object?.subscription ? Subscription.fromAmino(object.subscription) : undefined,
      project: object?.project ? Project.fromAmino(object.project) : undefined
    };
  },
  toAmino(message: QueryAccountInfoResponse): QueryAccountInfoResponseAmino {
    const obj: any = {};
    if (message.provider) {
      obj.provider = message.provider.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.provider = [];
    }
    if (message.frozen) {
      obj.frozen = message.frozen.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.frozen = [];
    }
    if (message.consumer) {
      obj.consumer = message.consumer.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.consumer = [];
    }
    if (message.unstaked) {
      obj.unstaked = message.unstaked.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.unstaked = [];
    }
    obj.subscription = message.subscription ? Subscription.toAmino(message.subscription) : undefined;
    obj.project = message.project ? Project.toAmino(message.project) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountInfoResponseAminoMsg): QueryAccountInfoResponse {
    return QueryAccountInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountInfoResponseProtoMsg): QueryAccountInfoResponse {
    return QueryAccountInfoResponse.decode(message.value);
  },
  toProto(message: QueryAccountInfoResponse): Uint8Array {
    return QueryAccountInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountInfoResponse): QueryAccountInfoResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAccountInfoResponse",
      value: QueryAccountInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEffectivePolicyRequest(): QueryEffectivePolicyRequest {
  return {
    consumer: "",
    specID: ""
  };
}
export const QueryEffectivePolicyRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyRequest",
  encode(message: QueryEffectivePolicyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    if (message.specID !== "") {
      writer.uint32(18).string(message.specID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEffectivePolicyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEffectivePolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        case 2:
          message.specID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEffectivePolicyRequest>): QueryEffectivePolicyRequest {
    const message = createBaseQueryEffectivePolicyRequest();
    message.consumer = object.consumer ?? "";
    message.specID = object.specID ?? "";
    return message;
  },
  fromAmino(object: QueryEffectivePolicyRequestAmino): QueryEffectivePolicyRequest {
    return {
      consumer: object.consumer,
      specID: object.specID
    };
  },
  toAmino(message: QueryEffectivePolicyRequest): QueryEffectivePolicyRequestAmino {
    const obj: any = {};
    obj.consumer = message.consumer;
    obj.specID = message.specID;
    return obj;
  },
  fromAminoMsg(object: QueryEffectivePolicyRequestAminoMsg): QueryEffectivePolicyRequest {
    return QueryEffectivePolicyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEffectivePolicyRequestProtoMsg): QueryEffectivePolicyRequest {
    return QueryEffectivePolicyRequest.decode(message.value);
  },
  toProto(message: QueryEffectivePolicyRequest): Uint8Array {
    return QueryEffectivePolicyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEffectivePolicyRequest): QueryEffectivePolicyRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyRequest",
      value: QueryEffectivePolicyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEffectivePolicyResponse(): QueryEffectivePolicyResponse {
  return {
    policy: Policy.fromPartial({})
  };
}
export const QueryEffectivePolicyResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyResponse",
  encode(message: QueryEffectivePolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEffectivePolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEffectivePolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEffectivePolicyResponse>): QueryEffectivePolicyResponse {
    const message = createBaseQueryEffectivePolicyResponse();
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object: QueryEffectivePolicyResponseAmino): QueryEffectivePolicyResponse {
    return {
      policy: object?.policy ? Policy.fromAmino(object.policy) : undefined
    };
  },
  toAmino(message: QueryEffectivePolicyResponse): QueryEffectivePolicyResponseAmino {
    const obj: any = {};
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEffectivePolicyResponseAminoMsg): QueryEffectivePolicyResponse {
    return QueryEffectivePolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEffectivePolicyResponseProtoMsg): QueryEffectivePolicyResponse {
    return QueryEffectivePolicyResponse.decode(message.value);
  },
  toProto(message: QueryEffectivePolicyResponse): Uint8Array {
    return QueryEffectivePolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEffectivePolicyResponse): QueryEffectivePolicyResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyResponse",
      value: QueryEffectivePolicyResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySdkPairingResponse(): QuerySdkPairingResponse {
  return {
    pairing: QueryGetPairingResponse.fromPartial({}),
    maxCu: BigInt(0),
    spec: Spec.fromPartial({})
  };
}
export const QuerySdkPairingResponse = {
  typeUrl: "/lavanet.lava.pairing.QuerySdkPairingResponse",
  encode(message: QuerySdkPairingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairing !== undefined) {
      QueryGetPairingResponse.encode(message.pairing, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxCu !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxCu);
    }
    if (message.spec !== undefined) {
      Spec.encode(message.spec, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySdkPairingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySdkPairingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairing = QueryGetPairingResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxCu = reader.uint64();
          break;
        case 3:
          message.spec = Spec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySdkPairingResponse>): QuerySdkPairingResponse {
    const message = createBaseQuerySdkPairingResponse();
    message.pairing = object.pairing !== undefined && object.pairing !== null ? QueryGetPairingResponse.fromPartial(object.pairing) : undefined;
    message.maxCu = object.maxCu !== undefined && object.maxCu !== null ? BigInt(object.maxCu.toString()) : BigInt(0);
    message.spec = object.spec !== undefined && object.spec !== null ? Spec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: QuerySdkPairingResponseAmino): QuerySdkPairingResponse {
    return {
      pairing: object?.pairing ? QueryGetPairingResponse.fromAmino(object.pairing) : undefined,
      maxCu: BigInt(object.max_cu),
      spec: object?.spec ? Spec.fromAmino(object.spec) : undefined
    };
  },
  toAmino(message: QuerySdkPairingResponse): QuerySdkPairingResponseAmino {
    const obj: any = {};
    obj.pairing = message.pairing ? QueryGetPairingResponse.toAmino(message.pairing) : undefined;
    obj.max_cu = message.maxCu ? message.maxCu.toString() : undefined;
    obj.spec = message.spec ? Spec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySdkPairingResponseAminoMsg): QuerySdkPairingResponse {
    return QuerySdkPairingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySdkPairingResponseProtoMsg): QuerySdkPairingResponse {
    return QuerySdkPairingResponse.decode(message.value);
  },
  toProto(message: QuerySdkPairingResponse): Uint8Array {
    return QuerySdkPairingResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySdkPairingResponse): QuerySdkPairingResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QuerySdkPairingResponse",
      value: QuerySdkPairingResponse.encode(message).finish()
    };
  }
};