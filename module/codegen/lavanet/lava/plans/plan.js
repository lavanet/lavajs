import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Policy } from "./policy";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * The geolocation values are encoded as bits in a bitmask, with two special values:
 * GLS is set to 0 so it will be restrictive with the AND operator.
 * GL is set to -1 so it will be permissive with the AND operator.
 */
export let Geolocation = /*#__PURE__*/function (Geolocation) {
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
export const GeolocationSDKType = Geolocation;
export function geolocationFromJSON(object) {
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
export function geolocationToJSON(object) {
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
    price: Coin.fromPartial({}),
    allowOveruse: false,
    overuseRate: BigInt(0),
    description: "",
    type: "",
    annualDiscountPercentage: BigInt(0),
    planPolicy: Policy.fromPartial({})
  };
}
export const Plan = {
  typeUrl: "/lavanet.lava.plans.Plan",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(24).uint64(message.block);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
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
      Policy.encode(message.planPolicy, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.block = reader.uint64();
          break;
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
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
          message.planPolicy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index, _object$allowOveruse, _object$description, _object$type;
    const message = createBasePlan();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.allowOveruse = (_object$allowOveruse = object.allowOveruse) !== null && _object$allowOveruse !== void 0 ? _object$allowOveruse : false;
    message.overuseRate = object.overuseRate !== undefined && object.overuseRate !== null ? BigInt(object.overuseRate.toString()) : BigInt(0);
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : "";
    message.annualDiscountPercentage = object.annualDiscountPercentage !== undefined && object.annualDiscountPercentage !== null ? BigInt(object.annualDiscountPercentage.toString()) : BigInt(0);
    message.planPolicy = object.planPolicy !== undefined && object.planPolicy !== null ? Policy.fromPartial(object.planPolicy) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      index: object.index,
      block: BigInt(object.block),
      price: object !== null && object !== void 0 && object.price ? Coin.fromAmino(object.price) : undefined,
      allowOveruse: object.allow_overuse,
      overuseRate: BigInt(object.overuse_rate),
      description: object.description,
      type: object.type,
      annualDiscountPercentage: BigInt(object.annual_discount_percentage),
      planPolicy: object !== null && object !== void 0 && object.plan_policy ? Policy.fromAmino(object.plan_policy) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    obj.block = message.block ? message.block.toString() : undefined;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
    obj.allow_overuse = message.allowOveruse;
    obj.overuse_rate = message.overuseRate ? message.overuseRate.toString() : undefined;
    obj.description = message.description;
    obj.type = message.type;
    obj.annual_discount_percentage = message.annualDiscountPercentage ? message.annualDiscountPercentage.toString() : undefined;
    obj.plan_policy = message.planPolicy ? Policy.toAmino(message.planPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Plan.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Plan.decode(message.value);
  },
  toProto(message) {
    return Plan.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.plans.Plan",
      value: Plan.encode(message).finish()
    };
  }
};