"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmos.bank.v1beta1.MsgSend", _tx.MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", _tx.MsgMultiSend]];
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
    send: function send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: _tx.MsgSend.encode(value).finish()
      };
    },
    multiSend: function multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: _tx.MsgMultiSend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    send: function send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: value
      };
    },
    multiSend: function multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: value
      };
    }
  },
  fromPartial: {
    send: function send(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: _tx.MsgSend.fromPartial(value)
      };
    },
    multiSend: function multiSend(value) {
      return {
        typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
        value: _tx.MsgMultiSend.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;