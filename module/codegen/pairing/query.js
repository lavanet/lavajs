import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { StakeEntry } from "../epochstorage/stake_entry";
import { UniquePaymentStorageClientProvider } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage } from "./provider_payment_storage";
import { EpochPayments } from "./epoch_payments";
import { Subscription } from "../subscription/subscription";
import { Project } from "../projects/project";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryProvidersRequest() {
  return {
    chainID: "",
    showFrozen: false
  };
}
export const QueryProvidersRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.showFrozen === true) {
      writer.uint32(16).bool(message.showFrozen);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      showFrozen: isSet(object.showFrozen) ? Boolean(object.showFrozen) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.showFrozen !== undefined && (obj.showFrozen = message.showFrozen);
    return obj;
  },
  fromPartial(object) {
    var _object$chainID, _object$showFrozen;
    const message = createBaseQueryProvidersRequest();
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.showFrozen = (_object$showFrozen = object.showFrozen) !== null && _object$showFrozen !== void 0 ? _object$showFrozen : false;
    return message;
  }
};
function createBaseQueryProvidersResponse() {
  return {
    stakeEntry: [],
    output: ""
  };
}
export const QueryProvidersResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.stakeEntry) {
      StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.output !== "") {
      writer.uint32(18).string(message.output);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      stakeEntry: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeEntry) ? object.stakeEntry.map(e => StakeEntry.fromJSON(e)) : [],
      output: isSet(object.output) ? String(object.output) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.stakeEntry) {
      obj.stakeEntry = message.stakeEntry.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.stakeEntry = [];
    }
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },
  fromPartial(object) {
    var _object$stakeEntry, _object$output;
    const message = createBaseQueryProvidersResponse();
    message.stakeEntry = ((_object$stakeEntry = object.stakeEntry) === null || _object$stakeEntry === void 0 ? void 0 : _object$stakeEntry.map(e => StakeEntry.fromPartial(e))) || [];
    message.output = (_object$output = object.output) !== null && _object$output !== void 0 ? _object$output : "";
    return message;
  }
};
function createBaseQueryClientsRequest() {
  return {
    chainID: ""
  };
}
export const QueryClientsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientsRequest();
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
  fromJSON(object) {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    return obj;
  },
  fromPartial(object) {
    var _object$chainID2;
    const message = createBaseQueryClientsRequest();
    message.chainID = (_object$chainID2 = object.chainID) !== null && _object$chainID2 !== void 0 ? _object$chainID2 : "";
    return message;
  }
};
function createBaseQueryClientsResponse() {
  return {
    stakeEntry: [],
    output: ""
  };
}
export const QueryClientsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.stakeEntry) {
      StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.output !== "") {
      writer.uint32(18).string(message.output);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientsResponse();
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
  fromJSON(object) {
    return {
      stakeEntry: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeEntry) ? object.stakeEntry.map(e => StakeEntry.fromJSON(e)) : [],
      output: isSet(object.output) ? String(object.output) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.stakeEntry) {
      obj.stakeEntry = message.stakeEntry.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.stakeEntry = [];
    }
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },
  fromPartial(object) {
    var _object$stakeEntry2, _object$output2;
    const message = createBaseQueryClientsResponse();
    message.stakeEntry = ((_object$stakeEntry2 = object.stakeEntry) === null || _object$stakeEntry2 === void 0 ? void 0 : _object$stakeEntry2.map(e => StakeEntry.fromPartial(e))) || [];
    message.output = (_object$output2 = object.output) !== null && _object$output2 !== void 0 ? _object$output2 : "";
    return message;
  }
};
function createBaseQueryGetPairingRequest() {
  return {
    chainID: "",
    client: ""
  };
}
export const QueryGetPairingRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.client !== "") {
      writer.uint32(18).string(message.client);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      client: isSet(object.client) ? String(object.client) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.client !== undefined && (obj.client = message.client);
    return obj;
  },
  fromPartial(object) {
    var _object$chainID3, _object$client;
    const message = createBaseQueryGetPairingRequest();
    message.chainID = (_object$chainID3 = object.chainID) !== null && _object$chainID3 !== void 0 ? _object$chainID3 : "";
    message.client = (_object$client = object.client) !== null && _object$client !== void 0 ? _object$client : "";
    return message;
  }
};
function createBaseQueryGetPairingResponse() {
  return {
    providers: [],
    currentEpoch: Long.UZERO,
    timeLeftToNextPairing: Long.UZERO,
    specLastUpdatedBlock: Long.UZERO,
    blockOfNextPairing: Long.UZERO
  };
}
export const QueryGetPairingResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.providers) {
      StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (!message.currentEpoch.isZero()) {
      writer.uint32(16).uint64(message.currentEpoch);
    }
    if (!message.timeLeftToNextPairing.isZero()) {
      writer.uint32(24).uint64(message.timeLeftToNextPairing);
    }
    if (!message.specLastUpdatedBlock.isZero()) {
      writer.uint32(32).uint64(message.specLastUpdatedBlock);
    }
    if (!message.blockOfNextPairing.isZero()) {
      writer.uint32(40).uint64(message.blockOfNextPairing);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      providers: Array.isArray(object === null || object === void 0 ? void 0 : object.providers) ? object.providers.map(e => StakeEntry.fromJSON(e)) : [],
      currentEpoch: isSet(object.currentEpoch) ? Long.fromValue(object.currentEpoch) : Long.UZERO,
      timeLeftToNextPairing: isSet(object.timeLeftToNextPairing) ? Long.fromValue(object.timeLeftToNextPairing) : Long.UZERO,
      specLastUpdatedBlock: isSet(object.specLastUpdatedBlock) ? Long.fromValue(object.specLastUpdatedBlock) : Long.UZERO,
      blockOfNextPairing: isSet(object.blockOfNextPairing) ? Long.fromValue(object.blockOfNextPairing) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.UZERO).toString());
    message.timeLeftToNextPairing !== undefined && (obj.timeLeftToNextPairing = (message.timeLeftToNextPairing || Long.UZERO).toString());
    message.specLastUpdatedBlock !== undefined && (obj.specLastUpdatedBlock = (message.specLastUpdatedBlock || Long.UZERO).toString());
    message.blockOfNextPairing !== undefined && (obj.blockOfNextPairing = (message.blockOfNextPairing || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$providers;
    const message = createBaseQueryGetPairingResponse();
    message.providers = ((_object$providers = object.providers) === null || _object$providers === void 0 ? void 0 : _object$providers.map(e => StakeEntry.fromPartial(e))) || [];
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.UZERO;
    message.timeLeftToNextPairing = object.timeLeftToNextPairing !== undefined && object.timeLeftToNextPairing !== null ? Long.fromValue(object.timeLeftToNextPairing) : Long.UZERO;
    message.specLastUpdatedBlock = object.specLastUpdatedBlock !== undefined && object.specLastUpdatedBlock !== null ? Long.fromValue(object.specLastUpdatedBlock) : Long.UZERO;
    message.blockOfNextPairing = object.blockOfNextPairing !== undefined && object.blockOfNextPairing !== null ? Long.fromValue(object.blockOfNextPairing) : Long.UZERO;
    return message;
  }
};
function createBaseQueryVerifyPairingRequest() {
  return {
    chainID: "",
    client: "",
    provider: "",
    block: Long.UZERO
  };
}
export const QueryVerifyPairingRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.client !== "") {
      writer.uint32(18).string(message.client);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (!message.block.isZero()) {
      writer.uint32(32).uint64(message.block);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      client: isSet(object.client) ? String(object.client) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.client !== undefined && (obj.client = message.client);
    message.provider !== undefined && (obj.provider = message.provider);
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$chainID4, _object$client2, _object$provider;
    const message = createBaseQueryVerifyPairingRequest();
    message.chainID = (_object$chainID4 = object.chainID) !== null && _object$chainID4 !== void 0 ? _object$chainID4 : "";
    message.client = (_object$client2 = object.client) !== null && _object$client2 !== void 0 ? _object$client2 : "";
    message.provider = (_object$provider = object.provider) !== null && _object$provider !== void 0 ? _object$provider : "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    return message;
  }
};
function createBaseQueryVerifyPairingResponse() {
  return {
    valid: false,
    pairedProviders: Long.UZERO,
    cuPerEpoch: Long.UZERO
  };
}
export const QueryVerifyPairingResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    if (!message.pairedProviders.isZero()) {
      writer.uint32(24).uint64(message.pairedProviders);
    }
    if (!message.cuPerEpoch.isZero()) {
      writer.uint32(32).uint64(message.cuPerEpoch);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
      pairedProviders: isSet(object.pairedProviders) ? Long.fromValue(object.pairedProviders) : Long.UZERO,
      cuPerEpoch: isSet(object.cuPerEpoch) ? Long.fromValue(object.cuPerEpoch) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.valid !== undefined && (obj.valid = message.valid);
    message.pairedProviders !== undefined && (obj.pairedProviders = (message.pairedProviders || Long.UZERO).toString());
    message.cuPerEpoch !== undefined && (obj.cuPerEpoch = (message.cuPerEpoch || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$valid;
    const message = createBaseQueryVerifyPairingResponse();
    message.valid = (_object$valid = object.valid) !== null && _object$valid !== void 0 ? _object$valid : false;
    message.pairedProviders = object.pairedProviders !== undefined && object.pairedProviders !== null ? Long.fromValue(object.pairedProviders) : Long.UZERO;
    message.cuPerEpoch = object.cuPerEpoch !== undefined && object.cuPerEpoch !== null ? Long.fromValue(object.cuPerEpoch) : Long.UZERO;
    return message;
  }
};
function createBaseQueryGetUniquePaymentStorageClientProviderRequest() {
  return {
    index: ""
  };
}
export const QueryGetUniquePaymentStorageClientProviderRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object) {
    var _object$index;
    const message = createBaseQueryGetUniquePaymentStorageClientProviderRequest();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    return message;
  }
};
function createBaseQueryGetUniquePaymentStorageClientProviderResponse() {
  return {
    uniquePaymentStorageClientProvider: undefined
  };
}
export const QueryGetUniquePaymentStorageClientProviderResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.uniquePaymentStorageClientProvider !== undefined) {
      UniquePaymentStorageClientProvider.encode(message.uniquePaymentStorageClientProvider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      uniquePaymentStorageClientProvider: isSet(object.uniquePaymentStorageClientProvider) ? UniquePaymentStorageClientProvider.fromJSON(object.uniquePaymentStorageClientProvider) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.uniquePaymentStorageClientProvider !== undefined && (obj.uniquePaymentStorageClientProvider = message.uniquePaymentStorageClientProvider ? UniquePaymentStorageClientProvider.toJSON(message.uniquePaymentStorageClientProvider) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGetUniquePaymentStorageClientProviderResponse();
    message.uniquePaymentStorageClientProvider = object.uniquePaymentStorageClientProvider !== undefined && object.uniquePaymentStorageClientProvider !== null ? UniquePaymentStorageClientProvider.fromPartial(object.uniquePaymentStorageClientProvider) : undefined;
    return message;
  }
};
function createBaseQueryAllUniquePaymentStorageClientProviderRequest() {
  return {
    pagination: undefined
  };
}
export const QueryAllUniquePaymentStorageClientProviderRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryAllUniquePaymentStorageClientProviderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllUniquePaymentStorageClientProviderResponse() {
  return {
    uniquePaymentStorageClientProvider: [],
    pagination: undefined
  };
}
export const QueryAllUniquePaymentStorageClientProviderResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.uniquePaymentStorageClientProvider) {
      UniquePaymentStorageClientProvider.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      uniquePaymentStorageClientProvider: Array.isArray(object === null || object === void 0 ? void 0 : object.uniquePaymentStorageClientProvider) ? object.uniquePaymentStorageClientProvider.map(e => UniquePaymentStorageClientProvider.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.uniquePaymentStorageClientProvider) {
      obj.uniquePaymentStorageClientProvider = message.uniquePaymentStorageClientProvider.map(e => e ? UniquePaymentStorageClientProvider.toJSON(e) : undefined);
    } else {
      obj.uniquePaymentStorageClientProvider = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$uniquePayment;
    const message = createBaseQueryAllUniquePaymentStorageClientProviderResponse();
    message.uniquePaymentStorageClientProvider = ((_object$uniquePayment = object.uniquePaymentStorageClientProvider) === null || _object$uniquePayment === void 0 ? void 0 : _object$uniquePayment.map(e => UniquePaymentStorageClientProvider.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetProviderPaymentStorageRequest() {
  return {
    index: ""
  };
}
export const QueryGetProviderPaymentStorageRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object) {
    var _object$index2;
    const message = createBaseQueryGetProviderPaymentStorageRequest();
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : "";
    return message;
  }
};
function createBaseQueryGetProviderPaymentStorageResponse() {
  return {
    providerPaymentStorage: undefined
  };
}
export const QueryGetProviderPaymentStorageResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.providerPaymentStorage !== undefined) {
      ProviderPaymentStorage.encode(message.providerPaymentStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      providerPaymentStorage: isSet(object.providerPaymentStorage) ? ProviderPaymentStorage.fromJSON(object.providerPaymentStorage) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.providerPaymentStorage !== undefined && (obj.providerPaymentStorage = message.providerPaymentStorage ? ProviderPaymentStorage.toJSON(message.providerPaymentStorage) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGetProviderPaymentStorageResponse();
    message.providerPaymentStorage = object.providerPaymentStorage !== undefined && object.providerPaymentStorage !== null ? ProviderPaymentStorage.fromPartial(object.providerPaymentStorage) : undefined;
    return message;
  }
};
function createBaseQueryAllProviderPaymentStorageRequest() {
  return {
    pagination: undefined
  };
}
export const QueryAllProviderPaymentStorageRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryAllProviderPaymentStorageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllProviderPaymentStorageResponse() {
  return {
    providerPaymentStorage: [],
    pagination: undefined
  };
}
export const QueryAllProviderPaymentStorageResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.providerPaymentStorage) {
      ProviderPaymentStorage.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      providerPaymentStorage: Array.isArray(object === null || object === void 0 ? void 0 : object.providerPaymentStorage) ? object.providerPaymentStorage.map(e => ProviderPaymentStorage.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.providerPaymentStorage) {
      obj.providerPaymentStorage = message.providerPaymentStorage.map(e => e ? ProviderPaymentStorage.toJSON(e) : undefined);
    } else {
      obj.providerPaymentStorage = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$providerPayme;
    const message = createBaseQueryAllProviderPaymentStorageResponse();
    message.providerPaymentStorage = ((_object$providerPayme = object.providerPaymentStorage) === null || _object$providerPayme === void 0 ? void 0 : _object$providerPayme.map(e => ProviderPaymentStorage.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryGetEpochPaymentsRequest() {
  return {
    index: ""
  };
}
export const QueryGetEpochPaymentsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial(object) {
    var _object$index3;
    const message = createBaseQueryGetEpochPaymentsRequest();
    message.index = (_object$index3 = object.index) !== null && _object$index3 !== void 0 ? _object$index3 : "";
    return message;
  }
};
function createBaseQueryGetEpochPaymentsResponse() {
  return {
    epochPayments: undefined
  };
}
export const QueryGetEpochPaymentsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.epochPayments !== undefined) {
      EpochPayments.encode(message.epochPayments, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      epochPayments: isSet(object.epochPayments) ? EpochPayments.fromJSON(object.epochPayments) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.epochPayments !== undefined && (obj.epochPayments = message.epochPayments ? EpochPayments.toJSON(message.epochPayments) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryGetEpochPaymentsResponse();
    message.epochPayments = object.epochPayments !== undefined && object.epochPayments !== null ? EpochPayments.fromPartial(object.epochPayments) : undefined;
    return message;
  }
};
function createBaseQueryAllEpochPaymentsRequest() {
  return {
    pagination: undefined
  };
}
export const QueryAllEpochPaymentsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryAllEpochPaymentsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllEpochPaymentsResponse() {
  return {
    epochPayments: [],
    pagination: undefined
  };
}
export const QueryAllEpochPaymentsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.epochPayments) {
      EpochPayments.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      epochPayments: Array.isArray(object === null || object === void 0 ? void 0 : object.epochPayments) ? object.epochPayments.map(e => EpochPayments.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.epochPayments) {
      obj.epochPayments = message.epochPayments.map(e => e ? EpochPayments.toJSON(e) : undefined);
    } else {
      obj.epochPayments = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$epochPayments;
    const message = createBaseQueryAllEpochPaymentsResponse();
    message.epochPayments = ((_object$epochPayments = object.epochPayments) === null || _object$epochPayments === void 0 ? void 0 : _object$epochPayments.map(e => EpochPayments.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryUserEntryRequest() {
  return {
    address: "",
    chainID: "",
    block: Long.UZERO
  };
}
export const QueryUserEntryRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (!message.block.isZero()) {
      writer.uint32(24).uint64(message.block);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$address, _object$chainID5;
    const message = createBaseQueryUserEntryRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.chainID = (_object$chainID5 = object.chainID) !== null && _object$chainID5 !== void 0 ? _object$chainID5 : "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    return message;
  }
};
function createBaseQueryUserEntryResponse() {
  return {
    consumer: undefined,
    maxCU: Long.UZERO
  };
}
export const QueryUserEntryResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.consumer !== undefined) {
      StakeEntry.encode(message.consumer, writer.uint32(10).fork()).ldelim();
    }
    if (!message.maxCU.isZero()) {
      writer.uint32(16).uint64(message.maxCU);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      consumer: isSet(object.consumer) ? StakeEntry.fromJSON(object.consumer) : undefined,
      maxCU: isSet(object.maxCU) ? Long.fromValue(object.maxCU) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.consumer !== undefined && (obj.consumer = message.consumer ? StakeEntry.toJSON(message.consumer) : undefined);
    message.maxCU !== undefined && (obj.maxCU = (message.maxCU || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseQueryUserEntryResponse();
    message.consumer = object.consumer !== undefined && object.consumer !== null ? StakeEntry.fromPartial(object.consumer) : undefined;
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? Long.fromValue(object.maxCU) : Long.UZERO;
    return message;
  }
};
function createBaseQueryStaticProvidersListRequest() {
  return {
    chainID: ""
  };
}
export const QueryStaticProvidersListRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    return obj;
  },
  fromPartial(object) {
    var _object$chainID6;
    const message = createBaseQueryStaticProvidersListRequest();
    message.chainID = (_object$chainID6 = object.chainID) !== null && _object$chainID6 !== void 0 ? _object$chainID6 : "";
    return message;
  }
};
function createBaseQueryStaticProvidersListResponse() {
  return {
    providers: []
  };
}
export const QueryStaticProvidersListResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.providers) {
      StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      providers: Array.isArray(object === null || object === void 0 ? void 0 : object.providers) ? object.providers.map(e => StakeEntry.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$providers2;
    const message = createBaseQueryStaticProvidersListResponse();
    message.providers = ((_object$providers2 = object.providers) === null || _object$providers2 === void 0 ? void 0 : _object$providers2.map(e => StakeEntry.fromPartial(e))) || [];
    return message;
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
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      provider: Array.isArray(object === null || object === void 0 ? void 0 : object.provider) ? object.provider.map(e => StakeEntry.fromJSON(e)) : [],
      frozen: Array.isArray(object === null || object === void 0 ? void 0 : object.frozen) ? object.frozen.map(e => StakeEntry.fromJSON(e)) : [],
      consumer: Array.isArray(object === null || object === void 0 ? void 0 : object.consumer) ? object.consumer.map(e => StakeEntry.fromJSON(e)) : [],
      unstaked: Array.isArray(object === null || object === void 0 ? void 0 : object.unstaked) ? object.unstaked.map(e => StakeEntry.fromJSON(e)) : [],
      subscription: isSet(object.subscription) ? Subscription.fromJSON(object.subscription) : undefined,
      project: isSet(object.project) ? Project.fromJSON(object.project) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.provider) {
      obj.provider = message.provider.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.provider = [];
    }
    if (message.frozen) {
      obj.frozen = message.frozen.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.frozen = [];
    }
    if (message.consumer) {
      obj.consumer = message.consumer.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.consumer = [];
    }
    if (message.unstaked) {
      obj.unstaked = message.unstaked.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.unstaked = [];
    }
    message.subscription !== undefined && (obj.subscription = message.subscription ? Subscription.toJSON(message.subscription) : undefined);
    message.project !== undefined && (obj.project = message.project ? Project.toJSON(message.project) : undefined);
    return obj;
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
  }
};