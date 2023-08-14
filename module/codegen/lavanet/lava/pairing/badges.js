import { Badge } from "./relay";
import { StakeEntry } from "../epochstorage/stake_entry";
import * as _m0 from "protobufjs/minimal";
function createBaseGenerateBadgeRequest() {
  return {
    badgeAddress: "",
    projectId: "",
    specId: undefined
  };
}
export const GenerateBadgeRequest = {
  encode(message, writer = _m0.Writer.create()) {
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
  fromPartial(object) {
    var _object$badgeAddress, _object$projectId, _object$specId;
    const message = createBaseGenerateBadgeRequest();
    message.badgeAddress = (_object$badgeAddress = object.badgeAddress) !== null && _object$badgeAddress !== void 0 ? _object$badgeAddress : "";
    message.projectId = (_object$projectId = object.projectId) !== null && _object$projectId !== void 0 ? _object$projectId : "";
    message.specId = (_object$specId = object.specId) !== null && _object$specId !== void 0 ? _object$specId : undefined;
    return message;
  }
};
function createBaseGenerateBadgeResponse() {
  return {
    badge: undefined,
    pairingList: undefined,
    badgeSignerAddress: ""
  };
}
export const GenerateBadgeResponse = {
  encode(message, writer = _m0.Writer.create()) {
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
  fromPartial(object) {
    var _object$pairingList, _object$badgeSignerAd;
    const message = createBaseGenerateBadgeResponse();
    message.badge = object.badge !== undefined && object.badge !== null ? Badge.fromPartial(object.badge) : undefined;
    message.pairingList = ((_object$pairingList = object.pairingList) === null || _object$pairingList === void 0 ? void 0 : _object$pairingList.map(e => StakeEntry.fromPartial(e))) || [];
    message.badgeSignerAddress = (_object$badgeSignerAd = object.badgeSignerAddress) !== null && _object$badgeSignerAd !== void 0 ? _object$badgeSignerAd : "";
    return message;
  }
};