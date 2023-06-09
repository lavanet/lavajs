import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export let FieldDescriptorProto_Type = /*#__PURE__*/function (FieldDescriptorProto_Type) {
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
  FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldDescriptorProto_Type;
}({});
export const FieldDescriptorProto_TypeSDKType = FieldDescriptorProto_Type;
export function fieldDescriptorProto_TypeFromJSON(object) {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_TypeToJSON(object) {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export let FieldDescriptorProto_Label = /*#__PURE__*/function (FieldDescriptorProto_Label) {
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldDescriptorProto_Label;
}({});
export const FieldDescriptorProto_LabelSDKType = FieldDescriptorProto_Label;
export function fieldDescriptorProto_LabelFromJSON(object) {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_LabelToJSON(object) {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Generated classes can be optimized for speed or code size. */
export let FileOptions_OptimizeMode = /*#__PURE__*/function (FileOptions_OptimizeMode) {
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FileOptions_OptimizeMode;
}({});
export const FileOptions_OptimizeModeSDKType = FileOptions_OptimizeMode;
export function fileOptions_OptimizeModeFromJSON(object) {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}
export function fileOptions_OptimizeModeToJSON(object) {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export let FieldOptions_CType = /*#__PURE__*/function (FieldOptions_CType) {
  FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
  FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
  FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
  FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldOptions_CType;
}({});
export const FieldOptions_CTypeSDKType = FieldOptions_CType;
export function fieldOptions_CTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}
export function fieldOptions_CTypeToJSON(object) {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export let FieldOptions_JSType = /*#__PURE__*/function (FieldOptions_JSType) {
  FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
  FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
  FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
  FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldOptions_JSType;
}({});
export const FieldOptions_JSTypeSDKType = FieldOptions_JSType;
export function fieldOptions_JSTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}
export function fieldOptions_JSTypeToJSON(object) {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export let MethodOptions_IdempotencyLevel = /*#__PURE__*/function (MethodOptions_IdempotencyLevel) {
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return MethodOptions_IdempotencyLevel;
}({});
export const MethodOptions_IdempotencyLevelSDKType = MethodOptions_IdempotencyLevel;
export function methodOptions_IdempotencyLevelFromJSON(object) {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
  }
}
export function methodOptions_IdempotencyLevelToJSON(object) {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */

/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */

/** Describes a complete .proto file. */

/** Describes a complete .proto file. */

/** Describes a message type. */

/** Describes a message type. */

/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */

/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */

/** Describes a field within a message. */

/** Describes a field within a message. */

/** Describes a oneof. */

/** Describes a oneof. */

/** Describes an enum type. */

/** Describes an enum type. */

/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */

/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */

/** Describes a value within an enum. */

/** Describes a value within an enum. */

/** Describes a service. */

/** Describes a service. */

/** Describes a method of a service. */

/** Describes a method of a service. */

/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */

/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */

/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */

/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */

/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */

/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */

/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */

/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */

function createBaseFileDescriptorSet() {
  return {
    file: []
  };
}
export const FileDescriptorSet = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.file) {
      FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
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
      file: Array.isArray(object === null || object === void 0 ? void 0 : object.file) ? object.file.map(e => FileDescriptorProto.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.file) {
      obj.file = message.file.map(e => e ? FileDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.file = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$file;
    const message = createBaseFileDescriptorSet();
    message.file = ((_object$file = object.file) === null || _object$file === void 0 ? void 0 : _object$file.map(e => FileDescriptorProto.fromPartial(e))) || [];
    return message;
  }
};
function createBaseFileDescriptorProto() {
  return {
    name: "",
    package: "",
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [],
    enumType: [],
    service: [],
    extension: [],
    options: undefined,
    sourceCodeInfo: undefined,
    syntax: ""
  };
}
export const FileDescriptorProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    for (const v of message.dependency) {
      writer.uint32(26).string(v);
    }
    writer.uint32(82).fork();
    for (const v of message.publicDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.weakDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.messageType) {
      DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.sourceCodeInfo !== undefined) {
      SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.package = reader.string();
          break;
        case 3:
          message.dependency.push(reader.string());
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publicDependency.push(reader.int32());
            }
          } else {
            message.publicDependency.push(reader.int32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weakDependency.push(reader.int32());
            }
          } else {
            message.weakDependency.push(reader.int32());
          }
          break;
        case 4:
          message.messageType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 8:
          message.options = FileOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.sourceCodeInfo = SourceCodeInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.syntax = reader.string();
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
      name: isSet(object.name) ? String(object.name) : "",
      package: isSet(object.package) ? String(object.package) : "",
      dependency: Array.isArray(object === null || object === void 0 ? void 0 : object.dependency) ? object.dependency.map(e => String(e)) : [],
      publicDependency: Array.isArray(object === null || object === void 0 ? void 0 : object.publicDependency) ? object.publicDependency.map(e => Number(e)) : [],
      weakDependency: Array.isArray(object === null || object === void 0 ? void 0 : object.weakDependency) ? object.weakDependency.map(e => Number(e)) : [],
      messageType: Array.isArray(object === null || object === void 0 ? void 0 : object.messageType) ? object.messageType.map(e => DescriptorProto.fromJSON(e)) : [],
      enumType: Array.isArray(object === null || object === void 0 ? void 0 : object.enumType) ? object.enumType.map(e => EnumDescriptorProto.fromJSON(e)) : [],
      service: Array.isArray(object === null || object === void 0 ? void 0 : object.service) ? object.service.map(e => ServiceDescriptorProto.fromJSON(e)) : [],
      extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension) ? object.extension.map(e => FieldDescriptorProto.fromJSON(e)) : [],
      options: isSet(object.options) ? FileOptions.fromJSON(object.options) : undefined,
      sourceCodeInfo: isSet(object.sourceCodeInfo) ? SourceCodeInfo.fromJSON(object.sourceCodeInfo) : undefined,
      syntax: isSet(object.syntax) ? String(object.syntax) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.package !== undefined && (obj.package = message.package);
    if (message.dependency) {
      obj.dependency = message.dependency.map(e => e);
    } else {
      obj.dependency = [];
    }
    if (message.publicDependency) {
      obj.publicDependency = message.publicDependency.map(e => Math.round(e));
    } else {
      obj.publicDependency = [];
    }
    if (message.weakDependency) {
      obj.weakDependency = message.weakDependency.map(e => Math.round(e));
    } else {
      obj.weakDependency = [];
    }
    if (message.messageType) {
      obj.messageType = message.messageType.map(e => e ? DescriptorProto.toJSON(e) : undefined);
    } else {
      obj.messageType = [];
    }
    if (message.enumType) {
      obj.enumType = message.enumType.map(e => e ? EnumDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.enumType = [];
    }
    if (message.service) {
      obj.service = message.service.map(e => e ? ServiceDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.extension = [];
    }
    message.options !== undefined && (obj.options = message.options ? FileOptions.toJSON(message.options) : undefined);
    message.sourceCodeInfo !== undefined && (obj.sourceCodeInfo = message.sourceCodeInfo ? SourceCodeInfo.toJSON(message.sourceCodeInfo) : undefined);
    message.syntax !== undefined && (obj.syntax = message.syntax);
    return obj;
  },
  fromPartial(object) {
    var _object$name, _object$package, _object$dependency, _object$publicDepende, _object$weakDependenc, _object$messageType, _object$enumType, _object$service, _object$extension, _object$syntax;
    const message = createBaseFileDescriptorProto();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.package = (_object$package = object.package) !== null && _object$package !== void 0 ? _object$package : "";
    message.dependency = ((_object$dependency = object.dependency) === null || _object$dependency === void 0 ? void 0 : _object$dependency.map(e => e)) || [];
    message.publicDependency = ((_object$publicDepende = object.publicDependency) === null || _object$publicDepende === void 0 ? void 0 : _object$publicDepende.map(e => e)) || [];
    message.weakDependency = ((_object$weakDependenc = object.weakDependency) === null || _object$weakDependenc === void 0 ? void 0 : _object$weakDependenc.map(e => e)) || [];
    message.messageType = ((_object$messageType = object.messageType) === null || _object$messageType === void 0 ? void 0 : _object$messageType.map(e => DescriptorProto.fromPartial(e))) || [];
    message.enumType = ((_object$enumType = object.enumType) === null || _object$enumType === void 0 ? void 0 : _object$enumType.map(e => EnumDescriptorProto.fromPartial(e))) || [];
    message.service = ((_object$service = object.service) === null || _object$service === void 0 ? void 0 : _object$service.map(e => ServiceDescriptorProto.fromPartial(e))) || [];
    message.extension = ((_object$extension = object.extension) === null || _object$extension === void 0 ? void 0 : _object$extension.map(e => FieldDescriptorProto.fromPartial(e))) || [];
    message.options = object.options !== undefined && object.options !== null ? FileOptions.fromPartial(object.options) : undefined;
    message.sourceCodeInfo = object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null ? SourceCodeInfo.fromPartial(object.sourceCodeInfo) : undefined;
    message.syntax = (_object$syntax = object.syntax) !== null && _object$syntax !== void 0 ? _object$syntax : "";
    return message;
  }
};
function createBaseDescriptorProto() {
  return {
    name: "",
    field: [],
    extension: [],
    nestedType: [],
    enumType: [],
    extensionRange: [],
    oneofDecl: [],
    options: undefined,
    reservedRange: [],
    reservedName: []
  };
}
export const DescriptorProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.field) {
      FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nestedType) {
      DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.extensionRange) {
      DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.oneofDecl) {
      OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(82).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nestedType.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.extensionRange.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          break;
        case 8:
          message.oneofDecl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.options = MessageOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.reservedRange.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          break;
        case 10:
          message.reservedName.push(reader.string());
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
      name: isSet(object.name) ? String(object.name) : "",
      field: Array.isArray(object === null || object === void 0 ? void 0 : object.field) ? object.field.map(e => FieldDescriptorProto.fromJSON(e)) : [],
      extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension) ? object.extension.map(e => FieldDescriptorProto.fromJSON(e)) : [],
      nestedType: Array.isArray(object === null || object === void 0 ? void 0 : object.nestedType) ? object.nestedType.map(e => DescriptorProto.fromJSON(e)) : [],
      enumType: Array.isArray(object === null || object === void 0 ? void 0 : object.enumType) ? object.enumType.map(e => EnumDescriptorProto.fromJSON(e)) : [],
      extensionRange: Array.isArray(object === null || object === void 0 ? void 0 : object.extensionRange) ? object.extensionRange.map(e => DescriptorProto_ExtensionRange.fromJSON(e)) : [],
      oneofDecl: Array.isArray(object === null || object === void 0 ? void 0 : object.oneofDecl) ? object.oneofDecl.map(e => OneofDescriptorProto.fromJSON(e)) : [],
      options: isSet(object.options) ? MessageOptions.fromJSON(object.options) : undefined,
      reservedRange: Array.isArray(object === null || object === void 0 ? void 0 : object.reservedRange) ? object.reservedRange.map(e => DescriptorProto_ReservedRange.fromJSON(e)) : [],
      reservedName: Array.isArray(object === null || object === void 0 ? void 0 : object.reservedName) ? object.reservedName.map(e => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.extension = [];
    }
    if (message.nestedType) {
      obj.nestedType = message.nestedType.map(e => e ? DescriptorProto.toJSON(e) : undefined);
    } else {
      obj.nestedType = [];
    }
    if (message.enumType) {
      obj.enumType = message.enumType.map(e => e ? EnumDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.enumType = [];
    }
    if (message.extensionRange) {
      obj.extensionRange = message.extensionRange.map(e => e ? DescriptorProto_ExtensionRange.toJSON(e) : undefined);
    } else {
      obj.extensionRange = [];
    }
    if (message.oneofDecl) {
      obj.oneofDecl = message.oneofDecl.map(e => e ? OneofDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.oneofDecl = [];
    }
    message.options !== undefined && (obj.options = message.options ? MessageOptions.toJSON(message.options) : undefined);
    if (message.reservedRange) {
      obj.reservedRange = message.reservedRange.map(e => e ? DescriptorProto_ReservedRange.toJSON(e) : undefined);
    } else {
      obj.reservedRange = [];
    }
    if (message.reservedName) {
      obj.reservedName = message.reservedName.map(e => e);
    } else {
      obj.reservedName = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$name2, _object$field, _object$extension2, _object$nestedType, _object$enumType2, _object$extensionRang, _object$oneofDecl, _object$reservedRange, _object$reservedName;
    const message = createBaseDescriptorProto();
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.field = ((_object$field = object.field) === null || _object$field === void 0 ? void 0 : _object$field.map(e => FieldDescriptorProto.fromPartial(e))) || [];
    message.extension = ((_object$extension2 = object.extension) === null || _object$extension2 === void 0 ? void 0 : _object$extension2.map(e => FieldDescriptorProto.fromPartial(e))) || [];
    message.nestedType = ((_object$nestedType = object.nestedType) === null || _object$nestedType === void 0 ? void 0 : _object$nestedType.map(e => DescriptorProto.fromPartial(e))) || [];
    message.enumType = ((_object$enumType2 = object.enumType) === null || _object$enumType2 === void 0 ? void 0 : _object$enumType2.map(e => EnumDescriptorProto.fromPartial(e))) || [];
    message.extensionRange = ((_object$extensionRang = object.extensionRange) === null || _object$extensionRang === void 0 ? void 0 : _object$extensionRang.map(e => DescriptorProto_ExtensionRange.fromPartial(e))) || [];
    message.oneofDecl = ((_object$oneofDecl = object.oneofDecl) === null || _object$oneofDecl === void 0 ? void 0 : _object$oneofDecl.map(e => OneofDescriptorProto.fromPartial(e))) || [];
    message.options = object.options !== undefined && object.options !== null ? MessageOptions.fromPartial(object.options) : undefined;
    message.reservedRange = ((_object$reservedRange = object.reservedRange) === null || _object$reservedRange === void 0 ? void 0 : _object$reservedRange.map(e => DescriptorProto_ReservedRange.fromPartial(e))) || [];
    message.reservedName = ((_object$reservedName = object.reservedName) === null || _object$reservedName === void 0 ? void 0 : _object$reservedName.map(e => e)) || [];
    return message;
  }
};
function createBaseDescriptorProto_ExtensionRange() {
  return {
    start: 0,
    end: 0,
    options: undefined
  };
}
export const DescriptorProto_ExtensionRange = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        case 3:
          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
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
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      options: isSet(object.options) ? ExtensionRangeOptions.fromJSON(object.options) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.options !== undefined && (obj.options = message.options ? ExtensionRangeOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$start, _object$end;
    const message = createBaseDescriptorProto_ExtensionRange();
    message.start = (_object$start = object.start) !== null && _object$start !== void 0 ? _object$start : 0;
    message.end = (_object$end = object.end) !== null && _object$end !== void 0 ? _object$end : 0;
    message.options = object.options !== undefined && object.options !== null ? ExtensionRangeOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
function createBaseDescriptorProto_ReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
export const DescriptorProto_ReservedRange = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
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
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object) {
    var _object$start2, _object$end2;
    const message = createBaseDescriptorProto_ReservedRange();
    message.start = (_object$start2 = object.start) !== null && _object$start2 !== void 0 ? _object$start2 : 0;
    message.end = (_object$end2 = object.end) !== null && _object$end2 !== void 0 ? _object$end2 : 0;
    return message;
  }
};
function createBaseExtensionRangeOptions() {
  return {
    uninterpretedOption: []
  };
}
export const ExtensionRangeOptions = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(e => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$uninterpreted;
    const message = createBaseExtensionRangeOptions();
    message.uninterpretedOption = ((_object$uninterpreted = object.uninterpretedOption) === null || _object$uninterpreted === void 0 ? void 0 : _object$uninterpreted.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  }
};
function createBaseFieldDescriptorProto() {
  return {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    typeName: "",
    extendee: "",
    defaultValue: "",
    oneofIndex: 0,
    jsonName: "",
    options: undefined
  };
}
export const FieldDescriptorProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.typeName !== "") {
      writer.uint32(50).string(message.typeName);
    }
    if (message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.defaultValue !== "") {
      writer.uint32(58).string(message.defaultValue);
    }
    if (message.oneofIndex !== 0) {
      writer.uint32(72).int32(message.oneofIndex);
    }
    if (message.jsonName !== "") {
      writer.uint32(82).string(message.jsonName);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.number = reader.int32();
          break;
        case 4:
          message.label = reader.int32();
          break;
        case 5:
          message.type = reader.int32();
          break;
        case 6:
          message.typeName = reader.string();
          break;
        case 2:
          message.extendee = reader.string();
          break;
        case 7:
          message.defaultValue = reader.string();
          break;
        case 9:
          message.oneofIndex = reader.int32();
          break;
        case 10:
          message.jsonName = reader.string();
          break;
        case 8:
          message.options = FieldOptions.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : 0,
      type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : 0,
      typeName: isSet(object.typeName) ? String(object.typeName) : "",
      extendee: isSet(object.extendee) ? String(object.extendee) : "",
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
      oneofIndex: isSet(object.oneofIndex) ? Number(object.oneofIndex) : 0,
      jsonName: isSet(object.jsonName) ? String(object.jsonName) : "",
      options: isSet(object.options) ? FieldOptions.fromJSON(object.options) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.label !== undefined && (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
    message.type !== undefined && (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
    message.typeName !== undefined && (obj.typeName = message.typeName);
    message.extendee !== undefined && (obj.extendee = message.extendee);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.oneofIndex !== undefined && (obj.oneofIndex = Math.round(message.oneofIndex));
    message.jsonName !== undefined && (obj.jsonName = message.jsonName);
    message.options !== undefined && (obj.options = message.options ? FieldOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$name3, _object$number, _object$label, _object$type, _object$typeName, _object$extendee, _object$defaultValue, _object$oneofIndex, _object$jsonName;
    const message = createBaseFieldDescriptorProto();
    message.name = (_object$name3 = object.name) !== null && _object$name3 !== void 0 ? _object$name3 : "";
    message.number = (_object$number = object.number) !== null && _object$number !== void 0 ? _object$number : 0;
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : 1;
    message.type = (_object$type = object.type) !== null && _object$type !== void 0 ? _object$type : 1;
    message.typeName = (_object$typeName = object.typeName) !== null && _object$typeName !== void 0 ? _object$typeName : "";
    message.extendee = (_object$extendee = object.extendee) !== null && _object$extendee !== void 0 ? _object$extendee : "";
    message.defaultValue = (_object$defaultValue = object.defaultValue) !== null && _object$defaultValue !== void 0 ? _object$defaultValue : "";
    message.oneofIndex = (_object$oneofIndex = object.oneofIndex) !== null && _object$oneofIndex !== void 0 ? _object$oneofIndex : 0;
    message.jsonName = (_object$jsonName = object.jsonName) !== null && _object$jsonName !== void 0 ? _object$jsonName : "";
    message.options = object.options !== undefined && object.options !== null ? FieldOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
function createBaseOneofDescriptorProto() {
  return {
    name: "",
    options: undefined
  };
}
export const OneofDescriptorProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.options = OneofOptions.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? String(object.name) : "",
      options: isSet(object.options) ? OneofOptions.fromJSON(object.options) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.options !== undefined && (obj.options = message.options ? OneofOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$name4;
    const message = createBaseOneofDescriptorProto();
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    message.options = object.options !== undefined && object.options !== null ? OneofOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
function createBaseEnumDescriptorProto() {
  return {
    name: "",
    value: [],
    options: undefined,
    reservedRange: [],
    reservedName: []
  };
}
export const EnumDescriptorProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.value) {
      EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(42).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = EnumOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.reservedRange.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reservedName.push(reader.string());
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
      name: isSet(object.name) ? String(object.name) : "",
      value: Array.isArray(object === null || object === void 0 ? void 0 : object.value) ? object.value.map(e => EnumValueDescriptorProto.fromJSON(e)) : [],
      options: isSet(object.options) ? EnumOptions.fromJSON(object.options) : undefined,
      reservedRange: Array.isArray(object === null || object === void 0 ? void 0 : object.reservedRange) ? object.reservedRange.map(e => EnumDescriptorProto_EnumReservedRange.fromJSON(e)) : [],
      reservedName: Array.isArray(object === null || object === void 0 ? void 0 : object.reservedName) ? object.reservedName.map(e => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.value) {
      obj.value = message.value.map(e => e ? EnumValueDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    message.options !== undefined && (obj.options = message.options ? EnumOptions.toJSON(message.options) : undefined);
    if (message.reservedRange) {
      obj.reservedRange = message.reservedRange.map(e => e ? EnumDescriptorProto_EnumReservedRange.toJSON(e) : undefined);
    } else {
      obj.reservedRange = [];
    }
    if (message.reservedName) {
      obj.reservedName = message.reservedName.map(e => e);
    } else {
      obj.reservedName = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$name5, _object$value, _object$reservedRange2, _object$reservedName2;
    const message = createBaseEnumDescriptorProto();
    message.name = (_object$name5 = object.name) !== null && _object$name5 !== void 0 ? _object$name5 : "";
    message.value = ((_object$value = object.value) === null || _object$value === void 0 ? void 0 : _object$value.map(e => EnumValueDescriptorProto.fromPartial(e))) || [];
    message.options = object.options !== undefined && object.options !== null ? EnumOptions.fromPartial(object.options) : undefined;
    message.reservedRange = ((_object$reservedRange2 = object.reservedRange) === null || _object$reservedRange2 === void 0 ? void 0 : _object$reservedRange2.map(e => EnumDescriptorProto_EnumReservedRange.fromPartial(e))) || [];
    message.reservedName = ((_object$reservedName2 = object.reservedName) === null || _object$reservedName2 === void 0 ? void 0 : _object$reservedName2.map(e => e)) || [];
    return message;
  }
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
export const EnumDescriptorProto_EnumReservedRange = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
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
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object) {
    var _object$start3, _object$end3;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = (_object$start3 = object.start) !== null && _object$start3 !== void 0 ? _object$start3 : 0;
    message.end = (_object$end3 = object.end) !== null && _object$end3 !== void 0 ? _object$end3 : 0;
    return message;
  }
};
function createBaseEnumValueDescriptorProto() {
  return {
    name: "",
    number: 0,
    options: undefined
  };
}
export const EnumValueDescriptorProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.options = EnumValueOptions.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      options: isSet(object.options) ? EnumValueOptions.fromJSON(object.options) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.options !== undefined && (obj.options = message.options ? EnumValueOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$name6, _object$number2;
    const message = createBaseEnumValueDescriptorProto();
    message.name = (_object$name6 = object.name) !== null && _object$name6 !== void 0 ? _object$name6 : "";
    message.number = (_object$number2 = object.number) !== null && _object$number2 !== void 0 ? _object$number2 : 0;
    message.options = object.options !== undefined && object.options !== null ? EnumValueOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
function createBaseServiceDescriptorProto() {
  return {
    name: "",
    method: [],
    options: undefined
  };
}
export const ServiceDescriptorProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.method) {
      MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = ServiceOptions.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? String(object.name) : "",
      method: Array.isArray(object === null || object === void 0 ? void 0 : object.method) ? object.method.map(e => MethodDescriptorProto.fromJSON(e)) : [],
      options: isSet(object.options) ? ServiceOptions.fromJSON(object.options) : undefined
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.method) {
      obj.method = message.method.map(e => e ? MethodDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.method = [];
    }
    message.options !== undefined && (obj.options = message.options ? ServiceOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object) {
    var _object$name7, _object$method;
    const message = createBaseServiceDescriptorProto();
    message.name = (_object$name7 = object.name) !== null && _object$name7 !== void 0 ? _object$name7 : "";
    message.method = ((_object$method = object.method) === null || _object$method === void 0 ? void 0 : _object$method.map(e => MethodDescriptorProto.fromPartial(e))) || [];
    message.options = object.options !== undefined && object.options !== null ? ServiceOptions.fromPartial(object.options) : undefined;
    return message;
  }
};
function createBaseMethodDescriptorProto() {
  return {
    name: "",
    inputType: "",
    outputType: "",
    options: undefined,
    clientStreaming: false,
    serverStreaming: false
  };
}
export const MethodDescriptorProto = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.inputType !== "") {
      writer.uint32(18).string(message.inputType);
    }
    if (message.outputType !== "") {
      writer.uint32(26).string(message.outputType);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.clientStreaming === true) {
      writer.uint32(40).bool(message.clientStreaming);
    }
    if (message.serverStreaming === true) {
      writer.uint32(48).bool(message.serverStreaming);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.inputType = reader.string();
          break;
        case 3:
          message.outputType = reader.string();
          break;
        case 4:
          message.options = MethodOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.clientStreaming = reader.bool();
          break;
        case 6:
          message.serverStreaming = reader.bool();
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
      name: isSet(object.name) ? String(object.name) : "",
      inputType: isSet(object.inputType) ? String(object.inputType) : "",
      outputType: isSet(object.outputType) ? String(object.outputType) : "",
      options: isSet(object.options) ? MethodOptions.fromJSON(object.options) : undefined,
      clientStreaming: isSet(object.clientStreaming) ? Boolean(object.clientStreaming) : false,
      serverStreaming: isSet(object.serverStreaming) ? Boolean(object.serverStreaming) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.inputType !== undefined && (obj.inputType = message.inputType);
    message.outputType !== undefined && (obj.outputType = message.outputType);
    message.options !== undefined && (obj.options = message.options ? MethodOptions.toJSON(message.options) : undefined);
    message.clientStreaming !== undefined && (obj.clientStreaming = message.clientStreaming);
    message.serverStreaming !== undefined && (obj.serverStreaming = message.serverStreaming);
    return obj;
  },
  fromPartial(object) {
    var _object$name8, _object$inputType, _object$outputType, _object$clientStreami, _object$serverStreami;
    const message = createBaseMethodDescriptorProto();
    message.name = (_object$name8 = object.name) !== null && _object$name8 !== void 0 ? _object$name8 : "";
    message.inputType = (_object$inputType = object.inputType) !== null && _object$inputType !== void 0 ? _object$inputType : "";
    message.outputType = (_object$outputType = object.outputType) !== null && _object$outputType !== void 0 ? _object$outputType : "";
    message.options = object.options !== undefined && object.options !== null ? MethodOptions.fromPartial(object.options) : undefined;
    message.clientStreaming = (_object$clientStreami = object.clientStreaming) !== null && _object$clientStreami !== void 0 ? _object$clientStreami : false;
    message.serverStreaming = (_object$serverStreami = object.serverStreaming) !== null && _object$serverStreami !== void 0 ? _object$serverStreami : false;
    return message;
  }
};
function createBaseFileOptions() {
  return {
    javaPackage: "",
    javaOuterClassname: "",
    javaMultipleFiles: false,
    javaGenerateEqualsAndHash: false,
    javaStringCheckUtf8: false,
    optimizeFor: 1,
    goPackage: "",
    ccGenericServices: false,
    javaGenericServices: false,
    pyGenericServices: false,
    phpGenericServices: false,
    deprecated: false,
    ccEnableArenas: false,
    objcClassPrefix: "",
    csharpNamespace: "",
    swiftPrefix: "",
    phpClassPrefix: "",
    phpNamespace: "",
    phpMetadataNamespace: "",
    rubyPackage: "",
    uninterpretedOption: []
  };
}
export const FileOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.javaPackage !== "") {
      writer.uint32(10).string(message.javaPackage);
    }
    if (message.javaOuterClassname !== "") {
      writer.uint32(66).string(message.javaOuterClassname);
    }
    if (message.javaMultipleFiles === true) {
      writer.uint32(80).bool(message.javaMultipleFiles);
    }
    if (message.javaGenerateEqualsAndHash === true) {
      writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
    }
    if (message.javaStringCheckUtf8 === true) {
      writer.uint32(216).bool(message.javaStringCheckUtf8);
    }
    if (message.optimizeFor !== 1) {
      writer.uint32(72).int32(message.optimizeFor);
    }
    if (message.goPackage !== "") {
      writer.uint32(90).string(message.goPackage);
    }
    if (message.ccGenericServices === true) {
      writer.uint32(128).bool(message.ccGenericServices);
    }
    if (message.javaGenericServices === true) {
      writer.uint32(136).bool(message.javaGenericServices);
    }
    if (message.pyGenericServices === true) {
      writer.uint32(144).bool(message.pyGenericServices);
    }
    if (message.phpGenericServices === true) {
      writer.uint32(336).bool(message.phpGenericServices);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.ccEnableArenas === true) {
      writer.uint32(248).bool(message.ccEnableArenas);
    }
    if (message.objcClassPrefix !== "") {
      writer.uint32(290).string(message.objcClassPrefix);
    }
    if (message.csharpNamespace !== "") {
      writer.uint32(298).string(message.csharpNamespace);
    }
    if (message.swiftPrefix !== "") {
      writer.uint32(314).string(message.swiftPrefix);
    }
    if (message.phpClassPrefix !== "") {
      writer.uint32(322).string(message.phpClassPrefix);
    }
    if (message.phpNamespace !== "") {
      writer.uint32(330).string(message.phpNamespace);
    }
    if (message.phpMetadataNamespace !== "") {
      writer.uint32(354).string(message.phpMetadataNamespace);
    }
    if (message.rubyPackage !== "") {
      writer.uint32(362).string(message.rubyPackage);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.javaPackage = reader.string();
          break;
        case 8:
          message.javaOuterClassname = reader.string();
          break;
        case 10:
          message.javaMultipleFiles = reader.bool();
          break;
        case 20:
          message.javaGenerateEqualsAndHash = reader.bool();
          break;
        case 27:
          message.javaStringCheckUtf8 = reader.bool();
          break;
        case 9:
          message.optimizeFor = reader.int32();
          break;
        case 11:
          message.goPackage = reader.string();
          break;
        case 16:
          message.ccGenericServices = reader.bool();
          break;
        case 17:
          message.javaGenericServices = reader.bool();
          break;
        case 18:
          message.pyGenericServices = reader.bool();
          break;
        case 42:
          message.phpGenericServices = reader.bool();
          break;
        case 23:
          message.deprecated = reader.bool();
          break;
        case 31:
          message.ccEnableArenas = reader.bool();
          break;
        case 36:
          message.objcClassPrefix = reader.string();
          break;
        case 37:
          message.csharpNamespace = reader.string();
          break;
        case 39:
          message.swiftPrefix = reader.string();
          break;
        case 40:
          message.phpClassPrefix = reader.string();
          break;
        case 41:
          message.phpNamespace = reader.string();
          break;
        case 44:
          message.phpMetadataNamespace = reader.string();
          break;
        case 45:
          message.rubyPackage = reader.string();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
      javaPackage: isSet(object.javaPackage) ? String(object.javaPackage) : "",
      javaOuterClassname: isSet(object.javaOuterClassname) ? String(object.javaOuterClassname) : "",
      javaMultipleFiles: isSet(object.javaMultipleFiles) ? Boolean(object.javaMultipleFiles) : false,
      javaGenerateEqualsAndHash: isSet(object.javaGenerateEqualsAndHash) ? Boolean(object.javaGenerateEqualsAndHash) : false,
      javaStringCheckUtf8: isSet(object.javaStringCheckUtf8) ? Boolean(object.javaStringCheckUtf8) : false,
      optimizeFor: isSet(object.optimizeFor) ? fileOptions_OptimizeModeFromJSON(object.optimizeFor) : 0,
      goPackage: isSet(object.goPackage) ? String(object.goPackage) : "",
      ccGenericServices: isSet(object.ccGenericServices) ? Boolean(object.ccGenericServices) : false,
      javaGenericServices: isSet(object.javaGenericServices) ? Boolean(object.javaGenericServices) : false,
      pyGenericServices: isSet(object.pyGenericServices) ? Boolean(object.pyGenericServices) : false,
      phpGenericServices: isSet(object.phpGenericServices) ? Boolean(object.phpGenericServices) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      ccEnableArenas: isSet(object.ccEnableArenas) ? Boolean(object.ccEnableArenas) : false,
      objcClassPrefix: isSet(object.objcClassPrefix) ? String(object.objcClassPrefix) : "",
      csharpNamespace: isSet(object.csharpNamespace) ? String(object.csharpNamespace) : "",
      swiftPrefix: isSet(object.swiftPrefix) ? String(object.swiftPrefix) : "",
      phpClassPrefix: isSet(object.phpClassPrefix) ? String(object.phpClassPrefix) : "",
      phpNamespace: isSet(object.phpNamespace) ? String(object.phpNamespace) : "",
      phpMetadataNamespace: isSet(object.phpMetadataNamespace) ? String(object.phpMetadataNamespace) : "",
      rubyPackage: isSet(object.rubyPackage) ? String(object.rubyPackage) : "",
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(e => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.javaPackage !== undefined && (obj.javaPackage = message.javaPackage);
    message.javaOuterClassname !== undefined && (obj.javaOuterClassname = message.javaOuterClassname);
    message.javaMultipleFiles !== undefined && (obj.javaMultipleFiles = message.javaMultipleFiles);
    message.javaGenerateEqualsAndHash !== undefined && (obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash);
    message.javaStringCheckUtf8 !== undefined && (obj.javaStringCheckUtf8 = message.javaStringCheckUtf8);
    message.optimizeFor !== undefined && (obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor));
    message.goPackage !== undefined && (obj.goPackage = message.goPackage);
    message.ccGenericServices !== undefined && (obj.ccGenericServices = message.ccGenericServices);
    message.javaGenericServices !== undefined && (obj.javaGenericServices = message.javaGenericServices);
    message.pyGenericServices !== undefined && (obj.pyGenericServices = message.pyGenericServices);
    message.phpGenericServices !== undefined && (obj.phpGenericServices = message.phpGenericServices);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.ccEnableArenas !== undefined && (obj.ccEnableArenas = message.ccEnableArenas);
    message.objcClassPrefix !== undefined && (obj.objcClassPrefix = message.objcClassPrefix);
    message.csharpNamespace !== undefined && (obj.csharpNamespace = message.csharpNamespace);
    message.swiftPrefix !== undefined && (obj.swiftPrefix = message.swiftPrefix);
    message.phpClassPrefix !== undefined && (obj.phpClassPrefix = message.phpClassPrefix);
    message.phpNamespace !== undefined && (obj.phpNamespace = message.phpNamespace);
    message.phpMetadataNamespace !== undefined && (obj.phpMetadataNamespace = message.phpMetadataNamespace);
    message.rubyPackage !== undefined && (obj.rubyPackage = message.rubyPackage);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$javaPackage, _object$javaOuterClas, _object$javaMultipleF, _object$javaGenerateE, _object$javaStringChe, _object$optimizeFor, _object$goPackage, _object$ccGenericServ, _object$javaGenericSe, _object$pyGenericServ, _object$phpGenericSer, _object$deprecated, _object$ccEnableArena, _object$objcClassPref, _object$csharpNamespa, _object$swiftPrefix, _object$phpClassPrefi, _object$phpNamespace, _object$phpMetadataNa, _object$rubyPackage, _object$uninterpreted2;
    const message = createBaseFileOptions();
    message.javaPackage = (_object$javaPackage = object.javaPackage) !== null && _object$javaPackage !== void 0 ? _object$javaPackage : "";
    message.javaOuterClassname = (_object$javaOuterClas = object.javaOuterClassname) !== null && _object$javaOuterClas !== void 0 ? _object$javaOuterClas : "";
    message.javaMultipleFiles = (_object$javaMultipleF = object.javaMultipleFiles) !== null && _object$javaMultipleF !== void 0 ? _object$javaMultipleF : false;
    message.javaGenerateEqualsAndHash = (_object$javaGenerateE = object.javaGenerateEqualsAndHash) !== null && _object$javaGenerateE !== void 0 ? _object$javaGenerateE : false;
    message.javaStringCheckUtf8 = (_object$javaStringChe = object.javaStringCheckUtf8) !== null && _object$javaStringChe !== void 0 ? _object$javaStringChe : false;
    message.optimizeFor = (_object$optimizeFor = object.optimizeFor) !== null && _object$optimizeFor !== void 0 ? _object$optimizeFor : 1;
    message.goPackage = (_object$goPackage = object.goPackage) !== null && _object$goPackage !== void 0 ? _object$goPackage : "";
    message.ccGenericServices = (_object$ccGenericServ = object.ccGenericServices) !== null && _object$ccGenericServ !== void 0 ? _object$ccGenericServ : false;
    message.javaGenericServices = (_object$javaGenericSe = object.javaGenericServices) !== null && _object$javaGenericSe !== void 0 ? _object$javaGenericSe : false;
    message.pyGenericServices = (_object$pyGenericServ = object.pyGenericServices) !== null && _object$pyGenericServ !== void 0 ? _object$pyGenericServ : false;
    message.phpGenericServices = (_object$phpGenericSer = object.phpGenericServices) !== null && _object$phpGenericSer !== void 0 ? _object$phpGenericSer : false;
    message.deprecated = (_object$deprecated = object.deprecated) !== null && _object$deprecated !== void 0 ? _object$deprecated : false;
    message.ccEnableArenas = (_object$ccEnableArena = object.ccEnableArenas) !== null && _object$ccEnableArena !== void 0 ? _object$ccEnableArena : false;
    message.objcClassPrefix = (_object$objcClassPref = object.objcClassPrefix) !== null && _object$objcClassPref !== void 0 ? _object$objcClassPref : "";
    message.csharpNamespace = (_object$csharpNamespa = object.csharpNamespace) !== null && _object$csharpNamespa !== void 0 ? _object$csharpNamespa : "";
    message.swiftPrefix = (_object$swiftPrefix = object.swiftPrefix) !== null && _object$swiftPrefix !== void 0 ? _object$swiftPrefix : "";
    message.phpClassPrefix = (_object$phpClassPrefi = object.phpClassPrefix) !== null && _object$phpClassPrefi !== void 0 ? _object$phpClassPrefi : "";
    message.phpNamespace = (_object$phpNamespace = object.phpNamespace) !== null && _object$phpNamespace !== void 0 ? _object$phpNamespace : "";
    message.phpMetadataNamespace = (_object$phpMetadataNa = object.phpMetadataNamespace) !== null && _object$phpMetadataNa !== void 0 ? _object$phpMetadataNa : "";
    message.rubyPackage = (_object$rubyPackage = object.rubyPackage) !== null && _object$rubyPackage !== void 0 ? _object$rubyPackage : "";
    message.uninterpretedOption = ((_object$uninterpreted2 = object.uninterpretedOption) === null || _object$uninterpreted2 === void 0 ? void 0 : _object$uninterpreted2.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMessageOptions() {
  return {
    messageSetWireFormat: false,
    noStandardDescriptorAccessor: false,
    deprecated: false,
    mapEntry: false,
    uninterpretedOption: []
  };
}
export const MessageOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.messageSetWireFormat === true) {
      writer.uint32(8).bool(message.messageSetWireFormat);
    }
    if (message.noStandardDescriptorAccessor === true) {
      writer.uint32(16).bool(message.noStandardDescriptorAccessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.mapEntry === true) {
      writer.uint32(56).bool(message.mapEntry);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageSetWireFormat = reader.bool();
          break;
        case 2:
          message.noStandardDescriptorAccessor = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 7:
          message.mapEntry = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
      messageSetWireFormat: isSet(object.messageSetWireFormat) ? Boolean(object.messageSetWireFormat) : false,
      noStandardDescriptorAccessor: isSet(object.noStandardDescriptorAccessor) ? Boolean(object.noStandardDescriptorAccessor) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      mapEntry: isSet(object.mapEntry) ? Boolean(object.mapEntry) : false,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(e => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.messageSetWireFormat !== undefined && (obj.messageSetWireFormat = message.messageSetWireFormat);
    message.noStandardDescriptorAccessor !== undefined && (obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.mapEntry !== undefined && (obj.mapEntry = message.mapEntry);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$messageSetWir, _object$noStandardDes, _object$deprecated2, _object$mapEntry, _object$uninterpreted3;
    const message = createBaseMessageOptions();
    message.messageSetWireFormat = (_object$messageSetWir = object.messageSetWireFormat) !== null && _object$messageSetWir !== void 0 ? _object$messageSetWir : false;
    message.noStandardDescriptorAccessor = (_object$noStandardDes = object.noStandardDescriptorAccessor) !== null && _object$noStandardDes !== void 0 ? _object$noStandardDes : false;
    message.deprecated = (_object$deprecated2 = object.deprecated) !== null && _object$deprecated2 !== void 0 ? _object$deprecated2 : false;
    message.mapEntry = (_object$mapEntry = object.mapEntry) !== null && _object$mapEntry !== void 0 ? _object$mapEntry : false;
    message.uninterpretedOption = ((_object$uninterpreted3 = object.uninterpretedOption) === null || _object$uninterpreted3 === void 0 ? void 0 : _object$uninterpreted3.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  }
};
function createBaseFieldOptions() {
  return {
    ctype: 1,
    packed: false,
    jstype: 1,
    lazy: false,
    deprecated: false,
    weak: false,
    uninterpretedOption: []
  };
}
export const FieldOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.ctype !== 1) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== 1) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctype = reader.int32();
          break;
        case 2:
          message.packed = reader.bool();
          break;
        case 6:
          message.jstype = reader.int32();
          break;
        case 5:
          message.lazy = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 10:
          message.weak = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : 0,
      packed: isSet(object.packed) ? Boolean(object.packed) : false,
      jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : 0,
      lazy: isSet(object.lazy) ? Boolean(object.lazy) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      weak: isSet(object.weak) ? Boolean(object.weak) : false,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(e => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.ctype !== undefined && (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
    message.packed !== undefined && (obj.packed = message.packed);
    message.jstype !== undefined && (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
    message.lazy !== undefined && (obj.lazy = message.lazy);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.weak !== undefined && (obj.weak = message.weak);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$ctype, _object$packed, _object$jstype, _object$lazy, _object$deprecated3, _object$weak, _object$uninterpreted4;
    const message = createBaseFieldOptions();
    message.ctype = (_object$ctype = object.ctype) !== null && _object$ctype !== void 0 ? _object$ctype : 1;
    message.packed = (_object$packed = object.packed) !== null && _object$packed !== void 0 ? _object$packed : false;
    message.jstype = (_object$jstype = object.jstype) !== null && _object$jstype !== void 0 ? _object$jstype : 1;
    message.lazy = (_object$lazy = object.lazy) !== null && _object$lazy !== void 0 ? _object$lazy : false;
    message.deprecated = (_object$deprecated3 = object.deprecated) !== null && _object$deprecated3 !== void 0 ? _object$deprecated3 : false;
    message.weak = (_object$weak = object.weak) !== null && _object$weak !== void 0 ? _object$weak : false;
    message.uninterpretedOption = ((_object$uninterpreted4 = object.uninterpretedOption) === null || _object$uninterpreted4 === void 0 ? void 0 : _object$uninterpreted4.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  }
};
function createBaseOneofOptions() {
  return {
    uninterpretedOption: []
  };
}
export const OneofOptions = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(e => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$uninterpreted5;
    const message = createBaseOneofOptions();
    message.uninterpretedOption = ((_object$uninterpreted5 = object.uninterpretedOption) === null || _object$uninterpreted5 === void 0 ? void 0 : _object$uninterpreted5.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  }
};
function createBaseEnumOptions() {
  return {
    allowAlias: false,
    deprecated: false,
    uninterpretedOption: []
  };
}
export const EnumOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.allowAlias === true) {
      writer.uint32(16).bool(message.allowAlias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.allowAlias = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
      allowAlias: isSet(object.allowAlias) ? Boolean(object.allowAlias) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(e => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.allowAlias !== undefined && (obj.allowAlias = message.allowAlias);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$allowAlias, _object$deprecated4, _object$uninterpreted6;
    const message = createBaseEnumOptions();
    message.allowAlias = (_object$allowAlias = object.allowAlias) !== null && _object$allowAlias !== void 0 ? _object$allowAlias : false;
    message.deprecated = (_object$deprecated4 = object.deprecated) !== null && _object$deprecated4 !== void 0 ? _object$deprecated4 : false;
    message.uninterpretedOption = ((_object$uninterpreted6 = object.uninterpretedOption) === null || _object$uninterpreted6 === void 0 ? void 0 : _object$uninterpreted6.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  }
};
function createBaseEnumValueOptions() {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
export const EnumValueOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(e => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$deprecated5, _object$uninterpreted7;
    const message = createBaseEnumValueOptions();
    message.deprecated = (_object$deprecated5 = object.deprecated) !== null && _object$deprecated5 !== void 0 ? _object$deprecated5 : false;
    message.uninterpretedOption = ((_object$uninterpreted7 = object.uninterpretedOption) === null || _object$uninterpreted7 === void 0 ? void 0 : _object$uninterpreted7.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  }
};
function createBaseServiceOptions() {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
export const ServiceOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(e => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$deprecated6, _object$uninterpreted8;
    const message = createBaseServiceOptions();
    message.deprecated = (_object$deprecated6 = object.deprecated) !== null && _object$deprecated6 !== void 0 ? _object$deprecated6 : false;
    message.uninterpretedOption = ((_object$uninterpreted8 = object.uninterpretedOption) === null || _object$uninterpreted8 === void 0 ? void 0 : _object$uninterpreted8.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  }
};
function createBaseMethodOptions() {
  return {
    deprecated: false,
    idempotencyLevel: 1,
    uninterpretedOption: []
  };
}
export const MethodOptions = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotencyLevel !== 1) {
      writer.uint32(272).int32(message.idempotencyLevel);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 34:
          message.idempotencyLevel = reader.int32();
          break;
        case 999:
          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
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
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      idempotencyLevel: isSet(object.idempotencyLevel) ? methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel) : 0,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption) ? object.uninterpretedOption.map(e => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.idempotencyLevel !== undefined && (obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel));
    if (message.uninterpretedOption) {
      obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpretedOption = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$deprecated7, _object$idempotencyLe, _object$uninterpreted9;
    const message = createBaseMethodOptions();
    message.deprecated = (_object$deprecated7 = object.deprecated) !== null && _object$deprecated7 !== void 0 ? _object$deprecated7 : false;
    message.idempotencyLevel = (_object$idempotencyLe = object.idempotencyLevel) !== null && _object$idempotencyLe !== void 0 ? _object$idempotencyLe : 1;
    message.uninterpretedOption = ((_object$uninterpreted9 = object.uninterpretedOption) === null || _object$uninterpreted9 === void 0 ? void 0 : _object$uninterpreted9.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  }
};
function createBaseUninterpretedOption() {
  return {
    name: [],
    identifierValue: "",
    positiveIntValue: Long.UZERO,
    negativeIntValue: Long.ZERO,
    doubleValue: 0,
    stringValue: new Uint8Array(),
    aggregateValue: ""
  };
}
export const UninterpretedOption = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.identifierValue !== "") {
      writer.uint32(26).string(message.identifierValue);
    }
    if (!message.positiveIntValue.isZero()) {
      writer.uint32(32).uint64(message.positiveIntValue);
    }
    if (!message.negativeIntValue.isZero()) {
      writer.uint32(40).int64(message.negativeIntValue);
    }
    if (message.doubleValue !== 0) {
      writer.uint32(49).double(message.doubleValue);
    }
    if (message.stringValue.length !== 0) {
      writer.uint32(58).bytes(message.stringValue);
    }
    if (message.aggregateValue !== "") {
      writer.uint32(66).string(message.aggregateValue);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          break;
        case 3:
          message.identifierValue = reader.string();
          break;
        case 4:
          message.positiveIntValue = reader.uint64();
          break;
        case 5:
          message.negativeIntValue = reader.int64();
          break;
        case 6:
          message.doubleValue = reader.double();
          break;
        case 7:
          message.stringValue = reader.bytes();
          break;
        case 8:
          message.aggregateValue = reader.string();
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
      name: Array.isArray(object === null || object === void 0 ? void 0 : object.name) ? object.name.map(e => UninterpretedOption_NamePart.fromJSON(e)) : [],
      identifierValue: isSet(object.identifierValue) ? String(object.identifierValue) : "",
      positiveIntValue: isSet(object.positiveIntValue) ? Long.fromValue(object.positiveIntValue) : Long.UZERO,
      negativeIntValue: isSet(object.negativeIntValue) ? Long.fromValue(object.negativeIntValue) : Long.ZERO,
      doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : 0,
      stringValue: isSet(object.stringValue) ? bytesFromBase64(object.stringValue) : new Uint8Array(),
      aggregateValue: isSet(object.aggregateValue) ? String(object.aggregateValue) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.name) {
      obj.name = message.name.map(e => e ? UninterpretedOption_NamePart.toJSON(e) : undefined);
    } else {
      obj.name = [];
    }
    message.identifierValue !== undefined && (obj.identifierValue = message.identifierValue);
    message.positiveIntValue !== undefined && (obj.positiveIntValue = (message.positiveIntValue || Long.UZERO).toString());
    message.negativeIntValue !== undefined && (obj.negativeIntValue = (message.negativeIntValue || Long.ZERO).toString());
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = base64FromBytes(message.stringValue !== undefined ? message.stringValue : new Uint8Array()));
    message.aggregateValue !== undefined && (obj.aggregateValue = message.aggregateValue);
    return obj;
  },
  fromPartial(object) {
    var _object$name9, _object$identifierVal, _object$doubleValue, _object$stringValue, _object$aggregateValu;
    const message = createBaseUninterpretedOption();
    message.name = ((_object$name9 = object.name) === null || _object$name9 === void 0 ? void 0 : _object$name9.map(e => UninterpretedOption_NamePart.fromPartial(e))) || [];
    message.identifierValue = (_object$identifierVal = object.identifierValue) !== null && _object$identifierVal !== void 0 ? _object$identifierVal : "";
    message.positiveIntValue = object.positiveIntValue !== undefined && object.positiveIntValue !== null ? Long.fromValue(object.positiveIntValue) : Long.UZERO;
    message.negativeIntValue = object.negativeIntValue !== undefined && object.negativeIntValue !== null ? Long.fromValue(object.negativeIntValue) : Long.ZERO;
    message.doubleValue = (_object$doubleValue = object.doubleValue) !== null && _object$doubleValue !== void 0 ? _object$doubleValue : 0;
    message.stringValue = (_object$stringValue = object.stringValue) !== null && _object$stringValue !== void 0 ? _object$stringValue : new Uint8Array();
    message.aggregateValue = (_object$aggregateValu = object.aggregateValue) !== null && _object$aggregateValu !== void 0 ? _object$aggregateValu : "";
    return message;
  }
};
function createBaseUninterpretedOption_NamePart() {
  return {
    namePart: "",
    isExtension: false
  };
}
export const UninterpretedOption_NamePart = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.namePart !== "") {
      writer.uint32(10).string(message.namePart);
    }
    if (message.isExtension === true) {
      writer.uint32(16).bool(message.isExtension);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namePart = reader.string();
          break;
        case 2:
          message.isExtension = reader.bool();
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
      namePart: isSet(object.namePart) ? String(object.namePart) : "",
      isExtension: isSet(object.isExtension) ? Boolean(object.isExtension) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.namePart !== undefined && (obj.namePart = message.namePart);
    message.isExtension !== undefined && (obj.isExtension = message.isExtension);
    return obj;
  },
  fromPartial(object) {
    var _object$namePart, _object$isExtension;
    const message = createBaseUninterpretedOption_NamePart();
    message.namePart = (_object$namePart = object.namePart) !== null && _object$namePart !== void 0 ? _object$namePart : "";
    message.isExtension = (_object$isExtension = object.isExtension) !== null && _object$isExtension !== void 0 ? _object$isExtension : false;
    return message;
  }
};
function createBaseSourceCodeInfo() {
  return {
    location: []
  };
}
export const SourceCodeInfo = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
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
      location: Array.isArray(object === null || object === void 0 ? void 0 : object.location) ? object.location.map(e => SourceCodeInfo_Location.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.location) {
      obj.location = message.location.map(e => e ? SourceCodeInfo_Location.toJSON(e) : undefined);
    } else {
      obj.location = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$location;
    const message = createBaseSourceCodeInfo();
    message.location = ((_object$location = object.location) === null || _object$location === void 0 ? void 0 : _object$location.map(e => SourceCodeInfo_Location.fromPartial(e))) || [];
    return message;
  }
};
function createBaseSourceCodeInfo_Location() {
  return {
    path: [],
    span: [],
    leadingComments: "",
    trailingComments: "",
    leadingDetachedComments: []
  };
}
export const SourceCodeInfo_Location = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.span) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.leadingComments !== "") {
      writer.uint32(26).string(message.leadingComments);
    }
    if (message.trailingComments !== "") {
      writer.uint32(34).string(message.trailingComments);
    }
    for (const v of message.leadingDetachedComments) {
      writer.uint32(50).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span.push(reader.int32());
            }
          } else {
            message.span.push(reader.int32());
          }
          break;
        case 3:
          message.leadingComments = reader.string();
          break;
        case 4:
          message.trailingComments = reader.string();
          break;
        case 6:
          message.leadingDetachedComments.push(reader.string());
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
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(e => Number(e)) : [],
      span: Array.isArray(object === null || object === void 0 ? void 0 : object.span) ? object.span.map(e => Number(e)) : [],
      leadingComments: isSet(object.leadingComments) ? String(object.leadingComments) : "",
      trailingComments: isSet(object.trailingComments) ? String(object.trailingComments) : "",
      leadingDetachedComments: Array.isArray(object === null || object === void 0 ? void 0 : object.leadingDetachedComments) ? object.leadingDetachedComments.map(e => String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.path) {
      obj.path = message.path.map(e => Math.round(e));
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map(e => Math.round(e));
    } else {
      obj.span = [];
    }
    message.leadingComments !== undefined && (obj.leadingComments = message.leadingComments);
    message.trailingComments !== undefined && (obj.trailingComments = message.trailingComments);
    if (message.leadingDetachedComments) {
      obj.leadingDetachedComments = message.leadingDetachedComments.map(e => e);
    } else {
      obj.leadingDetachedComments = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$path, _object$span, _object$leadingCommen, _object$trailingComme, _object$leadingDetach;
    const message = createBaseSourceCodeInfo_Location();
    message.path = ((_object$path = object.path) === null || _object$path === void 0 ? void 0 : _object$path.map(e => e)) || [];
    message.span = ((_object$span = object.span) === null || _object$span === void 0 ? void 0 : _object$span.map(e => e)) || [];
    message.leadingComments = (_object$leadingCommen = object.leadingComments) !== null && _object$leadingCommen !== void 0 ? _object$leadingCommen : "";
    message.trailingComments = (_object$trailingComme = object.trailingComments) !== null && _object$trailingComme !== void 0 ? _object$trailingComme : "";
    message.leadingDetachedComments = ((_object$leadingDetach = object.leadingDetachedComments) === null || _object$leadingDetach === void 0 ? void 0 : _object$leadingDetach.map(e => e)) || [];
    return message;
  }
};
function createBaseGeneratedCodeInfo() {
  return {
    annotation: []
  };
}
export const GeneratedCodeInfo = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
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
      annotation: Array.isArray(object === null || object === void 0 ? void 0 : object.annotation) ? object.annotation.map(e => GeneratedCodeInfo_Annotation.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map(e => e ? GeneratedCodeInfo_Annotation.toJSON(e) : undefined);
    } else {
      obj.annotation = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$annotation;
    const message = createBaseGeneratedCodeInfo();
    message.annotation = ((_object$annotation = object.annotation) === null || _object$annotation === void 0 ? void 0 : _object$annotation.map(e => GeneratedCodeInfo_Annotation.fromPartial(e))) || [];
    return message;
  }
};
function createBaseGeneratedCodeInfo_Annotation() {
  return {
    path: [],
    sourceFile: "",
    begin: 0,
    end: 0
  };
}
export const GeneratedCodeInfo_Annotation = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.sourceFile !== "") {
      writer.uint32(18).string(message.sourceFile);
    }
    if (message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          message.sourceFile = reader.string();
          break;
        case 3:
          message.begin = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
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
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(e => Number(e)) : [],
      sourceFile: isSet(object.sourceFile) ? String(object.sourceFile) : "",
      begin: isSet(object.begin) ? Number(object.begin) : 0,
      end: isSet(object.end) ? Number(object.end) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.path) {
      obj.path = message.path.map(e => Math.round(e));
    } else {
      obj.path = [];
    }
    message.sourceFile !== undefined && (obj.sourceFile = message.sourceFile);
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object) {
    var _object$path2, _object$sourceFile, _object$begin, _object$end4;
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = ((_object$path2 = object.path) === null || _object$path2 === void 0 ? void 0 : _object$path2.map(e => e)) || [];
    message.sourceFile = (_object$sourceFile = object.sourceFile) !== null && _object$sourceFile !== void 0 ? _object$sourceFile : "";
    message.begin = (_object$begin = object.begin) !== null && _object$begin !== void 0 ? _object$begin : 0;
    message.end = (_object$end4 = object.end) !== null && _object$end4 !== void 0 ? _object$end4 : 0;
    return message;
  }
};