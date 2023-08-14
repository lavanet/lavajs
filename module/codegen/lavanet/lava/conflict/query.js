import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { ConflictVote } from "./conflict_vote";
import * as _m0 from "protobufjs/minimal";

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryGetConflictVoteRequest() {
  return {
    index: ""
  };
}
export const QueryGetConflictVoteRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConflictVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$index;
    const message = createBaseQueryGetConflictVoteRequest();
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    return message;
  }
};
function createBaseQueryGetConflictVoteResponse() {
  return {
    conflictVote: undefined
  };
}
export const QueryGetConflictVoteResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.conflictVote !== undefined) {
      ConflictVote.encode(message.conflictVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConflictVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictVote = ConflictVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryGetConflictVoteResponse();
    message.conflictVote = object.conflictVote !== undefined && object.conflictVote !== null ? ConflictVote.fromPartial(object.conflictVote) : undefined;
    return message;
  }
};
function createBaseQueryAllConflictVoteRequest() {
  return {
    pagination: undefined
  };
}
export const QueryAllConflictVoteRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConflictVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    const message = createBaseQueryAllConflictVoteRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAllConflictVoteResponse() {
  return {
    conflictVote: [],
    pagination: undefined
  };
}
export const QueryAllConflictVoteResponse = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.conflictVote) {
      ConflictVote.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConflictVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictVote.push(ConflictVote.decode(reader, reader.uint32()));
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
    var _object$conflictVote;
    const message = createBaseQueryAllConflictVoteResponse();
    message.conflictVote = ((_object$conflictVote = object.conflictVote) === null || _object$conflictVote === void 0 ? void 0 : _object$conflictVote.map(e => ConflictVote.fromPartial(e))) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};