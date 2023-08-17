import { BinaryReader, BinaryWriter } from "../../../binary";
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
export const ModuleDescriptor = {
  typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
  encode(message, writer = BinaryWriter.create()) {
    if (message.goImport !== "") {
      writer.uint32(10).string(message.goImport);
    }
    for (const v of message.usePackage) {
      PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.canMigrateFrom) {
      MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$goImport, _object$usePackage, _object$canMigrateFro;
    const message = createBaseModuleDescriptor();
    message.goImport = (_object$goImport = object.goImport) !== null && _object$goImport !== void 0 ? _object$goImport : "";
    message.usePackage = ((_object$usePackage = object.usePackage) === null || _object$usePackage === void 0 ? void 0 : _object$usePackage.map(e => PackageReference.fromPartial(e))) || [];
    message.canMigrateFrom = ((_object$canMigrateFro = object.canMigrateFrom) === null || _object$canMigrateFro === void 0 ? void 0 : _object$canMigrateFro.map(e => MigrateFromInfo.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      goImport: object.go_import,
      usePackage: Array.isArray(object === null || object === void 0 ? void 0 : object.use_package) ? object.use_package.map(e => PackageReference.fromAmino(e)) : [],
      canMigrateFrom: Array.isArray(object === null || object === void 0 ? void 0 : object.can_migrate_from) ? object.can_migrate_from.map(e => MigrateFromInfo.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.go_import = message.goImport;
    if (message.usePackage) {
      obj.use_package = message.usePackage.map(e => e ? PackageReference.toAmino(e) : undefined);
    } else {
      obj.use_package = [];
    }
    if (message.canMigrateFrom) {
      obj.can_migrate_from = message.canMigrateFrom.map(e => e ? MigrateFromInfo.toAmino(e) : undefined);
    } else {
      obj.can_migrate_from = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ModuleDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ModuleDescriptor",
      value: ModuleDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ModuleDescriptor.decode(message.value);
  },
  toProto(message) {
    return ModuleDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
      value: ModuleDescriptor.encode(message).finish()
    };
  }
};
function createBasePackageReference() {
  return {
    name: "",
    revision: 0
  };
}
export const PackageReference = {
  typeUrl: "/cosmos.app.v1alpha1.PackageReference",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.revision !== 0) {
      writer.uint32(16).uint32(message.revision);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackageReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$name, _object$revision;
    const message = createBasePackageReference();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.revision = (_object$revision = object.revision) !== null && _object$revision !== void 0 ? _object$revision : 0;
    return message;
  },
  fromAmino(object) {
    return {
      name: object.name,
      revision: object.revision
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.revision = message.revision;
    return obj;
  },
  fromAminoMsg(object) {
    return PackageReference.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PackageReference",
      value: PackageReference.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return PackageReference.decode(message.value);
  },
  toProto(message) {
    return PackageReference.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.PackageReference",
      value: PackageReference.encode(message).finish()
    };
  }
};
function createBaseMigrateFromInfo() {
  return {
    module: ""
  };
}
export const MigrateFromInfo = {
  typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateFromInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromPartial(object) {
    var _object$module;
    const message = createBaseMigrateFromInfo();
    message.module = (_object$module = object.module) !== null && _object$module !== void 0 ? _object$module : "";
    return message;
  },
  fromAmino(object) {
    return {
      module: object.module
    };
  },
  toAmino(message) {
    const obj = {};
    obj.module = message.module;
    return obj;
  },
  fromAminoMsg(object) {
    return MigrateFromInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MigrateFromInfo",
      value: MigrateFromInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MigrateFromInfo.decode(message.value);
  },
  toProto(message) {
    return MigrateFromInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
      value: MigrateFromInfo.encode(message).finish()
    };
  }
};