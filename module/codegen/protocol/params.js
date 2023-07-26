import * as _m0 from "protobufjs/minimal";

/** Params defines the parameters for the module. */

/** Params defines the parameters for the module. */

function createBaseVersion() {
  return {
    providerTarget: "",
    providerMin: "",
    consumerTarget: "",
    consumerMin: ""
  };
}
export const Version = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.providerTarget !== "") {
      writer.uint32(10).string(message.providerTarget);
    }
    if (message.providerMin !== "") {
      writer.uint32(18).string(message.providerMin);
    }
    if (message.consumerTarget !== "") {
      writer.uint32(26).string(message.consumerTarget);
    }
    if (message.consumerMin !== "") {
      writer.uint32(34).string(message.consumerMin);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerTarget = reader.string();
          break;
        case 2:
          message.providerMin = reader.string();
          break;
        case 3:
          message.consumerTarget = reader.string();
          break;
        case 4:
          message.consumerMin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$providerTarge, _object$providerMin, _object$consumerTarge, _object$consumerMin;
    const message = createBaseVersion();
    message.providerTarget = (_object$providerTarge = object.providerTarget) !== null && _object$providerTarge !== void 0 ? _object$providerTarge : "";
    message.providerMin = (_object$providerMin = object.providerMin) !== null && _object$providerMin !== void 0 ? _object$providerMin : "";
    message.consumerTarget = (_object$consumerTarge = object.consumerTarget) !== null && _object$consumerTarge !== void 0 ? _object$consumerTarge : "";
    message.consumerMin = (_object$consumerMin = object.consumerMin) !== null && _object$consumerMin !== void 0 ? _object$consumerMin : "";
    return message;
  }
};
function createBaseParams() {
  return {
    version: undefined
  };
}
export const Params = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Version.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseParams();
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    return message;
  }
};