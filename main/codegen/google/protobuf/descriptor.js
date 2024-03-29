"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.ServiceOptions = exports.ServiceDescriptorProto = exports.OneofOptions = exports.OneofDescriptorProto = exports.MethodOptions_IdempotencyLevelSDKType = exports.MethodOptions_IdempotencyLevel = exports.MethodOptions = exports.MethodDescriptorProto = exports.MessageOptions = exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.FileOptions_OptimizeModeSDKType = exports.FileOptions_OptimizeMode = exports.FileOptions = exports.FileDescriptorSet = exports.FileDescriptorProto = exports.FieldOptions_JSTypeSDKType = exports.FieldOptions_JSType = exports.FieldOptions_CTypeSDKType = exports.FieldOptions_CType = exports.FieldOptions = exports.FieldDescriptorProto_TypeSDKType = exports.FieldDescriptorProto_Type = exports.FieldDescriptorProto_LabelSDKType = exports.FieldDescriptorProto_Label = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.EnumValueOptions = exports.EnumValueDescriptorProto = exports.EnumOptions = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = void 0;
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
var _binary = require("../../binary");
var _helpers = require("../../helpers");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var FieldDescriptorProto_Type = /*#__PURE__*/function (FieldDescriptorProto_Type) {
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
exports.FieldDescriptorProto_Type = FieldDescriptorProto_Type;
var FieldDescriptorProto_TypeSDKType = FieldDescriptorProto_Type;
exports.FieldDescriptorProto_TypeSDKType = FieldDescriptorProto_TypeSDKType;
function fieldDescriptorProto_TypeFromJSON(object) {
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
function fieldDescriptorProto_TypeToJSON(object) {
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
var FieldDescriptorProto_Label = /*#__PURE__*/function (FieldDescriptorProto_Label) {
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
  FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldDescriptorProto_Label;
}({});
exports.FieldDescriptorProto_Label = FieldDescriptorProto_Label;
var FieldDescriptorProto_LabelSDKType = FieldDescriptorProto_Label;
exports.FieldDescriptorProto_LabelSDKType = FieldDescriptorProto_LabelSDKType;
function fieldDescriptorProto_LabelFromJSON(object) {
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
function fieldDescriptorProto_LabelToJSON(object) {
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
var FileOptions_OptimizeMode = /*#__PURE__*/function (FileOptions_OptimizeMode) {
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
  FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FileOptions_OptimizeMode;
}({});
exports.FileOptions_OptimizeMode = FileOptions_OptimizeMode;
var FileOptions_OptimizeModeSDKType = FileOptions_OptimizeMode;
exports.FileOptions_OptimizeModeSDKType = FileOptions_OptimizeModeSDKType;
function fileOptions_OptimizeModeFromJSON(object) {
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
function fileOptions_OptimizeModeToJSON(object) {
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
var FieldOptions_CType = /*#__PURE__*/function (FieldOptions_CType) {
  FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
  FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
  FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
  FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldOptions_CType;
}({});
exports.FieldOptions_CType = FieldOptions_CType;
var FieldOptions_CTypeSDKType = FieldOptions_CType;
exports.FieldOptions_CTypeSDKType = FieldOptions_CTypeSDKType;
function fieldOptions_CTypeFromJSON(object) {
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
function fieldOptions_CTypeToJSON(object) {
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
var FieldOptions_JSType = /*#__PURE__*/function (FieldOptions_JSType) {
  FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
  FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
  FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
  FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return FieldOptions_JSType;
}({});
exports.FieldOptions_JSType = FieldOptions_JSType;
var FieldOptions_JSTypeSDKType = FieldOptions_JSType;
exports.FieldOptions_JSTypeSDKType = FieldOptions_JSTypeSDKType;
function fieldOptions_JSTypeFromJSON(object) {
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
function fieldOptions_JSTypeToJSON(object) {
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
var MethodOptions_IdempotencyLevel = /*#__PURE__*/function (MethodOptions_IdempotencyLevel) {
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
  MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return MethodOptions_IdempotencyLevel;
}({});
exports.MethodOptions_IdempotencyLevel = MethodOptions_IdempotencyLevel;
var MethodOptions_IdempotencyLevelSDKType = MethodOptions_IdempotencyLevel;
exports.MethodOptions_IdempotencyLevelSDKType = MethodOptions_IdempotencyLevelSDKType;
function methodOptions_IdempotencyLevelFromJSON(object) {
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
function methodOptions_IdempotencyLevelToJSON(object) {
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
var FileDescriptorSet = {
  typeUrl: "/google.protobuf.FileDescriptorSet",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.file),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$file;
    var message = createBaseFileDescriptorSet();
    message.file = ((_object$file = object.file) === null || _object$file === void 0 ? void 0 : _object$file.map(function (e) {
      return FileDescriptorProto.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      file: Array.isArray(object === null || object === void 0 ? void 0 : object.file) ? object.file.map(function (e) {
        return FileDescriptorProto.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.file) {
      obj.file = message.file.map(function (e) {
        return e ? FileDescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.file = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return FileDescriptorSet.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return FileDescriptorSet.decode(message.value);
  },
  toProto: function toProto(message) {
    return FileDescriptorSet.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FileDescriptorSet",
      value: FileDescriptorSet.encode(message).finish()
    };
  }
};
exports.FileDescriptorSet = FileDescriptorSet;
function createBaseFileDescriptorProto() {
  return {
    name: "",
    "package": "",
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
var FileDescriptorProto = {
  typeUrl: "/google.protobuf.FileDescriptorProto",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message["package"] !== "") {
      writer.uint32(18).string(message["package"]);
    }
    var _iterator2 = _createForOfIteratorHelper(message.dependency),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(26).string(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    writer.uint32(82).fork();
    var _iterator3 = _createForOfIteratorHelper(message.publicDependency),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v = _step3.value;
        writer.int32(_v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    writer.ldelim();
    writer.uint32(90).fork();
    var _iterator4 = _createForOfIteratorHelper(message.weakDependency),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v2 = _step4.value;
        writer.int32(_v2);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    writer.ldelim();
    var _iterator5 = _createForOfIteratorHelper(message.messageType),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v3 = _step5.value;
        DescriptorProto.encode(_v3, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(message.enumType),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v4 = _step6.value;
        EnumDescriptorProto.encode(_v4, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    var _iterator7 = _createForOfIteratorHelper(message.service),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _v5 = _step7.value;
        ServiceDescriptorProto.encode(_v5, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    var _iterator8 = _createForOfIteratorHelper(message.extension),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _v6 = _step8.value;
        FieldDescriptorProto.encode(_v6, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
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
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message["package"] = reader.string();
          break;
        case 3:
          message.dependency.push(reader.string());
          break;
        case 10:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publicDependency.push(reader.int32());
            }
          } else {
            message.publicDependency.push(reader.int32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            var _end = reader.uint32() + reader.pos;
            while (reader.pos < _end) {
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
  fromPartial: function fromPartial(object) {
    var _object$name, _object$package, _object$dependency, _object$publicDepende, _object$weakDependenc, _object$messageType, _object$enumType, _object$service, _object$extension, _object$syntax;
    var message = createBaseFileDescriptorProto();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message["package"] = (_object$package = object["package"]) !== null && _object$package !== void 0 ? _object$package : "";
    message.dependency = ((_object$dependency = object.dependency) === null || _object$dependency === void 0 ? void 0 : _object$dependency.map(function (e) {
      return e;
    })) || [];
    message.publicDependency = ((_object$publicDepende = object.publicDependency) === null || _object$publicDepende === void 0 ? void 0 : _object$publicDepende.map(function (e) {
      return e;
    })) || [];
    message.weakDependency = ((_object$weakDependenc = object.weakDependency) === null || _object$weakDependenc === void 0 ? void 0 : _object$weakDependenc.map(function (e) {
      return e;
    })) || [];
    message.messageType = ((_object$messageType = object.messageType) === null || _object$messageType === void 0 ? void 0 : _object$messageType.map(function (e) {
      return DescriptorProto.fromPartial(e);
    })) || [];
    message.enumType = ((_object$enumType = object.enumType) === null || _object$enumType === void 0 ? void 0 : _object$enumType.map(function (e) {
      return EnumDescriptorProto.fromPartial(e);
    })) || [];
    message.service = ((_object$service = object.service) === null || _object$service === void 0 ? void 0 : _object$service.map(function (e) {
      return ServiceDescriptorProto.fromPartial(e);
    })) || [];
    message.extension = ((_object$extension = object.extension) === null || _object$extension === void 0 ? void 0 : _object$extension.map(function (e) {
      return FieldDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? FileOptions.fromPartial(object.options) : undefined;
    message.sourceCodeInfo = object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null ? SourceCodeInfo.fromPartial(object.sourceCodeInfo) : undefined;
    message.syntax = (_object$syntax = object.syntax) !== null && _object$syntax !== void 0 ? _object$syntax : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      "package": object["package"],
      dependency: Array.isArray(object === null || object === void 0 ? void 0 : object.dependency) ? object.dependency.map(function (e) {
        return e;
      }) : [],
      publicDependency: Array.isArray(object === null || object === void 0 ? void 0 : object.public_dependency) ? object.public_dependency.map(function (e) {
        return e;
      }) : [],
      weakDependency: Array.isArray(object === null || object === void 0 ? void 0 : object.weak_dependency) ? object.weak_dependency.map(function (e) {
        return e;
      }) : [],
      messageType: Array.isArray(object === null || object === void 0 ? void 0 : object.message_type) ? object.message_type.map(function (e) {
        return DescriptorProto.fromAmino(e);
      }) : [],
      enumType: Array.isArray(object === null || object === void 0 ? void 0 : object.enum_type) ? object.enum_type.map(function (e) {
        return EnumDescriptorProto.fromAmino(e);
      }) : [],
      service: Array.isArray(object === null || object === void 0 ? void 0 : object.service) ? object.service.map(function (e) {
        return ServiceDescriptorProto.fromAmino(e);
      }) : [],
      extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension) ? object.extension.map(function (e) {
        return FieldDescriptorProto.fromAmino(e);
      }) : [],
      options: object !== null && object !== void 0 && object.options ? FileOptions.fromAmino(object.options) : undefined,
      sourceCodeInfo: object !== null && object !== void 0 && object.source_code_info ? SourceCodeInfo.fromAmino(object.source_code_info) : undefined,
      syntax: object.syntax
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj["package"] = message["package"];
    if (message.dependency) {
      obj.dependency = message.dependency.map(function (e) {
        return e;
      });
    } else {
      obj.dependency = [];
    }
    if (message.publicDependency) {
      obj.public_dependency = message.publicDependency.map(function (e) {
        return e;
      });
    } else {
      obj.public_dependency = [];
    }
    if (message.weakDependency) {
      obj.weak_dependency = message.weakDependency.map(function (e) {
        return e;
      });
    } else {
      obj.weak_dependency = [];
    }
    if (message.messageType) {
      obj.message_type = message.messageType.map(function (e) {
        return e ? DescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.message_type = [];
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map(function (e) {
        return e ? EnumDescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.enum_type = [];
    }
    if (message.service) {
      obj.service = message.service.map(function (e) {
        return e ? ServiceDescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(function (e) {
        return e ? FieldDescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.extension = [];
    }
    obj.options = message.options ? FileOptions.toAmino(message.options) : undefined;
    obj.source_code_info = message.sourceCodeInfo ? SourceCodeInfo.toAmino(message.sourceCodeInfo) : undefined;
    obj.syntax = message.syntax;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return FileDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return FileDescriptorProto.decode(message.value);
  },
  toProto: function toProto(message) {
    return FileDescriptorProto.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FileDescriptorProto",
      value: FileDescriptorProto.encode(message).finish()
    };
  }
};
exports.FileDescriptorProto = FileDescriptorProto;
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
var DescriptorProto = {
  typeUrl: "/google.protobuf.DescriptorProto",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    var _iterator9 = _createForOfIteratorHelper(message.field),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var v = _step9.value;
        FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    var _iterator10 = _createForOfIteratorHelper(message.extension),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _v7 = _step10.value;
        FieldDescriptorProto.encode(_v7, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    var _iterator11 = _createForOfIteratorHelper(message.nestedType),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _v8 = _step11.value;
        DescriptorProto.encode(_v8, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    var _iterator12 = _createForOfIteratorHelper(message.enumType),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _v9 = _step12.value;
        EnumDescriptorProto.encode(_v9, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    var _iterator13 = _createForOfIteratorHelper(message.extensionRange),
      _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var _v10 = _step13.value;
        DescriptorProto_ExtensionRange.encode(_v10, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    var _iterator14 = _createForOfIteratorHelper(message.oneofDecl),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var _v11 = _step14.value;
        OneofDescriptorProto.encode(_v11, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    var _iterator15 = _createForOfIteratorHelper(message.reservedRange),
      _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var _v12 = _step15.value;
        DescriptorProto_ReservedRange.encode(_v12, writer.uint32(74).fork()).ldelim();
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    var _iterator16 = _createForOfIteratorHelper(message.reservedName),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var _v13 = _step16.value;
        writer.uint32(82).string(_v13);
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$name2, _object$field, _object$extension2, _object$nestedType, _object$enumType2, _object$extensionRang, _object$oneofDecl, _object$reservedRange, _object$reservedName;
    var message = createBaseDescriptorProto();
    message.name = (_object$name2 = object.name) !== null && _object$name2 !== void 0 ? _object$name2 : "";
    message.field = ((_object$field = object.field) === null || _object$field === void 0 ? void 0 : _object$field.map(function (e) {
      return FieldDescriptorProto.fromPartial(e);
    })) || [];
    message.extension = ((_object$extension2 = object.extension) === null || _object$extension2 === void 0 ? void 0 : _object$extension2.map(function (e) {
      return FieldDescriptorProto.fromPartial(e);
    })) || [];
    message.nestedType = ((_object$nestedType = object.nestedType) === null || _object$nestedType === void 0 ? void 0 : _object$nestedType.map(function (e) {
      return DescriptorProto.fromPartial(e);
    })) || [];
    message.enumType = ((_object$enumType2 = object.enumType) === null || _object$enumType2 === void 0 ? void 0 : _object$enumType2.map(function (e) {
      return EnumDescriptorProto.fromPartial(e);
    })) || [];
    message.extensionRange = ((_object$extensionRang = object.extensionRange) === null || _object$extensionRang === void 0 ? void 0 : _object$extensionRang.map(function (e) {
      return DescriptorProto_ExtensionRange.fromPartial(e);
    })) || [];
    message.oneofDecl = ((_object$oneofDecl = object.oneofDecl) === null || _object$oneofDecl === void 0 ? void 0 : _object$oneofDecl.map(function (e) {
      return OneofDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? MessageOptions.fromPartial(object.options) : undefined;
    message.reservedRange = ((_object$reservedRange = object.reservedRange) === null || _object$reservedRange === void 0 ? void 0 : _object$reservedRange.map(function (e) {
      return DescriptorProto_ReservedRange.fromPartial(e);
    })) || [];
    message.reservedName = ((_object$reservedName = object.reservedName) === null || _object$reservedName === void 0 ? void 0 : _object$reservedName.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      field: Array.isArray(object === null || object === void 0 ? void 0 : object.field) ? object.field.map(function (e) {
        return FieldDescriptorProto.fromAmino(e);
      }) : [],
      extension: Array.isArray(object === null || object === void 0 ? void 0 : object.extension) ? object.extension.map(function (e) {
        return FieldDescriptorProto.fromAmino(e);
      }) : [],
      nestedType: Array.isArray(object === null || object === void 0 ? void 0 : object.nested_type) ? object.nested_type.map(function (e) {
        return DescriptorProto.fromAmino(e);
      }) : [],
      enumType: Array.isArray(object === null || object === void 0 ? void 0 : object.enum_type) ? object.enum_type.map(function (e) {
        return EnumDescriptorProto.fromAmino(e);
      }) : [],
      extensionRange: Array.isArray(object === null || object === void 0 ? void 0 : object.extension_range) ? object.extension_range.map(function (e) {
        return DescriptorProto_ExtensionRange.fromAmino(e);
      }) : [],
      oneofDecl: Array.isArray(object === null || object === void 0 ? void 0 : object.oneof_decl) ? object.oneof_decl.map(function (e) {
        return OneofDescriptorProto.fromAmino(e);
      }) : [],
      options: object !== null && object !== void 0 && object.options ? MessageOptions.fromAmino(object.options) : undefined,
      reservedRange: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_range) ? object.reserved_range.map(function (e) {
        return DescriptorProto_ReservedRange.fromAmino(e);
      }) : [],
      reservedName: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_name) ? object.reserved_name.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    if (message.field) {
      obj.field = message.field.map(function (e) {
        return e ? FieldDescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(function (e) {
        return e ? FieldDescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.extension = [];
    }
    if (message.nestedType) {
      obj.nested_type = message.nestedType.map(function (e) {
        return e ? DescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.nested_type = [];
    }
    if (message.enumType) {
      obj.enum_type = message.enumType.map(function (e) {
        return e ? EnumDescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.enum_type = [];
    }
    if (message.extensionRange) {
      obj.extension_range = message.extensionRange.map(function (e) {
        return e ? DescriptorProto_ExtensionRange.toAmino(e) : undefined;
      });
    } else {
      obj.extension_range = [];
    }
    if (message.oneofDecl) {
      obj.oneof_decl = message.oneofDecl.map(function (e) {
        return e ? OneofDescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.oneof_decl = [];
    }
    obj.options = message.options ? MessageOptions.toAmino(message.options) : undefined;
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map(function (e) {
        return e ? DescriptorProto_ReservedRange.toAmino(e) : undefined;
      });
    } else {
      obj.reserved_range = [];
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map(function (e) {
        return e;
      });
    } else {
      obj.reserved_name = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DescriptorProto.decode(message.value);
  },
  toProto: function toProto(message) {
    return DescriptorProto.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.DescriptorProto",
      value: DescriptorProto.encode(message).finish()
    };
  }
};
exports.DescriptorProto = DescriptorProto;
function createBaseDescriptorProto_ExtensionRange() {
  return {
    start: 0,
    end: 0,
    options: ExtensionRangeOptions.fromPartial({})
  };
}
var DescriptorProto_ExtensionRange = {
  typeUrl: "/google.protobuf.ExtensionRange",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$start, _object$end;
    var message = createBaseDescriptorProto_ExtensionRange();
    message.start = (_object$start = object.start) !== null && _object$start !== void 0 ? _object$start : 0;
    message.end = (_object$end = object.end) !== null && _object$end !== void 0 ? _object$end : 0;
    message.options = object.options !== undefined && object.options !== null ? ExtensionRangeOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      start: object.start,
      end: object.end,
      options: object !== null && object !== void 0 && object.options ? ExtensionRangeOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.start = message.start;
    obj.end = message.end;
    obj.options = message.options ? ExtensionRangeOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DescriptorProto_ExtensionRange.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DescriptorProto_ExtensionRange.decode(message.value);
  },
  toProto: function toProto(message) {
    return DescriptorProto_ExtensionRange.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ExtensionRange",
      value: DescriptorProto_ExtensionRange.encode(message).finish()
    };
  }
};
exports.DescriptorProto_ExtensionRange = DescriptorProto_ExtensionRange;
function createBaseDescriptorProto_ReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
var DescriptorProto_ReservedRange = {
  typeUrl: "/google.protobuf.ReservedRange",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$start2, _object$end2;
    var message = createBaseDescriptorProto_ReservedRange();
    message.start = (_object$start2 = object.start) !== null && _object$start2 !== void 0 ? _object$start2 : 0;
    message.end = (_object$end2 = object.end) !== null && _object$end2 !== void 0 ? _object$end2 : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      start: object.start,
      end: object.end
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return DescriptorProto_ReservedRange.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return DescriptorProto_ReservedRange.decode(message.value);
  },
  toProto: function toProto(message) {
    return DescriptorProto_ReservedRange.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ReservedRange",
      value: DescriptorProto_ReservedRange.encode(message).finish()
    };
  }
};
exports.DescriptorProto_ReservedRange = DescriptorProto_ReservedRange;
function createBaseExtensionRangeOptions() {
  return {
    uninterpretedOption: []
  };
}
var ExtensionRangeOptions = {
  typeUrl: "/google.protobuf.ExtensionRangeOptions",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator17 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var v = _step17.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$uninterpreted;
    var message = createBaseExtensionRangeOptions();
    message.uninterpretedOption = ((_object$uninterpreted = object.uninterpretedOption) === null || _object$uninterpreted === void 0 ? void 0 : _object$uninterpreted.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(function (e) {
        return e ? UninterpretedOption.toAmino(e) : undefined;
      });
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ExtensionRangeOptions.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ExtensionRangeOptions.decode(message.value);
  },
  toProto: function toProto(message) {
    return ExtensionRangeOptions.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ExtensionRangeOptions",
      value: ExtensionRangeOptions.encode(message).finish()
    };
  }
};
exports.ExtensionRangeOptions = ExtensionRangeOptions;
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
var FieldDescriptorProto = {
  typeUrl: "/google.protobuf.FieldDescriptorProto",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$name3, _object$number, _object$label, _object$type, _object$typeName, _object$extendee, _object$defaultValue, _object$oneofIndex, _object$jsonName;
    var message = createBaseFieldDescriptorProto();
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
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      number: object.number,
      label: (0, _helpers.isSet)(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : -1,
      type: (0, _helpers.isSet)(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : -1,
      typeName: object.type_name,
      extendee: object.extendee,
      defaultValue: object.default_value,
      oneofIndex: object.oneof_index,
      jsonName: object.json_name,
      options: object !== null && object !== void 0 && object.options ? FieldOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
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
  fromAminoMsg: function fromAminoMsg(object) {
    return FieldDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return FieldDescriptorProto.decode(message.value);
  },
  toProto: function toProto(message) {
    return FieldDescriptorProto.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FieldDescriptorProto",
      value: FieldDescriptorProto.encode(message).finish()
    };
  }
};
exports.FieldDescriptorProto = FieldDescriptorProto;
function createBaseOneofDescriptorProto() {
  return {
    name: "",
    options: OneofOptions.fromPartial({})
  };
}
var OneofDescriptorProto = {
  typeUrl: "/google.protobuf.OneofDescriptorProto",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$name4;
    var message = createBaseOneofDescriptorProto();
    message.name = (_object$name4 = object.name) !== null && _object$name4 !== void 0 ? _object$name4 : "";
    message.options = object.options !== undefined && object.options !== null ? OneofOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      options: object !== null && object !== void 0 && object.options ? OneofOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj.options = message.options ? OneofOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return OneofDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return OneofDescriptorProto.decode(message.value);
  },
  toProto: function toProto(message) {
    return OneofDescriptorProto.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.OneofDescriptorProto",
      value: OneofDescriptorProto.encode(message).finish()
    };
  }
};
exports.OneofDescriptorProto = OneofDescriptorProto;
function createBaseEnumDescriptorProto() {
  return {
    name: "",
    value: [],
    options: EnumOptions.fromPartial({}),
    reservedRange: [],
    reservedName: []
  };
}
var EnumDescriptorProto = {
  typeUrl: "/google.protobuf.EnumDescriptorProto",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    var _iterator18 = _createForOfIteratorHelper(message.value),
      _step18;
    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var v = _step18.value;
        EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    var _iterator19 = _createForOfIteratorHelper(message.reservedRange),
      _step19;
    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var _v14 = _step19.value;
        EnumDescriptorProto_EnumReservedRange.encode(_v14, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
    var _iterator20 = _createForOfIteratorHelper(message.reservedName),
      _step20;
    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var _v15 = _step20.value;
        writer.uint32(42).string(_v15);
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$name5, _object$value, _object$reservedRange2, _object$reservedName2;
    var message = createBaseEnumDescriptorProto();
    message.name = (_object$name5 = object.name) !== null && _object$name5 !== void 0 ? _object$name5 : "";
    message.value = ((_object$value = object.value) === null || _object$value === void 0 ? void 0 : _object$value.map(function (e) {
      return EnumValueDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? EnumOptions.fromPartial(object.options) : undefined;
    message.reservedRange = ((_object$reservedRange2 = object.reservedRange) === null || _object$reservedRange2 === void 0 ? void 0 : _object$reservedRange2.map(function (e) {
      return EnumDescriptorProto_EnumReservedRange.fromPartial(e);
    })) || [];
    message.reservedName = ((_object$reservedName2 = object.reservedName) === null || _object$reservedName2 === void 0 ? void 0 : _object$reservedName2.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      value: Array.isArray(object === null || object === void 0 ? void 0 : object.value) ? object.value.map(function (e) {
        return EnumValueDescriptorProto.fromAmino(e);
      }) : [],
      options: object !== null && object !== void 0 && object.options ? EnumOptions.fromAmino(object.options) : undefined,
      reservedRange: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_range) ? object.reserved_range.map(function (e) {
        return EnumDescriptorProto_EnumReservedRange.fromAmino(e);
      }) : [],
      reservedName: Array.isArray(object === null || object === void 0 ? void 0 : object.reserved_name) ? object.reserved_name.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    if (message.value) {
      obj.value = message.value.map(function (e) {
        return e ? EnumValueDescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.value = [];
    }
    obj.options = message.options ? EnumOptions.toAmino(message.options) : undefined;
    if (message.reservedRange) {
      obj.reserved_range = message.reservedRange.map(function (e) {
        return e ? EnumDescriptorProto_EnumReservedRange.toAmino(e) : undefined;
      });
    } else {
      obj.reserved_range = [];
    }
    if (message.reservedName) {
      obj.reserved_name = message.reservedName.map(function (e) {
        return e;
      });
    } else {
      obj.reserved_name = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EnumDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EnumDescriptorProto.decode(message.value);
  },
  toProto: function toProto(message) {
    return EnumDescriptorProto.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumDescriptorProto",
      value: EnumDescriptorProto.encode(message).finish()
    };
  }
};
exports.EnumDescriptorProto = EnumDescriptorProto;
function createBaseEnumDescriptorProto_EnumReservedRange() {
  return {
    start: 0,
    end: 0
  };
}
var EnumDescriptorProto_EnumReservedRange = {
  typeUrl: "/google.protobuf.EnumReservedRange",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$start3, _object$end3;
    var message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = (_object$start3 = object.start) !== null && _object$start3 !== void 0 ? _object$start3 : 0;
    message.end = (_object$end3 = object.end) !== null && _object$end3 !== void 0 ? _object$end3 : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      start: object.start,
      end: object.end
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EnumDescriptorProto_EnumReservedRange.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EnumDescriptorProto_EnumReservedRange.decode(message.value);
  },
  toProto: function toProto(message) {
    return EnumDescriptorProto_EnumReservedRange.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumReservedRange",
      value: EnumDescriptorProto_EnumReservedRange.encode(message).finish()
    };
  }
};
exports.EnumDescriptorProto_EnumReservedRange = EnumDescriptorProto_EnumReservedRange;
function createBaseEnumValueDescriptorProto() {
  return {
    name: "",
    number: 0,
    options: EnumValueOptions.fromPartial({})
  };
}
var EnumValueDescriptorProto = {
  typeUrl: "/google.protobuf.EnumValueDescriptorProto",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$name6, _object$number2;
    var message = createBaseEnumValueDescriptorProto();
    message.name = (_object$name6 = object.name) !== null && _object$name6 !== void 0 ? _object$name6 : "";
    message.number = (_object$number2 = object.number) !== null && _object$number2 !== void 0 ? _object$number2 : 0;
    message.options = object.options !== undefined && object.options !== null ? EnumValueOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      number: object.number,
      options: object !== null && object !== void 0 && object.options ? EnumValueOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj.number = message.number;
    obj.options = message.options ? EnumValueOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EnumValueDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EnumValueDescriptorProto.decode(message.value);
  },
  toProto: function toProto(message) {
    return EnumValueDescriptorProto.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumValueDescriptorProto",
      value: EnumValueDescriptorProto.encode(message).finish()
    };
  }
};
exports.EnumValueDescriptorProto = EnumValueDescriptorProto;
function createBaseServiceDescriptorProto() {
  return {
    name: "",
    method: [],
    options: ServiceOptions.fromPartial({})
  };
}
var ServiceDescriptorProto = {
  typeUrl: "/google.protobuf.ServiceDescriptorProto",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    var _iterator21 = _createForOfIteratorHelper(message.method),
      _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
        var v = _step21.value;
        MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$name7, _object$method;
    var message = createBaseServiceDescriptorProto();
    message.name = (_object$name7 = object.name) !== null && _object$name7 !== void 0 ? _object$name7 : "";
    message.method = ((_object$method = object.method) === null || _object$method === void 0 ? void 0 : _object$method.map(function (e) {
      return MethodDescriptorProto.fromPartial(e);
    })) || [];
    message.options = object.options !== undefined && object.options !== null ? ServiceOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      method: Array.isArray(object === null || object === void 0 ? void 0 : object.method) ? object.method.map(function (e) {
        return MethodDescriptorProto.fromAmino(e);
      }) : [],
      options: object !== null && object !== void 0 && object.options ? ServiceOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    if (message.method) {
      obj.method = message.method.map(function (e) {
        return e ? MethodDescriptorProto.toAmino(e) : undefined;
      });
    } else {
      obj.method = [];
    }
    obj.options = message.options ? ServiceOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ServiceDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ServiceDescriptorProto.decode(message.value);
  },
  toProto: function toProto(message) {
    return ServiceDescriptorProto.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ServiceDescriptorProto",
      value: ServiceDescriptorProto.encode(message).finish()
    };
  }
};
exports.ServiceDescriptorProto = ServiceDescriptorProto;
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
var MethodDescriptorProto = {
  typeUrl: "/google.protobuf.MethodDescriptorProto",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
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
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$name8, _object$inputType, _object$outputType, _object$clientStreami, _object$serverStreami;
    var message = createBaseMethodDescriptorProto();
    message.name = (_object$name8 = object.name) !== null && _object$name8 !== void 0 ? _object$name8 : "";
    message.inputType = (_object$inputType = object.inputType) !== null && _object$inputType !== void 0 ? _object$inputType : "";
    message.outputType = (_object$outputType = object.outputType) !== null && _object$outputType !== void 0 ? _object$outputType : "";
    message.options = object.options !== undefined && object.options !== null ? MethodOptions.fromPartial(object.options) : undefined;
    message.clientStreaming = (_object$clientStreami = object.clientStreaming) !== null && _object$clientStreami !== void 0 ? _object$clientStreami : false;
    message.serverStreaming = (_object$serverStreami = object.serverStreaming) !== null && _object$serverStreami !== void 0 ? _object$serverStreami : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      inputType: object.input_type,
      outputType: object.output_type,
      options: object !== null && object !== void 0 && object.options ? MethodOptions.fromAmino(object.options) : undefined,
      clientStreaming: object.client_streaming,
      serverStreaming: object.server_streaming
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj.input_type = message.inputType;
    obj.output_type = message.outputType;
    obj.options = message.options ? MethodOptions.toAmino(message.options) : undefined;
    obj.client_streaming = message.clientStreaming;
    obj.server_streaming = message.serverStreaming;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MethodDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MethodDescriptorProto.decode(message.value);
  },
  toProto: function toProto(message) {
    return MethodDescriptorProto.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.MethodDescriptorProto",
      value: MethodDescriptorProto.encode(message).finish()
    };
  }
};
exports.MethodDescriptorProto = MethodDescriptorProto;
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
var FileOptions = {
  typeUrl: "/google.protobuf.FileOptions",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
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
    var _iterator22 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        var v = _step22.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFileOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$javaPackage, _object$javaOuterClas, _object$javaMultipleF, _object$javaGenerateE, _object$javaStringChe, _object$optimizeFor, _object$goPackage, _object$ccGenericServ, _object$javaGenericSe, _object$pyGenericServ, _object$phpGenericSer, _object$deprecated, _object$ccEnableArena, _object$objcClassPref, _object$csharpNamespa, _object$swiftPrefix, _object$phpClassPrefi, _object$phpNamespace, _object$phpMetadataNa, _object$rubyPackage, _object$uninterpreted2;
    var message = createBaseFileOptions();
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
    message.uninterpretedOption = ((_object$uninterpreted2 = object.uninterpretedOption) === null || _object$uninterpreted2 === void 0 ? void 0 : _object$uninterpreted2.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      javaPackage: object.java_package,
      javaOuterClassname: object.java_outer_classname,
      javaMultipleFiles: object.java_multiple_files,
      javaGenerateEqualsAndHash: object.java_generate_equals_and_hash,
      javaStringCheckUtf8: object.java_string_check_utf8,
      optimizeFor: (0, _helpers.isSet)(object.optimize_for) ? fileOptions_OptimizeModeFromJSON(object.optimize_for) : -1,
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
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
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
      obj.uninterpreted_option = message.uninterpretedOption.map(function (e) {
        return e ? UninterpretedOption.toAmino(e) : undefined;
      });
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return FileOptions.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return FileOptions.decode(message.value);
  },
  toProto: function toProto(message) {
    return FileOptions.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FileOptions",
      value: FileOptions.encode(message).finish()
    };
  }
};
exports.FileOptions = FileOptions;
function createBaseMessageOptions() {
  return {
    messageSetWireFormat: false,
    noStandardDescriptorAccessor: false,
    deprecated: false,
    mapEntry: false,
    uninterpretedOption: []
  };
}
var MessageOptions = {
  typeUrl: "/google.protobuf.MessageOptions",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
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
    var _iterator23 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step23;
    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        var v = _step23.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMessageOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$messageSetWir, _object$noStandardDes, _object$deprecated2, _object$mapEntry, _object$uninterpreted3;
    var message = createBaseMessageOptions();
    message.messageSetWireFormat = (_object$messageSetWir = object.messageSetWireFormat) !== null && _object$messageSetWir !== void 0 ? _object$messageSetWir : false;
    message.noStandardDescriptorAccessor = (_object$noStandardDes = object.noStandardDescriptorAccessor) !== null && _object$noStandardDes !== void 0 ? _object$noStandardDes : false;
    message.deprecated = (_object$deprecated2 = object.deprecated) !== null && _object$deprecated2 !== void 0 ? _object$deprecated2 : false;
    message.mapEntry = (_object$mapEntry = object.mapEntry) !== null && _object$mapEntry !== void 0 ? _object$mapEntry : false;
    message.uninterpretedOption = ((_object$uninterpreted3 = object.uninterpretedOption) === null || _object$uninterpreted3 === void 0 ? void 0 : _object$uninterpreted3.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      messageSetWireFormat: object.message_set_wire_format,
      noStandardDescriptorAccessor: object.no_standard_descriptor_accessor,
      deprecated: object.deprecated,
      mapEntry: object.map_entry,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.message_set_wire_format = message.messageSetWireFormat;
    obj.no_standard_descriptor_accessor = message.noStandardDescriptorAccessor;
    obj.deprecated = message.deprecated;
    obj.map_entry = message.mapEntry;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(function (e) {
        return e ? UninterpretedOption.toAmino(e) : undefined;
      });
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MessageOptions.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MessageOptions.decode(message.value);
  },
  toProto: function toProto(message) {
    return MessageOptions.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.MessageOptions",
      value: MessageOptions.encode(message).finish()
    };
  }
};
exports.MessageOptions = MessageOptions;
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
var FieldOptions = {
  typeUrl: "/google.protobuf.FieldOptions",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
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
    var _iterator24 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step24;
    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
        var v = _step24.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFieldOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$ctype, _object$packed, _object$jstype, _object$lazy, _object$deprecated3, _object$weak, _object$uninterpreted4;
    var message = createBaseFieldOptions();
    message.ctype = (_object$ctype = object.ctype) !== null && _object$ctype !== void 0 ? _object$ctype : 1;
    message.packed = (_object$packed = object.packed) !== null && _object$packed !== void 0 ? _object$packed : false;
    message.jstype = (_object$jstype = object.jstype) !== null && _object$jstype !== void 0 ? _object$jstype : 1;
    message.lazy = (_object$lazy = object.lazy) !== null && _object$lazy !== void 0 ? _object$lazy : false;
    message.deprecated = (_object$deprecated3 = object.deprecated) !== null && _object$deprecated3 !== void 0 ? _object$deprecated3 : false;
    message.weak = (_object$weak = object.weak) !== null && _object$weak !== void 0 ? _object$weak : false;
    message.uninterpretedOption = ((_object$uninterpreted4 = object.uninterpretedOption) === null || _object$uninterpreted4 === void 0 ? void 0 : _object$uninterpreted4.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      ctype: (0, _helpers.isSet)(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : -1,
      packed: object.packed,
      jstype: (0, _helpers.isSet)(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : -1,
      lazy: object.lazy,
      deprecated: object.deprecated,
      weak: object.weak,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.ctype = message.ctype;
    obj.packed = message.packed;
    obj.jstype = message.jstype;
    obj.lazy = message.lazy;
    obj.deprecated = message.deprecated;
    obj.weak = message.weak;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(function (e) {
        return e ? UninterpretedOption.toAmino(e) : undefined;
      });
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return FieldOptions.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return FieldOptions.decode(message.value);
  },
  toProto: function toProto(message) {
    return FieldOptions.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.FieldOptions",
      value: FieldOptions.encode(message).finish()
    };
  }
};
exports.FieldOptions = FieldOptions;
function createBaseOneofOptions() {
  return {
    uninterpretedOption: []
  };
}
var OneofOptions = {
  typeUrl: "/google.protobuf.OneofOptions",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator25 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
        var v = _step25.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseOneofOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$uninterpreted5;
    var message = createBaseOneofOptions();
    message.uninterpretedOption = ((_object$uninterpreted5 = object.uninterpretedOption) === null || _object$uninterpreted5 === void 0 ? void 0 : _object$uninterpreted5.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(function (e) {
        return e ? UninterpretedOption.toAmino(e) : undefined;
      });
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return OneofOptions.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return OneofOptions.decode(message.value);
  },
  toProto: function toProto(message) {
    return OneofOptions.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.OneofOptions",
      value: OneofOptions.encode(message).finish()
    };
  }
};
exports.OneofOptions = OneofOptions;
function createBaseEnumOptions() {
  return {
    allowAlias: false,
    deprecated: false,
    uninterpretedOption: []
  };
}
var EnumOptions = {
  typeUrl: "/google.protobuf.EnumOptions",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.allowAlias === true) {
      writer.uint32(16).bool(message.allowAlias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    var _iterator26 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step26;
    try {
      for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
        var v = _step26.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$allowAlias, _object$deprecated4, _object$uninterpreted6;
    var message = createBaseEnumOptions();
    message.allowAlias = (_object$allowAlias = object.allowAlias) !== null && _object$allowAlias !== void 0 ? _object$allowAlias : false;
    message.deprecated = (_object$deprecated4 = object.deprecated) !== null && _object$deprecated4 !== void 0 ? _object$deprecated4 : false;
    message.uninterpretedOption = ((_object$uninterpreted6 = object.uninterpretedOption) === null || _object$uninterpreted6 === void 0 ? void 0 : _object$uninterpreted6.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      allowAlias: object.allow_alias,
      deprecated: object.deprecated,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.allow_alias = message.allowAlias;
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(function (e) {
        return e ? UninterpretedOption.toAmino(e) : undefined;
      });
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EnumOptions.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EnumOptions.decode(message.value);
  },
  toProto: function toProto(message) {
    return EnumOptions.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumOptions",
      value: EnumOptions.encode(message).finish()
    };
  }
};
exports.EnumOptions = EnumOptions;
function createBaseEnumValueOptions() {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
var EnumValueOptions = {
  typeUrl: "/google.protobuf.EnumValueOptions",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    var _iterator27 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step27;
    try {
      for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
        var v = _step27.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator27.e(err);
    } finally {
      _iterator27.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$deprecated5, _object$uninterpreted7;
    var message = createBaseEnumValueOptions();
    message.deprecated = (_object$deprecated5 = object.deprecated) !== null && _object$deprecated5 !== void 0 ? _object$deprecated5 : false;
    message.uninterpretedOption = ((_object$uninterpreted7 = object.uninterpretedOption) === null || _object$uninterpreted7 === void 0 ? void 0 : _object$uninterpreted7.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      deprecated: object.deprecated,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(function (e) {
        return e ? UninterpretedOption.toAmino(e) : undefined;
      });
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return EnumValueOptions.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return EnumValueOptions.decode(message.value);
  },
  toProto: function toProto(message) {
    return EnumValueOptions.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.EnumValueOptions",
      value: EnumValueOptions.encode(message).finish()
    };
  }
};
exports.EnumValueOptions = EnumValueOptions;
function createBaseServiceOptions() {
  return {
    deprecated: false,
    uninterpretedOption: []
  };
}
var ServiceOptions = {
  typeUrl: "/google.protobuf.ServiceOptions",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    var _iterator28 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step28;
    try {
      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
        var v = _step28.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator28.e(err);
    } finally {
      _iterator28.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseServiceOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$deprecated6, _object$uninterpreted8;
    var message = createBaseServiceOptions();
    message.deprecated = (_object$deprecated6 = object.deprecated) !== null && _object$deprecated6 !== void 0 ? _object$deprecated6 : false;
    message.uninterpretedOption = ((_object$uninterpreted8 = object.uninterpretedOption) === null || _object$uninterpreted8 === void 0 ? void 0 : _object$uninterpreted8.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      deprecated: object.deprecated,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.deprecated = message.deprecated;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(function (e) {
        return e ? UninterpretedOption.toAmino(e) : undefined;
      });
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ServiceOptions.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ServiceOptions.decode(message.value);
  },
  toProto: function toProto(message) {
    return ServiceOptions.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.ServiceOptions",
      value: ServiceOptions.encode(message).finish()
    };
  }
};
exports.ServiceOptions = ServiceOptions;
function createBaseMethodOptions() {
  return {
    deprecated: false,
    idempotencyLevel: 1,
    uninterpretedOption: []
  };
}
var MethodOptions = {
  typeUrl: "/google.protobuf.MethodOptions",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotencyLevel !== 1) {
      writer.uint32(272).int32(message.idempotencyLevel);
    }
    var _iterator29 = _createForOfIteratorHelper(message.uninterpretedOption),
      _step29;
    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var v = _step29.value;
        UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMethodOptions();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$deprecated7, _object$idempotencyLe, _object$uninterpreted9;
    var message = createBaseMethodOptions();
    message.deprecated = (_object$deprecated7 = object.deprecated) !== null && _object$deprecated7 !== void 0 ? _object$deprecated7 : false;
    message.idempotencyLevel = (_object$idempotencyLe = object.idempotencyLevel) !== null && _object$idempotencyLe !== void 0 ? _object$idempotencyLe : 1;
    message.uninterpretedOption = ((_object$uninterpreted9 = object.uninterpretedOption) === null || _object$uninterpreted9 === void 0 ? void 0 : _object$uninterpreted9.map(function (e) {
      return UninterpretedOption.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      deprecated: object.deprecated,
      idempotencyLevel: (0, _helpers.isSet)(object.idempotency_level) ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level) : -1,
      uninterpretedOption: Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpreted_option) ? object.uninterpreted_option.map(function (e) {
        return UninterpretedOption.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.deprecated = message.deprecated;
    obj.idempotency_level = message.idempotencyLevel;
    if (message.uninterpretedOption) {
      obj.uninterpreted_option = message.uninterpretedOption.map(function (e) {
        return e ? UninterpretedOption.toAmino(e) : undefined;
      });
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MethodOptions.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MethodOptions.decode(message.value);
  },
  toProto: function toProto(message) {
    return MethodOptions.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.MethodOptions",
      value: MethodOptions.encode(message).finish()
    };
  }
};
exports.MethodOptions = MethodOptions;
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
var UninterpretedOption = {
  typeUrl: "/google.protobuf.UninterpretedOption",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator30 = _createForOfIteratorHelper(message.name),
      _step30;
    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var v = _step30.value;
        UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
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
      writer.uint32(49)["double"](message.doubleValue);
    }
    if (message.stringValue.length !== 0) {
      writer.uint32(58).bytes(message.stringValue);
    }
    if (message.aggregateValue !== "") {
      writer.uint32(66).string(message.aggregateValue);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
          message.doubleValue = reader["double"]();
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
  fromPartial: function fromPartial(object) {
    var _object$name9, _object$identifierVal, _object$doubleValue, _object$stringValue, _object$aggregateValu;
    var message = createBaseUninterpretedOption();
    message.name = ((_object$name9 = object.name) === null || _object$name9 === void 0 ? void 0 : _object$name9.map(function (e) {
      return UninterpretedOption_NamePart.fromPartial(e);
    })) || [];
    message.identifierValue = (_object$identifierVal = object.identifierValue) !== null && _object$identifierVal !== void 0 ? _object$identifierVal : "";
    message.positiveIntValue = object.positiveIntValue !== undefined && object.positiveIntValue !== null ? BigInt(object.positiveIntValue.toString()) : BigInt(0);
    message.negativeIntValue = object.negativeIntValue !== undefined && object.negativeIntValue !== null ? BigInt(object.negativeIntValue.toString()) : BigInt(0);
    message.doubleValue = (_object$doubleValue = object.doubleValue) !== null && _object$doubleValue !== void 0 ? _object$doubleValue : 0;
    message.stringValue = (_object$stringValue = object.stringValue) !== null && _object$stringValue !== void 0 ? _object$stringValue : new Uint8Array();
    message.aggregateValue = (_object$aggregateValu = object.aggregateValue) !== null && _object$aggregateValu !== void 0 ? _object$aggregateValu : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: Array.isArray(object === null || object === void 0 ? void 0 : object.name) ? object.name.map(function (e) {
        return UninterpretedOption_NamePart.fromAmino(e);
      }) : [],
      identifierValue: object.identifier_value,
      positiveIntValue: BigInt(object.positive_int_value),
      negativeIntValue: BigInt(object.negative_int_value),
      doubleValue: object.double_value,
      stringValue: object.string_value,
      aggregateValue: object.aggregate_value
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.name) {
      obj.name = message.name.map(function (e) {
        return e ? UninterpretedOption_NamePart.toAmino(e) : undefined;
      });
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
  fromAminoMsg: function fromAminoMsg(object) {
    return UninterpretedOption.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return UninterpretedOption.decode(message.value);
  },
  toProto: function toProto(message) {
    return UninterpretedOption.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.UninterpretedOption",
      value: UninterpretedOption.encode(message).finish()
    };
  }
};
exports.UninterpretedOption = UninterpretedOption;
function createBaseUninterpretedOption_NamePart() {
  return {
    namePart: "",
    isExtension: false
  };
}
var UninterpretedOption_NamePart = {
  typeUrl: "/google.protobuf.NamePart",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.namePart !== "") {
      writer.uint32(10).string(message.namePart);
    }
    if (message.isExtension === true) {
      writer.uint32(16).bool(message.isExtension);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$namePart, _object$isExtension;
    var message = createBaseUninterpretedOption_NamePart();
    message.namePart = (_object$namePart = object.namePart) !== null && _object$namePart !== void 0 ? _object$namePart : "";
    message.isExtension = (_object$isExtension = object.isExtension) !== null && _object$isExtension !== void 0 ? _object$isExtension : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      namePart: object.name_part,
      isExtension: object.is_extension
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name_part = message.namePart;
    obj.is_extension = message.isExtension;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return UninterpretedOption_NamePart.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return UninterpretedOption_NamePart.decode(message.value);
  },
  toProto: function toProto(message) {
    return UninterpretedOption_NamePart.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.NamePart",
      value: UninterpretedOption_NamePart.encode(message).finish()
    };
  }
};
exports.UninterpretedOption_NamePart = UninterpretedOption_NamePart;
function createBaseSourceCodeInfo() {
  return {
    location: []
  };
}
var SourceCodeInfo = {
  typeUrl: "/google.protobuf.SourceCodeInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator31 = _createForOfIteratorHelper(message.location),
      _step31;
    try {
      for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
        var v = _step31.value;
        SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator31.e(err);
    } finally {
      _iterator31.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$location;
    var message = createBaseSourceCodeInfo();
    message.location = ((_object$location = object.location) === null || _object$location === void 0 ? void 0 : _object$location.map(function (e) {
      return SourceCodeInfo_Location.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      location: Array.isArray(object === null || object === void 0 ? void 0 : object.location) ? object.location.map(function (e) {
        return SourceCodeInfo_Location.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.location) {
      obj.location = message.location.map(function (e) {
        return e ? SourceCodeInfo_Location.toAmino(e) : undefined;
      });
    } else {
      obj.location = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return SourceCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return SourceCodeInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return SourceCodeInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.SourceCodeInfo",
      value: SourceCodeInfo.encode(message).finish()
    };
  }
};
exports.SourceCodeInfo = SourceCodeInfo;
function createBaseSourceCodeInfo_Location() {
  return {
    path: [],
    span: [],
    leadingComments: "",
    trailingComments: "",
    leadingDetachedComments: []
  };
}
var SourceCodeInfo_Location = {
  typeUrl: "/google.protobuf.Location",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    writer.uint32(10).fork();
    var _iterator32 = _createForOfIteratorHelper(message.path),
      _step32;
    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var v = _step32.value;
        writer.int32(v);
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }
    writer.ldelim();
    writer.uint32(18).fork();
    var _iterator33 = _createForOfIteratorHelper(message.span),
      _step33;
    try {
      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
        var _v16 = _step33.value;
        writer.int32(_v16);
      }
    } catch (err) {
      _iterator33.e(err);
    } finally {
      _iterator33.f();
    }
    writer.ldelim();
    if (message.leadingComments !== "") {
      writer.uint32(26).string(message.leadingComments);
    }
    if (message.trailingComments !== "") {
      writer.uint32(34).string(message.trailingComments);
    }
    var _iterator34 = _createForOfIteratorHelper(message.leadingDetachedComments),
      _step34;
    try {
      for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
        var _v17 = _step34.value;
        writer.uint32(50).string(_v17);
      }
    } catch (err) {
      _iterator34.e(err);
    } finally {
      _iterator34.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            var _end2 = reader.uint32() + reader.pos;
            while (reader.pos < _end2) {
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
  fromPartial: function fromPartial(object) {
    var _object$path, _object$span, _object$leadingCommen, _object$trailingComme, _object$leadingDetach;
    var message = createBaseSourceCodeInfo_Location();
    message.path = ((_object$path = object.path) === null || _object$path === void 0 ? void 0 : _object$path.map(function (e) {
      return e;
    })) || [];
    message.span = ((_object$span = object.span) === null || _object$span === void 0 ? void 0 : _object$span.map(function (e) {
      return e;
    })) || [];
    message.leadingComments = (_object$leadingCommen = object.leadingComments) !== null && _object$leadingCommen !== void 0 ? _object$leadingCommen : "";
    message.trailingComments = (_object$trailingComme = object.trailingComments) !== null && _object$trailingComme !== void 0 ? _object$trailingComme : "";
    message.leadingDetachedComments = ((_object$leadingDetach = object.leadingDetachedComments) === null || _object$leadingDetach === void 0 ? void 0 : _object$leadingDetach.map(function (e) {
      return e;
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(function (e) {
        return e;
      }) : [],
      span: Array.isArray(object === null || object === void 0 ? void 0 : object.span) ? object.span.map(function (e) {
        return e;
      }) : [],
      leadingComments: object.leading_comments,
      trailingComments: object.trailing_comments,
      leadingDetachedComments: Array.isArray(object === null || object === void 0 ? void 0 : object.leading_detached_comments) ? object.leading_detached_comments.map(function (e) {
        return e;
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.path) {
      obj.path = message.path.map(function (e) {
        return e;
      });
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map(function (e) {
        return e;
      });
    } else {
      obj.span = [];
    }
    obj.leading_comments = message.leadingComments;
    obj.trailing_comments = message.trailingComments;
    if (message.leadingDetachedComments) {
      obj.leading_detached_comments = message.leadingDetachedComments.map(function (e) {
        return e;
      });
    } else {
      obj.leading_detached_comments = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return SourceCodeInfo_Location.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return SourceCodeInfo_Location.decode(message.value);
  },
  toProto: function toProto(message) {
    return SourceCodeInfo_Location.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Location",
      value: SourceCodeInfo_Location.encode(message).finish()
    };
  }
};
exports.SourceCodeInfo_Location = SourceCodeInfo_Location;
function createBaseGeneratedCodeInfo() {
  return {
    annotation: []
  };
}
var GeneratedCodeInfo = {
  typeUrl: "/google.protobuf.GeneratedCodeInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator35 = _createForOfIteratorHelper(message.annotation),
      _step35;
    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        var v = _step35.value;
        GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$annotation;
    var message = createBaseGeneratedCodeInfo();
    message.annotation = ((_object$annotation = object.annotation) === null || _object$annotation === void 0 ? void 0 : _object$annotation.map(function (e) {
      return GeneratedCodeInfo_Annotation.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      annotation: Array.isArray(object === null || object === void 0 ? void 0 : object.annotation) ? object.annotation.map(function (e) {
        return GeneratedCodeInfo_Annotation.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map(function (e) {
        return e ? GeneratedCodeInfo_Annotation.toAmino(e) : undefined;
      });
    } else {
      obj.annotation = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GeneratedCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GeneratedCodeInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return GeneratedCodeInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.GeneratedCodeInfo",
      value: GeneratedCodeInfo.encode(message).finish()
    };
  }
};
exports.GeneratedCodeInfo = GeneratedCodeInfo;
function createBaseGeneratedCodeInfo_Annotation() {
  return {
    path: [],
    sourceFile: "",
    begin: 0,
    end: 0
  };
}
var GeneratedCodeInfo_Annotation = {
  typeUrl: "/google.protobuf.Annotation",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    writer.uint32(10).fork();
    var _iterator36 = _createForOfIteratorHelper(message.path),
      _step36;
    try {
      for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
        var v = _step36.value;
        writer.int32(v);
      }
    } catch (err) {
      _iterator36.e(err);
    } finally {
      _iterator36.f();
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
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
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
  fromPartial: function fromPartial(object) {
    var _object$path2, _object$sourceFile, _object$begin, _object$end4;
    var message = createBaseGeneratedCodeInfo_Annotation();
    message.path = ((_object$path2 = object.path) === null || _object$path2 === void 0 ? void 0 : _object$path2.map(function (e) {
      return e;
    })) || [];
    message.sourceFile = (_object$sourceFile = object.sourceFile) !== null && _object$sourceFile !== void 0 ? _object$sourceFile : "";
    message.begin = (_object$begin = object.begin) !== null && _object$begin !== void 0 ? _object$begin : 0;
    message.end = (_object$end4 = object.end) !== null && _object$end4 !== void 0 ? _object$end4 : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      path: Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map(function (e) {
        return e;
      }) : [],
      sourceFile: object.source_file,
      begin: object.begin,
      end: object.end
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.path) {
      obj.path = message.path.map(function (e) {
        return e;
      });
    } else {
      obj.path = [];
    }
    obj.source_file = message.sourceFile;
    obj.begin = message.begin;
    obj.end = message.end;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return GeneratedCodeInfo_Annotation.fromAmino(object.value);
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return GeneratedCodeInfo_Annotation.decode(message.value);
  },
  toProto: function toProto(message) {
    return GeneratedCodeInfo_Annotation.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/google.protobuf.Annotation",
      value: GeneratedCodeInfo_Annotation.encode(message).finish()
    };
  }
};
exports.GeneratedCodeInfo_Annotation = GeneratedCodeInfo_Annotation;