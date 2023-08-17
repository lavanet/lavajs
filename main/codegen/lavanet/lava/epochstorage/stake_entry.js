"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StakeEntry = void 0;
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _endpoint = require("./endpoint");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseStakeEntry() {
  return {
    stake: _coin.Coin.fromPartial({}),
    address: "",
    stakeAppliedBlock: BigInt(0),
    endpoints: [],
    geolocation: BigInt(0),
    chain: "",
    moniker: ""
  };
}
var StakeEntry = {
  typeUrl: "/lavanet.lava.epochstorage.StakeEntry",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.stake !== undefined) {
      _coin.Coin.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.stakeAppliedBlock !== BigInt(0)) {
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
    if (message.geolocation !== BigInt(0)) {
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
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
    message.stakeAppliedBlock = object.stakeAppliedBlock !== undefined && object.stakeAppliedBlock !== null ? BigInt(object.stakeAppliedBlock.toString()) : BigInt(0);
    message.endpoints = ((_object$endpoints = object.endpoints) === null || _object$endpoints === void 0 ? void 0 : _object$endpoints.map(function (e) {
      return _endpoint.Endpoint.fromPartial(e);
    })) || [];
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? BigInt(object.geolocation.toString()) : BigInt(0);
    message.chain = (_object$chain = object.chain) !== null && _object$chain !== void 0 ? _object$chain : "";
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      stake: object !== null && object !== void 0 && object.stake ? _coin.Coin.fromAmino(object.stake) : undefined,
      address: object.address,
      stakeAppliedBlock: BigInt(object.stake_applied_block),
      endpoints: Array.isArray(object === null || object === void 0 ? void 0 : object.endpoints) ? object.endpoints.map(function (e) {
        return _endpoint.Endpoint.fromAmino(e);
      }) : [],
      geolocation: BigInt(object.geolocation),
      chain: object.chain,
      moniker: object.moniker
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.stake = message.stake ? _coin.Coin.toAmino(message.stake) : undefined;
    obj.address = message.address;
    obj.stake_applied_block = message.stakeAppliedBlock ? message.stakeAppliedBlock.toString() : undefined;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(function (e) {
        return e ? _endpoint.Endpoint.toAmino(e) : undefined;
      });
    } else {
      obj.endpoints = [];
    }
    obj.geolocation = message.geolocation ? message.geolocation.toString() : undefined;
    obj.chain = message.chain;
    obj.moniker = message.moniker;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return StakeEntry.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return StakeEntry.decode(message.value);
  },
  toProto: function toProto(message) {
    return StakeEntry.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.StakeEntry",
      value: StakeEntry.encode(message).finish()
    };
  }
};
exports.StakeEntry = StakeEntry;