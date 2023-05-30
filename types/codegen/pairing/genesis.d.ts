import { Params, ParamsSDKType } from "./params";
import { UniquePaymentStorageClientProvider, UniquePaymentStorageClientProviderSDKType } from "./unique_payment_storage_client_provider";
import { ProviderPaymentStorage, ProviderPaymentStorageSDKType } from "./provider_payment_storage";
import { EpochPayments, EpochPaymentsSDKType } from "./epoch_payments";
import { Long } from "../helpers";
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
export declare const BadgeUsedCu: {
    encode(message: BadgeUsedCu, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BadgeUsedCu;
    fromJSON(object: any): BadgeUsedCu;
    toJSON(message: BadgeUsedCu): unknown;
    fromPartial(object: Partial<BadgeUsedCu>): BadgeUsedCu;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
