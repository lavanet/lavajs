import { ProjectKey } from "./project";
import { Policy } from "../plans/policy";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgAddKeys() {
  return {
    creator: "",
    project: "",
    projectKeys: []
  };
}
export const MsgAddKeys = {
  typeUrl: "/lavanet.lava.projects.MsgAddKeys",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      project: object.project,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.project_keys) ? object.project_keys.map(e => ProjectKey.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    obj.project = message.project;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.project_keys = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAddKeys.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgAddKeys.decode(message.value);
  },
  toProto(message) {
    return MsgAddKeys.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgAddKeys",
      value: MsgAddKeys.encode(message).finish()
    };
  }
};
function createBaseMsgAddKeysResponse() {
  return {};
}
export const MsgAddKeysResponse = {
  typeUrl: "/lavanet.lava.projects.MsgAddKeysResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAddKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgAddKeysResponse.decode(message.value);
  },
  toProto(message) {
    return MsgAddKeysResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgAddKeysResponse",
      value: MsgAddKeysResponse.encode(message).finish()
    };
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
  typeUrl: "/lavanet.lava.projects.MsgDelKeys",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      project: object.project,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.project_keys) ? object.project_keys.map(e => ProjectKey.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    obj.project = message.project;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.project_keys = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDelKeys.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgDelKeys.decode(message.value);
  },
  toProto(message) {
    return MsgDelKeys.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgDelKeys",
      value: MsgDelKeys.encode(message).finish()
    };
  }
};
function createBaseMsgDelKeysResponse() {
  return {};
}
export const MsgDelKeysResponse = {
  typeUrl: "/lavanet.lava.projects.MsgDelKeysResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDelKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgDelKeysResponse.decode(message.value);
  },
  toProto(message) {
    return MsgDelKeysResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgDelKeysResponse",
      value: MsgDelKeysResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPolicy() {
  return {
    creator: "",
    project: "",
    policy: Policy.fromPartial({})
  };
}
export const MsgSetPolicy = {
  typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      project: object.project,
      policy: object !== null && object !== void 0 && object.policy ? Policy.fromAmino(object.policy) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    obj.project = message.project;
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgSetPolicy.decode(message.value);
  },
  toProto(message) {
    return MsgSetPolicy.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
      value: MsgSetPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgSetPolicyResponse() {
  return {};
}
export const MsgSetPolicyResponse = {
  typeUrl: "/lavanet.lava.projects.MsgSetPolicyResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgSetPolicyResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSetPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetPolicyResponse",
      value: MsgSetPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetSubscriptionPolicy() {
  return {
    creator: "",
    projects: [],
    policy: Policy.fromPartial({})
  };
}
export const MsgSetSubscriptionPolicy = {
  typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      projects: Array.isArray(object === null || object === void 0 ? void 0 : object.projects) ? object.projects.map(e => e) : [],
      policy: object !== null && object !== void 0 && object.policy ? Policy.fromAmino(object.policy) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    if (message.projects) {
      obj.projects = message.projects.map(e => e);
    } else {
      obj.projects = [];
    }
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetSubscriptionPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgSetSubscriptionPolicy.decode(message.value);
  },
  toProto(message) {
    return MsgSetSubscriptionPolicy.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
      value: MsgSetSubscriptionPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgSetSubscriptionPolicyResponse() {
  return {};
}
export const MsgSetSubscriptionPolicyResponse = {
  typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicyResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSetSubscriptionPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgSetSubscriptionPolicyResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSetSubscriptionPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicyResponse",
      value: MsgSetSubscriptionPolicyResponse.encode(message).finish()
    };
  }
};