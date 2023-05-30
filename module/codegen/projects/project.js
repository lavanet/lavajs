import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export let KeyType = /*#__PURE__*/function (KeyType) {
  KeyType[KeyType["NONE"] = 0] = "NONE";
  KeyType[KeyType["ADMIN"] = 1] = "ADMIN";
  KeyType[KeyType["DEVELOPER"] = 2] = "DEVELOPER";
  KeyType[KeyType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return KeyType;
}({});
export const KeyTypeSDKType = KeyType;
export function keyTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "NONE":
      return KeyType.NONE;
    case 1:
    case "ADMIN":
      return KeyType.ADMIN;
    case 2:
    case "DEVELOPER":
      return KeyType.DEVELOPER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyType.UNRECOGNIZED;
  }
}
export function keyTypeToJSON(object) {
  switch (object) {
    case KeyType.NONE:
      return "NONE";
    case KeyType.ADMIN:
      return "ADMIN";
    case KeyType.DEVELOPER:
      return "DEVELOPER";
    case KeyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** protobuf expected in YAML format: used "moretags" to simplify parsing */

/** protobuf expected in YAML format: used "moretags" to simplify parsing */

/** used as a container struct for the subscription module */

/** used as a container struct for the subscription module */

function createBaseProject() {
  return {
    index: "",
    subscription: "",
    description: "",
    enabled: false,
    projectKeys: [],
    adminPolicy: undefined,
    usedCu: Long.UZERO,
    subscriptionPolicy: undefined,
    snapshot: Long.UZERO
  };
}
export const Project = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.subscription !== "") {
      writer.uint32(18).string(message.subscription);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
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
    if (!message.usedCu.isZero()) {
      writer.uint32(56).uint64(message.usedCu);
    }
    if (message.subscriptionPolicy !== undefined) {
      Policy.encode(message.subscriptionPolicy, writer.uint32(66).fork()).ldelim();
    }
    if (!message.snapshot.isZero()) {
      writer.uint32(72).uint64(message.snapshot);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        case 3:
          message.description = reader.string();
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
  fromJSON(object) {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      subscription: isSet(object.subscription) ? String(object.subscription) : "",
      description: isSet(object.description) ? String(object.description) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.projectKeys) ? object.projectKeys.map(e => ProjectKey.fromJSON(e)) : [],
      adminPolicy: isSet(object.adminPolicy) ? Policy.fromJSON(object.adminPolicy) : undefined,
      usedCu: isSet(object.usedCu) ? Long.fromValue(object.usedCu) : Long.UZERO,
      subscriptionPolicy: isSet(object.subscriptionPolicy) ? Policy.fromJSON(object.subscriptionPolicy) : undefined,
      snapshot: isSet(object.snapshot) ? Long.fromValue(object.snapshot) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.subscription !== undefined && (obj.subscription = message.subscription);
    message.description !== undefined && (obj.description = message.description);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(e => e ? ProjectKey.toJSON(e) : undefined);
    } else {
      obj.projectKeys = [];
    }
    message.adminPolicy !== undefined && (obj.adminPolicy = message.adminPolicy ? Policy.toJSON(message.adminPolicy) : undefined);
    message.usedCu !== undefined && (obj.usedCu = (message.usedCu || Long.UZERO).toString());
    message.subscriptionPolicy !== undefined && (obj.subscriptionPolicy = message.subscriptionPolicy ? Policy.toJSON(message.subscriptionPolicy) : undefined);
    message.snapshot !== undefined && (obj.snapshot = (message.snapshot || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$index, _object$subscription, _object$description, _object$enabled, _object$projectKeys;
    const message = createBaseProject();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.subscription = (_object$subscription = object.subscription) !== null && _object$subscription !== void 0 ? _object$subscription : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    message.projectKeys = ((_object$projectKeys = object.projectKeys) === null || _object$projectKeys === void 0 ? void 0 : _object$projectKeys.map(e => ProjectKey.fromPartial(e))) || [];
    message.adminPolicy = object.adminPolicy !== undefined && object.adminPolicy !== null ? Policy.fromPartial(object.adminPolicy) : undefined;
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? Long.fromValue(object.usedCu) : Long.UZERO;
    message.subscriptionPolicy = object.subscriptionPolicy !== undefined && object.subscriptionPolicy !== null ? Policy.fromPartial(object.subscriptionPolicy) : undefined;
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Long.fromValue(object.snapshot) : Long.UZERO;
    return message;
  }
};
function createBaseKeyTypeObject() {
  return {
    types: 0
  };
}
export const KeyTypeObject = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.types !== 0) {
      writer.uint32(8).int32(message.types);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyTypeObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.types = reader.int32();
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
      types: isSet(object.types) ? keyTypeFromJSON(object.types) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.types !== undefined && (obj.types = keyTypeToJSON(message.types));
    return obj;
  },
  fromPartial(object) {
    var _object$types;
    const message = createBaseKeyTypeObject();
    message.types = (_object$types = object.types) !== null && _object$types !== void 0 ? _object$types : 0;
    return message;
  }
};
function createBaseProjectKey() {
  return {
    key: "",
    types: []
  };
}
export const ProjectKey = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    for (const v of message.types) {
      KeyTypeObject.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.types.push(KeyTypeObject.decode(reader, reader.uint32()));
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
      key: isSet(object.key) ? String(object.key) : "",
      types: Array.isArray(object === null || object === void 0 ? void 0 : object.types) ? object.types.map(e => KeyTypeObject.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.key !== undefined && (obj.key = message.key);
    if (message.types) {
      obj.types = message.types.map(e => e ? KeyTypeObject.toJSON(e) : undefined);
    } else {
      obj.types = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$key, _object$types2;
    const message = createBaseProjectKey();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.types = ((_object$types2 = object.types) === null || _object$types2 === void 0 ? void 0 : _object$types2.map(e => KeyTypeObject.fromPartial(e))) || [];
    return message;
  }
};
function createBasePolicy() {
  return {
    chainPolicies: [],
    geolocationProfile: Long.UZERO,
    totalCuLimit: Long.UZERO,
    epochCuLimit: Long.UZERO,
    maxProvidersToPair: Long.UZERO
  };
}
export const Policy = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.chainPolicies) {
      ChainPolicy.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (!message.geolocationProfile.isZero()) {
      writer.uint32(16).uint64(message.geolocationProfile);
    }
    if (!message.totalCuLimit.isZero()) {
      writer.uint32(24).uint64(message.totalCuLimit);
    }
    if (!message.epochCuLimit.isZero()) {
      writer.uint32(32).uint64(message.epochCuLimit);
    }
    if (!message.maxProvidersToPair.isZero()) {
      writer.uint32(40).uint64(message.maxProvidersToPair);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainPolicies.push(ChainPolicy.decode(reader, reader.uint32()));
          break;
        case 2:
          message.geolocationProfile = reader.uint64();
          break;
        case 3:
          message.totalCuLimit = reader.uint64();
          break;
        case 4:
          message.epochCuLimit = reader.uint64();
          break;
        case 5:
          message.maxProvidersToPair = reader.uint64();
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
      chainPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.chainPolicies) ? object.chainPolicies.map(e => ChainPolicy.fromJSON(e)) : [],
      geolocationProfile: isSet(object.geolocationProfile) ? Long.fromValue(object.geolocationProfile) : Long.UZERO,
      totalCuLimit: isSet(object.totalCuLimit) ? Long.fromValue(object.totalCuLimit) : Long.UZERO,
      epochCuLimit: isSet(object.epochCuLimit) ? Long.fromValue(object.epochCuLimit) : Long.UZERO,
      maxProvidersToPair: isSet(object.maxProvidersToPair) ? Long.fromValue(object.maxProvidersToPair) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.chainPolicies) {
      obj.chainPolicies = message.chainPolicies.map(e => e ? ChainPolicy.toJSON(e) : undefined);
    } else {
      obj.chainPolicies = [];
    }
    message.geolocationProfile !== undefined && (obj.geolocationProfile = (message.geolocationProfile || Long.UZERO).toString());
    message.totalCuLimit !== undefined && (obj.totalCuLimit = (message.totalCuLimit || Long.UZERO).toString());
    message.epochCuLimit !== undefined && (obj.epochCuLimit = (message.epochCuLimit || Long.UZERO).toString());
    message.maxProvidersToPair !== undefined && (obj.maxProvidersToPair = (message.maxProvidersToPair || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$chainPolicies;
    const message = createBasePolicy();
    message.chainPolicies = ((_object$chainPolicies = object.chainPolicies) === null || _object$chainPolicies === void 0 ? void 0 : _object$chainPolicies.map(e => ChainPolicy.fromPartial(e))) || [];
    message.geolocationProfile = object.geolocationProfile !== undefined && object.geolocationProfile !== null ? Long.fromValue(object.geolocationProfile) : Long.UZERO;
    message.totalCuLimit = object.totalCuLimit !== undefined && object.totalCuLimit !== null ? Long.fromValue(object.totalCuLimit) : Long.UZERO;
    message.epochCuLimit = object.epochCuLimit !== undefined && object.epochCuLimit !== null ? Long.fromValue(object.epochCuLimit) : Long.UZERO;
    message.maxProvidersToPair = object.maxProvidersToPair !== undefined && object.maxProvidersToPair !== null ? Long.fromValue(object.maxProvidersToPair) : Long.UZERO;
    return message;
  }
};
function createBaseChainPolicy() {
  return {
    chainId: "",
    apis: []
  };
}
export const ChainPolicy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    for (const v of message.apis) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.apis.push(reader.string());
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
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      apis: Array.isArray(object === null || object === void 0 ? void 0 : object.apis) ? object.apis.map(e => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    if (message.apis) {
      obj.apis = message.apis.map(e => e);
    } else {
      obj.apis = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$chainId, _object$apis;
    const message = createBaseChainPolicy();
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.apis = ((_object$apis = object.apis) === null || _object$apis === void 0 ? void 0 : _object$apis.map(e => e)) || [];
    return message;
  }
};
function createBaseProtoDeveloperData() {
  return {
    projectID: ""
  };
}
export const ProtoDeveloperData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.projectID !== "") {
      writer.uint32(10).string(message.projectID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      projectID: isSet(object.projectID) ? String(object.projectID) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.projectID !== undefined && (obj.projectID = message.projectID);
    return obj;
  },
  fromPartial(object) {
    var _object$projectID;
    const message = createBaseProtoDeveloperData();
    message.projectID = (_object$projectID = object.projectID) !== null && _object$projectID !== void 0 ? _object$projectID : "";
    return message;
  }
};
function createBaseProjectData() {
  return {
    name: "",
    description: "",
    enabled: false,
    projectKeys: [],
    policy: undefined
  };
}
export const ProjectData = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
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
  fromJSON(object) {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.projectKeys) ? object.projectKeys.map(e => ProjectKey.fromJSON(e)) : [],
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(e => e ? ProjectKey.toJSON(e) : undefined);
    } else {
      obj.projectKeys = [];
    }
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$name, _object$description2, _object$enabled2, _object$projectKeys2;
    const message = createBaseProjectData();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.enabled = (_object$enabled2 = object.enabled) !== null && _object$enabled2 !== void 0 ? _object$enabled2 : false;
    message.projectKeys = ((_object$projectKeys2 = object.projectKeys) === null || _object$projectKeys2 === void 0 ? void 0 : _object$projectKeys2.map(e => ProjectKey.fromPartial(e))) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  }
};