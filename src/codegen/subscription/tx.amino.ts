//@ts-nocheck
import { sELECTED_PROVIDERS_MODEFromJSON } from "../projects/project";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import { MsgBuy, MsgAddProject, MsgDelProject } from "./tx";
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
        selected_providers_mode: number;
        selected_providers: string[];
      };
    };
  };
}
export interface MsgDelProjectAminoType extends AminoMsg {
  type: "/lavanet.lava.subscription.MsgDelProject";
  value: {
    creator: string;
    name: string;
  };
}
export const AminoConverter = {
  "/lavanet.lava.subscription.MsgBuy": {
    aminoType: "/lavanet.lava.subscription.MsgBuy",
    toAmino: ({
      creator,
      consumer,
      index,
      duration
    }: MsgBuy): MsgBuyAminoType["value"] => {
      return {
        creator,
        consumer,
        index,
        duration: duration.toString()
      };
    },
    fromAmino: ({
      creator,
      consumer,
      index,
      duration
    }: MsgBuyAminoType["value"]): MsgBuy => {
      return {
        creator,
        consumer,
        index,
        duration: Long.fromString(duration)
      };
    }
  },
  "/lavanet.lava.subscription.MsgAddProject": {
    aminoType: "/lavanet.lava.subscription.MsgAddProject",
    toAmino: ({
      creator,
      projectData
    }: MsgAddProject): MsgAddProjectAminoType["value"] => {
      return {
        creator,
        project_data: {
          name: projectData.name,
          enabled: projectData.enabled,
          projectKeys: projectData.projectKeys.map(el0 => ({
            key: el0.key,
            kinds: el0.kinds
          })),
          policy: {
            chain_policies: projectData.policy.chainPolicies.map(el0 => ({
              chain_id: el0.chainId,
              apis: el0.apis
            })),
            geolocation_profile: projectData.policy.geolocationProfile.toString(),
            total_cu_limit: projectData.policy.totalCuLimit.toString(),
            epoch_cu_limit: projectData.policy.epochCuLimit.toString(),
            max_providers_to_pair: projectData.policy.maxProvidersToPair.toString(),
            selected_providers_mode: projectData.policy.selectedProvidersMode,
            selected_providers: projectData.policy.selectedProviders
          }
        }
      };
    },
    fromAmino: ({
      creator,
      project_data
    }: MsgAddProjectAminoType["value"]): MsgAddProject => {
      return {
        creator,
        projectData: {
          name: project_data.name,
          enabled: project_data.enabled,
          projectKeys: project_data.projectKeys.map(el1 => ({
            key: el1.key,
            kinds: el1.kinds
          })),
          policy: {
            chainPolicies: project_data.policy.chain_policies.map(el2 => ({
              chainId: el2.chain_id,
              apis: el2.apis
            })),
            geolocationProfile: Long.fromString(project_data.policy.geolocation_profile),
            totalCuLimit: Long.fromString(project_data.policy.total_cu_limit),
            epochCuLimit: Long.fromString(project_data.policy.epoch_cu_limit),
            maxProvidersToPair: Long.fromString(project_data.policy.max_providers_to_pair),
            selectedProvidersMode: sELECTED_PROVIDERS_MODEFromJSON(project_data.policy.selected_providers_mode),
            selectedProviders: project_data.policy.selected_providers
          }
        }
      };
    }
  },
  "/lavanet.lava.subscription.MsgDelProject": {
    aminoType: "/lavanet.lava.subscription.MsgDelProject",
    toAmino: ({
      creator,
      name
    }: MsgDelProject): MsgDelProjectAminoType["value"] => {
      return {
        creator,
        name
      };
    },
    fromAmino: ({
      creator,
      name
    }: MsgDelProjectAminoType["value"]): MsgDelProject => {
      return {
        creator,
        name
      };
    }
  }
};