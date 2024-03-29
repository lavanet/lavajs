"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spec_ProvidersTypesSDKType = exports.Spec_ProvidersTypes = exports.Spec = void 0;
exports.spec_ProvidersTypesFromJSON = spec_ProvidersTypesFromJSON;
exports.spec_ProvidersTypesToJSON = spec_ProvidersTypesToJSON;
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _api_collection = require("./api_collection");
var _binary = require("../../../binary");
var _helpers = require("../../../helpers");
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
    enabled: false,
    reliabilityThreshold: 0,
    dataReliabilityEnabled: false,
    blockDistanceForFinalizedData: 0,
    blocksInFinalizationProof: 0,
    averageBlockTime: BigInt(0),
    allowedBlockLagForQosSync: BigInt(0),
    blockLastUpdated: BigInt(0),
    minStakeProvider: _coin.Coin.fromPartial({}),
    minStakeClient: _coin.Coin.fromPartial({}),
    providersTypes: 0,
    imports: [],
    apiCollections: []
  };
}
var Spec = {
  typeUrl: "/lavanet.lava.spec.Spec",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
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
    if (message.averageBlockTime !== BigInt(0)) {
      writer.uint32(72).int64(message.averageBlockTime);
    }
    if (message.allowedBlockLagForQosSync !== BigInt(0)) {
      writer.uint32(80).int64(message.allowedBlockLagForQosSync);
    }
    if (message.blockLastUpdated !== BigInt(0)) {
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
    var _iterator2 = _createForOfIteratorHelper(message.apiCollections),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _api_collection.ApiCollection.encode(_v, writer.uint32(130).fork()).ldelim();
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
        case 15:
          message.imports.push(reader.string());
          break;
        case 16:
          message.apiCollections.push(_api_collection.ApiCollection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$name, _object$enabled, _object$reliabilityTh, _object$dataReliabili, _object$blockDistance, _object$blocksInFinal, _object$providersType, _object$imports, _object$apiCollection;
    var message = createBaseSpec();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.enabled = (_object$enabled = object.enabled) !== null && _object$enabled !== void 0 ? _object$enabled : false;
    message.reliabilityThreshold = (_object$reliabilityTh = object.reliabilityThreshold) !== null && _object$reliabilityTh !== void 0 ? _object$reliabilityTh : 0;
    message.dataReliabilityEnabled = (_object$dataReliabili = object.dataReliabilityEnabled) !== null && _object$dataReliabili !== void 0 ? _object$dataReliabili : false;
    message.blockDistanceForFinalizedData = (_object$blockDistance = object.blockDistanceForFinalizedData) !== null && _object$blockDistance !== void 0 ? _object$blockDistance : 0;
    message.blocksInFinalizationProof = (_object$blocksInFinal = object.blocksInFinalizationProof) !== null && _object$blocksInFinal !== void 0 ? _object$blocksInFinal : 0;
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? BigInt(object.averageBlockTime.toString()) : BigInt(0);
    message.allowedBlockLagForQosSync = object.allowedBlockLagForQosSync !== undefined && object.allowedBlockLagForQosSync !== null ? BigInt(object.allowedBlockLagForQosSync.toString()) : BigInt(0);
    message.blockLastUpdated = object.blockLastUpdated !== undefined && object.blockLastUpdated !== null ? BigInt(object.blockLastUpdated.toString()) : BigInt(0);
    message.minStakeProvider = object.minStakeProvider !== undefined && object.minStakeProvider !== null ? _coin.Coin.fromPartial(object.minStakeProvider) : undefined;
    message.minStakeClient = object.minStakeClient !== undefined && object.minStakeClient !== null ? _coin.Coin.fromPartial(object.minStakeClient) : undefined;
    message.providersTypes = (_object$providersType = object.providersTypes) !== null && _object$providersType !== void 0 ? _object$providersType : 0;
    message.imports = ((_object$imports = object.imports) === null || _object$imports === void 0 ? void 0 : _object$imports.map(function (e) {
      return e;
    })) || [];
    message.apiCollections = ((_object$apiCollection = object.apiCollections) === null || _object$apiCollection === void 0 ? void 0 : _object$apiCollection.map(function (e) {
      return _api_collection.ApiCollection.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: object.index,
      name: object.name,
      enabled: object.enabled,
      reliabilityThreshold: object.reliability_threshold,
      dataReliabilityEnabled: object.data_reliability_enabled,
      blockDistanceForFinalizedData: object.block_distance_for_finalized_data,
      blocksInFinalizationProof: object.blocks_in_finalization_proof,
      averageBlockTime: BigInt(object.average_block_time),
      allowedBlockLagForQosSync: BigInt(object.allowed_block_lag_for_qos_sync),
      blockLastUpdated: BigInt(object.block_last_updated),
      minStakeProvider: object !== null && object !== void 0 && object.min_stake_provider ? _coin.Coin.fromAmino(object.min_stake_provider) : undefined,
      minStakeClient: object !== null && object !== void 0 && object.min_stake_client ? _coin.Coin.fromAmino(object.min_stake_client) : undefined,
      providersTypes: (0, _helpers.isSet)(object.providers_types) ? spec_ProvidersTypesFromJSON(object.providers_types) : -1,
      imports: Array.isArray(object === null || object === void 0 ? void 0 : object.imports) ? object.imports.map(function (e) {
        return e;
      }) : [],
      apiCollections: Array.isArray(object === null || object === void 0 ? void 0 : object.api_collections) ? object.api_collections.map(function (e) {
        return _api_collection.ApiCollection.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index;
    obj.name = message.name;
    obj.enabled = message.enabled;
    obj.reliability_threshold = message.reliabilityThreshold;
    obj.data_reliability_enabled = message.dataReliabilityEnabled;
    obj.block_distance_for_finalized_data = message.blockDistanceForFinalizedData;
    obj.blocks_in_finalization_proof = message.blocksInFinalizationProof;
    obj.average_block_time = message.averageBlockTime ? message.averageBlockTime.toString() : undefined;
    obj.allowed_block_lag_for_qos_sync = message.allowedBlockLagForQosSync ? message.allowedBlockLagForQosSync.toString() : undefined;
    obj.block_last_updated = message.blockLastUpdated ? message.blockLastUpdated.toString() : undefined;
    obj.min_stake_provider = message.minStakeProvider ? _coin.Coin.toAmino(message.minStakeProvider) : undefined;
    obj.min_stake_client = message.minStakeClient ? _coin.Coin.toAmino(message.minStakeClient) : undefined;
    obj.providers_types = message.providersTypes;
    if (message.imports) {
      obj.imports = message.imports.map(function (e) {
        return e;
      });
    } else {
      obj.imports = [];
    }
    if (message.apiCollections) {
      obj.api_collections = message.apiCollections.map(function (e) {
        return e ? _api_collection.ApiCollection.toAmino(e) : undefined;
      });
    } else {
      obj.api_collections = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Spec.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Spec.decode(message.value);
  },
  toProto: function toProto(message) {
    return Spec.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.Spec",
      value: Spec.encode(message).finish()
    };
  }
};
exports.Spec = Spec;