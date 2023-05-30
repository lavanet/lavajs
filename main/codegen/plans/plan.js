"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plan = void 0;
var _coin = require("../cosmos/base/v1beta1/coin");
var _project = require("../projects/project");
var _helpers = require("../helpers");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
      _project.Policy.encode(message.planPolicy, writer.uint32(114).fork()).ldelim();
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
          message.planPolicy = _project.Policy.decode(reader, reader.uint32());
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
      index: (0, _helpers.isSet)(object.index) ? String(object.index) : "",
      block: (0, _helpers.isSet)(object.block) ? _helpers.Long.fromValue(object.block) : _helpers.Long.UZERO,
      price: (0, _helpers.isSet)(object.price) ? _coin.Coin.fromJSON(object.price) : undefined,
      allowOveruse: (0, _helpers.isSet)(object.allowOveruse) ? Boolean(object.allowOveruse) : false,
      overuseRate: (0, _helpers.isSet)(object.overuseRate) ? _helpers.Long.fromValue(object.overuseRate) : _helpers.Long.UZERO,
      description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
      type: (0, _helpers.isSet)(object.type) ? String(object.type) : "",
      annualDiscountPercentage: (0, _helpers.isSet)(object.annualDiscountPercentage) ? _helpers.Long.fromValue(object.annualDiscountPercentage) : _helpers.Long.UZERO,
      planPolicy: (0, _helpers.isSet)(object.planPolicy) ? _project.Policy.fromJSON(object.planPolicy) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.index !== undefined && (obj.index = message.index);
    message.block !== undefined && (obj.block = (message.block || _helpers.Long.UZERO).toString());
    message.price !== undefined && (obj.price = message.price ? _coin.Coin.toJSON(message.price) : undefined);
    message.allowOveruse !== undefined && (obj.allowOveruse = message.allowOveruse);
    message.overuseRate !== undefined && (obj.overuseRate = (message.overuseRate || _helpers.Long.UZERO).toString());
    message.description !== undefined && (obj.description = message.description);
    message.type !== undefined && (obj.type = message.type);
    message.annualDiscountPercentage !== undefined && (obj.annualDiscountPercentage = (message.annualDiscountPercentage || _helpers.Long.UZERO).toString());
    message.planPolicy !== undefined && (obj.planPolicy = message.planPolicy ? _project.Policy.toJSON(message.planPolicy) : undefined);
    return obj;
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
    message.planPolicy = object.planPolicy !== undefined && object.planPolicy !== null ? _project.Policy.fromPartial(object.planPolicy) : undefined;
    return message;
  }
};
exports.Plan = Plan;