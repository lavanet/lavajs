import { Params } from "./params";
import { UniquePaymentStorageClientProvider } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage } from "./provider_payment_storage";
import { EpochPayments } from "./epoch_payments";
import * as _m0 from "protobufjs/minimal";

/** GenesisState defines the pairing module's genesis state. */

/** GenesisState defines the pairing module's genesis state. */

function createBaseGenesisState() {
  return {
    params: undefined,
    uniquePaymentStorageClientProviderList: [],
    providerPaymentStorageList: [],
    epochPaymentsList: []
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$uniquePayment, _object$providerPayme, _object$epochPayments;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.uniquePaymentStorageClientProviderList = ((_object$uniquePayment = object.uniquePaymentStorageClientProviderList) === null || _object$uniquePayment === void 0 ? void 0 : _object$uniquePayment.map(e => UniquePaymentStorageClientProvider.fromPartial(e))) || [];
    message.providerPaymentStorageList = ((_object$providerPayme = object.providerPaymentStorageList) === null || _object$providerPayme === void 0 ? void 0 : _object$providerPayme.map(e => ProviderPaymentStorage.fromPartial(e))) || [];
    message.epochPaymentsList = ((_object$epochPayments = object.epochPaymentsList) === null || _object$epochPayments === void 0 ? void 0 : _object$epochPayments.map(e => EpochPayments.fromPartial(e))) || [];
    return message;
  }
};