"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _policy = require("../plans/policy");
var AminoConverter = {
  "/lavanet.lava.projects.MsgAddKeys": {
    aminoType: "/lavanet.lava.projects.MsgAddKeys",
    toAmino: function toAmino(_ref) {
      var creator = _ref.creator,
        project = _ref.project,
        projectKeys = _ref.projectKeys;
      return {
        creator: creator,
        project: project,
        project_keys: projectKeys.map(function (el0) {
          return {
            key: el0.key,
            kinds: el0.kinds
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var creator = _ref2.creator,
        project = _ref2.project,
        project_keys = _ref2.project_keys;
      return {
        creator: creator,
        project: project,
        projectKeys: project_keys.map(function (el0) {
          return {
            key: el0.key,
            kinds: el0.kinds
          };
        })
      };
    }
  },
  "/lavanet.lava.projects.MsgDelKeys": {
    aminoType: "/lavanet.lava.projects.MsgDelKeys",
    toAmino: function toAmino(_ref3) {
      var creator = _ref3.creator,
        project = _ref3.project,
        projectKeys = _ref3.projectKeys;
      return {
        creator: creator,
        project: project,
        project_keys: projectKeys.map(function (el0) {
          return {
            key: el0.key,
            kinds: el0.kinds
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var creator = _ref4.creator,
        project = _ref4.project,
        project_keys = _ref4.project_keys;
      return {
        creator: creator,
        project: project,
        projectKeys: project_keys.map(function (el0) {
          return {
            key: el0.key,
            kinds: el0.kinds
          };
        })
      };
    }
  },
  "/lavanet.lava.projects.MsgSetPolicy": {
    aminoType: "/lavanet.lava.projects.MsgSetPolicy",
    toAmino: function toAmino(_ref5) {
      var creator = _ref5.creator,
        project = _ref5.project,
        policy = _ref5.policy;
      return {
        creator: creator,
        project: project,
        policy: {
          chain_policies: policy.chainPolicies.map(function (el0) {
            return {
              chain_id: el0.chainId,
              apis: el0.apis,
              requirements: el0.requirements.map(function (el1) {
                return {
                  collection: {
                    api_interface: el1.collection.apiInterface,
                    internal_path: el1.collection.internalPath,
                    type: el1.collection.type,
                    add_on: el1.collection.addOn
                  },
                  extensions: el1.extensions
                };
              })
            };
          }),
          geolocation_profile: policy.geolocationProfile.toString(),
          total_cu_limit: policy.totalCuLimit.toString(),
          epoch_cu_limit: policy.epochCuLimit.toString(),
          max_providers_to_pair: policy.maxProvidersToPair.toString(),
          selected_providers_mode: policy.selectedProvidersMode,
          selected_providers: policy.selectedProviders
        }
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var creator = _ref6.creator,
        project = _ref6.project,
        policy = _ref6.policy;
      return {
        creator: creator,
        project: project,
        policy: {
          chainPolicies: policy.chain_policies.map(function (el1) {
            return {
              chainId: el1.chain_id,
              apis: el1.apis,
              requirements: el1.requirements.map(function (el2) {
                return {
                  collection: {
                    apiInterface: el2.collection.api_interface,
                    internalPath: el2.collection.internal_path,
                    type: el2.collection.type,
                    addOn: el2.collection.add_on
                  },
                  extensions: el2.extensions
                };
              })
            };
          }),
          geolocationProfile: BigInt(policy.geolocation_profile),
          totalCuLimit: BigInt(policy.total_cu_limit),
          epochCuLimit: BigInt(policy.epoch_cu_limit),
          maxProvidersToPair: BigInt(policy.max_providers_to_pair),
          selectedProvidersMode: (0, _policy.sELECTED_PROVIDERS_MODEFromJSON)(policy.selected_providers_mode),
          selectedProviders: policy.selected_providers
        }
      };
    }
  },
  "/lavanet.lava.projects.MsgSetSubscriptionPolicy": {
    aminoType: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
    toAmino: function toAmino(_ref7) {
      var creator = _ref7.creator,
        projects = _ref7.projects,
        policy = _ref7.policy;
      return {
        creator: creator,
        projects: projects,
        policy: {
          chain_policies: policy.chainPolicies.map(function (el0) {
            return {
              chain_id: el0.chainId,
              apis: el0.apis,
              requirements: el0.requirements.map(function (el1) {
                return {
                  collection: {
                    api_interface: el1.collection.apiInterface,
                    internal_path: el1.collection.internalPath,
                    type: el1.collection.type,
                    add_on: el1.collection.addOn
                  },
                  extensions: el1.extensions
                };
              })
            };
          }),
          geolocation_profile: policy.geolocationProfile.toString(),
          total_cu_limit: policy.totalCuLimit.toString(),
          epoch_cu_limit: policy.epochCuLimit.toString(),
          max_providers_to_pair: policy.maxProvidersToPair.toString(),
          selected_providers_mode: policy.selectedProvidersMode,
          selected_providers: policy.selectedProviders
        }
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var creator = _ref8.creator,
        projects = _ref8.projects,
        policy = _ref8.policy;
      return {
        creator: creator,
        projects: projects,
        policy: {
          chainPolicies: policy.chain_policies.map(function (el1) {
            return {
              chainId: el1.chain_id,
              apis: el1.apis,
              requirements: el1.requirements.map(function (el2) {
                return {
                  collection: {
                    apiInterface: el2.collection.api_interface,
                    internalPath: el2.collection.internal_path,
                    type: el2.collection.type,
                    addOn: el2.collection.add_on
                  },
                  extensions: el2.extensions
                };
              })
            };
          }),
          geolocationProfile: BigInt(policy.geolocation_profile),
          totalCuLimit: BigInt(policy.total_cu_limit),
          epochCuLimit: BigInt(policy.epoch_cu_limit),
          maxProvidersToPair: BigInt(policy.max_providers_to_pair),
          selectedProvidersMode: (0, _policy.sELECTED_PROVIDERS_MODEFromJSON)(policy.selected_providers_mode),
          selectedProviders: policy.selected_providers
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;