import { Params } from "./auth";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the auth module's genesis state. */

/** GenesisState defines the auth module's genesis state. */

function createBaseGenesisState() {
  return {
    params: undefined,
    accounts: []
  };
}
export const GenesisState = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accounts) {
      Any.encode(v, writer.uint32(18).fork()).ldelim();
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
          message.accounts.push(Any.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map(e => Any.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$accounts;
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.accounts = ((_object$accounts = object.accounts) === null || _object$accounts === void 0 ? void 0 : _object$accounts.map(e => Any.fromPartial(e))) || [];
    return message;
  }
};