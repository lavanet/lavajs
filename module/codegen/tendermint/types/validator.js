import { PublicKey } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseValidatorSet() {
  return {
    validators: [],
    proposer: Validator.fromPartial({}),
    totalVotingPower: BigInt(0)
  };
}
export const ValidatorSet = {
  typeUrl: "/tendermint.types.ValidatorSet",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.validators) {
      Validator.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== undefined) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.totalVotingPower);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$validators;
    const message = createBaseValidatorSet();
    message.validators = ((_object$validators = object.validators) === null || _object$validators === void 0 ? void 0 : _object$validators.map(e => Validator.fromPartial(e))) || [];
    message.proposer = object.proposer !== undefined && object.proposer !== null ? Validator.fromPartial(object.proposer) : undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(e => Validator.fromAmino(e)) : [],
      proposer: object !== null && object !== void 0 && object.proposer ? Validator.fromAmino(object.proposer) : undefined,
      totalVotingPower: BigInt(object.total_voting_power)
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.proposer = message.proposer ? Validator.toAmino(message.proposer) : undefined;
    obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return ValidatorSet.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ValidatorSet.decode(message.value);
  },
  toProto(message) {
    return ValidatorSet.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.ValidatorSet",
      value: ValidatorSet.encode(message).finish()
    };
  }
};
function createBaseValidator() {
  return {
    address: new Uint8Array(),
    pubKey: PublicKey.fromPartial({}),
    votingPower: BigInt(0),
    proposerPriority: BigInt(0)
  };
}
export const Validator = {
  typeUrl: "/tendermint.types.Validator",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64();
          break;
        case 4:
          message.proposerPriority = reader.int64();
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
    const message = createBaseValidator();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : new Uint8Array();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
    message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      address: object.address,
      pubKey: object !== null && object !== void 0 && object.pub_key ? PublicKey.fromAmino(object.pub_key) : undefined,
      votingPower: BigInt(object.voting_power),
      proposerPriority: BigInt(object.proposer_priority)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address;
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
    obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
    obj.proposer_priority = message.proposerPriority ? message.proposerPriority.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Validator.decode(message.value);
  },
  toProto(message) {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseSimpleValidator() {
  return {
    pubKey: PublicKey.fromPartial({}),
    votingPower: BigInt(0)
  };
}
export const SimpleValidator = {
  typeUrl: "/tendermint.types.SimpleValidator",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(16).int64(message.votingPower);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.votingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSimpleValidator();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      pubKey: object !== null && object !== void 0 && object.pub_key ? PublicKey.fromAmino(object.pub_key) : undefined,
      votingPower: BigInt(object.voting_power)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
    obj.voting_power = message.votingPower ? message.votingPower.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return SimpleValidator.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SimpleValidator.decode(message.value);
  },
  toProto(message) {
    return SimpleValidator.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.SimpleValidator",
      value: SimpleValidator.encode(message).finish()
    };
  }
};