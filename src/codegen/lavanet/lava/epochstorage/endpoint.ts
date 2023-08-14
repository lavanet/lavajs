import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Endpoint {
  iPPORT: string;
  geolocation: Long;
  addons: string[];
  apiInterfaces: string[];
  extensions: string[];
}
export interface EndpointSDKType {
  iPPORT: string;
  geolocation: Long;
  addons: string[];
  api_interfaces: string[];
  extensions: string[];
}
function createBaseEndpoint(): Endpoint {
  return {
    iPPORT: "",
    geolocation: Long.UZERO,
    addons: [],
    apiInterfaces: [],
    extensions: []
  };
}
export const Endpoint = {
  encode(message: Endpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iPPORT !== "") {
      writer.uint32(10).string(message.iPPORT);
    }
    if (!message.geolocation.isZero()) {
      writer.uint32(24).uint64(message.geolocation);
    }
    for (const v of message.addons) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.apiInterfaces) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.extensions) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
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
          message.geolocation = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<Endpoint>): Endpoint {
    const message = createBaseEndpoint();
    message.iPPORT = object.iPPORT ?? "";
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? Long.fromValue(object.geolocation) : Long.UZERO;
    message.addons = object.addons?.map(e => e) || [];
    message.apiInterfaces = object.apiInterfaces?.map(e => e) || [];
    message.extensions = object.extensions?.map(e => e) || [];
    return message;
  }
};