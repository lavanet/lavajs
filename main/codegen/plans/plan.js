"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SELECTED_PROVIDERS_MODESDKType = exports.SELECTED_PROVIDERS_MODE = exports.Policy = exports.Plan = exports.GeolocationSDKType = exports.Geolocation = exports.ChainPolicy = void 0;
exports.geolocationFromJSON = geolocationFromJSON;
exports.geolocationToJSON = geolocationToJSON;
exports.sELECTED_PROVIDERS_MODEFromJSON = sELECTED_PROVIDERS_MODEFromJSON;
exports.sELECTED_PROVIDERS_MODEToJSON = sELECTED_PROVIDERS_MODEToJSON;
var _coin = require("../cosmos/base/v1beta1/coin");
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
/**
 * The geolocation values are encoded as bits in a bitmask, with two special values:
 * GLS is set to 0 so it will be restrictive with the AND operator.
 * GL is set to -1 so it will be permissive with the AND operator.
 */
var Geolocation = /*#__PURE__*/function (Geolocation) {
  Geolocation[Geolocation["GLS"] = 0] = "GLS";
  Geolocation[Geolocation["USC"] = 1] = "USC";
  Geolocation[Geolocation["EU"] = 2] = "EU";
  Geolocation[Geolocation["USE"] = 4] = "USE";
  Geolocation[Geolocation["USW"] = 8] = "USW";
  Geolocation[Geolocation["AF"] = 16] = "AF";
  Geolocation[Geolocation["AS"] = 32] = "AS";
  Geolocation[Geolocation["AU"] = 64] = "AU";
  Geolocation[Geolocation["GL"] = 65535] = "GL";
  Geolocation[Geolocation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Geolocation;
}({});
exports.Geolocation = Geolocation;
var GeolocationSDKType = Geolocation;
exports.GeolocationSDKType = GeolocationSDKType;
function geolocationFromJSON(object) {
  switch (object) {
    case 0:
    case "GLS":
      return Geolocation.GLS;
    case 1:
    case "USC":
      return Geolocation.USC;
    case 2:
    case "EU":
      return Geolocation.EU;
    case 4:
    case "USE":
      return Geolocation.USE;
    case 8:
    case "USW":
      return Geolocation.USW;
    case 16:
    case "AF":
      return Geolocation.AF;
    case 32:
    case "AS":
      return Geolocation.AS;
    case 64:
    case "AU":
      return Geolocation.AU;
    case 65535:
    case "GL":
      return Geolocation.GL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Geolocation.UNRECOGNIZED;
  }
}
function geolocationToJSON(object) {
  switch (object) {
    case Geolocation.GLS:
      return "GLS";
    case Geolocation.USC:
      return "USC";
    case Geolocation.EU:
      return "EU";
    case Geolocation.USE:
      return "USE";
    case Geolocation.USW:
      return "USW";
    case Geolocation.AF:
      return "AF";
    case Geolocation.AS:
      return "AS";
    case Geolocation.AU:
      return "AU";
    case Geolocation.GL:
      return "GL";
    case Geolocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** protobuf expected in YAML format: used "moretags" to simplify parsing */

/** protobuf expected in YAML format: used "moretags" to simplify parsing */

function createBasePlan() {
  return {
    index: "",
    block: _helpers.Long.UZERO,
    price: undefined,
    allowOveruse: false,
    overuseRate: _helpers.Long.UZERO,
    description: "",
    type: "",
    annualDiscountPercentage: _helpers.Long.UZERO,
    planPolicy: undefined
  };
}
var Plan = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (!message.block.isZero()) {
      writer.uint32(24).uint64(message.block);
    }
    if (message.price !== undefined) {
      _coin.Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.allowOveruse === true) {
      writer.uint32(64).bool(message.allowOveruse);
    }
    if (!message.overuseRate.isZero()) {
      writer.uint32(72).uint64(message.overuseRate);
    }
    if (message.description !== "") {
      writer.uint32(90).string(message.description);
    }
    if (message.type !== "") {
      writer.uint32(98).string(message.type);
    }
    if (!message.annualDiscountPercentage.isZero()) {
      writer.uint32(104).uint64(message.annualDiscountPercentage);
    }
    if (message.planPolicy !== undefined) {
      Policy.encode(message.planPolicy, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePlan();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.block = reader.uint64();
          break;
        case 4:
          message.price = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.allowOveruse = reader.bool();
          break;
        case 9:
          message.overuseRate = reader.uint64();
          break;
        case 11:
          message.description = reader.string();
          break;
        case 12:
          message.type = reader.string();
          break;
        case 13:
          message.annualDiscountPercentage = reader.uint64();
          break;
        case 14:
          message.planPolicy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$allowOveruse, _object$description, _object$type;
    var message = createBasePlan();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.block = object.block !== undefined && object.block !== null ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO;
    message.price = object.price !== undefined && object.price !== null ? _coin.Coin.fromPartial(object.price) : undefined;
    message.allowOveruse = (_object$allowOveruse = object.allowOveruse) !== null && _object$allowOveruse !== void 0 ? _object$allowOveruse : false;
    message.overuseRate = object.overuseRate !== undefined && object.overuseRate !== null ? _helpers.Long.fromValue(object.overuseRate) : _helpers.Long.UZERO;
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.annualDiscountPercentage = object.annualDiscountPercentage !== undefined && object.annualDiscountPercentage !== null ? _helpers.Long.fromValue(object.annualDiscountPercentage) : _helpers.Long.UZERO;
    message.planPolicy = object.planPolicy !== undefined && object.planPolicy !== null ? Policy.fromPartial(object.planPolicy) : undefined;
    return message;
  }
};
exports.Plan = Plan;
function createBasePolicy() {
  return {
    chainPolicies: [],
    geolocationProfile: _helpers.Long.UZERO,
    totalCuLimit: _helpers.Long.UZERO,
    epochCuLimit: _helpers.Long.UZERO,
    maxProvidersToPair: _helpers.Long.UZERO,
    selectedProvidersMode: 0,
    selectedProviders: []
  };
}
var Policy = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    message.geolocationProfile = object.geolocationProfile !== undefined && object.geolocationProfile !== null ? _helpers.Long.fromValue(object.geolocationProfile) : _helpers.Long.UZERO;
    message.totalCuLimit = object.totalCuLimit !== undefined && object.totalCuLimit !== null ? _helpers.Long.fromValue(object.totalCuLimit) : _helpers.Long.UZERO;
    message.epochCuLimit = object.epochCuLimit !== undefined && object.epochCuLimit !== null ? _helpers.Long.fromValue(object.epochCuLimit) : _helpers.Long.UZERO;
    message.maxProvidersToPair = object.maxProvidersToPair !== undefined && object.maxProvidersToPair !== null ? _helpers.Long.fromValue(object.maxProvidersToPair) : _helpers.Long.UZERO;
    message.selectedProvidersMode = (_object$selectedProvi = object.selectedProvidersMode) !== null && _object$selectedProvi !== void 0 ? _object$selectedProvi : 0;
    message.selectedProviders = ((_object$selectedProvi2 = object.selectedProviders) === null || _object$selectedProvi2 === void 0 ? void 0 : _object$selectedProvi2.map(function (e) {
      return e;
    })) || [];
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