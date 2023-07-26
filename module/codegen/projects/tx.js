import { ProjectKey } from "./project";
import { Policy } from "../plans/plan";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgAddKeys() {
  return {
    creator: "",
    project: "",
    projectKeys: []
  };
}
export const MsgAddKeys = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$creator, _object$project, _object$projectKeys;
    const message = createBaseMsgAddKeys();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.project = (_object$project = object.project) !== null && _object$project !== void 0 ? _object$project : "";
    message.projectKeys = ((_object$projectKeys = object.projectKeys) === null || _object$projectKeys === void 0 ? void 0 : _object$projectKeys.map(e => ProjectKey.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgAddKeysResponse() {
  return {};
}
export const MsgAddKeysResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddKeysResponse();
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
  fromPartial(_) {
    const message = createBaseMsgAddKeysResponse();
    return message;
  }
};
function createBaseMsgDelKeys() {
  return {
    creator: "",
    project: "",
    projectKeys: []
  };
}
export const MsgDelKeys = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$creator2, _object$project2, _object$projectKeys2;
    const message = createBaseMsgDelKeys();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.project = (_object$project2 = object.project) !== null && _object$project2 !== void 0 ? _object$project2 : "";
    message.projectKeys = ((_object$projectKeys2 = object.projectKeys) === null || _object$projectKeys2 === void 0 ? void 0 : _object$projectKeys2.map(e => ProjectKey.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMsgDelKeysResponse() {
  return {};
}
export const MsgDelKeysResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelKeysResponse();
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
  fromPartial(_) {
    const message = createBaseMsgDelKeysResponse();
    return message;
  }
};
function createBaseMsgSetPolicy() {
  return {
    creator: "",
    project: "",
    policy: undefined
  };
}
export const MsgSetPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$creator3, _object$project3;
    const message = createBaseMsgSetPolicy();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.project = (_object$project3 = object.project) !== null && _object$project3 !== void 0 ? _object$project3 : "";
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  }
};
function createBaseMsgSetPolicyResponse() {
  return {};
}
export const MsgSetPolicyResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPolicyResponse();
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
  fromPartial(_) {
    const message = createBaseMsgSetPolicyResponse();
    return message;
  }
};
function createBaseMsgSetSubscriptionPolicy() {
  return {
    creator: "",
    projects: [],
    policy: undefined
  };
}
export const MsgSetSubscriptionPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.projects) {
      writer.uint32(18).string(v);
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSubscriptionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projects.push(reader.string());
          break;
        case 3:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$creator4, _object$projects;
    const message = createBaseMsgSetSubscriptionPolicy();
    message.creator = (_object$creator4 = object.creator) !== null && _object$creator4 !== void 0 ? _object$creator4 : "";
    message.projects = ((_object$projects = object.projects) === null || _object$projects === void 0 ? void 0 : _object$projects.map(e => e)) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  }
};
function createBaseMsgSetSubscriptionPolicyResponse() {
  return {};
}
export const MsgSetSubscriptionPolicyResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSubscriptionPolicyResponse();
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
  fromPartial(_) {
    const message = createBaseMsgSetSubscriptionPolicyResponse();
    return message;
  }
};