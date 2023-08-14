import { Params } from "./params";
import { UniquePaymentStorageClientProvider } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage } from "./provider_payment_storage";
import { EpochPayments } from "./epoch_payments";
import { RawMessage } from "../common/fixationEntry";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";

/** GenesisState defines the pairing module's genesis state. */

/** GenesisState defines the pairing module's genesis state. */

function createBaseBadgeUsedCu() {
  return {
    badgeUsedCuKey: new Uint8Array(),
    usedCu: Long.UZERO
  };
}
export const BadgeUsedCu = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.badgeUsedCuKey.length !== 0) {
      writer.uint32(10).bytes(message.badgeUsedCuKey);
    }
    if (!message.usedCu.isZero()) {
      writer.uint32(16).uint64(message.usedCu);
    }
    return writer;
  },
  decode(input, length) {
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
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? Long.fromValue(object.usedCu) : Long.UZERO;
    return message;
  }
};
function createBaseGenesisState() {
  return {
    params: undefined,
    uniquePaymentStorageClientProviderList: [],
    providerPaymentStorageList: [],
    epochPaymentsList: [],
    badgeUsedCuList: [],
    badgesTS: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
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
  }
};