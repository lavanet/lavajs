import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseEndpoint() {
  return {
    iPPORT: "",
    geolocation: BigInt(0),
    addons: [],
    apiInterfaces: [],
    extensions: []
  };
}
export const Endpoint = {
  typeUrl: "/lavanet.lava.epochstorage.Endpoint",
  encode(message, writer = BinaryWriter.create()) {
    if (message.iPPORT !== "") {
      writer.uint32(10).string(message.iPPORT);
    }
    if (message.geolocation !== BigInt(0)) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? BigInt(object.geolocation.toString()) : BigInt(0);
    message.addons = ((_object$addons = object.addons) === null || _object$addons === void 0 ? void 0 : _object$addons.map(e => e)) || [];
    message.apiInterfaces = ((_object$apiInterfaces = object.apiInterfaces) === null || _object$apiInterfaces === void 0 ? void 0 : _object$apiInterfaces.map(e => e)) || [];
    message.extensions = ((_object$extensions = object.extensions) === null || _object$extensions === void 0 ? void 0 : _object$extensions.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      iPPORT: object.iPPORT,
      geolocation: BigInt(object.geolocation),
      addons: Array.isArray(object === null || object === void 0 ? void 0 : object.addons) ? object.addons.map(e => e) : [],
      apiInterfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.api_interfaces) ? object.api_interfaces.map(e => e) : [],
      extensions: Array.isArray(object === null || object === void 0 ? void 0 : object.extensions) ? object.extensions.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.iPPORT = message.iPPORT;
    obj.geolocation = message.geolocation ? message.geolocation.toString() : undefined;
    if (message.addons) {
      obj.addons = message.addons.map(e => e);
    } else {
      obj.addons = [];
    }
    if (message.apiInterfaces) {
      obj.api_interfaces = message.apiInterfaces.map(e => e);
    } else {
      obj.api_interfaces = [];
    }
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e);
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Endpoint.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Endpoint.decode(message.value);
  },
  toProto(message) {
    return Endpoint.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.epochstorage.Endpoint",
      value: Endpoint.encode(message).finish()
    };
  }
};