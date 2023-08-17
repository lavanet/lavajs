import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */

/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */

/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */

/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */

/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */

/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */

function createBaseCapability() {
  return {
    index: BigInt(0)
  };
}
export const Capability = {
  typeUrl: "/cosmos.capability.v1beta1.Capability",
  encode(message, writer = BinaryWriter.create()) {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCapability();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    return {
      index: BigInt(object.index)
    };
  },
  toAmino(message) {
    const obj = {};
    obj.index = message.index ? message.index.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Capability.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Capability",
      value: Capability.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Capability.decode(message.value);
  },
  toProto(message) {
    return Capability.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.Capability",
      value: Capability.encode(message).finish()
    };
  }
};
function createBaseOwner() {
  return {
    module: "",
    name: ""
  };
}
export const Owner = {
  typeUrl: "/cosmos.capability.v1beta1.Owner",
  encode(message, writer = BinaryWriter.create()) {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$module, _object$name;
    const message = createBaseOwner();
    message.module = (_object$module = object.module) !== null && _object$module !== void 0 ? _object$module : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    return message;
  },
  fromAmino(object) {
    return {
      module: object.module,
      name: object.name
    };
  },
  toAmino(message) {
    const obj = {};
    obj.module = message.module;
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object) {
    return Owner.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Owner",
      value: Owner.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Owner.decode(message.value);
  },
  toProto(message) {
    return Owner.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.Owner",
      value: Owner.encode(message).finish()
    };
  }
};
function createBaseCapabilityOwners() {
  return {
    owners: []
  };
}
export const CapabilityOwners = {
  typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.owners) {
      Owner.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapabilityOwners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owners.push(Owner.decode(reader, reader.uint32()));
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
    const message = createBaseCapabilityOwners();
    message.owners = ((_object$owners = object.owners) === null || _object$owners === void 0 ? void 0 : _object$owners.map(e => Owner.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners) ? object.owners.map(e => Owner.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.owners) {
      obj.owners = message.owners.map(e => e ? Owner.toAmino(e) : undefined);
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return CapabilityOwners.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CapabilityOwners",
      value: CapabilityOwners.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CapabilityOwners.decode(message.value);
  },
  toProto(message) {
    return CapabilityOwners.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
      value: CapabilityOwners.encode(message).finish()
    };
  }
};