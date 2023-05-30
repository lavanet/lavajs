import { AminoMsg } from "@cosmjs/amino";
import { MsgStakeProvider, MsgStakeClient, MsgUnstakeProvider, MsgUnstakeClient, MsgRelayPayment, MsgFreezeProvider, MsgUnfreezeProvider } from "./tx";
export interface MsgStakeProviderAminoType extends AminoMsg {
    type: "/lavanet.lava.pairing.MsgStakeProvider";
    value: {
        creator: string;
        chainID: string;
        amount: {
            denom: string;
            amount: string;
        };
        endpoints: {
            iPPORT: string;
            useType: string;
            geolocation: string;
        }[];
        geolocation: string;
        moniker: string;
    };
}
export interface MsgStakeClientAminoType extends AminoMsg {
    type: "/lavanet.lava.pairing.MsgStakeClient";
    value: {
        creator: string;
        chainID: string;
        amount: {
            denom: string;
            amount: string;
        };
        geolocation: string;
    };
}
export interface MsgUnstakeProviderAminoType extends AminoMsg {
    type: "/lavanet.lava.pairing.MsgUnstakeProvider";
    value: {
        creator: string;
        chainID: string;
    };
}
export interface MsgUnstakeClientAminoType extends AminoMsg {
    type: "/lavanet.lava.pairing.MsgUnstakeClient";
    value: {
        creator: string;
        chainID: string;
    };
}
export interface MsgRelayPaymentAminoType extends AminoMsg {
    type: "/lavanet.lava.pairing.MsgRelayPayment";
    value: {
        creator: string;
        relays: {
            spec_id: string;
            content_hash: Uint8Array;
            session_id: string;
            cu_sum: string;
            provider: string;
            relay_num: string;
            qos_report: {
                latency: string;
                availability: string;
                sync: string;
            };
            epoch: string;
            unresponsive_providers: Uint8Array;
            lava_chain_id: string;
            sig: Uint8Array;
            badge: {
                cu_allocation: string;
                epoch: string;
                address: string;
                lava_chain_id: string;
                project_sig: Uint8Array;
            };
        }[];
        descriptionString: string;
    };
}
export interface MsgFreezeProviderAminoType extends AminoMsg {
    type: "/lavanet.lava.pairing.MsgFreezeProvider";
    value: {
        creator: string;
        chainIds: string[];
        reason: string;
    };
}
export interface MsgUnfreezeProviderAminoType extends AminoMsg {
    type: "/lavanet.lava.pairing.MsgUnfreezeProvider";
    value: {
        creator: string;
        chainIds: string[];
    };
}
export declare const AminoConverter: {
    "/lavanet.lava.pairing.MsgStakeProvider": {
        aminoType: string;
        toAmino: ({ creator, chainID, amount, endpoints, geolocation, moniker }: MsgStakeProvider) => MsgStakeProviderAminoType["value"];
        fromAmino: ({ creator, chainID, amount, endpoints, geolocation, moniker }: MsgStakeProviderAminoType["value"]) => MsgStakeProvider;
    };
    "/lavanet.lava.pairing.MsgStakeClient": {
        aminoType: string;
        toAmino: ({ creator, chainID, amount, geolocation }: MsgStakeClient) => MsgStakeClientAminoType["value"];
        fromAmino: ({ creator, chainID, amount, geolocation }: MsgStakeClientAminoType["value"]) => MsgStakeClient;
    };
    "/lavanet.lava.pairing.MsgUnstakeProvider": {
        aminoType: string;
        toAmino: ({ creator, chainID }: MsgUnstakeProvider) => MsgUnstakeProviderAminoType["value"];
        fromAmino: ({ creator, chainID }: MsgUnstakeProviderAminoType["value"]) => MsgUnstakeProvider;
    };
    "/lavanet.lava.pairing.MsgUnstakeClient": {
        aminoType: string;
        toAmino: ({ creator, chainID }: MsgUnstakeClient) => MsgUnstakeClientAminoType["value"];
        fromAmino: ({ creator, chainID }: MsgUnstakeClientAminoType["value"]) => MsgUnstakeClient;
    };
    "/lavanet.lava.pairing.MsgRelayPayment": {
        aminoType: string;
        toAmino: ({ creator, relays, descriptionString }: MsgRelayPayment) => MsgRelayPaymentAminoType["value"];
        fromAmino: ({ creator, relays, descriptionString }: MsgRelayPaymentAminoType["value"]) => MsgRelayPayment;
    };
    "/lavanet.lava.pairing.MsgFreezeProvider": {
        aminoType: string;
        toAmino: ({ creator, chainIds, reason }: MsgFreezeProvider) => MsgFreezeProviderAminoType["value"];
        fromAmino: ({ creator, chainIds, reason }: MsgFreezeProviderAminoType["value"]) => MsgFreezeProvider;
    };
    "/lavanet.lava.pairing.MsgUnfreezeProvider": {
        aminoType: string;
        toAmino: ({ creator, chainIds }: MsgUnfreezeProvider) => MsgUnfreezeProviderAminoType["value"];
        fromAmino: ({ creator, chainIds }: MsgUnfreezeProviderAminoType["value"]) => MsgUnfreezeProvider;
    };
};
