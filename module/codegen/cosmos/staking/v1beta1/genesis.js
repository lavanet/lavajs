import { Params, Validator, Delegation, UnbondingDelegation, Redelegation } from "./staking";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the staking module's genesis state. */

/** GenesisState defines the staking module's genesis state. */

/** LastValidatorPower required for validator set update logic. */

/** LastValidatorPower required for validator set update logic. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
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
  typeUrl: "/cosmos.staking.v1beta1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined,
      lastTotalPower: object.last_total_power,
      lastValidatorPowers: Array.isArray(object === null || object === void 0 ? void 0 : object.last_validator_powers) ? object.last_validator_powers.map(e => LastValidatorPower.fromAmino(e)) : [],
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(e => Validator.fromAmino(e)) : [],
      delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations) ? object.delegations.map(e => Delegation.fromAmino(e)) : [],
      unbondingDelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_delegations) ? object.unbonding_delegations.map(e => UnbondingDelegation.fromAmino(e)) : [],
      redelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegations) ? object.redelegations.map(e => Redelegation.fromAmino(e)) : [],
      exported: object.exported
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.last_total_power = message.lastTotalPower;
    if (message.lastValidatorPowers) {
      obj.last_validator_powers = message.lastValidatorPowers.map(e => e ? LastValidatorPower.toAmino(e) : undefined);
    } else {
      obj.last_validator_powers = [];
    }
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.delegations = [];
    }
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_delegations = [];
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? Redelegation.toAmino(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    obj.exported = message.exported;
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseLastValidatorPower() {
  return {
    address: "",
    power: BigInt(0)
  };
}
export const LastValidatorPower = {
  typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$address;
    const message = createBaseLastValidatorPower();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      address: object.address,
      power: BigInt(object.power)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address;
    obj.power = message.power ? message.power.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return LastValidatorPower.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/LastValidatorPower",
      value: LastValidatorPower.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return LastValidatorPower.decode(message.value);
  },
  toProto(message) {
    return LastValidatorPower.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
      value: LastValidatorPower.encode(message).finish()
    };
  }
};