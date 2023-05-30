"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/lavanet.lava.pairing.MsgStakeProvider", _tx.MsgStakeProvider], ["/lavanet.lava.pairing.MsgStakeClient", _tx.MsgStakeClient], ["/lavanet.lava.pairing.MsgUnstakeProvider", _tx.MsgUnstakeProvider], ["/lavanet.lava.pairing.MsgUnstakeClient", _tx.MsgUnstakeClient], ["/lavanet.lava.pairing.MsgRelayPayment", _tx.MsgRelayPayment], ["/lavanet.lava.pairing.MsgFreezeProvider", _tx.MsgFreezeProvider], ["/lavanet.lava.pairing.MsgUnfreezeProvider", _tx.MsgUnfreezeProvider]];
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
    stakeClient: function stakeClient(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeClient",
        value: _tx.MsgStakeClient.encode(value).finish()
      };
    },
    unstakeProvider: function unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: _tx.MsgUnstakeProvider.encode(value).finish()
      };
    },
    unstakeClient: function unstakeClient(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeClient",
        value: _tx.MsgUnstakeClient.encode(value).finish()
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
    stakeClient: function stakeClient(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeClient",
        value: value
      };
    },
    unstakeProvider: function unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: value
      };
    },
    unstakeClient: function unstakeClient(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeClient",
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
  toJSON: {
    stakeProvider: function stakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: _tx.MsgStakeProvider.toJSON(value)
      };
    },
    stakeClient: function stakeClient(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeClient",
        value: _tx.MsgStakeClient.toJSON(value)
      };
    },
    unstakeProvider: function unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: _tx.MsgUnstakeProvider.toJSON(value)
      };
    },
    unstakeClient: function unstakeClient(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeClient",
        value: _tx.MsgUnstakeClient.toJSON(value)
      };
    },
    relayPayment: function relayPayment(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: _tx.MsgRelayPayment.toJSON(value)
      };
    },
    freezeProvider: function freezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: _tx.MsgFreezeProvider.toJSON(value)
      };
    },
    unfreezeProvider: function unfreezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: _tx.MsgUnfreezeProvider.toJSON(value)
      };
    }
  },
  fromJSON: {
    stakeProvider: function stakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: _tx.MsgStakeProvider.fromJSON(value)
      };
    },
    stakeClient: function stakeClient(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeClient",
        value: _tx.MsgStakeClient.fromJSON(value)
      };
    },
    unstakeProvider: function unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: _tx.MsgUnstakeProvider.fromJSON(value)
      };
    },
    unstakeClient: function unstakeClient(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeClient",
        value: _tx.MsgUnstakeClient.fromJSON(value)
      };
    },
    relayPayment: function relayPayment(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: _tx.MsgRelayPayment.fromJSON(value)
      };
    },
    freezeProvider: function freezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: _tx.MsgFreezeProvider.fromJSON(value)
      };
    },
    unfreezeProvider: function unfreezeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: _tx.MsgUnfreezeProvider.fromJSON(value)
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
    stakeClient: function stakeClient(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeClient",
        value: _tx.MsgStakeClient.fromPartial(value)
      };
    },
    unstakeProvider: function unstakeProvider(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: _tx.MsgUnstakeProvider.fromPartial(value)
      };
    },
    unstakeClient: function unstakeClient(value) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeClient",
        value: _tx.MsgUnstakeClient.fromPartial(value)
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