import { Params } from "./params";
import { RawMessage } from "../common/fixationEntry";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the subscription module's genesis state. */

/** GenesisState defines the subscription module's genesis state. */

function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    subsFS: [],
    subsTS: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.subscription.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.subsFS) {
      RawMessage.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.subsTS) {
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
          message.subsFS.push(RawMessage.decode(reader, reader.uint32()));
          break;
        case 3:
          message.subsTS.push(RawMessage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$subsFS, _object$subsTS;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.subsFS = ((_object$subsFS = object.subsFS) === null || _object$subsFS === void 0 ? void 0 : _object$subsFS.map(e => RawMessage.fromPartial(e))) || [];
    message.subsTS = ((_object$subsTS = object.subsTS) === null || _object$subsTS === void 0 ? void 0 : _object$subsTS.map(e => RawMessage.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      params: object !== null && object !== void 0 && object.params ? Params.fromAmino(object.params) : undefined,
      subsFS: Array.isArray(object === null || object === void 0 ? void 0 : object.subsFS) ? object.subsFS.map(e => RawMessage.fromAmino(e)) : [],
      subsTS: Array.isArray(object === null || object === void 0 ? void 0 : object.subsTS) ? object.subsTS.map(e => RawMessage.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.subsFS) {
      obj.subsFS = message.subsFS.map(e => e ? RawMessage.toAmino(e) : undefined);
    } else {
      obj.subsFS = [];
    }
    if (message.subsTS) {
      obj.subsTS = message.subsTS.map(e => e ? RawMessage.toAmino(e) : undefined);
    } else {
      obj.subsTS = [];
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
      typeUrl: "/lavanet.lava.subscription.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};