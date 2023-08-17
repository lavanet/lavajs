import { Policy, PolicySDKType } from "../plans/policy";
import { BinaryReader, BinaryWriter } from "../../../binary";
export enum ProjectKey_Type {
  NONE = 0,
  ADMIN = 1,
  DEVELOPER = 2,
  UNRECOGNIZED = -1,
}
export const ProjectKey_TypeSDKType = ProjectKey_Type;
export function projectKey_TypeFromJSON(object: any): ProjectKey_Type {
  switch (object) {
    case 0:
    case "NONE":
      return ProjectKey_Type.NONE;
    case 1:
    case "ADMIN":
      return ProjectKey_Type.ADMIN;
    case 2:
    case "DEVELOPER":
      return ProjectKey_Type.DEVELOPER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProjectKey_Type.UNRECOGNIZED;
  }
}
export function projectKey_TypeToJSON(object: ProjectKey_Type): string {
  switch (object) {
    case ProjectKey_Type.NONE:
      return "NONE";
    case ProjectKey_Type.ADMIN:
      return "ADMIN";
    case ProjectKey_Type.DEVELOPER:
      return "DEVELOPER";
    case ProjectKey_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Project {
  /** unique id that will be the combination of subscription address and project name, cannot be changed once created */
  index: string;
  /** the subscription address that owns the project */
  subscription: string;
  /** enabled flag */
  enabled: boolean;
  /** list of the projects keys */
  projectKeys: ProjectKey[];
  adminPolicy: Policy;
  usedCu: bigint;
  subscriptionPolicy: Policy;
  /** snapshot id to uniquely identify snapshots */
  snapshot: bigint;
}
export interface ProjectSDKType {
  index: string;
  subscription: string;
  enabled: boolean;
  project_keys: ProjectKeySDKType[];
  admin_policy: PolicySDKType;
  used_cu: bigint;
  subscription_policy: PolicySDKType;
  snapshot: bigint;
}
export interface ProjectKey {
  /** the address of the project key */
  key: string;
  kinds: number;
}
export interface ProjectKeySDKType {
  key: string;
  kinds: number;
}
export interface ProtoDeveloperData {
  projectID: string;
}
export interface ProtoDeveloperDataSDKType {
  projectID: string;
}
/** used as a container struct for the subscription module */
export interface ProjectData {
  name: string;
  enabled: boolean;
  projectKeys: ProjectKey[];
  policy: Policy;
}
/** used as a container struct for the subscription module */
export interface ProjectDataSDKType {
  name: string;
  enabled: boolean;
  projectKeys: ProjectKeySDKType[];
  policy: PolicySDKType;
}
function createBaseProject(): Project {
  return {
    index: "",
    subscription: "",
    enabled: false,
    projectKeys: [],
    adminPolicy: Policy.fromPartial({}),
    usedCu: BigInt(0),
    subscriptionPolicy: Policy.fromPartial({}),
    snapshot: BigInt(0)
  };
}
export const Project = {
  typeUrl: "/lavanet.lava.projects.Project",
  encode(message: Project, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.subscription !== "") {
      writer.uint32(18).string(message.subscription);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.adminPolicy !== undefined) {
      Policy.encode(message.adminPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.usedCu !== BigInt(0)) {
      writer.uint32(56).uint64(message.usedCu);
    }
    if (message.subscriptionPolicy !== undefined) {
      Policy.encode(message.subscriptionPolicy, writer.uint32(66).fork()).ldelim();
    }
    if (message.snapshot !== BigInt(0)) {
      writer.uint32(72).uint64(message.snapshot);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Project {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.subscription = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        case 6:
          message.adminPolicy = Policy.decode(reader, reader.uint32());
          break;
        case 7:
          message.usedCu = reader.uint64();
          break;
        case 8:
          message.subscriptionPolicy = Policy.decode(reader, reader.uint32());
          break;
        case 9:
          message.snapshot = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Project>): Project {
    const message = createBaseProject();
    message.index = object.index ?? "";
    message.subscription = object.subscription ?? "";
    message.enabled = object.enabled ?? false;
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromPartial(e)) || [];
    message.adminPolicy = object.adminPolicy !== undefined && object.adminPolicy !== null ? Policy.fromPartial(object.adminPolicy) : undefined;
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? BigInt(object.usedCu.toString()) : BigInt(0);
    message.subscriptionPolicy = object.subscriptionPolicy !== undefined && object.subscriptionPolicy !== null ? Policy.fromPartial(object.subscriptionPolicy) : undefined;
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? BigInt(object.snapshot.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProjectAmino): Project {
    return {
      index: object.index,
      subscription: object.subscription,
      enabled: object.enabled,
      projectKeys: Array.isArray(object?.project_keys) ? object.project_keys.map((e: any) => ProjectKey.fromAmino(e)) : [],
      adminPolicy: object?.admin_policy ? Policy.fromAmino(object.admin_policy) : undefined,
      usedCu: BigInt(object.used_cu),
      subscriptionPolicy: object?.subscription_policy ? Policy.fromAmino(object.subscription_policy) : undefined,
      snapshot: BigInt(object.snapshot)
    };
  },
  toAmino(message: Project): ProjectAmino {
    const obj: any = {};
    obj.index = message.index;
    obj.subscription = message.subscription;
    obj.enabled = message.enabled;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.project_keys = [];
    }
    obj.admin_policy = message.adminPolicy ? Policy.toAmino(message.adminPolicy) : undefined;
    obj.used_cu = message.usedCu ? message.usedCu.toString() : undefined;
    obj.subscription_policy = message.subscriptionPolicy ? Policy.toAmino(message.subscriptionPolicy) : undefined;
    obj.snapshot = message.snapshot ? message.snapshot.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProjectAminoMsg): Project {
    return Project.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectProtoMsg): Project {
    return Project.decode(message.value);
  },
  toProto(message: Project): Uint8Array {
    return Project.encode(message).finish();
  },
  toProtoMsg(message: Project): ProjectProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.Project",
      value: Project.encode(message).finish()
    };
  }
};
function createBaseProjectKey(): ProjectKey {
  return {
    key: "",
    kinds: 0
  };
}
export const ProjectKey = {
  typeUrl: "/lavanet.lava.projects.ProjectKey",
  encode(message: ProjectKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.kinds !== 0) {
      writer.uint32(32).uint32(message.kinds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProjectKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 4:
          message.kinds = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProjectKey>): ProjectKey {
    const message = createBaseProjectKey();
    message.key = object.key ?? "";
    message.kinds = object.kinds ?? 0;
    return message;
  },
  fromAmino(object: ProjectKeyAmino): ProjectKey {
    return {
      key: object.key,
      kinds: object.kinds
    };
  },
  toAmino(message: ProjectKey): ProjectKeyAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.kinds = message.kinds;
    return obj;
  },
  fromAminoMsg(object: ProjectKeyAminoMsg): ProjectKey {
    return ProjectKey.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectKeyProtoMsg): ProjectKey {
    return ProjectKey.decode(message.value);
  },
  toProto(message: ProjectKey): Uint8Array {
    return ProjectKey.encode(message).finish();
  },
  toProtoMsg(message: ProjectKey): ProjectKeyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.ProjectKey",
      value: ProjectKey.encode(message).finish()
    };
  }
};
function createBaseProtoDeveloperData(): ProtoDeveloperData {
  return {
    projectID: ""
  };
}
export const ProtoDeveloperData = {
  typeUrl: "/lavanet.lava.projects.ProtoDeveloperData",
  encode(message: ProtoDeveloperData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectID !== "") {
      writer.uint32(10).string(message.projectID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProtoDeveloperData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoDeveloperData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProtoDeveloperData>): ProtoDeveloperData {
    const message = createBaseProtoDeveloperData();
    message.projectID = object.projectID ?? "";
    return message;
  },
  fromAmino(object: ProtoDeveloperDataAmino): ProtoDeveloperData {
    return {
      projectID: object.projectID
    };
  },
  toAmino(message: ProtoDeveloperData): ProtoDeveloperDataAmino {
    const obj: any = {};
    obj.projectID = message.projectID;
    return obj;
  },
  fromAminoMsg(object: ProtoDeveloperDataAminoMsg): ProtoDeveloperData {
    return ProtoDeveloperData.fromAmino(object.value);
  },
  fromProtoMsg(message: ProtoDeveloperDataProtoMsg): ProtoDeveloperData {
    return ProtoDeveloperData.decode(message.value);
  },
  toProto(message: ProtoDeveloperData): Uint8Array {
    return ProtoDeveloperData.encode(message).finish();
  },
  toProtoMsg(message: ProtoDeveloperData): ProtoDeveloperDataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.ProtoDeveloperData",
      value: ProtoDeveloperData.encode(message).finish()
    };
  }
};
function createBaseProjectData(): ProjectData {
  return {
    name: "",
    enabled: false,
    projectKeys: [],
    policy: Policy.fromPartial({})
  };
}
export const ProjectData = {
  typeUrl: "/lavanet.lava.projects.ProjectData",
  encode(message: ProjectData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProjectData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        case 5:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProjectData>): ProjectData {
    const message = createBaseProjectData();
    message.name = object.name ?? "";
    message.enabled = object.enabled ?? false;
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromPartial(e)) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object: ProjectDataAmino): ProjectData {
    return {
      name: object.name,
      enabled: object.enabled,
      projectKeys: Array.isArray(object?.projectKeys) ? object.projectKeys.map((e: any) => ProjectKey.fromAmino(e)) : [],
      policy: object?.policy ? Policy.fromAmino(object.policy) : undefined
    };
  },
  toAmino(message: ProjectData): ProjectDataAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.enabled = message.enabled;
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.projectKeys = [];
    }
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProjectDataAminoMsg): ProjectData {
    return ProjectData.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectDataProtoMsg): ProjectData {
    return ProjectData.decode(message.value);
  },
  toProto(message: ProjectData): Uint8Array {
    return ProjectData.encode(message).finish();
  },
  toProtoMsg(message: ProjectData): ProjectDataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.ProjectData",
      value: ProjectData.encode(message).finish()
    };
  }
};