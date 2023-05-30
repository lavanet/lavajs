import { ProjectData } from "../projects/project";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgBuy() {
  return {
    creator: "",
    consumer: "",
    index: "",
    duration: Long.UZERO
  };
}
export const MsgBuy = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (!message.duration.isZero()) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      index: isSet(object.index) ? String(object.index) : "",
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO
    };
  },
  toJSON(message) {
    const obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.index !== undefined && (obj.index = message.index);
    message.duration !== undefined && (obj.duration = (message.duration || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    var _object$creator, _object$consumer, _object$index;
    const message = createBaseMsgBuy();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.consumer = (_object$consumer = object.consumer) !== null && _object$consumer !== void 0 ? _object$consumer : "";
    message.index = (_object$index = object.index) !== null && _object$index !== void 0 ? _object$index : "";
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.UZERO;
    return message;
  }
};
function createBaseMsgBuyResponse() {
  return {};
}
export const MsgBuyResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgBuyResponse();
    return message;
  }
};
function createBaseMsgAddProject() {
  return {
    creator: "",
    projectData: undefined
  };
}
export const MsgAddProject = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectData !== undefined) {
      ProjectData.encode(message.projectData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      projectData: isSet(object.projectData) ? ProjectData.fromJSON(object.projectData) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.projectData !== undefined && (obj.projectData = message.projectData ? ProjectData.toJSON(message.projectData) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$creator2;
    const message = createBaseMsgAddProject();
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.projectData = object.projectData !== undefined && object.projectData !== null ? ProjectData.fromPartial(object.projectData) : undefined;
    return message;
  }
};
function createBaseMsgAddProjectResponse() {
  return {};
}
export const MsgAddProjectResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  fromPartial(_) {
    const message = createBaseMsgAddProjectResponse();
    return message;
  }
};