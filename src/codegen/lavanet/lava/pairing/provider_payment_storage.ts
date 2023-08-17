import { BinaryReader, BinaryWriter } from "../../../binary";
export interface ProviderPaymentStorage {
  index: string;
  epoch: bigint;
  uniquePaymentStorageClientProviderKeys: string[];
  /** total CU that were supposed to be served by the provider but didn't because he was unavailable (so consumers complained about him) */
  complainersTotalCu: bigint;
}
export interface ProviderPaymentStorageSDKType {
  index: string;
  epoch: bigint;
  uniquePaymentStorageClientProviderKeys: string[];
  complainersTotalCu: bigint;
}
function createBaseProviderPaymentStorage(): ProviderPaymentStorage {
  return {
    index: "",
    epoch: BigInt(0),
    uniquePaymentStorageClientProviderKeys: [],
    complainersTotalCu: BigInt(0)
  };
}
export const ProviderPaymentStorage = {
  typeUrl: "/lavanet.lava.pairing.ProviderPaymentStorage",
  encode(message: ProviderPaymentStorage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(24).uint64(message.epoch);
    }
    for (const v of message.uniquePaymentStorageClientProviderKeys) {
      writer.uint32(42).string(v!);
    }
    if (message.complainersTotalCu !== BigInt(0)) {
      writer.uint32(48).uint64(message.complainersTotalCu);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderPaymentStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderPaymentStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.epoch = reader.uint64();
          break;
        case 5:
          message.uniquePaymentStorageClientProviderKeys.push(reader.string());
          break;
        case 6:
          message.complainersTotalCu = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProviderPaymentStorage>): ProviderPaymentStorage {
    const message = createBaseProviderPaymentStorage();
    message.index = object.index ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.uniquePaymentStorageClientProviderKeys = object.uniquePaymentStorageClientProviderKeys?.map(e => e) || [];
    message.complainersTotalCu = object.complainersTotalCu !== undefined && object.complainersTotalCu !== null ? BigInt(object.complainersTotalCu.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProviderPaymentStorageAmino): ProviderPaymentStorage {
    return {
      index: object.index,
      epoch: BigInt(object.epoch),
      uniquePaymentStorageClientProviderKeys: Array.isArray(object?.uniquePaymentStorageClientProviderKeys) ? object.uniquePaymentStorageClientProviderKeys.map((e: any) => e) : [],
      complainersTotalCu: BigInt(object.complainersTotalCu)
    };
  },
  toAmino(message: ProviderPaymentStorage): ProviderPaymentStorageAmino {
    const obj: any = {};
    obj.index = message.index;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    if (message.uniquePaymentStorageClientProviderKeys) {
      obj.uniquePaymentStorageClientProviderKeys = message.uniquePaymentStorageClientProviderKeys.map(e => e);
    } else {
      obj.uniquePaymentStorageClientProviderKeys = [];
    }
    obj.complainersTotalCu = message.complainersTotalCu ? message.complainersTotalCu.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderPaymentStorageAminoMsg): ProviderPaymentStorage {
    return ProviderPaymentStorage.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderPaymentStorageProtoMsg): ProviderPaymentStorage {
    return ProviderPaymentStorage.decode(message.value);
  },
  toProto(message: ProviderPaymentStorage): Uint8Array {
    return ProviderPaymentStorage.encode(message).finish();
  },
  toProtoMsg(message: ProviderPaymentStorage): ProviderPaymentStorageProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProviderPaymentStorage",
      value: ProviderPaymentStorage.encode(message).finish()
    };
  }
};