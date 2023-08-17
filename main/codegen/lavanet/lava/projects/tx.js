"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSetSubscriptionPolicyResponse = exports.MsgSetSubscriptionPolicy = exports.MsgSetPolicyResponse = exports.MsgSetPolicy = exports.MsgDelKeysResponse = exports.MsgDelKeys = exports.MsgAddKeysResponse = exports.MsgAddKeys = void 0;
var _project = require("./project");
var _policy = require("../plans/policy");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseMsgAddKeys() {
  return {
    creator: "",
    project: "",
    projectKeys: []
  };
}
var MsgAddKeys = {
  typeUrl: "/lavanet.lava.projects.MsgAddKeys",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    var _iterator = _createForOfIteratorHelper(message.projectKeys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _project.ProjectKey.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgAddKeys();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.projectKeys.push(_project.ProjectKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator, _object$project, _object$projectKeys;
    var message = createBaseMsgAddKeys();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.project = (_object$project = object.project) !== null && _object$project !== void 0 ? _object$project : "";
    message.projectKeys = ((_object$projectKeys = object.projectKeys) === null || _object$projectKeys === void 0 ? void 0 : _object$projectKeys.map(function (e) {
      return _project.ProjectKey.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creator: object.creator,
      project: object.project,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.project_keys) ? object.project_keys.map(function (e) {
        return _project.ProjectKey.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creator = message.creator;
    obj.project = message.project;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(function (e) {
        return e ? _project.ProjectKey.toAmino(e) : undefined;
      });
    } else {
      obj.project_keys = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgAddKeys.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgAddKeys.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgAddKeys.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgAddKeys",
      value: MsgAddKeys.encode(message).finish()
    };
  }
};
exports.MsgAddKeys = MsgAddKeys;
function createBaseMsgAddKeysResponse() {
  return {};
}
var MsgAddKeysResponse = {
  typeUrl: "/lavanet.lava.projects.MsgAddKeysResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgAddKeysResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgAddKeysResponse();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgAddKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgAddKeysResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgAddKeysResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgAddKeysResponse",
      value: MsgAddKeysResponse.encode(message).finish()
    };
  }
};
exports.MsgAddKeysResponse = MsgAddKeysResponse;
function createBaseMsgDelKeys() {
  return {
    creator: "",
    project: "",
    projectKeys: []
  };
}
var MsgDelKeys = {
  typeUrl: "/lavanet.lava.projects.MsgDelKeys",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    var _iterator2 = _createForOfIteratorHelper(message.projectKeys),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _project.ProjectKey.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelKeys();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.projectKeys.push(_project.ProjectKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$project2, _object$projectKeys2;
    var message = createBaseMsgDelKeys();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.project = (_object$project2 = object.project) !== null && _object$project2 !== void 0 ? _object$project2 : "";
    message.projectKeys = ((_object$projectKeys2 = object.projectKeys) === null || _object$projectKeys2 === void 0 ? void 0 : _object$projectKeys2.map(function (e) {
      return _project.ProjectKey.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creator: object.creator,
      project: object.project,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.project_keys) ? object.project_keys.map(function (e) {
        return _project.ProjectKey.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creator = message.creator;
    obj.project = message.project;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(function (e) {
        return e ? _project.ProjectKey.toAmino(e) : undefined;
      });
    } else {
      obj.project_keys = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgDelKeys.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgDelKeys.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgDelKeys.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgDelKeys",
      value: MsgDelKeys.encode(message).finish()
    };
  }
};
exports.MsgDelKeys = MsgDelKeys;
function createBaseMsgDelKeysResponse() {
  return {};
}
var MsgDelKeysResponse = {
  typeUrl: "/lavanet.lava.projects.MsgDelKeysResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelKeysResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgDelKeysResponse();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgDelKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgDelKeysResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgDelKeysResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgDelKeysResponse",
      value: MsgDelKeysResponse.encode(message).finish()
    };
  }
};
exports.MsgDelKeysResponse = MsgDelKeysResponse;
function createBaseMsgSetPolicy() {
  return {
    creator: "",
    project: "",
    policy: _policy.Policy.fromPartial({})
  };
}
var MsgSetPolicy = {
  typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    if (message.policy !== undefined) {
      _policy.Policy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
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
    var _object$creator3, _object$project3;
    var message = createBaseMsgSetPolicy();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.project = (_object$project3 = object.project) !== null && _object$project3 !== void 0 ? _object$project3 : "";
    message.policy = object.policy !== undefined && object.policy !== null ? _policy.Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creator: object.creator,
      project: object.project,
      policy: object !== null && object !== void 0 && object.policy ? _policy.Policy.fromAmino(object.policy) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creator = message.creator;
    obj.project = message.project;
    obj.policy = message.policy ? _policy.Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgSetPolicy.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSetPolicy.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSetPolicy.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
      value: MsgSetPolicy.encode(message).finish()
    };
  }
};
exports.MsgSetPolicy = MsgSetPolicy;
function createBaseMsgSetPolicyResponse() {
  return {};
}
var MsgSetPolicyResponse = {
  typeUrl: "/lavanet.lava.projects.MsgSetPolicyResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetPolicyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSetPolicyResponse();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgSetPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSetPolicyResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSetPolicyResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetPolicyResponse",
      value: MsgSetPolicyResponse.encode(message).finish()
    };
  }
};
exports.MsgSetPolicyResponse = MsgSetPolicyResponse;
function createBaseMsgSetSubscriptionPolicy() {
  return {
    creator: "",
    projects: [],
    policy: _policy.Policy.fromPartial({})
  };
}
var MsgSetSubscriptionPolicy = {
  typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    var _iterator3 = _createForOfIteratorHelper(message.projects),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.policy !== undefined) {
      _policy.Policy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetSubscriptionPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projects.push(reader.string());
          break;
        case 3:
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
    var _object$creator4, _object$projects;
    var message = createBaseMsgSetSubscriptionPolicy();
    message.creator = (_object$creator4 = object.creator) !== null && _object$creator4 !== void 0 ? _object$creator4 : "";
    message.projects = ((_object$projects = object.projects) === null || _object$projects === void 0 ? void 0 : _object$projects.map(function (e) {
      return e;
    })) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? _policy.Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creator: object.creator,
      projects: Array.isArray(object === null || object === void 0 ? void 0 : object.projects) ? object.projects.map(function (e) {
        return e;
      }) : [],
      policy: object !== null && object !== void 0 && object.policy ? _policy.Policy.fromAmino(object.policy) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creator = message.creator;
    if (message.projects) {
      obj.projects = message.projects.map(function (e) {
        return e;
      });
    } else {
      obj.projects = [];
    }
    obj.policy = message.policy ? _policy.Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgSetSubscriptionPolicy.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSetSubscriptionPolicy.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSetSubscriptionPolicy.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
      value: MsgSetSubscriptionPolicy.encode(message).finish()
    };
  }
};
exports.MsgSetSubscriptionPolicy = MsgSetSubscriptionPolicy;
function createBaseMsgSetSubscriptionPolicyResponse() {
  return {};
}
var MsgSetSubscriptionPolicyResponse = {
  typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicyResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetSubscriptionPolicyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSetSubscriptionPolicyResponse();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgSetSubscriptionPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgSetSubscriptionPolicyResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgSetSubscriptionPolicyResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicyResponse",
      value: MsgSetSubscriptionPolicyResponse.encode(message).finish()
    };
  }
};
exports.MsgSetSubscriptionPolicyResponse = MsgSetSubscriptionPolicyResponse;