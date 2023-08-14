"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("../../../helpers");
var _policy = require("../plans/policy");
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
                apis: el2.apis,
                requirements: el2.requirements.map(function (el3) {
                  return {
                    collection: {
                      apiInterface: el3.collection.api_interface,
                      internalPath: el3.collection.internal_path,
                      type: el3.collection.type,
                      addOn: el3.collection.add_on
                    },
                    extensions: el3.extensions
                  };
                })
              };
            }),
            geolocationProfile: _helpers.Long.fromString(project_data.policy.geolocation_profile),
            totalCuLimit: _helpers.Long.fromString(project_data.policy.total_cu_limit),
            epochCuLimit: _helpers.Long.fromString(project_data.policy.epoch_cu_limit),
            maxProvidersToPair: _helpers.Long.fromString(project_data.policy.max_providers_to_pair),
            selectedProvidersMode: (0, _policy.sELECTED_PROVIDERS_MODEFromJSON)(project_data.policy.selected_providers_mode),
            selectedProviders: project_data.policy.selected_providers
          }
        }
      };
    }
  },
  "/lavanet.lava.subscription.MsgDelProject": {
    aminoType: "/lavanet.lava.subscription.MsgDelProject",
    toAmino: function toAmino(_ref5) {
      var creator = _ref5.creator,
        name = _ref5.name;
      return {
        creator: creator,
        name: name
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var creator = _ref6.creator,
        name = _ref6.name;
      return {
        creator: creator,
        name: name
      };
    }
  }
};
exports.AminoConverter = AminoConverter;