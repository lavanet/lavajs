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
    prevExpiryBlock: _helpers.Long.UZERO,
    monthCuTotal: _helpers.Long.UZERO,
    monthCuLeft: _helpers.Long.UZERO,
    prevCuLeft: _helpers.Long.UZERO
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
    if (!message.prevExpiryBlock.isZero()) {
      writer.uint32(72).uint64(message.prevExpiryBlock);
    }
    if (!message.monthCuTotal.isZero()) {
      writer.uint32(80).uint64(message.monthCuTotal);
    }
    if (!message.monthCuLeft.isZero()) {
      writer.uint32(88).uint64(message.monthCuLeft);
    }
    if (!message.prevCuLeft.isZero()) {
      writer.uint32(96).uint64(message.prevCuLeft);
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
        case 9:
          message.prevExpiryBlock = reader.uint64();
          break;
        case 10:
          message.monthCuTotal = reader.uint64();
          break;
        case 11:
          message.monthCuLeft = reader.uint64();
          break;
        case 12:
          message.prevCuLeft = reader.uint64();
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
      creator: (0, _helpers.isSet)(object.creator) ? String(object.creator) : "",
      consumer: (0, _helpers.isSet)(object.consumer) ? String(object.consumer) : "",
      block: (0, _helpers.isSet)(object.block) ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO,
      planIndex: (0, _helpers.isSet)(object.planIndex) ? String(object.planIndex) : "",
      planBlock: (0, _helpers.isSet)(object.planBlock) ? _helpers.Long.fromValue(object.planBlock) : _helpers.Long.UZERO,
      durationTotal: (0, _helpers.isSet)(object.durationTotal) ? _helpers.Long.fromValue(object.durationTotal) : _helpers.Long.UZERO,
      durationLeft: (0, _helpers.isSet)(object.durationLeft) ? _helpers.Long.fromValue(object.durationLeft) : _helpers.Long.UZERO,
      monthExpiryTime: (0, _helpers.isSet)(object.monthExpiryTime) ? _helpers.Long.fromValue(object.monthExpiryTime) : _helpers.Long.UZERO,
      prevExpiryBlock: (0, _helpers.isSet)(object.prevExpiryBlock) ? _helpers.Long.fromValue(object.prevExpiryBlock) : _helpers.Long.UZERO,
      monthCuTotal: (0, _helpers.isSet)(object.monthCuTotal) ? _helpers.Long.fromValue(object.monthCuTotal) : _helpers.Long.UZERO,
      monthCuLeft: (0, _helpers.isSet)(object.monthCuLeft) ? _helpers.Long.fromValue(object.monthCuLeft) : _helpers.Long.UZERO,
      prevCuLeft: (0, _helpers.isSet)(object.prevCuLeft) ? _helpers.Long.fromValue(object.prevCuLeft) : _helpers.Long.UZERO
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.block !== undefined && (obj.block = (message.block || _helpers.Long.UZERO).toString());
    message.planIndex !== undefined && (obj.planIndex = message.planIndex);
    message.planBlock !== undefined && (obj.planBlock = (message.planBlock || _helpers.Long.UZERO).toString());
    message.durationTotal !== undefined && (obj.durationTotal = (message.durationTotal || _helpers.Long.UZERO).toString());
    message.durationLeft !== undefined && (obj.durationLeft = (message.durationLeft || _helpers.Long.UZERO).toString());
    message.monthExpiryTime !== undefined && (obj.monthExpiryTime = (message.monthExpiryTime || _helpers.Long.UZERO).toString());
    message.prevExpiryBlock !== undefined && (obj.prevExpiryBlock = (message.prevExpiryBlock || _helpers.Long.UZERO).toString());
    message.monthCuTotal !== undefined && (obj.monthCuTotal = (message.monthCuTotal || _helpers.Long.UZERO).toString());
    message.monthCuLeft !== undefined && (obj.monthCuLeft = (message.monthCuLeft || _helpers.Long.UZERO).toString());
    message.prevCuLeft !== undefined && (obj.prevCuLeft = (message.prevCuLeft || _helpers.Long.UZERO).toString());
    return obj;
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
    message.prevExpiryBlock = object.prevExpiryBlock !== undefined && object.prevExpiryBlock !== null ? _helpers.Long.fromValue(object.prevExpiryBlock) : _helpers.Long.UZERO;
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? _helpers.Long.fromValue(object.monthCuTotal) : _helpers.Long.UZERO;
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? _helpers.Long.fromValue(object.monthCuLeft) : _helpers.Long.UZERO;
    message.prevCuLeft = object.prevCuLeft !== undefined && object.prevCuLeft !== null ? _helpers.Long.fromValue(object.prevCuLeft) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Subscription = Subscription;