import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Endpoint, EndpointSDKType } from "../epochstorage/endpoint";
import { RelaySession, RelaySessionSDKType } from "./relay";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgStakeProvider {
    creator: string;
    chainID: string;
    amount?: Coin;
    endpoints: Endpoint[];
    geolocation: Long;
    moniker: string;
}
export interface MsgStakeProviderSDKType {
    creator: string;
    chainID: string;
    amount?: CoinSDKType;
    endpoints: EndpointSDKType[];
    geolocation: Long;
    moniker: string;
}
export interface MsgStakeProviderResponse {
}
export interface MsgStakeProviderResponseSDKType {
}
export interface MsgStakeClient {
    creator: string;
    chainID: string;
    amount?: Coin;
    geolocation: Long;
}
export interface MsgStakeClientSDKType {
    creator: string;
    chainID: string;
    amount?: CoinSDKType;
    geolocation: Long;
}
export interface MsgStakeClientResponse {
}
export interface MsgStakeClientResponseSDKType {
}
export interface MsgUnstakeProvider {
    creator: string;
    chainID: string;
}
export interface MsgUnstakeProviderSDKType {
    creator: string;
    chainID: string;
}
export interface MsgUnstakeProviderResponse {
}
export interface MsgUnstakeProviderResponseSDKType {
}
export interface MsgUnstakeClient {
    creator: string;
    chainID: string;
}
export interface MsgUnstakeClientSDKType {
    creator: string;
    chainID: string;
}
export interface MsgUnstakeClientResponse {
}
export interface MsgUnstakeClientResponseSDKType {
}
export interface MsgRelayPayment {
    creator: string;
    relays: RelaySession[];
    descriptionString: string;
}
export interface MsgRelayPaymentSDKType {
    creator: string;
    relays: RelaySessionSDKType[];
    descriptionString: string;
}
export interface MsgRelayPaymentResponse {
}
export interface MsgRelayPaymentResponseSDKType {
}
export interface MsgFreezeProvider {
    creator: string;
    chainIds: string[];
    reason: string;
}
export interface MsgFreezeProviderSDKType {
    creator: string;
    chainIds: string[];
    reason: string;
}
export interface MsgFreezeProviderResponse {
}
export interface MsgFreezeProviderResponseSDKType {
}
export interface MsgUnfreezeProvider {
    creator: string;
    chainIds: string[];
}
export interface MsgUnfreezeProviderSDKType {
    creator: string;
    chainIds: string[];
}
export interface MsgUnfreezeProviderResponse {
}
export interface MsgUnfreezeProviderResponseSDKType {
}
export declare const MsgStakeProvider: {
    encode(message: MsgStakeProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeProvider;
    fromJSON(object: any): MsgStakeProvider;
    toJSON(message: MsgStakeProvider): unknown;
    fromPartial(object: Partial<MsgStakeProvider>): MsgStakeProvider;
};
export declare const MsgStakeProviderResponse: {
    encode(_: MsgStakeProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeProviderResponse;
    fromJSON(_: any): MsgStakeProviderResponse;
    toJSON(_: MsgStakeProviderResponse): unknown;
    fromPartial(_: Partial<MsgStakeProviderResponse>): MsgStakeProviderResponse;
};
export declare const MsgStakeClient: {
    encode(message: MsgStakeClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeClient;
    fromJSON(object: any): MsgStakeClient;
    toJSON(message: MsgStakeClient): unknown;
    fromPartial(object: Partial<MsgStakeClient>): MsgStakeClient;
};
export declare const MsgStakeClientResponse: {
    encode(_: MsgStakeClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeClientResponse;
    fromJSON(_: any): MsgStakeClientResponse;
    toJSON(_: MsgStakeClientResponse): unknown;
    fromPartial(_: Partial<MsgStakeClientResponse>): MsgStakeClientResponse;
};
export declare const MsgUnstakeProvider: {
    encode(message: MsgUnstakeProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeProvider;
    fromJSON(object: any): MsgUnstakeProvider;
    toJSON(message: MsgUnstakeProvider): unknown;
    fromPartial(object: Partial<MsgUnstakeProvider>): MsgUnstakeProvider;
};
export declare const MsgUnstakeProviderResponse: {
    encode(_: MsgUnstakeProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeProviderResponse;
    fromJSON(_: any): MsgUnstakeProviderResponse;
    toJSON(_: MsgUnstakeProviderResponse): unknown;
    fromPartial(_: Partial<MsgUnstakeProviderResponse>): MsgUnstakeProviderResponse;
};
export declare const MsgUnstakeClient: {
    encode(message: MsgUnstakeClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeClient;
    fromJSON(object: any): MsgUnstakeClient;
    toJSON(message: MsgUnstakeClient): unknown;
    fromPartial(object: Partial<MsgUnstakeClient>): MsgUnstakeClient;
};
export declare const MsgUnstakeClientResponse: {
    encode(_: MsgUnstakeClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeClientResponse;
    fromJSON(_: any): MsgUnstakeClientResponse;
    toJSON(_: MsgUnstakeClientResponse): unknown;
    fromPartial(_: Partial<MsgUnstakeClientResponse>): MsgUnstakeClientResponse;
};
export declare const MsgRelayPayment: {
    encode(message: MsgRelayPayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayPayment;
    fromJSON(object: any): MsgRelayPayment;
    toJSON(message: MsgRelayPayment): unknown;
    fromPartial(object: Partial<MsgRelayPayment>): MsgRelayPayment;
};
export declare const MsgRelayPaymentResponse: {
    encode(_: MsgRelayPaymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRelayPaymentResponse;
    fromJSON(_: any): MsgRelayPaymentResponse;
    toJSON(_: MsgRelayPaymentResponse): unknown;
    fromPartial(_: Partial<MsgRelayPaymentResponse>): MsgRelayPaymentResponse;
};
export declare const MsgFreezeProvider: {
    encode(message: MsgFreezeProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFreezeProvider;
    fromJSON(object: any): MsgFreezeProvider;
    toJSON(message: MsgFreezeProvider): unknown;
    fromPartial(object: Partial<MsgFreezeProvider>): MsgFreezeProvider;
};
export declare const MsgFreezeProviderResponse: {
    encode(_: MsgFreezeProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFreezeProviderResponse;
    fromJSON(_: any): MsgFreezeProviderResponse;
    toJSON(_: MsgFreezeProviderResponse): unknown;
    fromPartial(_: Partial<MsgFreezeProviderResponse>): MsgFreezeProviderResponse;
};
export declare const MsgUnfreezeProvider: {
    encode(message: MsgUnfreezeProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfreezeProvider;
    fromJSON(object: any): MsgUnfreezeProvider;
    toJSON(message: MsgUnfreezeProvider): unknown;
    fromPartial(object: Partial<MsgUnfreezeProvider>): MsgUnfreezeProvider;
};
export declare const MsgUnfreezeProviderResponse: {
    encode(_: MsgUnfreezeProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfreezeProviderResponse;
    fromJSON(_: any): MsgUnfreezeProviderResponse;
    toJSON(_: MsgUnfreezeProviderResponse): unknown;
    fromPartial(_: Partial<MsgUnfreezeProviderResponse>): MsgUnfreezeProviderResponse;
};
