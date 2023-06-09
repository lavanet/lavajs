//@ts-nocheck
import { sELECTED_PROVIDERS_MODEFromJSON } from "./project";
import { Long } from "../helpers";
export const AminoConverter = {
  "/lavanet.lava.projects.MsgAddKeys": {
    aminoType: "/lavanet.lava.projects.MsgAddKeys",
    toAmino: ({
      creator,
      project,
      projectKeys
    }) => {
      return {
        creator,
        project,
        project_keys: projectKeys.map(el0 => ({
          key: el0.key,
          kinds: el0.kinds
        }))
      };
    },
    fromAmino: ({
      creator,
      project,
      project_keys
    }) => {
      return {
        creator,
        project,
        projectKeys: project_keys.map(el0 => ({
          key: el0.key,
          kinds: el0.kinds
        }))
      };
    }
  },
  "/lavanet.lava.projects.MsgDelKeys": {
    aminoType: "/lavanet.lava.projects.MsgDelKeys",
    toAmino: ({
      creator,
      project,
      projectKeys
    }) => {
      return {
        creator,
        project,
        project_keys: projectKeys.map(el0 => ({
          key: el0.key,
          kinds: el0.kinds
        }))
      };
    },
    fromAmino: ({
      creator,
      project,
      project_keys
    }) => {
      return {
        creator,
        project,
        projectKeys: project_keys.map(el0 => ({
          key: el0.key,
          kinds: el0.kinds
        }))
      };
    }
  },
  "/lavanet.lava.projects.MsgSetPolicy": {
    aminoType: "/lavanet.lava.projects.MsgSetPolicy",
    toAmino: ({
      creator,
      project,
      policy
    }) => {
      return {
        creator,
        project,
        policy: {
          chain_policies: policy.chainPolicies.map(el0 => ({
            chain_id: el0.chainId,
            apis: el0.apis
          })),
          geolocation_profile: policy.geolocationProfile.toString(),
          total_cu_limit: policy.totalCuLimit.toString(),
          epoch_cu_limit: policy.epochCuLimit.toString(),
          max_providers_to_pair: policy.maxProvidersToPair.toString(),
          selected_providers_mode: policy.selectedProvidersMode,
          selected_providers: policy.selectedProviders
        }
      };
    },
    fromAmino: ({
      creator,
      project,
      policy
    }) => {
      return {
        creator,
        project,
        policy: {
          chainPolicies: policy.chain_policies.map(el1 => ({
            chainId: el1.chain_id,
            apis: el1.apis
          })),
          geolocationProfile: Long.fromString(policy.geolocation_profile),
          totalCuLimit: Long.fromString(policy.total_cu_limit),
          epochCuLimit: Long.fromString(policy.epoch_cu_limit),
          maxProvidersToPair: Long.fromString(policy.max_providers_to_pair),
          selectedProvidersMode: sELECTED_PROVIDERS_MODEFromJSON(policy.selected_providers_mode),
          selectedProviders: policy.selected_providers
        }
      };
    }
  },
  "/lavanet.lava.projects.MsgSetSubscriptionPolicy": {
    aminoType: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
    toAmino: ({
      creator,
      projects,
      policy
    }) => {
      return {
        creator,
        projects,
        policy: {
          chain_policies: policy.chainPolicies.map(el0 => ({
            chain_id: el0.chainId,
            apis: el0.apis
          })),
          geolocation_profile: policy.geolocationProfile.toString(),
          total_cu_limit: policy.totalCuLimit.toString(),
          epoch_cu_limit: policy.epochCuLimit.toString(),
          max_providers_to_pair: policy.maxProvidersToPair.toString(),
          selected_providers_mode: policy.selectedProvidersMode,
          selected_providers: policy.selectedProviders
        }
      };
    },
    fromAmino: ({
      creator,
      projects,
      policy
    }) => {
      return {
        creator,
        projects,
        policy: {
          chainPolicies: policy.chain_policies.map(el1 => ({
            chainId: el1.chain_id,
            apis: el1.apis
          })),
          geolocationProfile: Long.fromString(policy.geolocation_profile),
          totalCuLimit: Long.fromString(policy.total_cu_limit),
          epochCuLimit: Long.fromString(policy.epoch_cu_limit),
          maxProvidersToPair: Long.fromString(policy.max_providers_to_pair),
          selectedProvidersMode: sELECTED_PROVIDERS_MODEFromJSON(policy.selected_providers_mode),
          selectedProviders: policy.selected_providers
        }
      };
    }
  }
};