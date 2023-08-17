import { sELECTED_PROVIDERS_MODEFromJSON } from "../plans/policy";
import { AminoMsg } from "@cosmjs/amino";
import { MsgAddKeys, MsgDelKeys, MsgSetPolicy, MsgSetSubscriptionPolicy } from "./tx";
export interface MsgAddKeysAminoType extends AminoMsg {
  type: "/lavanet.lava.projects.MsgAddKeys";
  value: {
    creator: string;
    project: string;
    project_keys: {
      key: string;
      kinds: number;
    }[];
  };
}
export interface MsgDelKeysAminoType extends AminoMsg {
  type: "/lavanet.lava.projects.MsgDelKeys";
  value: {
    creator: string;
    project: string;
    project_keys: {
      key: string;
      kinds: number;
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
        requirements: {
          collection: {
            api_interface: string;
            internal_path: string;
            type: string;
            add_on: string;
          };
          extensions: string[];
        }[];
      }[];
      geolocation_profile: string;
      total_cu_limit: string;
      epoch_cu_limit: string;
      max_providers_to_pair: string;
      selected_providers_mode: number;
      selected_providers: string[];
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
        requirements: {
          collection: {
            api_interface: string;
            internal_path: string;
            type: string;
            add_on: string;
          };
          extensions: string[];
        }[];
      }[];
      geolocation_profile: string;
      total_cu_limit: string;
      epoch_cu_limit: string;
      max_providers_to_pair: string;
      selected_providers_mode: number;
      selected_providers: string[];
    };
  };
}
export const AminoConverter = {
  "/lavanet.lava.projects.MsgAddKeys": {
    aminoType: "/lavanet.lava.projects.MsgAddKeys",
    toAmino: ({
      creator,
      project,
      projectKeys
    }: MsgAddKeys): MsgAddKeysAminoType["value"] => {
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
    }: MsgAddKeysAminoType["value"]): MsgAddKeys => {
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
    }: MsgDelKeys): MsgDelKeysAminoType["value"] => {
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
    }: MsgDelKeysAminoType["value"]): MsgDelKeys => {
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
    }: MsgSetPolicy): MsgSetPolicyAminoType["value"] => {
      return {
        creator,
        project,
        policy: {
          chain_policies: policy.chainPolicies.map(el0 => ({
            chain_id: el0.chainId,
            apis: el0.apis,
            requirements: el0.requirements.map(el1 => ({
              collection: {
                api_interface: el1.collection.apiInterface,
                internal_path: el1.collection.internalPath,
                type: el1.collection.type,
                add_on: el1.collection.addOn
              },
              extensions: el1.extensions
            }))
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
    }: MsgSetPolicyAminoType["value"]): MsgSetPolicy => {
      return {
        creator,
        project,
        policy: {
          chainPolicies: policy.chain_policies.map(el1 => ({
            chainId: el1.chain_id,
            apis: el1.apis,
            requirements: el1.requirements.map(el2 => ({
              collection: {
                apiInterface: el2.collection.api_interface,
                internalPath: el2.collection.internal_path,
                type: el2.collection.type,
                addOn: el2.collection.add_on
              },
              extensions: el2.extensions
            }))
          })),
          geolocationProfile: BigInt(policy.geolocation_profile),
          totalCuLimit: BigInt(policy.total_cu_limit),
          epochCuLimit: BigInt(policy.epoch_cu_limit),
          maxProvidersToPair: BigInt(policy.max_providers_to_pair),
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
    }: MsgSetSubscriptionPolicy): MsgSetSubscriptionPolicyAminoType["value"] => {
      return {
        creator,
        projects,
        policy: {
          chain_policies: policy.chainPolicies.map(el0 => ({
            chain_id: el0.chainId,
            apis: el0.apis,
            requirements: el0.requirements.map(el1 => ({
              collection: {
                api_interface: el1.collection.apiInterface,
                internal_path: el1.collection.internalPath,
                type: el1.collection.type,
                add_on: el1.collection.addOn
              },
              extensions: el1.extensions
            }))
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
    }: MsgSetSubscriptionPolicyAminoType["value"]): MsgSetSubscriptionPolicy => {
      return {
        creator,
        projects,
        policy: {
          chainPolicies: policy.chain_policies.map(el1 => ({
            chainId: el1.chain_id,
            apis: el1.apis,
            requirements: el1.requirements.map(el2 => ({
              collection: {
                apiInterface: el2.collection.api_interface,
                internalPath: el2.collection.internal_path,
                type: el2.collection.type,
                addOn: el2.collection.add_on
              },
              extensions: el2.extensions
            }))
          })),
          geolocationProfile: BigInt(policy.geolocation_profile),
          totalCuLimit: BigInt(policy.total_cu_limit),
          epochCuLimit: BigInt(policy.epoch_cu_limit),
          maxProvidersToPair: BigInt(policy.max_providers_to_pair),
          selectedProvidersMode: sELECTED_PROVIDERS_MODEFromJSON(policy.selected_providers_mode),
          selectedProviders: policy.selected_providers
        }
      };
    }
  }
};