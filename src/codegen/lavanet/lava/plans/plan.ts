import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Policy, PolicySDKType } from "./policy";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * The geolocation values are encoded as bits in a bitmask, with two special values:
 * GLS is set to 0 so it will be restrictive with the AND operator.
 * GL is set to -1 so it will be permissive with the AND operator.
 */
export enum Geolocation {
  /** GLS - Global-strict */
  GLS = 0,
  /** USC - US-Center */
  USC = 1,
  EU = 2,
  /** USE - US-East */
  USE = 4,
  /** USW - US-West */
  USW = 8,
  AF = 16,
  AS = 32,
  /** AU - (includes NZ) */
  AU = 64,
  /** GL - Global */
  GL = 65535,
  UNRECOGNIZED = -1,
}
export const GeolocationSDKType = Geolocation;
export function geolocationFromJSON(object: any): Geolocation {
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
export function geolocationToJSON(object: Geolocation): string {
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
export interface Plan {
  index: string;
  /** the epoch that this plan was created */
  block: bigint;
  /** plan price (in ulava) */
  price: Coin;
  /** allow CU overuse flag */
  allowOveruse: boolean;
  /** price of CU overuse */
  overuseRate: bigint;
  /** plan description (for humans) */
  description: string;
  /** plan type */
  type: string;
  /** discount for buying the plan for a year */
  annualDiscountPercentage: bigint;
  planPolicy: Policy;
}
export interface PlanSDKType {
  index: string;
  block: bigint;
  price: CoinSDKType;
  allow_overuse: boolean;
  overuse_rate: bigint;
  description: string;
  type: string;
  annual_discount_percentage: bigint;
  plan_policy: PolicySDKType;
}
function createBasePlan(): Plan {
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
  encode(message: Plan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Plan {
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
  fromPartial(object: Partial<Plan>): Plan {
    const message = createBasePlan();
    message.index = object.index ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.allowOveruse = object.allowOveruse ?? false;
    message.overuseRate = object.overuseRate !== undefined && object.overuseRate !== null ? BigInt(object.overuseRate.toString()) : BigInt(0);
    message.description = object.description ?? "";
    message.type = object.type ?? "";
    message.annualDiscountPercentage = object.annualDiscountPercentage !== undefined && object.annualDiscountPercentage !== null ? BigInt(object.annualDiscountPercentage.toString()) : BigInt(0);
    message.planPolicy = object.planPolicy !== undefined && object.planPolicy !== null ? Policy.fromPartial(object.planPolicy) : undefined;
    return message;
  },
  fromAmino(object: PlanAmino): Plan {
    return {
      index: object.index,
      block: BigInt(object.block),
      price: object?.price ? Coin.fromAmino(object.price) : undefined,
      allowOveruse: object.allow_overuse,
      overuseRate: BigInt(object.overuse_rate),
      description: object.description,
      type: object.type,
      annualDiscountPercentage: BigInt(object.annual_discount_percentage),
      planPolicy: object?.plan_policy ? Policy.fromAmino(object.plan_policy) : undefined
    };
  },
  toAmino(message: Plan): PlanAmino {
    const obj: any = {};
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
  fromAminoMsg(object: PlanAminoMsg): Plan {
    return Plan.fromAmino(object.value);
  },
  fromProtoMsg(message: PlanProtoMsg): Plan {
    return Plan.decode(message.value);
  },
  toProto(message: Plan): Uint8Array {
    return Plan.encode(message).finish();
  },
  toProtoMsg(message: Plan): PlanProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.Plan",
      value: Plan.encode(message).finish()
    };
  }
};