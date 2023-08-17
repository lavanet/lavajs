import { Badge } from "./relay";
import { StakeEntry } from "../epochstorage/stake_entry";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenerateBadgeRequest() {
  return {
    badgeAddress: "",
    projectId: "",
    specId: undefined
  };
}
export const GenerateBadgeRequest = {
  typeUrl: "/lavanet.lava.pairing.GenerateBadgeRequest",
  encode(message, writer = BinaryWriter.create()) {
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
  decode(input, length) {
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
  fromPartial(object) {
    var _object$badgeAddress, _object$projectId, _object$specId;
    const message = createBaseGenerateBadgeRequest();
    message.badgeAddress = (_object$badgeAddress = object.badgeAddress) !== null && _object$badgeAddress !== void 0 ? _object$badgeAddress : "";
    message.projectId = (_object$projectId = object.projectId) !== null && _object$projectId !== void 0 ? _object$projectId : "";
    message.specId = (_object$specId = object.specId) !== null && _object$specId !== void 0 ? _object$specId : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      badgeAddress: object.badge_address,
      projectId: object.project_id,
      specId: object === null || object === void 0 ? void 0 : object.spec_id
    };
  },
  toAmino(message) {
    const obj = {};
    obj.badge_address = message.badgeAddress;
    obj.project_id = message.projectId;
    obj.spec_id = message.specId;
    return obj;
  },
  fromAminoMsg(object) {
    return GenerateBadgeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenerateBadgeRequest.decode(message.value);
  },
  toProto(message) {
    return GenerateBadgeRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.GenerateBadgeRequest",
      value: GenerateBadgeRequest.encode(message).finish()
    };
  }
};
function createBaseGenerateBadgeResponse() {
  return {
    badge: Badge.fromPartial({}),
    pairingList: undefined,
    badgeSignerAddress: ""
  };
}
export const GenerateBadgeResponse = {
  typeUrl: "/lavanet.lava.pairing.GenerateBadgeResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.badge !== undefined) {
      Badge.encode(message.badge, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pairingList) {
      StakeEntry.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.badgeSignerAddress !== "") {
      writer.uint32(26).string(message.badgeSignerAddress);
    }
    return writer;
  },
  decode(input, length) {
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
  fromPartial(object) {
    var _object$pairingList, _object$badgeSignerAd;
    const message = createBaseGenerateBadgeResponse();
    message.badge = object.badge !== undefined && object.badge !== null ? Badge.fromPartial(object.badge) : undefined;
    message.pairingList = ((_object$pairingList = object.pairingList) === null || _object$pairingList === void 0 ? void 0 : _object$pairingList.map(e => StakeEntry.fromPartial(e))) || [];
    message.badgeSignerAddress = (_object$badgeSignerAd = object.badgeSignerAddress) !== null && _object$badgeSignerAd !== void 0 ? _object$badgeSignerAd : "";
    return message;
  },
  fromAmino(object) {
    return {
      badge: object !== null && object !== void 0 && object.badge ? Badge.fromAmino(object.badge) : undefined,
      pairingList: Array.isArray(object === null || object === void 0 ? void 0 : object.pairing_list) ? object.pairing_list.map(e => StakeEntry.fromAmino(e)) : [],
      badgeSignerAddress: object.badge_signer_address
    };
  },
  toAmino(message) {
    const obj = {};
    obj.badge = message.badge ? Badge.toAmino(message.badge) : undefined;
    if (message.pairingList) {
      obj.pairing_list = message.pairingList.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.pairing_list = [];
    }
    obj.badge_signer_address = message.badgeSignerAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return GenerateBadgeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenerateBadgeResponse.decode(message.value);
  },
  toProto(message) {
    return GenerateBadgeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.pairing.GenerateBadgeResponse",
      value: GenerateBadgeResponse.encode(message).finish()
    };
  }
};