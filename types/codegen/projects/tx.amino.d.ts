import { AminoMsg } from "@cosmjs/amino";
import { MsgAddKeys, MsgSetPolicy, MsgSetSubscriptionPolicy } from "./tx";
export interface MsgAddKeysAminoType extends AminoMsg {
    type: "/lavanet.lava.projects.MsgAddKeys";
    value: {
        creator: string;
        project: string;
        project_keys: {
            key: string;
            types: {
                types: number;
            }[];
        }[];
    };
}
export interface MsgSetPolicyAminoType extends AminoMsg {
    type: "/lavanet.lava.projects.MsgSetPolicy";
    value: {
        creator: string;
        project: string;
        policy: {
            chain_policies: {
                chain_id: string;
                apis: string[];
            }[];
            geolocation_profile: string;
            total_cu_limit: string;
            epoch_cu_limit: string;
            max_providers_to_pair: string;
        };
    };
}
export interface MsgSetSubscriptionPolicyAminoType extends AminoMsg {
    type: "/lavanet.lava.projects.MsgSetSubscriptionPolicy";
    value: {
        creator: string;
        projects: string[];
        policy: {
            chain_policies: {
                chain_id: string;
                apis: string[];
            }[];
            geolocation_profile: string;
            total_cu_limit: string;
            epoch_cu_limit: string;
            max_providers_to_pair: string;
        };
    };
}
export declare const AminoConverter: {
    "/lavanet.lava.projects.MsgAddKeys": {
        aminoType: string;
        toAmino: ({ creator, project, projectKeys }: MsgAddKeys) => MsgAddKeysAminoType["value"];
        fromAmino: ({ creator, project, project_keys }: MsgAddKeysAminoType["value"]) => MsgAddKeys;
    };
    "/lavanet.lava.projects.MsgSetPolicy": {
        aminoType: string;
        toAmino: ({ creator, project, policy }: MsgSetPolicy) => MsgSetPolicyAminoType["value"];
        fromAmino: ({ creator, project, policy }: MsgSetPolicyAminoType["value"]) => MsgSetPolicy;
    };
    "/lavanet.lava.projects.MsgSetSubscriptionPolicy": {
        aminoType: string;
        toAmino: ({ creator, projects, policy }: MsgSetSubscriptionPolicy) => MsgSetSubscriptionPolicyAminoType["value"];
        fromAmino: ({ creator, projects, policy }: MsgSetSubscriptionPolicyAminoType["value"]) => MsgSetSubscriptionPolicy;
    };
};
