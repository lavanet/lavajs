import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Subscription {
  /** creator pays for the subscription */
  creator: string;
  /** consumer uses the subscription */
  consumer: string;
  /** when the subscription was last recharged */
  block: bigint;
  /** index (name) of plan */
  planIndex: string;
  /** when the plan was created */
  planBlock: bigint;
  /** total requested duration in months */
  durationTotal: bigint;
  /** remaining duration in months */
  durationLeft: bigint;
  /** expiry time of current month */
  monthExpiryTime: bigint;
  /** CU allowance during current month */
  monthCuTotal: bigint;
  /** CU remaining during current month */
  monthCuLeft: bigint;
}
export interface SubscriptionSDKType {
  creator: string;
  consumer: string;
  block: bigint;
  plan_index: string;
  plan_block: bigint;
  duration_total: bigint;
  duration_left: bigint;
  month_expiry_time: bigint;
  month_cu_total: bigint;
  month_cu_left: bigint;
}
function createBaseSubscription(): Subscription {
  return {
    creator: "",
    consumer: "",
    block: BigInt(0),
    planIndex: "",
    planBlock: BigInt(0),
    durationTotal: BigInt(0),
    durationLeft: BigInt(0),
    monthExpiryTime: BigInt(0),
    monthCuTotal: BigInt(0),
    monthCuLeft: BigInt(0)
  };
}
export const Subscription = {
  typeUrl: "/lavanet.lava.subscription.Subscription",
  encode(message: Subscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(24).uint64(message.block);
    }
    if (message.planIndex !== "") {
      writer.uint32(34).string(message.planIndex);
    }
    if (message.planBlock !== BigInt(0)) {
      writer.uint32(40).uint64(message.planBlock);
    }
    if (message.durationTotal !== BigInt(0)) {
      writer.uint32(48).uint64(message.durationTotal);
    }
    if (message.durationLeft !== BigInt(0)) {
      writer.uint32(56).uint64(message.durationLeft);
    }
    if (message.monthExpiryTime !== BigInt(0)) {
      writer.uint32(64).uint64(message.monthExpiryTime);
    }
    if (message.monthCuTotal !== BigInt(0)) {
      writer.uint32(80).uint64(message.monthCuTotal);
    }
    if (message.monthCuLeft !== BigInt(0)) {
      writer.uint32(88).uint64(message.monthCuLeft);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Subscription {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object: Partial<Subscription>): Subscription {
    const message = createBaseSubscription();
    message.creator = object.creator ?? "";
    message.consumer = object.consumer ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.planIndex = object.planIndex ?? "";
    message.planBlock = object.planBlock !== undefined && object.planBlock !== null ? BigInt(object.planBlock.toString()) : BigInt(0);
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? BigInt(object.durationTotal.toString()) : BigInt(0);
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? BigInt(object.durationLeft.toString()) : BigInt(0);
    message.monthExpiryTime = object.monthExpiryTime !== undefined && object.monthExpiryTime !== null ? BigInt(object.monthExpiryTime.toString()) : BigInt(0);
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? BigInt(object.monthCuTotal.toString()) : BigInt(0);
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? BigInt(object.monthCuLeft.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SubscriptionAmino): Subscription {
    return {
      creator: object.creator,
      consumer: object.consumer,
      block: BigInt(object.block),
      planIndex: object.plan_index,
      planBlock: BigInt(object.plan_block),
      durationTotal: BigInt(object.duration_total),
      durationLeft: BigInt(object.duration_left),
      monthExpiryTime: BigInt(object.month_expiry_time),
      monthCuTotal: BigInt(object.month_cu_total),
      monthCuLeft: BigInt(object.month_cu_left)
    };
  },
  toAmino(message: Subscription): SubscriptionAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.consumer = message.consumer;
    obj.block = message.block ? message.block.toString() : undefined;
    obj.plan_index = message.planIndex;
    obj.plan_block = message.planBlock ? message.planBlock.toString() : undefined;
    obj.duration_total = message.durationTotal ? message.durationTotal.toString() : undefined;
    obj.duration_left = message.durationLeft ? message.durationLeft.toString() : undefined;
    obj.month_expiry_time = message.monthExpiryTime ? message.monthExpiryTime.toString() : undefined;
    obj.month_cu_total = message.monthCuTotal ? message.monthCuTotal.toString() : undefined;
    obj.month_cu_left = message.monthCuLeft ? message.monthCuLeft.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SubscriptionAminoMsg): Subscription {
    return Subscription.fromAmino(object.value);
  },
  fromProtoMsg(message: SubscriptionProtoMsg): Subscription {
    return Subscription.decode(message.value);
  },
  toProto(message: Subscription): Uint8Array {
    return Subscription.encode(message).finish();
  },
  toProtoMsg(message: Subscription): SubscriptionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.Subscription",
      value: Subscription.encode(message).finish()
    };
  }
};