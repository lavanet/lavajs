import { Params, ParamsSDKType } from "./params";
import { UniquePaymentStorageClientProvider, UniquePaymentStorageClientProviderSDKType } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage, ProviderPaymentStorageSDKType } from "./provider_payment_storage";
import { EpochPayments, EpochPaymentsSDKType } from "./epoch_payments";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the pairing module's genesis state. */
export interface GenesisState {
    params?: Params;
    uniquePaymentStorageClientProviderList: UniquePaymentStorageClientProvider[];
    providerPaymentStorageList: ProviderPaymentStorage[];
    epochPaymentsList: EpochPayments[];
}
/** GenesisState defines the pairing module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    uniquePaymentStorageClientProviderList: UniquePaymentStorageClientProviderSDKType[];
    providerPaymentStorageList: ProviderPaymentStorageSDKType[];
    epochPaymentsList: EpochPaymentsSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
