import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
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
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.schemaFile) {
      ModuleSchemaDescriptor_FileEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      schemaFile: Array.isArray(object === null || object === void 0 ? void 0 : object.schemaFile) ? object.schemaFile.map(e => ModuleSchemaDescriptor_FileEntry.fromJSON(e)) : [],
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array()
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.schemaFile) {
      obj.schemaFile = message.schemaFile.map(e => e ? ModuleSchemaDescriptor_FileEntry.toJSON(e) : undefined);
    } else {
      obj.schemaFile = [];
    }
    message.prefix !== undefined && (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    return obj;
  },
  fromPartial(object) {
    var _object$schemaFile, _object$prefix;
    const message = createBaseModuleSchemaDescriptor();
    message.schemaFile = ((_object$schemaFile = object.schemaFile) === null || _object$schemaFile === void 0 ? void 0 : _object$schemaFile.map(e => ModuleSchemaDescriptor_FileEntry.fromPartial(e))) || [];
    message.prefix = (_object$prefix = object.prefix) !== null && _object$prefix !== void 0 ? _object$prefix : new Uint8Array();
    return message;
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
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      protoFileName: isSet(object.protoFileName) ? String(object.protoFileName) : "",
      storageType: isSet(object.storageType) ? storageTypeFromJSON(object.storageType) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.protoFileName !== undefined && (obj.protoFileName = message.protoFileName);
    message.storageType !== undefined && (obj.storageType = storageTypeToJSON(message.storageType));
    return obj;
  },
  fromPartial(object) {
    var _object$id, _object$protoFileName, _object$storageType;
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : 0;
    message.protoFileName = (_object$protoFileName = object.protoFileName) !== null && _object$protoFileName !== void 0 ? _object$protoFileName : "";
    message.storageType = (_object$storageType = object.storageType) !== null && _object$storageType !== void 0 ? _object$storageType : 0;
    return message;
  }
};