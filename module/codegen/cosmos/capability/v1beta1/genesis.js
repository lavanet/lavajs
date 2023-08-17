import { CapabilityOwners } from "./capability";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisOwners defines the capability owners with their corresponding index. */

/** GenesisOwners defines the capability owners with their corresponding index. */

/** GenesisState defines the capability module's genesis state. */

/** GenesisState defines the capability module's genesis state. */

function createBaseGenesisOwners() {
  return {
    index: BigInt(0),
    indexOwners: CapabilityOwners.fromPartial({})
  };
}
export const GenesisOwners = {
  typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.indexOwners !== undefined) {
      CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisOwners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.indexOwners = CapabilityOwners.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisOwners();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.indexOwners = object.indexOwners !== undefined && object.indexOwners !== null ? CapabilityOwners.fromPartial(object.indexOwners) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      index: BigInt(object.index),
      indexOwners: object !== null && object !== void 0 && object.index_owners ? CapabilityOwners.fromAmino(object.index_owners) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index ? message.index.toString() : undefined;
    obj.index_owners = message.indexOwners ? CapabilityOwners.toAmino(message.indexOwners) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisOwners.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisOwners",
      value: GenesisOwners.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisOwners.decode(message.value);
  },
  toProto(message) {
    return GenesisOwners.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
      value: GenesisOwners.encode(message).finish()
    };
  }
};
function createBaseGenesisState() {
  return {
    index: BigInt(0),
    owners: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.capability.v1beta1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    for (const v of message.owners) {
      GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$owners;
    const message = createBaseGenesisState();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.owners = ((_object$owners = object.owners) === null || _object$owners === void 0 ? void 0 : _object$owners.map(e => GenesisOwners.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      index: BigInt(object.index),
      owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners) ? object.owners.map(e => GenesisOwners.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index ? message.index.toString() : undefined;
    if (message.owners) {
      obj.owners = message.owners.map(e => e ? GenesisOwners.toAmino(e) : undefined);
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};