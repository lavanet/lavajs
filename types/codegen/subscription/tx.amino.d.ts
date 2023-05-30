import { AminoMsg } from "@cosmjs/amino";
import { MsgBuy, MsgAddProject } from "./tx";
export interface MsgBuyAminoType extends AminoMsg {
    type: "/lavanet.lava.subscription.MsgBuy";
    value: {
        creator: string;
        consumer: string;
        index: string;
        duration: string;
    };
}
export interface MsgAddProjectAminoType extends AminoMsg {
    type: "/lavanet.lava.subscription.MsgAddProject";
    value: {
        creator: string;
        project_data: {
            name: string;
            description: string;
            enabled: boolean;
            projectKeys: {
                key: string;
                kinds: number;
            }[];
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
    };
}
export declare const AminoConverter: {
    "/lavanet.lava.subscription.MsgBuy": {
        aminoType: string;
        toAmino: ({ creator, consumer, index, duration }: MsgBuy) => MsgBuyAminoType["value"];
        fromAmino: ({ creator, consumer, index, duration }: MsgBuyAminoType["value"]) => MsgBuy;
    };
    "/lavanet.lava.subscription.MsgAddProject": {
        aminoType: string;
        toAmino: ({ creator, projectData }: MsgAddProject) => MsgAddProjectAminoType["value"];
        fromAmino: ({ creator, project_data }: MsgAddProjectAminoType["value"]) => MsgAddProject;
    };
};
