import { Vote, LightBlock } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";

/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */

/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */

/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */

/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */

function createBaseEvidence() {
  return {
    duplicateVoteEvidence: undefined,
    lightClientAttackEvidence: undefined
  };
}
export const Evidence = {
  typeUrl: "/tendermint.types.Evidence",
  encode(message, writer = BinaryWriter.create()) {
    if (message.duplicateVoteEvidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.lightClientAttackEvidence !== undefined) {
      LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicateVoteEvidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;
        case 2:
          message.lightClientAttackEvidence = LightClientAttackEvidence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseEvidence();
    message.duplicateVoteEvidence = object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence) : undefined;
    message.lightClientAttackEvidence = object.lightClientAttackEvidence !== undefined && object.lightClientAttackEvidence !== null ? LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      duplicateVoteEvidence: object !== null && object !== void 0 && object.duplicate_vote_evidence ? DuplicateVoteEvidence.fromAmino(object.duplicate_vote_evidence) : undefined,
      lightClientAttackEvidence: object !== null && object !== void 0 && object.light_client_attack_evidence ? LightClientAttackEvidence.fromAmino(object.light_client_attack_evidence) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.duplicate_vote_evidence = message.duplicateVoteEvidence ? DuplicateVoteEvidence.toAmino(message.duplicateVoteEvidence) : undefined;
    obj.light_client_attack_evidence = message.lightClientAttackEvidence ? LightClientAttackEvidence.toAmino(message.lightClientAttackEvidence) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Evidence.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Evidence.decode(message.value);
  },
  toProto(message) {
    return Evidence.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Evidence",
      value: Evidence.encode(message).finish()
    };
  }
};
function createBaseDuplicateVoteEvidence() {
  return {
    voteA: Vote.fromPartial({}),
    voteB: Vote.fromPartial({}),
    totalVotingPower: BigInt(0),
    validatorPower: BigInt(0),
    timestamp: new Date()
  };
}
export const DuplicateVoteEvidence = {
  typeUrl: "/tendermint.types.DuplicateVoteEvidence",
  encode(message, writer = BinaryWriter.create()) {
    if (message.voteA !== undefined) {
      Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== undefined) {
      Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.totalVotingPower);
    }
    if (message.validatorPower !== BigInt(0)) {
      writer.uint32(32).int64(message.validatorPower);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteA = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteB = Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = reader.int64();
          break;
        case 4:
          message.validatorPower = reader.int64();
          break;
        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$timestamp;
    const message = createBaseDuplicateVoteEvidence();
    message.voteA = object.voteA !== undefined && object.voteA !== null ? Vote.fromPartial(object.voteA) : undefined;
    message.voteB = object.voteB !== undefined && object.voteB !== null ? Vote.fromPartial(object.voteB) : undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
    message.validatorPower = object.validatorPower !== undefined && object.validatorPower !== null ? BigInt(object.validatorPower.toString()) : BigInt(0);
    message.timestamp = (_object$timestamp = object.timestamp) !== null && _object$timestamp !== void 0 ? _object$timestamp : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      voteA: object !== null && object !== void 0 && object.vote_a ? Vote.fromAmino(object.vote_a) : undefined,
      voteB: object !== null && object !== void 0 && object.vote_b ? Vote.fromAmino(object.vote_b) : undefined,
      totalVotingPower: BigInt(object.total_voting_power),
      validatorPower: BigInt(object.validator_power),
      timestamp: object.timestamp
    };
  },
  toAmino(message) {
    const obj = {};
    obj.vote_a = message.voteA ? Vote.toAmino(message.voteA) : undefined;
    obj.vote_b = message.voteB ? Vote.toAmino(message.voteB) : undefined;
    obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
    obj.validator_power = message.validatorPower ? message.validatorPower.toString() : undefined;
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAminoMsg(object) {
    return DuplicateVoteEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DuplicateVoteEvidence.decode(message.value);
  },
  toProto(message) {
    return DuplicateVoteEvidence.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.DuplicateVoteEvidence",
      value: DuplicateVoteEvidence.encode(message).finish()
    };
  }
};
function createBaseLightClientAttackEvidence() {
  return {
    conflictingBlock: LightBlock.fromPartial({}),
    commonHeight: BigInt(0),
    byzantineValidators: [],
    totalVotingPower: BigInt(0),
    timestamp: new Date()
  };
}
export const LightClientAttackEvidence = {
  typeUrl: "/tendermint.types.LightClientAttackEvidence",
  encode(message, writer = BinaryWriter.create()) {
    if (message.conflictingBlock !== undefined) {
      LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.commonHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.commonHeight);
    }
    for (const v of message.byzantineValidators) {
      Validator.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(32).int64(message.totalVotingPower);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightClientAttackEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictingBlock = LightBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.commonHeight = reader.int64();
          break;
        case 3:
          message.byzantineValidators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalVotingPower = reader.int64();
          break;
        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$byzantineVali, _object$timestamp2;
    const message = createBaseLightClientAttackEvidence();
    message.conflictingBlock = object.conflictingBlock !== undefined && object.conflictingBlock !== null ? LightBlock.fromPartial(object.conflictingBlock) : undefined;
    message.commonHeight = object.commonHeight !== undefined && object.commonHeight !== null ? BigInt(object.commonHeight.toString()) : BigInt(0);
    message.byzantineValidators = ((_object$byzantineVali = object.byzantineValidators) === null || _object$byzantineVali === void 0 ? void 0 : _object$byzantineVali.map(e => Validator.fromPartial(e))) || [];
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
    message.timestamp = (_object$timestamp2 = object.timestamp) !== null && _object$timestamp2 !== void 0 ? _object$timestamp2 : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      conflictingBlock: object !== null && object !== void 0 && object.conflicting_block ? LightBlock.fromAmino(object.conflicting_block) : undefined,
      commonHeight: BigInt(object.common_height),
      byzantineValidators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantine_validators) ? object.byzantine_validators.map(e => Validator.fromAmino(e)) : [],
      totalVotingPower: BigInt(object.total_voting_power),
      timestamp: object.timestamp
    };
  },
  toAmino(message) {
    const obj = {};
    obj.conflicting_block = message.conflictingBlock ? LightBlock.toAmino(message.conflictingBlock) : undefined;
    obj.common_height = message.commonHeight ? message.commonHeight.toString() : undefined;
    if (message.byzantineValidators) {
      obj.byzantine_validators = message.byzantineValidators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.byzantine_validators = [];
    }
    obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAminoMsg(object) {
    return LightClientAttackEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return LightClientAttackEvidence.decode(message.value);
  },
  toProto(message) {
    return LightClientAttackEvidence.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.LightClientAttackEvidence",
      value: LightClientAttackEvidence.encode(message).finish()
    };
  }
};
function createBaseEvidenceList() {
  return {
    evidence: []
  };
}
export const EvidenceList = {
  typeUrl: "/tendermint.types.EvidenceList",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.evidence) {
      Evidence.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$evidence;
    const message = createBaseEvidenceList();
    message.evidence = ((_object$evidence = object.evidence) === null || _object$evidence === void 0 ? void 0 : _object$evidence.map(e => Evidence.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence) ? object.evidence.map(e => Evidence.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toAmino(e) : undefined);
    } else {
      obj.evidence = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return EvidenceList.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EvidenceList.decode(message.value);
  },
  toProto(message) {
    return EvidenceList.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.EvidenceList",
      value: EvidenceList.encode(message).finish()
    };
  }
};