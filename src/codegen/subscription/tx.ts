import { ProjectData, ProjectDataSDKType } from "../projects/project";
import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgBuy {
  creator: string;
  consumer: string;
  index: string;
  /** in months */
  duration: Long;
}
export interface MsgBuySDKType {
  creator: string;
  consumer: string;
  index: string;
  duration: Long;
}
export interface MsgBuyResponse {}
export interface MsgBuyResponseSDKType {}
export interface MsgAddProject {
  creator: string;
  projectData?: ProjectData;
}
export interface MsgAddProjectSDKType {
  creator: string;
  project_data?: ProjectDataSDKType;
}
export interface MsgAddProjectResponse {}
export interface MsgAddProjectResponseSDKType {}
export interface MsgDelProject {
  creator: string;
  name: string;
}
export interface MsgDelProjectSDKType {
  creator: string;
  name: string;
}
export interface MsgDelProjectResponse {}
export interface MsgDelProjectResponseSDKType {}
function createBaseMsgBuy(): MsgBuy {
  return {
    creator: "",
    consumer: "",
    index: "",
    duration: Long.UZERO
  };
}
export const MsgBuy = {
  encode(message: MsgBuy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuy {
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
          message.duration = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBuy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      index: isSet(object.index) ? String(object.index) : "",
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO
    };
  },
  toJSON(message: MsgBuy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.index !== undefined && (obj.index = message.index);
    message.duration !== undefined && (obj.duration = (message.duration || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgBuy>): MsgBuy {
    const message = createBaseMsgBuy();
    message.creator = object.creator ?? "";
    message.consumer = object.consumer ?? "";
    message.index = object.index ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.UZERO;
    return message;
  }
};
function createBaseMsgBuyResponse(): MsgBuyResponse {
  return {};
}
export const MsgBuyResponse = {
  encode(_: MsgBuyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyResponse {
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
  fromJSON(_: any): MsgBuyResponse {
    return {};
  },
  toJSON(_: MsgBuyResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgBuyResponse>): MsgBuyResponse {
    const message = createBaseMsgBuyResponse();
    return message;
  }
};
function createBaseMsgAddProject(): MsgAddProject {
  return {
    creator: "",
    projectData: undefined
  };
}
export const MsgAddProject = {
  encode(message: MsgAddProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectData !== undefined) {
      ProjectData.encode(message.projectData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProject {
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
  fromJSON(object: any): MsgAddProject {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      projectData: isSet(object.projectData) ? ProjectData.fromJSON(object.projectData) : undefined
    };
  },
  toJSON(message: MsgAddProject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.projectData !== undefined && (obj.projectData = message.projectData ? ProjectData.toJSON(message.projectData) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgAddProject>): MsgAddProject {
    const message = createBaseMsgAddProject();
    message.creator = object.creator ?? "";
    message.projectData = object.projectData !== undefined && object.projectData !== null ? ProjectData.fromPartial(object.projectData) : undefined;
    return message;
  }
};
function createBaseMsgAddProjectResponse(): MsgAddProjectResponse {
  return {};
}
export const MsgAddProjectResponse = {
  encode(_: MsgAddProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProjectResponse {
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
  fromJSON(_: any): MsgAddProjectResponse {
    return {};
  },
  toJSON(_: MsgAddProjectResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgAddProjectResponse>): MsgAddProjectResponse {
    const message = createBaseMsgAddProjectResponse();
    return message;
  }
};
function createBaseMsgDelProject(): MsgDelProject {
  return {
    creator: "",
    name: ""
  };
}
export const MsgDelProject = {
  encode(message: MsgDelProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): MsgDelProject {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: MsgDelProject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<MsgDelProject>): MsgDelProject {
    const message = createBaseMsgDelProject();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseMsgDelProjectResponse(): MsgDelProjectResponse {
  return {};
}
export const MsgDelProjectResponse = {
  encode(_: MsgDelProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(_: any): MsgDelProjectResponse {
    return {};
  },
  toJSON(_: MsgDelProjectResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDelProjectResponse>): MsgDelProjectResponse {
    const message = createBaseMsgDelProjectResponse();
    return message;
  }
};