import { Spec } from "./spec";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseSpecAddProposal() {
  return {
    title: "",
    description: "",
    specs: []
  };
}
export const SpecAddProposal = {
  typeUrl: "/lavanet.lava.spec.SpecAddProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.specs) {
      Spec.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpecAddProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.specs.push(Spec.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$specs;
    const message = createBaseSpecAddProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.specs = ((_object$specs = object.specs) === null || _object$specs === void 0 ? void 0 : _object$specs.map(e => Spec.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      title: object.title,
      description: object.description,
      specs: Array.isArray(object === null || object === void 0 ? void 0 : object.specs) ? object.specs.map(e => Spec.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.specs) {
      obj.specs = message.specs.map(e => e ? Spec.toAmino(e) : undefined);
    } else {
      obj.specs = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return SpecAddProposal.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return SpecAddProposal.decode(message.value);
  },
  toProto(message) {
    return SpecAddProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.spec.SpecAddProposal",
      value: SpecAddProposal.encode(message).finish()
    };
  }
};