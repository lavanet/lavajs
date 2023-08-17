import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */

/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */

/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */

/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */

/** AllowedMsgAllowance creates allowance only for specified message types. */

/** AllowedMsgAllowance creates allowance only for specified message types. */

/** Grant is stored in the KVStore to record a grant with full context */

/** Grant is stored in the KVStore to record a grant with full context */

function createBaseBasicAllowance() {
  return {
    spendLimit: [],
    expiration: new Date()
  };
}
export const BasicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.spendLimit) {
      Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$spendLimit, _object$expiration;
    const message = createBaseBasicAllowance();
    message.spendLimit = ((_object$spendLimit = object.spendLimit) === null || _object$spendLimit === void 0 ? void 0 : _object$spendLimit.map(e => Coin.fromPartial(e))) || [];
    message.expiration = (_object$expiration = object.expiration) !== null && _object$expiration !== void 0 ? _object$expiration : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      spendLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.spend_limit) ? object.spend_limit.map(e => Coin.fromAmino(e)) : [],
      expiration: object.expiration
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.spend_limit = [];
    }
    obj.expiration = message.expiration;
    return obj;
  },
  fromAminoMsg(object) {
    return BasicAllowance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/BasicAllowance",
      value: BasicAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return BasicAllowance.decode(message.value);
  },
  toProto(message) {
    return BasicAllowance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
      value: BasicAllowance.encode(message).finish()
    };
  }
};
function createBasePeriodicAllowance() {
  return {
    basic: BasicAllowance.fromPartial({}),
    period: Duration.fromPartial({}),
    periodSpendLimit: [],
    periodCanSpend: [],
    periodReset: new Date()
  };
}
export const PeriodicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
  encode(message, writer = BinaryWriter.create()) {
    if (message.basic !== undefined) {
      BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.periodSpendLimit) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periodCanSpend) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.periodReset !== undefined) {
      Timestamp.encode(toTimestamp(message.periodReset), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basic = BasicAllowance.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.periodSpendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.periodCanSpend.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.periodReset = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$periodSpendLi, _object$periodCanSpen, _object$periodReset;
    const message = createBasePeriodicAllowance();
    message.basic = object.basic !== undefined && object.basic !== null ? BasicAllowance.fromPartial(object.basic) : undefined;
    message.period = object.period !== undefined && object.period !== null ? Duration.fromPartial(object.period) : undefined;
    message.periodSpendLimit = ((_object$periodSpendLi = object.periodSpendLimit) === null || _object$periodSpendLi === void 0 ? void 0 : _object$periodSpendLi.map(e => Coin.fromPartial(e))) || [];
    message.periodCanSpend = ((_object$periodCanSpen = object.periodCanSpend) === null || _object$periodCanSpen === void 0 ? void 0 : _object$periodCanSpen.map(e => Coin.fromPartial(e))) || [];
    message.periodReset = (_object$periodReset = object.periodReset) !== null && _object$periodReset !== void 0 ? _object$periodReset : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      basic: object !== null && object !== void 0 && object.basic ? BasicAllowance.fromAmino(object.basic) : undefined,
      period: object !== null && object !== void 0 && object.period ? Duration.fromAmino(object.period) : undefined,
      periodSpendLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.period_spend_limit) ? object.period_spend_limit.map(e => Coin.fromAmino(e)) : [],
      periodCanSpend: Array.isArray(object === null || object === void 0 ? void 0 : object.period_can_spend) ? object.period_can_spend.map(e => Coin.fromAmino(e)) : [],
      periodReset: object.period_reset
    };
  },
  toAmino(message) {
    const obj = {};
    obj.basic = message.basic ? BasicAllowance.toAmino(message.basic) : undefined;
    obj.period = message.period ? Duration.toAmino(message.period) : undefined;
    if (message.periodSpendLimit) {
      obj.period_spend_limit = message.periodSpendLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.period_spend_limit = [];
    }
    if (message.periodCanSpend) {
      obj.period_can_spend = message.periodCanSpend.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.period_can_spend = [];
    }
    obj.period_reset = message.periodReset;
    return obj;
  },
  fromAminoMsg(object) {
    return PeriodicAllowance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PeriodicAllowance",
      value: PeriodicAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PeriodicAllowance.decode(message.value);
  },
  toProto(message) {
    return PeriodicAllowance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
      value: PeriodicAllowance.encode(message).finish()
    };
  }
};
function createBaseAllowedMsgAllowance() {
  return {
    allowance: Any.fromPartial({}),
    allowedMessages: []
  };
}
export const AllowedMsgAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
  encode(message, writer = BinaryWriter.create()) {
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowedMessages) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedMsgAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowedMessages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$allowedMessag;
    const message = createBaseAllowedMsgAllowance();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    message.allowedMessages = ((_object$allowedMessag = object.allowedMessages) === null || _object$allowedMessag === void 0 ? void 0 : _object$allowedMessag.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      allowance: object !== null && object !== void 0 && object.allowance ? Any.fromAmino(object.allowance) : undefined,
      allowedMessages: Array.isArray(object === null || object === void 0 ? void 0 : object.allowed_messages) ? object.allowed_messages.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.allowance = message.allowance ? Any.toAmino(message.allowance) : undefined;
    if (message.allowedMessages) {
      obj.allowed_messages = message.allowedMessages.map(e => e);
    } else {
      obj.allowed_messages = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return AllowedMsgAllowance.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/AllowedMsgAllowance",
      value: AllowedMsgAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return AllowedMsgAllowance.decode(message.value);
  },
  toProto(message) {
    return AllowedMsgAllowance.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
      value: AllowedMsgAllowance.encode(message).finish()
    };
  }
};
function createBaseGrant() {
  return {
    granter: "",
    grantee: "",
    allowance: Any.fromPartial({})
  };
}
export const Grant = {
  typeUrl: "/cosmos.feegrant.v1beta1.Grant",
  encode(message, writer = BinaryWriter.create()) {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$granter, _object$grantee;
    const message = createBaseGrant();
    message.granter = (_object$granter = object.granter) !== null && _object$granter !== void 0 ? _object$granter : "";
    message.grantee = (_object$grantee = object.grantee) !== null && _object$grantee !== void 0 ? _object$grantee : "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      granter: object.granter,
      grantee: object.grantee,
      allowance: object !== null && object !== void 0 && object.allowance ? Any.fromAmino(object.allowance) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.allowance = message.allowance ? Any.toAmino(message.allowance) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Grant.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Grant",
      value: Grant.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Grant.decode(message.value);
  },
  toProto(message) {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  }
};