"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StakeEntry = void 0;
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _endpoint = require("./endpoint");
var _helpers = require("../../../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseStakeEntry() {
  return {
    stake: undefined,
    address: "",
    stakeAppliedBlock: _helpers.Long.UZERO,
    endpoints: [],
    geolocation: _helpers.Long.UZERO,
    chain: "",
    moniker: ""
  };
}
var StakeEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.stake !== undefined) {
      _coin.Coin.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (!message.stakeAppliedBlock.isZero()) {
      writer.uint32(24).uint64(message.stakeAppliedBlock);
    }
    var _iterator = _createForOfIteratorHelper(message.endpoints),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _endpoint.Endpoint.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(40).uint64(message.geolocation);
    }
    if (message.chain !== "") {
      writer.uint32(50).string(message.chain);
    }
    if (message.moniker !== "") {
      writer.uint32(66).string(message.moniker);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStakeEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.stakeAppliedBlock = reader.uint64();
          break;
        case 4:
          message.endpoints.push(_endpoint.Endpoint.decode(reader, reader.uint32()));
          break;
        case 5:
          message.geolocation = reader.uint64();
          break;
        case 6:
          message.chain = reader.string();
          break;
        case 8:
          message.moniker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$address, _object$endpoints, _object$chain, _object$moniker;
    var message = createBaseStakeEntry();
    message.stake = object.stake !== undefined && object.stake !== null ? _coin.Coin.fromPartial(object.stake) : undefined;
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.stakeAppliedBlock = object.stakeAppliedBlock !== undefined && object.stakeAppliedBlock !== null ? _helpers.Long.fromValue(object.stakeAppliedBlock) : _helpers.Long.UZERO;
    message.endpoints = ((_object$endpoints = object.endpoints) === null || _object$endpoints === void 0 ? void 0 : _object$endpoints.map(function (e) {
      return _endpoint.Endpoint.fromPartial(e);
    })) || [];
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? _helpers.Long.fromValue(object.geolocation) : _helpers.Long.UZERO;
    message.chain = (_object$chain = object.chain) !== null && _object$chain !== void 0 ? _object$chain : "";
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    return message;
  }
};
exports.StakeEntry = StakeEntry;