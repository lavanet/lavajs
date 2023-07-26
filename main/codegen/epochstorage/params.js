"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = void 0;
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseParams() {
  return {
    unstakeHoldBlocks: _helpers.Long.UZERO,
    epochBlocks: _helpers.Long.UZERO,
    epochsToSave: _helpers.Long.UZERO,
    latestParamChange: _helpers.Long.UZERO,
    unstakeHoldBlocksStatic: _helpers.Long.UZERO
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.unstakeHoldBlocks.isZero()) {
      writer.uint32(8).uint64(message.unstakeHoldBlocks);
    }
    if (!message.epochBlocks.isZero()) {
      writer.uint32(16).uint64(message.epochBlocks);
    }
    if (!message.epochsToSave.isZero()) {
      writer.uint32(24).uint64(message.epochsToSave);
    }
    if (!message.latestParamChange.isZero()) {
      writer.uint32(32).uint64(message.latestParamChange);
    }
    if (!message.unstakeHoldBlocksStatic.isZero()) {
      writer.uint32(40).uint64(message.unstakeHoldBlocksStatic);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unstakeHoldBlocks = reader.uint64();
          break;
        case 2:
          message.epochBlocks = reader.uint64();
          break;
        case 3:
          message.epochsToSave = reader.uint64();
          break;
        case 4:
          message.latestParamChange = reader.uint64();
          break;
        case 5:
          message.unstakeHoldBlocksStatic = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseParams();
    message.unstakeHoldBlocks = object.unstakeHoldBlocks !== undefined && object.unstakeHoldBlocks !== null ? _helpers.Long.fromValue(object.unstakeHoldBlocks) : _helpers.Long.UZERO;
    message.epochBlocks = object.epochBlocks !== undefined && object.epochBlocks !== null ? _helpers.Long.fromValue(object.epochBlocks) : _helpers.Long.UZERO;
    message.epochsToSave = object.epochsToSave !== undefined && object.epochsToSave !== null ? _helpers.Long.fromValue(object.epochsToSave) : _helpers.Long.UZERO;
    message.latestParamChange = object.latestParamChange !== undefined && object.latestParamChange !== null ? _helpers.Long.fromValue(object.latestParamChange) : _helpers.Long.UZERO;
    message.unstakeHoldBlocksStatic = object.unstakeHoldBlocksStatic !== undefined && object.unstakeHoldBlocksStatic !== null ? _helpers.Long.fromValue(object.unstakeHoldBlocksStatic) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Params = Params;