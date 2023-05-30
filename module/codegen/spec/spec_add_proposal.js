import { Spec } from "./spec";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
function createBaseSpecAddProposal() {
  return {
    title: "",
    description: "",
    specs: []
  };
}
export const SpecAddProposal = {
  encode(message, writer = _m0.Writer.create()) {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object) {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      specs: Array.isArray(object === null || object === void 0 ? void 0 : object.specs) ? object.specs.map(e => Spec.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.specs) {
      obj.specs = message.specs.map(e => e ? Spec.toJSON(e) : undefined);
    } else {
      obj.specs = [];
    }
    return obj;
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$specs;
    const message = createBaseSpecAddProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.specs = ((_object$specs = object.specs) === null || _object$specs === void 0 ? void 0 : _object$specs.map(e => Spec.fromPartial(e))) || [];
    return message;
  }
};