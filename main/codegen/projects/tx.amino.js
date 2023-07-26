"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _plan = require("../plans/plan");
var _helpers = require("../helpers");
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
              apis: el0.apis
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
              apis: el1.apis
            };
          }),
          geolocationProfile: _helpers.Long.fromString(policy.geolocation_profile),
          totalCuLimit: _helpers.Long.fromString(policy.total_cu_limit),
          epochCuLimit: _helpers.Long.fromString(policy.epoch_cu_limit),
          maxProvidersToPair: _helpers.Long.fromString(policy.max_providers_to_pair),
          selectedProvidersMode: (0, _plan.sELECTED_PROVIDERS_MODEFromJSON)(policy.selected_providers_mode),
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
              apis: el0.apis
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
              apis: el1.apis
            };
          }),
          geolocationProfile: _helpers.Long.fromString(policy.geolocation_profile),
          totalCuLimit: _helpers.Long.fromString(policy.total_cu_limit),
          epochCuLimit: _helpers.Long.fromString(policy.epoch_cu_limit),
          maxProvidersToPair: _helpers.Long.fromString(policy.max_providers_to_pair),
          selectedProvidersMode: (0, _plan.sELECTED_PROVIDERS_MODEFromJSON)(policy.selected_providers_mode),
          selectedProviders: policy.selected_providers
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;