import { Params, ParamsSDKType } from "./params";
import { RawMessage, RawMessageSDKType } from "../common/fixationEntry";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the plan module's genesis state. */
export interface GenesisState {
  params?: Params;
  plansFS: RawMessage[];
}
/** GenesisState defines the plan module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  plansFS: RawMessageSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    plansFS: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.plansFS) {
      RawMessage.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.plansFS.push(RawMessage.decode(reader, reader.uint32()));
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
    message.plansFS = object.plansFS?.map(e => RawMessage.fromPartial(e)) || [];
    return message;
  }
};