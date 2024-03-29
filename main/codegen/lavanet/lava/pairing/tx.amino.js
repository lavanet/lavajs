"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/lavanet.lava.pairing.MsgStakeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgStakeProvider",
    toAmino: function toAmino(_ref) {
      var creator = _ref.creator,
        chainID = _ref.chainID,
        amount = _ref.amount,
        endpoints = _ref.endpoints,
        geolocation = _ref.geolocation,
        moniker = _ref.moniker;
      return {
        creator: creator,
        chainID: chainID,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        endpoints: endpoints.map(function (el0) {
          return {
            iPPORT: el0.iPPORT,
            geolocation: el0.geolocation.toString(),
            addons: el0.addons,
            api_interfaces: el0.apiInterfaces,
            extensions: el0.extensions
          };
        }),
        geolocation: geolocation.toString(),
        moniker: moniker
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var creator = _ref2.creator,
        chainID = _ref2.chainID,
        amount = _ref2.amount,
        endpoints = _ref2.endpoints,
        geolocation = _ref2.geolocation,
        moniker = _ref2.moniker;
      return {
        creator: creator,
        chainID: chainID,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        endpoints: endpoints.map(function (el0) {
          return {
            iPPORT: el0.iPPORT,
            geolocation: BigInt(el0.geolocation),
            addons: el0.addons,
            apiInterfaces: el0.api_interfaces,
            extensions: el0.extensions
          };
        }),
        geolocation: BigInt(geolocation),
        moniker: moniker
      };
    }
  },
  "/lavanet.lava.pairing.MsgUnstakeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgUnstakeProvider",
    toAmino: function toAmino(_ref3) {
      var creator = _ref3.creator,
        chainID = _ref3.chainID;
      return {
        creator: creator,
        chainID: chainID
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var creator = _ref4.creator,
        chainID = _ref4.chainID;
      return {
        creator: creator,
        chainID: chainID
      };
    }
  },
  "/lavanet.lava.pairing.MsgRelayPayment": {
    aminoType: "/lavanet.lava.pairing.MsgRelayPayment",
    toAmino: function toAmino(_ref5) {
      var creator = _ref5.creator,
        relays = _ref5.relays,
        descriptionString = _ref5.descriptionString;
      return {
        creator: creator,
        relays: relays.map(function (el0) {
          return {
            spec_id: el0.specId,
            content_hash: el0.contentHash,
            session_id: el0.sessionId.toString(),
            cu_sum: el0.cuSum.toString(),
            provider: el0.provider,
            relay_num: el0.relayNum.toString(),
            qos_report: {
              latency: el0.qosReport.latency,
              availability: el0.qosReport.availability,
              sync: el0.qosReport.sync
            },
            epoch: el0.epoch.toString(),
            unresponsive_providers: el0.unresponsiveProviders,
            lava_chain_id: el0.lavaChainId,
            sig: el0.sig,
            badge: {
              cu_allocation: el0.badge.cuAllocation.toString(),
              epoch: el0.badge.epoch.toString(),
              address: el0.badge.address,
              lava_chain_id: el0.badge.lavaChainId,
              project_sig: el0.badge.projectSig
            },
            qos_excellence_report: {
              latency: el0.qosExcellenceReport.latency,
              availability: el0.qosExcellenceReport.availability,
              sync: el0.qosExcellenceReport.sync
            }
          };
        }),
        descriptionString: descriptionString
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var creator = _ref6.creator,
        relays = _ref6.relays,
        descriptionString = _ref6.descriptionString;
      return {
        creator: creator,
        relays: relays.map(function (el0) {
          return {
            specId: el0.spec_id,
            contentHash: el0.content_hash,
            sessionId: BigInt(el0.session_id),
            cuSum: BigInt(el0.cu_sum),
            provider: el0.provider,
            relayNum: BigInt(el0.relay_num),
            qosReport: {
              latency: el0.qos_report.latency,
              availability: el0.qos_report.availability,
              sync: el0.qos_report.sync
            },
            epoch: BigInt(el0.epoch),
            unresponsiveProviders: el0.unresponsive_providers,
            lavaChainId: el0.lava_chain_id,
            sig: el0.sig,
            badge: {
              cuAllocation: BigInt(el0.badge.cu_allocation),
              epoch: BigInt(el0.badge.epoch),
              address: el0.badge.address,
              lavaChainId: el0.badge.lava_chain_id,
              projectSig: el0.badge.project_sig
            },
            qosExcellenceReport: {
              latency: el0.qos_excellence_report.latency,
              availability: el0.qos_excellence_report.availability,
              sync: el0.qos_excellence_report.sync
            }
          };
        }),
        descriptionString: descriptionString
      };
    }
  },
  "/lavanet.lava.pairing.MsgFreezeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgFreezeProvider",
    toAmino: function toAmino(_ref7) {
      var creator = _ref7.creator,
        chainIds = _ref7.chainIds,
        reason = _ref7.reason;
      return {
        creator: creator,
        chainIds: chainIds,
        reason: reason
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var creator = _ref8.creator,
        chainIds = _ref8.chainIds,
        reason = _ref8.reason;
      return {
        creator: creator,
        chainIds: chainIds,
        reason: reason
      };
    }
  },
  "/lavanet.lava.pairing.MsgUnfreezeProvider": {
    aminoType: "/lavanet.lava.pairing.MsgUnfreezeProvider",
    toAmino: function toAmino(_ref9) {
      var creator = _ref9.creator,
        chainIds = _ref9.chainIds;
      return {
        creator: creator,
        chainIds: chainIds
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var creator = _ref10.creator,
        chainIds = _ref10.chainIds;
      return {
        creator: creator,
        chainIds: chainIds
      };
    }
  }
};
exports.AminoConverter = AminoConverter;