import { Params, ParamsSDKType } from "./params";
import { RawMessage, RawMessageSDKType } from "../common/fixationEntry";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the projects module's genesis state. */
export interface GenesisState {
  params?: Params;
  projectsFS: RawMessage[];
  developerFS: RawMessage[];
}
/** GenesisState defines the projects module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  projectsFS: RawMessageSDKType[];
  developerFS: RawMessageSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    projectsFS: [],
    developerFS: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.projectsFS) {
      RawMessage.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.developerFS) {
      RawMessage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
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
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.projectsFS = object.projectsFS?.map(e => RawMessage.fromPartial(e)) || [];
    message.developerFS = object.developerFS?.map(e => RawMessage.fromPartial(e)) || [];
    return message;
  }
};