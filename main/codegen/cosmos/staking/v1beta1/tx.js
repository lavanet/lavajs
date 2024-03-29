"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUndelegateResponse = exports.MsgUndelegate = exports.MsgEditValidatorResponse = exports.MsgEditValidator = exports.MsgDelegateResponse = exports.MsgDelegate = exports.MsgCreateValidatorResponse = exports.MsgCreateValidator = exports.MsgBeginRedelegateResponse = exports.MsgBeginRedelegate = void 0;
var _staking = require("./staking");
var _any = require("../../../google/protobuf/any");
var _coin = require("../../base/v1beta1/coin");
var _timestamp = require("../../../google/protobuf/timestamp");
var _binary = require("../../../binary");
var _encoding = require("@cosmjs/encoding");
var _amino = require("@cosmjs/amino");
var _math = require("@cosmjs/math");
var _helpers = require("../../../helpers");
/** MsgCreateValidator defines a SDK message for creating a new validator. */

/** MsgCreateValidator defines a SDK message for creating a new validator. */

/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */

/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */

/** MsgEditValidator defines a SDK message for editing an existing validator. */

/** MsgEditValidator defines a SDK message for editing an existing validator. */

/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */

/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */

/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */

/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */

/** MsgDelegateResponse defines the Msg/Delegate response type. */

/** MsgDelegateResponse defines the Msg/Delegate response type. */

/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */

/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */

/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */

/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */

/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */

/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */

/** MsgUndelegateResponse defines the Msg/Undelegate response type. */

/** MsgUndelegateResponse defines the Msg/Undelegate response type. */

