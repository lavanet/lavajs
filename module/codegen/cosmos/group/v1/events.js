import { proposalExecutorResultFromJSON, proposalExecutorResultToJSON } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    groupId: Long.UZERO
  };
}
export const EventCreateGroup = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseEventCreateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  }
};
function createBaseEventUpdateGroup() {
  return {
    groupId: Long.UZERO
  };
}
export const EventUpdateGroup = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseEventUpdateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    return message;
  }
};
function createBaseEventCreateGroupPolicy() {
  return {
    address: ""
  };
}
export const EventCreateGroupPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseEventCreateGroupPolicy();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
function createBaseEventUpdateGroupPolicy() {
  return {
    address: ""
  };
}
export const EventUpdateGroupPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object) {
    var _object$address2;
    const message = createBaseEventUpdateGroupPolicy();
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    return message;
  }
};
function createBaseEventSubmitProposal() {
  return {
    proposalId: Long.UZERO
  };
}
export const EventSubmitProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseEventSubmitProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }
};
function createBaseEventWithdrawProposal() {
  return {
    proposalId: Long.UZERO
  };
}
export const EventWithdrawProposal = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseEventWithdrawProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }
};
function createBaseEventVote() {
  return {
    proposalId: Long.UZERO
  };
}
export const EventVote = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = createBaseEventVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }
};
function createBaseEventExec() {
  return {
    proposalId: Long.UZERO,
    result: 0
  };
}
export const EventExec = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
    return obj;
  },
  fromPartial(object) {
    var _object$result;
    const message = createBaseEventExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.result = (_object$result = object.result) !== null && _object$result !== void 0 ? _object$result : 0;
    return message;
  }
};
function createBaseEventLeaveGroup() {
  return {
    groupId: Long.UZERO,
    address: ""
  };
}
export const EventLeaveGroup = {
  encode(message, writer = _m0.Writer.create()) {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object) {
    var _object$address3;
    const message = createBaseEventLeaveGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? Long.fromValue(object.groupId) : Long.UZERO;
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    return message;
  }
};