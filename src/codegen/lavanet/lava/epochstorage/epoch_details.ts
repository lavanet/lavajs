import { BinaryReader, BinaryWriter } from "../../../binary";
export interface EpochDetails {
  startBlock: bigint;
  earliestStart: bigint;
  deletedEpochs: bigint[];
}
export interface EpochDetailsSDKType {
  startBlock: bigint;
  earliestStart: bigint;
  deletedEpochs: bigint[];
}
function createBaseEpochDetails(): EpochDetails {
  return {
    startBlock: BigInt(0),
    earliestStart: BigInt(0),
    deletedEpochs: []
  };
}
export const EpochDetails = {
  typeUrl: "/lavanet.lava.epochstorage.EpochDetails",
  encode(message: EpochDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.startBlock);
    }
    if (message.earliestStart !== BigInt(0)) {
      writer.uint32(16).uint64(message.earliestStart);
    }
    writer.uint32(26).fork();
    for (const v of message.deletedEpochs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlock = reader.uint64();
          break;
        case 2:
          message.earliestStart = reader.uint64();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deletedEpochs.push(reader.uint64());
            }
          } else {
            message.deletedEpochs.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EpochDetails>): EpochDetails {
    const message = createBaseEpochDetails();
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.earliestStart = object.earliestStart !== undefined && object.earliestStart !== null ? BigInt(object.earliestStart.toString()) : BigInt(0);
    message.deletedEpochs = object.deletedEpochs?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: EpochDetailsAmino): EpochDetails {
    return {
      startBlock: BigInt(object.startBlock),
      earliestStart: BigInt(object.earliestStart),
      deletedEpochs: Array.isArray(object?.deletedEpochs) ? object.deletedEpochs.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: EpochDetails): EpochDetailsAmino {
    const obj: any = {};
    obj.startBlock = message.startBlock ? message.startBlock.toString() : undefined;
    obj.earliestStart = message.earliestStart ? message.earliestStart.toString() : undefined;
    if (message.deletedEpochs) {
      obj.deletedEpochs = message.deletedEpochs.map(e => e.toString());
    } else {
      obj.deletedEpochs = [];
    }
    return obj;
  },
  fromAminoMsg(object: EpochDetailsAminoMsg): EpochDetails {
    return EpochDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochDetailsProtoMsg): EpochDetails {
    return EpochDetails.decode(message.value);
  },
  toProto(message: EpochDetails): Uint8Array {
    return EpochDetails.encode(message).finish();
  },
  toProtoMsg(message: EpochDetails): EpochDetailsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.EpochDetails",
      value: EpochDetails.encode(message).finish()
    };
  }
};