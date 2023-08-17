import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */

/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */

/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */

/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */

/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */

/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */

function createBaseCommitInfo() {
  return {
    version: BigInt(0),
    storeInfos: []
  };
}
export const CommitInfo = {
  typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(message.version);
    }
    for (const v of message.storeInfos) {
      StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$storeInfos;
    const message = createBaseCommitInfo();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.storeInfos = ((_object$storeInfos = object.storeInfos) === null || _object$storeInfos === void 0 ? void 0 : _object$storeInfos.map(e => StoreInfo.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      version: BigInt(object.version),
      storeInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.store_infos) ? object.store_infos.map(e => StoreInfo.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.version = message.version ? message.version.toString() : undefined;
    if (message.storeInfos) {
      obj.store_infos = message.storeInfos.map(e => e ? StoreInfo.toAmino(e) : undefined);
    } else {
      obj.store_infos = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return CommitInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommitInfo",
      value: CommitInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CommitInfo.decode(message.value);
  },
  toProto(message) {
    return CommitInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.CommitInfo",
      value: CommitInfo.encode(message).finish()
    };
  }
};
function createBaseStoreInfo() {
  return {
    name: "",
    commitId: CommitID.fromPartial({})
  };
}
export const StoreInfo = {
  typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
  encode(message, writer = BinaryWriter.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.commitId !== undefined) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.commitId = CommitID.decode(reader, reader.uint32());
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
    const message = createBaseStoreInfo();
    message.name = (_object$name = object.name) !== null && _object$name !== void 0 ? _object$name : "";
    message.commitId = object.commitId !== undefined && object.commitId !== null ? CommitID.fromPartial(object.commitId) : undefined;
    return message;
  },
  fromAmino(object) {
    return {
      name: object.name,
      commitId: object !== null && object !== void 0 && object.commit_id ? CommitID.fromAmino(object.commit_id) : undefined
    };
  },
  toAmino(message) {
    const obj = {};
    obj.name = message.name;
    obj.commit_id = message.commitId ? CommitID.toAmino(message.commitId) : undefined;
    return obj;
  },
  fromAminoMsg(object) {
    return StoreInfo.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/StoreInfo",
      value: StoreInfo.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return StoreInfo.decode(message.value);
  },
  toProto(message) {
    return StoreInfo.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.StoreInfo",
      value: StoreInfo.encode(message).finish()
    };
  }
};
function createBaseCommitID() {
  return {
    version: BigInt(0),
    hash: new Uint8Array()
  };
}
export const CommitID = {
  typeUrl: "/cosmos.base.store.v1beta1.CommitID",
  encode(message, writer = BinaryWriter.create()) {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).int64(message.version);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$hash;
    const message = createBaseCommitID();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.hash = (_object$hash = object.hash) !== null && _object$hash !== void 0 ? _object$hash : new Uint8Array();
    return message;
  },
  fromAmino(object) {
    return {
      version: BigInt(object.version),
      hash: object.hash
    };
  },
  toAmino(message) {
    const obj = {};
    obj.version = message.version ? message.version.toString() : undefined;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object) {
    return CommitID.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/CommitID",
      value: CommitID.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CommitID.decode(message.value);
  },
  toProto(message) {
    return CommitID.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.base.store.v1beta1.CommitID",
      value: CommitID.encode(message).finish()
    };
  }
};