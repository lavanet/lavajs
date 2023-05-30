import * as _m0 from "protobufjs/minimal";
export interface EpochPayments {
    index: string;
    providerPaymentStorageKeys: string[];
}
export interface EpochPaymentsSDKType {
    index: string;
    providerPaymentStorageKeys: string[];
}
export declare const EpochPayments: {
    encode(message: EpochPayments, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochPayments;
    fromJSON(object: any): EpochPayments;
    toJSON(message: EpochPayments): unknown;
    fromPartial(object: Partial<EpochPayments>): EpochPayments;
};
