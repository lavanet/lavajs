"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
//@ts-nocheck

var registry = [["/lavanet.lava.conflict.MsgDetection", _tx.MsgDetection], ["/lavanet.lava.conflict.MsgConflictVoteCommit", _tx.MsgConflictVoteCommit], ["/lavanet.lava.conflict.MsgConflictVoteReveal", _tx.MsgConflictVoteReveal]];
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
    detection: function detection(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgDetection",
        value: _tx.MsgDetection.encode(value).finish()
      };
    },
    conflictVoteCommit: function conflictVoteCommit(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
        value: _tx.MsgConflictVoteCommit.encode(value).finish()
      };
    },
    conflictVoteReveal: function conflictVoteReveal(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
        value: _tx.MsgConflictVoteReveal.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    detection: function detection(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgDetection",
        value: value
      };
    },
    conflictVoteCommit: function conflictVoteCommit(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
        value: value
      };
    },
    conflictVoteReveal: function conflictVoteReveal(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
        value: value
      };
    }
  },
  toJSON: {
    detection: function detection(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgDetection",
        value: _tx.MsgDetection.toJSON(value)
      };
    },
    conflictVoteCommit: function conflictVoteCommit(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
        value: _tx.MsgConflictVoteCommit.toJSON(value)
      };
    },
    conflictVoteReveal: function conflictVoteReveal(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
        value: _tx.MsgConflictVoteReveal.toJSON(value)
      };
    }
  },
  fromJSON: {
    detection: function detection(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgDetection",
        value: _tx.MsgDetection.fromJSON(value)
      };
    },
    conflictVoteCommit: function conflictVoteCommit(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
        value: _tx.MsgConflictVoteCommit.fromJSON(value)
      };
    },
    conflictVoteReveal: function conflictVoteReveal(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
        value: _tx.MsgConflictVoteReveal.fromJSON(value)
      };
    }
  },
  fromPartial: {
    detection: function detection(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgDetection",
        value: _tx.MsgDetection.fromPartial(value)
      };
    },
    conflictVoteCommit: function conflictVoteCommit(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteCommit",
        value: _tx.MsgConflictVoteCommit.fromPartial(value)
      };
    },
    conflictVoteReveal: function conflictVoteReveal(value) {
      return {
        typeUrl: "/lavanet.lava.conflict.MsgConflictVoteReveal",
        value: _tx.MsgConflictVoteReveal.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;