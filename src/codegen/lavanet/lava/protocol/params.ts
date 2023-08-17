import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Version {
  providerTarget: string;
  providerMin: string;
  consumerTarget: string;
  consumerMin: string;
}
/** Params defines the parameters for the module. */
export interface VersionSDKType {
  provider_target: string;
  provider_min: string;
  consumer_target: string;
  consumer_min: string;
}
export interface Params {
  version: Version;
}
export interface ParamsSDKType {
  version: VersionSDKType;
}
function createBaseVersion(): Version {
  return {
    providerTarget: "",
    providerMin: "",
    consumerTarget: "",
    consumerMin: ""
  };
}
export const Version = {
  typeUrl: "/lavanet.lava.protocol.Version",
  encode(message: Version, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Version {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Version>): Version {
    const message = createBaseVersion();
    message.providerTarget = object.providerTarget ?? "";
    message.providerMin = object.providerMin ?? "";
    message.consumerTarget = object.consumerTarget ?? "";
    message.consumerMin = object.consumerMin ?? "";
    return message;
  },
  fromAmino(object: VersionAmino): Version {
    return {
      providerTarget: object.provider_target,
      providerMin: object.provider_min,
      consumerTarget: object.consumer_target,
      consumerMin: object.consumer_min
    };
  },
  toAmino(message: Version): VersionAmino {
    const obj: any = {};
    obj.provider_target = message.providerTarget;
    obj.provider_min = message.providerMin;
    obj.consumer_target = message.consumerTarget;
    obj.consumer_min = message.consumerMin;
    return obj;
  },
  fromAminoMsg(object: VersionAminoMsg): Version {
    return Version.fromAmino(object.value);
  },
  fromProtoMsg(message: VersionProtoMsg): Version {
    return Version.decode(message.value);
  },
  toProto(message: Version): Uint8Array {
    return Version.encode(message).finish();
  },
  toProtoMsg(message: Version): VersionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.protocol.Version",
      value: Version.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    version: Version.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.protocol.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      version: object?.version ? Version.fromAmino(object.version) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.version = message.version ? Version.toAmino(message.version) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.protocol.Params",
      value: Params.encode(message).finish()
    };
  }
};