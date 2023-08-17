import { Params } from "./params";
import { RawMessage } from "../common/fixationEntry";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the projects module's genesis state. */

/** GenesisState defines the projects module's genesis state. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    projectsFS: [],
    developerFS: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.projects.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.projectsFS) {
      RawMessage.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.developerFS) {
      RawMessage.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.projectsFS.push(RawMessage.decode(reader, reader.uint32()));
          break;
        case 3:
          message.developerFS.push(RawMessage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$projectsFS, _object$developerFS;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.projectsFS = ((_object$projectsFS = object.projectsFS) === null || _object$projectsFS === void 0 ? void 0 : _object$projectsFS.map(e => RawMessage.fromPartial(e))) || [];
    message.developerFS = ((_object$developerFS = object.developerFS) === null || _object$developerFS === void 0 ? void 0 : _object$developerFS.map(e => RawMessage.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined,
      projectsFS: Array.isArray(object === null || object === void 0 ? void 0 : object.projectsFS) ? object.projectsFS.map(e => RawMessage.fromAmino(e)) : [],
      developerFS: Array.isArray(object === null || object === void 0 ? void 0 : object.developerFS) ? object.developerFS.map(e => RawMessage.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.projectsFS) {
      obj.projectsFS = message.projectsFS.map(e => e ? RawMessage.toAmino(e) : undefined);
    } else {
      obj.projectsFS = [];
    }
    if (message.developerFS) {
      obj.developerFS = message.developerFS.map(e => e ? RawMessage.toAmino(e) : undefined);
    } else {
      obj.developerFS = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.projects.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};