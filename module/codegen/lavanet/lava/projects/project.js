import { Policy } from "../plans/policy";
import { BinaryReader, BinaryWriter } from "../../../binary";
export let ProjectKey_Type = /*#__PURE__*/function (ProjectKey_Type) {
  ProjectKey_Type[ProjectKey_Type["NONE"] = 0] = "NONE";
  ProjectKey_Type[ProjectKey_Type["ADMIN"] = 1] = "ADMIN";
  ProjectKey_Type[ProjectKey_Type["DEVELOPER"] = 2] = "DEVELOPER";
  ProjectKey_Type[ProjectKey_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProjectKey_Type;
}({});
export const ProjectKey_TypeSDKType = ProjectKey_Type;
export function projectKey_TypeFromJSON(object) {
  switch (object) {
    case 0:
    case "NONE":
      return ProjectKey_Type.NONE;
    case 1:
    case "ADMIN":
      return ProjectKey_Type.ADMIN;
    case 2:
    case "DEVELOPER":
      return ProjectKey_Type.DEVELOPER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectKey_Type.UNRECOGNIZED;
  }
}
export function projectKey_TypeToJSON(object) {
  switch (object) {
    case ProjectKey_Type.NONE:
      return "NONE";
    case ProjectKey_Type.ADMIN:
      return "ADMIN";
    case ProjectKey_Type.DEVELOPER:
      return "DEVELOPER";
    case ProjectKey_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** used as a container struct for the subscription module */

/** used as a container struct for the subscription module */

function createBaseProject() {
  return {
    index: "",
    subscription: "",
    enabled: false,
    projectKeys: [],
    adminPolicy: Policy.fromPartial({}),
    usedCu: BigInt(0),
    subscriptionPolicy: Policy.fromPartial({}),
    snapshot: BigInt(0)
  };
}
export const Project = {
  typeUrl: "/lavanet.lava.projects.Project",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.subscription !== "") {
      writer.uint32(18).string(message.subscription);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v, writer.uint32(42).fork()).ldelim();
    }
    if (message.adminPolicy !== undefined) {
      Policy.encode(message.adminPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.usedCu !== BigInt(0)) {
      writer.uint32(56).uint64(message.usedCu);
    }
    if (message.subscriptionPolicy !== undefined) {
      Policy.encode(message.subscriptionPolicy, writer.uint32(66).fork()).ldelim();
    }
    if (message.snapshot !== BigInt(0)) {
      writer.uint32(72).uint64(message.snapshot);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.subscription = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        case 6:
          message.adminPolicy = Policy.decode(reader, reader.uint32());
          break;
        case 7:
          message.usedCu = reader.uint64();
          break;
        case 8:
          message.subscriptionPolicy = Policy.decode(reader, reader.uint32());
          break;
        case 9:
          message.snapshot = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index, _object$subscription, _object$enabled, _object$projectKeys;
    const message = createBaseProject();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.subscription = (_object$subscription = object.subscription) !== null && _object$subscription !== void 0 ? _object$subscription : "";
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    message.projectKeys = ((_object$projectKeys = object.projectKeys) === null || _object$projectKeys === void 0 ? void 0 : _object$projectKeys.map(e => ProjectKey.fromPartial(e))) || [];
    message.adminPolicy = object.adminPolicy !== undefined && object.adminPolicy !== null ? Policy.fromPartial(object.adminPolicy) : undefined;
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? BigInt(object.usedCu.toString()) : BigInt(0);
    message.subscriptionPolicy = object.subscriptionPolicy !== undefined && object.subscriptionPolicy !== null ? Policy.fromPartial(object.subscriptionPolicy) : undefined;
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? BigInt(object.snapshot.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index,
      subscription: object.subscription,
      enabled: object.enabled,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.project_keys) ? object.project_keys.map(e => ProjectKey.fromAmino(e)) : [],
      adminPolicy: object !== null && object !== void 0 && object.admin_policy ? Policy.fromAmino(object.admin_policy) : undefined,
      usedCu: BigInt(object.used_cu),
      subscriptionPolicy: object !== null && object !== void 0 && object.subscription_policy ? Policy.fromAmino(object.subscription_policy) : undefined,
      snapshot: BigInt(object.snapshot)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    obj.subscription = message.subscription;
    obj.enabled = message.enabled;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.project_keys = [];
    }
    obj.admin_policy = message.adminPolicy ? Policy.toAmino(message.adminPolicy) : undefined;
    obj.used_cu = message.usedCu ? message.usedCu.toString() : undefined;
    obj.subscription_policy = message.subscriptionPolicy ? Policy.toAmino(message.subscriptionPolicy) : undefined;
    obj.snapshot = message.snapshot ? message.snapshot.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Project.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Project.decode(message.value);
  },
  toProto(message) {
    return Project.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.Project",
      value: Project.encode(message).finish()
    };
  }
};
function createBaseProjectKey() {
  return {
    key: "",
    kinds: 0
  };
}
export const ProjectKey = {
  typeUrl: "/lavanet.lava.projects.ProjectKey",
  encode(message, writer = BinaryWriter.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.kinds !== 0) {
      writer.uint32(32).uint32(message.kinds);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 4:
          message.kinds = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$key, _object$kinds;
    const message = createBaseProjectKey();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.kinds = (_object$kinds = object.kinds) !== null && _object$kinds !== void 0 ? _object$kinds : 0;
    return message;
  },
  fromAmino(object) {
    return {
      key: object.key,
      kinds: object.kinds
    };
  },
  toAmino(message) {
    const obj = {};
    obj.key = message.key;
    obj.kinds = message.kinds;
    return obj;
  },
  fromAminoMsg(object) {
    return ProjectKey.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ProjectKey.decode(message.value);
  },
  toProto(message) {
    return ProjectKey.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.ProjectKey",
      value: ProjectKey.encode(message).finish()
    };
  }
};
function createBaseProtoDeveloperData() {
  return {
    projectID: ""
  };
}
export const ProtoDeveloperData = {
  typeUrl: "/lavanet.lava.projects.ProtoDeveloperData",
  encode(message, writer = BinaryWriter.create()) {
    if (message.projectID !== "") {
      writer.uint32(10).string(message.projectID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoDeveloperData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$projectID;
    const message = createBaseProtoDeveloperData();
    message.projectID = (_object$projectID = object.projectID) !== null && _object$projectID !== void 0 ? _object$projectID : "";
    return message;
  },
  fromAmino(object) {
    return {
      projectID: object.projectID
    };
  },
  toAmino(message) {
    const obj = {};
    obj.projectID = message.projectID;
    return obj;
  },
  fromAminoMsg(object) {
    return ProtoDeveloperData.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ProtoDeveloperData.decode(message.value);
  },
  toProto(message) {
    return ProtoDeveloperData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.ProtoDeveloperData",
      value: ProtoDeveloperData.encode(message).finish()
    };
  }
};
function createBaseProjectData() {
  return {
    name: "",
    enabled: false,
    projectKeys: [],
    policy: Policy.fromPartial({})
  };
}
export const ProjectData = {
  typeUrl: "/lavanet.lava.projects.ProjectData",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        case 5:
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
    var _object$name, _object$enabled2, _object$projectKeys2;
    const message = createBaseProjectData();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.enabled = (_object$enabled2 = object.enabled) !== null && _object$enabled2 !== void 0 ? _object$enabled2 : false;
    message.projectKeys = ((_object$projectKeys2 = object.projectKeys) === null || _object$projectKeys2 === void 0 ? void 0 : _object$projectKeys2.map(e => ProjectKey.fromPartial(e))) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      name: object.name,
      enabled: object.enabled,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.projectKeys) ? object.projectKeys.map(e => ProjectKey.fromAmino(e)) : [],
      policy: object !== null && object !== void 0 && object.policy ? Policy.fromAmino(object.policy) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.enabled = message.enabled;
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.projectKeys = [];
    }
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return ProjectData.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ProjectData.decode(message.value);
  },
  toProto(message) {
    return ProjectData.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.ProjectData",
      value: ProjectData.encode(message).finish()
    };
  }
};