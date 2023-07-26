"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = void 0;
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseSubscription() {
  return {
    creator: "",
    consumer: "",
    block: _helpers.Long.UZERO,
    planIndex: "",
    planBlock: _helpers.Long.UZERO,
    durationTotal: _helpers.Long.UZERO,
    durationLeft: _helpers.Long.UZERO,
    monthExpiryTime: _helpers.Long.UZERO,
    monthCuTotal: _helpers.Long.UZERO,
    monthCuLeft: _helpers.Long.UZERO
  };
}
var Subscription = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (!message.block.isZero()) {
      writer.uint32(24).uint64(message.block);
    }
    if (message.planIndex !== "") {
      writer.uint32(34).string(message.planIndex);
    }
    if (!message.planBlock.isZero()) {
      writer.uint32(40).uint64(message.planBlock);
    }
    if (!message.durationTotal.isZero()) {
      writer.uint32(48).uint64(message.durationTotal);
    }
    if (!message.durationLeft.isZero()) {
      writer.uint32(56).uint64(message.durationLeft);
    }
    if (!message.monthExpiryTime.isZero()) {
      writer.uint32(64).uint64(message.monthExpiryTime);
    }
    if (!message.monthCuTotal.isZero()) {
      writer.uint32(80).uint64(message.monthCuTotal);
    }
    if (!message.monthCuLeft.isZero()) {
      writer.uint32(88).uint64(message.monthCuLeft);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSubscription();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumer = reader.string();
          break;
        case 3:
          message.block = reader.uint64();
          break;
        case 4:
          message.planIndex = reader.string();
          break;
        case 5:
          message.planBlock = reader.uint64();
          break;
        case 6:
          message.durationTotal = reader.uint64();
          break;
        case 7:
          message.durationLeft = reader.uint64();
          break;
        case 8:
          message.monthExpiryTime = reader.uint64();
          break;
        case 10:
          message.monthCuTotal = reader.uint64();
          break;
        case 11:
          message.monthCuLeft = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator, _object$consumer, _object$planIndex;
    var message = createBaseSubscription();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.consumer = (_object$consumer = object.consumer) !== null && _object$consumer !== void 0 ? _object$consumer : "";
    message.block = object.block !== undefined && object.block !== null ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO;
    message.planIndex = (_object$planIndex = object.planIndex) !== null && _object$planIndex !== void 0 ? _object$planIndex : "";
    message.planBlock = object.planBlock !== undefined && object.planBlock !== null ? _helpers.Long.fromValue(object.planBlock) : _helpers.Long.UZERO;
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? _helpers.Long.fromValue(object.durationTotal) : _helpers.Long.UZERO;
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? _helpers.Long.fromValue(object.durationLeft) : _helpers.Long.UZERO;
    message.monthExpiryTime = object.monthExpiryTime !== undefined && object.monthExpiryTime !== null ? _helpers.Long.fromValue(object.monthExpiryTime) : _helpers.Long.UZERO;
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? _helpers.Long.fromValue(object.monthCuTotal) : _helpers.Long.UZERO;
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? _helpers.Long.fromValue(object.monthCuLeft) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Subscription = Subscription;