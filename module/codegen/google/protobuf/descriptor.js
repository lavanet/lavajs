import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
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
  typeUrl: "/google.protobuf.FileDescriptorSet",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.file) {
      FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$file;
    const message = createBaseFileDescriptorSet();
    message.file = ((_object$file = object.file) === null || _object$file === void 0 ? void 0 : _object$file.map(e => FileDescriptorProto.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      file: Array.isArray(object === null || object === void 0 ? void 0 : object.file) ? object.file.map(e => FileDescriptorProto.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.file) {
      obj.file = message.file.map(e => e ? FileDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.file = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return FileDescriptorSet.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FileDescriptorSet.decode(message.value);
  },
  toProto(message) {
    return FileDescriptorSet.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FileDescriptorSet",
      value: FileDescriptorSet.encode(message).finish()
    };
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
    options: FileOptions.fromPartial({}),
    sourceCodeInfo: SourceCodeInfo.fromPartial({}),
    syntax: ""
  };
}
export const FileDescriptorProto = {
  typeUrl: "/google.protobuf.FileDescriptorProto",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      name: object.name,
      package: object.package,
      dependency: Array.isArray(object === null || object === void 0 ? void 0 : object.dependency) ? object.dependency.map(e => e) : [],
      publicDependency: Array.isArray(object === null || object === void 0 ? void 0 : object.public_dependency) ? object.public_dependency.map(e => e) : [],
      weakDependency: Array.isArray(object === null || object === void 0 ? void 0 : object.weak_dependency) ? object.weak_dependency.map(e => e) : [],
      messageType: Array.isArray(object === null || object === void 0 ? void 0 : object.message_type) ? object.message_type.map(e => DescriptorProto.fromAmino(e)) : [],
      enumType: Array.isArray(object === null || object === void 0 ? void 0 : object.enum_type) ? object.enum_type.map(e => EnumDescriptorProto.fromAmino(e)) : [],
      service: Array.isArray(object === null || object === void 0 ? void 0 : object.service) ? object.service.map(e => ServiceDescriptorProto.fromAmino(e)) : [],
      extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension) ? object.extension.map(e => FieldDescriptorProto.fromAmino(e)) : [],
      options: object !== null && object !== void 0 && object.options ? FileOptions.fromAmino(object.options) : undefined,
      sourceCodeInfo: object !== null && object !== void 0 && object.source_code_info ? SourceCodeInfo.fromAmino(object.source_code_info) : undefined,
      syntax: object.syntax
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.package = message.package;
    if (message.dependency) {
      obj.dependency = message.dependency.map(e => e);
    } else {
      obj.dependency = [];
    }
    if (message.publicDependency) {
      obj.public_dependency = message.publicDependency.map(e => e);
    } else {
      obj.public_dependency = [];
    }
    if (message.weakDependency) {
      obj.weak_dependency = message.weakDependency.map(e => e);
    } else {
      obj.weak_dependency = [];
    }
    if (message.messageType) {
      obj.message_type = message.messageType.map(e => e ? DescriptorProto.toAmino(e) : undefined);
    } else {
      obj.message_type = [];
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map(e => e ? EnumDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.service) {
      obj.service = message.service.map(e => e ? ServiceDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.extension = [];
    }
    obj.options = message.options ? FileOptions.toAmino(message.options) : undefined;
    obj.source_code_info = message.sourceCodeInfo ? SourceCodeInfo.toAmino(message.sourceCodeInfo) : undefined;
    obj.syntax = message.syntax;
    return obj;
  },
  fromAminoMsg(object) {
    return FileDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FileDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return FileDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FileDescriptorProto",
      value: FileDescriptorProto.encode(message).finish()
    };
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
    options: MessageOptions.fromPartial({}),
    reservedRange: [],
    reservedName: []
  };
}
export const DescriptorProto = {
  typeUrl: "/google.protobuf.DescriptorProto",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      name: object.name,
      field: Array.isArray(object === null || object === void 0 ? void 0 : object.field) ? object.field.map(e => FieldDescriptorProto.fromAmino(e)) : [],
      extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension) ? object.extension.map(e => FieldDescriptorProto.fromAmino(e)) : [],
      nestedType: Array.isArray(object === null || object === void 0 ? void 0 : object.nested_type) ? object.nested_type.map(e => DescriptorProto.fromAmino(e)) : [],
      enumType: Array.isArray(object === null || object === void 0 ? void 0 : object.enum_type) ? object.enum_type.map(e => EnumDescriptorProto.fromAmino(e)) : [],
      extensionRange: Array.isArray(object === null || object === void 0 ? void 0 : object.extension_range) ? object.extension_range.map(e => DescriptorProto_ExtensionRange.fromAmino(e)) : [],
      oneofDecl: Array.isArray(object === null || object === void 0 ? void 0 : object.oneof_decl) ? object.oneof_decl.map(e => OneofDescriptorProto.fromAmino(e)) : [],
      options: object !== null && object !== void 0 && object.options ? MessageOptions.fromAmino(object.options) : undefined,
      reservedRange: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_range) ? object.reserved_range.map(e => DescriptorProto_ReservedRange.fromAmino(e)) : [],
      reservedName: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_name) ? object.reserved_name.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.extension = [];
    }
    if (message.nestedType) {
      obj.nested_type = message.nestedType.map(e => e ? DescriptorProto.toAmino(e) : undefined);
    } else {
      obj.nested_type = [];
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map(e => e ? EnumDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.extensionRange) {
      obj.extension_range = message.extensionRange.map(e => e ? DescriptorProto_ExtensionRange.toAmino(e) : undefined);
    } else {
      obj.extension_range = [];
    }
    if (message.oneofDecl) {
      obj.oneof_decl = message.oneofDecl.map(e => e ? OneofDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.oneof_decl = [];
    }
    obj.options = message.options ? MessageOptions.toAmino(message.options) : undefined;
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map(e => e ? DescriptorProto_ReservedRange.toAmino(e) : undefined);
    } else {
      obj.reserved_range = [];
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map(e => e);
    } else {
      obj.reserved_name = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return DescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DescriptorProto.decode(message.value);
  },
  toProto(message) {
    return DescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.DescriptorProto",
      value: DescriptorProto.encode(message).finish()
    };
  }
};
function createBaseDescriptorProto_ExtensionRange() {
  return {
    start: 0,
    end: 0,
    options: ExtensionRangeOptions.fromPartial({})
  };
}
export const DescriptorProto_ExtensionRange = {
  typeUrl: "/google.protobuf.ExtensionRange",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$start, _object$end;
    const message = createBaseDescriptorProto_ExtensionRange();
    message.start = (_object$start = object.start) !== null && _object$start !== void 0 ? _object$start : 0;
    message.end = (_object$end = object.end) !== null && _object$end !== void 0 ? _object$end : 0;
    message.options = object.options !== undefined && object.options !== null ? ExtensionRangeOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      start: object.start,
      end: object.end,
      options: object !== null && object !== void 0 && object.options ? ExtensionRangeOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.start = message.start;
    obj.end = message.end;
    obj.options = message.options ? ExtensionRangeOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return DescriptorProto_ExtensionRange.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DescriptorProto_ExtensionRange.decode(message.value);
  },
  toProto(message) {
    return DescriptorProto_ExtensionRange.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ExtensionRange",
      value: DescriptorProto_ExtensionRange.encode(message).finish()
    };
  }
};
function createBaseDescriptorProto_ReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
export const DescriptorProto_ReservedRange = {
  typeUrl: "/google.protobuf.ReservedRange",
  encode(message, writer = BinaryWriter.create()) {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$start2, _object$end2;
    const message = createBaseDescriptorProto_ReservedRange();
    message.start = (_object$start2 = object.start) !== null && _object$start2 !== void 0 ? _object$start2 : 0;
    message.end = (_object$end2 = object.end) !== null && _object$end2 !== void 0 ? _object$end2 : 0;
    return message;
  },
  fromAmino(object) {
    return {
      start: object.start,
      end: object.end
    };
  },
  toAmino(message) {
    const obj = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  },
  fromAminoMsg(object) {
    return DescriptorProto_ReservedRange.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return DescriptorProto_ReservedRange.decode(message.value);
  },
  toProto(message) {
    return DescriptorProto_ReservedRange.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ReservedRange",
      value: DescriptorProto_ReservedRange.encode(message).finish()
    };
  }
};
function createBaseExtensionRangeOptions() {
  return {
    uninterpretedOption: []
  };
}
export const ExtensionRangeOptions = {
  typeUrl: "/google.protobuf.ExtensionRangeOptions",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$uninterpreted;
    const message = createBaseExtensionRangeOptions();
    message.uninterpretedOption = ((_object$uninterpreted = object.uninterpretedOption) === null || _object$uninterpreted === void 0 ? void 0 : _object$uninterpreted.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(e => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ExtensionRangeOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ExtensionRangeOptions.decode(message.value);
  },
  toProto(message) {
    return ExtensionRangeOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ExtensionRangeOptions",
      value: ExtensionRangeOptions.encode(message).finish()
    };
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
    options: FieldOptions.fromPartial({})
  };
}
export const FieldDescriptorProto = {
  typeUrl: "/google.protobuf.FieldDescriptorProto",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      name: object.name,
      number: object.number,
      label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : -1,
      type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : -1,
      typeName: object.type_name,
      extendee: object.extendee,
      defaultValue: object.default_value,
      oneofIndex: object.oneof_index,
      jsonName: object.json_name,
      options: object !== null && object !== void 0 && object.options ? FieldOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.number = message.number;
    obj.label = message.label;
    obj.type = message.type;
    obj.type_name = message.typeName;
    obj.extendee = message.extendee;
    obj.default_value = message.defaultValue;
    obj.oneof_index = message.oneofIndex;
    obj.json_name = message.jsonName;
    obj.options = message.options ? FieldOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return FieldDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FieldDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return FieldDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FieldDescriptorProto",
      value: FieldDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseOneofDescriptorProto() {
  return {
    name: "",
    options: OneofOptions.fromPartial({})
  };
}
export const OneofDescriptorProto = {
  typeUrl: "/google.protobuf.OneofDescriptorProto",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$name4;
    const message = createBaseOneofDescriptorProto();
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    message.options = object.options !== undefined && object.options !== null ? OneofOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      name: object.name,
      options: object !== null && object !== void 0 && object.options ? OneofOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.options = message.options ? OneofOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return OneofDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return OneofDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return OneofDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.OneofDescriptorProto",
      value: OneofDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseEnumDescriptorProto() {
  return {
    name: "",
    value: [],
    options: EnumOptions.fromPartial({}),
    reservedRange: [],
    reservedName: []
  };
}
export const EnumDescriptorProto = {
  typeUrl: "/google.protobuf.EnumDescriptorProto",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$name5, _object$value, _object$reservedRange2, _object$reservedName2;
    const message = createBaseEnumDescriptorProto();
    message.name = (_object$name5 = object.name) !== null && _object$name5 !== void 0 ? _object$name5 : "";
    message.value = ((_object$value = object.value) === null || _object$value === void 0 ? void 0 : _object$value.map(e => EnumValueDescriptorProto.fromPartial(e))) || [];
    message.options = object.options !== undefined && object.options !== null ? EnumOptions.fromPartial(object.options) : undefined;
    message.reservedRange = ((_object$reservedRange2 = object.reservedRange) === null || _object$reservedRange2 === void 0 ? void 0 : _object$reservedRange2.map(e => EnumDescriptorProto_EnumReservedRange.fromPartial(e))) || [];
    message.reservedName = ((_object$reservedName2 = object.reservedName) === null || _object$reservedName2 === void 0 ? void 0 : _object$reservedName2.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      name: object.name,
      value: Array.isArray(object === null || object === void 0 ? void 0 : object.value) ? object.value.map(e => EnumValueDescriptorProto.fromAmino(e)) : [],
      options: object !== null && object !== void 0 && object.options ? EnumOptions.fromAmino(object.options) : undefined,
      reservedRange: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_range) ? object.reserved_range.map(e => EnumDescriptorProto_EnumReservedRange.fromAmino(e)) : [],
      reservedName: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_name) ? object.reserved_name.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    if (message.value) {
      obj.value = message.value.map(e => e ? EnumValueDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.value = [];
    }
    obj.options = message.options ? EnumOptions.toAmino(message.options) : undefined;
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map(e => e ? EnumDescriptorProto_EnumReservedRange.toAmino(e) : undefined);
    } else {
      obj.reserved_range = [];
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map(e => e);
    } else {
      obj.reserved_name = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return EnumDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EnumDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return EnumDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumDescriptorProto",
      value: EnumDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
export const EnumDescriptorProto_EnumReservedRange = {
  typeUrl: "/google.protobuf.EnumReservedRange",
  encode(message, writer = BinaryWriter.create()) {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$start3, _object$end3;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = (_object$start3 = object.start) !== null && _object$start3 !== void 0 ? _object$start3 : 0;
    message.end = (_object$end3 = object.end) !== null && _object$end3 !== void 0 ? _object$end3 : 0;
    return message;
  },
  fromAmino(object) {
    return {
      start: object.start,
      end: object.end
    };
  },
  toAmino(message) {
    const obj = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  },
  fromAminoMsg(object) {
    return EnumDescriptorProto_EnumReservedRange.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EnumDescriptorProto_EnumReservedRange.decode(message.value);
  },
  toProto(message) {
    return EnumDescriptorProto_EnumReservedRange.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumReservedRange",
      value: EnumDescriptorProto_EnumReservedRange.encode(message).finish()
    };
  }
};
function createBaseEnumValueDescriptorProto() {
  return {
    name: "",
    number: 0,
    options: EnumValueOptions.fromPartial({})
  };
}
export const EnumValueDescriptorProto = {
  typeUrl: "/google.protobuf.EnumValueDescriptorProto",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$name6, _object$number2;
    const message = createBaseEnumValueDescriptorProto();
    message.name = (_object$name6 = object.name) !== null && _object$name6 !== void 0 ? _object$name6 : "";
    message.number = (_object$number2 = object.number) !== null && _object$number2 !== void 0 ? _object$number2 : 0;
    message.options = object.options !== undefined && object.options !== null ? EnumValueOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      name: object.name,
      number: object.number,
      options: object !== null && object !== void 0 && object.options ? EnumValueOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.number = message.number;
    obj.options = message.options ? EnumValueOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return EnumValueDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EnumValueDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return EnumValueDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumValueDescriptorProto",
      value: EnumValueDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseServiceDescriptorProto() {
  return {
    name: "",
    method: [],
    options: ServiceOptions.fromPartial({})
  };
}
export const ServiceDescriptorProto = {
  typeUrl: "/google.protobuf.ServiceDescriptorProto",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$name7, _object$method;
    const message = createBaseServiceDescriptorProto();
    message.name = (_object$name7 = object.name) !== null && _object$name7 !== void 0 ? _object$name7 : "";
    message.method = ((_object$method = object.method) === null || _object$method === void 0 ? void 0 : _object$method.map(e => MethodDescriptorProto.fromPartial(e))) || [];
    message.options = object.options !== undefined && object.options !== null ? ServiceOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      name: object.name,
      method: Array.isArray(object === null || object === void 0 ? void 0 : object.method) ? object.method.map(e => MethodDescriptorProto.fromAmino(e)) : [],
      options: object !== null && object !== void 0 && object.options ? ServiceOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    if (message.method) {
      obj.method = message.method.map(e => e ? MethodDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.method = [];
    }
    obj.options = message.options ? ServiceOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return ServiceDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ServiceDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return ServiceDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ServiceDescriptorProto",
      value: ServiceDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseMethodDescriptorProto() {
  return {
    name: "",
    inputType: "",
    outputType: "",
    options: MethodOptions.fromPartial({}),
    clientStreaming: false,
    serverStreaming: false
  };
}
export const MethodDescriptorProto = {
  typeUrl: "/google.protobuf.MethodDescriptorProto",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      name: object.name,
      inputType: object.input_type,
      outputType: object.output_type,
      options: object !== null && object !== void 0 && object.options ? MethodOptions.fromAmino(object.options) : undefined,
      clientStreaming: object.client_streaming,
      serverStreaming: object.server_streaming
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.input_type = message.inputType;
    obj.output_type = message.outputType;
    obj.options = message.options ? MethodOptions.toAmino(message.options) : undefined;
    obj.client_streaming = message.clientStreaming;
    obj.server_streaming = message.serverStreaming;
    return obj;
  },
  fromAminoMsg(object) {
    return MethodDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MethodDescriptorProto.decode(message.value);
  },
  toProto(message) {
    return MethodDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.MethodDescriptorProto",
      value: MethodDescriptorProto.encode(message).finish()
    };
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
  typeUrl: "/google.protobuf.FileOptions",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      javaPackage: object.java_package,
      javaOuterClassname: object.java_outer_classname,
      javaMultipleFiles: object.java_multiple_files,
      javaGenerateEqualsAndHash: object.java_generate_equals_and_hash,
      javaStringCheckUtf8: object.java_string_check_utf8,
      optimizeFor: isSet(object.optimize_for) ? fileOptions_OptimizeModeFromJSON(object.optimize_for) : -1,
      goPackage: object.go_package,
      ccGenericServices: object.cc_generic_services,
      javaGenericServices: object.java_generic_services,
      pyGenericServices: object.py_generic_services,
      phpGenericServices: object.php_generic_services,
      deprecated: object.deprecated,
      ccEnableArenas: object.cc_enable_arenas,
      objcClassPrefix: object.objc_class_prefix,
      csharpNamespace: object.csharp_namespace,
      swiftPrefix: object.swift_prefix,
      phpClassPrefix: object.php_class_prefix,
      phpNamespace: object.php_namespace,
      phpMetadataNamespace: object.php_metadata_namespace,
      rubyPackage: object.ruby_package,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(e => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.java_package = message.javaPackage;
    obj.java_outer_classname = message.javaOuterClassname;
    obj.java_multiple_files = message.javaMultipleFiles;
    obj.java_generate_equals_and_hash = message.javaGenerateEqualsAndHash;
    obj.java_string_check_utf8 = message.javaStringCheckUtf8;
    obj.optimize_for = message.optimizeFor;
    obj.go_package = message.goPackage;
    obj.cc_generic_services = message.ccGenericServices;
    obj.java_generic_services = message.javaGenericServices;
    obj.py_generic_services = message.pyGenericServices;
    obj.php_generic_services = message.phpGenericServices;
    obj.deprecated = message.deprecated;
    obj.cc_enable_arenas = message.ccEnableArenas;
    obj.objc_class_prefix = message.objcClassPrefix;
    obj.csharp_namespace = message.csharpNamespace;
    obj.swift_prefix = message.swiftPrefix;
    obj.php_class_prefix = message.phpClassPrefix;
    obj.php_namespace = message.phpNamespace;
    obj.php_metadata_namespace = message.phpMetadataNamespace;
    obj.ruby_package = message.rubyPackage;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return FileOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FileOptions.decode(message.value);
  },
  toProto(message) {
    return FileOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FileOptions",
      value: FileOptions.encode(message).finish()
    };
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
  typeUrl: "/google.protobuf.MessageOptions",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$messageSetWir, _object$noStandardDes, _object$deprecated2, _object$mapEntry, _object$uninterpreted3;
    const message = createBaseMessageOptions();
    message.messageSetWireFormat = (_object$messageSetWir = object.messageSetWireFormat) !== null && _object$messageSetWir !== void 0 ? _object$messageSetWir : false;
    message.noStandardDescriptorAccessor = (_object$noStandardDes = object.noStandardDescriptorAccessor) !== null && _object$noStandardDes !== void 0 ? _object$noStandardDes : false;
    message.deprecated = (_object$deprecated2 = object.deprecated) !== null && _object$deprecated2 !== void 0 ? _object$deprecated2 : false;
    message.mapEntry = (_object$mapEntry = object.mapEntry) !== null && _object$mapEntry !== void 0 ? _object$mapEntry : false;
    message.uninterpretedOption = ((_object$uninterpreted3 = object.uninterpretedOption) === null || _object$uninterpreted3 === void 0 ? void 0 : _object$uninterpreted3.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      messageSetWireFormat: object.message_set_wire_format,
      noStandardDescriptorAccessor: object.no_standard_descriptor_accessor,
      deprecated: object.deprecated,
      mapEntry: object.map_entry,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(e => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.message_set_wire_format = message.messageSetWireFormat;
    obj.no_standard_descriptor_accessor = message.noStandardDescriptorAccessor;
    obj.deprecated = message.deprecated;
    obj.map_entry = message.mapEntry;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MessageOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MessageOptions.decode(message.value);
  },
  toProto(message) {
    return MessageOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.MessageOptions",
      value: MessageOptions.encode(message).finish()
    };
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
  typeUrl: "/google.protobuf.FieldOptions",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object) {
    return {
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : -1,
      packed: object.packed,
      jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : -1,
      lazy: object.lazy,
      deprecated: object.deprecated,
      weak: object.weak,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(e => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.ctype = message.ctype;
    obj.packed = message.packed;
    obj.jstype = message.jstype;
    obj.lazy = message.lazy;
    obj.deprecated = message.deprecated;
    obj.weak = message.weak;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return FieldOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return FieldOptions.decode(message.value);
  },
  toProto(message) {
    return FieldOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FieldOptions",
      value: FieldOptions.encode(message).finish()
    };
  }
};
function createBaseOneofOptions() {
  return {
    uninterpretedOption: []
  };
}
export const OneofOptions = {
  typeUrl: "/google.protobuf.OneofOptions",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$uninterpreted5;
    const message = createBaseOneofOptions();
    message.uninterpretedOption = ((_object$uninterpreted5 = object.uninterpretedOption) === null || _object$uninterpreted5 === void 0 ? void 0 : _object$uninterpreted5.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(e => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return OneofOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return OneofOptions.decode(message.value);
  },
  toProto(message) {
    return OneofOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.OneofOptions",
      value: OneofOptions.encode(message).finish()
    };
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
  typeUrl: "/google.protobuf.EnumOptions",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$allowAlias, _object$deprecated4, _object$uninterpreted6;
    const message = createBaseEnumOptions();
    message.allowAlias = (_object$allowAlias = object.allowAlias) !== null && _object$allowAlias !== void 0 ? _object$allowAlias : false;
    message.deprecated = (_object$deprecated4 = object.deprecated) !== null && _object$deprecated4 !== void 0 ? _object$deprecated4 : false;
    message.uninterpretedOption = ((_object$uninterpreted6 = object.uninterpretedOption) === null || _object$uninterpreted6 === void 0 ? void 0 : _object$uninterpreted6.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      allowAlias: object.allow_alias,
      deprecated: object.deprecated,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(e => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.allow_alias = message.allowAlias;
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return EnumOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EnumOptions.decode(message.value);
  },
  toProto(message) {
    return EnumOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumOptions",
      value: EnumOptions.encode(message).finish()
    };
  }
};
function createBaseEnumValueOptions() {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
export const EnumValueOptions = {
  typeUrl: "/google.protobuf.EnumValueOptions",
  encode(message, writer = BinaryWriter.create()) {
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$deprecated5, _object$uninterpreted7;
    const message = createBaseEnumValueOptions();
    message.deprecated = (_object$deprecated5 = object.deprecated) !== null && _object$deprecated5 !== void 0 ? _object$deprecated5 : false;
    message.uninterpretedOption = ((_object$uninterpreted7 = object.uninterpretedOption) === null || _object$uninterpreted7 === void 0 ? void 0 : _object$uninterpreted7.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      deprecated: object.deprecated,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(e => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return EnumValueOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return EnumValueOptions.decode(message.value);
  },
  toProto(message) {
    return EnumValueOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumValueOptions",
      value: EnumValueOptions.encode(message).finish()
    };
  }
};
function createBaseServiceOptions() {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
export const ServiceOptions = {
  typeUrl: "/google.protobuf.ServiceOptions",
  encode(message, writer = BinaryWriter.create()) {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$deprecated6, _object$uninterpreted8;
    const message = createBaseServiceOptions();
    message.deprecated = (_object$deprecated6 = object.deprecated) !== null && _object$deprecated6 !== void 0 ? _object$deprecated6 : false;
    message.uninterpretedOption = ((_object$uninterpreted8 = object.uninterpretedOption) === null || _object$uninterpreted8 === void 0 ? void 0 : _object$uninterpreted8.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      deprecated: object.deprecated,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(e => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ServiceOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return ServiceOptions.decode(message.value);
  },
  toProto(message) {
    return ServiceOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ServiceOptions",
      value: ServiceOptions.encode(message).finish()
    };
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
  typeUrl: "/google.protobuf.MethodOptions",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$deprecated7, _object$idempotencyLe, _object$uninterpreted9;
    const message = createBaseMethodOptions();
    message.deprecated = (_object$deprecated7 = object.deprecated) !== null && _object$deprecated7 !== void 0 ? _object$deprecated7 : false;
    message.idempotencyLevel = (_object$idempotencyLe = object.idempotencyLevel) !== null && _object$idempotencyLe !== void 0 ? _object$idempotencyLe : 1;
    message.uninterpretedOption = ((_object$uninterpreted9 = object.uninterpretedOption) === null || _object$uninterpreted9 === void 0 ? void 0 : _object$uninterpreted9.map(e => UninterpretedOption.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      deprecated: object.deprecated,
      idempotencyLevel: isSet(object.idempotency_level) ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level) : -1,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(e => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.deprecated = message.deprecated;
    obj.idempotency_level = message.idempotencyLevel;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return MethodOptions.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MethodOptions.decode(message.value);
  },
  toProto(message) {
    return MethodOptions.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.MethodOptions",
      value: MethodOptions.encode(message).finish()
    };
  }
};
function createBaseUninterpretedOption() {
  return {
    name: [],
    identifierValue: "",
    positiveIntValue: BigInt(0),
    negativeIntValue: BigInt(0),
    doubleValue: 0,
    stringValue: new Uint8Array(),
    aggregateValue: ""
  };
}
export const UninterpretedOption = {
  typeUrl: "/google.protobuf.UninterpretedOption",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.identifierValue !== "") {
      writer.uint32(26).string(message.identifierValue);
    }
    if (message.positiveIntValue !== BigInt(0)) {
      writer.uint32(32).uint64(message.positiveIntValue);
    }
    if (message.negativeIntValue !== BigInt(0)) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$name9, _object$identifierVal, _object$doubleValue, _object$stringValue, _object$aggregateValu;
    const message = createBaseUninterpretedOption();
    message.name = ((_object$name9 = object.name) === null || _object$name9 === void 0 ? void 0 : _object$name9.map(e => UninterpretedOption_NamePart.fromPartial(e))) || [];
    message.identifierValue = (_object$identifierVal = object.identifierValue) !== null && _object$identifierVal !== void 0 ? _object$identifierVal : "";
    message.positiveIntValue = object.positiveIntValue !== undefined && object.positiveIntValue !== null ? BigInt(object.positiveIntValue.toString()) : BigInt(0);
    message.negativeIntValue = object.negativeIntValue !== undefined && object.negativeIntValue !== null ? BigInt(object.negativeIntValue.toString()) : BigInt(0);
    message.doubleValue = (_object$doubleValue = object.doubleValue) !== null && _object$doubleValue !== void 0 ? _object$doubleValue : 0;
    message.stringValue = (_object$stringValue = object.stringValue) !== null && _object$stringValue !== void 0 ? _object$stringValue : new Uint8Array();
    message.aggregateValue = (_object$aggregateValu = object.aggregateValue) !== null && _object$aggregateValu !== void 0 ? _object$aggregateValu : "";
    return message;
  },
  fromAmino(object) {
    return {
      name: Array.isArray(object === null || object === void 0 ? void 0 : object.name) ? object.name.map(e => UninterpretedOption_NamePart.fromAmino(e)) : [],
      identifierValue: object.identifier_value,
      positiveIntValue: BigInt(object.positive_int_value),
      negativeIntValue: BigInt(object.negative_int_value),
      doubleValue: object.double_value,
      stringValue: object.string_value,
      aggregateValue: object.aggregate_value
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.name) {
      obj.name = message.name.map(e => e ? UninterpretedOption_NamePart.toAmino(e) : undefined);
    } else {
      obj.name = [];
    }
    obj.identifier_value = message.identifierValue;
    obj.positive_int_value = message.positiveIntValue ? message.positiveIntValue.toString() : undefined;
    obj.negative_int_value = message.negativeIntValue ? message.negativeIntValue.toString() : undefined;
    obj.double_value = message.doubleValue;
    obj.string_value = message.stringValue;
    obj.aggregate_value = message.aggregateValue;
    return obj;
  },
  fromAminoMsg(object) {
    return UninterpretedOption.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UninterpretedOption.decode(message.value);
  },
  toProto(message) {
    return UninterpretedOption.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.UninterpretedOption",
      value: UninterpretedOption.encode(message).finish()
    };
  }
};
function createBaseUninterpretedOption_NamePart() {
  return {
    namePart: "",
    isExtension: false
  };
}
export const UninterpretedOption_NamePart = {
  typeUrl: "/google.protobuf.NamePart",
  encode(message, writer = BinaryWriter.create()) {
    if (message.namePart !== "") {
      writer.uint32(10).string(message.namePart);
    }
    if (message.isExtension === true) {
      writer.uint32(16).bool(message.isExtension);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$namePart, _object$isExtension;
    const message = createBaseUninterpretedOption_NamePart();
    message.namePart = (_object$namePart = object.namePart) !== null && _object$namePart !== void 0 ? _object$namePart : "";
    message.isExtension = (_object$isExtension = object.isExtension) !== null && _object$isExtension !== void 0 ? _object$isExtension : false;
    return message;
  },
  fromAmino(object) {
    return {
      namePart: object.name_part,
      isExtension: object.is_extension
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name_part = message.namePart;
    obj.is_extension = message.isExtension;
    return obj;
  },
  fromAminoMsg(object) {
    return UninterpretedOption_NamePart.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return UninterpretedOption_NamePart.decode(message.value);
  },
  toProto(message) {
    return UninterpretedOption_NamePart.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.NamePart",
      value: UninterpretedOption_NamePart.encode(message).finish()
    };
  }
};
function createBaseSourceCodeInfo() {
  return {
    location: []
  };
}
export const SourceCodeInfo = {
  typeUrl: "/google.protobuf.SourceCodeInfo",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$location;
    const message = createBaseSourceCodeInfo();
    message.location = ((_object$location = object.location) === null || _object$location === void 0 ? void 0 : _object$location.map(e => SourceCodeInfo_Location.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      location: Array.isArray(object === null || object === void 0 ? void 0 : object.location) ? object.location.map(e => SourceCodeInfo_Location.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.location) {
      obj.location = message.location.map(e => e ? SourceCodeInfo_Location.toAmino(e) : undefined);
    } else {
      obj.location = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return SourceCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SourceCodeInfo.decode(message.value);
  },
  toProto(message) {
    return SourceCodeInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.SourceCodeInfo",
      value: SourceCodeInfo.encode(message).finish()
    };
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
  typeUrl: "/google.protobuf.Location",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$path, _object$span, _object$leadingCommen, _object$trailingComme, _object$leadingDetach;
    const message = createBaseSourceCodeInfo_Location();
    message.path = ((_object$path = object.path) === null || _object$path === void 0 ? void 0 : _object$path.map(e => e)) || [];
    message.span = ((_object$span = object.span) === null || _object$span === void 0 ? void 0 : _object$span.map(e => e)) || [];
    message.leadingComments = (_object$leadingCommen = object.leadingComments) !== null && _object$leadingCommen !== void 0 ? _object$leadingCommen : "";
    message.trailingComments = (_object$trailingComme = object.trailingComments) !== null && _object$trailingComme !== void 0 ? _object$trailingComme : "";
    message.leadingDetachedComments = ((_object$leadingDetach = object.leadingDetachedComments) === null || _object$leadingDetach === void 0 ? void 0 : _object$leadingDetach.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(e => e) : [],
      span: Array.isArray(object === null || object === void 0 ? void 0 : object.span) ? object.span.map(e => e) : [],
      leadingComments: object.leading_comments,
      trailingComments: object.trailing_comments,
      leadingDetachedComments: Array.isArray(object === null || object === void 0 ? void 0 : object.leading_detached_comments) ? object.leading_detached_comments.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map(e => e);
    } else {
      obj.span = [];
    }
    obj.leading_comments = message.leadingComments;
    obj.trailing_comments = message.trailingComments;
    if (message.leadingDetachedComments) {
      obj.leading_detached_comments = message.leadingDetachedComments.map(e => e);
    } else {
      obj.leading_detached_comments = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return SourceCodeInfo_Location.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SourceCodeInfo_Location.decode(message.value);
  },
  toProto(message) {
    return SourceCodeInfo_Location.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Location",
      value: SourceCodeInfo_Location.encode(message).finish()
    };
  }
};
function createBaseGeneratedCodeInfo() {
  return {
    annotation: []
  };
}
export const GeneratedCodeInfo = {
  typeUrl: "/google.protobuf.GeneratedCodeInfo",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$annotation;
    const message = createBaseGeneratedCodeInfo();
    message.annotation = ((_object$annotation = object.annotation) === null || _object$annotation === void 0 ? void 0 : _object$annotation.map(e => GeneratedCodeInfo_Annotation.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      annotation: Array.isArray(object === null || object === void 0 ? void 0 : object.annotation) ? object.annotation.map(e => GeneratedCodeInfo_Annotation.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map(e => e ? GeneratedCodeInfo_Annotation.toAmino(e) : undefined);
    } else {
      obj.annotation = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GeneratedCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GeneratedCodeInfo.decode(message.value);
  },
  toProto(message) {
    return GeneratedCodeInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.GeneratedCodeInfo",
      value: GeneratedCodeInfo.encode(message).finish()
    };
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
  typeUrl: "/google.protobuf.Annotation",
  encode(message, writer = BinaryWriter.create()) {
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
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object) {
    var _object$path2, _object$sourceFile, _object$begin, _object$end4;
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = ((_object$path2 = object.path) === null || _object$path2 === void 0 ? void 0 : _object$path2.map(e => e)) || [];
    message.sourceFile = (_object$sourceFile = object.sourceFile) !== null && _object$sourceFile !== void 0 ? _object$sourceFile : "";
    message.begin = (_object$begin = object.begin) !== null && _object$begin !== void 0 ? _object$begin : 0;
    message.end = (_object$end4 = object.end) !== null && _object$end4 !== void 0 ? _object$end4 : 0;
    return message;
  },
  fromAmino(object) {
    return {
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(e => e) : [],
      sourceFile: object.source_file,
      begin: object.begin,
      end: object.end
    };
  },
  toAmino(message) {
    const obj = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = [];
    }
    obj.source_file = message.sourceFile;
    obj.begin = message.begin;
    obj.end = message.end;
    return obj;
  },
  fromAminoMsg(object) {
    return GeneratedCodeInfo_Annotation.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return GeneratedCodeInfo_Annotation.decode(message.value);
  },
  toProto(message) {
    return GeneratedCodeInfo_Annotation.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Annotation",
      value: GeneratedCodeInfo_Annotation.encode(message).finish()
    };
  }
};