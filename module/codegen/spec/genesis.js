import { Params } from "./params";
import { Spec } from "./spec";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the spec module's genesis state. */

/** GenesisState defines the spec module's genesis state. */

function createBaseGenesisState() {
  return {
    params: undefined,
    specList: [],
    specCount: Long.UZERO
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.specList) {
      Spec.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (!message.specCount.isZero()) {
      writer.uint32(24).uint64(message.specCount);
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
          message.specList.push(Spec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.specCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$specList;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.specList = ((_object$specList = object.specList) === null || _object$specList === void 0 ? void 0 : _object$specList.map(e => Spec.fromPartial(e))) || [];
    message.specCount = object.specCount !== undefined && object.specCount !== null ? Long.fromValue(object.specCount) : Long.UZERO;
    return message;
  }
};