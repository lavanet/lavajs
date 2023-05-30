import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
    primaryKey: undefined,
    index: [],
    id: 0
  };
}
export const TableDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.primaryKey !== undefined) {
      PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.index) {
      SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(24).uint32(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      primaryKey: isSet(object.primaryKey) ? PrimaryKeyDescriptor.fromJSON(object.primaryKey) : undefined,
      index: Array.isArray(object === null || object === void 0 ? void 0 : object.index) ? object.index.map(e => SecondaryIndexDescriptor.fromJSON(e)) : [],
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.primaryKey !== undefined && (obj.primaryKey = message.primaryKey ? PrimaryKeyDescriptor.toJSON(message.primaryKey) : undefined);
    if (message.index) {
      obj.index = message.index.map(e => e ? SecondaryIndexDescriptor.toJSON(e) : undefined);
    } else {
      obj.index = [];
    }
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },
  fromPartial(object) {
    var _object$index, _object$id;
    const message = createBaseTableDescriptor();
    message.primaryKey = object.primaryKey !== undefined && object.primaryKey !== null ? PrimaryKeyDescriptor.fromPartial(object.primaryKey) : undefined;
    message.index = ((_object$index = object.index) === null || _object$index === void 0 ? void 0 : _object$index.map(e => SecondaryIndexDescriptor.fromPartial(e))) || [];
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : 0;
    return message;
  }
};
function createBasePrimaryKeyDescriptor() {
  return {
    fields: "",
    autoIncrement: false
  };
}
export const PrimaryKeyDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.autoIncrement === true) {
      writer.uint32(16).bool(message.autoIncrement);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrimaryKeyDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      autoIncrement: isSet(object.autoIncrement) ? Boolean(object.autoIncrement) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.fields !== undefined && (obj.fields = message.fields);
    message.autoIncrement !== undefined && (obj.autoIncrement = message.autoIncrement);
    return obj;
  },
  fromPartial(object) {
    var _object$fields, _object$autoIncrement;
    const message = createBasePrimaryKeyDescriptor();
    message.fields = (_object$fields = object.fields) !== null && _object$fields !== void 0 ? _object$fields : "";
    message.autoIncrement = (_object$autoIncrement = object.autoIncrement) !== null && _object$autoIncrement !== void 0 ? _object$autoIncrement : false;
    return message;
  }
};
function createBaseSecondaryIndexDescriptor() {
  return {
    fields: "",
    id: 0,
    unique: false
  };
}
export const SecondaryIndexDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondaryIndexDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      unique: isSet(object.unique) ? Boolean(object.unique) : false
    };
  },
  toJSON(message) {
    const obj = {};
    message.fields !== undefined && (obj.fields = message.fields);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.unique !== undefined && (obj.unique = message.unique);
    return obj;
  },
  fromPartial(object) {
    var _object$fields2, _object$id2, _object$unique;
    const message = createBaseSecondaryIndexDescriptor();
    message.fields = (_object$fields2 = object.fields) !== null && _object$fields2 !== void 0 ? _object$fields2 : "";
    message.id = (_object$id2 = object.id) !== null && _object$id2 !== void 0 ? _object$id2 : 0;
    message.unique = (_object$unique = object.unique) !== null && _object$unique !== void 0 ? _object$unique : false;
    return message;
  }
};
function createBaseSingletonDescriptor() {
  return {
    id: 0
  };
}
export const SingletonDescriptor = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingletonDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  fromJSON(object) {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },
  fromPartial(object) {
    var _object$id3;
    const message = createBaseSingletonDescriptor();
    message.id = (_object$id3 = object.id) !== null && _object$id3 !== void 0 ? _object$id3 : 0;
    return message;
  }
};