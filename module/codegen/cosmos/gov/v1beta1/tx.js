import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { WeightedVoteOption, voteOptionFromJSON } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */

/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */

/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */

/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */

/** MsgVote defines a message to cast a vote. */

/** MsgVote defines a message to cast a vote. */

/** MsgVoteResponse defines the Msg/Vote response type. */

/** MsgVoteResponse defines the Msg/Vote response type. */

/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 */

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */

/** MsgDepositResponse defines the Msg/Deposit response type. */

/** MsgDepositResponse defines the Msg/Deposit response type. */

function createBaseMsgSubmitProposal() {
  return {
    content: Any.fromPartial({}),
    initialDeposit: [],
    proposer: ""
  };
}
export const MsgSubmitProposal = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$initialDeposi, _object$proposer;
    const message = createBaseMsgSubmitProposal();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.initialDeposit = ((_object$initialDeposi = object.initialDeposit) === null || _object$initialDeposi === void 0 ? void 0 : _object$initialDeposi.map(e => Coin.fromPartial(e))) || [];
    message.proposer = (_object$proposer = object.proposer) !== null && _object$proposer !== void 0 ? _object$proposer : "";
    return message;
  },
  fromAmino(object) {
    return {
      content: object !== null && object !== void 0 && object.content ? Any.fromAmino(object.content) : undefined,
      initialDeposit: Array.isArray(object === null || object === void 0 ? void 0 : object.initial_deposit) ? object.initial_deposit.map(e => Coin.fromAmino(e)) : [],
      proposer: object.proposer
    };
  },
  toAmino(message) {
    const obj = {};
    obj.content = message.content ? Any.toAmino(message.content) : undefined;
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_deposit = [];
    }
    obj.proposer = message.proposer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposalResponse() {
  return {
    proposalId: BigInt(0)
  };
}
export const MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVote() {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0
  };
}
export const MsgVote = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVote",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$voter, _object$option;
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVote.decode(message.value);
  },
  toProto(message) {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse() {
  return {};
}
export const MsgVoteResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
    const message = createBaseMsgVoteResponse();
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
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message) {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeighted() {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: []
  };
}
export const MsgVoteWeighted = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeighted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$voter2, _object$options;
    const message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = (_object$voter2 = object.voter) !== null && _object$voter2 !== void 0 ? _object$voter2 : "";
    message.options = ((_object$options = object.options) === null || _object$options === void 0 ? void 0 : _object$options.map(e => WeightedVoteOption.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter,
      options: Array.isArray(object === null || object === void 0 ? void 0 : object.options) ? object.options.map(e => WeightedVoteOption.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVoteWeighted.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVoteWeighted",
      value: MsgVoteWeighted.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVoteWeighted.decode(message.value);
  },
  toProto(message) {
    return MsgVoteWeighted.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
      value: MsgVoteWeighted.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeightedResponse() {
  return {};
}
export const MsgVoteWeightedResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeightedResponse();
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
    const message = createBaseMsgVoteWeightedResponse();
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
    return MsgVoteWeightedResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVoteWeightedResponse.decode(message.value);
  },
  toProto(message) {
    return MsgVoteWeightedResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeposit() {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
export const MsgDeposit = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$depositor, _object$amount;
    const message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = (_object$depositor = object.depositor) !== null && _object$depositor !== void 0 ? _object$depositor : "";
    message.amount = ((_object$amount = object.amount) === null || _object$amount === void 0 ? void 0 : _object$amount.map(e => Coin.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      depositor: object.depositor,
      amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(e => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDeposit.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDeposit",
      value: MsgDeposit.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDeposit.decode(message.value);
  },
  toProto(message) {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse() {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
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
    const message = createBaseMsgDepositResponse();
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
    return MsgDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgDepositResponse",
      value: MsgDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message) {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};