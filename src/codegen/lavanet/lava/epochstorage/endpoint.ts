import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Endpoint {
  iPPORT: string;
  geolocation: bigint;
  addons: string[];
  apiInterfaces: string[];
  extensions: string[];
}
export interface EndpointSDKType {
  iPPORT: string;
  geolocation: bigint;
  addons: string[];
  api_interfaces: string[];
  extensions: string[];
}
function createBaseEndpoint(): Endpoint {
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
  encode(message: Endpoint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iPPORT !== "") {
      writer.uint32(10).string(message.iPPORT);
    }
    if (message.geolocation !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Endpoint {
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
  fromPartial(object: Partial<Endpoint>): Endpoint {
    const message = createBaseEndpoint();
    message.iPPORT = object.iPPORT ?? "";
    message.geolocation = object.geolocation !== undefined && object.geolocation !== null ? BigInt(object.geolocation.toString()) : BigInt(0);
    message.addons = object.addons?.map(e => e) || [];
    message.apiInterfaces = object.apiInterfaces?.map(e => e) || [];
    message.extensions = object.extensions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EndpointAmino): Endpoint {
    return {
      iPPORT: object.iPPORT,
      geolocation: BigInt(object.geolocation),
      addons: Array.isArray(object?.addons) ? object.addons.map((e: any) => e) : [],
      apiInterfaces: Array.isArray(object?.api_interfaces) ? object.api_interfaces.map((e: any) => e) : [],
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => e) : []
    };
  },
  toAmino(message: Endpoint): EndpointAmino {
    const obj: any = {};
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
  fromAminoMsg(object: EndpointAminoMsg): Endpoint {
    return Endpoint.fromAmino(object.value);
  },
  fromProtoMsg(message: EndpointProtoMsg): Endpoint {
    return Endpoint.decode(message.value);
  },
  toProto(message: Endpoint): Uint8Array {
    return Endpoint.encode(message).finish();
  },
  toProtoMsg(message: Endpoint): EndpointProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.Endpoint",
      value: Endpoint.encode(message).finish()
    };
  }
};