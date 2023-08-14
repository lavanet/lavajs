"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/lavanet.lava.pairing.MsgStakeProvider", _tx.MsgStakeProvider], ["/lavanet.lava.pairing.MsgUnstakeProvider", _tx.MsgUnstakeProvider], ["/lavanet.lava.pairing.MsgRelayPayment", _tx.MsgRelayPayment], ["/lavanet.lava.pairing.MsgFreezeProvider", _tx.MsgFreezeProvider], ["/lavanet.lava.pairing.MsgUnfreezeProvider", _tx.MsgUnfreezeProvider]];
exports.registry = registry;
var load = function load(protoRegistry) {
  registry.forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      typeUrl = _ref2[0],
      mod = _ref2[1];
    protoRegistry.register(typeUrl, mod);
  });
};
exports.load = load;
var MessageComposer = {
  encoded: {
    stakeProvider: function stakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: _tx.MsgStakeProvider.encode(value).finish()
      };
    },
    unstakeProvider: function unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: _tx.MsgUnstakeProvider.encode(value).finish()
      };
    },
    relayPayment: function relayPayment(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: _tx.MsgRelayPayment.encode(value).finish()
      };
    },
    freezeProvider: function freezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: _tx.MsgFreezeProvider.encode(value).finish()
      };
    },
    unfreezeProvider: function unfreezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: _tx.MsgUnfreezeProvider.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    stakeProvider: function stakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: value
      };
    },
    unstakeProvider: function unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: value
      };
    },
    relayPayment: function relayPayment(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: value
      };
    },
    freezeProvider: function freezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: value
      };
    },
    unfreezeProvider: function unfreezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: value
      };
    }
  },
  fromPartial: {
    stakeProvider: function stakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: _tx.MsgStakeProvider.fromPartial(value)
      };
    },
    unstakeProvider: function unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: _tx.MsgUnstakeProvider.fromPartial(value)
      };
    },
    relayPayment: function relayPayment(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: _tx.MsgRelayPayment.fromPartial(value)
      };
    },
    freezeProvider: function freezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: _tx.MsgFreezeProvider.fromPartial(value)
      };
    },
    unfreezeProvider: function unfreezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: _tx.MsgUnfreezeProvider.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;