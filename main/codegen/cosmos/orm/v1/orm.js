"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableDescriptor = exports.SingletonDescriptor = exports.SecondaryIndexDescriptor = exports.PrimaryKeyDescriptor = void 0;
var _binary = require("../../../binary");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** TableDescriptor describes an ORM table. */

/** TableDescriptor describes an ORM table. */

/** PrimaryKeyDescriptor describes a table primary key. */

/** PrimaryKeyDescriptor describes a table primary key. */

/** PrimaryKeyDescriptor describes a table secondary index. */

/** PrimaryKeyDescriptor describes a table secondary index. */

/** TableDescriptor describes an ORM singleton table which has at most one instance. */

/** TableDescriptor describes an ORM singleton table which has at most one instance. */

function createBaseTableDescriptor() {
  return {
    primaryKey: PrimaryKeyDescriptor.fromPartial({}),
    index: [],
    id: 0
  };
}
var TableDescriptor = {
  typeUrl: "/cosmos.orm.v1.TableDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.primaryKey !== undefined) {
      PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.index),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.id !== 0) {
      writer.uint32(24).uint32(message.id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTableDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primaryKey = PrimaryKeyDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.index.push(SecondaryIndexDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$index, _object$id;
    var message = createBaseTableDescriptor();
    message.primaryKey = object.primaryKey !== undefined && object.primaryKey !== null ? PrimaryKeyDescriptor.fromPartial(object.primaryKey) : undefined;
    message.index = ((_object$index = object.index) === null || _object$index === void 0 ? void 0 : _object$index.map(function (e) {
      return SecondaryIndexDescriptor.fromPartial(e);
    })) || [];
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      primaryKey: object !== null && object !== void 0 && object.primary_key ? PrimaryKeyDescriptor.fromAmino(object.primary_key) : undefined,
      index: Array.isArray(object === null || object === void 0 ? void 0 : object.index) ? object.index.map(function (e) {
        return SecondaryIndexDescriptor.fromAmino(e);
      }) : [],
      id: object.id
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.primary_key = message.primaryKey ? PrimaryKeyDescriptor.toAmino(message.primaryKey) : undefined;
    if (message.index) {
      obj.index = message.index.map(function (e) {
        return e ? SecondaryIndexDescriptor.toAmino(e) : undefined;
      });
    } else {
      obj.index = [];
    }
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return TableDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/TableDescriptor",
      value: TableDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return TableDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return TableDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.v1.TableDescriptor",
      value: TableDescriptor.encode(message).finish()
    };
  }
};
exports.TableDescriptor = TableDescriptor;
function createBasePrimaryKeyDescriptor() {
  return {
    fields: "",
    autoIncrement: false
  };
}
var PrimaryKeyDescriptor = {
  typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.autoIncrement === true) {
      writer.uint32(16).bool(message.autoIncrement);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePrimaryKeyDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;
        case 2:
          message.autoIncrement = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fields, _object$autoIncrement;
    var message = createBasePrimaryKeyDescriptor();
    message.fields = (_object$fields = object.fields) !== null && _object$fields !== void 0 ? _object$fields : "";
    message.autoIncrement = (_object$autoIncrement = object.autoIncrement) !== null && _object$autoIncrement !== void 0 ? _object$autoIncrement : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      fields: object.fields,
      autoIncrement: object.auto_increment
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.fields = message.fields;
    obj.auto_increment = message.autoIncrement;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return PrimaryKeyDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/PrimaryKeyDescriptor",
      value: PrimaryKeyDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return PrimaryKeyDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return PrimaryKeyDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.v1.PrimaryKeyDescriptor",
      value: PrimaryKeyDescriptor.encode(message).finish()
    };
  }
};
exports.PrimaryKeyDescriptor = PrimaryKeyDescriptor;
function createBaseSecondaryIndexDescriptor() {
  return {
    fields: "",
    id: 0,
    unique: false
  };
}
var SecondaryIndexDescriptor = {
  typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.unique === true) {
      writer.uint32(24).bool(message.unique);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSecondaryIndexDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.unique = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$fields2, _object$id2, _object$unique;
    var message = createBaseSecondaryIndexDescriptor();
    message.fields = (_object$fields2 = object.fields) !== null && _object$fields2 !== void 0 ? _object$fields2 : "";
    message.id = (_object$id2 = object.id) !== null && _object$id2 !== void 0 ? _object$id2 : 0;
    message.unique = (_object$unique = object.unique) !== null && _object$unique !== void 0 ? _object$unique : false;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      fields: object.fields,
      id: object.id,
      unique: object.unique
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.fields = message.fields;
    obj.id = message.id;
    obj.unique = message.unique;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return SecondaryIndexDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SecondaryIndexDescriptor",
      value: SecondaryIndexDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return SecondaryIndexDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return SecondaryIndexDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.v1.SecondaryIndexDescriptor",
      value: SecondaryIndexDescriptor.encode(message).finish()
    };
  }
};
exports.SecondaryIndexDescriptor = SecondaryIndexDescriptor;
function createBaseSingletonDescriptor() {
  return {
    id: 0
  };
}
var SingletonDescriptor = {
  typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseSingletonDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$id3;
    var message = createBaseSingletonDescriptor();
    message.id = (_object$id3 = object.id) !== null && _object$id3 !== void 0 ? _object$id3 : 0;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      id: object.id
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return SingletonDescriptor.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SingletonDescriptor",
      value: SingletonDescriptor.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return SingletonDescriptor.decode(message.value);
  },
  toProto: function toProto(message) {
    return SingletonDescriptor.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.orm.v1.SingletonDescriptor",
      value: SingletonDescriptor.encode(message).finish()
    };
  }
};
exports.SingletonDescriptor = SingletonDescriptor;