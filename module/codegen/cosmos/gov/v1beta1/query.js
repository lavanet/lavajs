import { Proposal, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult, proposalStatusFromJSON } from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */

/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */

/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */

/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */

/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */

/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */

/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */

/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */

/** QueryVoteRequest is the request type for the Query/Vote RPC method. */

/** QueryVoteRequest is the request type for the Query/Vote RPC method. */

/** QueryVoteResponse is the response type for the Query/Vote RPC method. */

/** QueryVoteResponse is the response type for the Query/Vote RPC method. */

/** QueryVotesRequest is the request type for the Query/Votes RPC method. */

/** QueryVotesRequest is the request type for the Query/Votes RPC method. */

/** QueryVotesResponse is the response type for the Query/Votes RPC method. */

/** QueryVotesResponse is the response type for the Query/Votes RPC method. */

/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsRequest is the request type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/** QueryParamsResponse is the response type for the Query/Params RPC method. */

/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */

/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */

/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */

/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */

/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */

/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */

/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */

/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */

/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */

/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */

/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */

/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */

function createBaseQueryProposalRequest() {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryProposalRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
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
    const message = createBaseQueryProposalRequest();
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
    return QueryProposalRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryProposalRequest",
      value: QueryProposalRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalRequest.decode(message.value);
  },
  toProto(message) {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalResponse() {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const QueryProposalResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      proposal: object !== null && object !== void 0 && object.proposal ? Proposal.fromAmino(object.proposal) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryProposalResponse",
      value: QueryProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalResponse.decode(message.value);
  },
  toProto(message) {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsRequest() {
  return {
    proposalStatus: 0,
    voter: "",
    depositor: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryProposalsRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalStatus !== 0) {
      writer.uint32(8).int32(message.proposalStatus);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalStatus = reader.int32();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.depositor = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$proposalStatu, _object$voter, _object$depositor;
    const message = createBaseQueryProposalsRequest();
    message.proposalStatus = (_object$proposalStatu = object.proposalStatus) !== null && _object$proposalStatu !== void 0 ? _object$proposalStatu : 0;
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.depositor = (_object$depositor = object.depositor) !== null && _object$depositor !== void 0 ? _object$depositor : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      proposalStatus: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : -1,
      voter: object.voter,
      depositor: object.depositor,
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_status = message.proposalStatus;
    obj.voter = message.voter;
    obj.depositor = message.depositor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProposalsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryProposalsRequest",
      value: QueryProposalsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryProposalsRequest",
      value: QueryProposalsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProposalsResponse() {
  return {
    proposals: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryProposalsResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.proposals) {
      Proposal.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$proposals;
    const message = createBaseQueryProposalsResponse();
    message.proposals = ((_object$proposals = object.proposals) === null || _object$proposals === void 0 ? void 0 : _object$proposals.map(e => Proposal.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map(e => Proposal.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryProposalsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryProposalsResponse",
      value: QueryProposalsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryProposalsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse",
      value: QueryProposalsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteRequest() {
  return {
    proposalId: BigInt(0),
    voter: ""
  };
}
export const QueryVoteRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVoteRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$voter2;
    const message = createBaseQueryVoteRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = (_object$voter2 = object.voter) !== null && _object$voter2 !== void 0 ? _object$voter2 : "";
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVoteRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryVoteRequest",
      value: QueryVoteRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVoteRequest.decode(message.value);
  },
  toProto(message) {
    return QueryVoteRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryVoteRequest",
      value: QueryVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteResponse() {
  return {
    vote: Vote.fromPartial({})
  };
}
export const QueryVoteResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      vote: object !== null && object !== void 0 && object.vote ? Vote.fromAmino(object.vote) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryVoteResponse",
      value: QueryVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVoteResponse.decode(message.value);
  },
  toProto(message) {
    return QueryVoteResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse",
      value: QueryVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesRequest() {
  return {
    proposalId: BigInt(0),
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryVotesRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryVotesRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVotesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryVotesRequest",
      value: QueryVotesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVotesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryVotesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest",
      value: QueryVotesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesResponse() {
  return {
    votes: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryVotesResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.votes) {
      Vote.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$votes;
    const message = createBaseQueryVotesResponse();
    message.votes = ((_object$votes = object.votes) === null || _object$votes === void 0 ? void 0 : _object$votes.map(e => Vote.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(e => Vote.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryVotesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryVotesResponse",
      value: QueryVotesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryVotesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryVotesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse",
      value: QueryVotesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {
    paramsType: ""
  };
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryParamsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.paramsType !== "") {
      writer.uint32(10).string(message.paramsType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paramsType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$paramsType;
    const message = createBaseQueryParamsRequest();
    message.paramsType = (_object$paramsType = object.paramsType) !== null && _object$paramsType !== void 0 ? _object$paramsType : "";
    return message;
  },
  fromAmino(object) {
    return {
      paramsType: object.params_type
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params_type = message.paramsType;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    votingParams: VotingParams.fromPartial({}),
    depositParams: DepositParams.fromPartial({}),
    tallyParams: TallyParams.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      votingParams: object !== null && object !== void 0 && object.voting_params ? VotingParams.fromAmino(object.voting_params) : undefined,
      depositParams: object !== null && object !== void 0 && object.deposit_params ? DepositParams.fromAmino(object.deposit_params) : undefined,
      tallyParams: object !== null && object !== void 0 && object.tally_params ? TallyParams.fromAmino(object.tally_params) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
    obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
    obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRequest() {
  return {
    proposalId: BigInt(0),
    depositor: ""
  };
}
export const QueryDepositRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$depositor2;
    const message = createBaseQueryDepositRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = (_object$depositor2 = object.depositor) !== null && _object$depositor2 !== void 0 ? _object$depositor2 : "";
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      depositor: object.depositor
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.depositor = message.depositor;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDepositRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDepositRequest",
      value: QueryDepositRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDepositRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDepositRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryDepositRequest",
      value: QueryDepositRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositResponse() {
  return {
    deposit: Deposit.fromPartial({})
  };
}
export const QueryDepositResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      deposit: object !== null && object !== void 0 && object.deposit ? Deposit.fromAmino(object.deposit) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDepositResponse",
      value: QueryDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDepositResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDepositResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse",
      value: QueryDepositResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsRequest() {
  return {
    proposalId: BigInt(0),
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDepositsRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDepositsRequest",
      value: QueryDepositsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsResponse() {
  return {
    deposits: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.deposits) {
      Deposit.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$deposits;
    const message = createBaseQueryDepositsResponse();
    message.deposits = ((_object$deposits = object.deposits) === null || _object$deposits === void 0 ? void 0 : _object$deposits.map(e => Deposit.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.deposits) ? object.deposits.map(e => Deposit.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryDepositsResponse",
      value: QueryDepositsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultRequest() {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryTallyResultRequest = {
  typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
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
    const message = createBaseQueryTallyResultRequest();
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
    return QueryTallyResultRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryTallyResultRequest",
      value: QueryTallyResultRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTallyResultRequest.decode(message.value);
  },
  toProto(message) {
    return QueryTallyResultRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultRequest",
      value: QueryTallyResultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTallyResultResponse() {
  return {
    tally: TallyResult.fromPartial({})
  };
}
export const QueryTallyResultResponse = {
  typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      tally: object !== null && object !== void 0 && object.tally ? TallyResult.fromAmino(object.tally) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.tally = message.tally ? TallyResult.toAmino(message.tally) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryTallyResultResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryTallyResultResponse",
      value: QueryTallyResultResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryTallyResultResponse.decode(message.value);
  },
  toProto(message) {
    return QueryTallyResultResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse",
      value: QueryTallyResultResponse.encode(message).finish()
    };
  }
};