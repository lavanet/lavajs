import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";
import { BinaryReader, BinaryWriter } from "../../../../binary";
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
    pubKey: Any.fromPartial({}),
    local: undefined,
    ledger: undefined,
    multi: undefined,
    offline: undefined
  };
}
export const Record = {
  typeUrl: "/cosmos.crypto.keyring.v1.Record",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
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
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
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
  fromPartial(object) {
    var _object$name;
    const message = createBaseRecord();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.local = object.local !== undefined && object.local !== null ? Record_Local.fromPartial(object.local) : undefined;
    message.ledger = object.ledger !== undefined && object.ledger !== null ? Record_Ledger.fromPartial(object.ledger) : undefined;
    message.multi = object.multi !== undefined && object.multi !== null ? Record_Multi.fromPartial(object.multi) : undefined;
    message.offline = object.offline !== undefined && object.offline !== null ? Record_Offline.fromPartial(object.offline) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      name: object.name,
      pubKey: object !== null && object !== void 0 && object.pub_key ? Any.fromAmino(object.pub_key) : undefined,
      local: object !== null && object !== void 0 && object.local ? Record_Local.fromAmino(object.local) : undefined,
      ledger: object !== null && object !== void 0 && object.ledger ? Record_Ledger.fromAmino(object.ledger) : undefined,
      multi: object !== null && object !== void 0 && object.multi ? Record_Multi.fromAmino(object.multi) : undefined,
      offline: object !== null && object !== void 0 && object.offline ? Record_Offline.fromAmino(object.offline) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
    obj.local = message.local ? Record_Local.toAmino(message.local) : undefined;
    obj.ledger = message.ledger ? Record_Ledger.toAmino(message.ledger) : undefined;
    obj.multi = message.multi ? Record_Multi.toAmino(message.multi) : undefined;
    obj.offline = message.offline ? Record_Offline.toAmino(message.offline) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Record.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Record",
      value: Record.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Record.decode(message.value);
  },
  toProto(message) {
    return Record.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Record",
      value: Record.encode(message).finish()
    };
  }
};
function createBaseRecord_Local() {
  return {
    privKey: Any.fromPartial({}),
    privKeyType: ""
  };
}
export const Record_Local = {
  typeUrl: "/cosmos.crypto.keyring.v1.Local",
  encode(message, writer = BinaryWriter.create()) {
    if (message.privKey !== undefined) {
      Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.privKeyType !== "") {
      writer.uint32(18).string(message.privKeyType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Local();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privKey = Any.decode(reader, reader.uint32());
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
  fromPartial(object) {
    var _object$privKeyType;
    const message = createBaseRecord_Local();
    message.privKey = object.privKey !== undefined && object.privKey !== null ? Any.fromPartial(object.privKey) : undefined;
    message.privKeyType = (_object$privKeyType = object.privKeyType) !== null && _object$privKeyType !== void 0 ? _object$privKeyType : "";
    return message;
  },
  fromAmino(object) {
    return {
      privKey: object !== null && object !== void 0 && object.priv_key ? Any.fromAmino(object.priv_key) : undefined,
      privKeyType: object.priv_key_type
    };
  },
  toAmino(message) {
    const obj = {};
    obj.priv_key = message.privKey ? Any.toAmino(message.privKey) : undefined;
    obj.priv_key_type = message.privKeyType;
    return obj;
  },
  fromAminoMsg(object) {
    return Record_Local.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Local",
      value: Record_Local.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Record_Local.decode(message.value);
  },
  toProto(message) {
    return Record_Local.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Local",
      value: Record_Local.encode(message).finish()
    };
  }
};
function createBaseRecord_Ledger() {
  return {
    path: BIP44Params.fromPartial({})
  };
}
export const Record_Ledger = {
  typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
  encode(message, writer = BinaryWriter.create()) {
    if (message.path !== undefined) {
      BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Ledger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = BIP44Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseRecord_Ledger();
    message.path = object.path !== undefined && object.path !== null ? BIP44Params.fromPartial(object.path) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      path: object !== null && object !== void 0 && object.path ? BIP44Params.fromAmino(object.path) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.path = message.path ? BIP44Params.toAmino(message.path) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return Record_Ledger.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Ledger",
      value: Record_Ledger.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Record_Ledger.decode(message.value);
  },
  toProto(message) {
    return Record_Ledger.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
      value: Record_Ledger.encode(message).finish()
    };
  }
};
function createBaseRecord_Multi() {
  return {};
}
export const Record_Multi = {
  typeUrl: "/cosmos.crypto.keyring.v1.Multi",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseRecord_Multi();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return Record_Multi.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Multi",
      value: Record_Multi.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Record_Multi.decode(message.value);
  },
  toProto(message) {
    return Record_Multi.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Multi",
      value: Record_Multi.encode(message).finish()
    };
  }
};
function createBaseRecord_Offline() {
  return {};
}
export const Record_Offline = {
  typeUrl: "/cosmos.crypto.keyring.v1.Offline",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Offline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseRecord_Offline();
    return message;
  },
  fromAmino(_) {
    return {};
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return Record_Offline.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Offline",
      value: Record_Offline.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Record_Offline.decode(message.value);
  },
  toProto(message) {
    return Record_Offline.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.crypto.keyring.v1.Offline",
      value: Record_Offline.encode(message).finish()
    };
  }
};