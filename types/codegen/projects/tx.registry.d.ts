import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddKeys, MsgSetPolicy, MsgSetSubscriptionPolicy } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addKeys(value: MsgAddKeys): {
            typeUrl: string;
            value: Uint8Array;
        };
        setPolicy(value: MsgSetPolicy): {
            typeUrl: string;
            value: Uint8Array;
        };
        setSubscriptionPolicy(value: MsgSetSubscriptionPolicy): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        addKeys(value: MsgAddKeys): {
            typeUrl: string;
            value: MsgAddKeys;
        };
        setPolicy(value: MsgSetPolicy): {
            typeUrl: string;
            value: MsgSetPolicy;
        };
        setSubscriptionPolicy(value: MsgSetSubscriptionPolicy): {
            typeUrl: string;
            value: MsgSetSubscriptionPolicy;
        };
    };
    toJSON: {
        addKeys(value: MsgAddKeys): {
            typeUrl: string;
            value: unknown;
        };
        setPolicy(value: MsgSetPolicy): {
            typeUrl: string;
            value: unknown;
        };
        setSubscriptionPolicy(value: MsgSetSubscriptionPolicy): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        addKeys(value: any): {
            typeUrl: string;
            value: MsgAddKeys;
        };
        setPolicy(value: any): {
            typeUrl: string;
            value: MsgSetPolicy;
        };
        setSubscriptionPolicy(value: any): {
            typeUrl: string;
            value: MsgSetSubscriptionPolicy;
        };
    };
    fromPartial: {
        addKeys(value: MsgAddKeys): {
            typeUrl: string;
            value: MsgAddKeys;
        };
        setPolicy(value: MsgSetPolicy): {
            typeUrl: string;
            value: MsgSetPolicy;
        };
        setSubscriptionPolicy(value: MsgSetSubscriptionPolicy): {
            typeUrl: string;
            value: MsgSetSubscriptionPolicy;
        };
    };
};
