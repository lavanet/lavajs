"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Record_Offline = exports.Record_Multi = exports.Record_Local = exports.Record_Ledger = exports.Record = void 0;
var _any = require("../../../../google/protobuf/any");
var _hd = require("../../hd/v1/hd");
var _binary = require("../../../../binary");
/** Record is used for representing a key in the keyring. */

/** Record is used for representing a key in the keyring. */

/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */

/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */

/** Ledger item */

/** Ledger item */

/** Multi item */

/** Multi item */

/** Offline item */

/** Offline item */

function createBaseRecord() {
  return {
    name: "",
    pubKey: _any.Any.fromPartial({}),
    local: undefined,
    ledger: undefined,
    multi: undefined,
    offline: undefined
  };
}
var Record = {
  typeUrl: "/cosmos.crypto.keyring.v1.Record",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pubKey !== undefined) {
      _any.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.local !== undefined) {
      Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
    }
    if (message.ledger !== undefined) {
      Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
    }
    if (message.offline !== undefined) {
      Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.pubKey = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.local = Record_Local.decode(reader, reader.uint32());
          break;
        case 4:
          message.ledger = Record_Ledger.decode(reader, reader.uint32());
          break;
        case 5:
          message.multi = Record_Multi.decode(reader, reader.uint32());
          break;
        case 6:
          message.offline = Record_Offline.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$name;
    var message = createBaseRecord();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? _any.Any.fromPartial(object.pubKey) : undefined;
    message.local = object.local !== undefined && object.local !== null ? Record_Local.fromPartial(object.local) : undefined;
    message.ledger = object.ledger !== undefined && object.ledger !== null ? Record_Ledger.fromPartial(object.ledger) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? Record_Multi.fromPartial(object.multi) : undefined;
    message.offline = object.offline !== undefined && object.offline !== null ? Record_Offline.fromPartial(object.offline) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      name: object.name,
      pubKey: object !== null && object !== void 0 && object.pub_key ? _any.Any.fromAmino(object.pub_key) : undefined,
      local: object !== null && object !== void 0 && object.local ? Record_Local.fromAmino(object.local) : undefined,
      ledger: object !== null && object !== void 0 && object.ledger ? Record_Ledger.fromAmino(object.ledger) : undefined,
      multi: object !== null && object !== void 0 && object.multi ? Record_Multi.fromAmino(object.multi) : undefined,
      offline: object !== null && object !== void 0 && object.offline ? Record_Offline.fromAmino(object.offline) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.name = message.name;
    obj.pub_key = message.pubKey ? _any.Any.toAmino(message.pubKey) : undefined;
    obj.local = message.local ? Record_Local.toAmino(message.local) : undefined;
    obj.ledger = message.ledger ? Record_Ledger.toAmino(message.ledger) : undefined;
    obj.multi = message.multi ? Record_Multi.toAmino(message.multi) : undefined;
    obj.offline = message.offline ? Record_Offline.toAmino(message.offline) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Record.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Record",
      value: Record.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Record.decode(message.value);
  },
  toProto: function toProto(message) {
    return Record.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Record",
      value: Record.encode(message).finish()
    };
  }
};
exports.Record = Record;
function createBaseRecord_Local() {
  return {
    privKey: _any.Any.fromPartial({}),
    privKeyType: ""
  };
}
var Record_Local = {
  typeUrl: "/cosmos.crypto.keyring.v1.Local",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.privKey !== undefined) {
      _any.Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.privKeyType !== "") {
      writer.uint32(18).string(message.privKeyType);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRecord_Local();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privKey = _any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.privKeyType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$privKeyType;
    var message = createBaseRecord_Local();
    message.privKey = object.privKey !== undefined && object.privKey !== null ? _any.Any.fromPartial(object.privKey) : undefined;
    message.privKeyType = (_object$privKeyType = object.privKeyType) !== null && _object$privKeyType !== void 0 ? _object$privKeyType : "";
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      privKey: object !== null && object !== void 0 && object.priv_key ? _any.Any.fromAmino(object.priv_key) : undefined,
      privKeyType: object.priv_key_type
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.priv_key = message.privKey ? _any.Any.toAmino(message.privKey) : undefined;
    obj.priv_key_type = message.privKeyType;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Record_Local.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Local",
      value: Record_Local.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Record_Local.decode(message.value);
  },
  toProto: function toProto(message) {
    return Record_Local.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Local",
      value: Record_Local.encode(message).finish()
    };
  }
};
exports.Record_Local = Record_Local;
function createBaseRecord_Ledger() {
  return {
    path: _hd.BIP44Params.fromPartial({})
  };
}
var Record_Ledger = {
  typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.path !== undefined) {
      _hd.BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRecord_Ledger();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = _hd.BIP44Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseRecord_Ledger();
    message.path = object.path !== undefined && object.path !== null ? _hd.BIP44Params.fromPartial(object.path) : undefined;
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      path: object !== null && object !== void 0 && object.path ? _hd.BIP44Params.fromAmino(object.path) : undefined
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.path = message.path ? _hd.BIP44Params.toAmino(message.path) : undefined;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Record_Ledger.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Ledger",
      value: Record_Ledger.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Record_Ledger.decode(message.value);
  },
  toProto: function toProto(message) {
    return Record_Ledger.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
      value: Record_Ledger.encode(message).finish()
    };
  }
};
exports.Record_Ledger = Record_Ledger;
function createBaseRecord_Multi() {
  return {};
}
var Record_Multi = {
  typeUrl: "/cosmos.crypto.keyring.v1.Multi",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRecord_Multi();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseRecord_Multi();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Record_Multi.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Multi",
      value: Record_Multi.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Record_Multi.decode(message.value);
  },
  toProto: function toProto(message) {
    return Record_Multi.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Multi",
      value: Record_Multi.encode(message).finish()
    };
  }
};
exports.Record_Multi = Record_Multi;
function createBaseRecord_Offline() {
  return {};
}
var Record_Offline = {
  typeUrl: "/cosmos.crypto.keyring.v1.Offline",
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRecord_Offline();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseRecord_Offline();
    return message;
  },
  fromAmino: function fromAmino(_) {
    return {};
  },
  toAmino: function toAmino(_) {
    var obj = {};
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return Record_Offline.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Offline",
      value: Record_Offline.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return Record_Offline.decode(message.value);
  },
  toProto: function toProto(message) {
    return Record_Offline.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Offline",
      value: Record_Offline.encode(message).finish()
    };
  }
};
exports.Record_Offline = Record_Offline;