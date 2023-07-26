import { Coin } from "../cosmos/base/v1beta1/coin";
import { Endpoint } from "../epochstorage/endpoint";
import { RelaySession } from "./relay";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgStakeProvider() {
  return {
    creator: "",
    chainID: "",
    amount: undefined,
    endpoints: [],
    geolocation: Long.UZERO,
    moniker: ""
  };
}
export const MsgStakeProvider = {
  encode(message, writer = _m0.Writer.create()) {
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
    if (!message.geolocation.isZero()) {
      writer.uint32(40).uint64(message.geolocation);
    }
    if (message.moniker !== "") {
      writer.uint32(50).string(message.moniker);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? Long.fromValue(object.geolocation) : Long.UZERO;
    message.moniker = (_object$moniker = object.moniker) !== null && _object$moniker !== void 0 ? _object$moniker : "";
    return message;
  }
};
function createBaseMsgStakeProviderResponse() {
  return {};
}
export const MsgStakeProviderResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUnstakeProvider() {
  return {
    creator: "",
    chainID: ""
  };
}
export const MsgUnstakeProvider = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUnstakeProviderResponse() {
  return {};
}
export const MsgUnstakeProviderResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgRelayPaymentResponse() {
  return {};
}
export const MsgRelayPaymentResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgFreezeProviderResponse() {
  return {};
}
export const MsgFreezeProviderResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUnfreezeProvider() {
  return {
    creator: "",
    chainIds: []
  };
}
export const MsgUnfreezeProvider = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.chainIds) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUnfreezeProviderResponse() {
  return {};
}
export const MsgUnfreezeProviderResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};