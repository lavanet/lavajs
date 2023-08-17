"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryConfigResponse = exports.QueryConfigRequest = void 0;
var _config = require("./config");
var _binary = require("../../../binary");
/** QueryConfigRequest is the Query/Config request type. */

/** QueryConfigRequest is the Query/Config request type. */

/** QueryConfigRequest is the Query/Config response type. */

/** QueryConfigRequest is the Query/Config response type. */

function createBaseQueryConfigRequest() {
  return {};
}
var QueryConfigRequest = {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConfigRequest();
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
    var message = createBaseQueryConfigRequest();
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
    return QueryConfigRequest.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConfigRequest",
      value: QueryConfigRequest.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryConfigRequest.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryConfigRequest.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
      value: QueryConfigRequest.encode(message).finish()
    };
  }
};
exports.QueryConfigRequest = QueryConfigRequest;
function createBaseQueryConfigResponse() {
  return {
    config: _config.Config.fromPartial({})
  };
}
var QueryConfigResponse = {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.config !== undefined) {
      _config.Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = _config.Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryConfigResponse();
    message.config = object.config !== undefined && object.config !== null ? _config.Config.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      config: object !== null && object !== void 0 && object.config ? _config.Config.fromAmino(object.config) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.config = message.config ? _config.Config.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return QueryConfigResponse.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/QueryConfigResponse",
      value: QueryConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return QueryConfigResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return QueryConfigResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
      value: QueryConfigResponse.encode(message).finish()
    };
  }
};
exports.QueryConfigResponse = QueryConfigResponse;