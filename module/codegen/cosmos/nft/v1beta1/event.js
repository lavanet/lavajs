import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventSend is emitted on Msg/Send */

/** EventSend is emitted on Msg/Send */

/** EventMint is emitted on Mint */

/** EventMint is emitted on Mint */

/** EventBurn is emitted on Burn */

/** EventBurn is emitted on Burn */

function createBaseEventSend() {
  return {
    classId: "",
    id: "",
    sender: "",
    receiver: ""
  };
}
export const EventSend = {
  typeUrl: "/cosmos.nft.v1beta1.EventSend",
  encode(message, writer = BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$classId, _object$id, _object$sender, _object$receiver;
    const message = createBaseEventSend();
    message.classId = (_object$classId = object.classId) !== null && _object$classId !== void 0 ? _object$classId : "";
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.sender = (_object$sender = object.sender) !== null && _object$sender !== void 0 ? _object$sender : "";
    message.receiver = (_object$receiver = object.receiver) !== null && _object$receiver !== void 0 ? _object$receiver : "";
    return message;
  },
  fromAmino(object) {
    return {
      classId: object.class_id,
      id: object.id,
      sender: object.sender,
      receiver: object.receiver
    };
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(object) {
    return EventSend.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventSend",
      value: EventSend.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return EventSend.decode(message.value);
  },
  toProto(message) {
    return EventSend.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventSend",
      value: EventSend.encode(message).finish()
    };
  }
};
function createBaseEventMint() {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
export const EventMint = {
  typeUrl: "/cosmos.nft.v1beta1.EventMint",
  encode(message, writer = BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$classId2, _object$id2, _object$owner;
    const message = createBaseEventMint();
    message.classId = (_object$classId2 = object.classId) !== null && _object$classId2 !== void 0 ? _object$classId2 : "";
    message.id = (_object$id2 = object.id) !== null && _object$id2 !== void 0 ? _object$id2 : "";
    message.owner = (_object$owner = object.owner) !== null && _object$owner !== void 0 ? _object$owner : "";
    return message;
  },
  fromAmino(object) {
    return {
      classId: object.class_id,
      id: object.id,
      owner: object.owner
    };
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object) {
    return EventMint.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventMint",
      value: EventMint.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return EventMint.decode(message.value);
  },
  toProto(message) {
    return EventMint.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventMint",
      value: EventMint.encode(message).finish()
    };
  }
};
function createBaseEventBurn() {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
export const EventBurn = {
  typeUrl: "/cosmos.nft.v1beta1.EventBurn",
  encode(message, writer = BinaryWriter.create()) {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$classId3, _object$id3, _object$owner2;
    const message = createBaseEventBurn();
    message.classId = (_object$classId3 = object.classId) !== null && _object$classId3 !== void 0 ? _object$classId3 : "";
    message.id = (_object$id3 = object.id) !== null && _object$id3 !== void 0 ? _object$id3 : "";
    message.owner = (_object$owner2 = object.owner) !== null && _object$owner2 !== void 0 ? _object$owner2 : "";
    return message;
  },
  fromAmino(object) {
    return {
      classId: object.class_id,
      id: object.id,
      owner: object.owner
    };
  },
  toAmino(message) {
    const obj = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object) {
    return EventBurn.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/EventBurn",
      value: EventBurn.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return EventBurn.decode(message.value);
  },
  toProto(message) {
    return EventBurn.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventBurn",
      value: EventBurn.encode(message).finish()
    };
  }
};