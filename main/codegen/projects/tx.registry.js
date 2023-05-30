"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/lavanet.lava.projects.MsgAddKeys", _tx.MsgAddKeys], ["/lavanet.lava.projects.MsgSetPolicy", _tx.MsgSetPolicy], ["/lavanet.lava.projects.MsgSetSubscriptionPolicy", _tx.MsgSetSubscriptionPolicy]];
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
    addKeys: function addKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: _tx.MsgAddKeys.encode(value).finish()
      };
    },
    setPolicy: function setPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value: _tx.MsgSetPolicy.encode(value).finish()
      };
    },
    setSubscriptionPolicy: function setSubscriptionPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value: _tx.MsgSetSubscriptionPolicy.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addKeys: function addKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: value
      };
    },
    setPolicy: function setPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value: value
      };
    },
    setSubscriptionPolicy: function setSubscriptionPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value: value
      };
    }
  },
  fromPartial: {
    addKeys: function addKeys(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: _tx.MsgAddKeys.fromPartial(value)
      };
    },
    setPolicy: function setPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value: _tx.MsgSetPolicy.fromPartial(value)
      };
    },
    setSubscriptionPolicy: function setSubscriptionPolicy(value) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value: _tx.MsgSetSubscriptionPolicy.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;