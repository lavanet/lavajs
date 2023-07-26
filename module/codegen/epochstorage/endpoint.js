import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseEndpoint() {
  return {
    iPPORT: "",
    useType: "",
    geolocation: Long.UZERO
  };
}
export const Endpoint = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.iPPORT !== "") {
      writer.uint32(10).string(message.iPPORT);
    }
    if (message.useType !== "") {
      writer.uint32(18).string(message.useType);
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(24).uint64(message.geolocation);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iPPORT = reader.string();
          break;
        case 2:
          message.useType = reader.string();
          break;
        case 3:
          message.geolocation = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$iPPORT, _object$useType;
    const message = createBaseEndpoint();
    message.iPPORT = (_object$iPPORT = object.iPPORT) !== null && _object$iPPORT !== void 0 ? _object$iPPORT : "";
    message.useType = (_object$useType = object.useType) !== null && _object$useType !== void 0 ? _object$useType : "";
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? Long.fromValue(object.geolocation) : Long.UZERO;
    return message;
  }
};