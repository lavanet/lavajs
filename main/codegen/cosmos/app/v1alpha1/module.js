"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PackageReference = exports.ModuleDescriptor = exports.MigrateFromInfo = void 0;
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** ModuleDescriptor describes an app module. */

/** ModuleDescriptor describes an app module. */

/** PackageReference is a reference to a protobuf package used by a module. */

/** PackageReference is a reference to a protobuf package used by a module. */

/**
 * MigrateFromInfo is information on a module version that a newer module
 * can migrate from.
 */

/**
 * MigrateFromInfo is information on a module version that a newer module
 * can migrate from.
 */

function createBaseModuleDescriptor() {
  return {
    goImport: "",
    usePackage: [],
    canMigrateFrom: []
  };
}
var ModuleDescriptor = {
  typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.goImport !== "") {
      writer.uint32(10).string(message.goImport);
    }
    var _iterator = _createForOfIteratorHelper(message.usePackage),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.canMigrateFrom),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        MigrateFromInfo.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModuleDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.goImport = reader.string();
          break;
        case 2:
          message.usePackage.push(PackageReference.decode(reader, reader.uint32()));
          break;
        case 3:
          message.canMigrateFrom.push(MigrateFromInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$goImport, _object$usePackage, _object$canMigrateFro;
    var message = createBaseModuleDescriptor();
    message.goImport = (_object$goImport = object.goImport) !== null && _object$goImport !== void 0 ? _object$goImport : "";
    message.usePackage = ((_object$usePackage = object.usePackage) === null || _object$usePackage === void 0 ? void 0 : _object$usePackage.map(function (e) {
      return PackageReference.fromPartial(e);
    })) || [];
    message.canMigrateFrom = ((_object$canMigrateFro = object.canMigrateFrom) === null || _object$canMigrateFro === void 0 ? void 0 : _object$canMigrateFro.map(function (e) {
      return MigrateFromInfo.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      goImport: object.go_import,
      usePackage: Array.isArray(object === null || object === void 0 ? void 0 : object.use_package) ? object.use_package.map(function (e) {
        return PackageReference.fromAmino(e);
      }) : [],
      canMigrateFrom: Array.isArray(object === null || object === void 0 ? void 0 : object.can_migrate_from) ? object.can_migrate_from.map(function (e) {
        return MigrateFromInfo.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.go_import = message.goImport;
    if (message.usePackage) {
      obj.use_package = message.usePackage.map(function (e) {
        return e ? PackageReference.toAmino(e) : undefined;
      });
    } else {
      obj.use_package = [];
    }
    if (message.canMigrateFrom) {
      obj.can_migrate_from = message.canMigrateFrom.map(function (e) {
        return e ? MigrateFromInfo.toAmino(e) : undefined;
      });
    } else {
      obj.can_migrate_from = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return ModuleDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ModuleDescriptor",
      value: ModuleDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return ModuleDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return ModuleDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
      value: ModuleDescriptor.encode(message).finish()
    };
  }
};
exports.ModuleDescriptor = ModuleDescriptor;
function createBasePackageReference() {
  return {
    name: "",
    revision: 0
  };
}
var PackageReference = {
  typeUrl: "/cosmos.app.v1alpha1.PackageReference",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.revision !== 0) {
      writer.uint32(16).uint32(message.revision);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePackageReference();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.revision = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name, _object$revision;
    var message = createBasePackageReference();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.revision = (_object$revision = object.revision) !== null && _object$revision !== void 0 ? _object$revision : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      revision: object.revision
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj.revision = message.revision;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PackageReference.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PackageReference",
      value: PackageReference.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PackageReference.decode(message.value);
  },
  toProto: function toProto(message) {
    return PackageReference.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.PackageReference",
      value: PackageReference.encode(message).finish()
    };
  }
};
exports.PackageReference = PackageReference;
function createBaseMigrateFromInfo() {
  return {
    module: ""
  };
}
var MigrateFromInfo = {
  typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMigrateFromInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$module;
    var message = createBaseMigrateFromInfo();
    message.module = (_object$module = object.module) !== null && _object$module !== void 0 ? _object$module : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      module: object.module
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.module = message.module;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return MigrateFromInfo.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MigrateFromInfo",
      value: MigrateFromInfo.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return MigrateFromInfo.decode(message.value);
  },
  toProto: function toProto(message) {
    return MigrateFromInfo.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
      value: MigrateFromInfo.encode(message).finish()
    };
  }
};
exports.MigrateFromInfo = MigrateFromInfo;