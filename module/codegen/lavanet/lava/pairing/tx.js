import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Endpoint } from "../epochstorage/endpoint";
import { RelaySession } from "./relay";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgStakeProvider() {
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
  encode(message, writer = BinaryWriter.create()) {
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
      Endpoint.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.geolocation !== BigInt(0)) {
      writer.uint32(40).uint64(message.geolocation);
    }
    if (message.moniker !== "") {
      writer.uint32(50).string(message.moniker);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$creator, _object$chainID, _object$endpoints, _object$moniker;
    const message = createBaseMsgStakeProvider();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.chainID = (_object$chainID = object.chainID) !== null && _object$chainID !== void 0 ? _object$chainID : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.endpoints = ((_object$endpoints = object.endpoints) === null || _object$endpoints === void 0 ? void 0 : _object$endpoints.map(e => Endpoint.fromPartial(e))) || [];
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? BigInt(object.geolocation.toString()) : BigInt(0);
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    return message;
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      chainID: object.chainID,
      amount: object !== null && object !== void 0 && object.amount ? Coin.fromAmino(object.amount) : undefined,
      endpoints: Array.isArray(object === null || object === void 0 ? void 0 : object.endpoints) ? object.endpoints.map(e => Endpoint.fromAmino(e)) : [],
      geolocation: BigInt(object.geolocation),
      moniker: object.moniker
    };
  },
  toAmino(message) {
    const obj = {};
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
  fromAminoMsg(object) {
    return MsgStakeProvider.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgStakeProvider.decode(message.value);
  },
  toProto(message) {
    return MsgStakeProvider.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
      value: MsgStakeProvider.encode(message).finish()
    };
  }
};
function createBaseMsgStakeProviderResponse() {
  return {};
}
export const MsgStakeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgStakeProviderResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromPartial(_) {
    const message = createBaseMsgStakeProviderResponse();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgStakeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgStakeProviderResponse.decode(message.value);
  },
  toProto(message) {
    return MsgStakeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgStakeProviderResponse",
      value: MsgStakeProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeProvider() {
  return {
    creator: "",
    chainID: ""
  };
}
export const MsgUnstakeProvider = {
  typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$creator2, _object$chainID2;
    const message = createBaseMsgUnstakeProvider();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.chainID = (_object$chainID2 = object.chainID) !== null && _object$chainID2 !== void 0 ? _object$chainID2 : "";
    return message;
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      chainID: object.chainID
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    obj.chainID = message.chainID;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUnstakeProvider.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUnstakeProvider.decode(message.value);
  },
  toProto(message) {
    return MsgUnstakeProvider.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
      value: MsgUnstakeProvider.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeProviderResponse() {
  return {};
}
export const MsgUnstakeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgUnstakeProviderResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromPartial(_) {
    const message = createBaseMsgUnstakeProviderResponse();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUnstakeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUnstakeProviderResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUnstakeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnstakeProviderResponse",
      value: MsgUnstakeProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRelayPayment() {
  return {
    creator: "",
    relays: [],
    descriptionString: ""
  };
}
export const MsgRelayPayment = {
  typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.relays) {
      RelaySession.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.descriptionString !== "") {
      writer.uint32(34).string(message.descriptionString);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$creator3, _object$relays, _object$descriptionSt;
    const message = createBaseMsgRelayPayment();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.relays = ((_object$relays = object.relays) === null || _object$relays === void 0 ? void 0 : _object$relays.map(e => RelaySession.fromPartial(e))) || [];
    message.descriptionString = (_object$descriptionSt = object.descriptionString) !== null && _object$descriptionSt !== void 0 ? _object$descriptionSt : "";
    return message;
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      relays: Array.isArray(object === null || object === void 0 ? void 0 : object.relays) ? object.relays.map(e => RelaySession.fromAmino(e)) : [],
      descriptionString: object.descriptionString
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    if (message.relays) {
      obj.relays = message.relays.map(e => e ? RelaySession.toAmino(e) : undefined);
    } else {
      obj.relays = [];
    }
    obj.descriptionString = message.descriptionString;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRelayPayment.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRelayPayment.decode(message.value);
  },
  toProto(message) {
    return MsgRelayPayment.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
      value: MsgRelayPayment.encode(message).finish()
    };
  }
};
function createBaseMsgRelayPaymentResponse() {
  return {};
}
export const MsgRelayPaymentResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgRelayPaymentResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromPartial(_) {
    const message = createBaseMsgRelayPaymentResponse();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgRelayPaymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgRelayPaymentResponse.decode(message.value);
  },
  toProto(message) {
    return MsgRelayPaymentResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgRelayPaymentResponse",
      value: MsgRelayPaymentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFreezeProvider() {
  return {
    creator: "",
    chainIds: [],
    reason: ""
  };
}
export const MsgFreezeProvider = {
  typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.chainIds) {
      writer.uint32(18).string(v);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$creator4, _object$chainIds, _object$reason;
    const message = createBaseMsgFreezeProvider();
    message.creator = (_object$creator4 = object.creator) !== null && _object$creator4 !== void 0 ? _object$creator4 : "";
    message.chainIds = ((_object$chainIds = object.chainIds) === null || _object$chainIds === void 0 ? void 0 : _object$chainIds.map(e => e)) || [];
    message.reason = (_object$reason = object.reason) !== null && _object$reason !== void 0 ? _object$reason : "";
    return message;
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      chainIds: Array.isArray(object === null || object === void 0 ? void 0 : object.chainIds) ? object.chainIds.map(e => e) : [],
      reason: object.reason
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    if (message.chainIds) {
      obj.chainIds = message.chainIds.map(e => e);
    } else {
      obj.chainIds = [];
    }
    obj.reason = message.reason;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgFreezeProvider.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgFreezeProvider.decode(message.value);
  },
  toProto(message) {
    return MsgFreezeProvider.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
      value: MsgFreezeProvider.encode(message).finish()
    };
  }
};
function createBaseMsgFreezeProviderResponse() {
  return {};
}
export const MsgFreezeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgFreezeProviderResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromPartial(_) {
    const message = createBaseMsgFreezeProviderResponse();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgFreezeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgFreezeProviderResponse.decode(message.value);
  },
  toProto(message) {
    return MsgFreezeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgFreezeProviderResponse",
      value: MsgFreezeProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnfreezeProvider() {
  return {
    creator: "",
    chainIds: []
  };
}
export const MsgUnfreezeProvider = {
  typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.chainIds) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$creator5, _object$chainIds2;
    const message = createBaseMsgUnfreezeProvider();
    message.creator = (_object$creator5 = object.creator) !== null && _object$creator5 !== void 0 ? _object$creator5 : "";
    message.chainIds = ((_object$chainIds2 = object.chainIds) === null || _object$chainIds2 === void 0 ? void 0 : _object$chainIds2.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      chainIds: Array.isArray(object === null || object === void 0 ? void 0 : object.chainIds) ? object.chainIds.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    if (message.chainIds) {
      obj.chainIds = message.chainIds.map(e => e);
    } else {
      obj.chainIds = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUnfreezeProvider.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUnfreezeProvider.decode(message.value);
  },
  toProto(message) {
    return MsgUnfreezeProvider.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
      value: MsgUnfreezeProvider.encode(message).finish()
    };
  }
};
function createBaseMsgUnfreezeProviderResponse() {
  return {};
}
export const MsgUnfreezeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProviderResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
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
  fromPartial(_) {
    const message = createBaseMsgUnfreezeProviderResponse();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUnfreezeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgUnfreezeProviderResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUnfreezeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProviderResponse",
      value: MsgUnfreezeProviderResponse.encode(message).finish()
    };
  }
};