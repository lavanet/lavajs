import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { StakeEntry } from "../epochstorage/stake_entry";
import { UniquePaymentStorageClientProvider } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage } from "./provider_payment_storage";
import { EpochPayments } from "./epoch_payments";
import { Subscription } from "../subscription/subscription";
import { Project } from "../projects/project";
import { Policy } from "../plans/policy";
import { Spec } from "../spec/spec";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryParamsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromPartial(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProvidersRequest() {
  return {
    chainID: "",
    showFrozen: false
  };
}
export const QueryProvidersRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.showFrozen === true) {
      writer.uint32(16).bool(message.showFrozen);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$chainID, _object$showFrozen;
    const message = createBaseQueryProvidersRequest();
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.showFrozen = (_object$showFrozen = object.showFrozen) !== null && _object$showFrozen !== void 0 ? _object$showFrozen : false;
    return message;
  },
  fromAmino(object) {
    return {
      chainID: object.chainID,
      showFrozen: object.showFrozen
    };
  },
  toAmino(message) {
    const obj = {};
    obj.chainID = message.chainID;
    obj.showFrozen = message.showFrozen;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProvidersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryProvidersRequest.decode(message.value);
  },
  toProto(message) {
    return QueryProvidersRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProvidersRequest",
      value: QueryProvidersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProvidersResponse() {
  return {
    stakeEntry: [],
    output: ""
  };
}
export const QueryProvidersResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.stakeEntry) {
      StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.output !== "") {
      writer.uint32(18).string(message.output);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$stakeEntry, _object$output;
    const message = createBaseQueryProvidersResponse();
    message.stakeEntry = ((_object$stakeEntry = object.stakeEntry) === null || _object$stakeEntry === void 0 ? void 0 : _object$stakeEntry.map(e => StakeEntry.fromPartial(e))) || [];
    message.output = (_object$output = object.output) !== null && _object$output !== void 0 ? _object$output : "";
    return message;
  },
  fromAmino(object) {
    return {
      stakeEntry: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeEntry) ? object.stakeEntry.map(e => StakeEntry.fromAmino(e)) : [],
      output: object.output
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.stakeEntry) {
      obj.stakeEntry = message.stakeEntry.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.stakeEntry = [];
    }
    obj.output = message.output;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProvidersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryProvidersResponse.decode(message.value);
  },
  toProto(message) {
    return QueryProvidersResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProvidersResponse",
      value: QueryProvidersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPairingRequest() {
  return {
    chainID: "",
    client: ""
  };
}
export const QueryGetPairingRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryGetPairingRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.client !== "") {
      writer.uint32(18).string(message.client);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$chainID2, _object$client;
    const message = createBaseQueryGetPairingRequest();
    message.chainID = (_object$chainID2 = object.chainID) !== null && _object$chainID2 !== void 0 ? _object$chainID2 : "";
    message.client = (_object$client = object.client) !== null && _object$client !== void 0 ? _object$client : "";
    return message;
  },
  fromAmino(object) {
    return {
      chainID: object.chainID,
      client: object.client
    };
  },
  toAmino(message) {
    const obj = {};
    obj.chainID = message.chainID;
    obj.client = message.client;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetPairingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetPairingRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetPairingRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetPairingRequest",
      value: QueryGetPairingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPairingResponse() {
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.providers) {
      StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
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
  decode(input, length) {
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
  fromPartial(object) {
    var _object$providers;
    const message = createBaseQueryGetPairingResponse();
    message.providers = ((_object$providers = object.providers) === null || _object$providers === void 0 ? void 0 : _object$providers.map(e => StakeEntry.fromPartial(e))) || [];
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    message.timeLeftToNextPairing = object.timeLeftToNextPairing !== undefined && object.timeLeftToNextPairing !== null ? BigInt(object.timeLeftToNextPairing.toString()) : BigInt(0);
    message.specLastUpdatedBlock = object.specLastUpdatedBlock !== undefined && object.specLastUpdatedBlock !== null ? BigInt(object.specLastUpdatedBlock.toString()) : BigInt(0);
    message.blockOfNextPairing = object.blockOfNextPairing !== undefined && object.blockOfNextPairing !== null ? BigInt(object.blockOfNextPairing.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      providers: Array.isArray(object === null || object === void 0 ? void 0 : object.providers) ? object.providers.map(e => StakeEntry.fromAmino(e)) : [],
      currentEpoch: BigInt(object.current_epoch),
      timeLeftToNextPairing: BigInt(object.time_left_to_next_pairing),
      specLastUpdatedBlock: BigInt(object.spec_last_updated_block),
      blockOfNextPairing: BigInt(object.block_of_next_pairing)
    };
  },
  toAmino(message) {
    const obj = {};
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
  fromAminoMsg(object) {
    return QueryGetPairingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetPairingResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetPairingResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetPairingResponse",
      value: QueryGetPairingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVerifyPairingRequest() {
  return {
    chainID: "",
    client: "",
    provider: "",
    block: BigInt(0)
  };
}
export const QueryVerifyPairingRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingRequest",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
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
  fromPartial(object) {
    var _object$chainID3, _object$client2, _object$provider;
    const message = createBaseQueryVerifyPairingRequest();
    message.chainID = (_object$chainID3 = object.chainID) !== null && _object$chainID3 !== void 0 ? _object$chainID3 : "";
    message.client = (_object$client2 = object.client) !== null && _object$client2 !== void 0 ? _object$client2 : "";
    message.provider = (_object$provider = object.provider) !== null && _object$provider !== void 0 ? _object$provider : "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      chainID: object.chainID,
      client: object.client,
      provider: object.provider,
      block: BigInt(object.block)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.chainID = message.chainID;
    obj.client = message.client;
    obj.provider = message.provider;
    obj.block = message.block ? message.block.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVerifyPairingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryVerifyPairingRequest.decode(message.value);
  },
  toProto(message) {
    return QueryVerifyPairingRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingRequest",
      value: QueryVerifyPairingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVerifyPairingResponse() {
  return {
    valid: false,
    pairedProviders: BigInt(0),
    cuPerEpoch: BigInt(0),
    projectId: ""
  };
}
export const QueryVerifyPairingResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingResponse",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
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
  fromPartial(object) {
    var _object$valid, _object$projectId;
    const message = createBaseQueryVerifyPairingResponse();
    message.valid = (_object$valid = object.valid) !== null && _object$valid !== void 0 ? _object$valid : false;
    message.pairedProviders = object.pairedProviders !== undefined && object.pairedProviders !== null ? BigInt(object.pairedProviders.toString()) : BigInt(0);
    message.cuPerEpoch = object.cuPerEpoch !== undefined && object.cuPerEpoch !== null ? BigInt(object.cuPerEpoch.toString()) : BigInt(0);
    message.projectId = (_object$projectId = object.projectId) !== null && _object$projectId !== void 0 ? _object$projectId : "";
    return message;
  },
  fromAmino(object) {
    return {
      valid: object.valid,
      pairedProviders: BigInt(object.paired_providers),
      cuPerEpoch: BigInt(object.cu_per_epoch),
      projectId: object.project_id
    };
  },
  toAmino(message) {
    const obj = {};
    obj.valid = message.valid;
    obj.paired_providers = message.pairedProviders ? message.pairedProviders.toString() : undefined;
    obj.cu_per_epoch = message.cuPerEpoch ? message.cuPerEpoch.toString() : undefined;
    obj.project_id = message.projectId;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVerifyPairingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryVerifyPairingResponse.decode(message.value);
  },
  toProto(message) {
    return QueryVerifyPairingResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingResponse",
      value: QueryVerifyPairingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUniquePaymentStorageClientProviderRequest() {
  return {
    index: ""
  };
}
export const QueryGetUniquePaymentStorageClientProviderRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$index;
    const message = createBaseQueryGetUniquePaymentStorageClientProviderRequest();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetUniquePaymentStorageClientProviderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetUniquePaymentStorageClientProviderRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetUniquePaymentStorageClientProviderRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderRequest",
      value: QueryGetUniquePaymentStorageClientProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUniquePaymentStorageClientProviderResponse() {
  return {
    uniquePaymentStorageClientProvider: UniquePaymentStorageClientProvider.fromPartial({})
  };
}
export const QueryGetUniquePaymentStorageClientProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.uniquePaymentStorageClientProvider !== undefined) {
      UniquePaymentStorageClientProvider.encode(message.uniquePaymentStorageClientProvider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryGetUniquePaymentStorageClientProviderResponse();
    message.uniquePaymentStorageClientProvider = object.uniquePaymentStorageClientProvider !== undefined && object.uniquePaymentStorageClientProvider !== null ? UniquePaymentStorageClientProvider.fromPartial(object.uniquePaymentStorageClientProvider) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      uniquePaymentStorageClientProvider: object !== null && object !== void 0 && object.uniquePaymentStorageClientProvider ? UniquePaymentStorageClientProvider.fromAmino(object.uniquePaymentStorageClientProvider) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.uniquePaymentStorageClientProvider = message.uniquePaymentStorageClientProvider ? UniquePaymentStorageClientProvider.toAmino(message.uniquePaymentStorageClientProvider) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetUniquePaymentStorageClientProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetUniquePaymentStorageClientProviderResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetUniquePaymentStorageClientProviderResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetUniquePaymentStorageClientProviderResponse",
      value: QueryGetUniquePaymentStorageClientProviderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUniquePaymentStorageClientProviderRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllUniquePaymentStorageClientProviderRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryAllUniquePaymentStorageClientProviderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllUniquePaymentStorageClientProviderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllUniquePaymentStorageClientProviderRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllUniquePaymentStorageClientProviderRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderRequest",
      value: QueryAllUniquePaymentStorageClientProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUniquePaymentStorageClientProviderResponse() {
  return {
    uniquePaymentStorageClientProvider: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllUniquePaymentStorageClientProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.uniquePaymentStorageClientProvider) {
      UniquePaymentStorageClientProvider.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$uniquePayment;
    const message = createBaseQueryAllUniquePaymentStorageClientProviderResponse();
    message.uniquePaymentStorageClientProvider = ((_object$uniquePayment = object.uniquePaymentStorageClientProvider) === null || _object$uniquePayment === void 0 ? void 0 : _object$uniquePayment.map(e => UniquePaymentStorageClientProvider.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      uniquePaymentStorageClientProvider: Array.isArray(object === null || object === void 0 ? void 0 : object.uniquePaymentStorageClientProvider) ? object.uniquePaymentStorageClientProvider.map(e => UniquePaymentStorageClientProvider.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.uniquePaymentStorageClientProvider) {
      obj.uniquePaymentStorageClientProvider = message.uniquePaymentStorageClientProvider.map(e => e ? UniquePaymentStorageClientProvider.toAmino(e) : undefined);
    } else {
      obj.uniquePaymentStorageClientProvider = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllUniquePaymentStorageClientProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllUniquePaymentStorageClientProviderResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllUniquePaymentStorageClientProviderResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllUniquePaymentStorageClientProviderResponse",
      value: QueryAllUniquePaymentStorageClientProviderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProviderPaymentStorageRequest() {
  return {
    index: ""
  };
}
export const QueryGetProviderPaymentStorageRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$index2;
    const message = createBaseQueryGetProviderPaymentStorageRequest();
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : "";
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetProviderPaymentStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetProviderPaymentStorageRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetProviderPaymentStorageRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetProviderPaymentStorageRequest",
      value: QueryGetProviderPaymentStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProviderPaymentStorageResponse() {
  return {
    providerPaymentStorage: ProviderPaymentStorage.fromPartial({})
  };
}
export const QueryGetProviderPaymentStorageResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.providerPaymentStorage !== undefined) {
      ProviderPaymentStorage.encode(message.providerPaymentStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryGetProviderPaymentStorageResponse();
    message.providerPaymentStorage = object.providerPaymentStorage !== undefined && object.providerPaymentStorage !== null ? ProviderPaymentStorage.fromPartial(object.providerPaymentStorage) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      providerPaymentStorage: object !== null && object !== void 0 && object.providerPaymentStorage ? ProviderPaymentStorage.fromAmino(object.providerPaymentStorage) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.providerPaymentStorage = message.providerPaymentStorage ? ProviderPaymentStorage.toAmino(message.providerPaymentStorage) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetProviderPaymentStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetProviderPaymentStorageResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetProviderPaymentStorageResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetProviderPaymentStorageResponse",
      value: QueryGetProviderPaymentStorageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllProviderPaymentStorageRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllProviderPaymentStorageRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryAllProviderPaymentStorageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllProviderPaymentStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllProviderPaymentStorageRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllProviderPaymentStorageRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllProviderPaymentStorageRequest",
      value: QueryAllProviderPaymentStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllProviderPaymentStorageResponse() {
  return {
    providerPaymentStorage: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllProviderPaymentStorageResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.providerPaymentStorage) {
      ProviderPaymentStorage.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$providerPayme;
    const message = createBaseQueryAllProviderPaymentStorageResponse();
    message.providerPaymentStorage = ((_object$providerPayme = object.providerPaymentStorage) === null || _object$providerPayme === void 0 ? void 0 : _object$providerPayme.map(e => ProviderPaymentStorage.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      providerPaymentStorage: Array.isArray(object === null || object === void 0 ? void 0 : object.providerPaymentStorage) ? object.providerPaymentStorage.map(e => ProviderPaymentStorage.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.providerPaymentStorage) {
      obj.providerPaymentStorage = message.providerPaymentStorage.map(e => e ? ProviderPaymentStorage.toAmino(e) : undefined);
    } else {
      obj.providerPaymentStorage = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllProviderPaymentStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllProviderPaymentStorageResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllProviderPaymentStorageResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllProviderPaymentStorageResponse",
      value: QueryAllProviderPaymentStorageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochPaymentsRequest() {
  return {
    index: ""
  };
}
export const QueryGetEpochPaymentsRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryGetEpochPaymentsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$index3;
    const message = createBaseQueryGetEpochPaymentsRequest();
    message.index = (_object$index3 = object.index) !== null && _object$index3 !== void 0 ? _object$index3 : "";
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetEpochPaymentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetEpochPaymentsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetEpochPaymentsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetEpochPaymentsRequest",
      value: QueryGetEpochPaymentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochPaymentsResponse() {
  return {
    epochPayments: EpochPayments.fromPartial({})
  };
}
export const QueryGetEpochPaymentsResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryGetEpochPaymentsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.epochPayments !== undefined) {
      EpochPayments.encode(message.epochPayments, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryGetEpochPaymentsResponse();
    message.epochPayments = object.epochPayments !== undefined && object.epochPayments !== null ? EpochPayments.fromPartial(object.epochPayments) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      epochPayments: object !== null && object !== void 0 && object.epochPayments ? EpochPayments.fromAmino(object.epochPayments) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.epochPayments = message.epochPayments ? EpochPayments.toAmino(message.epochPayments) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetEpochPaymentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetEpochPaymentsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetEpochPaymentsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetEpochPaymentsResponse",
      value: QueryGetEpochPaymentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochPaymentsRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllEpochPaymentsRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryAllEpochPaymentsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryAllEpochPaymentsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllEpochPaymentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllEpochPaymentsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllEpochPaymentsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllEpochPaymentsRequest",
      value: QueryAllEpochPaymentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochPaymentsResponse() {
  return {
    epochPayments: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllEpochPaymentsResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryAllEpochPaymentsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.epochPayments) {
      EpochPayments.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$epochPayments;
    const message = createBaseQueryAllEpochPaymentsResponse();
    message.epochPayments = ((_object$epochPayments = object.epochPayments) === null || _object$epochPayments === void 0 ? void 0 : _object$epochPayments.map(e => EpochPayments.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      epochPayments: Array.isArray(object === null || object === void 0 ? void 0 : object.epochPayments) ? object.epochPayments.map(e => EpochPayments.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.epochPayments) {
      obj.epochPayments = message.epochPayments.map(e => e ? EpochPayments.toAmino(e) : undefined);
    } else {
      obj.epochPayments = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllEpochPaymentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllEpochPaymentsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllEpochPaymentsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAllEpochPaymentsResponse",
      value: QueryAllEpochPaymentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserEntryRequest() {
  return {
    address: "",
    chainID: "",
    block: BigInt(0)
  };
}
export const QueryUserEntryRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryUserEntryRequest",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
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
  fromPartial(object) {
    var _object$address, _object$chainID4;
    const message = createBaseQueryUserEntryRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.chainID = (_object$chainID4 = object.chainID) !== null && _object$chainID4 !== void 0 ? _object$chainID4 : "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      address: object.address,
      chainID: object.chainID,
      block: BigInt(object.block)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address;
    obj.chainID = message.chainID;
    obj.block = message.block ? message.block.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUserEntryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUserEntryRequest.decode(message.value);
  },
  toProto(message) {
    return QueryUserEntryRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryUserEntryRequest",
      value: QueryUserEntryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserEntryResponse() {
  return {
    consumer: StakeEntry.fromPartial({}),
    maxCU: BigInt(0)
  };
}
export const QueryUserEntryResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryUserEntryResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.consumer !== undefined) {
      StakeEntry.encode(message.consumer, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxCU !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxCU);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryUserEntryResponse();
    message.consumer = object.consumer !== undefined && object.consumer !== null ? StakeEntry.fromPartial(object.consumer) : undefined;
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? BigInt(object.maxCU.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      consumer: object !== null && object !== void 0 && object.consumer ? StakeEntry.fromAmino(object.consumer) : undefined,
      maxCU: BigInt(object.maxCU)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.consumer = message.consumer ? StakeEntry.toAmino(message.consumer) : undefined;
    obj.maxCU = message.maxCU ? message.maxCU.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryUserEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryUserEntryResponse.decode(message.value);
  },
  toProto(message) {
    return QueryUserEntryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryUserEntryResponse",
      value: QueryUserEntryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStaticProvidersListRequest() {
  return {
    chainID: ""
  };
}
export const QueryStaticProvidersListRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$chainID5;
    const message = createBaseQueryStaticProvidersListRequest();
    message.chainID = (_object$chainID5 = object.chainID) !== null && _object$chainID5 !== void 0 ? _object$chainID5 : "";
    return message;
  },
  fromAmino(object) {
    return {
      chainID: object.chainID
    };
  },
  toAmino(message) {
    const obj = {};
    obj.chainID = message.chainID;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryStaticProvidersListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryStaticProvidersListRequest.decode(message.value);
  },
  toProto(message) {
    return QueryStaticProvidersListRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListRequest",
      value: QueryStaticProvidersListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStaticProvidersListResponse() {
  return {
    providers: []
  };
}
export const QueryStaticProvidersListResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.providers) {
      StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$providers2;
    const message = createBaseQueryStaticProvidersListResponse();
    message.providers = ((_object$providers2 = object.providers) === null || _object$providers2 === void 0 ? void 0 : _object$providers2.map(e => StakeEntry.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      providers: Array.isArray(object === null || object === void 0 ? void 0 : object.providers) ? object.providers.map(e => StakeEntry.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return QueryStaticProvidersListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryStaticProvidersListResponse.decode(message.value);
  },
  toProto(message) {
    return QueryStaticProvidersListResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListResponse",
      value: QueryStaticProvidersListResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountInfoResponse() {
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
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.provider) {
      StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.frozen) {
      StakeEntry.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.consumer) {
      StakeEntry.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.unstaked) {
      StakeEntry.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.subscription !== undefined) {
      Subscription.encode(message.subscription, writer.uint32(42).fork()).ldelim();
    }
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$provider2, _object$frozen, _object$consumer, _object$unstaked;
    const message = createBaseQueryAccountInfoResponse();
    message.provider = ((_object$provider2 = object.provider) === null || _object$provider2 === void 0 ? void 0 : _object$provider2.map(e => StakeEntry.fromPartial(e))) || [];
    message.frozen = ((_object$frozen = object.frozen) === null || _object$frozen === void 0 ? void 0 : _object$frozen.map(e => StakeEntry.fromPartial(e))) || [];
    message.consumer = ((_object$consumer = object.consumer) === null || _object$consumer === void 0 ? void 0 : _object$consumer.map(e => StakeEntry.fromPartial(e))) || [];
    message.unstaked = ((_object$unstaked = object.unstaked) === null || _object$unstaked === void 0 ? void 0 : _object$unstaked.map(e => StakeEntry.fromPartial(e))) || [];
    message.subscription = object.subscription !== undefined && object.subscription !== null ? Subscription.fromPartial(object.subscription) : undefined;
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      provider: Array.isArray(object === null || object === void 0 ? void 0 : object.provider) ? object.provider.map(e => StakeEntry.fromAmino(e)) : [],
      frozen: Array.isArray(object === null || object === void 0 ? void 0 : object.frozen) ? object.frozen.map(e => StakeEntry.fromAmino(e)) : [],
      consumer: Array.isArray(object === null || object === void 0 ? void 0 : object.consumer) ? object.consumer.map(e => StakeEntry.fromAmino(e)) : [],
      unstaked: Array.isArray(object === null || object === void 0 ? void 0 : object.unstaked) ? object.unstaked.map(e => StakeEntry.fromAmino(e)) : [],
      subscription: object !== null && object !== void 0 && object.subscription ? Subscription.fromAmino(object.subscription) : undefined,
      project: object !== null && object !== void 0 && object.project ? Project.fromAmino(object.project) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
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
  fromAminoMsg(object) {
    return QueryAccountInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAccountInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAccountInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAccountInfoResponse",
      value: QueryAccountInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEffectivePolicyRequest() {
  return {
    consumer: "",
    specID: ""
  };
}
export const QueryEffectivePolicyRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    if (message.specID !== "") {
      writer.uint32(18).string(message.specID);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$consumer2, _object$specID;
    const message = createBaseQueryEffectivePolicyRequest();
    message.consumer = (_object$consumer2 = object.consumer) !== null && _object$consumer2 !== void 0 ? _object$consumer2 : "";
    message.specID = (_object$specID = object.specID) !== null && _object$specID !== void 0 ? _object$specID : "";
    return message;
  },
  fromAmino(object) {
    return {
      consumer: object.consumer,
      specID: object.specID
    };
  },
  toAmino(message) {
    const obj = {};
    obj.consumer = message.consumer;
    obj.specID = message.specID;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEffectivePolicyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryEffectivePolicyRequest.decode(message.value);
  },
  toProto(message) {
    return QueryEffectivePolicyRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyRequest",
      value: QueryEffectivePolicyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEffectivePolicyResponse() {
  return {
    policy: Policy.fromPartial({})
  };
}
export const QueryEffectivePolicyResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQueryEffectivePolicyResponse();
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      policy: object !== null && object !== void 0 && object.policy ? Policy.fromAmino(object.policy) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryEffectivePolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryEffectivePolicyResponse.decode(message.value);
  },
  toProto(message) {
    return QueryEffectivePolicyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyResponse",
      value: QueryEffectivePolicyResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySdkPairingResponse() {
  return {
    pairing: QueryGetPairingResponse.fromPartial({}),
    maxCu: BigInt(0),
    spec: Spec.fromPartial({})
  };
}
export const QuerySdkPairingResponse = {
  typeUrl: "/lavanet.lava.pairing.QuerySdkPairingResponse",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
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
  fromPartial(object) {
    const message = createBaseQuerySdkPairingResponse();
    message.pairing = object.pairing !== undefined && object.pairing !== null ? QueryGetPairingResponse.fromPartial(object.pairing) : undefined;
    message.maxCu = object.maxCu !== undefined && object.maxCu !== null ? BigInt(object.maxCu.toString()) : BigInt(0);
    message.spec = object.spec !== undefined && object.spec !== null ? Spec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      pairing: object !== null && object !== void 0 && object.pairing ? QueryGetPairingResponse.fromAmino(object.pairing) : undefined,
      maxCu: BigInt(object.max_cu),
      spec: object !== null && object !== void 0 && object.spec ? Spec.fromAmino(object.spec) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.pairing = message.pairing ? QueryGetPairingResponse.toAmino(message.pairing) : undefined;
    obj.max_cu = message.maxCu ? message.maxCu.toString() : undefined;
    obj.spec = message.spec ? Spec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySdkPairingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QuerySdkPairingResponse.decode(message.value);
  },
  toProto(message) {
    return QuerySdkPairingResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.QuerySdkPairingResponse",
      value: QuerySdkPairingResponse.encode(message).finish()
    };
  }
};