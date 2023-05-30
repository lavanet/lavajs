"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProtoDeveloperData = exports.ProjectKey = exports.ProjectData = exports.Project = exports.Policy = exports.KeyTypeSDKType = exports.KeyTypeObject = exports.KeyType = exports.ChainPolicy = void 0;
exports.keyTypeFromJSON = keyTypeFromJSON;
exports.keyTypeToJSON = keyTypeToJSON;
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var KeyType = /*#__PURE__*/function (KeyType) {
  KeyType[KeyType["NONE"] = 0] = "NONE";
  KeyType[KeyType["ADMIN"] = 1] = "ADMIN";
  KeyType[KeyType["DEVELOPER"] = 2] = "DEVELOPER";
  KeyType[KeyType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return KeyType;
}({});
exports.KeyType = KeyType;
var KeyTypeSDKType = KeyType;
exports.KeyTypeSDKType = KeyTypeSDKType;
function keyTypeFromJSON(object) {
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
function keyTypeToJSON(object) {
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
    usedCu: _helpers.Long.UZERO,
    subscriptionPolicy: undefined,
    snapshot: _helpers.Long.UZERO
  };
}
var Project = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      index: (0, _helpers.isSet)(object.index) ? String(object.index) : "",
      subscription: (0, _helpers.isSet)(object.subscription) ? String(object.subscription) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      enabled: (0, _helpers.isSet)(object.enabled) ? Boolean(object.enabled) : false,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.projectKeys) ? object.projectKeys.map(function (e) {
        return ProjectKey.fromJSON(e);
      }) : [],
      adminPolicy: (0, _helpers.isSet)(object.adminPolicy) ? Policy.fromJSON(object.adminPolicy) : undefined,
      usedCu: (0, _helpers.isSet)(object.usedCu) ? _helpers.Long.fromValue(object.usedCu) : _helpers.Long.UZERO,
      subscriptionPolicy: (0, _helpers.isSet)(object.subscriptionPolicy) ? Policy.fromJSON(object.subscriptionPolicy) : undefined,
      snapshot: (0, _helpers.isSet)(object.snapshot) ? _helpers.Long.fromValue(object.snapshot) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.subscription !== undefined && (obj.subscription = message.subscription);
    message.description !== undefined && (obj.description = message.description);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(function (e) {
        return e ? ProjectKey.toJSON(e) : undefined;
      });
    } else {
      obj.projectKeys = [];
    }
    message.adminPolicy !== undefined && (obj.adminPolicy = message.adminPolicy ? Policy.toJSON(message.adminPolicy) : undefined);
    message.usedCu !== undefined && (obj.usedCu = (message.usedCu || _helpers.Long.UZERO).toString());
    message.subscriptionPolicy !== undefined && (obj.subscriptionPolicy = message.subscriptionPolicy ? Policy.toJSON(message.subscriptionPolicy) : undefined);
    message.snapshot !== undefined && (obj.snapshot = (message.snapshot || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$subscription, _object$description, _object$enabled, _object$projectKeys;
    var message = createBaseProject();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.subscription = (_object$subscription = object.subscription) !== null && _object$subscription !== void 0 ? _object$subscription : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    message.projectKeys = ((_object$projectKeys = object.projectKeys) === null || _object$projectKeys === void 0 ? void 0 : _object$projectKeys.map(function (e) {
      return ProjectKey.fromPartial(e);
    })) || [];
    message.adminPolicy = object.adminPolicy !== undefined && object.adminPolicy !== null ? Policy.fromPartial(object.adminPolicy) : undefined;
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? _helpers.Long.fromValue(object.usedCu) : _helpers.Long.UZERO;
    message.subscriptionPolicy = object.subscriptionPolicy !== undefined && object.subscriptionPolicy !== null ? Policy.fromPartial(object.subscriptionPolicy) : undefined;
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? _helpers.Long.fromValue(object.snapshot) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Project = Project;
function createBaseKeyTypeObject() {
  return {
    types: 0
  };
}
var KeyTypeObject = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.types !== 0) {
      writer.uint32(8).int32(message.types);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseKeyTypeObject();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      types: (0, _helpers.isSet)(object.types) ? keyTypeFromJSON(object.types) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.types !== undefined && (obj.types = keyTypeToJSON(message.types));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$types;
    var message = createBaseKeyTypeObject();
    message.types = (_object$types = object.types) !== null && _object$types !== void 0 ? _object$types : 0;
    return message;
  }
};
exports.KeyTypeObject = KeyTypeObject;
function createBaseProjectKey() {
  return {
    key: "",
    types: []
  };
}
var ProjectKey = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    var _iterator2 = _createForOfIteratorHelper(message.types),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        KeyTypeObject.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProjectKey();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      key: (0, _helpers.isSet)(object.key) ? String(object.key) : "",
      types: Array.isArray(object === null || object === void 0 ? void 0 : object.types) ? object.types.map(function (e) {
        return KeyTypeObject.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.key !== undefined && (obj.key = message.key);
    if (message.types) {
      obj.types = message.types.map(function (e) {
        return e ? KeyTypeObject.toJSON(e) : undefined;
      });
    } else {
      obj.types = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$key, _object$types2;
    var message = createBaseProjectKey();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.types = ((_object$types2 = object.types) === null || _object$types2 === void 0 ? void 0 : _object$types2.map(function (e) {
      return KeyTypeObject.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.ProjectKey = ProjectKey;
function createBasePolicy() {
  return {
    chainPolicies: [],
    geolocationProfile: _helpers.Long.UZERO,
    totalCuLimit: _helpers.Long.UZERO,
    epochCuLimit: _helpers.Long.UZERO,
    maxProvidersToPair: _helpers.Long.UZERO
  };
}
var Policy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.chainPolicies),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        ChainPolicy.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      chainPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.chainPolicies) ? object.chainPolicies.map(function (e) {
        return ChainPolicy.fromJSON(e);
      }) : [],
      geolocationProfile: (0, _helpers.isSet)(object.geolocationProfile) ? _helpers.Long.fromValue(object.geolocationProfile) : _helpers.Long.UZERO,
      totalCuLimit: (0, _helpers.isSet)(object.totalCuLimit) ? _helpers.Long.fromValue(object.totalCuLimit) : _helpers.Long.UZERO,
      epochCuLimit: (0, _helpers.isSet)(object.epochCuLimit) ? _helpers.Long.fromValue(object.epochCuLimit) : _helpers.Long.UZERO,
      maxProvidersToPair: (0, _helpers.isSet)(object.maxProvidersToPair) ? _helpers.Long.fromValue(object.maxProvidersToPair) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    if (message.chainPolicies) {
      obj.chainPolicies = message.chainPolicies.map(function (e) {
        return e ? ChainPolicy.toJSON(e) : undefined;
      });
    } else {
      obj.chainPolicies = [];
    }
    message.geolocationProfile !== undefined && (obj.geolocationProfile = (message.geolocationProfile || _helpers.Long.UZERO).toString());
    message.totalCuLimit !== undefined && (obj.totalCuLimit = (message.totalCuLimit || _helpers.Long.UZERO).toString());
    message.epochCuLimit !== undefined && (obj.epochCuLimit = (message.epochCuLimit || _helpers.Long.UZERO).toString());
    message.maxProvidersToPair !== undefined && (obj.maxProvidersToPair = (message.maxProvidersToPair || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainPolicies;
    var message = createBasePolicy();
    message.chainPolicies = ((_object$chainPolicies = object.chainPolicies) === null || _object$chainPolicies === void 0 ? void 0 : _object$chainPolicies.map(function (e) {
      return ChainPolicy.fromPartial(e);
    })) || [];
    message.geolocationProfile = object.geolocationProfile !== undefined && object.geolocationProfile !== null ? _helpers.Long.fromValue(object.geolocationProfile) : _helpers.Long.UZERO;
    message.totalCuLimit = object.totalCuLimit !== undefined && object.totalCuLimit !== null ? _helpers.Long.fromValue(object.totalCuLimit) : _helpers.Long.UZERO;
    message.epochCuLimit = object.epochCuLimit !== undefined && object.epochCuLimit !== null ? _helpers.Long.fromValue(object.epochCuLimit) : _helpers.Long.UZERO;
    message.maxProvidersToPair = object.maxProvidersToPair !== undefined && object.maxProvidersToPair !== null ? _helpers.Long.fromValue(object.maxProvidersToPair) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Policy = Policy;
function createBaseChainPolicy() {
  return {
    chainId: "",
    apis: []
  };
}
var ChainPolicy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    var _iterator4 = _createForOfIteratorHelper(message.apis),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseChainPolicy();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      chainId: (0, _helpers.isSet)(object.chainId) ? String(object.chainId) : "",
      apis: Array.isArray(object === null || object === void 0 ? void 0 : object.apis) ? object.apis.map(function (e) {
        return String(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    if (message.apis) {
      obj.apis = message.apis.map(function (e) {
        return e;
      });
    } else {
      obj.apis = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainId, _object$apis;
    var message = createBaseChainPolicy();
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.apis = ((_object$apis = object.apis) === null || _object$apis === void 0 ? void 0 : _object$apis.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ChainPolicy = ChainPolicy;
function createBaseProtoDeveloperData() {
  return {
    projectID: ""
  };
}
var ProtoDeveloperData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.projectID !== "") {
      writer.uint32(10).string(message.projectID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      projectID: (0, _helpers.isSet)(object.projectID) ? String(object.projectID) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.projectID !== undefined && (obj.projectID = message.projectID);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$projectID;
    var message = createBaseProtoDeveloperData();
    message.projectID = (_object$projectID = object.projectID) !== null && _object$projectID !== void 0 ? _object$projectID : "";
    return message;
  }
};
exports.ProtoDeveloperData = ProtoDeveloperData;
function createBaseProjectData() {
  return {
    name: "",
    description: "",
    enabled: false,
    projectKeys: [],
    policy: undefined
  };
}
var ProjectData = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    var _iterator5 = _createForOfIteratorHelper(message.projectKeys),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        ProjectKey.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProjectData();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      enabled: (0, _helpers.isSet)(object.enabled) ? Boolean(object.enabled) : false,
      projectKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.projectKeys) ? object.projectKeys.map(function (e) {
        return ProjectKey.fromJSON(e);
      }) : [],
      policy: (0, _helpers.isSet)(object.policy) ? Policy.fromJSON(object.policy) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(function (e) {
        return e ? ProjectKey.toJSON(e) : undefined;
      });
    } else {
      obj.projectKeys = [];
    }
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$description2, _object$enabled2, _object$projectKeys2;
    var message = createBaseProjectData();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.enabled = (_object$enabled2 = object.enabled) !== null && _object$enabled2 !== void 0 ? _object$enabled2 : false;
    message.projectKeys = ((_object$projectKeys2 = object.projectKeys) === null || _object$projectKeys2 === void 0 ? void 0 : _object$projectKeys2.map(function (e) {
      return ProjectKey.fromPartial(e);
    })) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  }
};
exports.ProjectData = ProjectData;