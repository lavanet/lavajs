import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface UniquePaymentStorageClientProvider {
    index: string;
    block: Long;
    usedCU: Long;
}
export interface UniquePaymentStorageClientProviderSDKType {
    index: string;
    block: Long;
    usedCU: Long;
}
export declare const UniquePaymentStorageClientProvider: {
    encode(message: UniquePaymentStorageClientProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UniquePaymentStorageClientProvider;
    fromJSON(object: any): UniquePaymentStorageClientProvider;
    toJSON(message: UniquePaymentStorageClientProvider): unknown;
    fromPartial(object: Partial<UniquePaymentStorageClientProvider>): UniquePaymentStorageClientProvider;
};
