import { Params, ParamsSDKType } from "./params";
import { UniquePaymentStorageClientProvider, UniquePaymentStorageClientProviderSDKType } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage, ProviderPaymentStorageSDKType } from "./provider_payment_storage";
import { EpochPayments, EpochPaymentsSDKType } from "./epoch_payments";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BadgeUsedCu {
  badgeUsedCuKey: Uint8Array;
  usedCu: Long;
}
export interface BadgeUsedCuSDKType {
  badge_used_cu_key: Uint8Array;
  used_cu: Long;
}
/** GenesisState defines the pairing module's genesis state. */
export interface GenesisState {
  params?: Params;
  uniquePaymentStorageClientProviderList: UniquePaymentStorageClientProvider[];
  providerPaymentStorageList: ProviderPaymentStorage[];
  epochPaymentsList: EpochPayments[];
  badgeUsedCuList: BadgeUsedCu[];
}
/** GenesisState defines the pairing module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  uniquePaymentStorageClientProviderList: UniquePaymentStorageClientProviderSDKType[];
  providerPaymentStorageList: ProviderPaymentStorageSDKType[];
  epochPaymentsList: EpochPaymentsSDKType[];
  badgeUsedCuList: BadgeUsedCuSDKType[];
}
function createBaseBadgeUsedCu(): BadgeUsedCu {
  return {
    badgeUsedCuKey: new Uint8Array(),
    usedCu: Long.UZERO
  };
}
export const BadgeUsedCu = {
  encode(message: BadgeUsedCu, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.badgeUsedCuKey.length !== 0) {
      writer.uint32(10).bytes(message.badgeUsedCuKey);
    }
    if (!message.usedCu.isZero()) {
      writer.uint32(16).uint64(message.usedCu);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BadgeUsedCu {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadgeUsedCu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badgeUsedCuKey = reader.bytes();
          break;
        case 2:
          message.usedCu = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BadgeUsedCu {
    return {
      badgeUsedCuKey: isSet(object.badgeUsedCuKey) ? bytesFromBase64(object.badgeUsedCuKey) : new Uint8Array(),
      usedCu: isSet(object.usedCu) ? Long.fromValue(object.usedCu) : Long.UZERO
    };
  },
  toJSON(message: BadgeUsedCu): unknown {
    const obj: any = {};
    message.badgeUsedCuKey !== undefined && (obj.badgeUsedCuKey = base64FromBytes(message.badgeUsedCuKey !== undefined ? message.badgeUsedCuKey : new Uint8Array()));
    message.usedCu !== undefined && (obj.usedCu = (message.usedCu || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<BadgeUsedCu>): BadgeUsedCu {
    const message = createBaseBadgeUsedCu();
    message.badgeUsedCuKey = object.badgeUsedCuKey ?? new Uint8Array();
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? Long.fromValue(object.usedCu) : Long.UZERO;
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    uniquePaymentStorageClientProviderList: [],
    providerPaymentStorageList: [],
    epochPaymentsList: [],
    badgeUsedCuList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uniquePaymentStorageClientProviderList) {
      UniquePaymentStorageClientProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.providerPaymentStorageList) {
      ProviderPaymentStorage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.epochPaymentsList) {
      EpochPayments.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.badgeUsedCuList) {
      BadgeUsedCu.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.uniquePaymentStorageClientProviderList.push(UniquePaymentStorageClientProvider.decode(reader, reader.uint32()));
          break;
        case 3:
          message.providerPaymentStorageList.push(ProviderPaymentStorage.decode(reader, reader.uint32()));
          break;
        case 4:
          message.epochPaymentsList.push(EpochPayments.decode(reader, reader.uint32()));
          break;
        case 5:
          message.badgeUsedCuList.push(BadgeUsedCu.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      uniquePaymentStorageClientProviderList: Array.isArray(object?.uniquePaymentStorageClientProviderList) ? object.uniquePaymentStorageClientProviderList.map((e: any) => UniquePaymentStorageClientProvider.fromJSON(e)) : [],
      providerPaymentStorageList: Array.isArray(object?.providerPaymentStorageList) ? object.providerPaymentStorageList.map((e: any) => ProviderPaymentStorage.fromJSON(e)) : [],
      epochPaymentsList: Array.isArray(object?.epochPaymentsList) ? object.epochPaymentsList.map((e: any) => EpochPayments.fromJSON(e)) : [],
      badgeUsedCuList: Array.isArray(object?.badgeUsedCuList) ? object.badgeUsedCuList.map((e: any) => BadgeUsedCu.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.uniquePaymentStorageClientProviderList) {
      obj.uniquePaymentStorageClientProviderList = message.uniquePaymentStorageClientProviderList.map(e => e ? UniquePaymentStorageClientProvider.toJSON(e) : undefined);
    } else {
      obj.uniquePaymentStorageClientProviderList = [];
    }
    if (message.providerPaymentStorageList) {
      obj.providerPaymentStorageList = message.providerPaymentStorageList.map(e => e ? ProviderPaymentStorage.toJSON(e) : undefined);
    } else {
      obj.providerPaymentStorageList = [];
    }
    if (message.epochPaymentsList) {
      obj.epochPaymentsList = message.epochPaymentsList.map(e => e ? EpochPayments.toJSON(e) : undefined);
    } else {
      obj.epochPaymentsList = [];
    }
    if (message.badgeUsedCuList) {
      obj.badgeUsedCuList = message.badgeUsedCuList.map(e => e ? BadgeUsedCu.toJSON(e) : undefined);
    } else {
      obj.badgeUsedCuList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.uniquePaymentStorageClientProviderList = object.uniquePaymentStorageClientProviderList?.map(e => UniquePaymentStorageClientProvider.fromPartial(e)) || [];
    message.providerPaymentStorageList = object.providerPaymentStorageList?.map(e => ProviderPaymentStorage.fromPartial(e)) || [];
    message.epochPaymentsList = object.epochPaymentsList?.map(e => EpochPayments.fromPartial(e)) || [];
    message.badgeUsedCuList = object.badgeUsedCuList?.map(e => BadgeUsedCu.fromPartial(e)) || [];
    return message;
  }
};