import { Class, NFT } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the nft module's genesis state. */

/** GenesisState defines the nft module's genesis state. */

/** Entry Defines all nft owned by a person */

/** Entry Defines all nft owned by a person */

function createBaseGenesisState() {
  return {
    classes: [],
    entries: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.classes) {
      Class.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      Entry.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 2:
          message.entries.push(Entry.decode(reader, reader.uint32()));
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
      classes: Array.isArray(object === null || object === void 0 ? void 0 : object.classes) ? object.classes.map(e => Class.fromJSON(e)) : [],
      entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(e => Entry.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$classes, _object$entries;
    const message = createBaseGenesisState();
    message.classes = ((_object$classes = object.classes) === null || _object$classes === void 0 ? void 0 : _object$classes.map(e => Class.fromPartial(e))) || [];
    message.entries = ((_object$entries = object.entries) === null || _object$entries === void 0 ? void 0 : _object$entries.map(e => Entry.fromPartial(e))) || [];
    return message;
  }
};
function createBaseEntry() {
  return {
    owner: "",
    nfts: []
  };
}
export const Entry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.nfts) {
      NFT.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts) ? object.nfts.map(e => NFT.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$owner, _object$nfts;
    const message = createBaseEntry();
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    message.nfts = ((_object$nfts = object.nfts) === null || _object$nfts === void 0 ? void 0 : _object$nfts.map(e => NFT.fromPartial(e))) || [];
    return message;
  }
};