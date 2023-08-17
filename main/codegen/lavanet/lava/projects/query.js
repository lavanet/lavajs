"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryInfoResponse = exports.QueryInfoRequest = exports.QueryDeveloperResponse = exports.QueryDeveloperRequest = void 0;
var _params = require("./params");
var _project = require("./project");
var _binary = require("../../../binary");
/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsRequest is request type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

/** QueryParamsResponse is response type for the Query/Params RPC method. */

function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  typeUrl: "/lavanet.lava.projects.QueryParamsRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
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
  fromPartial: function fromPartial(_) {
    var message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: _params.Params.fromPartial({})
  };
}
var QueryParamsResponse = {
  typeUrl: "/lavanet.lava.projects.QueryParamsResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.params !== undefined) {
      _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _params.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _params.Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? _params.Params.fromAmino(object.params) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.params = message.params ? _params.Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryInfoRequest() {
  return {
    project: ""
  };
}
var QueryInfoRequest = {
  typeUrl: "/lavanet.lava.projects.QueryInfoRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.project !== "") {
      writer.uint32(10).string(message.project);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryInfoRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$project;
    var message = createBaseQueryInfoRequest();
    message.project = (_object$project = object.project) !== null && _object$project !== void 0 ? _object$project : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      project: object.project
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.project = message.project;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryInfoRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryInfoRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.QueryInfoRequest",
      value: QueryInfoRequest.encode(message).finish()
    };
  }
};
exports.QueryInfoRequest = QueryInfoRequest;
function createBaseQueryInfoResponse() {
  return {
    project: _project.Project.fromPartial({})
  };
}
var QueryInfoResponse = {
  typeUrl: "/lavanet.lava.projects.QueryInfoResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.project !== undefined) {
      _project.Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = _project.Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryInfoResponse();
    message.project = object.project !== undefined && object.project !== null ? _project.Project.fromPartial(object.project) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      project: object !== null && object !== void 0 && object.project ? _project.Project.fromAmino(object.project) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.project = message.project ? _project.Project.toAmino(message.project) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryInfoResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryInfoResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.QueryInfoResponse",
      value: QueryInfoResponse.encode(message).finish()
    };
  }
};
exports.QueryInfoResponse = QueryInfoResponse;
function createBaseQueryDeveloperRequest() {
  return {
    developer: ""
  };
}
var QueryDeveloperRequest = {
  typeUrl: "/lavanet.lava.projects.QueryDeveloperRequest",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.developer !== "") {
      writer.uint32(10).string(message.developer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDeveloperRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$developer;
    var message = createBaseQueryDeveloperRequest();
    message.developer = (_object$developer = object.developer) !== null && _object$developer !== void 0 ? _object$developer : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      developer: object.developer
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.developer = message.developer;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDeveloperRequest.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDeveloperRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDeveloperRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.QueryDeveloperRequest",
      value: QueryDeveloperRequest.encode(message).finish()
    };
  }
};
exports.QueryDeveloperRequest = QueryDeveloperRequest;
function createBaseQueryDeveloperResponse() {
  return {
    project: _project.Project.fromPartial({})
  };
}
var QueryDeveloperResponse = {
  typeUrl: "/lavanet.lava.projects.QueryDeveloperResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.project !== undefined) {
      _project.Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDeveloperResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = _project.Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryDeveloperResponse();
    message.project = object.project !== undefined && object.project !== null ? _project.Project.fromPartial(object.project) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      project: object !== null && object !== void 0 && object.project ? _project.Project.fromAmino(object.project) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.project = message.project ? _project.Project.toAmino(message.project) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryDeveloperResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryDeveloperResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryDeveloperResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.QueryDeveloperResponse",
      value: QueryDeveloperResponse.encode(message).finish()
    };
  }
};
exports.QueryDeveloperResponse = QueryDeveloperResponse;