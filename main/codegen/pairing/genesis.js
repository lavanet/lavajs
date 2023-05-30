"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = exports.BadgeUsedCu = void 0;
var _params = require("./params");
var _unique_payment_storage_client_provider = require("./unique_payment_storage_client_provider");
var _provider_payment_storage = require("./provider_payment_storage");
var _epoch_payments = require("./epoch_payments");
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the pairing module's genesis state. */

/** GenesisState defines the pairing module's genesis state. */

function createBaseBadgeUsedCu() {
  return {
    badgeUsedCuKey: new Uint8Array(),
    usedCu: _helpers.Long.UZERO
  };
}
var BadgeUsedCu = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.badgeUsedCuKey.length !== 0) {
      writer.uint32(10).bytes(message.badgeUsedCuKey);
    }
    if (!message.usedCu.isZero()) {
      writer.uint32(16).uint64(message.usedCu);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBadgeUsedCu();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badgeUsedCuKey = reader.bytes();
          break;
        case 2:
          message.usedCu = reader.uint64();
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
      badgeUsedCuKey: (0, _helpers.isSet)(object.badgeUsedCuKey) ? (0, _helpers.bytesFromBase64)(object.badgeUsedCuKey) : new Uint8Array(),
      usedCu: (0, _helpers.isSet)(object.usedCu) ? _helpers.Long.fromValue(object.usedCu) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.badgeUsedCuKey !== undefined && (obj.badgeUsedCuKey = (0, _helpers.base64FromBytes)(message.badgeUsedCuKey !== undefined ? message.badgeUsedCuKey : new Uint8Array()));
    message.usedCu !== undefined && (obj.usedCu = (message.usedCu || _helpers.Long.UZERO).toString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$badgeUsedCuKe;
    var message = createBaseBadgeUsedCu();
    message.badgeUsedCuKey = (_object$badgeUsedCuKe = object.badgeUsedCuKey) !== null && _object$badgeUsedCuKe !== void 0 ? _object$badgeUsedCuKe : new Uint8Array();
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? _helpers.Long.fromValue(object.usedCu) : _helpers.Long.UZERO;
    return message;
  }
};
exports.BadgeUsedCu = BadgeUsedCu;
function createBaseGenesisState() {
  return {
    params: undefined,
    uniquePaymentStorageClientProviderList: [],
    providerPaymentStorageList: [],
    epochPaymentsList: [],
    badgeUsedCuList: []
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.uniquePaymentStorageClientProviderList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _unique_payment_storage_client_provider.UniquePaymentStorageClientProvider.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.providerPaymentStorageList),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _provider_payment_storage.ProviderPaymentStorage.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.epochPaymentsList),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _epoch_payments.EpochPayments.encode(_v2, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var _iterator4 = _createForOfIteratorHelper(message.badgeUsedCuList),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        BadgeUsedCu.encode(_v3, writer.uint32(42).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _params.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.uniquePaymentStorageClientProviderList.push(_unique_payment_storage_client_provider.UniquePaymentStorageClientProvider.decode(reader, reader.uint32()));
          break;
        case 3:
          message.providerPaymentStorageList.push(_provider_payment_storage.ProviderPaymentStorage.decode(reader, reader.uint32()));
          break;
        case 4:
          message.epochPaymentsList.push(_epoch_payments.EpochPayments.decode(reader, reader.uint32()));
          break;
        case 5:
          message.badgeUsedCuList.push(BadgeUsedCu.decode(reader, reader.uint32()));
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
      params: (0, _helpers.isSet)(object.params) ? _params.Params.fromJSON(object.params) : undefined,
      uniquePaymentStorageClientProviderList: Array.isArray(object === null || object === void 0 ? void 0 : object.uniquePaymentStorageClientProviderList) ? object.uniquePaymentStorageClientProviderList.map(function (e) {
        return _unique_payment_storage_client_provider.UniquePaymentStorageClientProvider.fromJSON(e);
      }) : [],
      providerPaymentStorageList: Array.isArray(object === null || object === void 0 ? void 0 : object.providerPaymentStorageList) ? object.providerPaymentStorageList.map(function (e) {
        return _provider_payment_storage.ProviderPaymentStorage.fromJSON(e);
      }) : [],
      epochPaymentsList: Array.isArray(object === null || object === void 0 ? void 0 : object.epochPaymentsList) ? object.epochPaymentsList.map(function (e) {
        return _epoch_payments.EpochPayments.fromJSON(e);
      }) : [],
      badgeUsedCuList: Array.isArray(object === null || object === void 0 ? void 0 : object.badgeUsedCuList) ? object.badgeUsedCuList.map(function (e) {
        return BadgeUsedCu.fromJSON(e);
      }) : []
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.params !== undefined && (obj.params = message.params ? _params.Params.toJSON(message.params) : undefined);
    if (message.uniquePaymentStorageClientProviderList) {
      obj.uniquePaymentStorageClientProviderList = message.uniquePaymentStorageClientProviderList.map(function (e) {
        return e ? _unique_payment_storage_client_provider.UniquePaymentStorageClientProvider.toJSON(e) : undefined;
      });
    } else {
      obj.uniquePaymentStorageClientProviderList = [];
    }
    if (message.providerPaymentStorageList) {
      obj.providerPaymentStorageList = message.providerPaymentStorageList.map(function (e) {
        return e ? _provider_payment_storage.ProviderPaymentStorage.toJSON(e) : undefined;
      });
    } else {
      obj.providerPaymentStorageList = [];
    }
    if (message.epochPaymentsList) {
      obj.epochPaymentsList = message.epochPaymentsList.map(function (e) {
        return e ? _epoch_payments.EpochPayments.toJSON(e) : undefined;
      });
    } else {
      obj.epochPaymentsList = [];
    }
    if (message.badgeUsedCuList) {
      obj.badgeUsedCuList = message.badgeUsedCuList.map(function (e) {
        return e ? BadgeUsedCu.toJSON(e) : undefined;
      });
    } else {
      obj.badgeUsedCuList = [];
    }
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$uniquePayment, _object$providerPayme, _object$epochPayments, _object$badgeUsedCuLi;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    message.uniquePaymentStorageClientProviderList = ((_object$uniquePayment = object.uniquePaymentStorageClientProviderList) === null || _object$uniquePayment === void 0 ? void 0 : _object$uniquePayment.map(function (e) {
      return _unique_payment_storage_client_provider.UniquePaymentStorageClientProvider.fromPartial(e);
    })) || [];
    message.providerPaymentStorageList = ((_object$providerPayme = object.providerPaymentStorageList) === null || _object$providerPayme === void 0 ? void 0 : _object$providerPayme.map(function (e) {
      return _provider_payment_storage.ProviderPaymentStorage.fromPartial(e);
    })) || [];
    message.epochPaymentsList = ((_object$epochPayments = object.epochPaymentsList) === null || _object$epochPayments === void 0 ? void 0 : _object$epochPayments.map(function (e) {
      return _epoch_payments.EpochPayments.fromPartial(e);
    })) || [];
    message.badgeUsedCuList = ((_object$badgeUsedCuLi = object.badgeUsedCuList) === null || _object$badgeUsedCuLi === void 0 ? void 0 : _object$badgeUsedCuLi.map(function (e) {
      return BadgeUsedCu.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;