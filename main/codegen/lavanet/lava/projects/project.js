"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProtoDeveloperData = exports.ProjectKey_TypeSDKType = exports.ProjectKey_Type = exports.ProjectKey = exports.ProjectData = exports.Project = void 0;
exports.projectKey_TypeFromJSON = projectKey_TypeFromJSON;
exports.projectKey_TypeToJSON = projectKey_TypeToJSON;
var _policy = require("../plans/policy");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var ProjectKey_Type = /*#__PURE__*/function (ProjectKey_Type) {
  ProjectKey_Type[ProjectKey_Type["NONE"] = 0] = "NONE";
  ProjectKey_Type[ProjectKey_Type["ADMIN"] = 1] = "ADMIN";
  ProjectKey_Type[ProjectKey_Type["DEVELOPER"] = 2] = "DEVELOPER";
  ProjectKey_Type[ProjectKey_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return ProjectKey_Type;
}({});
exports.ProjectKey_Type = ProjectKey_Type;
var ProjectKey_TypeSDKType = ProjectKey_Type;
exports.ProjectKey_TypeSDKType = ProjectKey_TypeSDKType;
function projectKey_TypeFromJSON(object) {
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
function projectKey_TypeToJSON(object) {
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
    adminPolicy: _policy.Policy.fromPartial({}),
    usedCu: BigInt(0),
    subscriptionPolicy: _policy.Policy.fromPartial({}),
    snapshot: BigInt(0)
  };
}
var Project = {
  typeUrl: "/lavanet.lava.projects.Project",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.subscription !== "") {
      writer.uint32(18).string(message.subscription);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    var _iterator = _createForOfIteratorHelper(message.projectKeys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ProjectKey.encode(v, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.adminPolicy !== undefined) {
      _policy.Policy.encode(message.adminPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.usedCu !== BigInt(0)) {
      writer.uint32(56).uint64(message.usedCu);
    }
    if (message.subscriptionPolicy !== undefined) {
      _policy.Policy.encode(message.subscriptionPolicy, writer.uint32(66).fork()).ldelim();
    }
    if (message.snapshot !== BigInt(0)) {
      writer.uint32(72).uint64(message.snapshot);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProject();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.adminPolicy = _policy.Policy.decode(reader, reader.uint32());
          break;
        case 7:
          message.usedCu = reader.uint64();
          break;
        case 8:
          message.subscriptionPolicy = _policy.Policy.decode(reader, reader.uint32());
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
  fromPartial: function fromPartial(object) {
    var _object$index, _object$subscription, _object$enabled, _object$projectKeys;
    var message = createBaseProject();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.subscription = (_object$subscription = object.subscription) !== null && _object$subscription !== void 0 ? _object$subscription : "";
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    message.projectKeys = ((_object$projectKeys = object.projectKeys) === null || _object$projectKeys === void 0 ? void 0 : _object$projectKeys.map(function (e) {
      return ProjectKey.fromPartial(e);
    })) || [];
    message.adminPolicy = object.adminPolicy !== undefined && object.adminPolicy !== null ? _policy.Policy.fromPartial(object.adminPolicy) : undefined;
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? BigInt(object.usedCu.toString()) : BigInt(0);
    message.subscriptionPolicy = object.subscriptionPolicy !== undefined && object.subscriptionPolicy !== null ? _policy.Policy.fromPartial(object.subscriptionPolicy) : undefined;
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? BigInt(object.snapshot.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: object.index,
      subscription: object.subscription,
      enabled: object.enabled,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.project_keys) ? object.project_keys.map(function (e) {
        return ProjectKey.fromAmino(e);
      }) : [],
      adminPolicy: object !== null && object !== void 0 && object.admin_policy ? _policy.Policy.fromAmino(object.admin_policy) : undefined,
      usedCu: BigInt(object.used_cu),
      subscriptionPolicy: object !== null && object !== void 0 && object.subscription_policy ? _policy.Policy.fromAmino(object.subscription_policy) : undefined,
      snapshot: BigInt(object.snapshot)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index;
    obj.subscription = message.subscription;
    obj.enabled = message.enabled;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(function (e) {
        return e ? ProjectKey.toAmino(e) : undefined;
      });
    } else {
      obj.project_keys = [];
    }
    obj.admin_policy = message.adminPolicy ? _policy.Policy.toAmino(message.adminPolicy) : undefined;
    obj.used_cu = message.usedCu ? message.usedCu.toString() : undefined;
    obj.subscription_policy = message.subscriptionPolicy ? _policy.Policy.toAmino(message.subscriptionPolicy) : undefined;
    obj.snapshot = message.snapshot ? message.snapshot.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Project.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Project.decode(message.value);
  },
  toProto: function toProto(message) {
    return Project.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.Project",
      value: Project.encode(message).finish()
    };
  }
};
exports.Project = Project;
function createBaseProjectKey() {
  return {
    key: "",
    kinds: 0
  };
}
var ProjectKey = {
  typeUrl: "/lavanet.lava.projects.ProjectKey",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.kinds !== 0) {
      writer.uint32(32).uint32(message.kinds);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProjectKey();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$key, _object$kinds;
    var message = createBaseProjectKey();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.kinds = (_object$kinds = object.kinds) !== null && _object$kinds !== void 0 ? _object$kinds : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      key: object.key,
      kinds: object.kinds
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.key = message.key;
    obj.kinds = message.kinds;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ProjectKey.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ProjectKey.decode(message.value);
  },
  toProto: function toProto(message) {
    return ProjectKey.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.ProjectKey",
      value: ProjectKey.encode(message).finish()
    };
  }
};
exports.ProjectKey = ProjectKey;
function createBaseProtoDeveloperData() {
  return {
    projectID: ""
  };
}
var ProtoDeveloperData = {
  typeUrl: "/lavanet.lava.projects.ProtoDeveloperData",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.projectID !== "") {
      writer.uint32(10).string(message.projectID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProtoDeveloperData();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$projectID;
    var message = createBaseProtoDeveloperData();
    message.projectID = (_object$projectID = object.projectID) !== null && _object$projectID !== void 0 ? _object$projectID : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      projectID: object.projectID
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.projectID = message.projectID;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ProtoDeveloperData.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ProtoDeveloperData.decode(message.value);
  },
  toProto: function toProto(message) {
    return ProtoDeveloperData.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.ProtoDeveloperData",
      value: ProtoDeveloperData.encode(message).finish()
    };
  }
};
exports.ProtoDeveloperData = ProtoDeveloperData;
function createBaseProjectData() {
  return {
    name: "",
    enabled: false,
    projectKeys: [],
    policy: _policy.Policy.fromPartial({})
  };
}
var ProjectData = {
  typeUrl: "/lavanet.lava.projects.ProjectData",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    var _iterator2 = _createForOfIteratorHelper(message.projectKeys),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        ProjectKey.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.policy !== undefined) {
      _policy.Policy.encode(message.policy, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProjectData();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.policy = _policy.Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$enabled2, _object$projectKeys2;
    var message = createBaseProjectData();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.enabled = (_object$enabled2 = object.enabled) !== null && _object$enabled2 !== void 0 ? _object$enabled2 : false;
    message.projectKeys = ((_object$projectKeys2 = object.projectKeys) === null || _object$projectKeys2 === void 0 ? void 0 : _object$projectKeys2.map(function (e) {
      return ProjectKey.fromPartial(e);
    })) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? _policy.Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      enabled: object.enabled,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.projectKeys) ? object.projectKeys.map(function (e) {
        return ProjectKey.fromAmino(e);
      }) : [],
      policy: object !== null && object !== void 0 && object.policy ? _policy.Policy.fromAmino(object.policy) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj.enabled = message.enabled;
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(function (e) {
        return e ? ProjectKey.toAmino(e) : undefined;
      });
    } else {
      obj.projectKeys = [];
    }
    obj.policy = message.policy ? _policy.Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ProjectData.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ProjectData.decode(message.value);
  },
  toProto: function toProto(message) {
    return ProjectData.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.ProjectData",
      value: ProjectData.encode(message).finish()
    };
  }
};
exports.ProjectData = ProjectData;