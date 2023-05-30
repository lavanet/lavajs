import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStakeProvider, MsgStakeClient, MsgUnstakeProvider, MsgUnstakeClient, MsgRelayPayment, MsgFreezeProvider, MsgUnfreezeProvider } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        stakeProvider(value: MsgStakeProvider): {
            typeUrl: string;
            value: Uint8Array;
        };
        stakeClient(value: MsgStakeClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        unstakeProvider(value: MsgUnstakeProvider): {
            typeUrl: string;
            value: Uint8Array;
        };
        unstakeClient(value: MsgUnstakeClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        relayPayment(value: MsgRelayPayment): {
            typeUrl: string;
            value: Uint8Array;
        };
        freezeProvider(value: MsgFreezeProvider): {
            typeUrl: string;
            value: Uint8Array;
        };
        unfreezeProvider(value: MsgUnfreezeProvider): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        stakeProvider(value: MsgStakeProvider): {
            typeUrl: string;
            value: MsgStakeProvider;
        };
        stakeClient(value: MsgStakeClient): {
            typeUrl: string;
            value: MsgStakeClient;
        };
        unstakeProvider(value: MsgUnstakeProvider): {
            typeUrl: string;
            value: MsgUnstakeProvider;
        };
        unstakeClient(value: MsgUnstakeClient): {
            typeUrl: string;
            value: MsgUnstakeClient;
        };
        relayPayment(value: MsgRelayPayment): {
            typeUrl: string;
            value: MsgRelayPayment;
        };
        freezeProvider(value: MsgFreezeProvider): {
            typeUrl: string;
            value: MsgFreezeProvider;
        };
        unfreezeProvider(value: MsgUnfreezeProvider): {
            typeUrl: string;
            value: MsgUnfreezeProvider;
        };
    };
    toJSON: {
        stakeProvider(value: MsgStakeProvider): {
            typeUrl: string;
            value: unknown;
        };
        stakeClient(value: MsgStakeClient): {
            typeUrl: string;
            value: unknown;
        };
        unstakeProvider(value: MsgUnstakeProvider): {
            typeUrl: string;
            value: unknown;
        };
        unstakeClient(value: MsgUnstakeClient): {
            typeUrl: string;
            value: unknown;
        };
        relayPayment(value: MsgRelayPayment): {
            typeUrl: string;
            value: unknown;
        };
        freezeProvider(value: MsgFreezeProvider): {
            typeUrl: string;
            value: unknown;
        };
        unfreezeProvider(value: MsgUnfreezeProvider): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        stakeProvider(value: any): {
            typeUrl: string;
            value: MsgStakeProvider;
        };
        stakeClient(value: any): {
            typeUrl: string;
            value: MsgStakeClient;
        };
        unstakeProvider(value: any): {
            typeUrl: string;
            value: MsgUnstakeProvider;
        };
        unstakeClient(value: any): {
            typeUrl: string;
            value: MsgUnstakeClient;
        };
        relayPayment(value: any): {
            typeUrl: string;
            value: MsgRelayPayment;
        };
        freezeProvider(value: any): {
            typeUrl: string;
            value: MsgFreezeProvider;
        };
        unfreezeProvider(value: any): {
            typeUrl: string;
            value: MsgUnfreezeProvider;
        };
    };
    fromPartial: {
        stakeProvider(value: MsgStakeProvider): {
            typeUrl: string;
            value: MsgStakeProvider;
        };
        stakeClient(value: MsgStakeClient): {
            typeUrl: string;
            value: MsgStakeClient;
        };
        unstakeProvider(value: MsgUnstakeProvider): {
            typeUrl: string;
            value: MsgUnstakeProvider;
        };
        unstakeClient(value: MsgUnstakeClient): {
            typeUrl: string;
            value: MsgUnstakeClient;
        };
        relayPayment(value: MsgRelayPayment): {
            typeUrl: string;
            value: MsgRelayPayment;
        };
        freezeProvider(value: MsgFreezeProvider): {
            typeUrl: string;
            value: MsgFreezeProvider;
        };
        unfreezeProvider(value: MsgUnfreezeProvider): {
            typeUrl: string;
            value: MsgUnfreezeProvider;
        };
    };
};
