"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventWithdrawProposal = exports.EventVote = exports.EventUpdateGroupPolicy = exports.EventUpdateGroup = exports.EventSubmitProposal = exports.EventLeaveGroup = exports.EventExec = exports.EventCreateGroupPolicy = exports.EventCreateGroup = void 0;
var _types = require("./types");
var _binary = require("../../../binary");
var _helpers = require("../../../helpers");
/** EventCreateGroup is an event emitted when a group is created. */

/** EventCreateGroup is an event emitted when a group is created. */

/** EventUpdateGroup is an event emitted when a group is updated. */

/** EventUpdateGroup is an event emitted when a group is updated. */

/** EventCreateGroupPolicy is an event emitted when a group policy is created. */

/** EventCreateGroupPolicy is an event emitted when a group policy is created. */

/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */

/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */

/** EventSubmitProposal is an event emitted when a proposal is created. */

/** EventSubmitProposal is an event emitted when a proposal is created. */

/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */

/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */

/** EventVote is an event emitted when a voter votes on a proposal. */

/** EventVote is an event emitted when a voter votes on a proposal. */

/** EventExec is an event emitted when a proposal is executed. */

/** EventExec is an event emitted when a proposal is executed. */

/** EventLeaveGroup is an event emitted when group member leaves the group. */

/** EventLeaveGroup is an event emitted when group member leaves the group. */

function createBaseEventCreateGroup() {
  return {
    groupId: BigInt(0)
  };
}
var EventCreateGroup = {
  typeUrl: "/cosmos.group.v1.EventCreateGroup",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEventCreateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      groupId: BigInt(object.group_id)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventCreateGroup.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventCreateGroup",
      value: EventCreateGroup.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventCreateGroup.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventCreateGroup.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.EventCreateGroup",
      value: EventCreateGroup.encode(message).finish()
    };
  }
};
exports.EventCreateGroup = EventCreateGroup;
function createBaseEventUpdateGroup() {
  return {
    groupId: BigInt(0)
  };
}
var EventUpdateGroup = {
  typeUrl: "/cosmos.group.v1.EventUpdateGroup",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEventUpdateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      groupId: BigInt(object.group_id)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventUpdateGroup.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventUpdateGroup",
      value: EventUpdateGroup.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventUpdateGroup.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventUpdateGroup.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.EventUpdateGroup",
      value: EventUpdateGroup.encode(message).finish()
    };
  }
};
exports.EventUpdateGroup = EventUpdateGroup;
function createBaseEventCreateGroupPolicy() {
  return {
    address: ""
  };
}
var EventCreateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventCreateGroupPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address;
    var message = createBaseEventCreateGroupPolicy();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventCreateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventCreateGroupPolicy",
      value: EventCreateGroupPolicy.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventCreateGroupPolicy.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventCreateGroupPolicy.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
      value: EventCreateGroupPolicy.encode(message).finish()
    };
  }
};
exports.EventCreateGroupPolicy = EventCreateGroupPolicy;
function createBaseEventUpdateGroupPolicy() {
  return {
    address: ""
  };
}
var EventUpdateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventUpdateGroupPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address2;
    var message = createBaseEventUpdateGroupPolicy();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      address: object.address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventUpdateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventUpdateGroupPolicy",
      value: EventUpdateGroupPolicy.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventUpdateGroupPolicy.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventUpdateGroupPolicy.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
      value: EventUpdateGroupPolicy.encode(message).finish()
    };
  }
};
exports.EventUpdateGroupPolicy = EventUpdateGroupPolicy;
function createBaseEventSubmitProposal() {
  return {
    proposalId: BigInt(0)
  };
}
var EventSubmitProposal = {
  typeUrl: "/cosmos.group.v1.EventSubmitProposal",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventSubmitProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEventSubmitProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventSubmitProposal",
      value: EventSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventSubmitProposal.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventSubmitProposal.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.EventSubmitProposal",
      value: EventSubmitProposal.encode(message).finish()
    };
  }
};
exports.EventSubmitProposal = EventSubmitProposal;
function createBaseEventWithdrawProposal() {
  return {
    proposalId: BigInt(0)
  };
}
var EventWithdrawProposal = {
  typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventWithdrawProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEventWithdrawProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventWithdrawProposal.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventWithdrawProposal",
      value: EventWithdrawProposal.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventWithdrawProposal.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventWithdrawProposal.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
      value: EventWithdrawProposal.encode(message).finish()
    };
  }
};
exports.EventWithdrawProposal = EventWithdrawProposal;
function createBaseEventVote() {
  return {
    proposalId: BigInt(0)
  };
}
var EventVote = {
  typeUrl: "/cosmos.group.v1.EventVote",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseEventVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventVote.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventVote",
      value: EventVote.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventVote.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventVote.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.EventVote",
      value: EventVote.encode(message).finish()
    };
  }
};
exports.EventVote = EventVote;
function createBaseEventExec() {
  return {
    proposalId: BigInt(0),
    result: 0
  };
}
var EventExec = {
  typeUrl: "/cosmos.group.v1.EventExec",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventExec();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$result;
    var message = createBaseEventExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      result: (0, _helpers.isSet)(object.result) ? (0, _types.proposalExecutorResultFromJSON)(object.result) : -1
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.result = message.result;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventExec.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventExec",
      value: EventExec.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventExec.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventExec.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.EventExec",
      value: EventExec.encode(message).finish()
    };
  }
};
exports.EventExec = EventExec;
function createBaseEventLeaveGroup() {
  return {
    groupId: BigInt(0),
    address: ""
  };
}
var EventLeaveGroup = {
  typeUrl: "/cosmos.group.v1.EventLeaveGroup",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address3;
    var message = createBaseEventLeaveGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      groupId: BigInt(object.group_id),
      address: object.address
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EventLeaveGroup.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventLeaveGroup",
      value: EventLeaveGroup.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EventLeaveGroup.decode(message.value);
  },
  toProto: function toProto(message) {
    return EventLeaveGroup.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.EventLeaveGroup",
      value: EventLeaveGroup.encode(message).finish()
    };
  }
};
exports.EventLeaveGroup = EventLeaveGroup;