import { Params, Validator, Delegation, UnbondingDelegation, Redelegation } from "./staking";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the staking module's genesis state. */

/** GenesisState defines the staking module's genesis state. */

/** LastValidatorPower required for validator set update logic. */

/** LastValidatorPower required for validator set update logic. */

function createBaseGenesisState() {
  return {
    params: undefined,
    lastTotalPower: new Uint8Array(),
    lastValidatorPowers: [],
    validators: [],
    delegations: [],
    unbondingDelegations: [],
    redelegations: [],
    exported: false
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }
    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastTotalPower = reader.bytes();
          break;
        case 3:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.exported = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      lastTotalPower: isSet(object.lastTotalPower) ? bytesFromBase64(object.lastTotalPower) : new Uint8Array(),
      lastValidatorPowers: Array.isArray(object === null || object === void 0 ? void 0 : object.lastValidatorPowers) ? object.lastValidatorPowers.map(e => LastValidatorPower.fromJSON(e)) : [],
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(e => Validator.fromJSON(e)) : [],
      delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations) ? object.delegations.map(e => Delegation.fromJSON(e)) : [],
      unbondingDelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingDelegations) ? object.unbondingDelegations.map(e => UnbondingDelegation.fromJSON(e)) : [],
      redelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegations) ? object.redelegations.map(e => Redelegation.fromJSON(e)) : [],
      exported: isSet(object.exported) ? Boolean(object.exported) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastTotalPower !== undefined && (obj.lastTotalPower = base64FromBytes(message.lastTotalPower !== undefined ? message.lastTotalPower : new Uint8Array()));
    if (message.lastValidatorPowers) {
      obj.lastValidatorPowers = message.lastValidatorPowers.map(e => e ? LastValidatorPower.toJSON(e) : undefined);
    } else {
      obj.lastValidatorPowers = [];
    }
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    if (message.unbondingDelegations) {
      obj.unbondingDelegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingDelegations = [];
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? Redelegation.toJSON(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    message.exported !== undefined && (obj.exported = message.exported);
    return obj;
  },
  fromPartial(object) {
    var _object$lastTotalPowe, _object$lastValidator, _object$validators, _object$delegations, _object$unbondingDele, _object$redelegations, _object$exported;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastTotalPower = (_object$lastTotalPowe = object.lastTotalPower) !== null && _object$lastTotalPowe !== void 0 ? _object$lastTotalPowe : new Uint8Array();
    message.lastValidatorPowers = ((_object$lastValidator = object.lastValidatorPowers) === null || _object$lastValidator === void 0 ? void 0 : _object$lastValidator.map(e => LastValidatorPower.fromPartial(e))) || [];
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(e => Validator.fromPartial(e))) || [];
    message.delegations = ((_object$delegations = object.delegations) === null || _object$delegations === void 0 ? void 0 : _object$delegations.map(e => Delegation.fromPartial(e))) || [];
    message.unbondingDelegations = ((_object$unbondingDele = object.unbondingDelegations) === null || _object$unbondingDele === void 0 ? void 0 : _object$unbondingDele.map(e => UnbondingDelegation.fromPartial(e))) || [];
    message.redelegations = ((_object$redelegations = object.redelegations) === null || _object$redelegations === void 0 ? void 0 : _object$redelegations.map(e => Redelegation.fromPartial(e))) || [];
    message.exported = (_object$exported = object.exported) !== null && _object$exported !== void 0 ? _object$exported : false;
    return message;
  }
};
function createBaseLastValidatorPower() {
  return {
    address: "",
    power: Long.ZERO
  };
}
export const LastValidatorPower = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastValidatorPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.address !== undefined && (obj.address = message.address);
    message.power !== undefined && (obj.power = (message.power || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseLastValidatorPower();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  }
};