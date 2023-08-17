import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** StorageType */
export let StorageType = /*#__PURE__*/function (StorageType) {
  StorageType[StorageType["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
  StorageType[StorageType["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
  StorageType[StorageType["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
  StorageType[StorageType["STORAGE_TYPE_INDEX"] = 3] = "STORAGE_TYPE_INDEX";
  StorageType[StorageType["STORAGE_TYPE_COMMITMENT"] = 4] = "STORAGE_TYPE_COMMITMENT";
  StorageType[StorageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return StorageType;
}({});
export const StorageTypeSDKType = StorageType;
export function storageTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
      return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
    case 1:
    case "STORAGE_TYPE_MEMORY":
      return StorageType.STORAGE_TYPE_MEMORY;
    case 2:
    case "STORAGE_TYPE_TRANSIENT":
      return StorageType.STORAGE_TYPE_TRANSIENT;
    case 3:
    case "STORAGE_TYPE_INDEX":
      return StorageType.STORAGE_TYPE_INDEX;
    case 4:
    case "STORAGE_TYPE_COMMITMENT":
      return StorageType.STORAGE_TYPE_COMMITMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageType.UNRECOGNIZED;
  }
}
export function storageTypeToJSON(object) {
  switch (object) {
    case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
      return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    case StorageType.STORAGE_TYPE_MEMORY:
      return "STORAGE_TYPE_MEMORY";
    case StorageType.STORAGE_TYPE_TRANSIENT:
      return "STORAGE_TYPE_TRANSIENT";
    case StorageType.STORAGE_TYPE_INDEX:
      return "STORAGE_TYPE_INDEX";
    case StorageType.STORAGE_TYPE_COMMITMENT:
      return "STORAGE_TYPE_COMMITMENT";
    case StorageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ModuleSchemaDescriptor describe's a module's ORM schema. */

/** ModuleSchemaDescriptor describe's a module's ORM schema. */

/** FileEntry describes an ORM file used in a module. */

/** FileEntry describes an ORM file used in a module. */

function createBaseModuleSchemaDescriptor() {
  return {
    schemaFile: [],
    prefix: new Uint8Array()
  };
}
export const ModuleSchemaDescriptor = {
  typeUrl: "/cosmos.orm.v1alpha1.ModuleSchemaDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.schemaFile) {
      ModuleSchemaDescriptor_FileEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaFile.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$schemaFile, _object$prefix;
    const message = createBaseModuleSchemaDescriptor();
    message.schemaFile = ((_object$schemaFile = object.schemaFile) === null || _object$schemaFile === void 0 ? void 0 : _object$schemaFile.map(e => ModuleSchemaDescriptor_FileEntry.fromPartial(e))) || [];
    message.prefix = (_object$prefix = object.prefix) !== null && _object$prefix !== void 0 ? _object$prefix : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      schemaFile: Array.isArray(object === null || object === void 0 ? void 0 : object.schema_file) ? object.schema_file.map(e => ModuleSchemaDescriptor_FileEntry.fromAmino(e)) : [],
      prefix: object.prefix
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.schemaFile) {
      obj.schema_file = message.schemaFile.map(e => e ? ModuleSchemaDescriptor_FileEntry.toAmino(e) : undefined);
    } else {
      obj.schema_file = [];
    }
    obj.prefix = message.prefix;
    return obj;
  },
  fromAminoMsg(object) {
    return ModuleSchemaDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ModuleSchemaDescriptor",
      value: ModuleSchemaDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModuleSchemaDescriptor.decode(message.value);
  },
  toProto(message) {
    return ModuleSchemaDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.v1alpha1.ModuleSchemaDescriptor",
      value: ModuleSchemaDescriptor.encode(message).finish()
    };
  }
};
function createBaseModuleSchemaDescriptor_FileEntry() {
  return {
    id: 0,
    protoFileName: "",
    storageType: 0
  };
}
export const ModuleSchemaDescriptor_FileEntry = {
  typeUrl: "/cosmos.orm.v1alpha1.FileEntry",
  encode(message, writer = BinaryWriter.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.protoFileName !== "") {
      writer.uint32(18).string(message.protoFileName);
    }
    if (message.storageType !== 0) {
      writer.uint32(24).int32(message.storageType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.protoFileName = reader.string();
          break;
        case 3:
          message.storageType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$id, _object$protoFileName, _object$storageType;
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : 0;
    message.protoFileName = (_object$protoFileName = object.protoFileName) !== null && _object$protoFileName !== void 0 ? _object$protoFileName : "";
    message.storageType = (_object$storageType = object.storageType) !== null && _object$storageType !== void 0 ? _object$storageType : 0;
    return message;
  },
  fromAmino(object) {
    return {
      id: object.id,
      protoFileName: object.proto_file_name,
      storageType: isSet(object.storage_type) ? storageTypeFromJSON(object.storage_type) : -1
    };
  },
  toAmino(message) {
    const obj = {};
    obj.id = message.id;
    obj.proto_file_name = message.protoFileName;
    obj.storage_type = message.storageType;
    return obj;
  },
  fromAminoMsg(object) {
    return ModuleSchemaDescriptor_FileEntry.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/FileEntry",
      value: ModuleSchemaDescriptor_FileEntry.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModuleSchemaDescriptor_FileEntry.decode(message.value);
  },
  toProto(message) {
    return ModuleSchemaDescriptor_FileEntry.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.v1alpha1.FileEntry",
      value: ModuleSchemaDescriptor_FileEntry.encode(message).finish()
    };
  }
};