import { Long } from "../helpers";
import { sELECTED_PROVIDERS_MODEFromJSON } from "../plans/plan";
export const AminoConverter = {
  "/lavanet.lava.subscription.MsgBuy": {
    aminoType: "/lavanet.lava.subscription.MsgBuy",
    toAmino: ({
      creator,
      consumer,
      index,
      duration
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
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
    }) => {
      return {
        creator,
        name
      };
    },
    fromAmino: ({
      creator,
      name
    }) => {
      return {
        creator,
        name
      };
    }
  }
};