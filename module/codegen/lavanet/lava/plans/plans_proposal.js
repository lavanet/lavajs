import { Plan } from "./plan";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBasePlansAddProposal() {
  return {
    title: "",
    description: "",
    plans: []
  };
}
export const PlansAddProposal = {
  typeUrl: "/lavanet.lava.plans.PlansAddProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.plans) {
      Plan.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlansAddProposal();
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
          message.plans.push(Plan.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$plans;
    const message = createBasePlansAddProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.plans = ((_object$plans = object.plans) === null || _object$plans === void 0 ? void 0 : _object$plans.map(e => Plan.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      title: object.title,
      description: object.description,
      plans: Array.isArray(object === null || object === void 0 ? void 0 : object.plans) ? object.plans.map(e => Plan.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? Plan.toAmino(e) : undefined);
    } else {
      obj.plans = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return PlansAddProposal.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return PlansAddProposal.decode(message.value);
  },
  toProto(message) {
    return PlansAddProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.plans.PlansAddProposal",
      value: PlansAddProposal.encode(message).finish()
    };
  }
};
function createBasePlansDelProposal() {
  return {
    title: "",
    description: "",
    plans: []
  };
}
export const PlansDelProposal = {
  typeUrl: "/lavanet.lava.plans.PlansDelProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.plans) {
      writer.uint32(26).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlansDelProposal();
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
          message.plans.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$title2, _object$description2, _object$plans2;
    const message = createBasePlansDelProposal();
    message.title = (_object$title2 = object.title) !== null && _object$title2 !== void 0 ? _object$title2 : "";
    message.description = (_object$description2 = object.description) !== null && _object$description2 !== void 0 ? _object$description2 : "";
    message.plans = ((_object$plans2 = object.plans) === null || _object$plans2 === void 0 ? void 0 : _object$plans2.map(e => e)) || [];
    return message;
  },
  fromAmino(object) {
    return {
      title: object.title,
      description: object.description,
      plans: Array.isArray(object === null || object === void 0 ? void 0 : object.plans) ? object.plans.map(e => e) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.plans) {
      obj.plans = message.plans.map(e => e);
    } else {
      obj.plans = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return PlansDelProposal.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return PlansDelProposal.decode(message.value);
  },
  toProto(message) {
    return PlansDelProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/lavanet.lava.plans.PlansDelProposal",
      value: PlansDelProposal.encode(message).finish()
    };
  }
};