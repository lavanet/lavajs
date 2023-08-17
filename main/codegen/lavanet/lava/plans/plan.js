"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plan = exports.GeolocationSDKType = exports.Geolocation = void 0;
exports.geolocationFromJSON = geolocationFromJSON;
exports.geolocationToJSON = geolocationToJSON;
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _policy = require("./policy");
var _binary = require("../../../binary");
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
function createBasePlan() {
  return {
    index: "",
    block: BigInt(0),
    price: _coin.Coin.fromPartial({}),
    allowOveruse: false,
    overuseRate: BigInt(0),
    description: "",
    type: "",
    annualDiscountPercentage: BigInt(0),
    planPolicy: _policy.Policy.fromPartial({})
  };
}
var Plan = {
  typeUrl: "/lavanet.lava.plans.Plan",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(24).uint64(message.block);
    }
    if (message.price !== undefined) {
      _coin.Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.allowOveruse === true) {
      writer.uint32(64).bool(message.allowOveruse);
    }
    if (message.overuseRate !== BigInt(0)) {
      writer.uint32(72).uint64(message.overuseRate);
    }
    if (message.description !== "") {
      writer.uint32(90).string(message.description);
    }
    if (message.type !== "") {
      writer.uint32(98).string(message.type);
    }
    if (message.annualDiscountPercentage !== BigInt(0)) {
      writer.uint32(104).uint64(message.annualDiscountPercentage);
    }
    if (message.planPolicy !== undefined) {
      _policy.Policy.encode(message.planPolicy, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
          message.planPolicy = _policy.Policy.decode(reader, reader.uint32());
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
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.price = object.price !== undefined && object.price !== null ? _coin.Coin.fromPartial(object.price) : undefined;
    message.allowOveruse = (_object$allowOveruse = object.allowOveruse) !== null && _object$allowOveruse !== void 0 ? _object$allowOveruse : false;
    message.overuseRate = object.overuseRate !== undefined && object.overuseRate !== null ? BigInt(object.overuseRate.toString()) : BigInt(0);
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.annualDiscountPercentage = object.annualDiscountPercentage !== undefined && object.annualDiscountPercentage !== null ? BigInt(object.annualDiscountPercentage.toString()) : BigInt(0);
    message.planPolicy = object.planPolicy !== undefined && object.planPolicy !== null ? _policy.Policy.fromPartial(object.planPolicy) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: object.index,
      block: BigInt(object.block),
      price: object !== null && object !== void 0 && object.price ? _coin.Coin.fromAmino(object.price) : undefined,
      allowOveruse: object.allow_overuse,
      overuseRate: BigInt(object.overuse_rate),
      description: object.description,
      type: object.type,
      annualDiscountPercentage: BigInt(object.annual_discount_percentage),
      planPolicy: object !== null && object !== void 0 && object.plan_policy ? _policy.Policy.fromAmino(object.plan_policy) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index;
    obj.block = message.block ? message.block.toString() : undefined;
    obj.price = message.price ? _coin.Coin.toAmino(message.price) : undefined;
    obj.allow_overuse = message.allowOveruse;
    obj.overuse_rate = message.overuseRate ? message.overuseRate.toString() : undefined;
    obj.description = message.description;
    obj.type = message.type;
    obj.annual_discount_percentage = message.annualDiscountPercentage ? message.annualDiscountPercentage.toString() : undefined;
    obj.plan_policy = message.planPolicy ? _policy.Policy.toAmino(message.planPolicy) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Plan.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Plan.decode(message.value);
  },
  toProto: function toProto(message) {
    return Plan.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.plans.Plan",
      value: Plan.encode(message).finish()
    };
  }
};
exports.Plan = Plan;