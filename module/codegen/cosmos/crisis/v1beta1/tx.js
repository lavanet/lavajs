import * as _m0 from "protobufjs/minimal";

/** MsgVerifyInvariant represents a message to verify a particular invariance. */

/** MsgVerifyInvariant represents a message to verify a particular invariance. */

/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */

/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */

function createBaseMsgVerifyInvariant() {
  return {
    sender: "",
    invariantModuleName: "",
    invariantRoute: ""
  };
}
export const MsgVerifyInvariant = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariantModuleName !== "") {
      writer.uint32(18).string(message.invariantModuleName);
    }
    if (message.invariantRoute !== "") {
      writer.uint32(26).string(message.invariantRoute);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invariantModuleName = reader.string();
          break;
        case 3:
          message.invariantRoute = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$sender, _object$invariantModu, _object$invariantRout;
    const message = createBaseMsgVerifyInvariant();
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.invariantModuleName = (_object$invariantModu = object.invariantModuleName) !== null && _object$invariantModu !== void 0 ? _object$invariantModu : "";
    message.invariantRoute = (_object$invariantRout = object.invariantRoute) !== null && _object$invariantRout !== void 0 ? _object$invariantRout : "";
    return message;
  }
};
function createBaseMsgVerifyInvariantResponse() {
  return {};
}
export const MsgVerifyInvariantResponse = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();
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
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  }
};