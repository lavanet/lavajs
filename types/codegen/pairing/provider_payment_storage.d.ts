import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ProviderPaymentStorage {
    index: string;
    epoch: Long;
    uniquePaymentStorageClientProviderKeys: string[];
    /** total CU that were supposed to be served by the provider but didn't because he was unavailable (so consumers complained about him) */
    complainersTotalCu: Long;
}
export interface ProviderPaymentStorageSDKType {
    index: string;
    epoch: Long;
    uniquePaymentStorageClientProviderKeys: string[];
    complainersTotalCu: Long;
}
export declare const ProviderPaymentStorage: {
    encode(message: ProviderPaymentStorage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProviderPaymentStorage;
    fromJSON(object: any): ProviderPaymentStorage;
    toJSON(message: ProviderPaymentStorage): unknown;
    fromPartial(object: Partial<ProviderPaymentStorage>): ProviderPaymentStorage;
};
