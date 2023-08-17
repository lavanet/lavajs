import { Params } from "./params";
import { RawMessage } from "../common/fixationEntry";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the plan module's genesis state. */

/** GenesisState defines the plan module's genesis state. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    plansFS: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.plans.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.plansFS) {
      RawMessage.encode(v, writer.uint32(18).fork()).ldelim();
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
          message.plansFS.push(RawMessage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$plansFS;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.plansFS = ((_object$plansFS = object.plansFS) === null || _object$plansFS === void 0 ? void 0 : _object$plansFS.map(e => RawMessage.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined,
      plansFS: Array.isArray(object === null || object === void 0 ? void 0 : object.plansFS) ? object.plansFS.map(e => RawMessage.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.plansFS) {
      obj.plansFS = message.plansFS.map(e => e ? RawMessage.toAmino(e) : undefined);
    } else {
      obj.plansFS = [];
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
      typeUrl: "/lavanet.lava.plans.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};