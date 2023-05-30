"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spec_ProvidersTypesSDKType = exports.Spec_ProvidersTypes = exports.Spec = void 0;
exports.spec_ProvidersTypesFromJSON = spec_ProvidersTypesFromJSON;
exports.spec_ProvidersTypesToJSON = spec_ProvidersTypesToJSON;
var _service_api = require("./service_api");
var _coin = require("../cosmos/base/v1beta1/coin");
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var Spec_ProvidersTypes = /*#__PURE__*/function (Spec_ProvidersTypes) {
  Spec_ProvidersTypes[Spec_ProvidersTypes["dynamic"] = 0] = "dynamic";
  Spec_ProvidersTypes[Spec_ProvidersTypes["static"] = 1] = "static";
  Spec_ProvidersTypes[Spec_ProvidersTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Spec_ProvidersTypes;
}({});
exports.Spec_ProvidersTypes = Spec_ProvidersTypes;
var Spec_ProvidersTypesSDKType = Spec_ProvidersTypes;
exports.Spec_ProvidersTypesSDKType = Spec_ProvidersTypesSDKType;
function spec_ProvidersTypesFromJSON(object) {
  switch (object) {
    case 0:
    case "dynamic":
      return Spec_ProvidersTypes.dynamic;
    case 1:
    case "static":
      return Spec_ProvidersTypes["static"];
    case -1:
    case "UNRECOGNIZED":
    default:
      return Spec_ProvidersTypes.UNRECOGNIZED;
  }
}
function spec_ProvidersTypesToJSON(object) {
  switch (object) {
    case Spec_ProvidersTypes.dynamic:
      return "dynamic";
    case Spec_ProvidersTypes["static"]:
      return "static";
    case Spec_ProvidersTypes.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseSpec() {
  return {
    index: "",
    name: "",
    imports: [],
    apis: [],
    enabled: false,
    reliabilityThreshold: 0,
    dataReliabilityEnabled: false,
    blockDistanceForFinalizedData: 0,
    blocksInFinalizationProof: 0,
    averageBlockTime: _helpers.Long.ZERO,
    allowedBlockLagForQosSync: _helpers.Long.ZERO,
    blockLastUpdated: _helpers.Long.UZERO,
    minStakeProvider: undefined,
    minStakeClient: undefined,
    providersTypes: 0
  };
}
var Spec = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    var _iterator = _createForOfIteratorHelper(message.imports),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint32(122).string(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.apis),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _service_api.ServiceApi.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.reliabilityThreshold !== 0) {
      writer.uint32(40).uint32(message.reliabilityThreshold);
    }
    if (message.dataReliabilityEnabled === true) {
      writer.uint32(48).bool(message.dataReliabilityEnabled);
    }
    if (message.blockDistanceForFinalizedData !== 0) {
      writer.uint32(56).uint32(message.blockDistanceForFinalizedData);
    }
    if (message.blocksInFinalizationProof !== 0) {
      writer.uint32(64).uint32(message.blocksInFinalizationProof);
    }
    if (!message.averageBlockTime.isZero()) {
      writer.uint32(72).int64(message.averageBlockTime);
    }
    if (!message.allowedBlockLagForQosSync.isZero()) {
      writer.uint32(80).int64(message.allowedBlockLagForQosSync);
    }
    if (!message.blockLastUpdated.isZero()) {
      writer.uint32(88).uint64(message.blockLastUpdated);
    }
    if (message.minStakeProvider !== undefined) {
      _coin.Coin.encode(message.minStakeProvider, writer.uint32(98).fork()).ldelim();
    }
    if (message.minStakeClient !== undefined) {
      _coin.Coin.encode(message.minStakeClient, writer.uint32(106).fork()).ldelim();
    }
    if (message.providersTypes !== 0) {
      writer.uint32(112).int32(message.providersTypes);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSpec();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 15:
          message.imports.push(reader.string());
          break;
        case 3:
          message.apis.push(_service_api.ServiceApi.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.reliabilityThreshold = reader.uint32();
          break;
        case 6:
          message.dataReliabilityEnabled = reader.bool();
          break;
        case 7:
          message.blockDistanceForFinalizedData = reader.uint32();
          break;
        case 8:
          message.blocksInFinalizationProof = reader.uint32();
          break;
        case 9:
          message.averageBlockTime = reader.int64();
          break;
        case 10:
          message.allowedBlockLagForQosSync = reader.int64();
          break;
        case 11:
          message.blockLastUpdated = reader.uint64();
          break;
        case 12:
          message.minStakeProvider = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 13:
          message.minStakeClient = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 14:
          message.providersTypes = reader.int32();
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
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      imports: Array.isArray(object === null || object === void 0 ? void 0 : object.imports) ? object.imports.map(function (e) {
        return String(e);
      }) : [],
      apis: Array.isArray(object === null || object === void 0 ? void 0 : object.apis) ? object.apis.map(function (e) {
        return _service_api.ServiceApi.fromJSON(e);
      }) : [],
      enabled: (0, _helpers.isSet)(object.enabled) ? Boolean(object.enabled) : false,
      reliabilityThreshold: (0, _helpers.isSet)(object.reliabilityThreshold) ? Number(object.reliabilityThreshold) : 0,
      dataReliabilityEnabled: (0, _helpers.isSet)(object.dataReliabilityEnabled) ? Boolean(object.dataReliabilityEnabled) : false,
      blockDistanceForFinalizedData: (0, _helpers.isSet)(object.blockDistanceForFinalizedData) ? Number(object.blockDistanceForFinalizedData) : 0,
      blocksInFinalizationProof: (0, _helpers.isSet)(object.blocksInFinalizationProof) ? Number(object.blocksInFinalizationProof) : 0,
      averageBlockTime: (0, _helpers.isSet)(object.averageBlockTime) ? _helpers.Long.fromValue(object.averageBlockTime) : _helpers.Long.ZERO,
      allowedBlockLagForQosSync: (0, _helpers.isSet)(object.allowedBlockLagForQosSync) ? _helpers.Long.fromValue(object.allowedBlockLagForQosSync) : _helpers.Long.ZERO,
      blockLastUpdated: (0, _helpers.isSet)(object.blockLastUpdated) ? _helpers.Long.fromValue(object.blockLastUpdated) : _helpers.Long.UZERO,
      minStakeProvider: (0, _helpers.isSet)(object.minStakeProvider) ? _coin.Coin.fromJSON(object.minStakeProvider) : undefined,
      minStakeClient: (0, _helpers.isSet)(object.minStakeClient) ? _coin.Coin.fromJSON(object.minStakeClient) : undefined,
      providersTypes: (0, _helpers.isSet)(object.providersTypes) ? spec_ProvidersTypesFromJSON(object.providersTypes) : 0
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
    if (message.imports) {
      obj.imports = message.imports.map(function (e) {
        return e;
      });
    } else {
      obj.imports = [];
    }
    if (message.apis) {
      obj.apis = message.apis.map(function (e) {
        return e ? _service_api.ServiceApi.toJSON(e) : undefined;
      });
    } else {
      obj.apis = [];
    }
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.reliabilityThreshold !== undefined && (obj.reliabilityThreshold = Math.round(message.reliabilityThreshold));
    message.dataReliabilityEnabled !== undefined && (obj.dataReliabilityEnabled = message.dataReliabilityEnabled);
    message.blockDistanceForFinalizedData !== undefined && (obj.blockDistanceForFinalizedData = Math.round(message.blockDistanceForFinalizedData));
    message.blocksInFinalizationProof !== undefined && (obj.blocksInFinalizationProof = Math.round(message.blocksInFinalizationProof));
    message.averageBlockTime !== undefined && (obj.averageBlockTime = (message.averageBlockTime || _helpers.Long.ZERO).toString());
    message.allowedBlockLagForQosSync !== undefined && (obj.allowedBlockLagForQosSync = (message.allowedBlockLagForQosSync || _helpers.Long.ZERO).toString());
    message.blockLastUpdated !== undefined && (obj.blockLastUpdated = (message.blockLastUpdated || _helpers.Long.UZERO).toString());
    message.minStakeProvider !== undefined && (obj.minStakeProvider = message.minStakeProvider ? _coin.Coin.toJSON(message.minStakeProvider) : undefined);
    message.minStakeClient !== undefined && (obj.minStakeClient = message.minStakeClient ? _coin.Coin.toJSON(message.minStakeClient) : undefined);
    message.providersTypes !== undefined && (obj.providersTypes = spec_ProvidersTypesToJSON(message.providersTypes));
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$name, _object$imports, _object$apis, _object$enabled, _object$reliabilityTh, _object$dataReliabili, _object$blockDistance, _object$blocksInFinal, _object$providersType;
    var message = createBaseSpec();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.imports = ((_object$imports = object.imports) === null || _object$imports === void 0 ? void 0 : _object$imports.map(function (e) {
      return e;
    })) || [];
    message.apis = ((_object$apis = object.apis) === null || _object$apis === void 0 ? void 0 : _object$apis.map(function (e) {
      return _service_api.ServiceApi.fromPartial(e);
    })) || [];
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    message.reliabilityThreshold = (_object$reliabilityTh = object.reliabilityThreshold) !== null && _object$reliabilityTh !== void 0 ? _object$reliabilityTh : 0;
    message.dataReliabilityEnabled = (_object$dataReliabili = object.dataReliabilityEnabled) !== null && _object$dataReliabili !== void 0 ? _object$dataReliabili : false;
    message.blockDistanceForFinalizedData = (_object$blockDistance = object.blockDistanceForFinalizedData) !== null && _object$blockDistance !== void 0 ? _object$blockDistance : 0;
    message.blocksInFinalizationProof = (_object$blocksInFinal = object.blocksInFinalizationProof) !== null && _object$blocksInFinal !== void 0 ? _object$blocksInFinal : 0;
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? _helpers.Long.fromValue(object.averageBlockTime) : _helpers.Long.ZERO;
    message.allowedBlockLagForQosSync = object.allowedBlockLagForQosSync !== undefined && object.allowedBlockLagForQosSync !== null ? _helpers.Long.fromValue(object.allowedBlockLagForQosSync) : _helpers.Long.ZERO;
    message.blockLastUpdated = object.blockLastUpdated !== undefined && object.blockLastUpdated !== null ? _helpers.Long.fromValue(object.blockLastUpdated) : _helpers.Long.UZERO;
    message.minStakeProvider = object.minStakeProvider !== undefined && object.minStakeProvider !== null ? _coin.Coin.fromPartial(object.minStakeProvider) : undefined;
    message.minStakeClient = object.minStakeClient !== undefined && object.minStakeClient !== null ? _coin.Coin.fromPartial(object.minStakeClient) : undefined;
    message.providersTypes = (_object$providersType = object.providersTypes) !== null && _object$providersType !== void 0 ? _object$providersType : 0;
    return message;
  }
};
exports.Spec = Spec;