import { Params } from "./params";
import { Project } from "./project";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.projects.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.projects.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.projects.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.projects.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInfoRequest() {
  return {
    project: ""
  };
}
export const QueryInfoRequest = {
  typeUrl: "/lavanet.lava.projects.QueryInfoRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.project !== "") {
      writer.uint32(10).string(message.project);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$project;
    const message = createBaseQueryInfoRequest();
    message.project = (_object$project = object.project) !== null && _object$project !== void 0 ? _object$project : "";
    return message;
  },
  fromAmino(object) {
    return {
      project: object.project
    };
  },
  toAmino(message) {
    const obj = {};
    obj.project = message.project;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.QueryInfoRequest",
      value: QueryInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInfoResponse() {
  return {
    project: Project.fromPartial({})
  };
}
export const QueryInfoResponse = {
  typeUrl: "/lavanet.lava.projects.QueryInfoResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryInfoResponse();
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      project: object !== null && object !== void 0 && object.project ? Project.fromAmino(object.project) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.project = message.project ? Project.toAmino(message.project) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.QueryInfoResponse",
      value: QueryInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDeveloperRequest() {
  return {
    developer: ""
  };
}
export const QueryDeveloperRequest = {
  typeUrl: "/lavanet.lava.projects.QueryDeveloperRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.developer !== "") {
      writer.uint32(10).string(message.developer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeveloperRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.developer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$developer;
    const message = createBaseQueryDeveloperRequest();
    message.developer = (_object$developer = object.developer) !== null && _object$developer !== void 0 ? _object$developer : "";
    return message;
  },
  fromAmino(object) {
    return {
      developer: object.developer
    };
  },
  toAmino(message) {
    const obj = {};
    obj.developer = message.developer;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDeveloperRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryDeveloperRequest.decode(message.value);
  },
  toProto(message) {
    return QueryDeveloperRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.QueryDeveloperRequest",
      value: QueryDeveloperRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDeveloperResponse() {
  return {
    project: Project.fromPartial({})
  };
}
export const QueryDeveloperResponse = {
  typeUrl: "/lavanet.lava.projects.QueryDeveloperResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeveloperResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryDeveloperResponse();
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      project: object !== null && object !== void 0 && object.project ? Project.fromAmino(object.project) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.project = message.project ? Project.toAmino(message.project) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryDeveloperResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return QueryDeveloperResponse.decode(message.value);
  },
  toProto(message) {
    return QueryDeveloperResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.QueryDeveloperResponse",
      value: QueryDeveloperResponse.encode(message).finish()
    };
  }
};