import { Params } from "./params";
import { UniquePaymentStorageClientProvider } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage } from "./provider_payment_storage";
import { EpochPayments } from "./epoch_payments";
import { RawMessage } from "../common/fixationEntry";
import { BinaryReader, BinaryWriter } from "../../../binary";

/** GenesisState defines the pairing module's genesis state. */

/** GenesisState defines the pairing module's genesis state. */

function createBaseBadgeUsedCu() {
  return {
    badgeUsedCuKey: new Uint8Array(),
    usedCu: BigInt(0)
  };
}
export const BadgeUsedCu = {
  typeUrl: "/lavanet.lava.pairing.BadgeUsedCu",
  encode(message, writer = BinaryWriter.create()) {
    if (message.badgeUsedCuKey.length !== 0) {
      writer.uint32(10).bytes(message.badgeUsedCuKey);
    }
    if (message.usedCu !== BigInt(0)) {
      writer.uint32(16).uint64(message.usedCu);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$badgeUsedCuKe;
    const message = createBaseBadgeUsedCu();
    message.badgeUsedCuKey = (_object$badgeUsedCuKe = object.badgeUsedCuKey) !== null && _object$badgeUsedCuKe !== void 0 ? _object$badgeUsedCuKe : new Uint8Array();
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? BigInt(object.usedCu.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      badgeUsedCuKey: object.badge_used_cu_key,
      usedCu: BigInt(object.used_cu)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.badge_used_cu_key = message.badgeUsedCuKey;
    obj.used_cu = message.usedCu ? message.usedCu.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return BadgeUsedCu.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return BadgeUsedCu.decode(message.value);
  },
  toProto(message) {
    return BadgeUsedCu.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.BadgeUsedCu",
      value: BadgeUsedCu.encode(message).finish()
    };
  }
};
function createBaseGenesisState() {
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
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uniquePaymentStorageClientProviderList) {
      UniquePaymentStorageClientProvider.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.providerPaymentStorageList) {
      ProviderPaymentStorage.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.epochPaymentsList) {
      EpochPayments.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.badgeUsedCuList) {
      BadgeUsedCu.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.badgesTS) {
      RawMessage.encode(v, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$uniquePayment, _object$providerPayme, _object$epochPayments, _object$badgeUsedCuLi, _object$badgesTS;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.uniquePaymentStorageClientProviderList = ((_object$uniquePayment = object.uniquePaymentStorageClientProviderList) === null || _object$uniquePayment === void 0 ? void 0 : _object$uniquePayment.map(e => UniquePaymentStorageClientProvider.fromPartial(e))) || [];
    message.providerPaymentStorageList = ((_object$providerPayme = object.providerPaymentStorageList) === null || _object$providerPayme === void 0 ? void 0 : _object$providerPayme.map(e => ProviderPaymentStorage.fromPartial(e))) || [];
    message.epochPaymentsList = ((_object$epochPayments = object.epochPaymentsList) === null || _object$epochPayments === void 0 ? void 0 : _object$epochPayments.map(e => EpochPayments.fromPartial(e))) || [];
    message.badgeUsedCuList = ((_object$badgeUsedCuLi = object.badgeUsedCuList) === null || _object$badgeUsedCuLi === void 0 ? void 0 : _object$badgeUsedCuLi.map(e => BadgeUsedCu.fromPartial(e))) || [];
    message.badgesTS = ((_object$badgesTS = object.badgesTS) === null || _object$badgesTS === void 0 ? void 0 : _object$badgesTS.map(e => RawMessage.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined,
      uniquePaymentStorageClientProviderList: Array.isArray(object === null || object === void 0 ? void 0 : object.uniquePaymentStorageClientProviderList) ? object.uniquePaymentStorageClientProviderList.map(e => UniquePaymentStorageClientProvider.fromAmino(e)) : [],
      providerPaymentStorageList: Array.isArray(object === null || object === void 0 ? void 0 : object.providerPaymentStorageList) ? object.providerPaymentStorageList.map(e => ProviderPaymentStorage.fromAmino(e)) : [],
      epochPaymentsList: Array.isArray(object === null || object === void 0 ? void 0 : object.epochPaymentsList) ? object.epochPaymentsList.map(e => EpochPayments.fromAmino(e)) : [],
      badgeUsedCuList: Array.isArray(object === null || object === void 0 ? void 0 : object.badgeUsedCuList) ? object.badgeUsedCuList.map(e => BadgeUsedCu.fromAmino(e)) : [],
      badgesTS: Array.isArray(object === null || object === void 0 ? void 0 : object.badgesTS) ? object.badgesTS.map(e => RawMessage.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
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
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};