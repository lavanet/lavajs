"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _project = require("./project");
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
            types: el0.types.map(function (el1) {
              return {
                types: el1.types
              };
            })
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
            types: el0.types.map(function (el1) {
              return {
                types: (0, _project.keyTypeFromJSON)(el1.types)
              };
            })
          };
        })
      };
    }
  },
  "/lavanet.lava.projects.MsgSetPolicy": {
    aminoType: "/lavanet.lava.projects.MsgSetPolicy",
    toAmino: function toAmino(_ref3) {
      var creator = _ref3.creator,
        project = _ref3.project,
        policy = _ref3.policy;
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
          max_providers_to_pair: policy.maxProvidersToPair.toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var creator = _ref4.creator,
        project = _ref4.project,
        policy = _ref4.policy;
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
          maxProvidersToPair: _helpers.Long.fromString(policy.max_providers_to_pair)
        }
      };
    }
  },
  "/lavanet.lava.projects.MsgSetSubscriptionPolicy": {
    aminoType: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
    toAmino: function toAmino(_ref5) {
      var creator = _ref5.creator,
        projects = _ref5.projects,
        policy = _ref5.policy;
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
          max_providers_to_pair: policy.maxProvidersToPair.toString()
        }
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var creator = _ref6.creator,
        projects = _ref6.projects,
        policy = _ref6.policy;
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
          maxProvidersToPair: _helpers.Long.fromString(policy.max_providers_to_pair)
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;