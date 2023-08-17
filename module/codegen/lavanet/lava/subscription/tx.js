import { ProjectData } from "../projects/project";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgBuy() {
  return {
    creator: "",
    consumer: "",
    index: "",
    duration: BigInt(0)
  };
}
export const MsgBuy = {
  typeUrl: "/lavanet.lava.subscription.MsgBuy",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuy();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$creator, _object$consumer, _object$index;
    const message = createBaseMsgBuy();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.consumer = (_object$consumer = object.consumer) !== null && _object$consumer !== void 0 ? _object$consumer : "";
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      consumer: object.consumer,
      index: object.index,
      duration: BigInt(object.duration)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    obj.consumer = message.consumer;
    obj.index = message.index;
    obj.duration = message.duration ? message.duration.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgBuy.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgBuy.decode(message.value);
  },
  toProto(message) {
    return MsgBuy.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgBuy",
      value: MsgBuy.encode(message).finish()
    };
  }
};
function createBaseMsgBuyResponse() {
  return {};
}
export const MsgBuyResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgBuyResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyResponse();
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
    const message = createBaseMsgBuyResponse();
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
    return MsgBuyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgBuyResponse.decode(message.value);
  },
  toProto(message) {
    return MsgBuyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgBuyResponse",
      value: MsgBuyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddProject() {
  return {
    creator: "",
    projectData: ProjectData.fromPartial({})
  };
}
export const MsgAddProject = {
  typeUrl: "/lavanet.lava.subscription.MsgAddProject",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectData !== undefined) {
      ProjectData.encode(message.projectData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projectData = ProjectData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$creator2;
    const message = createBaseMsgAddProject();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.projectData = object.projectData !== undefined && object.projectData !== null ? ProjectData.fromPartial(object.projectData) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      projectData: object !== null && object !== void 0 && object.project_data ? ProjectData.fromAmino(object.project_data) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    obj.project_data = message.projectData ? ProjectData.toAmino(message.projectData) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgAddProject.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgAddProject.decode(message.value);
  },
  toProto(message) {
    return MsgAddProject.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgAddProject",
      value: MsgAddProject.encode(message).finish()
    };
  }
};
function createBaseMsgAddProjectResponse() {
  return {};
}
export const MsgAddProjectResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgAddProjectResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddProjectResponse();
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
    const message = createBaseMsgAddProjectResponse();
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
    return MsgAddProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgAddProjectResponse.decode(message.value);
  },
  toProto(message) {
    return MsgAddProjectResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgAddProjectResponse",
      value: MsgAddProjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelProject() {
  return {
    creator: "",
    name: ""
  };
}
export const MsgDelProject = {
  typeUrl: "/lavanet.lava.subscription.MsgDelProject",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$creator3, _object$name;
    const message = createBaseMsgDelProject();
    message.creator = (_object$creator3 = object.creator) !== null && _object$creator3 !== void 0 ? _object$creator3 : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    return message;
  },
  fromAmino(object) {
    return {
      creator: object.creator,
      name: object.name
    };
  },
  toAmino(message) {
    const obj = {};
    obj.creator = message.creator;
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgDelProject.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgDelProject.decode(message.value);
  },
  toProto(message) {
    return MsgDelProject.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgDelProject",
      value: MsgDelProject.encode(message).finish()
    };
  }
};
function createBaseMsgDelProjectResponse() {
  return {};
}
export const MsgDelProjectResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgDelProjectResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelProjectResponse();
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
    const message = createBaseMsgDelProjectResponse();
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
    return MsgDelProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgDelProjectResponse.decode(message.value);
  },
  toProto(message) {
    return MsgDelProjectResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgDelProjectResponse",
      value: MsgDelProjectResponse.encode(message).finish()
    };
  }
};