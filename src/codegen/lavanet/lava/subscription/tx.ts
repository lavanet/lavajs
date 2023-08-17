import { ProjectData, ProjectDataSDKType } from "../projects/project";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface MsgBuy {
  creator: string;
  consumer: string;
  index: string;
  /** in months */
  duration: bigint;
}
export interface MsgBuySDKType {
  creator: string;
  consumer: string;
  index: string;
  duration: bigint;
}
export interface MsgBuyResponse {}
export interface MsgBuyResponseSDKType {}
export interface MsgAddProject {
  creator: string;
  projectData: ProjectData;
}
export interface MsgAddProjectSDKType {
  creator: string;
  project_data: ProjectDataSDKType;
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
    duration: BigInt(0)
  };
}
export const MsgBuy = {
  typeUrl: "/lavanet.lava.subscription.MsgBuy",
  encode(message: MsgBuy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuy {
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
  fromPartial(object: Partial<MsgBuy>): MsgBuy {
    const message = createBaseMsgBuy();
    message.creator = object.creator ?? "";
    message.consumer = object.consumer ?? "";
    message.index = object.index ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBuyAmino): MsgBuy {
    return {
      creator: object.creator,
      consumer: object.consumer,
      index: object.index,
      duration: BigInt(object.duration)
    };
  },
  toAmino(message: MsgBuy): MsgBuyAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.consumer = message.consumer;
    obj.index = message.index;
    obj.duration = message.duration ? message.duration.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBuyAminoMsg): MsgBuy {
    return MsgBuy.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBuyProtoMsg): MsgBuy {
    return MsgBuy.decode(message.value);
  },
  toProto(message: MsgBuy): Uint8Array {
    return MsgBuy.encode(message).finish();
  },
  toProtoMsg(message: MsgBuy): MsgBuyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgBuy",
      value: MsgBuy.encode(message).finish()
    };
  }
};
function createBaseMsgBuyResponse(): MsgBuyResponse {
  return {};
}
export const MsgBuyResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgBuyResponse",
  encode(_: MsgBuyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyResponse {
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
  fromPartial(_: Partial<MsgBuyResponse>): MsgBuyResponse {
    const message = createBaseMsgBuyResponse();
    return message;
  },
  fromAmino(_: MsgBuyResponseAmino): MsgBuyResponse {
    return {};
  },
  toAmino(_: MsgBuyResponse): MsgBuyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBuyResponseAminoMsg): MsgBuyResponse {
    return MsgBuyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBuyResponseProtoMsg): MsgBuyResponse {
    return MsgBuyResponse.decode(message.value);
  },
  toProto(message: MsgBuyResponse): Uint8Array {
    return MsgBuyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyResponse): MsgBuyResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgBuyResponse",
      value: MsgBuyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddProject(): MsgAddProject {
  return {
    creator: "",
    projectData: ProjectData.fromPartial({})
  };
}
export const MsgAddProject = {
  typeUrl: "/lavanet.lava.subscription.MsgAddProject",
  encode(message: MsgAddProject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectData !== undefined) {
      ProjectData.encode(message.projectData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddProject {
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
  fromPartial(object: Partial<MsgAddProject>): MsgAddProject {
    const message = createBaseMsgAddProject();
    message.creator = object.creator ?? "";
    message.projectData = object.projectData !== undefined && object.projectData !== null ? ProjectData.fromPartial(object.projectData) : undefined;
    return message;
  },
  fromAmino(object: MsgAddProjectAmino): MsgAddProject {
    return {
      creator: object.creator,
      projectData: object?.project_data ? ProjectData.fromAmino(object.project_data) : undefined
    };
  },
  toAmino(message: MsgAddProject): MsgAddProjectAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.project_data = message.projectData ? ProjectData.toAmino(message.projectData) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddProjectAminoMsg): MsgAddProject {
    return MsgAddProject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddProjectProtoMsg): MsgAddProject {
    return MsgAddProject.decode(message.value);
  },
  toProto(message: MsgAddProject): Uint8Array {
    return MsgAddProject.encode(message).finish();
  },
  toProtoMsg(message: MsgAddProject): MsgAddProjectProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgAddProject",
      value: MsgAddProject.encode(message).finish()
    };
  }
};
function createBaseMsgAddProjectResponse(): MsgAddProjectResponse {
  return {};
}
export const MsgAddProjectResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgAddProjectResponse",
  encode(_: MsgAddProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddProjectResponse {
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
  fromPartial(_: Partial<MsgAddProjectResponse>): MsgAddProjectResponse {
    const message = createBaseMsgAddProjectResponse();
    return message;
  },
  fromAmino(_: MsgAddProjectResponseAmino): MsgAddProjectResponse {
    return {};
  },
  toAmino(_: MsgAddProjectResponse): MsgAddProjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddProjectResponseAminoMsg): MsgAddProjectResponse {
    return MsgAddProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddProjectResponseProtoMsg): MsgAddProjectResponse {
    return MsgAddProjectResponse.decode(message.value);
  },
  toProto(message: MsgAddProjectResponse): Uint8Array {
    return MsgAddProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddProjectResponse): MsgAddProjectResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgAddProjectResponse",
      value: MsgAddProjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelProject(): MsgDelProject {
  return {
    creator: "",
    name: ""
  };
}
export const MsgDelProject = {
  typeUrl: "/lavanet.lava.subscription.MsgDelProject",
  encode(message: MsgDelProject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelProject {
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
  fromPartial(object: Partial<MsgDelProject>): MsgDelProject {
    const message = createBaseMsgDelProject();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgDelProjectAmino): MsgDelProject {
    return {
      creator: object.creator,
      name: object.name
    };
  },
  toAmino(message: MsgDelProject): MsgDelProjectAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object: MsgDelProjectAminoMsg): MsgDelProject {
    return MsgDelProject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelProjectProtoMsg): MsgDelProject {
    return MsgDelProject.decode(message.value);
  },
  toProto(message: MsgDelProject): Uint8Array {
    return MsgDelProject.encode(message).finish();
  },
  toProtoMsg(message: MsgDelProject): MsgDelProjectProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgDelProject",
      value: MsgDelProject.encode(message).finish()
    };
  }
};
function createBaseMsgDelProjectResponse(): MsgDelProjectResponse {
  return {};
}
export const MsgDelProjectResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgDelProjectResponse",
  encode(_: MsgDelProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelProjectResponse {
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
  fromPartial(_: Partial<MsgDelProjectResponse>): MsgDelProjectResponse {
    const message = createBaseMsgDelProjectResponse();
    return message;
  },
  fromAmino(_: MsgDelProjectResponseAmino): MsgDelProjectResponse {
    return {};
  },
  toAmino(_: MsgDelProjectResponse): MsgDelProjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelProjectResponseAminoMsg): MsgDelProjectResponse {
    return MsgDelProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelProjectResponseProtoMsg): MsgDelProjectResponse {
    return MsgDelProjectResponse.decode(message.value);
  },
  toProto(message: MsgDelProjectResponse): Uint8Array {
    return MsgDelProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelProjectResponse): MsgDelProjectResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgDelProjectResponse",
      value: MsgDelProjectResponse.encode(message).finish()
    };
  }
};