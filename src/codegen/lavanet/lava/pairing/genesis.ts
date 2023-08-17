import { Params, ParamsSDKType } from "./params";
import { UniquePaymentStorageClientProvider, UniquePaymentStorageClientProviderSDKType } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage, ProviderPaymentStorageSDKType } from "./provider_payment_storage";
import { EpochPayments, EpochPaymentsSDKType } from "./epoch_payments";
import { RawMessage, RawMessageSDKType } from "../common/fixationEntry";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface BadgeUsedCu {
  badgeUsedCuKey: Uint8Array;
  usedCu: bigint;
}
export interface BadgeUsedCuSDKType {
  badge_used_cu_key: Uint8Array;
  used_cu: bigint;
}
/** GenesisState defines the pairing module's genesis state. */
export interface GenesisState {
  params: Params;
  uniquePaymentStorageClientProviderList: UniquePaymentStorageClientProvider[];
  providerPaymentStorageList: ProviderPaymentStorage[];
  epochPaymentsList: EpochPayments[];
  badgeUsedCuList: BadgeUsedCu[];
  badgesTS: RawMessage[];
}
/** GenesisState defines the pairing module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  uniquePaymentStorageClientProviderList: UniquePaymentStorageClientProviderSDKType[];
  providerPaymentStorageList: ProviderPaymentStorageSDKType[];
  epochPaymentsList: EpochPaymentsSDKType[];
  badgeUsedCuList: BadgeUsedCuSDKType[];
  badgesTS: RawMessageSDKType[];
}
function createBaseBadgeUsedCu(): BadgeUsedCu {
  return {
    badgeUsedCuKey: new Uint8Array(),
    usedCu: BigInt(0)
  };
}
export const BadgeUsedCu = {
  typeUrl: "/lavanet.lava.pairing.BadgeUsedCu",
  encode(message: BadgeUsedCu, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.badgeUsedCuKey.length !== 0) {
      writer.uint32(10).bytes(message.badgeUsedCuKey);
    }
    if (message.usedCu !== BigInt(0)) {
      writer.uint32(16).uint64(message.usedCu);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BadgeUsedCu {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadgeUsedCu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badgeUsedCuKey = reader.bytes();
          break;
        case 2:
          message.usedCu = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BadgeUsedCu>): BadgeUsedCu {
    const message = createBaseBadgeUsedCu();
    message.badgeUsedCuKey = object.badgeUsedCuKey ?? new Uint8Array();
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? BigInt(object.usedCu.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BadgeUsedCuAmino): BadgeUsedCu {
    return {
      badgeUsedCuKey: object.badge_used_cu_key,
      usedCu: BigInt(object.used_cu)
    };
  },
  toAmino(message: BadgeUsedCu): BadgeUsedCuAmino {
    const obj: any = {};
    obj.badge_used_cu_key = message.badgeUsedCuKey;
    obj.used_cu = message.usedCu ? message.usedCu.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BadgeUsedCuAminoMsg): BadgeUsedCu {
    return BadgeUsedCu.fromAmino(object.value);
  },
  fromProtoMsg(message: BadgeUsedCuProtoMsg): BadgeUsedCu {
    return BadgeUsedCu.decode(message.value);
  },
  toProto(message: BadgeUsedCu): Uint8Array {
    return BadgeUsedCu.encode(message).finish();
  },
  toProtoMsg(message: BadgeUsedCu): BadgeUsedCuProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.BadgeUsedCu",
      value: BadgeUsedCu.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    uniquePaymentStorageClientProviderList: [],
    providerPaymentStorageList: [],
    epochPaymentsList: [],
    badgeUsedCuList: [],
    badgesTS: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.pairing.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    for (const v of message.badgesTS) {
      RawMessage.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        case 6:
          message.badgesTS.push(RawMessage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.uniquePaymentStorageClientProviderList = object.uniquePaymentStorageClientProviderList?.map(e => UniquePaymentStorageClientProvider.fromPartial(e)) || [];
    message.providerPaymentStorageList = object.providerPaymentStorageList?.map(e => ProviderPaymentStorage.fromPartial(e)) || [];
    message.epochPaymentsList = object.epochPaymentsList?.map(e => EpochPayments.fromPartial(e)) || [];
    message.badgeUsedCuList = object.badgeUsedCuList?.map(e => BadgeUsedCu.fromPartial(e)) || [];
    message.badgesTS = object.badgesTS?.map(e => RawMessage.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      uniquePaymentStorageClientProviderList: Array.isArray(object?.uniquePaymentStorageClientProviderList) ? object.uniquePaymentStorageClientProviderList.map((e: any) => UniquePaymentStorageClientProvider.fromAmino(e)) : [],
      providerPaymentStorageList: Array.isArray(object?.providerPaymentStorageList) ? object.providerPaymentStorageList.map((e: any) => ProviderPaymentStorage.fromAmino(e)) : [],
      epochPaymentsList: Array.isArray(object?.epochPaymentsList) ? object.epochPaymentsList.map((e: any) => EpochPayments.fromAmino(e)) : [],
      badgeUsedCuList: Array.isArray(object?.badgeUsedCuList) ? object.badgeUsedCuList.map((e: any) => BadgeUsedCu.fromAmino(e)) : [],
      badgesTS: Array.isArray(object?.badgesTS) ? object.badgesTS.map((e: any) => RawMessage.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.uniquePaymentStorageClientProviderList) {
      obj.uniquePaymentStorageClientProviderList = message.uniquePaymentStorageClientProviderList.map(e => e ? UniquePaymentStorageClientProvider.toAmino(e) : undefined);
    } else {
      obj.uniquePaymentStorageClientProviderList = [];
    }
    if (message.providerPaymentStorageList) {
      obj.providerPaymentStorageList = message.providerPaymentStorageList.map(e => e ? ProviderPaymentStorage.toAmino(e) : undefined);
    } else {
      obj.providerPaymentStorageList = [];
    }
    if (message.epochPaymentsList) {
      obj.epochPaymentsList = message.epochPaymentsList.map(e => e ? EpochPayments.toAmino(e) : undefined);
    } else {
      obj.epochPaymentsList = [];
    }
    if (message.badgeUsedCuList) {
      obj.badgeUsedCuList = message.badgeUsedCuList.map(e => e ? BadgeUsedCu.toAmino(e) : undefined);
    } else {
      obj.badgeUsedCuList = [];
    }
    if (message.badgesTS) {
      obj.badgesTS = message.badgesTS.map(e => e ? RawMessage.toAmino(e) : undefined);
    } else {
      obj.badgesTS = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};