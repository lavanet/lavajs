import { Member, voteOptionFromJSON } from "./types";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export let Exec = /*#__PURE__*/function (Exec) {
  Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
  Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
  Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Exec;
}({});
export const ExecSDKType = Exec;
export function execFromJSON(object) {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}
export function execToJSON(object) {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    case Exec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */

/** MsgCreateGroup is the Msg/CreateGroup request type. */

/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */

/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */

/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */

/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */

/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */

/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */

/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */

/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */

/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */

/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */

/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */

/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */

/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */

/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */

/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */

/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */

/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */

/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */

/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */

/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */

/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */

/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */

/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */

/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */

/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */

/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */

/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */

/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */

/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */

/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */

/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */

/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */

/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */

/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */

/** MsgSubmitProposal is the Msg/SubmitProposal request type. */

/** MsgSubmitProposal is the Msg/SubmitProposal request type. */

/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */

/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */

/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */

/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */

/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */

/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */

/** MsgVote is the Msg/Vote request type. */

/** MsgVote is the Msg/Vote request type. */

/** MsgVoteResponse is the Msg/Vote response type. */

/** MsgVoteResponse is the Msg/Vote response type. */

/** MsgExec is the Msg/Exec request type. */

/** MsgExec is the Msg/Exec request type. */

/** MsgExecResponse is the Msg/Exec request type. */

/** MsgExecResponse is the Msg/Exec request type. */

/** MsgLeaveGroup is the Msg/LeaveGroup request type. */

/** MsgLeaveGroup is the Msg/LeaveGroup request type. */

/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */

/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */

function createBaseMsgCreateGroup() {
  return {
    admin: "",
    members: [],
    metadata: ""
  };
}
export const MsgCreateGroup = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroup",
  encode(message, writer = BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      Member.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$admin, _object$members, _object$metadata;
    const message = createBaseMsgCreateGroup();
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.members = ((_object$members = object.members) === null || _object$members === void 0 ? void 0 : _object$members.map(e => Member.fromPartial(e))) || [];
    message.metadata = (_object$metadata = object.metadata) !== null && _object$metadata !== void 0 ? _object$metadata : "";
    return message;
  },
  fromAmino(object) {
    return {
      admin: object.admin,
      members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(e => Member.fromAmino(e)) : [],
      metadata: object.metadata
    };
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateGroup.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroup",
      value: MsgCreateGroup.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroup.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroup.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroup",
      value: MsgCreateGroup.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupResponse() {
  return {
    groupId: BigInt(0)
  };
}
export const MsgCreateGroupResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgCreateGroupResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      groupId: BigInt(object.group_id)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroupResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroupResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembers() {
  return {
    admin: "",
    groupId: BigInt(0),
    memberUpdates: []
  };
}
export const MsgUpdateGroupMembers = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
  encode(message, writer = BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    for (const v of message.memberUpdates) {
      Member.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.memberUpdates.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$admin2, _object$memberUpdates;
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = (_object$admin2 = object.admin) !== null && _object$admin2 !== void 0 ? _object$admin2 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.memberUpdates = ((_object$memberUpdates = object.memberUpdates) === null || _object$memberUpdates === void 0 ? void 0 : _object$memberUpdates.map(e => Member.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      admin: object.admin,
      groupId: BigInt(object.group_id),
      memberUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.member_updates) ? object.member_updates.map(e => Member.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    if (message.memberUpdates) {
      obj.member_updates = message.memberUpdates.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.member_updates = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupMembers.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupMembers.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupMembers.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembersResponse() {
  return {};
}
export const MsgUpdateGroupMembersResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();
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
    const message = createBaseMsgUpdateGroupMembersResponse();
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
    return MsgUpdateGroupMembersResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupMembersResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAdmin() {
  return {
    admin: "",
    groupId: BigInt(0),
    newAdmin: ""
  };
}
export const MsgUpdateGroupAdmin = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
  encode(message, writer = BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$admin3, _object$newAdmin;
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = (_object$admin3 = object.admin) !== null && _object$admin3 !== void 0 ? _object$admin3 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.newAdmin = (_object$newAdmin = object.newAdmin) !== null && _object$newAdmin !== void 0 ? _object$newAdmin : "";
    return message;
  },
  fromAmino(object) {
    return {
      admin: object.admin,
      groupId: BigInt(object.group_id),
      newAdmin: object.new_admin
    };
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupAdmin.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupAdmin.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupAdmin.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAdminResponse() {
  return {};
}
export const MsgUpdateGroupAdminResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdminResponse();
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
    const message = createBaseMsgUpdateGroupAdminResponse();
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
    return MsgUpdateGroupAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupAdminResponse",
      value: MsgUpdateGroupAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupAdminResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupAdminResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
      value: MsgUpdateGroupAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMetadata() {
  return {
    admin: "",
    groupId: BigInt(0),
    metadata: ""
  };
}
export const MsgUpdateGroupMetadata = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
  encode(message, writer = BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$admin4, _object$metadata2;
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = (_object$admin4 = object.admin) !== null && _object$admin4 !== void 0 ? _object$admin4 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.metadata = (_object$metadata2 = object.metadata) !== null && _object$metadata2 !== void 0 ? _object$metadata2 : "";
    return message;
  },
  fromAmino(object) {
    return {
      admin: object.admin,
      groupId: BigInt(object.group_id),
      metadata: object.metadata
    };
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupMetadata.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupMetadata.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupMetadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMetadataResponse() {
  return {};
}
export const MsgUpdateGroupMetadataResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadataResponse();
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
    const message = createBaseMsgUpdateGroupMetadataResponse();
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
    return MsgUpdateGroupMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
      value: MsgUpdateGroupMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupMetadataResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
      value: MsgUpdateGroupMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupPolicy() {
  return {
    admin: "",
    groupId: BigInt(0),
    metadata: "",
    decisionPolicy: Any.fromPartial({})
  };
}
export const MsgCreateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
  encode(message, writer = BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$admin5, _object$metadata3;
    const message = createBaseMsgCreateGroupPolicy();
    message.admin = (_object$admin5 = object.admin) !== null && _object$admin5 !== void 0 ? _object$admin5 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.metadata = (_object$metadata3 = object.metadata) !== null && _object$metadata3 !== void 0 ? _object$metadata3 : "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      admin: object.admin,
      groupId: BigInt(object.group_id),
      metadata: object.metadata,
      decisionPolicy: object !== null && object !== void 0 && object.decision_policy ? Any.fromAmino(object.decision_policy) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.metadata = message.metadata;
    obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroupPolicy.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupPolicyResponse() {
  return {
    address: ""
  };
}
export const MsgCreateGroupPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$address;
    const message = createBaseMsgCreateGroupPolicyResponse();
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  },
  fromAmino(object) {
    return {
      address: object.address
    };
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateGroupPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroupPolicyResponse",
      value: MsgCreateGroupPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroupPolicyResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroupPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
      value: MsgCreateGroupPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyAdmin() {
  return {
    admin: "",
    address: "",
    newAdmin: ""
  };
}
export const MsgUpdateGroupPolicyAdmin = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
  encode(message, writer = BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$admin6, _object$address2, _object$newAdmin2;
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = (_object$admin6 = object.admin) !== null && _object$admin6 !== void 0 ? _object$admin6 : "";
    message.address = (_object$address2 = object.address) !== null && _object$address2 !== void 0 ? _object$address2 : "";
    message.newAdmin = (_object$newAdmin2 = object.newAdmin) !== null && _object$newAdmin2 !== void 0 ? _object$newAdmin2 : "";
    return message;
  },
  fromAmino(object) {
    return {
      admin: object.admin,
      address: object.address,
      newAdmin: object.new_admin
    };
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin;
    obj.address = message.address;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupPolicyAdmin.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyAdmin.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyAdmin.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupWithPolicy() {
  return {
    admin: "",
    members: [],
    groupMetadata: "",
    groupPolicyMetadata: "",
    groupPolicyAsAdmin: false,
    decisionPolicy: Any.fromPartial({})
  };
}
export const MsgCreateGroupWithPolicy = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
  encode(message, writer = BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      Member.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.groupMetadata !== "") {
      writer.uint32(26).string(message.groupMetadata);
    }
    if (message.groupPolicyMetadata !== "") {
      writer.uint32(34).string(message.groupPolicyMetadata);
    }
    if (message.groupPolicyAsAdmin === true) {
      writer.uint32(40).bool(message.groupPolicyAsAdmin);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMetadata = reader.string();
          break;
        case 4:
          message.groupPolicyMetadata = reader.string();
          break;
        case 5:
          message.groupPolicyAsAdmin = reader.bool();
          break;
        case 6:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$admin7, _object$members2, _object$groupMetadata, _object$groupPolicyMe, _object$groupPolicyAs;
    const message = createBaseMsgCreateGroupWithPolicy();
    message.admin = (_object$admin7 = object.admin) !== null && _object$admin7 !== void 0 ? _object$admin7 : "";
    message.members = ((_object$members2 = object.members) === null || _object$members2 === void 0 ? void 0 : _object$members2.map(e => Member.fromPartial(e))) || [];
    message.groupMetadata = (_object$groupMetadata = object.groupMetadata) !== null && _object$groupMetadata !== void 0 ? _object$groupMetadata : "";
    message.groupPolicyMetadata = (_object$groupPolicyMe = object.groupPolicyMetadata) !== null && _object$groupPolicyMe !== void 0 ? _object$groupPolicyMe : "";
    message.groupPolicyAsAdmin = (_object$groupPolicyAs = object.groupPolicyAsAdmin) !== null && _object$groupPolicyAs !== void 0 ? _object$groupPolicyAs : false;
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      admin: object.admin,
      members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(e => Member.fromAmino(e)) : [],
      groupMetadata: object.group_metadata,
      groupPolicyMetadata: object.group_policy_metadata,
      groupPolicyAsAdmin: object.group_policy_as_admin,
      decisionPolicy: object !== null && object !== void 0 && object.decision_policy ? Any.fromAmino(object.decision_policy) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.group_metadata = message.groupMetadata;
    obj.group_policy_metadata = message.groupPolicyMetadata;
    obj.group_policy_as_admin = message.groupPolicyAsAdmin;
    obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateGroupWithPolicy.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroupWithPolicy.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroupWithPolicy.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupWithPolicyResponse() {
  return {
    groupId: BigInt(0),
    groupPolicyAddress: ""
  };
}
export const MsgCreateGroupWithPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$groupPolicyAd;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.groupPolicyAddress = (_object$groupPolicyAd = object.groupPolicyAddress) !== null && _object$groupPolicyAd !== void 0 ? _object$groupPolicyAd : "";
    return message;
  },
  fromAmino(object) {
    return {
      groupId: BigInt(object.group_id),
      groupPolicyAddress: object.group_policy_address
    };
  },
  toAmino(message) {
    const obj = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.group_policy_address = message.groupPolicyAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgCreateGroupWithPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
      value: MsgCreateGroupWithPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgCreateGroupWithPolicyResponse.decode(message.value);
  },
  toProto(message) {
    return MsgCreateGroupWithPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
      value: MsgCreateGroupWithPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyAdminResponse() {
  return {};
}
export const MsgUpdateGroupPolicyAdminResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
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
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
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
    return MsgUpdateGroupPolicyAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
      value: MsgUpdateGroupPolicyAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyAdminResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyAdminResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
      value: MsgUpdateGroupPolicyAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
  return {
    admin: "",
    address: "",
    decisionPolicy: Any.fromPartial({})
  };
}
export const MsgUpdateGroupPolicyDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
  encode(message, writer = BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$admin8, _object$address3;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = (_object$admin8 = object.admin) !== null && _object$admin8 !== void 0 ? _object$admin8 : "";
    message.address = (_object$address3 = object.address) !== null && _object$address3 !== void 0 ? _object$address3 : "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      admin: object.admin,
      address: object.address,
      decisionPolicy: object !== null && object !== void 0 && object.decision_policy ? Any.fromAmino(object.decision_policy) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin;
    obj.address = message.address;
    obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupPolicyDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyDecisionPolicy.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
  return {};
}
export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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
    return MsgUpdateGroupPolicyDecisionPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
      value: MsgUpdateGroupPolicyDecisionPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
      value: MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyMetadata() {
  return {
    admin: "",
    address: "",
    metadata: ""
  };
}
export const MsgUpdateGroupPolicyMetadata = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
  encode(message, writer = BinaryWriter.create()) {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$admin9, _object$address4, _object$metadata4;
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = (_object$admin9 = object.admin) !== null && _object$admin9 !== void 0 ? _object$admin9 : "";
    message.address = (_object$address4 = object.address) !== null && _object$address4 !== void 0 ? _object$address4 : "";
    message.metadata = (_object$metadata4 = object.metadata) !== null && _object$metadata4 !== void 0 ? _object$metadata4 : "";
    return message;
  },
  fromAmino(object) {
    return {
      admin: object.admin,
      address: object.address,
      metadata: object.metadata
    };
  },
  toAmino(message) {
    const obj = {};
    obj.admin = message.admin;
    obj.address = message.address;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgUpdateGroupPolicyMetadata.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyMetadata.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyMetadata.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
  return {};
}
export const MsgUpdateGroupPolicyMetadataResponse = {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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
    return MsgUpdateGroupPolicyMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
      value: MsgUpdateGroupPolicyMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgUpdateGroupPolicyMetadataResponse.decode(message.value);
  },
  toProto(message) {
    return MsgUpdateGroupPolicyMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
      value: MsgUpdateGroupPolicyMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposal() {
  return {
    address: "",
    proposers: [],
    metadata: "",
    messages: [],
    exec: 0
  };
}
export const MsgSubmitProposal = {
  typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.messages) {
      Any.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.proposers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.exec = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$address5, _object$proposers, _object$metadata5, _object$messages, _object$exec;
    const message = createBaseMsgSubmitProposal();
    message.address = (_object$address5 = object.address) !== null && _object$address5 !== void 0 ? _object$address5 : "";
    message.proposers = ((_object$proposers = object.proposers) === null || _object$proposers === void 0 ? void 0 : _object$proposers.map(e => e)) || [];
    message.metadata = (_object$metadata5 = object.metadata) !== null && _object$metadata5 !== void 0 ? _object$metadata5 : "";
    message.messages = ((_object$messages = object.messages) === null || _object$messages === void 0 ? void 0 : _object$messages.map(e => Any.fromPartial(e))) || [];
    message.exec = (_object$exec = object.exec) !== null && _object$exec !== void 0 ? _object$exec : 0;
    return message;
  },
  fromAmino(object) {
    return {
      address: object.address,
      proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map(e => e) : [],
      metadata: object.metadata,
      messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(e => Any.fromAmino(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    obj.metadata = message.metadata;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }
    obj.exec = message.exec;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/group/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposalResponse() {
  return {
    proposalId: BigInt(0)
  };
}
export const MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawProposal() {
  return {
    proposalId: BigInt(0),
    address: ""
  };
}
export const MsgWithdrawProposal = {
  typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$address6;
    const message = createBaseMsgWithdrawProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.address = (_object$address6 = object.address) !== null && _object$address6 !== void 0 ? _object$address6 : "";
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      address: object.address
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgWithdrawProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/group/MsgWithdrawProposal",
      value: MsgWithdrawProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawProposal.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
      value: MsgWithdrawProposal.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawProposalResponse() {
  return {};
}
export const MsgWithdrawProposalResponse = {
  typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposalResponse();
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
    const message = createBaseMsgWithdrawProposalResponse();
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
    return MsgWithdrawProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgWithdrawProposalResponse",
      value: MsgWithdrawProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgWithdrawProposalResponse.decode(message.value);
  },
  toProto(message) {
    return MsgWithdrawProposalResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
      value: MsgWithdrawProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVote() {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    metadata: "",
    exec: 0
  };
}
export const MsgVote = {
  typeUrl: "/cosmos.group.v1.MsgVote",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.exec = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$voter, _object$option, _object$metadata6, _object$exec2;
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = (_object$voter = object.voter) !== null && _object$voter !== void 0 ? _object$voter : "";
    message.option = (_object$option = object.option) !== null && _object$option !== void 0 ? _object$option : 0;
    message.metadata = (_object$metadata6 = object.metadata) !== null && _object$metadata6 !== void 0 ? _object$metadata6 : "";
    message.exec = (_object$exec2 = object.exec) !== null && _object$exec2 !== void 0 ? _object$exec2 : 0;
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: object.metadata,
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    obj.metadata = message.metadata;
    obj.exec = message.exec;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/group/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVote.decode(message.value);
  },
  toProto(message) {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse() {
  return {};
}
export const MsgVoteResponse = {
  typeUrl: "/cosmos.group.v1.MsgVoteResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
    const message = createBaseMsgVoteResponse();
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
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message) {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExec() {
  return {
    proposalId: BigInt(0),
    signer: ""
  };
}
export const MsgExec = {
  typeUrl: "/cosmos.group.v1.MsgExec",
  encode(message, writer = BinaryWriter.create()) {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$signer;
    const message = createBaseMsgExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.signer = (_object$signer = object.signer) !== null && _object$signer !== void 0 ? _object$signer : "";
    return message;
  },
  fromAmino(object) {
    return {
      proposalId: BigInt(object.proposal_id),
      signer: object.signer
    };
  },
  toAmino(message) {
    const obj = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/group/MsgExec",
      value: MsgExec.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgExec.decode(message.value);
  },
  toProto(message) {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
function createBaseMsgExecResponse() {
  return {};
}
export const MsgExecResponse = {
  typeUrl: "/cosmos.group.v1.MsgExecResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
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
    const message = createBaseMsgExecResponse();
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
    return MsgExecResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgExecResponse",
      value: MsgExecResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgExecResponse.decode(message.value);
  },
  toProto(message) {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGroup() {
  return {
    address: "",
    groupId: BigInt(0)
  };
}
export const MsgLeaveGroup = {
  typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$address7;
    const message = createBaseMsgLeaveGroup();
    message.address = (_object$address7 = object.address) !== null && _object$address7 !== void 0 ? _object$address7 : "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      address: object.address,
      groupId: BigInt(object.group_id)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgLeaveGroup.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/group/MsgLeaveGroup",
      value: MsgLeaveGroup.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgLeaveGroup.decode(message.value);
  },
  toProto(message) {
    return MsgLeaveGroup.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
      value: MsgLeaveGroup.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGroupResponse() {
  return {};
}
export const MsgLeaveGroupResponse = {
  typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();
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
    const message = createBaseMsgLeaveGroupResponse();
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
    return MsgLeaveGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgLeaveGroupResponse",
      value: MsgLeaveGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgLeaveGroupResponse.decode(message.value);
  },
  toProto(message) {
    return MsgLeaveGroupResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
      value: MsgLeaveGroupResponse.encode(message).finish()
    };
  }
};