import { BinaryReader, BinaryWriter } from "../../../binary";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */

/** ParameterChangeProposal defines a proposal to change one or more parameters. */

/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */

/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */

function createBaseParameterChangeProposal() {
  return {
    title: "",
    description: "",
    changes: []
  };
}
export const ParameterChangeProposal = {
  typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
  encode(message, writer = BinaryWriter.create()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.changes) {
      ParamChange.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameterChangeProposal();
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
          message.changes.push(ParamChange.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$title, _object$description, _object$changes;
    const message = createBaseParameterChangeProposal();
    message.title = (_object$title = object.title) !== null && _object$title !== void 0 ? _object$title : "";
    message.description = (_object$description = object.description) !== null && _object$description !== void 0 ? _object$description : "";
    message.changes = ((_object$changes = object.changes) === null || _object$changes === void 0 ? void 0 : _object$changes.map(e => ParamChange.fromPartial(e))) || [];
    return message;
  },
  fromAmino(object) {
    return {
      title: object.title,
      description: object.description,
      changes: Array.isArray(object === null || object === void 0 ? void 0 : object.changes) ? object.changes.map(e => ParamChange.fromAmino(e)) : []
    };
  },
  toAmino(message) {
    const obj = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? ParamChange.toAmino(e) : undefined);
    } else {
      obj.changes = [];
    }
    return obj;
  },
  fromAminoMsg(object) {
    return ParameterChangeProposal.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ParameterChangeProposal",
      value: ParameterChangeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ParameterChangeProposal.decode(message.value);
  },
  toProto(message) {
    return ParameterChangeProposal.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
      value: ParameterChangeProposal.encode(message).finish()
    };
  }
};
function createBaseParamChange() {
  return {
    subspace: "",
    key: "",
    value: ""
  };
}
export const ParamChange = {
  typeUrl: "/cosmos.params.v1beta1.ParamChange",
  encode(message, writer = BinaryWriter.create()) {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    var _object$subspace, _object$key, _object$value;
    const message = createBaseParamChange();
    message.subspace = (_object$subspace = object.subspace) !== null && _object$subspace !== void 0 ? _object$subspace : "";
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : "";
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : "";
    return message;
  },
  fromAmino(object) {
    return {
      subspace: object.subspace,
      key: object.key,
      value: object.value
    };
  },
  toAmino(message) {
    const obj = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object) {
    return ParamChange.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/ParamChange",
      value: ParamChange.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return ParamChange.decode(message.value);
  },
  toProto(message) {
    return ParamChange.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.params.v1beta1.ParamChange",
      value: ParamChange.encode(message).finish()
    };
  }
};