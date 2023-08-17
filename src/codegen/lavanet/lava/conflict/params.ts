import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  majorityPercent: string;
  voteStartSpan: bigint;
  votePeriod: bigint;
  Rewards: Rewards;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  majorityPercent: string;
  voteStartSpan: bigint;
  votePeriod: bigint;
  Rewards: RewardsSDKType;
}
export interface Rewards {
  winnerRewardPercent: string;
  clientRewardPercent: string;
  votersRewardPercent: string;
}
export interface RewardsSDKType {
  winnerRewardPercent: string;
  clientRewardPercent: string;
  votersRewardPercent: string;
}
function createBaseParams(): Params {
  return {
    majorityPercent: "",
    voteStartSpan: BigInt(0),
    votePeriod: BigInt(0),
    Rewards: Rewards.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.conflict.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.majorityPercent !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.majorityPercent, 18).atomics);
    }
    if (message.voteStartSpan !== BigInt(0)) {
      writer.uint32(16).uint64(message.voteStartSpan);
    }
    if (message.votePeriod !== BigInt(0)) {
      writer.uint32(24).uint64(message.votePeriod);
    }
    if (message.Rewards !== undefined) {
      Rewards.encode(message.Rewards, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.majorityPercent = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.voteStartSpan = reader.uint64();
          break;
        case 3:
          message.votePeriod = reader.uint64();
          break;
        case 4:
          message.Rewards = Rewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.majorityPercent = object.majorityPercent ?? "";
    message.voteStartSpan = object.voteStartSpan !== undefined && object.voteStartSpan !== null ? BigInt(object.voteStartSpan.toString()) : BigInt(0);
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
    message.Rewards = object.Rewards !== undefined && object.Rewards !== null ? Rewards.fromPartial(object.Rewards) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      majorityPercent: object.majorityPercent,
      voteStartSpan: BigInt(object.voteStartSpan),
      votePeriod: BigInt(object.votePeriod),
      Rewards: object?.Rewards ? Rewards.fromAmino(object.Rewards) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.majorityPercent = message.majorityPercent;
    obj.voteStartSpan = message.voteStartSpan ? message.voteStartSpan.toString() : undefined;
    obj.votePeriod = message.votePeriod ? message.votePeriod.toString() : undefined;
    obj.Rewards = message.Rewards ? Rewards.toAmino(message.Rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseRewards(): Rewards {
  return {
    winnerRewardPercent: "",
    clientRewardPercent: "",
    votersRewardPercent: ""
  };
}
export const Rewards = {
  typeUrl: "/lavanet.lava.conflict.Rewards",
  encode(message: Rewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.winnerRewardPercent !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.winnerRewardPercent, 18).atomics);
    }
    if (message.clientRewardPercent !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.clientRewardPercent, 18).atomics);
    }
    if (message.votersRewardPercent !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.votersRewardPercent, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Rewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winnerRewardPercent = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.clientRewardPercent = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.votersRewardPercent = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Rewards>): Rewards {
    const message = createBaseRewards();
    message.winnerRewardPercent = object.winnerRewardPercent ?? "";
    message.clientRewardPercent = object.clientRewardPercent ?? "";
    message.votersRewardPercent = object.votersRewardPercent ?? "";
    return message;
  },
  fromAmino(object: RewardsAmino): Rewards {
    return {
      winnerRewardPercent: object.winnerRewardPercent,
      clientRewardPercent: object.clientRewardPercent,
      votersRewardPercent: object.votersRewardPercent
    };
  },
  toAmino(message: Rewards): RewardsAmino {
    const obj: any = {};
    obj.winnerRewardPercent = message.winnerRewardPercent;
    obj.clientRewardPercent = message.clientRewardPercent;
    obj.votersRewardPercent = message.votersRewardPercent;
    return obj;
  },
  fromAminoMsg(object: RewardsAminoMsg): Rewards {
    return Rewards.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardsProtoMsg): Rewards {
    return Rewards.decode(message.value);
  },
  toProto(message: Rewards): Uint8Array {
    return Rewards.encode(message).finish();
  },
  toProtoMsg(message: Rewards): RewardsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.conflict.Rewards",
      value: Rewards.encode(message).finish()
    };
  }
};