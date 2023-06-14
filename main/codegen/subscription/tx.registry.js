"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
//@ts-nocheck

var registry = [["/lavanet.lava.subscription.MsgBuy", _tx.MsgBuy], ["/lavanet.lava.subscription.MsgAddProject", _tx.MsgAddProject], ["/lavanet.lava.subscription.MsgDelProject", _tx.MsgDelProject]];
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
    buy: function buy(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: _tx.MsgBuy.encode(value).finish()
      };
    },
    addProject: function addProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: _tx.MsgAddProject.encode(value).finish()
      };
    },
    delProject: function delProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value: _tx.MsgDelProject.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    buy: function buy(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: value
      };
    },
    addProject: function addProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: value
      };
    },
    delProject: function delProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value: value
      };
    }
  },
  toJSON: {
    buy: function buy(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: _tx.MsgBuy.toJSON(value)
      };
    },
    addProject: function addProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: _tx.MsgAddProject.toJSON(value)
      };
    },
    delProject: function delProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value: _tx.MsgDelProject.toJSON(value)
      };
    }
  },
  fromJSON: {
    buy: function buy(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: _tx.MsgBuy.fromJSON(value)
      };
    },
    addProject: function addProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: _tx.MsgAddProject.fromJSON(value)
      };
    },
    delProject: function delProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value: _tx.MsgDelProject.fromJSON(value)
      };
    }
  },
  fromPartial: {
    buy: function buy(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: _tx.MsgBuy.fromPartial(value)
      };
    },
    addProject: function addProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: _tx.MsgAddProject.fromPartial(value)
      };
    },
    delProject: function delProject(value) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value: _tx.MsgDelProject.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;