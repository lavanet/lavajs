"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _params = require("./params");
var _stake_storage = require("./stake_storage");
var _epoch_details = require("./epoch_details");
var _fixated_params = require("./fixated_params");
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** GenesisState defines the epochstorage module's genesis state. */

/** GenesisState defines the epochstorage module's genesis state. */

function createBaseGenesisState() {
  return {
    params: _params.Params.fromPartial({}),
    stakeStorageList: [],
    epochDetails: _epoch_details.EpochDetails.fromPartial({}),
    fixatedParamsList: []
  };
}
var GenesisState = {
  typeUrl: "/lavanet.lava.epochstorage.GenesisState",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.stakeStorageList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _stake_storage.StakeStorage.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.epochDetails !== undefined) {
      _epoch_details.EpochDetails.encode(message.epochDetails, writer.uint32(26).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.fixatedParamsList),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _fixated_params.FixatedParams.encode(_v, writer.uint32(34).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _params.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.stakeStorageList.push(_stake_storage.StakeStorage.decode(reader, reader.uint32()));
          break;
        case 3:
          message.epochDetails = _epoch_details.EpochDetails.decode(reader, reader.uint32());
          break;
        case 4:
          message.fixatedParamsList.push(_fixated_params.FixatedParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$stakeStorageL, _object$fixatedParams;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    message.stakeStorageList = ((_object$stakeStorageL = object.stakeStorageList) === null || _object$stakeStorageL === void 0 ? void 0 : _object$stakeStorageL.map(function (e) {
      return _stake_storage.StakeStorage.fromPartial(e);
    })) || [];
    message.epochDetails = object.epochDetails !== undefined && object.epochDetails !== null ? _epoch_details.EpochDetails.fromPartial(object.epochDetails) : undefined;
    message.fixatedParamsList = ((_object$fixatedParams = object.fixatedParamsList) === null || _object$fixatedParams === void 0 ? void 0 : _object$fixatedParams.map(function (e) {
      return _fixated_params.FixatedParams.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _params.Params.fromAmino(object.params) : undefined,
      stakeStorageList: Array.isArray(object === null || object === void 0 ? void 0 : object.stakeStorageList) ? object.stakeStorageList.map(function (e) {
        return _stake_storage.StakeStorage.fromAmino(e);
      }) : [],
      epochDetails: object !== null && object !== void 0 && object.epochDetails ? _epoch_details.EpochDetails.fromAmino(object.epochDetails) : undefined,
      fixatedParamsList: Array.isArray(object === null || object === void 0 ? void 0 : object.fixatedParamsList) ? object.fixatedParamsList.map(function (e) {
        return _fixated_params.FixatedParams.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _params.Params.toAmino(message.params) : undefined;
    if (message.stakeStorageList) {
      obj.stakeStorageList = message.stakeStorageList.map(function (e) {
        return e ? _stake_storage.StakeStorage.toAmino(e) : undefined;
      });
    } else {
      obj.stakeStorageList = [];
    }
    obj.epochDetails = message.epochDetails ? _epoch_details.EpochDetails.toAmino(message.epochDetails) : undefined;
    if (message.fixatedParamsList) {
      obj.fixatedParamsList = message.fixatedParamsList.map(function (e) {
        return e ? _fixated_params.FixatedParams.toAmino(e) : undefined;
      });
    } else {
      obj.fixatedParamsList = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto: function toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
exports.GenesisState = GenesisState;