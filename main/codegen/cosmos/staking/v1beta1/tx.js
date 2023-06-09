"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUndelegateResponse = exports.MsgUndelegate = exports.MsgEditValidatorResponse = exports.MsgEditValidator = exports.MsgDelegateResponse = exports.MsgDelegate = exports.MsgCreateValidatorResponse = exports.MsgCreateValidator = exports.MsgBeginRedelegateResponse = exports.MsgBeginRedelegate = void 0;
var _staking = require("./staking");
var _any = require("../../../google/protobuf/any");
var _coin = require("../../base/v1beta1/coin");
var _timestamp = require("../../../google/protobuf/timestamp");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    description: undefined,
    commission: undefined,
    minSelfDelegation: "",
    delegatorAddress: "",
    validatorAddress: "",
    pubkey: undefined,
    value: undefined
  };
}
var MsgCreateValidator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      description: (0, _helpers.isSet)(object.description) ? _staking.Description.fromJSON(object.description) : undefined,
      commission: (0, _helpers.isSet)(object.commission) ? _staking.CommissionRates.fromJSON(object.commission) : undefined,
      minSelfDelegation: (0, _helpers.isSet)(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
      delegatorAddress: (0, _helpers.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: (0, _helpers.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
      pubkey: (0, _helpers.isSet)(object.pubkey) ? _any.Any.fromJSON(object.pubkey) : undefined,
      value: (0, _helpers.isSet)(object.value) ? _coin.Coin.fromJSON(object.value) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.description !== undefined && (obj.description = message.description ? _staking.Description.toJSON(message.description) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? _staking.CommissionRates.toJSON(message.commission) : undefined);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? _any.Any.toJSON(message.pubkey) : undefined);
    message.value !== undefined && (obj.value = message.value ? _coin.Coin.toJSON(message.value) : undefined);
    return obj;
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
  }
};
exports.MsgCreateValidator = MsgCreateValidator;
function createBaseMsgCreateValidatorResponse() {
  return {};
}
var MsgCreateValidatorResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgCreateValidatorResponse();
    return message;
  }
};
exports.MsgCreateValidatorResponse = MsgCreateValidatorResponse;
function createBaseMsgEditValidator() {
  return {
    description: undefined,
    validatorAddress: "",
    commissionRate: "",
    minSelfDelegation: ""
  };
}
var MsgEditValidator = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.description !== undefined) {
      _staking.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.commissionRate !== "") {
      writer.uint32(26).string(message.commissionRate);
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(34).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.commissionRate = reader.string();
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
  fromJSON: function fromJSON(object) {
    return {
      description: (0, _helpers.isSet)(object.description) ? _staking.Description.fromJSON(object.description) : undefined,
      validatorAddress: (0, _helpers.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
      commissionRate: (0, _helpers.isSet)(object.commissionRate) ? String(object.commissionRate) : "",
      minSelfDelegation: (0, _helpers.isSet)(object.minSelfDelegation) ? String(object.minSelfDelegation) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.description !== undefined && (obj.description = message.description ? _staking.Description.toJSON(message.description) : undefined);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$validatorAddr2, _object$commissionRat, _object$minSelfDelega2;
    var message = createBaseMsgEditValidator();
    message.description = object.description !== undefined && object.description !== null ? _staking.Description.fromPartial(object.description) : undefined;
    message.validatorAddress = (_object$validatorAddr2 = object.validatorAddress) !== null && _object$validatorAddr2 !== void 0 ? _object$validatorAddr2 : "";
    message.commissionRate = (_object$commissionRat = object.commissionRate) !== null && _object$commissionRat !== void 0 ? _object$commissionRat : "";
    message.minSelfDelegation = (_object$minSelfDelega2 = object.minSelfDelegation) !== null && _object$minSelfDelega2 !== void 0 ? _object$minSelfDelega2 : "";
    return message;
  }
};
exports.MsgEditValidator = MsgEditValidator;
function createBaseMsgEditValidatorResponse() {
  return {};
}
var MsgEditValidatorResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgEditValidatorResponse();
    return message;
  }
};
exports.MsgEditValidatorResponse = MsgEditValidatorResponse;
function createBaseMsgDelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined
  };
}
var MsgDelegate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      delegatorAddress: (0, _helpers.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: (0, _helpers.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: (0, _helpers.isSet)(object.amount) ? _coin.Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? _coin.Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr2, _object$validatorAddr3;
    var message = createBaseMsgDelegate();
    message.delegatorAddress = (_object$delegatorAddr2 = object.delegatorAddress) !== null && _object$delegatorAddr2 !== void 0 ? _object$delegatorAddr2 : "";
    message.validatorAddress = (_object$validatorAddr3 = object.validatorAddress) !== null && _object$validatorAddr3 !== void 0 ? _object$validatorAddr3 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
exports.MsgDelegate = MsgDelegate;
function createBaseMsgDelegateResponse() {
  return {};
}
var MsgDelegateResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgDelegateResponse();
    return message;
  }
};
exports.MsgDelegateResponse = MsgDelegateResponse;
function createBaseMsgBeginRedelegate() {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    amount: undefined
  };
}
var MsgBeginRedelegate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      delegatorAddress: (0, _helpers.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorSrcAddress: (0, _helpers.isSet)(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
      validatorDstAddress: (0, _helpers.isSet)(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
      amount: (0, _helpers.isSet)(object.amount) ? _coin.Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    message.amount !== undefined && (obj.amount = message.amount ? _coin.Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr3, _object$validatorSrcA, _object$validatorDstA;
    var message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = (_object$delegatorAddr3 = object.delegatorAddress) !== null && _object$delegatorAddr3 !== void 0 ? _object$delegatorAddr3 : "";
    message.validatorSrcAddress = (_object$validatorSrcA = object.validatorSrcAddress) !== null && _object$validatorSrcA !== void 0 ? _object$validatorSrcA : "";
    message.validatorDstAddress = (_object$validatorDstA = object.validatorDstAddress) !== null && _object$validatorDstA !== void 0 ? _object$validatorDstA : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
exports.MsgBeginRedelegate = MsgBeginRedelegate;
function createBaseMsgBeginRedelegateResponse() {
  return {
    completionTime: undefined
  };
}
var MsgBeginRedelegateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.completionTime !== undefined) {
      _timestamp.Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBeginRedelegateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      completionTime: (0, _helpers.isSet)(object.completionTime) ? (0, _helpers.fromJsonTimestamp)(object.completionTime) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.completionTime !== undefined && (obj.completionTime = (0, _helpers.fromTimestamp)(message.completionTime).toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgBeginRedelegateResponse();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? _timestamp.Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  }
};
exports.MsgBeginRedelegateResponse = MsgBeginRedelegateResponse;
function createBaseMsgUndelegate() {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: undefined
  };
}
var MsgUndelegate = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      delegatorAddress: (0, _helpers.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: (0, _helpers.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: (0, _helpers.isSet)(object.amount) ? _coin.Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount ? _coin.Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$delegatorAddr4, _object$validatorAddr4;
    var message = createBaseMsgUndelegate();
    message.delegatorAddress = (_object$delegatorAddr4 = object.delegatorAddress) !== null && _object$delegatorAddr4 !== void 0 ? _object$delegatorAddr4 : "";
    message.validatorAddress = (_object$validatorAddr4 = object.validatorAddress) !== null && _object$validatorAddr4 !== void 0 ? _object$validatorAddr4 : "";
    message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
exports.MsgUndelegate = MsgUndelegate;
function createBaseMsgUndelegateResponse() {
  return {
    completionTime: undefined
  };
}
var MsgUndelegateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.completionTime !== undefined) {
      _timestamp.Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON: function fromJSON(object) {
    return {
      completionTime: (0, _helpers.isSet)(object.completionTime) ? (0, _helpers.fromJsonTimestamp)(object.completionTime) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.completionTime !== undefined && (obj.completionTime = (0, _helpers.fromTimestamp)(message.completionTime).toISOString());
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgUndelegateResponse();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? _timestamp.Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  }
};
exports.MsgUndelegateResponse = MsgUndelegateResponse;