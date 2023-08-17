import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  mintCoinsPerCU: string;
  fraudStakeSlashingFactor: string;
  fraudSlashingAmount: bigint;
  epochBlocksOverlap: bigint;
  unpayLimit: string;
  slashLimit: string;
  dataReliabilityReward: string;
  QoSWeight: string;
  recommendedEpochNumToCollectPayment: bigint;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  mintCoinsPerCU: string;
  fraudStakeSlashingFactor: string;
  fraudSlashingAmount: bigint;
  epochBlocksOverlap: bigint;
  unpayLimit: string;
  slashLimit: string;
  dataReliabilityReward: string;
  QoSWeight: string;
  recommendedEpochNumToCollectPayment: bigint;
}
function createBaseParams(): Params {
  return {
    mintCoinsPerCU: "",
    fraudStakeSlashingFactor: "",
    fraudSlashingAmount: BigInt(0),
    epochBlocksOverlap: BigInt(0),
    unpayLimit: "",
    slashLimit: "",
    dataReliabilityReward: "",
    QoSWeight: "",
    recommendedEpochNumToCollectPayment: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.pairing.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintCoinsPerCU !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.mintCoinsPerCU, 18).atomics);
    }
    if (message.fraudStakeSlashingFactor !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.fraudStakeSlashingFactor, 18).atomics);
    }
    if (message.fraudSlashingAmount !== BigInt(0)) {
      writer.uint32(48).uint64(message.fraudSlashingAmount);
    }
    if (message.epochBlocksOverlap !== BigInt(0)) {
      writer.uint32(64).uint64(message.epochBlocksOverlap);
    }
    if (message.unpayLimit !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.unpayLimit, 18).atomics);
    }
    if (message.slashLimit !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.slashLimit, 18).atomics);
    }
    if (message.dataReliabilityReward !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.dataReliabilityReward, 18).atomics);
    }
    if (message.QoSWeight !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.QoSWeight, 18).atomics);
    }
    if (message.recommendedEpochNumToCollectPayment !== BigInt(0)) {
      writer.uint32(112).uint64(message.recommendedEpochNumToCollectPayment);
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
        case 3:
          message.mintCoinsPerCU = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.fraudStakeSlashingFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.fraudSlashingAmount = reader.uint64();
          break;
        case 8:
          message.epochBlocksOverlap = reader.uint64();
          break;
        case 10:
          message.unpayLimit = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.slashLimit = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.dataReliabilityReward = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.QoSWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.recommendedEpochNumToCollectPayment = reader.uint64();
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
    message.mintCoinsPerCU = object.mintCoinsPerCU ?? "";
    message.fraudStakeSlashingFactor = object.fraudStakeSlashingFactor ?? "";
    message.fraudSlashingAmount = object.fraudSlashingAmount !== undefined && object.fraudSlashingAmount !== null ? BigInt(object.fraudSlashingAmount.toString()) : BigInt(0);
    message.epochBlocksOverlap = object.epochBlocksOverlap !== undefined && object.epochBlocksOverlap !== null ? BigInt(object.epochBlocksOverlap.toString()) : BigInt(0);
    message.unpayLimit = object.unpayLimit ?? "";
    message.slashLimit = object.slashLimit ?? "";
    message.dataReliabilityReward = object.dataReliabilityReward ?? "";
    message.QoSWeight = object.QoSWeight ?? "";
    message.recommendedEpochNumToCollectPayment = object.recommendedEpochNumToCollectPayment !== undefined && object.recommendedEpochNumToCollectPayment !== null ? BigInt(object.recommendedEpochNumToCollectPayment.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      mintCoinsPerCU: object.mintCoinsPerCU,
      fraudStakeSlashingFactor: object.fraudStakeSlashingFactor,
      fraudSlashingAmount: BigInt(object.fraudSlashingAmount),
      epochBlocksOverlap: BigInt(object.epochBlocksOverlap),
      unpayLimit: object.unpayLimit,
      slashLimit: object.slashLimit,
      dataReliabilityReward: object.dataReliabilityReward,
      QoSWeight: object.QoSWeight,
      recommendedEpochNumToCollectPayment: BigInt(object.recommendedEpochNumToCollectPayment)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mintCoinsPerCU = message.mintCoinsPerCU;
    obj.fraudStakeSlashingFactor = message.fraudStakeSlashingFactor;
    obj.fraudSlashingAmount = message.fraudSlashingAmount ? message.fraudSlashingAmount.toString() : undefined;
    obj.epochBlocksOverlap = message.epochBlocksOverlap ? message.epochBlocksOverlap.toString() : undefined;
    obj.unpayLimit = message.unpayLimit;
    obj.slashLimit = message.slashLimit;
    obj.dataReliabilityReward = message.dataReliabilityReward;
    obj.QoSWeight = message.QoSWeight;
    obj.recommendedEpochNumToCollectPayment = message.recommendedEpochNumToCollectPayment ? message.recommendedEpochNumToCollectPayment.toString() : undefined;
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
      typeUrl: "/lavanet.lava.pairing.Params",
      value: Params.encode(message).finish()
    };
  }
};