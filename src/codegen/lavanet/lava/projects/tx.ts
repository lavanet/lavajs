import { ProjectKey, ProjectKeySDKType } from "./project";
import { Policy, PolicySDKType } from "../plans/policy";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface MsgAddKeys {
  creator: string;
  project: string;
  projectKeys: ProjectKey[];
}
export interface MsgAddKeysSDKType {
  creator: string;
  project: string;
  project_keys: ProjectKeySDKType[];
}
export interface MsgAddKeysResponse {}
export interface MsgAddKeysResponseSDKType {}
export interface MsgDelKeys {
  creator: string;
  project: string;
  projectKeys: ProjectKey[];
}
export interface MsgDelKeysSDKType {
  creator: string;
  project: string;
  project_keys: ProjectKeySDKType[];
}
export interface MsgDelKeysResponse {}
export interface MsgDelKeysResponseSDKType {}
export interface MsgSetPolicy {
  creator: string;
  project: string;
  policy: Policy;
}
export interface MsgSetPolicySDKType {
  creator: string;
  project: string;
  policy: PolicySDKType;
}
export interface MsgSetPolicyResponse {}
export interface MsgSetPolicyResponseSDKType {}
export interface MsgSetSubscriptionPolicy {
  creator: string;
  projects: string[];
  policy: Policy;
}
export interface MsgSetSubscriptionPolicySDKType {
  creator: string;
  projects: string[];
  policy: PolicySDKType;
}
export interface MsgSetSubscriptionPolicyResponse {}
export interface MsgSetSubscriptionPolicyResponseSDKType {}
function createBaseMsgAddKeys(): MsgAddKeys {
  return {
    creator: "",
    project: "",
    projectKeys: []
  };
}
export const MsgAddKeys = {
  typeUrl: "/lavanet.lava.projects.MsgAddKeys",
  encode(message: MsgAddKeys, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddKeys {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddKeys>): MsgAddKeys {
    const message = createBaseMsgAddKeys();
    message.creator = object.creator ?? "";
    message.project = object.project ?? "";
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddKeysAmino): MsgAddKeys {
    return {
      creator: object.creator,
      project: object.project,
      projectKeys: Array.isArray(object?.project_keys) ? object.project_keys.map((e: any) => ProjectKey.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgAddKeys): MsgAddKeysAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.project = message.project;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.project_keys = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddKeysAminoMsg): MsgAddKeys {
    return MsgAddKeys.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddKeysProtoMsg): MsgAddKeys {
    return MsgAddKeys.decode(message.value);
  },
  toProto(message: MsgAddKeys): Uint8Array {
    return MsgAddKeys.encode(message).finish();
  },
  toProtoMsg(message: MsgAddKeys): MsgAddKeysProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgAddKeys",
      value: MsgAddKeys.encode(message).finish()
    };
  }
};
function createBaseMsgAddKeysResponse(): MsgAddKeysResponse {
  return {};
}
export const MsgAddKeysResponse = {
  typeUrl: "/lavanet.lava.projects.MsgAddKeysResponse",
  encode(_: MsgAddKeysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddKeysResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddKeysResponse();
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
  fromPartial(_: Partial<MsgAddKeysResponse>): MsgAddKeysResponse {
    const message = createBaseMsgAddKeysResponse();
    return message;
  },
  fromAmino(_: MsgAddKeysResponseAmino): MsgAddKeysResponse {
    return {};
  },
  toAmino(_: MsgAddKeysResponse): MsgAddKeysResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddKeysResponseAminoMsg): MsgAddKeysResponse {
    return MsgAddKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddKeysResponseProtoMsg): MsgAddKeysResponse {
    return MsgAddKeysResponse.decode(message.value);
  },
  toProto(message: MsgAddKeysResponse): Uint8Array {
    return MsgAddKeysResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddKeysResponse): MsgAddKeysResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgAddKeysResponse",
      value: MsgAddKeysResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelKeys(): MsgDelKeys {
  return {
    creator: "",
    project: "",
    projectKeys: []
  };
}
export const MsgDelKeys = {
  typeUrl: "/lavanet.lava.projects.MsgDelKeys",
  encode(message: MsgDelKeys, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelKeys {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelKeys>): MsgDelKeys {
    const message = createBaseMsgDelKeys();
    message.creator = object.creator ?? "";
    message.project = object.project ?? "";
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDelKeysAmino): MsgDelKeys {
    return {
      creator: object.creator,
      project: object.project,
      projectKeys: Array.isArray(object?.project_keys) ? object.project_keys.map((e: any) => ProjectKey.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgDelKeys): MsgDelKeysAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.project = message.project;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.project_keys = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgDelKeysAminoMsg): MsgDelKeys {
    return MsgDelKeys.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelKeysProtoMsg): MsgDelKeys {
    return MsgDelKeys.decode(message.value);
  },
  toProto(message: MsgDelKeys): Uint8Array {
    return MsgDelKeys.encode(message).finish();
  },
  toProtoMsg(message: MsgDelKeys): MsgDelKeysProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgDelKeys",
      value: MsgDelKeys.encode(message).finish()
    };
  }
};
function createBaseMsgDelKeysResponse(): MsgDelKeysResponse {
  return {};
}
export const MsgDelKeysResponse = {
  typeUrl: "/lavanet.lava.projects.MsgDelKeysResponse",
  encode(_: MsgDelKeysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelKeysResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelKeysResponse();
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
  fromPartial(_: Partial<MsgDelKeysResponse>): MsgDelKeysResponse {
    const message = createBaseMsgDelKeysResponse();
    return message;
  },
  fromAmino(_: MsgDelKeysResponseAmino): MsgDelKeysResponse {
    return {};
  },
  toAmino(_: MsgDelKeysResponse): MsgDelKeysResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelKeysResponseAminoMsg): MsgDelKeysResponse {
    return MsgDelKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelKeysResponseProtoMsg): MsgDelKeysResponse {
    return MsgDelKeysResponse.decode(message.value);
  },
  toProto(message: MsgDelKeysResponse): Uint8Array {
    return MsgDelKeysResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelKeysResponse): MsgDelKeysResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgDelKeysResponse",
      value: MsgDelKeysResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPolicy(): MsgSetPolicy {
  return {
    creator: "",
    project: "",
    policy: Policy.fromPartial({})
  };
}
export const MsgSetPolicy = {
  typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
  encode(message: MsgSetPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetPolicy>): MsgSetPolicy {
    const message = createBaseMsgSetPolicy();
    message.creator = object.creator ?? "";
    message.project = object.project ?? "";
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object: MsgSetPolicyAmino): MsgSetPolicy {
    return {
      creator: object.creator,
      project: object.project,
      policy: object?.policy ? Policy.fromAmino(object.policy) : undefined
    };
  },
  toAmino(message: MsgSetPolicy): MsgSetPolicyAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.project = message.project;
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetPolicyAminoMsg): MsgSetPolicy {
    return MsgSetPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPolicyProtoMsg): MsgSetPolicy {
    return MsgSetPolicy.decode(message.value);
  },
  toProto(message: MsgSetPolicy): Uint8Array {
    return MsgSetPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPolicy): MsgSetPolicyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
      value: MsgSetPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgSetPolicyResponse(): MsgSetPolicyResponse {
  return {};
}
export const MsgSetPolicyResponse = {
  typeUrl: "/lavanet.lava.projects.MsgSetPolicyResponse",
  encode(_: MsgSetPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPolicyResponse();
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
  fromPartial(_: Partial<MsgSetPolicyResponse>): MsgSetPolicyResponse {
    const message = createBaseMsgSetPolicyResponse();
    return message;
  },
  fromAmino(_: MsgSetPolicyResponseAmino): MsgSetPolicyResponse {
    return {};
  },
  toAmino(_: MsgSetPolicyResponse): MsgSetPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPolicyResponseAminoMsg): MsgSetPolicyResponse {
    return MsgSetPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPolicyResponseProtoMsg): MsgSetPolicyResponse {
    return MsgSetPolicyResponse.decode(message.value);
  },
  toProto(message: MsgSetPolicyResponse): Uint8Array {
    return MsgSetPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPolicyResponse): MsgSetPolicyResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetPolicyResponse",
      value: MsgSetPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetSubscriptionPolicy(): MsgSetSubscriptionPolicy {
  return {
    creator: "",
    projects: [],
    policy: Policy.fromPartial({})
  };
}
export const MsgSetSubscriptionPolicy = {
  typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
  encode(message: MsgSetSubscriptionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.projects) {
      writer.uint32(18).string(v!);
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSubscriptionPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSubscriptionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projects.push(reader.string());
          break;
        case 3:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetSubscriptionPolicy>): MsgSetSubscriptionPolicy {
    const message = createBaseMsgSetSubscriptionPolicy();
    message.creator = object.creator ?? "";
    message.projects = object.projects?.map(e => e) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object: MsgSetSubscriptionPolicyAmino): MsgSetSubscriptionPolicy {
    return {
      creator: object.creator,
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => e) : [],
      policy: object?.policy ? Policy.fromAmino(object.policy) : undefined
    };
  },
  toAmino(message: MsgSetSubscriptionPolicy): MsgSetSubscriptionPolicyAmino {
    const obj: any = {};
    obj.creator = message.creator;
    if (message.projects) {
      obj.projects = message.projects.map(e => e);
    } else {
      obj.projects = [];
    }
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetSubscriptionPolicyAminoMsg): MsgSetSubscriptionPolicy {
    return MsgSetSubscriptionPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetSubscriptionPolicyProtoMsg): MsgSetSubscriptionPolicy {
    return MsgSetSubscriptionPolicy.decode(message.value);
  },
  toProto(message: MsgSetSubscriptionPolicy): Uint8Array {
    return MsgSetSubscriptionPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSubscriptionPolicy): MsgSetSubscriptionPolicyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
      value: MsgSetSubscriptionPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgSetSubscriptionPolicyResponse(): MsgSetSubscriptionPolicyResponse {
  return {};
}
export const MsgSetSubscriptionPolicyResponse = {
  typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicyResponse",
  encode(_: MsgSetSubscriptionPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSubscriptionPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSubscriptionPolicyResponse();
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
  fromPartial(_: Partial<MsgSetSubscriptionPolicyResponse>): MsgSetSubscriptionPolicyResponse {
    const message = createBaseMsgSetSubscriptionPolicyResponse();
    return message;
  },
  fromAmino(_: MsgSetSubscriptionPolicyResponseAmino): MsgSetSubscriptionPolicyResponse {
    return {};
  },
  toAmino(_: MsgSetSubscriptionPolicyResponse): MsgSetSubscriptionPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetSubscriptionPolicyResponseAminoMsg): MsgSetSubscriptionPolicyResponse {
    return MsgSetSubscriptionPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetSubscriptionPolicyResponseProtoMsg): MsgSetSubscriptionPolicyResponse {
    return MsgSetSubscriptionPolicyResponse.decode(message.value);
  },
  toProto(message: MsgSetSubscriptionPolicyResponse): Uint8Array {
    return MsgSetSubscriptionPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSubscriptionPolicyResponse): MsgSetSubscriptionPolicyResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicyResponse",
      value: MsgSetSubscriptionPolicyResponse.encode(message).finish()
    };
  }
};