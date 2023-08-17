import { BinaryReader, BinaryWriter } from "../../../binary";
export interface EpochPayments {
  index: string;
  providerPaymentStorageKeys: string[];
}
export interface EpochPaymentsSDKType {
  index: string;
  providerPaymentStorageKeys: string[];
}
function createBaseEpochPayments(): EpochPayments {
  return {
    index: "",
    providerPaymentStorageKeys: []
  };
}
export const EpochPayments = {
  typeUrl: "/lavanet.lava.pairing.EpochPayments",
  encode(message: EpochPayments, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.providerPaymentStorageKeys) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochPayments {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochPayments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.providerPaymentStorageKeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EpochPayments>): EpochPayments {
    const message = createBaseEpochPayments();
    message.index = object.index ?? "";
    message.providerPaymentStorageKeys = object.providerPaymentStorageKeys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EpochPaymentsAmino): EpochPayments {
    return {
      index: object.index,
      providerPaymentStorageKeys: Array.isArray(object?.providerPaymentStorageKeys) ? object.providerPaymentStorageKeys.map((e: any) => e) : []
    };
  },
  toAmino(message: EpochPayments): EpochPaymentsAmino {
    const obj: any = {};
    obj.index = message.index;
    if (message.providerPaymentStorageKeys) {
      obj.providerPaymentStorageKeys = message.providerPaymentStorageKeys.map(e => e);
    } else {
      obj.providerPaymentStorageKeys = [];
    }
    return obj;
  },
  fromAminoMsg(object: EpochPaymentsAminoMsg): EpochPayments {
    return EpochPayments.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochPaymentsProtoMsg): EpochPayments {
    return EpochPayments.decode(message.value);
  },
  toProto(message: EpochPayments): Uint8Array {
    return EpochPayments.encode(message).finish();
  },
  toProtoMsg(message: EpochPayments): EpochPaymentsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.EpochPayments",
      value: EpochPayments.encode(message).finish()
    };
  }
};