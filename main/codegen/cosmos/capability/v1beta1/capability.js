"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Owner = exports.CapabilityOwners = exports.Capability = void 0;
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var Capability = {
  typeUrl: "/cosmos.capability.v1beta1.Capability",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCapability();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var message = createBaseCapability();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      index: BigInt(object.index)
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.index = message.index ? message.index.toString() : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Capability.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Capability",
      value: Capability.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Capability.decode(message.value);
  },
  toProto: function toProto(message) {
    return Capability.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.Capability",
      value: Capability.encode(message).finish()
    };
  }
};
exports.Capability = Capability;
function createBaseOwner() {
  return {
    module: "",
    name: ""
  };
}
var Owner = {
  typeUrl: "/cosmos.capability.v1beta1.Owner",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseOwner();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$module, _object$name;
    var message = createBaseOwner();
    message.module = (_object$module = object.module) !== null && _object$module !== void 0 ? _object$module : "";
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      module: object.module,
      name: object.name
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.module = message.module;
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Owner.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Owner",
      value: Owner.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Owner.decode(message.value);
  },
  toProto: function toProto(message) {
    return Owner.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.Owner",
      value: Owner.encode(message).finish()
    };
  }
};
exports.Owner = Owner;
function createBaseCapabilityOwners() {
  return {
    owners: []
  };
}
var CapabilityOwners = {
  typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    var _iterator = _createForOfIteratorHelper(message.owners),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Owner.encode(v, writer.uint32(10).fork()).ldelim();
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
    var message = createBaseCapabilityOwners();
    while (reader.pos < end) {
      var tag = reader.uint32();
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
  fromPartial: function fromPartial(object) {
    var _object$owners;
    var message = createBaseCapabilityOwners();
    message.owners = ((_object$owners = object.owners) === null || _object$owners === void 0 ? void 0 : _object$owners.map(function (e) {
      return Owner.fromPartial(e);
    })) || [];
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners) ? object.owners.map(function (e) {
        return Owner.fromAmino(e);
      }) : []
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    if (message.owners) {
      obj.owners = message.owners.map(function (e) {
        return e ? Owner.toAmino(e) : undefined;
      });
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return CapabilityOwners.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CapabilityOwners",
      value: CapabilityOwners.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return CapabilityOwners.decode(message.value);
  },
  toProto: function toProto(message) {
    return CapabilityOwners.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
      value: CapabilityOwners.encode(message).finish()
    };
  }
};
exports.CapabilityOwners = CapabilityOwners;