function createBaseMsgCreateValidator() {
  return {
    description: _staking.Description.fromPartial({}),
    commission: _staking.CommissionRates.fromPartial({}),
    minSelfDelegation: "",
    delegatorAddress: "",
    validatorAddress: "",
    pubkey: _any.Any.fromPartial({}),
    value: _coin.Coin.fromPartial({})
  };
}
var MsgCreateValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.description !== undefined) {
      _staking.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      _staking.CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(26).string(message.minSelfDelegation);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(34).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }
    if (message.pubkey !== undefined) {
      _any.Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== undefined) {
      _coin.Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = _staking.Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.commission = _staking.CommissionRates.decode(reader, reader.uint32());
          break;
        case 3:
          message.minSelfDelegation = reader.string();
          break;
        case 4:
          message.delegatorAddress = reader.string();
          break;
        case 5:
          message.validatorAddress = reader.string();
          break;
        case 6:
          message.pubkey = _any.Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.value = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$minSelfDelega, _object$delegatorAddr, _object$validatorAddr;
    var message = createBaseMsgCreateValidator();
    message.description = object.description !== undefined && object.description !== null ? _staking.Description.fromPartial(object.description) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? _staking.CommissionRates.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = (_object$minSelfDelega = object.minSelfDelegation) !== null && _object$minSelfDelega !== void 0 ? _object$minSelfDelega : "";
    message.delegatorAddress = (_object$delegatorAddr = object.delegatorAddress) !== null && _object$delegatorAddr !== void 0 ? _object$delegatorAddr : "";
    message.validatorAddress = (_object$validatorAddr = object.validatorAddress) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? _any.Any.fromPartial(object.pubkey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? _coin.Coin.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      description: object !== null && object !== void 0 && object.description ? _staking.Description.fromAmino(object.description) : undefined,
      commission: object !== null && object !== void 0 && object.commission ? _staking.CommissionRates.fromAmino(object.commission) : undefined,
      minSelfDelegation: object.min_self_delegation,
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      pubkey: (0, _amino.encodeBech32Pubkey)({
        type: "tendermint/PubKeySecp256k1",
        value: (0, _encoding.toBase64)(object.pubkey.value)
      }, "cosmos"),
      value: object !== null && object !== void 0 && object.value ? _coin.Coin.fromAmino(object.value) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.description = message.description ? _staking.Description.toAmino(message.description) : undefined;
    obj.commission = message.commission ? _staking.CommissionRates.toAmino(message.commission) : undefined;
    obj.min_self_delegation = message.minSelfDelegation;
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.pubkey = message.pubkey ? {
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: (0, _encoding.fromBase64)((0, _amino.decodeBech32Pubkey)(message.pubkey).value)
    } : undefined;
    obj.value = message.value ? _coin.Coin.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgCreateValidator.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateValidator",
      value: MsgCreateValidator.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgCreateValidator.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgCreateValidator.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
      value: MsgCreateValidator.encode(message).finish()
    };
  }
};
exports.MsgCreateValidator = MsgCreateValidator;
function createBaseMsgCreateValidatorResponse() {
  return {};
}
var MsgCreateValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateValidatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgCreateValidatorResponse();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgCreateValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateValidatorResponse",
      value: MsgCreateValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgCreateValidatorResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgCreateValidatorResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
      value: MsgCreateValidatorResponse.encode(message).finish()
    };
  }
};
exports.MsgCreateValidatorResponse = MsgCreateValidatorResponse;
function createBaseMsgEditValidator() {
  return {
    description: _staking.Description.fromPartial({}),
    validatorAddress: "",
    commissionRate: "",
    minSelfDelegation: ""
  };
}
var MsgEditValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.description !== undefined) {
      _staking.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.commissionRate !== "") {
      writer.uint32(26).string(_math.Decimal.fromUserInput(message.commissionRate, 18).atomics);
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(34).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgEditValidator();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = _staking.Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.commissionRate = _math.Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr2, _object$commissionRat, _object$minSelfDelega2;
    var message = createBaseMsgEditValidator();
    message.description = object.description !== undefined && object.description !== null ? _staking.Description.fromPartial(object.description) : undefined;
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    message.commissionRate = (_object$commissionRat = object.commissionRate) !== null && _object$commissionRat !== void 0 ? _object$commissionRat : "";
    message.minSelfDelegation = (_object$minSelfDelega2 = object.minSelfDelegation) !== null && _object$minSelfDelega2 !== void 0 ? _object$minSelfDelega2 : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      description: object !== null && object !== void 0 && object.description ? _staking.Description.fromAmino(object.description) : undefined,
      validatorAddress: object.validator_address,
      commissionRate: object.commission_rate,
      minSelfDelegation: object.min_self_delegation
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.description = message.description ? _staking.Description.toAmino(message.description) : undefined;
    obj.validator_address = message.validatorAddress;
    obj.commission_rate = message.commissionRate;
    obj.min_self_delegation = message.minSelfDelegation;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgEditValidator.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgEditValidator",
      value: MsgEditValidator.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgEditValidator.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgEditValidator.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
      value: MsgEditValidator.encode(message).finish()
    };
  }
};
exports.MsgEditValidator = MsgEditValidator;
function createBaseMsgEditValidatorResponse() {
  return {};
}
var MsgEditValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgEditValidatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgEditValidatorResponse();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgEditValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgEditValidatorResponse",
      value: MsgEditValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgEditValidatorResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgEditValidatorResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
      value: MsgEditValidatorResponse.encode(message).finish()
    };
  }
};
exports.MsgEditValidatorResponse = MsgEditValidatorResponse;
function createBaseMsgDelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: _coin.Coin.fromPartial({})
  };
}
var MsgDelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      _coin.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorAddr3;
    var message = createBaseMsgDelegate();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      amount: object !== null && object !== void 0 && object.amount ? _coin.Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.amount = message.amount ? _coin.Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgDelegate.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDelegate",
      value: MsgDelegate.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgDelegate.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgDelegate.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.encode(message).finish()
    };
  }
};
exports.MsgDelegate = MsgDelegate;
function createBaseMsgDelegateResponse() {
  return {};
}
var MsgDelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelegateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgDelegateResponse();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgDelegateResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDelegateResponse",
      value: MsgDelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgDelegateResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgDelegateResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
      value: MsgDelegateResponse.encode(message).finish()
    };
  }
};
exports.MsgDelegateResponse = MsgDelegateResponse;
function createBaseMsgBeginRedelegate() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: _coin.Coin.fromPartial({})
  };
}
var MsgBeginRedelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    if (message.amount !== undefined) {
      _coin.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBeginRedelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.amount = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr3, _object$validatorSrcA, _object$validatorDstA;
    var message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    message.validatorSrcAddress = (_object$validatorSrcA = object.validatorSrcAddress) !== null && _object$validatorSrcA !== void 0 ? _object$validatorSrcA : "";
    message.validatorDstAddress = (_object$validatorDstA = object.validatorDstAddress) !== null && _object$validatorDstA !== void 0 ? _object$validatorDstA : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address,
      validatorSrcAddress: object.validator_src_address,
      validatorDstAddress: object.validator_dst_address,
      amount: object !== null && object !== void 0 && object.amount ? _coin.Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress;
    obj.amount = message.amount ? _coin.Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgBeginRedelegate.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgBeginRedelegate",
      value: MsgBeginRedelegate.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgBeginRedelegate.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgBeginRedelegate.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value: MsgBeginRedelegate.encode(message).finish()
    };
  }
};
exports.MsgBeginRedelegate = MsgBeginRedelegate;
function createBaseMsgBeginRedelegateResponse() {
  return {
    completionTime: new Date()
  };
}
var MsgBeginRedelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.completionTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBeginRedelegateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$completionTim;
    var message = createBaseMsgBeginRedelegateResponse();
    message.completionTime = (_object$completionTim = object.completionTime) !== null && _object$completionTim !== void 0 ? _object$completionTim : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      completionTime: object.completion_time
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.completion_time = message.completionTime;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgBeginRedelegateResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgBeginRedelegateResponse",
      value: MsgBeginRedelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgBeginRedelegateResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgBeginRedelegateResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
      value: MsgBeginRedelegateResponse.encode(message).finish()
    };
  }
};
exports.MsgBeginRedelegateResponse = MsgBeginRedelegateResponse;
function createBaseMsgUndelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: _coin.Coin.fromPartial({})
  };
}
var MsgUndelegate = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      _coin.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUndelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr4, _object$validatorAddr4;
    var message = createBaseMsgUndelegate();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    message.validatorAddress = (_object$validatorAddr4 = object.validatorAddress) !== null && _object$validatorAddr4 !== void 0 ? _object$validatorAddr4 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      amount: object !== null && object !== void 0 && object.amount ? _coin.Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.amount = message.amount ? _coin.Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgUndelegate.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUndelegate",
      value: MsgUndelegate.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgUndelegate.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgUndelegate.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: MsgUndelegate.encode(message).finish()
    };
  }
};
exports.MsgUndelegate = MsgUndelegate;
function createBaseMsgUndelegateResponse() {
  return {
    completionTime: new Date()
  };
}
var MsgUndelegateResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.completionTime !== undefined) {
      _timestamp.Timestamp.encode((0, _helpers.toTimestamp)(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = (0, _helpers.fromTimestamp)(_timestamp.Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$completionTim2;
    var message = createBaseMsgUndelegateResponse();
    message.completionTime = (_object$completionTim2 = object.completionTime) !== null && _object$completionTim2 !== void 0 ? _object$completionTim2 : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      completionTime: object.completion_time
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.completion_time = message.completionTime;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgUndelegateResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUndelegateResponse",
      value: MsgUndelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgUndelegateResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgUndelegateResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
      value: MsgUndelegateResponse.encode(message).finish()
    };
  }
};
exports.MsgUndelegateResponse = MsgUndelegateResponse;