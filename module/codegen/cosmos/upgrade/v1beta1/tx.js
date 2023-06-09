import { Plan } from "./upgrade";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

function createBaseMsgSoftwareUpgrade() {
  return {
    authority: "",
    plan: undefined
  };
}
export const MsgSoftwareUpgrade = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = Plan.decode(reader, reader.uint32());
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
      authority: isSet(object.authority) ? String(object.authority) : "",
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$authority;
    const message = createBaseMsgSoftwareUpgrade();
    message.authority = (_object$authority = object.authority) !== null && _object$authority !== void 0 ? _object$authority : "";
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  }
};
function createBaseMsgSoftwareUpgradeResponse() {
  return {};
}
export const MsgSoftwareUpgradeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  }
};
function createBaseMsgCancelUpgrade() {
  return {
    authority: ""
  };
}
export const MsgCancelUpgrade = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object) {
    var _object$authority2;
    const message = createBaseMsgCancelUpgrade();
    message.authority = (_object$authority2 = object.authority) !== null && _object$authority2 !== void 0 ? _object$authority2 : "";
    return message;
  }
};
function createBaseMsgCancelUpgradeResponse() {
  return {};
}
export const MsgCancelUpgradeResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  }
};