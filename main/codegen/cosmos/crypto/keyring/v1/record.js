"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Record_Offline = exports.Record_Multi = exports.Record_Local = exports.Record_Ledger = exports.Record = void 0;
var _any = require("../../../../google/protobuf/any");
var _hd = require("../../hd/v1/hd");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    pubKey: undefined,
    local: undefined,
    ledger: undefined,
    multi: undefined,
    offline: undefined
  };
}
var Record = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
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
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
      pubKey: (0, _helpers.isSet)(object.pubKey) ? _any.Any.fromJSON(object.pubKey) : undefined,
      local: (0, _helpers.isSet)(object.local) ? Record_Local.fromJSON(object.local) : undefined,
      ledger: (0, _helpers.isSet)(object.ledger) ? Record_Ledger.fromJSON(object.ledger) : undefined,
      multi: (0, _helpers.isSet)(object.multi) ? Record_Multi.fromJSON(object.multi) : undefined,
      offline: (0, _helpers.isSet)(object.offline) ? Record_Offline.fromJSON(object.offline) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.name !== undefined && (obj.name = message.name);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? _any.Any.toJSON(message.pubKey) : undefined);
    message.local !== undefined && (obj.local = message.local ? Record_Local.toJSON(message.local) : undefined);
    message.ledger !== undefined && (obj.ledger = message.ledger ? Record_Ledger.toJSON(message.ledger) : undefined);
    message.multi !== undefined && (obj.multi = message.multi ? Record_Multi.toJSON(message.multi) : undefined);
    message.offline !== undefined && (obj.offline = message.offline ? Record_Offline.toJSON(message.offline) : undefined);
    return obj;
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
  }
};
exports.Record = Record;
function createBaseRecord_Local() {
  return {
    privKey: undefined,
    privKeyType: ""
  };
}
var Record_Local = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.privKey !== undefined) {
      _any.Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.privKeyType !== "") {
      writer.uint32(18).string(message.privKeyType);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      privKey: (0, _helpers.isSet)(object.privKey) ? _any.Any.fromJSON(object.privKey) : undefined,
      privKeyType: (0, _helpers.isSet)(object.privKeyType) ? String(object.privKeyType) : ""
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.privKey !== undefined && (obj.privKey = message.privKey ? _any.Any.toJSON(message.privKey) : undefined);
    message.privKeyType !== undefined && (obj.privKeyType = message.privKeyType);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var _object$privKeyType;
    var message = createBaseRecord_Local();
    message.privKey = object.privKey !== undefined && object.privKey !== null ? _any.Any.fromPartial(object.privKey) : undefined;
    message.privKeyType = (_object$privKeyType = object.privKeyType) !== null && _object$privKeyType !== void 0 ? _object$privKeyType : "";
    return message;
  }
};
exports.Record_Local = Record_Local;
function createBaseRecord_Ledger() {
  return {
    path: undefined
  };
}
var Record_Ledger = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.path !== undefined) {
      _hd.BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(object) {
    return {
      path: (0, _helpers.isSet)(object.path) ? _hd.BIP44Params.fromJSON(object.path) : undefined
    };
  },
  toJSON: function toJSON(message) {
    var obj = {};
    message.path !== undefined && (obj.path = message.path ? _hd.BIP44Params.toJSON(message.path) : undefined);
    return obj;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseRecord_Ledger();
    message.path = object.path !== undefined && object.path !== null ? _hd.BIP44Params.fromPartial(object.path) : undefined;
    return message;
  }
};
exports.Record_Ledger = Record_Ledger;
function createBaseRecord_Multi() {
  return {};
}
var Record_Multi = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseRecord_Multi();
    return message;
  }
};
exports.Record_Multi = Record_Multi;
function createBaseRecord_Offline() {
  return {};
}
var Record_Offline = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON: function fromJSON(_) {
    return {};
  },
  toJSON: function toJSON(_) {
    var obj = {};
    return obj;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseRecord_Offline();
    return message;
  }
};
exports.Record_Offline = Record_Offline;