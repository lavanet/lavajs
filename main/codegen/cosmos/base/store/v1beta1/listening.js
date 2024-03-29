"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreKVPair = void 0;
var _binary = require("../../../../binary");
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */

/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 * 
 * Since: cosmos-sdk 0.43
 */

function createBaseStoreKVPair() {
  return {
    storeKey: "",
    "delete": false,
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
var StoreKVPair = {
  typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair",
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _binary.BinaryWriter.create();
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message["delete"] === true) {
      writer.uint32(16).bool(message["delete"]);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStoreKVPair();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message["delete"] = reader.bool();
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$storeKey, _object$delete, _object$key, _object$value;
    var message = createBaseStoreKVPair();
    message.storeKey = (_object$storeKey = object.storeKey) !== null && _object$storeKey !== void 0 ? _object$storeKey : "";
    message["delete"] = (_object$delete = object["delete"]) !== null && _object$delete !== void 0 ? _object$delete : false;
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : new Uint8Array();
    return message;
  },
  fromAmino: function fromAmino(object) {
    return {
      storeKey: object.store_key,
      "delete": object["delete"],
      key: object.key,
      value: object.value
    };
  },
  toAmino: function toAmino(message) {
    var obj = {};
    obj.store_key = message.storeKey;
    obj["delete"] = message["delete"];
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg: function fromAminoMsg(object) {
    return StoreKVPair.fromAmino(object.value);
  },
  toAminoMsg: function toAminoMsg(message) {
    return {
      type: "cosmos-sdk/StoreKVPair",
      value: StoreKVPair.toAmino(message)
    };
  },
  fromProtoMsg: function fromProtoMsg(message) {
    return StoreKVPair.decode(message.value);
  },
  toProto: function toProto(message) {
    return StoreKVPair.encode(message).finish();
  },
  toProtoMsg: function toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair",
      value: StoreKVPair.encode(message).finish()
    };
  }
};
exports.StoreKVPair = StoreKVPair;