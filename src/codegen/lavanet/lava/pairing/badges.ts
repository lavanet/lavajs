import { Badge, BadgeSDKType } from "./relay";
import { StakeEntry, StakeEntrySDKType } from "../epochstorage/stake_entry";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface GenerateBadgeRequest {
  badgeAddress: string;
  projectId: string;
  specId?: string;
}
export interface GenerateBadgeRequestSDKType {
  badge_address: string;
  project_id: string;
  spec_id?: string;
}
export interface GenerateBadgeResponse {
  badge: Badge;
  pairingList?: StakeEntry[];
  badgeSignerAddress: string;
}
export interface GenerateBadgeResponseSDKType {
  badge: BadgeSDKType;
  pairing_list?: StakeEntrySDKType[];
  badge_signer_address: string;
}
function createBaseGenerateBadgeRequest(): GenerateBadgeRequest {
  return {
    badgeAddress: "",
    projectId: "",
    specId: undefined
  };
}
export const GenerateBadgeRequest = {
  typeUrl: "/lavanet.lava.pairing.GenerateBadgeRequest",
  encode(message: GenerateBadgeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.badgeAddress !== "") {
      writer.uint32(10).string(message.badgeAddress);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.specId !== undefined) {
      writer.uint32(26).string(message.specId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenerateBadgeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateBadgeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badgeAddress = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.specId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenerateBadgeRequest>): GenerateBadgeRequest {
    const message = createBaseGenerateBadgeRequest();
    message.badgeAddress = object.badgeAddress ?? "";
    message.projectId = object.projectId ?? "";
    message.specId = object.specId ?? undefined;
    return message;
  },
  fromAmino(object: GenerateBadgeRequestAmino): GenerateBadgeRequest {
    return {
      badgeAddress: object.badge_address,
      projectId: object.project_id,
      specId: object?.spec_id
    };
  },
  toAmino(message: GenerateBadgeRequest): GenerateBadgeRequestAmino {
    const obj: any = {};
    obj.badge_address = message.badgeAddress;
    obj.project_id = message.projectId;
    obj.spec_id = message.specId;
    return obj;
  },
  fromAminoMsg(object: GenerateBadgeRequestAminoMsg): GenerateBadgeRequest {
    return GenerateBadgeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GenerateBadgeRequestProtoMsg): GenerateBadgeRequest {
    return GenerateBadgeRequest.decode(message.value);
  },
  toProto(message: GenerateBadgeRequest): Uint8Array {
    return GenerateBadgeRequest.encode(message).finish();
  },
  toProtoMsg(message: GenerateBadgeRequest): GenerateBadgeRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.GenerateBadgeRequest",
      value: GenerateBadgeRequest.encode(message).finish()
    };
  }
};
function createBaseGenerateBadgeResponse(): GenerateBadgeResponse {
  return {
    badge: Badge.fromPartial({}),
    pairingList: undefined,
    badgeSignerAddress: ""
  };
}
export const GenerateBadgeResponse = {
  typeUrl: "/lavanet.lava.pairing.GenerateBadgeResponse",
  encode(message: GenerateBadgeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.badge !== undefined) {
      Badge.encode(message.badge, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pairingList) {
      StakeEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.badgeSignerAddress !== "") {
      writer.uint32(26).string(message.badgeSignerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenerateBadgeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateBadgeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badge = Badge.decode(reader, reader.uint32());
          break;
        case 2:
          message.pairingList.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.badgeSignerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenerateBadgeResponse>): GenerateBadgeResponse {
    const message = createBaseGenerateBadgeResponse();
    message.badge = object.badge !== undefined && object.badge !== null ? Badge.fromPartial(object.badge) : undefined;
    message.pairingList = object.pairingList?.map(e => StakeEntry.fromPartial(e)) || [];
    message.badgeSignerAddress = object.badgeSignerAddress ?? "";
    return message;
  },
  fromAmino(object: GenerateBadgeResponseAmino): GenerateBadgeResponse {
    return {
      badge: object?.badge ? Badge.fromAmino(object.badge) : undefined,
      pairingList: Array.isArray(object?.pairing_list) ? object.pairing_list.map((e: any) => StakeEntry.fromAmino(e)) : [],
      badgeSignerAddress: object.badge_signer_address
    };
  },
  toAmino(message: GenerateBadgeResponse): GenerateBadgeResponseAmino {
    const obj: any = {};
    obj.badge = message.badge ? Badge.toAmino(message.badge) : undefined;
    if (message.pairingList) {
      obj.pairing_list = message.pairingList.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.pairing_list = [];
    }
    obj.badge_signer_address = message.badgeSignerAddress;
    return obj;
  },
  fromAminoMsg(object: GenerateBadgeResponseAminoMsg): GenerateBadgeResponse {
    return GenerateBadgeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GenerateBadgeResponseProtoMsg): GenerateBadgeResponse {
    return GenerateBadgeResponse.decode(message.value);
  },
  toProto(message: GenerateBadgeResponse): Uint8Array {
    return GenerateBadgeResponse.encode(message).finish();
  },
  toProtoMsg(message: GenerateBadgeResponse): GenerateBadgeResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.GenerateBadgeResponse",
      value: GenerateBadgeResponse.encode(message).finish()
    };
  }
};