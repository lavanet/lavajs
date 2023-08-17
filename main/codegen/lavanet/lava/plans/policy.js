"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SELECTED_PROVIDERS_MODESDKType = exports.SELECTED_PROVIDERS_MODE = exports.Policy = exports.ChainRequirement = exports.ChainPolicy = void 0;
exports.sELECTED_PROVIDERS_MODEFromJSON = sELECTED_PROVIDERS_MODEFromJSON;
exports.sELECTED_PROVIDERS_MODEToJSON = sELECTED_PROVIDERS_MODEToJSON;
var _api_collection = require("../spec/api_collection");
var _binary = require("../../../binary");
var _helpers = require("../../../helpers");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** the enum below determines the pairing algorithm's behaviour with the selected providers feature */
var SELECTED_PROVIDERS_MODE = /*#__PURE__*/function (SELECTED_PROVIDERS_MODE) {
  SELECTED_PROVIDERS_MODE[SELECTED_PROVIDERS_MODE["ALLOWED"] = 0] = "ALLOWED";
  SELECTED_PROVIDERS_MODE[SELECTED_PROVIDERS_MODE["MIXED"] = 1] = "MIXED";
  SELECTED_PROVIDERS_MODE[SELECTED_PROVIDERS_MODE["EXCLUSIVE"] = 2] = "EXCLUSIVE";
  SELECTED_PROVIDERS_MODE[SELECTED_PROVIDERS_MODE["DISABLED"] = 3] = "DISABLED";
  SELECTED_PROVIDERS_MODE[SELECTED_PROVIDERS_MODE["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return SELECTED_PROVIDERS_MODE;
}({});
exports.SELECTED_PROVIDERS_MODE = SELECTED_PROVIDERS_MODE;
var SELECTED_PROVIDERS_MODESDKType = SELECTED_PROVIDERS_MODE;
exports.SELECTED_PROVIDERS_MODESDKType = SELECTED_PROVIDERS_MODESDKType;
function sELECTED_PROVIDERS_MODEFromJSON(object) {
  switch (object) {
    case 0:
    case "ALLOWED":
      return SELECTED_PROVIDERS_MODE.ALLOWED;
    case 1:
    case "MIXED":
      return SELECTED_PROVIDERS_MODE.MIXED;
    case 2:
    case "EXCLUSIVE":
      return SELECTED_PROVIDERS_MODE.EXCLUSIVE;
    case 3:
    case "DISABLED":
      return SELECTED_PROVIDERS_MODE.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SELECTED_PROVIDERS_MODE.UNRECOGNIZED;
  }
}
function sELECTED_PROVIDERS_MODEToJSON(object) {
  switch (object) {
    case SELECTED_PROVIDERS_MODE.ALLOWED:
      return "ALLOWED";
    case SELECTED_PROVIDERS_MODE.MIXED:
      return "MIXED";
    case SELECTED_PROVIDERS_MODE.EXCLUSIVE:
      return "EXCLUSIVE";
    case SELECTED_PROVIDERS_MODE.DISABLED:
      return "DISABLED";
    case SELECTED_PROVIDERS_MODE.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** protobuf expected in YAML format: used "moretags" to simplify parsing */

/** protobuf expected in YAML format: used "moretags" to simplify parsing */

function createBasePolicy() {
  return {
    chainPolicies: [],
    geolocationProfile: BigInt(0),
    totalCuLimit: BigInt(0),
    epochCuLimit: BigInt(0),
    maxProvidersToPair: BigInt(0),
    selectedProvidersMode: 0,
    selectedProviders: []
  };
}
var Policy = {
  typeUrl: "/lavanet.lava.plans.Policy",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.chainPolicies),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        ChainPolicy.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.geolocationProfile !== BigInt(0)) {
      writer.uint32(16).uint64(message.geolocationProfile);
    }
    if (message.totalCuLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalCuLimit);
    }
    if (message.epochCuLimit !== BigInt(0)) {
      writer.uint32(32).uint64(message.epochCuLimit);
    }
    if (message.maxProvidersToPair !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxProvidersToPair);
    }
    if (message.selectedProvidersMode !== 0) {
      writer.uint32(48).int32(message.selectedProvidersMode);
    }
    var _iterator2 = _createForOfIteratorHelper(message.selectedProviders),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        writer.uint32(58).string(_v);
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
        case 6:
          message.selectedProvidersMode = reader.int32();
          break;
        case 7:
          message.selectedProviders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainPolicies, _object$selectedProvi, _object$selectedProvi2;
    var message = createBasePolicy();
    message.chainPolicies = ((_object$chainPolicies = object.chainPolicies) === null || _object$chainPolicies === void 0 ? void 0 : _object$chainPolicies.map(function (e) {
      return ChainPolicy.fromPartial(e);
    })) || [];
    message.geolocationProfile = object.geolocationProfile !== undefined && object.geolocationProfile !== null ? BigInt(object.geolocationProfile.toString()) : BigInt(0);
    message.totalCuLimit = object.totalCuLimit !== undefined && object.totalCuLimit !== null ? BigInt(object.totalCuLimit.toString()) : BigInt(0);
    message.epochCuLimit = object.epochCuLimit !== undefined && object.epochCuLimit !== null ? BigInt(object.epochCuLimit.toString()) : BigInt(0);
    message.maxProvidersToPair = object.maxProvidersToPair !== undefined && object.maxProvidersToPair !== null ? BigInt(object.maxProvidersToPair.toString()) : BigInt(0);
    message.selectedProvidersMode = (_object$selectedProvi = object.selectedProvidersMode) !== null && _object$selectedProvi !== void 0 ? _object$selectedProvi : 0;
    message.selectedProviders = ((_object$selectedProvi2 = object.selectedProviders) === null || _object$selectedProvi2 === void 0 ? void 0 : _object$selectedProvi2.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      chainPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.chain_policies) ? object.chain_policies.map(function (e) {
        return ChainPolicy.fromAmino(e);
      }) : [],
      geolocationProfile: BigInt(object.geolocation_profile),
      totalCuLimit: BigInt(object.total_cu_limit),
      epochCuLimit: BigInt(object.epoch_cu_limit),
      maxProvidersToPair: BigInt(object.max_providers_to_pair),
      selectedProvidersMode: (0, _helpers.isSet)(object.selected_providers_mode) ? sELECTED_PROVIDERS_MODEFromJSON(object.selected_providers_mode) : -1,
      selectedProviders: Array.isArray(object === null || object === void 0 ? void 0 : object.selected_providers) ? object.selected_providers.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.chainPolicies) {
      obj.chain_policies = message.chainPolicies.map(function (e) {
        return e ? ChainPolicy.toAmino(e) : undefined;
      });
    } else {
      obj.chain_policies = [];
    }
    obj.geolocation_profile = message.geolocationProfile ? message.geolocationProfile.toString() : undefined;
    obj.total_cu_limit = message.totalCuLimit ? message.totalCuLimit.toString() : undefined;
    obj.epoch_cu_limit = message.epochCuLimit ? message.epochCuLimit.toString() : undefined;
    obj.max_providers_to_pair = message.maxProvidersToPair ? message.maxProvidersToPair.toString() : undefined;
    obj.selected_providers_mode = message.selectedProvidersMode;
    if (message.selectedProviders) {
      obj.selected_providers = message.selectedProviders.map(function (e) {
        return e;
      });
    } else {
      obj.selected_providers = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Policy.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Policy.decode(message.value);
  },
  toProto: function toProto(message) {
    return Policy.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.plans.Policy",
      value: Policy.encode(message).finish()
    };
  }
};
exports.Policy = Policy;
function createBaseChainPolicy() {
  return {
    chainId: "",
    apis: [],
    requirements: []
  };
}
var ChainPolicy = {
  typeUrl: "/lavanet.lava.plans.ChainPolicy",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    var _iterator3 = _createForOfIteratorHelper(message.apis),
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
    var _iterator4 = _createForOfIteratorHelper(message.requirements),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v2 = _step4.value;
        ChainRequirement.encode(_v2, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
        case 3:
          message.requirements.push(ChainRequirement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainId, _object$apis, _object$requirements;
    var message = createBaseChainPolicy();
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.apis = ((_object$apis = object.apis) === null || _object$apis === void 0 ? void 0 : _object$apis.map(function (e) {
      return e;
    })) || [];
    message.requirements = ((_object$requirements = object.requirements) === null || _object$requirements === void 0 ? void 0 : _object$requirements.map(function (e) {
      return ChainRequirement.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      chainId: object.chain_id,
      apis: Array.isArray(object === null || object === void 0 ? void 0 : object.apis) ? object.apis.map(function (e) {
        return e;
      }) : [],
      requirements: Array.isArray(object === null || object === void 0 ? void 0 : object.requirements) ? object.requirements.map(function (e) {
        return ChainRequirement.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.chain_id = message.chainId;
    if (message.apis) {
      obj.apis = message.apis.map(function (e) {
        return e;
      });
    } else {
      obj.apis = [];
    }
    if (message.requirements) {
      obj.requirements = message.requirements.map(function (e) {
        return e ? ChainRequirement.toAmino(e) : undefined;
      });
    } else {
      obj.requirements = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ChainPolicy.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ChainPolicy.decode(message.value);
  },
  toProto: function toProto(message) {
    return ChainPolicy.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.plans.ChainPolicy",
      value: ChainPolicy.encode(message).finish()
    };
  }
};
exports.ChainPolicy = ChainPolicy;
function createBaseChainRequirement() {
  return {
    collection: _api_collection.CollectionData.fromPartial({}),
    extensions: []
  };
}
var ChainRequirement = {
  typeUrl: "/lavanet.lava.plans.ChainRequirement",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.collection !== undefined) {
      _api_collection.CollectionData.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    var _iterator5 = _createForOfIteratorHelper(message.extensions),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseChainRequirement();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = _api_collection.CollectionData.decode(reader, reader.uint32());
          break;
        case 2:
          message.extensions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$extensions;
    var message = createBaseChainRequirement();
    message.collection = object.collection !== undefined && object.collection !== null ? _api_collection.CollectionData.fromPartial(object.collection) : undefined;
    message.extensions = ((_object$extensions = object.extensions) === null || _object$extensions === void 0 ? void 0 : _object$extensions.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      collection: object !== null && object !== void 0 && object.collection ? _api_collection.CollectionData.fromAmino(object.collection) : undefined,
      extensions: Array.isArray(object === null || object === void 0 ? void 0 : object.extensions) ? object.extensions.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.collection = message.collection ? _api_collection.CollectionData.toAmino(message.collection) : undefined;
    if (message.extensions) {
      obj.extensions = message.extensions.map(function (e) {
        return e;
      });
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ChainRequirement.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ChainRequirement.decode(message.value);
  },
  toProto: function toProto(message) {
    return ChainRequirement.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.plans.ChainRequirement",
      value: ChainRequirement.encode(message).finish()
    };
  }
};
exports.ChainRequirement = ChainRequirement;