"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _project = require("../projects/project");
var _helpers = require("../helpers");
//@ts-nocheck

var AminoConverter = {
  "/lavanet.lava.subscription.MsgBuy": {
    aminoType: "/lavanet.lava.subscription.MsgBuy",
    toAmino: function toAmino(_ref) {
      var creator = _ref.creator,
        consumer = _ref.consumer,
        index = _ref.index,
        duration = _ref.duration;
      return {
        creator: creator,
        consumer: consumer,
        index: index,
        duration: duration.toString()
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var creator = _ref2.creator,
        consumer = _ref2.consumer,
        index = _ref2.index,
        duration = _ref2.duration;
      return {
        creator: creator,
        consumer: consumer,
        index: index,
        duration: _helpers.Long.fromString(duration)
      };
    }
  },
  "/lavanet.lava.subscription.MsgAddProject": {
    aminoType: "/lavanet.lava.subscription.MsgAddProject",
    toAmino: function toAmino(_ref3) {
      var creator = _ref3.creator,
        projectData = _ref3.projectData;
      return {
        creator: creator,
        project_data: {
          name: projectData.name,
          enabled: projectData.enabled,
          projectKeys: projectData.projectKeys.map(function (el0) {
            return {
              key: el0.key,
              kinds: el0.kinds
            };
          }),
          policy: {
            chain_policies: projectData.policy.chainPolicies.map(function (el0) {
              return {
                chain_id: el0.chainId,
                apis: el0.apis
              };
            }),
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
    fromAmino: function fromAmino(_ref4) {
      var creator = _ref4.creator,
        project_data = _ref4.project_data;
      return {
        creator: creator,
        projectData: {
          name: project_data.name,
          enabled: project_data.enabled,
          projectKeys: project_data.projectKeys.map(function (el1) {
            return {
              key: el1.key,
              kinds: el1.kinds
            };
          }),
          policy: {
            chainPolicies: project_data.policy.chain_policies.map(function (el2) {
              return {
                chainId: el2.chain_id,
                apis: el2.apis
              };
            }),
            geolocationProfile: _helpers.Long.fromString(project_data.policy.geolocation_profile),
            totalCuLimit: _helpers.Long.fromString(project_data.policy.total_cu_limit),
            epochCuLimit: _helpers.Long.fromString(project_data.policy.epoch_cu_limit),
            maxProvidersToPair: _helpers.Long.fromString(project_data.policy.max_providers_to_pair),
            selectedProvidersMode: (0, _project.sELECTED_PROVIDERS_MODEFromJSON)(project_data.policy.selected_providers_mode),
            selectedProviders: project_data.policy.selected_providers
          }
        }
      };
    }
  }
};
exports.AminoConverter = AminoConverter;