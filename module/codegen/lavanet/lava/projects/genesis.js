import { Params } from "./params";
import { RawMessage } from "../common/fixationEntry";
import * as _m0 from "protobufjs/minimal";

/** GenesisState defines the projects module's genesis state. */

/** GenesisState defines the projects module's genesis state. */

function createBaseGenesisState() {
  return {
    params: undefined,
    projectsFS: [],
    developerFS: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};