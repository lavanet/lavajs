import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { ConflictVote } from "./conflict_vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.conflict.QueryParamsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lavanet.lava.conflict.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetConflictVoteRequest() {
  return {
    index: ""
  };
}
export const QueryGetConflictVoteRequest = {
  typeUrl: "/lavanet.lava.conflict.QueryGetConflictVoteRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      index: object.index
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetConflictVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetConflictVoteRequest.decode(message.value);
  },
  toProto(message) {
    return QueryGetConflictVoteRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.QueryGetConflictVoteRequest",
      value: QueryGetConflictVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetConflictVoteResponse() {
  return {
    conflictVote: ConflictVote.fromPartial({})
  };
}
export const QueryGetConflictVoteResponse = {
  typeUrl: "/lavanet.lava.conflict.QueryGetConflictVoteResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.conflictVote !== undefined) {
      ConflictVote.encode(message.conflictVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      conflictVote: object !== null && object !== void 0 && object.conflictVote ? ConflictVote.fromAmino(object.conflictVote) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.conflictVote = message.conflictVote ? ConflictVote.toAmino(message.conflictVote) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryGetConflictVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryGetConflictVoteResponse.decode(message.value);
  },
  toProto(message) {
    return QueryGetConflictVoteResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.QueryGetConflictVoteResponse",
      value: QueryGetConflictVoteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllConflictVoteRequest() {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllConflictVoteRequest = {
  typeUrl: "/lavanet.lava.conflict.QueryAllConflictVoteRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      pagination: object !== null && object !== void 0 && object.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllConflictVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllConflictVoteRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllConflictVoteRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.QueryAllConflictVoteRequest",
      value: QueryAllConflictVoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllConflictVoteResponse() {
  return {
    conflictVote: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllConflictVoteResponse = {
  typeUrl: "/lavanet.lava.conflict.QueryAllConflictVoteResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.conflictVote) {
      ConflictVote.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      conflictVote: Array.isArray(object === null || object === void 0 ? void 0 : object.conflictVote) ? object.conflictVote.map(e => ConflictVote.fromAmino(e)) : [],
      pagination: object !== null && object !== void 0 && object.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.conflictVote) {
      obj.conflictVote = message.conflictVote.map(e => e ? ConflictVote.toAmino(e) : undefined);
    } else {
      obj.conflictVote = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllConflictVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryAllConflictVoteResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllConflictVoteResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.conflict.QueryAllConflictVoteResponse",
      value: QueryAllConflictVoteResponse.encode(message).finish()
    };
  }
};