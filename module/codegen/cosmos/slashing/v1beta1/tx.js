import * as _m0 from "protobufjs/minimal";

/** MsgUnjail defines the Msg/Unjail request type */

/** MsgUnjail defines the Msg/Unjail request type */

/** MsgUnjailResponse defines the Msg/Unjail response type */

/** MsgUnjailResponse defines the Msg/Unjail response type */

function createBaseMsgUnjail() {
  return {
    validatorAddr: ""
  };
}
export const MsgUnjail = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$validatorAddr;
    const message = createBaseMsgUnjail();
    message.validatorAddr = (_object$validatorAddr = object.validatorAddr) !== null && _object$validatorAddr !== void 0 ? _object$validatorAddr : "";
    return message;
  }
};
function createBaseMsgUnjailResponse() {
  return {};
}
export const MsgUnjailResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgUnjailResponse();
    return message;
  }
};