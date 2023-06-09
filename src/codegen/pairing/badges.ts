import { Badge, BadgeSDKType } from "./relay";
import { StakeEntry, StakeEntrySDKType } from "../epochstorage/stake_entry";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export interface GenerateBadgeRequest {
  badgeAddress: string;
  projectId: string;
  specId: string;
}
export interface GenerateBadgeRequestSDKType {
  badge_address: string;
  project_id: string;
  spec_id: string;
}
export interface GenerateBadgeResponse {
  badge?: Badge;
  pairingList: StakeEntry[];
  badgeSignerAddress: string;
}
export interface GenerateBadgeResponseSDKType {
  badge?: BadgeSDKType;
  pairing_list: StakeEntrySDKType[];
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
  encode(message: GenerateBadgeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateBadgeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): GenerateBadgeRequest {
    return {
      badgeAddress: isSet(object.badgeAddress) ? String(object.badgeAddress) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      specId: isSet(object.specId) ? String(object.specId) : undefined
    };
  },
  toJSON(message: GenerateBadgeRequest): unknown {
    const obj: any = {};
    message.badgeAddress !== undefined && (obj.badgeAddress = message.badgeAddress);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.specId !== undefined && (obj.specId = message.specId);
    return obj;
  },
  fromPartial(object: Partial<GenerateBadgeRequest>): GenerateBadgeRequest {
    const message = createBaseGenerateBadgeRequest();
    message.badgeAddress = object.badgeAddress ?? "";
    message.projectId = object.projectId ?? "";
    message.specId = object.specId ?? undefined;
    return message;
  }
};
function createBaseGenerateBadgeResponse(): GenerateBadgeResponse {
  return {
    badge: undefined,
    pairingList: undefined,
    badgeSignerAddress: ""
  };
}
export const GenerateBadgeResponse = {
  encode(message: GenerateBadgeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateBadgeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): GenerateBadgeResponse {
    return {
      badge: isSet(object.badge) ? Badge.fromJSON(object.badge) : undefined,
      pairingList: Array.isArray(object?.pairingList) ? object.pairingList.map((e: any) => StakeEntry.fromJSON(e)) : [],
      badgeSignerAddress: isSet(object.badgeSignerAddress) ? String(object.badgeSignerAddress) : ""
    };
  },
  toJSON(message: GenerateBadgeResponse): unknown {
    const obj: any = {};
    message.badge !== undefined && (obj.badge = message.badge ? Badge.toJSON(message.badge) : undefined);
    if (message.pairingList) {
      obj.pairingList = message.pairingList.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.pairingList = [];
    }
    message.badgeSignerAddress !== undefined && (obj.badgeSignerAddress = message.badgeSignerAddress);
    return obj;
  },
  fromPartial(object: Partial<GenerateBadgeResponse>): GenerateBadgeResponse {
    const message = createBaseGenerateBadgeResponse();
    message.badge = object.badge !== undefined && object.badge !== null ? Badge.fromPartial(object.badge) : undefined;
    message.pairingList = object.pairingList?.map(e => StakeEntry.fromPartial(e)) || [];
    message.badgeSignerAddress = object.badgeSignerAddress ?? "";
    return message;
  }
};