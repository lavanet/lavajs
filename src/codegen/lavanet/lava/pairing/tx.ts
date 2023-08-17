import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Endpoint, EndpointSDKType } from "../epochstorage/endpoint";
import { RelaySession, RelaySessionSDKType } from "./relay";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface MsgStakeProvider {
  creator: string;
  chainID: string;
  amount: Coin;
  endpoints: Endpoint[];
  geolocation: bigint;
  moniker: string;
}
export interface MsgStakeProviderSDKType {
  creator: string;
  chainID: string;
  amount: CoinSDKType;
  endpoints: EndpointSDKType[];
  geolocation: bigint;
  moniker: string;
}
export interface MsgStakeProviderResponse {}
export interface MsgStakeProviderResponseSDKType {}
export interface MsgUnstakeProvider {
  creator: string;
  chainID: string;
}
export interface MsgUnstakeProviderSDKType {
  creator: string;
  chainID: string;
}
export interface MsgUnstakeProviderResponse {}
export interface MsgUnstakeProviderResponseSDKType {}
export interface MsgRelayPayment {
  creator: string;
  relays: RelaySession[];
  descriptionString: string;
}
export interface MsgRelayPaymentSDKType {
  creator: string;
  relays: RelaySessionSDKType[];
  descriptionString: string;
}
export interface MsgRelayPaymentResponse {}
export interface MsgRelayPaymentResponseSDKType {}
export interface MsgFreezeProvider {
  creator: string;
  chainIds: string[];
  reason: string;
}
export interface MsgFreezeProviderSDKType {
  creator: string;
  chainIds: string[];
  reason: string;
}
export interface MsgFreezeProviderResponse {}
export interface MsgFreezeProviderResponseSDKType {}
export interface MsgUnfreezeProvider {
  creator: string;
  chainIds: string[];
}
export interface MsgUnfreezeProviderSDKType {
  creator: string;
  chainIds: string[];
}
export interface MsgUnfreezeProviderResponse {}
export interface MsgUnfreezeProviderResponseSDKType {}
function createBaseMsgStakeProvider(): MsgStakeProvider {
  return {
    creator: "",
    chainID: "",
    amount: Coin.fromPartial({}),
    endpoints: [],
    geolocation: BigInt(0),
    moniker: ""
  };
}
export const MsgStakeProvider = {
  typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
  encode(message: MsgStakeProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.geolocation !== BigInt(0)) {
      writer.uint32(40).uint64(message.geolocation);
    }
    if (message.moniker !== "") {
      writer.uint32(50).string(message.moniker);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 5:
          message.geolocation = reader.uint64();
          break;
        case 6:
          message.moniker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStakeProvider>): MsgStakeProvider {
    const message = createBaseMsgStakeProvider();
    message.creator = object.creator ?? "";
    message.chainID = object.chainID ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? BigInt(object.geolocation.toString()) : BigInt(0);
    message.moniker = object.moniker ?? "";
    return message;
  },
  fromAmino(object: MsgStakeProviderAmino): MsgStakeProvider {
    return {
      creator: object.creator,
      chainID: object.chainID,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromAmino(e)) : [],
      geolocation: BigInt(object.geolocation),
      moniker: object.moniker
    };
  },
  toAmino(message: MsgStakeProvider): MsgStakeProviderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.chainID = message.chainID;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    obj.geolocation = message.geolocation ? message.geolocation.toString() : undefined;
    obj.moniker = message.moniker;
    return obj;
  },
  fromAminoMsg(object: MsgStakeProviderAminoMsg): MsgStakeProvider {
    return MsgStakeProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeProviderProtoMsg): MsgStakeProvider {
    return MsgStakeProvider.decode(message.value);
  },
  toProto(message: MsgStakeProvider): Uint8Array {
    return MsgStakeProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeProvider): MsgStakeProviderProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
      value: MsgStakeProvider.encode(message).finish()
    };
  }
};
function createBaseMsgStakeProviderResponse(): MsgStakeProviderResponse {
  return {};
}
export const MsgStakeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgStakeProviderResponse",
  encode(_: MsgStakeProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgStakeProviderResponse>): MsgStakeProviderResponse {
    const message = createBaseMsgStakeProviderResponse();
    return message;
  },
  fromAmino(_: MsgStakeProviderResponseAmino): MsgStakeProviderResponse {
    return {};
  },
  toAmino(_: MsgStakeProviderResponse): MsgStakeProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStakeProviderResponseAminoMsg): MsgStakeProviderResponse {
    return MsgStakeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeProviderResponseProtoMsg): MsgStakeProviderResponse {
    return MsgStakeProviderResponse.decode(message.value);
  },
  toProto(message: MsgStakeProviderResponse): Uint8Array {
    return MsgStakeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeProviderResponse): MsgStakeProviderResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgStakeProviderResponse",
      value: MsgStakeProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeProvider(): MsgUnstakeProvider {
  return {
    creator: "",
    chainID: ""
  };
}
export const MsgUnstakeProvider = {
  typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
  encode(message: MsgUnstakeProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnstakeProvider>): MsgUnstakeProvider {
    const message = createBaseMsgUnstakeProvider();
    message.creator = object.creator ?? "";
    message.chainID = object.chainID ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeProviderAmino): MsgUnstakeProvider {
    return {
      creator: object.creator,
      chainID: object.chainID
    };
  },
  toAmino(message: MsgUnstakeProvider): MsgUnstakeProviderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.chainID = message.chainID;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeProviderAminoMsg): MsgUnstakeProvider {
    return MsgUnstakeProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeProviderProtoMsg): MsgUnstakeProvider {
    return MsgUnstakeProvider.decode(message.value);
  },
  toProto(message: MsgUnstakeProvider): Uint8Array {
    return MsgUnstakeProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeProvider): MsgUnstakeProviderProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
      value: MsgUnstakeProvider.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeProviderResponse(): MsgUnstakeProviderResponse {
  return {};
}
export const MsgUnstakeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgUnstakeProviderResponse",
  encode(_: MsgUnstakeProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUnstakeProviderResponse>): MsgUnstakeProviderResponse {
    const message = createBaseMsgUnstakeProviderResponse();
    return message;
  },
  fromAmino(_: MsgUnstakeProviderResponseAmino): MsgUnstakeProviderResponse {
    return {};
  },
  toAmino(_: MsgUnstakeProviderResponse): MsgUnstakeProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeProviderResponseAminoMsg): MsgUnstakeProviderResponse {
    return MsgUnstakeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeProviderResponseProtoMsg): MsgUnstakeProviderResponse {
    return MsgUnstakeProviderResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeProviderResponse): Uint8Array {
    return MsgUnstakeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeProviderResponse): MsgUnstakeProviderResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnstakeProviderResponse",
      value: MsgUnstakeProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRelayPayment(): MsgRelayPayment {
  return {
    creator: "",
    relays: [],
    descriptionString: ""
  };
}
export const MsgRelayPayment = {
  typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
  encode(message: MsgRelayPayment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.relays) {
      RelaySession.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.descriptionString !== "") {
      writer.uint32(34).string(message.descriptionString);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayPayment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.relays.push(RelaySession.decode(reader, reader.uint32()));
          break;
        case 4:
          message.descriptionString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRelayPayment>): MsgRelayPayment {
    const message = createBaseMsgRelayPayment();
    message.creator = object.creator ?? "";
    message.relays = object.relays?.map(e => RelaySession.fromPartial(e)) || [];
    message.descriptionString = object.descriptionString ?? "";
    return message;
  },
  fromAmino(object: MsgRelayPaymentAmino): MsgRelayPayment {
    return {
      creator: object.creator,
      relays: Array.isArray(object?.relays) ? object.relays.map((e: any) => RelaySession.fromAmino(e)) : [],
      descriptionString: object.descriptionString
    };
  },
  toAmino(message: MsgRelayPayment): MsgRelayPaymentAmino {
    const obj: any = {};
    obj.creator = message.creator;
    if (message.relays) {
      obj.relays = message.relays.map(e => e ? RelaySession.toAmino(e) : undefined);
    } else {
      obj.relays = [];
    }
    obj.descriptionString = message.descriptionString;
    return obj;
  },
  fromAminoMsg(object: MsgRelayPaymentAminoMsg): MsgRelayPayment {
    return MsgRelayPayment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayPaymentProtoMsg): MsgRelayPayment {
    return MsgRelayPayment.decode(message.value);
  },
  toProto(message: MsgRelayPayment): Uint8Array {
    return MsgRelayPayment.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayPayment): MsgRelayPaymentProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
      value: MsgRelayPayment.encode(message).finish()
    };
  }
};
function createBaseMsgRelayPaymentResponse(): MsgRelayPaymentResponse {
  return {};
}
export const MsgRelayPaymentResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgRelayPaymentResponse",
  encode(_: MsgRelayPaymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayPaymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPaymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgRelayPaymentResponse>): MsgRelayPaymentResponse {
    const message = createBaseMsgRelayPaymentResponse();
    return message;
  },
  fromAmino(_: MsgRelayPaymentResponseAmino): MsgRelayPaymentResponse {
    return {};
  },
  toAmino(_: MsgRelayPaymentResponse): MsgRelayPaymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayPaymentResponseAminoMsg): MsgRelayPaymentResponse {
    return MsgRelayPaymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayPaymentResponseProtoMsg): MsgRelayPaymentResponse {
    return MsgRelayPaymentResponse.decode(message.value);
  },
  toProto(message: MsgRelayPaymentResponse): Uint8Array {
    return MsgRelayPaymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayPaymentResponse): MsgRelayPaymentResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgRelayPaymentResponse",
      value: MsgRelayPaymentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFreezeProvider(): MsgFreezeProvider {
  return {
    creator: "",
    chainIds: [],
    reason: ""
  };
}
export const MsgFreezeProvider = {
  typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
  encode(message: MsgFreezeProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.chainIds) {
      writer.uint32(18).string(v!);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFreezeProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainIds.push(reader.string());
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgFreezeProvider>): MsgFreezeProvider {
    const message = createBaseMsgFreezeProvider();
    message.creator = object.creator ?? "";
    message.chainIds = object.chainIds?.map(e => e) || [];
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgFreezeProviderAmino): MsgFreezeProvider {
    return {
      creator: object.creator,
      chainIds: Array.isArray(object?.chainIds) ? object.chainIds.map((e: any) => e) : [],
      reason: object.reason
    };
  },
  toAmino(message: MsgFreezeProvider): MsgFreezeProviderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    if (message.chainIds) {
      obj.chainIds = message.chainIds.map(e => e);
    } else {
      obj.chainIds = [];
    }
    obj.reason = message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgFreezeProviderAminoMsg): MsgFreezeProvider {
    return MsgFreezeProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFreezeProviderProtoMsg): MsgFreezeProvider {
    return MsgFreezeProvider.decode(message.value);
  },
  toProto(message: MsgFreezeProvider): Uint8Array {
    return MsgFreezeProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgFreezeProvider): MsgFreezeProviderProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
      value: MsgFreezeProvider.encode(message).finish()
    };
  }
};
function createBaseMsgFreezeProviderResponse(): MsgFreezeProviderResponse {
  return {};
}
export const MsgFreezeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgFreezeProviderResponse",
  encode(_: MsgFreezeProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFreezeProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgFreezeProviderResponse>): MsgFreezeProviderResponse {
    const message = createBaseMsgFreezeProviderResponse();
    return message;
  },
  fromAmino(_: MsgFreezeProviderResponseAmino): MsgFreezeProviderResponse {
    return {};
  },
  toAmino(_: MsgFreezeProviderResponse): MsgFreezeProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFreezeProviderResponseAminoMsg): MsgFreezeProviderResponse {
    return MsgFreezeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFreezeProviderResponseProtoMsg): MsgFreezeProviderResponse {
    return MsgFreezeProviderResponse.decode(message.value);
  },
  toProto(message: MsgFreezeProviderResponse): Uint8Array {
    return MsgFreezeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFreezeProviderResponse): MsgFreezeProviderResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgFreezeProviderResponse",
      value: MsgFreezeProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnfreezeProvider(): MsgUnfreezeProvider {
  return {
    creator: "",
    chainIds: []
  };
}
export const MsgUnfreezeProvider = {
  typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
  encode(message: MsgUnfreezeProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.chainIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnfreezeProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfreezeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnfreezeProvider>): MsgUnfreezeProvider {
    const message = createBaseMsgUnfreezeProvider();
    message.creator = object.creator ?? "";
    message.chainIds = object.chainIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUnfreezeProviderAmino): MsgUnfreezeProvider {
    return {
      creator: object.creator,
      chainIds: Array.isArray(object?.chainIds) ? object.chainIds.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgUnfreezeProvider): MsgUnfreezeProviderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    if (message.chainIds) {
      obj.chainIds = message.chainIds.map(e => e);
    } else {
      obj.chainIds = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgUnfreezeProviderAminoMsg): MsgUnfreezeProvider {
    return MsgUnfreezeProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnfreezeProviderProtoMsg): MsgUnfreezeProvider {
    return MsgUnfreezeProvider.decode(message.value);
  },
  toProto(message: MsgUnfreezeProvider): Uint8Array {
    return MsgUnfreezeProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgUnfreezeProvider): MsgUnfreezeProviderProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
      value: MsgUnfreezeProvider.encode(message).finish()
    };
  }
};
function createBaseMsgUnfreezeProviderResponse(): MsgUnfreezeProviderResponse {
  return {};
}
export const MsgUnfreezeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProviderResponse",
  encode(_: MsgUnfreezeProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnfreezeProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfreezeProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUnfreezeProviderResponse>): MsgUnfreezeProviderResponse {
    const message = createBaseMsgUnfreezeProviderResponse();
    return message;
  },
  fromAmino(_: MsgUnfreezeProviderResponseAmino): MsgUnfreezeProviderResponse {
    return {};
  },
  toAmino(_: MsgUnfreezeProviderResponse): MsgUnfreezeProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnfreezeProviderResponseAminoMsg): MsgUnfreezeProviderResponse {
    return MsgUnfreezeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnfreezeProviderResponseProtoMsg): MsgUnfreezeProviderResponse {
    return MsgUnfreezeProviderResponse.decode(message.value);
  },
  toProto(message: MsgUnfreezeProviderResponse): Uint8Array {
    return MsgUnfreezeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnfreezeProviderResponse): MsgUnfreezeProviderResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProviderResponse",
      value: MsgUnfreezeProviderResponse.encode(message).finish()
    };
  }
};