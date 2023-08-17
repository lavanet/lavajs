"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgDelProjectResponse = exports.MsgDelProject = exports.MsgBuyResponse = exports.MsgBuy = exports.MsgAddProjectResponse = exports.MsgAddProject = void 0;
var _project = require("../projects/project");
var _binary = require("../../../binary");
function createBaseMsgBuy() {
  return {
    creator: "",
    consumer: "",
    index: "",
    duration: BigInt(0)
  };
}
var MsgBuy = {
  typeUrl: "/lavanet.lava.subscription.MsgBuy",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBuy();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumer = reader.string();
          break;
        case 3:
          message.index = reader.string();
          break;
        case 4:
          message.duration = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator, _object$consumer, _object$index;
    var message = createBaseMsgBuy();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.consumer = (_object$consumer = object.consumer) !== null && _object$consumer !== void 0 ? _object$consumer : "";
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creator: object.creator,
      consumer: object.consumer,
      index: object.index,
      duration: BigInt(object.duration)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creator = message.creator;
    obj.consumer = message.consumer;
    obj.index = message.index;
    obj.duration = message.duration ? message.duration.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgBuy.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgBuy.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgBuy.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgBuy",
      value: MsgBuy.encode(message).finish()
    };
  }
};
exports.MsgBuy = MsgBuy;
function createBaseMsgBuyResponse() {
  return {};
}
var MsgBuyResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgBuyResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgBuyResponse();
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
    var message = createBaseMsgBuyResponse();
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
    return MsgBuyResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgBuyResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgBuyResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgBuyResponse",
      value: MsgBuyResponse.encode(message).finish()
    };
  }
};
exports.MsgBuyResponse = MsgBuyResponse;
function createBaseMsgAddProject() {
  return {
    creator: "",
    projectData: _project.ProjectData.fromPartial({})
  };
}
var MsgAddProject = {
  typeUrl: "/lavanet.lava.subscription.MsgAddProject",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectData !== undefined) {
      _project.ProjectData.encode(message.projectData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgAddProject();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projectData = _project.ProjectData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2;
    var message = createBaseMsgAddProject();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.projectData = object.projectData !== undefined && object.projectData !== null ? _project.ProjectData.fromPartial(object.projectData) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creator: object.creator,
      projectData: object !== null && object !== void 0 && object.project_data ? _project.ProjectData.fromAmino(object.project_data) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creator = message.creator;
    obj.project_data = message.projectData ? _project.ProjectData.toAmino(message.projectData) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgAddProject.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgAddProject.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgAddProject.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgAddProject",
      value: MsgAddProject.encode(message).finish()
    };
  }
};
exports.MsgAddProject = MsgAddProject;
function createBaseMsgAddProjectResponse() {
  return {};
}
var MsgAddProjectResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgAddProjectResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgAddProjectResponse();
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
    var message = createBaseMsgAddProjectResponse();
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
    return MsgAddProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgAddProjectResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgAddProjectResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgAddProjectResponse",
      value: MsgAddProjectResponse.encode(message).finish()
    };
  }
};
exports.MsgAddProjectResponse = MsgAddProjectResponse;
function createBaseMsgDelProject() {
  return {
    creator: "",
    name: ""
  };
}
var MsgDelProject = {
  typeUrl: "/lavanet.lava.subscription.MsgDelProject",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelProject();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator3, _object$name;
    var message = createBaseMsgDelProject();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      creator: object.creator,
      name: object.name
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.creator = message.creator;
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MsgDelProject.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgDelProject.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgDelProject.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgDelProject",
      value: MsgDelProject.encode(message).finish()
    };
  }
};
exports.MsgDelProject = MsgDelProject;
function createBaseMsgDelProjectResponse() {
  return {};
}
var MsgDelProjectResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgDelProjectResponse",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDelProjectResponse();
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
    var message = createBaseMsgDelProjectResponse();
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
    return MsgDelProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MsgDelProjectResponse.decode(message.value);
  },
  toProto: function toProto(message) {
    return MsgDelProjectResponse.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgDelProjectResponse",
      value: MsgDelProjectResponse.encode(message).finish()
    };
  }
};
exports.MsgDelProjectResponse = MsgDelProjectResponse;