"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryVerifyPairingResponse = exports.QueryVerifyPairingRequest = exports.QueryUserEntryResponse = exports.QueryUserEntryRequest = exports.QueryStaticProvidersListResponse = exports.QueryStaticProvidersListRequest = exports.QuerySdkPairingResponse = exports.QueryProvidersResponse = exports.QueryProvidersRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryGetUniquePaymentStorageClientProviderResponse = exports.QueryGetUniquePaymentStorageClientProviderRequest = exports.QueryGetProviderPaymentStorageResponse = exports.QueryGetProviderPaymentStorageRequest = exports.QueryGetPairingResponse = exports.QueryGetPairingRequest = exports.QueryGetEpochPaymentsResponse = exports.QueryGetEpochPaymentsRequest = exports.QueryEffectivePolicyResponse = exports.QueryEffectivePolicyRequest = exports.QueryAllUniquePaymentStorageClientProviderResponse = exports.QueryAllUniquePaymentStorageClientProviderRequest = exports.QueryAllProviderPaymentStorageResponse = exports.QueryAllProviderPaymentStorageRequest = exports.QueryAllEpochPaymentsResponse = exports.QueryAllEpochPaymentsRequest = exports.QueryAccountInfoResponse = void 0;
var _pagination = require("../../../cosmos/base/query/v1beta1/pagination");
var _params = require("./params");
var _stake_entry = require("../epochstorage/stake_entry");
var _unique_payment_storage_client_provider = require("./unique_payment_storage_client_provider");
var _provider_payment_storage = require("./provider_payment_storage");
var _epoch_payments = require("./epoch_payments");
var _subscription = require("../subscription/subscription");
var _project = require("../projects/project");
var _policy = require("../plans/policy");
var _spec = require("../spec/spec");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
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
    var message = createBaseQueryParamsRequest();
    return message;
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
var QueryParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _params.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryProvidersRequest() {
  return {
    chainID: "",
    showFrozen: false
  };
}
var QueryProvidersRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.showFrozen === true) {
      writer.uint32(16).bool(message.showFrozen);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryProvidersRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.showFrozen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainID, _object$showFrozen;
    var message = createBaseQueryProvidersRequest();
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.showFrozen = (_object$showFrozen = object.showFrozen) !== null && _object$showFrozen !== void 0 ? _object$showFrozen : false;
    return message;
  }
};
exports.QueryProvidersRequest = QueryProvidersRequest;
function createBaseQueryProvidersResponse() {
  return {
    stakeEntry: [],
    output: ""
  };
}
var QueryProvidersResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.stakeEntry),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _stake_entry.StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.output !== "") {
      writer.uint32(18).string(message.output);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryProvidersResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeEntry.push(_stake_entry.StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$stakeEntry, _object$output;
    var message = createBaseQueryProvidersResponse();
    message.stakeEntry = ((_object$stakeEntry = object.stakeEntry) === null || _object$stakeEntry === void 0 ? void 0 : _object$stakeEntry.map(function (e) {
      return _stake_entry.StakeEntry.fromPartial(e);
    })) || [];
    message.output = (_object$output = object.output) !== null && _object$output !== void 0 ? _object$output : "";
    return message;
  }
};
exports.QueryProvidersResponse = QueryProvidersResponse;
function createBaseQueryGetPairingRequest() {
  return {
    chainID: "",
    client: ""
  };
}
var QueryGetPairingRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.client !== "") {
      writer.uint32(18).string(message.client);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetPairingRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.client = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainID2, _object$client;
    var message = createBaseQueryGetPairingRequest();
    message.chainID = (_object$chainID2 = object.chainID) !== null && _object$chainID2 !== void 0 ? _object$chainID2 : "";
    message.client = (_object$client = object.client) !== null && _object$client !== void 0 ? _object$client : "";
    return message;
  }
};
exports.QueryGetPairingRequest = QueryGetPairingRequest;
function createBaseQueryGetPairingResponse() {
  return {
    providers: [],
    currentEpoch: _helpers.Long.UZERO,
    timeLeftToNextPairing: _helpers.Long.UZERO,
    specLastUpdatedBlock: _helpers.Long.UZERO,
    blockOfNextPairing: _helpers.Long.UZERO
  };
}
var QueryGetPairingResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.providers),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _stake_entry.StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (!message.currentEpoch.isZero()) {
      writer.uint32(16).uint64(message.currentEpoch);
    }
    if (!message.timeLeftToNextPairing.isZero()) {
      writer.uint32(24).uint64(message.timeLeftToNextPairing);
    }
    if (!message.specLastUpdatedBlock.isZero()) {
      writer.uint32(32).uint64(message.specLastUpdatedBlock);
    }
    if (!message.blockOfNextPairing.isZero()) {
      writer.uint32(40).uint64(message.blockOfNextPairing);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetPairingResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(_stake_entry.StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentEpoch = reader.uint64();
          break;
        case 3:
          message.timeLeftToNextPairing = reader.uint64();
          break;
        case 4:
          message.specLastUpdatedBlock = reader.uint64();
          break;
        case 5:
          message.blockOfNextPairing = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$providers;
    var message = createBaseQueryGetPairingResponse();
    message.providers = ((_object$providers = object.providers) === null || _object$providers === void 0 ? void 0 : _object$providers.map(function (e) {
      return _stake_entry.StakeEntry.fromPartial(e);
    })) || [];
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? _helpers.Long.fromValue(object.currentEpoch) : _helpers.Long.UZERO;
    message.timeLeftToNextPairing = object.timeLeftToNextPairing !== undefined && object.timeLeftToNextPairing !== null ? _helpers.Long.fromValue(object.timeLeftToNextPairing) : _helpers.Long.UZERO;
    message.specLastUpdatedBlock = object.specLastUpdatedBlock !== undefined && object.specLastUpdatedBlock !== null ? _helpers.Long.fromValue(object.specLastUpdatedBlock) : _helpers.Long.UZERO;
    message.blockOfNextPairing = object.blockOfNextPairing !== undefined && object.blockOfNextPairing !== null ? _helpers.Long.fromValue(object.blockOfNextPairing) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryGetPairingResponse = QueryGetPairingResponse;
function createBaseQueryVerifyPairingRequest() {
  return {
    chainID: "",
    client: "",
    provider: "",
    block: _helpers.Long.UZERO
  };
}
var QueryVerifyPairingRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.client !== "") {
      writer.uint32(18).string(message.client);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (!message.block.isZero()) {
      writer.uint32(32).uint64(message.block);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryVerifyPairingRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.client = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.block = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainID3, _object$client2, _object$provider;
    var message = createBaseQueryVerifyPairingRequest();
    message.chainID = (_object$chainID3 = object.chainID) !== null && _object$chainID3 !== void 0 ? _object$chainID3 : "";
    message.client = (_object$client2 = object.client) !== null && _object$client2 !== void 0 ? _object$client2 : "";
    message.provider = (_object$provider = object.provider) !== null && _object$provider !== void 0 ? _object$provider : "";
    message.block = object.block !== undefined && object.block !== null ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryVerifyPairingRequest = QueryVerifyPairingRequest;
function createBaseQueryVerifyPairingResponse() {
  return {
    valid: false,
    pairedProviders: _helpers.Long.UZERO,
    cuPerEpoch: _helpers.Long.UZERO,
    projectId: ""
  };
}
var QueryVerifyPairingResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    if (!message.pairedProviders.isZero()) {
      writer.uint32(24).uint64(message.pairedProviders);
    }
    if (!message.cuPerEpoch.isZero()) {
      writer.uint32(32).uint64(message.cuPerEpoch);
    }
    if (message.projectId !== "") {
      writer.uint32(42).string(message.projectId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryVerifyPairingResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        case 3:
          message.pairedProviders = reader.uint64();
          break;
        case 4:
          message.cuPerEpoch = reader.uint64();
          break;
        case 5:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$valid, _object$projectId;
    var message = createBaseQueryVerifyPairingResponse();
    message.valid = (_object$valid = object.valid) !== null && _object$valid !== void 0 ? _object$valid : false;
    message.pairedProviders = object.pairedProviders !== undefined && object.pairedProviders !== null ? _helpers.Long.fromValue(object.pairedProviders) : _helpers.Long.UZERO;
    message.cuPerEpoch = object.cuPerEpoch !== undefined && object.cuPerEpoch !== null ? _helpers.Long.fromValue(object.cuPerEpoch) : _helpers.Long.UZERO;
    message.projectId = (_object$projectId = object.projectId) !== null && _object$projectId !== void 0 ? _object$projectId : "";
    return message;
  }
};
exports.QueryVerifyPairingResponse = QueryVerifyPairingResponse;
function createBaseQueryGetUniquePaymentStorageClientProviderRequest() {
  return {
    index: ""
  };
}
var QueryGetUniquePaymentStorageClientProviderRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetUniquePaymentStorageClientProviderRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index;
    var message = createBaseQueryGetUniquePaymentStorageClientProviderRequest();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    return message;
  }
};
exports.QueryGetUniquePaymentStorageClientProviderRequest = QueryGetUniquePaymentStorageClientProviderRequest;
function createBaseQueryGetUniquePaymentStorageClientProviderResponse() {
  return {
    uniquePaymentStorageClientProvider: undefined
  };
}
var QueryGetUniquePaymentStorageClientProviderResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.uniquePaymentStorageClientProvider !== undefined) {
      _unique_payment_storage_client_provider.UniquePaymentStorageClientProvider.encode(message.uniquePaymentStorageClientProvider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetUniquePaymentStorageClientProviderResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uniquePaymentStorageClientProvider = _unique_payment_storage_client_provider.UniquePaymentStorageClientProvider.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetUniquePaymentStorageClientProviderResponse();
    message.uniquePaymentStorageClientProvider = object.uniquePaymentStorageClientProvider !== undefined && object.uniquePaymentStorageClientProvider !== null ? _unique_payment_storage_client_provider.UniquePaymentStorageClientProvider.fromPartial(object.uniquePaymentStorageClientProvider) : undefined;
    return message;
  }
};
exports.QueryGetUniquePaymentStorageClientProviderResponse = QueryGetUniquePaymentStorageClientProviderResponse;
function createBaseQueryAllUniquePaymentStorageClientProviderRequest() {
  return {
    pagination: undefined
  };
}
var QueryAllUniquePaymentStorageClientProviderRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllUniquePaymentStorageClientProviderRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAllUniquePaymentStorageClientProviderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllUniquePaymentStorageClientProviderRequest = QueryAllUniquePaymentStorageClientProviderRequest;
function createBaseQueryAllUniquePaymentStorageClientProviderResponse() {
  return {
    uniquePaymentStorageClientProvider: [],
    pagination: undefined
  };
}
var QueryAllUniquePaymentStorageClientProviderResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.uniquePaymentStorageClientProvider),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _unique_payment_storage_client_provider.UniquePaymentStorageClientProvider.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllUniquePaymentStorageClientProviderResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uniquePaymentStorageClientProvider.push(_unique_payment_storage_client_provider.UniquePaymentStorageClientProvider.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$uniquePayment;
    var message = createBaseQueryAllUniquePaymentStorageClientProviderResponse();
    message.uniquePaymentStorageClientProvider = ((_object$uniquePayment = object.uniquePaymentStorageClientProvider) === null || _object$uniquePayment === void 0 ? void 0 : _object$uniquePayment.map(function (e) {
      return _unique_payment_storage_client_provider.UniquePaymentStorageClientProvider.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllUniquePaymentStorageClientProviderResponse = QueryAllUniquePaymentStorageClientProviderResponse;
function createBaseQueryGetProviderPaymentStorageRequest() {
  return {
    index: ""
  };
}
var QueryGetProviderPaymentStorageRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProviderPaymentStorageRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index2;
    var message = createBaseQueryGetProviderPaymentStorageRequest();
    message.index = (_object$index2 = object.index) !== null && _object$index2 !== void 0 ? _object$index2 : "";
    return message;
  }
};
exports.QueryGetProviderPaymentStorageRequest = QueryGetProviderPaymentStorageRequest;
function createBaseQueryGetProviderPaymentStorageResponse() {
  return {
    providerPaymentStorage: undefined
  };
}
var QueryGetProviderPaymentStorageResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.providerPaymentStorage !== undefined) {
      _provider_payment_storage.ProviderPaymentStorage.encode(message.providerPaymentStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetProviderPaymentStorageResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerPaymentStorage = _provider_payment_storage.ProviderPaymentStorage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetProviderPaymentStorageResponse();
    message.providerPaymentStorage = object.providerPaymentStorage !== undefined && object.providerPaymentStorage !== null ? _provider_payment_storage.ProviderPaymentStorage.fromPartial(object.providerPaymentStorage) : undefined;
    return message;
  }
};
exports.QueryGetProviderPaymentStorageResponse = QueryGetProviderPaymentStorageResponse;
function createBaseQueryAllProviderPaymentStorageRequest() {
  return {
    pagination: undefined
  };
}
var QueryAllProviderPaymentStorageRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllProviderPaymentStorageRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAllProviderPaymentStorageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllProviderPaymentStorageRequest = QueryAllProviderPaymentStorageRequest;
function createBaseQueryAllProviderPaymentStorageResponse() {
  return {
    providerPaymentStorage: [],
    pagination: undefined
  };
}
var QueryAllProviderPaymentStorageResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator4 = _createForOfIteratorHelper(message.providerPaymentStorage),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _provider_payment_storage.ProviderPaymentStorage.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllProviderPaymentStorageResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerPaymentStorage.push(_provider_payment_storage.ProviderPaymentStorage.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$providerPayme;
    var message = createBaseQueryAllProviderPaymentStorageResponse();
    message.providerPaymentStorage = ((_object$providerPayme = object.providerPaymentStorage) === null || _object$providerPayme === void 0 ? void 0 : _object$providerPayme.map(function (e) {
      return _provider_payment_storage.ProviderPaymentStorage.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllProviderPaymentStorageResponse = QueryAllProviderPaymentStorageResponse;
function createBaseQueryGetEpochPaymentsRequest() {
  return {
    index: ""
  };
}
var QueryGetEpochPaymentsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetEpochPaymentsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index3;
    var message = createBaseQueryGetEpochPaymentsRequest();
    message.index = (_object$index3 = object.index) !== null && _object$index3 !== void 0 ? _object$index3 : "";
    return message;
  }
};
exports.QueryGetEpochPaymentsRequest = QueryGetEpochPaymentsRequest;
function createBaseQueryGetEpochPaymentsResponse() {
  return {
    epochPayments: undefined
  };
}
var QueryGetEpochPaymentsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.epochPayments !== undefined) {
      _epoch_payments.EpochPayments.encode(message.epochPayments, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryGetEpochPaymentsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochPayments = _epoch_payments.EpochPayments.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryGetEpochPaymentsResponse();
    message.epochPayments = object.epochPayments !== undefined && object.epochPayments !== null ? _epoch_payments.EpochPayments.fromPartial(object.epochPayments) : undefined;
    return message;
  }
};
exports.QueryGetEpochPaymentsResponse = QueryGetEpochPaymentsResponse;
function createBaseQueryAllEpochPaymentsRequest() {
  return {
    pagination: undefined
  };
}
var QueryAllEpochPaymentsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllEpochPaymentsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryAllEpochPaymentsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllEpochPaymentsRequest = QueryAllEpochPaymentsRequest;
function createBaseQueryAllEpochPaymentsResponse() {
  return {
    epochPayments: [],
    pagination: undefined
  };
}
var QueryAllEpochPaymentsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.epochPayments),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _epoch_payments.EpochPayments.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAllEpochPaymentsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochPayments.push(_epoch_payments.EpochPayments.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$epochPayments;
    var message = createBaseQueryAllEpochPaymentsResponse();
    message.epochPayments = ((_object$epochPayments = object.epochPayments) === null || _object$epochPayments === void 0 ? void 0 : _object$epochPayments.map(function (e) {
      return _epoch_payments.EpochPayments.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryAllEpochPaymentsResponse = QueryAllEpochPaymentsResponse;
function createBaseQueryUserEntryRequest() {
  return {
    address: "",
    chainID: "",
    block: _helpers.Long.UZERO
  };
}
var QueryUserEntryRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (!message.block.isZero()) {
      writer.uint32(24).uint64(message.block);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUserEntryRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.block = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$chainID4;
    var message = createBaseQueryUserEntryRequest();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.chainID = (_object$chainID4 = object.chainID) !== null && _object$chainID4 !== void 0 ? _object$chainID4 : "";
    message.block = object.block !== undefined && object.block !== null ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryUserEntryRequest = QueryUserEntryRequest;
function createBaseQueryUserEntryResponse() {
  return {
    consumer: undefined,
    maxCU: _helpers.Long.UZERO
  };
}
var QueryUserEntryResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.consumer !== undefined) {
      _stake_entry.StakeEntry.encode(message.consumer, writer.uint32(10).fork()).ldelim();
    }
    if (!message.maxCU.isZero()) {
      writer.uint32(16).uint64(message.maxCU);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryUserEntryResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = _stake_entry.StakeEntry.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxCU = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryUserEntryResponse();
    message.consumer = object.consumer !== undefined && object.consumer !== null ? _stake_entry.StakeEntry.fromPartial(object.consumer) : undefined;
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? _helpers.Long.fromValue(object.maxCU) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryUserEntryResponse = QueryUserEntryResponse;
function createBaseQueryStaticProvidersListRequest() {
  return {
    chainID: ""
  };
}
var QueryStaticProvidersListRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryStaticProvidersListRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainID5;
    var message = createBaseQueryStaticProvidersListRequest();
    message.chainID = (_object$chainID5 = object.chainID) !== null && _object$chainID5 !== void 0 ? _object$chainID5 : "";
    return message;
  }
};
exports.QueryStaticProvidersListRequest = QueryStaticProvidersListRequest;
function createBaseQueryStaticProvidersListResponse() {
  return {
    providers: []
  };
}
var QueryStaticProvidersListResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.providers),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _stake_entry.StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryStaticProvidersListResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(_stake_entry.StakeEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$providers2;
    var message = createBaseQueryStaticProvidersListResponse();
    message.providers = ((_object$providers2 = object.providers) === null || _object$providers2 === void 0 ? void 0 : _object$providers2.map(function (e) {
      return _stake_entry.StakeEntry.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryStaticProvidersListResponse = QueryStaticProvidersListResponse;
function createBaseQueryAccountInfoResponse() {
  return {
    provider: [],
    frozen: [],
    consumer: [],
    unstaked: [],
    subscription: undefined,
    project: undefined
  };
}
var QueryAccountInfoResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator7 = _createForOfIteratorHelper(message.provider),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var v = _step7.value;
        _stake_entry.StakeEntry.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    var _iterator8 = _createForOfIteratorHelper(message.frozen),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _v = _step8.value;
        _stake_entry.StakeEntry.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    var _iterator9 = _createForOfIteratorHelper(message.consumer),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var _v2 = _step9.value;
        _stake_entry.StakeEntry.encode(_v2, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    var _iterator10 = _createForOfIteratorHelper(message.unstaked),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _v3 = _step10.value;
        _stake_entry.StakeEntry.encode(_v3, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    if (message.subscription !== undefined) {
      _subscription.Subscription.encode(message.subscription, writer.uint32(42).fork()).ldelim();
    }
    if (message.project !== undefined) {
      _project.Project.encode(message.project, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryAccountInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider.push(_stake_entry.StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.frozen.push(_stake_entry.StakeEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.consumer.push(_stake_entry.StakeEntry.decode(reader, reader.uint32()));
          break;
        case 4:
          message.unstaked.push(_stake_entry.StakeEntry.decode(reader, reader.uint32()));
          break;
        case 5:
          message.subscription = _subscription.Subscription.decode(reader, reader.uint32());
          break;
        case 6:
          message.project = _project.Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$provider2, _object$frozen, _object$consumer, _object$unstaked;
    var message = createBaseQueryAccountInfoResponse();
    message.provider = ((_object$provider2 = object.provider) === null || _object$provider2 === void 0 ? void 0 : _object$provider2.map(function (e) {
      return _stake_entry.StakeEntry.fromPartial(e);
    })) || [];
    message.frozen = ((_object$frozen = object.frozen) === null || _object$frozen === void 0 ? void 0 : _object$frozen.map(function (e) {
      return _stake_entry.StakeEntry.fromPartial(e);
    })) || [];
    message.consumer = ((_object$consumer = object.consumer) === null || _object$consumer === void 0 ? void 0 : _object$consumer.map(function (e) {
      return _stake_entry.StakeEntry.fromPartial(e);
    })) || [];
    message.unstaked = ((_object$unstaked = object.unstaked) === null || _object$unstaked === void 0 ? void 0 : _object$unstaked.map(function (e) {
      return _stake_entry.StakeEntry.fromPartial(e);
    })) || [];
    message.subscription = object.subscription !== undefined && object.subscription !== null ? _subscription.Subscription.fromPartial(object.subscription) : undefined;
    message.project = object.project !== undefined && object.project !== null ? _project.Project.fromPartial(object.project) : undefined;
    return message;
  }
};
exports.QueryAccountInfoResponse = QueryAccountInfoResponse;
function createBaseQueryEffectivePolicyRequest() {
  return {
    consumer: "",
    specID: ""
  };
}
var QueryEffectivePolicyRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    if (message.specID !== "") {
      writer.uint32(18).string(message.specID);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryEffectivePolicyRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        case 2:
          message.specID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$consumer2, _object$specID;
    var message = createBaseQueryEffectivePolicyRequest();
    message.consumer = (_object$consumer2 = object.consumer) !== null && _object$consumer2 !== void 0 ? _object$consumer2 : "";
    message.specID = (_object$specID = object.specID) !== null && _object$specID !== void 0 ? _object$specID : "";
    return message;
  }
};
exports.QueryEffectivePolicyRequest = QueryEffectivePolicyRequest;
function createBaseQueryEffectivePolicyResponse() {
  return {
    policy: undefined
  };
}
var QueryEffectivePolicyResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.policy !== undefined) {
      _policy.Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryEffectivePolicyResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var message = createBaseQueryEffectivePolicyResponse();
    message.policy = object.policy !== undefined && object.policy !== null ? _policy.Policy.fromPartial(object.policy) : undefined;
    return message;
  }
};
exports.QueryEffectivePolicyResponse = QueryEffectivePolicyResponse;
function createBaseQuerySdkPairingResponse() {
  return {
    pairing: undefined,
    maxCu: _helpers.Long.UZERO,
    spec: undefined
  };
}
var QuerySdkPairingResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pairing !== undefined) {
      QueryGetPairingResponse.encode(message.pairing, writer.uint32(10).fork()).ldelim();
    }
    if (!message.maxCu.isZero()) {
      writer.uint32(16).uint64(message.maxCu);
    }
    if (message.spec !== undefined) {
      _spec.Spec.encode(message.spec, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQuerySdkPairingResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairing = QueryGetPairingResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxCu = reader.uint64();
          break;
        case 3:
          message.spec = _spec.Spec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQuerySdkPairingResponse();
    message.pairing = object.pairing !== undefined && object.pairing !== null ? QueryGetPairingResponse.fromPartial(object.pairing) : undefined;
    message.maxCu = object.maxCu !== undefined && object.maxCu !== null ? _helpers.Long.fromValue(object.maxCu) : _helpers.Long.UZERO;
    message.spec = object.spec !== undefined && object.spec !== null ? _spec.Spec.fromPartial(object.spec) : undefined;
    return message;
  }
};
exports.QuerySdkPairingResponse = QuerySdkPairingResponse;