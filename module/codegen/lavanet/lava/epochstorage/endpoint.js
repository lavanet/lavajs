import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseEndpoint() {
  return {
    iPPORT: "",
    geolocation: Long.UZERO,
    addons: [],
    apiInterfaces: [],
    extensions: []
  };
}
export const Endpoint = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.iPPORT !== "") {
      writer.uint32(10).string(message.iPPORT);
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(24).uint64(message.geolocation);
    }
    for (const v of message.addons) {
      writer.uint32(34).string(v);
    }
    for (const v of message.apiInterfaces) {
      writer.uint32(42).string(v);
    }
    for (const v of message.extensions) {
      writer.uint32(50).string(v);
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
        case 3:
          message.geolocation = reader.uint64();
          break;
        case 4:
          message.addons.push(reader.string());
          break;
        case 5:
          message.apiInterfaces.push(reader.string());
          break;
        case 6:
          message.extensions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$iPPORT, _object$addons, _object$apiInterfaces, _object$extensions;
    const message = createBaseEndpoint();
    message.iPPORT = (_object$iPPORT = object.iPPORT) !== null && _object$iPPORT !== void 0 ? _object$iPPORT : "";
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? Long.fromValue(object.geolocation) : Long.UZERO;
    message.addons = ((_object$addons = object.addons) === null || _object$addons === void 0 ? void 0 : _object$addons.map(e => e)) || [];
    message.apiInterfaces = ((_object$apiInterfaces = object.apiInterfaces) === null || _object$apiInterfaces === void 0 ? void 0 : _object$apiInterfaces.map(e => e)) || [];
    message.extensions = ((_object$extensions = object.extensions) === null || _object$extensions === void 0 ? void 0 : _object$extensions.map(e => e)) || [];
    return message;
  }
};